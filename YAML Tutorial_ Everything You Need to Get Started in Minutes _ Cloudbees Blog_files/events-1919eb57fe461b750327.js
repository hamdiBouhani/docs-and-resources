_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53,89],{"2qu3":function(e,t,i){"use strict";var n=i("oI91"),l=i("/GRZ"),o=i("i2R6");function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){var i;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){i&&(e=i);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,a=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return r=e.done,e},e:function(e){a=!0,o=e},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}t.__esModule=!0,t.default=void 0;var u,c=(u=i("q1tI"))&&u.__esModule?u:{default:u},m=i("8L3h"),v=i("jwwS");var f=[],p=[],b=!1;function h(e){var t=e(),i={loading:!0,loaded:null,error:null};return i.promise=t.then((function(e){return i.loading=!1,i.loaded=e,e})).catch((function(e){throw i.loading=!1,i.error=e,e})),i}function g(e){var t={loading:!1,loaded:{},error:null},i=[];try{Object.keys(e).forEach((function(n){var l=h(e[n]);l.loading?t.loading=!0:(t.loaded[n]=l.loaded,t.error=l.error),i.push(l.promise),l.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(i).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return c.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function w(e,t){var i=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),n=null;function l(){if(!n){var t=new _(e,i);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!b&&"function"===typeof i.webpack){var o=i.webpack();p.push((function(e){var t,i=d(o);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return l()}}catch(r){i.e(r)}finally{i.f()}}))}var r=function(e,t){l();var o=c.default.useContext(v.LoadableContext),r=(0,m.useSubscription)(n);return c.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(i.modules)&&i.modules.forEach((function(e){o(e)})),c.default.useMemo((function(){return r.loading||r.error?c.default.createElement(i.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:n.retry}):r.loaded?i.render(r.loaded,e):null}),[e,r])};return r.preload=function(){return l()},r.displayName="LoadableComponent",c.default.forwardRef(r)}var _=function(){function e(t,i){l(this,e),this._loadFn=t,this._opts=i,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,i=this._opts;t.loading&&("number"===typeof i.delay&&(0===i.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),i.delay)),"number"===typeof i.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),i.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return w(h,e)}function N(e,t){for(var i=[];e.length;){var n=e.pop();i.push(n(t))}return Promise.all(i).then((function(){if(e.length)return N(e,t)}))}x.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(g,e)},x.preloadAll=function(){return new Promise((function(e,t){N(f).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var i=function(){return b=!0,t()};N(p,e).then(i,i)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var O=x;t.default=O},KPF8:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return i("YG3S")}])},Vvt1:function(e,t,i){e.exports=i("a6RD")},XxI0:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n,l=i("xvhg"),o=i("q1tI"),r=i("TSYQ"),a=i.n(r),d=i("Vkf0");!function(e){e[e.XXL=1400]="XXL",e[e.XL=1200]="XL",e[e.LG=992]="LG",e[e.MD=768]="MD",e[e.SM=576]="SM",e[e.XS=576]="XS"}(n||(n={}));var s=o.createElement,u=function(e,t,i,l){if(e){if(e<n.MD&&l)return l;if(e<n.LG&&i)return i}return t},c=function(e){var t=e.background,i=e.children,n=o.useState(1e3),r=Object(l.a)(n,2),c=r[0],m=r[1];o.useEffect((function(){m(window.innerWidth)}),[]);var v,f,p,b,h,g=void 0,y=void 0;if(t)if("fields"in t)if("color"===t.sys.contentType.sys.id){var w=t.fields.color;g=Object(d.a)(w)}else{var _,x,N;v=t.fields,y=u(c,null===(_=v.asset)||void 0===_?void 0:_.fields.file.url,null===(x=v.tabletImage)||void 0===x?void 0:x.fields.file.url,null===(N=v.mobileImage)||void 0===N?void 0:N.fields.file.url)}else"Color"===t.__typename?g=Object(d.a)(t.color):(y=null===(f=t.asset)||void 0===f?void 0:f.url,y=u(c,(null===(p=t.asset)||void 0===p?void 0:p.url)||void 0,null===(b=t.tabletImage)||void 0===b?void 0:b.url,null===(h=t.mobileImage)||void 0===h?void 0:h.url));return s("div",{className:a()("campaign-hero",g,{"text-light":y}),style:y?{background:'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("'.concat(y,'?fm=png") center/cover')}:void 0},i)}},YG3S:function(e,t,i){"use strict";i.r(t),i.d(t,"__N_SSP",(function(){return O}));var n=i("q1tI"),l=i.n(n),o=i("apFO"),r=i("Au3V"),a=i("EGGI"),d=i("TSYQ"),s=i.n(d),u=n.createElement,c=function(e){var t=e.className,i=e.size,n=e.image,l=e.gradient,o=void 0,r=i||{width:340,height:170,fit:"fill"};return n&&(o={fields:{description:n.alt,file:{url:null===n||void 0===n?void 0:n.url}}}),u("div",{className:s()("position-relative",t)},u(a.Image,{resize:r,cssClasses:"w-100",asset:o}),l&&u("div",{className:"".concat(l," position-absolute"),style:{left:"0",right:"0",top:"0",bottom:"0"}}))},m=n.createElement,v=function(e){var t=e.title,i=e.description,n=e.background,l=e.button;return m("div",{className:"h-100"},m("div",{className:"mx-auto text-center d-flex flex-column"},m("div",{className:"text-left"},m(c,{className:"rounded-1 overflow-hidden",gradient:null===n||void 0===n?void 0:n.gradient,image:null===n||void 0===n?void 0:n.image,size:{height:239,width:460,fit:"fill"}}),m("h3",{className:"display-4 mt-4 mb-0"},t),i&&m("div",{className:"mt-2 white-space-pre-wrap truncate-banner-card-description"},i),l&&m(r.a,{href:l.href,className:"mt-4 btn-outline-dark"},l.label))))},f=i("Vkf0"),p=i("xhw8"),b=i("MYlG"),h=i("hRPy"),g=i("Lz0k"),y=i("ZdJ3"),w=i("yiHq"),_=l.a.createElement,x={sys:{id:""},fields:{title:"CloudBees Event Hub",seo:{fields:{title:"CloudBees Event Hub",description:"Hub for upcoming and on-demand CloudBees events",canonical:"https://www.cloudbees.com/events"}}}},N=function(e,t){return null===e||void 0===e?void 0:e.map((function(e){var i,n,l,o,r,a,d,s=null===t||void 0===t?void 0:t.find((function(t){var i;return(null===t||void 0===t?void 0:t.videoId)===(null===e||void 0===e||null===(i=e.video)||void 0===i?void 0:i.videoId)}));return{path:Object(h.d)(null===e||void 0===e||null===(i=e.linkedFrom)||void 0===i||null===(n=i.pageCollection)||void 0===n?void 0:n.items[0]),title:(null===e||void 0===e||null===(l=e.video)||void 0===l?void 0:l.title)||void 0,description:(null===e||void 0===e||null===(o=e.linkedFrom)||void 0===o||null===(r=o.pageCollection)||void 0===r||null===(a=r.items[0])||void 0===a||null===(d=a.seo)||void 0===d?void 0:d.description)||void 0,image:{url:s?s.thumbnailUrl:void 0,alt:s?s.title:void 0}}}))},O=!0;t.default=function(e){var t,i,n,r,a,d,s,u,c,m=e.featuredEvents,O=e.featuredOnDemandVideos,k=e.featuredVideoThumbnails,j=e.introduction,I=m.length>0?m[0]:void 0,E=(null===I||void 0===I?void 0:I.marketingImage.url)||"https://images.ctfassets.net/vtn4rfaw6n2j/9TmeHQki89JaSewBLelBB/b024856902a1d4d6958151635e705428/workflow01.jpg",P="string"===typeof(null===I||void 0===I?void 0:I.description)?null===I||void 0===I?void 0:I.description:Object(w.toPlainText)(null===I||void 0===I?void 0:I.description,"\n\n"),S={sys:{contentType:{sys:{id:"moduleImage"}}},fields:{inverseOverlayedContent:!0,asset:{fields:{description:"Featured Event",file:{url:E}}}}},T={sys:{id:"featured-button",contentType:{sys:{id:"button"}}},fields:{label:"Register Today!",link:{fields:{url:(null===I||void 0===I?void 0:I.url)||""}}}},D=O.length?O[0]:void 0,C=O.length?O.slice(1,5):[];return _(o.DefaultLayout,{page:x},_(l.a.Fragment,null,m.length>0&&_(y.SectionHero,{title:(null===I||void 0===I?void 0:I.title)||void 0,featuredTitle:"Featured Event",description:P||void 0,buttons:[T],background:S}),j&&_(b.b,{sections:[j]}),_("div",{className:"mw-16 px-lg-6 border-bottom border-1 border-gray-100 pb-6","data-test":"container.featuredEvents"},m.length>1&&_("div",{className:"grid three-column mw-12 px-4 px-xxl-0"},m.slice(1,5).map((function(e){return _("div",{key:e.title},function(e){var t,i="string"===typeof e.description?e.description:Object(w.toPlainText)(null===e||void 0===e?void 0:e.description,"\n\n");return e.thumbnailImage.url?t={image:{url:e.thumbnailImage.url,alt:e.thumbnailImage.alt||""}}:e.thumbnailImage.gradient&&(t={gradient:Object(f.a)(e.thumbnailImage.gradient)}),_(v,{title:e.title||"",background:t,button:{href:e.url,label:"Register Now"},description:i||void 0})}(e))})))),_("div",{className:"mw-16 px-lg-6 overflow-hidden","data-test":"container.featuredPages"},_("div",{className:"d-flex flex-column justify-content-center align-items-center px-4 pt-6 mb-0 mb-lg-n5"},_("h2",{className:"featured-on-demand font-lato font-weight-bold text-center"},"Featured On-Demand"),_("p",null,"Watch all of the DevOps World sessions, keynotes and more and see how you can shape the future of software delivery.")),_(p.a,{primaryPage:{path:Object(h.d)(null===D||void 0===D||null===(t=D.linkedFrom)||void 0===t||null===(i=t.pageCollection)||void 0===i?void 0:i.items[0]),title:(null===D||void 0===D||null===(n=D.video)||void 0===n?void 0:n.title)||void 0,description:(null===D||void 0===D||null===(r=D.linkedFrom)||void 0===r||null===(a=r.pageCollection)||void 0===a||null===(d=a.items[0])||void 0===d||null===(s=d.seo)||void 0===s?void 0:s.description)||void 0,image:{url:(null===k||void 0===k||null===(u=k[0])||void 0===u?void 0:u.thumbnailUrl)||void 0,alt:(null===k||void 0===k||null===(c=k[0])||void 0===c?void 0:c.title)||void 0}},secondaryPages:N(C,k),playHeader:!0}),_("div",{className:"d-flex justify-content-center mb-6 mb-md-6_5 mb-lg-5 mb-xl-5_5 mb-xxl-7_5","data-test":"container.onDemand"},_(g.a,{link:{fields:{url:"https://www.devopsworld.com"}},label:"View DevOps World 2022 On Demand"})))))}},ZdJ3:function(e,t,i){"use strict";i.r(t),i.d(t,"SectionHero",(function(){return k}));var n=i("WY+j"),l=i("q1tI"),o=i("XxI0"),r=i("HALo"),a=i("Lz0k"),d=i("CLXY"),s=i("34It"),u=i("iYCk"),c=l.createElement,m=function(e){var t=e.label,i=e.media;return"video"===(null===i||void 0===i?void 0:i.sys.contentType.sys.id)&&null!==i&&void 0!==i&&i.fields.videoId?c(s.ComponentWistiaVideo,{videoId:i.fields.videoId},c("button",{className:"btn btn-outline-dark"},c("div",{className:"d-flex align-items-center"},c("svg",{className:"mr-1_5",width:20,height:20,viewBox:"".concat(u.a.viewBox)},c("use",{xlinkHref:"#".concat(u.a.id)})),t))):null},v=l.createElement,f=function(e,t){var i=0===t?"btn-light text-dark mr-0 mr-sm-3":"btn btn-outline-light",n=e.sys.id,l=0===t?"primary":"secondary",o=e.sys.contentType.sys.id;return"button"===o?v("div",{className:"mb-4 mr-3",key:n},v(a.a,Object(r.a)({style:l},e.fields))):"buttonMedia"===o?v("div",{className:"media-button mb-4 mr-3",key:n},v(m,e.fields)):v("div",{className:"mb-4 mr-3",key:n},v(d.a,Object(r.a)({className:i},e.fields)))},p=i("Vkf0"),b=i("TSYQ"),h=i.n(b),g=l.createElement,y=function(e){var t=e.title,i=e.featuredTitle,n=e.description,l=e.buttons,r=e.background;return g(o.a,{background:r},g("div",{className:h()({"inverse-content":Object(p.c)(r)},"color-hero d-flex align-items-center pt-7 pb-4 pt-md-5 pb-md-5 px-4_5 px-md-5_5 pr-lg-5 pl-lg-7")},g("header",{className:"hero-content"},g("div",{className:"mw-6 mw-md-6 pr-lg-6 ml-0 position-relative"},g("div",null,i&&g("div",{className:"mb-3"},g("h5",{className:"display-5 mb-3"},i),g("div",{className:"accent-line md light"})),t&&g("h1",{className:"callout-1 mb-3"},t),n&&g("p",{className:"mw-6 ml-0 display-6 display-md-5 mb-4_5 white-space-pre-wrap"},n),g("div",{className:"button-container d-flex flex-column flex-lg-row pt-1"},null===l||void 0===l?void 0:l.map(f)))))))},w=i("Ld6U"),_=i("qHib"),x=l.createElement,N=function(e){var t,i,l,o,r,a,d,u,c,m,v,b,g,y,N,O,k,j,I,E,P,S,T,D,C,L,M,H,V,X,A,F,R,q=e.title,G=e.featuredTitle,Y=e.description,B=e.buttons,z=e.background,W=!1,Q=!1,U=null===B||void 0===B?void 0:B.find((function(e){var t;return"buttonMedia"===e.sys.contentType.sys.id&&"video"===(null===(t=e.fields.media)||void 0===t?void 0:t.sys.contentType.sys.id)}));if(Object(n.d)(z))X=z.fields.videoId,W=!0,Q=!0;else if("moduleImage"===(null===z||void 0===z?void 0:z.sys.contentType.sys.id)){var J=z;A=null===J||void 0===J?void 0:J.fields.asset,F=null===J||void 0===J?void 0:J.fields.tabletImage,R=null===J||void 0===J?void 0:J.fields.mobileImage,W=Object(p.c)(J),Q=!(null===J||void 0===J||!J.fields.tintOverlay)}return x("div",{className:h()({"inverse-content":W},"media-hero")},x("div",{className:"background-media-container"},x("figure",{className:"mb-0"},X?x(s.ComponentWistiaThumbnail,{videoId:X,noPlayButton:!0,size:{width:2600,height:1400},srcSets:[{width:2600,height:1400,breakpoint:1999},{width:1800,height:1400,breakpoint:991},{width:1e3,height:800,breakpoint:767},{width:800,height:1400,breakpoint:575}]}):x("picture",null,(null===(t=A)||void 0===t||null===(i=t.fields)||void 0===i||null===(l=i.file)||void 0===l?void 0:l.url)&&x("source",{srcSet:A.fields.file.url,media:"(min-width: 1000px)"}),(null===(o=F)||void 0===o||null===(r=o.fields)||void 0===r||null===(a=r.file)||void 0===a?void 0:a.url)&&x("source",{srcSet:F.fields.file.url,media:"(min-width: 768px)"}),(null===(d=R)||void 0===d||null===(u=d.fields)||void 0===u||null===(c=u.file)||void 0===c?void 0:c.url)&&x("source",{srcSet:R.fields.file.url,media:"(min-width: 576px)"}),((null===(m=A)||void 0===m||null===(v=m.fields)||void 0===v||null===(b=v.file)||void 0===b?void 0:b.url)||(null===(g=F)||void 0===g||null===(y=g.fields)||void 0===y||null===(N=y.file)||void 0===N?void 0:N.url)||(null===(O=R)||void 0===O||null===(k=O.fields)||void 0===k||null===(j=k.file)||void 0===j?void 0:j.url))&&x("img",{src:"".concat((null===(I=R)||void 0===I||null===(E=I.fields)||void 0===E||null===(P=E.file)||void 0===P?void 0:P.url)||(null===(S=F)||void 0===S||null===(T=S.fields)||void 0===T||null===(D=T.file)||void 0===D?void 0:D.url)||(null===(C=A)||void 0===C||null===(L=C.fields)||void 0===L||null===(M=L.file)||void 0===M?void 0:M.url)),alt:null===(H=A)||void 0===H?void 0:H.fields.description})))),Q&&x("div",{className:"section-hero-overlay"},(null===U||void 0===U||null===(V=U.fields.media)||void 0===V?void 0:V.fields.videoId)&&x("div",{className:"d-none d-xl-flex align-items-center justify-content-center",style:{zIndex:"auto"}},x(s.ComponentWistiaVideo,{videoId:U.fields.media.fields.videoId},x("div",{className:"text-white"},x(w.a,{playVideoText:!0,size:_.f.MEDIUM}))))),x("div",{className:"hero-layout-container"},x("div",{className:"editorial-hero-container mw-14 pt-7 pb-4 pb-md-5 pt-lg-5"},x("div",{className:"px-4_5 px-md-5_5 pr-lg-5 pl-lg-7"},x("header",{className:"hero-content"},x("div",{className:"mw-5_5 pr-lg-6 ml-0 position-relative"},x("div",null,G&&x("div",{className:"mb-3"},x("h5",{className:"display-5 mb-3"},G),x("div",{className:"accent-line md light"})),q&&x("h1",{className:"callout-1 mb-3"},q),Y&&x("p",{className:"ml-0 display-6 display-md-5 mb-4_5 white-space-pre-wrap"},Y),x("div",{className:"button-container d-flex flex-column flex-lg-row flex-wrap pt-1"},null===B||void 0===B?void 0:B.map(f)))))))))},O=l.createElement,k=function(e){return O("div",{className:"section-hero position-relative","data-test":"container.sectionHero"},Object(n.c)(e.background)?O(N,e):O(y,e))}},a6RD:function(e,t,i){"use strict";var n=i("oI91");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}t.__esModule=!0,t.noSSR=d,t.default=function(e,t){var i=r.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));if(n=o(o({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,i){return e.render(i,t)}),e.modules)){i=r.default.Map;var l={},a=e.modules();Object.keys(a).forEach((function(e){var t=a[e];"function"!==typeof t.then?l[e]=t:l[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=l}n.loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,d(i,n);delete n.ssr}return i(n)};a(i("q1tI"));var r=a(i("2qu3"));function a(e){return e&&e.__esModule?e:{default:e}}function d(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,i){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var l=((n=i("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=l},xhw8:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("q1tI"),l=i("KQPQ"),o=i("Ld6U"),r=n.createElement,a=function(e){var t=e.primaryPage,i=e.secondaryPages,n=e.playHeader;return t&&""!==t.path||i&&0!==i.length?r("div",{className:"mt-5 mt-md-5_5 mt-xl-6 px-2 px-md-4 mb-6 mb-md-6_5 mb-lg-5 mb-xl-5_5 mb-xxl-7_5"},function(e,t){var i,n;if(e&&""!==e.path){var a=e.subTitle,d=e.description;return r("div",{className:"main-featured-page text-dark"},r("div",{className:"container-fluid px-0"},r("div",{className:"row align-items-center mb-0"},r("div",{className:"col-12 col-lg-6 col-xl-7 align-self-start card-media media-resource-item rounded-1"},r(l.a,{href:e.path},t&&r(o.a,null),r("img",{src:null===(i=e.image)||void 0===i?void 0:i.url,alt:null===(n=e.image)||void 0===n?void 0:n.alt}))),r("div",{className:"col-12 col-lg-6 col-xl-5"},r(l.a,{href:e.path},r("div",{className:"mt-4_5 mt-lg-0 px-3 mr-0 px-md-4_5 px-lg-0 ml-lg-4_5 mr-lg-5 ml-xl-5 ml-xxl-6_5 mr-xxl-5_5"},r("h4",{className:"display-4 display-md-3 mt-4_5 mb-0 text-dark"},e.title),r("div",{className:"accent-line sm mt-2_5"}),a&&r("p",{className:"small mb-0 mt-2_5"},a),d&&r("h6",{className:"display-6 display-md-5 mt-4 mb-0 mr-0 mr-lg-5 text-dark"},d),r("span",{className:"h3 d-inline-block mt-4 mb-0 arrow"},"\u2192")))))))}}(t,n),i&&i.length>0&&r("div",{className:"featured-pages four-column mb-5 mt-5 mt-xl-6","data-test":"container.featuredPages"},i.map((function(e){return r("div",{key:e.title,className:"featured-page rounded-1"},function(e){var t,i;if(e)return r(l.a,{href:e.path},r("img",{src:null===(t=e.image)||void 0===t?void 0:t.url,alt:null===(i=e.image)||void 0===i?void 0:i.alt}),r("div",{className:"overlay"}),r("div",{className:"ribbon"}),r("div",{className:"ribbon-background"}),r("div",{className:"featured-text p-5 ml-n2"},r("h5",{className:"display-5 display-md-4 mb-0 featured-title"},e.title),r("span",{className:"h3 d-inline-block mt-3 mb-0 arrow"},"\u2192")))}(e))})))):r("div",{className:"mb-5 mb-md-5_5 mb-lg-6 mb-xxl-7"})}}},[["KPF8",2,1,6,0,3,4,7,5,8,9,10,11,12,14,16]]]);