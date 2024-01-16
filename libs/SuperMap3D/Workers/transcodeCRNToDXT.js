define(["./CompressedTextureBuffer-290a1ff4","./when-b60132fc","./PixelFormat-bcb666b6","./WebGLConstants-aba9fc67","./createTaskProcessorWorker"],(function(e,r,t,n,f){"use strict";
/**
     * @license
     *
     * Copyright (c) 2014, Brandon Jones. All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation
     *  and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
     * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
     * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
     * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
     * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */var a,s,i=1,o=2,u={};u[0]=t.PixelFormat.RGB_DXT1,u[i]=t.PixelFormat.RGBA_DXT3,u[o]=t.PixelFormat.RGBA_DXT5;var d,c=0;function l(f,i){var o=f.data,l=o.byteLength,m=new Uint8Array(o),_=d._malloc(l);!function(e,r,t,n){var f,a=t/4,s=n%4,i=new Uint32Array(e.buffer,0,(n-s)/4),o=new Uint32Array(r.buffer);for(f=0;f<i.length;f++)o[a+f]=i[f];for(f=n-s;f<n;f++)r[t+f]=e[f]}(m,d.HEAPU8,_,l);var b=d._crn_get_dxt_format(_,l),p=u[b];if(!r.defined(p))throw new n.RuntimeError("Unsupported compressed format.");var w,x=d._crn_get_levels(_,l),y=d._crn_get_width(_,l),g=d._crn_get_height(_,l),h=0;for(w=0;w<x;++w)h+=t.PixelFormat.compressedTextureSizeInBytes(p,y>>w,g>>w);if(c<h&&(r.defined(a)&&d._free(a),a=d._malloc(h),s=new Uint8Array(d.HEAPU8.buffer,a,h),c=h),d._crn_decompress(_,l,a,h,0,x),d._free(_),r.defaultValue(f.bMipMap,!1)){var v=s.slice(0,h);return i.push(v.buffer),new e.CompressedTextureBuffer(p,y,g,v)}var A=t.PixelFormat.compressedTextureSizeInBytes(p,y,g),P=s.subarray(0,A),B=new Uint8Array(A);return B.set(P,0),i.push(B.buffer),new e.CompressedTextureBuffer(p,y,g,B)}function m(e){d=e,self.onmessage=f(l),self.postMessage(!0)}return function(e){var t=e.data.webAssemblyConfig;if(r.defined(t))return require([t.modulePath],(function(e){r.defined(t.wasmBinaryFile)?(r.defined(e)||(e=self.Module),m(e)):m(e)}))}}));
