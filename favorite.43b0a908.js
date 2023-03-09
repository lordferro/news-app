!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e){var t=e.publishedDate,r=e.sectionName,a=e.articleTitle,n=e.shortDescription,o=e.urlOriginalArticle,c=e.imgUrl,i=e.articleId,l=n;if(n.length>110){var s=n.indexOf(" ",110);s>0&&(l=n.slice(0,s)+"...")}var d=a;if(a.length>58){var u=a.indexOf(" ",44);u>0&&(d=a.slice(0,u)+"...")}var h="Add to favorite",m=localStorage.getItem("favorites");if(m){var v=JSON.parse(m),g=Object.keys(v),f=!0,_=!1,y=void 0;try{for(var S,b=g[Symbol.iterator]();!(f=(S=b.next()).done);f=!0){var p=S.value,w=v["".concat(p)],T=w.id,E=w._id,A=w.slug_name;i===(T||E||A)&&(h="Remove from favorites")}}catch(e){_=!0,y=e}finally{try{f||null==b.return||b.return()}finally{if(_)throw y}}}return'\n      <article class="card" id="'.concat(i,'">\n        <div class="card__img-container">\n          <img class="card__img" src="').concat(c,'" alt="').concat(a,'">\n          <p class="card__section-name">\n            ').concat(r,'\n          </p>\n          <p class="card__alredyRead">Already read ✓</p>\n          <button class="card__btn" type="button">\n           ').concat(h,"\n          </button>\n          ").concat('<svg class="fav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>','\n        </div>\n        <h2 class="card__title">\n          ').concat(d,'\n        </h2>\n        <p class="card__text">').concat(l,'</p>\n        <div class="card__bottom">\n          <span class="card__date">\n            ').concat(t,'\n          </span>\n          <a class="card__read-more-search"\n            href="').concat(o,'" target="_blank"\n          >\n            Read more\n          </a>\n        </div>\n      </article>\n    ')}document.querySelector(".search_mob_btn"),document.querySelector(".search_form"),document.querySelector(".search_input"),document.querySelector(".search_btn");var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var c=function(){"use strict";function t(a,n){var c=this;e(r)(this,t),e(o)(this,"onThemeToggle",(function(){var e=c.getBoolean();e&&localStorage.setItem(c.THEME_STORAGE_KEY,c.Theme.DARK),e||localStorage.setItem(c.THEME_STORAGE_KEY,c.Theme.LIGHT),c.renderTheme()})),this.themeSwitcherEl=a,this.mobileSwitcherEl=n,this.dataSelected=document.querySelector(".data_selected"),this.currentPage=document.querySelector("body").getAttribute("data-current-page"),this.THEME_STORAGE_KEY="theme",this.Theme={LIGHT:"light",DARK:"dark"}}return e(a)(t,[{key:"renderTheme",value:function(){var e=this.getBoolean();e||(this.themeSwitcherEl.setAttribute("checked",!0),this.mobileSwitcherEl.setAttribute("checked",!0),this.changeBodyClass(this.Theme.DARK,this.Theme.LIGHT),"index"===this.currentPage&&(this.dataSelected.style.color="#F4F4F4")),e&&(this.changeBodyClass(this.Theme.LIGHT,this.Theme.DARK),"index"===this.currentPage&&(this.dataSelected.style.color="#111321"))}},{key:"changeBodyClass",value:function(e,t){document.body.classList.add(e),document.body.classList.remove(t)}},{key:"getBoolean",value:function(){var e=localStorage.getItem(this.THEME_STORAGE_KEY);return e===this.Theme.LIGHT||!e}}]),t}();function i(e){return function(e){return[l(e.getDate()),l(e.getMonth()+1),e.getFullYear()].join("/")}(new Date(e))}function l(e){return e.toString().padStart(2,"0")}function s(e){var t=e.resultsArr,r=e.clickedArticleId,a=e.evt,n="favorites";t.forEach((function(e){if(e.id==r||e.slug_name==r||e._id==r){var t=localStorage.getItem(n);if((t=t?JSON.parse(t):{})[r])return delete t["".concat(r)],a.target.textContent.contains="Remove from favorites",a.target.textContent="Add to favorites",void localStorage.setItem(n,JSON.stringify(t));t[r]=e,localStorage.setItem(n,JSON.stringify(t))}}))}function d(e){var t=e.resultsArr,r=e.clickedArticleId,a=(e.evt,"read");t.forEach((function(e){if(e.id==r||e.slug_name==r||e._id==r){console.log(e);var t=localStorage.getItem(a);t=t?JSON.parse(t):{},e.dateOfReading=(n=(new Date).getDate(),o=(new Date).getMonth()+1,c=(new Date).getFullYear(),DateOfRead="".concat(n,"/").concat(o,"/").concat(c),DateOfRead),t[r]=e,console.log(e),localStorage.setItem(a,JSON.stringify(t))}var n,o,c}))}var u=document.querySelector(".news_container"),h=document.querySelector("body"),m=document.querySelector(".search_form"),v=document.querySelector(".without-news_container"),g="";m.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.searchQuery.value;localStorage.setItem("searchQueryFromFavorites",t),window.open("index.html","_self")}));var f=document.querySelector(".switch_input"),_=document.querySelector(".switch_input--mobile"),y=new c(f,_);_.addEventListener("change",y.onThemeToggle),f.addEventListener("change",y.onThemeToggle),y.renderTheme(),h.addEventListener("click",(function(e){if("card__btn"===e.target.className){var t,r,a,n=(null===(t=e.target.closest(".card"))||void 0===t?void 0:t.id)||(null===(r=e.target.closest(".card"))||void 0===r?void 0:r.slug_name)||(null===(a=e.target.closest(".card"))||void 0===a?void 0:a._id),o=S;e.target.textContent.contains="Add to favorites",e.target.textContent="Remove from favorites",s({resultsArr:o,clickedArticleId:n,evt:e})}})),h.addEventListener("click",(function(e){if("card__read-more-search"===e.target.className){var t,r,a,n=(null===(t=e.target.closest(".card"))||void 0===t?void 0:t.id)||(null===(r=e.target.closest(".card"))||void 0===r?void 0:r.slug_name)||(null===(a=e.target.closest(".card"))||void 0===a?void 0:a._id),o=S;console.log(e.target.closest(".card").elements(".")),d({resultsArr:o,clickedArticleId:n,evt:e})}}));var S=[];!function(){var e=localStorage.getItem("favorites");if(e){var r=JSON.parse(e),a=Object.keys(r),n=!0,o=!1,c=void 0;try{for(var l,s=a[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var d=l.value,h=r["".concat(d)];S.push(h);var m=h.abstract,f=h.published_date,_=h.pub_date,y=h.section,b=h.section_name,p=h.title,w=h.headline,T=h.media,E=h.multimedia,A=h.url,O=h.web_url,I=h.id,k=h._id,D=h.slug_name,R=I||k||D,x=i(f||_),L=y||b,H=p||w.main,M=m,N=A||O,j="";try{R===I&&(j=T[0]["media-metadata"][2].url),R===D&&(j=E[2].url),R===k&&(j="https://www.nytimes.com/"+E[0].url)}catch(e){j="https://t4.ftcdn.net/jpg/00/89/55/15/240_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"}g+=t({publishedDate:x,sectionName:L,articleTitle:H,shortDescription:M,urlOriginalArticle:N,imgUrl:j,articleId:R})}}catch(e){o=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw c}}u.innerHTML=g}else v.style.display="block"}()}();
//# sourceMappingURL=favorite.43b0a908.js.map
