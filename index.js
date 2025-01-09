import{i as p,S as f}from"./assets/vendor-De63neY_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y=l=>{const o=new URLSearchParams({key:"48134597-284d567e7eafb9cda31965081",q:l.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o.toString()}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.total?t.hits:(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[])).catch(t=>(console.log(t),[]))},d=l=>l.reduce((o,{webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:c,downloads:u})=>o+`<li class="gallery-card">
              <a class="gallery-link" href="${a}">
                <img class="gallery-image" src="${t}" alt="${e}" loading="lazy" />
                <ul class="gallery-card-info">
                  <li>
                    <p>Likes</p>
                    <p>${r}</p>
                  </li>
                  <li>
                    <p>Views</p>
                    <p>${i}</p>
                  </li>
                  <li>
                    <p>Comments</p>
                    <p>${c}</p>
                  </li>
                  <li>
                    <p>Downloads</p>
                    <p>${u}</p>
                  </li>
                </ul>
              </a>
            </li>`,""),n=document.querySelector(".js-form"),s=document.querySelector(".js-loader"),m=document.querySelector(".js-gallery"),g=new f(".js-gallery a.gallery-link",{captionDelay:250,overlayOpacity:.8}),h=l=>{l.preventDefault(),s.style.display="flex",y(l.target.elements["user-query"].value).then(o=>{m.innerHTML=d(o),g.refresh()}).finally(()=>{n.reset(),s.style.display="none"})};n.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
