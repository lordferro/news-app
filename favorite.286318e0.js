function e(e){return e&&e.__esModule?e.default:e}function t({publishedDate:e,sectionName:t,articleTitle:n,shortDescription:r,urlOriginalArticle:c,imgUrl:o,articleId:s}){let a=r;if(r.length>110){const e=r.indexOf(" ",110);e>0&&(a=r.slice(0,e)+"...")}let i=n;if(n.length>58){const e=n.indexOf(" ",44);e>0&&(i=n.slice(0,e)+"...")}let l="Add to favorite";const d=localStorage.getItem("favorites");if(d){const e=JSON.parse(d),t=Object.keys(e);for(const n of t){const t=e[`${n}`],{id:r,_id:c,slug_name:o}=t;s===(r||c||o)&&(l="Remove from favorites")}}return`\n      <article class="card" id="${s}">\n        <div class="card__img-container">\n          <img class="card__img" src="${o}" alt="${n}">\n          <p class="card__section-name">\n            ${t}\n          </p>\n          <button class="card__btn" type="button">\n           ${l}\n          </button>\n        </div>\n        <h2 class="card__title">\n          ${i}\n        </h2>\n        <p class="card__text">${a}</p>\n        <div class="card__bottom">\n          <span class="card__date">\n            ${e}\n          </span>\n          <a class="card__read-more-search"\n            href="${c}" target="_blank"\n          >\n            Read more\n          </a>\n        </div>\n      </article>\n    `}document.querySelector(".search_mob_btn"),document.querySelector(".search_form"),document.querySelector(".search_input"),document.querySelector(".search_btn");var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};function r(e){return function(e){return[c(e.getDate()),c(e.getMonth()+1),e.getFullYear()].join("/")}(new Date(e))}function c(e){return e.toString().padStart(2,"0")}function o({resultsArr:e,clickedArticleId:t,evt:n}){const r="favorites";e.forEach((e=>{if(e.id==t||e.slug_name==t||e._id==t){let c=localStorage.getItem(r);if(c=c?JSON.parse(c):{},c[t])return delete c[`${t}`],n.target.textContent.contains="Remove from favorites",n.target.textContent="Add to favorites",void localStorage.setItem(r,JSON.stringify(c));c[t]=e,localStorage.setItem(r,JSON.stringify(c))}}))}const s=document.querySelector(".news_container"),a=document.querySelector("body"),i=(document.querySelector(".search_form"),document.querySelector(".without-news_container"));let l="";const d=document.querySelector(".switch_input"),u=document.querySelector(".switch_input--mobile"),h=new class{renderTheme(){const e=this.getBoolean();e||(this.themeSwitcherEl.setAttribute("checked",!0),this.mobileSwitcherEl.setAttribute("checked",!0),this.changeBodyClass(this.Theme.DARK,this.Theme.LIGHT),"index"===this.currentPage&&(this.dataSelected.style.color="#F4F4F4")),e&&(this.changeBodyClass(this.Theme.LIGHT,this.Theme.DARK),"index"===this.currentPage&&(this.dataSelected.style.color="#111321"))}changeBodyClass(e,t){document.body.classList.add(e),document.body.classList.remove(t)}getBoolean(){const e=localStorage.getItem(this.THEME_STORAGE_KEY);return e===this.Theme.LIGHT||!e}constructor(t,r){e(n)(this,"onThemeToggle",(()=>{const e=this.getBoolean();e&&localStorage.setItem(this.THEME_STORAGE_KEY,this.Theme.DARK),e||localStorage.setItem(this.THEME_STORAGE_KEY,this.Theme.LIGHT),this.renderTheme()})),this.themeSwitcherEl=t,this.mobileSwitcherEl=r,this.dataSelected=document.querySelector(".data_selected"),this.currentPage=document.querySelector("body").getAttribute("data-current-page"),this.THEME_STORAGE_KEY="theme",this.Theme={LIGHT:"light",DARK:"dark"}}}(d,u);u.addEventListener("change",h.onThemeToggle),d.addEventListener("change",h.onThemeToggle),h.renderTheme(),a.addEventListener("click",(function(e){if("card__btn"===e.target.className){const t=e.target.closest(".card")?.id||e.target.closest(".card")?.slug_name||e.target.closest(".card")?._id,n=m;e.target.textContent.contains="Add to favorites",e.target.textContent="Remove from favorites",o({resultsArr:n,clickedArticleId:t,evt:e})}}));let m=[];!function(){console.log("1");const e=localStorage.getItem("favorites");if(e){const n=JSON.parse(e),c=Object.keys(n);for(const e of c){const c=n[`${e}`];m.push(c);const{abstract:o,published_date:s,pub_date:a,section:i,section_name:d,title:u,headline:h,media:g,multimedia:_,url:f,web_url:S,id:b,_id:y,slug_name:T}=c,p=b||y||T,v=r(s||a),E=i||d,A=u||h.main,w=o,I=f||S;let O="";try{p===b&&(O=g[0]["media-metadata"][2].url),p===T&&(O=_[2].url),p===y&&(O="https://www.nytimes.com/"+_[0].url)}catch(e){O="https://t4.ftcdn.net/jpg/00/89/55/15/240_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"}l+=t({publishedDate:v,sectionName:E,articleTitle:A,shortDescription:w,urlOriginalArticle:I,imgUrl:O,articleId:p})}s.innerHTML=l}else i.style.display="flex"}();
//# sourceMappingURL=favorite.286318e0.js.map
