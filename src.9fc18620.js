parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"u2QS":[function(require,module,exports) {
const e=e=>{return new Promise(t=>{setTimeout(()=>{t(e)},e)})},t=e=>console.log(`Resolved after ${e}ms`);e(2e3).then(t),e(1e3).then(t),e(1500).then(t);
},{}],"n9ff":[function(require,module,exports) {
const a=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],e=(a,e)=>new Promise(n=>n(a.map(a=>a.name===e?{...a,active:!a.active}:a))),n=a=>console.table(a);e(a,"Mango"),e(a,"Lux"),e(a,"Mango").then(n),e(a,"Lux").then(n);
},{}],"T9OW":[function(require,module,exports) {
const t=(t,a)=>Math.floor(Math.random()*(a-t+1)+t),a=a=>{const n=t(200,500);return new Promise((t,o)=>{setTimeout(()=>{Math.random()>.3?t({id:a.id,delay:n}):o(a.id)},n)})},n=({id:t,delay:a})=>{console.log(`Transaction ${t} processed in ${a}ms`)},o=t=>{console.warn(`Error processing transaction ${t}. Please try again later.`)};a({id:70,amount:150}).then(n).catch(o),a({id:71,amount:230}).then(n).catch(o),a({id:72,amount:75}).then(n).catch(o),a({id:73,amount:100}).then(n).catch(o);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/task1"),require("./js/task2"),require("./js/task3");
},{"./sass/main.scss":"clu1","./js/task1":"u2QS","./js/task2":"n9ff","./js/task3":"T9OW"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.9fc18620.js.map