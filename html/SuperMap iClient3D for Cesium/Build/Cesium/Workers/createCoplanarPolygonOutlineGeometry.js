define(["./arrayRemoveDuplicates-d2f048c5","./PrimitiveType-108f83af","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./CoplanarPolygonGeometryLibrary-2f69c0dd","./when-b60132fc","./GeometryAttribute-b20c1286","./GeometryAttributes-252e9929","./GeometryInstance-333cbc9d","./GeometryPipeline-db4d917c","./IndexDatatype-8a5eead4","./PolygonGeometryLibrary-d0ae0c37","./Cartesian2-47311507","./Math-119be1a3","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./OrientedBoundingBox-bfa2f286","./EllipsoidTangentPlane-806cff3c","./IntersectionTests-6eb562ca","./Plane-e2d409ef","./PolygonPipeline-03d66105","./earcut-2.2.1-20c8012f","./EllipsoidRhumbLine-ed1a6bf4","./FeatureDetection-c3b71206","./buildModuleUrl-3addfe33","./AttributeCompression-90851096","./EncodedCartesian3-f1396b05","./ArcType-29cf2197"],(function(e,t,r,n,a,o,i,y,c,l,p,u,d,s,m,f,g,b,h,P,v,G,C,L,T,E,k,H,w,A){"use strict";function D(e){for(var r=e.length,n=new Float64Array(3*r),o=u.IndexDatatype.createTypedArray(r,2*r),i=0,l=0,p=0;p<r;p++){var d=e[p];n[i++]=d.x,n[i++]=d.y,n[i++]=d.z,o[l++]=p,o[l++]=(p+1)%r}var s=new c.GeometryAttributes({position:new y.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new y.Geometry({attributes:s,indices:o,primitiveType:t.PrimitiveType.LINES})}function I(e){var t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=d.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+1}I.fromPositions=function(e){return new I({polygonHierarchy:{positions:(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).positions}})},I.pack=function(e,t,r){return r=i.defaultValue(r,0),t[r=d.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r)]=e.packedLength,t};var _={polygonHierarchy:{}};return I.unpack=function(e,t,r){t=i.defaultValue(t,0);var n=d.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var a=e[t];return i.defined(r)||(r=new I(_)),r._polygonHierarchy=n,r.packedLength=a,r},I.createGeometry=function(n){var a=n._polygonHierarchy,i=a.positions;if(!((i=e.arrayRemoveDuplicates(i,r.Cartesian3.equalsEpsilon,!0)).length<3)&&o.CoplanarPolygonGeometryLibrary.validOutline(i)){var c=d.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(a,!1);if(0!==c.length){for(var u=[],s=0;s<c.length;s++){var m=new l.GeometryInstance({geometry:D(c[s])});u.push(m)}var f=p.GeometryPipeline.combineInstances(u)[0],g=t.BoundingSphere.fromPoints(a.positions);return new y.Geometry({attributes:f.attributes,indices:f.indices,primitiveType:f.primitiveType,boundingSphere:g})}}},function(e,t){return i.defined(t)&&(e=I.unpack(e,t)),e._ellipsoid=s.Ellipsoid.clone(e._ellipsoid),I.createGeometry(e)}}));