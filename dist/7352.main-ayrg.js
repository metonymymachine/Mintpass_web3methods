"use strict";(self.webpackChunkborder=self.webpackChunkborder||[]).push([[7352],{37352:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a}),n(35666);var r=n(30166);function o(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function u(t){o(a,r,i,u,c,"next",t)}function c(t){o(a,r,i,u,c,"throw",t)}u(void 0)}))}}n(44431),n(51825),n(51206);const a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.heading,n=t.description,o=t.icon,a=t.html,u=t.button;return function(){var t=i(regeneratorRuntime.mark((function t(i){var c,s,l,f,w,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=i.network,s=i.appNetworkId,l=i.walletSelect,f=i.exit,w=i.stateSyncStatus,h=i.stateStore,null!==c){t.next=5;break}if(!w.network){t.next=5;break}return t.next=5,new Promise((function(t){w.network&&w.network.then(t),setTimeout((function(){null===c&&t()}),500)}));case 5:if(h.network.get()==s){t.next=7;break}return t.abrupt("return",{heading:e||"You Must Change Networks",description:n||"We've detected that you need to switch your wallet's network from <b>".concat((0,r.n)(c),"</b> to <b>").concat((0,r.n)(s),' network</b> for this Dapp. <br><br> <i style="font-size: inherit; font-family: inherit;">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>'),eventCode:"networkFail",button:u||{onclick:function(){f(),l()},text:"Switch Wallet"},html:a,icon:o||r.b});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);