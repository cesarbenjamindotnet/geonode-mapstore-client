(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7161,5992,7654,4351],{21914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>s,DZ:()=>c,e8:()=>f,E0:()=>p,F9:()=>E,X_:()=>m,pb:()=>l,qb:()=>y,Re:()=>I,ih:()=>_,xy:()=>d,jL:()=>O,oz:()=>T,ph:()=>q,lF:()=>v,gG:()=>N,cb:()=>F,GI:()=>g,B1:()=>R,fv:()=>P,gc:()=>A,zX:()=>h,ZF:()=>D,Zb:()=>b,DW:()=>M,Xp:()=>G,Fm:()=>S,sV:()=>w,Mn:()=>L,LU:()=>k,XP:()=>C,WU:()=>U,JB:()=>Y,g:()=>j,ws:()=>Z,HP:()=>H,aN:()=>W,Pg:()=>X,u0:()=>B,TM:()=>K,PM:()=>Q,lK:()=>V,sv:()=>z,MO:()=>J,oO:()=>$,Mc:()=>tt,Zw:()=>et,RA:()=>rt,am:()=>nt,ZM:()=>ot,wm:()=>it,Y$:()=>ut,Qu:()=>at,kT:()=>st});var n=r(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",s="NEW_MAPINFO_REQUEST",c="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",E="HIDE_MAPINFO_MARKER",m="SHOW_REVERSE_GEOCODE",l="HIDE_REVERSE_GEOCODE",y="GET_VECTOR_INFO",I="NO_QUERYABLE_LAYERS",_="CLEAR_WARNING",d="FEATURE_INFO_CLICK",O="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",T="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",q="TOGGLE_MAPINFO_STATE",v="UPDATE_CENTER_TO_MARKER",N="IDENTIFY:CHANGE_PAGE",F="IDENTIFY:CLOSE_IDENTIFY",g="IDENTIFY:CHANGE_FORMAT",R="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",P="IDENTIFY:EDIT_LAYER_FEATURES",A="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",h="IDENTIFY:SET_MAP_TRIGGER",D="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",b="IDENTIFY:SET_SHOW_IN_MAP_POPUP",M="IDENTIFY:IDENTIFY_IS_MOUNTED",G="IDENTIFY:INIT_PLUGIN";function S(t,e,r,n,i){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:i}}function w(t,e,r,n){return{type:i,error:e,reqId:t,requestParams:r,layerMetadata:n}}function L(t,e,r,n){return{type:u,reqId:t,exceptions:e,requestParams:r,layerMetadata:n}}function k(){return{type:I}}function C(){return{type:_}}function U(t,e){return{type:s,reqId:t,request:e}}function Y(t,e,r,n){return{type:y,layer:t,request:e,metadata:r,queryableLayers:n}}function j(){return{type:c}}function Z(t){return{type:f,infoFormat:t}}function H(){return{type:p}}function W(){return{type:E}}function x(t){return{type:m,reverseGeocodeData:t.data}}function X(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(x(t))})).catch((function(t){e(x(t))}))}}function B(){return{type:l}}function K(){return{type:q}}function Q(t){return{type:v,status:t}}function V(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:d,point:t,layer:e,filterNameList:r,overrideParams:n,itemId:o}}function z(t){return{type:O,point:t}}function J(t){return{type:T,enabled:t}}function $(t){return{type:N,index:t}}var tt=function(){return{type:F}},et=function(t){return{type:g,format:t}},rt=function(t){return{type:R,showCoordinateEditor:t}},nt=function(t){return{type:P,layer:t}},ot=function(t){return{type:A,query:t}},it=function(t){return{type:h,trigger:t}},ut=function(t){return{type:b,value:t}},at=function(t){return{type:M,isMounted:t}},st=function(t){return{type:G,cfg:t}}},47310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(75875),o=r.n(n),i=r(8575),u=r(27418),a=r.n(u),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const c={geocode:function(t,e){var r=a()({q:t},s,e||{}),n=i.format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=a()({lat:t.lat,lon:t.lng},e||{},s),n=i.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},48507:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=function(){return r(35701),{Map:r(39726).Z,Layer:r(52792).Z,Feature:r(44948).Z,MeasurementSupport:r(42047).Z,Overview:r(21975),ScaleBar:r(20564),DrawSupport:r(91753).Z,PopupSupport:r(67465).Z}}},8797:(t,e,r)=>{"use strict";r.d(e,{rp:()=>s,Ov:()=>f,wd:()=>p,L0:()=>E}),r(1469);var n=r(91175),o=r.n(n),i=r(7654),u=r.n(i);function a(t){var e=Math.floor(t),r=60*(t-e),n=Math.floor(r),o=60*(r-n);return e+"° "+n+"' "+Math.floor(o)+"'' "}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.measureTrueBearing,n=void 0!==r&&r,o=e.fractionDigits,i=void 0===o?0:o,u="";if(n){var s="";t>=0&&t<10?s="00":t>10&&t<100&&(s="0");var c=i>0?t.toFixed(i):Math.floor(t);u=s+c+"°"}else t>=0&&t<90?u="N "+a(t)+"E":t>90&&t<=180?u="S "+a(180-t)+"E":t>180&&t<270?u="S "+a(t-180)+"W":t>=270&&t<=360&&(u="N "+a(360-t)+"W");return u}var c={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return c[e]&&c[e][r]?t*c[e][r]:t}var p=function(t){return!u()(parseFloat(t[0]))&&!u()(parseFloat(t[1]))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,r=t.type,n=e;if("LineString"===r){if((n=e.filter(p)).length<2)return[]}else if("Polygon"===r){if((n=o()(e).filter(p)).length<3)return[[]];n=[n.concat([o()(n)])]}return n}},45992:(t,e,r)=>{"use strict";r.d(e,{h:()=>f,Z:()=>p});var n=r(35937),o=r.n(n),i=r(36882),u=r(37275);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=function(t,e){var r,n,a,c,f=i.Z;if("custom"===t)r=e;else if(a=(c=t.split("."))[0],n=c[1],!(r=f[a]))throw new Error("No such provider ("+a+")");var p={url:r.url,options:r.options||{}};if(n&&"variants"in r){if(!(n in r.variants))throw new Error("No such variant of "+(a||r.url)+" ("+n+")");var E,m=r.variants[n];E="string"==typeof m?{variant:m}:m.options,p={url:m.url||p.url,options:s(s({},p.options||{}),E)}}else"function"==typeof p.url&&(p.url=p.url(c.splice(1,c.length-1).join(".")));var l="file:"===window.location.protocol||p.options.forceHTTP;0===p.url.indexOf("//")&&l&&(p.url="http:"+p.url),p.options.retina&&(e.detectRetina&&u.ZP.getBrowserProperties().retina?e.detectRetina=!1:p.options.retina=""),p.options.attribution&&(p.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,r){return t(f[r].options.attribution)}))}(p.options.attribution));var y=s(s({},p.options),o()(e,(function(t){return void 0!==t})));return[p.url,y]};const p={getLayerConfig:f}},7654:(t,e,r)=>{var n=r(81763);t.exports=function(t){return n(t)&&t!=+t}}}]);