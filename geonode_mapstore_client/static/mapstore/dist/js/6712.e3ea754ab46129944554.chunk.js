(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6712],{67007:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>j});var n=r(8575),i=r(1469),a=r.n(i),o=r(84596),l=r.n(o),u=r(27361),s=r.n(u),c=r(63105),f=r.n(c),p=r(27418),m=r.n(p),d=r(5055),y=r.n(d),v=r(75875),g=r.n(v),b=r(37275),h=r(86267),x=r(89255);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L={},M=function(e){var t=(a()(e)&&e||e.split(","))[0],r=n.parse(t,!0);return n.format(m()({},r,{search:null},{query:m()({service:"WMS",version:"1.3.0",request:"GetCapabilities"},r.query)}))},R=function(e){var t=e&&e.Title,r=e.LogoURL&&O(O({},s()(e,"LogoURL.$")||{}),{},{format:s()(e,"LogoURL.Format")}),n=s()(e,'OnlineResource.$["xlink:href"]');return{title:t,logo:r,imageUrl:s()(e,'LogoURL.OnlineResource.$["xlink:href"]'),link:n}},C=function e(t){return t.Layer?(a()(t.Layer)&&t.Layer||[t.Layer]).reduce((function(t,r){return t.concat(e(r)).concat(r.Layer&&r.Name?[r]:[])}),[]):t.Name&&[t]||[]},T=function(e){return e.Request&&e.Request.GetMap&&e.Request.GetMap.DCPType&&e.Request.GetMap.DCPType.HTTP&&e.Request.GetMap.DCPType.HTTP.Get&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$||void 0},B=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,l=arguments.length>3?arguments[3]:void 0,u=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Capability,s=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Service,c=T(u),f=u.Layer&&(null===(e=u.Layer.SRS||u.Layer.CRS)||void 0===e?void 0:e.map((function(e){return e.toUpperCase()})))||[],p=u.Layer&&u.Layer.Attribution&&R(u.Layer.Attribution),d=u.Request&&u.Request.GetMap&&u.Request.GetMap.Format||[],y=C(u),v=a()(y)?y:[y],g=v.filter((function(e){return!l||-1!==e.Name.toLowerCase().indexOf(l.toLowerCase())||e.Title&&-1!==e.Title.toLowerCase().indexOf(l.toLowerCase())||e.Abstract&&-1!==e.Abstract.toLowerCase().indexOf(l.toLowerCase())}));return{numberOfRecordsMatched:g.length,numberOfRecordsReturned:Math.min(o,g.length),nextRecord:i+Math.min(o,g.length)+1,service:s,layerOptions:{version:(null===(t=n.WMS_Capabilities||n.WMT_MS_Capabilities)||void 0===t||null===(r=t.$)||void 0===r?void 0:r.version)||"1.3.0"},records:g.filter((function(e,t){return t>=i-1&&t<i-1+o})).map((function(e){return m()({},e,{formats:d,onlineResource:c,SRS:f,credits:e.Attribution?R(e.Attribution):p})}))}},W=function(e,t,r,n){var i=L[e];return i&&(new Date).getTime()<i.timestamp+1e3*((0,b.u8)("cacheExpire")||60)?new Promise((function(e){e(B(i.data,t,r,n))})):g().get(M(e)).then((function(i){var a;return y().parseString(i.data,{explicitArray:!1},(function(e,t){a=t})),L[e]={timestamp:(new Date).getTime(),data:a},B(a,t,r,n)}))};const j={flatLayers:C,parseUrl:M,getDimensions:function(e){return l()(e.Dimension||e.dimension||[]).map((function(t,r){var n=e.Extent&&l()(e.Extent)[r]||e.extent&&l()(e.extent)[r];return{name:t.$.name,units:t.$.units,unitSymbol:t.$.unitSymbol,default:t.$.default||n&&n.$.default,values:t._&&t.split(",")||n&&n._&&n.split(",")}}))},getCapabilities:function(e,t){var i=n.parse(e,!0),a=n.format(m()({},i,{query:m()({service:"WMS",version:"1.1.1",request:"GetCapabilities"},i.query)}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var n=r(67260).unmarshaller;e(g().get(M(a)).then((function(e){var r;if(t)return y().parseString(e.data,{explicitArray:!1},(function(e,t){r=t})),r;var i=n.unmarshalString(e.data);return i&&i.value})))}.bind(null,r)).catch(r.oe)}))},describeLayer:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.parse(e,!0),o=n.format(m()({},a,{query:m()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},a.query,i.query||{})}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var t=r(67260).unmarshaller;e(g().get(M(o)).then((function(e){var r=t.unmarshalString(e.data);return r&&r.value&&r.value.layerDescription&&r.value.layerDescription[0]})))}.bind(null,r)).catch(r.oe)}))},getRecords:W,describeLayers:function(e,t){var r=n.parse(e,!0),i=n.format(m()({},r,{query:m()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},r.query)}));return g().get(M(i)).then((function(e){var t;return y().parseString(e.data,{explicitArray:!1},(function(e,r){t=r&&r.WMS_DescribeLayerResponse&&r.WMS_DescribeLayerResponse.LayerDescription})),(t=Array.isArray(t)?t:[t]).map((function(e){return O(O({},e&&e.$||{}),{},{layerName:e&&e.$&&e.$.name,query:O({},e&&e.query&&e.query.$||{})})}))}))},textSearch:function(e,t,r,n){return W(e,t,r,n)},parseLayerCapabilities:function e(t,r,n){return l()(n||s()(t,"capability.layer.layer")).reduce((function(n,i){return n||(!i.name&&i.layer?e(t,r,l()(i.layer)):2===r.name.split(":").length&&i.name&&2===i.name.split(":").length?r.name===i.name&&i:i.name&&2===i.name.split(":").length?r.name===i.name.split(":")[1]&&i:2===r.name.split(":").length?r.name.split(":")[1]===i.name&&i:r.name===i.name&&i)}),null)},getBBox:function(e,t){for(var r=e,n=r.EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,h.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;!n&&r.Layer&&r.Layer.length;)n=(r=r.Layer[0]).EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,h.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;n||(n={westBoundLongitude:-180,southBoundLatitude:-90,eastBoundLongitude:180,northBoundLatitude:90});var i={extent:[n.westBoundLongitude||n.minx,n.southBoundLatitude||n.miny,n.eastBoundLongitude||n.maxx,n.northBoundLatitude||n.maxy],crs:"EPSG:4326"};return t?{crs:i.crs,bounds:{minx:i.extent[0],miny:i.extent[1],maxx:i.extent[2],maxy:i.extent[3]}}:i},reset:function(){Object.keys(L).forEach((function(e){delete L[e]}))},preprocess:function(e){var t=e.domainAliases;return e.domainAliases=f()(t),x.Observable.of(e)}}},76712:(e,t,r)=>{"use strict";r.d(t,{n0:()=>z,tW:()=>K,FJ:()=>Y,F8:()=>ee,p8:()=>re,ll:()=>ne,eL:()=>ie,AD:()=>ae,oR:()=>oe,LZ:()=>le,eX:()=>ue,QQ:()=>se,B8:()=>ce,T6:()=>fe});var n=r(27418),i=r.n(n),a=r(91175),o=r.n(a),l=r(1469),u=r.n(l),s=r(47037),c=r.n(s),f=r(84596),p=r.n(f),m=r(13218),d=r.n(m),y=r(89734),v=r.n(y),g=r(44908),b=r.n(g),h=r(64721),x=r.n(h),S=r(27361),O=r.n(S),w=r(14293),L=r.n(w),M=r(41609),R=r.n(M),C=r(8575),T=r(86267),B=r(37275),W=r(24262),j=r(86638),A=r(7294),P=r(33044),G=r(67007),I=r(88798),q=r(52259),D=void 0;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var k=function(e){return e&&e.replace(/\/csw$/,"/")},N=function(e){return d()(e)&&e._||e},V=function(e,t){return e.filter((function(r){return A.C2(t,r,e,t,null)}))},Z=function(e){var t=Array.isArray(e.references)?e.references:[e.references];return o()([].filter.call(t,(function(t){return"WWW:LINK-1.0-http--image-thumbnail"===t.scheme||"thumbnail"===t.scheme||"WWW:DOWNLOAD-1.0-http--download"===t.scheme&&-1!==(t.value||"").indexOf("".concat(e.identifier||"","-thumb"))||"WWW:DOWNLOAD-REST_MAP"===t.scheme&&-1!==(t.value||"").indexOf("".concat(e.identifier||"","-thumb"))})))},H=function(e){var t,r,n,i=new URLSearchParams(e.value),a=new URLSearchParams,o=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_(e))){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw a}}}}(i);try{for(o.s();!(t=o.n()).done;){var l=(r=t.value,n=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){l=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw i}}return a}}(r,n)||_(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],s=l[1];a.append(u.toLocaleLowerCase(),s)}}catch(e){o.e(e)}finally{o.f()}var c=a.get("layers"),f=a.get("version");return!!c&&U(U({},e),{},{protocol:"OGC:WMS",name:c,value:"".concat(e.value.match(/[^\?]+[\?]+/g),"SERIVCE=WMS").concat(f&&"&VERSION=".concat(f))})},Q=function(e,t,r){var n,i,a,o=r.name;if(void 0===o){o=e.title?e.title.join(" "):(0,j.S$)(t,"catalog.notAvailable");var l=(n=r.protocol,r.value,null!=(a=null===(i=[{protocol:"https://registry.geodati.gov.it/metadata-codelist/ProtocolValue/www-download",displayValue:"Download"},{protocol:"http://www.opengis.net/def/serviceType/ogc/wms",displayValue:"WMS"},{protocol:"http://www.opengis.net/def/serviceType/ogc/wfs",displayValue:"WFS"}].filter((function(e){return e.protocol===n}))[0])||void 0===i?void 0:i.displayValue)?a:"Link");o="".concat(l?"".concat(o," - ").concat(l):o)}return'<li><a target="_blank" href="'.concat(r.value,'">').concat(o,"</a></li>")},X={csw:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e;return n&&n.records?n.records.map((function(e){var n,a,l,s=e.dc;if(s&&s.URI){var f=u()(s.URI)?s.URI:s.URI&&[s.URI]||[],m=o()([].filter.call(f,(function(e){return"thumbnail"===e.name})))||o()([].filter.call(f,(function(e){var t;return!e.name&&(null===(t=e.protocol)||void 0===t?void 0:t.indexOf("image/"))>-1})));n=m?m.value:null,a=o()(f.map((function(e){if(e.protocol){if(e.protocol.match(/^OGC:WMS-(.*)-http-get-map/g)||e.protocol.match(/^OGC:WMS/g))return e;if(e.protocol.match(/serviceType\/ogc\/wms/g))return H(e)}return!1})).filter((function(e){return e})))}if(!a&&s&&s.references&&s.references.length){var d=Array.isArray(s.references)?s.references:[s.references];if(a=o()([].filter.call(d,(function(e){return e.scheme&&(e.scheme.match(/^OGC:WMS-(.*)-http-get-map/g)||"OGC:WMS"===e.scheme)})))){var y=C.parse(a.value,!0),g=y.query&&y.query.layers||s.alternative;a=i()({},a,{name:g})}}if(!a&&s&&s.references&&s.references.length){var h=Array.isArray(s.references)?s.references:[s.references];if(l=o()([].filter.call(h,(function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})))){var S=s.alternative;l=i()({},l,{name:S})}}if(!n&&s&&s.references){var O=Z(s);O&&(n=O.value)}var w=[];if(s&&s.references&&(Array.isArray(s.references)?s.references:[s.references]).filter((function(e){return e.scheme.indexOf("http-get-capabilities")>-1})).forEach((function(e){var r=0===e.value.indexOf("http")?e.value:(t&&t.catalogURL||"")+"/"+e.value;w.push({type:e.scheme,url:r})})),a&&a.name){0===a.value.indexOf("http")||i()({},a,{value:(t&&t.catalogURL||"")+"/"+a.value});var L={type:a.protocol||a.scheme,url:a.value,SRS:[],params:{name:a.name}};w.push(L)}if(l&&l.name){var M={type:"arcgis",url:l.value,SRS:[],params:{name:l.name}};w.push(M)}n&&(0===n.indexOf("http")||(n=(k(t&&t.url)||"")+n));var R={boundingBox:e.boundingBox&&e.boundingBox.extent&&p()(e.boundingBox.extent.join(","))};if(s&&(R=U(U({},R),v()(Object.keys(s)).reduce((function(e,t){return U(U({},e),{},F({},t,b()(p()(s[t]))))}),{}))),s&&s.URI&&p()(s.URI)&&p()(s.URI).length&&(R=U(U({},R),{},{uri:["<ul>"+p()(s.URI).map(Q.bind(D,R,r)).join("")+"</ul>"]})),s&&s.subject&&p()(s.subject)&&p()(s.subject).length&&(R=U(U({},R),{},{subject:["<ul>"+p()(s.subject).map((function(e){return"<li>".concat(e,"</li>")})).join("")+"</ul>"]})),w&&p()(w).length?R=U(U({},R),{},{references:["<ul>"+p()(w).map((function(e){return'<li><a target="_blank" href="'.concat(e.url,'">').concat(e.params&&e.params.name||e.url,"</a></li>")})).join("")+"</ul>"]}):delete R.references,s&&s.temporal){var T=c()(s.temporal)?s.temporal.split("; "):[];if(T.length){var B=T.filter((function(e){return-1!==e.indexOf("scheme=")})).map((function(e){var t=e.indexOf("=");return e.substr(t+1,e.length-1)}));B=B.length?B[0]:"W3C-DTF";var W=T.filter((function(e){return-1!==e.indexOf("start=")||-1!==e.indexOf("end=")})).map((function(e){var t=e.indexOf("="),n=e.substr(0,t),i=e.substr(t+1,e.length-1),a=e.length-t-1<=10;return x()(["start","end"],n)&&"W3C-DTF"===B&&!a?(0,j.S$)(r,"catalog.".concat(n))+new Date(i).toLocaleString():x()(["start","end"],n)?(0,j.S$)(r,"catalog.".concat(n))+i:""}));R=U(U({},R),{},{temporal:["<ul>"+W.map((function(e){return"<li>".concat(e,"</li>")})).join("")+"</ul>"]})}}return{boundingBox:e.boundingBox,description:s&&c()(s.abstract)&&s.abstract||"",layerOptions:t&&t.layerOptions||{},identifier:s&&c()(s.identifier)&&s.identifier||"",references:w,thumbnail:n,title:s&&c()(s.title)&&s.title||"",tags:s&&s.tags||"",metadata:R,capabilities:e.capabilities}})):null},wms:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&e.records?e.records.map((function(r){return{capabilities:r,credits:r.credits,boundingBox:G.ZP.getBBox(r),description:r.Abstract||r.Title||r.Name,identifier:r.Name,service:e.service,tags:"",layerOptions:U(U({},(null==t?void 0:t.layerOptions)||{}),(null==e?void 0:e.layerOptions)||{}),title:(0,W.EM)(r)||r.Name,formats:p()(r.formats||[]),dimensions:(r.Dimension&&p()(r.Dimension)||[]).map((function(e){return i()({},{values:e._&&e._.split(",")||[]},e.$||{})})).filter((function(e){return e&&"time"!==e.name})),references:[{type:"OGC:WMS",url:t&&t.url,SRS:r.SRS&&(u()(r.SRS)?r.SRS:[r.SRS])||[],params:{name:r.Name}}]}})):null},wmts:function(e,t){return e&&e.records?e.records.map((function(e){var r=p()(A.f1(e)||t&&t.url);1===r.length&&(r=r[0]);var n=A.dN(e),a=p()(e.TileMatrixSetLink||[]).reduce((function(t,r){var n,a=o()((e.TileMatrixSet&&p()(e.TileMatrixSet)||[]).filter((function(e){return e["ows:Identifier"]===r.TileMatrixSet}))),l=a&&T.default.getEPSGCode(a["ows:SupportedCRS"]),u=r.TileMatrixSetLimits&&(r.TileMatrixSetLimits.TileMatrixLimits||[]).map((function(e){return{identifier:e.TileMatrix,ranges:{cols:{min:e.MinTileCol,max:e.MaxTileCol},rows:{min:e.MinTileRow,max:e.MaxTileRow}}}}))||a.TileMatrix.map((function(e){return{identifier:e["ows:Identifier"]}}));return i()(t,(F(n={},a["ows:Identifier"],u),F(n,l,u),n))}),{}),l=function(e){var t=e["ows:WGS84BoundingBox"];return t||(t={"ows:LowerCorner":"-180.0 -90.0","ows:UpperCorner":"180.0 90.0"}),t}(e);return{title:N(e["ows:Title"]||e["ows:Identifier"]),description:N(e["ows:Abstract"]||e["ows:Title"]||e["ows:Identifier"]),identifier:N(e["ows:Identifier"]),tags:"",layerOptions:t&&t.layerOptions||{},style:e.style,capabilitiesURL:n,queryable:e.queryable,requestEncoding:e.requestEncoding,tileMatrixSet:e.TileMatrixSet,matrixIds:a,format:e.format,TileMatrixSetLink:p()(e.TileMatrixSetLink),boundingBox:{extent:[l["ows:LowerCorner"].split(" ")[0],l["ows:LowerCorner"].split(" ")[1],l["ows:UpperCorner"].split(" ")[0],l["ows:UpperCorner"].split(" ")[1]],crs:"EPSG:4326"},references:[{type:"OGC:WMTS",url:r,SRS:V(e.SRS||[],a),params:{name:e["ows:Identifier"]}}]}})):null},tms:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.records){var r=t.service&&"tms"===t.service.provider;return r?e.records.map((function(e){return{title:e.title,tileMapUrl:e.href,description:"".concat(e.srs).concat(e.format?", "+e.format:""),tmsUrl:t.tmsUrl,references:[{type:"OGC:TMS",version:"1.0.0",url:t.url}]}})):e.records.map((function(e){return{title:e.title||e.provider,url:e.url,attribution:e.attribution,options:e.options,provider:e.provider,type:"tileprovider",references:[]}}))}return null},wfs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.records;return t?t.map((function(e){return U(U({},e),{},{references:[{type:"OGC:WFS-1.1.0-http-get-capabilities",url:e.url},{type:"OGC:WFS-1.1.0-http-get-feature",url:e.url}]})})):null},backgrounds:function(e){return e&&e.records?e.records.map((function(e){return{description:e.title,title:e.title,identifier:e.name,thumbnail:e.thumbURL,references:[],background:e}})):null}},z=function(e){return e.filter((function(e){return T.default.isSRSAllowed(e)})).reduce((function(e,t){return i()(e,F({},t,!0))}),{})},J=function(e,t){var r=e.split("?"),n={};return r.length>=2&&r[1]&&r[1].split(/[&;]/g).forEach((function(e){var r=e.split("=");-1===t.indexOf(r[0].toLowerCase())&&(n[r[0]]=r[1])})),{url:r[0],params:n}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.references,r=void 0===t?[]:t;return{wfs:o()(r.filter((function(e){return e.type&&("OGC:WFS"===e.type||e.type.indexOf("OGC:WFS")>-1&&e.type.indexOf("http-get-feature")>-1)}))),wms:o()(r.filter((function(e){return e.type&&("OGC:WMS"===e.type||e.type.indexOf("OGC:WMS")>-1&&e.type.indexOf("http-get-map")>-1)}))),wmts:o()(r.filter((function(e){return e.type&&("OGC:WMTS"===e.type||e.type.indexOf("OGC:WMTS")>-1&&e.type.indexOf("http-get-map")>-1)}))),tms:o()(r.filter((function(e){return e.type&&("OGC:TMS"===e.type||e.type.indexOf("OGC:TMS")>-1)})))}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{references:[]};return{esri:o()(e.references.filter((function(e){return e.type&&("ESRI:SERVER"===e.type||"arcgis"===e.type)})))}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.references,r=void 0===t?[]:t,n=o()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WMS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),i=o()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WFS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),a=o()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WMTS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),l=[];return n&&l.push({type:"WMS_GET_CAPABILITIES",url:n.url,labelId:"catalog.wmsGetCapLink"}),a&&l.push({type:"WMTS_GET_CAPABILITIES",url:a.url,labelId:"catalog.wmtsGetCapLink"}),i&&l.push({type:"WFS_GET_CAPABILITIES",url:i.url,labelId:"catalog.wfsGetCapLink"}),l},te=function(e){return e&&!u()(e)&&-1!==e.indexOf(",")?e.split(",").map((function(e){return e.trim()})):e},re=function(e){var t,r;return"wms"===e.type?[e.url].concat((r=null!==(t=e.domainAliases)&&void 0!==t?t:[],function(e){if(Array.isArray(e))return $(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||_(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).join(","):e.url},ne=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wms",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.removeParams,a=void 0===i?[]:i,o=n.format,l=n.catalogURL,s=n.url,c=n.formats,f=void 0===c?{}:c,p=n.map,m=void 0===p?{}:p,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},y=arguments.length>4?arguments[4]:void 0;if(!e||!e.references)return null;var v,g,b=K(e),h=b.wms,x=b.wmts,S=h||x,O=function(e){return J(B.ZP.cleanDuplicatedQuestionMarks(e),["request","layer","layers","service","version"].concat(a))},w=te(S.url);if(w&&u()(w))v=w.map((function(e){return O(e)})).map((function(e){return e.url})),g=w.map((function(e){return O(e)})).map((function(e){return e.params})).reduce((function(e,t){return U(U({},e),t)}),{});else{var M=O(w||l),C=M.url,T=M.params;v=C,g=T}var W=function(e){return u()(e)&&1===e.length?e[0]:e},j=W(s||v),A=z(S.SRS),P=null!==(t=null==e?void 0:e.capabilities)&&void 0!==t?t:{},G=P.MaxScaleDenominator,I=P.MinScaleDenominator,D=U(U(U({type:r,requestEncoding:e.requestEncoding,style:e.style,format:o,url:j,capabilitiesURL:e.capabilitiesURL,queryable:e.queryable,visibility:!0,dimensions:e.dimensions||[],name:S.params&&S.params.name,title:e.title||S.params&&S.params.name,matrixIds:"wmts"===r?e.matrixIds||[]:void 0,description:e.description||"",tileMatrixSet:"wmts"===r?e.tileMatrixSet||[]:void 0,credits:!B.ZP.getConfigProp("noCreditsFromCatalog")&&e.credits,bbox:{crs:e.boundingBox.crs,bounds:{minx:e.boundingBox.extent[0],miny:e.boundingBox.extent[1],maxx:e.boundingBox.extent[2],maxy:e.boundingBox.extent[3]}},links:ee(e),params:g,allowedSRS:A,catalogURL:l},d),e.layerOptions),{},{localizedLayerStyles:L()(y)?void 0:y});if("wms"===r&&(R()(f)||(D=U(U({},D),{},{imageFormats:f.imageFormats,infoFormats:f.infoFormats})),!R()(m)&&(G||I))){var E=!L()(I)&&(0,q.getResolutionObject)(I,"scale",m)||{},F=E.resolution,_=!L()(G)&&(0,q.getResolutionObject)(G,"scale",m)||{},$=_.resolution;D=U(U({},D),{},{minResolution:F,maxResolution:$})}return D},ie=function(e,t,r,n){return X[e]&&X[e](t,r,n)||null},ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!e.references)return null;var r=Y(e),n=r.esri;return U({type:n.type,url:n.url,visibility:!0,dimensions:e.dimensions||[],name:n.params&&n.params.name,bbox:{crs:e.boundingBox.crs,bounds:{minx:e.boundingBox.extent[0],miny:e.boundingBox.extent[1],maxx:e.boundingBox.extent[2],maxy:e.boundingBox.extent[3]}}},t)},oe=function(e,t,r){var n=e.tileMapUrl,i=t.TileMap,a=void 0===i?{}:i,o=r.forceDefaultTileGrid,l=a.Title,u=a.Abstract,s=a.SRS,c=a.BoundingBox,f=void 0===c?{}:c,m=a.Origin,d=a.TileFormat,y=void 0===d?{}:d,v=a.TileSets,g=a.$,b=g.version,h=g.tilemapservice,x=O()(f,"$",{}),S=x.minx,w=x.miny,L=x.maxx,M=x.maxy,R=O()(m,"$"),C=R.x,T=R.y,B=O()(y,"$",{}),W=B.width,j=B.height,A=B["mime-type"],G=B.extension,I=[parseFloat(W),parseFloat(j,10)],q=p()(O()(v,"TileSet",[]).map((function(e){return e.$}))).map((function(e){var t=e.href,r=e.order,n=e["units-per-pixel"];return{href:(0,P.cleanAuthParamsFromURL)(t),order:parseFloat(r),resolution:parseFloat(n)}})),D=O()(v,"profile");return{title:l,visibility:!0,hideErrors:!0,name:l,allowedSRS:F({},s,!0),description:u,srs:s,version:b,tileMapService:h?(0,P.cleanAuthParamsFromURL)(h):void 0,type:"tms",profile:D,tileMapUrl:n,forceDefaultTileGrid:o,bbox:f&&{crs:s,bounds:{minx:parseFloat(S),miny:parseFloat(w),maxx:parseFloat(L),maxy:parseFloat(M)}},tileSets:q,origin:{x:parseFloat(C),y:parseFloat(T)},format:A,tileSize:I,extension:G}},le=function(e){return U({type:e.type||"wfs",search:{url:e.url,type:"wfs"},url:e.url,queryable:e.queryable,visibility:!0,name:e.name,title:e.title||e.name,description:e.description||"",bbox:e.boundingBox,links:ee(e),style:{weight:1,color:"rgba(0, 0, 255, 1)",opacity:1,fillColor:"rgba(0, 0, 255, 0.1)",fillOpacity:.1,radius:10}},e.layerOptions)},ue=function(e){return{type:"tileprovider",visibility:!0,url:e.url,title:e.title,attribution:e.attribution,options:e.options,provider:e.provider,name:e.provider}},se=[{label:"image/png",value:"image/png"},{label:"image/png8",value:"image/png8"},{label:"image/jpeg",value:"image/jpeg"},{label:"image/vnd.jpeg-png",value:"image/vnd.jpeg-png"},{label:"image/vnd.jpeg-png8",value:"image/vnd.jpeg-png8"},{label:"image/gif",value:"image/gif"}],ce=function(){return b()(Object.values((0,I.eq)()))},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return G.ZP.getCapabilities(e).then((function(e){var r,n,i=O()(e,"capability.request.getMap.format",[]);if(R()(i))r=se;else{var a=se.map((function(e){return e.value}));r=(i=i.map((function(e){var t=e.value;return{label:t,value:t}}))).filter((function(e){var t=e.value;return x()(a,t)}))||[]}if(t){var o=O()(e,"capability.request.getFeatureInfo.format",[]),l=ce();R()(o)?n=l:(o=o.map((function(e){return e.value})),n=b()(o.filter((function(e){return x()(l,e)})))||[])}return t?{imageFormats:r,infoFormats:n}:r})).catch((function(){return t?{imageFormats:se,infoFormats:ce()}:se}))}}}]);