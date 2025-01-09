import SimpleLightbox from 'simplelightbox';
import fetchApiData from './js/pixabay-api';
import generateGalleryMarkup from './js/render-functions';

let page = 1, totalHits = 0, lastQuery = '';

const perPage = 10,
  loadMoreGap = 44,
  formElement = document.querySelector('.js-form'),
  loaderElement = document.querySelector('.js-loader'),
  loadMoreBtn = document.querySelector('.load-more'),
  galleryContainer = document.querySelector('.js-gallery'),
  simpleLightboxInstance = new SimpleLightbox('.js-gallery a.gallery-link', {
    captionDelay: 250,
    overlayOpacity: 0.8,
  }),
  submitHandler = event => {
    event.preventDefault();
    loaderElement.style.display = 'flex';
    var query = event.target.elements['user-query'].value;
    lastQuery = query

    fetchApiData(query, page, perPage)
      .then(response => {
        let images = response.images;
        galleryContainer.innerHTML = generateGalleryMarkup(images);
        simpleLightboxInstance.refresh();
        if (response.total > perPage) {
          loadMoreBtn.style.display = 'block';
        }
      })
      .finally(() => {
        formElement.reset();
        loaderElement.style.display = 'none';
      });
  },
  loadMoreHandler = async () => {
    page += 1;
    fetchApiData(lastQuery, page, perPage)
      .then(response => {
        let images = response.images;
        galleryContainer.innerHTML += generateGalleryMarkup(images);
        simpleLightboxInstance.refresh();
        let totalShownElements = page * perPage;
        if (totalShownElements >= response.total) {
          loadMoreBtn.style.display = 'none';
        }
      })
      .finally(() => {
        formElement.reset();
        loaderElement.style.display = 'none';
        setTimeout(() => {
          const galleryCards = document.querySelectorAll('.gallery-card');
          const lastGalleryCard = galleryCards[galleryCards.length - 1];
          const height = lastGalleryCard.offsetHeight;

          window.scrollBy({
            top: height * 2 - loadMoreGap,
            behavior: 'smooth',
          });
        }, 500);
      });
  }

formElement.addEventListener('submit', submitHandler);

loadMoreBtn.addEventListener('click', loadMoreHandler);
