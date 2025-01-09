import{a as d,i as S,S as w}from"./assets/vendor-Bi0bPHun.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(e){if(e.ep)return;e.ep=!0;const l=a(e);fetch(e.href,l)}})();const q="https://pixabay.com/api/";d.defaults.baseURL=q;const p=(t,r,a)=>{const o=new URLSearchParams({key:"48134597-284d567e7eafb9cda31965081",q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:a});return d.get(`https://pixabay.com/api/?${o}`).then(e=>{if(e.status!=200)throw console.log(e),new Error(e.status);return console.log(typeof e),console.log(e),e.data}).then(e=>e.total?{images:e.hits,total:e.totalHits}:(S.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[])).catch(e=>(console.log(e),[]))},m=t=>t.reduce((r,{webformatURL:a,largeImageURL:o,tags:e,likes:l,views:s,comments:L,downloads:b})=>r+`<li class="gallery-card">
              <a class="gallery-link" href="${o}">
                <img class="gallery-image" src="${a}" alt="${e}" loading="lazy" />
                <ul class="gallery-card-info">
                  <li>
                    <p>Likes</p>
                    <p>${l}</p>
                  </li>
                  <li>
                    <p>Views</p>
                    <p>${s}</p>
                  </li>
                  <li>
                    <p>Comments</p>
                    <p>${L}</p>
                  </li>
                  <li>
                    <p>Downloads</p>
                    <p>${b}</p>
                  </li>
                </ul>
              </a>
            </li>`,"");let i=1,g="";const n=10,P=44,u=document.querySelector(".js-form"),c=document.querySelector(".js-loader"),y=document.querySelector(".load-more"),f=document.querySelector(".js-gallery"),h=new w(".js-gallery a.gallery-link",{captionDelay:250,overlayOpacity:.8}),v=t=>{t.preventDefault(),c.style.display="flex";var r=t.target.elements["user-query"].value;g=r,p(r,i,n).then(a=>{let o=a.images;f.innerHTML=m(o),h.refresh(),a.total>n&&(y.style.display="block")}).finally(()=>{u.reset(),c.style.display="none"})},E=async()=>{i+=1,p(g,i,n).then(t=>{let r=t.images;f.innerHTML+=m(r),h.refresh(),i*n>=t.total&&(y.style.display="none")}).finally(()=>{u.reset(),c.style.display="none",setTimeout(()=>{const t=document.querySelectorAll(".gallery-card"),a=t[t.length-1].offsetHeight;window.scrollBy({top:a*2-P,behavior:"smooth"})},500)})};u.addEventListener("submit",v);y.addEventListener("click",E);
//# sourceMappingURL=index.js.map
