(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[35820],{134990:(t,e,n)=>{"use strict";n.d(e,{D7:()=>u,mN:()=>l,vb:()=>s,KT:()=>f,QK:()=>p,cc:()=>m,Gx:()=>d,XH:()=>y,lX:()=>v,tP:()=>O,Dq:()=>b,LE:()=>E,SW:()=>h,si:()=>g,i2:()=>S,IY:()=>T,Zf:()=>R,ij:()=>C,Hb:()=>w,Mk:()=>G,c:()=>j,NZ:()=>P,Cx:()=>_,wb:()=>A,km:()=>Y,un:()=>I,Ro:()=>D,jr:()=>N,ZY:()=>k,EQ:()=>L,W$:()=>B,mk:()=>x,U3:()=>Z,aF:()=>U,IH:()=>M,rp:()=>z,D_:()=>V,zJ:()=>W,wJ:()=>F,OS:()=>H,YP:()=>q,Ct:()=>$,Od:()=>X,y6:()=>K,g5:()=>J,_e:()=>Q,DF:()=>tt,GD:()=>et,K0:()=>nt,kB:()=>rt,Xn:()=>ot,G5:()=>it,Vx:()=>ct,RZ:()=>at,pB:()=>ut,$A:()=>lt,m7:()=>st,YM:()=>ft,o2:()=>pt,ql:()=>mt,c0:()=>dt,Fu:()=>yt,WE:()=>vt,fD:()=>Ot,EE:()=>bt});var r=n(747037),o=n.n(r),i=n(455877),c=n.n(i),a=n(192579),u="GEOSTORY:ADD",l="GEOSTORY:ADD_RESOURCE",s="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",p="GEOSTORY:EDIT_RESOURCE",m="GEOSTORY:EDIT_WEBPAGE",d="GEOSTORY:SCROLLING",y="GEOSTORY:LOAD_GEOSTORY",v="GEOSTORY:LOADING_GEOSTORY",O="GEOSTORY:MOVE",b="GEOSTORY:REMOVE",E="GEOSTORY:SAVE_STORY",h="GEOSTORY:SAVE_ERROR",g="GEOSTORY:STORY_SAVED",S="GEOSTORY:SELECT_CARD",T="GEOSTORY:SET_CONTROL",R="GEOSTORY:SET_RESOURCE",C="GEOSTORY:SET_CURRENT_STORY",w="GEOSTORY:SET_WEBPAGE_URL",G="GEOSTORY:TOGGLE_CARD_PREVIEW",j="GEOSTORY:TOGGLE_SETTINGS_PANEL",P="GEOSTORY:TOGGLE_SETTING",_="GEOSTORY:TOGGLE_CONTENT_FOCUS",A="GEOSTORY:UPDATE",Y="GEOSTORY:UPDATE_SETTING",I="GEOSTORY:UPDATE_CURRENT_PAGE",D="GEOSTORY:REMOVE_RESOURCE",N="GEOSTORY:SET_PENDING_CHANGES",k="GEOSTORY:SET_UPDATE_URL_SCROLL",L="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",B="GEOSTORY:HIDE_CAROUSEL_ITEMS",x="GEOSTORY:ENABLE_DRAW",Z="GEOSTORY:EXPORT",U="GEOSTORY:IMPORT",M=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return t};return{type:u,id:n&&n.id||c()(),path:t,position:e,element:o()(n)&&(0,a.nq)(n,r)||n}},z=function(t,e,n){return{type:l,id:t,mediaType:e,data:n}},V=function(t){return{type:s,mode:t?a.nl.EDIT:a.nl.VIEW}},W=function(t,e,n){return{type:p,id:t,mediaType:e,data:n}},F=function(t,e){return{type:y,id:t,options:e}},H=function(t){return{type:"GEOSTORY:GEOSTORY_LOADED",id:t}},q=function(){return{type:v,value:arguments.length>0&&void 0!==arguments[0]&&arguments[0],name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading"}},$=function(t){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:t}},X=function(t){return{type:b,path:t}},K=function(t){return{type:h,error:t}},J=function(t,e){return{type:T,control:t,value:e}},Q=function(t){return{type:S,card:t}},tt=function(t){return{type:R,resource:t}},et=function(t){return{type:g,id:t}},nt=function(t){return{type:C,story:t}},rt=function(){return{type:G}},ot=function(t){return{type:P,option:t}},it=function(){return{type:j,withSave:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},ct=function(t,e){return{type:A,path:t,element:e,mode:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace"}},at=function(t){var e=t.sectionId,n=t.columnId;return{type:I,sectionId:e,columnId:n}},ut=function(t,e,n){return{type:O,source:t,target:e,position:n}},lt=function(t,e,n,r,o){return{type:_,status:t,target:e,selector:n,hideContent:r,path:o}},st=function(t,e){return{type:Y,prop:t,value:e}},ft=function(t){return{type:w,src:t}},pt=function(t){var e=t.path;return{type:m,path:e,owner:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY"}},mt=function(t,e){return{type:D,id:t,mediaType:e}},dt=function(t){return{type:N,value:t}},yt=function(t){return{type:L,mediaEditorSettings:t}},vt=function(t){return{type:d,status:t}},Ot=function(t,e){return{type:B,sectionId:t,showContentId:e}},bt=function(t){return{type:x,drawOptions:t}}},501262:(t,e,n)=>{"use strict";n.d(e,{Z:()=>T});var r=n(727418),o=n.n(r),i=n(675263),c=n.n(i),a=n(124852),u=n.n(a),l=n(180307),s=n.n(l),f=n(480681),p=n(38560),m=n(805346),d=n(807472);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function h(t,e,n){return(e=g(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(a,t);var e,n,r,i,c=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(i){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}(this,t)});function a(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return h(b(t=c.call.apply(c,[this].concat(n))),"setConfirmRef",(function(e){return t.confirm=e,t.confirm})),t}return e=a,(n=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&s().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return u().createElement(d.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},u().createElement("span",{role:"header"},u().createElement("span",{className:"user-panel-title"},this.props.title),u().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?u().createElement(f.Glyphicon,{glyph:this.props.closeGlyph}):u().createElement("span",null,"×"))),u().createElement("div",{role:"body"},this.props.children),u().createElement("div",{role:"footer"},u().createElement(f.ButtonGroup,null,u().createElement(p.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),u().createElement(p.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(u().Component);h(S,"propTypes",{show:c().bool,draggable:c().bool,onClose:c().func,onConfirm:c().func,onSave:c().func,modal:c().bool,closeGlyph:c().string,style:c().object,buttonSize:c().string,inputStyle:c().object,title:c().node,confirmButtonContent:c().node,confirmButtonDisabled:c().bool,closeText:c().node,confirmButtonBSStyle:c().string,focusConfirm:c().bool}),h(S,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:u().createElement(m.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:u().createElement(m.Z,{msgId:"confirm"})||"Confirm",closeText:u().createElement(m.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const T=S},314068:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var r=n(124852),o=n.n(r),i=n(855033),c=n.n(i),a=n(532425),u=n(483139),l=n(80717);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function f(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const d=(0,r.forwardRef)((function(t,e){var n,i,m=t.className,d=void 0===m?"ms-thumbnail":m,y=t.label,v=t.loading,O=t.message,b=t.error,E=t.thumbnail,h=t.removeGlyph,g=void 0===h?"trash":h,S=t.removeTooltipId,T=void 0===S?"removeThumbnail":S,R=t.style,C=void 0===R?{}:R,w=t.maxFileSize,G=void 0===w?5e5:w,j=t.supportedImageTypes,P=void 0===j?["image/png","image/jpeg","image/jpg"]:j,_=t.thumbnailOptions,A=t.dropZoneProps,Y=void 0===A?{className:"ms-thumbnail-dropzone",activeClassName:"ms-thumbnail-dropzone-active",rejectClassName:"ms-thumbnail-dropzone-reject"}:A,I=t.onUpdate,D=void 0===I?function(){}:I,N=t.onError,k=void 0===N?function(){}:N,L=t.onRemove,B=t.toolbarButtons,x=(0,r.useRef)(),Z=(n=(0,r.useState)(),i=2,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,a=[],u=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(n,i)||p(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),U=Z[0],M=Z[1];if((0,r.useEffect)((function(){return x.current=!0,function(){x.current=!1}}),[]),v||U)return o().createElement("div",{className:"dropzone-thumbnail-container".concat(d?" ".concat(d):""," ms-loading")},o().createElement(a.Z,{size:70}));var z=o().createElement(l.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:B||[{glyph:g,visible:!(!L||!E),tooltipId:T,onClick:function(t){var e;null==t||null===(e=t.stopPropagation)||void 0===e||e.call(t),null==L||L()}}]});return o().createElement("div",{className:"dropzone-thumbnail-container".concat(d?" ".concat(d):""),style:C},y,o().createElement(c(),s({},Y,{multiple:!1,onDrop:function(t){var e,n=null==t||null===(e=t[0])||void 0===e?void 0:e.type,r=-1!==P.indexOf(n);M(!0),function(t,e){return new Promise((function(n){var r=t;if(null!=r&&r[0]){var o=r[0],i=new FileReader;return i.onload=function(t){return n(e?(0,u.Xq)(t.target.result,e).then((function(t){return{data:t,size:t.length}})):{data:t.target.result,size:o.size})},i.readAsDataURL(o)}return n({data:null})}))}(t,_).then((function(e){var n=e.data,o=e.size;return x.current?(M(!1),r&&n&&o<G?D(n,t):k([].concat(f(r?[]:["FORMAT"]),f(n&&o>=G?["SIZE"]:[])),t)):null})).catch((function(t){return x.current?(M(!1),k(t)):null}))}}),E?o().createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},o().createElement("div",{ref:e,style:{position:"relative",width:"100%",height:"100%",backgroundImage:"url(".concat(E,")"),backgroundSize:null!=_&&_.contain?"contain":"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),o().createElement("div",{className:"dropzone-content-image-added"},O),z):o().createElement("div",{className:"dropzone-content-image"},O,z,b&&o().createElement("div",{className:"dropzone-errors"},b))))}))},993451:(t,e,n)=>{"use strict";n.d(e,{Z:()=>S});var r=n(86638),o=n(675263),i=n.n(o),c=n(984596),a=n.n(c),u=n(701469),l=n.n(u),s=n(414293),f=n.n(s),p=n(747037),m=n.n(p),d=n(867076),y=["messages"];function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function E(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(l()(e))return e.map((function(o){var i=(0,r.S$)(t,o[n]||m()(o)&&o||"");return b(b({},o),{},E({},n,f()(i)?e:i))}));var o=(0,r.S$)(t,e);return f()(o)?e:o},g=function(t,e,n){return function(){var r=arguments.length>1?arguments[1]:void 0;return b(b({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},E({},r,t[r]&&h(e,t[r],n)))}};const S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,d.compose)((0,d.getContext)({messages:i().object}),(0,d.mapProps)((function(n){var r=n.messages,o=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(n,y);return b(b({},o),a()(t).reduce(g(o,r,e),{}))})))}},312122:(t,e,n)=>{"use strict";n.d(e,{Z:()=>m});var r=n(124852),o=n.n(r),i=n(501262),c=n(399534),a=n(805346),u=n(867076),l=["confirming","confirmYes","confirmNo","confirmTitle","confirmContent","confirmModal","draggable","onConfirm","setConfirming"];function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f=(0,u.compose)((0,u.withProps)((function(t){var e=t.setConfirming;return{onClose:function(t){null!=t&&t.stopPropagation&&t.stopPropagation(),e(!1)}}})))((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.confirmYes,n=void 0===e?o().createElement(a.Z,{msgId:"yes"}):e,r=t.confirmNo,u=void 0===r?o().createElement(a.Z,{msgId:"no"}):r,l=t.confirmTitle,s=void 0===l?o().createElement(a.Z,{msgId:"confirm"}):l,f=t.confirmContent,p=t.confirmButtonBSStyle,m=void 0===p?"primary":p,d=t.show,y=void 0!==d&&d,v=t.confirmModal,O=void 0===v||v,b=t.draggable,E=void 0!==b&&b,h=t.onClose,g=void 0===h?function(){}:h,S=t.onConfirm,T=void 0===S?function(){}:S;return y?o().createElement(c.Z,null,o().createElement("div",{className:"with-confirm-modal"},o().createElement(i.Z,{draggable:E,show:y,modal:O,onClose:g,onConfirm:T,title:s,confirmButtonContent:n,closeText:u,confirmButtonBSStyle:m,closeGlyph:"1-close"},f))):null})),p=function(t){return function(e){var n=e.confirming,r=e.confirmYes,i=e.confirmNo,c=e.confirmTitle,a=e.confirmContent,u=e.confirmModal,s=e.draggable,p=e.onConfirm,m=e.setConfirming,d=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(e,l);return o().createElement(o().Fragment,null,o().createElement(f,{show:n,setConfirming:m,confirmYes:r,confirmNo:i,confirmTitle:c,confirmContent:a,confirmModal:u,draggable:s,onConfirm:p}),o().createElement(t,d))}};const m=function(t){return(0,u.compose)((0,u.withState)("confirming","setConfirming",!1),(0,u.withHandlers)({onClick:function(t){var e=t.setConfirming,n=void 0===e?function(){}:e,r=t.onClick,o=void 0===r?function(){}:r,i=t.confirmPredicate,c=void 0===i||i;return function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var i,a,u=(i=e||[],a=1,function(t){if(Array.isArray(t))return t}(i)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,a=[],u=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(i,a)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(i,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];null!=u&&u.stopPropagation&&u.stopPropagation(),c?n(!0):o.apply(void 0,e)}},onConfirm:function(t){var e=t.onClick,n=void 0===e?function(){}:e,r=t.setConfirming,o=void 0===r?function(){}:r;return function(){o(!1),n.apply(void 0,arguments)}}}),p)(t)}},324684:(t,e,n)=>{"use strict";n.d(e,{F:()=>i,y:()=>c});var r=n(227361),o=n.n(r),i=function(t){return o()(t,"router.location.pathname")||"/"},c=function(t){return o()(t,"router.location.search")||""}},483139:(t,e,n)=>{"use strict";n.d(e,{Xq:()=>r,v9:()=>i});var r=function(t,e){return new Promise((function(n,r){var o=e||{},i=o.width,c=void 0===i?64:i,a=o.height,u=void 0===a?64:a,l=o.contain,s=o.type,f=void 0===s?"image/jpeg":s,p=o.quality,m=void 0===p?.5:p,d=new Image;d.crossOrigin="anonymous",d.onload=function(){var t=d.naturalWidth/d.naturalHeight,e=c,r=u,o=c/u,i=document.createElement("canvas");i.setAttribute("width",c),i.setAttribute("height",u),i.style.width=c+"px",i.style.height=u+"px";var a=i.getContext("2d"),s=!l&&t<o||l&&t>o?[e,e/t]:[r*t,r];a.save(),a.translate(e/2,r/2),a.drawImage(d,-s[0]/2,-s[1]/2,s[0],s[1]),a.restore();var p=i.toDataURL(f,m);n(p)},d.onerror=function(t){r(t)},d.src=t}))},o=function(t,e){return new Promise((function(n,r){var o=e||{},i=o.type,c=void 0===i?"image/jpeg":i,a=o.quality,u=void 0===a?.5:a,l=document.createElement("video");l.crossOrigin="anonymous";var s=document.createElement("source"),f=document.createElement("canvas");l.addEventListener("loadedmetadata",(function(){var t=l.videoWidth,e=l.videoHeight;f.setAttribute("width",t),f.setAttribute("height",e),f.style.width=t+"px",f.style.height=e+"px"}),!0),l.addEventListener("loadeddata",(function(){l.currentTime=1}),!0),l.addEventListener("seeked",(function(){f.getContext("2d").drawImage(l,0,0);try{var t=f.toDataURL(c,u);n(t)}catch(t){r(t)}}),!0),l.addEventListener("error",(function(t){r(t)}),!0),l.appendChild(s),l.setAttribute("src",t)}))},i=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,i=null===(t=e.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/))||void 0===t?void 0:t[1];return i?new Promise((function(t){return t("http://img.youtube.com/vi/".concat(i,"/sddefault.jpg"))})):e.match(/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i)?o(e).then((function(t){return r(t,n)})):new Promise((function(t,e){return e("Cannot create a thumbnail from the provided source")}))}}}]);