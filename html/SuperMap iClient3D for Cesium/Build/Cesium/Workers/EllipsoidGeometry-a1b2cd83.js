define(["exports","./arrayFill-4513d7ad","./PrimitiveType-108f83af","./Cartesian2-47311507","./Cartographic-3309dd0d","./ComponentDatatype-c140a87d","./when-b60132fc","./Check-7b2a090c","./GeometryAttribute-b20c1286","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4","./Math-119be1a3","./VertexFormat-6446fca0"],(function(t,e,a,i,r,n,o,m,s,u,l,f,c,d){"use strict";var C=new r.Cartesian3,p=new r.Cartesian3,y=new r.Cartesian3,_=new r.Cartesian3,v=new r.Cartesian3,h=new r.Cartesian3(1,1,1),A=Math.cos,x=Math.sin;function b(t){t=o.defaultValue(t,o.defaultValue.EMPTY_OBJECT);var e=o.defaultValue(t.radii,h),a=o.defaultValue(t.innerRadii,e),i=o.defaultValue(t.minimumClock,0),n=o.defaultValue(t.maximumClock,c.CesiumMath.TWO_PI),m=o.defaultValue(t.minimumCone,0),s=o.defaultValue(t.maximumCone,c.CesiumMath.PI),u=Math.round(o.defaultValue(t.stackPartitions,64)),l=Math.round(o.defaultValue(t.slicePartitions,64)),f=o.defaultValue(t.vertexFormat,d.VertexFormat.DEFAULT);this._radii=r.Cartesian3.clone(e),this._innerRadii=r.Cartesian3.clone(a),this._minimumClock=i,this._maximumClock=n,this._minimumCone=m,this._maximumCone=s,this._stackPartitions=u,this._slicePartitions=l,this._vertexFormat=d.VertexFormat.clone(f),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}b.packedLength=2*r.Cartesian3.packedLength+d.VertexFormat.packedLength+7,b.pack=function(t,e,a){return a=o.defaultValue(a,0),r.Cartesian3.pack(t._radii,e,a),a+=r.Cartesian3.packedLength,r.Cartesian3.pack(t._innerRadii,e,a),a+=r.Cartesian3.packedLength,d.VertexFormat.pack(t._vertexFormat,e,a),a+=d.VertexFormat.packedLength,e[a++]=t._minimumClock,e[a++]=t._maximumClock,e[a++]=t._minimumCone,e[a++]=t._maximumCone,e[a++]=t._stackPartitions,e[a++]=t._slicePartitions,e[a]=o.defaultValue(t._offsetAttribute,-1),e};var k,w=new r.Cartesian3,F=new r.Cartesian3,P=new d.VertexFormat,g={radii:w,innerRadii:F,vertexFormat:P,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};b.unpack=function(t,e,a){e=o.defaultValue(e,0);var i=r.Cartesian3.unpack(t,e,w);e+=r.Cartesian3.packedLength;var n=r.Cartesian3.unpack(t,e,F);e+=r.Cartesian3.packedLength;var m=d.VertexFormat.unpack(t,e,P);e+=d.VertexFormat.packedLength;var s=t[e++],u=t[e++],l=t[e++],f=t[e++],c=t[e++],C=t[e++],p=t[e];return o.defined(a)?(a._radii=r.Cartesian3.clone(i,a._radii),a._innerRadii=r.Cartesian3.clone(n,a._innerRadii),a._vertexFormat=d.VertexFormat.clone(m,a._vertexFormat),a._minimumClock=s,a._maximumClock=u,a._minimumCone=l,a._maximumCone=f,a._stackPartitions=c,a._slicePartitions=C,a._offsetAttribute=-1===p?void 0:p,a):(g.minimumClock=s,g.maximumClock=u,g.minimumCone=l,g.maximumCone=f,g.stackPartitions=c,g.slicePartitions=C,g.offsetAttribute=-1===p?void 0:p,new b(g))},b.createGeometry=function(t){var m=t._radii;if(!(m.x<=0||m.y<=0||m.z<=0)){var d=t._innerRadii;if(!(d.x<=0||d.y<=0||d.z<=0)){var h,b,k=t._minimumClock,w=t._maximumClock,F=t._minimumCone,P=t._maximumCone,g=t._vertexFormat,V=t._slicePartitions+1,M=t._stackPartitions+1;(V=Math.round(V*Math.abs(w-k)/c.CesiumMath.TWO_PI))<2&&(V=2),(M=Math.round(M*Math.abs(P-F)/c.CesiumMath.PI))<2&&(M=2);var T=0,D=[F],G=[k];for(h=0;h<M;h++)D.push(F+h*(P-F)/(M-1));for(D.push(P),b=0;b<V;b++)G.push(k+b*(w-k)/(V-1));G.push(w);var L=D.length,O=G.length,I=0,E=1,z=d.x!==m.x||d.y!==m.y||d.z!==m.z,N=!1,R=!1,U=!1;z&&(E=2,F>0&&(N=!0,I+=V-1),P<Math.PI&&(R=!0,I+=V-1),(w-k)%c.CesiumMath.TWO_PI?(U=!0,I+=2*(M-1)+1):I+=1);var S=O*L*E,B=new Float64Array(3*S),W=e.arrayFill(new Array(S),!1),Y=e.arrayFill(new Array(S),!1),J=V*M*E,X=6*(J+I+1-(V+M)*E),Z=f.IndexDatatype.createTypedArray(J,X),j=g.normal?new Float32Array(3*S):void 0,q=g.tangent?new Float32Array(3*S):void 0,H=g.bitangent?new Float32Array(3*S):void 0,K=g.st?new Float32Array(2*S):void 0,Q=new Array(L),$=new Array(L);for(h=0;h<L;h++)Q[h]=x(D[h]),$[h]=A(D[h]);var tt=new Array(O),et=new Array(O);for(b=0;b<O;b++)et[b]=A(G[b]),tt[b]=x(G[b]);for(h=0;h<L;h++)for(b=0;b<O;b++)B[T++]=m.x*Q[h]*et[b],B[T++]=m.y*Q[h]*tt[b],B[T++]=m.z*$[h];var at,it,rt,nt,ot=S/2;if(z)for(h=0;h<L;h++)for(b=0;b<O;b++)B[T++]=d.x*Q[h]*et[b],B[T++]=d.y*Q[h]*tt[b],B[T++]=d.z*$[h],W[ot]=!0,h>0&&h!==L-1&&0!==b&&b!==O-1&&(Y[ot]=!0),ot++;for(T=0,h=1;h<L-2;h++)for(at=h*O,it=(h+1)*O,b=1;b<O-2;b++)Z[T++]=it+b,Z[T++]=it+b+1,Z[T++]=at+b+1,Z[T++]=it+b,Z[T++]=at+b+1,Z[T++]=at+b;if(z){var mt=L*O;for(h=1;h<L-2;h++)for(at=mt+h*O,it=mt+(h+1)*O,b=1;b<O-2;b++)Z[T++]=it+b,Z[T++]=at+b,Z[T++]=at+b+1,Z[T++]=it+b,Z[T++]=at+b+1,Z[T++]=it+b+1}if(z){if(N)for(nt=L*O,h=1;h<O-2;h++)Z[T++]=h,Z[T++]=h+1,Z[T++]=nt+h+1,Z[T++]=h,Z[T++]=nt+h+1,Z[T++]=nt+h;if(R)for(rt=L*O-O,nt=L*O*E-O,h=1;h<O-2;h++)Z[T++]=rt+h+1,Z[T++]=rt+h,Z[T++]=nt+h,Z[T++]=rt+h+1,Z[T++]=nt+h,Z[T++]=nt+h+1}if(U){for(h=1;h<L-2;h++)nt=O*L+O*h,rt=O*h,Z[T++]=nt,Z[T++]=rt+O,Z[T++]=rt,Z[T++]=nt,Z[T++]=nt+O,Z[T++]=rt+O;for(h=1;h<L-2;h++)nt=O*L+O*(h+1)-1,rt=O*(h+1)-1,Z[T++]=rt+O,Z[T++]=nt,Z[T++]=rt,Z[T++]=rt+O,Z[T++]=nt+O,Z[T++]=nt}var st=new u.GeometryAttributes;g.position&&(st.position=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:B}));var ut,lt=0,ft=0,ct=0,dt=0,Ct=S/2,pt=i.Ellipsoid.fromCartesian3(m),yt=i.Ellipsoid.fromCartesian3(d);if(g.st||g.normal||g.tangent||g.bitangent){for(h=0;h<S;h++){ut=W[h]?yt:pt;var _t=r.Cartesian3.fromArray(B,3*h,C),vt=ut.geodeticSurfaceNormal(_t,p);if(Y[h]&&r.Cartesian3.negate(vt,vt),g.st){var ht=i.Cartesian2.negate(vt,v);K[lt++]=Math.atan2(ht.y,ht.x)/c.CesiumMath.TWO_PI+.5,K[lt++]=Math.asin(vt.z)/Math.PI+.5}if(g.normal&&(j[ft++]=vt.x,j[ft++]=vt.y,j[ft++]=vt.z),g.tangent||g.bitangent){var At,xt=y,bt=0;if(W[h]&&(bt=Ct),At=!N&&h>=bt&&h<bt+2*O?r.Cartesian3.UNIT_X:r.Cartesian3.UNIT_Z,r.Cartesian3.cross(At,vt,xt),r.Cartesian3.normalize(xt,xt),g.tangent&&(q[ct++]=xt.x,q[ct++]=xt.y,q[ct++]=xt.z),g.bitangent){var kt=r.Cartesian3.cross(vt,xt,_);r.Cartesian3.normalize(kt,kt),H[dt++]=kt.x,H[dt++]=kt.y,H[dt++]=kt.z}}}g.st&&(st.st=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:K})),g.normal&&(st.normal=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j})),g.tangent&&(st.tangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:q})),g.bitangent&&(st.bitangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:H}))}if(o.defined(t._offsetAttribute)){var wt=B.length,Ft=new Uint8Array(wt/3),Pt=t._offsetAttribute===l.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(Ft,Pt),st.applyOffset=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Ft})}return new s.Geometry({attributes:st,indices:Z,primitiveType:a.PrimitiveType.TRIANGLES,boundingSphere:a.BoundingSphere.fromEllipsoid(pt),offsetAttribute:t._offsetAttribute})}}},b.getUnitEllipsoid=function(){return o.defined(k)||(k=b.createGeometry(new b({radii:new r.Cartesian3(1,1,1),vertexFormat:d.VertexFormat.POSITION_ONLY}))),k},t.EllipsoidGeometry=b}));
