!function(n){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(i,r,function(t){return n[t]}.bind(null,r));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){var i=e(1);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(i,r);i.locals&&(n.exports=i.locals)},function(n,t,e){(t=n.exports=e(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,500i&display=swap&subset=cyrillic);",""]),t.push([n.i,"* {\r\n  font-family: 'Ubuntu', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(206, 198, 198);\r\n}\r\n\r\n.content {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-top: 100px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  transition: 1s;\r\n}\r\n\r\n.searchBar-container {\r\n  text-align: center;\r\n  height: 2em;\r\n}\r\n\r\n.searchBar {\r\n  padding-left: 10px;\r\n  width: 50%;\r\n  height: 100%;\r\n  margin-top: 5px;\r\n  border-radius: 10px;\r\n  border: 0;\r\n  background-color: rgb(243, 233, 233);\r\n  outline: none;\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n}\r\n\r\n.clip {\r\n  background-color: white;\r\n  width: 250px;\r\n  height: 340px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 10px;\r\n  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n}\r\n\r\n.clip:hover {\r\n  background-color: red;\r\n  transform: translate(10px, 5px);\r\n  box-shadow: -10px 0 10px grey;\r\n}\r\n\r\n.clip-div {\r\n  width: 250px;\r\n  height: 140px;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.link-container a {\r\n  color: black;\r\n  font-size: 15px;\r\n}\r\n\r\n.link-container a:hover {\r\n  color: blue;\r\n}\r\n\r\n.link-container {\r\n  position: relative;\r\n  background-color: rgba(251, 255, 0, 0.822);\r\n  padding: 10px;\r\n  z-index: 1;\r\n  top: -116px;\r\n  width: 92%;\r\n}\r\n\r\n.clip-description {\r\n  width: 220px;\r\n  font-size: 12px;\r\n  font-style: italic;\r\n  overflow: hidden;\r\n}\r\n\r\n.clip-img {\r\n  position: relative;\r\n  z-index: 0;\r\n  width: 250px;\r\n}\r\n\r\n.clip-info {\r\n  font-size: 15px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.clip-info div {\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n  width: 210px;\r\n}\r\n\r\n.clip-icon {\r\n  width: 15px;\r\n  height: 15px;\r\n  float: left;\r\n}\r\n\r\n.pagesContainer {\r\n  margin-top: 60px;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\n.pages {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.nonactive-page, .active-page {\r\n  list-style: none;\r\n  margin-right: 7px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 15px;\r\n  font-size: 10px;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.nonactive-page {\r\n  background-color: white;\r\n  border: 1.5px solid red;\r\n  color: transparent;\r\n}\r\n\r\n.nonactive-page:hover {\r\n  color: black;\r\n}\r\n\r\n.nonactive-page:active {\r\n  background-color: red;\r\n}\r\n\r\n.active-page {\r\n  background-color: red;\r\n  border: 1.5px solid white;\r\n  color: white;\r\n}\r\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var r=(M=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(M))))+" */"),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[e].concat(o).concat([r]).join("\n")}var M;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<n.length;r++){var M=n[r];null!=M[0]&&i[M[0]]||(e&&!M[2]?M[2]=e:e&&(M[2]="("+M[2]+") and ("+e+")"),t.push(M))}},t}},function(n,t,e){var i,r,o={},M=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var i=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}t[n]=i}return t[n]}}(),c=null,u=0,a=[],L=e(4);function l(n,t){for(var e=0;e<n.length;e++){var i=n[e],r=o[i.id];if(r){r.refs++;for(var M=0;M<r.parts.length;M++)r.parts[M](i.parts[M]);for(;M<i.parts.length;M++)r.parts.push(w(i.parts[M],t))}else{var s=[];for(M=0;M<i.parts.length;M++)s.push(w(i.parts[M],t));o[i.id]={id:i.id,refs:1,parts:s}}}}function g(n,t){for(var e=[],i={},r=0;r<n.length;r++){var o=n[r],M=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[M]?i[M].parts.push(s):e.push(i[M]={id:M,parts:[s]})}return e}function N(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=a[a.length-1];if("top"===n.insertAt)i?i.nextSibling?e.insertBefore(t,i.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),a.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,e);e.insertBefore(t,r)}}function j(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=a.indexOf(n);t>=0&&a.splice(t,1)}function d(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var i=function(){0;return e.nc}();i&&(n.attrs.nonce=i)}return T(t,n.attrs),N(n,t),t}function T(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function w(n,t){var e,i,r,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var M=u++;e=c||(c=d(t)),i=x.bind(null,e,M,!1),r=x.bind(null,e,M,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",T(t,n.attrs),N(n,t),t}(t),i=function(n,t,e){var i=e.css,r=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=L(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var M=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(M),s&&URL.revokeObjectURL(s)}.bind(null,e,t),r=function(){j(e),e.href&&URL.revokeObjectURL(e.href)}):(e=d(t),i=function(n,t){var e=t.css,i=t.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){j(e)});return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=M()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=g(n,t);return l(e,t),function(n){for(var i=[],r=0;r<e.length;r++){var M=e[r];(s=o[M.id]).refs--,i.push(s)}n&&l(g(n,t),t);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var D,p=(D=[],function(n,t){return D[n]=t,D.filter(Boolean).join("\n")});function x(n,t,e,i){var r=e?"":i.css;if(n.styleSheet)n.styleSheet.cssText=p(t,r);else{var o=document.createTextNode(r),M=n.childNodes;M[t]&&n.removeChild(M[t]),M.length?n.insertBefore(o,M[t]):n.appendChild(o)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,i=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){"use strict";e.r(t);class i{constructor(n){this.state=n}static extractVideoInfo(n){return n.items.map(n=>n.statistics.viewCount)}async getClipsViewsCount(){const{videoUrl:n}=this.state,t=await fetch(n),e=await t.json();return i.extractVideoInfo(e)}}class r{constructor(n,t){this.state=n,this.countOfClipsPerPage=t}static extractVideoInfo(n){return n.items.map(n=>n.statistics.viewCount)}static async extractClipInfo(n,t){const e=n.items.map(n=>n.id.videoId).join(","),r={videoUrl:""};r.videoUrl=`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyByXP7m96EEVAI2CpA8YsZ8zXnXcnagT6Y&id=${e}&part=snippet,statistics`;const o=new i(r),M=await o.getClipsViewsCount();let s=1;return n.items.map((n,e)=>{e%t==0&&0!==e&&(s+=1);const i=new Date(n.snippet.publishedAt);return{title:n.snippet.title,publishedAt:`${i.getFullYear()}-${i.getMonth()}-${i.getDate()}`,img:n.snippet.thumbnails.medium.url,description:n.snippet.description,videoId:n.id.videoId,channelTitle:n.snippet.channelTitle,viewsCount:M[e],videoPage:s}})}async getClipInfo(){const{url:n}=this.state,t=await fetch(n),e=await t.json();return r.extractClipInfo(e,this.countOfClipsPerPage)}}e(0);var o=class{constructor(n){this.clips=n}render(n=1){const t=document.getElementById("clipsContainer");let e=document.body.querySelector(".pagesContainer");document.body.contains(e)&&document.body.removeChild(e),t.innerHTML="";const i=document.createElement("ul");i.classList.add("content"),i.innerHTML=this.clips.map(t=>t.videoPage===n?`<li class="clip">\n        <div class="clip-div">\n          <img src="${t.img}" class="clip-img"/>\n          <div class="link-container">\n            <a href="https://www.youtube.com/watch?v=${t.videoId}" target="_blank">${t.title}</a>\n          </div>\n        </div>\n        <div class="clip-info">\n          <div><img class="clip-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwLjY3MSA2MC42NzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwLjY3MSA2MC42NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8ZWxsaXBzZSBjeD0iMzAuMzM2IiBjeT0iMTIuMDk3IiByeD0iMTEuOTk3IiByeT0iMTIuMDk3IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTM1LjY0LDMwLjA3OUgyNS4wMzFjLTcuMDIxLDAtMTIuNzE0LDUuNzM5LTEyLjcxNCwxMi44MjF2MTcuNzcxaDM2LjAzN1Y0Mi45ICAgIEM0OC4zNTQsMzUuODE4LDQyLjY2MSwzMC4wNzksMzUuNjQsMzAuMDc5eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />${t.channelTitle}</div>\n          <div><img class="clip-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ4OC4xNTIgNDg4LjE1MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg4LjE1MiA0ODguMTUyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE3Ny44NTQsMjY5LjMxMWMwLTYuMTE1LTQuOTYtMTEuMDY5LTExLjA4LTExLjA2OWgtMzguNjY1Yy02LjExMywwLTExLjA3NCw0Ljk1NC0xMS4wNzQsMTEuMDY5djM4LjY2ICAgIGMwLDYuMTIzLDQuOTYxLDExLjA3OSwxMS4wNzQsMTEuMDc5aDM4LjY2NWM2LjEyLDAsMTEuMDgtNC45NTYsMTEuMDgtMTEuMDc5VjI2OS4zMTFMMTc3Ljg1NCwyNjkuMzExeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0yNzQuNDgzLDI2OS4zMTFjMC02LjExNS00Ljk2MS0xMS4wNjktMTEuMDY5LTExLjA2OWgtMzguNjdjLTYuMTEzLDAtMTEuMDc0LDQuOTU0LTExLjA3NCwxMS4wNjl2MzguNjYgICAgYzAsNi4xMjMsNC45NjEsMTEuMDc5LDExLjA3NCwxMS4wNzloMzguNjdjNi4xMDgsMCwxMS4wNjktNC45NTYsMTEuMDY5LTExLjA3OVYyNjkuMzExeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0zNzEuMTE3LDI2OS4zMTFjMC02LjExNS00Ljk2MS0xMS4wNjktMTEuMDc0LTExLjA2OWgtMzguNjY1Yy02LjEyLDAtMTEuMDgsNC45NTQtMTEuMDgsMTEuMDY5djM4LjY2ICAgIGMwLDYuMTIzLDQuOTYsMTEuMDc5LDExLjA4LDExLjA3OWgzOC42NjVjNi4xMTMsMCwxMS4wNzQtNC45NTYsMTEuMDc0LTExLjA3OVYyNjkuMzExeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0xNzcuODU0LDM2NS45NWMwLTYuMTI1LTQuOTYtMTEuMDc1LTExLjA4LTExLjA3NWgtMzguNjY1Yy02LjExMywwLTExLjA3NCw0Ljk1LTExLjA3NCwxMS4wNzV2MzguNjUzICAgIGMwLDYuMTE5LDQuOTYxLDExLjA3NCwxMS4wNzQsMTEuMDc0aDM4LjY2NWM2LjEyLDAsMTEuMDgtNC45NTYsMTEuMDgtMTEuMDc0VjM2NS45NUwxNzcuODU0LDM2NS45NXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMjc0LjQ4MywzNjUuOTVjMC02LjEyNS00Ljk2MS0xMS4wNzUtMTEuMDY5LTExLjA3NWgtMzguNjdjLTYuMTEzLDAtMTEuMDc0LDQuOTUtMTEuMDc0LDExLjA3NXYzOC42NTMgICAgYzAsNi4xMTksNC45NjEsMTEuMDc0LDExLjA3NCwxMS4wNzRoMzguNjdjNi4xMDgsMCwxMS4wNjktNC45NTYsMTEuMDY5LTExLjA3NFYzNjUuOTV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTM3MS4xMTcsMzY1Ljk1YzAtNi4xMjUtNC45NjEtMTEuMDc1LTExLjA2OS0xMS4wNzVoLTM4LjY3Yy02LjEyLDAtMTEuMDgsNC45NS0xMS4wOCwxMS4wNzV2MzguNjUzICAgIGMwLDYuMTE5LDQuOTYsMTEuMDc0LDExLjA4LDExLjA3NGgzOC42N2M2LjEwOCwwLDExLjA2OS00Ljk1NiwxMS4wNjktMTEuMDc0VjM2NS45NUwzNzEuMTE3LDM2NS45NXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNDQwLjI1NCw1NC4zNTR2NTkuMDVjMCwyNi42OS0yMS42NTIsNDguMTk4LTQ4LjMzOCw0OC4xOThoLTMwLjQ5M2MtMjYuNjg4LDAtNDguNjI3LTIxLjUwOC00OC42MjctNDguMTk4VjU0LjE0MiAgICBoLTEzNy40NHY1OS4yNjJjMCwyNi42OS0yMS45MzgsNDguMTk4LTQ4LjYyMiw0OC4xOThIOTYuMjM1Yy0yNi42ODUsMC00OC4zMzYtMjEuNTA4LTQ4LjMzNi00OC4xOTh2LTU5LjA1ICAgIEMyNC41NzYsNTUuMDU3LDUuNDExLDc0LjM1Niw1LjQxMSw5OC4wNzd2MzQ2LjA2MWMwLDI0LjE2NywxOS41ODgsNDQuMDE1LDQzLjc1NSw0NC4wMTVoMzg5LjgyICAgIGMyNC4xMzEsMCw0My43NTUtMTkuODg5LDQzLjc1NS00NC4wMTVWOTguMDc3QzQ4Mi43NDEsNzQuMzU2LDQ2My41NzcsNTUuMDU3LDQ0MC4yNTQsNTQuMzU0eiBNNDI2LjA5MSw0MjIuNTg4ICAgIGMwLDEwLjQ0NC04LjQ2OCwxOC45MTctMTguOTE2LDE4LjkxN0g4MC4xNDRjLTEwLjQ0OCwwLTE4LjkxNi04LjQ3My0xOC45MTYtMTguOTE3VjI0My44MzVjMC0xMC40NDgsOC40NjctMTguOTIxLDE4LjkxNi0xOC45MjEgICAgaDMyNy4wM2MxMC40NDgsMCwxOC45MTYsOC40NzMsMTguOTE2LDE4LjkyMUw0MjYuMDkxLDQyMi41ODhMNDI2LjA5MSw0MjIuNTg4eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik05Ni4xMjgsMTI5Ljk0NWgzMC4xNjJjOS4xNTUsMCwxNi41NzgtNy40MTIsMTYuNTc4LTE2LjU2N1YxNi41NzNDMTQyLjg2OCw3LjQxNywxMzUuNDQ1LDAsMTI2LjI5LDBIOTYuMTI4ICAgIEM4Ni45NzIsMCw3OS41NSw3LjQxNyw3OS41NSwxNi41NzN2OTYuODA1Qzc5LjU1LDEyMi41MzMsODYuOTcyLDEyOS45NDUsOTYuMTI4LDEyOS45NDV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTM2MS4wMzUsMTI5Ljk0NWgzMC4xNjJjOS4xNDksMCwxNi41NzItNy40MTIsMTYuNTcyLTE2LjU2N1YxNi41NzNDNDA3Ljc3LDcuNDE3LDQwMC4zNDcsMCwzOTEuMTk3LDBoLTMwLjE2MiAgICBjLTkuMTU0LDAtMTYuNTc3LDcuNDE3LTE2LjU3NywxNi41NzN2OTYuODA1QzM0NC40NTgsMTIyLjUzMywzNTEuODgxLDEyOS45NDUsMzYxLjAzNSwxMjkuOTQ1eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />${t.publishedAt}</div>\n          <div><img class="clip-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMS42MjYgNTExLjYyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjYyNiA1MTEuNjI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTUwNS45MTgsMjM2LjExN2MtMjYuNjUxLTQzLjU4Ny02Mi40ODUtNzguNjA5LTEwNy40OTctMTA1LjA2NWMtNDUuMDE1LTI2LjQ1Ny05Mi41NDktMzkuNjg3LTE0Mi42MDgtMzkuNjg3ICAgYy01MC4wNTksMC05Ny41OTUsMTMuMjI1LTE0Mi42MSwzOS42ODdDNjguMTg3LDE1Ny41MDgsMzIuMzU1LDE5Mi41Myw1LjcwOCwyMzYuMTE3QzEuOTAzLDI0Mi43NzgsMCwyNDkuMzQ1LDAsMjU1LjgxOCAgIGMwLDYuNDczLDEuOTAzLDEzLjA0LDUuNzA4LDE5LjY5OWMyNi42NDcsNDMuNTg5LDYyLjQ3OSw3OC42MTQsMTA3LjQ5NSwxMDUuMDY0YzQ1LjAxNSwyNi40Niw5Mi41NTEsMzkuNjgsMTQyLjYxLDM5LjY4ICAgYzUwLjA2LDAsOTcuNTk0LTEzLjE3NiwxNDIuNjA4LTM5LjUzNmM0NS4wMTItMjYuMzYxLDgwLjg1Mi02MS40MzIsMTA3LjQ5Ny0xMDUuMjA4YzMuODA2LTYuNjU5LDUuNzA4LTEzLjIyMyw1LjcwOC0xOS42OTkgICBDNTExLjYyNiwyNDkuMzQ1LDUwOS43MjQsMjQyLjc3OCw1MDUuOTE4LDIzNi4xMTd6IE0xOTQuNTY4LDE1OC4wM2MxNy4wMzQtMTcuMDM0LDM3LjQ0Ny0yNS41NTQsNjEuMjQyLTI1LjU1NCAgIGMzLjgwNSwwLDcuMDQzLDEuMzM2LDkuNzA5LDMuOTk5YzIuNjYyLDIuNjY0LDQsNS45MDEsNCw5LjcwN2MwLDMuODA5LTEuMzM4LDcuMDQ0LTMuOTk0LDkuNzA0ICAgYy0yLjY2MiwyLjY2Ny01LjkwMiwzLjk5OS05LjcwOCwzLjk5OWMtMTYuMzY4LDAtMzAuMzYyLDUuODA4LTQxLjk3MSwxNy40MTZjLTExLjYxMywxMS42MTUtMTcuNDE2LDI1LjYwMy0xNy40MTYsNDEuOTcxICAgYzAsMy44MTEtMS4zMzYsNy4wNDQtMy45OTksOS43MWMtMi42NjcsMi42NjgtNS45MDEsMy45OTktOS43MDcsMy45OTljLTMuODA5LDAtNy4wNDQtMS4zMzQtOS43MS0zLjk5OSAgIGMtMi42NjctMi42NjYtMy45OTktNS45MDMtMy45OTktOS43MUMxNjkuMDE1LDE5NS40ODIsMTc3LjUzNSwxNzUuMDY1LDE5NC41NjgsMTU4LjAzeiBNMzc5Ljg2NywzNDkuMDQgICBjLTM4LjE2NCwyMy4xMi03OS41MTQsMzQuNjg3LTEyNC4wNTQsMzQuNjg3Yy00NC41MzksMC04NS44ODktMTEuNTYtMTI0LjA1MS0zNC42ODdzLTY5LjkwMS01NC4yLTk1LjIxNS05My4yMjIgICBjMjguOTMxLTQ0LjkyMSw2NS4xOS03OC41MTgsMTA4Ljc3Ny0xMDAuNzgzYy0xMS42MSwxOS43OTItMTcuNDE3LDQxLjIwNy0xNy40MTcsNjQuMjM2YzAsMzUuMjE2LDEyLjUxNyw2NS4zMjksMzcuNTQ0LDkwLjM2MiAgIHM1NS4xNTEsMzcuNTQ0LDkwLjM2MiwzNy41NDRjMzUuMjE0LDAsNjUuMzI5LTEyLjUxOCw5MC4zNjItMzcuNTQ0czM3LjU0NS01NS4xNDYsMzcuNTQ1LTkwLjM2MiAgIGMwLTIzLjAyOS01LjgwOC00NC40NDctMTcuNDE5LTY0LjIzNmM0My41ODUsMjIuMjY1LDc5Ljg0Niw1NS44NjUsMTA4Ljc3NiwxMDAuNzgzQzQ0OS43NjcsMjk0Ljg0LDQxOC4wMzEsMzI1LjkxMywzNzkuODY3LDM0OS4wNCAgIHoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />${t.viewsCount}</div>\n          <p class="clip-description">${t.description}</p>\n        </div>\n      </li>`:"").join(""),i.style.visibility="hidden",t.appendChild(i),setTimeout(()=>{i.style.visibility="visible"},10),(e=document.createElement("div")).classList.add("pagesContainer");const r=document.createElement("ul");r.id="ulPages",r.classList.add("pages"),r.innerHTML=1===n?'<li class="active-page" id="active">1</li><li class="nonactive-page" id="choosePage">2</li>':2===n?'<li class="nonactive-page" id="prev">1</li><li class="active-page" id="active">2</li><li class="nonactive-page" id="next">3</li>':`<li class="nonactive-page" id="prevPrev">${n-2}</li><li class="nonactive-page" id="prev">${n-1}</li><li class="active-page" id="active">${n}</li><li class="nonactive-page" id="next">${n+1}</li>`,e.appendChild(r),document.body.appendChild(e)}};async function M(n,t){const e=new r(n,t),i=await e.getClipInfo(),M=new o(i);M.render(),function n(t){const e=document.getElementsByClassName("nonactive-page");Array.from(e).forEach(e=>e.addEventListener("click",()=>{t.render(+e.innerText),n(t)}))}(M)}(new class{constructor(){this.state={url:"https://www.googleapis.com/youtube/v3/search?key=AIzaSyByXP7m96EEVAI2CpA8YsZ8zXnXcnagT6Y&type=video&part=snippet&maxResults=15&q="}}async start(){let n;!function(){const n=document.createElement("section");n.innerHTML='<form class="searchBar-container" id="form"><input id="input" type="search" class="searchBar" placeholder="What do you want to find"></form>',document.body.appendChild(n)}(),function(){const n=document.createElement("section");n.id="clipsContainer",document.body.appendChild(n)}(),n=window.innerWidth<590?1:window.innerWidth<870?2:window.innerWidth<1140?3:4;const t=document.getElementById("form"),e=document.getElementById("input");t.addEventListener("input",()=>{this.state.url="https://www.googleapis.com/youtube/v3/search?key=AIzaSyByXP7m96EEVAI2CpA8YsZ8zXnXcnagT6Y&type=video&part=snippet&maxResults=50&q="+e.value,M(this.state,n)})}}).start()}]);
//# sourceMappingURL=app.bundle.js.map