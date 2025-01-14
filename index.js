import{a as p,i as m,S as w}from"./assets/vendor-Bi0bPHun.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(e){if(e.ep)return;e.ep=!0;const l=a(e);fetch(e.href,l)}})();const q="https://pixabay.com/api/";p.defaults.baseURL=q;const g=(t,r,a)=>{const o=new URLSearchParams({key:"48134597-284d567e7eafb9cda31965081",q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:a});return p.get(`https://pixabay.com/api/?${o}`).then(e=>{if(e.status!=200)throw console.log(e),new Error(e.status);return console.log(typeof e),console.log(e),e.data}).then(e=>e.total?{images:e.hits,total:e.totalHits}:(m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[])).catch(e=>(console.log(e),[]))},f=t=>t.reduce((r,{webformatURL:a,largeImageURL:o,tags:e,likes:l,views:s,comments:b,downloads:S})=>r+`<li class="gallery-card">
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
                    <p>${b}</p>
                  </li>
                  <li>
                    <p>Downloads</p>
                    <p>${S}</p>
                  </li>
                </ul>
              </a>
            </li>`,"");let i=1,h="";const n=15,v=44,d=document.querySelector(".js-form"),c=document.querySelector(".js-loader"),u=document.querySelector(".load-more"),y=document.querySelector(".js-gallery"),L=new w(".js-gallery a.gallery-link",{captionDelay:250,overlayOpacity:.8}),P=t=>{t.preventDefault(),c.style.display="flex";var r=t.target.elements["user-query"].value;h=r,i=1,g(r,i,n).then(a=>{if(a.length==0){y.innerHTML="",u.style.display="none";return}let o=a.images;y.innerHTML=f(o),L.refresh(),u.style.display=a.total>n?"block":"none"}).finally(()=>{d.reset(),c.style.display="none"})},E=async()=>{i+=1,c.style.display="flex",g(h,i,n).then(t=>{let r=t.images;y.innerHTML+=f(r),L.refresh(),i*n>=t.total&&(u.style.display="none",m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}).finally(()=>{d.reset(),setTimeout(()=>{const t=document.querySelectorAll(".gallery-card"),a=t[t.length-1].offsetHeight;c.style.display="none",window.scrollBy({top:a*2-v,behavior:"smooth"})},500)})};d.addEventListener("submit",P);u.addEventListener("click",E);
//# sourceMappingURL=index.js.map
