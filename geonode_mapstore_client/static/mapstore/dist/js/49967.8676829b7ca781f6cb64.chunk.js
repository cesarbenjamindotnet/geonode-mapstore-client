(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[49967],{791753:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var o=r(675263),n=r.n(o),a=r(124852),i=r.n(a),p=r(610928),s=r.n(p),c=r(414293),u=r.n(c),l=r(845243),f=r.n(l),d=(r(921787),r(451172),r(552259)),y=function(e){return[e.getWest(),e.getSouth(),e.getEast(),e.getNorth()]};function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,j(o.key),o)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function O(e,t,r){return(t=j(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}f().Draw.Polygon.prototype._calculateFinishDistance=function(e){if(this._markers.length>0){var t=this._map.latLngToContainerPoint(this._markers[0].getLatLng()),r=this._map.latLngToContainerPoint(this._markers[this._markers.length-1].getLatLng()),o=new(f().Marker)(e,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),n=this._map.latLngToContainerPoint(o.getLatLng());return Math.min(t.distanceTo(n),r.distanceTo(n))}return 1/0};var S=r(727418),L=r(986267),C=L.reproject,E=L.reprojectBbox,D=L.calculateCircleCoordinates,M=L.reprojectGeoJson,G=r(680379).pointToLayer,k=Math.PI/180,_=function(e,t,r){if("EPSG:4326"===r)return{center:t,srs:r,radius:e};var o=e/40075017*360/Math.cos(k*t[1]),n=C(t,"EPSG:4326",r);if(o){var a=C([t[0]+o,t[1]],"EPSG:4326",r);return{center:n,srs:r,radius:Math.sqrt(Math.pow(n.x-a.x,2)+Math.pow(n.y-a.y,2))}}return{center:n,srs:r,radius:e}},I=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"EPSG:4326";if("EPSG:4326"===r||void 0===e)return{center:t,projection:r,radius:e};var o=C({x:t.lng,y:t.lat},r,"EPSG:4326");if(void 0===e)return{center:o,projection:r,radius:e};var n=C([t.lng+e,t.lat],r,"EPSG:4326");return{center:o,projection:"EPSG:4326",radius:Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2))*Math.cos(k*o.y)*40075017/360}},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,r,o,n,a=(o=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(o);if(n){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return O(b(e=a.call.apply(a,[this].concat(r))),"onDrawStart",(function(){e.drawing=!0})),O(b(e),"onDrawCreated",(function(t){e.drawing=!1;var r,o=t.layer,n=o.toGeoJSON();"marker"===t.layerType?r=f().latLngBounds(n.geometry.coordinates,n.geometry.coordinates):(o._map||(o._map=e.props.map,o._renderer=e.props.map.getRenderer(o),o._project()),r=o.getBounds());var a=y(r),i=r.getCenter();i=[i.lng,i.lat];var p=n.geometry.coordinates,s="EPSG:4326",c=n.geometry.type,u=o.getRadius?o.getRadius():0;if("circle"===t.layerType){n.projection="EPSG:4326",a=E(a,"EPSG:4326",s="EPSG:3857");var l=_(o._mRadius,i,s);i=l.center,u=l.radius,p=D(i,u,100),n.radius=o.getRadius?o.getRadius():0,i=[i.x,i.y],c="Polygon"}e.drawLayer.addData(n);var d={type:c,extent:a,center:i,coordinates:p,radius:u,projection:s};e.props.options&&e.props.options.stopAfterDrawing&&e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner);var m=e.convertFeaturesToGeoJson(t.layer,e.props);e.props.onEndDrawing(d,e.props.drawOwner),e.props.onGeometryChanged([m],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"")})),O(b(e),"onUpdateGeom",(function(t,r){var o=e.convertFeaturesToGeoJson(t,r);r.onGeometryChanged([o],r.drawOwner)})),O(b(e),"addLayer",(function(t){e.clean();var r=f().geoJson(null,{pointToLayer:function(e,t){var r=I(e.radius,t,e.projection),o=r.center,n=r.radius;return f().circle(o,n||5)},style:function(e){return t.style&&t.style[e.geometry.type]||{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}}});e.props.map.addLayer(r),t.features&&t.features.length>0&&r.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod)),e.drawLayer=r})),O(b(e),"addGeojsonLayer",(function(t){var r=t.features,o=t.projection,n=t.style;e.clean();var a=f().geoJson(r,{style:function(e){return e.style||n},pointToLayer:function(e,t){var r=C({x:t.lng,y:t.lat},o,"EPSG:4326");return G(f().latLng(r.y,r.x),e,n)}});e.drawLayer=a.addTo(e.props.map)})),O(b(e),"replaceFeatures",(function(t){e.drawLayer?(e.drawLayer.clearLayers(),"Circle"===e.props.drawMethod?(e.drawLayer.options.pointToLayer=function(e,t){var r=I(e.radius,t,e.projection),o=r.center,n=r.radius;return f().circle(o,n||5)},e.drawLayer.options.style={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}):e.drawLayer.options.pointToLayer=function(e,r){var o=C({x:r.lng,y:r.lat},t.options&&t.options.featureProjection||"EPSG:4326","EPSG:4326");return G(f().latLng(o.y,o.x),e,t.style)},e.drawLayer.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod))):e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style})})),O(b(e),"endDrawing",(function(t){e.replaceFeatures(t);var r=s()(t.features);"Circle"!==e.props.drawMethod||!r||u()(r.center)||u()(r.radius)?r&&e.props.onEndDrawing(r,e.props.drawOwner):e.props.onEndDrawing(g(g({},r),{},{coordinates:D(r.center,r.radius,100)}),e.props.drawOwner)})),O(b(e),"addDrawInteraction",(function(t){e.removeAllInteractions(),"Point"===t.drawMethod||"MultiPoint"===t.drawMethod?e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}):e.addLayer(t),e.props.map.on("draw:created",e.onDrawCreated,b(e)),e.props.map.on("draw:drawstart",e.onDrawStart,b(e)),"LineString"===t.drawMethod||"Bearing"===t.drawMethod||"MultiLineString"===t.drawMethod?e.drawControl=new(f().Draw.Polyline)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},showLength:!1,repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Polygon"===t.drawMethod||"MultiPolygon"===t.drawMethod?e.drawControl=new(f().Draw.Polygon)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5],guidelineDistance:5},allowIntersection:!1,showLength:!1,showArea:!1,repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"BBOX"===t.drawMethod?e.drawControl=new(f().Draw.Rectangle)(e.props.map,{draw:!1,shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Circle"===t.drawMethod?e.drawControl=new(f().Draw.Circle)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},showRadius:!1,repeatMode:!0}):"Point"!==t.drawMethod&&"MultiPoint"!==t.drawMethod||(e.drawControl=new(f().Draw.Marker)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},repeatMode:!0})),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable(),e.drawControl.enable()})),O(b(e),"addDrawOrEditInteractions",(function(t){var r=[];t.features.map((function(e){var t;e&&e.geometry&&e.geometry.type&&!(0,d.isSimpleGeomType)(e.geometry.type)&&("GeometryCollection"===e.geometry.type?(t=e.geometry.geometries.map((function(t){return t.coordinates.map((function(r,o){return{type:"Feature",properties:g({},e.properties),id:t.type+o,geometry:{coordinates:r,type:(0,d.getSimpleGeomType)(t.type)}}}))})),r.push({type:"FeatureCollection",features:t})):(t=e.geometry.coordinates.map((function(t,r){return{type:"Feature",properties:g({},e.properties),id:e.geometry.type+r,geometry:{coordinates:t,type:(0,d.getSimpleGeomType)(e.geometry.type)}}})),r.push({type:"FeatureCollection",features:t})))}));var o=S({},t,{features:r.length>0?r:[{}]});e.drawLayer?(e.drawLayer.clearLayers(),e.drawLayer.addData(e.convertFeaturesPolygonToPoint(o.features,o.drawMethod))):e.addGeojsonLayer({features:t.features&&t.options.featureProjection&&"EPSG:4326"!==t.options.featureProjection?t.features.map((function(e){return M(e,t.options.featureProjection,"EPSG:4326")})):t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}),t.options.editEnabled&&e.addEditInteraction(o),t.options.drawEnabled&&e.addDrawInteraction(o)})),O(b(e),"addEditInteraction",(function(t){e.clean(),e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:S({},t.style,{poly:{icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}})});var r=e.drawLayer.getLayers();setTimeout((function(){r.forEach((function(r){r.getLayers&&r.getLayers()&&r.getLayers().length?r.getLayers().forEach((function(r){r.on("edit",(function(r){return e.onUpdateGeom(r.target,t)})),r.on("moveend",(function(r){return e.onUpdateGeom(r.target,t)})),r.editing&&r.editing.enable()})):(r.on("edit",(function(r){return e.onUpdateGeom(r.target,t)})),r.on("moveend",(function(r){return e.onUpdateGeom(r.target,t)})),r.editing&&r.editing.enable())}))}),0),e.editControl=new(f().Control.Draw)({edit:{featureGroup:e.drawLayer,poly:{allowIntersection:!1},edit:!0},draw:{polygon:{allowIntersection:!1,showArea:!0}}}),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable()})),O(b(e),"removeAllInteractions",(function(){e.removeEditInteraction(),e.removeDrawInteraction()})),O(b(e),"removeDrawInteraction",(function(){null!==e.drawControl&&void 0!==e.drawControl&&(e.props.options&&e.props.options.stopAfterDrawing&&(e.drawControl.setOptions({repeatMode:!1}),e.props.onDrawStopped()),e.drawControl.disable(),e.drawControl=null,e.props.map.off("draw:created",e.onDrawCreated,b(e)),e.props.map.off("draw:drawstart",e.onDrawStart,b(e)),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable())})),O(b(e),"removeEditInteraction",(function(){e.drawLayer&&(e.drawLayer.getLayers().forEach((function(e){e.getLayers&&e.getLayers()&&e.getLayers().length?e.getLayers().forEach((function(e){e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable()})):(e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable())})),e.editControl=null),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable()})),O(b(e),"cleanAndStop",(function(){e.removeAllInteractions(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),O(b(e),"clean",(function(){e.removeEditInteraction(),e.removeDrawInteraction(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),O(b(e),"convertFeaturesPolygonToPoint",(function(e,t){return"Circle"===t?e.map((function(e){var t=void 0!==e.center&&void 0!==e.radius?I(e.radius,{lat:e.center.y,lng:e.center.x},e.projection):e,r=t.center,o=t.projection,n=t.radius;return g(g({},e),{},{coordinates:r?[r.x,r.y]:e.coordinates,center:r||e.center,projection:o||e.projection,radius:void 0!==n?n:e.radius,type:"Point"})})):e})),O(b(e),"convertFeaturesToGeoJson",(function(t,r){var o;if((0,d.isSimpleGeomType)(r.drawMethod))o=t.toGeoJSON().geometry;else{if("GeometryCollection"===r.drawMethod)return{type:"GeometryCollection",geometries:e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()})).map((function(e){return"FeatureCollection"===e.type?{type:"Multi"+e.features[0].geometry.type,coordinates:e.features.map((function(e){return e.geometry.coordinates}))}:{type:e.geometry.type,coordinates:e.geometry.coordinates}}))};var n=e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()}));o={type:r.drawMethod,coordinates:n.reduce((function(e,t){return e.concat([t.geometry.coordinates])}),[])}}return S({},t.toGeoJSON(),{geometry:o})})),e}return t=i,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=!(!this.props.messages&&!this.context.messages)&&this.context.messages.drawLocal;if(t&&(f().drawLocal=t),this.props.drawStatus!==e.drawStatus||"replace"===e.drawStatus||this.props.drawMethod!==e.drawMethod||this.props.features!==e.features)switch(e.drawStatus){case"create":this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style});break;case"start":this.addDrawInteraction(e);break;case"drawOrEdit":this.addDrawOrEditInteractions(e);break;case"stop":this.removeAllInteractions();break;case"replace":this.replaceFeatures(e);break;case"clean":this.cleanAndStop();break;case"endDrawing":this.endDrawing(e);break;default:return}}},{key:"render",value:function(){return null}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(i().Component);O(T,"displayName","DrawSupport"),O(T,"propTypes",{map:n().object,drawOwner:n().string,drawStatus:n().string,drawMethod:n().string,options:n().object,features:n().array,onChangeDrawingStatus:n().func,onGeometryChanged:n().func,onDrawStopped:n().func,onEndDrawing:n().func,messages:n().object,style:n().object}),O(T,"defaultProps",{map:null,drawOwner:null,drawStatus:null,drawMethod:null,features:null,options:{stopAfterDrawing:!0},onChangeDrawingStatus:function(){},onGeometryChanged:function(){},onDrawStopped:function(){},onEndDrawing:function(){},style:{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1,editing:{fill:1}}});const x=T},967465:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var o=r(124852),n=r.n(o),a=r(180307),i=r.n(a),p=r(675263),s=r.n(p),c=r(845243),u=r.n(c),l=r(747037),f=r.n(l),d=r(925064),y=r(821751);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,O(o.key),o)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function P(e,t,r){return(t=O(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}var j=function(e,t){var r=new MutationObserver((function(){e.update()}));e.once("remove",(function(){r&&r.disconnect(),r=null})),r.observe(t,{attributes:!0,childList:!0,subtree:!0})},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(s,e);var t,r,o,a,p=(o=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(o);if(a){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return P(h(e=p.call.apply(p,[this].concat(r))),"updatePopup",(function(){(e._popups||[]).map((function(e){return e.popup.update()}))})),P(h(e),"popupClose",(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target,r=(void 0===t?{}:t).options,o=(void 0===r?{}:r).id;o&&e.props.onPopupClose(o)})),P(h(e),"preparePopups",(function(){var t=e.props,r=t.popups,o=void 0===r?[]:r,n=t.map,a=e.props.map.getSize();return(e._popups||[]).forEach((function(t){var r=t.popup;r.off("remove",e.popupClose),r&&e.props.map.removeLayer(r)})),e._popups=o.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=.9*a.x,o=.9*a.y,i=t.id,p=t.position.coordinates,s=t.component,c=t.content,l=t.className,f=t.maxWidth,y=void 0===f?r:f,m=t.maxHeight,g=void 0===m?o:m,v=t.autoPan,h=void 0===v||v,b=t.offset,O=void 0===b?[0,7]:b,S=y>r?r:y,L=g>o?o:g,C=d.fH(i,l);C.setAttribute("style","max-width: ".concat(S,"px; max-height: ").concat(L,"px")),d.R3(C,c);var E=u().popup({id:i,autoClose:!1,closeOnClick:!1,autoPan:h,autoPanPadding:u().point(70,70),maxWidth:S,maxHeight:L,className:"ms-leaflet-popup",offset:O}).setContent(C);return E.once("remove",e.popupClose),s&&j(E,C),E.setLatLng(p),n.addLayer(E),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({popup:E},t)})),e._popups})),P(h(e),"stopPropagationOnMouseMove",(function(e){e.stopPropagation()})),P(h(e),"fireMouseOutEvent",(function(){e.props.map.fireEvent("mouseout")})),e}return t=s,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&(this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"componentDidMount",value:function(){this.props.map&&this.props.map.on("resize",this.updatePopup)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){var e=this;(this._popups||[]).forEach((function(t){var r,o,n=t.popup;n.off("remove",e.popupClose),n&&(null===(r=e.props.map)||void 0===r||null===(o=r.removeLayer)||void 0===o||o.call(r,n))})),this.props.map&&(this.props.map.off("resize",this.updatePopup),this.props.map.getContainer().removeEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().removeEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"renderPopups",value:function(){return this.preparePopups().filter((function(e){return!!e.component})).map((function(e){var t=e.popup,r=e.props,o=void 0===r?{}:r,a=e.component,p=e.id,s=t.getContent(),c=f()(a)&&y.default[a]||a,u=n().isValidElement(c)&&c||n().createElement(c,o);return s?i().createPortal(u,s,p):null}))}},{key:"render",value:function(){return n().createElement("div",null,this.renderPopups())}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(n().Component);P(S,"propTypes",{map:s().object,popups:s().arrayOf(s().object),onPopupClose:s().func}),P(S,"defaultProps",{popups:[],onPopupClose:function(){}})},821751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{IDENTIFY_POPUP:()=>O,default:()=>j});var o=r(124852),n=r.n(o),a=r(173014),i=r(11196),p=r(867076),s=r(171703),c=r(22222),u=r(307877),l=r(921914),f=r(542872),d=r(701469),y=r.n(d),m=r(352353),w=r.n(m),g=r(979870),v=r(800827),h=(0,p.compose)((0,s.connect)((0,c.P1)(u.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,p.defaultProps)({index:0,responses:[]})),b=(0,c.P1)([u.q7,u.o9,u.OK,u.us,u.x0,v.hp,u.vR],(function(e,t,r,o,n,a,i){return{responses:e,validResponses:t,requests:r,format:o,showEmptyMessageGFI:n,missingResponses:(r||[]).length-(e||[]).length,renderValidOnly:a,loaded:i}}));const P=(0,p.compose)((0,s.connect)(b),(0,p.defaultProps)({responses:[],container:function(e){var t=e.index,r=e.children;return n().createElement(n().Fragment,null,y()(r)&&r[t]||r)},header:g.Z}),h,i.Yy,i.mI,(0,a.Z)((function(e){var t=e.loaded;return w()(t)})))(f.Z);var O="identify";const j={identify:P}},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var o=r(675263),n=r.n(o),a=r(124852),i=r.n(a);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return e>100?"full":e>40?"medium":"small"},f=function(e){var t=e.size,r=e.style,o=void 0===r?{}:r,n=e.className,a=e.hidden;return i().createElement("div",{className:n,style:c({width:t,height:t,overflow:"hidden"},o)},!a&&i().createElement("div",{className:"mapstore-".concat(l(t),"-size-loader")}))};f.propTypes={size:n().number,className:n().string,style:n().object};const d=f},925064:(e,t,r)=>{"use strict";r.d(t,{fH:()=>a,FP:()=>i,R3:()=>p});var o=r(455877),n=r.n(o),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",r=document.createElement("div");return r.setAttribute("id",e+"-map-popup"),r.setAttribute("class",t),r},i=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").startsWith("<")},p=function(e,t){if(!t)return e;if(t instanceof Node){var r=document.createDocumentFragment();r.appendChild(t),e.appendChild(r)}else i(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},410240:(e,t,r)=>{var o=r(829750),n=r(880531),a=r(640554),i=r(479833);e.exports=function(e,t,r){return e=i(e),r=null==r?0:o(a(r),0,e.length),t=n(t),e.slice(r,r+t.length)==t}}}]);