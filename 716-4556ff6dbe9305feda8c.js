"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[]).push([[716],{716:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});var r,o=n(7378),i=n(2552),a=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return a(e,t),e}(Error);function l(t,e){if(!t)throw new c(e)}function u(t){var e=Object.entries(t).filter((function(t){var e=t[1];return null!=e})).map((function(t){var e=t[0],n=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(n))}));return e.length>0?"?"+e.join("&"):""}var s=n(382),f=n.n(s),h=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(){return d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)},p=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{l(r.next(t))}catch(e){i(e)}}function c(t){try{l(r.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((r=r.apply(t,e||[])).next())}))},w=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},y=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},b=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then},v=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},g=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function k(t,e,n){var r=e.height,o=e.width,i=y(e,["height","width"]),a=d({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(t,"",Object.keys(a).map((function(t){return t+"="+a[t]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(t){console.error(t)}}),1e3);return c}var m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=void 0===a?"windowCenter":a,l=n.windowWidth,u=void 0===l?550:l;k(t,d({height:i,width:u},"windowCenter"===c?v(u,i):g(u,i)),r)},e.handleClick=function(t){return p(e,void 0,void 0,(function(){var e,n,r,o,i,a,c,l,u,s;return w(this,(function(f){switch(f.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,c=e.openShareDialogOnClick,l=e.opts,u=o(a,l),r?[2]:(t.preventDefault(),n?(s=n(),b(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(u),i&&i(t,u),[2]}}))}))},e}return h(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,i=t.disabledStyle,a=t.forwardedRef,c=(t.networkLink,t.networkName),l=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),u=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,y(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=f()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=d(d(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&i);return o.createElement("button",d({},s,{"aria-label":s["aria-label"]||c,className:h,onClick:this.handleClick,ref:a,style:p}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(o.Component),O=m,_=function(){return _=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},_.apply(this,arguments)};var j=function(t,e,n,r){function i(i,a){var c=n(i),l=_({},i);return Object.keys(c).forEach((function(t){delete l[t]})),o.createElement(O,_({},r,l,{forwardedRef:a,networkName:t,networkLink:e,opts:n(i)}))}return i.displayName="ShareButton-"+t,(0,o.forwardRef)(i)};var C=j("facebook",(function(t,e){var n=e.quote,r=e.hashtag;return l(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+u({u:t,quote:n,hashtag:r})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400});var S=j("twitter",(function(t,e){var n=e.title,r=e.via,o=e.hashtags,i=void 0===o?[]:o,a=e.related,c=void 0===a?[]:a;return l(t,"twitter.url"),l(Array.isArray(i),"twitter.hashtags is not an array"),l(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+u({url:t,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400});var P=j("linkedin",(function(t,e){var n=e.title,r=e.summary,o=e.source;return l(t,"linkedin.url"),"https://linkedin.com/shareArticle"+u({url:t,mini:"true",title:n,summary:r,source:o})}),(function(t){return{title:t.title,summary:t.summary,source:t.source}}),{windowWidth:750,windowHeight:600});var x=j("email",(function(t,e){var n=e.subject,r=e.body,o=e.separator;return"mailto:"+u({subject:n,body:r?r+o+t:t})}),(function(t){return{subject:t.subject,body:t.body,separator:t.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(t,e){window.location.href=e}}),W=n(2551),Z=n(8121),D={wrapper:{alignItems:"center"},heading:{color:"omegaDark",mr:1,mb:0}},A=function(t){var e=t.location,n=t.title,r=e&&e.href,o={facebook:function(t){var e=t.children;return(0,Z.tZ)(C,{url:r,quote:n},e)},twitter:function(t){var e=t.children;return(0,Z.tZ)(S,{url:r,title:n},e)},linkedin:function(t){var e=t.children;return(0,Z.tZ)(P,{url:r,quote:n},e)},email:function(t){var e=t.children;return(0,Z.tZ)(x,{url:r,subject:n},e)}},a=(0,W.Z)(Object.keys(o).map((function(t){return{name:t}})));return(0,Z.tZ)(i.kC,{sx:D.wrapper},(0,Z.tZ)(i.X6,{variant:"h5",sx:D.heading},"Share"),a.map((function(t){var e=t.name,n=t.color,r=t.Icon,a=o[e];return a&&(0,Z.tZ)(i.hU,{as:"span",variant:"simple",key:"share-"+e,sx:{color:n}},(0,Z.tZ)(a,null,(0,Z.tZ)(r,null)))})))}}}]);
//# sourceMappingURL=716-4556ff6dbe9305feda8c.js.map