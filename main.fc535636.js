parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function t(t){return a(t)||n(t)||e(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,r):void 0}}function n(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return o(t)}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var s=document.querySelector(".start"),i=document.querySelector(".game-field"),c=document.querySelector(".message-lose"),f=document.querySelector(".message-start"),d=document.querySelector(".message-win"),u=document.querySelector(".game-score"),l=0,v=4,m=4,h=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function y(){for(var t=0;t<v;t++)for(var r=0;r<m;r++){var e=h[t][r],n=i.rows[t].cells[r];if(2048===e)return d.classList.remove("hidden"),void i.classList.add("game-over");d.classList.add("hidden"),i.classList.remove("game-over"),n.textContent="",n.classList.value="",n.classList.add("field-cell"),e>0&&(n.textContent=e,n.classList.add("field-cell--".concat(e)))}}function L(){if(g()){var t=Math.floor(Math.random()*v),r=Math.floor(Math.random()*m);0===h[t][r]?(h[t][r]=Math.random()>=.9?4:2,y()):L()}}function g(){for(var t=0;t<v;t++)for(var r=0;r<m;r++)if(0===h[t][r])return!0;return!1}function p(){for(var t=0;t<v;t++)for(var r=0;r<m;r++){if(t>0&&h[t][r]===h[t-1][r])return!0;if(t<v-1&&h[t][r]===h[t+1][r])return!0;if(r>0&&h[t][r]===h[t][r-1])return!0;if(r<m-1&&h[t][r]===h[t][r+1])return!0}return!1}function S(){for(var t=0;t<m;t++){for(var r=[],e=0;e<v;e++)r.push(h[e][t]);for(var n=C(r),a=0;a<v;a++)h[a][t]=n[a];y()}}function b(){for(var t=0;t<m;t++){for(var r=[],e=v-1;e>=0;e--)r.push(h[e][t]);for(var n=C(r),a=v-1;a>=0;a--)h[a][t]=n[v-1-a]}y()}function w(){for(var t=0;t<v;t++){var r=C(h[t]);h[t]=r,y()}}function A(){for(var r=0;r<v;r++){var e=C(t(h[r]).reverse());h[r]=e.reverse(),y()}}function C(t){for(var r=t.filter(function(t){return 0!==t}),e=0;e<r.length-1;e++)r[e]===r[e+1]&&(r[e]*=2,r[e+1]=0,l+=r[e]);for(r=r.filter(function(t){return 0!==t});r.length<m;)r.push(0);return r}s.addEventListener("click",function(){s.classList.contains("restart")?(s.classList.remove("restart"),s.textContent="Start",l=0,u.textContent=l,h.forEach(function(t){t.splice(0,v,0,0,0,0)}),L(),L()):(s.classList.add("restart"),s.textContent="Restart",c.classList.add("hidden"),f.classList.add("hidden"),l=0,u.textContent=l,h.forEach(function(t){t.splice(0,v,0,0,0,0),c.classList.add("hidden")}),L(),L())}),document.addEventListener("keydown",function(t){var r=t.key,e=JSON.parse(JSON.stringify(h));if(g()||p()||!r.startsWith("Arrow")){switch(r){case"ArrowUp":S();break;case"ArrowDown":b();break;case"ArrowLeft":w();break;case"ArrowRight":A()}JSON.stringify(h)!==JSON.stringify(e)&&(u.textContent=l,c.classList.add("hidden"),f.classList.add("hidden"),s.classList.add("restart"),s.textContent="Restart",i.classList.remove("game-over"),L())}else c.classList.remove("hidden")});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.fc535636.js.map