(self.webpackChunklite=self.webpackChunklite||[]).push([[4129],{99171:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.18 2.6a1.82 1.82 0 0 1 3.64 0v2.07H2.18V2.6zm4.37 2.07V2.6C6.55 1.17 5.4 0 4 0a2.58 2.58 0 0 0-2.55 2.6v2.07c-.39 0-.75.17-1.03.46-.27.3-.42.7-.42 1.12v3.17a1.7 1.7 0 0 0 .42 1.12c.14.14.3.26.47.34.18.08.37.12.56.12h5.1c.39 0 .75-.17 1.03-.47.27-.3.42-.7.42-1.11V6.25a1.7 1.7 0 0 0-.42-1.12c-.14-.14-.3-.26-.47-.34a1.35 1.35 0 0 0-.56-.12z",fill:"#757575"});const i=function(e){return a.createElement("svg",r({width:8,height:11,viewBox:"0 0 8 11",fill:"none"},e),l)}},44642:(e,t,n)=>{"use strict";n.d(t,{VK:()=>E,zn:()=>b,kw:()=>h});var a,r=n(59713),l=n.n(r),i=n(63038),o=n.n(i),c=n(67294),s=n(92661),u=n(77280),d=n(92305),m=n(71341);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.Delete="delete",e.Reorder="reorder"}(a||(a={}));var g={showReorderView:!1,setShowReorderView:function(){},showBulkDeleteView:!1,setShowBulkDeleteView:function(){},moveOperations:[],deleteOperations:[],addMoveOperation:function(){},addDeleteOperation:function(){},removeDeleteOperation:function(){},resetOperations:function(){},isLoading:!1,setIsLoading:function(){},isBulkActionView:!1},v=(0,c.createContext)(g),E=function(){return(0,c.useContext)(v)},b=function(e){var t=e.children,n=(0,u.Wd)("action"),r=(0,c.useState)(n===a.Reorder),l=o()(r,2),i=l[0],s=l[1],d=(0,c.useState)(n===a.Delete),m=o()(d,2),p=m[0],f=m[1],g=(0,c.useState)([]),E=o()(g,2),b=E[0],h=E[1],w=(0,c.useState)([]),C=o()(w,2),x=C[0],y=C[1],k=(0,c.useState)(!1),I=o()(k,2),S=I[0],O=I[1],D=(0,c.useCallback)((function(e){h(b.concat({move:e}))}),[b]),R=(0,c.useCallback)((function(e){y(x.concat(e))}),[x]),P=(0,c.useCallback)((function(e){var t=x.filter((function(t){return t.entityId!==e.entityId}));y(t)}),[x]),V=(0,c.useCallback)((function(){i?h([]):y([])}),[i]);return c.createElement(v.Provider,{value:{showReorderView:i,setShowReorderView:s,showBulkDeleteView:p,setShowBulkDeleteView:f,moveOperations:b,deleteOperations:x,resetOperations:V,addMoveOperation:D,addDeleteOperation:R,removeDeleteOperation:P,isLoading:S,setIsLoading:O,isBulkActionView:i||p}},t)},h=function(e){var t=e.children,n=e.catalog,r=(0,s.di)("ShowUserList",{username:n.creator.username||"",catalogSlugId:(0,d.EJ)(n)}),l=(0,m.h)({queryParams:{action:a.Reorder}}),i=(0,m.h)({queryParams:{action:a.Delete}}),o=(0,c.useCallback)((function(){l(r)}),[l,r]),u=(0,c.useCallback)((function(){i(r)}),[i,r]);return c.createElement(v.Provider,{value:f(f({},g),{},{setShowReorderView:o,setShowBulkDeleteView:u})},t)}},52815:(e,t,n)=>{"use strict";n.d(t,{G:()=>X});var a=n(67154),r=n.n(a),l=n(63038),i=n.n(l),o=n(67294),c=n(24415),s=n(25267),u=n(38352),d=n(73917),m=n(68894),p=n(59713),f=n.n(p),g=n(44642),v=n(19416),E=n(13791),b=n(77355),h=n(20113),w=n(87691),C=function(e){var t=e.isVisible,n=e.hide,a=e.onConfirm,r=e.loading,l=e.confirmText,i=e.title,c=e.text,s=e.isDestructiveAction;return o.createElement(E.v,{isVisible:t,hide:n,confirmText:o.createElement(v.I,{loading:r,text:l}),isDestructiveAction:s,onConfirm:a,disableConfirm:r,hideOnConfirm:!1},o.createElement(b.x,{paddingBottom:"6px"},o.createElement(h.X6,{scale:"L"},i)),o.createElement(b.x,{paddingBottom:"32px"},o.createElement(w.F,{scale:"L"},c)))},x=n(25735);function y(e){var t=e.isVisible,n=e.hide,a=e.deleteCatalog,r=e.loading,l="Deleting this list will not delete any stories in it.";return(0,x.VB)({name:"enable_follow_list",placeholder:!1})&&(l="Deleting this list will remove it from Your library. If others have saved this list, it will also be deleted and removed from their library. ".concat(l)),o.createElement(C,{isVisible:t,hide:n,confirmText:"Delete",isDestructiveAction:!0,onConfirm:a,loading:r,title:"Delete list",text:l})}var k=n(85208),I=n(28655),S=n.n(I),O=n(92471),D=n(1109),R=n(77593),P=n(93310),V=n(61609),L=n(52069),B=n(97217);function j(){var e=S()(["\n  fragment UpdateCatalogDialog_catalog on Catalog {\n    id\n    name\n    description\n    visibility\n    type\n  }\n"]);return j=function(){return e},e}function T(e){var t=e.isVisible,n=e.hide,a=e.catalog,r=e.updateCatalog,l=e.loading,c=a.name,s=a.description,u=a.visibility,d=a.id,m=a.type,p=o.useState(c),f=i()(p,2),g=f[0],h=f[1],C=o.useState(!!s),x=i()(C,2),y=x[0],k=x[1],I=o.useState(s),S=i()(I,2),O=S[0],j=S[1],T=o.useState(u),_=i()(T,2),A=_[0],H=_[1],M=a.type===B.HQ.PREDEFINED_LIST,F=o.useCallback((function(e){h(e.target.value)}),[h]),U=o.useCallback((function(e){j(e.target.value)}),[j]),z=o.useCallback((function(){H(A===B.n2.PRIVATE?B.n2.PUBLIC:B.n2.PRIVATE)}),[A,H]),G=o.useCallback((function(){var e=g.trim(),t=null==O?void 0:O.trim();r({variables:{catalogId:d,attributes:{type:m,title:e!==c?e:null,description:t!==s?t:null,visibility:A!==u?A:null}}})}),[g,O,A,r,d,m,c,s,u]),Q=g.trim(),$=(null!==O?O.trim():null)===s&&Q===c&&A===u;return o.createElement(E.v,{isVisible:t,hide:n,confirmText:o.createElement(v.I,{loading:l}),isDestructiveAction:!1,onConfirm:G,disableConfirm:!M&&!Q||l||$||(0,D.G6)(g)||(0,D.z6)(O),hideOnConfirm:!1},o.createElement(b.x,{height:"400px"},o.createElement(b.x,{paddingBottom:"60px"},o.createElement(L.Dx,{scale:"L"},"Edit list")),o.createElement(b.x,{textAlign:"left",width:"400px",sm:{width:"100%"}},!M&&o.createElement(b.x,{paddingBottom:"20px"},o.createElement(R.n,{value:g,onChange:F,placeholder:"Give it a name",characterCountLimit:D.lp})),o.createElement(b.x,{paddingBottom:"20px"},y?o.createElement(b.x,{maxHeight:"170px",overflow:"auto"},o.createElement(R.n,{value:null!=O?O:void 0,onChange:U,placeholder:"Description",isMultiline:!0,autoFocus:!0,characterCountLimit:D.B0})):o.createElement(P.r,{onClick:function(){return k(!0)}},o.createElement(w.F,{scale:"L",color:"ACCENT"},"Add a description"))),o.createElement(b.x,null,o.createElement(V.X,{checked:A===B.n2.PRIVATE,onChange:z,textScale:"L"},"Make it private")))))}(0,O.Ps)(j());var _=n(75675),A=n(77545),H=n(78285),M=n(43487),F=n(50458);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=(0,m.O)(!1),n=i()(t,3),a=n[0],r=n[1],l=n[2];return[a,r,(0,o.useCallback)((function(){l(),e()}),[l,e])]}var Q=function(e){var t=e.catalog,n=e.viewer,a=e.ariaExpanded,r=e.ariaId,l=e.hidePopover,c=t.visibility,s=t.id,d=t.name,m=t.description,p=t.type,f=t.postItemsCount,v=t.disallowResponses,E=(0,g.VK)(),b=E.setShowReorderView,h=E.setShowBulkDeleteView,I=(0,M.v9)((function(e){return e.config.authDomain})),S=(0,H.w)(),O=(0,x.VB)({name:"enable_follow_list",placeholder:!1}),D=(0,A.sK)(s),R=i()(D,2),V=R[0],L=R[1],j=L.loading,U=L.error,Q=(0,A.qz)(s),$=i()(Q,2),K=$[0],N=$[1],q=N.loading,X=N.error,Y=G(l),Z=i()(Y,3),J=Z[0],W=Z[1],ee=Z[2],te=G(l),ne=i()(te,3),ae=ne[0],re=ne[1],le=ne[2],ie=G(l),oe=i()(ie,3),ce=oe[0],se=oe[1],ue=oe[2],de=G(l),me=i()(de,3),pe=me[0],fe=me[1],ge=me[2],ve=(0,k.O2)(t,ee,(function(e){window.history.replaceState(null,window.document.title,(0,F.ykG)(z(z({},t),{},{name:e}),I))})),Ee=i()(ve,2),be=Ee[0],he=Ee[1],we=he.loading,Ce=he.error,xe=(0,k.h6)({catalog:t,userId:n.id,onCompleted:function(){window.location.assign((0,F.HRw)(t.creator,I))}}),ye=xe.deleteCatalog,ke=xe.loading,Ie=xe.error,Se=(0,o.useCallback)((function(){ge(),we||be({variables:{catalogId:s,attributes:{title:d,type:p,visibility:c===B.n2.PRIVATE?B.n2.PUBLIC:B.n2.PRIVATE,description:m}}})}),[s,d,c,be,we,m,p,ge]),Oe=(0,o.useCallback)((function(){O&&c===B.n2.PUBLIC?fe():Se()}),[O,Se,c,fe]),De=(0,o.useCallback)((function(){l(),b(!0)}),[l]),Re=(0,o.useCallback)((function(){l(),h(!0)}),[l]);(0,o.useEffect)((function(){(Ce||Ie||U||X)&&S({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[Ce,Ie,U,X,S]);var Pe=(0,o.useCallback)((function(){j||(V(),l())}),[j,l]),Ve=(0,o.useCallback)((function(){q||(K(),l())}),[q,l]);return o.createElement(o.Fragment,null,o.createElement(u.Sl,null,o.createElement(T,{isVisible:J,hide:ee,catalog:t,updateCatalog:be,loading:we}),o.createElement(P.r,{"aria-controls":r,"aria-expanded":a,onClick:W},"Edit list info")),f>1&&o.createElement(u.Sl,null,o.createElement(P.r,{"aria-controls":r,"aria-expanded":a,onClick:Re},"Remove items")),o.createElement(u.Sl,null,o.createElement(P.r,{"aria-controls":r,"aria-expanded":a,onClick:Oe},"Make list ",c===B.n2.PUBLIC?"private":"public")),f>1&&o.createElement(u.Sl,null,o.createElement(P.r,{"aria-controls":r,"aria-expanded":a,onClick:De},"Reorder items")),o.createElement(u.Sl,null,o.createElement(_.w,{isVisible:ce,hide:ue,onConfirm:Pe,entityTypename:"Catalog"}),o.createElement(P.r,{"aria-controls":r,"aria-expanded":a,onClick:v?Ve:se},v?"Show responses":"Hide responses")),t.type!==B.HQ.PREDEFINED_LIST&&o.createElement(u.Sl,null,o.createElement(y,{isVisible:ae,hide:le,deleteCatalog:ye,loading:ke}),o.createElement(P.r,{"aria-controls":r,"aria-expanded":a,onClick:re},o.createElement(w.F,{scale:"M",color:"ERROR"},"Delete list"))),O&&o.createElement(C,{isVisible:pe,hide:ge,loading:!1,text:"If others have saved this list, it will be removed from their library.",confirmText:"Make private",title:"Make list private",onConfirm:Se}))},$=n(18627),K=n(66411),N=function(e){var t=e.catalog,n=e.ariaExpanded,a=e.hidePopover,r=t.id,l=t.viewerEdge.clapCount,i=(0,k.ok)().clapCatalog,c=(0,k.es)().flagCatalog,s=(0,$.Av)(),d=(0,K.pK)(),m=o.useCallback((function(){l&&(i({catalogId:r,numClaps:-l}),s.event("list.clientUnvote",{listId:r,unvoteCount:l,source:d}),a())}),[r,l,d,i,a]),p=o.useCallback((function(){c({catalogId:r}),a()}),[r,c,a]);return o.createElement(o.Fragment,null,o.createElement(u.mX,null,0!==l&&o.createElement(u.Sl,null,o.createElement(P.r,{onClick:m,"aria-expanded":n},"Undo applause for this list")),o.createElement(u.Sl,null,o.createElement(P.r,{onClick:p,"aria-expanded":n},"Report this list"))))},q=function(e){var t=e.catalog,n=e.viewer,a=e.iconStyle,r=(0,m.O)(!1),l=i()(r,4),s=l[0],p=l[2],f=l[3],g="catalogContentMenu",v=s?"true":"false",E=n.id===t.creator.id,b=o.useCallback((function(){return o.createElement(u.mX,null,E?o.createElement(Q,{catalog:t,ariaExpanded:v,ariaId:g,hidePopover:p,viewer:n}):o.createElement(N,{catalog:t,ariaExpanded:v,hidePopover:p}))}),[E,t,v,p,n]);return o.createElement(d.J,{ariaId:g,isVisible:s,hide:p,popoverRenderFn:b},o.createElement(c.c,{onClick:f,"aria-label":"More options",iconStyle:a}))},X=function(e){return o.createElement(s.I,null,(function(t){return t?o.createElement(q,r()({viewer:t},e)):null}))}},24129:(e,t,n)=>{"use strict";n.d(t,{l:()=>P});var a=n(67294),r=n(44642),l=n(52815),i=n(83263),o=n(84739),c=n(1109),s=n(25735),u=n(10648),d=n(14818),m=n(77355),p=n(93310),f=n(27323),g=n(87691),v=n(52069),E=n(18627),b=n(66411),h=n(14646),w=n(18122),C=n(92661),x=n(97217),y=n(99171),k=n(92305),I=n(87498),S=function(e){var t=e.catalog.listItemsConnection.items,n=(0,i.Q)(),r=!!(0,s.VB)({name:"enable_follow_list",placeholder:!1}),l=function(e){return{xs:e?140:100,sm:e?166:140,md:90,lg:166}}(r),o=function(e){return{xs:105,sm:105,md:e?144:166,lg:e?144:166}}(r);return a.useMemo((function(){return a.createElement(i.f,{coverHeight:o[n],coverWidth:l[n],catalogItems:t,isEmbeded:!!r})}),[n,t])},O=function(e){return{marginBottom:"1px","& path":{fill:e.baseColor.text.lighter}}},D={position:"absolute",inset:"0"},R={pointerEvents:"none"},P=function(e){var t=e.catalog,n=t.name,P=t.visibility,V=t.id,L=t.predefined,B=t.creator,j=!!(0,s.VB)({name:"enable_follow_list",placeholder:!1}),T=(0,c.SZ)(t),_=P!==x.n2.PUBLIC,A=L?(0,k.S6)(L):n,H=(0,E.Av)(),M=(0,b.pK)(),F=(0,i.Q)(),U=(0,w.g)({onPresentedFn:function(){H.event("list.presented",{listId:t.id,source:M})}}),z=(0,h.I)(),G="sm"===F||"xs"===F,Q=(0,C.qt)("ShowUserList",{username:t.creator.username||"",catalogSlugId:(0,k.EJ)(t)}),$=(0,o.B)(B);return a.createElement(m.x,{ref:U,border:"BASE_LIGHTER",borderRadius:"4px",marginBottom:"40px",maxWidth:G?"100%":"740px",width:"100%",display:"flex",justifyContent:"space-between",backgroundColor:"BASE_LIGHT",flexDirection:G?"column":"row",position:"relative"},a.createElement(p.r,{href:Q,rules:D}),a.createElement(m.x,{key:V,display:"flex",flexDirection:"column",padding:j?"24px 24px 10px":"24px",flexGrow:"1",flexShrink:"0",flexBasis:"0",justifyContent:"space-between",wordBreak:"break-word"},j&&a.createElement(m.x,{display:"flex"},a.createElement(f.P,{href:$},a.createElement(d.z,{miroId:B.imageId||I.gG,alt:B.name||"",diameter:24,freezeGifs:!0})),a.createElement(m.x,{paddingLeft:"8px"},a.createElement(p.r,{href:$},a.createElement(g.F,{scale:"M",color:"DARKER",clamp:1},B.name)))),a.createElement(m.x,{marginTop:j?"12px":"0"},a.createElement(v.Dx,{clamp:2,scale:G?"XS":"S"},A)),a.createElement(m.x,{display:"flex",alignItems:"center",justifyContent:"space-between"},a.createElement(m.x,{display:"flex",margin:"6px 0"},a.createElement(g.F,{scale:"S",color:"LIGHTER"},T||"No stories"),_&&a.createElement(m.x,{paddingLeft:"8px"},a.createElement(y.Z,{className:z(O)}))),j&&a.createElement(m.x,{display:"flex",position:"relative"},a.createElement(u.b,{catalog:t}),a.createElement(r.kw,{catalog:t},a.createElement(l.G,{catalog:t}))))),a.createElement("div",{className:z(R)},a.createElement(S,{catalog:t})))}},77545:(e,t,n)=>{"use strict";n.d(t,{sK:()=>f,qz:()=>g,SM:()=>E,VC:()=>b});var a=n(63038),r=n.n(a),l=n(28655),i=n.n(l),o=n(92471),c=n(21919),s=n(97217),u=n(78285);function d(){var e=i()(["\n  mutation UpdateCatalogLockResponsesMutation(\n    $catalogId: String!\n    $attributes: UpdateCatalogInput!\n  ) {\n    updateCatalog(catalogId: $catalogId, attributes: $attributes) {\n      __typename\n      ... on Catalog {\n        id\n        responsesLocked\n      }\n    }\n  }\n"]);return d=function(){return e},e}function m(){var e=i()(["\n  mutation UpdateCatalogDisallowResponsesMutation(\n    $catalogId: String!\n    $attributes: UpdateCatalogInput!\n  ) {\n    updateCatalog(catalogId: $catalogId, attributes: $attributes) {\n      __typename\n      ... on Catalog {\n        id\n        disallowResponses\n      }\n    }\n  }\n"]);return m=function(){return e},e}var p=(0,o.Ps)(m()),f=function(e){var t=(0,u.w)();return(0,c.D)(p,{variables:{catalogId:e,attributes:{type:s.HQ.LISTS,disallowResponses:!0}},onCompleted:function(){t({message:"Responses are now hidden for this list."})}})},g=function(e){var t=(0,u.w)();return(0,c.D)(p,{variables:{catalogId:e,attributes:{type:s.HQ.LISTS,disallowResponses:!1}},onCompleted:function(){t({message:"Responses are now shown for this list."})}})},v=(0,o.Ps)(d()),E=function(e,t,n,a){var l=(0,c.D)(v,{variables:{catalogId:a,attributes:{type:s.HQ.LISTS,responsesLocked:!0}},onCompleted:function(){e.event("responses.locked",{catalogId:a,source:t}),n()}});return r()(l,1)[0]},b=function(e,t){var n=(0,c.D)(v,{variables:{catalogId:t,attributes:{type:s.HQ.LISTS,responsesLocked:!1}},onCompleted:function(){e()}});return r()(n,1)[0]}},10648:(e,t,n)=>{"use strict";n.d(t,{b:()=>h});var a=n(67294),r=n(85208),l=n(25735),i=n(25550),o=n(26350),c=n(78817),s=n(77355),u=n(30020),d=n(45550);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=a.createElement("path",{d:"M17.5 3.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7.75z",fill:"currentColor"}),f=a.createElement("path",{d:"M10.5 2.75h-6a2 2 0 0 0-2 2v11.5",stroke:"currentColor",strokeLinecap:"round"});const g=function(e){return a.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),p,f)};var v=function(e){return{padding:"8px 2px","& svg":{color:e.baseColor.text.lighter},":hover svg":{color:e.baseColor.fill.darker},":focus svg":{color:e.baseColor.fill.darker}}},E=function(e){var t=e.children,n=e.onClick,r=e.disabled;return a.createElement(c.P,{rules:v,onClick:n,disabled:r},t)},b=function(e){var t=e.catalog,n=e.viewerId,l=(0,r.Yz)(n,t.id),i=l.followCatalog,o=l.loading,c=(0,r.mC)(n,t.id),s=c.unfollowCatalog,u=c.loading,m=t.viewerEdge.isFollowing,p=m?s:i;return a.createElement(E,{onClick:p,disabled:o||u},m?a.createElement(d.Z,null):a.createElement(g,null))},h=function(e){var t=e.catalog,n=e.marginLeft,r=(0,l.VB)({name:"enable_follow_list",placeholder:!1}),c=(0,i.r)().viewerId;return r&&t.creator.id!==c?a.createElement(s.x,{marginLeft:n,marginRight:"8px"},a.createElement(u._,{tooltipText:t.viewerEdge.isFollowing?"Remove from Your library":"Save list",targetDistance:10},c?a.createElement(b,{catalog:t,viewerId:c}):a.createElement(o.R,{operation:"register",susiEntry:"follow_list"},a.createElement(E,null,a.createElement(g,null))))):null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/4129.104dffef.chunk.js.map