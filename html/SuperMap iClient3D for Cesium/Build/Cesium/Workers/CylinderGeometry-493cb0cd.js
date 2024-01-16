define(["exports","./arrayFill-4513d7ad","./PrimitiveType-108f83af","./Cartesian2-47311507","./Cartographic-3309dd0d","./ComponentDatatype-c140a87d","./CylinderGeometryLibrary-aa453214","./when-b60132fc","./Check-7b2a090c","./GeometryAttribute-b20c1286","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4","./Math-119be1a3","./VertexFormat-6446fca0"],(function(t,e,a,r,n,o,i,s,m,u,d,p,y,f,l){"use strict";var b=new r.Cartesian2,c=new n.Cartesian3,v=new n.Cartesian3,A=new n.Cartesian3,g=new n.Cartesian3;function h(t){var e=(t=s.defaultValue(t,s.defaultValue.EMPTY_OBJECT)).length,a=t.topRadius,r=t.bottomRadius,n=s.defaultValue(t.vertexFormat,l.VertexFormat.DEFAULT),o=s.defaultValue(t.slices,128);this._length=e,this._topRadius=a,this._bottomRadius=r,this._vertexFormat=l.VertexFormat.clone(n),this._slices=o,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}h.packedLength=l.VertexFormat.packedLength+5,h.pack=function(t,e,a){return a=s.defaultValue(a,0),l.VertexFormat.pack(t._vertexFormat,e,a),a+=l.VertexFormat.packedLength,e[a++]=t._length,e[a++]=t._topRadius,e[a++]=t._bottomRadius,e[a++]=t._slices,e[a]=s.defaultValue(t._offsetAttribute,-1),e};var x,_=new l.VertexFormat,C={vertexFormat:_,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};h.unpack=function(t,e,a){e=s.defaultValue(e,0);var r=l.VertexFormat.unpack(t,e,_);e+=l.VertexFormat.packedLength;var n=t[e++],o=t[e++],i=t[e++],m=t[e++],u=t[e];return s.defined(a)?(a._vertexFormat=l.VertexFormat.clone(r,a._vertexFormat),a._length=n,a._topRadius=o,a._bottomRadius=i,a._slices=m,a._offsetAttribute=-1===u?void 0:u,a):(C.length=n,C.topRadius=o,C.bottomRadius=i,C.slices=m,C.offsetAttribute=-1===u?void 0:u,new h(C))},h.createGeometry=function(t){var m=t._length,l=t._topRadius,h=t._bottomRadius,x=t._vertexFormat,_=t._slices;if(!(m<=0||l<0||h<0||0===l&&0===h)){var C,F=_+_,w=_+F,G=F+F,D=i.CylinderGeometryLibrary.computePositions(m,l,h,_,!0),R=x.st?new Float32Array(2*G):void 0,V=x.normal?new Float32Array(3*G):void 0,T=x.tangent?new Float32Array(3*G):void 0,O=x.bitangent?new Float32Array(3*G):void 0,L=x.normal||x.tangent||x.bitangent;if(L){var P=x.tangent||x.bitangent,k=0,M=0,z=0,E=Math.atan2(h-l,m),N=c;N.z=Math.sin(E);var I=Math.cos(E),U=A,S=v;for(C=0;C<_;C++){var B=C/_*f.CesiumMath.TWO_PI,Y=I*Math.cos(B),Z=I*Math.sin(B);L&&(N.x=Y,N.y=Z,P&&(U=n.Cartesian3.normalize(n.Cartesian3.cross(n.Cartesian3.UNIT_Z,N,U),U)),x.normal&&(V[k++]=N.x,V[k++]=N.y,V[k++]=N.z,V[k++]=N.x,V[k++]=N.y,V[k++]=N.z),x.tangent&&(T[M++]=U.x,T[M++]=U.y,T[M++]=U.z,T[M++]=U.x,T[M++]=U.y,T[M++]=U.z),x.bitangent&&(S=n.Cartesian3.normalize(n.Cartesian3.cross(N,U,S),S),O[z++]=S.x,O[z++]=S.y,O[z++]=S.z,O[z++]=S.x,O[z++]=S.y,O[z++]=S.z))}for(C=0;C<_;C++)x.normal&&(V[k++]=0,V[k++]=0,V[k++]=-1),x.tangent&&(T[M++]=1,T[M++]=0,T[M++]=0),x.bitangent&&(O[z++]=0,O[z++]=-1,O[z++]=0);for(C=0;C<_;C++)x.normal&&(V[k++]=0,V[k++]=0,V[k++]=1),x.tangent&&(T[M++]=1,T[M++]=0,T[M++]=0),x.bitangent&&(O[z++]=0,O[z++]=1,O[z++]=0)}var J=12*_-12,W=y.IndexDatatype.createTypedArray(G,J),j=0,q=0;for(C=0;C<_-1;C++)W[j++]=q,W[j++]=q+2,W[j++]=q+3,W[j++]=q,W[j++]=q+3,W[j++]=q+1,q+=2;for(W[j++]=F-2,W[j++]=0,W[j++]=1,W[j++]=F-2,W[j++]=1,W[j++]=F-1,C=1;C<_-1;C++)W[j++]=F+C+1,W[j++]=F+C,W[j++]=F;for(C=1;C<_-1;C++)W[j++]=w,W[j++]=w+C,W[j++]=w+C+1;var H=0;if(x.st){var K=Math.max(l,h);for(C=0;C<G;C++){var Q=n.Cartesian3.fromArray(D,3*C,g);R[H++]=(Q.x+K)/(2*K),R[H++]=(Q.y+K)/(2*K)}}var X=new d.GeometryAttributes;x.position&&(X.position=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:D})),x.normal&&(X.normal=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),x.tangent&&(X.tangent=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),x.bitangent&&(X.bitangent=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),x.st&&(X.st=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:R})),b.x=.5*m,b.y=Math.max(h,l);var $=new a.BoundingSphere(n.Cartesian3.ZERO,r.Cartesian2.magnitude(b));if(s.defined(t._offsetAttribute)){m=D.length;var tt=new Uint8Array(m/3),et=t._offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(tt,et),X.applyOffset=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:tt})}return new u.Geometry({attributes:X,indices:W,primitiveType:a.PrimitiveType.TRIANGLES,boundingSphere:$,offsetAttribute:t._offsetAttribute})}},h.getUnitCylinder=function(){return s.defined(x)||(x=h.createGeometry(new h({topRadius:1,bottomRadius:1,length:1,vertexFormat:l.VertexFormat.POSITION_ONLY}))),x},t.CylinderGeometry=h}));
