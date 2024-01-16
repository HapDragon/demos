define(["./buildModuleUrl-9a89655b","./EllipsoidTangentPlane-d397ceb5","./Cartesian2-99e64452","./Cartesian4-69ef58e5","./when-b60132fc","./Check-7b2a090c","./TerrainEncoding-3bbf84ba","./Math-119be1a3","./OrientedBoundingBox-43298817","./Transforms-f4127659","./WebMercatorProjection-2013e020","./WebGLConstants-aba9fc67","./createTaskProcessorWorker","./Cartographic-00721f3e","./Plane-622eaee2","./AttributeCompression-cd5fdf14","./FeatureDetection-ab6f364c"],(function(e,t,a,i,r,n,s,l,o,f,u,c,d,h,m,g,p){"use strict";var w=Object.freeze({NONE:0,LERC:1}),x={};x.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var k=new i.Cartesian3,y=new a.Matrix4,b=new i.Cartesian3,I=new i.Cartesian3;x.computeVertices=function(n){var c,d,h,m,g=Math.cos,p=Math.sin,w=Math.sqrt,v=Math.atan,U=Math.exp,M=l.CesiumMath.PI_OVER_TWO,T=l.CesiumMath.toRadians,V=n.heightmap,A=n.width,B=n.height,D=n.skirtHeight,S=r.defaultValue(n.isGeographic,!0),P=r.defaultValue(n.ellipsoid,e.Ellipsoid.WGS84),E=1/P.maximumRadius,C=n.nativeRectangle,F=n.rectangle;r.defined(F)?(c=F.west,d=F.south,h=F.east,m=F.north):S?(c=T(C.west),d=T(C.south),h=T(C.east),m=T(C.north)):(c=C.west*E,d=M-2*v(U(-C.south*E)),h=C.east*E,m=M-2*v(U(-C.north*E)));var L=n.relativeToCenter,O=r.defined(L);L=O?L:i.Cartesian3.ZERO;var N=r.defaultValue(n.exaggeration,1),z=r.defaultValue(n.includeWebMercatorT,!1),R=r.defaultValue(n.structure,x.DEFAULT_STRUCTURE),_=r.defaultValue(R.heightScale,x.DEFAULT_STRUCTURE.heightScale),H=r.defaultValue(R.heightOffset,x.DEFAULT_STRUCTURE.heightOffset),Y=r.defaultValue(R.elementsPerHeight,x.DEFAULT_STRUCTURE.elementsPerHeight),W=r.defaultValue(R.stride,x.DEFAULT_STRUCTURE.stride),X=r.defaultValue(R.elementMultiplier,x.DEFAULT_STRUCTURE.elementMultiplier),Z=r.defaultValue(R.isBigEndian,x.DEFAULT_STRUCTURE.isBigEndian),j=e.Rectangle.computeWidth(C),G=e.Rectangle.computeHeight(C),q=j/(A-1),Q=G/(B-1);S||(j*=E,G*=E);var J,K,$=P.radiiSquared,ee=$.x,te=$.y,ae=$.z,ie=65536,re=-65536,ne=f.Transforms.eastNorthUpToFixedFrame(L,P),se=a.Matrix4.inverseTransformation(ne,y);z&&(J=u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d),K=1/(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(m)-J));var le=b;le.x=Number.POSITIVE_INFINITY,le.y=Number.POSITIVE_INFINITY,le.z=Number.POSITIVE_INFINITY;var oe=I;oe.x=Number.NEGATIVE_INFINITY,oe.y=Number.NEGATIVE_INFINITY,oe.z=Number.NEGATIVE_INFINITY;var fe=Number.POSITIVE_INFINITY,ue=A*B,ce=ue+(D>0?2*A+2*B:0),de=new Array(ce),he=new Array(ce),me=new Array(ce),ge=z?new Array(ce):[],pe=0,we=B,xe=0,ke=A;D>0&&(--pe,++we,--xe,++ke);for(var ye=1e-5,be=pe;be<we;++be){var Ie=be;Ie<0&&(Ie=0),Ie>=B&&(Ie=B-1);var ve=C.north-Q*Ie,Ue=((ve=S?T(ve):M-2*v(U(-ve*E)))-d)/(m-d);Ue=l.CesiumMath.clamp(Ue,0,1);var Me=be===pe,Te=be===we-1;D>0&&(Me?ve+=ye*G:Te&&(ve-=ye*G));var Ve,Ae=g(ve),Be=p(ve),De=ae*Be;z&&(Ve=(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(ve)-J)*K);for(var Se=xe;Se<ke;++Se){var Pe=Se;Pe<0&&(Pe=0),Pe>=A&&(Pe=A-1);var Ee,Ce,Fe=Ie*(A*W)+Pe*W;if(1===Y)Ee=V[Fe];else if(Ee=0,Z)for(Ce=0;Ce<Y;++Ce)Ee=Ee*X+V[Fe+Ce];else for(Ce=Y-1;Ce>=0;--Ce)Ee=Ee*X+V[Fe+Ce];Ee=(Ee*_+H)*N,re=Math.max(re,Ee),ie=Math.min(ie,Ee);var Le=C.west+q*Pe;S?Le=T(Le):Le*=E;var Oe=(Le-c)/(h-c);Oe=l.CesiumMath.clamp(Oe,0,1);var Ne=Ie*A+Pe;if(D>0){var ze=Se===xe,Re=Se===ke-1,_e=Me||Te||ze||Re;if((Me||Te)&&(ze||Re))continue;_e&&(Ee-=D,ze?(Ne=ue+(B-Ie-1),Le-=ye*j):Te?Ne=ue+B+(A-Pe-1):Re?(Ne=ue+B+A+Ie,Le+=ye*j):Me&&(Ne=ue+B+A+B+Pe))}var He=Ae*g(Le),Ye=Ae*p(Le),We=ee*He,Xe=te*Ye,Ze=1/w(We*He+Xe*Ye+De*Be),je=We*Ze,Ge=Xe*Ze,qe=De*Ze,Qe=new i.Cartesian3;Qe.x=je+He*Ee,Qe.y=Ge+Ye*Ee,Qe.z=qe+Be*Ee,de[Ne]=Qe,he[Ne]=Ee,me[Ne]=new a.Cartesian2(Oe,Ue),z&&(ge[Ne]=Ve),a.Matrix4.multiplyByPoint(se,Qe,k),i.Cartesian3.minimumByComponent(k,le,le),i.Cartesian3.maximumByComponent(k,oe,oe),fe=Math.min(fe,Ee)}}var Je,Ke,$e=e.BoundingSphere.fromPoints(de);(r.defined(F)&&(Je=o.OrientedBoundingBox.fromRectangle(F,ie,re,P)),O)&&(Ke=new s.EllipsoidalOccluder(P).computeHorizonCullingPointPossiblyUnderEllipsoid(L,de,ie));for(var et=new t.AxisAlignedBoundingBox(le,oe,L),tt=new s.TerrainEncoding(et,fe,re,ne,!1,z),at=new Float32Array(ce*tt.getStride()),it=0,rt=0;rt<ce;++rt)it=tt.encode(at,it,de[rt],me[rt],he[rt],void 0,ge[rt]);return{vertices:at,maximumHeight:re,minimumHeight:ie,encoding:tt,boundingSphere3D:$e,orientedBoundingBox:Je,occludeePointInScaledSpace:Ke}};
/* Copyright 2015-2018 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */
var v={};!function(){var e,t,a,i,r,n,s,l,o,f,u,c,d,h,m,g,p=(e={defaultNoDataValue:-34027999387901484e22,decode:function(n,s){var l=(s=s||{}).encodedMaskData||null===s.encodedMaskData,o=r(n,s.inputOffset||0,l),f=null!==s.noDataValue?s.noDataValue:e.defaultNoDataValue,u=t(o,s.pixelType||Float32Array,s.encodedMaskData,f,s.returnMask),c={width:o.width,height:o.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:o.pixels.maxValue,noDataValue:f};return u.resultMask&&(c.maskData=u.resultMask),s.returnEncodedMask&&o.mask&&(c.encodedMaskData=o.mask.bitset?o.mask.bitset:null),s.returnFileInfo&&(c.fileInfo=a(o),s.computeUsedBitDepths&&(c.fileInfo.bitDepths=i(o))),c}},t=function(e,t,a,i,r){var s,l,o,f=0,u=e.pixels.numBlocksX,c=e.pixels.numBlocksY,d=Math.floor(e.width/u),h=Math.floor(e.height/c),m=2*e.maxZError,g=Number.MAX_VALUE;a=a||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),r&&a&&(o=new Uint8Array(e.width*e.height));for(var p,w,x=new Float32Array(d*h),k=0;k<=c;k++){var y=k!==c?h:e.height%c;if(0!==y)for(var b=0;b<=u;b++){var I=b!==u?d:e.width%u;if(0!==I){var v,U,M,T,V=k*e.width*h+b*d,A=e.width-I,B=e.pixels.blocks[f];if(B.encoding<2?(0===B.encoding?v=B.rawData:(n(B.stuffedData,B.bitsPerPixel,B.numValidPixels,B.offset,m,x,e.pixels.maxValue),v=x),U=0):M=2===B.encoding?0:B.offset,a)for(w=0;w<y;w++){for(7&V&&(T=a[V>>3],T<<=7&V),p=0;p<I;p++)7&V||(T=a[V>>3]),128&T?(o&&(o[V]=1),g=g>(s=B.encoding<2?v[U++]:M)?s:g,l[V++]=s):(o&&(o[V]=0),l[V++]=i),T<<=1;V+=A}else if(B.encoding<2)for(w=0;w<y;w++){for(p=0;p<I;p++)g=g>(s=v[U++])?s:g,l[V++]=s;V+=A}else for(g=g>M?M:g,w=0;w<y;w++){for(p=0;p<I;p++)l[V++]=M;V+=A}if(1===B.encoding&&U!==B.numValidPixels)throw"Block and Mask do not match";f++}}}return{resultPixels:l,resultMask:o,minValue:g}},a=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},i=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,a={},i=0;i<t;i++){var r=e.pixels.blocks[i];0===r.encoding?a.float32=!0:1===r.encoding?a[r.bitsPerPixel]=!0:a[0]=!0}return Object.keys(a)},r=function(e,t,a){var i={},r=new Uint8Array(e,t,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==i.fileIdentifierString.trim())throw"Unexpected file identifier string: "+i.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),t+=24,!a)if(n=new DataView(e,t,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),t+=16,i.mask.numBytes>0){var s=new Uint8Array(Math.ceil(i.width*i.height/8)),l=(n=new DataView(e,t,i.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(l>0)for(;l--;)s[f++]=n.getUint8(o++);else{var u=n.getUint8(o++);for(l=-l;l--;)s[f++]=u}l=n.getInt16(o,!0),o+=2}while(o<i.mask.numBytes);if(-32768!==l||f<s.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=s,t+=i.mask.numBytes}else 0==(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(e,t,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),t+=16;var c=i.pixels.numBlocksX,d=i.pixels.numBlocksY,h=c+(i.width%c>0?1:0),m=d+(i.height%d>0?1:0);i.pixels.blocks=new Array(h*m);for(var g=0,p=0;p<m;p++)for(var w=0;w<h;w++){var x=0,k=e.byteLength-t;n=new DataView(e,t,Math.min(10,k));var y={};i.pixels.blocks[g++]=y;var b=n.getUint8(0);if(x++,y.encoding=63&b,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==b&&2!==b){if(b>>=6,y.offsetType=b,2===b)y.offset=n.getInt8(1),x++;else if(1===b)y.offset=n.getInt16(1,!0),x+=2;else{if(0!==b)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),x+=4}if(1===y.encoding)if(b=n.getUint8(x),x++,y.bitsPerPixel=63&b,b>>=6,y.numValidPixelsType=b,2===b)y.numValidPixels=n.getUint8(x),x++;else if(1===b)y.numValidPixels=n.getUint16(x,!0),x+=2;else{if(0!==b)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(x,!0),x+=4}}var I;if(t+=x,3!==y.encoding)if(0===y.encoding){var v=(i.pixels.numBytes-1)/4;if(v!==Math.floor(v))throw"uncompressed block has invalid length";I=new ArrayBuffer(4*v),new Uint8Array(I).set(new Uint8Array(e,t,4*v));var U=new Float32Array(I);y.rawData=U,t+=4*v}else if(1===y.encoding){var M=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),T=Math.ceil(M/4);I=new ArrayBuffer(4*T),new Uint8Array(I).set(new Uint8Array(e,t,M)),y.stuffedData=new Uint32Array(I),t+=M}}else t++}return i.eofOffset=t,i},n=function(e,t,a,i,r,n,s){var l,o,f,u=(1<<t)-1,c=0,d=0,h=Math.ceil((s-i)/r),m=4*e.length-Math.ceil(t*a/8);for(e[e.length-1]<<=8*m,l=0;l<a;l++){if(0===d&&(f=e[c++],d=32),d>=t)o=f>>>d-t&u,d-=t;else{var g=t-d;o=(f&u)<<g&u,o+=(f=e[c++])>>>(d=32-g)}n[l]=o<h?i+o*r:s}return n},e),w=(s=function(e,t,a,i,r,n,s,l){var o,f,u,c,d,h=(1<<a)-1,m=0,g=0,p=4*e.length-Math.ceil(a*i/8);if(e[e.length-1]<<=8*p,r)for(o=0;o<i;o++)0===g&&(u=e[m++],g=32),g>=a?(f=u>>>g-a&h,g-=a):(f=(u&h)<<(c=a-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=r[f];else for(d=Math.ceil((l-n)/s),o=0;o<i;o++)0===g&&(u=e[m++],g=32),g>=a?(f=u>>>g-a&h,g-=a):(f=(u&h)<<(c=a-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=f<d?n+f*s:l},l=function(e,t,a,i,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,c=0,d=0,h=[],m=4*e.length-Math.ceil(t*a/8);e[e.length-1]<<=8*m;var g=Math.ceil((n-i)/r);for(f=0;f<a;f++)0===c&&(s=e[o++],c=32),c>=t?(d=s>>>c-t&l,c-=t):(d=(s&l)<<(u=t-c)&l,d+=(s=e[o++])>>>(c=32-u)),h[f]=d<g?i+d*r:n;return h.unshift(i),h},o=function(e,t,a,i,r,n,s,l){var o,f,u,c,d=(1<<a)-1,h=0,m=0,g=0;if(r)for(o=0;o<i;o++)0===m&&(u=e[h++],m=32,g=0),m>=a?(f=u>>>g&d,m-=a,g+=a):(f=u>>>g&d,m=32-(c=a-m),f|=((u=e[h++])&(1<<c)-1)<<a-c,g=c),t[o]=r[f];else{var p=Math.ceil((l-n)/s);for(o=0;o<i;o++)0===m&&(u=e[h++],m=32,g=0),m>=a?(f=u>>>g&d,m-=a,g+=a):(f=u>>>g&d,m=32-(c=a-m),f|=((u=e[h++])&(1<<c)-1)<<a-c,g=c),t[o]=f<p?n+f*s:l}return t},f=function(e,t,a,i,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,c=0,d=0,h=0,m=[],g=Math.ceil((n-i)/r);for(f=0;f<a;f++)0===c&&(s=e[o++],c=32,h=0),c>=t?(d=s>>>h&l,c-=t,h+=t):(d=s>>>h&l,c=32-(u=t-c),d|=((s=e[o++])&(1<<u)-1)<<t-u,h=u),m[f]=d<g?i+d*r:n;return m.unshift(i),m},u=function(e,t,a,i){var r,n,s,l,o=(1<<a)-1,f=0,u=0,c=4*e.length-Math.ceil(a*i/8);for(e[e.length-1]<<=8*c,r=0;r<i;r++)0===u&&(s=e[f++],u=32),u>=a?(n=s>>>u-a&o,u-=a):(n=(s&o)<<(l=a-u)&o,n+=(s=e[f++])>>>(u=32-l)),t[r]=n;return t},c=function(e,t,a,i){var r,n,s,l,o=(1<<a)-1,f=0,u=0,c=0;for(r=0;r<i;r++)0===u&&(s=e[f++],u=32,c=0),u>=a?(n=s>>>c&o,u-=a,c+=a):(n=s>>>c&o,u=32-(l=a-u),n|=((s=e[f++])&(1<<l)-1)<<a-l,c=l),t[r]=n;return t},d={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,a=65535,i=e.length,r=Math.floor(i/2),n=0;r;){var s=r>=359?359:r;r-=s;do{t+=e[n++]<<8,a+=t+=e[n++]}while(--s);t=(65535&t)+(t>>>16),a=(65535&a)+(a>>>16)}return 1&i&&(a+=t+=e[n]<<8),((a=(65535&a)+(a>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var a=t.ptr,i=new Uint8Array(e,a,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,i),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;a+=6;var n,s=new DataView(e,a,8),l=s.getInt32(0,!0);if(r.fileVersion=l,a+=4,l>=3&&(r.checksum=s.getUint32(4,!0),a+=4),s=new DataView(e,a,12),r.height=s.getUint32(0,!0),r.width=s.getUint32(4,!0),a+=8,l>=4?(r.numDims=s.getUint32(8,!0),a+=4):r.numDims=1,s=new DataView(e,a,40),r.numValidPixel=s.getUint32(0,!0),r.microBlockSize=s.getInt32(4,!0),r.blobSize=s.getInt32(8,!0),r.imageType=s.getInt32(12,!0),r.maxZError=s.getFloat64(16,!0),r.zMin=s.getFloat64(24,!0),r.zMax=s.getFloat64(32,!0),a+=40,t.headerInfo=r,t.ptr=a,l>=3&&(n=l>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(e,a-n,r.blobSize-14))!==r.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var a=t.headerInfo,i=this.getDataTypeArray(a.imageType),r=a.numDims*this.getDataTypeSize(a.imageType),n=this.readSubArray(e,t.ptr,i,r),s=this.readSubArray(e,t.ptr+r,i,r);t.ptr+=2*r;var l,o=!0;for(l=0;l<a.numDims;l++)if(n[l]!==s[l]){o=!1;break}return a.minValues=n,a.maxValues=s,o},readSubArray:function(e,t,a,i){var r;if(a===Uint8Array)r=new Uint8Array(e,t,i);else{var n=new ArrayBuffer(i);new Uint8Array(n).set(new Uint8Array(e,t,i)),r=new a(n)}return r},readMask:function(e,t){var a,i,r=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,o=new DataView(e,r,4),f={};if(f.numBytes=o.getUint32(0,!0),r+=4,(0===l||s===l)&&0!==f.numBytes)throw"invalid mask";if(0===l)a=new Uint8Array(Math.ceil(s/8)),f.bitset=a,i=new Uint8Array(s),t.pixels.resultMask=i,r+=f.numBytes;else if(f.numBytes>0){a=new Uint8Array(Math.ceil(s/8));var u=(o=new DataView(e,r,f.numBytes)).getInt16(0,!0),c=2,d=0,h=0;do{if(u>0)for(;u--;)a[d++]=o.getUint8(c++);else for(h=o.getUint8(c++),u=-u;u--;)a[d++]=h;u=o.getInt16(c,!0),c+=2}while(c<f.numBytes);if(-32768!==u||d<a.length)throw"Unexpected end of mask RLE encoding";i=new Uint8Array(s);var m=0,g=0;for(g=0;g<s;g++)7&g?(m=a[g>>3],m<<=7&g):m=a[g>>3],128&m&&(i[g]=1);t.pixels.resultMask=i,f.bitset=a,r+=f.numBytes}return t.ptr=r,t.mask=f,!0},readDataOneSweep:function(e,t,a){var i,r=t.ptr,n=t.headerInfo,s=n.numDims,l=n.width*n.height,o=n.imageType,f=n.numValidPixel*d.getDataTypeSize(o)*s,u=t.pixels.resultMask;if(a===Uint8Array)i=new Uint8Array(e,r,f);else{var c=new ArrayBuffer(f);new Uint8Array(c).set(new Uint8Array(e,r,f)),i=new a(c)}if(i.length===l*s)t.pixels.resultPixels=i;else{t.pixels.resultPixels=new a(l*s);var h=0,m=0,g=0,p=0;if(s>1)for(g=0;g<s;g++)for(p=g*l,m=0;m<l;m++)u[m]&&(t.pixels.resultPixels[p+m]=i[h++]);else for(m=0;m<l;m++)u[m]&&(t.pixels.resultPixels[m]=i[h++])}return r+=f,t.ptr=r,!0},readHuffmanTree:function(e,t){var a=this.HUFFMAN_LUT_BITS_MAX,i=new DataView(e,t.ptr,16);if(t.ptr+=16,i.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=i.getInt32(4,!0),n=i.getInt32(8,!0),s=i.getInt32(12,!0);if(n>=s)return!1;var l=new Uint32Array(s-n);d.decodeBits(e,t,l);var o,f,u,c,m=[];for(o=n;o<s;o++)m[f=o-(o<r?0:r)]={first:l[o-n],second:null};var g=e.byteLength-t.ptr,p=Math.ceil(g/4),w=new ArrayBuffer(4*p);new Uint8Array(w).set(new Uint8Array(e,t.ptr,g));var x,k=new Uint32Array(w),y=0,b=0;for(x=k[0],o=n;o<s;o++)(c=m[f=o-(o<r?0:r)].first)>0&&(m[f].second=x<<y>>>32-c,32-y>=c?32===(y+=c)&&(y=0,x=k[++b]):(y+=c-32,x=k[++b],m[f].second|=x>>>32-y));var I=0,v=0,U=new h;for(o=0;o<m.length;o++)void 0!==m[o]&&(I=Math.max(I,m[o].first));v=I>=a?a:I,I>=30&&console.log("WARning, large NUM LUT BITS IS "+I);var M,T,V,A,B,D=[];for(o=n;o<s;o++)if((c=m[f=o-(o<r?0:r)].first)>0)if(M=[c,f],c<=v)for(T=m[f].second<<v-c,V=1<<v-c,u=0;u<V;u++)D[T|u]=M;else for(T=m[f].second,B=U,A=c-1;A>=0;A--)T>>>A&1?(B.right||(B.right=new h),B=B.right):(B.left||(B.left=new h),B=B.left),0!==A||B.val||(B.val=M[1]);return{decodeLut:D,numBitsLUTQick:v,numBitsLUT:I,tree:U,stuffedData:k,srcPtr:b,bitPos:y}},readHuffman:function(e,t,a){var i,r,n,s,l,o,f,u,c,d=t.headerInfo,h=d.numDims,m=t.headerInfo.height,g=t.headerInfo.width,p=g*m,w=this.readHuffmanTree(e,t),x=w.decodeLut,k=w.tree,y=w.stuffedData,b=w.srcPtr,I=w.bitPos,v=w.numBitsLUTQick,U=w.numBitsLUT,M=0===t.headerInfo.imageType?128:0,T=t.pixels.resultMask,V=0;I>0&&(b++,I=0);var A,B=y[b],D=1===t.encodeMode,S=new a(p*h),P=S;for(A=0;A<d.numDims;A++){if(h>1&&(P=new a(S.buffer,p*A,p),V=0),t.headerInfo.numValidPixel===g*m)for(u=0,o=0;o<m;o++)for(f=0;f<g;f++,u++){if(r=0,l=s=B<<I>>>32-v,32-I<v&&(l=s|=y[b+1]>>>64-I-v),x[l])r=x[l][1],I+=x[l][0];else for(l=s=B<<I>>>32-U,32-I<U&&(l=s|=y[b+1]>>>64-I-U),i=k,c=0;c<U;c++)if(!(i=s>>>U-c-1&1?i.right:i.left).left&&!i.right){r=i.val,I=I+c+1;break}I>=32&&(I-=32,B=y[++b]),n=r-M,D?(n+=f>0?V:o>0?P[u-g]:V,n&=255,P[u]=n,V=n):P[u]=n}else for(u=0,o=0;o<m;o++)for(f=0;f<g;f++,u++)if(T[u]){if(r=0,l=s=B<<I>>>32-v,32-I<v&&(l=s|=y[b+1]>>>64-I-v),x[l])r=x[l][1],I+=x[l][0];else for(l=s=B<<I>>>32-U,32-I<U&&(l=s|=y[b+1]>>>64-I-U),i=k,c=0;c<U;c++)if(!(i=s>>>U-c-1&1?i.right:i.left).left&&!i.right){r=i.val,I=I+c+1;break}I>=32&&(I-=32,B=y[++b]),n=r-M,D?(f>0&&T[u-1]?n+=V:o>0&&T[u-g]?n+=P[u-g]:n+=V,n&=255,P[u]=n,V=n):P[u]=n}t.ptr=t.ptr+4*(b+1)+(I>0?4:0)}t.pixels.resultPixels=S},decodeBits:function(e,t,a,i,r){var n=t.headerInfo,d=n.fileVersion,h=0,m=e.byteLength-t.ptr>=5?5:e.byteLength-t.ptr,g=new DataView(e,t.ptr,m),p=g.getUint8(0);h++;var w=p>>6,x=0===w?4:3-w,k=(32&p)>0,y=31&p,b=0;if(1===x)b=g.getUint8(h),h++;else if(2===x)b=g.getUint16(h,!0),h+=2;else{if(4!==x)throw"Invalid valid pixel count type";b=g.getUint32(h,!0),h+=4}var I,v,U,M,T,V,A,B,D,S=2*n.maxZError,P=n.numDims>1?n.maxValues[r]:n.zMax;if(k){for(t.counter.lut++,B=g.getUint8(h),h++,M=Math.ceil((B-1)*y/8),T=Math.ceil(M/4),v=new ArrayBuffer(4*T),U=new Uint8Array(v),t.ptr+=h,U.set(new Uint8Array(e,t.ptr,M)),A=new Uint32Array(v),t.ptr+=M,D=0;B-1>>>D;)D++;M=Math.ceil(b*D/8),T=Math.ceil(M/4),v=new ArrayBuffer(4*T),(U=new Uint8Array(v)).set(new Uint8Array(e,t.ptr,M)),I=new Uint32Array(v),t.ptr+=M,V=d>=3?f(A,y,B-1,i,S,P):l(A,y,B-1,i,S,P),d>=3?o(I,a,D,b,V):s(I,a,D,b,V)}else t.counter.bitstuffer++,D=y,t.ptr+=h,D>0&&(M=Math.ceil(b*D/8),T=Math.ceil(M/4),v=new ArrayBuffer(4*T),(U=new Uint8Array(v)).set(new Uint8Array(e,t.ptr,M)),I=new Uint32Array(v),t.ptr+=M,d>=3?null===i?c(I,a,D,b):o(I,a,D,b,!1,i,S,P):null===i?u(I,a,D,b):s(I,a,D,b,!1,i,S,P))},readTiles:function(e,t,a){var i=t.headerInfo,r=i.width,n=i.height,s=i.microBlockSize,l=i.imageType,o=d.getDataTypeSize(l),f=Math.ceil(r/s),u=Math.ceil(n/s);t.pixels.numBlocksY=u,t.pixels.numBlocksX=f,t.pixels.ptr=0;var c,h,m,g,p,w,x,k,y=0,b=0,I=0,v=0,U=0,M=0,T=0,V=0,A=0,B=0,D=0,S=0,P=0,E=0,C=0,F=new a(s*s),L=n%s||s,O=r%s||s,N=i.numDims,z=t.pixels.resultMask,R=t.pixels.resultPixels;for(I=0;I<u;I++)for(U=I!==u-1?s:L,v=0;v<f;v++)for(B=I*r*s+v*s,D=r-(M=v!==f-1?s:O),k=0;k<N;k++){if(N>1&&(R=new a(t.pixels.resultPixels.buffer,r*n*k*o,r*n)),T=e.byteLength-t.ptr,h={},C=0,C++,A=(V=(c=new DataView(e,t.ptr,Math.min(10,T))).getUint8(0))>>6&255,(V>>2&15)!=(v*s>>3&15))throw"integrity issue";if((p=3&V)>3)throw t.ptr+=C,"Invalid block encoding ("+p+")";if(2!==p)if(0===p){if(t.counter.uncompressed++,t.ptr+=C,S=(S=U*M*o)<(P=e.byteLength-t.ptr)?S:P,m=new ArrayBuffer(S%o==0?S:S+o-S%o),new Uint8Array(m).set(new Uint8Array(e,t.ptr,S)),g=new a(m),E=0,z)for(y=0;y<U;y++){for(b=0;b<M;b++)z[B]&&(R[B]=g[E++]),B++;B+=D}else for(y=0;y<U;y++){for(b=0;b<M;b++)R[B++]=g[E++];B+=D}t.ptr+=E*o}else if(w=d.getDataTypeUsed(l,A),x=d.getOnePixel(h,C,w,c),C+=d.getDataTypeSize(w),3===p)if(t.ptr+=C,t.counter.constantoffset++,z)for(y=0;y<U;y++){for(b=0;b<M;b++)z[B]&&(R[B]=x),B++;B+=D}else for(y=0;y<U;y++){for(b=0;b<M;b++)R[B++]=x;B+=D}else if(t.ptr+=C,d.decodeBits(e,t,F,x,k),C=0,z)for(y=0;y<U;y++){for(b=0;b<M;b++)z[B]&&(R[B]=F[C++]),B++;B+=D}else for(y=0;y<U;y++){for(b=0;b<M;b++)R[B++]=F[C++];B+=D}else t.counter.constant++,t.ptr+=C}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:d.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t=e.headerInfo.zMax,a=e.headerInfo.numDims,i=e.headerInfo.height*e.headerInfo.width,r=i*a,n=0,s=0,l=0,o=e.pixels.resultMask;if(o)if(a>1)for(n=0;n<a;n++)for(l=n*i,s=0;s<i;s++)o[s]&&(e.pixels.resultPixels[l+s]=t);else for(s=0;s<i;s++)o[s]&&(e.pixels.resultPixels[s]=t);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(t);else for(s=0;s<r;s++)e.pixels.resultPixels[s]=t},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:default:t=Float32Array;break;case 7:t=Float64Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:default:t="F32";break;case 7:t="F64"}return t},isValidPixelValue:function(e,t){if(null===t)return!1;var a;switch(e){case 0:a=t>=-128&&t<=127;break;case 1:a=t>=0&&t<=255;break;case 2:a=t>=-32768&&t<=32767;break;case 3:a=t>=0&&t<=65536;break;case 4:a=t>=-2147483648&&t<=2147483647;break;case 5:a=t>=0&&t<=4294967296;break;case 6:a=t>=-34027999387901484e22&&t<=34027999387901484e22;break;case 7:a=t>=5e-324&&t<=17976931348623157e292;break;default:a=!1}return a},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var a=e;switch(e){case 2:case 4:a=e-t;break;case 3:case 5:a=e-2*t;break;case 6:a=0===t?e:1===t?2:1;break;case 7:a=0===t?e:e-2*t+1;break;default:a=e}return a},getOnePixel:function(e,t,a,i){var r=0;switch(a){case 0:r=i.getInt8(t);break;case 1:r=i.getUint8(t);break;case 2:r=i.getInt16(t,!0);break;case 3:r=i.getUint16(t,!0);break;case 4:r=i.getInt32(t,!0);break;case 5:r=i.getUInt32(t,!0);break;case 6:r=i.getFloat32(t,!0);break;case 7:r=i.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return r}},h=function(e,t,a){this.val=e,this.left=t,this.right=a},{decode:function(e,t){var a=(t=t||{}).noDataValue,i=0,r={};r.ptr=t.inputOffset||0,r.pixels={},d.readHeaderInfo(e,r);var n=r.headerInfo,s=n.fileVersion,l=d.getDataTypeArray(n.imageType);d.readMask(e,r),n.numValidPixel===n.width*n.height||r.pixels.resultMask||(r.pixels.resultMask=t.maskData);var o,f=n.width*n.height;if(r.pixels.resultPixels=new l(f*n.numDims),r.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==n.numValidPixel)if(n.zMax===n.zMin)d.constructConstantSurface(r);else if(s>=4&&d.checkMinMaxRanges(e,r))d.constructConstantSurface(r);else{var u=new DataView(e,r.ptr,2),c=u.getUint8(0);if(r.ptr++,c)d.readDataOneSweep(e,r,l);else if(s>1&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){var h=u.getUint8(1);if(r.ptr++,r.encodeMode=h,h>2||s<4&&h>1)throw"Invalid Huffman flag "+h;h?d.readHuffman(e,r,l):d.readTiles(e,r,l)}else d.readTiles(e,r,l)}r.eofOffset=r.ptr,t.inputOffset?(o=r.headerInfo.blobSize+t.inputOffset-r.ptr,Math.abs(o)>=1&&(r.eofOffset=t.inputOffset+r.headerInfo.blobSize)):(o=r.headerInfo.blobSize-r.ptr,Math.abs(o)>=1&&(r.eofOffset=r.headerInfo.blobSize));var m={width:n.width,height:n.height,pixelData:r.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:r.pixels.resultMask};if(r.pixels.resultMask&&d.isValidPixelValue(n.imageType,a)){var g=r.pixels.resultMask;for(i=0;i<f;i++)g[i]||(m.pixelData[i]=a);m.noDataValue=a}return r.noDataValue=a,t.returnFileInfo&&(m.fileInfo=d.formatFileInfo(r)),m},getBandCount:function(e){for(var t=0,a=0,i={ptr:0,pixels:{}};a<e.byteLength-58;)d.readHeaderInfo(e,i),a+=i.headerInfo.blobSize,t++,i.ptr=a;return t}}),x=(m=new ArrayBuffer(4),g=new Uint8Array(m),new Uint32Array(m)[0]=1,1===g[0]),k={decode:function(e,t){if(!x)throw"Big endian system is not supported.";var a,i,r=(t=t||{}).inputOffset||0,n=new Uint8Array(e,r,10),s=String.fromCharCode.apply(null,n);if("CntZImage"===s.trim())a=p,i=1;else{if("Lerc2"!==s.substring(0,5))throw"Unexpected file identifier string: "+s;a=w,i=2}for(var l,o,f,u,c,d,h=0,m=e.byteLength-10,g=[],k={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};r<m;){var y=a.decode(e,{inputOffset:r,encodedMaskData:l,maskData:f,returnMask:0===h,returnEncodedMask:0===h,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});r=y.fileInfo.eofOffset,0===h&&(l=y.encodedMaskData,f=y.maskData,k.width=y.width,k.height=y.height,k.dimCount=y.dimCount||1,k.pixelType=y.pixelType||y.fileInfo.pixelType,k.mask=y.maskData),i>1&&y.fileInfo.mask&&y.fileInfo.mask.numBytes>0&&g.push(y.maskData),h++,k.pixels.push(y.pixelData),k.statistics.push({minValue:y.minValue,maxValue:y.maxValue,noDataValue:y.noDataValue,dimStats:y.dimStats})}if(i>1&&g.length>1){for(d=k.width*k.height,k.bandMasks=g,(f=new Uint8Array(d)).set(g[0]),u=1;u<g.length;u++)for(o=g[u],c=0;c<d;c++)f[c]=f[c]&o[c];k.maskData=f}return k}};v.Lerc=k}();var U=v.Lerc;return d((function(t,a){if(t.encoding===w.LERC){var i;try{i=U.decode(t.heightmap)}catch(e){throw new c.RuntimeError(e)}if(i.statistics[0].minValue===Number.MAX_VALUE)throw new c.RuntimeError("Invalid tile data");t.heightmap=i.pixels[0],t.width=i.width,t.height=i.height}t.ellipsoid=e.Ellipsoid.clone(t.ellipsoid),t.rectangle=e.Rectangle.clone(t.rectangle);var r=x.computeVertices(t),n=r.vertices;return a.push(n.buffer),{vertices:n.buffer,numberOfAttributes:r.encoding.getStride(),minimumHeight:r.minimumHeight,maximumHeight:r.maximumHeight,gridWidth:t.width,gridHeight:t.height,boundingSphere3D:r.boundingSphere3D,orientedBoundingBox:r.orientedBoundingBox,occludeePointInScaledSpace:r.occludeePointInScaledSpace,encoding:r.encoding,westIndicesSouthToNorth:r.westIndicesSouthToNorth,southIndicesEastToWest:r.southIndicesEastToWest,eastIndicesNorthToSouth:r.eastIndicesNorthToSouth,northIndicesWestToEast:r.northIndicesWestToEast}}))}));
