!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],s=n[u]||0,f="".concat(u," ").concat(s);n[u]=s+1;var l=c(f),h={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(h)):a.push({identifier:f,updater:d(h,t),references:1}),r.push(f)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var f,l=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function h(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function v(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,y=0;function d(e,t){var n,r,o;if(t.singleton){var i=y++;n=p||(p=s(t)),r=h.bind(null,n,i,!1),o=h.bind(null,n,i,!0)}else n=s(t),r=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),s=0;s<n.length;s++){var f=c(n[s]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}n=i}}}},function(e,t,n){var r=n(0),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){},function(e,t,n){var r=n(0),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r=function(e,t){return t.map((function(t){return t.map((function(t){var n=[t.x,t.y,1],r=[0,0,0];return e.forEach((function(t,o){t.forEach((function(t,i){r[o]+=n[i]*e[i][o]}))})),{x:r[0],y:r[1]}}))}))},o=function(e){return r([[1,0,0],[0,-1,0],[0,0,1]],e)},i=function(e,t){var n=[[Math.cos(t),Math.sin(t),0],[-Math.sin(t),Math.cos(t),0],[0,0,1]];return r(n,e)},a=function(e,t,n){return r([[t,0,0],[0,n,0],[0,0,1]],e)},c=function(e,t,n){return r([[1,0,0],[0,1,0],[t,n,1]],e)};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"view",void 0),s(this,"model",void 0),this.model=t,this.view=n,this.connect(),this.render()}var t,n,r;return t=e,(n=[{key:"connect",value:function(){this.model.subscribe("render",this.render.bind(this))}},{key:"render",value:function(){var e=this.model.getState();this.view.render(e)}}])&&u(t.prototype,n),r&&u(t,r),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,n,r,o=b(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),O(g(t=o.call(this)),"state",void 0),t.state=e,t}return t=i,(n=[{key:"getState",value:function(){return p({},this.state)}},{key:"setState",value:function(e){this.state=p(p({},this.state),e),this.fire("render",e)}}])&&y(t.prototype,n),r&&y(t,r),i}(function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="events")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.events={}}var t,n,r;return t=e,(n=[{key:"subscribe",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}},{key:"fire",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!this.events[e])throw new Error("".concat(this.events[e]," not exist"));this.events[e].forEach((function(e){e.apply(void 0,n)}))}}])&&l(t.prototype,n),r&&l(t,r),e}()),j=function(e,t,n){var r=t.from;return n*((e-r)/(t.to-r))};function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"canvas",void 0),S(this,"ctx",void 0),this.canvas=t,this.ctx=n}var t,n,r;return t=e,(n=[{key:"drawPoints",value:function(e,t){var n=this.canvas,r=n.offsetWidth,o=n.offsetHeight,i=r/2,a=o/2;this.ctx.textAlign="center";for(var c=e.from+1;c<e.to;c+=1)if(0!==c){var u=j(c,e,r);this.ctx.moveTo(u,a),this.ctx.lineTo(u,a+10),this.ctx.strokeText(c.toString(),u,a+25)}for(var s=e.from+1;s<e.to;s+=1)if(0!==s){var f=j(s,t,o);this.ctx.moveTo(i,f),this.ctx.lineTo(i+10,f),this.ctx.strokeText(s.toString(),i+25,f)}}},{key:"drawAxes",value:function(e,t){var n=this.canvas,r=n.offsetWidth,o=n.offsetHeight,i=r/2,a=o/2;this.ctx.beginPath(),this.ctx.strokeStyle="blue",this.ctx.moveTo(0,a),this.ctx.lineTo(o,a),this.ctx.moveTo(i,0),this.ctx.lineTo(i,r),this.drawPoints(e,t),this.ctx.stroke(),this.ctx.closePath()}}])&&P(t.prototype,n),r&&P(t,r),e}();function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"canvas",void 0),_(this,"ctx",void 0),this.canvas=t,this.ctx=n}var t,n,r;return t=e,(n=[{key:"drawFigure",value:function(e,t,n){var r=this,o=this.canvas,i=o.offsetWidth,a=o.offsetHeight;n.forEach((function(n){var o=E(n,2),c=o[0],u=o[1];r.ctx.moveTo(j(c.x,e,i),j(c.y,t,a)),r.ctx.lineTo(j(u.x,e,i),j(u.y,t,a))})),this.ctx.stroke()}}])&&C(t.prototype,n),r&&C(t,r),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),R(this,"root",void 0),R(this,"wrapper",void 0),R(this,"canvas",void 0),R(this,"ctx",void 0),R(this,"coordAxes",void 0),R(this,"figure",void 0),this.root=t,this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.wrapper=document.createElement("div"),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.coordAxes=new k(this.canvas,this.ctx),this.figure=new A(this.canvas,this.ctx),this.wrapper.append(this.canvas),this.wrapper.classList.add("app"),this.root.append(this.wrapper)}},{key:"clearCanvas",value:function(){var e=this.canvas,t=e.offsetHeight,n=e.offsetWidth;this.ctx.clearRect(0,0,n,t)}},{key:"render",value:function(e){this.clearCanvas();var t=e.yRange,n=e.xRange,r=e.points,o=this.root,i=o.offsetWidth,c=o.offsetHeight;this.canvas.width=i,this.canvas.height=c,this.coordAxes.drawAxes(n,t),this.figure.drawFigure(n,t,a(r,1,1))}}])&&M(t.prototype,n),r&&M(t,r),e}();function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B={xRange:{from:-10,to:10},yRange:{from:10,to:-10},points:[[{x:-2,y:4},{x:0,y:2}],[{x:0,y:2},{x:2,y:4}],[{x:2,y:4},{x:2,y:-5}],[{x:2,y:-5},{x:-2,y:-3}],[{x:-2,y:-3},{x:-2,y:4}]]},F=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"model",void 0),q(this,"view",void 0),q(this,"controller",void 0),this.init(t,n)}var t,n,r;return t=e,(n=[{key:"init",value:function(e,t){this.model=new x(H(H({},B),e)),this.view=new D(t),this.controller=new f(this.model,this.view)}},{key:"transform",value:function(e){var t=e.isFlipped,n=e.translateX,r=e.translateY,u=e.scaleX,s=e.scaleY,f=e.rotateTo,l=i(B.points,f*(Math.PI/180)),h=t?o(l):l,v=c(h,n,r),p=a(v,u,s);this.model.setState({points:p})}}])&&N(t.prototype,n),r&&N(t,r),e}();n(3);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),W(this,"controlsElement",void 0),W(this,"app",void 0),W(this,"onApplyButtonClick",(function(){var e=r.controlsElement.querySelectorAll(".controls__control-input"),t={};e.forEach((function(e){var n=e,r=n.type,o=n.id;if("range"===r){var i=parseInt(n.value,10);t[o]=i}else if("checkbox"===r){var a=n.checked;t[o]=a}})),r.app.transform(t)})),this.controlsElement=t,this.app=n,this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.controlsElement.querySelector(".controls__apply-button").addEventListener("click",this.onApplyButtonClick)}}])&&L(t.prototype,n),r&&L(t,r),e}(),X=document.querySelector(".affine-transformation__graph");new U(document.querySelector(".controls"),new F({},X))}]);