(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6920],{91133:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(23645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,'.msgapi .ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid blue;\n}\n\n.msgapi .ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.msgapi .ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.msgapi .ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n}\n.msgapi .ol-overlay-container {\n  will-change: left,right,top,bottom;\n}\n\n.msgapi .ol-unsupported {\n  display: none;\n}\n.msgapi .ol-viewport, .msgapi .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.msgapi .ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.msgapi .ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.msgapi .ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.msgapi .ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.msgapi .ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.msgapi .ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.msgapi .ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.msgapi .ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.msgapi .ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.msgapi .ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n@media print {\n  .msgapi .ol-control {\n    display: none;\n  }\n}\n\n.msgapi .ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.msgapi .ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.msgapi .ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.msgapi .ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.msgapi .ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.msgapi .ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.msgapi .ol-control button:hover,\n.msgapi .ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.msgapi .ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.msgapi .ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n\n.msgapi .ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.msgapi .ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  font-size: .7rem;\n  line-height: 1.375em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n.msgapi .ol-attribution li {\n  display: inline;\n  list-style: none;\n  line-height: inherit;\n}\n.msgapi .ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n.msgapi .ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.msgapi .ol-attribution ul, .msgapi .ol-attribution button {\n  display: inline-block;\n}\n.msgapi .ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.msgapi .ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.msgapi .ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n  height: 1.1em;\n  line-height: 1em;\n}\n.msgapi .ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.msgapi .ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.msgapi .ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.msgapi .ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.msgapi .ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.msgapi .ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.msgapi .ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.msgapi .ol-overviewmap .ol-overviewmap-map,\n.msgapi .ol-overviewmap button {\n  display: inline-block;\n}\n.msgapi .ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.msgapi .ol-overviewmap:not(.ol-collapsed) button{\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n.msgapi .ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.msgapi .ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.msgapi .ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.msgapi .ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.msgapi .ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const a=o},89179:(e,t,n)=>{var i=n(55639),o=n(40554),a=n(14841),l=n(79833),s=i.isFinite,r=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=a(e),(n=null==n?0:r(o(n),292))&&s(e)){var i=(l(e)+"e").split("e"),p=t(i[0]+"e"+(+i[1]+n));return+((i=(l(p)+"e").split("e"))[0]+"e"+(+i[1]-n))}return t(e)}}},43624:(e,t,n)=>{var i=n(14259),o=n(40554);e.exports=function(e,t,n){var a=null==e?0:e.length;return a?(t=n||void 0===t?1:o(t),i(e,0,(t=a-t)<0?0:t)):[]}},97398:(e,t,n)=>{var i=n(55639).isFinite;e.exports=function(e){return"number"==typeof e&&i(e)}},59854:(e,t,n)=>{var i=n(89179)("round");e.exports=i},23493:(e,t,n)=>{var i=n(23279),o=n(13218);e.exports=function(e,t,n){var a=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(a="leading"in n?!!n.leading:a,l="trailing"in n?!!n.trailing:l),i(e,t,{leading:a,maxWait:t,trailing:l})}},3728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var i=n(78426),o=n(78471),a=n(40188),l=n(39850),s=n(58493),r=n(13910),p=n(93409),d=n(12868),h=n(86340),m=n(19530),c=n(90728),g=n(67644),u=n(85386),b=n(13002),v=n(73381),_=n(21915);function f(e){this.validateExtent_(),this.updateBox_()}const x=function(e){function t(t){var n=t||{};e.call(this,{element:document.createElement("div"),render:n.render||f,target:n.target}),this.collapsed_=void 0===n.collapsed||n.collapsed,this.collapsible_=void 0===n.collapsible||n.collapsible,this.collapsible_||(this.collapsed_=!1);var a=void 0!==n.className?n.className:"ol-overviewmap",l=void 0!==n.tipLabel?n.tipLabel:"Overview map",s=void 0!==n.collapseLabel?n.collapseLabel:"«";"string"==typeof s?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s):this.collapseLabel_=s;var r=void 0!==n.label?n.label:"»";"string"==typeof r?(this.label_=document.createElement("span"),this.label_.textContent=r):this.label_=r;var h=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_,m=document.createElement("button");m.setAttribute("type","button"),m.title=l,m.appendChild(h),(0,b.oL)(m,v.Z.CLICK,this.handleClick_,this),this.ovmapDiv_=document.createElement("div"),this.ovmapDiv_.className="ol-overviewmap-map",this.ovmap_=new o.default({controls:new i.Z,interactions:new i.Z,view:n.view});var c=this.ovmap_;n.layers&&n.layers.forEach(function(e){c.addLayer(e)}.bind(this));var u=document.createElement("div");u.className="ol-overviewmap-box",u.style.boxSizing="border-box",this.boxOverlay_=new p.Z({position:[0,0],positioning:d.Z.BOTTOM_LEFT,element:u}),this.ovmap_.addOverlay(this.boxOverlay_);var _=a+" "+g.XV+" "+g.hg+(this.collapsed_&&this.collapsible_?" "+g.hN:"")+(this.collapsible_?"":" ol-uncollapsible"),x=this.element;x.className=_,x.appendChild(this.ovmapDiv_),x.appendChild(m);var w=this,y=this.boxOverlay_,E=this.boxOverlay_.getElement(),M=function(e){var t,n={clientX:(t=e).clientX-E.offsetWidth/2,clientY:t.clientY+E.offsetHeight/2},i=c.getEventCoordinate(n);y.setPosition(i)},C=function(e){var t=c.getEventCoordinate(e);w.getMap().getView().setCenter(t),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",C)};E.addEventListener("mousedown",(function(){window.addEventListener("mousemove",M),window.addEventListener("mouseup",C)}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setMap=function(t){var n=this.getMap();if(t!==n){if(n){var i=n.getView();i&&this.unbindView_(i),this.ovmap_.setTarget(null)}if(e.prototype.setMap.call(this,t),t){this.ovmap_.setTarget(this.ovmapDiv_),this.listenerKeys.push((0,b.oL)(t,r.Z.PROPERTYCHANGE,this.handleMapPropertyChange_,this)),0===this.ovmap_.getLayers().getLength()&&this.ovmap_.setLayerGroup(t.getLayerGroup());var o=t.getView();o&&(this.bindView_(o),o.isDef()&&(this.ovmap_.updateSize(),this.resetExtent_()))}}},t.prototype.handleMapPropertyChange_=function(e){if(e.key===l.Z.VIEW){var t=e.oldValue;t&&this.unbindView_(t);var n=this.getMap().getView();this.bindView_(n)}},t.prototype.bindView_=function(e){(0,b.oL)(e,(0,s.v_)(h.Z.ROTATION),this.handleRotationChanged_,this)},t.prototype.unbindView_=function(e){(0,b.Ev)(e,(0,s.v_)(h.Z.ROTATION),this.handleRotationChanged_,this)},t.prototype.handleRotationChanged_=function(){this.ovmap_.getView().setRotation(this.getMap().getView().getRotation())},t.prototype.validateExtent_=function(){var e=this.getMap(),t=this.ovmap_;if(e.isRendered()&&t.isRendered()){var n=e.getSize(),i=e.getView().calculateExtent(n),o=t.getSize(),a=t.getView().calculateExtent(o),l=t.getPixelFromCoordinate((0,_.rL)(i)),s=t.getPixelFromCoordinate((0,_.w$)(i)),r=Math.abs(l[0]-s[0]),p=Math.abs(l[1]-s[1]),d=o[0],h=o[1];r<.1*d||p<.1*h||r>.75*d||p>.75*h?this.resetExtent_():(0,_.r4)(a,i)||this.recenter_()}},t.prototype.resetExtent_=function(){var e=this.getMap(),t=this.ovmap_,n=e.getSize(),i=e.getView().calculateExtent(n),o=t.getView(),a=Math.log(7.5)/Math.LN2,l=1/(.1*Math.pow(2,a/2));(0,_.H9)(i,l),o.fit(i)},t.prototype.recenter_=function(){var e=this.getMap(),t=this.ovmap_,n=e.getView();t.getView().setCenter(n.getCenter())},t.prototype.updateBox_=function(){var e=this.getMap(),t=this.ovmap_;if(e.isRendered()&&t.isRendered()){var n=e.getSize(),i=e.getView(),o=t.getView(),a=i.getRotation(),l=this.boxOverlay_,s=this.boxOverlay_.getElement(),r=i.calculateExtent(n),p=o.getResolution(),d=(0,_.hC)(r),h=(0,_.Xv)(r),m=this.calculateCoordinateRotate_(a,d);l.setPosition(m),s&&(s.style.width=Math.abs((d[0]-h[0])/p)+"px",s.style.height=Math.abs((h[1]-d[1])/p)+"px")}},t.prototype.calculateCoordinateRotate_=function(e,t){var n,i=this.getMap().getView().getCenter();return i&&(n=[t[0]-i[0],t[1]-i[1]],(0,c.U1)(n,e),(0,c.IH)(n,i)),n},t.prototype.handleClick_=function(e){e.preventDefault(),this.handleToggle_()},t.prototype.handleToggle_=function(){this.element.classList.toggle(g.hN),this.collapsed_?(0,u.$H)(this.collapseLabel_,this.label_):(0,u.$H)(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_;var e=this.ovmap_;this.collapsed_||e.isRendered()||(e.updateSize(),this.resetExtent_(),(0,b.Vx)(e,a.Z.POSTRENDER,(function(e){this.updateBox_()}),this))},t.prototype.getCollapsible=function(){return this.collapsible_},t.prototype.setCollapsible=function(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),!e&&this.collapsed_&&this.handleToggle_())},t.prototype.setCollapsed=function(e){this.collapsible_&&this.collapsed_!==e&&this.handleToggle_()},t.prototype.getCollapsed=function(){return this.collapsed_},t.prototype.getOverviewMap=function(){return this.ovmap_},t}(m.Z)},25303:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>u});var i=n(58493),o=n(38906),a=n(19530),l=n(67644),s=n(13002),r=n(18672),p=n(40868),d="units",h="degrees",m="metric",c=[1,2,5];function g(e){var t=e.frameState;this.viewState_=t?t.viewState:null,this.updateElement_()}const u=function(e){function t(t){var n=t||{},o=void 0!==n.className?n.className:"ol-scale-line";e.call(this,{element:document.createElement("div"),render:n.render||g,target:n.target}),this.innerElement_=document.createElement("div"),this.innerElement_.className=o+"-inner",this.element.className=o+" "+l.XV,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=void 0!==n.minWidth?n.minWidth:64,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",(0,s.oL)(this,(0,i.v_)(d),this.handleUnitsChanged_,this),this.setUnits(n.units||m)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getUnits=function(){return this.get(d)},t.prototype.handleUnitsChanged_=function(){this.updateElement_()},t.prototype.setUnits=function(e){this.set(d,e)},t.prototype.updateElement_=function(){var e=this.viewState_;if(e){var t=e.center,n=e.projection,i=this.getUnits(),a=i==h?p.default.DEGREES:p.default.METERS,l=(0,r._Q)(n,e.resolution,t,a);n.getUnits()!=p.default.DEGREES&&n.getMetersPerUnit()&&a==p.default.METERS&&(l*=n.getMetersPerUnit());var s=this.minWidth_*l,d="";if(i==h){var g=p.METERS_PER_UNIT[p.default.DEGREES];n.getUnits()==p.default.DEGREES?s*=g:l/=g,s<g/60?(d="″",l*=3600):s<g?(d="′",l*=60):d="°"}else"imperial"==i?s<.9144?(d="in",l/=.0254):s<1609.344?(d="ft",l/=.3048):(d="mi",l/=1609.344):"nautical"==i?(l/=1852,d="nm"):i==m?s<.001?(d="μm",l*=1e6):s<1?(d="mm",l*=1e3):s<1e3?d="m":(d="km",l/=1e3):"us"==i?s<.9144?(d="in",l*=39.37):s<1609.344?(d="ft",l/=.30480061):(d="mi",l/=1609.3472):(0,o.h)(!1,33);for(var u,b,v=3*Math.floor(Math.log(this.minWidth_*l)/Math.log(10));;){if(u=c[(v%3+3)%3]*Math.pow(10,Math.floor(v/3)),b=Math.round(u/l),isNaN(b))return this.element.style.display="none",void(this.renderedVisible_=!1);if(b>=this.minWidth_)break;++v}var _=u+" "+d;this.renderedHTML_!=_&&(this.innerElement_.innerHTML=_,this.renderedHTML_=_),this.renderedWidth_!=b&&(this.innerElement_.style.width=b+"px",this.renderedWidth_=b),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},t}(a.Z)},1908:(e,t,n)=>{"use strict";n.d(t,{z:()=>l});var i=n(18672),o=n(84110),a=n(44183);function l(e){var t,n,l=Object.keys(e.defs),s=l.length;for(t=0;t<s;++t){var r=l[t];if(!(0,i.U2)(r)){var p=e.defs(r);(0,i.Sx)(new a.Z({code:r,axisOrientation:p.axis,metersPerUnit:p.to_meter,units:p.units}))}}for(t=0;t<s;++t){var d=l[t],h=(0,i.U2)(d);for(n=0;n<s;++n){var m=l[n],c=(0,i.U2)(m);if(!(0,o.U2)(d,m))if(e.defs[d]===e.defs[m])(0,i.rM)([h,c]);else{var g=e(d,m);(0,i.zY)(h,c,g.forward,g.inverse)}}}}},45902:(e,t,n)=>{"use strict";var i=n(93379),o=n.n(i),a=n(91133);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals}}]);