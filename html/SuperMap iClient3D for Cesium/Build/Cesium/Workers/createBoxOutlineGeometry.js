define(["./arrayFill-4513d7ad","./PrimitiveType-108f83af","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./when-b60132fc","./GeometryAttribute-b20c1286","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./Cartesian2-47311507","./Math-119be1a3","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./FeatureDetection-c3b71206","./buildModuleUrl-3addfe33"],(function(e,t,a,n,i,r,u,o,m,s,f,c,d,l,p,b){"use strict";var y=new a.Cartesian3;function C(e){var t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).minimum,n=e.maximum;this._min=a.Cartesian3.clone(t),this._max=a.Cartesian3.clone(n),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}C.fromDimensions=function(e){var t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).dimensions,n=a.Cartesian3.multiplyByScalar(t,.5,new a.Cartesian3);return new C({minimum:a.Cartesian3.negate(n,new a.Cartesian3),maximum:n,offsetAttribute:e.offsetAttribute})},C.fromAxisAlignedBoundingBox=function(e){return new C({minimum:e.minimum,maximum:e.maximum})},C.packedLength=2*a.Cartesian3.packedLength+1,C.pack=function(e,t,n){return n=r.defaultValue(n,0),a.Cartesian3.pack(e._min,t,n),a.Cartesian3.pack(e._max,t,n+a.Cartesian3.packedLength),t[n+2*a.Cartesian3.packedLength]=r.defaultValue(e._offsetAttribute,-1),t};var A=new a.Cartesian3,x=new a.Cartesian3,_={minimum:A,maximum:x,offsetAttribute:void 0};return C.unpack=function(e,t,n){t=r.defaultValue(t,0);var i=a.Cartesian3.unpack(e,t,A),u=a.Cartesian3.unpack(e,t+a.Cartesian3.packedLength,x),o=e[t+2*a.Cartesian3.packedLength];return r.defined(n)?(n._min=a.Cartesian3.clone(i,n._min),n._max=a.Cartesian3.clone(u,n._max),n._offsetAttribute=-1===o?void 0:o,n):(_.offsetAttribute=-1===o?void 0:o,new C(_))},C.createGeometry=function(n){var s=n._min,f=n._max;if(!a.Cartesian3.equals(s,f)){var c=new o.GeometryAttributes,d=new Uint16Array(24),l=new Float64Array(24);l[0]=s.x,l[1]=s.y,l[2]=s.z,l[3]=f.x,l[4]=s.y,l[5]=s.z,l[6]=f.x,l[7]=f.y,l[8]=s.z,l[9]=s.x,l[10]=f.y,l[11]=s.z,l[12]=s.x,l[13]=s.y,l[14]=f.z,l[15]=f.x,l[16]=s.y,l[17]=f.z,l[18]=f.x,l[19]=f.y,l[20]=f.z,l[21]=s.x,l[22]=f.y,l[23]=f.z,c.position=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l}),d[0]=4,d[1]=5,d[2]=5,d[3]=6,d[4]=6,d[5]=7,d[6]=7,d[7]=4,d[8]=0,d[9]=1,d[10]=1,d[11]=2,d[12]=2,d[13]=3,d[14]=3,d[15]=0,d[16]=0,d[17]=4,d[18]=1,d[19]=5,d[20]=2,d[21]=6,d[22]=3,d[23]=7;var p=a.Cartesian3.subtract(f,s,y),b=.5*a.Cartesian3.magnitude(p);if(r.defined(n._offsetAttribute)){var C=l.length,A=new Uint8Array(C/3),x=n._offsetAttribute===m.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(A,x),c.applyOffset=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:A})}return new u.Geometry({attributes:c,indices:d,primitiveType:t.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(a.Cartesian3.ZERO,b),offsetAttribute:n._offsetAttribute})}},function(e,t){return r.defined(t)&&(e=C.unpack(e,t)),C.createGeometry(e)}}));