(this["webpackJsonpspace-run"]=this["webpackJsonpspace-run"]||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/rocket.a11d85e8.png"},15:function(e,t,n){e.exports=n.p+"static/media/tardis.82ea9f75.png"},18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),c=n.n(i),o=(n(23),n(24),n(4)),s=n(2),l=n.n(s),u=n(8),m=n(11),d=function(e,t){var n=(t.input.find((function(e){return"onMouseMove"===e.name}))||{}).payload,a=e.rocket;return n&&(a.x=n.pageX),e},f=function(e,t){var n=(t.input.find((function(e){return"onTouchMove"===e.name}))||{}).payload,a=e.rocket;if(n){var r=n.touches[0].pageX;r<window.innerWidth&&r>53&&(a.x=r)}return e},h=function(e,t){t.input;if(e){var n=e.asteroid,a=e.score,r=e.rocket;n.y<100&&(n.y=window.innerHeight,n.x=Math.random()*(window.innerWidth-50),a&&(a.score=a.score+50));var i=n.x,c=i+100,o=r.x,s=o+53.09;Math.abs(n.y-r.y)<100&&(o>i&&o<c||s>i&&s<c)&&(a.lives=a.lives-1,n.y=window.innerHeight,n.x=Math.random()*(window.innerWidth-50),a.lives<0&&(a.gameOver(a.score),a.score=0)),n.y=n.y-n.speed}return e};function p(e){var t=e.x-50;return r.a.createElement("div",{onTouchStart:function(e){return console.log(e.touches[0].clientX)}},r.a.createElement("img",{style:{position:"absolute",height:100,bottom:15,left:t},alt:"rocket",src:e.image}))}n(10);function v(e){var t=function(t){return{marginLeft:2,marginRight:2,fontSize:20,color:t>e.lives?"#B3000C":"#00B32C"}};return r.a.createElement("div",{className:"space",style:{textAlign:"center",position:"absolute",top:0,left:0,width:"100%",height:50,zIndex:10,color:"white",background:"linear-gradient(to right top, #052337, #273162, #6c327a, #b51a72, #eb124b)"}},"Score: ",e.score,r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-shield",style:t(1)}),r.a.createElement("i",{className:"fa fa-shield",style:t(2)}),r.a.createElement("i",{className:"fa fa-shield",style:t(3)}))}var g=n(12),b=n(6),w=n(7),E=n(17),k=n(16),y=function(e){Object(E.a)(n,e);var t=Object(k.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){var e=this.props.x-50,t=this.props.y-50;return r.a.createElement("div",{style:{}},r.a.createElement("img",{style:{position:"absolute",height:100,bottom:t,left:e},alt:"asteroid",src:"asteroid.png"}))}}]),n}(a.PureComponent),O=n(13),j=n(3),N=n(14),x=n.n(N),S=n(15),C=n.n(S),W={rocket:x.a,tardis:C.a},A={easy:10,medium:15,hard:20},M=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)("highest-scores");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)("ship");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function P(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),i=n[0],c=n[1],s=Object(a.useState)("medium"),b=Object(o.a)(s,2),w=b[0],E=b[1],k=Object(a.useState)(),N=Object(o.a)(k,2),x=N[0],S=N[1],C=Object(a.useState)("rocket"),P=Object(o.a)(C,2),L=P[0],B=P[1];return R().then((function(e){return B(e||"rocket")})),i?r.a.createElement("div",null,r.a.createElement(m.GameEngine,{running:i,style:{width:"100%",height:"100vh",backgroundColor:"black"},systems:[h,O.isMobile?f:d],entities:{rocket:{image:W[L],x:window.innerWidth/2,y:15,target:window.innerWidth/2,renderer:r.a.createElement(p,null)},asteroid:{x:15,y:window.innerHeight-100,speed:A[w],renderer:r.a.createElement(y,null)},score:{score:0,lives:3,gameOver:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t),M((function(e){e[w]?t>e[w]&&(e[w]=t,Object(j.b)("highest-scores",e)):(e[w]=t,Object(j.b)("highest-scores",e))})),c(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),renderer:r.a.createElement(v,null)}}},r.a.createElement("div",null,r.a.createElement(g.a,{style:{position:"absolute",width:"100%",height:"100%"}})))):r.a.createElement("div",{className:"space menu"},r.a.createElement("div",{className:"menu-title"},"SPACE RUN"),x?r.a.createElement("div",{className:"menu-score sm"},"Score: ",x):r.a.createElement("div",null),r.a.createElement("div",{className:"menu-item",onClick:function(){c(!0)}},x?"REPLAY":"PLAY"),r.a.createElement("div",{className:"sm menu-selector"},"Ship",r.a.createElement("br",null),r.a.createElement("div",{className:"menu-selector-item menu-item menu-arrow",onClick:function(){var e="rocket"===L?"tardis":"rocket";B(e),Object(j.b)("ship",e)}},r.a.createElement("i",{className:"fa fa-arrow-circle-left"})),r.a.createElement("div",{className:"menu-selector-item menu-item menu-selector-label"},r.a.createElement("img",{style:{height:23,marginRight:10},src:W[L],alt:"ship menu"}),L),r.a.createElement("div",{className:"menu-selector-item menu-item menu-arrow",onClick:function(){var e="rocket"===L?"tardis":"rocket";B(e),Object(j.b)("ship",e)}},r.a.createElement("i",{className:"fa fa-arrow-circle-right"}))),r.a.createElement("div",{className:"sm menu-selector"},"Mode",r.a.createElement("br",null),r.a.createElement("div",{className:"menu-selector-item menu-item menu-arrow",onClick:function(){var e="";switch(w){case"easy":e="hard";break;case"medium":e="easy";break;default:e="medium"}E(e)}},r.a.createElement("i",{className:"fa fa-arrow-circle-left"})),r.a.createElement("div",{className:"menu-selector-item menu-item menu-selector-label"},w),r.a.createElement("div",{className:"menu-selector-item menu-item menu-arrow",onClick:function(){var e="";switch(w){case"easy":e="medium";break;case"medium":e="hard";break;default:e="easy"}E(e)}},r.a.createElement("i",{className:"fa fa-arrow-circle-right"}))))}var L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/space-run",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/space-run","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.acc04340.chunk.js.map