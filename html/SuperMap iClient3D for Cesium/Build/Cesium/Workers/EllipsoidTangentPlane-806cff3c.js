define(["exports","./Cartographic-3309dd0d","./Check-7b2a090c","./when-b60132fc","./PrimitiveType-108f83af","./Cartesian2-47311507","./Cartesian4-3ca25aab","./IntersectionTests-6eb562ca","./Plane-e2d409ef","./GeometryAttribute-b20c1286"],(function(e,n,t,i,a,r,s,o,m,c){"use strict";function l(e,t,a){this.minimum=n.Cartesian3.clone(i.defaultValue(e,n.Cartesian3.ZERO)),this.maximum=n.Cartesian3.clone(i.defaultValue(t,n.Cartesian3.ZERO)),a=i.defined(a)?n.Cartesian3.clone(a):n.Cartesian3.midpoint(this.minimum,this.maximum,new n.Cartesian3),this.center=a}l.fromPoints=function(e,t){if(i.defined(t)||(t=new l),!i.defined(e)||0===e.length)return t.minimum=n.Cartesian3.clone(n.Cartesian3.ZERO,t.minimum),t.maximum=n.Cartesian3.clone(n.Cartesian3.ZERO,t.maximum),t.center=n.Cartesian3.clone(n.Cartesian3.ZERO,t.center),t;for(var a=e[0].x,r=e[0].y,s=e[0].z,o=e[0].x,m=e[0].y,c=e[0].z,u=e.length,d=1;d<u;d++){var f=e[d],h=f.x,C=f.y,p=f.z;a=Math.min(h,a),o=Math.max(h,o),r=Math.min(C,r),m=Math.max(C,m),s=Math.min(p,s),c=Math.max(p,c)}var x=t.minimum;x.x=a,x.y=r,x.z=s;var y=t.maximum;return y.x=o,y.y=m,y.z=c,t.center=n.Cartesian3.midpoint(x,y,t.center),t},l.clone=function(e,t){if(i.defined(e))return i.defined(t)?(t.minimum=n.Cartesian3.clone(e.minimum,t.minimum),t.maximum=n.Cartesian3.clone(e.maximum,t.maximum),t.center=n.Cartesian3.clone(e.center,t.center),t):new l(e.minimum,e.maximum,e.center)},l.equals=function(e,t){return e===t||i.defined(e)&&i.defined(t)&&n.Cartesian3.equals(e.center,t.center)&&n.Cartesian3.equals(e.minimum,t.minimum)&&n.Cartesian3.equals(e.maximum,t.maximum)};var u=new n.Cartesian3;l.intersectPlane=function(e,t){u=n.Cartesian3.subtract(e.maximum,e.minimum,u);var i=n.Cartesian3.multiplyByScalar(u,.5,u),r=t.normal,s=i.x*Math.abs(r.x)+i.y*Math.abs(r.y)+i.z*Math.abs(r.z),o=n.Cartesian3.dot(e.center,r)+t.distance;return o-s>0?a.Intersect.INSIDE:o+s<0?a.Intersect.OUTSIDE:a.Intersect.INTERSECTING},l.prototype.clone=function(e){return l.clone(this,e)},l.prototype.intersectPlane=function(e){return l.intersectPlane(this,e)},l.prototype.equals=function(e){return l.equals(this,e)};var d=new s.Cartesian4;function f(e,t){e=(t=i.defaultValue(t,r.Ellipsoid.WGS84)).scaleToGeodeticSurface(e);var s=c.Transforms.eastNorthUpToFixedFrame(e,t);this._ellipsoid=t,this._origin=e,this._xAxis=n.Cartesian3.fromCartesian4(a.Matrix4.getColumn(s,0,d)),this._yAxis=n.Cartesian3.fromCartesian4(a.Matrix4.getColumn(s,1,d));var o=n.Cartesian3.fromCartesian4(a.Matrix4.getColumn(s,2,d));this._plane=m.Plane.fromPointNormal(e,o)}Object.defineProperties(f.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});var h=new l;f.fromPoints=function(e,n){return new f(l.fromPoints(e,h).center,n)};var C=new o.Ray,p=new n.Cartesian3;f.prototype.projectPointOntoPlane=function(e,t){var a=C;a.origin=e,n.Cartesian3.normalize(e,a.direction);var s=o.IntersectionTests.rayPlane(a,this._plane,p);if(i.defined(s)||(n.Cartesian3.negate(a.direction,a.direction),s=o.IntersectionTests.rayPlane(a,this._plane,p)),i.defined(s)){var m=n.Cartesian3.subtract(s,this._origin,s),c=n.Cartesian3.dot(this._xAxis,m),l=n.Cartesian3.dot(this._yAxis,m);return i.defined(t)?(t.x=c,t.y=l,t):new r.Cartesian2(c,l)}},f.prototype.projectPointsOntoPlane=function(e,n){i.defined(n)||(n=[]);for(var t=0,a=e.length,r=0;r<a;r++){var s=this.projectPointOntoPlane(e[r],n[t]);i.defined(s)&&(n[t]=s,t++)}return n.length=t,n},f.prototype.projectPointToNearestOnPlane=function(e,t){i.defined(t)||(t=new r.Cartesian2);var a=C;a.origin=e,n.Cartesian3.clone(this._plane.normal,a.direction);var s=o.IntersectionTests.rayPlane(a,this._plane,p);i.defined(s)||(n.Cartesian3.negate(a.direction,a.direction),s=o.IntersectionTests.rayPlane(a,this._plane,p));var m=n.Cartesian3.subtract(s,this._origin,s),c=n.Cartesian3.dot(this._xAxis,m),l=n.Cartesian3.dot(this._yAxis,m);return t.x=c,t.y=l,t},f.prototype.projectPointsToNearestOnPlane=function(e,n){i.defined(n)||(n=[]);var t=e.length;n.length=t;for(var a=0;a<t;a++)n[a]=this.projectPointToNearestOnPlane(e[a],n[a]);return n};var x=new n.Cartesian3;f.prototype.projectPointOntoEllipsoid=function(e,t){i.defined(t)||(t=new n.Cartesian3);var a=this._ellipsoid,r=this._origin,s=this._xAxis,o=this._yAxis,m=x;return n.Cartesian3.multiplyByScalar(s,e.x,m),t=n.Cartesian3.add(r,m,t),n.Cartesian3.multiplyByScalar(o,e.y,m),n.Cartesian3.add(t,m,t),a.scaleToGeocentricSurface(t,t),t},f.prototype.projectPointsOntoEllipsoid=function(e,n){var t=e.length;i.defined(n)?n.length=t:n=new Array(t);for(var a=0;a<t;++a)n[a]=this.projectPointOntoEllipsoid(e[a],n[a]);return n},e.AxisAlignedBoundingBox=l,e.EllipsoidTangentPlane=f}));
