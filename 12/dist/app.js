!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=3)}([function(n,e,t){"use strict";var r=t(2),o=t.n(r)()((function(n){return n[1]}));o.push([n.i,"/* CSS declarations go here */\nbody {\n  font-family: sans-serif;\n  background-color: #315481;\n  background-image: linear-gradient(to bottom, #315481, #918e82 100%);\n  background-attachment: fixed;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  padding: 0;\n  margin: 0;\n\n  font-size: 14px;\n}\n\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n  min-height: 100%;\n  background: white;\n}\n\nheader {\n  background: #d2edf4;\n  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);\n  padding: 20px 15px 15px 15px;\n  position: relative;\n}\n\n#login-buttons {\n  display: block;\n}\n\nh1 {\n  font-size: 1.5em;\n  margin: 0;\n  margin-bottom: 10px;\n  display: inline-block;\n  margin-right: 1em;\n}\n\nform {\n  margin-top: 10px;\n  margin-bottom: -10px;\n  position: relative;\n}\n\n.new-task input {\n  box-sizing: border-box;\n  padding: 10px 0;\n  background: transparent;\n  border: none;\n  width: 100%;\n  padding-right: 80px;\n  font-size: 1em;\n}\n\n.new-task input:focus {\n  outline: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  background: white;\n}\n\n.delete {\n  float: right;\n  font-weight: bold;\n  background: none;\n  font-size: 1em;\n  border: none;\n  position: relative;\n  cursor: pointer;\n}\n\nli {\n  position: relative;\n  list-style: none;\n  padding: 15px;\n  border-bottom: #eee solid 1px;\n}\n\nli .text {\n  margin-left: 10px;\n}\n\nli.checked {\n  color: #888;\n}\n\nli.checked .text {\n  text-decoration: line-through;\n}\n\nli.private {\n  background: #eee;\n  border-color: #ddd;\n}\n\nheader .hide-completed {\n  float: right;\n}\n\n.toggle-private {\n  margin-left: 5px;\n}\n\n@media (max-width: 600px) {\n  li {\n    padding: 12px 15px;\n  }\n\n  .search {\n    width: 150px;\n    clear: both;\n  }\n\n  .new-task input {\n    padding-bottom: 5px;\n  }\n}\n",""]),e.a=o},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],u=e.base?i[0]+e.base:i[0],l=t[u]||0,d="".concat(u," ").concat(l);t[u]=l+1;var s=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(f)):a.push({identifier:d,updater:h(f,e),references:1}),r.push(d)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,s=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,g=0;function h(n,e){var t,r,o;if(e.singleton){var i=g++;t=m||(m=l(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(n,e),l=0;l<t.length;l++){var d=c(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){"use strict";t.r(e);const r=document.querySelector("#result");function o(n){(void 0)(n);const e=n.map((n,e)=>`<li data-index="${e}">\n        <button class="delete">×</button>\n        <input type="checkbox" class="toggle-checked" ${n.isDone?"checked":""}/>\n        <span class="text">${n.text}</span>\n      </li>`);r.innerHTML=`<ul>${e.join("")}</ul>`}var i={id:"",text:"",isDone:!1};const a=document.querySelector("#input-form"),c=document.querySelector("#input");var u={init:function(n){a.addEventListener("submit",e=>{e.preventDefault();const t=c.value;t&&(c.value="",n.push({...i,text:t,isDone:!1}),o(n))})}},l=t(1),d=t.n(l),s=t(0),f={insert:"head",singleton:!1};d()(s.a,f),s.a.locals;const p=document.querySelector("#result"),m=(void 0)();p.addEventListener("click",n=>{const{className:e}=n.target;if("delete"===e){const{index:e}=n.target.parentElement.dataset;m.splice(e,1),o(m)}else if("toggle-checked"===e){const{index:e}=n.target.parentElement.dataset;m[e].isDone=!m[e].isDone,o(m)}}),u.init(m),o(m)}]);