/*! For license information please see 351.e3ea754ab46129944554.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[351],{23928:(t,i,o)=>{"use strict";o.d(i,{Z:()=>e});var s=o(23645),n=o.n(s)()((function(t){return t[1]}));n.push([t.id,"/* Compatible with Leaflet 0.7 */\n.msgapi .leaflet-control-locate a {\n  font-size: 1.4em;\n  color: #444;\n  cursor: pointer;\n}\n.msgapi .leaflet-control-locate.active a {\n  color: #2074B6;\n}\n.msgapi .leaflet-control-locate.active.following a {\n  color: #FC8428;\n}\n",""]);const e=n},32818:()=>{var t,i,o;t=L.Marker.prototype._initIcon,i=L.Marker.prototype._setPos,o="msTransform"===L.DomUtil.TRANSFORM,L.Marker.addInitHook((function(){var t=this.options.icon&&this.options.icon.options&&this.options.icon.options.iconAnchor;t&&(t=t[0]+"px "+t[1]+"px"),this.options.rotationOrigin=this.options.rotationOrigin||t||"center bottom",this.options.rotationAngle=this.options.rotationAngle||0,this.on("drag",(function(t){t.target._applyRotation()}))})),L.Marker.include({_initIcon:function(){t.call(this)},_setPos:function(t){i.call(this,t),this._applyRotation()},_applyRotation:function(){this.options.rotationAngle&&(this._icon.style[L.DomUtil.TRANSFORM+"Origin"]=this.options.rotationOrigin,o?this._icon.style[L.DomUtil.TRANSFORM]="rotate("+this.options.rotationAngle+"deg)":this._icon.style[L.DomUtil.TRANSFORM]+=" rotateZ("+this.options.rotationAngle+"deg)")},setRotationAngle:function(t){return this.options.rotationAngle=t,this.update(),this},setRotationOrigin:function(t){return this.options.rotationOrigin=t,this.update(),this}})},80687:(t,i,o)=>{var s,n,e;!function(a,r){n=[o(56307)],void 0===(e="function"==typeof(s=a)?s.apply(i,n):s)||(t.exports=e),void 0!==r&&r.L&&(r.L.Control.Locate=a(L))}((function(t){var i=function(i,o,s){(s=s.split(" ")).forEach((function(s){t.DomUtil[i].call(this,o,s)}))},o=function(t,o){i("addClass",t,o)},s=function(t,o){i("removeClass",t,o)},n=t.Control.extend({options:{position:"topleft",layer:void 0,setView:"untilPan",keepCurrentZoomLevel:!1,flyTo:!1,clickBehavior:{inView:"stop",outOfView:"setView"},returnToPrevBounds:!1,cacheLocation:!0,drawCircle:!0,drawMarker:!0,markerClass:t.CircleMarker,circleStyle:{color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:2,opacity:.5},markerStyle:{color:"#136AEC",fillColor:"#2A93EE",fillOpacity:.7,weight:2,opacity:.9,radius:5},followCircleStyle:{},followMarkerStyle:{},icon:"fa fa-map-marker",iconLoading:"fa fa-spinner fa-spin",iconElementTag:"span",circlePadding:[0,0],metric:!0,createButtonCallback:function(i,o){var s=t.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",i);return s.title=o.strings.title,{link:s,icon:t.DomUtil.create(o.iconElementTag,o.icon,s)}},onLocationError:function(t,i){alert(t.message)},onLocationOutsideMapBounds:function(t){t.stop(),alert(t.options.strings.outsideMapBoundsMsg)},showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0,setView:!1}},initialize:function(i){for(var o in i)"object"==typeof this.options[o]?t.extend(this.options[o],i[o]):this.options[o]=i[o];this.options.followMarkerStyle=t.extend({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=t.extend({},this.options.circleStyle,this.options.followCircleStyle)},onAdd:function(i){var o=t.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._layer=this.options.layer||new t.LayerGroup,this._layer.addTo(i),this._event=void 0,this._prevBounds=null;var s=this.options.createButtonCallback(o,this.options);return this._link=s.link,this._icon=s.icon,t.DomEvent.on(this._link,"click",t.DomEvent.stopPropagation).on(this._link,"click",t.DomEvent.preventDefault).on(this._link,"click",this._onClick,this).on(this._link,"dblclick",t.DomEvent.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),o},_onClick:function(){if(this._justClicked=!0,this._userPanned=!1,this._active&&!this._event)this.stop();else if(this._active&&void 0!==this._event)switch(this._map.getBounds().contains(this._event.latlng)?this.options.clickBehavior.inView:this.options.clickBehavior.outOfView){case"setView":this.setView();break;case"stop":this.stop(),this.options.returnToPrevBounds&&(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._prevBounds)}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start:function(){this._activate(),this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle()},stop:function(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this._onLocationFound,this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},_deactivate:function(){this._map.stopLocate(),this._active=!1,this.options.cacheLocation||(this._event=void 0),this._map.off("locationfound",this._onLocationFound,this),this._map.off("locationerror",this._onLocationError,this),this._map.off("dragstart",this._onDrag,this)},setView:function(){this._drawMarker(),this._isOutsideMapBounds()?(this._event=void 0,this.options.onLocationOutsideMapBounds(this)):this.options.keepCurrentZoomLevel?(this.options.flyTo?this._map.flyTo:this._map.panTo).bind(this._map)([this._event.latitude,this._event.longitude]):(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._event.bounds,{padding:this.options.circlePadding,maxZoom:this.options.locateOptions.maxZoom})},_drawMarker:function(){void 0===this._event.accuracy&&(this._event.accuracy=0);var i,o,s=this._event.accuracy,n=this._event.latlng;if(this.options.drawCircle){var e=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(n).setRadius(s).setStyle(e):this._circle=t.circle(n,s,e).addTo(this._layer)}if(this.options.metric?(i=s.toFixed(0),o=this.options.strings.metersUnit):(i=(3.2808399*s).toFixed(0),o=this.options.strings.feetUnit),this.options.drawMarker){var a=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(n),this._marker.setStyle&&this._marker.setStyle(a)):this._marker=new this.options.markerClass(n,a).addTo(this._layer)}var r=this.options.strings.popup;this.options.showPopup&&r&&this._marker&&this._marker.bindPopup(t.Util.template(r,{distance:i,unit:o}))._popup.setLatLng(n)},_removeMarker:function(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload:function(){this.stop(),this._map.off("unload",this._unload,this)},_onLocationError:function(t){3==t.code&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(t,this))},_onLocationFound:function(t){if((!this._event||this._event.latlng.lat!==t.latlng.lat||this._event.latlng.lng!==t.latlng.lng||this._event.accuracy!==t.accuracy)&&this._active){switch(this._event=t,this._drawMarker(),this._updateContainerStyle(),this.options.setView){case"once":this._justClicked&&this.setView();break;case"untilPan":this._userPanned||this.setView();break;case"always":this.setView()}this._justClicked=!1}},_onDrag:function(){this._event&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing:function(){return!!this._active&&("always"===this.options.setView||("untilPan"===this.options.setView?!this._userPanned:void 0))},_isOutsideMapBounds:function(){return void 0!==this._event&&this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng)},_updateContainerStyle:function(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses:function(t){"requesting"==t?(s(this._container,"active following"),o(this._container,"requesting"),s(this._icon,this.options.icon),o(this._icon,this.options.iconLoading)):"active"==t?(s(this._container,"requesting following"),o(this._container,"active"),s(this._icon,this.options.iconLoading),o(this._icon,this.options.icon)):"following"==t&&(s(this._container,"requesting"),o(this._container,"active following"),s(this._icon,this.options.iconLoading),o(this._icon,this.options.icon))},_cleanClasses:function(){t.DomUtil.removeClass(this._container,"requesting"),t.DomUtil.removeClass(this._container,"active"),t.DomUtil.removeClass(this._container,"following"),s(this._icon,this.options.iconLoading),o(this._icon,this.options.icon)},_resetVariables:function(){this._active=!1,this._justClicked=!1,this._userPanned=!1}});return t.control.locate=function(i){return new t.Control.Locate(i)},n}),window)},42122:(t,i,o)=>{"use strict";var s=o(93379),n=o.n(s),e=o(23928);n()(e.Z,{insert:"head",singleton:!1}),e.Z.locals}}]);