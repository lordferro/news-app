!function(){function e(e){return e&&e.__esModule?e.default:e}var t=document.querySelector(".search_mob_btn"),r=document.querySelector(".search_form"),n=document.querySelector(".search_input"),o=document.querySelector(".search_btn");t.addEventListener("click",(function(){t.style.display="none",r.style.display="block",n.style.display="block",o.style.display="block"}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var c={};function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,r){t&&l(e.prototype,t);r&&l(e,r);return e};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var u=function(){"use strict";function t(r,n){var o=this;e(a)(this,t),e(i)(this,"onThemeToggle",(function(){var e=o.getBoolean();e&&localStorage.setItem(o.THEME_STORAGE_KEY,o.Theme.DARK),e||localStorage.setItem(o.THEME_STORAGE_KEY,o.Theme.LIGHT),o.renderTheme()})),this.themeSwitcherEl=r,this.mobileSwitcherEl=n,this.THEME_STORAGE_KEY="theme",this.Theme={LIGHT:"light",DARK:"dark"}}return e(c)(t,[{key:"renderTheme",value:function(){var e=this.getBoolean();e||(this.themeSwitcherEl.setAttribute("checked",!0),this.mobileSwitcherEl.setAttribute("checked",!0),this.changeBodyClass(this.Theme.DARK,this.Theme.LIGHT)),e&&this.changeBodyClass(this.Theme.LIGHT,this.Theme.DARK)}},{key:"changeBodyClass",value:function(e,t){document.body.classList.add(e),document.body.classList.remove(t)}},{key:"getBoolean",value:function(){var e=localStorage.getItem(this.THEME_STORAGE_KEY);return e===this.Theme.LIGHT||!e}}]),t}(),s=document.querySelector("body").getAttribute("data-current-page");"index"===s?document.querySelector('.nav_link[href="/index.html"]').classList.add("nav_link--current"):"favorite"===s?document.querySelector('.nav_link[href="/favorite.html"]').classList.add("nav_link--current"):"read"===s&&document.querySelector('.nav_link[href="/read.html"]').classList.add("nav_link--current");document.querySelector(".news_container"),document.querySelector("body"),document.querySelector(".search_form");var d=document.querySelector(".switch_input"),h=document.querySelector(".switch_input--mobile"),m=new u(d,h);h.addEventListener("change",m.onThemeToggle),d.addEventListener("change",m.onThemeToggle),m.renderTheme()}();
//# sourceMappingURL=read.ba0f1195.js.map
