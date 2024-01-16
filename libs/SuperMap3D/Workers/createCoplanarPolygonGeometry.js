define(["./EllipsoidRhumbLine-d305ae76","./BoundingRectangle-20dd2e63","./buildModuleUrl-9a89655b","./Cartesian2-99e64452","./Cartesian4-69ef58e5","./Check-7b2a090c","./FeatureDetection-ab6f364c","./CoplanarPolygonGeometryLibrary-635ef9ab","./when-b60132fc","./GeometryAttribute-f3b3c776","./GeometryAttributes-252e9929","./PolygonGeometryLibrary-8e7f000d","./GeometryPipeline-ff15c36b","./IndexDatatype-d62ee188","./Math-119be1a3","./PrimitiveType-ebb8c588","./Transforms-f4127659","./VertexFormat-6446fca0","./Cartographic-00721f3e","./WebGLConstants-aba9fc67","./OrientedBoundingBox-43298817","./EllipsoidTangentPlane-d397ceb5","./Plane-622eaee2","./earcut-2.2.1-20c8012f","./AttributeCompression-cd5fdf14","./EncodedCartesian3-3bcc61bb"],(function(e,t,a,n,r,o,i,l,s,p,c,y,u,m,d,g,b,v,f,h,C,x,P,w,A,F){"use strict";var L=new r.Cartesian3,G=new t.BoundingRectangle,E=new n.Cartesian2,T=new n.Cartesian2,D=new r.Cartesian3,_=new r.Cartesian3,k=new r.Cartesian3,V=new r.Cartesian3,R=new r.Cartesian3,M=new r.Cartesian3,H=new b.Quaternion,I=new n.Matrix3,B=new n.Matrix3,O=new r.Cartesian3;function z(e,t,a,o,l,s,u,v){var f=e.positions,h=y.PolygonPipeline.triangulate(e.positions2D,e.holes);h.length<3&&(h=[0,1,2]);var C=m.IndexDatatype.createTypedArray(f.length,h.length);C.set(h);var x=I;if(0!==o){var P=b.Quaternion.fromAxisAngle(s,o,H);if(x=n.Matrix3.fromQuaternion(P,x),t.tangent||t.bitangent){P=b.Quaternion.fromAxisAngle(s,-o,H);var w=n.Matrix3.fromQuaternion(P,B);u=r.Cartesian3.normalize(n.Matrix3.multiplyByVector(w,u,u),u),t.bitangent&&(v=r.Cartesian3.normalize(r.Cartesian3.cross(s,u,v),v))}}else x=n.Matrix3.clone(n.Matrix3.IDENTITY,x);var A=T;t.st&&(A.x=a.x,A.y=a.y);for(var F=f.length,G=3*F,D=new Float64Array(G),_=t.normal?new Float32Array(G):void 0,k=t.tangent?new Float32Array(G):void 0,V=t.bitangent?new Float32Array(G):void 0,R=t.st?new Float32Array(2*F):void 0,M=0,O=0,z=0,S=0,N=0,Q=0;Q<F;Q++){var U=f[Q];if(D[M++]=U.x,D[M++]=U.y,D[M++]=U.z,t.st){var j=l(n.Matrix3.multiplyByVector(x,U,L),E);n.Cartesian2.subtract(j,A,j);var Y=d.CesiumMath.clamp(j.x/a.width,0,1),q=d.CesiumMath.clamp(j.y/a.height,0,1);R[N++]=Y,R[N++]=q}t.normal&&(_[O++]=s.x,_[O++]=s.y,_[O++]=s.z),t.tangent&&(k[S++]=u.x,k[S++]=u.y,k[S++]=u.z),t.bitangent&&(V[z++]=v.x,V[z++]=v.y,V[z++]=v.z)}var J=new c.GeometryAttributes;return t.position&&(J.position=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:D})),t.normal&&(J.normal=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:_})),t.tangent&&(J.tangent=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:k})),t.bitangent&&(J.bitangent=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),t.st&&(J.st=new p.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:R})),new p.Geometry({attributes:J,indices:C,primitiveType:g.PrimitiveType.TRIANGLES})}function S(e){var t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=s.defaultValue(e.vertexFormat,v.VertexFormat.DEFAULT);this._vertexFormat=v.VertexFormat.clone(n),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=a.Ellipsoid.clone(s.defaultValue(e.ellipsoid,a.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=y.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+v.VertexFormat.packedLength+a.Ellipsoid.packedLength+2}S.fromPositions=function(e){return new S({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},S.pack=function(e,t,n){return n=s.defaultValue(n,0),n=y.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n),a.Ellipsoid.pack(e._ellipsoid,t,n),n+=a.Ellipsoid.packedLength,v.VertexFormat.pack(e._vertexFormat,t,n),n+=v.VertexFormat.packedLength,t[n++]=e._stRotation,t[n]=e.packedLength,t};var N=a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),Q=new v.VertexFormat,U={polygonHierarchy:{}};return S.unpack=function(e,t,n){t=s.defaultValue(t,0);var r=y.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;var o=a.Ellipsoid.unpack(e,t,N);t+=a.Ellipsoid.packedLength;var i=v.VertexFormat.unpack(e,t,Q);t+=v.VertexFormat.packedLength;var l=e[t++],p=e[t];return s.defined(n)||(n=new S(U)),n._polygonHierarchy=r,n._ellipsoid=a.Ellipsoid.clone(o,n._ellipsoid),n._vertexFormat=v.VertexFormat.clone(i,n._vertexFormat),n._stRotation=l,n.packedLength=p,n},S.createGeometry=function(t){var n=t._vertexFormat,o=t._polygonHierarchy,i=t._stRotation,s=o.positions;if(!((s=e.arrayRemoveDuplicates(s,r.Cartesian3.equalsEpsilon,!0)).length<3)){var c=D,g=_,b=k,v=R,f=M;if(l.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(s,V,v,f)){if(c=r.Cartesian3.cross(v,f,c),c=r.Cartesian3.normalize(c,c),!r.Cartesian3.equalsEpsilon(V,r.Cartesian3.ZERO,d.CesiumMath.EPSILON6)){var h=t._ellipsoid.geodeticSurfaceNormal(V,O);r.Cartesian3.dot(c,h)<0&&(c=r.Cartesian3.negate(c,c),v=r.Cartesian3.negate(v,v))}var C=l.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(V,v,f),x=l.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(V,v,f);n.tangent&&(g=r.Cartesian3.clone(v,g)),n.bitangent&&(b=r.Cartesian3.clone(f,b));var P=y.PolygonGeometryLibrary.polygonsFromHierarchy(o,C,!1),w=P.hierarchy,A=P.polygons;if(0!==w.length){s=w[0].outerRing;for(var F=a.BoundingSphere.fromPoints(s),L=y.PolygonGeometryLibrary.computeBoundingRectangle(c,x,s,i,G),E=[],T=0;T<A.length;T++){var H=new y.GeometryInstance({geometry:z(A[T],n,L,i,x,c,g,b)});E.push(H)}var I=u.GeometryPipeline.combineInstances(E)[0];I.attributes.position.values=new Float64Array(I.attributes.position.values),I.indices=m.IndexDatatype.createTypedArray(I.attributes.position.values.length/3,I.indices);var B=I.attributes;return n.position||delete B.position,new p.Geometry({attributes:B,indices:I.indices,primitiveType:I.primitiveType,boundingSphere:F})}}}},function(e,t){return s.defined(t)&&(e=S.unpack(e,t)),S.createGeometry(e)}}));