define(["./arrayFill-4513d7ad","./buildModuleUrl-9a89655b","./Cartesian4-69ef58e5","./Check-7b2a090c","./FeatureDetection-ab6f364c","./when-b60132fc","./GeometryAttribute-f3b3c776","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./PrimitiveType-ebb8c588","./VertexFormat-6446fca0","./Cartographic-00721f3e","./Math-119be1a3","./Cartesian2-99e64452","./WebGLConstants-aba9fc67","./Transforms-f4127659"],(function(e,t,a,n,r,i,o,m,u,s,y,f,p,c,x,l){"use strict";var b=new a.Cartesian3;function A(e){var t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).minimum,n=e.maximum,r=i.defaultValue(e.vertexFormat,y.VertexFormat.DEFAULT);this._minimum=a.Cartesian3.clone(t),this._maximum=a.Cartesian3.clone(n),this._vertexFormat=r,this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxGeometry"}A.fromDimensions=function(e){var t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).dimensions,n=a.Cartesian3.multiplyByScalar(t,.5,new a.Cartesian3);return new A({minimum:a.Cartesian3.negate(n,new a.Cartesian3),maximum:n,vertexFormat:e.vertexFormat,offsetAttribute:e.offsetAttribute})},A.fromAxisAlignedBoundingBox=function(e){return new A({minimum:e.minimum,maximum:e.maximum})},A.packedLength=2*a.Cartesian3.packedLength+y.VertexFormat.packedLength+1,A.pack=function(e,t,n){return n=i.defaultValue(n,0),a.Cartesian3.pack(e._minimum,t,n),a.Cartesian3.pack(e._maximum,t,n+a.Cartesian3.packedLength),y.VertexFormat.pack(e._vertexFormat,t,n+2*a.Cartesian3.packedLength),t[n+2*a.Cartesian3.packedLength+y.VertexFormat.packedLength]=i.defaultValue(e._offsetAttribute,-1),t};var d,C=new a.Cartesian3,v=new a.Cartesian3,F=new y.VertexFormat,z={minimum:C,maximum:v,vertexFormat:F,offsetAttribute:void 0};return A.unpack=function(e,t,n){t=i.defaultValue(t,0);var r=a.Cartesian3.unpack(e,t,C),o=a.Cartesian3.unpack(e,t+a.Cartesian3.packedLength,v),m=y.VertexFormat.unpack(e,t+2*a.Cartesian3.packedLength,F),u=e[t+2*a.Cartesian3.packedLength+y.VertexFormat.packedLength];return i.defined(n)?(n._minimum=a.Cartesian3.clone(r,n._minimum),n._maximum=a.Cartesian3.clone(o,n._maximum),n._vertexFormat=y.VertexFormat.clone(m,n._vertexFormat),n._offsetAttribute=-1===u?void 0:u,n):(z.offsetAttribute=-1===u?void 0:u,new A(z))},A.createGeometry=function(n){var y=n._minimum,f=n._maximum,p=n._vertexFormat;if(!a.Cartesian3.equals(y,f)){var c,x,l=new m.GeometryAttributes;if(p.position&&(p.st||p.normal||p.tangent||p.bitangent)){if(p.position&&((x=new Float64Array(72))[0]=y.x,x[1]=y.y,x[2]=f.z,x[3]=f.x,x[4]=y.y,x[5]=f.z,x[6]=f.x,x[7]=f.y,x[8]=f.z,x[9]=y.x,x[10]=f.y,x[11]=f.z,x[12]=y.x,x[13]=y.y,x[14]=y.z,x[15]=f.x,x[16]=y.y,x[17]=y.z,x[18]=f.x,x[19]=f.y,x[20]=y.z,x[21]=y.x,x[22]=f.y,x[23]=y.z,x[24]=f.x,x[25]=y.y,x[26]=y.z,x[27]=f.x,x[28]=f.y,x[29]=y.z,x[30]=f.x,x[31]=f.y,x[32]=f.z,x[33]=f.x,x[34]=y.y,x[35]=f.z,x[36]=y.x,x[37]=y.y,x[38]=y.z,x[39]=y.x,x[40]=f.y,x[41]=y.z,x[42]=y.x,x[43]=f.y,x[44]=f.z,x[45]=y.x,x[46]=y.y,x[47]=f.z,x[48]=y.x,x[49]=f.y,x[50]=y.z,x[51]=f.x,x[52]=f.y,x[53]=y.z,x[54]=f.x,x[55]=f.y,x[56]=f.z,x[57]=y.x,x[58]=f.y,x[59]=f.z,x[60]=y.x,x[61]=y.y,x[62]=y.z,x[63]=f.x,x[64]=y.y,x[65]=y.z,x[66]=f.x,x[67]=y.y,x[68]=f.z,x[69]=y.x,x[70]=y.y,x[71]=f.z,l.position=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:x})),p.normal){var A=new Float32Array(72);A[0]=0,A[1]=0,A[2]=1,A[3]=0,A[4]=0,A[5]=1,A[6]=0,A[7]=0,A[8]=1,A[9]=0,A[10]=0,A[11]=1,A[12]=0,A[13]=0,A[14]=-1,A[15]=0,A[16]=0,A[17]=-1,A[18]=0,A[19]=0,A[20]=-1,A[21]=0,A[22]=0,A[23]=-1,A[24]=1,A[25]=0,A[26]=0,A[27]=1,A[28]=0,A[29]=0,A[30]=1,A[31]=0,A[32]=0,A[33]=1,A[34]=0,A[35]=0,A[36]=-1,A[37]=0,A[38]=0,A[39]=-1,A[40]=0,A[41]=0,A[42]=-1,A[43]=0,A[44]=0,A[45]=-1,A[46]=0,A[47]=0,A[48]=0,A[49]=1,A[50]=0,A[51]=0,A[52]=1,A[53]=0,A[54]=0,A[55]=1,A[56]=0,A[57]=0,A[58]=1,A[59]=0,A[60]=0,A[61]=-1,A[62]=0,A[63]=0,A[64]=-1,A[65]=0,A[66]=0,A[67]=-1,A[68]=0,A[69]=0,A[70]=-1,A[71]=0,l.normal=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A})}if(p.st){var d=new Float32Array(72),C=0;d[C++]=0,d[C++]=0,d[C++]=-1,d[C++]=1,d[C++]=0,d[C++]=-1,d[C++]=1,d[C++]=1,d[C++]=-1,d[C++]=0,d[C++]=1,d[C++]=-1,d[C++]=1,d[C++]=0,d[C++]=-1,d[C++]=0,d[C++]=0,d[C++]=-1,d[C++]=0,d[C++]=1,d[C++]=-1,d[C++]=1,d[C++]=1,d[C++]=-1,d[C++]=0,d[C++]=0,d[C++]=0,d[C++]=1,d[C++]=0,d[C++]=0,d[C++]=1,d[C++]=1,d[C++]=0,d[C++]=0,d[C++]=1,d[C++]=0,d[C++]=1,d[C++]=0,d[C++]=0,d[C++]=0,d[C++]=0,d[C++]=0,d[C++]=0,d[C++]=1,d[C++]=0,d[C++]=1,d[C++]=1,d[C++]=0,d[C++]=1,d[C++]=0,d[C++]=1,d[C++]=0,d[C++]=0,d[C++]=1,d[C++]=0,d[C++]=1,d[C++]=1,d[C++]=1,d[C++]=1,d[C++]=1,d[C++]=0,d[C++]=0,d[C++]=1,d[C++]=1,d[C++]=0,d[C++]=1,d[C++]=1,d[C++]=1,d[C++]=1,d[C++]=0,d[C++]=1,d[C++]=1,l.st=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})}if(p.tangent){var v=new Float32Array(72);v[0]=1,v[1]=0,v[2]=0,v[3]=1,v[4]=0,v[5]=0,v[6]=1,v[7]=0,v[8]=0,v[9]=1,v[10]=0,v[11]=0,v[12]=-1,v[13]=0,v[14]=0,v[15]=-1,v[16]=0,v[17]=0,v[18]=-1,v[19]=0,v[20]=0,v[21]=-1,v[22]=0,v[23]=0,v[24]=0,v[25]=1,v[26]=0,v[27]=0,v[28]=1,v[29]=0,v[30]=0,v[31]=1,v[32]=0,v[33]=0,v[34]=1,v[35]=0,v[36]=0,v[37]=-1,v[38]=0,v[39]=0,v[40]=-1,v[41]=0,v[42]=0,v[43]=-1,v[44]=0,v[45]=0,v[46]=-1,v[47]=0,v[48]=-1,v[49]=0,v[50]=0,v[51]=-1,v[52]=0,v[53]=0,v[54]=-1,v[55]=0,v[56]=0,v[57]=-1,v[58]=0,v[59]=0,v[60]=1,v[61]=0,v[62]=0,v[63]=1,v[64]=0,v[65]=0,v[66]=1,v[67]=0,v[68]=0,v[69]=1,v[70]=0,v[71]=0,l.tangent=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})}if(p.bitangent){var F=new Float32Array(72);F[0]=0,F[1]=1,F[2]=0,F[3]=0,F[4]=1,F[5]=0,F[6]=0,F[7]=1,F[8]=0,F[9]=0,F[10]=1,F[11]=0,F[12]=0,F[13]=1,F[14]=0,F[15]=0,F[16]=1,F[17]=0,F[18]=0,F[19]=1,F[20]=0,F[21]=0,F[22]=1,F[23]=0,F[24]=0,F[25]=0,F[26]=1,F[27]=0,F[28]=0,F[29]=1,F[30]=0,F[31]=0,F[32]=1,F[33]=0,F[34]=0,F[35]=1,F[36]=0,F[37]=0,F[38]=1,F[39]=0,F[40]=0,F[41]=1,F[42]=0,F[43]=0,F[44]=1,F[45]=0,F[46]=0,F[47]=1,F[48]=0,F[49]=0,F[50]=1,F[51]=0,F[52]=0,F[53]=1,F[54]=0,F[55]=0,F[56]=1,F[57]=0,F[58]=0,F[59]=1,F[60]=0,F[61]=0,F[62]=1,F[63]=0,F[64]=0,F[65]=1,F[66]=0,F[67]=0,F[68]=1,F[69]=0,F[70]=0,F[71]=1,l.bitangent=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:F})}(c=new Uint16Array(36))[0]=0,c[1]=1,c[2]=2,c[3]=0,c[4]=2,c[5]=3,c[6]=6,c[7]=5,c[8]=4,c[9]=7,c[10]=6,c[11]=4,c[12]=8,c[13]=9,c[14]=10,c[15]=8,c[16]=10,c[17]=11,c[18]=14,c[19]=13,c[20]=12,c[21]=15,c[22]=14,c[23]=12,c[24]=18,c[25]=17,c[26]=16,c[27]=19,c[28]=18,c[29]=16,c[30]=20,c[31]=21,c[32]=22,c[33]=20,c[34]=22,c[35]=23}else(x=new Float64Array(24))[0]=y.x,x[1]=y.y,x[2]=y.z,x[3]=f.x,x[4]=y.y,x[5]=y.z,x[6]=f.x,x[7]=f.y,x[8]=y.z,x[9]=y.x,x[10]=f.y,x[11]=y.z,x[12]=y.x,x[13]=y.y,x[14]=f.z,x[15]=f.x,x[16]=y.y,x[17]=f.z,x[18]=f.x,x[19]=f.y,x[20]=f.z,x[21]=y.x,x[22]=f.y,x[23]=f.z,l.position=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:x}),(c=new Uint16Array(36))[0]=4,c[1]=5,c[2]=6,c[3]=4,c[4]=6,c[5]=7,c[6]=1,c[7]=0,c[8]=3,c[9]=1,c[10]=3,c[11]=2,c[12]=1,c[13]=6,c[14]=5,c[15]=1,c[16]=2,c[17]=6,c[18]=2,c[19]=3,c[20]=7,c[21]=2,c[22]=7,c[23]=6,c[24]=3,c[25]=0,c[26]=4,c[27]=3,c[28]=4,c[29]=7,c[30]=0,c[31]=1,c[32]=5,c[33]=0,c[34]=5,c[35]=4;var z=a.Cartesian3.subtract(f,y,b),w=.5*a.Cartesian3.magnitude(z);if(i.defined(n._offsetAttribute)){var g=x.length,_=new Uint8Array(g/3),h=n._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(_,h),l.applyOffset=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:_})}return new o.Geometry({attributes:l,indices:c,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:new t.BoundingSphere(a.Cartesian3.ZERO,w),offsetAttribute:n._offsetAttribute})}},A.getUnitBox=function(){return i.defined(d)||(d=A.createGeometry(A.fromDimensions({dimensions:new a.Cartesian3(1,1,1),vertexFormat:y.VertexFormat.POSITION_ONLY}))),d},function(e,t){return i.defined(t)&&(e=A.unpack(e,t)),A.createGeometry(e)}}));
