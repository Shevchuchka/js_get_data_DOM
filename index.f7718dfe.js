function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}var r,n=((function(r){if(Array.isArray(r))return t(r)})(r=document.querySelectorAll("span.population"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,n){if(r){if("string"==typeof r)return t(r,void 0);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(t){return+t.textContent.split(",").join("")}),e=function(t){var r=0,n=!0,e=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var l=a.value;r+=l}}catch(t){e=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(e)throw o}}return r},o=e(n).toLocaleString("en-US"),a=(e(n)/n.length).toLocaleString("en-US");document.querySelector("span.total-population").textContent=o,document.querySelector("span.average-population").textContent=a;
//# sourceMappingURL=index.f7718dfe.js.map