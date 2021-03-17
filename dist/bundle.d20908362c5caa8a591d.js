(()=>{"use strict";var n,r,e,t={192:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(15),a=e.n(t),o=e(645),A=e.n(o)()(a());A.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Raleway:wght@500;700&display=swap);"]),A.push([n.id,'body{box-sizing:border-box;margin:0;padding:0;min-height:100vh;overflow-x:hidden;display:flex;flex-flow:column wrap;font-family:"Open Sans",sans-serif;font-weight:400}body header{background-color:#0b132b;width:100%;min-height:80px}body header .container{display:flex;align-items:center;justify-content:start}body header .container h1{color:#fff}body main{margin:50px 0 80px 0}body main .container .card-deck{width:100%;display:grid;grid-template-columns:repeat(4, 1fr);grid-gap:40px}body main .container .card-deck .card{border:2px solid #f2f2f2;border-radius:6px}body main .container .card-deck .card .card-header img{width:100%;max-width:100%}body main .container .card-deck .card .card-body{padding:0 20px}body main .container .card-deck .card .card-body .card-title{margin-bottom:0}body main .container .card-deck .card .card-body p{font-size:14px;margin-top:5px}body main .container .card-deck .card .card-footer{display:flex;justify-content:center;padding:0 20px}body main .container .card-deck .card .card-footer a{display:block;text-align:center;text-decoration:none;width:100%;margin-bottom:20px;padding:5px 10px;color:#0b132b;border-radius:6px;background-color:transparent;transition:all .3s ease-out}body main .container .card-deck .card .card-footer a:hover{background-color:#007ea7}body main .container .card-deck .card .card-footer a:hover i{color:#fff}body main .container .card-deck .card .card-footer a i{font-size:20px}body footer{margin-top:auto;min-height:60px;background-color:#0b132b;width:100%}body footer .container{display:flex;align-items:center;justify-content:flex-end;min-height:60px}body footer .container a{display:block;color:#fff;font-size:35px}body footer .container a i{color:#fff}body footer .container a i:hover{color:#007ea7;transition:all .3s ease-out}.container{max-width:960px;width:100%;height:100%;margin:0 auto}h1,h2,h3{font-family:"Raleway",Arial,Helvetica,sans-serif;font-weight:500}a:hover{text-decoration:unset}@media screen and (max-width: 992px){body main .container .card-deck{grid-template-columns:repeat(3, 1fr)}.container{width:90%}}@media screen and (max-width: 768px){body main .container .card-deck{grid-template-columns:repeat(2, 1fr);grid-gap:30px}.container{width:90%}}@media screen and (max-width: 576px){body main .container .card-deck{grid-template-columns:repeat(1, 1fr);grid-gap:50px}.container{width:95%}}',"",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAEA,KACI,qBAAA,CACA,QAAA,CACA,SAAA,CACA,gBAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,kCAAA,CACA,eAAA,CACA,YACI,wBAAA,CACA,UAAA,CACA,eAAA,CACA,uBACI,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,0BACI,UAAA,CAIZ,UACI,oBAAA,CAEI,gCACI,UAAA,CACA,YAAA,CACA,oCAAA,CACA,aAAA,CACA,sCACI,wBAAA,CACA,iBAAA,CAEI,uDACI,UAAA,CACA,cAAA,CAGR,iDACI,cAAA,CACA,6DACI,eAAA,CAEJ,mDACI,cAAA,CACA,cAAA,CAGR,mDACI,YAAA,CACA,sBAAA,CACA,cAAA,CACA,qDACI,aAAA,CACA,iBAAA,CACA,oBAAA,CACA,UAAA,CACA,kBAAA,CACA,gBAAA,CACA,aAAA,CACA,iBAAA,CACA,4BAAA,CACA,2BAAA,CACA,2DACI,wBAAA,CAEJ,6DACI,UAAA,CAEJ,uDACI,cAAA,CAQ5B,YACI,eAAA,CACA,eAAA,CACA,wBAAA,CACA,UAAA,CACA,uBACI,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,eAAA,CACA,yBACI,aAAA,CACA,UAAA,CACA,cAAA,CACA,2BACI,UAAA,CACA,iCACI,aAAA,CACA,2BAAA,CAQxB,WACI,eAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CAGJ,SACI,gDAAA,CACA,eAAA,CAEJ,QACI,qBAAA,CAGJ,qCACI,gCACI,oCAAA,CAEJ,WACI,SAAA,CAAA,CAIR,qCACI,gCACI,oCAAA,CACA,aAAA,CAEJ,WACI,SAAA,CAAA,CAIR,qCACI,gCACI,oCAAA,CACA,aAAA,CAEJ,WACI,SAAA,CAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Raleway:wght@500;700&display=swap');\r\n\r\nbody {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n    header {\r\n        background-color: #0b132b;\r\n        width: 100%;\r\n        min-height: 80px;\r\n        .container {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: start;\r\n            h1 {\r\n                color: #fff;\r\n            }\r\n        }\r\n    }\r\n    main {\r\n        margin: 50px 0 80px 0;\r\n        .container {\r\n            .card-deck {\r\n                width: 100%;\r\n                display: grid;\r\n                grid-template-columns: repeat(4, 1fr);\r\n                grid-gap: 40px;\r\n                .card {\r\n                    border: 2px solid #f2f2f2;\r\n                    border-radius: 6px;\r\n                    .card-header {\r\n                        img {\r\n                            width: 100%;\r\n                            max-width: 100%;\r\n                        }\r\n                    }\r\n                    .card-body {\r\n                        padding: 0 20px;\r\n                        .card-title {\r\n                            margin-bottom: 0;\r\n                        }\r\n                        p {\r\n                            font-size: 14px;\r\n                            margin-top: 5px;\r\n                        }\r\n                    }\r\n                    .card-footer {\r\n                        display: flex;\r\n                        justify-content: center;\r\n                        padding: 0 20px;\r\n                        a {\r\n                            display: block;\r\n                            text-align: center;\r\n                            text-decoration: none;\r\n                            width: 100%;\r\n                            margin-bottom: 20px;\r\n                            padding: 5px 10px;\r\n                            color: #0b132b;\r\n                            border-radius: 6px;\r\n                            background-color: transparent;\r\n                            transition: all 0.3s ease-out;\r\n                            &:hover {\r\n                                background-color:#007ea7;\r\n                            }\r\n                            &:hover i {\r\n                                color: #fff;\r\n                            }\r\n                            i {\r\n                                font-size: 20px;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    footer {\r\n        margin-top: auto;\r\n        min-height: 60px;\r\n        background-color: #0b132b;\r\n        width: 100%;\r\n        .container {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: flex-end;\r\n            min-height: 60px;\r\n            a {\r\n                display: block;\r\n                color: #fff;\r\n                font-size: 35px;\r\n                i {\r\n                    color: #fff;\r\n                    &:hover {\r\n                        color: #007ea7;\r\n                        transition: all 0.3s ease-out;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.container {\r\n    max-width: 960px;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\nh1, h2, h3 {\r\n    font-family: 'Raleway', Arial, Helvetica, sans-serif;\r\n    font-weight: 500;\r\n}\r\na:hover {\r\n    text-decoration: unset;\r\n}\r\n\r\n@media screen and (max-width: 992px){\r\n    body main .container .card-deck {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n    .container {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    body main .container .card-deck {\r\n        grid-template-columns: repeat(2, 1fr);\r\n        grid-gap: 30px;\r\n    }\r\n    .container {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 576px){\r\n    body main .container .card-deck {\r\n        grid-template-columns: repeat(1, 1fr);\r\n        grid-gap: 50px;\r\n    }\r\n    .container {\r\n        width: 95%;\r\n    }\r\n}"],sourceRoot:""}]);const i=A},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var A=this[o][0];null!=A&&(a[A]=!0)}for(var i=0;i<n.length;i++){var c=[].concat(n[i]);t&&a[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},15:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,a=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,a=!1,o=void 0;try{for(var A,i=n[Symbol.iterator]();!(t=(A=i.next()).done)&&(e.push(A.value),!r||e.length!==r);t=!0);}catch(n){a=!0,o=n}finally{try{t||null==i.return||i.return()}finally{if(a)throw o}}return e}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[1],A=a[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),d="/*# ".concat(c," */"),s=A.sources.map((function(n){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(n," */")}));return[o].concat(s).concat([d]).join("\n")}return[o].join("\n")}},379:(n,r,e)=>{var t,a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),o=[];function A(n){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===n){r=e;break}return r}function i(n,r){for(var e={},t=[],a=0;a<n.length;a++){var i=n[a],c=r.base?i[0]+r.base:i[0],d=e[c]||0,s="".concat(c," ").concat(d);e[c]=d+1;var l=A(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(o[l].references++,o[l].updater(f)):o.push({identifier:s,updater:u(f,r),references:1}),t.push(s)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var A=a(n.insert||"head");if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(r)}return r}var d,s=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function l(n,r,e,t){var a=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=s(r,a);else{var o=document.createTextNode(a),A=n.childNodes;A[r]&&n.removeChild(A[r]),A.length?n.insertBefore(o,A[r]):n.appendChild(o)}}function f(n,r,e){var t=e.css,a=e.media,o=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var C=null,p=0;function u(n,r){var e,t,a;if(r.singleton){var o=p++;e=C||(C=c(r)),t=l.bind(null,e,o,!1),a=l.bind(null,e,o,!0)}else e=c(r),t=f.bind(null,e,r),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else a()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=i(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var a=A(e[t]);o[a].references--}for(var c=i(n,r),d=0;d<e.length;d++){var s=A(e[d]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}e=c}}}}},a={};function o(n){var r=a[n];if(void 0!==r)return r.exports;var e=a[n]={id:n,exports:{}};return t[n](e,e.exports,o),e.exports}o.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return o.d(r,{a:r}),r},o.d=(n,r)=>{for(var e in r)o.o(r,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},o.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n=o(379),r=o.n(n),e=o(192),r()(e.Z,{insert:"head",singleton:!1}),e.Z.locals})();
//# sourceMappingURL=bundle.d20908362c5caa8a591d.js.map