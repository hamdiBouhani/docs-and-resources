(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{Uoba:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var l=i("q1tI"),n=i("TSYQ"),a=i.n(n),s=l.createElement,o=function(e){var t=function(e){switch(e){case"center-down":return{x1:"50%",x2:"50%",y1:"0%",y2:"100%",strokeWidth:"2"};case"left-down":return{x1:"25%",x2:"25%",y1:"0%",y2:"100%",strokeWidth:"2"};case"right-down":return{x1:"75%",x2:"75%",y1:"0%",y2:"100%",strokeWidth:"2"};case"horizontal-right":return{x1:"25%",x2:"75%",y1:"0%",y2:"0%",strokeWidth:"4"};case"horizontal-left":return{x1:"75%",x2:"25%",y1:"0%",y2:"0%",strokeWidth:"4"};default:return null}}(e.lineType);return t&&s("div",{className:a()("cb-line-spacer",e.className,{"with-dot":e.dot,"adapt-to-parent":e.adaptToParent})},s("div",{className:"cb-line-spacer__inner","data-cb-anim-fade":e.delay},s("svg",null,s("line",{x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stroke:"#194590",strokeDasharray:"5 5",strokeWidth:t.strokeWidth}))))}},ybXx:function(e,t,i){"use strict";i.d(t,"f",(function(){return w})),i.d(t,"e",(function(){return k})),i.d(t,"d",(function(){return T})),i.d(t,"g",(function(){return M})),i.d(t,"a",(function(){return C})),i.d(t,"c",(function(){return L})),i.d(t,"b",(function(){return W}));var l=i("q1tI"),n=i("Lz0k"),a=i("34It"),s=i("Ld6U"),o=i("qHib"),d=i("TSYQ"),c=i.n(d),r=i("yiHq"),m=i("EGGI"),u=l.createElement,p=function(e){var t=e.preTitle,i=e.title,l=e.image,n=e.content,a=e.button;return i||n||l?u("div",{className:"media-card"},l&&u("div",{className:"media-card-image-container mb-4_5"},u(m.Image,{resize:{width:600},cssClasses:"rounded-1",asset:l})),(i||n)&&u(T,{preTitle:t,title:i,content:n,button:a})):null},v=l.createElement,g=function(e){var t=e.preTitle,i=e.title,l=e.icon,n=e.content,a=e.button;return i||n||l?v("div",{className:"icon-card"},l&&v("div",{className:"icon-card-image-container mb-4_5 mb-lg-0 pr-0 pr-lg-4"},v(m.Image,{resize:{width:200},cssClasses:"icon-size size-10 w-auto",asset:l})),(i||n)&&v(T,{preTitle:t,title:i,content:n,button:a})):null},f=i("HALo"),y=l.createElement,N=function(e){var t,i,l,n,a,s;return y("li",{"data-test":"container.listItem",className:c()("list-unstyled",e.className)},e.title&&y("div",{className:"d-flex align-items-start"},(null===(t=e.icon)||void 0===t?void 0:t.fields.file.url)&&y("img",{className:"icon-size size-5 mr-3_5",src:null===(i=e.icon)||void 0===i?void 0:i.fields.file.url,alt:null===(l=e.icon)||void 0===l?void 0:l.fields.description}),y("h4",{className:c()("display-4 mb-2")},e.title)),e.content&&y("div",{className:"d-flex align-items-start"},!e.title&&(null===(n=e.icon)||void 0===n?void 0:n.fields.file.url)&&y("img",{className:"icon-size size-5 mr-3_5",src:null===(a=e.icon)||void 0===a?void 0:a.fields.file.url,alt:null===(s=e.icon)||void 0===s?void 0:s.fields.description}),y("p",{className:c()("display-6",{"list-unstyled ml-5 pl-2":e.title&&e.icon})},e.content)),!e.lastItem&&y("div",{className:c()("accent-line gray mt-4_5",{"ml-5":e.icon})}))},x=l.createElement,b=function(e){var t,i=e.listItems?(null===e||void 0===e?void 0:e.listItems.length)-1:0;return x(l.Fragment,null,e&&(null===e||void 0===e?void 0:e.listItems)&&(null===e||void 0===e?void 0:e.listItems.length)>1&&x("ul",{"data-test":"container.bulletedList",className:"bulleted-list m-0 p-0"},null===(t=e.listItems)||void 0===t?void 0:t.map((function(e,t){return x(N,Object(f.a)({key:e.sys.id,lastItem:t===i},e.fields,{className:"pt-4_5"}))}))))},h=i("Uoba"),I=l.createElement,_=function(e){var t,i,l,n=e.image,a=e.align;if(!n)return null;var s=null===(t=n.fields.asset)||void 0===t?void 0:t.fields.file.url,o=(null===(i=n.fields.tabletImage)||void 0===i?void 0:i.fields.file.url)||s,d=(null===(l=n.fields.mobileImage)||void 0===l?void 0:l.fields.file.url)||s;return I("div",{"data-test":"simple-image",className:"p-0 m-0"},I("div",{className:"media-image-container d-flex row ".concat(a?"justify-content-center justify-content-lg-".concat(a):"justify-content-center")},I("picture",null,s&&I("source",{srcSet:s,media:"(min-width: 1000px)"}),o&&I("source",{srcSet:o,media:"(min-width: 768px)"}),d&&I("source",{srcSet:d,media:"(min-width: 576px)"}),(s||o||d)&&I("img",{className:"rounded-1 mw-100",src:"".concat(d||o||s),alt:null===n||void 0===n?void 0:n.fields.name}))))},w=function(e){var t,i=e.video;return null!==i&&void 0!==i&&null!==(t=i.fields)&&void 0!==t&&t.videoId?I("div",{"data-test":"simple-video",className:"media-video-container w-100"},I(a.ComponentWistiaThumbnail,{videoId:i.fields.videoId,noPlayButton:!0,size:{width:2600,height:1400},cssClasses:"rounded-1"}),I("div",{className:"shadow w-100 h-100 rounded-1"}),I("div",{className:"play-button-container"},I(a.ComponentWistiaVideo,{videoId:i.fields.videoId},I("div",{className:"text-white"},I(s.a,{size:o.f.MEDIUM}))))):null},k=function(e){var t=e.media,i=e.align,l=null===t||void 0===t?void 0:t.sys.contentType.sys.id;return"moduleImage"===l?I(_,{image:t,align:i}):"video"===l?I(w,{video:t}):null},T=function(e){var t=e.preTitle,i=e.title,l=e.image,a=e.content,s=e.button,o="string"===typeof a?a:I(r.RichText,{content:a});return I("div",{className:"simple-content"},t&&I("div",{"data-test":"content.preTitle"},I("h6",{className:"display-5 mb-1_5"},t),I("div",{className:c()("accent-line md mb-3_5")})),i&&I("h3",{"data-test":"content.title",className:"display-4 mb-3_5"},i),l&&I("div",{className:"my-4_5"},I(m.Image,{asset:l})),o&&I("h6",{"data-test":"content.text",className:"display-6 display-lg-5 mb-0"},o),(null===s||void 0===s?void 0:s.fields.label)&&I("div",{"data-test":"container.content.button",className:"simple-content-button-container d-block mt-4_5 mb-4"},I(n.a,null===s||void 0===s?void 0:s.fields)))},z=function(e){var t,i,a,s,o;return I(l.Fragment,null,e.list&&(null===(t=e.list.fields)||void 0===t?void 0:t.listItems)&&e.list.fields.listItems.length>1&&I("div",{className:"simple-list"},e.preTitle&&I("div",{"data-test":"list.preTitle"},I("h5",{className:"display-5 mb-1_5"},e.preTitle),I("div",{className:c()("accent-line md mb-3_5")})),e.title&&I("h3",{"data-test":"list.title",className:"display-3 mb-2"},e.title),e.list&&I(b,{listItems:null===(i=e.list)||void 0===i?void 0:i.fields.listItems}),(null===(a=e.button)||void 0===a?void 0:a.fields.label)&&I("div",{"data-test":"container.list.button",className:c()("simple-list-button-container d-block mt-4_5 pt-4_5 mb-4",{"ml-5":null===(s=e.list.fields.listItems[0].fields)||void 0===s?void 0:s.icon})},I(n.a,null===(o=e.button)||void 0===o?void 0:o.fields))))},M=function(e){if(e)return e.includes("\n")?e.split("\n").map((function(e,t){return I("span",{key:t,style:{display:"block",minHeight:"1.2em"}},e)})):e},C=function(e){var t=e.cards;if(!t||(null===t||void 0===t?void 0:t.length)<1)return null;var i=t[0].sys.contentType.sys.id,l=t.length<3,n=4===t.length||8===t.length;return I("div",{className:c()("card-grid",{"layout-xxl-2-col":l},{"layout-xxl-4-col":n})},t&&t.map((function(e,t){return I("div",{key:"card-".concat(e.sys.id,"-").concat(t),className:"card-container p-0"},"mediaCard"===i&&I(p,e.fields),"iconCard"===i&&I(g,e.fields))})))},E="px-3 px-md-5 px-lg-0 mb-4_5",L=function(e){var t=I(l.Fragment,null);switch(e.typeId){case"sectionMediaList":t=I(z,e);break;case"sectionMediaCopy":t=I(T,e);break;default:return null}return I("div",{className:"container mw-14 p-0"},I("div",{className:"row pt-4_5 pb-5 pt-md-5 pb-md-5_5 py-lg-6_5"},I("div",{className:"".concat(e.horizontallyFlip?"content-container col-12 col-lg-6 col-xl-5 order-2 order-lg-1 p-0 pr-lg-5_5 pr-xxl-6 pl-xl-5 pl-xxl-7 pt-5 pt-lg-0":"media-container col-12 col-lg-6 col-xl-7 p-0")},e.horizontallyFlip?I("div",{className:c()(E,{"mt-lg-3":"sectionMediaList"===e.typeId},{"mt-lg-5_5":"sectionMediaCopy"===e.typeId})},t):I(k,{media:null===e||void 0===e?void 0:e.media,align:"end"})),I("div",{className:"".concat(e.horizontallyFlip?"media-container col-12 col-lg-6 col-xl-7 order-1 order-lg-2 p-0":"content-container col-12 col-lg-6 col-xl-5 p-0 pl-lg-5_5 pl-xxl-6 pr-xl-5 pr-xxl-7 pt-5 pt-lg-0")},e.horizontallyFlip?I(k,{media:null===e||void 0===e?void 0:e.media,align:"start"}):I("div",{className:c()(E,{"mt-lg-3":"sectionMediaList"===e.typeId},{"mt-lg-5_5":"sectionMediaCopy"===e.typeId})},t))))},W=function(e){var t=I(l.Fragment,null);switch(e.typeId){case"sectionMediaList":t=I(z,e);break;case"sectionMediaCopy":t=I(T,e);break;default:return null}var i=I("div",{className:"serpentine-lines"},I(h.a,{lineType:"left-down",className:"serpentine-line"}),I(h.a,{lineType:"horizontal-right",className:"serpentine-line horizontal"}),I(h.a,{lineType:"right-down",className:"serpentine-line"})),n=I("div",{className:"serpentine-lines"},I(h.a,{lineType:"right-down",className:"serpentine-line"}),I(h.a,{lineType:"horizontal-left",className:"serpentine-line horizontal"}),I(h.a,{lineType:"left-down",className:"serpentine-line"})),a="right"===e.alignMedia;return I("div",{className:c()("container mw-14 p-0",{"pt-4_5 pt-md-5 pt-lg-6_5":e.firstEntry},{"pb-5 pb-md-5_5 pb-lg-6_5":e.lastEntry})},I("div",{className:"row"},I("div",{className:"".concat(a?"content-container col-12 col-lg-6 col-xl-5 order-2 order-lg-1 p-0 pr-lg-5_5 pr-xxl-6 pl-xl-5 pl-xxl-7 pt-5 pt-lg-0":"media-container col-12 col-lg-6 col-xl-7 p-0")},a?I("div",{className:c()(E,{"mt-lg-3":"sectionMediaList"===e.typeId},{"mt-lg-5_5":"sectionMediaCopy"===e.typeId})},t):I(k,{media:null===e||void 0===e?void 0:e.media,align:"end"})),I("div",{className:"".concat(a?"media-container col-12 col-lg-6 col-xl-7 order-1 order-lg-2 p-0":"content-container col-12 col-lg-6 col-xl-5 p-0 pl-lg-5_5 pl-xxl-6 pr-xl-5 pr-xxl-7 pt-5 pt-lg-0")},a?I(k,{media:null===e||void 0===e?void 0:e.media,align:"start"}):I("div",{className:c()(E,{"mt-lg-3":"sectionMediaList"===e.typeId},{"mt-lg-5_5":"sectionMediaCopy"===e.typeId})},t))),I("div",{className:"d-none d-lg-block"},!0!==e.lastEntry&&I("div",null,a?n:i)))}}}]);