(self.webpackChunklite=self.webpackChunklite||[]).push([[5387],{42130:(e,n,i)=>{"use strict";i.d(n,{Z:()=>o});var t=i(67294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var l=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z",fill:"#000"});const o=function(e){return t.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),l)}},75011:(e,n,i)=>{"use strict";i.d(n,{M:()=>r});var t=i(319),a=i.n(t),l=i(68216),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogContentCreatorMenu_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"postItemsCount"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"disallowResponses"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"UpdateCatalogDialog_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"catalogUrl_catalog"}}]}}].concat(a()(l.$m.definitions),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"UpdateCatalogDialog_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]),a()(l.Ui.definitions))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogContentMenu_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogContentNonCreatorMenu_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogContentCreatorMenu_catalog"}}]}}].concat(a()(l.$m.definitions),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogContentNonCreatorMenu_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}}]}}]),a()(o.definitions))}},97147:(e,n,i)=>{"use strict";i.d(n,{c:()=>s});var t=i(319),a=i.n(t),l=i(68216),o=i(13740),r=i(82002),d=i(47282),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"listItemsConnection"},name:{kind:"Name",value:"itemsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PreviewCatalogCovers_catalogItemV2"}}]}}]}}]}}].concat(a()(d.x.definitions))},c=i(75011),m=i(32950),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItem_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"getCatalogSlugId_Catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"formatItemsCount_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogContentMenu_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SaveCatalogButton_catalog"}}]}}].concat(a()(l.$m.definitions),a()(o.g.definitions),a()(r.B.definitions),a()(u.definitions),a()(c.M.definitions),a()(m.T.definitions))}},47282:(e,n,i)=>{"use strict";i.d(n,{x:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PreviewCatalogCovers_catalogItemV2"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogItemV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"entity"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"alt"}}]}}]}}]}}]}}]}},39210:(e,n,i)=>{"use strict";i.d(n,{W:()=>a,WU:()=>l,dT:()=>o,u7:()=>r,Ln:()=>d});var t=i(97217),a=50,l=20,o=20,r=10,d=function(e){var n=e.limit,i=e.withCatalogDetails,a=void 0!==i&&i;return{userId:e.userId,pagingOptions:{limit:n},type:t.HQ.LISTS,withCatalogDetails:a}}},24415:(e,n,i)=>{"use strict";i.d(n,{c:()=>m});var t=i(67154),a=i.n(t),l=i(6479),o=i.n(l),r=i(67294),d=i(6729),u=i(93310),c=i(42130),m=function(e){var n=e.iconStyle,i=void 0===n?"ICON":n,t=o()(e,["iconStyle"]);return r.createElement(u.r,a()({rules:["ICON_SUBTLE"===i?d.OL:d.Yq,{padding:"8px"}]},t),r.createElement(c.Z,null))}},19416:(e,n,i)=>{"use strict";i.d(n,{I:()=>o});var t=i(67294),a=i(77355),l=i(87529),o=function(e){var n=e.loading,i=e.text,o=void 0===i?"Done":i;return t.createElement(a.x,{display:"inline-flex",alignItems:"center",tag:"span"},o,n&&t.createElement(a.x,{paddingLeft:"10px",tag:"span"},t.createElement(l.T,{size:"18px"})))}},82002:(e,n,i)=>{"use strict";i.d(n,{n:()=>t,B:()=>a});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"getCatalogMiroURLForMetadata_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"thumbnailImage"}}]}}]},a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"formatItemsCount_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postItemsCount"}}]}}]}},1109:(e,n,i)=>{"use strict";i.d(n,{KB:()=>v,fg:()=>f,Fd:()=>g,SZ:()=>p,gs:()=>N,C2:()=>C,lp:()=>b,B0:()=>y,z6:()=>S,G6:()=>F});var t=i(28655),a=i.n(t),l=i(92471),o=i(23450),r=i.n(o),d=i(67294),u=i(25550),c=i(97217),m=i(46696);function s(){var e=a()(["\n  fragment formatItemsCount_catalog on Catalog {\n    postItemsCount\n  }\n"]);return s=function(){return e},e}function k(){var e=a()(["\n  fragment getCatalogMiroURLForMetadata_catalog on Catalog {\n    thumbnailImage\n  }\n"]);return k=function(){return e},e}var v=function(){var e=(0,u.r)().viewerId;return(0,d.useCallback)((function(n){return e===n}),[e])},f=function(e){return v()(e)},g=function(e){return(0,m.W6)({miroId:e.thumbnailImage})},p=function(e){var n=e.postItemsCount;return n>0?"".concat(e.postItemsCount," ").concat(r()("story",n)):""},N=((0,l.Ps)(k()),(0,l.Ps)(s()),function(){return"This story is no longer available"}),C=function(e){var n;return"Post"===(null===(n=e.entity)||void 0===n?void 0:n.__typename)&&e.entity.visibility===c.Wn.UNLISTED},b=60,y=280;function S(e){return!!e&&e.length>y}function F(e){return e.length>b}},12476:(e,n,i)=>{"use strict";i.d(n,{Rx:()=>C,p9:()=>S,uA:()=>y,Wt:()=>b,S_:()=>N,fN:()=>F,UV:()=>g});var t=i(63038),a=i.n(t),l=i(319),o=i.n(l),r=i(59713),d=i.n(r),u=i(90386),c=i(44922),m=i(75880),s=i(97217),k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"newCatalogItemV2_catalogItemV2"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogItemV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"catalogItemId"}}]}}]};function v(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function f(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?v(Object(i),!0).forEach((function(n){d()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function g(e,n,i){e.modify({id:"Catalog:".concat(n),fields:{version:function(){return i}}})}function p(e,n){var i=d()({},s.ej.POST,"postItemsCount");if(i[e])return d()({},i[e],(function(e){return e+n}))}function N(e,n,i,t){e.modify({id:"Catalog:".concat(n),fields:f(f({},p(t,-i.length)),{},{itemsConnection:function(e){if(null==e||!e.items)return e;var n=e.items.filter((function(e){return!i.some((function(n){return i={catalogItemId:n},e.__ref==="CatalogItemV2:".concat(JSON.stringify(i));var i}))}));return f(f({},e),{},{items:n})}})})}function C(e,n,i,t){var a=i.map((function(n){return e.writeFragment({data:{__typename:"CatalogItemV2",catalogItemId:n},fragment:k})})).filter((function(e){return!!e}));a.length>0&&e.modify({id:e.identify({__typename:"Catalog",id:n}),fields:f(f({},p(t,a.length)),{},{itemsConnection:function(e){var n=(null==e?void 0:e.items)||[];return f(f({},e),{},{items:[].concat(o()(a),o()(n))})}})})}function b(e,n){e.modify({id:e.identify((0,u.kQ)("ROOT_QUERY")),fields:{catalogsByUser:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,t=i.DELETE,l={},o=(0,c.b)({userId:n}),r=0,d=Object.entries(e);r<d.length;r++){var u=a()(d[r],2),m=u[0],s=u[1];l[m]=m.startsWith(o)?t:s}return l}}})}function y(e,n){e.modify({id:e.identify({__typename:"Catalog",id:n}),fields:{itemsConnection:function(e,n){return n.DELETE}}})}function S(e,n,i,t){e.modify({id:e.identify((0,u.kQ)("ROOT_QUERY")),fields:{catalogsByUser:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0,r=l.readField,d=l.DELETE,u={},m=(0,c.b)({userId:n,type:i}),s=0,k=Object.entries(e);s<k.length;s++){var v=a()(k[s],2),g=v[0],p=v[1];if(g.startsWith(m)){var N=(null==p?void 0:p.catalogs)||[],C=o()(N),b=C.findIndex((function(e){return r("id",e)===t}));if(-1===b)u[g]=d;else{var y=C.splice(b,1),S=a()(y,1),F=S[0];C.unshift(F),u[g]=f(f({},p),{},{catalogs:C})}}else u[g]=p}return u}}})}function F(e,n,i,t){e.modify({id:e.identify({__typename:"CatalogViewerEdge",id:"catalogId:".concat(i,"-viewerId:").concat(n)}),fields:{isFollowing:function(){return t},followersCount:function(e){return t?Number(e)+1:e>0?e-1:0}}}),e.modify({id:(0,m.Yi)(e,{userId:n,viewerId:n}),fields:{followingCatalogsConnection:function(e,n){var a=n.DELETE,l=n.readField;return t?a:f(f({},e),{},{catalogs:e.catalogs.filter((function(e){return l("id",e)!==i}))})}}})}},85208:(e,n,i)=>{"use strict";i.d(n,{ok:()=>h,Ax:()=>S,h6:()=>F,es:()=>I,Yz:()=>w,mC:()=>E,O2:()=>O});var t=i(63038),a=i.n(t),l=i(21919),o=i(67294),r=i(12476),d=i(18627),u=i(97217),c=i(78285),m=i(92305),s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"ClapCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"numClaps"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clapCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}},{kind:"Argument",name:{kind:"Name",value:"numClaps"},value:{kind:"Variable",name:{kind:"Name",value:"numClaps"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"clappersCount"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}}]}}]}}]}}]},k=i(319),v=i.n(k),f=i(68216),g={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CreateCatalogInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"catalogUrl_catalog"}}]}}]}}]}}].concat(v()(f.Ui.definitions))},p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MutationSuccess"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"}}]}}]}}]}}]},N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"FlagCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"flagCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}]}]}}]},C={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"FollowCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MutationSuccess"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"}}]}}]}}]}}]},b={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UnfollowCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"unfollowCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MutationSuccess"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"}}]}}]}}]}}]},y={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UpdateCatalogInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}},{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"description"}}]}}]}}]}}]};function S(e){var n=(0,d.Av)(),i=(0,l.D)(g,{update:function(n){(0,r.Wt)(n,e)},onCompleted:function(e){var i=e.createCatalog;"Catalog"===i.__typename&&n.event("list.new",{listId:i.id,listName:i.name,userId:i.creator.id,listPrivacyLevel:m.eF[i.visibility]})}}),t=a()(i,2),o=t[0],u=t[1];return{createCatalog:function(e){return o({variables:e})},loading:u.loading,data:u.data,error:u.error}}function F(e){var n=e.catalog,i=e.userId,t=e.onCompleted,u=(0,d.Av)(),m=(0,c.w)(),s=(0,l.D)(p,{onCompleted:function(e){var i=null==e?void 0:e.deleteCatalog;"MutationSuccess"===i.__typename&&i.success&&(u.event("list.deleted",{listId:n.id}),m({message:"List deleted and removed from Your library"}),null==t||t())},update:function(e){(0,r.Wt)(e,i)}}),k=a()(s,2),v=k[0],f=k[1],g=f.loading,N=f.error;return{deleteCatalog:(0,o.useCallback)((function(){v({variables:{catalogId:n.id}})}),[n.id]),loading:g,error:N}}function h(){var e=(0,l.D)(s),n=a()(e,2),i=n[0],t=n[1];return{clapCatalog:function(e){return i({variables:e})},loading:t.loading,data:t.data,error:t.error}}function I(){var e=(0,c.w)(),n=(0,l.D)(N,{onCompleted:function(){e({message:"Successfully reported list."})},onError:function(){e({toastStyle:"RETRYABLE_ERROR",duration:4e3})}}),i=a()(n,1)[0];return{flagCatalog:function(e){return i({variables:e})}}}function w(e,n){var i=(0,c.w)(),t=(0,l.D)(C,{update:function(i){(0,r.fN)(i,e,n,!0)},onCompleted:function(){i({message:"List saved to Your Library"})}}),d=a()(t,2),u=d[0],m=d[1].loading;return{followCatalog:(0,o.useCallback)((function(){u({variables:{catalogId:n}})}),[n]),loading:m}}function E(e,n){var i=(0,c.w)(),t=(0,l.D)(b,{update:function(i){(0,r.fN)(i,e,n,!1)},onCompleted:function(){i({message:"List removed from Your Library"})}}),d=a()(t,2),u=d[0],m=d[1].loading;return{unfollowCatalog:(0,o.useCallback)((function(){u({variables:{catalogId:n}})}),[n]),loading:m}}function O(e,n,i){var t=(0,d.Av)(),a=(0,c.w)();return(0,l.D)(y,{onCompleted:function(l){if("Catalog"===(null==l?void 0:l.updateCatalog.__typename)){var o=l.updateCatalog.visibility,r=l.updateCatalog.name;if(o!==e.visibility){var d=e.predefined?(0,m.S6)(e.predefined):r;t.event("list.privacyChanged",{listId:l.updateCatalog.id,listPrivacyLevel:m.eF[o]}),a({message:"".concat(d," is now ").concat(o===u.n2.PUBLIC?"public":"private")})}r!==e.name&&(null==i||i(r))}null==n||n()}})}},75675:(e,n,i)=>{"use strict";i.d(n,{w:()=>o});var t=i(67294),a=i(80745),l=i(1383),o=function(e){var n=e.onConfirm,i=e.isVisible,o=e.hide,r=e.entityTypename,d=(0,a.Pm)(r);return t.createElement(l.Q,{onConfirm:n,isVisible:i,hide:o,titleText:"Hide responses",confirmText:"Confirm",isDestructiveAction:!1},"People will still be able to respond, but the link to see responses will not be displayed at the bottom of your ",d,".")}},32950:(e,n,i)=>{"use strict";i.d(n,{T:()=>o});var t=i(319),a=i.n(t),l=i(13740),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SaveCatalogButton_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}}]}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"getCatalogSlugId_Catalog"}}]}}].concat(a()(l.g.definitions))}},6729:(e,n,i)=>{"use strict";i.d(n,{sC:()=>r,Yq:()=>u,OL:()=>c});var t=i(59713),a=i.n(t);function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var r={FACEBOOK:"Facebook",TWITTER:"Twitter",LINKEDIN:"LinkedIn"},d=function(e){return{":hover path":{fill:e.baseColor.fill.darker},":focus path":{fill:e.baseColor.fill.darker}}},u=function(e){return o({"& path":{fill:e.baseColor.fill.normal}},d(e))},c=function(e){return o({"& path":{fill:e.baseColor.text.lighter},padding:"8px 2px"},d(e))}},14813:(e,n,i)=>{"use strict";i.d(n,{P:()=>m});var t=i(63038),a=i.n(t),l=i(67294),o=l.createContext({isFetching:!1}),r=i(77355),d=i(47230),u=i(34135),c=!1;i.g.window&&function e(){window.requestAnimationFrame((function(){c=!0,setImmediate((function(){c=!1,e()}))}))}();var m=function(e){var n=e.children,i=e.fetchMore,t=e.scrollableEl,m=e.disabled,s=e.fetchMoreText,k=void 0===s?"Load more":s,v=e.fetchingPlaceholder,f=function(e){var n=e.fetchMore,i=e.scrollableEl,t=e.disabled,o=(0,l.useState)(!1),r=a()(o,2),d=r[0],m=r[1],s=(0,l.useRef)(null),k=(0,l.useRef)(!1),v=(0,l.useRef)(),f=(0,l.useMemo)((function(){return(0,u.jC)(i||void 0)}),[i]),g=(0,l.useRef)(d),p=(0,l.useRef)(n);(0,l.useEffect)((function(){g.current=d,p.current=n}),[d,n]);var N=(0,l.useCallback)((function(){return p.current?(m(!0),p.current().then((function(){return m(!1)}))):Promise.resolve()}),[]),C=(0,l.useCallback)((function(){k.current||(k.current=!0,v.current=function(e){if(!c)return window.requestAnimationFrame((function(){setImmediate((function(){return e()}))}));setImmediate((function(){return e()}))}((function(){if(k.current=!1,s.current&&!g.current&&p.current&&f instanceof u.pY){var e=f.ref,n=s.current.getBoundingClientRect(),i=e instanceof Window?e.innerHeight:e.clientHeight;n.top-i<3*i&&N().then((function(){return C()}))}})))}),[f]);return(0,l.useEffect)((function(){if(!t)return f.on("scroll_throttled",C),f.on("resize_throttled",C),function(){f.off("scroll_throttled",C),f.off("resize_throttled",C)}}),[f,C,t]),(0,l.useEffect)((function(){return C(),function(){v.current&&cancelAnimationFrame(v.current)}}),[]),{isFetching:d,bottomEdgeRef:s,handleFetchMore:N}}({fetchMore:i,scrollableEl:t,disabled:m}),g=f.isFetching,p=f.bottomEdgeRef,N=f.handleFetchMore;return l.createElement(o.Provider,{value:{isFetching:g}},l.createElement("div",null,n,g&&v,m&&i&&!g&&l.createElement(r.x,{display:"flex",justifyContent:"center",marginBottom:"48px"},l.createElement(d.z,{onClick:N},k)),l.createElement("div",{ref:p})))}},77593:(e,n,i)=>{"use strict";i.d(n,{n:()=>R});var t=i(67154),a=i.n(t),l=i(63038),o=i.n(l),r=i(6479),d=i.n(r),u=i(67294),c=i(77355),m=i(87691),s=i(14199),k=i(14646);function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var f=u.createElement("path",{fill:"#CC5454",d:"M13.3 13.9l.14-7.08h-1.78l.15 7.08h1.48zm-.74 1.43c-.68 0-1.13.44-1.13 1.12 0 .67.45 1.12 1.13 1.12.68 0 1.13-.45 1.13-1.12 0-.68-.44-1.12-1.12-1.12"}),g=u.createElement("path",{fill:"#CC5454",d:"M12.5 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0 1a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z"});const p=function(e){return u.createElement("svg",v({width:25,height:25,viewBox:"0 0 25 25"},e),f,g)};var N=i(83934),C={border:0,flex:1,overflow:"hidden",resize:"none",width:"100%"},b={color:"inherit",background:"inherit",fontStyle:"inherit"},y=function(e){var n=[N.Z,C];return e?[].concat(n,[b]):n},S=function(e){if(e.current){e.current.rows=1;var n=e.current.scrollHeight/parseInt(getComputedStyle(e.current).lineHeight);e.current.rows=n}},F=u.forwardRef((function(e,n){var i=e.value,t=e.ariaLabel,a=e.autoFocus,l=e.onChange,o=e.placeholder,r=e.inheritCustomStyleSheet,d=function(e,n){var i=u.useRef(null);return u.useEffect((function(){[e,n].forEach((function(e){e&&("function"==typeof e?e(i.current):e.current=i.current)}))}),[e,n]),i}(u.useRef(null),n),c=u.useCallback((function(e){l&&l(e),S(d)}),[l,d]);u.useEffect((function(){return S(d)}),[i]);var m=(0,k.I)();return u.createElement("textarea",{"aria-label":t,autoFocus:a,className:m(y(r)),placeholder:o,onChange:c,ref:d,rows:1,value:i})})),h=function(e){var n=e.count,i=void 0===n?0:n,t=e.limit,a=e.scale,l=(0,k.I)();return u.createElement(m.F,{scale:a||"S"},u.createElement("span",{className:l((function(e){return{color:i>t?e.errorColor:e.baseColor.text.dark}}))},i),"/",t)},I={flex:"1"},w=function(e){var n=e.value,i=e.ariaLabel,t=e.autoFocus,a=e.isPassword,l=e.onChange,o=e.placeholder,r=e.name,d=(0,k.I)();return u.createElement("input",{"aria-label":i,className:d([[N.Z,I]]),type:a?"password":"text",placeholder:o,value:n,name:r,onChange:l,autoFocus:t})},E=i(59713),O=i.n(E);function D(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function _(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?D(Object(i),!0).forEach((function(n){O()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var T=function(e){return{borderWidth:"0px 0px 1px 0px",background:"linear-gradient(to right, ".concat(e.baseColor.border.normal,", 90%, white 100%)"),"-webkit-background-clip":"text","-webkit-text-fill-color":"transparent",color:"transparent",whiteSpace:"nowrap",overflow:"hidden",width:"100%"}},x=function(){return _(_({},T),{},{background:"white"})},P=function(e){var n=e.value,i=e.isAreaField,t=(0,k.I)(),a=i?x:T;return u.createElement("p",{key:n,className:t([N.Z,a])},n)},j=function(e){return{fontWeight:e.newFonts.detail.boldWeight}},V=function(e){return{marginBottom:"10px",color:e.baseColor.border.dark}},R=function(e){var n,i=e.characterCountLimit,t=e.characterCountScale,l=e.characterCount,r=e.description,v=e.errorMessage,f=e.isEditable,g=void 0===f||f,C=e.isMultiline,b=void 0!==C&&C,y=e.label,S=e.omitBorder,I=e.onFocus,E=e.isPassword,O=void 0!==E&&E,D=e.scale,_=void 0===D?"M":D,T=e.hideErrorIcon,x=void 0!==T&&T,R=e.bold,L=void 0!==R&&R,M=e.inheritCustomStyleSheet,A=void 0!==M&&M,B=e.forwardedRef,U=d()(e,["characterCountLimit","characterCountScale","characterCount","description","errorMessage","isEditable","isMultiline","label","omitBorder","onFocus","isPassword","scale","hideErrorIcon","bold","inheritCustomStyleSheet","forwardedRef"]),W=U.autoFocus,z=U.onBlur,Y=!!v,H=(0,k.I)(),Z=u.useState(!!W),Q=o()(Z,2),q=Q[0],K=Q[1],$=u.useCallback((function(e){I&&I(e),K(!0)}),[I,K]),G=u.useCallback((function(e){z&&z(e),K(!1)}),[z,K]),J=(0,s.n)({name:"detail",scale:"S",color:"ERROR"}),X=(0,s.n)({name:"detail",scale:_,color:"DARKER"});return u.createElement("span",{className:H(L?[X,j]:X)},u.createElement(c.x,{display:"flex",flexDirection:"column",width:"100%"},y&&u.createElement("label",{className:H(V)},y),u.createElement("div",{onFocus:$,onBlur:G,className:H((0,N.l)({hasError:Y,isFocused:q,omitBorder:S,isEditable:g}))},g?b?u.createElement(F,a()({},U,{inheritCustomStyleSheet:A,ref:B})):u.createElement(w,a()({},U,{isPassword:O})):u.createElement(P,a()({},U,{isAreaField:b})),Y&&!x&&u.createElement("span",{style:{paddingLeft:"10px"}},u.createElement(p,null))),u.createElement(c.x,{marginTop:"4px",display:"flex",justifyContent:"space-between"},Y?u.createElement("h4",{className:H([J,{width:"100%",textAlign:"inherit"}])},v):u.createElement(m.F,{scale:"S"},r),!!i&&u.createElement(h,{count:null!=l?l:null===(n=U.value)||void 0===n?void 0:n.length,limit:i,scale:t}))))}},83934:(e,n,i)=>{"use strict";i.d(n,{l:()=>a,Z:()=>l});var t=function(e){var n=e.hasError,i=e.isFocused,t=e.theme,a=e.isEditable;return n&&i||n?t.errorColor:i?t.baseColor.border.dark:a?t.baseColor.border.light:t.baseColor.border.lighter},a=function(e){var n=e.hasError,i=e.isFocused,a=e.omitBorder,l=e.isEditable;return function(e){return{display:"flex",width:"100%",borderStyle:"solid",borderWidth:a&&!n?0:"0px 0px 1px 0px",borderColor:t({hasError:n,isFocused:i,theme:e,isEditable:l})}}},l=function(e){return{padding:"4px 0",fontFamily:"inherit",fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit",textAlign:"inherit",borderWidth:0,outline:0,"::placeholder":{color:e.baseColor.text.lighter,opacity:.5}}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5387.31cfb64f.chunk.js.map