(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6909],{706909:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Fe});var o=r(124852),n=r.n(o),a=r(957043),i=r.n(a),s=r(91175),c=r.n(s),p=r(313311),u=r.n(p),l=r(512571),d=r.n(l),g=r(957557),f=r.n(g),y=r(701469),m=r.n(y),w=r(610928),v=r.n(w),C=r(763105),S=r.n(C),h=r(414293),P=r.n(h),G=r(984596),I=r.n(G),b=r(675263),F=r.n(b),T=r(727418),j=r.n(T),x=r(455877),O=r.n(x),L=r(375875),M=r.n(L),E=r(552259),k=r(986267),Z=r(166287),D=r(664250),A=r(446707),W=r(393546),R=r(169141),N=r(623068),V=r(973410),_=r(429902),J=r(372445),B=r(552329),q=r(640353),H=r(752043),X=r(944538),$=r(525642),z=r(513987),K=r(869669),U=r(798090),Q=r(831219),Y=r(120767),ee=r(898185),te=r(315565),re=r(409371),oe=r(378426),ne=r(436403),ae=r(718369),ie=r(829194),se=r(701577),ce=r(51273),pe=r(756834),ue=r(421915),le=r(650141),de=r(880161),ge=r(432420);function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function ye(e){return function(e){if(Array.isArray(e))return me(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return me(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?me(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){Ge(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ce(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Ie(o.key),o)}}function Se(e,t){return Se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Se(e,t)}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e){return Pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Pe(e)}function Ge(e,t,r){return(t=Ie(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ie(e){var t=function(e,t){if("object"!==fe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==fe(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===fe(t)?t:String(t)}var be=new R.Z,Fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Se(e,t)}(s,e);var t,r,o,n,a=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Pe(o);if(n){var r=Pe(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===fe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return he(e)}(this,e)});function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return Ge(he(e=a.call.apply(a,[this].concat(r))),"getNewFeature",(function(t,r,o,n){return new N.Z({geometry:e.createOLGeometry({type:t,coordinates:r,radius:o,center:n})})})),Ge(he(e),"getMapCrs",(function(){return e.props.map.getView().getProjection().getCode()})),Ge(he(e),"getWMSSnapSource",(function(t,r){var o,n,a=e.props.toggleSnappingIsLoading;if((null===(o=he(e))||void 0===o||null===(n=o.snapMetadata)||void 0===n?void 0:n.id)!==t.id){var i=new V.Z({format:new R.Z,loader:function(e,o,n){var s,c=n.getCode(),p=(0,ge.g7)(t.search.url,t.name,{version:"1.1.0",outputFormat:"application/json",srsname:c,bbox:e.join(",")+","+c,maxFeatures:null!==(s=null==r?void 0:r.maxFeatures)&&void 0!==s?s:5e5});a();var u=function(t){i.removeLoadedExtent(e),t&&console.warn(t)};M().get(p).then((function(e){a(),200===e.status?i.addFeatures(i.getFormat().readFeatures(e.data)):u()})).catch(u)},strategy:e.selectLoadingStrategy(r)});e.snapMetadata={id:t.id,source:i}}return e.snapMetadata.source})),Ge(he(e),"getLayerInstance",(function(t){return e.props.map.getLayers().getArray().find((function(e){return e.get("msId")===t}))})),Ge(he(e),"updateFeatureStyles",(function(t){t&&t.length>0&&t.forEach((function(t){if(t.style){var r=e.toOlFeature(t);r&&r.setStyle(t.style?(0,W.C2)(t):e.toOlStyle(t.style,t.selected))}}))})),Ge(he(e),"updateOnlyFeatureStyles",(function(t){e.drawLayer&&e.drawLayer.getSource().getFeatures().forEach((function(e){var r=c()(t.features).features||t.features,o=u()(r,(function(t){return t.properties.id===e.getProperties().id}));if(o){var n=(0,Z.createStylesAsync)(I()(o.style));M().all(n).then((function(t){e.setStyle((function(){return(0,W.Cw)(ve(ve({},o),{},{style:t}))}))}))}}))})),Ge(he(e),"addLayer",(function(t,r){var o,n=e.convertGeometryTypeToStyleType(t.drawMethod);o=function(e){var r=c()(t.features)&&u()(c()(t.features).features,(function(t){return t.properties.id===e.getProperties().id}))||null;if(r){var o=(0,Z.createStylesAsync)(I()(r.style));return M().all(o).then((function(t){e.setStyle((function(){return(0,W.Cw)(ve(ve({},r),{},{style:t}))}))})),null}return(0,W.Cw)({style:W.jF[n]})},e.geojson=new R.Z,e.drawSource=new V.Z,e.drawLayer=new _.Z({source:e.drawSource,zIndex:1e8,style:o}),e.props.map.addLayer(e.drawLayer),r&&e.addInteractions(t);var a=c()(t.features);if(a&&a.features&&a.features.length){var i=a.features.filter((function(e){return!e.properties.isCircle||e.properties.isCircle&&!e.properties.canEdit||!t.options.drawEnabled}));return e.addFeatures(j()({},t,{features:[ve(ve({},a),{},{features:i})]}))}return e.addFeatures(t)})),Ge(he(e),"addFeatures",(function(t){var r,o=t.features,n=t.drawMethod,a=t.options,i=e.getMapCrs();if(o.forEach((function(t){if("FeatureCollection"===t.type){var o=(new R.Z).readFeatures(t);a.geodesic||(o=o.map((function(e){return(0,D.aj)(e,i)}))),e.drawSource=new V.Z({features:o}),e.drawLayer.setSource(e.drawSource)}else{var s,c=null,p=t;if(p.geometry&&"GeometryCollection"!==p.geometry.type&&(p=(0,k.reprojectGeoJson)(p,p.featureProjection,i).geometry),"GeometryCollection"!==p.type)"Circle"===n&&p&&(p.properties&&p.properties.center||p.center)?(c=[(c=p.properties&&p.properties.center?(0,k.reproject)(p.properties.center,"EPSG:4326",i):p.center).x,c.y],r=new N.Z({geometry:e.createOLGeometry({type:"Circle",center:c,projection:"EPSG:3857",radius:p.properties&&p.properties.radius||p.radius,options:a})})):r=new N.Z({geometry:e.createOLGeometry(p.geometry?p.geometry:ve(ve({},p),{},{radius:null===(s=p.properties)||void 0===s?void 0:s.radius,center:c}))}),r.setProperties(t.properties),e.drawSource.addFeature(r)}})),0===o.length&&(a.editEnabled||a.drawEnabled))a.transformToFeatureCollection?(e.drawSource=new V.Z({features:(new R.Z).readFeatures({type:"FeatureCollection",features:[]})}),e.drawLayer.setSource(e.drawSource)):(r=new N.Z({geometry:e.createOLGeometry({type:n,coordinates:null})}),e.drawSource.addFeature(r));else{if(o[0]&&"GeometryCollection"===o[0].type){e.drawSource=new V.Z({features:(new R.Z).readFeatures(o[0])});var s=e.replacePolygonsWithCircles(e.drawSource.getFeatures()[0]);e.drawSource.getFeatures()[0].getGeometry().setGeometries(s),e.drawLayer.setSource(e.drawSource)}o[0]&&o[0].geometry&&"GeometryCollection"===o[0].geometry.type&&(r=(0,k.reprojectGeoJson)(o[0],a.featureProjection,i).geometry,e.drawSource=new V.Z({features:(new R.Z).readFeatures(r)}),e.drawSource.getFeatures()[0].set("textGeometriesIndexes",o[0].properties&&o[0].properties.textGeometriesIndexes),e.drawSource.getFeatures()[0].set("textValues",o[0].properties&&o[0].properties.textValues),e.drawSource.getFeatures()[0].set("circles",o[0].properties&&o[0].properties.circles),e.drawLayer.setSource(e.drawSource))}return e.updateFeatureStyles(o),r})),Ge(he(e),"replaceFeatures",(function(t){var r;return e.drawLayer?(e.drawSource.clear(),r=e.addFeatures(t),t.style&&e.drawLayer.setStyle((function(r){var o=u()(c()(t.features).features,(function(e){return e.properties.id===r.getProperties().id}));if(o){var n=(0,Z.createStylesAsync)(I()(o.style));return M().all(n).then((function(e){r.setStyle((function(){return(0,W.Cw)(ve(ve({},o),{},{style:e}))}))})),null}var a=e.convertGeometryTypeToStyleType(t.drawMethod);return(0,W.Cw)({style:W.jF[a]})}))):r=e.addLayer(t,t.options&&t.options.drawEnabled||!1),r})),Ge(he(e),"endDrawing",(function(t){var r=e.replaceFeatures(t);if(r){var o=e.fromOLFeature(r);"Circle"===t.drawMethod&&t&&t.features&&t.features.length&&t.features[0]&&t.features[0].radius>=0&&(o.radius=t.features[0].radius),e.props.onEndDrawing(o,t.drawOwner)}})),Ge(he(e),"addDrawInteraction",(function(t,r,o,n){e.drawInteraction&&e.removeDrawInteraction(),e.drawInteraction=new J.ZP(e.drawPropertiesForGeometryType(t,o,e.drawSource,n)),e.props.map.disableEventListener("singleclick"),e.drawInteraction.on("drawstart",(function(){e.selectInteraction&&(e.selectInteraction.getFeatures().clear(),e.selectInteraction.setActive(!1))})),e.drawInteraction.on("drawend",(function(t){var o=t.feature.clone();if(o.set("id",O().v1()),"Circle"===e.props.drawMethod&&"Circle"===o.getGeometry().getType()){var n=o.getGeometry().getRadius(),a=o.getGeometry().getCenter();o.setGeometry(e.polygonFromCircle(a,n))}var i=e.fromOLFeature(o,r);e.props.onEndDrawing(i,e.props.drawOwner),e.props.options.stopAfterDrawing&&e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner,e.props.features.concat([i])),e.selectInteraction&&(e.addSelectInteraction(),e.selectInteraction.setActive(!0))})),e.props.map.addInteraction(e.drawInteraction),e.setDoubleClickZoomEnabled(!1)})),Ge(he(e),"selectLoadingStrategy",(function(e){return"all"===(null==e?void 0:e.strategy)?de.$6:de.VW})),Ge(he(e),"addSnapInteraction",(function(t){var r=t.snapping,o=t.snappingLayerInstance,n=t.snapConfig;if(r){var a=e.getLayerInstance(o.id),i=o.type;if(e.removeSnapInteraction(),a){switch(null==a?void 0:a.type){case D.ox:e.snapInteraction=new le.Z(ve(ve({},n),{},{source:a.getSource()}));break;case D.dV:case D.k4:if("wms"===i){var s=e.getWMSSnapSource(o,n);e.snapLayer=new _.Z({source:s,style:new Q.default({stroke:new Y.default({color:"rgba(255,255,0,0)"})})}),e.props.map.addLayer(e.snapLayer),e.snapInteraction=new le.Z(ve(ve({},n),{},{source:s}))}}e.snapInteraction&&e.props.map.addInteraction(e.snapInteraction)}}})),Ge(he(e),"toMulti",(function(e){return"Point"===e.getType()?new B.Z([e.getCoordinates()]):e})),Ge(he(e),"handleDrawAndEdit",(function(t,r,o,n){e.drawInteraction&&e.removeDrawInteraction(),e.drawInteraction=new J.ZP(e.drawPropertiesForGeometryType((0,E.getSimpleGeomType)(t),o,(0,E.isSimpleGeomType)(t)?e.drawSource:null,n)),e.props.map.disableEventListener("singleclick"),e.drawInteraction.on("drawstart",(function(){e.selectInteraction&&(e.selectInteraction.getFeatures().clear(),e.selectInteraction.setActive(!1))})),e.drawInteraction.on("drawend",(function(o){var a=o.feature.clone(),i=O().v1();a.set("id",i);var s,p,l,d=a.getGeometry(),g=e.drawLayer.getSource().getFeatures(),f=e.props.features;if(e.props.options.transformToFeatureCollection){var y;if("Circle"===t){var m,w,C;if(l="Polygon",e.props.options.geodesic){w=o.feature.getGeometry().geodesicCenter||(0,ue.qg)(d.getExtent());var S=e.props.map.getView().getProjection().getCode(),h=[ye(w),ye(d.getCoordinates()[0][0])].map((function(t){return e.reprojectCoordinatesToWGS84(t,S)}));m=(0,k.calculateDistance)(h,"haversine"),C=(0,q.iu)(h[0],m).clone().transform("EPSG:4326",S).getCoordinates()}else m=d.getRadius(),w=d.getCenter(),C=e.polygonCoordsFromCircle(w,m);y=e.getNewFeature(l,C),w=(0,k.reproject)(w,e.getMapCrs(),"EPSG:4326",!1);var P=n&&n.features&&n.features.length&&n.features[0]&&n.features[0].features&&n.features[0].features.length&&n.features[0].features.filter((function(e){return e.properties.isDrawing}))[0].properties.id||i;y.setProperties({isCircle:!0,radius:m,center:[w.x,w.y],id:P,crs:e.getMapCrs(),isGeodesic:e.props.options.geodesic})}else if("Polygon"===t){l=e.props.drawMethod;var G=d.getCoordinates();G[0].push(G[0][0]),y=e.getNewFeature(l,G)}else{l="Text"===t?"Point":e.props.drawMethod;var I=d.getCoordinates();y=e.getNewFeature(l,I),"Text"===t&&y.setProperties({isText:!0,valueText:"."})}var b=g.length>=1?ye(e.replaceCirclesWithPolygonsInFeatureColl(g)):[];y.getProperties().id||y.setProperties({id:O().v1()});var F=[].concat(ye(b),[y]),T=be.writeFeaturesObject(F),x=new V.Z({features:(new R.Z).readFeatures(T)});e.drawLayer.setSource(x);var L=(0,k.reprojectGeoJson)(T,e.getMapCrs(),"EPSG:4326");e.props.onGeometryChanged([L],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"","Text"===t,"Circle"===t),e.props.onEndDrawing(L,e.props.drawOwner),e.props.onDrawingFeatures([v()(L.features)])}else{var M;if("Circle"===t){l="Polygon";var Z=d.getRadius(),D=d.getCenter(),A=e.polygonCoordsFromCircle(D,Z),W=e.toMulti(e.createOLGeometry({type:l,coordinates:A}));if(1===f.length&&f[0]&&!f[0].geometry)s=[],p=new U.default([W]);else if((s=e.toMulti(c()(g).getGeometry())).getGeometries){var N=e.replaceCirclesWithPolygons(c()(g));p=new U.default([].concat(ye(N),[W]))}else p=new U.default([s,W]);a.setGeometry(p)}else if("Text"===t||"MultiPoint"===t){var _=d.getCoordinates();l="MultiPoint";var J=e.toMulti(e.createOLGeometry({type:l,coordinates:[_]}));if(1!==f.length||f[0].geometry)if((s=e.toMulti(c()(g).getGeometry())).getGeometries){var B=e.replaceCirclesWithPolygons(c()(g));p=new U.default([].concat(ye(B),[J]))}else(p=s.clone()).appendPoint(J.getPoint(0));else s=[],p=J.clone();a.setGeometry(p)}else if(!(0,E.isSimpleGeomType)(t)){var H;p=null,s=1!==f.length||f[0].geometry?e.toMulti(c()(g).getGeometry()):e.toMulti(e.createOLGeometry({type:t,coordinates:null}));var X=g.map((function(e){return"GeometryCollection"===e.getGeometry().getType()?e.getGeometry().getGeometries():e.getGeometry()}));"GeometryCollection"===g[0].getGeometry().getType()&&(X=X[0]);var $=u()(X,(function(e){return e.getType()===t}));if($?e.appendToMultiGeometry(t,$,d):H=e.toMulti(e.createOLGeometry({type:t,coordinates:d.getCoordinates()})),d.getType()!==(0,E.getSimpleGeomType)(s.getType())){var z=c()(g).getGeometry().getGeometries?e.replaceCirclesWithPolygons(c()(g)):[];if($){var K=z.map((function(e){return e.getType()===$.getType()?$:e}));p=new U.default(K)}else p="GeometryCollection"===s.getType()?new U.default([].concat(ye(z),[H])):"Text"===t?new U.default([H]):new U.default([s,H]);a.setGeometry(p)}else a.setGeometry($)}var Q=e.props.features[0].properties;"Text"===t&&(Q=j()({},e.props.features[0].properties,{textValues:(e.props.features[0].properties.textValues||[]).concat(["."]),textGeometriesIndexes:(e.props.features[0].properties.textGeometriesIndexes||[]).concat([a.getGeometry().getGeometries().length-1])})),"Circle"===t&&(Q=j()({},Q,{circles:(e.props.features[0].properties.circles||[]).concat([a.getGeometry().getGeometries().length-1])}));var Y=e.fromOLFeature(a,r,Q),ee=new V.Z({features:(new R.Z).readFeatures(Y)});e.drawLayer.setSource(ee);var te=(0,k.reprojectGeoJson)(be.writeFeatureObject(a.clone()),e.getMapCrs(),"EPSG:4326");"Polygon"===te.geometry.type&&te.geometry.coordinates[0].push(te.geometry.coordinates[0][0]),e.props.onGeometryChanged([te],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"","Text"===t,"Circle"===t),e.props.onEndDrawing(Y,e.props.drawOwner),Y=(0,k.reprojectGeoJson)(Y,e.getMapCrs(),"EPSG:4326");var re=(0,E.isSimpleGeomType)(e.props.drawMethod)&&"GeometryCollection"!==(null===(M=e.props.features[0].geometry)||void 0===M?void 0:M.type)?e.props.features.filter((function(e){return null!==e.geometry})).map((function(t){return ve(ve({},t),{},{featureProjection:e.getMapCrs()})})).concat([ve(ve({},Y),{},{type:"Feature",geometry:{type:Y.type,coordinates:Y.coordinates},featureProjection:e.getMapCrs(),properties:Q})]):[ve(ve({},Y),{},{properties:Q})];e.props.options.stopAfterDrawing?e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner,re):e.props.onChangeDrawingStatus("replace",e.props.drawMethod,e.props.drawOwner,re.map((function(t){return(0,k.reprojectGeoJson)(t,"EPSG:4326",e.getMapCrs())})),j()({},e.props.options,{featureProjection:e.getMapCrs()})),e.selectInteraction&&(e.addSelectInteraction(),e.selectInteraction.setActive(!0))}})),e.props.map.addInteraction(e.drawInteraction),e.setDoubleClickZoomEnabled(!1)})),Ge(he(e),"drawPropertiesForGeometryType",(function(t,r,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a={source:e.drawSource||o,type:t,style:"Marker"===t?(0,W.Fc)(n.style):new Q.default({fill:new ee.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new Y.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new re.default({radius:5,stroke:new Y.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new ee.default({color:"rgba(255, 255, 255, 0.2)"})})}),features:new oe.Z,condition:ne.Bx},i={};switch(t){case"BBOX":i.type="LineString",i.maxPoints=2,i.geometryFunction=function(e,t){var r=t;r||(r=new q.ZP([]));var o=e[0],n=e[1];return r.setCoordinates([[o,[o[0],n[1]],n,[n[0],o[1]],o]]),r};break;case"Circle":i.maxPoints=100,n.options&&n.options.geodesic?i.geometryFunction=function(t,r){var o=r;o||(o=new q.ZP([])).setProperties({geodesicCenter:ye(t[0])},!0);var n=e.props.map.getView().getProjection().getCode(),a=ye(t).map((function(t){return e.reprojectCoordinatesToWGS84(t,n)})),i=(0,k.calculateDistance)(a,"haversine"),s=(0,q.iu)(a[0],i).clone().transform("EPSG:4326",n).getCoordinates();return o.setCoordinates(s),o}:i.type=t;break;case"Marker":case"Point":case"Text":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":"LineString"===t&&(i.maxPoints=r);var s="Text"===t||"Marker"===t?"Point":t;i.type=s,i.geometryFunction=function(t,r){var o=r;return o||(o=e.createOLGeometry({type:s,coordinates:null,options:n.options})),o.setCoordinates(t),o};break;default:return{}}return j()({},a,i)})),Ge(he(e),"setDoubleClickZoomEnabled",(function(t){for(var r=e.props.map.getInteractions(),o=0;o<r.getLength();o++){var n=r.item(o);if(n instanceof ae.Z){n.setActive(t);break}}})),Ge(he(e),"updateFeatureExtent",(function(t){var r=t.features.getArray(),o=e.props.features.map((function(t){var o=c()(r.filter((function(r){return e.fromOLFeature(r).id===t.id})));return o?j()({},t,{geometry:o.geometry,center:o.center,extent:o.extent,coordinate:o.coordinates,radius:o.radius}):t}));e.props.onChangeDrawingStatus("replace",e.props.drawMethod,e.props.drawOwner,o)})),Ge(he(e),"addInteractions",(function(t){e.clean(),e.drawLayer||e.addLayer(t),e.addDrawInteraction(t.drawMethod,t.options.startingPoint,t.options.maxPoints,t),t.options&&t.options.editEnabled&&(e.addSelectInteraction(),e.translateInteraction&&e.props.map.removeInteraction(e.translateInteraction),e.translateInteraction=new ie.Z({features:e.selectInteraction.getFeatures()}),e.translateInteraction.setActive(!1),e.translateInteraction.on("translateend",e.updateFeatureExtent),e.props.map.addInteraction(e.translateInteraction),e.addTranslateListener(),e.modifyInteraction&&e.props.map.removeInteraction(e.modifyInteraction),e.modifyInteraction=new se.Z({features:e.selectInteraction.getFeatures(),condition:function(e){return(0,ne.Xp)(e)&&!(0,ne.Ko)(e)}}),e.props.map.addInteraction(e.modifyInteraction)),e.drawSource.clear(),t.features.length>0&&e.addFeatures(t)})),Ge(he(e),"addSingleClickListener",(function(e,t){return t.map.on("singleclick",e)})),Ge(he(e),"addDrawOrEditInteractions",(function(t){e.state&&e.state.keySingleClickCallback&&(0,pe.B)(e.state.keySingleClickCallback),e.clean();var r,o=t.features.map((function(r){return(0,k.reprojectGeoJson)(r,t.options.featureProjection,e.getMapCrs())||{}})),n=o.every((function(e){return!!(e&&e.features&&e.features.length)})),a=o.every((function(e){return!!(e&&e.properties&&e.properties.isCircle)}));if(n)r=j()({},t,{features:o});else if(a)r=j()({},t,{features:[]});else{var i=o.reduce((function(e,t){return t.geometry?[].concat(ye(e),[ve(ve({},t.geometry),{},{properties:t.properties})]):e}),[]);r=j()({},t,{features:i})}e.drawLayer?(e.drawSource.clear(),e.addFeatures(r)):e.addLayer(r),t.options.editEnabled&&(t.options.geodesic||e.addModifyInteraction(t),!1!==t.options.translateEnabled&&e.addTranslateInteraction(),t.options.addClickCallback&&e.setState({keySingleClickCallback:e.addSingleClickListener((function(r){if(e.drawSource&&t.options){var o,n=e.drawSource.getFeatures(),a=0,i=n&&n.length&&n.filter((function(e,t){return e.getProperties().canEdit&&(a=t),e.getProperties().canEdit}))[0]||null,s=i&&i.getGeometry()&&i.getGeometry().getCoordinates&&i.getGeometry().getCoordinates()||[],c=[],p=t.drawMethod;switch(p){case"Polygon":c=s.length?(0,A.F7)(s)?[(c=(c=d()(s[0],0,s[0].length-1)).concat([r.coordinate])).concat([s[0][0]])]:s[0].length>1?[[].concat(ye(s[0]),[r.coordinate,s[0][0]])]:[[].concat(ye(s[0]),[r.coordinate])]:[[r.coordinate]],(o=e.getNewFeature(p,c)).setProperties(f()(i&&i.getProperties()||{},"geometry"));break;case"LineString":case"MultiPoint":c=s.length?[].concat(ye(s),[r.coordinate]):[r.coordinate],(o=e.getNewFeature(p,c)).setProperties(f()(i&&i.getProperties()||{},"geometry"));break;case"Circle":p="Polygon";var u=i&&i.getProperties()&&i.getProperties().radius||1e4,l=r.coordinate,g=e.polygonCoordsFromCircle(l,u);if(t.options.geodesic){var y=e.props.map.getView().getProjection().getCode(),m=[ye(l)].map((function(t){return e.reprojectCoordinatesToWGS84(t,y)}));g=(0,q.iu)(m[0],u).clone().transform("EPSG:4326",y).getCoordinates()}o=e.getNewFeature(p,g),l=(0,k.reproject)(l,e.getMapCrs(),"EPSG:4326",!1),o.setProperties(f()(i&&i.getProperties()||{},"geometry")),o.setProperties({isCircle:!0,radius:u,center:[l.x,l.y],isGeodesic:e.props.options.geodesic});break;case"Text":p="Point",(o=e.getNewFeature(p,r.coordinate)).setProperties(f()(i&&i.getProperties()||{},"geometry")),o.setProperties({isText:!0,valueText:i&&i.getProperties()&&i.getProperties().valueText||t.options.defaultTextAnnotation||"New"});break;default:c=r.coordinate,(o=e.getNewFeature(p,c)).setProperties(f()(i&&i.getProperties()||{},"geometry"))}var w={type:"Feature",geometry:{coordinates:ye((0,k.reprojectGeoJson)(be.writeFeaturesObject([o.clone()]),e.getMapCrs(),"EPSG:4326").features[0].geometry.coordinates),type:p},properties:ve({},f()(o.getProperties(),"geometry"))};e.props.onDrawingFeatures([w]),t.options.geodesic||(o=(0,D.aj)(o,e.getMapCrs())),n[a]=o,e.drawSource=new V.Z({features:n}),e.drawLayer.setSource(e.drawSource),e.addModifyInteraction(t)}}),t)})),t.options&&t.options.selectEnabled&&e.addSelectInteraction(t.options&&t.options.selected,t),t.options.drawEnabled&&e.handleDrawAndEdit(t.drawMethod,t.options.startingPoint,t.options.maxPoints,t)})),Ge(he(e),"addSelectInteraction",(function(t,r){var o;if(e.selectInteraction&&e.props.map.removeInteraction(e.selectInteraction),t&&(o=u()(e.drawSource.getFeatures(),(function(e){return e.getProperties().id===t.properties.id})))&&e.selectFeature(o),e.selectInteraction=new ce.Z({layers:[e.drawLayer],features:new oe.Z(t&&o?[o]:null)}),o){var n=e.convertGeometryTypeToStyleType(r.drawMethod);o.setStyle((0,W.C2)(ve(ve({},r),{},{style:ve(ve({},r.style),{},{type:n,highlight:!0,useSelectedStyle:r.options.useSelectedStyle})}),!1,r.features[0]&&r.features[0].properties&&r.features[0].properties.valueText&&[r.features[0].properties.valueText]||[]))}e.selectInteraction.on("select",(function(t){var r=e.selectInteraction.getFeatures().getArray(),o=[];return r.length&&(o=e.props.features.map((function(o){var n;if("FeatureCollection"===o.type&&r.length>0){var a=c()(r);if(e.selectFeature(a),a.getGeometry&&"Circle"===a.getGeometry().getType()){var i=a.getGeometry().getRadius(),s=(0,k.reproject)(a.getGeometry().getCenter(),e.getMapCrs(),"EPSG:4326");a.setProperties({center:[s.x,s.y],radius:i}),a=e.replaceCircleWithPolygon(a.clone())}return e.drawSource.getFeatures().forEach((function(t){t.getProperties().id===a.getProperties().id?e.selectFeature(a):e.deselectFeature(t)})),(0,k.reprojectGeoJson)(be.writeFeatureObject(a.clone()),e.getMapCrs(),"EPSG:4326")}return n=r.reduce((function(e,t){return t.get("id")===o.id||e}),!1),j()({},o,{selected:n,selectedFeature:t.selected})})),e.props.onSelectFeatures(o)),0===r.length?(e.props.onSelectFeatures([]),e.drawSource.getFeatures().map((function(t){return e.deselectFeature(t)})),null):null})),e.props.map.addInteraction(e.selectInteraction)})),Ge(he(e),"selectFeature",(function(e){e.setProperties({selected:!0})})),Ge(he(e),"deselectFeature",(function(e){e.setProperties({selected:!1})})),Ge(he(e),"removeDrawInteraction",(function(){e.drawInteraction&&(e.props.map.removeInteraction(e.drawInteraction),e.drawInteraction=null,setTimeout((function(){return e.props.map.enableEventListener("singleclick")}),500),setTimeout((function(){return e.setDoubleClickZoomEnabled(!0)}),250))})),Ge(he(e),"updateSnapInteraction",(function(t){var r,o=!(null===(r=t.snappingLayerInstance)||void 0===r||!r.id);if(!o&&e.snapInteraction&&e.removeSnapInteraction(),e.snapInteraction){var n,a,i=e.props.snapConfig!==t.snapConfig,s=(null===(n=e.props.snappingLayerInstance)||void 0===n?void 0:n.id)!==(null===(a=t.snappingLayerInstance)||void 0===a?void 0:a.id),c=!t.snapping&&e.props.snapping,p=t.snapping&&!e.props.snapping;p&&e.activateSnapInteraction(),c&&e.deactivateSnapInteraction(),(p||s||i)&&e.addSnapInteraction(t)}else t.snapping&&o&&e.addSnapInteraction(t)})),Ge(he(e),"activateSnapInteraction",(function(){var t;null===(t=e.snapInteraction)||void 0===t||t.setActive(!0)})),Ge(he(e),"deactivateSnapInteraction",(function(){var t;null===(t=e.snapInteraction)||void 0===t||t.setActive(!1)})),Ge(he(e),"removeSnapInteraction",(function(){e.snapInteraction&&(e.props.map.removeInteraction(e.snapInteraction),e.snapInteraction=null),e.snapLayer&&e.props.map.removeLayer(e.snapLayer)})),Ge(he(e),"removeInteractions",(function(){e.removeDrawInteraction(),e.removeSnapInteraction(),e.selectInteraction&&(e.props.map.enableEventListener("singleclick"),e.props.map.removeInteraction(e.selectInteraction)),e.modifyInteraction&&(e.props.map.removeInteraction(e.modifyInteraction),e.props.map.un("singleclick")),e.translateInteraction&&e.props.map.removeInteraction(e.translateInteraction)})),Ge(he(e),"clean",(function(t){t||e.removeInteractions(),e.drawLayer&&(e.props.map.removeLayer(e.drawLayer),e.geojson=null,e.drawLayer=null,e.drawSource=null)})),Ge(he(e),"fromOLFeature",(function(t,r,o){var n=t.getGeometry(),a=e.props.map.getView().getProjection().getCode(),s=n.getType();if(n.getCoordinates){var c,p=n.getExtent(),u=n.getProperties(),l=u&&u.geodesicCenter||(0,ue.qg)(p),d=n.getCoordinates();if(r&&(d=i()(r,d),n.setCoordinates(d)),"Circle"===e.props.drawMethod)if(e.props.options.geodesic){var g=[ye(l),ye(d[0][0])].map((function(t){return e.reprojectCoordinatesToWGS84(t,a)}));c=(0,k.calculateDistance)(g,"haversine")}else c=e.calculateRadius(l,d);return j()({},{id:t.get("id"),type:s,extent:p,center:l,coordinates:d,radius:c,style:e.fromOlStyle(t.getStyle()),projection:e.getMapCrs()})}var f=n.getGeometries().map((function(n,s){var c,p=n.getExtent(),u=(0,ue.qg)(p),l=n.getCoordinates();if(r&&(l=i()(r,l),n.setCoordinates(l)),o.circles&&-1!==o.circles.indexOf(s))if(e.props.options.geodesic){var d=[ye(u),ye(l[0][0])].map((function(t){return e.reprojectCoordinatesToWGS84(t,a)}));c=(0,k.calculateDistance)(d,"haversine")}else c=e.calculateRadius(u,l);else c=0;return j()({},{id:t.get("id"),type:n.getType(),extent:p,center:u,coordinates:l,radius:c,style:e.fromOlStyle(t.getStyle()),projection:e.getMapCrs()})}));return j()({},{type:"Feature",id:t.get("id"),style:e.fromOlStyle(t.getStyle()),geometry:{type:"GeometryCollection",geometries:f},projection:a})})),Ge(he(e),"reprojectCoordinatesToWGS84",(function(e,t){var r=(0,k.reproject)(e,t,"EPSG:4326");return[r.x,r.y]})),Ge(he(e),"toOlFeature",(function(t){return c()(e.drawSource.getFeatures().filter((function(e){return e.get("id")===t.id})))})),Ge(he(e),"fromOlStyle",(function(t){return t?{fillColor:e.rgbToHex(t.getFill().getColor()),fillTransparency:t.getFill().getColor()[3],strokeColor:t.getStroke().getColor(),strokeWidth:t.getStroke().getWidth(),text:t.getText().getText()}:{}})),Ge(he(e),"toOlStyle",(function(t,r,o){var n=t&&t.fillColor?t.fillColor:[255,255,255,.2];"string"==typeof n&&(n=e.hexToRgb(n).concat([t.fillOpacity>=0&&t.fillOpacity<=1?t.fillOpacity:1])),t&&t.fillTransparency&&(n[3]=t.fillTransparency);var a=t&&(t.strokeColor||t.color)?t.strokeColor||t.color:"#ffcc33";r&&(a="#4a90e2"),a=e.hexToRgb(a).concat([t&&t.opacity||1]);var i=new Q.default({fill:new ee.default({color:n}),stroke:new Y.default({color:a,width:t&&(t.strokeWidth||t.weight)?t.strokeWidth||t.weight:2}),text:new te.default({text:t&&t.text?t.text:"",fill:new ee.default({color:t&&(t.strokeColor||t.color)?t.strokeColor||t.color:"#000"}),stroke:new Y.default({color:"#fff",width:2}),font:t&&t.fontSize?t.fontSize+"px helvetica":""})});return"GeometryCollection"===o?[].concat(ye((0,W.EC)({style:{iconGlyph:"comment",iconShape:"square",iconColor:"blue"}})),[i]):t&&(t.iconUrl||t.iconGlyph)?(0,W.EC)({style:t}):i})),Ge(he(e),"hexToRgb",(function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,o){return t+t+r+r+o+o})));return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null})),Ge(he(e),"componentToHex",(function(e){var t=e.toString(16);return 1===t.length?"0"+t:t})),Ge(he(e),"rgbToHex",(function(t){return"#"+e.componentToHex(t[0])+e.componentToHex(t[1])+e.componentToHex(t[2])})),Ge(he(e),"addModifyInteraction",(function(t){e.modifyInteraction&&e.props.map.removeInteraction(e.modifyInteraction);var r=t&&t.options&&t.options.editFilter;e.modifyFeatureColl=new oe.Z(S()(e.drawLayer.getSource().getFeatures(),r)),e.modifyInteraction=new se.Z({features:e.modifyFeatureColl,condition:function(e){return(0,ne.Xp)(e)&&!(0,ne.Ko)(e)}}),e.modifyInteraction.on("modifyend",(function(t){var r=t.features.getArray().map((function(t){var r=t.clone();if(r.getGeometry&&"GeometryCollection"===r.getGeometry().getType()&&r.getGeometry().setGeometries(e.replaceCirclesWithPolygons(r)),r.getGeometry&&r.getGeometry()&&"Circle"===r.getGeometry().getType()){var o=(0,k.reproject)(r.getGeometry().getCenter(),e.getMapCrs(),"EPSG:4326"),n=r.getGeometry().getRadius();r.setProperties({center:[o.x,o.y],radius:n}),t.setProperties({center:[o.x,o.y],radius:n}),r=e.replaceCircleWithPolygon(r.clone())}return(0,k.reprojectGeoJson)(be.writeFeatureObject(r),e.getMapCrs(),"EPSG:4326")}));e.props.options.transformToFeatureCollection?e.props.onDrawingFeatures(r):e.props.onGeometryChanged(r,e.props.drawOwner,!1,"editing","editing")})),e.props.map.addInteraction(e.modifyInteraction)})),Ge(he(e),"addTranslateInteraction",(function(){e.translateInteraction&&e.props.map.removeInteraction(e.translateInteraction),e.translateInteraction=new ie.Z({features:new oe.Z(e.drawLayer.getSource().getFeatures())}),e.translateInteraction.setActive(!1),e.translateInteraction.on("translateend",(function(t){var r=t.features.getArray().map((function(t){var r=t.clone();if(r.getGeometry&&"GeometryCollection"===r.getGeometry().getType()&&r.getGeometry().setGeometries(e.replaceCirclesWithPolygons(r)),r.getGeometry&&r.getGeometry()&&"Circle"===r.getGeometry().getType()){var o=(0,k.reproject)(r.getGeometry().getCenter(),e.getMapCrs(),"EPSG:4326"),n=r.getGeometry().getRadius();r.setProperties({center:[o.x,o.y],radius:n}),r=e.replaceCircleWithPolygon(r)}return t.getProperties()&&t.getProperties().selected&&e.props.onSelectFeatures([(0,k.reprojectGeoJson)(be.writeFeatureObject(r),e.getMapCrs(),"EPSG:4326")]),(0,k.reprojectGeoJson)(be.writeFeatureObject(r),e.getMapCrs(),"EPSG:4326")}));e.props.options.transformToFeatureCollection?e.props.onDrawingFeatures(r):e.props.onGeometryChanged(r,e.props.drawOwner,e.props.drawOwner,!1,"Text"===e.props.drawMethod,"Circle"===e.props.drawMethod)})),e.addTranslateListener(),e.props.map.addInteraction(e.translateInteraction)})),Ge(he(e),"createOLGeometry",(function(t){var r=t.type,o=t.coordinates,n=t.radius,a=t.center,i=t.geometries,s=t.projection,c=t.options,p=void 0===c?{}:c;return"GeometryCollection"===r?i&&i.length?new U.default(i.map((function(t){return e.olGeomFromType({type:t.type})}))):new U.default([]):e.olGeomFromType({type:r,coordinates:o,radius:n,center:a,projection:s,options:p})})),Ge(he(e),"olGeomFromType",(function(t){var r,o=t.type,n=t.coordinates,a=t.radius,i=t.center,s=t.projection,c=t.options;switch(o){case"Point":case"Marker":case"Text":r=new H.Z(n||[]);break;case"LineString":r=new X.Z(n||[]);break;case"MultiPoint":r=new B.Z(n||[]);break;case"MultiLineString":r=new $.Z(n||[]);break;case"MultiPolygon":r=new z.Z(n||[]);break;default:var p=m()(i)?{x:i[0],y:i[1]}:i,u=s&&!isNaN(parseFloat(a))&&p&&!P()(p.x)&&!P()(p.y)&&!isNaN(parseFloat(p.x))&&!isNaN(parseFloat(p.y));(r=u?c.geodesic?(0,q.iu)(e.reprojectCoordinatesToWGS84([p.x,p.y],s),a,100).clone().transform("EPSG:4326",s):(0,q.Bb)(new K.Z([p.x,p.y],a),100):new q.ZP(n&&m()(n[0])?n:[]))&&u&&c.geodesic&&r.setProperties({geodesicCenter:[p.x,p.y]},!0)}return r})),Ge(he(e),"convertGeometryTypeToStyleType",(function(e){return"BBOX"===e?"LineString":e})),Ge(he(e),"appendToMultiGeometry",(function(e,t,r){switch(e){case"MultiPoint":t.appendPoint(r);break;case"MultiLineString":t.appendLineString(r);break;case"MultiPolygon":var o=r.getCoordinates();o[0].push(o[0][0]),r.setCoordinates(o),t.appendPolygon(r)}})),Ge(he(e),"calculateRadius",(function(e,t){return m()(t)&&m()(t[0])&&m()(t[0][0])?Math.sqrt(Math.pow(e[0]-t[0][0][0],2)+Math.pow(e[1]-t[0][0][1],2)):100})),Ge(he(e),"polygonFromCircle",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return(0,q.Bb)(new K.Z(e,t),r)})),Ge(he(e),"polygonCoordsFromCircle",(function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return e.polygonFromCircle(t,r,o).getCoordinates()})),Ge(he(e),"replaceCirclesWithPolygonsInFeatureColl",(function(t){return t.map((function(t){return"Circle"!==t.getGeometry().getType()?t:e.replaceCircleWithPolygon(t)}))})),Ge(he(e),"replaceCircleWithPolygon",(function(t){if(t.getProperties().isCircle&&"Circle"===t.getGeometry().getType()){var r=t.getGeometry().getCenter(),o=t.getGeometry().getRadius();return t.setGeometry(e.polygonFromCircle(r,o)),t}return t})),Ge(he(e),"replaceCirclesWithPolygons",(function(t){return t.getGeometry&&!t.getGeometry().getGeometries?t:t.getGeometry().getGeometries().map((function(r,o){if("Circle"!==r.getType())return r;if(t.getProperties()&&t.getProperties().circles&&-1!==t.getProperties().circles.indexOf(o)){var n=r.getCenter(),a=r.getRadius();return e.polygonFromCircle(n,a)}return r}))})),Ge(he(e),"replacePolygonsWithCircles",(function(t){return t.getGeometry().getGeometries().map((function(r,o){if("Polygon"!==r.getType())return r;if(t.getProperties()&&t.getProperties().circles&&-1!==t.getProperties().circles.indexOf(o)){var n=r.getExtent(),a=(0,ue.qg)(n),i=e.calculateRadius(a,r.getCoordinates());return new K.Z(a,i)}return r}))})),Ge(he(e),"addTranslateListener",(function(){document.addEventListener("keydown",(function(t){t.altKey&&"AltLeft"===t.code&&e.translateInteraction.setActive(!0)})),document.addEventListener("keyup",(function(t){"AltLeft"===t.code&&e.translateInteraction.setActive(!1)}))})),e}return t=s,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(this.drawLayer&&this.updateFeatureStyles(e.features),!e.drawStatus&&this.selectInteraction&&this.selectInteraction.getFeatures().clear(),this.props.drawStatus!==e.drawStatus||this.props.drawMethod!==e.drawMethod||this.props.features!==e.features)switch(e.drawStatus){case"create":this.addLayer(e);break;case"start":this.addInteractions(e);break;case"drawOrEdit":this.addDrawOrEditInteractions(e);break;case"stop":this.removeDrawInteraction();break;case"replace":this.replaceFeatures(e);break;case"updateStyle":this.updateOnlyFeatureStyles(e);break;case"clean":this.clean();break;case"cleanAndContinueDrawing":this.clean(!0);break;case"endDrawing":this.endDrawing(e)}this.updateSnapInteraction(e)}},{key:"render",value:function(){return null}}])&&Ce(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(n().Component);Ge(Fe,"propTypes",{map:F().object,drawOwner:F().string,drawStatus:F().string,drawMethod:F().string,options:F().object,features:F().array,onChangeDrawingStatus:F().func,onGeometryChanged:F().func,onDrawStopped:F().func,onDrawingFeatures:F().func,onSelectFeatures:F().func,onEndDrawing:F().func,style:F().object,snapping:F().bool,snappingLayer:F().object,snappingLayerInstance:F().object,isSnappingLoading:F().bool,snapConfig:F().object,onRefreshSnappingLayer:F().func,toggleSnappingIsLoading:F().func}),Ge(Fe,"defaultProps",{map:null,drawOwner:null,drawStatus:null,drawMethod:null,features:null,options:{stopAfterDrawing:!0},onChangeDrawingStatus:function(){},onGeometryChanged:function(){},onDrawStopped:function(){},onDrawingFeatures:function(){},onSelectFeatures:function(){},onEndDrawing:function(){}})},664250:(e,t,r)=>{"use strict";r.d(t,{ox:()=>c,dV:()=>p,k4:()=>u,aj:()=>d});var o=r(701469),n=r.n(o),a=r(986267),i=r(421915),s=r(869669),c="VECTOR",p="TILE",u="IMAGE",l=function(e,t,r,o){if(n()(t)&&n()(t[0])&&n()(t[0][0])){var i=(0,a.reproject)(t[0][0],o,r);return Math.sqrt(Math.pow(e[0]-i.x,2)+Math.pow(e[1]-i.y,2))}return 100},d=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;if(!e.getGeometry()||"Polygon"!==e.getGeometry().getType()||e.getProperties().center&&0===e.getProperties().center.length)return e;if(e.getProperties()&&e.getProperties().isCircle&&e.getProperties().center&&e.getProperties().center[0]&&e.getProperties().center[1]){var o,n=e.getGeometry().getExtent();o=e.getProperties().center?[(o=(0,a.reproject)(e.getProperties().center,"EPSG:4326",t)).x,o.y]:(0,i.qg)(n);var c=e.getProperties().crs===t?e.getProperties().radius:l(o,e.getGeometry().getCoordinates(),t,r);return e.setGeometry(new s.Z(o,c)),e}return e}}}]);