define(["exports","./Cartesian2-99e64452","./Cartesian4-69ef58e5","./Cartographic-00721f3e","./Check-7b2a090c","./when-b60132fc","./PrimitiveType-ebb8c588","./Transforms-f4127659","./buildModuleUrl-9a89655b"],(function(e,t,n,r,a,i,u,o,s){"use strict";var f=Object.freeze({NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3});function c(e,t,n,r){this[0]=i.defaultValue(e,0),this[1]=i.defaultValue(n,0),this[2]=i.defaultValue(t,0),this[3]=i.defaultValue(r,0)}c.packedLength=4,c.pack=function(e,t,n){return n=i.defaultValue(n,0),t[n++]=e[0],t[n++]=e[1],t[n++]=e[2],t[n++]=e[3],t},c.unpack=function(e,t,n){return t=i.defaultValue(t,0),i.defined(n)||(n=new c),n[0]=e[t++],n[1]=e[t++],n[2]=e[t++],n[3]=e[t++],n},c.clone=function(e,t){if(i.defined(e))return i.defined(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):new c(e[0],e[2],e[1],e[3])},c.fromArray=function(e,t,n){return t=i.defaultValue(t,0),i.defined(n)||(n=new c),n[0]=e[t],n[1]=e[t+1],n[2]=e[t+2],n[3]=e[t+3],n},c.fromColumnMajorArray=function(e,t){return c.clone(e,t)},c.fromRowMajorArray=function(e,t){return i.defined(t)?(t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3],t):new c(e[0],e[1],e[2],e[3])},c.fromScale=function(e,t){return i.defined(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=e.y,t):new c(e.x,0,0,e.y)},c.fromUniformScale=function(e,t){return i.defined(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=e,t):new c(e,0,0,e)},c.fromRotation=function(e,t){var n=Math.cos(e),r=Math.sin(e);return i.defined(t)?(t[0]=n,t[1]=r,t[2]=-r,t[3]=n,t):new c(n,-r,r,n)},c.toArray=function(e,t){return i.defined(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):[e[0],e[1],e[2],e[3]]},c.getElementIndex=function(e,t){return 2*e+t},c.getColumn=function(e,t,n){var r=2*t,a=e[r],i=e[r+1];return n.x=a,n.y=i,n},c.setColumn=function(e,t,n,r){var a=2*t;return(r=c.clone(e,r))[a]=n.x,r[a+1]=n.y,r},c.getRow=function(e,t,n){var r=e[t],a=e[t+2];return n.x=r,n.y=a,n},c.setRow=function(e,t,n,r){return(r=c.clone(e,r))[t]=n.x,r[t+2]=n.y,r};var l=new t.Cartesian2;c.getScale=function(e,n){return n.x=t.Cartesian2.magnitude(t.Cartesian2.fromElements(e[0],e[1],l)),n.y=t.Cartesian2.magnitude(t.Cartesian2.fromElements(e[2],e[3],l)),n};var d=new t.Cartesian2;function y(e){e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT),this.attributes=e.attributes,this.indices=e.indices,this.primitiveType=i.defaultValue(e.primitiveType,u.PrimitiveType.TRIANGLES),this.boundingSphere=e.boundingSphere,this.geometryType=i.defaultValue(e.geometryType,f.NONE),this.boundingSphereCV=e.boundingSphereCV,this.offsetAttribute=e.offsetAttribute}c.getMaximumScale=function(e){return c.getScale(e,d),t.Cartesian2.maximumComponent(d)},c.multiply=function(e,t,n){var r=e[0]*t[0]+e[2]*t[1],a=e[0]*t[2]+e[2]*t[3],i=e[1]*t[0]+e[3]*t[1],u=e[1]*t[2]+e[3]*t[3];return n[0]=r,n[1]=i,n[2]=a,n[3]=u,n},c.add=function(e,t,n){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n},c.subtract=function(e,t,n){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n},c.multiplyByVector=function(e,t,n){var r=e[0]*t.x+e[2]*t.y,a=e[1]*t.x+e[3]*t.y;return n.x=r,n.y=a,n},c.multiplyByScalar=function(e,t,n){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n},c.multiplyByScale=function(e,t,n){return n[0]=e[0]*t.x,n[1]=e[1]*t.x,n[2]=e[2]*t.y,n[3]=e[3]*t.y,n},c.negate=function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},c.transpose=function(e,t){var n=e[0],r=e[2],a=e[1],i=e[3];return t[0]=n,t[1]=r,t[2]=a,t[3]=i,t},c.abs=function(e,t){return t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t},c.equals=function(e,t){return e===t||i.defined(e)&&i.defined(t)&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]},c.equalsArray=function(e,t,n){return e[0]===t[n]&&e[1]===t[n+1]&&e[2]===t[n+2]&&e[3]===t[n+3]},c.equalsEpsilon=function(e,t,n){return e===t||i.defined(e)&&i.defined(t)&&Math.abs(e[0]-t[0])<=n&&Math.abs(e[1]-t[1])<=n&&Math.abs(e[2]-t[2])<=n&&Math.abs(e[3]-t[3])<=n},c.IDENTITY=Object.freeze(new c(1,0,0,1)),c.ZERO=Object.freeze(new c(0,0,0,0)),c.COLUMN0ROW0=0,c.COLUMN0ROW1=1,c.COLUMN1ROW0=2,c.COLUMN1ROW1=3,Object.defineProperties(c.prototype,{length:{get:function(){return c.packedLength}}}),c.prototype.clone=function(e){return c.clone(this,e)},c.prototype.equals=function(e){return c.equals(this,e)},c.prototype.equalsEpsilon=function(e,t){return c.equalsEpsilon(this,e,t)},c.prototype.toString=function(){return"("+this[0]+", "+this[2]+")\n("+this[1]+", "+this[3]+")"},y.computeNumberOfVertices=function(e){var t=-1;for(var n in e.attributes)if(e.attributes.hasOwnProperty(n)&&i.defined(e.attributes[n])&&i.defined(e.attributes[n].values)){var r=e.attributes[n];t=r.values.length/r.componentsPerAttribute}return t};var m=new r.Cartographic,p=new n.Cartesian3,h=new t.Matrix4,C=[new r.Cartographic,new r.Cartographic,new r.Cartographic],b=[new t.Cartesian2,new t.Cartesian2,new t.Cartesian2],x=[new t.Cartesian2,new t.Cartesian2,new t.Cartesian2],w=new n.Cartesian3,g=new o.Quaternion,M=new t.Matrix4,v=new c;y._textureCoordinateRotationPoints=function(e,a,i,u){var f,l=s.Rectangle.center(u,m),d=r.Cartographic.toCartesian(l,i,p),y=o.Transforms.eastNorthUpToFixedFrame(d,i,h),N=t.Matrix4.inverse(y,h),T=b,I=C;I[0].longitude=u.west,I[0].latitude=u.south,I[1].longitude=u.west,I[1].latitude=u.north,I[2].longitude=u.east,I[2].latitude=u.south;var V=w;for(f=0;f<3;f++)r.Cartographic.toCartesian(I[f],i,V),V=t.Matrix4.multiplyByPointAsVector(N,V,V),T[f].x=V.x,T[f].y=V.y;var E=o.Quaternion.fromAxisAngle(n.Cartesian3.UNIT_Z,-a,g),O=t.Matrix3.fromQuaternion(E,M),A=e.length,S=Number.POSITIVE_INFINITY,P=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY,L=Number.NEGATIVE_INFINITY;for(f=0;f<A;f++)V=t.Matrix4.multiplyByPointAsVector(N,e[f],V),V=t.Matrix3.multiplyByVector(O,V,V),S=Math.min(S,V.x),P=Math.min(P,V.y),R=Math.max(R,V.x),L=Math.max(L,V.y);var B=c.fromRotation(a,v),k=x;k[0].x=S,k[0].y=P,k[1].x=S,k[1].y=L,k[2].x=R,k[2].y=P;var U=T[0],Y=T[2].x-U.x,_=T[1].y-U.y;for(f=0;f<3;f++){var q=k[f];c.multiplyByVector(B,q,q),q.x=(q.x-U.x)/Y,q.y=(q.y-U.y)/_}var G=k[0],j=k[1],F=k[2],z=new Array(6);return t.Cartesian2.pack(G,z),t.Cartesian2.pack(j,z,2),t.Cartesian2.pack(F,z,4),z},e.Geometry=y,e.GeometryAttribute=function(e){e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT),this.componentDatatype=e.componentDatatype,this.componentsPerAttribute=e.componentsPerAttribute,this.normalize=i.defaultValue(e.normalize,!1),this.values=e.values},e.GeometryType=f}));