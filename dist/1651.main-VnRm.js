"use strict";(self.webpackChunkborder=self.webpackChunkborder||[]).push([[1651],{1651:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s}),n(35666);var t=n(30166);function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r,n,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?r(u):Promise.resolve(u).then(t,o)}function u(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){c(i,t,o,a,u,"next",e)}function u(e){c(i,t,o,a,u,"throw",e)}a(void 0)}))}}n(44431),n(51825),n(51206);const s=function(e){var r,o=e.networkId,a=e.preferred,c=e.label,s=e.iconSrc,l=e.svg,f=e.buttonPosition,p=e.modalZIndex,d=e.apiKey,b=e.buildEnv,h=e.enableLogging,g=e.enabledVerifiers,w=e.loginConfig,v=e.showTorusButton,m=e.integrity,y=e.whiteLabel,O=e.loginMethod;return{name:c||"Torus",svg:l||'<svg width="257" height="277" viewBox="0 0 257 277" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="153.889" height="82.0741" fill="#0364FF" />\n<rect x="71.8135" width="82.0741" height="277" fill="#0364FF" />\n<path d="M215.443 82.0741C238.107 82.0741 256.48 63.7012 256.48 41.037C256.48 18.3729 238.107 0 215.443 \n0C192.779 0 174.406 18.3729 174.406 41.037C174.406 63.7012 192.779 82.0741 215.443 82.0741Z" fill="#0364FF" />\n</svg>',iconSrc:s,wallet:(r=u(regeneratorRuntime.mark((function e(r){var a,c,s,l,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.createModernProviderInterface,e.next=3,Promise.all([n.e(9826),n.e(5305)]).then(n.t.bind(n,25305,23));case 3:return c=e.sent,s=c.default,l=new s({buttonPosition:f,modalZIndex:p,apiKey:d}),e.next=8,l.init({buildEnv:b,enableLogging:h,network:{host:(0,t.n)(o),chainId:o,networkName:"".concat((0,t.n)(o)," Network")},showTorusButton:v,enabledVerifiers:g,loginConfig:w,integrity:m,whiteLabel:y});case 8:return P=l.provider,e.abrupt("return",{provider:P,interface:i(i({},a(P)),{},{name:"Torus",dashboard:function(){return l.showWallet("home")},connect:function(){var e=u(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.login({verifier:O});case 2:return r=e.sent,e.abrupt("return",{message:r[0]});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),disconnect:function(){return l.cleanUp()}}),instance:l});case 10:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),type:"sdk",desktop:!0,mobile:!0,preferred:a}}}}]);