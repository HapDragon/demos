define(["./arrayFill-4513d7ad","./buildModuleUrl-9a89655b","./Cartesian4-69ef58e5","./Check-7b2a090c","./FeatureDetection-ab6f364c","./when-b60132fc","./GeometryAttribute-f3b3c776","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./PrimitiveType-ebb8c588","./Cartographic-00721f3e","./Math-119be1a3","./Cartesian2-99e64452","./WebGLConstants-aba9fc67","./Transforms-f4127659"],(function(e,t,a,n,i,r,u,m,o,s,f,c,b,l,d){"use strict";var p=new a.Cartesian3;function y(e){var t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).minimum,n=e.maximum;this._min=a.Cartesian3.clone(t),this._max=a.Cartesian3.clone(n),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}y.fromDimensions=function(e){var t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).dimensions,n=a.Cartesian3.multiplyByScalar(t,.5,new a.Cartesian3);return new y({minimum:a.Cartesian3.negate(n,new a.Cartesian3),maximum:n,offsetAttribute:e.offsetAttribute})},y.fromAxisAlignedBoundingBox=function(e){return new y({minimum:e.minimum,maximum:e.maximum})},y.packedLength=2*a.Cartesian3.packedLength+1,y.pack=function(e,t,n){return n=r.defaultValue(n,0),a.Cartesian3.pack(e._min,t,n),a.Cartesian3.pack(e._max,t,n+a.Cartesian3.packedLength),t[n+2*a.Cartesian3.packedLength]=r.defaultValue(e._offsetAttribute,-1),t};var C=new a.Cartesian3,A=new a.Cartesian3,x={minimum:C,maximum:A,offsetAttribute:void 0};return y.unpack=function(e,t,n){t=r.defaultValue(t,0);var i=a.Cartesian3.unpack(e,t,C),u=a.Cartesian3.unpack(e,t+a.Cartesian3.packedLength,A),m=e[t+2*a.Cartesian3.packedLength];return r.defined(n)?(n._min=a.Cartesian3.clone(i,n._min),n._max=a.Cartesian3.clone(u,n._max),n._offsetAttribute=-1===m?void 0:m,n):(x.offsetAttribute=-1===m?void 0:m,new y(x))},y.createGeometry=function(n){var f=n._min,c=n._max;if(!a.Cartesian3.equals(f,c)){var b=new m.GeometryAttributes,l=new Uint16Array(24),d=new Float64Array(24);d[0]=f.x,d[1]=f.y,d[2]=f.z,d[3]=c.x,d[4]=f.y,d[5]=f.z,d[6]=c.x,d[7]=c.y,d[8]=f.z,d[9]=f.x,d[10]=c.y,d[11]=f.z,d[12]=f.x,d[13]=f.y,d[14]=c.z,d[15]=c.x,d[16]=f.y,d[17]=c.z,d[18]=c.x,d[19]=c.y,d[20]=c.z,d[21]=f.x,d[22]=c.y,d[23]=c.z,b.position=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d}),l[0]=4,l[1]=5,l[2]=5,l[3]=6,l[4]=6,l[5]=7,l[6]=7,l[7]=4,l[8]=0,l[9]=1,l[10]=1,l[11]=2,l[12]=2,l[13]=3,l[14]=3,l[15]=0,l[16]=0,l[17]=4,l[18]=1,l[19]=5,l[20]=2,l[21]=6,l[22]=3,l[23]=7;var y=a.Cartesian3.subtract(c,f,p),C=.5*a.Cartesian3.magnitude(y);if(r.defined(n._offsetAttribute)){var A=d.length,x=new Uint8Array(A/3),_=n._offsetAttribute===o.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(x,_),b.applyOffset=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:x})}return new u.Geometry({attributes:b,indices:l,primitiveType:s.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(a.Cartesian3.ZERO,C),offsetAttribute:n._offsetAttribute})}},function(e,t){return r.defined(t)&&(e=y.unpack(e,t)),y.createGeometry(e)}}));