(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[376],{81808:(e,r,t)=>{"use strict";t.d(r,{eD:()=>n,AM:()=>o,ok:()=>a,Gg:()=>u,nT:()=>i,TL:()=>s,KS:()=>c,EB:()=>l,DZ:()=>f,Aw:()=>p,V_:()=>y,H0:()=>d,jW:()=>g,JZ:()=>b,fQ:()=>m,HK:()=>v,YO:()=>E,I6:()=>O});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",a="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",i="MAP_LOAD_INFO",s="MAP_INFO_LOAD_START",c="MAP_INFO_LOADED",l="MAP_INFO_LOAD_ERROR",f="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function d(e,r,t){return{type:a,config:e,legacy:!!r,mapId:r,zoomToExtent:t}}function g(e,r){return{type:u,error:e,mapId:r}}function b(e,r,t,n,a){return{type:o,configName:e,mapId:r,config:t,mapInfo:n,overrideConfig:a}}function m(e,r){return{type:c,mapId:r,info:e}}function v(e,r){return{type:l,mapId:e,error:r}}function E(e){return{type:s,mapId:e}}function O(e){return{type:i,mapId:e}}},97222:(e,r,t)=>{"use strict";t.d(r,{Vc:()=>o,bj:()=>a,p7:()=>u,Av:()=>i,M8:()=>s,wn:()=>c,gs:()=>l,NN:()=>f,C2:()=>p,O7:()=>y,oQ:()=>d,dX:()=>g,al:()=>b,Gh:()=>m,x2:()=>v,Y7:()=>E,b4:()=>O,GI:()=>_,KP:()=>h,dS:()=>A,Zw:()=>T,Z:()=>S,a:()=>R,WN:()=>P,k9:()=>w,yo:()=>I,kE:()=>j,kV:()=>C,v2:()=>D,_q:()=>M,tt:()=>q,Jc:()=>L,w4:()=>H,QJ:()=>k,KG:()=>G,o$:()=>x,TS:()=>F,Tw:()=>N,I3:()=>X});var n=t(97395),o="SEARCH:SEARCH_WITH_FILTER",a="TEXT_SEARCH_STARTED",u="TEXT_SEARCH_RESULTS_LOADED",i="TEXT_SEARCH_RESULTS_PURGE",s="TEXT_SEARCH_RESET",c="TEXT_SEARCH_ADD_MARKER",l="TEXT_SEARCH_TEXT_CHANGE",f="TEXT_SEARCH_LOADING",p="TEXT_SEARCH_NESTED_SERVICE_SELECTED",y="TEXT_SEARCH_ERROR",d="TEXT_SEARCH_CANCEL_ITEM",g="TEXT_SEARCH_ITEM_SELECTED",b="TEXT_SEARCH_SHOW_GFI",m="TEXT_SEARCH_SET_HIGHLIGHTED_FEATURE",v="UPDATE_RESULTS_STYLE",E="CHANGE_SEARCH_TOOL",O="SEARCH:ZOOM_ADD_POINT",_="SEARCH:CHANGE_FORMAT",h="SEARCH:CHANGE_COORD",A="SEARCH:HIDE_MARKER";function T(e){return{type:_,format:e}}function S(e,r,t){return{type:O,pos:e,zoom:r,crs:t}}function R(e){return{type:E,activeSearchTool:e}}function P(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0;return{type:u,results:e,append:r,services:t}}function w(e){return{type:l,searchText:e}}function I(e){return{type:f,loading:e}}function j(e){return{type:y,error:e}}function C(){return{type:i}}function D(){return{type:s}}function M(e,r){return{type:c,markerPosition:e,markerLabel:r}}function q(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.services,n=void 0===t?null:t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return{type:a,searchText:e,services:n,maxResults:o}}function L(e,r,t){return{type:g,item:e,mapConfig:r,resultsStyle:t}}var H=function(e){return{type:b,item:e}};function k(e,r,t){return{type:p,searchText:t,services:e,items:r}}function G(e){return{type:d,item:e}}function x(e){return{type:v,style:e}}function F(e,r){return{type:h,coord:e,val:r}}function N(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.nonQueriableLayers",autoDismiss:10})}function X(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.serverError",autoDismiss:10})}},15402:(e,r,t)=>{"use strict";t.d(r,{Z:()=>b});var n=t(45697),o=t.n(n),a=t(67294),u=t.n(a);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,r){return l=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},l(e,r)}function f(e,r){if(r&&("object"===i(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d=t(37101).FormattedHTMLMessage,g=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&l(e,r)}(i,e);var r,t,n,o,a=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p(n);if(o){var t=p(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return f(this,e)});function i(){return s(this,i),a.apply(this,arguments)}return r=i,(t=[{key:"render",value:function(){return this.context.intl?u().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&c(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),i}(u().Component);y(g,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(g,"contextTypes",{intl:o().object});const b=g},93451:(e,r,t)=>{"use strict";t.d(r,{Z:()=>h});var n=t(86638),o=t(45697),a=t.n(o),u=t(84596),i=t.n(u),s=t(1469),c=t.n(s),l=t(14293),f=t.n(l),p=t(47037),y=t.n(p),d=t(18093),g=["messages"];function b(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){E(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(c()(r))return r.map((function(o){var a=(0,n.S$)(e,o[t]||y()(o)&&o||"");return v(v({},o),{},E({},t,f()(a)?r:a))}));var o=(0,n.S$)(e,r);return f()(o)?r:o},_=function(e,r,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return v(v({},n),{},E({},o,e[o]&&O(r,e[o],t)))}};const h=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,d.compose)((0,d.getContext)({messages:a().object}),(0,d.mapProps)((function(t){var n=t.messages,o=b(t,g);return v(v({},o),i()(e).reduce(_(o,n,r),{}))})))}},26125:(e,r,t)=>{"use strict";t.d(r,{Z:()=>S});var n=t(21914),o=t(81808),a=t(82904),u=t(27418),i=t.n(u),s=t(30998),c=t.n(s),l=t(52353),f=t.n(l),p=t(41609),y=t.n(p),d=t(13652),g=t(88798),b=["index","loaded"];function m(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function v(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return E(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){h(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function A(e,r,t){var n="vector"===t,o=n?r.reqId:c()(e.requests||[],(function(e){return e.reqId===r.reqId}));if(-1!==o){var a;if(["exceptions","error"].includes(t)){var u=e.requests.filter((function(e,r){return r!==o})),s=e.responses.filter((function(e,r){return r!==o}));return _(_({},e),{},{responses:s,requests:u})}var l,p=e.configuration,d=e.requests,b=e.responses||[],m="hover"===(null==p?void 0:p.trigger)||(null==e?void 0:e.showInMapPopup);if(!n){var E={response:r[t],queryParams:r.requestParams,layerMetadata:r.layerMetadata,layer:r.layer};m?b=[].concat(v(b),[E]):b[o]=E}return m?l={loaded:!0,index:0}:!m&&function(e,r,t,n){var o,a,u=e.configuration,i=e.requests,s=e.queryableLayers,c=void 0===s?[]:s,l=e.index,p=(u||{}).infoFormat,d=null===(o=(0,g.Te)(p))||void 0===o?void 0:o.getValidResponses([r[t]]),b=null===(a=(0,g.Te)(p))||void 0===a?void 0:a.getNoValidResponses(r),m=f()(l)&&!!d.length,v=!n&&i.length===b.filter((function(e){return e})).length,E=f()(l)&&n&&i.filter((function(e){return y()(e)})).length===c.length;return m||v||E}(e,b,o,n)?l={loaded:!0,index:o}:b.length!==d.length||null!==(a=l)&&void 0!==a&&a.loaded||(l={loaded:!0}),i()({},e,_(_(_({},n&&{requests:d}),!f()(l)&&l),{},{responses:v(b)}))}return e}var T={enabled:!0,configuration:{}};const S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case n.Re:return i()({},e,{warning:"NO_QUERYABLE_LAYERS"});case n.ih:return i()({},e,{warning:null});case n.Xw:return i()({},e,{enabled:r.enabled});case n.ph:return i()({},e,{enabled:!e.enabled});case n.gG:return i()({},e,{index:r.index});case n.oz:return i()({},e,{highlight:r.enabled});case n.Pn:var u=r.reqId,s=r.request,c=e.requests||[];return i()({},e,{requests:[].concat(v(c),[{request:s,reqId:u}])});case n.DZ:e.index,e.loaded;var l=m(e,b);return _(_({},l),{},{queryableLayers:[],responses:[],requests:[]});case n.XL:return A(e,r,"data");case n.Ih:return A(e,r,"exceptions");case n.km:return A(e,r,"error");case n.xy:return i()({},e,{clickPoint:r.point,clickLayer:r.layer||null,itemId:r.itemId||null,overrideParams:r.overrideParams||null,filterNameList:r.filterNameList||null});case n.e8:return _(_({},e),{},{configuration:_(_({},e.configuration),{},{infoFormat:r.infoFormat})});case n.E0:return i()({},e,{showMarker:!0});case n.F9:return i()({},e,{showMarker:!1});case n.X_:return i()({},e,{showModalReverse:!0,reverseGeocodeData:r.reverseGeocodeData});case n.pb:return i()({},e,{showModalReverse:!1,reverseGeocodeData:void 0});case a.l:return i()({},e,{showMarker:!1,responses:[],requests:[],configuration:_(_({},e.configuration),{},{trigger:"click"})});case n.qb:var f,p=t(55745),y=t(65442),g={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[r.request.lng,r.request.lat]}},E=r.metadata&&r.metadata.units;switch(E){case"m":default:E="meters";break;case"deg":E="degrees";break;case"mi":E="miles"}var O,h=r.metadata&&r.metadata.resolution||1,S=p(g,(r.metadata.buffer||1)*h,E),R=(r.layer.features||[]).filter((function(e){try{return"FeatureCollection"===e.type&&e.features&&e.features.length?e.features.reduce((function(e,t){var n=t.properties.useGeodesicLines&&t.properties.geometryGeodesic?_(_({},t),{},{geometry:t.properties.geometryGeodesic}):t;return e||y(S,h&&r.metadata.buffer&&E?p(n,1,"meters"):n)}),!1):y(S,h&&r.metadata.buffer&&E?p(e,1,"meters"):e)}catch(e){return!1}})),P=e.responses||[],w="hover"===(null==e||null===(f=e.configuration)||void 0===f?void 0:f.trigger)||(null==e?void 0:e.showInMapPopup),I={response:{crs:null,features:R,totalFeatures:"unknown",type:"FeatureCollection"},queryParams:r.request,layerMetadata:r.metadata,format:"JSON"};w?(P=[].concat(v(P),[I]),O={reqId:0}):(P[e.requests.length]=I,O={reqId:e.requests.length});var j=[].concat(v(e.requests),[{}]);return A(i()({},e,{requests:j,queryableLayers:r.queryableLayers,responses:v(P)}),O,"vector");case n.lF:return i()({},e,{centerToMarker:r.status});case n.ZF:return _(_({},e),{},{configuration:_(_({},e.configuration),{},{showEmptyMessageGFI:!e.configuration.showEmptyMessageGFI})});case o.ok:return _(_({},e),{},{configuration:r.config.mapInfoConfiguration||e.configuration||{}});case n.GI:return _(_({},e),{},{formatCoord:r.format});case n.B1:return _(_({},e),{},{showCoordinateEditor:!r.showCoordinateEditor});case n.gc:return _(_({},e),{},{currentEditFeatureQuery:r.query});case n.zX:return _(_({},e),{},{configuration:_(_({},e.configuration),{},{trigger:r.trigger})});case n.Zb:return _(_({},e),{},{showInMapPopup:r.value});case d.Wz:return"cesium"===r.mapType?_(_({},e),{},{configuration:_(_({},e.configuration),{},{trigger:"click"})}):e;case n.Xp:return _(_({},e),r.cfg);default:return e}}}}]);