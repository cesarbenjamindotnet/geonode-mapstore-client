(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2575],{86320:(t,e,i)=>{"use strict";function s(t){return Math.pow(t,3)}function o(t){return 1-s(1-t)}function n(t){return 3*t*t-2*t*t*t}function r(t){return t}i.d(e,{YQ:()=>s,Vv:()=>o,rd:()=>n,GE:()=>r})},44538:(t,e,i)=>{"use strict";i.d(e,{Z:()=>C});var s=i(79682),o=i(21915),n=i(3696),r=i(28795),a=i(32538),h=i(83729),l=i(38667),d=i(86204),f=i(21422),u=i(60897),p=i(4027),c=i(95173),g=i(62418);const C=function(t){function e(e,i){t.call(this),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===i||Array.isArray(e[0])?this.setCoordinates(e,i):this.setFlatCoordinates(i,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendCoordinate=function(t){this.flatCoordinates?(0,s.l7)(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,i,s){return s<(0,o.qf)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,h.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,h.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,i,s))},e.prototype.forEachSegment=function(t){return(0,c.E)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinateAtM=function(t,e){if(this.layout!=n.Z.XYM&&this.layout!=n.Z.XYZM)return null;var i=void 0!==e&&e;return(0,f.iJ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i)},e.prototype.getCoordinates=function(){return(0,d.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getCoordinateAt=function(t,e){return(0,f.WW)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e)},e.prototype.getLength=function(){return(0,p.W)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getFlatMidpoint=function(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[];return i.length=(0,g.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i,0),new e(i,n.Z.XY)},e.prototype.getType=function(){return r.Z.LINE_STRING},e.prototype.intersectsExtent=function(t){return(0,u.Kz)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,l.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(a.ZP)},25642:(t,e,i)=>{"use strict";i.d(e,{Z:()=>g});var s=i(79682),o=i(21915),n=i(3696),r=i(28795),a=i(44538),h=i(32538),l=i(83729),d=i(38667),f=i(86204),u=i(21422),p=i(60897),c=i(62418);const g=function(t){function e(e,i,o){if(t.call(this),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,i);else if(void 0!==i&&o)this.setFlatCoordinates(i,e),this.ends_=o;else{for(var n=this.getLayout(),r=e,a=[],h=[],l=0,d=r.length;l<d;++l){var f=r[l];0===l&&(n=f.getLayout()),(0,s.l7)(a,f.getFlatCoordinates()),h.push(a.length)}this.setFlatCoordinates(n,a),this.ends_=h}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendLineString=function(t){this.flatCoordinates?(0,s.l7)(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice())},e.prototype.closestPointXY=function(t,e,i,s){return s<(0,o.qf)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,l.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,l.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,i,s))},e.prototype.getCoordinateAtM=function(t,e,i){if(this.layout!=n.Z.XYM&&this.layout!=n.Z.XYZM||0===this.flatCoordinates.length)return null;var s=void 0!==e&&e,o=void 0!==i&&i;return(0,u.dG)(this.flatCoordinates,0,this.ends_,this.stride,t,s,o)},e.prototype.getCoordinates=function(){return(0,f.o1)(this.flatCoordinates,0,this.ends_,this.stride)},e.prototype.getEnds=function(){return this.ends_},e.prototype.getLineString=function(t){return t<0||this.ends_.length<=t?null:new a.Z(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},e.prototype.getLineStrings=function(){for(var t=this.flatCoordinates,e=this.ends_,i=this.layout,s=[],o=0,n=0,r=e.length;n<r;++n){var h=e[n],l=new a.Z(t.slice(o,h),i);s.push(l),o=h}return s},e.prototype.getFlatMidpoints=function(){for(var t=[],e=this.flatCoordinates,i=0,o=this.ends_,n=this.stride,r=0,a=o.length;r<a;++r){var h=o[r],l=(0,u.WW)(e,i,h,n,.5);(0,s.l7)(t,l),i=h}return t},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[],s=[];return i.length=(0,c.UJ)(this.flatCoordinates,0,this.ends_,this.stride,t,i,0,s),new e(i,n.Z.XY,s)},e.prototype.getType=function(){return r.Z.MULTI_LINE_STRING},e.prototype.intersectsExtent=function(t){return(0,p.AW)(this.flatCoordinates,0,this.ends_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var i=(0,d._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===i.length?0:i[i.length-1],this.changed()},e}(h.ZP)},52329:(t,e,i)=>{"use strict";i.d(e,{Z:()=>f});var s=i(79682),o=i(21915),n=i(28795),r=i(52043),a=i(32538),h=i(38667),l=i(86204),d=i(21882);const f=function(t){function e(e,i){t.call(this),i&&!Array.isArray(e[0])?this.setFlatCoordinates(i,e):this.setCoordinates(e,i)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendPoint=function(t){this.flatCoordinates?(0,s.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,i,s){if(s<(0,o.qf)(this.getExtent(),t,e))return s;for(var n=this.flatCoordinates,r=this.stride,a=0,h=n.length;a<h;a+=r){var l=(0,d.bI)(t,e,n[a],n[a+1]);if(l<s){s=l;for(var f=0;f<r;++f)i[f]=n[a+f];i.length=r}}return s},e.prototype.getCoordinates=function(){return(0,l.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getPoint=function(t){var e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new r.Z(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)},e.prototype.getPoints=function(){for(var t=this.flatCoordinates,e=this.layout,i=this.stride,s=[],o=0,n=t.length;o<n;o+=i){var a=new r.Z(t.slice(o,o+i),e);s.push(a)}return s},e.prototype.getType=function(){return n.Z.MULTI_POINT},e.prototype.intersectsExtent=function(t){for(var e=this.flatCoordinates,i=this.stride,s=0,n=e.length;s<n;s+=i){var r=e[s],a=e[s+1];if((0,o.jE)(t,r,a))return!0}return!1},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,h.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(a.ZP)},13987:(t,e,i)=>{"use strict";i.d(e,{Z:()=>R});var s=i(79682),o=i(21915),n=i(3696),r=i(28795),a=i(52329),h=i(40353),l=i(32538),d=i(32562),f=i(92526),u=i(83729),p=i(30197),c=i(38667),g=i(86204),C=i(38529),_=i(60897),y=i(80793),v=i(62418);const R=function(t){function e(e,i,o){if(t.call(this),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!o&&!Array.isArray(e[0])){for(var n=this.getLayout(),r=e,a=[],h=[],l=0,d=r.length;l<d;++l){var f=r[l];0===l&&(n=f.getLayout());for(var u=a.length,p=f.getEnds(),c=0,g=p.length;c<g;++c)p[c]+=u;(0,s.l7)(a,f.getFlatCoordinates()),h.push(p)}i=n,e=a,o=h}void 0!==i&&o?(this.setFlatCoordinates(i,e),this.endss_=o):this.setCoordinates(e,i)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendPolygon=function(t){var e;if(this.flatCoordinates){var i=this.flatCoordinates.length;(0,s.l7)(this.flatCoordinates,t.getFlatCoordinates());for(var o=0,n=(e=t.getEnds().slice()).length;o<n;++o)e[o]+=i}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()},e.prototype.clone=function(){for(var t=this.endss_.length,i=new Array(t),s=0;s<t;++s)i[s]=this.endss_[s].slice();return new e(this.flatCoordinates.slice(),this.layout,i)},e.prototype.closestPointXY=function(t,e,i,s){return s<(0,o.qf)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,u.sD)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,u.gI)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,s))},e.prototype.containsXY=function(t,e){return(0,p.Zl)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)},e.prototype.getArea=function(){return(0,d.Eu)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)},e.prototype.getCoordinates=function(t){var e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,y.dL)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,g.ug)(e,0,this.endss_,this.stride)},e.prototype.getEndss=function(){return this.endss_},e.prototype.getFlatInteriorPoints=function(){if(this.flatInteriorPointsRevision_!=this.getRevision()){var t=(0,f.E)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,C.U)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_},e.prototype.getInteriorPoints=function(){return new a.Z(this.getFlatInteriorPoints().slice(),n.Z.XYM)},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;(0,y.$v)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,y.dL)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[],s=[];return i.length=(0,v.Pp)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),i,0,s),new e(i,n.Z.XY,s)},e.prototype.getPolygon=function(t){if(t<0||this.endss_.length<=t)return null;var e;if(0===t)e=0;else{var i=this.endss_[t-1];e=i[i.length-1]}var s=this.endss_[t].slice(),o=s[s.length-1];if(0!==e)for(var n=0,r=s.length;n<r;++n)s[n]-=e;return new h.ZP(this.flatCoordinates.slice(e,o),this.layout,s)},e.prototype.getPolygons=function(){for(var t=this.layout,e=this.flatCoordinates,i=this.endss_,s=[],o=0,n=0,r=i.length;n<r;++n){var a=i[n].slice(),l=a[a.length-1];if(0!==o)for(var d=0,f=a.length;d<f;++d)a[d]-=o;var u=new h.ZP(e.slice(o,l),t,a);s.push(u),o=l}return s},e.prototype.getType=function(){return r.Z.MULTI_POLYGON},e.prototype.intersectsExtent=function(t){return(0,_.oW)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);var i=(0,c.QT)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===i.length)this.flatCoordinates.length=0;else{var s=i[i.length-1];this.flatCoordinates.length=0===s.length?0:s[s.length-1]}this.changed()},e}(l.ZP)},92526:(t,e,i)=>{"use strict";i.d(e,{E:()=>o});var s=i(21915);function o(t,e,i,o){for(var n=[],r=(0,s.lJ)(),a=0,h=i.length;a<h;++a){var l=i[a];r=(0,s.GN)(t,e,l[0],o),n.push((r[0]+r[2])/2,(r[1]+r[3])/2),e=l[l.length-1]}return n}},21422:(t,e,i)=>{"use strict";i.d(e,{WW:()=>n,iJ:()=>r,dG:()=>a});var s=i(79682),o=i(21882);function n(t,e,i,n,r,a){var h=NaN,l=NaN,d=(i-e)/n;if(1===d)h=t[e],l=t[e+1];else if(2==d)h=(1-r)*t[e]+r*t[e+n],l=(1-r)*t[e+1]+r*t[e+n+1];else if(0!==d){for(var f=t[e],u=t[e+1],p=0,c=[0],g=e+n;g<i;g+=n){var C=t[g],_=t[g+1];p+=Math.sqrt((C-f)*(C-f)+(_-u)*(_-u)),c.push(p),f=C,u=_}var y=r*p,v=(0,s.ry)(c,y);if(v<0){var R=(y-c[-v-2])/(c[-v-1]-c[-v-2]),F=e+(-v-2)*n;h=(0,o.t7)(t[F],t[F+n],R),l=(0,o.t7)(t[F+1],t[F+n+1],R)}else h=t[e+v*n],l=t[e+v*n+1]}return a?(a[0]=h,a[1]=l,a):[h,l]}function r(t,e,i,s,n,r){if(i==e)return null;var a;if(n<t[e+s-1])return r?((a=t.slice(e,e+s))[s-1]=n,a):null;if(t[i-1]<n)return r?((a=t.slice(i-s,i))[s-1]=n,a):null;if(n==t[e+s-1])return t.slice(e,e+s);for(var h=e/s,l=i/s;h<l;){var d=h+l>>1;n<t[(d+1)*s-1]?l=d:h=d+1}var f=t[h*s-1];if(n==f)return t.slice((h-1)*s,(h-1)*s+s);var u=(n-f)/(t[(h+1)*s-1]-f);a=[];for(var p=0;p<s-1;++p)a.push((0,o.t7)(t[(h-1)*s+p],t[h*s+p],u));return a.push(n),a}function a(t,e,i,s,o,n,a){if(a)return r(t,e,i[i.length-1],s,o,n);var h;if(o<t[s-1])return n?((h=t.slice(0,s))[s-1]=o,h):null;if(t[t.length-1]<o)return n?((h=t.slice(t.length-s))[s-1]=o,h):null;for(var l=0,d=i.length;l<d;++l){var f=i[l];if(e!=f){if(o<t[e+s-1])return null;if(o<=t[f-1])return r(t,e,f,s,o,!1);e=f}}return null}},4027:(t,e,i)=>{"use strict";function s(t,e,i,s){for(var o=t[e],n=t[e+1],r=0,a=e+s;a<i;a+=s){var h=t[a],l=t[a+1];r+=Math.sqrt((h-o)*(h-o)+(l-n)*(l-n)),o=h,n=l}return r}i.d(e,{W:()=>s})}}]);