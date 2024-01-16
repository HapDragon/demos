define(["./arrayFill-4513d7ad","./arrayRemoveDuplicates-d2f048c5","./PrimitiveType-108f83af","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./PolylineVolumeGeometryLibrary-4a7c15e7","./CorridorGeometryLibrary-882a6a8d","./when-b60132fc","./Cartesian2-47311507","./GeometryAttribute-b20c1286","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4","./Math-119be1a3","./PolygonPipeline-03d66105","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./EllipsoidTangentPlane-806cff3c","./IntersectionTests-6eb562ca","./Plane-e2d409ef","./PolylinePipeline-145ba528","./EllipsoidGeodesic-0f19ac62","./EllipsoidRhumbLine-ed1a6bf4","./FeatureDetection-c3b71206","./buildModuleUrl-3addfe33","./earcut-2.2.1-20c8012f"],(function(e,t,i,r,a,o,n,s,l,d,u,p,f,h,y,c,g,b,m,v,A,_,C,E,G,P,T,w){"use strict";var L=new r.Cartesian3,D=new r.Cartesian3,k=new r.Cartesian3;function N(e,t){var i,a,d,f=[],y=e.positions,c=e.corners,g=e.endPositions,b=new p.GeometryAttributes,m=0,v=0,A=0;for(a=0;a<y.length;a+=2)m+=d=y[a].length-3,A+=d/3*4,v+=y[a+1].length-3;for(m+=3,v+=3,a=0;a<c.length;a++){i=c[a];var _=c[a].leftPositions;l.defined(_)?(m+=d=_.length,A+=d/3*2):(v+=d=c[a].rightPositions.length,A+=d/3*2)}var C,E=l.defined(g);E&&(m+=C=g[0].length-3,v+=C,A+=4*(C/=3));var G,P,T,w,N,O,V=m+v,x=new Float64Array(V),H=0,I=V-1,M=C/2,S=h.IndexDatatype.createTypedArray(V/3,A+4),R=0;if(S[R++]=H/3,S[R++]=(I-2)/3,E){f.push(H/3),O=L,N=D;var F=g[0];for(a=0;a<M;a++)O=r.Cartesian3.fromArray(F,3*(M-1-a),O),N=r.Cartesian3.fromArray(F,3*(M+a),N),s.CorridorGeometryLibrary.addAttribute(x,N,H),s.CorridorGeometryLibrary.addAttribute(x,O,void 0,I),w=(P=H/3)+1,T=(G=(I-2)/3)-1,S[R++]=G,S[R++]=T,S[R++]=P,S[R++]=w,H+=3,I-=3}var U=0,B=y[U++],Y=y[U++];for(x.set(B,H),x.set(Y,I-Y.length+1),d=Y.length-3,f.push(H/3,(I-2)/3),a=0;a<d;a+=3)w=(P=H/3)+1,T=(G=(I-2)/3)-1,S[R++]=G,S[R++]=T,S[R++]=P,S[R++]=w,H+=3,I-=3;for(a=0;a<c.length;a++){var q,W,J=(i=c[a]).leftPositions,j=i.rightPositions,z=k;if(l.defined(J)){for(I-=3,W=T,f.push(w),q=0;q<J.length/3;q++)z=r.Cartesian3.fromArray(J,3*q,z),S[R++]=W-q-1,S[R++]=W-q,s.CorridorGeometryLibrary.addAttribute(x,z,void 0,I),I-=3;f.push(W-Math.floor(J.length/6)),t===n.CornerType.BEVELED&&f.push((I-2)/3+1),H+=3}else{for(H+=3,W=w,f.push(T),q=0;q<j.length/3;q++)z=r.Cartesian3.fromArray(j,3*q,z),S[R++]=W+q,S[R++]=W+q+1,s.CorridorGeometryLibrary.addAttribute(x,z,H),H+=3;f.push(W+Math.floor(j.length/6)),t===n.CornerType.BEVELED&&f.push(H/3-1),I-=3}for(B=y[U++],Y=y[U++],B.splice(0,3),Y.splice(Y.length-3,3),x.set(B,H),x.set(Y,I-Y.length+1),d=Y.length-3,q=0;q<Y.length;q+=3)P=(w=H/3)-1,G=(T=(I-2)/3)+1,S[R++]=G,S[R++]=T,S[R++]=P,S[R++]=w,H+=3,I-=3;H-=3,I+=3,f.push(H/3,(I-2)/3)}if(E){H+=3,I-=3,O=L,N=D;var K=g[1];for(a=0;a<M;a++)O=r.Cartesian3.fromArray(K,3*(C-a-1),O),N=r.Cartesian3.fromArray(K,3*a,N),s.CorridorGeometryLibrary.addAttribute(x,O,void 0,I),s.CorridorGeometryLibrary.addAttribute(x,N,H),P=(w=H/3)-1,G=(T=(I-2)/3)+1,S[R++]=G,S[R++]=T,S[R++]=P,S[R++]=w,H+=3,I-=3;f.push(H/3)}else f.push(H/3,(I-2)/3);return S[R++]=H/3,S[R++]=(I-2)/3,b.position=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:x}),{attributes:b,indices:S,wallIndices:f}}function O(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions,i=e.width,a=l.defaultValue(e.height,0),o=l.defaultValue(e.extrudedHeight,a);this._positions=t,this._ellipsoid=d.Ellipsoid.clone(l.defaultValue(e.ellipsoid,d.Ellipsoid.WGS84)),this._width=i,this._height=Math.max(a,o),this._extrudedHeight=Math.min(a,o),this._cornerType=l.defaultValue(e.cornerType,n.CornerType.ROUNDED),this._granularity=l.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),this._offsetAttribute=e.offsetAttribute,this._workerName="createCorridorOutlineGeometry",this.packedLength=1+t.length*r.Cartesian3.packedLength+d.Ellipsoid.packedLength+6}O.pack=function(e,t,i){i=l.defaultValue(i,0);var a=e._positions,o=a.length;t[i++]=o;for(var n=0;n<o;++n,i+=r.Cartesian3.packedLength)r.Cartesian3.pack(a[n],t,i);return d.Ellipsoid.pack(e._ellipsoid,t,i),i+=d.Ellipsoid.packedLength,t[i++]=e._width,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._cornerType,t[i++]=e._granularity,t[i]=l.defaultValue(e._offsetAttribute,-1),t};var V=d.Ellipsoid.clone(d.Ellipsoid.UNIT_SPHERE),x={positions:void 0,ellipsoid:V,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,offsetAttribute:void 0};return O.unpack=function(e,t,i){t=l.defaultValue(t,0);for(var a=e[t++],o=new Array(a),n=0;n<a;++n,t+=r.Cartesian3.packedLength)o[n]=r.Cartesian3.unpack(e,t);var s=d.Ellipsoid.unpack(e,t,V);t+=d.Ellipsoid.packedLength;var u=e[t++],p=e[t++],f=e[t++],h=e[t++],y=e[t++],c=e[t];return l.defined(i)?(i._positions=o,i._ellipsoid=d.Ellipsoid.clone(s,i._ellipsoid),i._width=u,i._height=p,i._extrudedHeight=f,i._cornerType=h,i._granularity=y,i._offsetAttribute=-1===c?void 0:c,i):(x.positions=o,x.width=u,x.height=p,x.extrudedHeight=f,x.cornerType=h,x.granularity=y,x.offsetAttribute=-1===c?void 0:c,new O(x))},O.createGeometry=function(a){var n=a._positions,d=a._width,p=a._ellipsoid;n=function(e,t){for(var i=0;i<e.length;i++)e[i]=t.scaleToGeodeticSurface(e[i],e[i]);return e}(n,p);var g=t.arrayRemoveDuplicates(n,r.Cartesian3.equalsEpsilon);if(!(g.length<2||d<=0)){var b,m=a._height,v=a._extrudedHeight,A=!y.CesiumMath.equalsEpsilon(m,v,0,y.CesiumMath.EPSILON2),_={ellipsoid:p,positions:g,width:d,cornerType:a._cornerType,granularity:a._granularity,saveAttributes:!1};if(A)_.height=m,_.extrudedHeight=v,_.offsetAttribute=a._offsetAttribute,b=function(t){var i=t.ellipsoid,r=N(s.CorridorGeometryLibrary.computePositions(t),t.cornerType),a=r.wallIndices,n=t.height,d=t.extrudedHeight,p=r.attributes,y=r.indices,g=p.position.values,b=g.length,m=new Float64Array(b);m.set(g);var v,A=new Float64Array(2*b);if(g=c.PolygonPipeline.scaleToGeodeticHeight(g,n,i),m=c.PolygonPipeline.scaleToGeodeticHeight(m,d,i),A.set(g),A.set(m,b),p.position.values=A,b/=3,l.defined(t.offsetAttribute)){var _=new Uint8Array(2*b);if(t.offsetAttribute===f.GeometryOffsetAttribute.TOP)_=e.arrayFill(_,1,0,b);else{var C=t.offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1;_=e.arrayFill(_,C)}p.applyOffset=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:_})}var E=y.length,G=h.IndexDatatype.createTypedArray(A.length/3,2*(E+a.length));G.set(y);var P,T,w=E;for(v=0;v<E;v+=2){var L=y[v],D=y[v+1];G[w++]=L+b,G[w++]=D+b}for(v=0;v<a.length;v++)T=(P=a[v])+b,G[w++]=P,G[w++]=T;return{attributes:p,indices:G}}(_);else if((b=N(s.CorridorGeometryLibrary.computePositions(_),_.cornerType)).attributes.position.values=c.PolygonPipeline.scaleToGeodeticHeight(b.attributes.position.values,m,p),l.defined(a._offsetAttribute)){var C=b.attributes.position.values.length,E=new Uint8Array(C/3),G=a._offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(E,G),b.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:E})}var P=b.attributes,T=i.BoundingSphere.fromVertices(P.position.values,void 0,3);return new u.Geometry({attributes:P,indices:b.indices,primitiveType:i.PrimitiveType.LINES,boundingSphere:T,offsetAttribute:a._offsetAttribute})}},function(e,t){return l.defined(t)&&(e=O.unpack(e,t)),e._ellipsoid=d.Ellipsoid.clone(e._ellipsoid),O.createGeometry(e)}}));
