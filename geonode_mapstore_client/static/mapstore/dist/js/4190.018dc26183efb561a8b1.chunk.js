(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4190],{604206:(e,t,n)=>{"use strict";n.d(t,{hZ:()=>r,pb:()=>o,kD:()=>i,DI:()=>a,IC:()=>l,iU:()=>s,W7:()=>u,uB:()=>p,Rh:()=>c,G_:()=>f,vU:()=>m,Vw:()=>d,KD:()=>y,uj:()=>g,lo:()=>v,Yf:()=>b,fo:()=>h,PY:()=>E,bp:()=>S,oJ:()=>O,k4:()=>P,sc:()=>T,Li:()=>j});var r="CHANGE_DRAWING_STATUS",o="DRAW:END_DRAWING",i="DRAW:SET_CURRENT_STYLE",a="DRAW:GEOMETRY_CHANGED",l="DRAW:DRAW_SUPPORT_STOPPED",s="DRAW:FEATURES_SELECTED",u="DRAW:DRAWING_FEATURES",p="DRAW:SET_SNAPPING_LAYER",c="DRAW:SNAPPING_IS_LOADING",f="DRAW:TOGGLE_SNAPPING",m="DRAW:SET_SNAPPING_CONFIG";function d(e,t,n,r,o){return{type:a,features:e,owner:t,enableEdit:n,textChanged:r,circleChanged:o}}function y(){return{type:s,features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}function g(){return{type:u,features:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}function v(){return{type:l}}function b(e,t,n,o,i,a){return{type:r,status:e,method:t,owner:n,features:o,options:i,style:a}}function h(e,t){return{type:o,geometry:e,owner:t}}function E(e){return{type:i,currentStyle:e}}var S=function(e){return b("clean","",e,[],{})};function O(){return{type:f}}function P(e){return{type:p,snappingLayer:e}}function T(){return{type:c}}function j(e,t,n){return{type:m,value:e,prop:t,pluginCfg:n}}},589602:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n.d(t,{lD:()=>i,yK:()=>a,gf:()=>l,Qr:()=>s,Kx:()=>u,V:()=>p,Wt:()=>c,Qw:()=>f,GI:()=>m,MT:()=>d,XX:()=>y,sc:()=>g,qg:()=>v,Kf:()=>b,ES:()=>h,ud:()=>E,Bd:()=>S,pO:()=>O,Gd:()=>P,$3:()=>T,el:()=>j,CG:()=>w,h2:()=>A,NR:()=>C,RM:()=>M,dD:()=>N,wB:()=>x,Y_:()=>D,nl:()=>R,S1:()=>F});var i="CHANGE_MEASUREMENT_TOOL",a="CHANGE_MEASUREMENT_STATE",l="MEASUREMENT:CHANGE_UOM",s="MEASUREMENT:CHANGED_GEOMETRY",u="MEASUREMENT:SET_TEXT_LABELS",p="MEASUREMENT:SET_CURRENT_FEATURE",c="MEASUREMENT:ADD_AS_LAYER",f="MEASUREMENT:RESET_GEOMETRY",m="MEASUREMENT:CHANGE_FORMAT",d="MEASUREMENT:CHANGE_COORDINATES",y="MEASUREMENT:ADD_MEASURE_AS_ANNOTATION",g="MEASUREMENT:UPDATE_MEASURES",v="MEASUREMENT:INIT",b="MEASUREMENT:SET_MEASUREMENT_CONFIG",h="MEASUREMENT:SET_ANNOTATION_MEASUREMENT";function E(e,t,n,r,o){return{type:y,features:e,textLabels:t,uom:n,save:r,properties:o}}function S(e){return function(t){t(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){var o,i,a;o=e,i=t,a=n[t],(i=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(i))in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:i},e)}(e))}}function O(e,t){return{type:h,features:e,properties:t}}function P(e,t,n){return{type:l,uom:e,value:t,previousUom:n}}function T(e){return{type:s,features:e}}function j(e,t){return{type:b,property:e,value:t}}function w(e){return{type:u,textLabels:e}}function A(e){return{type:p,featureIndex:e}}function C(e,t,n){return{type:c,features:e,textLabels:t,uom:n}}function M(e){return{type:m,format:e}}function N(e){return{type:d,coordinates:e}}function x(){return{type:f}}function D(e){return{type:g,measures:e}}function R(e){return{type:a,pointMeasureEnabled:e.pointMeasureEnabled,lineMeasureEnabled:e.lineMeasureEnabled,areaMeasureEnabled:e.areaMeasureEnabled,bearingMeasureEnabled:e.bearingMeasureEnabled,geomType:e.geomType,values:e.values,feature:e.feature,point:e.point,len:e.len,area:e.area,bearing:e.bearing,lenUnit:e.lenUnit,areaUnit:e.areaUnit}}function F(){return{type:v,defaultOptions:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}},260024:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var r=n(124852),o=n.n(r),i=n(675263),a=n.n(i),l=n(480681),s=n(743129),u=n(815135),p=n(91175),c=n.n(p),f=n(807654),m=n.n(f),d=n(227361),y=n.n(d),g=n(441609),v=n.n(g),b=n(86638),h=n(80717),E=n(245567),S=n(805346),O=n(446707),P=n(438261),T=n(281763),j=n.n(T),w=n(808797),A=n(986267),C=n(794192),M=n(867076),N=function(e,t,n){return j()(parseFloat(e))&&!isNaN(parseFloat(e))?(0,w.Ov)(parseFloat(e),t,n):e},x=function(e,t,n){return j()(parseFloat(e))&&!isNaN(parseFloat(e))?parseFloat((0,w.Ov)(e,n,t).toFixed(4)):e};const D=(0,M.compose)((0,M.defaultProps)({valueUom:"m",displayUom:"m",units:[{value:"degrees",label:"deg",originUom:"degrees"},{value:"ft",label:"ft",originUom:"m"},{value:"m",label:"m",originUom:"m"},{value:"km",label:"km",originUom:"m"},{value:"mi",label:"mi",originUom:"m"},{value:"nm",label:"nm",originUom:"m"}]}),(0,M.withStateHandlers)((function(e){var t=e.displayUom;return{uom:void 0===t?"nm":t}}),{setUom:function(){return function(e){return{uom:e}}}}),(0,M.withState)("localValue","setLocalValue"),(0,M.withPropsOnChange)(["value","localValue","uom","valueUom"],(function(e){var t=e.value,n=e.localValue,r=e.uom,o=e.valueUom;return{value:t===N(n,r,o)?n:x(t,r,o)}})),(0,M.withHandlers)({onChange:function(e){var t=e.uom,n=e.projection,r=e.valueUom,o=e.onChange,i=void 0===o?function(){}:o,a=e.setLocalValue,l=void 0===a?function(){}:a;return function(e){l(e),i(N(e,t,r),n)}}}))((function(e){var t=e.value,n=e.units,r=void 0===n?[]:n,i=e.uom,a=e.projection,s=void 0===a?"EPSG:3857":a,u=e.style,p=void 0===u?{display:"inline-flex",width:"100%"}:u,c=e.setUom,f=void 0===c?function(){}:c,m=e.onChange,d=void 0===m?function(){}:m,y=(0,A.getUnits)(s);return o().createElement(l.FormGroup,{style:p},o().createElement(C.Z,{value:t,placeholder:"radius",name:"radius",onChange:function(e){return d(e,i)},step:1,type:"number"}),o().createElement(l.FormControl,{componentClass:"select",placeholder:"select",value:i,onChange:function(e){return f(e.target.value)},style:{width:85}},r.filter((function(e){var t=e.originUom;return y===t})).map((function(e){return o().createElement("option",{key:e.value,value:e.value},e.label)}))))}));function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H(r.key),r)}}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}function B(e,t,n){return(t=H(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===R(t)?t:String(t)}var W=(0,u.Z)(l.Glyphicon),Z=(0,u.Z)(l.DropdownButton),Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(i){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(this,e)});function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return B(k(e=a.call.apply(a,[this].concat(n))),"getValidationStateRadius",(function(e){var t=parseFloat(e);return m()(t)?"error":null})),B(k(e),"renderLabelTexts",(function(t,n){var r=n.textLabels,o=n.featurePropValue;return"Polygon"===e.props.type?!v()(r)&&r[t].text:0!==t?v()(r)?!v()(o)&&o[0].formattedValue:r[t-1].text:null})),B(k(e),"validateCoordinates",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0;if(t&&t.length){var o=t.filter(O.Tl);return n?o.length>e.props.componentsValidation[e.props.type].min||o.length>=e.props.componentsValidation[e.props.type].min&&!(0,O.Tl)(t[r]):o.length>=e.props.componentsValidation[e.props.type].min}return!1})),B(k(e),"validateCircle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.props.properties.radius;if(t&&t.length){var r=c()(t);return!m()(parseFloat(n))&&(0,O.Tl)(r)}return!1})),B(k(e),"validateText",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.props.properties.valueText;if(t&&t.length){var r=c()(t);return!!n&&(0,O.Tl)(r)}return!1})),B(k(e),"isValid",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.components,n=arguments.length>1?arguments[1]:void 0;return e[e.props.componentsValidation[e.props.type].validation](t,!1,n)})),B(k(e),"addCoordPolygon",(function(t){if("Polygon"===e.props.type){var n,r,o,i=t.filter(O.Tl),a=(null===(n=e.props.features[e.props.currentFeature])||void 0===n||null===(r=n.geometry)||void 0===r||null===(o=r.coordinates)||void 0===o?void 0:o[0])||[],l=void 0!==a?a.findIndex((function(e){return!(0,O.Tl)({lon:e[0],lat:e[1]})})):-1;return t.concat([i.length&&0!==l?i[0]:{lat:"",lon:""}])}return t})),B(k(e),"change",(function(t,n){var r=e.props.components,o=m()(parseFloat(n.lat))?"":parseFloat(n.lat),i=m()(parseFloat(n.lon))?"":parseFloat(n.lon);r[t]={lat:o,lon:i};var a=e.addCoordPolygon(r);e.props.onChange(a,e.props.properties.radius,e.props.properties.valueText,e.props.mapProjection),e.isValid(r)?(e.props.isMouseEnterEnabled||"LineString"===e.props.type||"Polygon"===e.props.type)&&e.props.onHighlightPoint(r[t]):((e.props.isMouseLeaveEnabled||"LineString"===e.props.type||"Polygon"===e.props.type)&&e.props.onHighlightPoint(null),e.props.onSetInvalidSelected("coords",r.map(O.bh)))})),e}return t=u,(n=[{key:"renderCircle",value:function(){var e=this;return o().createElement("div",{style:{flex:1,overflowY:"auto",padding:"0 10px"}},o().createElement("div",null,o().createElement(l.FormGroup,{validationState:this.getValidationStateRadius(this.props.properties.radius)},o().createElement(l.ControlLabel,null,o().createElement(S.Z,{msgId:"annotations.editor.radius"})),o().createElement(D,V({placeholder:"radius"},this.props.measureOptions,{value:this.props.properties.radius,projection:this.props.mapProjection,name:"radius",onChange:function(t,n){e.props.onValidateFeature(),e.isValid(e.props.components,t)?e.props.onChangeRadius(parseFloat(t),e.props.components.map(O.bh),n):""!==t?e.props.onChangeRadius(parseFloat(t),[],n):(e.props.onChangeRadius(null,e.props.components.map(O.bh),n),e.props.onSetInvalidSelected("radius",e.props.components.map(O.bh)))},step:1,type:"number"})))))}},{key:"render",value:function(){var e=this,t=this.props.features[this.props.currentFeature||0],n=y()(t,"geometry.textLabels",[]),r=y()(t,"properties.values",[]),i=this.props,a=i.componentsValidation,u=i.type,p=U(this.props.components),f=p.filter(O.Tl).length===p.length,m=this[a[u].validation]()&&f,d=[{value:"decimal",text:o().createElement(S.Z,{msgId:"annotations.editor.decimal"})},{value:"aeronautical",text:o().createElement(S.Z,{msgId:"annotations.editor.aeronautical"})}],g=[{glyph:m?"ok-sign text-success":"exclamation-mark text-danger",tooltipId:m?"annotations.editor.valid":a[u].notValid,visible:!0},{Element:function(){return o().createElement(Z,{noCaret:!0,title:o().createElement(W,{glyph:"cog"}),pullRight:!0,className:"square-button-md no-border",tooltip:"Format"},d.map((function(t){var n=t.text,r=t.value;return o().createElement(l.MenuItem,{active:e.props.format===r,key:r,onClick:function(){return e.props.onChangeFormat(r)}},n)})))}},{glyph:"plus",tooltipId:"annotations.editor.add",disabled:"Bearing"!==u&&this.props.properties.disabled,visible:!a[u].add||!a[u].max||this.props.components.length!==a[u].max,onClick:function(){var t=U(e.props.components);t=t.concat([{lat:"",lon:""}]),e.props.onChange(t,e.props.properties.radius,e.props.properties.valueText,e.props.mapProjection)}}];return o().createElement("div",{className:"coordinates-editor",style:this.props.style},o().createElement("div",{className:"measure-feature-selector"},o().createElement("div",null,this.props.showFeatureSelector?o().createElement(s.ZP,{value:this.props.currentFeature,disabled:this.props.properties.disabled,options:[].concat(U(this.props.features.map((function(t,n){var r=y()(t,"properties.values",[]),o="bearing"===(r[0]||{}).type?"Bearing":t.geometry.type;if(o!==e.props.type)return null;var i="LineString"===o?"Length":"Bearing"===o?"Bearing":"Area",a=r.length>0?"".concat(i," ").concat(r[0].formattedValue):"",l=r.length>1&&"Polygon"===o?", Perimeter: ".concat(r[1].formattedValue):"";return{label:"".concat(o," (").concat(a).concat(l,")"),value:n}}))),[{label:(0,b.S$)(this.context.messages,"annotations.editor.newFeature"),value:this.props.features.length}]).filter((function(e){return!!e})),onChange:function(t){return e.props.onChangeCurrentFeature(null==t?void 0:t.value)}}):null),o().createElement("div",null,o().createElement(h.Z,{btnGroupProps:{className:"pull-right"},btnDefaultProps:{className:"square-button-md no-border"},buttons:g}))),"Circle"===this.props.type&&this.renderCircle(),"Circle"===this.props.type&&o().createElement("div",{style:{flex:1,overflowY:"auto",paddingLeft:10,marginTop:10}},o().createElement("div",null,o().createElement(l.ControlLabel,null,o().createElement(S.Z,{msgId:"annotations.editor.center"})))),o().createElement("div",{className:"coordinates-row-container coordinates-row-type-".concat(u)},this.props.components.map((function(t,i){return o().createElement(o().Fragment,null,e.props.showLengthAndBearingLabel&&o().createElement("div",{className:"label-texts"},o().createElement("span",null,e.renderLabelTexts(i,{textLabels:n,featurePropValue:r}))),o().createElement(P.Z,{format:e.props.format,aeronauticalOptions:e.props.aeronauticalOptions,sortId:i,key:i+" key",disabled:e.props.properties.disabled&&(0,O.Tl)(t),renderer:e.props.renderer,isDraggable:e.props.isDraggable,isDraggableEnabled:e.props.isDraggable&&e[a[u].validation]()&&!e.props.properties.disabled,showDraggable:e.props.isDraggable&&!("Point"===e.props.type||"Text"===e.props.type||"Circle"===e.props.type),formatVisible:!1,removeVisible:a[u].remove,removeEnabled:e[a[u].validation](e.props.components,a[u].remove,i),onSubmit:e.change,onMouseEnter:function(t){(e.props.isMouseEnterEnabled||"LineString"===e.props.type||"Polygon"===e.props.type||"MultiPoint"===e.props.type)&&e.props.onHighlightPoint(t)},onMouseLeave:function(){(e.props.isMouseLeaveEnabled||"LineString"===e.props.type||"Polygon"===e.props.type||"MultiPoint"===e.props.type)&&e.props.onHighlightPoint(null)},onSort:function(t,n){var r=e.props.components.reduce((function(r,o,i){return t===i?[].concat(U(r),t>n?[L({},o),c()(e.props.components.filter((function(e,t){return t===n})))]:[c()(e.props.components.filter((function(e,t){return t===n}))),L({},o)]):n===i?U(r):[].concat(U(r),[L({},o)])}),[]).filter((function(e){return e}));e.isValid(r)?e.props.onChange(r):e.props.properties.isValidFeature&&e.props.onSetInvalidSelected("coords",e.props.components.map(O.bh))},idx:i,component:t,onRemove:function(){var t=e.props.components.filter((function(e,t){return t!==i}));e.isValid(t)?(e.props.isMouseEnterEnabled||"LineString"===e.props.type&&i!==t.length||"Polygon"===e.props.type?e.props.onHighlightPoint(t[i]):e.props.onHighlightPoint(null),e.props.onChange(t)):e.props.properties.isValidFeature&&e.props.onSetInvalidSelected("coords",e.props.components.map(O.bh))},onValidateFeature:e.props.onValidateFeature}))}))),(!this.props.components||0===this.props.components.length)&&o().createElement("div",{className:"text-center",style:{padding:15,paddingBottom:30}},o().createElement("i",null,o().createElement(S.Z,{msgId:"annotations.editor.addByClick"}))))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);B(Y,"propTypes",{components:a().array,measureOptions:a().object,onSetInvalidSelected:a().func,onChange:a().func,onChangeRadius:a().func,onHighlightPoint:a().func,onChangeText:a().func,onChangeFormat:a().func,onChangeCurrentFeature:a().func,format:a().string,aeronauticalOptions:a().object,componentsValidation:a().object,transitionProps:a().object,properties:a().object,mapProjection:a().string,features:a().array,currentFeature:a().number,showFeatureSelector:a().bool,type:a().string,isDraggable:a().bool,isMouseEnterEnabled:a().bool,isMouseLeaveEnabled:a().bool,showLengthAndBearingLabel:a().bool,renderer:a().string,style:a().object,onValidateFeature:a().func}),B(Y,"contextTypes",{messages:a().object}),B(Y,"defaultProps",{components:[],measureOptions:{},onChange:function(){},onChangeRadius:function(){},onHighlightPoint:function(){},onChangeFormat:function(){},onChangeText:function(){},onChangeCurrentFeature:function(){},onSetInvalidSelected:function(){},onValidateFeature:function(){},componentsValidation:{Bearing:{min:2,max:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},Polygon:{min:3,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},LineString:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},MultiPoint:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"annotations.editor.notValidPolyline"},Point:{min:1,max:1,add:!0,remove:!1,validation:"validateCoordinates",notValid:"annotations.editor.notValidMarker"},Circle:{min:1,max:1,add:!0,remove:!1,validation:"validateCircle",notValid:"annotations.editor.notValidCircle"},Text:{min:1,max:1,add:!0,remove:!1,validation:"validateText",notValid:"annotations.editor.notValidText"}},transitionProps:{transitionName:"switch-panel-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300},features:[],isDraggable:!0,isMouseEnterEnabled:!1,isMouseLeaveEnabled:!1,properties:{},type:"Point",style:{display:"flex",flexDirection:"column",flex:1}});const z=(0,E.Z)(Y)},245567:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(124852),o=n.n(r),i=n(867076);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var l=["onSort","isDraggable","items","containerId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){var r,o,i;r=e,o=t,i=n[t],(o=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const c=(0,i.compose)((0,i.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var n=t.onSort,r=t.isDraggable,i=t.items,a=void 0===i?[]:i,u=t.containerId,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,l),f=a.map((function(e,t){return p(p({},e),{},{onSort:n,isDraggable:r,sortId:t,key:e.id||t,containerId:u})}));return o().createElement(e,s({},p(p({},c),{},{isDraggable:r}),{items:f}))}})))},998869:(e,t,n)=>{"use strict";n.d(t,{U:()=>c});var r=n(782904),o=n(49977),i=n.n(o),a=n(607147),l=n(242780),s=n(604206),u=n(801550),p=n(433528),c=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e,t){return i().Observable.from([(0,r.Xg)(t,"enabled",null)])},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(e,t){return(0,a.Yq)(t)(e)};return e.ofType(l.Np,s.hZ,u.YD,p.$O).filter((function(e){var r=e.type,o=e.status,i=e.owner,a=e.eventName,f=e.toolName,m=c(t.getState(),n);switch(r){case p.$O:return"featureGrid"!==n;case u.YD:return m&&"click"===a&&f!==n;case s.hZ:return m&&("drawOrEdit"===o||"start"===o)&&i!==n;case l.Np:default:return m&&"annotations"!==n}})).switchMap((function(e){return c(t.getState(),n)?o(t.getState(),n,e):i().Observable.empty()}))}},808797:(e,t,n)=>{"use strict";n.d(t,{rp:()=>s,Ov:()=>p,wd:()=>c,L0:()=>f}),n(701469);var r=n(91175),o=n.n(r),i=n(807654),a=n.n(i);function l(e){var t=Math.floor(e),n=60*(e-t),r=Math.floor(n),o=60*(n-r);return t+"° "+r+"' "+Math.floor(o)+"'' "}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.measureTrueBearing,r=void 0!==n&&n,o=t.fractionDigits,i=void 0===o?0:o,a="";if(r){var s="";e>=0&&e<10?s="00":e>10&&e<100&&(s="0"),a=s+(i>0?e.toFixed(i):Math.floor(e))+"°"}else e>=0&&e<90?a="N "+l(e)+"E":e>90&&e<=180?a="S "+l(180-e)+"E":e>180&&e<270?a="S "+l(e-180)+"W":e>=270&&e<=360&&(a="N "+l(360-e)+"W");return a}var u={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return u[t]&&u[t][n]?e*u[t][n]:e}var c=function(e){return!a()(parseFloat(e[0]))&&!a()(parseFloat(e[1]))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,n=e.type,r=t;if("LineString"===n){if((r=t.filter(c)).length<2)return[]}else if("Polygon"===n){if((r=o()(t).filter(c)).length<3)return[[]];r=[r.concat([o()(r)])]}return r}},162192:(e,t,n)=>{"use strict";n.d(t,{zE:()=>P,k2:()=>j,tL:()=>C});var r=n(59854),o=n.n(r),i=n(385564),a=n.n(i),l=n(318029),s=n.n(l),u=n(944908),p=n.n(u),c=n(227361),f=n.n(c),m=n(423570),d=n.n(m),y=n(446707),g=n(808797),v=n(986267);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){var r,o,i;r=e,o=t,i=n[t],(o=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===b(t)?t:String(t)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P="Measure",T=function(e,t){return{length:o()((0,g.Ov)(t,"m",e.length.label)||0,2)+" "+e.length.label,area:o()((0,g.Ov)(t,"sqm",e.area.label)||0,2)+" "+e.area.label,bearing:(0,g.rp)(o()(t||0,6)).toString()}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return p()(e.map((function(e){return"LineString"===e.geometry.type&&"bearing"===f()(e,"properties.values[0].type","")?"Bearing":e.geometry.type})))},w={offsetY:1,fontSize:"10",fontSizeUom:"px",fontFamily:"Courier New",font:"10px Courier New",textAlign:"center",color:"#000000",opacity:1,fillColor:"#000000",fillOpacity:1},A={offsetY:-15,fontSize:"13",fontSizeUom:"px",fontFamily:"Courier New",font:"13px Courier New",textAlign:"center",color:"#000000",opacity:1,fillColor:"#000000",fillOpacity:1},C=function(e,t,n,r,o,i){var l,u,c=(l=e,(u=p()(l.map((function(e){return f()(e,"properties.values[0].type","")})))).length>1?{title:"Multiple Measurement",iconGlyph:"geometry-collection"}:{title:P+" "+s()(u[0]),iconGlyph:"1-measure-"+u[0]});return{type:"FeatureCollection",features:[].concat(S(a()(e.map((function(e){return function(e,t,n){var r,o,i,a=n||A,l=!(null===(r=e.properties)||void 0===r||null===(o=r.values)||void 0===o||!o.find((function(e){return"bearing"===e.type})));return[{type:"Feature",geometry:{type:e.geometry.type,coordinates:(0,g.L0)(e.geometry),textLabels:e.geometry.textLabels},properties:{id:d()(),isValidFeature:!0,geometryGeodesic:"LineString"!==e.geometry.type||l?null:{type:"LineString",coordinates:(0,v.transformLineToArcs)(e.geometry.coordinates)},useGeodesicLines:"LineString"===e.geometry.type&&!l,values:(null===(i=e.properties)||void 0===i?void 0:i.values)||[]},style:[E(E({},y.z4[e.geometry.type]),{},{type:e.geometry.type,id:d()(),geometry:"LineString"!==e.geometry.type||l?null:"lineToArc",title:"".concat(e.geometry.type," Style"),filtering:!0})].concat("LineString"===e.geometry.type?(0,y.N_)():[])}].concat(S(e.properties.values.map((function(e){var n=e.value,r=e.formattedValue,o=e.type;return{type:"Feature",geometry:{type:"Point",coordinates:e.position},properties:{valueText:r||T(t,n)[o],isText:!0,isValidFeature:!0,id:d()()},style:E(E({},a),{},{id:d()(),filtering:!0,title:"Text Style",type:"Text"})}}))))}(e,n,i)})))),S(t.filter((function(e){return!!e})).map((function(e){var t=e.text;return{type:"Feature",geometry:{type:"Point",coordinates:e.position},properties:{valueText:t,isValidFeature:!0,isText:!0,id:d()()},style:E(E({},w),{},{id:d()(),filtering:!0,title:"Text Style",type:"Text"})}})))),properties:{id:r,description:o,type:P,title:c.title,iconGlyph:c.iconGlyph},style:{}}}}}]);