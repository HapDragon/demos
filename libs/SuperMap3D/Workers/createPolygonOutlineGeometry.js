define(["./when-b60132fc","./buildModuleUrl-9a89655b","./EllipsoidRhumbLine-d305ae76","./arrayFill-4513d7ad","./Check-7b2a090c","./FeatureDetection-ab6f364c","./EllipsoidTangentPlane-d397ceb5","./GeometryAttribute-f3b3c776","./GeometryAttributes-252e9929","./PolygonGeometryLibrary-8e7f000d","./GeometryOffsetAttribute-fbeb6f1a","./GeometryPipeline-ff15c36b","./IndexDatatype-d62ee188","./Math-119be1a3","./PrimitiveType-ebb8c588","./Cartesian4-69ef58e5","./Cartographic-00721f3e","./Cartesian2-99e64452","./WebGLConstants-aba9fc67","./Plane-622eaee2","./Transforms-f4127659","./earcut-2.2.1-20c8012f","./AttributeCompression-cd5fdf14","./EncodedCartesian3-3bcc61bb"],(function(e,t,i,r,o,n,a,l,s,y,u,p,d,f,c,g,h,m,b,P,v,E,_,A){"use strict";var G=[],L=[];function H(e,t,r,o,u){var p,f,g=a.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,G);y.PolygonPipeline.computeWindingOrder2D(g)===y.WindingOrder.CLOCKWISE&&(g.reverse(),t=t.slice().reverse());var h=t.length,m=0;if(o)for(p=new Float64Array(2*h*3),f=0;f<h;f++){var b=t[f],P=t[(f+1)%h];p[m++]=b.x,p[m++]=b.y,p[m++]=b.z,p[m++]=P.x,p[m++]=P.y,p[m++]=P.z}else{var v=0;if(u===i.ArcType.GEODESIC)for(f=0;f<h;f++)v+=y.PolygonGeometryLibrary.subdivideLineCount(t[f],t[(f+1)%h],r);else if(u===i.ArcType.RHUMB)for(f=0;f<h;f++)v+=y.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[f],t[(f+1)%h],r);for(p=new Float64Array(3*v),f=0;f<h;f++){var E;u===i.ArcType.GEODESIC?E=y.PolygonGeometryLibrary.subdivideLine(t[f],t[(f+1)%h],r,L):u===i.ArcType.RHUMB&&(E=y.PolygonGeometryLibrary.subdivideRhumbLine(e,t[f],t[(f+1)%h],r,L));for(var _=E.length,A=0;A<_;++A)p[m++]=E[A]}}var H=2*(h=p.length/3),T=d.IndexDatatype.createTypedArray(h,H);for(m=0,f=0;f<h-1;f++)T[m++]=f,T[m++]=f+1;return T[m++]=h-1,T[m++]=0,new y.GeometryInstance({geometry:new l.Geometry({attributes:new s.GeometryAttributes({position:new l.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),indices:T,primitiveType:c.PrimitiveType.LINES})})}function T(e,t,r,o,u){var p,f,g=a.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,G);y.PolygonPipeline.computeWindingOrder2D(g)===y.WindingOrder.CLOCKWISE&&(g.reverse(),t=t.slice().reverse());var h=t.length,m=new Array(h),b=0;if(o)for(p=new Float64Array(2*h*3*2),f=0;f<h;++f){m[f]=b/3;var P=t[f],v=t[(f+1)%h];p[b++]=P.x,p[b++]=P.y,p[b++]=P.z,p[b++]=v.x,p[b++]=v.y,p[b++]=v.z}else{var E=0;if(u===i.ArcType.GEODESIC)for(f=0;f<h;f++)E+=y.PolygonGeometryLibrary.subdivideLineCount(t[f],t[(f+1)%h],r);else if(u===i.ArcType.RHUMB)for(f=0;f<h;f++)E+=y.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[f],t[(f+1)%h],r);for(p=new Float64Array(3*E*2),f=0;f<h;++f){var _;m[f]=b/3,u===i.ArcType.GEODESIC?_=y.PolygonGeometryLibrary.subdivideLine(t[f],t[(f+1)%h],r,L):u===i.ArcType.RHUMB&&(_=y.PolygonGeometryLibrary.subdivideRhumbLine(e,t[f],t[(f+1)%h],r,L));for(var A=_.length,H=0;H<A;++H)p[b++]=_[H]}}h=p.length/6;var T=m.length,C=2*(2*h+T),O=d.IndexDatatype.createTypedArray(h,C);for(b=0,f=0;f<h;++f)O[b++]=f,O[b++]=(f+1)%h,O[b++]=f+h,O[b++]=(f+1)%h+h;for(f=0;f<T;f++){var D=m[f];O[b++]=D,O[b++]=D+h}return new y.GeometryInstance({geometry:new l.Geometry({attributes:new s.GeometryAttributes({position:new l.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),indices:O,primitiveType:c.PrimitiveType.LINES})})}function C(r){var o=r.polygonHierarchy,n=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84),a=e.defaultValue(r.granularity,f.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(r.perPositionHeight,!1),s=l&&e.defined(r.extrudedHeight),u=e.defaultValue(r.arcType,i.ArcType.GEODESIC),p=e.defaultValue(r.height,0),d=e.defaultValue(r.extrudedHeight,p);if(!s){var c=Math.max(p,d);d=Math.min(p,d),p=c}this._ellipsoid=t.Ellipsoid.clone(n),this._granularity=a,this._height=p,this._extrudedHeight=d,this._arcType=u,this._polygonHierarchy=o,this._perPositionHeight=l,this._perPositionHeightExtrude=s,this._offsetAttribute=r.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=y.PolygonGeometryLibrary.computeHierarchyPackedLength(o)+t.Ellipsoid.packedLength+8}C.pack=function(i,r,o){return o=e.defaultValue(o,0),o=y.PolygonGeometryLibrary.packPolygonHierarchy(i._polygonHierarchy,r,o),t.Ellipsoid.pack(i._ellipsoid,r,o),o+=t.Ellipsoid.packedLength,r[o++]=i._height,r[o++]=i._extrudedHeight,r[o++]=i._granularity,r[o++]=i._perPositionHeightExtrude?1:0,r[o++]=i._perPositionHeight?1:0,r[o++]=i._arcType,r[o++]=e.defaultValue(i._offsetAttribute,-1),r[o]=i.packedLength,r};var O=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),D={polygonHierarchy:{}};return C.unpack=function(i,r,o){r=e.defaultValue(r,0);var n=y.PolygonGeometryLibrary.unpackPolygonHierarchy(i,r);r=n.startingIndex,delete n.startingIndex;var a=t.Ellipsoid.unpack(i,r,O);r+=t.Ellipsoid.packedLength;var l=i[r++],s=i[r++],u=i[r++],p=1===i[r++],d=1===i[r++],f=i[r++],c=i[r++],g=i[r];return e.defined(o)||(o=new C(D)),o._polygonHierarchy=n,o._ellipsoid=t.Ellipsoid.clone(a,o._ellipsoid),o._height=l,o._extrudedHeight=s,o._granularity=u,o._perPositionHeight=d,o._perPositionHeightExtrude=p,o._arcType=f,o._offsetAttribute=-1===c?void 0:c,o.packedLength=g,o},C.fromPositions=function(t){return new C({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,arcType:t.arcType,offsetAttribute:t.offsetAttribute})},C.createGeometry=function(i){var o=i._ellipsoid,a=i._granularity,s=i._polygonHierarchy,d=i._perPositionHeight,c=i._arcType,g=y.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(s,!d,o);if(0!==g.length){var h,m,b,P=[],v=f.CesiumMath.chordLength(a,o.maximumRadius),E=i._height,_=i._extrudedHeight;if(i._perPositionHeightExtrude||!f.CesiumMath.equalsEpsilon(E,_,0,f.CesiumMath.EPSILON2))for(b=0;b<g.length;b++){if((h=T(o,g[b],v,d,c)).geometry=y.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(h.geometry,E,_,o,d),e.defined(i._offsetAttribute)){var A=h.geometry.attributes.position.values.length/3,G=new Uint8Array(A);i._offsetAttribute===u.GeometryOffsetAttribute.TOP?G=r.arrayFill(G,1,0,A/2):(m=i._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,G=r.arrayFill(G,m)),h.geometry.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:G})}P.push(h)}else for(b=0;b<g.length;b++){if((h=H(o,g[b],v,d,c)).geometry.attributes.position.values=y.PolygonPipeline.scaleToGeodeticHeight(h.geometry.attributes.position.values,E,o,!d),e.defined(i._offsetAttribute)){var L=h.geometry.attributes.position.values.length,C=new Uint8Array(L/3);m=i._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,r.arrayFill(C,m),h.geometry.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:C})}P.push(h)}var O=p.GeometryPipeline.combineInstances(P)[0],D=t.BoundingSphere.fromVertices(O.attributes.position.values);return new l.Geometry({attributes:O.attributes,indices:O.indices,primitiveType:O.primitiveType,boundingSphere:D,offsetAttribute:i._offsetAttribute})}},function(i,r){return e.defined(r)&&(i=C.unpack(i,r)),i._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),C.createGeometry(i)}}));