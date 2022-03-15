(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1704],{6908:(t,i,e)=>{"use strict";e.d(i,{Z:()=>n});const n={ANIMATING:0,INTERACTING:1}},43033:(t,i,e)=>{"use strict";e.d(i,{Z:()=>_});var n=e(9520),o=e(36403),r=e(64011),a=e(38024),s=e(80967),h=e(40353),l=function(t){function i(i){t.call(this),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.className="ol-box "+i,this.map_=null,this.startPixel_=null,this.endPixel_=null}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.disposeInternal=function(){this.setMap(null)},i.prototype.render_=function(){var t=this.startPixel_,i=this.endPixel_,e="px",n=this.element_.style;n.left=Math.min(t[0],i[0])+e,n.top=Math.min(t[1],i[1])+e,n.width=Math.abs(i[0]-t[0])+e,n.height=Math.abs(i[1]-t[1])+e},i.prototype.setMap=function(t){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);var i=this.element_.style;i.left=i.top=i.width=i.height="inherit"}this.map_=t,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)},i.prototype.setPixels=function(t,i){this.startPixel_=t,this.endPixel_=i,this.createOrUpdateGeometry(),this.render_()},i.prototype.createOrUpdateGeometry=function(){var t=this.startPixel_,i=this.endPixel_,e=[t,[t[0],i[1]],i,[i[0],t[1]]].map(this.map_.getCoordinateFromPixel,this.map_);e[4]=e[0].slice(),this.geometry_?this.geometry_.setCoordinates([e]):this.geometry_=new h.ZP([e])},i.prototype.getGeometry=function(){return this.geometry_},i}(s.Z);const c=l;var d=function(t){function i(i,e,n){t.call(this,i),this.coordinate=e,this.mapBrowserEvent=n}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i}(n.ZP);const _=function(t){function i(i){t.call(this);var e=i||{};this.box_=new c(e.className||"ol-dragbox"),this.minArea_=void 0!==e.minArea?e.minArea:64,this.onBoxEnd_=e.onBoxEnd?e.onBoxEnd:r.Zn,this.startPixel_=null,this.condition_=e.condition?e.condition:o.Bx,this.boxEndCondition_=e.boxEndCondition?e.boxEndCondition:this.defaultBoxEndCondition}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.defaultBoxEndCondition=function(t,i,e){var n=e[0]-i[0],o=e[1]-i[1];return n*n+o*o>=this.minArea_},i.prototype.getGeometry=function(){return this.box_.getGeometry()},i.prototype.handleDragEvent=function(t){(0,o.QL)(t)&&(this.box_.setPixels(this.startPixel_,t.pixel),this.dispatchEvent(new d("boxdrag",t.coordinate,t)))},i.prototype.handleUpEvent=function(t){return!(0,o.QL)(t)||(this.box_.setMap(null),this.boxEndCondition_(t,this.startPixel_,t.pixel)&&(this.onBoxEnd_(t),this.dispatchEvent(new d("boxend",t.coordinate,t))),!1)},i.prototype.handleDownEvent=function(t){return!(!(0,o.QL)(t)||!(0,o.v8)(t)||!this.condition_(t)||(this.startPixel_=t.pixel,this.box_.setMap(t.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new d("boxstart",t.coordinate,t)),0))},i}(a.Z)},73800:(t,i,e)=>{"use strict";e.d(i,{Z:()=>l});var n=e(6908),o=e(90728),r=e(86320),a=e(36403),s=e(64011),h=e(38024);const l=function(t){function i(i){t.call(this,{stopDown:s.Dv});var e=i||{};this.kinetic_=e.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1,this.condition_=e.condition?e.condition:a.rM,this.noKinetic_=!1}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.handleDragEvent=function(t){this.panning_||(this.panning_=!0,this.getMap().getView().setHint(n.Z.INTERACTING,1));var i=this.targetPointers,e=(0,h.S)(i);if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(e[0],e[1]),this.lastCentroid){var r=this.lastCentroid[0]-e[0],a=e[1]-this.lastCentroid[1],s=t.map.getView(),l=[r,a];(0,o.bA)(l,s.getResolution()),(0,o.U1)(l,s.getRotation()),(0,o.IH)(l,s.getCenter()),l=s.constrainCenter(l),s.setCenter(l)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=e,this.lastPointersCount_=i.length},i.prototype.handleUpEvent=function(t){var i=t.map,e=i.getView();if(0===this.targetPointers.length){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){var o=this.kinetic_.getDistance(),a=this.kinetic_.getAngle(),s=e.getCenter(),h=i.getPixelFromCoordinate(s),l=i.getCoordinateFromPixel([h[0]-o*Math.cos(a),h[1]-o*Math.sin(a)]);e.animate({center:e.constrainCenter(l),duration:500,easing:r.Vv})}return this.panning_&&(this.panning_=!1,e.setHint(n.Z.INTERACTING,-1)),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0},i.prototype.handleDownEvent=function(t){if(this.targetPointers.length>0&&this.condition_(t)){var i=t.map.getView();return this.lastCentroid=null,i.getAnimating()&&i.setCenter(t.frameState.viewState.center),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1},i}(h.Z)},97950:(t,i,e)=>{"use strict";e.d(i,{Z:()=>h});var n=e(38642),o=e(6908),r=e(36403),a=e(64011),s=e(47588);const h=function(t){function i(i){var e=i||{};t.call(this,{stopDown:a.Dv}),this.condition_=e.condition?e.condition:r.aj,this.lastAngle_=void 0,this.duration_=void 0!==e.duration?e.duration:250}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.handleDragEvent=function(t){if((0,r.QL)(t)){var i=t.map,e=i.getView();if(e.getConstraints().rotation!==n.h$){var o=i.getSize(),a=t.pixel,h=Math.atan2(o[1]/2-a[1],a[0]-o[0]/2);if(void 0!==this.lastAngle_){var l=h-this.lastAngle_,c=e.getRotation();(0,s.dl)(e,c-l)}this.lastAngle_=h}}},i.prototype.handleUpEvent=function(t){if(!(0,r.QL)(t))return!0;var i=t.map.getView();i.setHint(o.Z.INTERACTING,-1);var e=i.getRotation();return(0,s.U1)(i,e,void 0,this.duration_),!1},i.prototype.handleDownEvent=function(t){return!(!(0,r.QL)(t)||!(0,r.v8)(t)||!this.condition_(t)||(t.map.getView().setHint(o.Z.INTERACTING,1),this.lastAngle_=void 0,0))},i}(e(38024).Z)},78516:(t,i,e)=>{"use strict";e.d(i,{Z:()=>s});var n=e(86320),o=e(36403),r=e(21915);function a(){var t=this.getMap(),i=t.getView(),e=t.getSize(),o=this.getGeometry().getExtent();if(this.out_){var a=i.calculateExtent(e),s=(0,r.ZT)([t.getPixelFromCoordinate((0,r.hC)(o)),t.getPixelFromCoordinate((0,r.Xv)(o))]),h=i.getResolutionForExtent(s,e);(0,r.H9)(a,1/h),o=a}var l=i.constrainResolution(i.getResolutionForExtent(o,e)),c=(0,r.qg)(o);c=i.constrainCenter(c),i.animate({resolution:l,center:c,duration:this.duration_,easing:n.Vv})}const s=function(t){function i(i){var e=i||{},n=e.condition?e.condition:o.vY;t.call(this,{condition:n,className:e.className||"ol-dragzoom",onBoxEnd:a}),this.duration_=void 0!==e.duration?e.duration:200,this.out_=void 0!==e.out&&e.out}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i}(e(43033).Z)},45801:(t,i,e)=>{"use strict";e.d(i,{Z:()=>l});var n=e(90728),o=e(73381);var r=e(36403),a=e(47588),s=function(t){function i(i){t.call(this,{handleEvent:h});var e=i||{};this.defaultCondition_=function(t){return(0,r.rM)(t)&&(0,r.TN)(t)},this.condition_=void 0!==e.condition?e.condition:this.defaultCondition_,this.duration_=void 0!==e.duration?e.duration:100,this.pixelDelta_=void 0!==e.pixelDelta?e.pixelDelta:128}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i}(a.ZP);function h(t){var i=!1;if(t.type==o.Z.KEYDOWN){var e=t.originalEvent.keyCode;if(this.condition_(t)&&(40==e||37==e||39==e||38==e)){var r=t.map.getView(),s=r.getResolution()*this.pixelDelta_,h=0,l=0;40==e?l=-s:37==e?h=-s:39==e?h=s:l=s;var c=[h,l];(0,n.U1)(c,r.getRotation()),(0,a.Cv)(r,c,this.duration_),t.preventDefault(),i=!0}}return!i}const l=s},52:(t,i,e)=>{"use strict";e.d(i,{Z:()=>s});var n=e(73381),o=e(36403),r=e(47588);function a(t){var i=!1;if(t.type==n.Z.KEYDOWN||t.type==n.Z.KEYPRESS){var e=t.originalEvent.charCode;if(this.condition_(t)&&(e=="+".charCodeAt(0)||e=="-".charCodeAt(0))){var o=t.map,a=e=="+".charCodeAt(0)?this.delta_:-this.delta_,s=o.getView();(0,r.FW)(s,a,void 0,this.duration_),t.preventDefault(),i=!0}}return!i}const s=function(t){function i(i){t.call(this,{handleEvent:a});var e=i||{};this.condition_=e.condition?e.condition:o.TN,this.delta_=e.delta?e.delta:1,this.duration_=void 0!==e.duration?e.duration:100}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i}(r.ZP)},86306:(t,i,e)=>{"use strict";e.d(i,{Z:()=>d});var n=e(6908),o=e(36403),r=e(86320),a=e(73381),s=e(91358),h=e(47588),l=e(21882),c="trackpad";const d=function(t){function i(i){var e=i||{};t.call(this,e),this.delta_=0,this.duration_=void 0!==e.duration?e.duration:250,this.timeout_=void 0!==e.timeout?e.timeout:80,this.useAnchor_=void 0===e.useAnchor||e.useAnchor,this.constrainResolution_=e.constrainResolution||!1,this.condition_=e.condition?e.condition:o.Bx,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.trackpadDeltaPerZoom_=300,this.trackpadZoomBuffer_=1.5}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.decrementInteractingHint_=function(){this.trackpadTimeoutId_=void 0,this.getMap().getView().setHint(n.Z.INTERACTING,-1)},i.prototype.handleEvent=function(t){if(!this.condition_(t))return!0;var i=t.type;if(i!==a.Z.WHEEL&&i!==a.Z.MOUSEWHEEL)return!0;t.preventDefault();var e,o=t.map,h=t.originalEvent;if(this.useAnchor_&&(this.lastAnchor_=t.coordinate),t.type==a.Z.WHEEL?(e=h.deltaY,s.V&&h.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(e/=s.MP),h.deltaMode===WheelEvent.DOM_DELTA_LINE&&(e*=40)):t.type==a.Z.MOUSEWHEEL&&(e=-h.wheelDeltaY,s.vw&&(e/=3)),0===e)return!1;var l=Date.now();if(void 0===this.startTime_&&(this.startTime_=l),(!this.mode_||l-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(e)<4?c:"wheel"),this.mode_===c){var d=o.getView();this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):d.setHint(n.Z.INTERACTING,1),this.trackpadTimeoutId_=setTimeout(this.decrementInteractingHint_.bind(this),this.trackpadEventGap_);var _=d.getResolution()*Math.pow(2,e/this.trackpadDeltaPerZoom_),u=d.getMinResolution(),p=d.getMaxResolution(),v=0;if(_<u?(_=Math.max(_,u/this.trackpadZoomBuffer_),v=1):_>p&&(_=Math.min(_,p*this.trackpadZoomBuffer_),v=-1),this.lastAnchor_){var g=d.calculateCenterZoom(_,this.lastAnchor_);d.setCenter(d.constrainCenter(g))}return d.setResolution(_),0===v&&this.constrainResolution_&&d.animate({resolution:d.constrainResolution(_,e>0?-1:1),easing:r.Vv,anchor:this.lastAnchor_,duration:this.duration_}),v>0?d.animate({resolution:u,easing:r.Vv,anchor:this.lastAnchor_,duration:500}):v<0&&d.animate({resolution:p,easing:r.Vv,anchor:this.lastAnchor_,duration:500}),this.startTime_=l,!1}this.delta_+=e;var m=Math.max(this.timeout_-(l-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,o),m),!1},i.prototype.handleWheelZoom_=function(t){var i=t.getView();i.getAnimating()&&i.cancelAnimations();var e=(0,l.uZ)(this.delta_,-1,1);(0,h.FW)(i,-e,this.lastAnchor_,this.duration_),this.mode_=void 0,this.delta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0},i.prototype.setMouseAnchor=function(t){this.useAnchor_=t,t||(this.lastAnchor_=null)},i}(h.ZP)},78653:(t,i,e)=>{"use strict";e.d(i,{Z:()=>h});var n=e(6908),o=e(64011),r=e(47588),a=e(38024),s=e(38642);const h=function(t){function i(i){var e=i||{},n=e;n.stopDown||(n.stopDown=o.Dv),t.call(this,n),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=void 0!==e.threshold?e.threshold:.3,this.duration_=void 0!==e.duration?e.duration:250}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.handleDragEvent=function(t){var i=0,e=this.targetPointers[0],n=this.targetPointers[1],o=Math.atan2(n.clientY-e.clientY,n.clientX-e.clientX);if(void 0!==this.lastAngle_){var h=o-this.lastAngle_;this.rotationDelta_+=h,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),i=h}this.lastAngle_=o;var l=t.map,c=l.getView();if(c.getConstraints().rotation!==s.h$){var d=l.getViewport().getBoundingClientRect(),_=(0,a.S)(this.targetPointers);if(_[0]-=d.left,_[1]-=d.top,this.anchor_=l.getCoordinateFromPixel(_),this.rotating_){var u=c.getRotation();l.render(),(0,r.dl)(c,u+i,this.anchor_)}}},i.prototype.handleUpEvent=function(t){if(this.targetPointers.length<2){var i=t.map.getView();if(i.setHint(n.Z.INTERACTING,-1),this.rotating_){var e=i.getRotation();(0,r.U1)(i,e,this.anchor_,this.duration_)}return!1}return!0},i.prototype.handleDownEvent=function(t){if(this.targetPointers.length>=2){var i=t.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||i.getView().setHint(n.Z.INTERACTING,1),!0}return!1},i}(a.Z)},48041:(t,i,e)=>{"use strict";e.d(i,{Z:()=>s});var n=e(6908),o=e(64011),r=e(47588),a=e(38024);const s=function(t){function i(i){var e=i||{},n=e;n.stopDown||(n.stopDown=o.Dv),t.call(this,n),this.constrainResolution_=e.constrainResolution||!1,this.anchor_=null,this.duration_=void 0!==e.duration?e.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.handleDragEvent=function(t){var i=1,e=this.targetPointers[0],n=this.targetPointers[1],o=e.clientX-n.clientX,s=e.clientY-n.clientY,h=Math.sqrt(o*o+s*s);void 0!==this.lastDistance_&&(i=this.lastDistance_/h),this.lastDistance_=h;var l=t.map,c=l.getView(),d=c.getResolution(),_=c.getMaxResolution(),u=c.getMinResolution(),p=d*i;p>_?(i=_/d,p=_):p<u&&(i=u/d,p=u),1!=i&&(this.lastScaleDelta_=i);var v=l.getViewport().getBoundingClientRect(),g=(0,a.S)(this.targetPointers);g[0]-=v.left,g[1]-=v.top,this.anchor_=l.getCoordinateFromPixel(g),l.render(),(0,r.DQ)(c,p,this.anchor_)},i.prototype.handleUpEvent=function(t){if(this.targetPointers.length<2){var i=t.map.getView();i.setHint(n.Z.INTERACTING,-1);var e=i.getResolution();if(this.constrainResolution_||e<i.getMinResolution()||e>i.getMaxResolution()){var o=this.lastScaleDelta_-1;(0,r.sP)(i,e,this.anchor_,this.duration_,o)}return!1}return!0},i.prototype.handleDownEvent=function(t){if(this.targetPointers.length>=2){var i=t.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||i.getView().setHint(n.Z.INTERACTING,1),!0}return!1},i}(a.Z)},38642:(t,i,e)=>{"use strict";e.d(i,{h$:()=>o,YP:()=>r,gE:()=>a,Gw:()=>s});var n=e(21882);function o(t,i){return void 0!==t?0:void 0}function r(t,i){return void 0!==t?t+i:void 0}function a(t){var i=2*Math.PI/t;return function(t,e){return void 0!==t?t=Math.floor((t+e)/i+.5)*i:void 0}}function s(t){var i=t||(0,n.Yr)(5);return function(t,e){return void 0!==t?Math.abs(t+e)<=i?0:t+e:void 0}}}}]);