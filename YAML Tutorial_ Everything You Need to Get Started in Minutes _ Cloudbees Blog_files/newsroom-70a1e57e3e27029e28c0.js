_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"2HWO":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("apFO"),i=n("MYlG"),s=n("TSYQ"),l=n.n(s),u=n("AdYv"),c=n("EHwS"),d=o.a.createElement,f=!0;t.default=function(e){var t=Object(c.a)("CloudBees Newsroom","News from the Hive","https://www.cloudbees.com/newsroom");return d(a.DefaultLayout,{page:t},e.hero&&d("div",{className:"newsroom-hub-hero"},d(i.b,{sections:[e.hero]})),e.secondaryNav&&d("div",{className:"newsroom-secondary-nav"},d(i.b,{sections:[e.secondaryNav]})),e.pressReleaseIntro&&d("div",{className:"newsroom-hub-press-release-introduction"},d(i.b,{sections:[e.pressReleaseIntro]})),e.newsPages&&d("div",{className:l()("resource-list-container mw-13"),"data-test":"container.resourceList.newsPages"},d("div",{className:"row no-gutters"},e.newsPages.slice(0,3).map((function(e){return d("div",{key:null===e||void 0===e?void 0:e.slug,className:"d-flex col-12 col-md-6 col-xxl-4 px-2 px-md-3_5 px-lg-2 px-xl-3_5 mb-4_5 mb-lg-5_5"},d(u.a,e))})))),e.externalMediaHeader&&d("div",{className:"newsroom-hub-external-media-header"},d(i.b,{sections:[e.externalMediaHeader]})),e.externalNewsPages&&d("div",{className:l()("resource-list-container mw-13"),"data-test":"container.resourceList.externalNewsPages"},d("div",{className:"row no-gutters"},e.externalNewsPages.slice(0,9).map((function(e){return d("div",{key:null===e||void 0===e?void 0:e.slug,className:"d-flex col-12 col-md-6 col-xxl-4 px-2 px-md-3_5 px-lg-2 px-xl-3_5 mb-4_5 mb-lg-5_5"},d(u.a,e))})))),e.externalMediaCta&&d("div",{className:"newsroom-hub-external-media-cta"},d(i.b,{sections:[e.externalMediaCta]})),e.brandResources&&d("div",{className:"newsroom-hub-brand-resources"},d(i.b,{sections:[e.brandResources]})),e.executives&&d("div",{className:"newsroom-hub-executives"},d(i.b,{sections:[e.executives]})),e.mediaContactCTA&&d("div",{className:"newsroom-media-contacts"},d(i.b,{sections:[e.mediaContactCTA]})))}},"2qu3":function(e,t,n){"use strict";var r=n("oI91"),o=n("/GRZ"),a=n("i2R6");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var c,d=(c=n("q1tI"))&&c.__esModule?c:{default:c},f=n("8L3h"),m=n("jwwS");var v=[],p=[],h=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function b(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=y(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function g(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function w(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:g,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new _(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack){var a=n.webpack();p.push((function(e){var t,n=l(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){o();var a=d.default.useContext(m.LoadableContext),i=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var _=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return w(y,e)}function N(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return N(e,t)}))}x.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(b,e)},x.preloadAll=function(){return new Promise((function(e,t){N(v).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};N(p,e).then(n,n)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var O=x;t.default=O},"9GWI":function(e,t,n){"use strict";var r=n("4BeY"),o=n.n(r),a=n("IaFt"),i=n.n(a),s=new o.a({id:"calendar",use:"calendar-usage",viewBox:"0 0 448 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="calendar"><path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z" /></symbol>'});i.a.add(s);t.a=s},AdYv:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("q1tI"),o=n("KQPQ"),a=n("EGGI"),i=n("TSYQ"),s=n.n(i),l=n("JYgz"),u=n("hRPy"),c=n("34It"),d=n("m1+h"),f=n("9GWI"),m=r.createElement,v=function(e){var t,n=function(e){var t,n=e.contentfulMetadata.tags.filter((function(e){var t;return null===e||void 0===e||null===(t=e.id)||void 0===t?void 0:t.includes("industry")}));if(n&&0!==n.length){var r,o=n[0],a=null===o||void 0===o||null===(t=o.id)||void 0===t?void 0:t.split("industry");if(2===(null===a||void 0===a?void 0:a.length))return null===(r=a[1].match(/[A-Z][a-z]+/g))||void 0===r?void 0:r.join(" ")}}(e),r=null===(t=e.content)||void 0===t?void 0:t.__typename,i=function(e){var t,n=null,r=!1;"ExternalNews"===(null===(t=e.content)||void 0===t?void 0:t.__typename)?n=e.content.date:(n=e.publishedDate,r=!0);var o=n?Object(d.a)(n):void 0;return o&&r&&(o="Release Date: ".concat(o)),o}(e),v=function(e){var t,n=Object(l.a)(e),r={width:800,height:540,fit:"pad"},o="p-3_5";switch(null===(t=e.content)||void 0===t?void 0:t.__typename){case"Blog":r={width:822,height:562,fit:"fill"},o=void 0;break;case"VideoPage":var i,s,u=null===(i=e.content)||void 0===i||null===(s=i.video)||void 0===s?void 0:s.videoId;if(u)return m(c.ComponentWistiaThumbnail,{size:{width:320,height:260},srcSets:[{width:800,height:540,breakpoint:991}],videoId:u});break;case"ExternalNews":case"News":case"SecurityAdvisory":return}return m(a.Image,{resize:r,cssClasses:o,asset:n})}(e),p="ExternalNews"===r?e.content.newsOutlet:null;return m(o.a,{target:"ExternalNews"===r?"_blank":"_self",href:Object(u.d)(e),className:s()(v?"borderless align-self-baseline":"flex-grow-1","d-flex flex-column align-self-stretch flex-lg-row card resources-card rounded-1 action-depth")},v?m("div",{className:"media-container p-lg-2"},m("div",{className:"card-media media-resource-item rounded-1 border"},v)):m("div",{className:"hover-treatment d-none d-lg-block"}),m("div",{className:"content-container flex-grow-1 pt-4_5 pb-4 px-2 px-lg-4_5"},m("div",{className:"d-flex flex-column h-100"},m("h4",{className:"title display-5 m-0 p-0"},function(e){var t,n;switch(null===(t=e.content)||void 0===t?void 0:t.__typename){case"Blog":case"CustomerStory":case"ExternalNews":case"News":return e.content.title||"";case"VideoPage":return(null===(n=e.content.video)||void 0===n?void 0:n.title)||"";case"SecurityAdvisory":var r,o="CloudBees";return 1===(null===(r=e.content.categories)||void 0===r?void 0:r.length)&&(o=e.content.categories[0]||""),"".concat(o," Security Advisory");case"Whitepaper":return e.content.title||"";default:return""}}(e)),m("div",{className:"meta-footer pt-2_5"},m("div",{className:"meta-container d-md-flex align-items-end"},m("div",{className:"meta-categories"},m("div",{className:"page-type"},m("div",{className:s()("accent-line sm mb-2"),"aria-hidden":"true"}),m("small",{className:"meta-item meta-primary text-uppercase d-block pt-1"},Object(l.b)(e))),n&&m("small",{className:"meta-item meta-secondary d-block pt-1"},n)),function(e,t){return!(!e||!t)&&["News","SecurityAdvisory","ExternalNews"].includes(t)}(i,r)&&m("div",{className:"d-flex align-items-center w-100 pb-md-0 border-md-bottom-0"},m("svg",{width:16,height:16,className:"mr-2",viewBox:f.a.viewBox,preserveAspectRatio:"xMidYMin"},m("use",{xlinkHref:"#".concat(f.a.id)})),m("div",{className:"small text-nowrap"},i)),function(e){var t,n,r=void 0;if("CustomerStory"===(null===(t=e.content)||void 0===t?void 0:t.__typename)||"Blog"===(null===(n=e.content)||void 0===n?void 0:n.__typename)){var o=e.content.readingTime;o&&(r=m("small",{className:"text-muted"},o," min read"))}return r&&m("div",{className:"hidden-content ml-md-auto mt-1_5 mr-1_5 align-self-end"},m("small",null,r))}(e)),"ExternalNews"===r&&m("div",{className:"mt-2"},m("span",{className:"badge badge-dark background-gray-dark rounded-3 px-1_5"},p))))))}},EHwS:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t,n){return{sys:{id:""},fields:{title:e,seo:{fields:{title:e,description:t,canonical:n}}}}}},JYgz:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n("yiHq"),o=function(e){var t,n;if("fields"in e)switch(null===(t=e.fields.content)||void 0===t?void 0:t.sys.contentType.sys.id){case"customerStory":return"Customer Story";case"blog":return"Blog";default:return"Content"}else switch(null===(n=e.content)||void 0===n?void 0:n.__typename){case"CustomerStory":return"Customer Story";case"Blog":return"Blog";case"VideoPage":return"Video";default:return""}},a=function(e){var t,n,o,a,i,s,l,u,c,d,f,m;if("fields"in e)switch(null===(t=e.fields.content)||void 0===t?void 0:t.sys.contentType.sys.id){case"customerStory":return null===(n=e.fields.content.fields.company)||void 0===n||null===(o=n.fields)||void 0===o?void 0:o.logo;case"blog":return e.fields.content.fields.heroImage;case"news":var v=e.fields.content.fields.content;return v?Object(r.getFirstImage)(v):void 0}else switch(null===(a=e.content)||void 0===a?void 0:a.__typename){case"Whitepaper":return{fields:{file:{url:null===(i=e.content)||void 0===i||null===(s=i.whitepaper)||void 0===s||null===(l=s.image)||void 0===l?void 0:l.url}}};case"CustomerStory":return{fields:{file:{url:null===(u=e.content)||void 0===u||null===(c=u.company)||void 0===c||null===(d=c.logo)||void 0===d?void 0:d.url}}};case"Blog":return{fields:{file:{url:null===(f=e.content)||void 0===f||null===(m=f.heroImage)||void 0===m?void 0:m.url}}}}}},Vvt1:function(e,t,n){e.exports=n("a6RD")},a6RD:function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a(a({},r),e));if(r=a(a({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=i.default.Map;var o={},s=e.modules();Object.keys(s).forEach((function(e){var t=s[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};s(n("q1tI"));var i=s(n("2qu3"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},"m1+h":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("sWYD"),o=n("4+6U"),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/dd/yyyy",n=e.substring(0,10);return Object(r.a)(Object(o.a)(n),t)}},pK2B:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newsroom",function(){return n("2HWO")}])}},[["pK2B",2,1,6,0,3,4,7,5,8,9,10,11,12,13,14,16]]]);