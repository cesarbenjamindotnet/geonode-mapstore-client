(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[14147],{14147:(e,n,t)=>{"use strict";t.d(n,{Z:()=>U});var r=t(124852),o=t.n(r),i=t(180307),u=t(961845);const a=function(e){var n=[],t=null,r=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];n=o,t||(t=requestAnimationFrame((function(){t=null,e.apply(void 0,n)})))};return r.cancel=function(){t&&(cancelAnimationFrame(t),t=null)},r};var c=t(675263);const l=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)};var f=t(553249);const s=function(){return f.Z.Date.now()};var p=/\s/;var d=/^\s+/;const h=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&p.test(e.charAt(n)););return n}(e)+1).replace(d,""):e};var y=t(859197),v=t(623195);var b=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,g=/^0o[0-7]+$/i,O=parseInt;const w=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||(0,v.Z)(e)&&"[object Symbol]"==(0,y.Z)(e)}(e))return NaN;if(l(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=l(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=h(e);var t=m.test(e);return t||g.test(e)?O(e.slice(2),t?2:8):b.test(e)?NaN:+e};var E=Math.max,T=Math.min;const _=function(e,n,t){var r,o,i,u,a,c,f=0,p=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(n){var t=r,i=o;return r=o=void 0,f=n,u=e.apply(i,t)}function v(e){var t=e-c;return void 0===c||t>=n||t<0||d&&e-f>=i}function b(){var e=s();if(v(e))return m(e);a=setTimeout(b,function(e){var t=n-(e-c);return d?T(t,i-(e-f)):t}(e))}function m(e){return a=void 0,h&&r?y(e):(r=o=void 0,u)}function g(){var e=s(),t=v(e);if(r=arguments,o=this,c=e,t){if(void 0===a)return function(e){return f=e,a=setTimeout(b,n),p?y(e):u}(c);if(d)return clearTimeout(a),a=setTimeout(b,n),y(c)}return void 0===a&&(a=setTimeout(b,n)),u}return n=w(n)||0,l(t)&&(p=!!t.leading,i=(d="maxWait"in t)?E(w(t.maxWait)||0,n):i,h="trailing"in t?!!t.trailing:h),g.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=c=o=a=void 0},g.flush=function(){return void 0===a?u:m(s())},g};var S={debounce:_,throttle:function(e,n,t){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return l(t)&&(r="leading"in t?!!t.leading:r,o="trailing"in t?!!t.trailing:o),_(e,n,{leading:r,maxWait:n,trailing:o})}},j=function(e){return S[e]},k=function(e){return"function"==typeof e},z=function(){return"undefined"==typeof window},P=function(e){return e instanceof Element||e instanceof HTMLDocument};function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function H(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function C(e,n){return C=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},C(e,n)}const x=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){return!n||"object"!==R(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}(this,M(n).apply(this,arguments))}var t,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&C(e,n)}(n,e),t=n,(r=[{key:"render",value:function(){return this.props.children}}])&&H(t.prototype,r),n}(r.PureComponent);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,n){return N=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},N(e,n)}function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var F=function(e){function n(e){var t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=function(e,n){return!n||"object"!==A(n)&&"function"!=typeof n?q(e):n}(this,W(n).call(this,e)),Z(q(t),"cancelHandler",(function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)})),Z(q(t),"rafClean",(function(){t.raf&&t.raf.cancel&&(t.raf.cancel(),t.raf=null)})),Z(q(t),"toggleObserver",(function(e){var n=t.getElement();n&&t.resizeObserver[e]&&t.resizeObserver[e](n)})),Z(q(t),"getElement",(function(){var e=t.props,n=e.querySelector,r=e.targetDomEl;if(!z()){if(n)return document.querySelector(n);if(r&&P(r))return r;var o=t.element&&(0,i.findDOMNode)(t.element);if(o)return o.parentElement}})),Z(q(t),"createUpdater",(function(){return t.rafClean(),t.raf=a((function(e){var n=e.width,r=e.height,o=t.props.onResize;k(o)&&o(n,r),t.setState({width:n,height:r})})),t.raf})),Z(q(t),"createResizeHandler",(function(e){var n=t.state,r=n.width,o=n.height,i=t.props,u=i.handleWidth,a=i.handleHeight;if(u||a){var c=t.createUpdater();e.forEach((function(e){var n=e&&e.contentRect||{},i=n.width,l=n.height,f=u&&r!==i||a&&o!==l;!t.skipOnMount&&f&&!z()&&c({width:i,height:l}),t.skipOnMount=!1}))}})),Z(q(t),"onRef",(function(e){t.element=e})),Z(q(t),"getRenderType",(function(){var e=t.props,n=e.render,o=e.children;return k(n)?"renderProp":k(o)?"childFunction":(0,r.isValidElement)(o)?"child":Array.isArray(o)?"childArray":"parent"})),Z(q(t),"getTargetComponent",(function(){var e=t.props,n=e.render,o=e.children,i=e.nodeType,u=t.state,a={width:u.width,height:u.height};switch(t.getRenderType()){case"renderProp":return(0,r.cloneElement)(n(a),{key:"resize-detector"});case"childFunction":return(0,r.cloneElement)(o(a));case"child":return(0,r.cloneElement)(o,a);case"childArray":return o.map((function(e){return!!e&&(0,r.cloneElement)(e,a)}));default:return(0,r.createElement)(i)}}));var o=e.skipOnMount,c=e.refreshMode,l=e.refreshRate,f=e.refreshOptions;t.state={width:void 0,height:void 0},t.skipOnMount=o,t.raf=null,t.element=null,t.unmounted=!1;var s=j(c);return t.resizeHandler=s?s(t.createResizeHandler,l,f):t.createResizeHandler,t.resizeObserver=new u.Z(t.resizeHandler),t}var t,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&N(e,n)}(n,e),t=n,(c=[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return o().createElement(x,{ref:this.onRef},this.getTargetComponent())}}])&&D(t.prototype,c),n}(r.PureComponent);F.propTypes={handleWidth:c.bool,handleHeight:c.bool,skipOnMount:c.bool,refreshRate:c.number,refreshMode:c.string,refreshOptions:(0,c.shape)({leading:c.bool,trailing:c.bool}),querySelector:c.string,targetDomEl:c.any,onResize:c.func,render:c.func,children:c.any,nodeType:c.node},F.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};const U=F}}]);