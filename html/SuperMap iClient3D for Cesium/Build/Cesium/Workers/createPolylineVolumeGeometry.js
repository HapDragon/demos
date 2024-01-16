define(["./when-b60132fc","./Cartesian2-47311507","./arrayRemoveDuplicates-d2f048c5","./BoundingRectangle-602e4bac","./PrimitiveType-108f83af","./Cartographic-3309dd0d","./ComponentDatatype-c140a87d","./PolylineVolumeGeometryLibrary-4a7c15e7","./Check-7b2a090c","./GeometryAttribute-b20c1286","./GeometryAttributes-252e9929","./GeometryPipeline-db4d917c","./IndexDatatype-8a5eead4","./Math-119be1a3","./buildModuleUrl-3addfe33","./PolygonPipeline-03d66105","./VertexFormat-6446fca0","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./EllipsoidTangentPlane-806cff3c","./IntersectionTests-6eb562ca","./Plane-e2d409ef","./PolylinePipeline-145ba528","./EllipsoidGeodesic-0f19ac62","./EllipsoidRhumbLine-ed1a6bf4","./FeatureDetection-c3b71206","./AttributeCompression-90851096","./EncodedCartesian3-f1396b05","./earcut-2.2.1-20c8012f"],(function(e,t,n,a,i,r,o,l,s,p,c,u,d,m,y,g,h,f,v,b,C,P,E,_,k,L,V,F,A,T){"use strict";function G(n){var a=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).polylinePositions,i=n.shapePositions;this._positions=a,this._shape=i,this._ellipsoid=t.Ellipsoid.clone(e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(n.cornerType,l.CornerType.ROUNDED),this._vertexFormat=h.VertexFormat.clone(e.defaultValue(n.vertexFormat,h.VertexFormat.DEFAULT)),this._granularity=e.defaultValue(n.granularity,m.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry",this.enuCenter=e.defaultValue(n.enuCenter,r.Cartesian3.ZERO);var o=1+a.length*r.Cartesian3.packedLength;o+=1+i.length*t.Cartesian2.packedLength+r.Cartesian3.packedLength,this.packedLength=o+t.Ellipsoid.packedLength+h.VertexFormat.packedLength+2}G.pack=function(n,a,i){var o;i=e.defaultValue(i,0);var l=n._positions,s=l.length;for(a[i++]=s,o=0;o<s;++o,i+=r.Cartesian3.packedLength)r.Cartesian3.pack(l[o],a,i);var p=n._shape;for(s=p.length,a[i++]=s,o=0;o<s;++o,i+=t.Cartesian2.packedLength)t.Cartesian2.pack(p[o],a,i);return t.Ellipsoid.pack(n._ellipsoid,a,i),i+=t.Ellipsoid.packedLength,h.VertexFormat.pack(n._vertexFormat,a,i),i+=h.VertexFormat.packedLength,a[i++]=n._cornerType,a[i++]=n._granularity,r.Cartesian3.pack(n.enuCenter,a,i),a};var D=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),x=new h.VertexFormat,w={polylinePositions:void 0,shapePositions:void 0,ellipsoid:D,vertexFormat:x,cornerType:void 0,granularity:void 0,enuCenter:void 0};G.unpack=function(n,a,i){var o;a=e.defaultValue(a,0);var l=n[a++],s=new Array(l);for(o=0;o<l;++o,a+=r.Cartesian3.packedLength)s[o]=r.Cartesian3.unpack(n,a);l=n[a++];var p=new Array(l);for(o=0;o<l;++o,a+=t.Cartesian2.packedLength)p[o]=t.Cartesian2.unpack(n,a);var c=t.Ellipsoid.unpack(n,a,D);a+=t.Ellipsoid.packedLength;var u=h.VertexFormat.unpack(n,a,x);a+=h.VertexFormat.packedLength;var d,m=n[a++],y=n[a++];return d=r.Cartesian3.unpack(n,a),e.defined(i)?(i._positions=s,i._shape=p,i._ellipsoid=t.Ellipsoid.clone(c,i._ellipsoid),i._vertexFormat=h.VertexFormat.clone(u,i._vertexFormat),i._cornerType=m,i._granularity=y,i.enuCenter=d,i):(w.polylinePositions=s,w.shapePositions=p,w.cornerType=m,w.granularity=y,w.enuCenter=d,new G(w))};var R=new a.BoundingRectangle;return G.createGeometry=function(t){for(var s=t._positions,m=n.arrayRemoveDuplicates(s,r.Cartesian3.equalsEpsilon),h=m.length,f=new Array(h),v=0;v<h;v++)f[v]=r.Cartesian3.clone(m[v]);var b=t._shape;if(b=l.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(b),!(m.length<2||b.length<3)){g.PolygonPipeline.computeWindingOrder2D(b)===g.WindingOrder.CLOCKWISE&&b.reverse();var C=a.BoundingRectangle.fromPoints(b,R),P={};if(P.combinedPositions=l.PolylineVolumeGeometryLibrary.computePositions(f,b,C,t,!0),!r.Cartesian3.equals(t.enuCenter,r.Cartesian3.ZERO)){var E=new Array(h);for(v=0;v<h;v++)E[v]=r.Cartesian3.clone(m[v]);P.combinedLocalPositions=l.PolylineVolumeGeometryLibrary.computeLocalPositions(E,b,C,t,!0,t.enuCenter)}return function(t,n,a,r){var l=t.combinedPositions,s=t.combinedLocalPositions,m=new c.GeometryAttributes;r.position&&(m.position=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l}));var h,f,v,b,C,P,E=n.length,_=l.length/3,k=(_-2*E)/(2*E),L=g.PolygonPipeline.triangulate(n),V=(k-1)*E*6+2*L.length,F=d.IndexDatatype.createTypedArray(_,V),A=2*E,T=0;for(h=0;h<k-1;h++){for(f=0;f<E-1;f++)P=(v=2*f+h*E*2)+A,C=(b=v+1)+A,F[T++]=b,F[T++]=v,F[T++]=C,F[T++]=C,F[T++]=v,F[T++]=P;C=(b=1+(v=2*E-2+h*E*2))+A,P=v+A,F[T++]=b,F[T++]=v,F[T++]=C,F[T++]=C,F[T++]=v,F[T++]=P}if(r.st||r.tangent||r.bitangent){var G,D,x=new Float32Array(2*_),w=1/(k-1),R=1/a.height,O=a.height/2,S=0;for(h=0;h<k;h++){for(G=h*w,D=R*(n[0].y+O),x[S++]=G,x[S++]=D,f=1;f<E;f++)D=R*(n[f].y+O),x[S++]=G,x[S++]=D,x[S++]=G,x[S++]=D;D=R*(n[0].y+O),x[S++]=G,x[S++]=D}for(f=0;f<E;f++)G=0,D=R*(n[f].y+O),x[S++]=G,x[S++]=D;for(f=0;f<E;f++)G=(k-1)*w,D=R*(n[f].y+O),x[S++]=G,x[S++]=D;m.st=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(x)})}var B=_-2*E;for(h=0;h<L.length;h+=3){var I=L[h]+B,N=L[h+1]+B,U=L[h+2]+B;F[T++]=I,F[T++]=N,F[T++]=U,F[T++]=U+E,F[T++]=N+E,F[T++]=I+E}var W=new p.Geometry({attributes:m,indices:F,boundingSphere:i.BoundingSphere.fromVertices(l),primitiveType:i.PrimitiveType.TRIANGLES});if(r.normal&&(W=u.GeometryPipeline.computeNormal(W)),r.tangent||r.bitangent){try{W=u.GeometryPipeline.computeTangentAndBitangent(W)}catch(e){y.oneTimeWarning("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}r.tangent||(W.attributes.tangent=void 0),r.bitangent||(W.attributes.bitangent=void 0),r.st||(W.attributes.st=void 0)}return e.defined(s)&&(W.attributes.position.values=s,W.attributes.position.componentDatatype=o.ComponentDatatype.FLOAT),W}(P,b,C,t._vertexFormat)}},function(n,a){return e.defined(a)&&(n=G.unpack(n,a)),n._ellipsoid=t.Ellipsoid.clone(n._ellipsoid),G.createGeometry(n)}}));