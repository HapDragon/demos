define(["exports","./when-b60132fc","./Check-7b2a090c","./WebGLConstants-aba9fc67"],(function(r,e,n,o){"use strict";function t(r,n,o,f){return n=e.defaultValue(n,0),o=e.defaultValue(o,r.byteLength-n),f=e.defaultValue(f,"utf-8"),r=r.subarray(n,n+o),t.decode(r,f)}function f(r,e,n){return e<=r&&r<=n}t.decodeWithTextDecoder=function(r,e){return new TextDecoder(e).decode(r)},t.decodeWithFromCharCode=function(r){for(var e="",n=function(r){for(var e=0,n=0,t=0,a=128,i=191,u=[],c=r.length,d=0;d<c;++d){var v=r[d];if(0===t){if(f(v,0,127)){u.push(v);continue}if(f(v,194,223)){t=1,e=31&v;continue}if(f(v,224,239)){224===v&&(a=160),237===v&&(i=159),t=2,e=15&v;continue}if(f(v,240,244)){240===v&&(a=144),244===v&&(i=143),t=3,e=7&v;continue}throw new o.RuntimeError("String decoding failed.")}f(v,a,i)?(a=128,i=191,e=e<<6|63&v,++n===t&&(u.push(e),e=t=n=0)):(e=t=n=0,a=128,i=191,--d)}return u}(r),t=n.length,a=0;a<t;++a){var i=n[a];i<=65535?e+=String.fromCharCode(i):(i-=65536,e+=String.fromCharCode(55296+(i>>10),56320+(1023&i)))}return e},"undefined"!=typeof TextDecoder?t.decode=t.decodeWithTextDecoder:t.decode=t.decodeWithFromCharCode;var a=5,i=11;
//! Use DXT1 compression.
function u(r,e,n,o){var t=r|e<<8,f=t>>11&31,a=t>>5&63,i=31&t;return n[o+0]=f<<3|f>>2,n[o+1]=a<<2|a>>4,n[o+2]=i<<3|i>>2,n[o+3]=255,t}function c(r,e,n,o){var t=0;0!=(6&o)&&(t=8),function(r,e,n,o){for(var t=new Uint8Array(16),f=u(e[n+0],e[n+1],t,0),a=u(e[n+2],e[n+3],t,4),i=0;i<3;i++){var c=t[i],d=t[4+i];o&&f<=a?(t[8+i]=(c+d)/2,t[12+i]=0):(t[8+i]=(2*c+d)/3,t[12+i]=(c+2*d)/3)}t[11]=255,t[15]=o&&f<=a?0:255;var v=new Uint8Array(16);for(i=0;i<4;++i){var A=e[n+4+i];v[4*i+0]=3&A,v[4*i+1]=A>>2&3,v[4*i+2]=A>>4&3,v[4*i+3]=A>>6&3}for(i=0;i<16;++i)for(var h=4*v[i],l=0;l<4;++l)r[4*i+l]=t[h+l]}(r,e,n+t,0!=(1&o)),0!=(2&o)?function(r,e,n){for(var o=0;o<8;++o){var t=bytes[n+o],f=15&t,a=240&t;r[8*o+3]=f|f<<4,r[8*o+7]=a|a>>4}}(r,0,n):0!=(4&o)&&function(r,e,n){var o=e[n+0],t=e[n+1],f=new Uint8Array(8);if(f[0]=o,f[1]=t,o<=t){for(var a=1;a<5;++a)f[1+a]=((5-a)*o+a*t)/5;f[6]=0,f[7]=255}else for(a=1;a<7;++a)f[1+a]=((7-a)*o+a*t)/7;var i=new Uint8Array(16),u=(n+=2,0);for(a=0;a<2;++a){for(var c=0,d=0;d<3;++d)c|=e[n++]<<8*d;for(d=0;d<8;++d){var v=c>>3*d&7;i[u++]=v}}for(a=0;a<16;++a)r[4*a+3]=f[i[a]]}(r,e,n)}function d(r){}d.decode=function(r,e,n,o,t){if(null!=r&&null!=o&&0!=n&&0!=e){var f=0;1&(f=t>i||t===a?4:33)&&32&f?function(r,e,n,o){for(var t=new Uint16Array(4),f=r,a=0,i=0,u=0,c=0,d=0,v=0,A=0,h=0,l=0,C=e/4,T=n/4,D=0;D<T;D++)for(var y=0;y<C;y++)u=4*((T-D)*C+y),t[0]=o[u],t[1]=o[u+1],c=31&t[0],d=2016&t[0],v=63488&t[0],A=31&t[1],h=2016&t[1],l=63488&t[1],t[2]=5*c+3*A>>3|5*d+3*h>>3&2016|5*v+3*l>>3&63488,t[3]=5*A+3*c>>3|5*h+3*d>>3&2016|5*l+3*v>>3&63488,a=o[u+2],f[i=4*D*e+4*y]=t[3&a],f[i+1]=t[a>>2&3],f[i+2]=t[a>>4&3],f[i+3]=t[a>>6&3],f[i+=e]=t[a>>8&3],f[i+1]=t[a>>10&3],f[i+2]=t[a>>12&3],f[i+3]=t[a>>14],a=o[u+3],f[i+=e]=t[3&a],f[i+1]=t[a>>2&3],f[i+2]=t[a>>4&3],f[i+3]=t[a>>6&3],f[i+=e]=t[a>>8&3],f[i+1]=t[a>>10&3],f[i+2]=t[a>>12&3],f[i+3]=t[a>>14]}
/*! @brief Decompresses an image in memory.

     @param rgba		Storage for the decompressed pixels.
     @param width	The width of the source image.
     @param height	The height of the source image.
     @param blocks	The compressed DXT blocks.
     @param flags	Compression flags.

     The decompressed pixels will be written as a contiguous array of width*height
     16 rgba values, with each component as 1 byte each. In memory this is:

     { r1, g1, b1, a1, .... , rn, gn, bn, an } for n = width*height

     The flags parameter should specify either kDxt1, kDxt3 or kDxt5 compression,
     however, DXT1 will be used by default if none is specified. All other flags
     are ignored.

     Internally this function calls squish::Decompress for each block.
     */(r,e,n,o):function(r,e,n,o,t){for(var f=0!=(1&t)?8:16,a=0,i=0;i<n;i+=4)for(var u=0;u<e;u+=4){var d=new Uint8Array(64);c(d,o,a,t);for(var v=0,A=0;A<4;++A)for(var h=0;h<4;++h){var l=u+h,C=i+A;if(l<e&&C<n)for(var T=4*(e*(n-C)+l),D=0;D<4;++D)r[T++]=d[v++];else v+=4}a+=f}}(r,e,n,o,f)}};var v=Object.freeze({LUMINANCE_8:1,LUMINANCE_16:2,ALPHA:3,ALPHA_4_LUMINANCE_4:4,LUMINANCE_ALPHA:5,RGB_565:6,BGR565:7,RGB:10,BGR:11,ARGB:12,ABGR:13,BGRA:14,WEBP:25,RGBA:28,DXT1:17,DXT2:18,DXT3:19,DXT4:20,DXT5:21,CRN_DXT5:26,STANDARD_CRN:27,KTX2:31});r.DXTTextureDecode=d,r.S3MPixelFormat=v,r.getStringFromTypedArray=t}));
