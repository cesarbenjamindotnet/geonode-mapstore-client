(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[29389],{604206:(e,t,r)=>{"use strict";r.d(t,{hZ:()=>n,pb:()=>o,kD:()=>i,DI:()=>u,IC:()=>c,iU:()=>f,W7:()=>a,uB:()=>l,Rh:()=>p,G_:()=>s,vU:()=>y,Vw:()=>b,KD:()=>E,uj:()=>d,lo:()=>O,Yf:()=>v,fo:()=>m,PY:()=>g,bp:()=>R,oJ:()=>T,k4:()=>S,sc:()=>h,Li:()=>A});var n="CHANGE_DRAWING_STATUS",o="DRAW:END_DRAWING",i="DRAW:SET_CURRENT_STYLE",u="DRAW:GEOMETRY_CHANGED",c="DRAW:DRAW_SUPPORT_STOPPED",f="DRAW:FEATURES_SELECTED",a="DRAW:DRAWING_FEATURES",l="DRAW:SET_SNAPPING_LAYER",p="DRAW:SNAPPING_IS_LOADING",s="DRAW:TOGGLE_SNAPPING",y="DRAW:SET_SNAPPING_CONFIG";function b(e,t,r,n,o){return{type:u,features:e,owner:t,enableEdit:r,textChanged:n,circleChanged:o}}function E(){return{type:f,features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}function d(){return{type:a,features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}function O(){return{type:c}}function v(e,t,r,o,i,u){return{type:n,status:e,method:t,owner:r,features:o,options:i,style:u}}function m(e,t){return{type:o,geometry:e,owner:t}}function g(e){return{type:i,currentStyle:e}}var R=function(e){return v("clean","",e,[],{})};function T(){return{type:s}}function S(e){return{type:l,snappingLayer:e}}function h(){return{type:p}}function A(e,t,r){return{type:y,value:e,prop:t,pluginCfg:r}}},433528:(e,t,r)=>{"use strict";r.d(t,{gJ:()=>n,Oj:()=>o,jp:()=>i,CM:()=>u,DU:()=>c,aO:()=>f,v6:()=>a,K8:()=>l,IN:()=>p,zh:()=>s,AH:()=>y,Ub:()=>b,_9:()=>E,JB:()=>d,oh:()=>O,AY:()=>v,yi:()=>m,SW:()=>g,Hk:()=>R,iQ:()=>T,dY:()=>S,$:()=>h,_u:()=>A,gG:()=>D,DI:()=>P,dZ:()=>I,qw:()=>_,f$:()=>j,bZ:()=>w,$O:()=>G,sF:()=>F,Gk:()=>U,vO:()=>C,ut:()=>N,MK:()=>k,VV:()=>L,B8:()=>W,VM:()=>M,a3:()=>B,Xp:()=>Y,DA:()=>q,sK:()=>x,yA:()=>H,r:()=>z,iB:()=>V,WB:()=>Z,EH:()=>X,Yd:()=>J,Hg:()=>K,Lz:()=>$,ye:()=>Q,Jb:()=>ee,d:()=>te,fT:()=>re,Ib:()=>ne,Pl:()=>oe,UB:()=>ie,Uh:()=>ue,QT:()=>ce,oL:()=>fe,Ap:()=>ae,KD:()=>le,Z_:()=>pe,Vw:()=>se,sY:()=>ye,kA:()=>be,gr:()=>Ee,pX:()=>de,F5:()=>Oe,MO:()=>ve,dq:()=>me,DY:()=>ge,oO:()=>Re,uF:()=>Te,a8:()=>Se,Pv:()=>he,an:()=>Ae,lg:()=>De,nY:()=>Pe,nG:()=>Ie,lx:()=>_e,$S:()=>je,gc:()=>we,Uz:()=>Ge,fO:()=>Fe,$E:()=>Ue,cE:()=>Ce,JK:()=>Ne,YV:()=>ke,t9:()=>Le,YG:()=>We,HT:()=>Me,MY:()=>Be,ve:()=>Ye,hB:()=>qe,Ox:()=>xe,zd:()=>He,aT:()=>ze,VH:()=>Ve,Yb:()=>Ze,Jr:()=>Xe,pP:()=>Je,gL:()=>Ke});var n="FEATUREGRID:SET_UP",o="FEATUREGRID:SELECT_FEATURES",i="FEATUREGRID:DESELECT_FEATURES",u="FEATUREGRID:CLEAR_SELECTION",c="FEATUREGRID:SET_SELECTION_OPTIONS",f="FEATUREGRID:TOGGLE_MODE",a="FEATUREGRID:TOGGLE_FEATURES_SELECTION",l="FEATUREGRID:FEATURES_MODIFIED",p="FEATUREGRID:NEW_FEATURE",s="FEATUREGRID:SAVE_CHANGES",y="FEATUREGRID:SAVING",b="FEATUREGRID:START_EDITING_FEATURE",E="FEATUREGRID:START_DRAWING_FEATURE",d="FEATUREGRID:DELETE_GEOMETRY",O="FEATUREGRID:DELETE_GEOMETRY_FEATURE",v="FEATUREGRID:SAVE_SUCCESS",m="FEATUREGRID:CLEAR_CHANGES",g="FEATUREGRID:SAVE_ERROR",R="FEATUREGRID:DELETE_SELECTED_FEATURES",T="SET_FEATURES",S="FEATUREGRID:SORT_BY",h="FEATUREGRID:SET_LAYER",A="QUERY:UPDATE_FILTER",D="FEATUREGRID:CHANGE_PAGE",P="FEATUREGRID:GEOMETRY_CHANGED",I="DOCK_SIZE_FEATURES",_="FEATUREGRID:TOGGLE_TOOL",j="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",w="ASK_CLOSE_FEATURE_GRID_CONFIRM",G="FEATUREGRID:OPEN_GRID",F="FEATUREGRID:CLOSE_GRID",U="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",C="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",N="FEATUREGRID:SET_PERMISSION",k="FEATUREGRID:DISABLE_TOOLBAR",L="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",W="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",M="FEATUREGRID:ADVANCED_SEARCH",B="FEATUREGRID:ZOOM_ALL",Y="FEATUREGRID:INIT_PLUGIN",q="FEATUREGRID:SIZE_CHANGE",x="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",H="FEATUREGRID:HIDE_SYNC_POPOVER",z="FEATUREGRID:UPDATE_EDITORS_OPTIONS",V="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",Z="FEATUREGRID:SET_SYNC_TOOL",X={EDIT:"EDIT",VIEW:"VIEW"},J="FEATUREGRID:START_SYNC_WMS",K="FEATUREGRID:STOP_SYNC_WMS",$="STORE_ADVANCED_SEARCH_FILTER",Q="LOAD_MORE_FEATURES",ee="FEATUREGRID:QUERY_RESULT",te="FEATUREGRID:SET_TIME_SYNC",re="FEATUREGRID:SET_PAGINATION";function ne(){return{type:x}}function oe(){return{type:H}}function ie(e,t){return{type:ee,features:e,pages:t}}function ue(e){return{type:$,filterObj:e}}function ce(){return{type:Y,options:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}function fe(){return{type:U}}function ae(){return{type:C}}function le(e,t){return{type:o,features:e,append:t}}function pe(e){return{type:n,options:e}}function se(e){return{type:P,features:e}}function ye(){return{type:b}}function be(){return{type:E}}function Ee(e){return{type:i,features:e}}function de(){return{type:d}}function Oe(e){return{type:O,features:e}}function ve(){return{type:u}}function me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.multiselect,r=e.showCheckbox;return{type:c,multiselect:t,showCheckbox:r}}function ge(e,t){return{type:S,sortBy:e,sortOrder:t}}function Re(e,t){return{type:D,page:e,size:t}}function Te(e){return{type:h,id:e}}function Se(e){return{type:A,update:e,append:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}}function he(e,t){return{type:_,tool:e,value:t}}function Ae(e,t,r){return{type:j,name:e,key:t,value:r}}function De(){return{type:f,mode:X.EDIT}}function Pe(){return{type:f,mode:X.VIEW}}function Ie(e,t){return{type:l,features:e,updated:t}}function _e(e){return{type:p,features:e}}function je(){return{type:s}}function we(){return{type:v}}function Ge(){return{type:R}}function Fe(){return{type:y}}function Ue(){return{type:m}}function Ce(){return{type:g}}function Ne(){return{type:w}}function ke(){return{type:F}}function Le(){return{type:G}}function We(e){return{type:k,disabled:e}}function Me(e){return{type:N,permission:e}}function Be(){return{type:M}}function Ye(){return{type:B}}function qe(){return{type:J}}function xe(e,t){return{type:q,size:e,dockProps:t}}var He=function(e){return{type:Q,pages:e}},ze=function(e){return{type:L,activated:e}},Ve=function(e){return{type:W,deactivated:e}},Ze=function(e){return{type:te,value:e}},Xe=function(e){return{type:re,size:e}},Je=function(e){return{type:V,updateFilterAction:e}},Ke=function(e){return{type:Z,syncWmsFilter:e}}},921533:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(867076),o=r(815135),i=r(159979);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var c=["renderPopover","popoverOptions"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=(0,n.compose)((0,n.withProps)((function(e){var t=e.renderPopover,r=e.popoverOptions;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(t?{renderPopover:t,popoverOptions:r}:{},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c))})),(0,n.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.renderPopover,r=e.popoverOptions;return t&&!!r}),i.Z,o.Z))},159979:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(352595),u=r(480681),c=r(957557),f=r.n(c),a=r(180307),l=r.n(a);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var s=["popoverOptions","keyProp"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}const O=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(v,t);var r,n,c,a,O=(c=v,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(c);if(a){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function v(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),O.apply(this,arguments)}return r=v,(n=[{key:"render",value:function(){var t=null,r=this.props,n=r.popoverOptions,c=r.keyProp,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,s);return o().createElement("span",{className:"mapstore-info-popover"},o().createElement(e,y({},f()(a,["renderPopover","tooltipId"]),{key:c,ref:function(e){t=e}})),o().createElement(i.Z,{placement:n.placement,shouldUpdatePosition:!0,show:!0,target:function(){return l().findDOMNode(t)}},o().createElement(u.Popover,n.props,n.content)))}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),v}(o().Component)}},656903:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(480681),u=r(38560),c=["disabled","id","visible","onClick","glyph","active","className"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}var a={width:0,padding:0,borderWidth:0},l={},p=function(e){return e?l:a};const s=(0,n.forwardRef)((function(e,t){var r=e.disabled,n=e.id,a=e.visible,l=e.onClick,s=e.glyph,y=e.active,b=e.className,E=void 0===b?"square-button-md":b,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return o().createElement(u.Z,f({ref:t},d,{bsStyle:y?"success":"primary",disabled:r,id:"fg-".concat(n),style:p(a),className:E,onClick:function(){return!r&&l()}}),o().createElement(i.Glyphicon,{glyph:s}))}))},975480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},859912:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>J});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),c=r(49977),f=r.n(c),a=r(557579),l=r(433528),p=r(604206),s=r(807878),y=r(782904),b=r(580416),E=r(275982),d=r(95797),O=r(401757),v=r(824260),m=r(607147);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=function(e){var t=(0,O.GW)(e);return[t.search&&t.search.url,t.name]};const D={openWidgetEditor:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(a.AE,a.dm,a.IT).filter((function(){return(0,m.PJ)(r())})).switchMap((function(){return f().Observable.of((0,y.Xg)("widgetBuilder","enabled",!0),(0,y.Xg)("metadataexplorer","enabled",!1))}))},closeWidgetEditorOnFinish:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(a.Jm,b.oE).filter((function(){return(0,m.PJ)(r())})).switchMap((function(){return f().Observable.of((0,y.Xg)("widgetBuilder","enabled",!1))}))},initEditorOnNew:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(a.AE).filter((function(){return(0,m.PJ)(r())})).switchMap((function(e){return f().Observable.of((0,a.bS)(S(S({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},initEditorOnNewChart:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(a.IT).filter((function(){return(0,m.PJ)(r())})).switchMap((function(e){return f().Observable.of((0,l.YV)(),(0,a.bS)(S(S({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0,widgetType:"chart",filter:(0,v.X1)(r())},e),{},{type:void 0}),{step:0}),(0,a.Rz)("returnToFeatureGrid",!0))}))},handleWidgetsFilterPanel:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(a.lG).filter((function(){return(0,m.PJ)(r())})).switchMap((function(){return f().Observable.of(d.gT.apply(void 0,(t=A(r()),function(e){if(Array.isArray(e))return R(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),(0,s.F)((0,O.um)(r())),(0,y.Xg)("widgetBuilder","enabled",!1),(0,y.Xg)("queryPanel","enabled",!0)).concat(f().Observable.race(e.ofType(s.Wm).take(1),e.ofType(y.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?f().Observable.of((0,a.Rz)("filter",e.filterObj)):f().Observable.empty()).merge(f().Observable.of((0,y.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(E.nk,a.dm).merge(e.ofType(y.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(f().Observable.of((0,p.bp)(),(0,y.Xg)("queryPanel","enabled",!1)));var t}))}};var P=r(322843),I=r(416919),_=r(171703),j=r(22222),w=r(867076),G=r(55105);const F=(0,w.compose)((0,_.connect)((function(e){return{returnToFeatureGrid:(0,O.Wo)(e)}}),{backToWidgetList:function(){return(0,a.Rz)("widgetType",void 0)},closeWidgetBuilder:function(){return(0,y.Xg)("widgetBuilder","enabled",!1,!1)},openFeatureGridTable:function(){return(0,l.t9)()}}),(0,w.withHandlers)({backFromWizard:function(e){var t=e.backToWidgetList,r=void 0===t?function(){}:t,n=e.closeWidgetBuilder,o=void 0===n?function(){}:n,i=e.openFeatureGridTable,u=void 0===i?function(){}:i,c=e.returnToFeatureGrid;return function(){c?(o(),u()):r()}}}),(0,w.withProps)((function(e){var t=e.returnToFeatureGrid,r=e.backFromWizard;return{exitButton:{onClick:void 0===r?function(){}:r,glyph:"arrow-left",tooltipId:t?"widgets.builder.wizard.backToFeatureGrid":"widgets.builder.wizard.backToWidgetTypeSelection"}}})));var U=r(949832),C=r(921533),N=r(656903),k=(0,C.Z)(N.Z);const L=(0,_.connect)((function(){return{}}),{onClick:function(){return(0,a.C2)()}})((function(e){var t=e.disabled,r=e.mode,n=e.onClick,i=void 0===n?function(){}:n;return o().createElement(k,{id:"grid-map-chart",keyProp:"grid-map-chart",tooltipId:"featuregrid.toolbar.createNewChart",disabled:t,visible:"VIEW"===r,onClick:i,glyph:"stats"})}));function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,z(n.key),n)}}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return(t=z(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e){var t=function(e,t){if("object"!==W(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===W(t)?t:String(t)}var V=(0,w.compose)((0,_.connect)((0,j.P1)(O.h9,O.zA,(function(e,t){return x({dependencies:e},t)})),{toggleConnection:a.w2}),F)(U.Z),Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(c,e);var t,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(n);if(i){var r=Y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),u.apply(this,arguments)}return t=c,r=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){return o().createElement(I.Z,{open:this.props.enabled,size:this.props.dockSize,zIndex:this.props.zIndex,position:this.props.position,bsStyle:"primary",hideHeader:!0,style:x(x({},this.props.layout),{},{background:"white"})},o().createElement(V,{enabled:this.props.enabled,onClose:this.props.onClose,typeFilter:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type;return"map"!==e&&"legend"!==e}}))}}],r&&M(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);H(Z,"propTypes",{id:u().string,enabled:u().bool,limitDockHeight:u().bool,fluid:u().bool,zIndex:u().number,dockSize:u().number,position:u().string,onMount:u().func,onUnmount:u().func,onClose:u().func,dimMode:u().string,src:u().string,style:u().object,layout:u().object}),H(Z,"defaultProps",{id:"widgets-builder-plugin",enabled:!1,dockSize:500,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},onClose:function(){},layout:{}});var X=(0,_.connect)((0,j.P1)(m.dH,(function(e){return(0,G.ic)(e,{height:!0})}),(function(e,t){return{enabled:e,layout:t}})),{onMount:function(){return(0,y.Xg)("widgetBuilder","available",!0)},onUnmount:function(){return(0,y.Xg)("widgetBuilder","available",!1)},onClose:y.Xg.bind(null,"widgetBuilder","enabled",!1,!1)})(Z);const J=(0,P.rx)("WidgetsBuilder",{component:X,epics:D,containers:{TOC:{doNotHide:!0,name:"WidgetBuilder"},FeatureEditor:{doNotHide:!0,target:"toolbar",position:21,Component:L}}})},824260:(e,t,r)=>{"use strict";r.d(t,{qj:()=>m,Bu:()=>g,UM:()=>R,X1:()=>T,L:()=>S,HY:()=>h,Mz:()=>A,F0:()=>D,dc:()=>P,b0:()=>I,hk:()=>_,Qs:()=>j,gy:()=>w,M7:()=>G,VD:()=>F});var n=r(414293),o=r.n(n),i=r(227361),u=r.n(i),c=r(91175),f=r.n(c),a=r(701469),l=r.n(a),p=r(630998),s=r.n(p);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){return u()(e,"query.filterObj.featureTypeName")},v=function(e){return function(t){return u()(t,'query.featureTypes["'.concat(e,'"]'))}},m=function(e,t){return u()(v(t)(e),"original")},g=function(e){return e&&e.query&&e.query.searchUrl},R=function(e){return e&&e.query&&e.query.url},T=function(e){return e&&e.query&&e.query.filterObj},S=function(e){return u()(v(O(e))(e),"attributes")},h=function(e){return u()(e,"query.typeName")},A=function(e){return u()(e,"query.result.features")},D=function(e){var t=u()(e,"query.result");return E(E({},t),{},{features:(t&&t.features||[]).filter((function(e){return!o()(e.geometry)}))})},P=function(e,t){var r=e&&e.query&&e.query.result&&e.query.result.features;return f()(r.filter((function(e){return e.id===t})))},I={startIndex:function(e){return u()(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return u()(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return u()(e,"query.result.features.length")},totalFeatures:function(e){return u()(e,"query.result.totalFeatures")}},_=function(e,t){var r=v(t)(e);return!!(r&&r.attributes&&r.geometry&&r.original)},j=function(e){return m(e,O(e))},w=function(e){return u()(e,"query.featureLoading")},G=function(e){return u()(e,"query.syncWmsFilter",!1)},F=function(e){var t=u()(e,"query.filterObj.crossLayerFilter"),r=u()(e,"query.filterObj.spatialField"),n=u()(e,"query.filterObj.filterFields");return!!(n&&f()(n)||r&&(r.method&&r.operation&&r.geometry||l()(r)&&s()(r,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||t&&t.collectGeometries&&t.operation)}}}]);