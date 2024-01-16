(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.SuperMap3D = Cesium));
}(this, (function (exports) { 'use strict';

    var _0x6970=['108311sfgRYM','254907ajFEPs','606650FcuKYu','1VwhYTN','84009iSRZgJ','end','throwInstantiationError','441297dxFVUS','prototype','DeveloperError','476676qXZskj','975133bpeecs','7EWIVEZ'];var _0x342170=_0x5032;function _0x5032(_0x24f250,_0x7ba65a){_0x24f250=_0x24f250-0x18f;var _0x697024=_0x6970[_0x24f250];return _0x697024;}(function(_0x4e040c,_0x284197){var _0x23ebc6=_0x5032;while(!![]){try{var _0x5c098c=-parseInt(_0x23ebc6(0x193))+parseInt(_0x23ebc6(0x194))+-parseInt(_0x23ebc6(0x196))+-parseInt(_0x23ebc6(0x192))*parseInt(_0x23ebc6(0x191))+-parseInt(_0x23ebc6(0x18f))+parseInt(_0x23ebc6(0x199))+-parseInt(_0x23ebc6(0x195))*-parseInt(_0x23ebc6(0x190));if(_0x5c098c===_0x284197)break;else _0x4e040c['push'](_0x4e040c['shift']());}catch(_0x5b54af){_0x4e040c['push'](_0x4e040c['shift']());}}}(_0x6970,0x6db1f));function RenderTarget(){}RenderTarget[_0x342170(0x19a)]['begin']=Cesium[_0x342170(0x19b)]['throwInstantiationError'],RenderTarget['prototype'][_0x342170(0x197)]=Cesium['DeveloperError'][_0x342170(0x198)];

    const _0x29e9=['context','UNSIGNED_BYTE','_hdr','destroyObject','depthTextureToCopy','_updateFramebuffer','depthTexture','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20u_depthTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_textureCoordinates;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20czm_packDepth(texture2D(u_depthTexture,\x20v_textureCoordinates).r);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20','1159899AtqKob','width','drawingBufferWidth','clearCommand','TextureMagnificationFilter','copyDepthCommand','viewport','clone','880737DvGLkk','height','beginFunc','_updateCopyCommand','PassState','8QHbaNA','RenderState','isUpdate','CLAMP_TO_EDGE','environmentVisible','Sampler','renderState','70754fdqWCr','Texture','SceneFramebuffer','passes','TextureWrap','NEAREST','update','execute','482475gguYPs','drawingBufferHeight','create','sceneFramebuffer','BoundingRectangle','createViewportQuadCommand','endFunc','TextureMinificationFilter','view','depth','791950LFELaK','isDestroyed','prototype','passState','frameState','PixelFormat','2981052ICZrKo','67156dFqogN','destroy','framebuffer'];const _0x25923d=_0x1f2a;(function(_0x587468,_0x5cfabf){const _0x2d3dd4=_0x1f2a;while(!![]){try{const _0x559a30=parseInt(_0x2d3dd4(0xf4))+-parseInt(_0x2d3dd4(0x100))*parseInt(_0x2d3dd4(0xf9))+-parseInt(_0x2d3dd4(0xd0))+-parseInt(_0x2d3dd4(0xda))+-parseInt(_0x2d3dd4(0xec))+parseInt(_0x2d3dd4(0xe1))+parseInt(_0x2d3dd4(0xe0));if(_0x559a30===_0x5cfabf)break;else _0x587468['push'](_0x587468['shift']());}catch(_0xba853e){_0x587468['push'](_0x587468['shift']());}}}(_0x29e9,0xe2b4d));function DepthFramebuffer(_0x527151){const _0x2ac15f=_0x1f2a;this[_0x2ac15f(0xe4)]=_0x527151,this['sceneFramebuffer']=new Cesium[(_0x2ac15f(0x102))](),this[_0x2ac15f(0xdd)]=new Cesium[(_0x2ac15f(0xf8))](_0x527151),this['passState'][_0x2ac15f(0xf2)]=new Cesium['BoundingRectangle'](),this[_0x2ac15f(0xfd)]={'isSunVisible':![],'isMoonVisible':![],'isSkyAtmosphereVisible':![],'isSkyBoxVisible':![],'isGlobalVisible':!![],'isObjectVisible':!![]},this[_0x2ac15f(0xed)]=0x0,this['height']=0x0,this[_0x2ac15f(0xf1)]=undefined,this[_0x2ac15f(0xef)]=undefined,this[_0x2ac15f(0xe3)]=undefined,this[_0x2ac15f(0xe8)]=undefined,this['rs']=undefined,this[_0x2ac15f(0xea)]=undefined,this['framebuffer']=undefined,this['isUpdate']=![];}function _0x1f2a(_0x45ebad,_0x4e9d36){_0x45ebad=_0x45ebad-0xce;let _0x29e930=_0x29e9[_0x45ebad];return _0x29e930;}DepthFramebuffer[_0x25923d(0xdc)]=Object[_0x25923d(0xd2)](RenderTarget[_0x25923d(0xdc)]),DepthFramebuffer[_0x25923d(0xdc)]['constructor']=RenderTarget,DepthFramebuffer['prototype'][_0x25923d(0xe9)]=function(_0x39d141){const _0x2ce0b0=_0x25923d;let _0xc52581=_0x39d141[_0x2ce0b0(0xee)],_0xbe8b5=_0x39d141[_0x2ce0b0(0xd1)];(!this['framebuffer']||this[_0x2ce0b0(0xed)]!==_0xc52581||this[_0x2ce0b0(0xf5)]!==_0xbe8b5)&&(this[_0x2ce0b0(0xed)]=_0xc52581,this[_0x2ce0b0(0xf5)]=_0xbe8b5,this[_0x2ce0b0(0xea)]=this[_0x2ce0b0(0xea)]&&!this[_0x2ce0b0(0xea)][_0x2ce0b0(0xdb)]()&&this[_0x2ce0b0(0xea)]['destroy'](),this[_0x2ce0b0(0xea)]=new Cesium[(_0x2ce0b0(0x101))]({'context':_0x39d141,'width':_0xc52581,'height':_0xbe8b5,'pixelFormat':Cesium[_0x2ce0b0(0xdf)]['RGBA'],'pixelDatatype':Cesium['PixelDatatype'][_0x2ce0b0(0xe5)],'sampler':new Cesium[(_0x2ce0b0(0xfe))]({'wrapS':Cesium['TextureWrap'][_0x2ce0b0(0xfc)],'wrapT':Cesium[_0x2ce0b0(0x104)][_0x2ce0b0(0xfc)],'minificationFilter':Cesium[_0x2ce0b0(0xd7)][_0x2ce0b0(0x105)],'magnificationFilter':Cesium[_0x2ce0b0(0xf0)][_0x2ce0b0(0x105)]})}),this['framebuffer']=this['framebuffer']&&!this['framebuffer'][_0x2ce0b0(0xdb)]()&&this['framebuffer'][_0x2ce0b0(0xe2)](),this[_0x2ce0b0(0xe3)]=new Cesium['Framebuffer']({'context':_0x39d141,'colorTextures':[this[_0x2ce0b0(0xea)]],'destroyAttachments':![]}));},DepthFramebuffer[_0x25923d(0xdc)]['_updateCopyCommand']=function(_0x16c1d7){const _0x5ea998=_0x25923d;(!this['rs']||!Cesium[_0x5ea998(0xd4)]['equals'](this[_0x5ea998(0xdd)][_0x5ea998(0xf2)],this['rs'][_0x5ea998(0xf2)]))&&(this['rs']=Cesium[_0x5ea998(0xfa)]['fromCache']({'viewport':this[_0x5ea998(0xdd)][_0x5ea998(0xf2)]}));if(!this[_0x5ea998(0xf1)]){let _0x31be11=_0x5ea998(0xeb);this[_0x5ea998(0xf1)]=_0x16c1d7[_0x5ea998(0xd5)](_0x31be11,{'uniformMap':{'u_depthTexture':()=>{const _0x402fa7=_0x5ea998;return this[_0x402fa7(0xe8)];}},'owner':this});}!this[_0x5ea998(0xef)]&&(this[_0x5ea998(0xef)]=new Cesium['ClearCommand']({'color':new Cesium['Color'](0x0,0x0,0x0,0x0),'stencil':0x0,'depth':0x1,'owner':this})),this[_0x5ea998(0xf1)][_0x5ea998(0xff)]=this['rs'],this[_0x5ea998(0xf1)][_0x5ea998(0xe3)]=this['framebuffer'],this[_0x5ea998(0xef)][_0x5ea998(0xe3)]=this['framebuffer'];},DepthFramebuffer[_0x25923d(0xdc)]['begin']=function(_0x4fcc2d){const _0x148e5b=_0x25923d;this[_0x148e5b(0xd3)][_0x148e5b(0xce)](_0x4fcc2d[_0x148e5b(0xe4)],_0x4fcc2d[_0x148e5b(0xd8)]['viewport'],_0x4fcc2d[_0x148e5b(0xe6)]),this[_0x148e5b(0xdd)][_0x148e5b(0xe3)]=this['sceneFramebuffer']['getFramebuffer'](),Cesium[_0x148e5b(0xd4)][_0x148e5b(0xf3)](_0x4fcc2d[_0x148e5b(0xd8)]['viewport'],this['passState']['viewport']);let _0xee35dc=_0x4fcc2d['context'];return this[_0x148e5b(0xe9)](_0xee35dc),this[_0x148e5b(0xf7)](_0xee35dc),this[_0x148e5b(0xef)][_0x148e5b(0xcf)](_0xee35dc,this[_0x148e5b(0xdd)]),_0x4fcc2d[_0x148e5b(0xde)][_0x148e5b(0x103)][_0x148e5b(0xd9)]=!![],this[_0x148e5b(0xf6)]&&this[_0x148e5b(0xf6)](_0x4fcc2d[_0x148e5b(0xde)]),this[_0x148e5b(0xdd)];},DepthFramebuffer['prototype']['end']=function(_0x284d2e,_0x3b3cd2){const _0x1fa84a=_0x25923d;_0x284d2e[_0x1fa84a(0x103)]['pick']=![],_0x284d2e['passes'][_0x1fa84a(0xd9)]=![],this[_0x1fa84a(0xd6)]&&this['endFunc'](_0x284d2e),this[_0x1fa84a(0xe8)]=_0x3b3cd2[_0x1fa84a(0xe3)]['depthStencilTexture'],this[_0x1fa84a(0xf1)]&&this[_0x1fa84a(0xf1)][_0x1fa84a(0xcf)](_0x284d2e['context'],_0x3b3cd2);},DepthFramebuffer[_0x25923d(0xdc)][_0x25923d(0xdb)]=function(){return ![];},DepthFramebuffer[_0x25923d(0xdc)][_0x25923d(0xe2)]=function(){const _0x196fec=_0x25923d;this[_0x196fec(0xea)]=this[_0x196fec(0xea)]&&!this[_0x196fec(0xea)][_0x196fec(0xdb)]()&&this['depthTexture'][_0x196fec(0xe2)](),this['framebuffer']=this['framebuffer']&&!this['framebuffer']['isDestroyed']()&&this[_0x196fec(0xe3)][_0x196fec(0xe2)]();if(this[_0x196fec(0xf1)]){let _0x78c591=this[_0x196fec(0xf1)]['sp'];_0x78c591=_0x78c591&&!_0x78c591[_0x196fec(0xdb)]()&&_0x78c591[_0x196fec(0xe2)]();let _0x5efaea=this[_0x196fec(0xf1)]['vertexArray'];_0x5efaea=_0x5efaea&&!_0x5efaea[_0x196fec(0xdb)]()&&_0x5efaea[_0x196fec(0xe2)](),this[_0x196fec(0xf1)]=undefined;}return this['clearCommand']=undefined,this[_0x196fec(0xe8)]=undefined,this[_0x196fec(0xfb)]=![],Cesium[_0x196fec(0xe7)](this);};

    var _0x1cb0=['167rnJHKj','2657QnAONa','3013BsFLzd','1067515xpVEtK','585397cKZojy','86YYjBgS','86584xGoItq','9914FqxchQ','495472PkUnrZ'];(function(_0x209e72,_0x2ca672){var _0x1ac263=_0x517f;while(!![]){try{var _0x4b7a90=-parseInt(_0x1ac263(0xeb))+-parseInt(_0x1ac263(0xf0))+parseInt(_0x1ac263(0xf2))+-parseInt(_0x1ac263(0xea))+-parseInt(_0x1ac263(0xec))*-parseInt(_0x1ac263(0xee))+parseInt(_0x1ac263(0xf1))*-parseInt(_0x1ac263(0xed))+parseInt(_0x1ac263(0xef));if(_0x4b7a90===_0x2ca672)break;else _0x209e72['push'](_0x209e72['shift']());}catch(_0x3c668e){_0x209e72['push'](_0x209e72['shift']());}}}(_0x1cb0,0x52841));function _0x517f(_0x9d2b6c,_0x3cf55e){_0x9d2b6c=_0x9d2b6c-0xea;var _0x1cb09f=_0x1cb0[_0x9d2b6c];return _0x1cb09f;}var _0x453feb = '\x0a\x20\x20\x20\x20attribute\x20vec4\x20aPosition;\x0a\x20\x20\x20\x20varying\x20vec4\x20vClipPos;\x0a\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vClipPos\x20=\x20czm_modelViewProjection\x20*\x20vec4(aPosition.xyz,\x201.0);\x0a\x09\x20\x20\x20\x20gl_Position\x20=\x20vClipPos;\x0a\x20\x20\x20\x20}\x0a';

    var _0x53dd=['2583104SyITPu','5735YWFNHv','2243LWvPUy','179EFeptI','18719MOfCFZ','4177JPOFCE','\x0a#ifdef\x20GL_EXT_frag_depth\x0a#extension\x20GL_EXT_frag_depth\x20:\x20enable\x0a#endif\x0a#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a\x0auniform\x20vec4\x20uVisibleAreaColor;\x0auniform\x20vec4\x20uHiddenAreaColor;\x0auniform\x20vec2\x20uTextureSize;\x0auniform\x20sampler2D\x20uGlobalDepthTexture;\x0auniform\x20sampler2D\x20uTexture;\x0auniform\x20mat4\x20uRenderTextureMatrix;\x0avarying\x20vec4\x20vClipPos;\x0a\x0afloat\x20getDepth(in\x20vec4\x20depth)\x0a{\x0a\x20\x20\x20\x20float\x20z_window\x20=\x20czm_unpackDepth(depth);\x0a\x20\x20\x20\x20return\x20z_window;\x0a}\x0a\x0afloat\x20getDepthFromShadowMap(in\x20sampler2D\x20viewShedTexture,\x20in\x20vec4\x20texCoord)\x0a{\x0a\x09vec2\x20tCoord;\x0a\x20\x20\x20\x20tCoord\x20=\x20texCoord.xy\x20*\x20uTextureSize\x20-\x200.5;\x0a\x09float\x20x0\x20=\x20floor(tCoord.x);\x0a\x09float\x20x1\x20=\x20ceil(tCoord.x);\x0a\x09float\x20y0\x20=\x20floor(tCoord.y);\x0a\x09float\x20y1\x20=\x20ceil(tCoord.y);\x0a\x09vec2\x20invTexSize\x20=\x201.0\x20/\x20uTextureSize;\x0a\x09vec2\x20t00\x20=\x20vec2((x0\x20+\x200.5)\x20*\x20invTexSize.x,\x20(y0\x20+\x200.5)\x20*\x20invTexSize.y);\x0a\x09vec2\x20t10\x20=\x20vec2((x1\x20+\x200.5)\x20*\x20invTexSize.x,\x20(y0\x20+\x200.5)\x20*\x20invTexSize.y);\x0a\x09vec2\x20t01\x20=\x20vec2((x0\x20+\x200.5)\x20*\x20invTexSize.x,\x20(y1\x20+\x200.5)\x20*\x20invTexSize.y);\x0a\x09vec2\x20t11\x20=\x20vec2((x1\x20+\x200.5)\x20*\x20invTexSize.x,\x20(y1\x20+\x200.5)\x20*\x20invTexSize.y);\x0a\x09float\x20z00\x20=\x20getDepth(texture2D(uTexture,\x20t00));\x0a\x09float\x20z10\x20=\x20getDepth(texture2D(uTexture,\x20t01));\x0a\x09float\x20z01\x20=\x20getDepth(texture2D(uTexture,\x20t10));\x0a\x09float\x20z11\x20=\x20getDepth(texture2D(uTexture,\x20t11));\x0a\x09float\x20depth\x20=\x20max(max(z00,\x20z01),\x20max(z10,\x20z11));\x0a\x09return\x20depth;\x0a}\x0a\x0avoid\x20main()\x0a{\x0a\x09vec4\x20depthTexCoord\x20=\x20vClipPos\x20/\x20vClipPos.w;\x0a\x09depthTexCoord.xy\x20=\x20depthTexCoord.xy\x20*\x200.5\x20+\x200.5;\x0a\x09float\x20sceneDepth\x20=\x20czm_unpackDepth(texture2D(uGlobalDepthTexture,\x20depthTexCoord.xy));\x0a\x09sceneDepth\x20=\x20sceneDepth\x20*\x202.0\x20-\x201.0;\x0a\x09vec4\x20pos\x20=\x20vClipPos;\x0a\x09pos.z\x20=\x20sceneDepth\x20*\x20pos.w;\x0a\x09vec4\x20renderTextureCoord\x20=\x20uRenderTextureMatrix\x20*\x20pos;\x0a\x09vec4\x20texCoord\x20=\x20renderTextureCoord\x20/\x20renderTextureCoord.w;\x0a\x09texCoord.xyz\x20=\x20texCoord.xyz\x20*\x200.5\x20+\x200.5;\x0a\x09float\x20depth\x20=\x20getDepthFromShadowMap(uTexture,\x20texCoord);\x0a\x09float\x20dxc\x20=\x20abs(dFdx(texCoord.z));\x0a\x09float\x20dyc\x20=\x20abs(dFdy(texCoord.z));\x0a\x09float\x20dF\x20=\x20max(dxc,\x20dyc)\x20*\x203.0;\x0a\x09float\x20bias\x20=\x201.0e-6\x20+\x20dF;\x0a\x09float\x20c\x20=\x20float(depth\x20+\x20bias\x20<\x20texCoord.z);\x0a\x09vec4\x20finalColor\x20=\x20mix(uVisibleAreaColor,\x20uHiddenAreaColor,\x20vec4(c));\x0a\x09if(finalColor.a\x20<\x200.1)\x0a\x09{\x0a\x09\x09discard;\x0a\x09}\x0a\x09gl_FragColor\x20=\x20czm_gammaCorrect(finalColor);\x0a}\x0a','777493Lcdgbs','177uKQDjJ','11HacoEd','3041yuCckf','36oOehhF','118ATUHje'];var _0x51b136=_0x3c6c;function _0x3c6c(_0x3c9161,_0x461950){_0x3c9161=_0x3c9161-0x75;var _0x53ddb5=_0x53dd[_0x3c9161];return _0x53ddb5;}(function(_0x3b0c76,_0xf221b6){var _0xcdfa25=_0x3c6c;while(!![]){try{var _0x545cc0=-parseInt(_0xcdfa25(0x7f))*parseInt(_0xcdfa25(0x79))+-parseInt(_0xcdfa25(0x75))+parseInt(_0xcdfa25(0x80))*-parseInt(_0xcdfa25(0x7e))+parseInt(_0xcdfa25(0x77))*-parseInt(_0xcdfa25(0x7d))+-parseInt(_0xcdfa25(0x7c))*-parseInt(_0xcdfa25(0x7a))+parseInt(_0xcdfa25(0x78))*-parseInt(_0xcdfa25(0x76))+parseInt(_0xcdfa25(0x7b));if(_0x545cc0===_0xf221b6)break;else _0x3b0c76['push'](_0x3b0c76['shift']());}catch(_0xcc2f90){_0x3b0c76['push'](_0x3b0c76['shift']());}}}(_0x53dd,0x798b4));var _0x2b9b35 = _0x51b136(0x81);

    var _0x38c4=['12149OnFwqH','1396915VyATYh','1211819WpQfcl','11tXXjre','57YOejnN','551918pmvXVG','840831XAYFsu','31387mCkiNr','1492939RDSkha'];function _0x2d79(_0x31c8d2,_0x2e4db1){_0x31c8d2=_0x31c8d2-0xdf;var _0x38c4dc=_0x38c4[_0x31c8d2];return _0x38c4dc;}(function(_0x28f488,_0x3aff0c){var _0x1be3d7=_0x2d79;while(!![]){try{var _0x557be5=parseInt(_0x1be3d7(0xe1))*parseInt(_0x1be3d7(0xe6))+parseInt(_0x1be3d7(0xe3))+parseInt(_0x1be3d7(0xe2))+-parseInt(_0x1be3d7(0xe7))+-parseInt(_0x1be3d7(0xe4))*-parseInt(_0x1be3d7(0xe0))+parseInt(_0x1be3d7(0xdf))+-parseInt(_0x1be3d7(0xe5));if(_0x557be5===_0x3aff0c)break;else _0x28f488['push'](_0x28f488['shift']());}catch(_0x5b0762){_0x28f488['push'](_0x28f488['shift']());}}}(_0x38c4,0xb7b50));var _0x31ac03 = 'attribute\x20vec4\x20aPosition;\x0avarying\x20vec4\x20vClipVertex;\x0avarying\x20float\x20fWindowZ;\x0avec4\x20depthClampFarPlane(vec4\x20clipPos)\x0a{\x0a\x09fWindowZ\x20=\x20(0.5\x20*\x20(clipPos.z\x20/\x20clipPos.w)\x20+\x200.5)\x20*\x20clipPos.w;\x0a\x09clipPos.z\x20=\x20min(clipPos.z,\x20clipPos.w);\x0a\x09return\x20clipPos;\x0a}\x0avoid\x20main()\x0a{\x0a\x20\x20\x20vec4\x20pos\x20=\x20czm_modelViewProjection\x20*\x20vec4(aPosition.xyz,\x201.0);\x0a\x20\x20\x20gl_Position\x20=\x20depthClampFarPlane(pos);\x0a}\x0a';

    var _0x4282=['2RfWTcR','1onjMhQ','263222oiSTmI','332531NjFFoT','9mYaWIC','1lbjRkd','328065ItpBsn','299800gsZeQC','1ATuRPE','390094dDujSv','1823ftnbpM','71311ZXbFOv'];(function(_0x3d4d38,_0x2e0bc2){var _0x39a3d8=_0x4829;while(!![]){try{var _0x152c6a=parseInt(_0x39a3d8(0x1c4))+-parseInt(_0x39a3d8(0x1c7))*-parseInt(_0x39a3d8(0x1cd))+-parseInt(_0x39a3d8(0x1c8))*parseInt(_0x39a3d8(0x1c9))+parseInt(_0x39a3d8(0x1cc))*-parseInt(_0x39a3d8(0x1ce))+-parseInt(_0x39a3d8(0x1c6))*-parseInt(_0x39a3d8(0x1c5))+-parseInt(_0x39a3d8(0x1cb))+parseInt(_0x39a3d8(0x1ca))*parseInt(_0x39a3d8(0x1cf));if(_0x152c6a===_0x2e0bc2)break;else _0x3d4d38['push'](_0x3d4d38['shift']());}catch(_0x366a1e){_0x3d4d38['push'](_0x3d4d38['shift']());}}}(_0x4282,0x48437));function _0x4829(_0x500856,_0x402538){_0x500856=_0x500856-0x1c4;var _0x4282ae=_0x4282[_0x500856];return _0x4282ae;}var _0x1642f4 = '\x0a#ifdef\x20GL_EXT_frag_depth\x0a#extension\x20GL_EXT_frag_depth\x20:\x20enable\x0a#endif\x0auniform\x20vec4\x20uColor;\x0avarying\x20float\x20fWindowZ;\x0avoid\x20main()\x0a{\x0a#ifdef\x20GL_EXT_frag_depth\x0a\x09gl_FragDepthEXT\x20=\x20min(fWindowZ\x20*\x20gl_FragCoord.w,\x201.0);\x0a#endif\x0a\x20\x20\x20gl_FragColor\x20=\x20uColor;\x0a}';

    const _0x5105=['Math','cos','shallowClone','BufferUsage','Color','NOT_EQUAL','DEGREES_PER_RADIAN','segmentCount','sin','inverseViewMatrix','GREATER','3663paYLqX','endFunc','tan','DrawCommand','_destroyCommand','boundingSphere','LINES','farToNearRatio','camera','_hintLineColor','createTypedArray','ALPHA_BLEND','578488hdUFyL','shaderProgram','build','97nzyzel','362328YHKiLR','cameraDepthBuffer','PrimitiveType','isDestroyed','beginFunc','globalDepthBuffer','destroy','Pass','name','vertexArray','21SAHaOd','Buffer','clone','clear','isUpdate','context','UNIT_Z','far','heading','abs','STATIC_DRAW','renderState','createIndexBuffer','useLogDepth','width','Cartesian2','view','invViewMatrix','aspectRatio','globalName','_projection','_direction','depthTexture','ComponentDatatype','UNIT_Y','fbo','_updateCamera','lineCommand','4984SzWioZ','projectionMatrix','renderTextureMatrix','stencilCommand','ShaderSource','ZERO','pitch','ShaderProgram','_setRenderTarget','fromDegreesArrayHeights','uniformMap','viewMatrix','_context','viewProjectionMatrix','colorCommand','3HiDCBN','DECREMENT_WRAP','max','Matrix4','FLOAT','add','_global','_verticalFov','frustum','UNSIGNED_SHORT','_viewPosition','roll','center','_horizontalFov','prototype','pick','OPAQUE','IndexDatatype','push','_distance','primitives','setView','StencilOperation','cross','_hiddenAreaColor','BoundingSphere','RenderState','Cartesian3','_removeRenderTarget','normalize','setDistDirByPoint','86539kwsvRs','RADIANS_PER_DEGREE','fov','DepthFunction','_pitch','multiply','ALWAYS','scene','BlendingState','StencilFunction','defineProperties','update','atan','subtract','_visibleAreaColor','position','near','height','112FHbPIA','frustumCommandsList','fromCache','_createCommand','717849kJIHIh','2863WpWBHZ','KEEP','dot','VertexArray','depth','magnitude','dirty'];const _0x5ebca0=_0x1ee7;(function(_0x5b82e8,_0x2187f4){const _0x24bcb0=_0x1ee7;while(!![]){try{const _0x234006=-parseInt(_0x24bcb0(0x162))*parseInt(_0x24bcb0(0x183))+parseInt(_0x24bcb0(0x184))+-parseInt(_0x24bcb0(0x180))+parseInt(_0x24bcb0(0x18e))*parseInt(_0x24bcb0(0x174))+parseInt(_0x24bcb0(0x15d))*parseInt(_0x24bcb0(0x11d))+parseInt(_0x24bcb0(0x161))+parseInt(_0x24bcb0(0x12c))*-parseInt(_0x24bcb0(0x14b));if(_0x234006===_0x2187f4)break;else _0x5b82e8['push'](_0x5b82e8['shift']());}catch(_0x1e2fe7){_0x5b82e8['push'](_0x5b82e8['shift']());}}}(_0x5105,0x925c4));function ViewShed3D(_0x217916){const _0x51f668=_0x1ee7;this[_0x51f668(0x152)]=_0x217916,this[_0x51f668(0x185)]=new DepthFramebuffer(_0x217916['_context']),this['globalDepthBuffer']=new DepthFramebuffer(_0x217916[_0x51f668(0x129)]),this[_0x51f668(0x18c)]='',this[_0x51f668(0x114)]='',this[_0x51f668(0x170)]=0x14,this[_0x51f668(0x136)]=[0x0,0x0,0x0],this[_0x51f668(0x116)]=0x0,this[_0x51f668(0x14f)]=0x0,this['_horizontalFov']=0x5a,this[_0x51f668(0x133)]=0x3c,this[_0x51f668(0x13f)]=0x64,this[_0x51f668(0x159)]=new Cesium[(_0x51f668(0x16d))](0x0,0x1,0x0,0.5),this[_0x51f668(0x144)]=new Cesium[(_0x51f668(0x16d))](0x1,0x0,0x0,0.5),this[_0x51f668(0x17d)]=new Cesium[(_0x51f668(0x16d))](0x1,0x1,0x1,0x1),this[_0x51f668(0x179)]=new Cesium[(_0x51f668(0x145))](),this[_0x51f668(0x12a)]=new Cesium[(_0x51f668(0x12f))](),this['invViewMatrix']=new Cesium['Matrix4'](),this[_0x51f668(0x11f)]=new Cesium[(_0x51f668(0x12f))](),this[_0x51f668(0x12b)]=undefined,this[_0x51f668(0x120)]=undefined,this[_0x51f668(0x11c)]=undefined,this['dirty']=![];}function _0x1ee7(_0x46d421,_0x399617){_0x46d421=_0x46d421-0x106;let _0x51051e=_0x5105[_0x46d421];return _0x51051e;}Object[_0x5ebca0(0x155)](ViewShed3D[_0x5ebca0(0x13a)],{'viewPosition':{'get':function(){const _0x23de10=_0x5ebca0;return this[_0x23de10(0x136)];},'set':function(_0x482545){const _0x552dd8=_0x5ebca0;this[_0x552dd8(0x136)]=_0x482545;}},'direction':{'get':function(){const _0x480d3c=_0x5ebca0;return this[_0x480d3c(0x116)];},'set':function(_0x5aa78e){const _0x16907d=_0x5ebca0;this[_0x16907d(0x116)]=_0x5aa78e,this[_0x16907d(0x168)]=!![];}},'pitch':{'get':function(){const _0x5ae2f5=_0x5ebca0;return this[_0x5ae2f5(0x14f)];},'set':function(_0x42c294){const _0x2f9cd8=_0x5ebca0;this[_0x2f9cd8(0x14f)]=_0x42c294,this['dirty']=!![];}},'horizontalFov':{'get':function(){const _0x46a051=_0x5ebca0;return this[_0x46a051(0x139)];},'set':function(_0x37fee4){const _0x844f48=_0x5ebca0;this[_0x844f48(0x139)]=_0x37fee4,this[_0x844f48(0x168)]=!![];}},'verticalFov':{'get':function(){return this['_verticalFov'];},'set':function(_0x488ca0){const _0x4843ab=_0x5ebca0;this['_verticalFov']=_0x488ca0,this[_0x4843ab(0x168)]=!![];}},'distance':{'get':function(){const _0x434b6a=_0x5ebca0;return this[_0x434b6a(0x13f)];},'set':function(_0x8190f9){this['_distance']=Math['max'](_0x8190f9,0x0),this['dirty']=!![];}}}),ViewShed3D[_0x5ebca0(0x13a)][_0x5ebca0(0x11b)]=function(_0xd27742){const _0x11eaa9=_0x5ebca0;let _0x9d1d51=_0xd27742[_0x11eaa9(0x17c)],_0x36b50a=this[_0x11eaa9(0x139)]*Cesium['Math']['RADIANS_PER_DEGREE'],_0x2783ae=this[_0x11eaa9(0x133)]*Cesium[_0x11eaa9(0x169)][_0x11eaa9(0x14c)],_0x4356cc=Math[_0x11eaa9(0x176)](_0x36b50a*0.5),_0x561d6e=Math[_0x11eaa9(0x176)](_0x2783ae*0.5),_0x495315=_0x4356cc/_0x561d6e,_0x114552=this[_0x11eaa9(0x13f)]*0.001,_0xab22be=Math[_0x11eaa9(0x12e)](this[_0x11eaa9(0x13f)],0xa),_0x78317c=this[_0x11eaa9(0x116)]*Cesium['Math'][_0x11eaa9(0x14c)],_0x56ea60=this[_0x11eaa9(0x14f)]*Cesium[_0x11eaa9(0x169)]['RADIANS_PER_DEGREE'],_0x46948d=Cesium[_0x11eaa9(0x147)][_0x11eaa9(0x126)](this[_0x11eaa9(0x136)])[0x0],_0x69ecf9=_0x9d1d51[_0x11eaa9(0x134)][_0x11eaa9(0x113)],_0x30e2e7=_0x9d1d51[_0x11eaa9(0x134)][_0x11eaa9(0x14d)],_0x3f70af=_0x9d1d51[_0x11eaa9(0x134)]['near'],_0x23b4df=_0x9d1d51['frustum'][_0x11eaa9(0x108)],_0x4d4546=new Cesium['Cartesian3'](),_0x1c24b1=_0x9d1d51['heading'],_0x134e98=_0x9d1d51[_0x11eaa9(0x123)];Cesium['Cartesian3'][_0x11eaa9(0x190)](_0x9d1d51[_0x11eaa9(0x15a)],_0x4d4546);let _0x5ed474=_0xd27742[_0x11eaa9(0x10e)],_0x3ff181=this[_0x11eaa9(0x152)]['farToNearRatio'];this['cameraDepthBuffer'][_0x11eaa9(0x192)]=!![],this['cameraDepthBuffer'][_0x11eaa9(0x188)]=_0x827690=>{const _0x313f71=_0x11eaa9;_0x827690['useLogDepth']=![],_0x69ecf9=_0x9d1d51[_0x313f71(0x134)][_0x313f71(0x113)],_0x30e2e7=_0x9d1d51[_0x313f71(0x134)]['fov'],_0x3f70af=_0x9d1d51[_0x313f71(0x134)][_0x313f71(0x15b)],_0x23b4df=_0x9d1d51['frustum'][_0x313f71(0x108)],_0x1c24b1=_0x9d1d51[_0x313f71(0x109)],_0x134e98=_0x9d1d51[_0x313f71(0x123)],Cesium[_0x313f71(0x147)][_0x313f71(0x190)](_0x9d1d51['position'],_0x4d4546),_0x9d1d51[_0x313f71(0x134)][_0x313f71(0x113)]=_0x495315,_0x9d1d51['frustum'][_0x313f71(0x14d)]=_0x36b50a,_0x9d1d51[_0x313f71(0x134)][_0x313f71(0x15b)]=0x1,_0x9d1d51[_0x313f71(0x134)][_0x313f71(0x108)]=_0xab22be+0x1,_0x9d1d51['setView']({'destination':_0x46948d,'orientation':{'heading':_0x78317c,'pitch':_0x56ea60,'roll':_0x9d1d51[_0x313f71(0x137)]}}),Cesium[_0x313f71(0x12f)][_0x313f71(0x150)](_0x9d1d51[_0x313f71(0x134)][_0x313f71(0x11e)],_0x9d1d51[_0x313f71(0x128)],this[_0x313f71(0x12a)]),Cesium[_0x313f71(0x12f)][_0x313f71(0x190)](_0x9d1d51[_0x313f71(0x172)],this['invViewMatrix']),Cesium[_0x313f71(0x147)][_0x313f71(0x190)](Cesium[_0x313f71(0x147)][_0x313f71(0x122)],this[_0x313f71(0x179)][_0x313f71(0x138)]),this[_0x313f71(0x179)]['radius']=this[_0x313f71(0x13f)],Cesium['BoundingSphere']['transform'](this['boundingSphere'],this[_0x313f71(0x112)],this[_0x313f71(0x179)]);},this[_0x11eaa9(0x185)][_0x11eaa9(0x175)]=_0x3f8551=>{const _0x2d4cfb=_0x11eaa9;_0x9d1d51[_0x2d4cfb(0x141)]({'destination':_0x4d4546,'orientation':{'heading':_0x1c24b1,'pitch':_0x134e98,'roll':_0x9d1d51[_0x2d4cfb(0x137)]},'convert':![]}),_0x9d1d51[_0x2d4cfb(0x134)][_0x2d4cfb(0x113)]=_0x69ecf9,_0x9d1d51[_0x2d4cfb(0x134)][_0x2d4cfb(0x14d)]=_0x30e2e7,_0x9d1d51[_0x2d4cfb(0x134)]['near']=_0x3f70af,_0x9d1d51[_0x2d4cfb(0x134)][_0x2d4cfb(0x108)]=_0x23b4df,this[_0x2d4cfb(0x185)][_0x2d4cfb(0x192)]=![],_0x3f8551[_0x2d4cfb(0x10e)]=_0x5ed474;},this['globalDepthBuffer']['isUpdate']=!![],this[_0x11eaa9(0x189)][_0x11eaa9(0x188)]=_0x212bc5=>{const _0x1b8b7f=_0x11eaa9;_0x212bc5[_0x1b8b7f(0x10e)]=![],_0x9d1d51[_0x1b8b7f(0x134)][_0x1b8b7f(0x15b)]=0xa,this[_0x1b8b7f(0x152)][_0x1b8b7f(0x17b)]=this[_0x1b8b7f(0x152)]['logarithmicDepthFarToNearRatio'];},this['globalDepthBuffer'][_0x11eaa9(0x175)]=_0x51521d=>{const _0x58a529=_0x11eaa9;if(this[_0x58a529(0x152)][_0x58a529(0x111)]['frustumCommandsList']['length']>0x0){let _0x249913=this[_0x58a529(0x152)]['view'][_0x58a529(0x15e)][0x0];_0x9d1d51['frustum'][_0x58a529(0x15b)]=_0x249913[_0x58a529(0x15b)],_0x9d1d51['frustum'][_0x58a529(0x108)]=_0x249913[_0x58a529(0x108)];}let _0x52e041=Cesium['Matrix4']['inverse'](_0x9d1d51[_0x58a529(0x134)][_0x58a529(0x11e)],new Cesium[(_0x58a529(0x12f))]()),_0x2448f7=Cesium['Matrix4'][_0x58a529(0x150)](_0x9d1d51[_0x58a529(0x172)],_0x52e041,new Cesium[(_0x58a529(0x12f))]());Cesium['Matrix4'][_0x58a529(0x150)](this[_0x58a529(0x12a)],_0x2448f7,this['renderTextureMatrix']),_0x51521d[_0x58a529(0x10e)]=_0x5ed474,this[_0x58a529(0x152)][_0x58a529(0x17b)]=_0x3ff181,_0x9d1d51[_0x58a529(0x134)][_0x58a529(0x15b)]=_0x3f70af,_0x9d1d51[_0x58a529(0x134)][_0x58a529(0x108)]=_0x23b4df;};};function createVertices(_0x2fe537){const _0x199dfe=_0x5ebca0,_0x2715e2=_0x2fe537['segmentCount'],_0x2a9757=_0x2fe537[_0x199dfe(0x170)]+0x1,_0x3c9c6f=_0x2fe537['_distance'];let _0x889e6d=_0x2a9757*_0x2a9757+0x1,_0x189e51=Cesium['ComponentDatatype'][_0x199dfe(0x17e)](Cesium[_0x199dfe(0x118)][_0x199dfe(0x130)],_0x889e6d*0x3),_0x4c5e20=_0x2fe537[_0x199dfe(0x139)]*Cesium[_0x199dfe(0x169)]['RADIANS_PER_DEGREE'],_0x4f3549=_0x2fe537[_0x199dfe(0x133)]*Cesium[_0x199dfe(0x169)][_0x199dfe(0x14c)],_0x33aa2c=Math[_0x199dfe(0x176)](_0x4c5e20*0.5),_0x564aae=Math['tan'](_0x4f3549*0.5),_0xa4087f=Math['PI']-_0x4c5e20*0.5,_0x30b012=_0x3c9c6f*_0x564aae,_0x48822b=0x0,_0x5035cf=0x0,_0x4446c5=_0x4c5e20/_0x2715e2,_0x81c15=0x3;for(let _0x39312b=0x0;_0x39312b<_0x2a9757;_0x39312b++){_0x48822b=_0xa4087f+_0x39312b*_0x4446c5;let _0x299500=_0x30b012/(_0x3c9c6f/Math[_0x199dfe(0x16a)](_0x48822b)),_0x21f050=Math[_0x199dfe(0x157)](_0x299500),_0x19e190=-_0x21f050,_0x5015cc=_0x21f050*0x2/_0x2715e2;for(let _0x20d2e8=0x0;_0x20d2e8<_0x2a9757;_0x20d2e8++){_0x5035cf=_0x19e190+_0x20d2e8*_0x5015cc;let _0x1cf457=_0x3c9c6f*Math['cos'](_0x5035cf)*Math[_0x199dfe(0x171)](_0x48822b),_0x4e1e96=_0x3c9c6f*Math['sin'](_0x5035cf),_0x34312d=_0x3c9c6f*Math[_0x199dfe(0x16a)](_0x5035cf)*Math[_0x199dfe(0x16a)](_0x48822b);_0x189e51[_0x81c15++]=_0x1cf457,_0x189e51[_0x81c15++]=_0x4e1e96,_0x189e51[_0x81c15++]=_0x34312d;}}return _0x189e51;}function createFaceIndices(_0xdc5b4d){const _0x319da2=_0x5ebca0,_0x1aa373=_0xdc5b4d[_0x319da2(0x170)],_0x5b5085=_0x1aa373+0x1;let _0x220844=_0x1aa373*_0x1aa373*0x3*0x2+_0x1aa373*0x3*0x4,_0x8ab00=Cesium[_0x319da2(0x118)][_0x319da2(0x17e)](Cesium['ComponentDatatype']['UNSIGNED_SHORT'],_0x220844),_0x43d9bf=0x0,_0x17e4fe=0x1;for(let _0xa66a98=0x0;_0xa66a98<_0x1aa373;_0xa66a98++){for(let _0x3c0b44=0x0;_0x3c0b44<_0x1aa373;_0x3c0b44++){_0x8ab00[_0x43d9bf++]=_0x17e4fe+_0xa66a98+_0x3c0b44*_0x5b5085,_0x8ab00[_0x43d9bf++]=_0x17e4fe+_0xa66a98+0x1+_0x3c0b44*_0x5b5085,_0x8ab00[_0x43d9bf++]=_0x17e4fe+_0xa66a98+(_0x3c0b44+0x1)*_0x5b5085,_0x8ab00[_0x43d9bf++]=_0x17e4fe+_0xa66a98+0x1+_0x3c0b44*_0x5b5085,_0x8ab00[_0x43d9bf++]=_0x17e4fe+_0xa66a98+0x1+(_0x3c0b44+0x1)*_0x5b5085,_0x8ab00[_0x43d9bf++]=_0x17e4fe+_0xa66a98+(_0x3c0b44+0x1)*_0x5b5085;}}for(let _0x1068a3=0x0;_0x1068a3<_0x1aa373;_0x1068a3++){_0x8ab00[_0x43d9bf++]=_0x1068a3+0x1+_0x17e4fe,_0x8ab00[_0x43d9bf++]=_0x1068a3+_0x17e4fe,_0x8ab00[_0x43d9bf++]=0x0,_0x8ab00[_0x43d9bf++]=0x0,_0x8ab00[_0x43d9bf++]=_0x1068a3+_0x1aa373*_0x5b5085+_0x17e4fe,_0x8ab00[_0x43d9bf++]=_0x1068a3+0x1+_0x1aa373*_0x5b5085+_0x17e4fe;}for(let _0x35e371=0x0;_0x35e371<_0x1aa373;_0x35e371++){_0x8ab00[_0x43d9bf++]=0x0,_0x8ab00[_0x43d9bf++]=_0x35e371*_0x5b5085+_0x17e4fe,_0x8ab00[_0x43d9bf++]=(_0x35e371+0x1)*_0x5b5085+_0x17e4fe,_0x8ab00[_0x43d9bf++]=_0x1aa373+(_0x35e371+0x1)*_0x5b5085+_0x17e4fe,_0x8ab00[_0x43d9bf++]=_0x1aa373+_0x35e371*_0x5b5085+_0x17e4fe,_0x8ab00[_0x43d9bf++]=0x0;}return _0x8ab00;}function createLineIndices(_0x109871){const _0x3cbc10=_0x5ebca0,_0x138a7a=_0x109871[_0x3cbc10(0x170)],_0x2fc269=_0x138a7a+0x1,_0x525f00=(0x4+_0x138a7a*0x5+_0x138a7a*0x2*0x3)*0x2;let _0x46f5cc=Cesium[_0x3cbc10(0x118)]['createTypedArray'](Cesium[_0x3cbc10(0x118)][_0x3cbc10(0x135)],_0x525f00),_0x26148d=0x0;_0x46f5cc[_0x26148d++]=0x0,_0x46f5cc[_0x26148d++]=0x1,_0x46f5cc[_0x26148d++]=0x0,_0x46f5cc[_0x26148d++]=_0x2fc269,_0x46f5cc[_0x26148d++]=0x0,_0x46f5cc[_0x26148d++]=_0x138a7a*_0x2fc269+0x1,_0x46f5cc[_0x26148d++]=0x0,_0x46f5cc[_0x26148d++]=_0x2fc269*_0x2fc269;for(let _0x46fcc6=0x0;_0x46fcc6<0x5;_0x46fcc6++){for(let _0x367cf8=0x0;_0x367cf8<_0x138a7a;_0x367cf8++){_0x46f5cc[_0x26148d++]=0x1+_0x367cf8+_0x2fc269*0x5*_0x46fcc6,_0x46f5cc[_0x26148d++]=0x1+(_0x367cf8+0x1)+_0x2fc269*0x5*_0x46fcc6;}}for(let _0x2a646f=0x0;_0x2a646f<0x5;_0x2a646f++){for(let _0x2c8a=0x0;_0x2c8a<_0x138a7a;_0x2c8a++){_0x46f5cc[_0x26148d++]=0x1+_0x2fc269*_0x2c8a+_0x2a646f*0x5,_0x46f5cc[_0x26148d++]=0x1+_0x2fc269*(_0x2c8a+0x1)+_0x2a646f*0x5;}}return _0x46f5cc;}ViewShed3D[_0x5ebca0(0x13a)][_0x5ebca0(0x160)]=function(_0x97f17d){const _0x55895e=_0x5ebca0;let _0xad50ff=createVertices(this),_0x58209f=createFaceIndices(this),_0x240acb=createLineIndices(this),_0x5edea3=_0x97f17d[_0x55895e(0x106)],_0xf747a=Cesium['Buffer']['createVertexBuffer']({'context':_0x5edea3,'typedArray':_0xad50ff,'usage':Cesium[_0x55895e(0x16c)][_0x55895e(0x10b)]}),_0x4a7c6b=Cesium[_0x55895e(0x18f)][_0x55895e(0x10d)]({'context':_0x5edea3,'typedArray':_0x58209f,'usage':Cesium[_0x55895e(0x16c)]['STATIC_DRAW'],'indexDatatype':Cesium[_0x55895e(0x13d)][_0x55895e(0x135)]}),_0x493c7c=[{'index':0x0,'vertexBuffer':_0xf747a,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype'][_0x55895e(0x130)],'offsetInBytes':0x0,'strideInBytes':0x3*0x4,'normalize':![]}],_0x2e19b8={'aPosition':0x0},_0x5d1b0d=new Cesium[(_0x55895e(0x165))]({'context':_0x5edea3,'attributes':_0x493c7c,'indexBuffer':_0x4a7c6b}),_0x2ef21f=new Cesium['ShaderSource']({'sources':[_0x453feb]}),_0x531f1f=new Cesium[(_0x55895e(0x121))]({'sources':[_0x2b9b35]}),_0x2b6094=Cesium['ShaderProgram'][_0x55895e(0x15f)]({'context':_0x5edea3,'vertexShaderSource':_0x2ef21f,'fragmentShaderSource':_0x531f1f,'attributeLocations':_0x2e19b8}),_0x309eef=Cesium[_0x55895e(0x146)]['fromCache']({'cull':{'enabled':![]},'depthTest':{'enabled':![]},'depthMask':![],'stencilTest':{'enabled':!![],'frontFunction':Cesium[_0x55895e(0x154)]['NOT_EQUAL'],'frontOperation':{'fail':Cesium['StencilOperation'][_0x55895e(0x163)],'zFail':Cesium[_0x55895e(0x142)]['KEEP'],'zPass':Cesium[_0x55895e(0x142)][_0x55895e(0x12d)]},'backFunction':Cesium[_0x55895e(0x154)][_0x55895e(0x16e)],'backOperation':{'fail':Cesium[_0x55895e(0x142)][_0x55895e(0x163)],'zFail':Cesium['StencilOperation'][_0x55895e(0x163)],'zPass':Cesium['StencilOperation'][_0x55895e(0x12d)]},'reference':0x0,'mask':~0x0},'blending':Cesium['BlendingState'][_0x55895e(0x17f)]});this[_0x55895e(0x12b)]=new Cesium[(_0x55895e(0x177))]({'primitiveType':Cesium[_0x55895e(0x186)]['TRIANGLES'],'modelMatrix':this[_0x55895e(0x112)],'boundingVolume':this[_0x55895e(0x179)],'pass':Cesium[_0x55895e(0x18b)]['OPAQUE'],'shaderProgram':_0x2b6094,'vertexArray':_0x5d1b0d,'renderState':_0x309eef,'owner':this,'cull':!![]}),this['colorCommand'][_0x55895e(0x127)]={'uVisibleAreaColor':()=>{const _0x432a6e=_0x55895e;return this[_0x432a6e(0x159)];},'uHiddenAreaColor':()=>{const _0x167d6e=_0x55895e;return this[_0x167d6e(0x144)];},'uRenderTextureMatrix':()=>{return this['renderTextureMatrix'];},'uTextureSize':()=>{const _0x3a0c5f=_0x55895e;let _0x278a0a=this['cameraDepthBuffer'][_0x3a0c5f(0x117)];return new Cesium[(_0x3a0c5f(0x110))](_0x278a0a[_0x3a0c5f(0x10f)],_0x278a0a[_0x3a0c5f(0x15c)]);},'uTexture':()=>{const _0x73971f=_0x55895e;return this[_0x73971f(0x185)][_0x73971f(0x117)];},'uGlobalDepthTexture':()=>{const _0x6e666d=_0x55895e;return this[_0x6e666d(0x189)][_0x6e666d(0x117)];}};let _0x1f1e04=Cesium['DrawCommand'][_0x55895e(0x16b)](this[_0x55895e(0x12b)]);_0x1f1e04[_0x55895e(0x10c)]=Cesium['RenderState'][_0x55895e(0x15f)]({'depthMask':![],'colorMask':{'red':![],'green':![],'blue':![],'alpha':![]},'depthTest':{'enabled':!![],'func':Cesium[_0x55895e(0x14e)][_0x55895e(0x173)]},'stencilTest':{'enabled':!![],'frontFunction':Cesium['StencilFunction'][_0x55895e(0x151)],'frontOperation':{'fail':Cesium['StencilOperation'][_0x55895e(0x163)],'zFail':Cesium[_0x55895e(0x142)][_0x55895e(0x163)],'zPass':Cesium[_0x55895e(0x142)]['INCREMENT_WRAP']},'backFunction':Cesium[_0x55895e(0x154)][_0x55895e(0x151)],'backOperation':{'fail':Cesium[_0x55895e(0x142)][_0x55895e(0x163)],'zFail':Cesium[_0x55895e(0x142)][_0x55895e(0x163)],'zPass':Cesium['StencilOperation'][_0x55895e(0x12d)]},'reference':0x0,'mask':~0x0}}),this[_0x55895e(0x120)]=_0x1f1e04;let _0xfd266f=Cesium[_0x55895e(0x18f)][_0x55895e(0x10d)]({'context':_0x5edea3,'typedArray':_0x240acb,'usage':Cesium[_0x55895e(0x16c)][_0x55895e(0x10b)],'indexDatatype':Cesium[_0x55895e(0x13d)][_0x55895e(0x135)]});this['lineCommand']=new Cesium[(_0x55895e(0x177))]({'primitiveType':Cesium[_0x55895e(0x186)][_0x55895e(0x17a)],'modelMatrix':this['invViewMatrix'],'boundingVolume':this[_0x55895e(0x179)],'pass':Cesium[_0x55895e(0x18b)][_0x55895e(0x13c)],'owner':this,'cull':!![]}),this[_0x55895e(0x11c)][_0x55895e(0x18d)]=new Cesium[(_0x55895e(0x165))]({'context':_0x5edea3,'attributes':_0x493c7c,'indexBuffer':_0xfd266f}),this[_0x55895e(0x11c)][_0x55895e(0x181)]=Cesium[_0x55895e(0x124)][_0x55895e(0x15f)]({'context':_0x5edea3,'vertexShaderSource':_0x31ac03,'fragmentShaderSource':_0x1642f4,'attributeLocations':_0x2e19b8}),this['lineCommand']['renderState']=Cesium[_0x55895e(0x146)][_0x55895e(0x15f)]({'cull':{'enabled':![]},'depthTest':{'enabled':!![]},'blending':Cesium[_0x55895e(0x153)]['ALPHA_BLEND']}),this['lineCommand']['uniformMap']={'uColor':()=>{const _0x3064a6=_0x55895e;return this[_0x3064a6(0x17d)];}};},ViewShed3D[_0x5ebca0(0x13a)][_0x5ebca0(0x14a)]=function(_0x54f93a){const _0x33e883=_0x5ebca0;let _0x453687=this[_0x33e883(0x152)][_0x33e883(0x17c)],_0xa1fda7=_0x453687[_0x33e883(0x115)],_0x1b83dc=Cesium[_0x33e883(0x147)][_0x33e883(0x126)](_0x54f93a)[0x0],_0x5bdcea=Cesium[_0x33e883(0x147)][_0x33e883(0x126)](this['_viewPosition'])[0x0],_0x23e058=new Cesium[(_0x33e883(0x147))]();Cesium['Cartesian3'][_0x33e883(0x158)](_0x1b83dc,_0x5bdcea,_0x23e058);let _0x5e6a3b=Cesium[_0x33e883(0x147)][_0x33e883(0x167)](_0x23e058);Cesium['Cartesian3'][_0x33e883(0x149)](_0x23e058,_0x23e058),this['distance']=_0x5e6a3b;let _0x589c4b=_0x453687[_0x33e883(0x109)],_0x5d9780=_0x453687[_0x33e883(0x123)],_0x445586=_0x453687[_0x33e883(0x137)],_0x1ee0df=new Cesium[(_0x33e883(0x147))]();Cesium[_0x33e883(0x147)][_0x33e883(0x190)](_0x453687[_0x33e883(0x15a)],_0x1ee0df);let _0x276ce1=_0x23e058['clone'](),_0x2eb5f2=_0x5bdcea['clone']();_0x2eb5f2=Cesium[_0x33e883(0x147)][_0x33e883(0x149)](_0x2eb5f2,_0x2eb5f2);Math[_0x33e883(0x10a)](Cesium['Cartesian3'][_0x33e883(0x164)](_0x2eb5f2,_0x276ce1))>=0x1&&(Math[_0x33e883(0x10a)](Cesium['Cartesian3'][_0x33e883(0x164)](_0x276ce1,Cesium[_0x33e883(0x147)][_0x33e883(0x119)]))<0x1?_0x2eb5f2=Cesium[_0x33e883(0x147)][_0x33e883(0x190)](Cartesian3[_0x33e883(0x119)],_0x2eb5f2):_0x2eb5f2=Cesium['Cartesian3'][_0x33e883(0x190)](Cartesian3[_0x33e883(0x107)],_0x2eb5f2));let _0x18b74e=new Cesium[(_0x33e883(0x147))]();Cesium[_0x33e883(0x147)][_0x33e883(0x143)](_0x2eb5f2,_0x276ce1,_0x18b74e),_0x18b74e=Cesium[_0x33e883(0x147)][_0x33e883(0x149)](_0x18b74e,_0x18b74e),Cesium[_0x33e883(0x147)][_0x33e883(0x143)](_0x276ce1,_0x18b74e,_0x2eb5f2),_0x2eb5f2=Cesium[_0x33e883(0x147)]['normalize'](_0x2eb5f2,_0x2eb5f2),_0x453687[_0x33e883(0x141)]({'destination':_0x5bdcea,'orientation':{'direction':_0x276ce1,'up':_0x2eb5f2},'convert':![]}),this['direction']=_0x453687[_0x33e883(0x109)]*Cesium['Math'][_0x33e883(0x16f)],this[_0x33e883(0x123)]=_0x453687[_0x33e883(0x123)]*Cesium[_0x33e883(0x169)][_0x33e883(0x16f)],_0x453687['setView']({'destination':_0x1ee0df,'orientation':{'heading':_0x589c4b,'pitch':_0x5d9780,'roll':_0x445586},'convert':![]});},ViewShed3D[_0x5ebca0(0x13a)][_0x5ebca0(0x178)]=function(){const _0x1b48a1=_0x5ebca0;this[_0x1b48a1(0x12b)]&&(this['colorCommand'][_0x1b48a1(0x18d)]=this[_0x1b48a1(0x12b)]['vertexArray']&&!this[_0x1b48a1(0x12b)]['vertexArray']['isDestroyed']()&&this['colorCommand'][_0x1b48a1(0x18d)]['destroy'](),this[_0x1b48a1(0x12b)]['shaderProgram']=this[_0x1b48a1(0x12b)]['shaderProgram']&&!this[_0x1b48a1(0x12b)][_0x1b48a1(0x181)][_0x1b48a1(0x187)]()&&this[_0x1b48a1(0x12b)]['shaderProgram'][_0x1b48a1(0x18a)](),this[_0x1b48a1(0x12b)]=undefined),this[_0x1b48a1(0x120)]&&(this['stencilCommand']['vertexArray']=this[_0x1b48a1(0x120)][_0x1b48a1(0x18d)]&&!this[_0x1b48a1(0x120)]['vertexArray'][_0x1b48a1(0x187)]()&&this[_0x1b48a1(0x120)][_0x1b48a1(0x18d)][_0x1b48a1(0x18a)](),this[_0x1b48a1(0x120)]['shaderProgram']=this['stencilCommand'][_0x1b48a1(0x181)]&&!this[_0x1b48a1(0x120)][_0x1b48a1(0x181)][_0x1b48a1(0x187)]()&&this[_0x1b48a1(0x120)][_0x1b48a1(0x181)][_0x1b48a1(0x18a)](),this[_0x1b48a1(0x120)]=undefined),this['lineCommand']&&(this[_0x1b48a1(0x11c)][_0x1b48a1(0x18d)]=this[_0x1b48a1(0x11c)][_0x1b48a1(0x18d)]&&!this[_0x1b48a1(0x11c)][_0x1b48a1(0x18d)]['isDestroyed']()&&this['lineCommand'][_0x1b48a1(0x18d)]['destroy'](),this[_0x1b48a1(0x11c)][_0x1b48a1(0x181)]=this[_0x1b48a1(0x11c)][_0x1b48a1(0x181)]&&!this[_0x1b48a1(0x11c)][_0x1b48a1(0x181)]['isDestroyed']()&&this[_0x1b48a1(0x11c)][_0x1b48a1(0x181)][_0x1b48a1(0x18a)](),this['lineCommand']=undefined);},ViewShed3D['prototype'][_0x5ebca0(0x156)]=function(_0x4ed8bc){const _0x505756=_0x5ebca0;if(_0x4ed8bc[_0x505756(0x11a)]||_0x4ed8bc['passes'][_0x505756(0x13b)]||_0x4ed8bc['passes'][_0x505756(0x166)])return;this[_0x505756(0x168)]&&(this[_0x505756(0x168)]=![],this['_destroyCommand'](),this[_0x505756(0x11b)](_0x4ed8bc),this[_0x505756(0x160)](_0x4ed8bc)),this['stencilCommand']&&_0x4ed8bc['commandList'][_0x505756(0x13e)](this[_0x505756(0x120)]),this['colorCommand']&&_0x4ed8bc['commandList'][_0x505756(0x13e)](this[_0x505756(0x12b)]),this[_0x505756(0x11c)]&&_0x4ed8bc['commandList'][_0x505756(0x13e)](this[_0x505756(0x11c)]);},ViewShed3D[_0x5ebca0(0x13a)][_0x5ebca0(0x182)]=function(){const _0x2a75cf=_0x5ebca0;this[_0x2a75cf(0x18c)]='viewshed3d'+this['scene']['_renderTargets']['length'],this[_0x2a75cf(0x114)]=this[_0x2a75cf(0x18c)]+_0x2a75cf(0x132),this[_0x2a75cf(0x152)][_0x2a75cf(0x125)](this[_0x2a75cf(0x18c)],this[_0x2a75cf(0x185)]),this['scene'][_0x2a75cf(0x125)](this[_0x2a75cf(0x114)],this[_0x2a75cf(0x189)]),this[_0x2a75cf(0x152)]['primitives'][_0x2a75cf(0x131)](this);},ViewShed3D[_0x5ebca0(0x13a)][_0x5ebca0(0x191)]=function(){const _0x464b63=_0x5ebca0;this['scene'][_0x464b63(0x148)](this[_0x464b63(0x18c)]),this['scene'][_0x464b63(0x148)](this['globalName']),this[_0x464b63(0x152)][_0x464b63(0x140)]['remove'](this);},ViewShed3D['prototype'][_0x5ebca0(0x187)]=function(){return ![];},ViewShed3D[_0x5ebca0(0x13a)]['destroy']=function(){const _0x312cf7=_0x5ebca0;this['cameraDepthBuffer']=this['cameraDepthBuffer'][_0x312cf7(0x18a)](),this[_0x312cf7(0x189)]=this['globalDepthBuffer'][_0x312cf7(0x18a)]();if(this[_0x312cf7(0x12b)]){let _0x76857c=this[_0x312cf7(0x12b)][_0x312cf7(0x18d)],_0x36e81f=this[_0x312cf7(0x12b)][_0x312cf7(0x181)];_0x76857c=_0x76857c&&!_0x76857c['isDestroyed']()&&_0x76857c[_0x312cf7(0x18a)](),_0x36e81f=_0x36e81f&&!_0x36e81f['isDestroyed']()&&_0x36e81f[_0x312cf7(0x18a)](),this['colorCommand']=undefined;}if(this[_0x312cf7(0x120)]){let _0x323ea2=this[_0x312cf7(0x120)][_0x312cf7(0x18d)],_0x1d95da=this['stencilCommand'][_0x312cf7(0x181)];_0x323ea2=_0x323ea2&&!_0x323ea2[_0x312cf7(0x187)]()&&_0x323ea2[_0x312cf7(0x18a)](),_0x1d95da=_0x1d95da&&!_0x1d95da['isDestroyed']()&&_0x1d95da[_0x312cf7(0x18a)](),this[_0x312cf7(0x120)]=undefined;}if(this[_0x312cf7(0x11c)]){let _0x5bdf86=this[_0x312cf7(0x11c)][_0x312cf7(0x18d)],_0xe2be7a=this[_0x312cf7(0x11c)][_0x312cf7(0x181)];_0x5bdf86=_0x5bdf86&&!_0x5bdf86['isDestroyed']()&&_0x5bdf86[_0x312cf7(0x18a)](),_0xe2be7a=_0xe2be7a&&!_0xe2be7a[_0x312cf7(0x187)]()&&_0xe2be7a[_0x312cf7(0x18a)](),this[_0x312cf7(0x11c)]=undefined;}};

    const _0x2df0=['3KNTNRX','namespaceURI','1xnXoHl','attributes','queryBooleanValue','queryNodes','2ctTBWZ','read','33962fLmRbq','true','getElementsByTagNameNS','textContent','indexOf','trim','localName','prefix','965364RFgcEt','523323FlCqnL','length','nodeType','push','queryFirstNode','queryBooleanAttribute','text/xml','substring','nodeValue','xmldom','queryStringValue','loadXML','getAttribute','210299DpZZQb','childNodes','queryNumericValue','toLowerCase','parseFromString','717300VzdCIe','nextSibling','119275hFfNQf','getChildValue','Microsoft.XMLDOM','getAttributeNodeNS','nodeName','531977DGEZbe'];const _0x29aa38=_0x33a0;function _0x33a0(_0x1f6004,_0x42b99e){_0x1f6004=_0x1f6004-0x1ee;let _0x2df00c=_0x2df0[_0x1f6004];return _0x2df00c;}(function(_0x27c397,_0x1dc5d2){const _0xe21f82=_0x33a0;while(!![]){try{const _0x5810f7=-parseInt(_0xe21f82(0x20a))+-parseInt(_0xe21f82(0x212))+-parseInt(_0xe21f82(0x201))+-parseInt(_0xe21f82(0x1f5))*-parseInt(_0xe21f82(0x208))+parseInt(_0xe21f82(0x1fa))+parseInt(_0xe21f82(0x1fc))*parseInt(_0xe21f82(0x202))+-parseInt(_0xe21f82(0x213))*-parseInt(_0xe21f82(0x204));if(_0x5810f7===_0x1dc5d2)break;else _0x27c397['push'](_0x27c397['shift']());}catch(_0x1b2ef6){_0x27c397['push'](_0x27c397['shift']());}}}(_0x2df0,0x7713f));function XMLParser(){}XMLParser[_0x29aa38(0x209)]=function(_0x1e32b3){const _0x587b53=_0x29aa38;let _0x421624=_0x1e32b3[_0x587b53(0x20e)]('<');_0x421624>0x0&&(_0x1e32b3=_0x1e32b3[_0x587b53(0x1ef)](_0x421624));if(DOMParser)return !XMLParser[_0x587b53(0x1f1)]&&(XMLParser[_0x587b53(0x1f1)]=new DOMParser()),XMLParser['xmldom'][_0x587b53(0x1f9)](_0x1e32b3,_0x587b53(0x1ee));return !XMLParser[_0x587b53(0x1f1)]&&(XMLParser['xmldom']=new ActiveXObject(_0x587b53(0x1fe))),XMLParser[_0x587b53(0x1f1)][_0x587b53(0x1f3)](_0x1e32b3);},XMLParser['getElementsByTagNameNS']=function(_0x2dc213,_0x531bfe,_0x59f26d){const _0x593a58=_0x29aa38;let _0x22d61f=[];if(_0x2dc213[_0x593a58(0x20c)])_0x22d61f=_0x2dc213[_0x593a58(0x20c)](_0x531bfe,_0x59f26d);else {let _0x55e6b1=_0x2dc213['getElementsByTagName']('*'),_0x127b4f,_0x129e1f;for(let _0x32095b=0x0,_0x4d5c5f=_0x55e6b1[_0x593a58(0x214)];_0x32095b<_0x4d5c5f;++_0x32095b){_0x127b4f=_0x55e6b1[_0x32095b],_0x129e1f=_0x127b4f[_0x593a58(0x211)]?_0x127b4f[_0x593a58(0x211)]+':'+_0x59f26d:_0x59f26d,(_0x59f26d==='*'||_0x129e1f===_0x127b4f[_0x593a58(0x200)])&&((_0x531bfe==='*'||_0x531bfe===_0x127b4f[_0x593a58(0x203)])&&_0x22d61f[_0x593a58(0x216)](_0x127b4f));}}return _0x22d61f;},XMLParser[_0x29aa38(0x1ff)]=function(_0x1162d7,_0x20996a,_0x51154e){const _0x16b9b6=_0x29aa38;let _0x2ff185=null;if(_0x1162d7[_0x16b9b6(0x1ff)])_0x2ff185=_0x1162d7['getAttributeNodeNS'](_0x20996a,_0x51154e);else {let _0xb96145=_0x1162d7[_0x16b9b6(0x205)],_0x306f86,_0x143034;for(let _0x4a9f56=0x0,_0x20073c=_0xb96145[_0x16b9b6(0x214)];_0x4a9f56<_0x20073c;++_0x4a9f56){_0x306f86=_0xb96145[_0x4a9f56];if(_0x306f86['namespaceURI']===_0x20996a){_0x143034=_0x306f86[_0x16b9b6(0x211)]?_0x306f86[_0x16b9b6(0x211)]+':'+_0x51154e:_0x51154e;if(_0x143034===_0x306f86[_0x16b9b6(0x200)]){_0x2ff185=_0x306f86;break;}}}}return _0x2ff185;},XMLParser[_0x29aa38(0x1fd)]=function(_0x55c38c,_0x203b05){const _0x769e3b=_0x29aa38;let _0xb83310=_0x203b05||'';if(_0x55c38c)for(let _0x3af1bb=_0x55c38c['firstChild'];_0x3af1bb;_0x3af1bb=_0x3af1bb[_0x769e3b(0x1fb)]){switch(_0x3af1bb[_0x769e3b(0x215)]){case 0x3:case 0x4:_0xb83310+=_0x3af1bb[_0x769e3b(0x1f0)];}}return _0xb83310;},XMLParser['queryNumericAttribute']=function(_0x1810c3,_0x41b0f1){const _0x2e8500=_0x29aa38;if(!_0x1810c3)return undefined;let _0x3cdf2f=_0x1810c3[_0x2e8500(0x1f4)](_0x41b0f1);if(_0x3cdf2f!==null){let _0x5dc8b5=parseFloat(_0x3cdf2f);return !isNaN(_0x5dc8b5)?_0x5dc8b5:undefined;}return undefined;},XMLParser['queryStringAttribute']=function(_0x18ee8a,_0x31ea1d){const _0x485597=_0x29aa38;if(!_0x18ee8a)return undefined;let _0x5bfbc1=_0x18ee8a[_0x485597(0x1f4)](_0x31ea1d);return _0x5bfbc1!==null?_0x5bfbc1:undefined;},XMLParser[_0x29aa38(0x218)]=function(_0x19b3d2,_0x3cfce8){const _0x54223a=_0x29aa38;if(!_0x19b3d2)return undefined;let _0x5e3307=_0x19b3d2[_0x54223a(0x1f4)](_0x3cfce8);_0x5e3307=_0x5e3307[_0x54223a(0x1f8)]();if('false'===_0x5e3307)return ![];if(_0x54223a(0x20b)===_0x5e3307)return !![];return undefined;},XMLParser['queryFirstNode']=function(_0x39fa46,_0x40b05f,_0xa1834e){const _0x3b5c58=_0x29aa38;if(!_0x39fa46)return undefined;let _0x1cab56=_0x39fa46[_0x3b5c58(0x1f6)],_0xe98643=_0x1cab56[_0x3b5c58(0x214)];for(let _0x5d5152=0x0;_0x5d5152<_0xe98643;_0x5d5152++){let _0x2f2fa4=_0x1cab56[_0x5d5152];if(_0xa1834e){if(_0x2f2fa4[_0x3b5c58(0x210)]===_0x40b05f&&_0xa1834e['indexOf'](_0x2f2fa4[_0x3b5c58(0x203)])!==-0x1)return _0x2f2fa4;}else {if(_0x2f2fa4[_0x3b5c58(0x210)]===_0x40b05f)return _0x2f2fa4;}}return undefined;},XMLParser[_0x29aa38(0x207)]=function(_0x1c58f5,_0x10ee6e,_0x703b4f){const _0x5bdf26=_0x29aa38;if(!_0x1c58f5)return undefined;let _0x50ee76=[],_0x175799=_0x1c58f5['getElementsByTagNameNS']('*',_0x10ee6e),_0x16527e=_0x175799[_0x5bdf26(0x214)];for(let _0x313136=0x0;_0x313136<_0x16527e;_0x313136++){let _0x43f442=_0x175799[_0x313136];_0x703b4f?_0x43f442[_0x5bdf26(0x210)]===_0x10ee6e&&_0x703b4f[_0x5bdf26(0x20e)](_0x43f442[_0x5bdf26(0x203)])!==-0x1&&_0x50ee76[_0x5bdf26(0x216)](_0x43f442):_0x43f442[_0x5bdf26(0x210)]===_0x10ee6e&&_0x50ee76[_0x5bdf26(0x216)](_0x43f442);}return _0x50ee76;},XMLParser['queryChildNodes']=function(_0xfafccd,_0x224289,_0x198ef5){const _0x99eddf=_0x29aa38;if(!_0xfafccd)return [];let _0x2c54a0=[],_0x54e2ff=_0xfafccd[_0x99eddf(0x1f6)],_0x4c29f7=_0x54e2ff['length'];for(let _0x4b876e=0x0;_0x4b876e<_0x4c29f7;_0x4b876e++){let _0x3fc243=_0x54e2ff[_0x4b876e];_0x198ef5?_0x3fc243[_0x99eddf(0x210)]===_0x224289&&_0x198ef5[_0x99eddf(0x20e)](_0x3fc243[_0x99eddf(0x203)])!==-0x1&&_0x2c54a0['push'](_0x3fc243):_0x3fc243[_0x99eddf(0x210)]===_0x224289&&_0x2c54a0['push'](_0x3fc243);}return _0x2c54a0;},XMLParser[_0x29aa38(0x1f7)]=function(_0xd8f232,_0x153c12,_0x3a31f6){const _0x5eafcd=_0x29aa38;let _0x1e5945=XMLParser['queryFirstNode'](_0xd8f232,_0x153c12,_0x3a31f6);if(_0x1e5945){let _0x288046=parseFloat(_0x1e5945[_0x5eafcd(0x20d)]);return !isNaN(_0x288046)?_0x288046:undefined;}return undefined;},XMLParser[_0x29aa38(0x1f2)]=function(_0x506c54,_0x53a6d2,_0x24f58e){const _0xd4a590=_0x29aa38;let _0x4aae76=XMLParser[_0xd4a590(0x217)](_0x506c54,_0x53a6d2,_0x24f58e);if(_0x4aae76)return _0x4aae76[_0xd4a590(0x20d)]['trim']();return undefined;},XMLParser[_0x29aa38(0x206)]=function(_0x6a2a34,_0x31c88d,_0x50c9ee){const _0x2b41b2=_0x29aa38;let _0x11649c=XMLParser[_0x2b41b2(0x217)](_0x6a2a34,_0x31c88d,_0x50c9ee);if(_0x11649c){let _0xca8be1=_0x11649c[_0x2b41b2(0x20d)][_0x2b41b2(0x20f)]();return _0xca8be1==='1'||/^true$/i['test'](_0xca8be1);}return undefined;};

    const _0xeb08=['317GoMckA','313584vjDGGg','134PZwdRu','292001ksnDEq','173HNrNLa','2134nAegRb','29HgeSLP','76175YUZAnH','209594wSdrBw','11279vmIBMg'];function _0x1580(_0x1394ce,_0x5173d5){_0x1394ce=_0x1394ce-0x7b;let _0xeb0800=_0xeb08[_0x1394ce];return _0xeb0800;}(function(_0x59ef6b,_0x22d1a0){const _0x4fdd0c=_0x1580;while(!![]){try{const _0x3ea41e=-parseInt(_0x4fdd0c(0x82))*parseInt(_0x4fdd0c(0x7b))+parseInt(_0x4fdd0c(0x83))+-parseInt(_0x4fdd0c(0x7d))+-parseInt(_0x4fdd0c(0x81))+parseInt(_0x4fdd0c(0x80))*parseInt(_0x4fdd0c(0x84))+parseInt(_0x4fdd0c(0x7e))+parseInt(_0x4fdd0c(0x7f))*parseInt(_0x4fdd0c(0x7c));if(_0x3ea41e===_0x22d1a0)break;else _0x59ef6b['push'](_0x59ef6b['shift']());}catch(_0xdc8802){_0x59ef6b['push'](_0x59ef6b['shift']());}}}(_0xeb08,0x32bc4));const FillStyle={'Fill':0x0,'WireFrame':0x1,'Fill_And_WireFrame':0x2};var _0x36bab0 = Object['freeze'](FillStyle);

    const _0x5a6b=['126862GmQglY','146021zNTUER','36247KOpUaD','6CIfAXT','43NOEomQ','6737RdHinE','58033MKwvQr','1XytOOh','179158pvxJew','freeze','327159CMRmEE'];const _0x3b49b0=_0x5070;function _0x5070(_0x2effba,_0x394506){_0x2effba=_0x2effba-0x1b8;let _0x5a6b63=_0x5a6b[_0x2effba];return _0x5a6b63;}(function(_0x1f3b1b,_0x11d495){const _0x5e31c3=_0x5070;while(!![]){try{const _0x42ffb5=-parseInt(_0x5e31c3(0x1bc))+-parseInt(_0x5e31c3(0x1b9))+parseInt(_0x5e31c3(0x1bf))*parseInt(_0x5e31c3(0x1c2))+-parseInt(_0x5e31c3(0x1bb))+-parseInt(_0x5e31c3(0x1c1))*-parseInt(_0x5e31c3(0x1c0))+-parseInt(_0x5e31c3(0x1bd))*-parseInt(_0x5e31c3(0x1b8))+parseInt(_0x5e31c3(0x1be));if(_0x42ffb5===_0x11d495)break;else _0x1f3b1b['push'](_0x1f3b1b['shift']());}catch(_0x17b6bf){_0x1f3b1b['push'](_0x1f3b1b['shift']());}}}(_0x5a6b,0x2da62));const BillboardMode={'None':0x0,'FixedZ':0x1,'FixedXYZ':0x2};var _0x35abae = Object[_0x3b49b0(0x1ba)](BillboardMode);

    const _0x6bbc=['_billboardMode','RED','SCREEN_ALIGNED','129PlaozB','fillStyle\x20value','Fill','_imageReady','emission\x20color','HeightReference','25977EoQZNf','4306fKrxFN','35731ufxfoi','_fillForeColor','object','440963GnExSi','fillForeColor\x20value','_owner','1747971WrqLgE','_lineWidth','typeOf','point\x20color','_image','624889YbIyaf','point\x20size','clone','_fillStyle','fillStyleChange','string','number','_pointSize','49113HdnSse','Check','Color','_calloutColor','line\x20width','NONE','107qIOHEO','_emissionColor','line\x20color','1jYoPrk','_lineColor','31MpYXHF','_dirty','bottomAltitude\x20value','1lxjyiG','_bottomAltitude','_pointColor','_altitudeMode','_calloutWidth'];function _0x46fc(_0x35875a,_0x400647){_0x35875a=_0x35875a-0x1c9;let _0x6bbc00=_0x6bbc[_0x35875a];return _0x6bbc00;}(function(_0x4b99ac,_0x4d9901){const _0x3fe44a=_0x46fc;while(!![]){try{const _0x4d93bd=-parseInt(_0x3fe44a(0x1f8))*parseInt(_0x3fe44a(0x1da))+parseInt(_0x3fe44a(0x1f5))*parseInt(_0x3fe44a(0x1ea))+-parseInt(_0x3fe44a(0x1e2))+parseInt(_0x3fe44a(0x1d7))*-parseInt(_0x3fe44a(0x1f3))+-parseInt(_0x3fe44a(0x1dd))+-parseInt(_0x3fe44a(0x1cf))*parseInt(_0x3fe44a(0x1d6))+-parseInt(_0x3fe44a(0x1f0))*-parseInt(_0x3fe44a(0x1d5));if(_0x4d93bd===_0x4d9901)break;else _0x4b99ac['push'](_0x4b99ac['shift']());}catch(_0x455c07){_0x4b99ac['push'](_0x4b99ac['shift']());}}}(_0x6bbc,0xdaff6));function Style3D(){const _0x202ba3=_0x46fc;this[_0x202ba3(0x1d8)]=new Cesium[(_0x202ba3(0x1ec))](),this[_0x202ba3(0x1e5)]=_0x36bab0[_0x202ba3(0x1d1)],this['_lineColor']=new Cesium['Color'](),this[_0x202ba3(0x1de)]=0x1,this[_0x202ba3(0x1f9)]=0x0,this[_0x202ba3(0x1e9)]=0x1,this[_0x202ba3(0x1c9)]=new Cesium[(_0x202ba3(0x1ec))](),this[_0x202ba3(0x1ca)]=Cesium[_0x202ba3(0x1d4)][_0x202ba3(0x1ef)],this[_0x202ba3(0x1f1)]=new Cesium[(_0x202ba3(0x1ec))](0x1,0x1,0x1,0x1),this['_owner']=undefined,this['_dirty']=![],this[_0x202ba3(0x1e1)]=undefined,this[_0x202ba3(0x1d2)]=!![],this[_0x202ba3(0x1ed)]=Cesium['Color'][_0x202ba3(0x1cd)],this[_0x202ba3(0x1cb)]=0x1,this['_billboardMode']=_0x35abae[_0x202ba3(0x1ce)];}Object['defineProperties'](Style3D['prototype'],{'fillForeColor':{'get':function(){return this['_fillForeColor'];},'set':function(_0x3433cc){const _0x4bece0=_0x46fc;Cesium['Check'][_0x4bece0(0x1df)][_0x4bece0(0x1d9)](_0x4bece0(0x1db),_0x3433cc),Cesium[_0x4bece0(0x1ec)][_0x4bece0(0x1e4)](_0x3433cc,this[_0x4bece0(0x1d8)]);}},'bottomAltitude':{'get':function(){const _0x309d34=_0x46fc;return this[_0x309d34(0x1f9)];},'set':function(_0x767e4){const _0x532dde=_0x46fc;Cesium[_0x532dde(0x1eb)]['typeOf'][_0x532dde(0x1e8)](_0x532dde(0x1f7),_0x767e4),this[_0x532dde(0x1f9)]!==_0x767e4&&(this[_0x532dde(0x1f9)]=_0x767e4,this[_0x532dde(0x1f6)]=!![]);}},'altitudeMode':{'get':function(){return this['_altitudeMode'];},'set':function(_0x5eb495){const _0x53ff0b=_0x46fc;Cesium[_0x53ff0b(0x1eb)]['typeOf'][_0x53ff0b(0x1e8)]('altitudeMode\x20value',_0x5eb495),this[_0x53ff0b(0x1ca)]=_0x5eb495;}},'fillStyle':{'get':function(){return this['_fillStyle'];},'set':function(_0xe03979){const _0x116c9f=_0x46fc;Cesium[_0x116c9f(0x1eb)][_0x116c9f(0x1df)]['number'](_0x116c9f(0x1d0),_0xe03979);let _0x5e37cb=this['_fillStyle'];this['_fillStyle']=_0xe03979,_0xe03979!==_0x5e37cb&&this[_0x116c9f(0x1dc)]&&this[_0x116c9f(0x1dc)][_0x116c9f(0x1e6)]();}},'lineColor':{'get':function(){const _0x1558f9=_0x46fc;return this[_0x1558f9(0x1f4)];},'set':function(_0x4a0750){const _0x271339=_0x46fc;Cesium['Check']['typeOf'][_0x271339(0x1d9)](_0x271339(0x1f2),_0x4a0750),Cesium[_0x271339(0x1ec)][_0x271339(0x1e4)](_0x4a0750,this[_0x271339(0x1f4)]);}},'lineWidth':{'get':function(){const _0x156148=_0x46fc;return this[_0x156148(0x1de)];},'set':function(_0x2b4f47){const _0x10b165=_0x46fc;Cesium[_0x10b165(0x1eb)][_0x10b165(0x1df)][_0x10b165(0x1e8)](_0x10b165(0x1ee),_0x2b4f47),this[_0x10b165(0x1de)]=_0x2b4f47;}},'pointSize':{'get':function(){const _0x48e98e=_0x46fc;return this[_0x48e98e(0x1e9)];},'set':function(_0x23f935){const _0xcd9927=_0x46fc;Cesium[_0xcd9927(0x1eb)]['typeOf']['number'](_0xcd9927(0x1e3),_0x23f935),this[_0xcd9927(0x1e9)]=_0x23f935;}},'pointColor':{'get':function(){const _0x491b06=_0x46fc;return this[_0x491b06(0x1c9)];},'set':function(_0x3c710a){const _0x3965db=_0x46fc;Cesium[_0x3965db(0x1eb)]['typeOf'][_0x3965db(0x1d9)](_0x3965db(0x1e0),_0x3c710a),Cesium[_0x3965db(0x1ec)][_0x3965db(0x1e4)](_0x3c710a,this[_0x3965db(0x1c9)]);}},'emissionColor':{'get':function(){const _0x406803=_0x46fc;return this[_0x406803(0x1f1)];},'set':function(_0x42c5c0){const _0x57d854=_0x46fc;Cesium[_0x57d854(0x1eb)]['typeOf'][_0x57d854(0x1d9)](_0x57d854(0x1d3),_0x42c5c0),Cesium['Color'][_0x57d854(0x1e4)](_0x42c5c0,this[_0x57d854(0x1f1)]);}},'image':{'get':function(){const _0x4b86ee=_0x46fc;return this[_0x4b86ee(0x1e1)];},'set':function(_0x17cb65){const _0x2f1b76=_0x46fc;this[_0x2f1b76(0x1d2)]=![],this['_image']=_0x17cb65,typeof _0x17cb65===_0x2f1b76(0x1e7)?this['_loadImage']():this['_imageReady']=!![];}},'imageReady':{'get':function(){const _0x25cb0e=_0x46fc;return this[_0x25cb0e(0x1d2)];}},'calloutColor':{'get':function(){return this['_calloutColor'];},'set':function(_0x529776){const _0x49482e=_0x46fc;this[_0x49482e(0x1ed)]!==_0x529776&&(this[_0x49482e(0x1ed)]=_0x529776);}},'calloutWidth':{'get':function(){return this['_calloutWidth'];},'set':function(_0x15fc87){const _0x273a36=_0x46fc;this[_0x273a36(0x1cb)]!==_0x15fc87&&(this[_0x273a36(0x1cb)]=_0x15fc87);}},'billboardMode':{'get':function(){const _0x2b8900=_0x46fc;return this[_0x2b8900(0x1cc)];},'set':function(_0x287120){const _0x6fb62b=_0x46fc;this['_billboardMode']!==_0x287120&&(this[_0x6fb62b(0x1cc)]=_0x287120);}}});

    const _0x2e47=['8551frAPGt','71iirXxe','24480dEPHIH','4KbjuyU','16708BsLvvu','5HElXKs','33266tNqOkl','50584yAsexy','8JJMVkX','freeze','4SAAaxx','100099SRunaU','2201GQGXwQ'];function _0x2630(_0x7b190c,_0x3b28e5){_0x7b190c=_0x7b190c-0x1b0;let _0x2e47e7=_0x2e47[_0x7b190c];return _0x2e47e7;}const _0x3cd4ba=_0x2630;(function(_0x1aef8e,_0x314e3c){const _0x5256a4=_0x2630;while(!![]){try{const _0x335dc2=parseInt(_0x5256a4(0x1bc))*parseInt(_0x5256a4(0x1b8))+parseInt(_0x5256a4(0x1b5))*-parseInt(_0x5256a4(0x1ba))+parseInt(_0x5256a4(0x1bb))*-parseInt(_0x5256a4(0x1b2))+-parseInt(_0x5256a4(0x1b7))+parseInt(_0x5256a4(0x1b6))*parseInt(_0x5256a4(0x1b4))+parseInt(_0x5256a4(0x1b3))+-parseInt(_0x5256a4(0x1b0))*parseInt(_0x5256a4(0x1b9));if(_0x335dc2===_0x314e3c)break;else _0x1aef8e['push'](_0x1aef8e['shift']());}catch(_0x540b01){_0x1aef8e['push'](_0x1aef8e['shift']());}}}(_0x2e47,0x1e747));const ContentState={'UNLOADED':0x0,'LOADING':0x1,'PARSING':0x2,'READY':0x3,'FAILED':0x4};var _0x55d17f = Object[_0x3cd4ba(0x1b1)](ContentState);

    const _0x33f6=['455881xIwLgf','3vnCbsl','22717TqiDJu','13HTHmoa','67uMYBrS','29131rYlsRt','8230YVknZm','1133QfQTcc','1PRfCNU','6yOmmsj','5wAQGzX','1375507tYhTQY','142JGmtEx','89963rGGuOK'];(function(_0x39f66d,_0xdf3527){const _0xa6c1b2=_0x5afc;while(!![]){try{const _0x34cb39=parseInt(_0xa6c1b2(0xe9))*-parseInt(_0xa6c1b2(0xe6))+parseInt(_0xa6c1b2(0xea))*-parseInt(_0xa6c1b2(0xe4))+-parseInt(_0xa6c1b2(0xed))*-parseInt(_0xa6c1b2(0xf1))+-parseInt(_0xa6c1b2(0xeb))*parseInt(_0xa6c1b2(0xe7))+-parseInt(_0xa6c1b2(0xf0))*-parseInt(_0xa6c1b2(0xee))+parseInt(_0xa6c1b2(0xe5))*-parseInt(_0xa6c1b2(0xef))+parseInt(_0xa6c1b2(0xec))*parseInt(_0xa6c1b2(0xe8));if(_0x34cb39===_0xdf3527)break;else _0x39f66d['push'](_0x39f66d['shift']());}catch(_0x9db419){_0x39f66d['push'](_0x39f66d['shift']());}}}(_0x33f6,0xc0e93));const S3MPixelFormat={'LUMINANCE_8':0x1,'LUMINANCE_16':0x2,'ALPHA':0x3,'ALPHA_4_LUMINANCE_4':0x4,'LUMINANCE_ALPHA':0x5,'RGB_565':0x6,'BGR565':0x7,'RGB':0xa,'BGR':0xb,'ARGB':0xc,'ABGR':0xd,'BGRA':0xe,'WEBP':0x19,'RGBA':0x1c,'DXT1':0x11,'DXT2':0x12,'DXT3':0x13,'DXT4':0x14,'DXT5':0x15,'CRN_DXT5':0x1a,'STANDARD_CRN':0x1b};function _0x5afc(_0x265684,_0x4958cc){_0x265684=_0x265684-0xe4;let _0x33f65a=_0x33f6[_0x265684];return _0x33f65a;}var _0x3065af = Object['freeze'](S3MPixelFormat);

    const _0x22af=['1694744SKtqDH','52lwpHEo','freeze','116316EfDUoz','88UzquWW','3194nfDYxn','1224127wWCvaZ','3212YEbaic','15293ykZdgA','29875LvcOpJ','402YaLYlF','93uHtfAp'];const _0x136d5f=_0x32ed;(function(_0x43e917,_0x2983df){const _0x114d1e=_0x32ed;while(!![]){try{const _0x441744=-parseInt(_0x114d1e(0x1dc))*-parseInt(_0x114d1e(0x1df))+-parseInt(_0x114d1e(0x1e3))+parseInt(_0x114d1e(0x1e1))*parseInt(_0x114d1e(0x1dd))+-parseInt(_0x114d1e(0x1da))+-parseInt(_0x114d1e(0x1e0))+-parseInt(_0x114d1e(0x1d8))*parseInt(_0x114d1e(0x1d9))+-parseInt(_0x114d1e(0x1db))*-parseInt(_0x114d1e(0x1de));if(_0x441744===_0x2983df)break;else _0x43e917['push'](_0x43e917['shift']());}catch(_0x2c3013){_0x43e917['push'](_0x43e917['shift']());}}}(_0x22af,0xe81ba));function _0x32ed(_0x31a392,_0x4a5243){_0x31a392=_0x31a392-0x1d8;let _0x22afb9=_0x22af[_0x31a392];return _0x22afb9;}const S3MCompressType={'encNONE':0x0,'enrS3TCDXTN':0xe,'enrPVRTPF_PVRTC2':0x13,'enrPVRTPF_PVRTC':0x14,'enrPVRTPF_PVRTC_4bpp':0x15,'enrPVRTPF_ETC1':0x16};var S3MCompressType$1 = Object[_0x136d5f(0x1e2)](S3MCompressType);

    const _0x232a=['10hGeNGi','4223puVJpF','595077mvtVxH','101XoXgAF','3023RUbMmp','freeze','111dbqEvS','27771EnaesT','95846YpuJEp','675140VPSVHe','2923fPkVTQ','22HcUoGz','41pPJTjU'];const _0x2ced3d=_0x4868;(function(_0x439514,_0x25b97f){const _0x1973df=_0x4868;while(!![]){try{const _0x27b0a9=parseInt(_0x1973df(0x151))+-parseInt(_0x1973df(0x150))*-parseInt(_0x1973df(0x155))+parseInt(_0x1973df(0x159))*-parseInt(_0x1973df(0x14e))+-parseInt(_0x1973df(0x152))*parseInt(_0x1973df(0x158))+parseInt(_0x1973df(0x156))*parseInt(_0x1973df(0x153))+parseInt(_0x1973df(0x157))+-parseInt(_0x1973df(0x14f))*parseInt(_0x1973df(0x154));if(_0x27b0a9===_0x25b97f)break;else _0x439514['push'](_0x439514['shift']());}catch(_0x11b0a4){_0x439514['push'](_0x439514['shift']());}}}(_0x232a,0x86d04));function _0x4868(_0xbea2a3,_0x1f401b){_0xbea2a3=_0xbea2a3-0x14e;let _0x232ad0=_0x232a[_0xbea2a3];return _0x232ad0;}const VertexCompressOptions={'SVC_Vertex':0x1,'SVC_Normal':0x2,'SVC_VertexColor':0x4,'SVC_SecondColor':0x8,'SVC_TexutreCoord':0x10,'SVC_TexutreCoordIsW':0x20};var _0x5aa24d = Object[_0x2ced3d(0x15a)](VertexCompressOptions);

    var tmp = {};

    /* pako 1.0.4 nodeca/pako */(function(f){tmp = f();})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


        var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                        (typeof Uint16Array !== 'undefined') &&
                        (typeof Int32Array !== 'undefined');


        exports.assign = function (obj /*from1, from2, from3, ...*/) {
            var sources = Array.prototype.slice.call(arguments, 1);
            while (sources.length) {
                var source = sources.shift();
                if (!source) { continue; }

                if (typeof source !== 'object') {
                    throw new TypeError(source + 'must be non-object');
                }

                for (var p in source) {
                    if (source.hasOwnProperty(p)) {
                        obj[p] = source[p];
                    }
                }
            }

            return obj;
        };


    // reduce buffer size, avoiding mem copy
        exports.shrinkBuf = function (buf, size) {
            if (buf.length === size) { return buf; }
            if (buf.subarray) { return buf.subarray(0, size); }
            buf.length = size;
            return buf;
        };


        var fnTyped = {
            arraySet: function (dest, src, src_offs, len, dest_offs) {
                if (src.subarray && dest.subarray) {
                    dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
                    return;
                }
                // Fallback to ordinary array
                for (var i = 0; i < len; i++) {
                    dest[dest_offs + i] = src[src_offs + i];
                }
            },
            // Join array of chunks to single array.
            flattenChunks: function (chunks) {
                var i, l, len, pos, chunk, result;

                // calculate data length
                len = 0;
                for (i = 0, l = chunks.length; i < l; i++) {
                    len += chunks[i].length;
                }

                // join chunks
                result = new Uint8Array(len);
                pos = 0;
                for (i = 0, l = chunks.length; i < l; i++) {
                    chunk = chunks[i];
                    result.set(chunk, pos);
                    pos += chunk.length;
                }

                return result;
            }
        };

        var fnUntyped = {
            arraySet: function (dest, src, src_offs, len, dest_offs) {
                for (var i = 0; i < len; i++) {
                    dest[dest_offs + i] = src[src_offs + i];
                }
            },
            // Join array of chunks to single array.
            flattenChunks: function (chunks) {
                return [].concat.apply([], chunks);
            }
        };


    // Enable/Disable typed arrays use, for testing
    //
        exports.setTyped = function (on) {
            if (on) {
                exports.Buf8  = Uint8Array;
                exports.Buf16 = Uint16Array;
                exports.Buf32 = Int32Array;
                exports.assign(exports, fnTyped);
            } else {
                exports.Buf8  = Array;
                exports.Buf16 = Array;
                exports.Buf32 = Array;
                exports.assign(exports, fnUntyped);
            }
        };

        exports.setTyped(TYPED_OK);

    },{}],2:[function(require,module,exports){


        var utils = require('./common');


    // Quick check if we can use fast array to bin string conversion
    //
    // - apply(Array) can fail on Android 2.2
    // - apply(Uint8Array) can fail on iOS 5.1 Safary
    //
        var STR_APPLY_OK = true;
        var STR_APPLY_UIA_OK = true;

        try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
        try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


    // Table with utf8 lengths (calculated by first byte of sequence)
    // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
    // because max possible codepoint is 0x10ffff
        var _utf8len = new utils.Buf8(256);
        for (var q = 0; q < 256; q++) {
            _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
        }
        _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


    // convert string to array (typed, when possible)
        exports.string2buf = function (str) {
            var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

            // count binary size
            for (m_pos = 0; m_pos < str_len; m_pos++) {
                c = str.charCodeAt(m_pos);
                if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
                    c2 = str.charCodeAt(m_pos + 1);
                    if ((c2 & 0xfc00) === 0xdc00) {
                        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                        m_pos++;
                    }
                }
                buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
            }

            // allocate buffer
            buf = new utils.Buf8(buf_len);

            // convert
            for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
                c = str.charCodeAt(m_pos);
                if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
                    c2 = str.charCodeAt(m_pos + 1);
                    if ((c2 & 0xfc00) === 0xdc00) {
                        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                        m_pos++;
                    }
                }
                if (c < 0x80) {
                    /* one byte */
                    buf[i++] = c;
                } else if (c < 0x800) {
                    /* two bytes */
                    buf[i++] = 0xC0 | (c >>> 6);
                    buf[i++] = 0x80 | (c & 0x3f);
                } else if (c < 0x10000) {
                    /* three bytes */
                    buf[i++] = 0xE0 | (c >>> 12);
                    buf[i++] = 0x80 | (c >>> 6 & 0x3f);
                    buf[i++] = 0x80 | (c & 0x3f);
                } else {
                    /* four bytes */
                    buf[i++] = 0xf0 | (c >>> 18);
                    buf[i++] = 0x80 | (c >>> 12 & 0x3f);
                    buf[i++] = 0x80 | (c >>> 6 & 0x3f);
                    buf[i++] = 0x80 | (c & 0x3f);
                }
            }

            return buf;
        };

    // Helper (used in 2 places)
        function buf2binstring(buf, len) {
            // use fallback for big arrays to avoid stack overflow
            if (len < 65537) {
                if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
                    return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
                }
            }

            var result = '';
            for (var i = 0; i < len; i++) {
                result += String.fromCharCode(buf[i]);
            }
            return result;
        }


    // Convert byte array to binary string
        exports.buf2binstring = function (buf) {
            return buf2binstring(buf, buf.length);
        };


    // Convert binary string (typed, when possible)
        exports.binstring2buf = function (str) {
            var buf = new utils.Buf8(str.length);
            for (var i = 0, len = buf.length; i < len; i++) {
                buf[i] = str.charCodeAt(i);
            }
            return buf;
        };


    // convert array to string
        exports.buf2string = function (buf, max) {
            var i, out, c, c_len;
            var len = max || buf.length;

            // Reserve max possible length (2 words per char)
            // NB: by unknown reasons, Array is significantly faster for
            //     String.fromCharCode.apply than Uint16Array.
            var utf16buf = new Array(len * 2);

            for (out = 0, i = 0; i < len;) {
                c = buf[i++];
                // quick process ascii
                if (c < 0x80) { utf16buf[out++] = c; continue; }

                c_len = _utf8len[c];
                // skip 5 & 6 byte codes
                if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

                // apply mask on first byte
                c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
                // join the rest
                while (c_len > 1 && i < len) {
                    c = (c << 6) | (buf[i++] & 0x3f);
                    c_len--;
                }

                // terminated by end of string?
                if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

                if (c < 0x10000) {
                    utf16buf[out++] = c;
                } else {
                    c -= 0x10000;
                    utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
                    utf16buf[out++] = 0xdc00 | (c & 0x3ff);
                }
            }

            return buf2binstring(utf16buf, out);
        };


    // Calculate max possible position in utf8 buffer,
    // that will not break sequence. If that's not possible
    // - (very small limits) return max size as is.
    //
    // buf[] - utf8 bytes array
    // max   - length limit (mandatory);
        exports.utf8border = function (buf, max) {
            var pos;

            max = max || buf.length;
            if (max > buf.length) { max = buf.length; }

            // go back from last position, until start of sequence found
            pos = max - 1;
            while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

            // Fuckup - very small and broken sequence,
            // return max, because we should return something anyway.
            if (pos < 0) { return max; }

            // If we came to start of buffer - that means vuffer is too small,
            // return max too.
            if (pos === 0) { return max; }

            return (pos + _utf8len[buf[pos]] > max) ? pos : max;
        };

    },{"./common":1}],3:[function(require,module,exports){

    // Note: adler32 takes 12% for level 0 and 2% for level 6.
    // It doesn't worth to make additional optimizationa as in original.
    // Small size is preferable.

        function adler32(adler, buf, len, pos) {
            var s1 = (adler & 0xffff) |0,
                s2 = ((adler >>> 16) & 0xffff) |0,
                n = 0;

            while (len !== 0) {
                // Set limit ~ twice less than 5552, to keep
                // s2 in 31-bits, because we force signed ints.
                // in other case %= will fail.
                n = len > 2000 ? 2000 : len;
                len -= n;

                do {
                    s1 = (s1 + buf[pos++]) |0;
                    s2 = (s2 + s1) |0;
                } while (--n);

                s1 %= 65521;
                s2 %= 65521;
            }

            return (s1 | (s2 << 16)) |0;
        }


        module.exports = adler32;

    },{}],4:[function(require,module,exports){


        module.exports = {

            /* Allowed flush values; see deflate() and inflate() below for details */
            Z_NO_FLUSH:         0,
            Z_PARTIAL_FLUSH:    1,
            Z_SYNC_FLUSH:       2,
            Z_FULL_FLUSH:       3,
            Z_FINISH:           4,
            Z_BLOCK:            5,
            Z_TREES:            6,

            /* Return codes for the compression/decompression functions. Negative values
             * are errors, positive values are used for special but normal events.
             */
            Z_OK:               0,
            Z_STREAM_END:       1,
            Z_NEED_DICT:        2,
            Z_ERRNO:           -1,
            Z_STREAM_ERROR:    -2,
            Z_DATA_ERROR:      -3,
            //Z_MEM_ERROR:     -4,
            Z_BUF_ERROR:       -5,
            //Z_VERSION_ERROR: -6,

            /* compression levels */
            Z_NO_COMPRESSION:         0,
            Z_BEST_SPEED:             1,
            Z_BEST_COMPRESSION:       9,
            Z_DEFAULT_COMPRESSION:   -1,


            Z_FILTERED:               1,
            Z_HUFFMAN_ONLY:           2,
            Z_RLE:                    3,
            Z_FIXED:                  4,
            Z_DEFAULT_STRATEGY:       0,

            /* Possible values of the data_type field (though see inflate()) */
            Z_BINARY:                 0,
            Z_TEXT:                   1,
            //Z_ASCII:                1, // = Z_TEXT (deprecated)
            Z_UNKNOWN:                2,

            /* The deflate compression method */
            Z_DEFLATED:               8
            //Z_NULL:                 null // Use -1 or null inline, depending on var type
        };

    },{}],5:[function(require,module,exports){

    // Note: we can't get significant speed boost here.
    // So write code to minimize size - no pregenerated tables
    // and array tools dependencies.


    // Use ordinary array, since untyped makes no boost here
        function makeTable() {
            var c, table = [];

            for (var n = 0; n < 256; n++) {
                c = n;
                for (var k = 0; k < 8; k++) {
                    c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
                }
                table[n] = c;
            }

            return table;
        }

    // Create table on load. Just 255 signed longs. Not a problem.
        var crcTable = makeTable();


        function crc32(crc, buf, len, pos) {
            var t = crcTable,
                end = pos + len;

            crc ^= -1;

            for (var i = pos; i < end; i++) {
                crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
            }

            return (crc ^ (-1)); // >>> 0;
        }


        module.exports = crc32;

    },{}],6:[function(require,module,exports){


        function GZheader() {
            /* true if compressed data believed to be text */
            this.text       = 0;
            /* modification time */
            this.time       = 0;
            /* extra flags (not used when writing a gzip file) */
            this.xflags     = 0;
            /* operating system */
            this.os         = 0;
            /* pointer to extra field or Z_NULL if none */
            this.extra      = null;
            /* extra field length (valid if extra != Z_NULL) */
            this.extra_len  = 0; // Actually, we don't need it in JS,
                                 // but leave for few code modifications

            //
            // Setup limits is not necessary because in js we should not preallocate memory
            // for inflate use constant limit in 65536 bytes
            //

            /* space at extra (only when reading header) */
            // this.extra_max  = 0;
            /* pointer to zero-terminated file name or Z_NULL */
            this.name       = '';
            /* space at name (only when reading header) */
            // this.name_max   = 0;
            /* pointer to zero-terminated comment or Z_NULL */
            this.comment    = '';
            /* space at comment (only when reading header) */
            // this.comm_max   = 0;
            /* true if there was or will be a header crc */
            this.hcrc       = 0;
            /* true when done reading gzip header (not used when writing a gzip file) */
            this.done       = false;
        }

        module.exports = GZheader;

    },{}],7:[function(require,module,exports){

    // See state defs from inflate.js
        var BAD = 30;       /* got a data error -- remain here until reset */
        var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

        /*
         Decode literal, length, and distance codes and write out the resulting
         literal and match bytes until either not enough input or output is
         available, an end-of-block is encountered, or a data error is encountered.
         When large enough input and output buffers are supplied to inflate(), for
         example, a 16K input buffer and a 64K output buffer, more than 95% of the
         inflate execution time is spent in this routine.

         Entry assumptions:

         state.mode === LEN
         strm.avail_in >= 6
         strm.avail_out >= 258
         start >= strm.avail_out
         state.bits < 8

         On return, state.mode is one of:

         LEN -- ran out of enough output space or enough available input
         TYPE -- reached end of block code, inflate() to interpret next block
         BAD -- error in block data

         Notes:

         - The maximum input bits used by a length/distance pair is 15 bits for the
         length code, 5 bits for the length extra, 15 bits for the distance code,
         and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
         Therefore if strm.avail_in >= 6, then there is enough input to avoid
         checking for available input while decoding.

         - The maximum bytes that a single length/distance pair can output is 258
         bytes, which is the maximum length that can be coded.  inflate_fast()
         requires strm.avail_out >= 258 for each loop to avoid checking for
         output space.
         */
        module.exports = function inflate_fast(strm, start) {
            var state;
            var _in;                    /* local strm.input */
            var last;                   /* have enough input while in < last */
            var _out;                   /* local strm.output */
            var beg;                    /* inflate()'s initial strm.output */
            var end;                    /* while out < end, enough space available */
    //#ifdef INFLATE_STRICT
            var dmax;                   /* maximum distance from zlib header */
    //#endif
            var wsize;                  /* window size or zero if not using window */
            var whave;                  /* valid bytes in the window */
            var wnext;                  /* window write index */
            // Use `s_window` instead `window`, avoid conflict with instrumentation tools
            var s_window;               /* allocated sliding window, if wsize != 0 */
            var hold;                   /* local strm.hold */
            var bits;                   /* local strm.bits */
            var lcode;                  /* local strm.lencode */
            var dcode;                  /* local strm.distcode */
            var lmask;                  /* mask for first level of length codes */
            var dmask;                  /* mask for first level of distance codes */
            var here;                   /* retrieved table entry */
            var op;                     /* code bits, operation, extra bits, or */
            /*  window position, window bytes to copy */
            var len;                    /* match length, unused bytes */
            var dist;                   /* match distance */
            var from;                   /* where to copy match from */
            var from_source;


            var input, output; // JS specific, because we have no pointers

            /* copy state to local variables */
            state = strm.state;
            //here = state.here;
            _in = strm.next_in;
            input = strm.input;
            last = _in + (strm.avail_in - 5);
            _out = strm.next_out;
            output = strm.output;
            beg = _out - (start - strm.avail_out);
            end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
            dmax = state.dmax;
    //#endif
            wsize = state.wsize;
            whave = state.whave;
            wnext = state.wnext;
            s_window = state.window;
            hold = state.hold;
            bits = state.bits;
            lcode = state.lencode;
            dcode = state.distcode;
            lmask = (1 << state.lenbits) - 1;
            dmask = (1 << state.distbits) - 1;


            /* decode literals and length/distances until end-of-block or not enough
             input data or output space */

            top:
                do {
                    if (bits < 15) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        hold += input[_in++] << bits;
                        bits += 8;
                    }

                    here = lcode[hold & lmask];

                    dolen:
                        for (;;) { // Goto emulation
                            op = here >>> 24/*here.bits*/;
                            hold >>>= op;
                            bits -= op;
                            op = (here >>> 16) & 0xff/*here.op*/;
                            if (op === 0) {                          /* literal */
                                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                                //        "inflate:         literal '%c'\n" :
                                //        "inflate:         literal 0x%02x\n", here.val));
                                output[_out++] = here & 0xffff/*here.val*/;
                            }
                            else if (op & 16) {                     /* length base */
                                len = here & 0xffff/*here.val*/;
                                op &= 15;                           /* number of extra bits */
                                if (op) {
                                    if (bits < op) {
                                        hold += input[_in++] << bits;
                                        bits += 8;
                                    }
                                    len += hold & ((1 << op) - 1);
                                    hold >>>= op;
                                    bits -= op;
                                }
                                //Tracevv((stderr, "inflate:         length %u\n", len));
                                if (bits < 15) {
                                    hold += input[_in++] << bits;
                                    bits += 8;
                                    hold += input[_in++] << bits;
                                    bits += 8;
                                }
                                here = dcode[hold & dmask];

                                dodist:
                                    for (;;) { // goto emulation
                                        op = here >>> 24/*here.bits*/;
                                        hold >>>= op;
                                        bits -= op;
                                        op = (here >>> 16) & 0xff/*here.op*/;

                                        if (op & 16) {                      /* distance base */
                                            dist = here & 0xffff/*here.val*/;
                                            op &= 15;                       /* number of extra bits */
                                            if (bits < op) {
                                                hold += input[_in++] << bits;
                                                bits += 8;
                                                if (bits < op) {
                                                    hold += input[_in++] << bits;
                                                    bits += 8;
                                                }
                                            }
                                            dist += hold & ((1 << op) - 1);
    //#ifdef INFLATE_STRICT
                                            if (dist > dmax) {
                                                strm.msg = 'invalid distance too far back';
                                                state.mode = BAD;
                                                break top;
                                            }
    //#endif
                                            hold >>>= op;
                                            bits -= op;
                                            //Tracevv((stderr, "inflate:         distance %u\n", dist));
                                            op = _out - beg;                /* max distance in output */
                                            if (dist > op) {                /* see if copy from window */
                                                op = dist - op;               /* distance back in window */
                                                if (op > whave) {
                                                    if (state.sane) {
                                                        strm.msg = 'invalid distance too far back';
                                                        state.mode = BAD;
                                                        break top;
                                                    }

    // (!) This block is disabled in zlib defailts,
    // don't enable it for binary compatibility
    //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
    //                if (len <= op - whave) {
    //                  do {
    //                    output[_out++] = 0;
    //                  } while (--len);
    //                  continue top;
    //                }
    //                len -= op - whave;
    //                do {
    //                  output[_out++] = 0;
    //                } while (--op > whave);
    //                if (op === 0) {
    //                  from = _out - dist;
    //                  do {
    //                    output[_out++] = output[from++];
    //                  } while (--len);
    //                  continue top;
    //                }
    //#endif
                                                }
                                                from = 0; // window index
                                                from_source = s_window;
                                                if (wnext === 0) {           /* very common case */
                                                    from += wsize - op;
                                                    if (op < len) {         /* some from window */
                                                        len -= op;
                                                        do {
                                                            output[_out++] = s_window[from++];
                                                        } while (--op);
                                                        from = _out - dist;  /* rest from output */
                                                        from_source = output;
                                                    }
                                                }
                                                else if (wnext < op) {      /* wrap around window */
                                                    from += wsize + wnext - op;
                                                    op -= wnext;
                                                    if (op < len) {         /* some from end of window */
                                                        len -= op;
                                                        do {
                                                            output[_out++] = s_window[from++];
                                                        } while (--op);
                                                        from = 0;
                                                        if (wnext < len) {  /* some from start of window */
                                                            op = wnext;
                                                            len -= op;
                                                            do {
                                                                output[_out++] = s_window[from++];
                                                            } while (--op);
                                                            from = _out - dist;      /* rest from output */
                                                            from_source = output;
                                                        }
                                                    }
                                                }
                                                else {                      /* contiguous in window */
                                                    from += wnext - op;
                                                    if (op < len) {         /* some from window */
                                                        len -= op;
                                                        do {
                                                            output[_out++] = s_window[from++];
                                                        } while (--op);
                                                        from = _out - dist;  /* rest from output */
                                                        from_source = output;
                                                    }
                                                }
                                                while (len > 2) {
                                                    output[_out++] = from_source[from++];
                                                    output[_out++] = from_source[from++];
                                                    output[_out++] = from_source[from++];
                                                    len -= 3;
                                                }
                                                if (len) {
                                                    output[_out++] = from_source[from++];
                                                    if (len > 1) {
                                                        output[_out++] = from_source[from++];
                                                    }
                                                }
                                            }
                                            else {
                                                from = _out - dist;          /* copy direct from output */
                                                do {                        /* minimum length is three */
                                                    output[_out++] = output[from++];
                                                    output[_out++] = output[from++];
                                                    output[_out++] = output[from++];
                                                    len -= 3;
                                                } while (len > 2);
                                                if (len) {
                                                    output[_out++] = output[from++];
                                                    if (len > 1) {
                                                        output[_out++] = output[from++];
                                                    }
                                                }
                                            }
                                        }
                                        else if ((op & 64) === 0) {          /* 2nd level distance code */
                                            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
                                            continue dodist;
                                        }
                                        else {
                                            strm.msg = 'invalid distance code';
                                            state.mode = BAD;
                                            break top;
                                        }

                                        break; // need to emulate goto via "continue"
                                    }
                            }
                            else if ((op & 64) === 0) {              /* 2nd level length code */
                                here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
                                continue dolen;
                            }
                            else if (op & 32) {                     /* end-of-block */
                                //Tracevv((stderr, "inflate:         end of block\n"));
                                state.mode = TYPE;
                                break top;
                            }
                            else {
                                strm.msg = 'invalid literal/length code';
                                state.mode = BAD;
                                break top;
                            }

                            break; // need to emulate goto via "continue"
                        }
                } while (_in < last && _out < end);

            /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
            len = bits >> 3;
            _in -= len;
            bits -= len << 3;
            hold &= (1 << bits) - 1;

            /* update state and return */
            strm.next_in = _in;
            strm.next_out = _out;
            strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
            strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
            state.hold = hold;
            state.bits = bits;
            return;
        };

    },{}],8:[function(require,module,exports){


        var utils         = require('../utils/common');
        var adler32       = require('./adler32');
        var crc32         = require('./crc32');
        var inflate_fast  = require('./inffast');
        var inflate_table = require('./inftrees');

        var CODES = 0;
        var LENS = 1;
        var DISTS = 2;

        /* Public constants ==========================================================*/
        /* ===========================================================================*/


        /* Allowed flush values; see deflate() and inflate() below for details */
    //var Z_NO_FLUSH      = 0;
    //var Z_PARTIAL_FLUSH = 1;
    //var Z_SYNC_FLUSH    = 2;
    //var Z_FULL_FLUSH    = 3;
        var Z_FINISH        = 4;
        var Z_BLOCK         = 5;
        var Z_TREES         = 6;


        /* Return codes for the compression/decompression functions. Negative values
         * are errors, positive values are used for special but normal events.
         */
        var Z_OK            = 0;
        var Z_STREAM_END    = 1;
        var Z_NEED_DICT     = 2;
    //var Z_ERRNO         = -1;
        var Z_STREAM_ERROR  = -2;
        var Z_DATA_ERROR    = -3;
        var Z_MEM_ERROR     = -4;
        var Z_BUF_ERROR     = -5;
    //var Z_VERSION_ERROR = -6;

        /* The deflate compression method */
        var Z_DEFLATED  = 8;


        /* STATES ====================================================================*/
        /* ===========================================================================*/


        var    HEAD = 1;       /* i: waiting for magic header */
        var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
        var    TIME = 3;       /* i: waiting for modification time (gzip) */
        var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
        var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
        var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
        var    NAME = 7;       /* i: waiting for end of file name (gzip) */
        var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
        var    HCRC = 9;       /* i: waiting for header crc (gzip) */
        var    DICTID = 10;    /* i: waiting for dictionary check value */
        var    DICT = 11;      /* waiting for inflateSetDictionary() call */
        var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
        var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
        var        STORED = 14;    /* i: waiting for stored size (length and complement) */
        var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
        var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
        var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
        var        LENLENS = 18;   /* i: waiting for code length code lengths */
        var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
        var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
        var            LEN = 21;       /* i: waiting for length/lit/eob code */
        var            LENEXT = 22;    /* i: waiting for length extra bits */
        var            DIST = 23;      /* i: waiting for distance code */
        var            DISTEXT = 24;   /* i: waiting for distance extra bits */
        var            MATCH = 25;     /* o: waiting for output space to copy string */
        var            LIT = 26;       /* o: waiting for output space to write literal */
        var    CHECK = 27;     /* i: waiting for 32-bit check value */
        var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
        var    DONE = 29;      /* finished check, done -- remain here until reset */
        var    BAD = 30;       /* got a data error -- remain here until reset */
        var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
        var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

        /* ===========================================================================*/



        var ENOUGH_LENS = 852;
        var ENOUGH_DISTS = 592;
    //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

        var MAX_WBITS = 15;
        /* 32K LZ77 window */
        var DEF_WBITS = MAX_WBITS;


        function zswap32(q) {
            return  (((q >>> 24) & 0xff) +
                     ((q >>> 8) & 0xff00) +
                     ((q & 0xff00) << 8) +
                     ((q & 0xff) << 24));
        }


        function InflateState() {
            this.mode = 0;             /* current inflate mode */
            this.last = false;          /* true if processing last block */
            this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
            this.havedict = false;      /* true if dictionary provided */
            this.flags = 0;             /* gzip header method and flags (0 if zlib) */
            this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
            this.check = 0;             /* protected copy of check value */
            this.total = 0;             /* protected copy of output count */
            // TODO: may be {}
            this.head = null;           /* where to save gzip header information */

            /* sliding window */
            this.wbits = 0;             /* log base 2 of requested window size */
            this.wsize = 0;             /* window size or zero if not using window */
            this.whave = 0;             /* valid bytes in the window */
            this.wnext = 0;             /* window write index */
            this.window = null;         /* allocated sliding window, if needed */

            /* bit accumulator */
            this.hold = 0;              /* input bit accumulator */
            this.bits = 0;              /* number of bits in "in" */

            /* for string and stored block copying */
            this.length = 0;            /* literal or length of data to copy */
            this.offset = 0;            /* distance back to copy string from */

            /* for table and code decoding */
            this.extra = 0;             /* extra bits needed */

            /* fixed and dynamic code tables */
            this.lencode = null;          /* starting table for length/literal codes */
            this.distcode = null;         /* starting table for distance codes */
            this.lenbits = 0;           /* index bits for lencode */
            this.distbits = 0;          /* index bits for distcode */

            /* dynamic table building */
            this.ncode = 0;             /* number of code length code lengths */
            this.nlen = 0;              /* number of length code lengths */
            this.ndist = 0;             /* number of distance code lengths */
            this.have = 0;              /* number of code lengths in lens[] */
            this.next = null;              /* next available space in codes[] */

            this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
            this.work = new utils.Buf16(288); /* work area for code table building */

            /*
             because we don't have pointers in js, we use lencode and distcode directly
             as buffers so we don't need codes
             */
            //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
            this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
            this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
            this.sane = 0;                   /* if false, allow invalid distance too far */
            this.back = 0;                   /* bits back of last unprocessed length/lit */
            this.was = 0;                    /* initial length of match */
        }

        function inflateResetKeep(strm) {
            var state;

            if (!strm || !strm.state) { return Z_STREAM_ERROR; }
            state = strm.state;
            strm.total_in = strm.total_out = state.total = 0;
            strm.msg = ''; /*Z_NULL*/
            if (state.wrap) {       /* to support ill-conceived Java test suite */
                strm.adler = state.wrap & 1;
            }
            state.mode = HEAD;
            state.last = 0;
            state.havedict = 0;
            state.dmax = 32768;
            state.head = null/*Z_NULL*/;
            state.hold = 0;
            state.bits = 0;
            //state.lencode = state.distcode = state.next = state.codes;
            state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
            state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

            state.sane = 1;
            state.back = -1;
            //Tracev((stderr, "inflate: reset\n"));
            return Z_OK;
        }

        function inflateReset(strm) {
            var state;

            if (!strm || !strm.state) { return Z_STREAM_ERROR; }
            state = strm.state;
            state.wsize = 0;
            state.whave = 0;
            state.wnext = 0;
            return inflateResetKeep(strm);

        }

        function inflateReset2(strm, windowBits) {
            var wrap;
            var state;

            /* get the state */
            if (!strm || !strm.state) { return Z_STREAM_ERROR; }
            state = strm.state;

            /* extract wrap request from windowBits parameter */
            if (windowBits < 0) {
                wrap = 0;
                windowBits = -windowBits;
            }
            else {
                wrap = (windowBits >> 4) + 1;
                if (windowBits < 48) {
                    windowBits &= 15;
                }
            }

            /* set number of window bits, free window if different */
            if (windowBits && (windowBits < 8 || windowBits > 15)) {
                return Z_STREAM_ERROR;
            }
            if (state.window !== null && state.wbits !== windowBits) {
                state.window = null;
            }

            /* update state and reset the rest of it */
            state.wrap = wrap;
            state.wbits = windowBits;
            return inflateReset(strm);
        }

        function inflateInit2(strm, windowBits) {
            var ret;
            var state;

            if (!strm) { return Z_STREAM_ERROR; }
            //strm.msg = Z_NULL;                 /* in case we return an error */

            state = new InflateState();

            //if (state === Z_NULL) return Z_MEM_ERROR;
            //Tracev((stderr, "inflate: allocated\n"));
            strm.state = state;
            state.window = null/*Z_NULL*/;
            ret = inflateReset2(strm, windowBits);
            if (ret !== Z_OK) {
                strm.state = null/*Z_NULL*/;
            }
            return ret;
        }

        function inflateInit(strm) {
            return inflateInit2(strm, DEF_WBITS);
        }


        /*
         Return state with length and distance decoding tables and index sizes set to
         fixed code decoding.  Normally this returns fixed tables from inffixed.h.
         If BUILDFIXED is defined, then instead this routine builds the tables the
         first time it's called, and returns those tables the first time and
         thereafter.  This reduces the size of the code by about 2K bytes, in
         exchange for a little execution time.  However, BUILDFIXED should not be
         used for threaded applications, since the rewriting of the tables and virgin
         may not be thread-safe.
         */
        var virgin = true;

        var lenfix, distfix; // We have no pointers in JS, so keep tables separate

        function fixedtables(state) {
            /* build fixed huffman tables if first call (may not be thread safe) */
            if (virgin) {
                var sym;

                lenfix = new utils.Buf32(512);
                distfix = new utils.Buf32(32);

                /* literal/length table */
                sym = 0;
                while (sym < 144) { state.lens[sym++] = 8; }
                while (sym < 256) { state.lens[sym++] = 9; }
                while (sym < 280) { state.lens[sym++] = 7; }
                while (sym < 288) { state.lens[sym++] = 8; }

                inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

                /* distance table */
                sym = 0;
                while (sym < 32) { state.lens[sym++] = 5; }

                inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

                /* do this just once */
                virgin = false;
            }

            state.lencode = lenfix;
            state.lenbits = 9;
            state.distcode = distfix;
            state.distbits = 5;
        }


        /*
         Update the window with the last wsize (normally 32K) bytes written before
         returning.  If window does not exist yet, create it.  This is only called
         when a window is already in use, or when output has been written during this
         inflate call, but the end of the deflate stream has not been reached yet.
         It is also called to create a window for dictionary data when a dictionary
         is loaded.

         Providing output buffers larger than 32K to inflate() should provide a speed
         advantage, since only the last 32K of output is copied to the sliding window
         upon return from inflate(), and since all distances after the first 32K of
         output will fall in the output data, making match copies simpler and faster.
         The advantage may be dependent on the size of the processor's data caches.
         */
        function updatewindow(strm, src, end, copy) {
            var dist;
            var state = strm.state;

            /* if it hasn't been done already, allocate space for the window */
            if (state.window === null) {
                state.wsize = 1 << state.wbits;
                state.wnext = 0;
                state.whave = 0;

                state.window = new utils.Buf8(state.wsize);
            }

            /* copy state->wsize or less output bytes into the circular window */
            if (copy >= state.wsize) {
                utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
                state.wnext = 0;
                state.whave = state.wsize;
            }
            else {
                dist = state.wsize - state.wnext;
                if (dist > copy) {
                    dist = copy;
                }
                //zmemcpy(state->window + state->wnext, end - copy, dist);
                utils.arraySet(state.window, src, end - copy, dist, state.wnext);
                copy -= dist;
                if (copy) {
                    //zmemcpy(state->window, end - copy, copy);
                    utils.arraySet(state.window, src, end - copy, copy, 0);
                    state.wnext = copy;
                    state.whave = state.wsize;
                }
                else {
                    state.wnext += dist;
                    if (state.wnext === state.wsize) { state.wnext = 0; }
                    if (state.whave < state.wsize) { state.whave += dist; }
                }
            }
            return 0;
        }

        function inflate(strm, flush) {
            var state;
            var input, output;          // input/output buffers
            var next;                   /* next input INDEX */
            var put;                    /* next output INDEX */
            var have, left;             /* available input and output */
            var hold;                   /* bit buffer */
            var bits;                   /* bits in bit buffer */
            var _in, _out;              /* save starting available input and output */
            var copy;                   /* number of stored or match bytes to copy */
            var from;                   /* where to copy match bytes from */
            var from_source;
            var here = 0;               /* current decoding table entry */
            var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
            //var last;                   /* parent table entry */
            var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
            var len;                    /* length to copy for repeats, bits to drop */
            var ret;                    /* return code */
            var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
            var opts;

            var n; // temporary var for NEED_BITS

            var order = /* permutation of code lengths */
                [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


            if (!strm || !strm.state || !strm.output ||
                (!strm.input && strm.avail_in !== 0)) {
                return Z_STREAM_ERROR;
            }

            state = strm.state;
            if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


            //--- LOAD() ---
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            //---

            _in = have;
            _out = left;
            ret = Z_OK;

            inf_leave: // goto emulation
                for (;;) {
                    switch (state.mode) {
                        case HEAD:
                            if (state.wrap === 0) {
                                state.mode = TYPEDO;
                                break;
                            }
                            //=== NEEDBITS(16);
                            while (bits < 16) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
                                state.check = 0/*crc32(0L, Z_NULL, 0)*/;
                                //=== CRC2(state.check, hold);
                                hbuf[0] = hold & 0xff;
                                hbuf[1] = (hold >>> 8) & 0xff;
                                state.check = crc32(state.check, hbuf, 2, 0);
                                //===//

                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                                state.mode = FLAGS;
                                break;
                            }
                            state.flags = 0;           /* expect zlib header */
                            if (state.head) {
                                state.head.done = false;
                            }
                            if (!(state.wrap & 1) ||   /* check if zlib header allowed */
                                (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
                                strm.msg = 'incorrect header check';
                                state.mode = BAD;
                                break;
                            }
                            if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
                                strm.msg = 'unknown compression method';
                                state.mode = BAD;
                                break;
                            }
                            //--- DROPBITS(4) ---//
                            hold >>>= 4;
                            bits -= 4;
                            //---//
                            len = (hold & 0x0f)/*BITS(4)*/ + 8;
                            if (state.wbits === 0) {
                                state.wbits = len;
                            }
                            else if (len > state.wbits) {
                                strm.msg = 'invalid window size';
                                state.mode = BAD;
                                break;
                            }
                            state.dmax = 1 << len;
                            //Tracev((stderr, "inflate:   zlib header ok\n"));
                            strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
                            state.mode = hold & 0x200 ? DICTID : TYPE;
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            break;
                        case FLAGS:
                            //=== NEEDBITS(16); */
                            while (bits < 16) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            state.flags = hold;
                            if ((state.flags & 0xff) !== Z_DEFLATED) {
                                strm.msg = 'unknown compression method';
                                state.mode = BAD;
                                break;
                            }
                            if (state.flags & 0xe000) {
                                strm.msg = 'unknown header flags set';
                                state.mode = BAD;
                                break;
                            }
                            if (state.head) {
                                state.head.text = ((hold >> 8) & 1);
                            }
                            if (state.flags & 0x0200) {
                                //=== CRC2(state.check, hold);
                                hbuf[0] = hold & 0xff;
                                hbuf[1] = (hold >>> 8) & 0xff;
                                state.check = crc32(state.check, hbuf, 2, 0);
                                //===//
                            }
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = TIME;
                        /* falls through */
                        case TIME:
                            //=== NEEDBITS(32); */
                            while (bits < 32) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            if (state.head) {
                                state.head.time = hold;
                            }
                            if (state.flags & 0x0200) {
                                //=== CRC4(state.check, hold)
                                hbuf[0] = hold & 0xff;
                                hbuf[1] = (hold >>> 8) & 0xff;
                                hbuf[2] = (hold >>> 16) & 0xff;
                                hbuf[3] = (hold >>> 24) & 0xff;
                                state.check = crc32(state.check, hbuf, 4, 0);
                                //===
                            }
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = OS;
                        /* falls through */
                        case OS:
                            //=== NEEDBITS(16); */
                            while (bits < 16) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            if (state.head) {
                                state.head.xflags = (hold & 0xff);
                                state.head.os = (hold >> 8);
                            }
                            if (state.flags & 0x0200) {
                                //=== CRC2(state.check, hold);
                                hbuf[0] = hold & 0xff;
                                hbuf[1] = (hold >>> 8) & 0xff;
                                state.check = crc32(state.check, hbuf, 2, 0);
                                //===//
                            }
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = EXLEN;
                        /* falls through */
                        case EXLEN:
                            if (state.flags & 0x0400) {
                                //=== NEEDBITS(16); */
                                while (bits < 16) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                state.length = hold;
                                if (state.head) {
                                    state.head.extra_len = hold;
                                }
                                if (state.flags & 0x0200) {
                                    //=== CRC2(state.check, hold);
                                    hbuf[0] = hold & 0xff;
                                    hbuf[1] = (hold >>> 8) & 0xff;
                                    state.check = crc32(state.check, hbuf, 2, 0);
                                    //===//
                                }
                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                            }
                            else if (state.head) {
                                state.head.extra = null/*Z_NULL*/;
                            }
                            state.mode = EXTRA;
                        /* falls through */
                        case EXTRA:
                            if (state.flags & 0x0400) {
                                copy = state.length;
                                if (copy > have) { copy = have; }
                                if (copy) {
                                    if (state.head) {
                                        len = state.head.extra_len - state.length;
                                        if (!state.head.extra) {
                                            // Use untyped array for more conveniend processing later
                                            state.head.extra = new Array(state.head.extra_len);
                                        }
                                        utils.arraySet(
                                            state.head.extra,
                                            input,
                                            next,
                                            // extra field is limited to 65536 bytes
                                            // - no need for additional size check
                                            copy,
                                            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                                            len
                                        );
                                        //zmemcpy(state.head.extra + len, next,
                                        //        len + copy > state.head.extra_max ?
                                        //        state.head.extra_max - len : copy);
                                    }
                                    if (state.flags & 0x0200) {
                                        state.check = crc32(state.check, input, copy, next);
                                    }
                                    have -= copy;
                                    next += copy;
                                    state.length -= copy;
                                }
                                if (state.length) { break inf_leave; }
                            }
                            state.length = 0;
                            state.mode = NAME;
                        /* falls through */
                        case NAME:
                            if (state.flags & 0x0800) {
                                if (have === 0) { break inf_leave; }
                                copy = 0;
                                do {
                                    // TODO: 2 or 1 bytes?
                                    len = input[next + copy++];
                                    /* use constant limit because in js we should not preallocate memory */
                                    if (state.head && len &&
                                        (state.length < 65536 /*state.head.name_max*/)) {
                                        state.head.name += String.fromCharCode(len);
                                    }
                                } while (len && copy < have);

                                if (state.flags & 0x0200) {
                                    state.check = crc32(state.check, input, copy, next);
                                }
                                have -= copy;
                                next += copy;
                                if (len) { break inf_leave; }
                            }
                            else if (state.head) {
                                state.head.name = null;
                            }
                            state.length = 0;
                            state.mode = COMMENT;
                        /* falls through */
                        case COMMENT:
                            if (state.flags & 0x1000) {
                                if (have === 0) { break inf_leave; }
                                copy = 0;
                                do {
                                    len = input[next + copy++];
                                    /* use constant limit because in js we should not preallocate memory */
                                    if (state.head && len &&
                                        (state.length < 65536 /*state.head.comm_max*/)) {
                                        state.head.comment += String.fromCharCode(len);
                                    }
                                } while (len && copy < have);
                                if (state.flags & 0x0200) {
                                    state.check = crc32(state.check, input, copy, next);
                                }
                                have -= copy;
                                next += copy;
                                if (len) { break inf_leave; }
                            }
                            else if (state.head) {
                                state.head.comment = null;
                            }
                            state.mode = HCRC;
                        /* falls through */
                        case HCRC:
                            if (state.flags & 0x0200) {
                                //=== NEEDBITS(16); */
                                while (bits < 16) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                if (hold !== (state.check & 0xffff)) {
                                    strm.msg = 'header crc mismatch';
                                    state.mode = BAD;
                                    break;
                                }
                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                            }
                            if (state.head) {
                                state.head.hcrc = ((state.flags >> 9) & 1);
                                state.head.done = true;
                            }
                            strm.adler = state.check = 0;
                            state.mode = TYPE;
                            break;
                        case DICTID:
                            //=== NEEDBITS(32); */
                            while (bits < 32) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            strm.adler = state.check = zswap32(hold);
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = DICT;
                        /* falls through */
                        case DICT:
                            if (state.havedict === 0) {
                                //--- RESTORE() ---
                                strm.next_out = put;
                                strm.avail_out = left;
                                strm.next_in = next;
                                strm.avail_in = have;
                                state.hold = hold;
                                state.bits = bits;
                                //---
                                return Z_NEED_DICT;
                            }
                            strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
                            state.mode = TYPE;
                        /* falls through */
                        case TYPE:
                            if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
                        /* falls through */
                        case TYPEDO:
                            if (state.last) {
                                //--- BYTEBITS() ---//
                                hold >>>= bits & 7;
                                bits -= bits & 7;
                                //---//
                                state.mode = CHECK;
                                break;
                            }
                            //=== NEEDBITS(3); */
                            while (bits < 3) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            state.last = (hold & 0x01)/*BITS(1)*/;
                            //--- DROPBITS(1) ---//
                            hold >>>= 1;
                            bits -= 1;
                            //---//

                            switch ((hold & 0x03)/*BITS(2)*/) {
                                case 0:                             /* stored block */
                                    //Tracev((stderr, "inflate:     stored block%s\n",
                                    //        state.last ? " (last)" : ""));
                                    state.mode = STORED;
                                    break;
                                case 1:                             /* fixed block */
                                    fixedtables(state);
                                    //Tracev((stderr, "inflate:     fixed codes block%s\n",
                                    //        state.last ? " (last)" : ""));
                                    state.mode = LEN_;             /* decode codes */
                                    if (flush === Z_TREES) {
                                        //--- DROPBITS(2) ---//
                                        hold >>>= 2;
                                        bits -= 2;
                                        //---//
                                        break inf_leave;
                                    }
                                    break;
                                case 2:                             /* dynamic block */
                                    //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                                    //        state.last ? " (last)" : ""));
                                    state.mode = TABLE;
                                    break;
                                case 3:
                                    strm.msg = 'invalid block type';
                                    state.mode = BAD;
                            }
                            //--- DROPBITS(2) ---//
                            hold >>>= 2;
                            bits -= 2;
                            //---//
                            break;
                        case STORED:
                            //--- BYTEBITS() ---// /* go to byte boundary */
                            hold >>>= bits & 7;
                            bits -= bits & 7;
                            //---//
                            //=== NEEDBITS(32); */
                            while (bits < 32) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
                                strm.msg = 'invalid stored block lengths';
                                state.mode = BAD;
                                break;
                            }
                            state.length = hold & 0xffff;
                            //Tracev((stderr, "inflate:       stored length %u\n",
                            //        state.length));
                            //=== INITBITS();
                            hold = 0;
                            bits = 0;
                            //===//
                            state.mode = COPY_;
                            if (flush === Z_TREES) { break inf_leave; }
                        /* falls through */
                        case COPY_:
                            state.mode = COPY;
                        /* falls through */
                        case COPY:
                            copy = state.length;
                            if (copy) {
                                if (copy > have) { copy = have; }
                                if (copy > left) { copy = left; }
                                if (copy === 0) { break inf_leave; }
                                //--- zmemcpy(put, next, copy); ---
                                utils.arraySet(output, input, next, copy, put);
                                //---//
                                have -= copy;
                                next += copy;
                                left -= copy;
                                put += copy;
                                state.length -= copy;
                                break;
                            }
                            //Tracev((stderr, "inflate:       stored end\n"));
                            state.mode = TYPE;
                            break;
                        case TABLE:
                            //=== NEEDBITS(14); */
                            while (bits < 14) {
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                            }
                            //===//
                            state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
                            //--- DROPBITS(5) ---//
                            hold >>>= 5;
                            bits -= 5;
                            //---//
                            state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
                            //--- DROPBITS(5) ---//
                            hold >>>= 5;
                            bits -= 5;
                            //---//
                            state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
                            //--- DROPBITS(4) ---//
                            hold >>>= 4;
                            bits -= 4;
                            //---//
    //#ifndef PKZIP_BUG_WORKAROUND
                            if (state.nlen > 286 || state.ndist > 30) {
                                strm.msg = 'too many length or distance symbols';
                                state.mode = BAD;
                                break;
                            }
    //#endif
                            //Tracev((stderr, "inflate:       table sizes ok\n"));
                            state.have = 0;
                            state.mode = LENLENS;
                        /* falls through */
                        case LENLENS:
                            while (state.have < state.ncode) {
                                //=== NEEDBITS(3);
                                while (bits < 3) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
                                //--- DROPBITS(3) ---//
                                hold >>>= 3;
                                bits -= 3;
                                //---//
                            }
                            while (state.have < 19) {
                                state.lens[order[state.have++]] = 0;
                            }
                            // We have separate tables & no pointers. 2 commented lines below not needed.
                            //state.next = state.codes;
                            //state.lencode = state.next;
                            // Switch to use dynamic table
                            state.lencode = state.lendyn;
                            state.lenbits = 7;

                            opts = { bits: state.lenbits };
                            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
                            state.lenbits = opts.bits;

                            if (ret) {
                                strm.msg = 'invalid code lengths set';
                                state.mode = BAD;
                                break;
                            }
                            //Tracev((stderr, "inflate:       code lengths ok\n"));
                            state.have = 0;
                            state.mode = CODELENS;
                        /* falls through */
                        case CODELENS:
                            while (state.have < state.nlen + state.ndist) {
                                for (;;) {
                                    here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
                                    here_bits = here >>> 24;
                                    here_op = (here >>> 16) & 0xff;
                                    here_val = here & 0xffff;

                                    if ((here_bits) <= bits) { break; }
                                    //--- PULLBYTE() ---//
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                    //---//
                                }
                                if (here_val < 16) {
                                    //--- DROPBITS(here.bits) ---//
                                    hold >>>= here_bits;
                                    bits -= here_bits;
                                    //---//
                                    state.lens[state.have++] = here_val;
                                }
                                else {
                                    if (here_val === 16) {
                                        //=== NEEDBITS(here.bits + 2);
                                        n = here_bits + 2;
                                        while (bits < n) {
                                            if (have === 0) { break inf_leave; }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8;
                                        }
                                        //===//
                                        //--- DROPBITS(here.bits) ---//
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        //---//
                                        if (state.have === 0) {
                                            strm.msg = 'invalid bit length repeat';
                                            state.mode = BAD;
                                            break;
                                        }
                                        len = state.lens[state.have - 1];
                                        copy = 3 + (hold & 0x03);//BITS(2);
                                        //--- DROPBITS(2) ---//
                                        hold >>>= 2;
                                        bits -= 2;
                                        //---//
                                    }
                                    else if (here_val === 17) {
                                        //=== NEEDBITS(here.bits + 3);
                                        n = here_bits + 3;
                                        while (bits < n) {
                                            if (have === 0) { break inf_leave; }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8;
                                        }
                                        //===//
                                        //--- DROPBITS(here.bits) ---//
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        //---//
                                        len = 0;
                                        copy = 3 + (hold & 0x07);//BITS(3);
                                        //--- DROPBITS(3) ---//
                                        hold >>>= 3;
                                        bits -= 3;
                                        //---//
                                    }
                                    else {
                                        //=== NEEDBITS(here.bits + 7);
                                        n = here_bits + 7;
                                        while (bits < n) {
                                            if (have === 0) { break inf_leave; }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8;
                                        }
                                        //===//
                                        //--- DROPBITS(here.bits) ---//
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        //---//
                                        len = 0;
                                        copy = 11 + (hold & 0x7f);//BITS(7);
                                        //--- DROPBITS(7) ---//
                                        hold >>>= 7;
                                        bits -= 7;
                                        //---//
                                    }
                                    if (state.have + copy > state.nlen + state.ndist) {
                                        strm.msg = 'invalid bit length repeat';
                                        state.mode = BAD;
                                        break;
                                    }
                                    while (copy--) {
                                        state.lens[state.have++] = len;
                                    }
                                }
                            }

                            /* handle error breaks in while */
                            if (state.mode === BAD) { break; }

                            /* check for end-of-block code (better have one) */
                            if (state.lens[256] === 0) {
                                strm.msg = 'invalid code -- missing end-of-block';
                                state.mode = BAD;
                                break;
                            }

                            /* build code tables -- note: do not change the lenbits or distbits
                             values here (9 and 6) without reading the comments in inftrees.h
                             concerning the ENOUGH constants, which depend on those values */
                            state.lenbits = 9;

                            opts = { bits: state.lenbits };
                            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
                            // We have separate tables & no pointers. 2 commented lines below not needed.
                            // state.next_index = opts.table_index;
                            state.lenbits = opts.bits;
                            // state.lencode = state.next;

                            if (ret) {
                                strm.msg = 'invalid literal/lengths set';
                                state.mode = BAD;
                                break;
                            }

                            state.distbits = 6;
                            //state.distcode.copy(state.codes);
                            // Switch to use dynamic table
                            state.distcode = state.distdyn;
                            opts = { bits: state.distbits };
                            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
                            // We have separate tables & no pointers. 2 commented lines below not needed.
                            // state.next_index = opts.table_index;
                            state.distbits = opts.bits;
                            // state.distcode = state.next;

                            if (ret) {
                                strm.msg = 'invalid distances set';
                                state.mode = BAD;
                                break;
                            }
                            //Tracev((stderr, 'inflate:       codes ok\n'));
                            state.mode = LEN_;
                            if (flush === Z_TREES) { break inf_leave; }
                        /* falls through */
                        case LEN_:
                            state.mode = LEN;
                        /* falls through */
                        case LEN:
                            if (have >= 6 && left >= 258) {
                                //--- RESTORE() ---
                                strm.next_out = put;
                                strm.avail_out = left;
                                strm.next_in = next;
                                strm.avail_in = have;
                                state.hold = hold;
                                state.bits = bits;
                                //---
                                inflate_fast(strm, _out);
                                //--- LOAD() ---
                                put = strm.next_out;
                                output = strm.output;
                                left = strm.avail_out;
                                next = strm.next_in;
                                input = strm.input;
                                have = strm.avail_in;
                                hold = state.hold;
                                bits = state.bits;
                                //---

                                if (state.mode === TYPE) {
                                    state.back = -1;
                                }
                                break;
                            }
                            state.back = 0;
                            for (;;) {
                                here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
                                here_bits = here >>> 24;
                                here_op = (here >>> 16) & 0xff;
                                here_val = here & 0xffff;

                                if (here_bits <= bits) { break; }
                                //--- PULLBYTE() ---//
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                                //---//
                            }
                            if (here_op && (here_op & 0xf0) === 0) {
                                last_bits = here_bits;
                                last_op = here_op;
                                last_val = here_val;
                                for (;;) {
                                    here = state.lencode[last_val +
                                                         ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
                                    here_bits = here >>> 24;
                                    here_op = (here >>> 16) & 0xff;
                                    here_val = here & 0xffff;

                                    if ((last_bits + here_bits) <= bits) { break; }
                                    //--- PULLBYTE() ---//
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                    //---//
                                }
                                //--- DROPBITS(last.bits) ---//
                                hold >>>= last_bits;
                                bits -= last_bits;
                                //---//
                                state.back += last_bits;
                            }
                            //--- DROPBITS(here.bits) ---//
                            hold >>>= here_bits;
                            bits -= here_bits;
                            //---//
                            state.back += here_bits;
                            state.length = here_val;
                            if (here_op === 0) {
                                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                                //        "inflate:         literal '%c'\n" :
                                //        "inflate:         literal 0x%02x\n", here.val));
                                state.mode = LIT;
                                break;
                            }
                            if (here_op & 32) {
                                //Tracevv((stderr, "inflate:         end of block\n"));
                                state.back = -1;
                                state.mode = TYPE;
                                break;
                            }
                            if (here_op & 64) {
                                strm.msg = 'invalid literal/length code';
                                state.mode = BAD;
                                break;
                            }
                            state.extra = here_op & 15;
                            state.mode = LENEXT;
                        /* falls through */
                        case LENEXT:
                            if (state.extra) {
                                //=== NEEDBITS(state.extra);
                                n = state.extra;
                                while (bits < n) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
                                //--- DROPBITS(state.extra) ---//
                                hold >>>= state.extra;
                                bits -= state.extra;
                                //---//
                                state.back += state.extra;
                            }
                            //Tracevv((stderr, "inflate:         length %u\n", state.length));
                            state.was = state.length;
                            state.mode = DIST;
                        /* falls through */
                        case DIST:
                            for (;;) {
                                here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
                                here_bits = here >>> 24;
                                here_op = (here >>> 16) & 0xff;
                                here_val = here & 0xffff;

                                if ((here_bits) <= bits) { break; }
                                //--- PULLBYTE() ---//
                                if (have === 0) { break inf_leave; }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8;
                                //---//
                            }
                            if ((here_op & 0xf0) === 0) {
                                last_bits = here_bits;
                                last_op = here_op;
                                last_val = here_val;
                                for (;;) {
                                    here = state.distcode[last_val +
                                                          ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
                                    here_bits = here >>> 24;
                                    here_op = (here >>> 16) & 0xff;
                                    here_val = here & 0xffff;

                                    if ((last_bits + here_bits) <= bits) { break; }
                                    //--- PULLBYTE() ---//
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                    //---//
                                }
                                //--- DROPBITS(last.bits) ---//
                                hold >>>= last_bits;
                                bits -= last_bits;
                                //---//
                                state.back += last_bits;
                            }
                            //--- DROPBITS(here.bits) ---//
                            hold >>>= here_bits;
                            bits -= here_bits;
                            //---//
                            state.back += here_bits;
                            if (here_op & 64) {
                                strm.msg = 'invalid distance code';
                                state.mode = BAD;
                                break;
                            }
                            state.offset = here_val;
                            state.extra = (here_op) & 15;
                            state.mode = DISTEXT;
                        /* falls through */
                        case DISTEXT:
                            if (state.extra) {
                                //=== NEEDBITS(state.extra);
                                n = state.extra;
                                while (bits < n) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
                                //--- DROPBITS(state.extra) ---//
                                hold >>>= state.extra;
                                bits -= state.extra;
                                //---//
                                state.back += state.extra;
                            }
    //#ifdef INFLATE_STRICT
                            if (state.offset > state.dmax) {
                                strm.msg = 'invalid distance too far back';
                                state.mode = BAD;
                                break;
                            }
    //#endif
                            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
                            state.mode = MATCH;
                        /* falls through */
                        case MATCH:
                            if (left === 0) { break inf_leave; }
                            copy = _out - left;
                            if (state.offset > copy) {         /* copy from window */
                                copy = state.offset - copy;
                                if (copy > state.whave) {
                                    if (state.sane) {
                                        strm.msg = 'invalid distance too far back';
                                        state.mode = BAD;
                                        break;
                                    }
    // (!) This block is disabled in zlib defailts,
    // don't enable it for binary compatibility
    //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
    //          Trace((stderr, "inflate.c too far\n"));
    //          copy -= state.whave;
    //          if (copy > state.length) { copy = state.length; }
    //          if (copy > left) { copy = left; }
    //          left -= copy;
    //          state.length -= copy;
    //          do {
    //            output[put++] = 0;
    //          } while (--copy);
    //          if (state.length === 0) { state.mode = LEN; }
    //          break;
    //#endif
                                }
                                if (copy > state.wnext) {
                                    copy -= state.wnext;
                                    from = state.wsize - copy;
                                }
                                else {
                                    from = state.wnext - copy;
                                }
                                if (copy > state.length) { copy = state.length; }
                                from_source = state.window;
                            }
                            else {                              /* copy from output */
                                from_source = output;
                                from = put - state.offset;
                                copy = state.length;
                            }
                            if (copy > left) { copy = left; }
                            left -= copy;
                            state.length -= copy;
                            do {
                                output[put++] = from_source[from++];
                            } while (--copy);
                            if (state.length === 0) { state.mode = LEN; }
                            break;
                        case LIT:
                            if (left === 0) { break inf_leave; }
                            output[put++] = state.length;
                            left--;
                            state.mode = LEN;
                            break;
                        case CHECK:
                            if (state.wrap) {
                                //=== NEEDBITS(32);
                                while (bits < 32) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    // Use '|' insdead of '+' to make sure that result is signed
                                    hold |= input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                _out -= left;
                                strm.total_out += _out;
                                state.total += _out;
                                if (_out) {
                                    strm.adler = state.check =
                                        /*UPDATE(state.check, put - _out, _out);*/
                                        (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

                                }
                                _out = left;
                                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                                    strm.msg = 'incorrect data check';
                                    state.mode = BAD;
                                    break;
                                }
                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                                //Tracev((stderr, "inflate:   check matches trailer\n"));
                            }
                            state.mode = LENGTH;
                        /* falls through */
                        case LENGTH:
                            if (state.wrap && state.flags) {
                                //=== NEEDBITS(32);
                                while (bits < 32) {
                                    if (have === 0) { break inf_leave; }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8;
                                }
                                //===//
                                if (hold !== (state.total & 0xffffffff)) {
                                    strm.msg = 'incorrect length check';
                                    state.mode = BAD;
                                    break;
                                }
                                //=== INITBITS();
                                hold = 0;
                                bits = 0;
                                //===//
                                //Tracev((stderr, "inflate:   length matches trailer\n"));
                            }
                            state.mode = DONE;
                        /* falls through */
                        case DONE:
                            ret = Z_STREAM_END;
                            break inf_leave;
                        case BAD:
                            ret = Z_DATA_ERROR;
                            break inf_leave;
                        case MEM:
                            return Z_MEM_ERROR;
                        case SYNC:
                        /* falls through */
                        default:
                            return Z_STREAM_ERROR;
                    }
                }

            // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

            /*
             Return from inflate(), updating the total counts and the check value.
             If there was no progress during the inflate() call, return a buffer
             error.  Call updatewindow() to create and/or update the window state.
             Note: a memory error from inflate() is non-recoverable.
             */

            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            //---

            if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                                (state.mode < CHECK || flush !== Z_FINISH))) {
                if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
            }
            _in -= strm.avail_in;
            _out -= strm.avail_out;
            strm.total_in += _in;
            strm.total_out += _out;
            state.total += _out;
            if (state.wrap && _out) {
                strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
                    (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
            }
            strm.data_type = state.bits + (state.last ? 64 : 0) +
                             (state.mode === TYPE ? 128 : 0) +
                             (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
            if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
                ret = Z_BUF_ERROR;
            }
            return ret;
        }

        function inflateEnd(strm) {

            if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
                return Z_STREAM_ERROR;
            }

            var state = strm.state;
            if (state.window) {
                state.window = null;
            }
            strm.state = null;
            return Z_OK;
        }

        function inflateGetHeader(strm, head) {
            var state;

            /* check state */
            if (!strm || !strm.state) { return Z_STREAM_ERROR; }
            state = strm.state;
            if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

            /* save header structure */
            state.head = head;
            head.done = false;
            return Z_OK;
        }

        function inflateSetDictionary(strm, dictionary) {
            var dictLength = dictionary.length;

            var state;
            var dictid;
            var ret;

            /* check state */
            if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
            state = strm.state;

            if (state.wrap !== 0 && state.mode !== DICT) {
                return Z_STREAM_ERROR;
            }

            /* check for correct dictionary identifier */
            if (state.mode === DICT) {
                dictid = 1; /* adler32(0, null, 0)*/
                /* dictid = adler32(dictid, dictionary, dictLength); */
                dictid = adler32(dictid, dictionary, dictLength, 0);
                if (dictid !== state.check) {
                    return Z_DATA_ERROR;
                }
            }
            /* copy dictionary to window using updatewindow(), which will amend the
             existing dictionary if appropriate */
            ret = updatewindow(strm, dictionary, dictLength, dictLength);
            if (ret) {
                state.mode = MEM;
                return Z_MEM_ERROR;
            }
            state.havedict = 1;
            // Tracev((stderr, "inflate:   dictionary set\n"));
            return Z_OK;
        }

        exports.inflateReset = inflateReset;
        exports.inflateReset2 = inflateReset2;
        exports.inflateResetKeep = inflateResetKeep;
        exports.inflateInit = inflateInit;
        exports.inflateInit2 = inflateInit2;
        exports.inflate = inflate;
        exports.inflateEnd = inflateEnd;
        exports.inflateGetHeader = inflateGetHeader;
        exports.inflateSetDictionary = inflateSetDictionary;
        exports.inflateInfo = 'pako inflate (from Nodeca project)';

        /* Not implemented
         exports.inflateCopy = inflateCopy;
         exports.inflateGetDictionary = inflateGetDictionary;
         exports.inflateMark = inflateMark;
         exports.inflatePrime = inflatePrime;
         exports.inflateSync = inflateSync;
         exports.inflateSyncPoint = inflateSyncPoint;
         exports.inflateUndermine = inflateUndermine;
         */

    },{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(require,module,exports){


        var utils = require('../utils/common');

        var MAXBITS = 15;
        var ENOUGH_LENS = 852;
        var ENOUGH_DISTS = 592;
    //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

        var CODES = 0;
        var LENS = 1;
        var DISTS = 2;

        var lbase = [ /* Length codes 257..285 base */
            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
            35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
        ];

        var lext = [ /* Length codes 257..285 extra */
            16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
            19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
        ];

        var dbase = [ /* Distance codes 0..29 base */
            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
            257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
            8193, 12289, 16385, 24577, 0, 0
        ];

        var dext = [ /* Distance codes 0..29 extra */
            16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
            23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
            28, 28, 29, 29, 64, 64
        ];

        module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
        {
            var bits = opts.bits;
            //here = opts.here; /* table entry for duplication */

            var len = 0;               /* a code's length in bits */
            var sym = 0;               /* index of code symbols */
            var min = 0, max = 0;          /* minimum and maximum code lengths */
            var root = 0;              /* number of index bits for root table */
            var curr = 0;              /* number of index bits for current table */
            var drop = 0;              /* code bits to drop for sub-table */
            var left = 0;                   /* number of prefix codes available */
            var used = 0;              /* code entries in table used */
            var huff = 0;              /* Huffman code */
            var incr;              /* for incrementing code, index */
            var fill;              /* index for replicating entries */
            var low;               /* low bits for current root entry */
            var mask;              /* mask for low root bits */
            var next;             /* next available space in table */
            var base = null;     /* base value table to use */
            var base_index = 0;
    //  var shoextra;    /* extra bits table to use */
            var end;                    /* use base and extra for symbol > end */
            var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
            var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
            var extra = null;
            var extra_index = 0;

            var here_bits, here_op, here_val;

            /*
             Process a set of code lengths to create a canonical Huffman code.  The
             code lengths are lens[0..codes-1].  Each length corresponds to the
             symbols 0..codes-1.  The Huffman code is generated by first sorting the
             symbols by length from short to long, and retaining the symbol order
             for codes with equal lengths.  Then the code starts with all zero bits
             for the first code of the shortest length, and the codes are integer
             increments for the same length, and zeros are appended as the length
             increases.  For the deflate format, these bits are stored backwards
             from their more natural integer increment ordering, and so when the
             decoding tables are built in the large loop below, the integer codes
             are incremented backwards.

             This routine assumes, but does not check, that all of the entries in
             lens[] are in the range 0..MAXBITS.  The caller must assure this.
             1..MAXBITS is interpreted as that code length.  zero means that that
             symbol does not occur in this code.

             The codes are sorted by computing a count of codes for each length,
             creating from that a table of starting indices for each length in the
             sorted table, and then entering the symbols in order in the sorted
             table.  The sorted table is work[], with that space being provided by
             the caller.

             The length counts are used for other purposes as well, i.e. finding
             the minimum and maximum length codes, determining if there are any
             codes at all, checking for a valid set of lengths, and looking ahead
             at length counts to determine sub-table sizes when building the
             decoding tables.
             */

            /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
            for (len = 0; len <= MAXBITS; len++) {
                count[len] = 0;
            }
            for (sym = 0; sym < codes; sym++) {
                count[lens[lens_index + sym]]++;
            }

            /* bound code lengths, force root to be within code lengths */
            root = bits;
            for (max = MAXBITS; max >= 1; max--) {
                if (count[max] !== 0) { break; }
            }
            if (root > max) {
                root = max;
            }
            if (max === 0) {                     /* no symbols to code at all */
                //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
                //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
                //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
                table[table_index++] = (1 << 24) | (64 << 16) | 0;


                //table.op[opts.table_index] = 64;
                //table.bits[opts.table_index] = 1;
                //table.val[opts.table_index++] = 0;
                table[table_index++] = (1 << 24) | (64 << 16) | 0;

                opts.bits = 1;
                return 0;     /* no symbols, but wait for decoding to report error */
            }
            for (min = 1; min < max; min++) {
                if (count[min] !== 0) { break; }
            }
            if (root < min) {
                root = min;
            }

            /* check for an over-subscribed or incomplete set of lengths */
            left = 1;
            for (len = 1; len <= MAXBITS; len++) {
                left <<= 1;
                left -= count[len];
                if (left < 0) {
                    return -1;
                }        /* over-subscribed */
            }
            if (left > 0 && (type === CODES || max !== 1)) {
                return -1;                      /* incomplete set */
            }

            /* generate offsets into symbol table for each length for sorting */
            offs[1] = 0;
            for (len = 1; len < MAXBITS; len++) {
                offs[len + 1] = offs[len] + count[len];
            }

            /* sort symbols by length, by symbol order within each length */
            for (sym = 0; sym < codes; sym++) {
                if (lens[lens_index + sym] !== 0) {
                    work[offs[lens[lens_index + sym]]++] = sym;
                }
            }

            /*
             Create and fill in decoding tables.  In this loop, the table being
             filled is at next and has curr index bits.  The code being used is huff
             with length len.  That code is converted to an index by dropping drop
             bits off of the bottom.  For codes where len is less than drop + curr,
             those top drop + curr - len bits are incremented through all values to
             fill the table with replicated entries.

             root is the number of index bits for the root table.  When len exceeds
             root, sub-tables are created pointed to by the root entry with an index
             of the low root bits of huff.  This is saved in low to check for when a
             new sub-table should be started.  drop is zero when the root table is
             being filled, and drop is root when sub-tables are being filled.

             When a new sub-table is needed, it is necessary to look ahead in the
             code lengths to determine what size sub-table is needed.  The length
             counts are used for this, and so count[] is decremented as codes are
             entered in the tables.

             used keeps track of how many table entries have been allocated from the
             provided *table space.  It is checked for LENS and DIST tables against
             the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
             the initial root table size constants.  See the comments in inftrees.h
             for more information.

             sym increments through all symbols, and the loop terminates when
             all codes of length max, i.e. all codes, have been processed.  This
             routine permits incomplete codes, so another loop after this one fills
             in the rest of the decoding tables with invalid code markers.
             */

            /* set up for code type */
            // poor man optimization - use if-else instead of switch,
            // to avoid deopts in old v8
            if (type === CODES) {
                base = extra = work;    /* dummy value--not used */
                end = 19;

            } else if (type === LENS) {
                base = lbase;
                base_index -= 257;
                extra = lext;
                extra_index -= 257;
                end = 256;

            } else {                    /* DISTS */
                base = dbase;
                extra = dext;
                end = -1;
            }

            /* initialize opts for loop */
            huff = 0;                   /* starting code */
            sym = 0;                    /* starting code symbol */
            len = min;                  /* starting code length */
            next = table_index;              /* current table to fill in */
            curr = root;                /* current table index bits */
            drop = 0;                   /* current bits to drop from code for index */
            low = -1;                   /* trigger new sub-table when len > root */
            used = 1 << root;          /* use root table entries */
            mask = used - 1;            /* mask for comparing low */

            /* check available table space */
            if ((type === LENS && used > ENOUGH_LENS) ||
                (type === DISTS && used > ENOUGH_DISTS)) {
                return 1;
            }

            /* process all codes and make table entries */
            for (;;) {
                /* create table entry */
                here_bits = len - drop;
                if (work[sym] < end) {
                    here_op = 0;
                    here_val = work[sym];
                }
                else if (work[sym] > end) {
                    here_op = extra[extra_index + work[sym]];
                    here_val = base[base_index + work[sym]];
                }
                else {
                    here_op = 32 + 64;         /* end of block */
                    here_val = 0;
                }

                /* replicate for those indices with low len bits equal to huff */
                incr = 1 << (len - drop);
                fill = 1 << curr;
                min = fill;                 /* save offset to next table */
                do {
                    fill -= incr;
                    table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
                } while (fill !== 0);

                /* backwards increment the len-bit code huff */
                incr = 1 << (len - 1);
                while (huff & incr) {
                    incr >>= 1;
                }
                if (incr !== 0) {
                    huff &= incr - 1;
                    huff += incr;
                } else {
                    huff = 0;
                }

                /* go to next symbol, update count, len */
                sym++;
                if (--count[len] === 0) {
                    if (len === max) { break; }
                    len = lens[lens_index + work[sym]];
                }

                /* create new sub-table if needed */
                if (len > root && (huff & mask) !== low) {
                    /* if first time, transition to sub-tables */
                    if (drop === 0) {
                        drop = root;
                    }

                    /* increment past last table */
                    next += min;            /* here min is 1 << curr */

                    /* determine length of next table */
                    curr = len - drop;
                    left = 1 << curr;
                    while (curr + drop < max) {
                        left -= count[curr + drop];
                        if (left <= 0) { break; }
                        curr++;
                        left <<= 1;
                    }

                    /* check for enough space */
                    used += 1 << curr;
                    if ((type === LENS && used > ENOUGH_LENS) ||
                        (type === DISTS && used > ENOUGH_DISTS)) {
                        return 1;
                    }

                    /* point entry in root table to sub-table */
                    low = huff & mask;
                    /*table.op[low] = curr;
                     table.bits[low] = root;
                     table.val[low] = next - opts.table_index;*/
                    table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
                }
            }

            /* fill in remaining table entry if code is incomplete (guaranteed to have
             at most one remaining entry, since if the code is incomplete, the
             maximum code length that was allowed to get this far is one bit) */
            if (huff !== 0) {
                //table.op[next + huff] = 64;            /* invalid code marker */
                //table.bits[next + huff] = len - drop;
                //table.val[next + huff] = 0;
                table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
            }

            /* set return parameters */
            //opts.table_index += used;
            opts.bits = root;
            return 0;
        };

    },{"../utils/common":1}],10:[function(require,module,exports){

        module.exports = {
            2:      'need dictionary',     /* Z_NEED_DICT       2  */
            1:      'stream end',          /* Z_STREAM_END      1  */
            0:      '',                    /* Z_OK              0  */
            '-1':   'file error',          /* Z_ERRNO         (-1) */
            '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
            '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
            '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
            '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
            '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
        };

    },{}],11:[function(require,module,exports){


        function ZStream() {
            /* next input byte */
            this.input = null; // JS specific, because we have no pointers
            this.next_in = 0;
            /* number of bytes available at input */
            this.avail_in = 0;
            /* total number of input bytes read so far */
            this.total_in = 0;
            /* next output byte should be put there */
            this.output = null; // JS specific, because we have no pointers
            this.next_out = 0;
            /* remaining free space at output */
            this.avail_out = 0;
            /* total number of bytes output so far */
            this.total_out = 0;
            /* last error message, NULL if no error */
            this.msg = ''/*Z_NULL*/;
            /* not visible by applications */
            this.state = null;
            /* best guess about the data type: binary or text */
            this.data_type = 2/*Z_UNKNOWN*/;
            /* adler32 value of the uncompressed data */
            this.adler = 0;
        }

        module.exports = ZStream;

    },{}],"/lib/inflate.js":[function(require,module,exports){


        var zlib_inflate = require('./zlib/inflate');
        var utils        = require('./utils/common');
        var strings      = require('./utils/strings');
        var c            = require('./zlib/constants');
        var msg          = require('./zlib/messages');
        var ZStream      = require('./zlib/zstream');
        var GZheader     = require('./zlib/gzheader');

        var toString = Object.prototype.toString;

        /**
         * class Inflate
         *
         * Generic JS-style wrapper for zlib calls. If you don't need
         * streaming behaviour - use more simple functions: [[inflate]]
         * and [[inflateRaw]].
         **/

        /* internal
         * inflate.chunks -> Array
         *
         * Chunks of output data, if [[Inflate#onData]] not overriden.
         **/

        /**
         * Inflate.result -> Uint8Array|Array|String
         *
         * Uncompressed result, generated by default [[Inflate#onData]]
         * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
         * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
         * push a chunk with explicit flush (call [[Inflate#push]] with
         * `Z_SYNC_FLUSH` param).
         **/

        /**
         * Inflate.err -> Number
         *
         * Error code after inflate finished. 0 (Z_OK) on success.
         * Should be checked if broken data possible.
         **/

        /**
         * Inflate.msg -> String
         *
         * Error message, if [[Inflate.err]] != 0
         **/


        /**
         * new Inflate(options)
         * - options (Object): zlib inflate options.
         *
         * Creates new inflator instance with specified params. Throws exception
         * on bad params. Supported options:
         *
         * - `windowBits`
         * - `dictionary`
         *
         * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
         * for more information on these.
         *
         * Additional options, for internal needs:
         *
         * - `chunkSize` - size of generated data chunks (16K by default)
         * - `raw` (Boolean) - do raw inflate
         * - `to` (String) - if equal to 'string', then result will be converted
         *   from utf8 to utf16 (javascript) string. When string output requested,
         *   chunk length can differ from `chunkSize`, depending on content.
         *
         * By default, when no options set, autodetect deflate/gzip data format via
         * wrapper header.
         *
         * ##### Example:
         *
         * ```javascript
         * var pako = require('pako')
         *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
         *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
         *
         * var inflate = new pako.Inflate({ level: 3});
         *
         * inflate.push(chunk1, false);
         * inflate.push(chunk2, true);  // true -> last chunk
         *
         * if (inflate.err) { throw new Error(inflate.err); }
         *
         * console.log(inflate.result);
         * ```
         **/
        function Inflate(options) {
            if (!(this instanceof Inflate)) return new Inflate(options);

            this.options = utils.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ''
            }, options || {});

            var opt = this.options;

            // Force window size for `raw` data, if not set directly,
            // because we have no header for autodetect.
            if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
                opt.windowBits = -opt.windowBits;
                if (opt.windowBits === 0) { opt.windowBits = -15; }
            }

            // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
            if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
                !(options && options.windowBits)) {
                opt.windowBits += 32;
            }

            // Gzip header has no info about windows size, we can do autodetect only
            // for deflate. So, if window size not set, force it to max when gzip possible
            if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
                // bit 3 (16) -> gzipped data
                // bit 4 (32) -> autodetect gzip/deflate
                if ((opt.windowBits & 15) === 0) {
                    opt.windowBits |= 15;
                }
            }

            this.err    = 0;      // error code, if happens (0 = Z_OK)
            this.msg    = '';     // error message
            this.ended  = false;  // used to avoid multiple onEnd() calls
            this.chunks = [];     // chunks of compressed data

            this.strm   = new ZStream();
            this.strm.avail_out = 0;

            var status  = zlib_inflate.inflateInit2(
                this.strm,
                opt.windowBits
            );

            if (status !== c.Z_OK) {
                throw new Error(msg[status]);
            }

            this.header = new GZheader();

            zlib_inflate.inflateGetHeader(this.strm, this.header);
        }

        /**
         * Inflate#push(data[, mode]) -> Boolean
         * - data (Uint8Array|Array|ArrayBuffer|String): input data
         * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
         *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
         *
         * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
         * new output chunks. Returns `true` on success. The last data block must have
         * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
         * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
         * can use mode Z_SYNC_FLUSH, keeping the decompression context.
         *
         * On fail call [[Inflate#onEnd]] with error code and return false.
         *
         * We strongly recommend to use `Uint8Array` on input for best speed (output
         * format is detected automatically). Also, don't skip last param and always
         * use the same type in your code (boolean or number). That will improve JS speed.
         *
         * For regular `Array`-s make sure all elements are [0..255].
         *
         * ##### Example
         *
         * ```javascript
         * push(chunk, false); // push one of data chunks
         * ...
         * push(chunk, true);  // push last chunk
         * ```
         **/
        Inflate.prototype.push = function (data, mode) {
            var strm = this.strm;
            var chunkSize = this.options.chunkSize;
            var dictionary = this.options.dictionary;
            var status, _mode;
            var next_out_utf8, tail, utf8str;
            var dict;

            // Flag to properly process Z_BUF_ERROR on testing inflate call
            // when we check that all output data was flushed.
            var allowBufError = false;

            if (this.ended) { return false; }
            _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

            // Convert data if needed
            if (typeof data === 'string') {
                // Only binary strings can be decompressed on practice
                strm.input = strings.binstring2buf(data);
            } else if (toString.call(data) === '[object ArrayBuffer]') {
                strm.input = new Uint8Array(data);
            } else {
                strm.input = data;
            }

            strm.next_in = 0;
            strm.avail_in = strm.input.length;

            do {
                if (strm.avail_out === 0) {
                    strm.output = new utils.Buf8(chunkSize);
                    strm.next_out = 0;
                    strm.avail_out = chunkSize;
                }

                status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

                if (status === c.Z_NEED_DICT && dictionary) {
                    // Convert data if needed
                    if (typeof dictionary === 'string') {
                        dict = strings.string2buf(dictionary);
                    } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
                        dict = new Uint8Array(dictionary);
                    } else {
                        dict = dictionary;
                    }

                    status = zlib_inflate.inflateSetDictionary(this.strm, dict);

                }

                if (status === c.Z_BUF_ERROR && allowBufError === true) {
                    status = c.Z_OK;
                    allowBufError = false;
                }

                if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
                    this.onEnd(status);
                    this.ended = true;
                    return false;
                }

                if (strm.next_out) {
                    if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

                        if (this.options.to === 'string') {

                            next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

                            tail = strm.next_out - next_out_utf8;
                            utf8str = strings.buf2string(strm.output, next_out_utf8);

                            // move tail
                            strm.next_out = tail;
                            strm.avail_out = chunkSize - tail;
                            if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

                            this.onData(utf8str);

                        } else {
                            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
                        }
                    }
                }

                // When no more input data, we should check that internal inflate buffers
                // are flushed. The only way to do it when avail_out = 0 - run one more
                // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
                // Here we set flag to process this error properly.
                //
                // NOTE. Deflate does not return error in this case and does not needs such
                // logic.
                if (strm.avail_in === 0 && strm.avail_out === 0) {
                    allowBufError = true;
                }

            } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

            if (status === c.Z_STREAM_END) {
                _mode = c.Z_FINISH;
            }

            // Finalize on the last chunk.
            if (_mode === c.Z_FINISH) {
                status = zlib_inflate.inflateEnd(this.strm);
                this.onEnd(status);
                this.ended = true;
                return status === c.Z_OK;
            }

            // callback interim results if Z_SYNC_FLUSH.
            if (_mode === c.Z_SYNC_FLUSH) {
                this.onEnd(c.Z_OK);
                strm.avail_out = 0;
                return true;
            }

            return true;
        };


        /**
         * Inflate#onData(chunk) -> Void
         * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
         *   on js engine support. When string output requested, each chunk
         *   will be string.
         *
         * By default, stores data blocks in `chunks[]` property and glue
         * those in `onEnd`. Override this handler, if you need another behaviour.
         **/
        Inflate.prototype.onData = function (chunk) {
            this.chunks.push(chunk);
        };


        /**
         * Inflate#onEnd(status) -> Void
         * - status (Number): inflate status. 0 (Z_OK) on success,
         *   other if not.
         *
         * Called either after you tell inflate that the input stream is
         * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
         * or if an error happened. By default - join collected chunks,
         * free memory and fill `results` / `err` properties.
         **/
        Inflate.prototype.onEnd = function (status) {
            // On success - join
            if (status === c.Z_OK) {
                if (this.options.to === 'string') {
                    // Glue & convert here, until we teach pako to send
                    // utf8 alligned strings to onData
                    this.result = this.chunks.join('');
                } else {
                    this.result = utils.flattenChunks(this.chunks);
                }
            }
            this.chunks = [];
            this.err = status;
            this.msg = this.strm.msg;
        };


        /**
         * inflate(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to decompress.
         * - options (Object): zlib inflate options.
         *
         * Decompress `data` with inflate/ungzip and `options`. Autodetect
         * format via wrapper header by default. That's why we don't provide
         * separate `ungzip` method.
         *
         * Supported options are:
         *
         * - windowBits
         *
         * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
         * for more information.
         *
         * Sugar (options):
         *
         * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
         *   negative windowBits implicitly.
         * - `to` (String) - if equal to 'string', then result will be converted
         *   from utf8 to utf16 (javascript) string. When string output requested,
         *   chunk length can differ from `chunkSize`, depending on content.
         *
         *
         * ##### Example:
         *
         * ```javascript
         * var pako = require('pako')
         *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
         *   , output;
         *
         * try {
     *   output = pako.inflate(input);
     * } catch (err)
         *   console.log(err);
         * }
         * ```
         **/
        function inflate(input, options) {
            var inflator = new Inflate(options);

            inflator.push(input, true);

            // That will never happens, if you don't cheat with options :)
            if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

            return inflator.result;
        }


        /**
         * inflateRaw(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to decompress.
         * - options (Object): zlib inflate options.
         *
         * The same as [[inflate]], but creates raw data, without wrapper
         * (header and adler32 crc).
         **/
        function inflateRaw(input, options) {
            options = options || {};
            options.raw = true;
            return inflate(input, options);
        }


        /**
         * ungzip(data[, options]) -> Uint8Array|Array|String
         * - data (Uint8Array|Array|String): input data to decompress.
         * - options (Object): zlib inflate options.
         *
         * Just shortcut to [[inflate]], because it autodetects format
         * by header.content. Done for convenience.
         **/


        exports.Inflate = Inflate;
        exports.inflate = inflate;
        exports.inflateRaw = inflateRaw;
        exports.ungzip  = inflate;

    },{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js")
    });

    var _0x1f354f = tmp;

    const _0x1bd4=['274aKxdTs','aPosition1','normalize','aPosition','122drYJua','cross','aNormal','deduplicate','typedArray','1ezYAhw','subtract','FLOAT','aNormalB','aPosition0','vertexArrayDestroyable','createEdgeData','Cartesian3','uniqueCount','indexType','ComponentDatatype','byteOffset','createIndexBuffer','RegularInstanceStride','vertCompressConstant','createVertexBuffer','attributes','instancesData','regular','attributeLocations','extractEdges','verticesCount','aNormalA','extractEdgeInformation','519427HdWLJH','minVerticesValue','slice','indicesTypedArray','length','floor','97foEjOi','computeNeighbors','Buffer','BufferUsage','selectIndexData','STATIC_DRAW','indices','aSideness','87330mdAaZm','IndexDatatype','buffer','1796CPwODC','createRegularEdgeAttributes','450498sMPgTx','1duVLIQ','382812qawRhH','equals','vertexAttributes','byteLength','silhouette','ZERO','getSizeInBytes','push','componentsPerAttribute','2015445AEofOI'];const _0xd21485=_0x412a;(function(_0x1409de,_0x11e201){const _0x420184=_0x412a;while(!![]){try{const _0x468bd5=parseInt(_0x420184(0xc3))*parseInt(_0x420184(0xdc))+-parseInt(_0x420184(0xe5))*parseInt(_0x420184(0xd0))+parseInt(_0x420184(0xce))*-parseInt(_0x420184(0xe0))+-parseInt(_0x420184(0xd2))+-parseInt(_0x420184(0xbd))*parseInt(_0x420184(0xd1))+-parseInt(_0x420184(0xcb))+parseInt(_0x420184(0xdb));if(_0x468bd5===_0x11e201)break;else _0x1409de['push'](_0x1409de['shift']());}catch(_0x4eb0a9){_0x1409de['push'](_0x1409de['shift']());}}}(_0x1bd4,0x5d77c));function S3MEdgeProcessor(){}S3MEdgeProcessor[_0xd21485(0xf2)]=0x9,S3MEdgeProcessor[_0xd21485(0xeb)]=function(_0x39a5fd,_0x59ab37,_0x2dedc6){const _0x19df84=_0xd21485;if(_0x59ab37[_0x19df84(0xc1)]==0x0)return null;let _0x2020ac=_0x59ab37[0x0],_0x5ab968;_0x2020ac['indexType']===0x0?_0x5ab968=new Uint16Array(_0x2020ac[_0x19df84(0xc0)]['buffer'],_0x2020ac['indicesTypedArray'][_0x19df84(0xf0)],_0x2020ac['indicesTypedArray']['byteLength']/0x2):_0x5ab968=new Uint32Array(_0x2020ac[_0x19df84(0xc0)][_0x19df84(0xcd)],_0x2020ac['indicesTypedArray'][_0x19df84(0xf0)],_0x2020ac['indicesTypedArray'][_0x19df84(0xd5)]/0x4);let _0x2d4b73=![],_0x51bc4c=S3MEdgeProcessor[_0x19df84(0xbc)](_0x39a5fd,_0x2d4b73,_0x5ab968),_0x402476=EdgePreprocessing[_0x19df84(0xb9)](_0x51bc4c);return _0x2dedc6&&(_0x402476['regular'][_0x19df84(0xf6)]&&_0x2dedc6[_0x19df84(0xd9)](_0x402476[_0x19df84(0xb7)]['instancesData']['buffer']),_0x402476[_0x19df84(0xd6)][_0x19df84(0xf6)]&&_0x2dedc6[_0x19df84(0xd9)](_0x402476[_0x19df84(0xd6)][_0x19df84(0xf6)]['buffer'])),_0x402476;};let scratchSidenessVertexBuffer=null;function createEdgeSidenessVertexBuffer(_0xb84bf3){const _0x45e829=_0xd21485;if(scratchSidenessVertexBuffer)return scratchSidenessVertexBuffer;let _0x2854b0=new Float32Array(0x8),_0x3c5606=0x0;return _0x2854b0[_0x3c5606++]=0x0,_0x2854b0[_0x3c5606++]=0x0,_0x2854b0[_0x3c5606++]=0x0,_0x2854b0[_0x3c5606++]=0x1,_0x2854b0[_0x3c5606++]=0x1,_0x2854b0[_0x3c5606++]=0x1,_0x2854b0[_0x3c5606++]=0x1,_0x2854b0[_0x3c5606++]=0x0,scratchSidenessVertexBuffer=Cesium[_0x45e829(0xc5)][_0x45e829(0xf4)]({'context':_0xb84bf3,'typedArray':_0x2854b0,'usage':Cesium['BufferUsage'][_0x45e829(0xc8)]}),scratchSidenessVertexBuffer['vertexArrayDestroyable']=![],scratchSidenessVertexBuffer;}function createEdgeIndexArray(){let _0x472c1e=new Uint16Array(0x6),_0x4eb231=0x0;return _0x472c1e[_0x4eb231++]=0x2,_0x472c1e[_0x4eb231++]=0x1,_0x472c1e[_0x4eb231++]=0x0,_0x472c1e[_0x4eb231++]=0x3,_0x472c1e[_0x4eb231++]=0x2,_0x472c1e[_0x4eb231++]=0x0,_0x472c1e;}let scratchIndexBuffer=null;S3MEdgeProcessor[_0xd21485(0xf1)]=function(_0x3d617f){const _0x470a59=_0xd21485;if(scratchIndexBuffer)return scratchIndexBuffer;return scratchIndexBuffer=Cesium[_0x470a59(0xc5)]['createIndexBuffer']({'context':_0x3d617f,'typedArray':createEdgeIndexArray(),'usage':Cesium[_0x470a59(0xc6)][_0x470a59(0xc8)],'indexDatatype':Cesium[_0x470a59(0xcc)]['UNSIGNED_SHORT']}),scratchIndexBuffer[_0x470a59(0xea)]=![],scratchIndexBuffer;},S3MEdgeProcessor[_0xd21485(0xcf)]=function(_0xc421f5,_0x6a70a9){const _0x5b65a8=_0xd21485;if(!_0x6a70a9[_0x5b65a8(0xf6)]||_0x6a70a9[_0x5b65a8(0xf6)][_0x5b65a8(0xc1)]===0x0)return;let _0x22b34f={},_0xcd4f4f=[];_0x6a70a9['attributeLocations']=_0x22b34f,_0x6a70a9[_0x5b65a8(0xf5)]=_0xcd4f4f;let _0x4ff4ee=Cesium[_0x5b65a8(0xc5)]['createVertexBuffer']({'context':_0xc421f5,'typedArray':_0x6a70a9['instancesData'],'usage':Cesium[_0x5b65a8(0xc6)][_0x5b65a8(0xc8)]});_0x6a70a9[_0x5b65a8(0xf6)]=null;let _0x211bc8=Cesium['ComponentDatatype'][_0x5b65a8(0xd8)](Cesium['ComponentDatatype']['FLOAT']),_0x591e84=createEdgeSidenessVertexBuffer(_0xc421f5),_0xdfc8e9=0x0;_0x22b34f[_0x5b65a8(0xca)]=_0xdfc8e9++,_0xcd4f4f[_0x5b65a8(0xd9)]({'index':_0x22b34f[_0x5b65a8(0xca)],'vertexBuffer':_0x591e84,'componentsPerAttribute':0x2,'componentDatatype':Cesium['ComponentDatatype'][_0x5b65a8(0xe7)],'offsetInBytes':0x0,'strideInBytes':Cesium['ComponentDatatype'][_0x5b65a8(0xd8)](Cesium[_0x5b65a8(0xef)][_0x5b65a8(0xe7)])*0x2,'normalize':![]});let _0xc066de=S3MEdgeProcessor[_0x5b65a8(0xf2)],_0x33f33a=0x0;_0x22b34f['aPosition0']=_0xdfc8e9++,_0xcd4f4f[_0x5b65a8(0xd9)]({'index':_0x22b34f['aPosition0'],'vertexBuffer':_0x4ff4ee,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x5b65a8(0xef)][_0x5b65a8(0xe7)],'normalize':![],'offsetInBytes':_0x211bc8*_0x33f33a,'strideInBytes':_0x211bc8*_0xc066de,'instanceDivisor':0x1}),_0x33f33a+=0x3,_0x22b34f['aPosition1']=_0xdfc8e9++,_0xcd4f4f[_0x5b65a8(0xd9)]({'index':_0x22b34f['aPosition1'],'vertexBuffer':_0x4ff4ee,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x5b65a8(0xef)][_0x5b65a8(0xe7)],'normalize':![],'offsetInBytes':_0x211bc8*_0x33f33a,'strideInBytes':_0x211bc8*_0xc066de,'instanceDivisor':0x1}),_0x33f33a+=0x3,_0x22b34f[_0x5b65a8(0xe2)]=_0xdfc8e9++,_0xcd4f4f[_0x5b65a8(0xd9)]({'index':_0x22b34f['aNormal'],'vertexBuffer':_0x4ff4ee,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x5b65a8(0xef)][_0x5b65a8(0xe7)],'normalize':!![],'offsetInBytes':_0x211bc8*_0x33f33a,'strideInBytes':_0x211bc8*_0xc066de,'instanceDivisor':0x1}),_0x33f33a+=0x3;},S3MEdgeProcessor['createSilhouetteEdgeAttributes']=function(_0xbc828e,_0x434646){const _0x573c94=_0xd21485;if(!_0x434646[_0x573c94(0xf6)]||_0x434646[_0x573c94(0xf6)][_0x573c94(0xc1)]==0x0)return;let _0x3b2374={},_0x32d5ad=[];_0x434646[_0x573c94(0xb8)]=_0x3b2374,_0x434646[_0x573c94(0xf5)]=_0x32d5ad;let _0x4da609=Cesium[_0x573c94(0xc5)]['createVertexBuffer']({'context':_0xbc828e,'typedArray':_0x434646[_0x573c94(0xf6)],'usage':Cesium[_0x573c94(0xc6)][_0x573c94(0xc8)]});_0x434646[_0x573c94(0xf6)]=null;let _0xab79d4=Cesium[_0x573c94(0xef)]['getSizeInBytes'](Cesium[_0x573c94(0xef)][_0x573c94(0xe7)]),_0x58a261=0x0;_0x3b2374[_0x573c94(0xca)]=_0x58a261++,_0x32d5ad[_0x573c94(0xd9)]({'index':_0x3b2374[_0x573c94(0xca)],'vertexBuffer':createEdgeSidenessVertexBuffer(_0xbc828e),'componentsPerAttribute':0x2,'componentDatatype':Cesium[_0x573c94(0xef)][_0x573c94(0xe7)],'offsetInBytes':0x0,'strideInBytes':_0xab79d4*0x2,'normalize':![]});let _0x384c08=0x3+0x3+0x3+0x3,_0x1e528e=0x0;_0x3b2374['aPosition0']=_0x58a261++,_0x32d5ad['push']({'index':_0x3b2374[_0x573c94(0xe9)],'vertexBuffer':_0x4da609,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x573c94(0xef)]['FLOAT'],'normalize':![],'offsetInBytes':_0xab79d4*_0x1e528e,'strideInBytes':_0xab79d4*_0x384c08,'instanceDivisor':0x1}),_0x1e528e+=0x3,_0x3b2374[_0x573c94(0xdd)]=_0x58a261++,_0x32d5ad[_0x573c94(0xd9)]({'index':_0x3b2374[_0x573c94(0xdd)],'vertexBuffer':_0x4da609,'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x573c94(0xef)]['FLOAT'],'normalize':![],'offsetInBytes':_0xab79d4*_0x1e528e,'strideInBytes':_0xab79d4*_0x384c08,'instanceDivisor':0x1}),_0x1e528e+=0x3,_0x3b2374[_0x573c94(0xbb)]=_0x58a261++,_0x32d5ad[_0x573c94(0xd9)]({'index':_0x3b2374['aNormalA'],'vertexBuffer':_0x4da609,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype'][_0x573c94(0xe7)],'normalize':!![],'offsetInBytes':_0xab79d4*_0x1e528e,'strideInBytes':_0xab79d4*_0x384c08,'instanceDivisor':0x1}),_0x1e528e+=0x3,_0x3b2374[_0x573c94(0xe8)]=_0x58a261++,_0x32d5ad['push']({'index':_0x3b2374['aNormalB'],'vertexBuffer':_0x4da609,'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype'][_0x573c94(0xe7)],'normalize':!![],'offsetInBytes':_0xab79d4*_0x1e528e,'strideInBytes':_0xab79d4*_0x384c08,'instanceDivisor':0x1}),_0x1e528e+=0x3;};S3MEdgeProcessor[_0xd21485(0xbc)]=function(_0x5e2cd3,_0xb11af2,_0x2bfdeb){const _0x169f77=_0xd21485;let _0x59d6d2=_0x5e2cd3['attrLocation'][_0x169f77(0xdf)],_0x52aa5b=_0x5e2cd3[_0x169f77(0xd4)][_0x59d6d2],_0x2affae=_0x52aa5b[_0x169f77(0xda)],_0x50367c=new Float32Array(_0x52aa5b['typedArray'][_0x169f77(0xcd)],_0x52aa5b[_0x169f77(0xe4)][_0x169f77(0xf0)],_0x52aa5b['typedArray'][_0x169f77(0xd5)]/0x4),_0x456982=_0x50367c[_0x169f77(0xc1)]/_0x2affae;if(_0xb11af2&&_0x2bfdeb){let _0x3bd495=MeshProcessing[_0x169f77(0xc4)](_0x2bfdeb,_0x456982);return {'faces':_0x2bfdeb,'neighbors':_0x3bd495,'vertices':_0x50367c,'dim':_0x2affae};}let _0x3c0dff=_0x52aa5b[_0x169f77(0xe4)][_0x169f77(0xcd)],_0x255996;isCompress?_0x255996=_0x50367c[_0x169f77(0xcd)]:_0x255996=_0x3c0dff[_0x169f77(0xbf)](_0x52aa5b[_0x169f77(0xe4)][_0x169f77(0xf0)],_0x52aa5b[_0x169f77(0xe4)][_0x169f77(0xf0)]+_0x52aa5b[_0x169f77(0xe4)][_0x169f77(0xd5)]);let _0x1a819d=MeshProcessing[_0x169f77(0xe3)](_0x255996,_0x2affae),_0x378df7=S3MEdgeProcessor[_0x169f77(0xc7)](_0x1a819d[_0x169f77(0xc9)],_0x2bfdeb),_0xc94970=MeshProcessing[_0x169f77(0xc4)](_0x378df7,_0x1a819d[_0x169f77(0xed)]),_0x3b8c44=new Float32Array(_0x1a819d['buffer']);return {'faces':_0x378df7,'neighbors':_0xc94970,'vertices':_0x3b8c44,'dim':_0x2affae};},S3MEdgeProcessor['selectIndexData']=function(_0x29ea66,_0x25a43f){const _0x4604a1=_0xd21485;if(_0x25a43f){_0x25a43f=_0x25a43f[_0x4604a1(0xbf)]();for(let _0x140621=0x0;_0x140621<_0x25a43f[_0x4604a1(0xc1)];_0x140621++){_0x25a43f[_0x140621]=_0x29ea66[_0x25a43f[_0x140621]];}return _0x25a43f;}return _0x29ea66;};function _0x412a(_0x4538fa,_0x3d56e3){_0x4538fa=_0x4538fa-0xb7;let _0x1bd4e7=_0x1bd4[_0x4538fa];return _0x1bd4e7;}let scratchV0=new Cesium[(_0xd21485(0xec))](),scratchV1=new Cesium[(_0xd21485(0xec))](),scratchV2=new Cesium[(_0xd21485(0xec))](),scratchV3=new Cesium['Cartesian3'](),scratchN0=new Cesium[(_0xd21485(0xec))](),scratchN1=new Cesium[(_0xd21485(0xec))](),scratchN2=new Cesium[(_0xd21485(0xec))](),scratchN3=new Cesium['Cartesian3']();S3MEdgeProcessor['createEdgeDataByIndices']=function(_0x38ebd2,_0x414e68){const _0x4121d0=_0xd21485;let _0x3c0694=_0x38ebd2['attrLocation'][_0x4121d0(0xdf)],_0xc9278b=_0x38ebd2[_0x4121d0(0xd4)][_0x3c0694],_0x577692=_0xc9278b[_0x4121d0(0xda)],_0x5d5680=new Float32Array(_0xc9278b['typedArray'][_0x4121d0(0xcd)],_0xc9278b[_0x4121d0(0xe4)][_0x4121d0(0xf0)],_0xc9278b[_0x4121d0(0xe4)][_0x4121d0(0xd5)]/0x4);let _0x3ee666;_0x414e68[_0x4121d0(0xee)]===0x0?_0x3ee666=new Uint16Array(_0x414e68['indicesTypedArray']['buffer'],_0x414e68[_0x4121d0(0xc0)]['byteOffset'],_0x414e68[_0x4121d0(0xc0)][_0x4121d0(0xd5)]/0x2):_0x3ee666=new Uint32Array(_0x414e68['indicesTypedArray'][_0x4121d0(0xcd)],_0x414e68[_0x4121d0(0xc0)][_0x4121d0(0xf0)],_0x414e68[_0x4121d0(0xc0)]['byteLength']/0x4);let _0x3093e2=[],_0x49f61a=[],_0x2fd0d7=_0x3ee666[_0x4121d0(0xc1)],_0x176d79=0x0;for(let _0x6d9317=0x0,_0x21d02a=Math[_0x4121d0(0xc2)](_0x2fd0d7/0x4)*0x4;_0x6d9317<_0x21d02a;_0x6d9317+=0x4){let _0x57a977=_0x3ee666[_0x6d9317],_0x36f62f=_0x3ee666[_0x6d9317+0x1],_0x2077a4=_0x3ee666[_0x6d9317+0x2],_0x52822e=_0x3ee666[_0x6d9317+0x3];scratchV0['x']=_0x5d5680[_0x577692*_0x57a977],scratchV0['y']=_0x5d5680[_0x577692*_0x57a977+0x1],scratchV0['z']=_0x5d5680[_0x577692*_0x57a977+0x2],scratchV1['x']=_0x5d5680[_0x577692*_0x36f62f],scratchV1['y']=_0x5d5680[_0x577692*_0x36f62f+0x1],scratchV1['z']=_0x5d5680[_0x577692*_0x36f62f+0x2],scratchV2['x']=_0x5d5680[_0x577692*_0x2077a4],scratchV2['y']=_0x5d5680[_0x577692*_0x2077a4+0x1],scratchV2['z']=_0x5d5680[_0x577692*_0x2077a4+0x2],scratchV3['x']=_0x5d5680[_0x577692*_0x52822e],scratchV3['y']=_0x5d5680[_0x577692*_0x52822e+0x1],scratchV3['z']=_0x5d5680[_0x577692*_0x52822e+0x2];if(Cesium[_0x4121d0(0xec)][_0x4121d0(0xd3)](scratchV1,scratchV2)||Cesium[_0x4121d0(0xec)][_0x4121d0(0xd3)](scratchV1,scratchV3)||Cesium[_0x4121d0(0xec)]['equals'](scratchV1,scratchV0)||Cesium[_0x4121d0(0xec)][_0x4121d0(0xd3)](scratchV2,scratchV0)||Cesium[_0x4121d0(0xec)][_0x4121d0(0xd3)](scratchV3,scratchV0))continue;if(_0x2077a4===_0x52822e){Cesium['Cartesian3'][_0x4121d0(0xe6)](scratchV1,scratchV0,scratchN0),Cesium[_0x4121d0(0xec)]['subtract'](scratchV2,scratchV0,scratchN1),Cesium[_0x4121d0(0xec)][_0x4121d0(0xe1)](scratchN0,scratchN1,scratchN0);if(Cesium['Cartesian3'][_0x4121d0(0xd3)](scratchN0,Cesium[_0x4121d0(0xec)][_0x4121d0(0xd7)]))continue;Cesium['Cartesian3'][_0x4121d0(0xde)](scratchN0,scratchN0),_0x3093e2['push'](scratchV0['x']),_0x3093e2['push'](scratchV0['y']),_0x3093e2[_0x4121d0(0xd9)](scratchV0['z']),_0x3093e2[_0x4121d0(0xd9)](scratchV1['x']),_0x3093e2['push'](scratchV1['y']),_0x3093e2['push'](scratchV1['z']),_0x3093e2[_0x4121d0(0xd9)](scratchN0['x']),_0x3093e2[_0x4121d0(0xd9)](scratchN0['y']),_0x3093e2[_0x4121d0(0xd9)](scratchN0['z']);}else {Cesium[_0x4121d0(0xec)][_0x4121d0(0xe6)](scratchV1,scratchV0,scratchN0),Cesium[_0x4121d0(0xec)]['subtract'](scratchV2,scratchV0,scratchN1),Cesium['Cartesian3'][_0x4121d0(0xe1)](scratchN0,scratchN1,scratchN0);if(Cesium['Cartesian3'][_0x4121d0(0xd3)](scratchN0,Cesium[_0x4121d0(0xec)][_0x4121d0(0xd7)]))continue;Cesium[_0x4121d0(0xec)]['normalize'](scratchN0,scratchN0),Cesium[_0x4121d0(0xec)]['subtract'](scratchV1,scratchV0,scratchN2),Cesium['Cartesian3']['subtract'](scratchV3,scratchV0,scratchN3),Cesium[_0x4121d0(0xec)]['cross'](scratchN2,scratchN3,scratchN2);if(Cesium[_0x4121d0(0xec)][_0x4121d0(0xd3)](scratchN2,Cesium['Cartesian3']['ZERO']))continue;Cesium['Cartesian3'][_0x4121d0(0xde)](scratchN2,scratchN2),_0x49f61a['push'](scratchV0['x']),_0x49f61a[_0x4121d0(0xd9)](scratchV0['y']),_0x49f61a['push'](scratchV0['z']),_0x49f61a[_0x4121d0(0xd9)](scratchV1['x']),_0x49f61a[_0x4121d0(0xd9)](scratchV1['y']),_0x49f61a[_0x4121d0(0xd9)](scratchV1['z']),_0x49f61a[_0x4121d0(0xd9)](scratchN0['x']),_0x49f61a['push'](scratchN0['y']),_0x49f61a[_0x4121d0(0xd9)](scratchN0['z']),_0x49f61a[_0x4121d0(0xd9)](scratchN2['x']),_0x49f61a['push'](scratchN2['y']),_0x49f61a[_0x4121d0(0xd9)](scratchN2['z']);}_0x176d79+=Cesium['Cartesian3']['distance'](scratchV0,scratchV1);}let _0x30c450=_0x2fd0d7/0x4,_0x5a8b8=_0x176d79/_0x30c450,_0x444148=_0x3093e2['length']/S3MEdgeProcessor['RegularInstanceStride'],_0x4e0938=_0x49f61a[_0x4121d0(0xc1)]/0xc;return {'regular':{'instancesData':new Float32Array(_0x3093e2),'instanceCount':_0x444148,'edgeLength':_0x444148*_0x5a8b8},'silhouette':{'instancesData':new Float32Array(_0x49f61a),'instanceCount':_0x4e0938,'edgeLength':_0x4e0938},'averageEdgeLength':_0x5a8b8};};

    const _0x31e1=['getUint8','blue','primitiveType','textureCoordIsW','ComponentDatatype','BYTES_PER_ELEMENT','getUint32','boundingSphere','geodes','vertexColor','indicesTypedArray','instanceIndex','SVC_TexutreCoord','SV_Compressed','vertCompressConstant','red','childTile','376fZJqFK','uv6','indexType','indicesCount','minVerticesValue','aPosition','vertexAttributes','minTexCoordValue','version','arrayFill','skeletonNames','RGB_DXT1','parseBuffer','batchId','texCoordCompressConstant','vertexColorInstance','SVC_Vertex','attrLocation','unpack','instanceMode','SHORT','bytesOffset','BGR','aTexCoord','getStringFromTypedArray','aNormal','getFloat64','710445YDWhEl','aSecondColor','uv1','1247520ezbQJi','string','instanceId','uv4','parse','pageLods','secondary_colour','FLOAT','UNSIGNED_BYTE','instanceBuffer','groupNode','717422akXJtm','RGB','green','texCoordZMatrix','681sCHGht','compressOptions','push','getFloat32','geoPackage','slice','SVC_Normal','uv9','replace','rangeList','1074603BIInwS','uv5','instanceBounds','instanceCount','1238141rUbHDs','getUint16','aColor','createEdgeDataByIndices','buffer','length','vertexPackage','41360oekSRS','substring','RGBA_DXT5','PixelFormat','verticesCount','uv2','inflate','uv3'];function _0x57cc(_0x325824,_0x4e96f6){_0x325824=_0x325824-0x1c4;let _0x31e1c4=_0x31e1[_0x325824];return _0x31e1c4;}const _0x480f06=_0x57cc;(function(_0x3dcb10,_0x2b8dc2){const _0x2765ce=_0x57cc;while(!![]){try{const _0x2d10e7=-parseInt(_0x2765ce(0x1e1))+parseInt(_0x2765ce(0x218))+-parseInt(_0x2765ce(0x1fa))*parseInt(_0x2765ce(0x1cc))+-parseInt(_0x2765ce(0x1c8))+-parseInt(_0x2765ce(0x1da))+parseInt(_0x2765ce(0x1d6))+parseInt(_0x2765ce(0x215));if(_0x2d10e7===_0x2b8dc2)break;else _0x3dcb10['push'](_0x3dcb10['shift']());}catch(_0x2e98ed){_0x3dcb10['push'](_0x3dcb10['shift']());}}}(_0x31e1,0xbe545));function S3ModelParser(){}let S3MBVertexTag={'SV_Unkown':0x0,'SV_Standard':0x1,'SV_Compressed':0x2};function unZip(_0x9cafc5,_0x4148a6){const _0x190055=_0x57cc;let _0xb717f6=new Uint8Array(_0x9cafc5,_0x4148a6);return _0x1f354f[_0x190055(0x1e7)](_0xb717f6)[_0x190055(0x1de)];}function parseString(_0x32ef7d,_0x5b62db,_0x21d58d){const _0x22e83f=_0x57cc;let _0x480a04=_0x5b62db[_0x22e83f(0x1ef)](_0x21d58d,!![]);_0x21d58d+=Uint32Array[_0x22e83f(0x1ee)];let _0x31a032=new Uint8Array(_0x32ef7d,_0x21d58d,_0x480a04),_0x187560=Cesium[_0x22e83f(0x212)](_0x31a032);return _0x21d58d+=_0x480a04,{'string':_0x187560,'bytesOffset':_0x21d58d};}function parseGeode(_0x425954,_0x529c9b,_0x186544,_0x4648a0){const _0xfd0f5f=_0x57cc;let _0x49c8ff={},_0x192152=[],_0x544108=new Array(0x10);for(let _0x57c08d=0x0;_0x57c08d<0x10;_0x57c08d++){_0x544108[_0x57c08d]=_0x529c9b[_0xfd0f5f(0x214)](_0x186544,!![]),_0x186544+=Float64Array[_0xfd0f5f(0x1ee)];}_0x49c8ff['matrix']=_0x544108,_0x49c8ff[_0xfd0f5f(0x204)]=_0x192152;let _0xb62610=_0x529c9b[_0xfd0f5f(0x1ef)](_0x186544,!![]);_0x186544+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x304c7a=0x0;_0x304c7a<_0xb62610;_0x304c7a++){let _0x2ef438=parseString(_0x425954,_0x529c9b,_0x186544);_0x192152['push'](_0x2ef438[_0xfd0f5f(0x219)]),_0x186544=_0x2ef438[_0xfd0f5f(0x20f)];}return _0x4648a0[_0xfd0f5f(0x1ce)](_0x49c8ff),_0x186544;}function parsePageLOD(_0x72920e,_0x211d7b,_0xfe8347,_0xe09a7e){const _0x4a44ab=_0x57cc;let _0x4f8cf6={};_0x4f8cf6[_0x4a44ab(0x1d5)]=_0x211d7b['getFloat32'](_0xfe8347,!![]),_0xfe8347+=Float32Array[_0x4a44ab(0x1ee)],_0x4f8cf6['rangeMode']=_0x211d7b[_0x4a44ab(0x1db)](_0xfe8347,!![]),_0xfe8347+=Uint16Array['BYTES_PER_ELEMENT'];let _0x2b4c35={};_0x2b4c35['x']=_0x211d7b[_0x4a44ab(0x214)](_0xfe8347,!![]),_0xfe8347+=Float64Array[_0x4a44ab(0x1ee)],_0x2b4c35['y']=_0x211d7b['getFloat64'](_0xfe8347,!![]),_0xfe8347+=Float64Array[_0x4a44ab(0x1ee)],_0x2b4c35['z']=_0x211d7b[_0x4a44ab(0x214)](_0xfe8347,!![]),_0xfe8347+=Float64Array[_0x4a44ab(0x1ee)];let _0x3410a6=_0x211d7b[_0x4a44ab(0x214)](_0xfe8347,!![]);_0xfe8347+=Float64Array[_0x4a44ab(0x1ee)],_0x4f8cf6[_0x4a44ab(0x1f0)]={'center':_0x2b4c35,'radius':_0x3410a6};let _0x1de1fb=parseString(_0x72920e,_0x211d7b,_0xfe8347),_0x191afa=_0x1de1fb[_0x4a44ab(0x219)];_0xfe8347=_0x1de1fb[_0x4a44ab(0x20f)];let _0x16260f=_0x191afa['indexOf']('Geometry');if(_0x16260f!==-0x1){let _0x1f8d09=_0x191afa[_0x4a44ab(0x1e2)](_0x16260f);_0x191afa=_0x191afa[_0x4a44ab(0x1d4)](_0x1f8d09,'');}_0x4f8cf6[_0x4a44ab(0x1f9)]=_0x191afa,_0x4f8cf6['geodes']=[];let _0x10329a=_0x211d7b['getUint32'](_0xfe8347,!![]);_0xfe8347+=Uint32Array[_0x4a44ab(0x1ee)];for(let _0x5c11f8=0x0;_0x5c11f8<_0x10329a;_0x5c11f8++){_0xfe8347=parseGeode(_0x72920e,_0x211d7b,_0xfe8347,_0x4f8cf6[_0x4a44ab(0x1f1)]);}return _0xe09a7e['push'](_0x4f8cf6),_0xfe8347;}function parseGroupNode(_0x58b5eb,_0x344a89,_0x4f3007,_0x36847c){const _0x2237ca=_0x57cc;let _0x39c724={},_0x5c40bb=[],_0x60744b=_0x344a89['getUint32'](_0x4f3007,!![]);_0x4f3007+=Uint32Array[_0x2237ca(0x1ee)];let _0xab91d9=_0x344a89['getUint32'](_0x4f3007,!![]);_0x4f3007+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x530ef2=0x0;_0x530ef2<_0xab91d9;_0x530ef2++){_0x4f3007=parsePageLOD(_0x58b5eb,_0x344a89,_0x4f3007,_0x5c40bb);}_0x39c724[_0x2237ca(0x21d)]=_0x5c40bb;let _0xbd7bc7=_0x4f3007%0x4;return _0xbd7bc7!==0x0&&(_0x4f3007+=0x4-_0xbd7bc7),_0x36847c[_0x2237ca(0x1c7)]=_0x39c724,_0x4f3007;}function parseVertex(_0x503f66,_0x25c9ea,_0x42ab24,_0x292471){const _0x210b48=_0x57cc;let _0x44e288=_0x25c9ea[_0x210b48(0x1ef)](_0x42ab24,!![]);_0x292471[_0x210b48(0x1e5)]=_0x44e288,_0x42ab24+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x42ab24<=0x0)return _0x42ab24;let _0x3c68c4=_0x25c9ea[_0x210b48(0x1db)](_0x42ab24,!![]);_0x42ab24+=Uint16Array[_0x210b48(0x1ee)];let _0x3d756f=_0x25c9ea[_0x210b48(0x1db)](_0x42ab24,!![]);_0x3d756f=_0x3c68c4*Float32Array['BYTES_PER_ELEMENT'],_0x42ab24+=Uint16Array[_0x210b48(0x1ee)];let _0x31d314=_0x44e288*_0x3c68c4*Float32Array[_0x210b48(0x1ee)],_0x3305f0=new Uint8Array(_0x503f66,_0x42ab24,_0x31d314);_0x42ab24+=_0x31d314;let _0x3802d5=_0x292471[_0x210b48(0x200)],_0x5b422a=_0x292471[_0x210b48(0x20b)];return _0x5b422a[_0x210b48(0x1ff)]=_0x3802d5[_0x210b48(0x1df)],_0x3802d5[_0x210b48(0x1ce)]({'index':_0x5b422a[_0x210b48(0x1ff)],'typedArray':_0x3305f0,'componentsPerAttribute':_0x3c68c4,'componentDatatype':Cesium['ComponentDatatype'][_0x210b48(0x1c4)],'offsetInBytes':0x0,'strideInBytes':_0x3d756f,'normalize':![]}),_0x42ab24;}function parseNormal(_0x2172a3,_0xa2acef,_0x228e65,_0x1c6003){const _0x173fd9=_0x57cc;let _0x39c7e8=_0xa2acef['getUint32'](_0x228e65,!![]);_0x228e65+=Uint32Array[_0x173fd9(0x1ee)];if(_0x39c7e8<=0x0)return _0x228e65;let _0x26f899=_0xa2acef[_0x173fd9(0x1db)](_0x228e65,!![]);_0x228e65+=Uint16Array[_0x173fd9(0x1ee)];let _0x3d3fe1=_0xa2acef['getUint16'](_0x228e65,!![]);_0x228e65+=Uint16Array[_0x173fd9(0x1ee)];let _0x4a0be5=_0x39c7e8*_0x26f899*Float32Array[_0x173fd9(0x1ee)],_0x5f3333=new Uint8Array(_0x2172a3,_0x228e65,_0x4a0be5);_0x228e65+=_0x4a0be5;let _0x41821d=_0x1c6003[_0x173fd9(0x200)],_0x4a69f1=_0x1c6003[_0x173fd9(0x20b)];return _0x4a69f1[_0x173fd9(0x213)]=_0x41821d[_0x173fd9(0x1df)],_0x41821d['push']({'index':_0x4a69f1[_0x173fd9(0x213)],'typedArray':_0x5f3333,'componentsPerAttribute':_0x26f899,'componentDatatype':Cesium['ComponentDatatype'][_0x173fd9(0x1c4)],'offsetInBytes':0x0,'strideInBytes':_0x3d3fe1,'normalize':![]}),_0x228e65;}function parseVertexColor(_0x5ec1fa,_0x8bf793,_0x154ae6,_0x4cf780){const _0x578d5d=_0x57cc;let _0x47c6d8=_0x8bf793[_0x578d5d(0x1ef)](_0x154ae6,!![]);_0x154ae6+=Uint32Array[_0x578d5d(0x1ee)];let _0x3ce47d=_0x4cf780[_0x578d5d(0x1e5)],_0x489370;if(_0x47c6d8>0x0){let _0x15590e=_0x8bf793[_0x578d5d(0x1db)](_0x154ae6,!![]);_0x154ae6+=Uint16Array[_0x578d5d(0x1ee)],_0x154ae6+=Uint8Array[_0x578d5d(0x1ee)]*0x2;let _0x2723a0=_0x47c6d8*Uint8Array['BYTES_PER_ELEMENT']*0x4,_0x195bee=new Uint8Array(_0x5ec1fa,_0x154ae6,_0x2723a0);_0x489370=_0x195bee[_0x578d5d(0x1d1)](0x0,_0x2723a0),_0x154ae6+=_0x2723a0;}else {_0x489370=new Uint8Array(0x4*_0x3ce47d);for(let _0xc1ab24=0x0;_0xc1ab24<_0x3ce47d;_0xc1ab24++){_0x489370[_0xc1ab24*0x4]=0xff,_0x489370[_0xc1ab24*0x4+0x1]=0xff,_0x489370[_0xc1ab24*0x4+0x2]=0xff,_0x489370[_0xc1ab24*0x4+0x3]=0xff;}}let _0x1705ad=_0x4cf780[_0x578d5d(0x200)],_0x37c9f4=_0x4cf780[_0x578d5d(0x20b)];return _0x37c9f4[_0x578d5d(0x1dc)]=_0x1705ad['length'],_0x1705ad[_0x578d5d(0x1ce)]({'index':_0x37c9f4[_0x578d5d(0x1dc)],'typedArray':_0x489370,'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x578d5d(0x1ed)][_0x578d5d(0x1c5)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x4cf780[_0x578d5d(0x1f2)]=_0x489370,_0x154ae6;}function parseSecondColor(_0x4f3798,_0xf9e493,_0x568b16,_0x2e97f1){const _0x3e6ca4=_0x57cc;let _0x226489=_0xf9e493[_0x3e6ca4(0x1ef)](_0x568b16,!![]);_0x568b16+=Uint32Array[_0x3e6ca4(0x1ee)];if(_0x226489<=0x0)return _0x568b16;let _0x359885=_0xf9e493[_0x3e6ca4(0x1db)](_0x568b16,!![]);_0x568b16+=Uint16Array['BYTES_PER_ELEMENT'],_0x568b16+=Uint8Array[_0x3e6ca4(0x1ee)]*0x2;let _0x86817f=_0x226489*Uint8Array['BYTES_PER_ELEMENT']*0x4,_0x50fa06=new Uint8Array(_0x4f3798,_0x568b16,_0x86817f);_0x568b16+=_0x86817f;let _0x49e500=_0x2e97f1[_0x3e6ca4(0x200)],_0x1a7ce0=_0x2e97f1[_0x3e6ca4(0x20b)];return _0x1a7ce0[_0x3e6ca4(0x216)]=_0x49e500[_0x3e6ca4(0x1df)],_0x49e500['push']({'index':_0x1a7ce0[_0x3e6ca4(0x216)],'typedArray':_0x50fa06,'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x3e6ca4(0x1c5)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x568b16;}function parseTexCoord(_0x440017,_0x3210b8,_0x17aab1,_0x39c535){const _0x4f1d05=_0x57cc;let _0x4cfe95=_0x3210b8[_0x4f1d05(0x1db)](_0x17aab1,!![]);_0x17aab1+=Uint16Array['BYTES_PER_ELEMENT'],_0x17aab1+=Uint16Array['BYTES_PER_ELEMENT'];for(let _0x57f211=0x0;_0x57f211<_0x4cfe95;_0x57f211++){let _0x55cf93=_0x3210b8[_0x4f1d05(0x1ef)](_0x17aab1,!![]);_0x17aab1+=Uint32Array[_0x4f1d05(0x1ee)];let _0x322e66=_0x3210b8['getUint16'](_0x17aab1,!![]);_0x17aab1+=Uint16Array[_0x4f1d05(0x1ee)];let _0x1778fb=_0x3210b8[_0x4f1d05(0x1db)](_0x17aab1,!![]);_0x17aab1+=Uint16Array[_0x4f1d05(0x1ee)];let _0x37f1ec=_0x55cf93*_0x322e66*Float32Array['BYTES_PER_ELEMENT'],_0x58f9b3=new Uint8Array(_0x440017,_0x17aab1,_0x37f1ec);_0x17aab1+=_0x37f1ec;let _0x36ee94=_0x4f1d05(0x211)+_0x57f211,_0x337c52=_0x39c535['vertexAttributes'],_0x20a8dc=_0x39c535[_0x4f1d05(0x20b)];_0x20a8dc[_0x36ee94]=_0x337c52['length'],_0x337c52['push']({'index':_0x20a8dc[_0x36ee94],'typedArray':_0x58f9b3,'componentsPerAttribute':_0x322e66,'componentDatatype':Cesium[_0x4f1d05(0x1ed)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x322e66*Float32Array['BYTES_PER_ELEMENT'],'normalize':![]});}return _0x17aab1;}function parseInstanceInfo(_0x4a1e0b,_0x131440,_0x555818,_0x175457){const _0x52cec6=_0x57cc;let _0x49c709=_0x131440[_0x52cec6(0x1db)](_0x555818,!![]);_0x555818+=Uint16Array[_0x52cec6(0x1ee)],_0x555818+=Uint16Array['BYTES_PER_ELEMENT'];let _0xb1b628=_0x175457[_0x52cec6(0x200)],_0x57dda6=_0x175457[_0x52cec6(0x20b)];for(let _0x2d19dd=0x0;_0x2d19dd<_0x49c709;_0x2d19dd++){let _0x589392=_0x131440[_0x52cec6(0x1ef)](_0x555818,!![]);_0x555818+=Uint32Array['BYTES_PER_ELEMENT'];let _0x1382dc=_0x131440[_0x52cec6(0x1db)](_0x555818,!![]);_0x555818+=Uint16Array[_0x52cec6(0x1ee)];let _0x2297a1=_0x131440[_0x52cec6(0x1db)](_0x555818,!![]);_0x555818+=Uint16Array['BYTES_PER_ELEMENT'];let _0x4fa3ce=_0x589392*_0x1382dc*Float32Array[_0x52cec6(0x1ee)];if(_0x1382dc===0x11||_0x1382dc===0x1d){let _0x1d800d=new Uint8Array(_0x4a1e0b,_0x555818,_0x4fa3ce);_0x175457[_0x52cec6(0x1d9)]=_0x589392,_0x175457[_0x52cec6(0x20d)]=_0x1382dc,_0x175457[_0x52cec6(0x1c6)]=_0x1d800d,_0x175457[_0x52cec6(0x1f4)]=0x1;let _0xa2f0dd=_0x1382dc*_0x589392*0x4,_0x1be056=_0x1d800d[_0x52cec6(0x1d1)](0x0,_0xa2f0dd);_0x175457[_0x52cec6(0x209)]=_0x1be056;let _0x5e252e;if(_0x1382dc===0x11)_0x5e252e=Float32Array['BYTES_PER_ELEMENT']*0x11,_0x57dda6[_0x52cec6(0x1e6)]=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628['push']({'index':_0x57dda6[_0x52cec6(0x1e6)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6['uv3']=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x1e8)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x52cec6(0x1ee)],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6['uv4']=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x21b)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x52cec6(0x1ee)],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6[_0x52cec6(0x21e)]=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x21e)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x52cec6(0x1ee)],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6[_0x52cec6(0x1fb)]=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x1fb)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x52cec6(0x1c5)],'normalize':!![],'offsetInBytes':0x10*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x5e252e,'instanceDivisor':0x1});else _0x1382dc===0x1d&&(_0x5e252e=Float32Array[_0x52cec6(0x1ee)]*0x1d,_0x57dda6['uv1']=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x217)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x5e252e,'instanceDivisor':0x1,'byteLength':_0x4fa3ce}),_0x57dda6[_0x52cec6(0x1e6)]=_0xb1b628['length'],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x1e6)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)]['FLOAT'],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x52cec6(0x1ee)],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6[_0x52cec6(0x1e8)]=_0xb1b628['length'],_0xb1b628['push']({'index':_0x57dda6[_0x52cec6(0x1e8)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x52cec6(0x1ee)],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6['uv4']=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628['push']({'index':_0x57dda6[_0x52cec6(0x21b)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0xc*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6['uv5']=_0xb1b628['length'],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x1d7)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0x10*Float32Array[_0x52cec6(0x1ee)],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6[_0x52cec6(0x1fb)]=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x1fb)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0x14*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6['uv7']=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6['uv7'],'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c4)],'normalize':![],'offsetInBytes':0x18*Float32Array[_0x52cec6(0x1ee)],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6['secondary_colour']=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628[_0x52cec6(0x1ce)]({'index':_0x57dda6[_0x52cec6(0x21e)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x52cec6(0x1ed)][_0x52cec6(0x1c5)],'normalize':!![],'offsetInBytes':0x1b*Float32Array[_0x52cec6(0x1ee)],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}),_0x57dda6[_0x52cec6(0x1d3)]=_0xb1b628[_0x52cec6(0x1df)],_0xb1b628['push']({'index':_0x57dda6[_0x52cec6(0x1d3)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x52cec6(0x1c5)],'normalize':!![],'offsetInBytes':0x1c*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x5e252e,'instanceDivisor':0x1}));}else {let _0x3817e1=_0x589392*_0x1382dc;_0x175457[_0x52cec6(0x1d8)]=new Float32Array(_0x3817e1);for(let _0xffb627=0x0;_0xffb627<_0x3817e1;_0xffb627++){_0x175457[_0x52cec6(0x1d8)][_0xffb627]=_0x131440[_0x52cec6(0x1cf)](_0x555818+_0xffb627*Float32Array['BYTES_PER_ELEMENT'],!![]);}}_0x555818+=_0x4fa3ce;}return _0x555818;}function parseCompressVertex(_0x131cd7,_0x2505d0,_0x2adfe6,_0x1ffabd){const _0x392bea=_0x57cc;let _0x2c3393=_0x2505d0[_0x392bea(0x1ef)](_0x2adfe6,!![]);_0x1ffabd['verticesCount']=_0x2c3393,_0x2adfe6+=Uint32Array[_0x392bea(0x1ee)];if(_0x2adfe6<=0x0)return _0x2adfe6;let _0xe14fe8=_0x2505d0[_0x392bea(0x1db)](_0x2adfe6,!![]);_0x2adfe6+=Uint16Array[_0x392bea(0x1ee)];let _0x13f741=_0x2505d0[_0x392bea(0x1db)](_0x2adfe6,!![]);_0x13f741=_0xe14fe8*Int16Array['BYTES_PER_ELEMENT'],_0x2adfe6+=Uint16Array['BYTES_PER_ELEMENT'];let _0x20b6af=_0x2505d0[_0x392bea(0x1cf)](_0x2adfe6,!![]);_0x2adfe6+=Float32Array[_0x392bea(0x1ee)];let _0x5e28ea={};_0x5e28ea['x']=_0x2505d0['getFloat32'](_0x2adfe6,!![]),_0x2adfe6+=Float32Array[_0x392bea(0x1ee)],_0x5e28ea['y']=_0x2505d0['getFloat32'](_0x2adfe6,!![]),_0x2adfe6+=Float32Array[_0x392bea(0x1ee)],_0x5e28ea['z']=_0x2505d0['getFloat32'](_0x2adfe6,!![]),_0x2adfe6+=Float32Array[_0x392bea(0x1ee)],_0x5e28ea['w']=_0x2505d0[_0x392bea(0x1cf)](_0x2adfe6,!![]),_0x2adfe6+=Float32Array['BYTES_PER_ELEMENT'],_0x1ffabd[_0x392bea(0x1f7)]=_0x20b6af,_0x1ffabd[_0x392bea(0x1fe)]=_0x5e28ea;let _0x572e4f=_0x2c3393*_0xe14fe8*Int16Array[_0x392bea(0x1ee)],_0x45b186=new Uint8Array(_0x131cd7,_0x2adfe6,_0x572e4f);_0x2adfe6+=_0x572e4f;let _0x39c5c1=_0x1ffabd[_0x392bea(0x200)],_0x1a6f98=_0x1ffabd[_0x392bea(0x20b)];return _0x1a6f98[_0x392bea(0x1ff)]=_0x39c5c1[_0x392bea(0x1df)],_0x39c5c1[_0x392bea(0x1ce)]({'index':_0x1a6f98[_0x392bea(0x1ff)],'typedArray':_0x45b186,'componentsPerAttribute':_0xe14fe8,'componentDatatype':Cesium[_0x392bea(0x1ed)][_0x392bea(0x20e)],'offsetInBytes':0x0,'strideInBytes':_0x13f741,'normalize':![]}),_0x2adfe6;}function parseCompressNormal(_0x31dc21,_0xbb2beb,_0x337c73,_0x3bc517){const _0x420037=_0x57cc;let _0x33be91=_0xbb2beb['getUint32'](_0x337c73,!![]);_0x337c73+=Uint32Array[_0x420037(0x1ee)];if(_0x33be91<=0x0)return _0x337c73;let _0x2094d2=_0xbb2beb[_0x420037(0x1db)](_0x337c73,!![]);_0x337c73+=Uint16Array['BYTES_PER_ELEMENT'];let _0x914b28=_0xbb2beb['getUint16'](_0x337c73,!![]);_0x337c73+=Uint16Array[_0x420037(0x1ee)];let _0x2c76c4=_0x33be91*0x2*Int16Array[_0x420037(0x1ee)],_0x414004=new Uint8Array(_0x31dc21,_0x337c73,_0x2c76c4);_0x337c73+=_0x2c76c4;let _0x14a26f=_0x3bc517[_0x420037(0x200)],_0x2e9d64=_0x3bc517[_0x420037(0x20b)];return _0x2e9d64[_0x420037(0x213)]=_0x14a26f[_0x420037(0x1df)],_0x14a26f[_0x420037(0x1ce)]({'index':_0x2e9d64[_0x420037(0x213)],'typedArray':_0x414004,'componentsPerAttribute':0x2,'componentDatatype':Cesium[_0x420037(0x1ed)][_0x420037(0x20e)],'offsetInBytes':0x0,'strideInBytes':_0x914b28,'normalize':![]}),_0x337c73;}function parseCompressTexCoord(_0x1ce411,_0xe6da68,_0x2dd5d9,_0x32c94a){const _0x3bf527=_0x57cc;_0x32c94a[_0x3bf527(0x208)]=[],_0x32c94a[_0x3bf527(0x201)]=[];let _0x2c88fb=_0xe6da68[_0x3bf527(0x1db)](_0x2dd5d9,!![]);_0x2dd5d9+=Uint16Array[_0x3bf527(0x1ee)],_0x2dd5d9+=Uint16Array[_0x3bf527(0x1ee)];for(let _0x5c4381=0x0;_0x5c4381<_0x2c88fb;_0x5c4381++){let _0x32bc56=_0xe6da68[_0x3bf527(0x1e9)](_0x2dd5d9,!![]);_0x2dd5d9+=Uint8Array[_0x3bf527(0x1ee)],_0x2dd5d9+=Uint8Array[_0x3bf527(0x1ee)]*0x3;let _0x59e575=_0xe6da68[_0x3bf527(0x1ef)](_0x2dd5d9,!![]);_0x2dd5d9+=Uint32Array[_0x3bf527(0x1ee)];let _0x301448=_0xe6da68[_0x3bf527(0x1db)](_0x2dd5d9,!![]);_0x2dd5d9+=Uint16Array[_0x3bf527(0x1ee)];let _0x229538=_0xe6da68[_0x3bf527(0x1db)](_0x2dd5d9,!![]);_0x2dd5d9+=Uint16Array[_0x3bf527(0x1ee)];let _0xfb58c6=_0xe6da68[_0x3bf527(0x1cf)](_0x2dd5d9,!![]);_0x2dd5d9+=Float32Array['BYTES_PER_ELEMENT'],_0x32c94a[_0x3bf527(0x208)][_0x3bf527(0x1ce)](_0xfb58c6);let _0x4c1d94={};_0x4c1d94['x']=_0xe6da68[_0x3bf527(0x1cf)](_0x2dd5d9,!![]),_0x2dd5d9+=Float32Array['BYTES_PER_ELEMENT'],_0x4c1d94['y']=_0xe6da68['getFloat32'](_0x2dd5d9,!![]),_0x2dd5d9+=Float32Array[_0x3bf527(0x1ee)],_0x4c1d94['z']=_0xe6da68[_0x3bf527(0x1cf)](_0x2dd5d9,!![]),_0x2dd5d9+=Float32Array[_0x3bf527(0x1ee)],_0x4c1d94['w']=_0xe6da68[_0x3bf527(0x1cf)](_0x2dd5d9,!![]),_0x2dd5d9+=Float32Array[_0x3bf527(0x1ee)],_0x32c94a[_0x3bf527(0x201)][_0x3bf527(0x1ce)](_0x4c1d94);let _0x4d4a46=_0x59e575*_0x301448*Int16Array[_0x3bf527(0x1ee)],_0x2c77ee=new Uint8Array(_0x1ce411,_0x2dd5d9,_0x4d4a46);_0x2dd5d9+=_0x4d4a46;let _0x178785=_0x2dd5d9%0x4;_0x178785!==0x0&&(_0x2dd5d9+=0x4-_0x178785);let _0x16f7bc=_0x3bf527(0x211)+_0x5c4381,_0xc57021=_0x32c94a[_0x3bf527(0x200)],_0x5c5b9d=_0x32c94a['attrLocation'];_0x5c5b9d[_0x16f7bc]=_0xc57021[_0x3bf527(0x1df)],_0xc57021[_0x3bf527(0x1ce)]({'index':_0x5c5b9d[_0x16f7bc],'typedArray':_0x2c77ee,'componentsPerAttribute':_0x301448,'componentDatatype':Cesium[_0x3bf527(0x1ed)]['SHORT'],'offsetInBytes':0x0,'strideInBytes':_0x301448*Int16Array[_0x3bf527(0x1ee)],'normalize':![]});if(_0x32bc56){_0x4d4a46=_0x59e575*Float32Array[_0x3bf527(0x1ee)];let _0x3588ad=new Uint8Array(_0x1ce411,_0x2dd5d9,_0x4d4a46);_0x2dd5d9+=_0x4d4a46,_0x32c94a[_0x3bf527(0x1cb)]=!![],_0x16f7bc='aTexCoordZ'+_0x5c4381,_0x5c5b9d[_0x16f7bc]=_0xc57021['length'],_0xc57021[_0x3bf527(0x1ce)]({'index':_0x5c5b9d[_0x16f7bc],'typedArray':_0x3588ad,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x3bf527(0x1ed)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':Float32Array[_0x3bf527(0x1ee)],'normalize':![]});}}return _0x2dd5d9;}function parseStandardSkeleton(_0x331047,_0x195c11,_0x468aa2,_0x1c1e9c){return _0x468aa2=parseVertex(_0x331047,_0x195c11,_0x468aa2,_0x1c1e9c),_0x468aa2=parseNormal(_0x331047,_0x195c11,_0x468aa2,_0x1c1e9c),_0x468aa2=parseVertexColor(_0x331047,_0x195c11,_0x468aa2,_0x1c1e9c),_0x468aa2=parseSecondColor(_0x331047,_0x195c11,_0x468aa2,_0x1c1e9c),_0x468aa2=parseTexCoord(_0x331047,_0x195c11,_0x468aa2,_0x1c1e9c),_0x468aa2=parseInstanceInfo(_0x331047,_0x195c11,_0x468aa2,_0x1c1e9c),_0x468aa2;}function parseCompressSkeleton(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd){const _0x42428b=_0x57cc;let _0xe1f472=_0x29305a['getUint32'](_0x5f08d8,!![]);return _0x3ecdbd[_0x42428b(0x1cd)]=_0xe1f472,_0x5f08d8+=Uint32Array['BYTES_PER_ELEMENT'],(_0xe1f472&_0x5aa24d[_0x42428b(0x20a)])===_0x5aa24d[_0x42428b(0x20a)]?_0x5f08d8=parseCompressVertex(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd):_0x5f08d8=parseVertex(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd),(_0xe1f472&_0x5aa24d[_0x42428b(0x1d2)])===_0x5aa24d[_0x42428b(0x1d2)]?_0x5f08d8=parseCompressNormal(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd):_0x5f08d8=parseNormal(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd),_0x5f08d8=parseVertexColor(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd),_0x5f08d8=parseSecondColor(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd),(_0xe1f472&_0x5aa24d[_0x42428b(0x1f5)])===_0x5aa24d['SVC_TexutreCoord']?_0x5f08d8=parseCompressTexCoord(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd):_0x5f08d8=parseTexCoord(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd),(_0xe1f472&_0x5aa24d['SVC_TexutreCoordIsW'])===_0x5aa24d['SVC_TexutreCoordIsW']&&(_0x3ecdbd[_0x42428b(0x1ec)]=!![]),_0x5f08d8=parseInstanceInfo(_0x46bb56,_0x29305a,_0x5f08d8,_0x3ecdbd),_0x5f08d8;}function parseIndexPackage(_0x3d48e1,_0x1f4832,_0xf03508,_0x5c6051){const _0x311819=_0x57cc;let _0x251eb5=_0x1f4832[_0x311819(0x1ef)](_0xf03508,!![]);_0xf03508+=Uint32Array[_0x311819(0x1ee)];for(let _0x5cf7a6=0x0;_0x5cf7a6<_0x251eb5;_0x5cf7a6++){let _0x36c513={},_0x9424d=_0x1f4832['getUint32'](_0xf03508,!![]);_0xf03508+=Uint32Array[_0x311819(0x1ee)];let _0x26b38a=_0x1f4832[_0x311819(0x1e9)](_0xf03508,!![]);_0xf03508+=Uint8Array[_0x311819(0x1ee)];let _0x500c1d=_0x1f4832[_0x311819(0x1e9)](_0xf03508,!![]);_0xf03508+=Uint8Array[_0x311819(0x1ee)];let _0x5ddb56=_0x1f4832[_0x311819(0x1e9)](_0xf03508,!![]);_0xf03508+=Uint8Array[_0x311819(0x1ee)],_0xf03508+=Uint8Array[_0x311819(0x1ee)];if(_0x9424d>0x0){let _0xc0c353=null,_0x14a917;_0x26b38a===0x1||_0x26b38a===0x3?(_0x14a917=_0x9424d*Uint32Array[_0x311819(0x1ee)],_0xc0c353=new Uint8Array(_0x3d48e1,_0xf03508,_0x14a917)):(_0x14a917=_0x9424d*Uint16Array[_0x311819(0x1ee)],_0xc0c353=new Uint8Array(_0x3d48e1,_0xf03508,_0x14a917),_0x9424d%0x2!==0x0&&(_0x14a917+=0x2)),_0x36c513[_0x311819(0x1f3)]=_0xc0c353,_0xf03508+=_0x14a917;}_0x36c513[_0x311819(0x1fd)]=_0x9424d,_0x36c513[_0x311819(0x1fc)]=_0x26b38a,_0x36c513[_0x311819(0x1eb)]=_0x5ddb56;let _0x262cea=[],_0x338138=_0x1f4832[_0x311819(0x1ef)](_0xf03508,!![]);_0xf03508+=Uint32Array[_0x311819(0x1ee)];for(let _0x93f8b5=0x0;_0x93f8b5<_0x338138;_0x93f8b5++){let _0x56f778=parseString(_0x3d48e1,_0x1f4832,_0xf03508),_0x11ee64=_0x56f778[_0x311819(0x219)];_0xf03508=_0x56f778['bytesOffset'],_0x262cea[_0x311819(0x1ce)](_0x11ee64),_0x36c513['materialCode']=_0x11ee64;}let _0x1c2be3=_0xf03508%0x4;if(_0x1c2be3!==0x0){let _0x439f53=0x4-_0xf03508%0x4;_0xf03508+=_0x439f53;}_0x5c6051['push'](_0x36c513);}return _0xf03508;}function parseSkeleton(_0x46ad81,_0x165fe2,_0x529998,_0x2d2739){const _0x3224d9=_0x57cc;let _0x4c72f8=_0x165fe2[_0x3224d9(0x1ef)](_0x529998,!![]);_0x529998+=Uint32Array[_0x3224d9(0x1ee)];let _0x265243=_0x165fe2[_0x3224d9(0x1ef)](_0x529998,!![]);_0x529998+=Uint32Array[_0x3224d9(0x1ee)];for(let _0x4a51c0=0x0;_0x4a51c0<_0x265243;_0x4a51c0++){let _0x192c1d=parseString(_0x46ad81,_0x165fe2,_0x529998),_0x1716c0=_0x192c1d[_0x3224d9(0x219)];_0x529998=_0x192c1d['bytesOffset'];let _0x183d5f=_0x529998%0x4;_0x183d5f!==0x0&&(_0x529998+=0x4-_0x183d5f);let _0x150ec5=_0x165fe2[_0x3224d9(0x1ef)](_0x529998,!![]);_0x529998+=Int32Array[_0x3224d9(0x1ee)];let _0xea677e={'vertexAttributes':[],'attrLocation':{},'instanceCount':0x0,'instanceMode':0x0,'instanceIndex':-0x1};if(_0x150ec5===S3MBVertexTag['SV_Standard'])_0x529998=parseStandardSkeleton(_0x46ad81,_0x165fe2,_0x529998,_0xea677e);else _0x150ec5===S3MBVertexTag[_0x3224d9(0x1f6)]&&(_0x529998=parseCompressSkeleton(_0x46ad81,_0x165fe2,_0x529998,_0xea677e));let _0xa81cbe=[];_0x529998=parseIndexPackage(_0x46ad81,_0x165fe2,_0x529998,_0xa81cbe);let _0x233b21=undefined;_0xa81cbe['length']===0x2&&_0xa81cbe[0x1][_0x3224d9(0x1eb)]===0xd&&_0xa81cbe[0x1][_0x3224d9(0x1fd)]>=0x3&&(_0x233b21=S3MEdgeProcessor[_0x3224d9(0x1dd)](_0xea677e,_0xa81cbe[0x1])),_0x2d2739[_0x1716c0]={'vertexPackage':_0xea677e,'arrIndexPackage':_0xa81cbe,'edgeGeometry':_0x233b21};}let _0x5a03b8=_0x165fe2[_0x3224d9(0x1ef)](_0x529998,!![]);return _0x529998+=_0x5a03b8,_0x529998+=Uint32Array['BYTES_PER_ELEMENT'],_0x529998;}function parseTexturePackage(_0x199db6,_0x57f1eb,_0x31a3e2,_0x1a3287){const _0xef2ed4=_0x57cc;let _0x3c3923=_0x57f1eb[_0xef2ed4(0x1ef)](_0x31a3e2,!![]);_0x31a3e2+=Uint32Array[_0xef2ed4(0x1ee)];let _0x18a936=_0x57f1eb[_0xef2ed4(0x1ef)](_0x31a3e2,!![]);_0x31a3e2+=Uint32Array[_0xef2ed4(0x1ee)];for(let _0x472235=0x0;_0x472235<_0x18a936;_0x472235++){let _0x41b0a8=parseString(_0x199db6,_0x57f1eb,_0x31a3e2),_0xf0f21a=_0x41b0a8[_0xef2ed4(0x219)];_0x31a3e2=_0x41b0a8[_0xef2ed4(0x20f)];let _0x4f1133=_0x31a3e2%0x4;_0x4f1133!==0x0&&(_0x31a3e2+=0x4-_0x4f1133);let _0x72e645=_0x57f1eb[_0xef2ed4(0x1ef)](_0x31a3e2,!![]);_0x31a3e2+=Uint32Array['BYTES_PER_ELEMENT'];let _0x1ecbf0=_0x57f1eb[_0xef2ed4(0x1ef)](_0x31a3e2,!![]);_0x31a3e2+=Uint32Array['BYTES_PER_ELEMENT'];let _0x2d658a=_0x57f1eb[_0xef2ed4(0x1ef)](_0x31a3e2,!![]);_0x31a3e2+=Uint32Array[_0xef2ed4(0x1ee)];let _0x171dee=_0x57f1eb['getUint32'](_0x31a3e2,!![]);_0x31a3e2+=Uint32Array[_0xef2ed4(0x1ee)];let _0x8b673d=_0x57f1eb[_0xef2ed4(0x1ef)](_0x31a3e2,!![]);_0x31a3e2+=Uint32Array[_0xef2ed4(0x1ee)];let _0xb477e9=_0x57f1eb[_0xef2ed4(0x1ef)](_0x31a3e2,!![]);_0x31a3e2+=Uint32Array['BYTES_PER_ELEMENT'];let _0x1c93fb=new Uint8Array(_0x199db6,_0x31a3e2,_0x8b673d);_0x31a3e2+=_0x8b673d;let _0x33faac=_0xb477e9===_0x3065af[_0xef2ed4(0x1c9)]||_0xb477e9===_0x3065af[_0xef2ed4(0x210)]?Cesium[_0xef2ed4(0x1e4)][_0xef2ed4(0x205)]:Cesium[_0xef2ed4(0x1e4)][_0xef2ed4(0x1e3)];_0x1a3287[_0xf0f21a]={'id':_0xf0f21a,'width':_0x1ecbf0,'height':_0x2d658a,'compressType':_0x171dee,'nFormat':_0xb477e9,'internalFormat':_0x33faac,'arrayBufferView':_0x1c93fb};}return _0x31a3e2;}function parseMaterial(_0x3b34c2,_0x704c72,_0x124eec,_0xff8e68){const _0x375c2c=_0x57cc;let _0x163bea=_0x704c72[_0x375c2c(0x1ef)](_0x124eec,!![]);_0x124eec+=Uint32Array[_0x375c2c(0x1ee)];let _0x430d31=new Uint8Array(_0x3b34c2,_0x124eec,_0x163bea),_0x29741d=Cesium[_0x375c2c(0x212)](_0x430d31);return _0x124eec+=_0x163bea,_0xff8e68['materials']=JSON[_0x375c2c(0x21c)](_0x29741d),_0x124eec;}let colorScratch=new Cesium['Color'](),LEFT_16=0x10000;function parsePickInfo(_0x78bd7b,_0x2be0fd,_0xd5a2d6,_0x19edbc,_0x5d76d8,_0x547fa9){const _0x4370a4=_0x57cc;if((_0x19edbc&0x1)===0x1){let _0x376213=_0x2be0fd[_0x4370a4(0x1ef)](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array[_0x4370a4(0x1ee)];let _0x1309f3=_0x2be0fd[_0x4370a4(0x1ef)](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array[_0x4370a4(0x1ee)];for(let _0x4b1d9a=0x0;_0x4b1d9a<_0x1309f3;_0x4b1d9a++){let _0x1dcb5e=parseString(_0x78bd7b,_0x2be0fd,_0xd5a2d6),_0x50b8fd=_0x1dcb5e[_0x4370a4(0x219)];_0xd5a2d6=_0x1dcb5e['bytesOffset'];let _0x58b243=_0x2be0fd['getUint32'](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array[_0x4370a4(0x1ee)];let _0x643331={};_0x5d76d8[_0x50b8fd]['pickInfo']=_0x643331;let _0x5f3157=_0x5d76d8[_0x50b8fd][_0x4370a4(0x1e0)][_0x4370a4(0x1f4)];if(_0x5f3157==-0x1){let _0xcf503f=new Float32Array(_0x5d76d8[_0x50b8fd]['vertexPackage']['verticesCount']);for(let _0x33bdc5=0x0;_0x33bdc5<_0x58b243;_0x33bdc5++){let _0x14f413=_0x2be0fd[_0x4370a4(0x1ef)](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array['BYTES_PER_ELEMENT'];let _0x33919e=_0x2be0fd[_0x4370a4(0x1ef)](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array[_0x4370a4(0x1ee)];let _0x4de786=[];for(let _0x596e8a=0x0;_0x596e8a<_0x33919e;_0x596e8a++){let _0x20db51=_0x2be0fd['getUint32'](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array['BYTES_PER_ELEMENT'];let _0x76d8c9=_0x2be0fd['getUint32'](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array[_0x4370a4(0x1ee)],Cesium[_0x4370a4(0x203)](_0xcf503f,_0x33bdc5,_0x20db51,_0x20db51+_0x76d8c9),_0x4de786['push']({'vertexColorOffset':_0x20db51,'vertexColorCount':_0x76d8c9,'batchId':_0x33bdc5});}_0x643331[_0x14f413]=_0x4de786;}createBatchIdAttribute(_0x5d76d8[_0x50b8fd][_0x4370a4(0x1e0)],_0xcf503f,undefined);}else {let _0x3e164d=_0x5d76d8[_0x50b8fd]['vertexPackage']['instanceCount'],_0x55a37b=_0x5d76d8[_0x50b8fd][_0x4370a4(0x1e0)][_0x4370a4(0x1c6)],_0x9c2a96=_0x5d76d8[_0x50b8fd][_0x4370a4(0x1e0)]['instanceMode'],_0x843fc5=new Float32Array(_0x3e164d),_0x396377=[];for(let _0x1caa25=0x0;_0x1caa25<_0x58b243;_0x1caa25++){let _0x526383=_0x2be0fd[_0x4370a4(0x1ef)](_0xd5a2d6,!![]);_0x396377[_0x4370a4(0x1ce)](_0x526383),_0xd5a2d6+=Uint32Array['BYTES_PER_ELEMENT'];let _0x1f5661=_0x2be0fd['getUint32'](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array[_0x4370a4(0x1ee)];for(let _0x9d0eaa=0x0;_0x9d0eaa<_0x1f5661;_0x9d0eaa++){let _0x369a7f=_0x2be0fd[_0x4370a4(0x1ef)](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array[_0x4370a4(0x1ee)];if(_0x547fa9===0x3){let _0x47168c=_0x2be0fd[_0x4370a4(0x1ef)](_0xd5a2d6,!![]);_0xd5a2d6+=Uint32Array[_0x4370a4(0x1ee)];}}}let _0x1c3bb2=_0x9c2a96===0x11?0x10:0x1c;_0x1c3bb2*=Float32Array[_0x4370a4(0x1ee)];for(let _0x16f13d=0x0;_0x16f13d<_0x3e164d;_0x16f13d++){_0x843fc5[_0x16f13d]=_0x16f13d;let _0x29cbf7=_0x16f13d*_0x9c2a96*Float32Array[_0x4370a4(0x1ee)]+_0x1c3bb2;Cesium['Color'][_0x4370a4(0x20c)](_0x55a37b,_0x29cbf7,colorScratch);let _0x1f41e5=_0x547fa9===0x2?_0x396377[_0x16f13d]:colorScratch[_0x4370a4(0x1f8)]+colorScratch[_0x4370a4(0x1ca)]*0x100+colorScratch[_0x4370a4(0x1ea)]*LEFT_16;_0x643331[_0x1f41e5]===undefined&&(_0x643331[_0x1f41e5]={'vertexColorCount':0x1,'instanceIds':[],'vertexColorOffset':_0x16f13d}),_0x643331[_0x1f41e5]['instanceIds'][_0x4370a4(0x1ce)](_0x16f13d);}createBatchIdAttribute(_0x5d76d8[_0x50b8fd][_0x4370a4(0x1e0)],_0x843fc5,0x1);}}}return _0xd5a2d6;}function createBatchIdAttribute(_0x25ff9e,_0x39e1b3,_0x10d27d){const _0xd4188e=_0x57cc;let _0x3d75c4=_0x25ff9e[_0xd4188e(0x200)],_0x4d9977=_0x25ff9e['attrLocation'],_0x4298f5=_0x3d75c4[_0xd4188e(0x1df)],_0x24970a=_0x10d27d===0x1?_0xd4188e(0x21a):_0xd4188e(0x207);_0x4d9977[_0x24970a]=_0x4298f5,_0x3d75c4[_0xd4188e(0x1ce)]({'index':_0x4298f5,'typedArray':_0x39e1b3,'componentsPerAttribute':0x1,'componentDatatype':Cesium['ComponentDatatype'][_0xd4188e(0x1c4)],'offsetInBytes':0x0,'strideInBytes':0x0,'instanceDivisor':_0x10d27d});}S3ModelParser[_0x480f06(0x206)]=function(_0x36a97f){const _0x4a0bd4=_0x480f06;let _0x5076ed=0x0,_0x5596fe={'version':undefined,'groupNode':undefined,'geoPackage':{},'matrials':undefined,'texturePackage':{}},_0x2d1b2f=new DataView(_0x36a97f);_0x5596fe[_0x4a0bd4(0x202)]=_0x2d1b2f[_0x4a0bd4(0x1cf)](_0x5076ed,!![]),_0x5076ed+=Float32Array[_0x4a0bd4(0x1ee)];if(_0x5596fe['version']>=0x2){let _0x1b386e=_0x2d1b2f[_0x4a0bd4(0x1ef)](_0x5076ed,!![]);_0x5076ed+=Uint32Array[_0x4a0bd4(0x1ee)];}let _0x3b3124=_0x2d1b2f['getUint32'](_0x5076ed,!![]);_0x5076ed+=Uint32Array[_0x4a0bd4(0x1ee)];let _0x45efd1=unZip(_0x36a97f,_0x5076ed);_0x2d1b2f=new DataView(_0x45efd1),_0x5076ed=0x0;let _0x289dbf=_0x2d1b2f['getUint32'](_0x5076ed,!![]);return _0x5076ed+=Uint32Array[_0x4a0bd4(0x1ee)],_0x5076ed=parseGroupNode(_0x45efd1,_0x2d1b2f,_0x5076ed,_0x5596fe),_0x5076ed=parseSkeleton(_0x45efd1,_0x2d1b2f,_0x5076ed,_0x5596fe[_0x4a0bd4(0x1d0)]),_0x5076ed=parseTexturePackage(_0x45efd1,_0x2d1b2f,_0x5076ed,_0x5596fe['texturePackage']),_0x5076ed=parseMaterial(_0x45efd1,_0x2d1b2f,_0x5076ed,_0x5596fe),parsePickInfo(_0x45efd1,_0x2d1b2f,_0x5076ed,_0x289dbf,_0x5596fe[_0x4a0bd4(0x1d0)],_0x5596fe['version']),_0x5596fe;};

    const _0x3048=['3242111XvjNXy','618308ixYYQZ','271oKBEXt','13499llnmMk','276007UorRPa','394WwUJmx','1FJWXal','1395bYodPW','2154HEbKws','233315RtMRdd','29QuQaUG','1oewaFj','freeze'];const _0x58967f=_0x3ad1;(function(_0xd42a53,_0x978039){const _0x5cb750=_0x3ad1;while(!![]){try{const _0xa0cf7e=-parseInt(_0x5cb750(0x69))*parseInt(_0x5cb750(0x6e))+parseInt(_0x5cb750(0x6d))*-parseInt(_0x5cb750(0x6b))+parseInt(_0x5cb750(0x71))*-parseInt(_0x5cb750(0x6a))+-parseInt(_0x5cb750(0x70))+parseInt(_0x5cb750(0x6f))*-parseInt(_0x5cb750(0x6c))+-parseInt(_0x5cb750(0x68))+parseInt(_0x5cb750(0x65))*parseInt(_0x5cb750(0x67));if(_0xa0cf7e===_0x978039)break;else _0xd42a53['push'](_0xd42a53['shift']());}catch(_0x3170e7){_0xd42a53['push'](_0xd42a53['shift']());}}}(_0x3048,0x792a1));const RangeMode={'Distance':0x0,'Pixel':0x1};function _0x3ad1(_0x134470,_0x1a0d5e){_0x134470=_0x134470-0x65;let _0x30480e=_0x3048[_0x134470];return _0x30480e;}var _0x33e663 = Object[_0x58967f(0x66)](RangeMode);

    const _0x5a49=['RGB_DXT1','uv9','SpecularG','RGB','AmbientG','DiffuseB','AmbientA','defaultValue','filteringoption','diffuse','name','uv5','GeoDeModMatrix','Distance','aNormal','addressmode','indexType','1JPTNcO','groupNode','matrix','Specular','getUint32','uv1','ComponentDatatype','RangeList','fill','DiffuseR','uv7','PageLods','instanceIndex','batchId','105WpcCgf','parseBuffer','instanceCount','aColor','PagedLOD','attrLocation','replace','secondary_colour','1mFPytB','1546550kUwQgN','12HwPqil','pageLods','verticesCount','filtermin','300533dGPqcQ','radius','vertexPackage','read','push','buffer','skeletonNames','269798hYgiQa','Material3Ds','RangeDataList','queryChildNodes','AmbientR','TransparentSorting','SpecularB','RangeMode','getUint16','Ambient','GeoName','subarray','texturePackage','SpecularR','url','shininess','getUint8','instanceMode','Shininess','FLOAT','Geode','instanceId','Diffuse','.s3m','firstChild','SpecularA','20707ZUYCbc','uv2','BGR','RGBA_DXT5','BoundingSphere','uv6','queryNumericValue','length','UNSIGNED_BYTE','geoPackage','material','trim','uv4','split','filtermax','queryStringValue','geodes','specular','PixelFormat','BYTES_PER_ELEMENT','aPosition','TAM_WRAP','DISTANCE_FROM_EYE_POINT','pickInfo','TexModMatrix','1578116QmuNim','190YVAzwP','textContent','textureunitstates','materialCode','materials','uv3','vertexAttributes','instanceBuffer','inflate','queryFirstNode','716915JVrZXz'];const _0x3124e6=_0x48ce;(function(_0x578654,_0x2207ab){const _0x130738=_0x48ce;while(!![]){try{const _0x32ebda=parseInt(_0x130738(0x19a))*parseInt(_0x130738(0x1f1))+parseInt(_0x130738(0x1d4))+-parseInt(_0x130738(0x194))*parseInt(_0x130738(0x1df))+parseInt(_0x130738(0x195))+parseInt(_0x130738(0x196))*parseInt(_0x130738(0x1d5))+parseInt(_0x130738(0x1a1))+-parseInt(_0x130738(0x18c))*parseInt(_0x130738(0x1bb));if(_0x32ebda===_0x2207ab)break;else _0x578654['push'](_0x578654['shift']());}catch(_0x5b2a71){_0x578654['push'](_0x578654['shift']());}}}(_0x5a49,0xc4cef));function parseGeoPackage(_0x40f6a1,_0x319a8f,_0x53e93f,_0x700572){const _0x21fabf=_0x48ce;let _0x12cd4b=_0x53e93f['getUint32'](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];let _0x1d9b33=0x0,_0x28bd63={},_0x1429d4=_0x28bd63[_0x21fabf(0x1db)]=[],_0xbd9e51=_0x28bd63[_0x21fabf(0x191)]={};_0x28bd63[_0x21fabf(0x18e)]=0x0,_0x28bd63[_0x21fabf(0x1b2)]=0x0;let _0x234cd8=0x0,_0x53e7a9=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]);_0x700572+=Uint32Array['BYTES_PER_ELEMENT'];let _0xc0e457=_0x53e93f[_0x21fabf(0x1a9)](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];let _0x28eb27=_0xc0e457;_0xc0e457>0x4&&(_0x28eb27=_0xc0e457>>0x8,_0xc0e457=_0xc0e457&0xf);let _0x25202e=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];if(_0x25202e>0x0){let _0x55ff26=_0x53e93f[_0x21fabf(0x1a9)](_0x700572,!![]);_0x55ff26=_0xc0e457*Float32Array[_0x21fabf(0x1ce)],_0x700572+=Uint32Array['BYTES_PER_ELEMENT'],_0x1d9b33=_0x25202e*_0x55ff26,_0xbd9e51[_0x21fabf(0x1cf)]=_0x234cd8,_0x1429d4['push']({'index':_0xbd9e51[_0x21fabf(0x1cf)],'typedArray':_0x319a8f[_0x21fabf(0x1ac)](_0x700572,_0x700572+_0x1d9b33),'componentsPerAttribute':_0xc0e457,'componentDatatype':Cesium['ComponentDatatype'][_0x21fabf(0x1b4)],'offsetInBytes':0x0,'strideInBytes':_0x55ff26,'normalize':![]}),_0x234cd8++,_0x700572+=_0x1d9b33;}let _0x31d4fe=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];if(_0x31d4fe>0x0){let _0x40bae0=_0x53e93f[_0x21fabf(0x1a9)](_0x700572,!![]);_0x40bae0=_0x28eb27*Float32Array[_0x21fabf(0x1ce)],_0x700572+=Uint32Array[_0x21fabf(0x1ce)],_0x1d9b33=_0x31d4fe*_0x40bae0,_0xbd9e51[_0x21fabf(0x1ee)]=_0x234cd8,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51['aNormal'],'typedArray':_0x319a8f[_0x21fabf(0x1ac)](_0x700572,_0x700572+_0x1d9b33),'componentsPerAttribute':_0x28eb27,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1b4)],'offsetInBytes':0x0,'strideInBytes':_0x40bae0,'normalize':![]}),_0x234cd8++,_0x700572+=_0x1d9b33;}let _0x4044eb=_0x53e93f['getUint32'](_0x700572,!![]);_0x700572+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x4044eb>0x0){let _0x561e89=new Uint8Array(0x4*_0x4044eb),_0x45b7c1=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]);_0x45b7c1=0x4*Float32Array['BYTES_PER_ELEMENT'],_0x700572+=Uint32Array[_0x21fabf(0x1ce)],_0x1d9b33=_0x4044eb*_0x45b7c1;let _0x41be27=new Float32Array(_0x319a8f['buffer'],_0x700572,_0x25202e*0x4);for(let _0x4a6b22=0x0;_0x4a6b22<_0x25202e;_0x4a6b22++){_0x561e89[0x4*_0x4a6b22]=_0x41be27[0x4*_0x4a6b22]*0xff,_0x561e89[0x4*_0x4a6b22+0x1]=_0x41be27[0x4*_0x4a6b22+0x1]*0xff,_0x561e89[0x4*_0x4a6b22+0x2]=_0x41be27[0x4*_0x4a6b22+0x2]*0xff,_0x561e89[0x4*_0x4a6b22+0x3]=_0x41be27[0x4*_0x4a6b22+0x3]*0xff;}_0x700572+=_0x1d9b33,_0xbd9e51[_0x21fabf(0x18f)]=_0x234cd8,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x18f)],'typedArray':_0x561e89,'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1c3)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x234cd8++;}let _0xe71a7c=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];_0xe71a7c>0x0&&(_0x1d9b33=_0xe71a7c*0x10,_0x700572+=_0x1d9b33);let _0x1db234=_0x53e93f['getUint32'](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];let _0x28ba94=-0x1,_0x46fc71,_0x204011,_0x3f1a1b;for(let _0x17a86e=0x0;_0x17a86e<_0x1db234;_0x17a86e++){_0x46fc71=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]),_0x700572+=Uint32Array[_0x21fabf(0x1ce)],_0x3f1a1b=_0x53e93f[_0x21fabf(0x1a9)](_0x700572,!![]),_0x700572+=Uint16Array[_0x21fabf(0x1ce)],_0x204011=_0x53e93f[_0x21fabf(0x1a9)](_0x700572,!![]),_0x700572+=Uint16Array['BYTES_PER_ELEMENT'],_0x1d9b33=_0x46fc71*_0x3f1a1b*Float32Array[_0x21fabf(0x1ce)];let _0x50790a=_0x319a8f[_0x21fabf(0x1ac)](_0x700572,_0x700572+_0x1d9b33);if(_0x28ba94===-0x1&&(_0x3f1a1b===0x14||_0x3f1a1b===0x23)){_0x28ba94=_0x17a86e,_0x28bd63[_0x21fabf(0x18e)]=_0x46fc71,_0x28bd63[_0x21fabf(0x1b2)]=_0x3f1a1b,_0x28bd63[_0x21fabf(0x1dc)]=_0x50790a;let _0x183f9d;if(_0x3f1a1b===0x14)_0x183f9d=Float32Array['BYTES_PER_ELEMENT']*0x14,_0xbd9e51[_0x21fabf(0x1bc)]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x1bc)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51[_0x21fabf(0x1da)]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51['uv3'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)]['FLOAT'],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51[_0x21fabf(0x1c7)]=_0x234cd8++,_0x1429d4['push']({'index':_0xbd9e51[_0x21fabf(0x1c7)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51['secondary_colour']=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x193)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1b4)],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51[_0x21fabf(0x1c0)]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x1c0)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1b4)],'normalize':![],'offsetInBytes':0x10*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x183f9d,'instanceDivisor':0x1});else _0x3f1a1b===0x23&&(_0x183f9d=Float32Array[_0x21fabf(0x1ce)]*0x23,_0xbd9e51['uv1']=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x1f6)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1b4)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x183f9d,'instanceDivisor':0x1,'byteLength':_0x1d9b33}),_0xbd9e51['uv2']=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x1bc)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1b4)],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51[_0x21fabf(0x1da)]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51['uv3'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1b4)],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51[_0x21fabf(0x1c7)]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x1c7)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)]['FLOAT'],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51['uv5']=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x1eb)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)]['FLOAT'],'normalize':![],'offsetInBytes':0x10*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51['uv6']=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x1c0)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x21fabf(0x1b4)],'normalize':![],'offsetInBytes':0x14*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51[_0x21fabf(0x188)]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x188)],'componentsPerAttribute':0x3,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'normalize':![],'offsetInBytes':0x18*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51[_0x21fabf(0x193)]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51['secondary_colour'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1b4)],'normalize':![],'offsetInBytes':0x1b*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}),_0xbd9e51[_0x21fabf(0x1e1)]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x21fabf(0x1e1)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x21fabf(0x1f7)][_0x21fabf(0x1b4)],'normalize':![],'offsetInBytes':0x1f*Float32Array[_0x21fabf(0x1ce)],'strideInBytes':_0x183f9d,'instanceDivisor':0x1}));}else {if(_0x28ba94!==-0x1)_0x28bd63['instanceBounds']=new Float32Array(_0x319a8f[_0x21fabf(0x19f)],_0x700572,_0x46fc71*_0x3f1a1b);else {let _0x3e7c28='aTexCoord'+_0x17a86e;_0xbd9e51[_0x3e7c28]=_0x234cd8++,_0x1429d4[_0x21fabf(0x19e)]({'index':_0xbd9e51[_0x3e7c28],'typedArray':_0x50790a,'componentsPerAttribute':_0x3f1a1b,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x3f1a1b*Float32Array[_0x21fabf(0x1ce)],'normalize':![]});}}_0x700572+=_0x1d9b33;}_0x28bd63[_0x21fabf(0x198)]=_0x25202e,_0x28bd63['instanceIndex']=_0x28ba94;let _0x143a55=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];let _0x240fff=[];for(let _0x66dad=0x0;_0x66dad<_0x143a55;_0x66dad++){let _0x26bae9={},_0x35a78c=_0x53e93f['getUint32'](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];let _0x57e10c=_0x53e93f[_0x21fabf(0x1b1)](_0x700572,!![]);_0x700572+=Uint8Array['BYTES_PER_ELEMENT'];let _0x12a60d=_0x53e93f['getUint8'](_0x700572,!![]);_0x700572+=Uint8Array[_0x21fabf(0x1ce)];let _0x3fc0c0=_0x53e93f[_0x21fabf(0x1b1)](_0x700572,!![]);_0x700572+=Uint8Array[_0x21fabf(0x1ce)],_0x700572+=0x1,_0x26bae9['indicesCount']=_0x35a78c,_0x26bae9[_0x21fabf(0x1f0)]=_0x57e10c,_0x26bae9['primitiveType']=_0x3fc0c0;let _0x14100b=_0x700572;_0x35a78c>0x0&&(_0x57e10c===0x0?(_0x1d9b33=_0x35a78c*Uint16Array[_0x21fabf(0x1ce)],_0x700572+=_0x1d9b33,_0x35a78c%0x2===0x1&&(_0x700572+=0x2)):(_0x1d9b33=_0x35a78c*0x4,_0x700572+=_0x1d9b33));_0x26bae9['indicesTypedArray']=_0x319a8f[_0x21fabf(0x1ac)](_0x14100b,_0x14100b+_0x1d9b33);let _0x11f7a8=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)];let _0x21105f=_0x53e93f[_0x21fabf(0x1f5)](_0x700572,!![]);_0x700572+=Uint32Array[_0x21fabf(0x1ce)]*_0x11f7a8,_0x26bae9[_0x21fabf(0x1d8)]=_0x21105f,_0x240fff['push'](_0x26bae9);}return _0x40f6a1[_0x12cd4b]={'vertexPackage':_0x28bd63,'arrIndexPackage':_0x240fff},_0x700572;}function createBatchIdAttribute$1(_0x525436,_0x3d543e,_0x4579b4){const _0x40faae=_0x48ce;let _0x577d2f=_0x525436['vertexAttributes'],_0x29181d=_0x525436[_0x40faae(0x191)],_0x49d389=_0x577d2f[_0x40faae(0x1c2)],_0x15f2fc=_0x4579b4===0x1?_0x40faae(0x1b6):_0x40faae(0x18b);_0x29181d[_0x15f2fc]=_0x49d389,_0x577d2f[_0x40faae(0x19e)]({'index':_0x49d389,'typedArray':_0x3d543e,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x40faae(0x1f7)][_0x40faae(0x1b4)],'offsetInBytes':0x0,'strideInBytes':0x0,'instanceDivisor':_0x4579b4});}function createGroupAndMaterialNode(_0x3d4587,_0x1c86c5,_0x2f1f0a){const _0x50227d=_0x48ce;let _0x5c12da=XMLParser[_0x50227d(0x19d)](_0x3d4587),_0x2053e0=_0x5c12da[_0x50227d(0x1b9)],_0x3f426f=_0x2053e0['namespaceURI'];_0x2f1f0a[_0x50227d(0x1c5)]=[];let _0x468f05=XMLParser['queryFirstNode'](_0x2053e0,_0x50227d(0x1a2),_0x3f426f),_0x6b137a=XMLParser['queryChildNodes'](_0x468f05,_0x50227d(0x1c5),_0x3f426f);for(let _0x2de070=0x0,_0x38c86d=_0x6b137a[_0x50227d(0x1c2)];_0x2de070<_0x38c86d;_0x2de070++){let _0x3b5dcc={},_0x79cae2=_0x6b137a[_0x2de070];_0x3b5dcc['id']=XMLParser[_0x50227d(0x1ca)](_0x79cae2,_0x50227d(0x1ea),_0x3f426f);let _0x20a1cd=XMLParser[_0x50227d(0x1de)](_0x79cae2,_0x50227d(0x1aa),_0x3f426f),_0x47fd83=Cesium[_0x50227d(0x1e7)](XMLParser['queryNumericValue'](_0x20a1cd,_0x50227d(0x1a5),_0x3f426f),0x1),_0x3f8ae6=Cesium[_0x50227d(0x1e7)](XMLParser[_0x50227d(0x1c1)](_0x20a1cd,_0x50227d(0x1e4),_0x3f426f),0x1),_0x22aaf5=Cesium[_0x50227d(0x1e7)](XMLParser['queryNumericValue'](_0x20a1cd,'AmbientB',_0x3f426f),0x1),_0x198272=Cesium[_0x50227d(0x1e7)](XMLParser[_0x50227d(0x1c1)](_0x20a1cd,_0x50227d(0x1e6),_0x3f426f),0x1);_0x3b5dcc['ambient']={'r':_0x47fd83,'g':_0x3f8ae6,'b':_0x22aaf5,'a':_0x198272};let _0x3850a3=XMLParser[_0x50227d(0x1de)](_0x79cae2,_0x50227d(0x1b7),_0x3f426f);_0x47fd83=Cesium['defaultValue'](XMLParser['queryNumericValue'](_0x3850a3,_0x50227d(0x187),_0x3f426f),0x1),_0x3f8ae6=Cesium[_0x50227d(0x1e7)](XMLParser['queryNumericValue'](_0x3850a3,'DiffuseG',_0x3f426f),0x1),_0x22aaf5=Cesium[_0x50227d(0x1e7)](XMLParser[_0x50227d(0x1c1)](_0x3850a3,_0x50227d(0x1e5),_0x3f426f),0x1),_0x198272=Cesium['defaultValue'](XMLParser[_0x50227d(0x1c1)](_0x3850a3,'DiffuseA',_0x3f426f),0x1),_0x3b5dcc[_0x50227d(0x1e9)]={'r':_0x47fd83,'g':_0x3f8ae6,'b':_0x22aaf5,'a':_0x198272};let _0x5ee65f=XMLParser[_0x50227d(0x1de)](_0x79cae2,_0x50227d(0x1f4),_0x3f426f);_0x47fd83=Cesium[_0x50227d(0x1e7)](XMLParser[_0x50227d(0x1c1)](_0x5ee65f,_0x50227d(0x1ae),_0x3f426f),0x0),_0x3f8ae6=Cesium[_0x50227d(0x1e7)](XMLParser[_0x50227d(0x1c1)](_0x5ee65f,_0x50227d(0x1e2),_0x3f426f),0x0),_0x22aaf5=Cesium[_0x50227d(0x1e7)](XMLParser[_0x50227d(0x1c1)](_0x5ee65f,_0x50227d(0x1a7),_0x3f426f),0x0),_0x198272=Cesium[_0x50227d(0x1e7)](XMLParser[_0x50227d(0x1c1)](_0x5ee65f,_0x50227d(0x1ba),_0x3f426f),0x0),_0x3b5dcc[_0x50227d(0x1cc)]={'r':_0x47fd83,'g':_0x3f8ae6,'b':_0x22aaf5,'a':_0x198272},_0x3b5dcc[_0x50227d(0x1b0)]=XMLParser[_0x50227d(0x1c1)](_0x79cae2,_0x50227d(0x1b3),_0x3f426f),_0x3b5dcc['transparentsorting']=XMLParser['queryBooleanValue'](_0x79cae2,_0x50227d(0x1a6),_0x3f426f),_0x3b5dcc[_0x50227d(0x1d7)]=[];let _0x122a0e=XMLParser[_0x50227d(0x1a4)](_0x79cae2,'texture',_0x3f426f);for(let _0x1dea52=0x0;_0x1dea52<_0x122a0e['length'];_0x1dea52++){let _0x220fb5={},_0x1893a5=_0x122a0e[_0x1dea52],_0x448de8=XMLParser[_0x50227d(0x1ca)](_0x1893a5,'name',_0x3f426f),_0x46906e=XMLParser[_0x50227d(0x1ca)](_0x1893a5,'TextureName',_0x3f426f),_0x247be5=XMLParser['queryFirstNode'](_0x1893a5,'AddressMode',_0x3f426f),_0x3048ad=XMLParser[_0x50227d(0x1ca)](_0x247be5,'u',_0x3f426f),_0x2890a4=_0x3048ad===_0x50227d(0x1d0)?0x0:0x1,_0xf170f7=XMLParser['queryStringValue'](_0x247be5,'v',_0x3f426f),_0x5c4cc8=_0xf170f7===_0x50227d(0x1d0)?0x0:0x1,_0xb7ed20=XMLParser[_0x50227d(0x1ca)](_0x1893a5,_0x50227d(0x1d3),_0x3f426f)['split'](','),_0x4ef062=0x10;while(_0x4ef062--){_0xb7ed20[_0x4ef062]=parseFloat(_0xb7ed20[_0x4ef062]);}_0x220fb5[_0x50227d(0x1ef)]={'u':_0x2890a4,'v':_0x5c4cc8,'w':0x0},_0x220fb5[_0x50227d(0x1e8)]=0x20202020,_0x220fb5[_0x50227d(0x1c9)]=0x2,_0x220fb5[_0x50227d(0x199)]=0x2,_0x220fb5['id']=_0x448de8,_0x220fb5['texmodmatrix']=_0xb7ed20,_0x220fb5[_0x50227d(0x1af)]='',_0x3b5dcc[_0x50227d(0x1d7)]['push']({'textureunitstate':_0x220fb5});}_0x2f1f0a[_0x50227d(0x1c5)][_0x50227d(0x19e)]({'material':_0x3b5dcc});}let _0x48080a=XMLParser['queryFirstNode'](_0x2053e0,_0x50227d(0x189),_0x3f426f),_0xc29021=XMLParser[_0x50227d(0x1a4)](_0x48080a,_0x50227d(0x190),_0x3f426f);_0x1c86c5[_0x50227d(0x197)]=[];if(_0xc29021['length']>0x0)for(let _0xcdf645=0x0,_0x3711c5=_0xc29021[_0x50227d(0x1c2)];_0xcdf645<_0x3711c5;_0xcdf645++){let _0xf71848=_0xc29021[_0xcdf645],_0xd71c98=XMLParser[_0x50227d(0x1ca)](_0xf71848,_0x50227d(0x1a3),_0x3f426f);_0xd71c98?_0xd71c98=_0xd71c98[_0x50227d(0x192)](/.osgb$/,_0x50227d(0x1b8)):_0xd71c98='';let _0x2cde55=XMLParser[_0x50227d(0x1ca)](_0xf71848,_0x50227d(0x1a8),_0x3f426f),_0x499d3a=XMLParser[_0x50227d(0x1c1)](_0xf71848,_0x50227d(0x1f8),_0x3f426f),_0x4c9425=XMLParser['queryFirstNode'](_0xf71848,_0x50227d(0x1bf),_0x3f426f),_0x20dce6=XMLParser['queryNumericValue'](_0x4c9425,'x',_0x3f426f),_0x174f79=XMLParser[_0x50227d(0x1c1)](_0x4c9425,'y',_0x3f426f),_0x118899=XMLParser[_0x50227d(0x1c1)](_0x4c9425,'z',_0x3f426f),_0x18c778=XMLParser['queryNumericValue'](_0x4c9425,_0x50227d(0x19b),_0x3f426f),_0x208e3b={'boundingSphere':{'center':{'x':_0x20dce6,'y':_0x174f79,'z':_0x118899},'radius':_0x18c778},'childTile':_0xd71c98,'geodes':[],'rangeList':_0x499d3a,'rangeMode':_0x2cde55===_0x50227d(0x1d1)?_0x33e663[_0x50227d(0x1ed)]:_0x33e663['Pixel']};_0x208e3b['geodes']=[];let _0x43ebd7=XMLParser[_0x50227d(0x1a4)](_0xf71848,'Geode',_0x3f426f);for(let _0x2e5f74=0x0;_0x2e5f74<_0x43ebd7[_0x50227d(0x1c2)];_0x2e5f74++){let _0x9ef8a1={},_0xccb1da=_0x43ebd7[_0x2e5f74],_0x3d1e8e=XMLParser[_0x50227d(0x1ca)](_0xccb1da,_0x50227d(0x1ec),_0x3f426f)[_0x50227d(0x1c8)](',');for(let _0x2a52b3=0x0;_0x2a52b3<0x10;_0x2a52b3++){_0x3d1e8e[_0x2a52b3]=parseFloat(_0x3d1e8e[_0x2a52b3]);}_0x9ef8a1[_0x50227d(0x1f3)]=_0x3d1e8e;let _0x4dfcb3=XMLParser[_0x50227d(0x1a4)](_0xccb1da,'GeoName');_0x9ef8a1['skeletonNames']=[];for(let _0x22c8e7=0x0;_0x22c8e7<_0x4dfcb3['length'];_0x22c8e7++){let _0x2a03de=_0x4dfcb3[_0x22c8e7][_0x50227d(0x1d6)][_0x50227d(0x1c6)]();_0x9ef8a1[_0x50227d(0x1a0)]['push'](_0x2a03de);}_0x208e3b[_0x50227d(0x1cb)][_0x50227d(0x19e)](_0x9ef8a1);}_0x1c86c5[_0x50227d(0x197)][_0x50227d(0x19e)](_0x208e3b);}else {let _0x2fa60a=XMLParser[_0x50227d(0x1a4)](_0x48080a,_0x50227d(0x1b5),_0x3f426f);if(_0x2fa60a[_0x50227d(0x1c2)]>0x0){let _0xb45713={'boundingSphere':{'center':{'x':0x0,'y':0x0,'z':0x0},'radius':0x615299},'childTile':'','geodes':[],'rangeList':0x0,'rangeMode':_0x33e663['Pixel']};for(let _0x4ffd66=0x0,_0x25fdd8=_0x2fa60a[_0x50227d(0x1c2)];_0x4ffd66<_0x25fdd8;_0x4ffd66++){let _0x3e5cfb={},_0x4c8596=_0x2fa60a[_0x4ffd66],_0x22fb90=XMLParser[_0x50227d(0x1ca)](_0x4c8596,'GeoDeModMatrix',_0x3f426f)[_0x50227d(0x1c8)](',');for(let _0x27b605=0x0;_0x27b605<0x10;_0x27b605++){_0x22fb90[_0x27b605]=parseFloat(_0x22fb90[_0x27b605]);}_0x3e5cfb[_0x50227d(0x1f3)]=_0x22fb90;let _0x56d48f=XMLParser[_0x50227d(0x1a4)](_0x4c8596,_0x50227d(0x1ab),_0x3f426f);_0x3e5cfb[_0x50227d(0x1a0)]=[];for(let _0x411b78=0x0;_0x411b78<_0x56d48f[_0x50227d(0x1c2)];_0x411b78++){let _0x4b82be=_0x56d48f[_0x411b78][_0x50227d(0x1d6)][_0x50227d(0x1c6)]();_0x3e5cfb['skeletonNames'][_0x50227d(0x19e)](_0x4b82be);}_0xb45713['geodes']['push'](_0x3e5cfb);}_0x1c86c5[_0x50227d(0x197)][_0x50227d(0x19e)](_0xb45713);}}return _0x1c86c5;}function _0x48ce(_0x50252a,_0x5009b9){_0x50252a=_0x50252a-0x186;let _0x5a490e=_0x5a49[_0x50252a];return _0x5a490e;}function unZip$1(_0x507585,_0x419c52){const _0x19879a=_0x48ce;let _0x3a327e=new Uint8Array(_0x507585,_0x419c52);return _0x1f354f[_0x19879a(0x1dd)](_0x3a327e)[_0x19879a(0x19f)];}function S3ModelOldParser(){}S3ModelOldParser[_0x3124e6(0x18d)]=function(_0x2528e2){const _0x5a4c54=_0x3124e6;let _0x344430=0x0,_0x280b8b={'groupNode':{},'geoPackage':{},'materials':{},'texturePackage':{}},_0xe7825f=new Uint8Array(_0x2528e2,0x0,0x4);if(_0xe7825f[0x0]!==0x73||_0xe7825f[0x1]!==0x33||_0xe7825f[0x2]!==0x6d)return {'result':![]};_0x344430+=0x4;let _0x1c1a16=unZip$1(_0x2528e2,_0x344430),_0x5e0320=new Uint8Array(_0x1c1a16),_0x58f936=new DataView(_0x1c1a16);_0x344430=0x0;let _0x16b365=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x907355=new Uint8Array(_0x1c1a16,_0x344430,_0x16b365),_0x2daf66=_0x16b365%0x4;_0x2daf66&&(_0x2daf66=0x4-_0x2daf66);_0x344430+=_0x16b365+_0x2daf66;let _0x2af753=Cesium['getStringFromTypedArray'](_0x907355,undefined,undefined,'gbk');createGroupAndMaterialNode(_0x2af753,_0x280b8b[_0x5a4c54(0x1f2)],_0x280b8b[_0x5a4c54(0x1d9)]);let _0x579154=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array['BYTES_PER_ELEMENT'];let _0x34d517=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x2dbfb1=_0x280b8b[_0x5a4c54(0x1c4)];for(let _0x10c247=0x0;_0x10c247<_0x34d517;_0x10c247++){_0x344430=parseGeoPackage(_0x2dbfb1,_0x5e0320,_0x58f936,_0x344430);}let _0x633f42=_0x58f936['getUint32'](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x1ced5a=_0x58f936['getUint32'](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];for(let _0x19ef8a=0x0;_0x19ef8a<_0x1ced5a;_0x19ef8a++){let _0x526360=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array['BYTES_PER_ELEMENT'];let _0x5028f7=_0x58f936['getUint32'](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x37221={},_0xea845e=_0x2dbfb1[_0x526360][_0x5a4c54(0x19c)][_0x5a4c54(0x18a)];if(_0xea845e===-0x1){let _0x586f52=new Float32Array(_0x2dbfb1[_0x526360][_0x5a4c54(0x19c)][_0x5a4c54(0x198)]);for(let _0x1f56b7=0x0;_0x1f56b7<_0x5028f7;_0x1f56b7++){let _0x5f3000=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array['BYTES_PER_ELEMENT'];let _0x284a26=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x93c543=0x0,_0x3153ef=0x0;_0x37221[_0x5f3000]=[];for(let _0x48c5ea=0x0;_0x48c5ea<_0x284a26;_0x48c5ea++){_0x3153ef=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]),_0x344430+=Uint32Array[_0x5a4c54(0x1ce)],_0x93c543=_0x58f936['getUint32'](_0x344430,!![]),_0x344430+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x586f52[_0x5a4c54(0x186)])_0x586f52['fill'](_0x1f56b7,_0x3153ef,_0x3153ef+_0x93c543);else {let _0x262630=_0x3153ef+_0x3153ef;for(let _0x51af5e=_0x3153ef;_0x51af5e<_0x262630;_0x51af5e++){_0x586f52[_0x51af5e]=_0x1f56b7;}}_0x37221[_0x5f3000]['push']({'vertexColorOffset':_0x3153ef,'vertexColorCount':_0x93c543,'batchId':_0x1f56b7});}}createBatchIdAttribute$1(_0x2dbfb1[_0x526360][_0x5a4c54(0x19c)],_0x586f52,undefined);}else {let _0x440e4c=_0x2dbfb1[_0x526360][_0x5a4c54(0x19c)][_0x5a4c54(0x18e)],_0x49907d=_0x2dbfb1[_0x526360][_0x5a4c54(0x19c)][_0x5a4c54(0x1dc)],_0x25c7cd=_0x2dbfb1[_0x526360][_0x5a4c54(0x19c)][_0x5a4c54(0x1b2)],_0x274a92=new Float32Array(_0x440e4c),_0x40140c=0x0;for(let _0x2f4b0e=0x0;_0x2f4b0e<_0x5028f7;_0x2f4b0e++){let _0x1435cb=_0x58f936['getUint32'](_0x344430,!![]);_0x344430+=Uint32Array['BYTES_PER_ELEMENT'];let _0x8688=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)],_0x37221[_0x1435cb]=[];for(let _0x6aaf97=0x0;_0x6aaf97<_0x8688;_0x6aaf97++){let _0x4572fa=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array['BYTES_PER_ELEMENT'],_0x274a92[_0x40140c]=_0x40140c,_0x37221[_0x1435cb]===undefined&&(_0x37221[_0x1435cb]=[{'vertexColorCount':0x1,'instanceIds':[],'vertexColorOffset':_0x40140c}]),_0x37221[_0x1435cb]['instanceIds'][_0x5a4c54(0x19e)](_0x4572fa),_0x40140c++;}}createBatchIdAttribute$1(_0x2dbfb1[_0x526360]['vertexPackage'],_0x274a92,0x1);}_0x2dbfb1[_0x526360][_0x5a4c54(0x1d2)]=_0x37221;}let _0x1450b5=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x18d71b=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x50a30c={};for(let _0x393b03=0x0;_0x393b03<_0x18d71b;_0x393b03++){let _0x49938c=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x2fa9b5=_0x58f936['getUint32'](_0x344430,!![]);_0x344430+=Uint32Array['BYTES_PER_ELEMENT'];let _0x2935d3=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0xa650cb=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array['BYTES_PER_ELEMENT'];let _0xe54efb=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array['BYTES_PER_ELEMENT'];let _0x21b926=_0x58f936[_0x5a4c54(0x1f5)](_0x344430,!![]);_0x344430+=Uint32Array[_0x5a4c54(0x1ce)];let _0x322e20=_0x21b926===_0x3065af[_0x5a4c54(0x1e3)]||_0x21b926===_0x3065af[_0x5a4c54(0x1bd)]?Cesium[_0x5a4c54(0x1cd)][_0x5a4c54(0x1e0)]:Cesium[_0x5a4c54(0x1cd)][_0x5a4c54(0x1be)],_0x5aabbb=new Uint8Array(_0x1c1a16,_0x344430,_0xe54efb);_0x50a30c[_0x49938c]={'id':_0x49938c,'width':_0x2fa9b5,'height':_0x2935d3,'compressType':_0xa650cb,'nFormat':_0x21b926,'arrayBufferView':_0x5aabbb,'internalFormat':_0x322e20},_0x344430+=_0xe54efb;}return _0x280b8b[_0x5a4c54(0x1ad)]=_0x50a30c,_0x280b8b;};

    const _0x5b86=['minTexCoordValue','vertexAttributes','string','SV_Standard','bytesOffset','length','green','SVC_Vertex','texCoordZMatrix','texturePackage','aTexCoordZ','uv5','uv7','childTile','SVC_Normal','indicesTypedArray','groupNode','vertexPackage','rootBatchIdMap','boundingSphere','instanceIndex','attrLocation','parseBuffer','Geometry','inflate','uv2','SHORT','instanceCount','ComponentDatatype','aColor','minVerticesValue','128rlVpOI','pickInfo','SVC_TexutreCoordIsW','334542DnpSPR','parse','blue','materials','UNSIGNED_BYTE','347381GXoIBu','BYTES_PER_ELEMENT','rangeList','uv6','getFloat32','subVertexOffsetArr','rangeMode','4854ErsqLt','113286ZbReTu','indicesCount','batchId','aTexCoord','aSecondColor','getUint32','materialCode','buffer','push','aNormal','instanceId','getStringFromTypedArray','getUint16','5138EQkhor','FLOAT','verticesCount','arrayFill','854840ncvqvI','SV_Compressed','uv1','count','texUnitIndex','aTextureBatchId','geoPackage','slice','indexType','instanceIds','isRootTile','instanceMode','split','1334138ipiSwk','substring','createEdgeDataByIndices','pageLods','uv9','Color','secondary_colour','primitiveType','offset','aPosition','getUint8','instanceBuffer','replace','geoName','34BOohuz','SVC_TexutreCoord','hasOwnProperty','compressOptions','indexOf','getFloat64','subName','ancestorMap','uv3','geodes','matrix'];const _0x1018c7=_0x57e1;(function(_0x30d401,_0x57ae05){const _0x46d6aa=_0x57e1;while(!![]){try{const _0x3cc29c=parseInt(_0x46d6aa(0x98))+-parseInt(_0x46d6aa(0x9d))+parseInt(_0x46d6aa(0xa4))*parseInt(_0x46d6aa(0xd1))+parseInt(_0x46d6aa(0xb6))+parseInt(_0x46d6aa(0x95))*parseInt(_0x46d6aa(0xb2))+parseInt(_0x46d6aa(0xa5))+-parseInt(_0x46d6aa(0xc3));if(_0x3cc29c===_0x57ae05)break;else _0x30d401['push'](_0x30d401['shift']());}catch(_0x195eb9){_0x30d401['push'](_0x30d401['shift']());}}}(_0x5b86,0x6c5c9));function S3MBlockParser(){}let S3MBVertexTag$1={'SV_Unkown':0x0,'SV_Standard':0x1,'SV_Compressed':0x2};function parseString$1(_0x520363,_0x4b8583,_0x4c0515){const _0x4a6a14=_0x57e1;let _0x368900=_0x4b8583[_0x4a6a14(0xaa)](_0x4c0515,!![]);_0x4c0515+=Uint32Array[_0x4a6a14(0x9e)];let _0x37ee08=new Uint8Array(_0x520363,_0x4c0515,_0x368900),_0x2d2e15=Cesium[_0x4a6a14(0xb0)](_0x37ee08);return _0x4c0515+=_0x368900,{'string':_0x2d2e15,'bytesOffset':_0x4c0515};}function parseGeode$1(_0x11b620,_0xf34a87,_0x32d38a,_0x50628e){const _0x253834=_0x57e1;let _0x5aa486={},_0x528c7d=[],_0x3ffd64=new Array(0x10);for(let _0x14d69f=0x0;_0x14d69f<0x10;_0x14d69f++){_0x3ffd64[_0x14d69f]=_0xf34a87['getFloat64'](_0x32d38a,!![]),_0x32d38a+=Float64Array[_0x253834(0x9e)];}_0x5aa486[_0x253834(0xdb)]=_0x3ffd64,_0x5aa486['skeletonNames']=_0x528c7d;let _0x5e5ad9=_0xf34a87[_0x253834(0xaa)](_0x32d38a,!![]);_0x32d38a+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x4b7023=0x0;_0x4b7023<_0x5e5ad9;_0x4b7023++){let _0x15c84c=parseString$1(_0x11b620,_0xf34a87,_0x32d38a);_0x528c7d[_0x253834(0xad)](_0x15c84c[_0x253834(0xde)]),_0x32d38a=_0x15c84c['bytesOffset'];}return _0x50628e['push'](_0x5aa486),_0x32d38a;}function parsePageLOD$1(_0x48c619,_0xa9c50a,_0x495fc9,_0xf8d220){const _0xd523fa=_0x57e1;let _0x34caee={};_0x34caee[_0xd523fa(0x9f)]=_0xa9c50a[_0xd523fa(0xa1)](_0x495fc9,!![]),_0x495fc9+=Float32Array['BYTES_PER_ELEMENT'],_0x34caee[_0xd523fa(0xa3)]=_0xa9c50a[_0xd523fa(0xb1)](_0x495fc9,!![]),_0x495fc9+=Uint16Array['BYTES_PER_ELEMENT'];let _0x1ad8bd={};_0x1ad8bd['x']=_0xa9c50a[_0xd523fa(0xd6)](_0x495fc9,!![]),_0x495fc9+=Float64Array[_0xd523fa(0x9e)],_0x1ad8bd['y']=_0xa9c50a['getFloat64'](_0x495fc9,!![]),_0x495fc9+=Float64Array[_0xd523fa(0x9e)],_0x1ad8bd['z']=_0xa9c50a[_0xd523fa(0xd6)](_0x495fc9,!![]),_0x495fc9+=Float64Array[_0xd523fa(0x9e)];let _0x51ffdc=_0xa9c50a['getFloat64'](_0x495fc9,!![]);_0x495fc9+=Float64Array[_0xd523fa(0x9e)],_0x34caee[_0xd523fa(0x89)]={'center':_0x1ad8bd,'radius':_0x51ffdc};let _0x1e3b36=parseString$1(_0x48c619,_0xa9c50a,_0x495fc9),_0x4c8502=_0x1e3b36['string'];_0x495fc9=_0x1e3b36[_0xd523fa(0xe0)];let _0x574f0d=_0x4c8502[_0xd523fa(0xd5)](_0xd523fa(0x8d));if(_0x574f0d!==-0x1){let _0xff74f1=_0x4c8502[_0xd523fa(0xc4)](_0x574f0d);_0x4c8502=_0x4c8502[_0xd523fa(0xcf)](_0xff74f1,'');}_0x34caee['childTile']=_0x4c8502,_0x34caee[_0xd523fa(0xda)]=[];let _0x4e54ea=_0xa9c50a[_0xd523fa(0xaa)](_0x495fc9,!![]);_0x495fc9+=Uint32Array[_0xd523fa(0x9e)];for(let _0x4b0a20=0x0;_0x4b0a20<_0x4e54ea;_0x4b0a20++){_0x495fc9=parseGeode$1(_0x48c619,_0xa9c50a,_0x495fc9,_0x34caee[_0xd523fa(0xda)]);}return _0xf8d220[_0xd523fa(0xad)](_0x34caee),_0x495fc9;}function parseGroupNode$1(_0x1b04e0,_0xa568e5,_0x41487a,_0x2328b3){const _0x55bf7a=_0x57e1;let _0x212f1f={},_0x1f3e91=[],_0x51de9c=_0xa568e5[_0x55bf7a(0xaa)](_0x41487a,!![]);_0x41487a+=Uint32Array[_0x55bf7a(0x9e)];let _0x4381f9=_0xa568e5[_0x55bf7a(0xaa)](_0x41487a,!![]);_0x41487a+=Uint32Array[_0x55bf7a(0x9e)];for(let _0x7aa2b5=0x0;_0x7aa2b5<_0x4381f9;_0x7aa2b5++){_0x41487a=parsePageLOD$1(_0x1b04e0,_0xa568e5,_0x41487a,_0x1f3e91);}_0x212f1f[_0x55bf7a(0xc6)]=_0x1f3e91;let _0x3cc491=_0x41487a%0x4;return _0x3cc491!==0x0&&(_0x41487a+=0x4-_0x3cc491),_0x2328b3[_0x55bf7a(0x86)]=_0x212f1f,_0x41487a;}function parseVertex$1(_0x20f750,_0x24791e,_0x204b63,_0xeb897d){const _0x28ddfd=_0x57e1;let _0x198672=_0x24791e[_0x28ddfd(0xaa)](_0x204b63,!![]);_0xeb897d[_0x28ddfd(0xb4)]=_0x198672,_0x204b63+=Uint32Array[_0x28ddfd(0x9e)];if(_0x204b63<=0x0)return _0x204b63;let _0x52b13f=_0x24791e[_0x28ddfd(0xb1)](_0x204b63,!![]);_0x204b63+=Uint16Array[_0x28ddfd(0x9e)];let _0x1d3cce=_0x24791e[_0x28ddfd(0xb1)](_0x204b63,!![]);_0x1d3cce=_0x52b13f*Float32Array['BYTES_PER_ELEMENT'],_0x204b63+=Uint16Array['BYTES_PER_ELEMENT'];let _0x191b39=_0x198672*_0x52b13f*Float32Array[_0x28ddfd(0x9e)],_0x430da2=new Uint8Array(_0x20f750,_0x204b63,_0x191b39);_0x204b63+=_0x191b39;let _0x347305=_0xeb897d[_0x28ddfd(0xdd)],_0x259d33=_0xeb897d['attrLocation'];return _0x259d33[_0x28ddfd(0xcc)]=_0x347305[_0x28ddfd(0xe1)],_0x347305[_0x28ddfd(0xad)]({'index':_0x259d33[_0x28ddfd(0xcc)],'typedArray':_0x430da2,'componentsPerAttribute':_0x52b13f,'componentDatatype':Cesium[_0x28ddfd(0x92)][_0x28ddfd(0xb3)],'offsetInBytes':0x0,'strideInBytes':_0x1d3cce,'normalize':![]}),_0x204b63;}function parseNormal$1(_0x554b22,_0x37c851,_0x58f762,_0x15dea7){const _0x4f6d27=_0x57e1;let _0x173ec7=_0x37c851[_0x4f6d27(0xaa)](_0x58f762,!![]);_0x58f762+=Uint32Array[_0x4f6d27(0x9e)];if(_0x173ec7<=0x0)return _0x58f762;let _0xd6ef6c=_0x37c851[_0x4f6d27(0xb1)](_0x58f762,!![]);_0x58f762+=Uint16Array['BYTES_PER_ELEMENT'];let _0x125b01=_0x37c851[_0x4f6d27(0xb1)](_0x58f762,!![]);_0x58f762+=Uint16Array[_0x4f6d27(0x9e)];let _0x2aa421=_0x173ec7*_0xd6ef6c*Float32Array[_0x4f6d27(0x9e)],_0x2d8ea8=new Uint8Array(_0x554b22,_0x58f762,_0x2aa421);_0x58f762+=_0x2aa421;let _0x29a16b=_0x15dea7[_0x4f6d27(0xdd)],_0x5cc75d=_0x15dea7[_0x4f6d27(0x8b)];return _0x5cc75d[_0x4f6d27(0xae)]=_0x29a16b['length'],_0x29a16b[_0x4f6d27(0xad)]({'index':_0x5cc75d[_0x4f6d27(0xae)],'typedArray':_0x2d8ea8,'componentsPerAttribute':_0xd6ef6c,'componentDatatype':Cesium['ComponentDatatype'][_0x4f6d27(0xb3)],'offsetInBytes':0x0,'strideInBytes':_0x125b01,'normalize':![]}),_0x58f762;}function parseVertexColor$1(_0x7dae7c,_0x351421,_0x569b62,_0x449211){const _0x14fd68=_0x57e1;let _0x16015b=_0x351421['getUint32'](_0x569b62,!![]);_0x569b62+=Uint32Array[_0x14fd68(0x9e)];let _0x5d7e71=_0x449211[_0x14fd68(0xb4)],_0x51ce41;if(_0x16015b>0x0){let _0x16816c=_0x351421[_0x14fd68(0xb1)](_0x569b62,!![]);_0x569b62+=Uint16Array['BYTES_PER_ELEMENT'],_0x569b62+=Uint8Array[_0x14fd68(0x9e)]*0x2;let _0x41ae89=_0x16015b*Uint8Array['BYTES_PER_ELEMENT']*0x4,_0x4c47fd=new Uint8Array(_0x7dae7c,_0x569b62,_0x41ae89);_0x51ce41=_0x4c47fd['slice'](0x0,_0x41ae89),_0x569b62+=_0x41ae89;}else {_0x51ce41=new Uint8Array(0x4*_0x5d7e71);for(let _0x688b89=0x0;_0x688b89<_0x5d7e71;_0x688b89++){_0x51ce41[_0x688b89*0x4]=0xff,_0x51ce41[_0x688b89*0x4+0x1]=0xff,_0x51ce41[_0x688b89*0x4+0x2]=0xff,_0x51ce41[_0x688b89*0x4+0x3]=0xff;}}let _0x411cc5=_0x449211[_0x14fd68(0xdd)],_0x1e7f50=_0x449211[_0x14fd68(0x8b)];return _0x1e7f50[_0x14fd68(0x93)]=_0x411cc5[_0x14fd68(0xe1)],_0x411cc5[_0x14fd68(0xad)]({'index':_0x1e7f50[_0x14fd68(0x93)],'typedArray':_0x51ce41,'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x14fd68(0x9c)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x449211['vertexColor']=_0x51ce41,_0x569b62;}function parseSecondColor$1(_0x3066de,_0x4d935c,_0x40ea2b,_0x44846f){const _0x49e646=_0x57e1;let _0x313835=_0x4d935c[_0x49e646(0xaa)](_0x40ea2b,!![]);_0x40ea2b+=Uint32Array[_0x49e646(0x9e)];if(_0x313835<=0x0)return _0x40ea2b;let _0x1b5fee=_0x4d935c[_0x49e646(0xb1)](_0x40ea2b,!![]);_0x40ea2b+=Uint16Array[_0x49e646(0x9e)],_0x40ea2b+=Uint8Array[_0x49e646(0x9e)]*0x2;let _0x34424e=_0x313835*Uint8Array[_0x49e646(0x9e)]*0x4,_0x339eae=new Uint8Array(_0x3066de,_0x40ea2b,_0x34424e);_0x40ea2b+=_0x34424e;let _0x6c7696=_0x44846f[_0x49e646(0xdd)],_0x2d68a9=_0x44846f[_0x49e646(0x8b)];return _0x2d68a9['aSecondColor']=_0x6c7696['length'],_0x6c7696[_0x49e646(0xad)]({'index':_0x2d68a9[_0x49e646(0xa9)],'typedArray':_0x339eae,'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x49e646(0x92)][_0x49e646(0x9c)],'offsetInBytes':0x0,'strideInBytes':0x4,'normalize':!![]}),_0x40ea2b;}function parseTexCoord$1(_0x26b3c8,_0x45101a,_0x168d8f,_0x4de2ba){const _0x3e0de1=_0x57e1;let _0x5f93af=_0x45101a[_0x3e0de1(0xb1)](_0x168d8f,!![]);_0x168d8f+=Uint16Array[_0x3e0de1(0x9e)],_0x168d8f+=Uint16Array[_0x3e0de1(0x9e)];for(let _0x139d4d=0x0;_0x139d4d<_0x5f93af;_0x139d4d++){let _0x39aedb=_0x45101a[_0x3e0de1(0xaa)](_0x168d8f,!![]);_0x168d8f+=Uint32Array['BYTES_PER_ELEMENT'];let _0x4b807f=_0x45101a[_0x3e0de1(0xb1)](_0x168d8f,!![]);_0x168d8f+=Uint16Array[_0x3e0de1(0x9e)];let _0x25b5e9=_0x45101a[_0x3e0de1(0xb1)](_0x168d8f,!![]);_0x168d8f+=Uint16Array['BYTES_PER_ELEMENT'];let _0x208292=_0x39aedb*_0x4b807f*Float32Array[_0x3e0de1(0x9e)],_0x5267a8=new Uint8Array(_0x26b3c8,_0x168d8f,_0x208292);_0x168d8f+=_0x208292;let _0x11cd34=_0x3e0de1(0xa8)+_0x139d4d,_0x8dfbaf=_0x4de2ba[_0x3e0de1(0xdd)],_0x3a99bc=_0x4de2ba[_0x3e0de1(0x8b)];_0x3a99bc[_0x11cd34]=_0x8dfbaf['length'],_0x8dfbaf[_0x3e0de1(0xad)]({'index':_0x3a99bc[_0x11cd34],'typedArray':_0x5267a8,'componentsPerAttribute':_0x4b807f,'componentDatatype':Cesium[_0x3e0de1(0x92)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':_0x4b807f*Float32Array[_0x3e0de1(0x9e)],'normalize':![]});}return _0x168d8f;}function parseInstanceInfo$1(_0x1da0e8,_0x42ce09,_0x2e57c1,_0x38d16d){const _0x359425=_0x57e1;let _0x5e801d=_0x42ce09['getUint16'](_0x2e57c1,!![]);_0x2e57c1+=Uint16Array[_0x359425(0x9e)],_0x2e57c1+=Uint16Array[_0x359425(0x9e)];let _0x19a515=_0x38d16d[_0x359425(0xdd)],_0x14f561=_0x38d16d[_0x359425(0x8b)];for(let _0x1ea40d=0x0;_0x1ea40d<_0x5e801d;_0x1ea40d++){let _0x427562=_0x42ce09[_0x359425(0xaa)](_0x2e57c1,!![]);_0x2e57c1+=Uint32Array['BYTES_PER_ELEMENT'];let _0x4b215d=_0x42ce09[_0x359425(0xb1)](_0x2e57c1,!![]);_0x2e57c1+=Uint16Array['BYTES_PER_ELEMENT'];let _0x43564a=_0x42ce09[_0x359425(0xb1)](_0x2e57c1,!![]);_0x2e57c1+=Uint16Array['BYTES_PER_ELEMENT'];let _0x46cec7=_0x427562*_0x4b215d*Float32Array[_0x359425(0x9e)];if(_0x4b215d===0x11||_0x4b215d===0x1d){let _0x3b87b1=new Uint8Array(_0x1da0e8,_0x2e57c1,_0x46cec7);_0x38d16d[_0x359425(0x91)]=_0x427562,_0x38d16d[_0x359425(0xc1)]=_0x4b215d,_0x38d16d[_0x359425(0xce)]=_0x3b87b1,_0x38d16d['instanceIndex']=0x1;let _0xcb8358=_0x4b215d*_0x427562*0x4,_0x523fc6=_0x3b87b1[_0x359425(0xbd)](0x0,_0xcb8358);_0x38d16d['vertexColorInstance']=_0x523fc6;let _0x1ba094;if(_0x4b215d===0x11)_0x1ba094=Float32Array['BYTES_PER_ELEMENT']*0x11,_0x14f561[_0x359425(0x8f)]=_0x19a515['length'],_0x19a515[_0x359425(0xad)]({'index':_0x14f561[_0x359425(0x8f)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x359425(0x92)][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561[_0x359425(0xd9)]=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561[_0x359425(0xd9)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561['uv4']=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561['uv4'],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561[_0x359425(0xc9)]=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561[_0x359425(0xc9)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0xc*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561['uv6']=_0x19a515['length'],_0x19a515[_0x359425(0xad)]({'index':_0x14f561['uv6'],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x359425(0x9c)],'normalize':!![],'offsetInBytes':0x10*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1});else _0x4b215d===0x1d&&(_0x1ba094=Float32Array[_0x359425(0x9e)]*0x1d,_0x14f561[_0x359425(0xb8)]=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561[_0x359425(0xb8)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x359425(0x92)][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0x0,'strideInBytes':_0x1ba094,'instanceDivisor':0x1,'byteLength':_0x46cec7}),_0x14f561[_0x359425(0x8f)]=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561['uv2'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x359425(0x92)]['FLOAT'],'normalize':![],'offsetInBytes':0x4*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561[_0x359425(0xd9)]=_0x19a515[_0x359425(0xe1)],_0x19a515['push']({'index':_0x14f561[_0x359425(0xd9)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype']['FLOAT'],'normalize':![],'offsetInBytes':0x8*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561['uv4']=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561['uv4'],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x359425(0x92)][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0xc*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561[_0x359425(0x81)]=_0x19a515[_0x359425(0xe1)],_0x19a515['push']({'index':_0x14f561[_0x359425(0x81)],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype'][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0x10*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561[_0x359425(0xa0)]=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561[_0x359425(0xa0)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x359425(0x92)][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0x14*Float32Array['BYTES_PER_ELEMENT'],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561[_0x359425(0x82)]=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561[_0x359425(0x82)],'componentsPerAttribute':0x3,'componentDatatype':Cesium[_0x359425(0x92)][_0x359425(0xb3)],'normalize':![],'offsetInBytes':0x18*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561[_0x359425(0xc9)]=_0x19a515[_0x359425(0xe1)],_0x19a515[_0x359425(0xad)]({'index':_0x14f561['secondary_colour'],'componentsPerAttribute':0x4,'componentDatatype':Cesium['ComponentDatatype']['UNSIGNED_BYTE'],'normalize':!![],'offsetInBytes':0x1b*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}),_0x14f561[_0x359425(0xc7)]=_0x19a515[_0x359425(0xe1)],_0x19a515['push']({'index':_0x14f561[_0x359425(0xc7)],'componentsPerAttribute':0x4,'componentDatatype':Cesium[_0x359425(0x92)][_0x359425(0x9c)],'normalize':!![],'offsetInBytes':0x1c*Float32Array[_0x359425(0x9e)],'strideInBytes':_0x1ba094,'instanceDivisor':0x1}));}else {let _0x1dd10c=_0x427562*_0x4b215d;_0x38d16d['instanceBounds']=new Float32Array(_0x1dd10c);for(let _0x47b40f=0x0;_0x47b40f<_0x1dd10c;_0x47b40f++){_0x38d16d['instanceBounds'][_0x47b40f]=_0x42ce09['getFloat32'](_0x2e57c1+_0x47b40f*Float32Array[_0x359425(0x9e)],!![]);}}_0x2e57c1+=_0x46cec7;}return _0x2e57c1;}function parseCompressVertex$1(_0x139293,_0x3514d7,_0x8dab2d,_0x1743d8){const _0xac388a=_0x57e1;let _0x3aeb10=_0x3514d7['getUint32'](_0x8dab2d,!![]);_0x1743d8[_0xac388a(0xb4)]=_0x3aeb10,_0x8dab2d+=Uint32Array['BYTES_PER_ELEMENT'];if(_0x8dab2d<=0x0)return _0x8dab2d;let _0x47d88f=_0x3514d7[_0xac388a(0xb1)](_0x8dab2d,!![]);_0x8dab2d+=Uint16Array[_0xac388a(0x9e)];let _0x3b23e1=_0x3514d7[_0xac388a(0xb1)](_0x8dab2d,!![]);_0x3b23e1=_0x47d88f*Int16Array[_0xac388a(0x9e)],_0x8dab2d+=Uint16Array['BYTES_PER_ELEMENT'];let _0xc2517a=_0x3514d7[_0xac388a(0xa1)](_0x8dab2d,!![]);_0x8dab2d+=Float32Array['BYTES_PER_ELEMENT'];let _0x162580={};_0x162580['x']=_0x3514d7[_0xac388a(0xa1)](_0x8dab2d,!![]),_0x8dab2d+=Float32Array['BYTES_PER_ELEMENT'],_0x162580['y']=_0x3514d7[_0xac388a(0xa1)](_0x8dab2d,!![]),_0x8dab2d+=Float32Array[_0xac388a(0x9e)],_0x162580['z']=_0x3514d7[_0xac388a(0xa1)](_0x8dab2d,!![]),_0x8dab2d+=Float32Array[_0xac388a(0x9e)],_0x162580['w']=_0x3514d7[_0xac388a(0xa1)](_0x8dab2d,!![]),_0x8dab2d+=Float32Array[_0xac388a(0x9e)],_0x1743d8['vertCompressConstant']=_0xc2517a,_0x1743d8[_0xac388a(0x94)]=_0x162580;let _0x9fdc25=_0x3aeb10*_0x47d88f*Int16Array[_0xac388a(0x9e)],_0x181fb0=new Uint8Array(_0x139293,_0x8dab2d,_0x9fdc25);_0x8dab2d+=_0x9fdc25;let _0x50d87d=_0x1743d8[_0xac388a(0xdd)],_0x16001a=_0x1743d8[_0xac388a(0x8b)];return _0x16001a[_0xac388a(0xcc)]=_0x50d87d[_0xac388a(0xe1)],_0x50d87d[_0xac388a(0xad)]({'index':_0x16001a[_0xac388a(0xcc)],'typedArray':_0x181fb0,'componentsPerAttribute':_0x47d88f,'componentDatatype':Cesium['ComponentDatatype'][_0xac388a(0x90)],'offsetInBytes':0x0,'strideInBytes':_0x3b23e1,'normalize':![]}),_0x8dab2d;}function parseCompressNormal$1(_0x3a89f3,_0x54b1b6,_0x3ff03d,_0x216148){const _0x267c37=_0x57e1;let _0x837134=_0x54b1b6[_0x267c37(0xaa)](_0x3ff03d,!![]);_0x3ff03d+=Uint32Array[_0x267c37(0x9e)];if(_0x837134<=0x0)return _0x3ff03d;let _0xc0a376=_0x54b1b6[_0x267c37(0xb1)](_0x3ff03d,!![]);_0x3ff03d+=Uint16Array['BYTES_PER_ELEMENT'];let _0x25a288=_0x54b1b6[_0x267c37(0xb1)](_0x3ff03d,!![]);_0x3ff03d+=Uint16Array[_0x267c37(0x9e)];let _0x4953d6=_0x837134*0x2*Int16Array[_0x267c37(0x9e)],_0x4f65d6=new Uint8Array(_0x3a89f3,_0x3ff03d,_0x4953d6);_0x3ff03d+=_0x4953d6;let _0x5ac67d=_0x216148[_0x267c37(0xdd)],_0x3a7f2b=_0x216148[_0x267c37(0x8b)];return _0x3a7f2b['aNormal']=_0x5ac67d['length'],_0x5ac67d[_0x267c37(0xad)]({'index':_0x3a7f2b['aNormal'],'typedArray':_0x4f65d6,'componentsPerAttribute':0x2,'componentDatatype':Cesium[_0x267c37(0x92)]['SHORT'],'offsetInBytes':0x0,'strideInBytes':_0x25a288,'normalize':![]}),_0x3ff03d;}function parseCompressTexCoord$1(_0x4f4d1b,_0xdaa146,_0x5f2cef,_0x4f6d7b){const _0x1c80fa=_0x57e1;_0x4f6d7b['texCoordCompressConstant']=[],_0x4f6d7b[_0x1c80fa(0xdc)]=[];let _0x4eb924=_0xdaa146['getUint16'](_0x5f2cef,!![]);_0x5f2cef+=Uint16Array['BYTES_PER_ELEMENT'],_0x5f2cef+=Uint16Array['BYTES_PER_ELEMENT'];for(let _0x1804ad=0x0;_0x1804ad<_0x4eb924;_0x1804ad++){let _0x8b1256=_0xdaa146['getUint8'](_0x5f2cef,!![]);_0x5f2cef+=Uint8Array[_0x1c80fa(0x9e)],_0x5f2cef+=Uint8Array[_0x1c80fa(0x9e)]*0x3;let _0x58126f=_0xdaa146[_0x1c80fa(0xaa)](_0x5f2cef,!![]);_0x5f2cef+=Uint32Array['BYTES_PER_ELEMENT'];let _0x23a215=_0xdaa146[_0x1c80fa(0xb1)](_0x5f2cef,!![]);_0x5f2cef+=Uint16Array[_0x1c80fa(0x9e)];let _0x476a4d=_0xdaa146[_0x1c80fa(0xb1)](_0x5f2cef,!![]);_0x5f2cef+=Uint16Array[_0x1c80fa(0x9e)];let _0x390324=_0xdaa146[_0x1c80fa(0xa1)](_0x5f2cef,!![]);_0x5f2cef+=Float32Array[_0x1c80fa(0x9e)],_0x4f6d7b['texCoordCompressConstant'][_0x1c80fa(0xad)](_0x390324);let _0x2b7b22={};_0x2b7b22['x']=_0xdaa146[_0x1c80fa(0xa1)](_0x5f2cef,!![]),_0x5f2cef+=Float32Array[_0x1c80fa(0x9e)],_0x2b7b22['y']=_0xdaa146[_0x1c80fa(0xa1)](_0x5f2cef,!![]),_0x5f2cef+=Float32Array[_0x1c80fa(0x9e)],_0x2b7b22['z']=_0xdaa146[_0x1c80fa(0xa1)](_0x5f2cef,!![]),_0x5f2cef+=Float32Array['BYTES_PER_ELEMENT'],_0x2b7b22['w']=_0xdaa146[_0x1c80fa(0xa1)](_0x5f2cef,!![]),_0x5f2cef+=Float32Array[_0x1c80fa(0x9e)],_0x4f6d7b[_0x1c80fa(0xdc)][_0x1c80fa(0xad)](_0x2b7b22);let _0x4fd78c=_0x58126f*_0x23a215*Int16Array['BYTES_PER_ELEMENT'],_0x394448=new Uint8Array(_0x4f4d1b,_0x5f2cef,_0x4fd78c);_0x5f2cef+=_0x4fd78c;let _0x3f80d9=_0x5f2cef%0x4;_0x3f80d9!==0x0&&(_0x5f2cef+=0x4-_0x3f80d9);let _0x521952=_0x1c80fa(0xa8)+_0x1804ad,_0x3f6e8e=_0x4f6d7b['vertexAttributes'],_0xbbaf4f=_0x4f6d7b[_0x1c80fa(0x8b)];_0xbbaf4f[_0x521952]=_0x3f6e8e['length'],_0x3f6e8e[_0x1c80fa(0xad)]({'index':_0xbbaf4f[_0x521952],'typedArray':_0x394448,'componentsPerAttribute':_0x23a215,'componentDatatype':Cesium[_0x1c80fa(0x92)][_0x1c80fa(0x90)],'offsetInBytes':0x0,'strideInBytes':_0x23a215*Int16Array[_0x1c80fa(0x9e)],'normalize':![]});if(_0x8b1256){_0x4fd78c=_0x58126f*Float32Array[_0x1c80fa(0x9e)];let _0x134ebe=new Uint8Array(_0x4f4d1b,_0x5f2cef,_0x4fd78c);_0x5f2cef+=_0x4fd78c,_0x4f6d7b[_0x1c80fa(0xe4)]=!![],_0x521952=_0x1c80fa(0x80)+_0x1804ad,_0xbbaf4f[_0x521952]=_0x3f6e8e[_0x1c80fa(0xe1)],_0x3f6e8e['push']({'index':_0xbbaf4f[_0x521952],'typedArray':_0x134ebe,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x1c80fa(0x92)][_0x1c80fa(0xb3)],'offsetInBytes':0x0,'strideInBytes':Float32Array[_0x1c80fa(0x9e)],'normalize':![]});}}return _0x5f2cef;}function _0x57e1(_0x1be81e,_0x3f2c3e){_0x1be81e=_0x1be81e-0x80;let _0x5b86b7=_0x5b86[_0x1be81e];return _0x5b86b7;}function parseStandardSkeleton$1(_0x2179dd,_0xcd201,_0x1274f9,_0x1882a4){return _0x1274f9=parseVertex$1(_0x2179dd,_0xcd201,_0x1274f9,_0x1882a4),_0x1274f9=parseNormal$1(_0x2179dd,_0xcd201,_0x1274f9,_0x1882a4),_0x1274f9=parseVertexColor$1(_0x2179dd,_0xcd201,_0x1274f9,_0x1882a4),_0x1274f9=parseSecondColor$1(_0x2179dd,_0xcd201,_0x1274f9,_0x1882a4),_0x1274f9=parseTexCoord$1(_0x2179dd,_0xcd201,_0x1274f9,_0x1882a4),_0x1274f9=parseInstanceInfo$1(_0x2179dd,_0xcd201,_0x1274f9,_0x1882a4),_0x1274f9;}function parseCompressSkeleton$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8){const _0x51b483=_0x57e1;let _0x4ada41=_0x436e8a[_0x51b483(0xaa)](_0x53feb1,!![]);return _0x28b8f8[_0x51b483(0xd4)]=_0x4ada41,_0x53feb1+=Uint32Array['BYTES_PER_ELEMENT'],(_0x4ada41&_0x5aa24d[_0x51b483(0xe3)])===_0x5aa24d[_0x51b483(0xe3)]?_0x53feb1=parseCompressVertex$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8):_0x53feb1=parseVertex$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8),(_0x4ada41&_0x5aa24d[_0x51b483(0x84)])===_0x5aa24d['SVC_Normal']?_0x53feb1=parseCompressNormal$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8):_0x53feb1=parseNormal$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8),_0x53feb1=parseVertexColor$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8),_0x53feb1=parseSecondColor$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8),(_0x4ada41&_0x5aa24d[_0x51b483(0xd2)])===_0x5aa24d[_0x51b483(0xd2)]?_0x53feb1=parseCompressTexCoord$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8):_0x53feb1=parseTexCoord$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8),(_0x4ada41&_0x5aa24d[_0x51b483(0x97)])===_0x5aa24d[_0x51b483(0x97)]&&(_0x28b8f8['textureCoordIsW']=!![]),_0x53feb1=parseInstanceInfo$1(_0x9396da,_0x436e8a,_0x53feb1,_0x28b8f8),_0x53feb1;}function parseIndexPackage$1(_0x1ecad3,_0x2e719e,_0x5d7fd8,_0x1facca){const _0x3506f5=_0x57e1;let _0x42278d=_0x2e719e[_0x3506f5(0xaa)](_0x5d7fd8,!![]);_0x5d7fd8+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x290e8b=0x0;_0x290e8b<_0x42278d;_0x290e8b++){let _0x43525a={},_0xa3e3b3=_0x2e719e[_0x3506f5(0xaa)](_0x5d7fd8,!![]);_0x5d7fd8+=Uint32Array['BYTES_PER_ELEMENT'];let _0x4006ba=_0x2e719e[_0x3506f5(0xcd)](_0x5d7fd8,!![]);_0x5d7fd8+=Uint8Array[_0x3506f5(0x9e)];let _0x2aba43=_0x2e719e[_0x3506f5(0xcd)](_0x5d7fd8,!![]);_0x5d7fd8+=Uint8Array[_0x3506f5(0x9e)];let _0x383014=_0x2e719e[_0x3506f5(0xcd)](_0x5d7fd8,!![]);_0x5d7fd8+=Uint8Array[_0x3506f5(0x9e)],_0x5d7fd8+=Uint8Array[_0x3506f5(0x9e)];if(_0xa3e3b3>0x0){let _0x3d8f5d=null,_0x3358a8;_0x4006ba===0x1||_0x4006ba===0x3?(_0x3358a8=_0xa3e3b3*Uint32Array[_0x3506f5(0x9e)],_0x3d8f5d=new Uint8Array(_0x1ecad3,_0x5d7fd8,_0x3358a8)):(_0x3358a8=_0xa3e3b3*Uint16Array['BYTES_PER_ELEMENT'],_0x3d8f5d=new Uint8Array(_0x1ecad3,_0x5d7fd8,_0x3358a8),_0xa3e3b3%0x2!==0x0&&(_0x3358a8+=0x2)),_0x43525a[_0x3506f5(0x85)]=_0x3d8f5d,_0x5d7fd8+=_0x3358a8;}_0x43525a[_0x3506f5(0xa6)]=_0xa3e3b3,_0x43525a[_0x3506f5(0xbe)]=_0x4006ba,_0x43525a['primitiveType']=_0x383014;let _0x1303b0=[],_0xfcecf8=_0x2e719e[_0x3506f5(0xaa)](_0x5d7fd8,!![]);_0x5d7fd8+=Uint32Array[_0x3506f5(0x9e)];for(let _0x3e33e1=0x0;_0x3e33e1<_0xfcecf8;_0x3e33e1++){let _0xece682=parseString$1(_0x1ecad3,_0x2e719e,_0x5d7fd8),_0x44f169=_0xece682[_0x3506f5(0xde)];_0x5d7fd8=_0xece682['bytesOffset'],_0x1303b0[_0x3506f5(0xad)](_0x44f169),_0x43525a[_0x3506f5(0xab)]=_0x44f169;}let _0x3cc1a5=_0x5d7fd8%0x4;if(_0x3cc1a5!==0x0){let _0x3f1b94=0x4-_0x5d7fd8%0x4;_0x5d7fd8+=_0x3f1b94;}_0x1facca[_0x3506f5(0xad)](_0x43525a);}return _0x5d7fd8;}function parseSkeleton$1(_0x3ce865,_0x5ad811,_0x158514,_0x19245c){const _0x56917f=_0x57e1;let _0x8af312=_0x5ad811['getUint32'](_0x158514,!![]);_0x158514+=Uint32Array[_0x56917f(0x9e)];let _0x2fc52d=_0x5ad811[_0x56917f(0xaa)](_0x158514,!![]);_0x158514+=Uint32Array[_0x56917f(0x9e)];for(let _0x142d8e=0x0;_0x142d8e<_0x2fc52d;_0x142d8e++){let _0x559b1a=parseString$1(_0x3ce865,_0x5ad811,_0x158514),_0x1cfee6=_0x559b1a['string'];_0x158514=_0x559b1a[_0x56917f(0xe0)];let _0x13c468=_0x158514%0x4;_0x13c468!==0x0&&(_0x158514+=0x4-_0x13c468);let _0x276a35=_0x5ad811['getUint32'](_0x158514,!![]);_0x158514+=Int32Array['BYTES_PER_ELEMENT'];let _0x45b72f={'vertexAttributes':[],'attrLocation':{},'instanceCount':0x0,'instanceMode':0x0,'instanceIndex':-0x1};if(_0x276a35===S3MBVertexTag$1[_0x56917f(0xdf)])_0x158514=parseStandardSkeleton$1(_0x3ce865,_0x5ad811,_0x158514,_0x45b72f);else _0x276a35===S3MBVertexTag$1[_0x56917f(0xb7)]&&(_0x158514=parseCompressSkeleton$1(_0x3ce865,_0x5ad811,_0x158514,_0x45b72f));let _0x25e727=[];_0x158514=parseIndexPackage$1(_0x3ce865,_0x5ad811,_0x158514,_0x25e727);let _0x4ee228=undefined;_0x25e727['length']===0x2&&_0x25e727[0x1][_0x56917f(0xca)]===0xd&&_0x25e727[0x1][_0x56917f(0xa6)]>=0x3&&(_0x4ee228=S3MEdgeProcessor[_0x56917f(0xc5)](_0x45b72f,_0x25e727[0x1])),_0x19245c[_0x1cfee6]={'vertexPackage':_0x45b72f,'arrIndexPackage':_0x25e727,'edgeGeometry':_0x4ee228};}let _0x38a3fa=_0x5ad811[_0x56917f(0xaa)](_0x158514,!![]);return _0x158514+=_0x38a3fa,_0x158514+=Uint32Array['BYTES_PER_ELEMENT'],_0x158514;}function createTextureBatch(_0x274a04,_0x47420f,_0x101400,_0x4f36d2){const _0x5ab8bc=_0x57e1;let _0x423db1=_0x101400['length'];for(let _0x42a0aa=0x0;_0x42a0aa<_0x423db1;_0x42a0aa++){let _0x1ca2cf=_0x101400[_0x42a0aa],_0x781bb6=_0x1ca2cf[_0x5ab8bc(0xd7)][_0x5ab8bc(0xc2)]('_')[0x0],_0x5674fc=_0x1ca2cf[_0x5ab8bc(0xa2)];for(let _0x118ba9=0x0;_0x118ba9<_0x5674fc[_0x5ab8bc(0xe1)];_0x118ba9++){let _0x86259c=_0x5674fc[_0x118ba9],_0x4889a8=_0x86259c[_0x5ab8bc(0xd0)],_0x910084=_0x86259c[_0x5ab8bc(0xcb)],_0x8897dc=_0x86259c[_0x5ab8bc(0xb9)],_0x35a948=_0x86259c[_0x5ab8bc(0xba)],_0x4dfbc0=_0x47420f[_0x4889a8][_0x5ab8bc(0x87)],_0x3f311f=_0x4dfbc0[_0x5ab8bc(0xb4)],_0x45dd63=_0x4f36d2[_0x4889a8];!_0x45dd63&&(_0x45dd63=_0x4f36d2[_0x4889a8]={});let _0x35d237=_0x45dd63[_0x35a948];!_0x35d237&&(_0x35d237=_0x45dd63[_0x35a948]=new Float32Array(_0x3f311f),Cesium[_0x5ab8bc(0xb5)](_0x35d237,-0x1));let _0x2168d6=_0x274a04?_0x274a04[_0x781bb6]:_0x42a0aa;Cesium[_0x5ab8bc(0xb5)](_0x35d237,_0x2168d6,_0x910084,_0x910084+_0x8897dc);}}}function createTexBatchIdAttribute(_0x344722,_0x577b8b,_0x321d1d){const _0x24c327=_0x57e1;var _0x359ae7=_0x344722['vertexAttributes'],_0x823bb3=_0x344722[_0x24c327(0x8b)],_0x1e31bb=_0x359ae7[_0x24c327(0xe1)];_0x823bb3[_0x24c327(0xbb)+_0x321d1d]=_0x1e31bb,_0x359ae7[_0x24c327(0xad)]({'index':_0x1e31bb,'typedArray':_0x577b8b,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0x24c327(0x92)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':0x0});}function parseTexturePackage$1(_0x22d81f,_0x289083,_0x5c0c44,_0x3b7731,_0x58df35,_0x5a4197,_0x4bdd6c,_0xb172ec){const _0x48af7a=_0x57e1;let _0x588508=_0x5c0c44,_0x171c18=_0x289083['getUint32'](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x50c401=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x572e77={};for(let _0x3685d3=0x0;_0x3685d3<_0x50c401;_0x3685d3++){let _0x5704da=parseString$1(_0x22d81f,_0x289083,_0x588508),_0x546205=_0x5704da[_0x48af7a(0xde)];_0x588508=_0x5704da[_0x48af7a(0xe0)];let _0x34ed8e=_0x588508%0x4;_0x34ed8e!==0x0&&(_0x588508+=0x4-_0x34ed8e);let _0x5eb252=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0xd340e4=_0x289083[_0x48af7a(0xcd)](_0x588508,!![]);_0x588508+=Uint8Array['BYTES_PER_ELEMENT'];let _0x54f5ee=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array['BYTES_PER_ELEMENT'];let _0x89ac18=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array['BYTES_PER_ELEMENT'];let _0x18dfd8=_0x289083['getUint32'](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x3cad50=_0x289083['getUint32'](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x1e3db2=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x320a22;_0xb172ec&&(_0x320a22=new Uint8Array(_0x22d81f,_0x588508,_0x3cad50),_0x588508+=_0x3cad50);let _0x3589f6=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];for(let _0x2b95cd=0x0;_0x2b95cd<_0x3589f6;_0x2b95cd++){let _0x35c343=parseString$1(_0x22d81f,_0x289083,_0x588508),_0x1872f5=_0x35c343['string'];_0x588508=_0x35c343['bytesOffset'],_0x4bdd6c[_0x1872f5]=_0x546205;}let _0x3d7aed=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x8b3d30=[];for(let _0x38e1a6=0x0;_0x38e1a6<_0x3d7aed;_0x38e1a6++){let _0x36dca5=parseString$1(_0x22d81f,_0x289083,_0x588508);_0x588508=_0x36dca5[_0x48af7a(0xe0)],_0x8b3d30[_0x48af7a(0xad)](_0x36dca5[_0x48af7a(0xde)]);}let _0x27fc04=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x3b6144=[],_0x3dcb81=undefined,_0x3cdfb6=_0x546205;if(_0xb172ec)_0x3dcb81=_0x5a4197[_0x546205]={};else {let _0x1d74af=_0x4bdd6c[_0x546205];_0x3cdfb6=_0x1d74af;while(_0x1d74af){_0x3cdfb6=_0x1d74af,_0x1d74af=_0x4bdd6c[_0x1d74af];}_0x3cdfb6&&(_0x3dcb81=_0x5a4197[_0x3cdfb6]);}let _0x1bb980=0x0;for(let _0x280a0e=0x0;_0x280a0e<_0x27fc04;_0x280a0e++){let _0x2c4d8e=parseString$1(_0x22d81f,_0x289083,_0x588508),_0x53ff41=_0x2c4d8e[_0x48af7a(0xde)];_0x588508=_0x2c4d8e[_0x48af7a(0xe0)];if(_0xb172ec){let _0x147ea5=_0x53ff41['split']('_')[0x0];!_0x3dcb81[_0x147ea5]?_0x3dcb81[_0x147ea5]=_0x280a0e-_0x1bb980:_0x1bb980++;}let _0x188a5d=_0x289083['getUint32'](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x240b9c=_0x289083['getUint32'](_0x588508,!![]);_0x588508+=Uint32Array['BYTES_PER_ELEMENT'];let _0x98ba68=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x1c8c23=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x394162=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x5a3cd4=[];for(let _0x3d6f39=0x0;_0x3d6f39<_0x394162;_0x3d6f39++){let _0x3ac588=parseString$1(_0x22d81f,_0x289083,_0x588508),_0x5cf7ab=_0x3ac588['string'];_0x588508=_0x3ac588[_0x48af7a(0xe0)];let _0x3fbff7=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x5a91a2=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)];let _0x45e74d=_0x289083[_0x48af7a(0xaa)](_0x588508,!![]);_0x588508+=Uint32Array[_0x48af7a(0x9e)],_0x5a3cd4[_0x48af7a(0xad)]({'geoName':_0x5cf7ab,'offset':_0x3fbff7,'count':_0x5a91a2,'texUnitIndex':_0x45e74d});}_0x3b6144[_0x48af7a(0xad)]({'subName':_0x53ff41,'offsetX':_0x188a5d,'offsetY':_0x240b9c,'width':_0x98ba68,'height':_0x1c8c23,'subVertexOffsetArr':_0x5a3cd4});}createTextureBatch(_0x3dcb81,_0x58df35,_0x3b6144,_0x572e77),_0x3b7731[_0x546205]={'id':_0x546205,'rootTextureName':_0x3cdfb6,'width':_0x54f5ee,'height':_0x89ac18,'compressType':_0x18dfd8,'size':_0x3cad50,'format':_0x1e3db2,'textureData':_0x320a22,'subTexInfos':_0x3b6144,'requestNames':_0x8b3d30};}for(let _0x4035e7 in _0x572e77){if(_0x572e77[_0x48af7a(0xd3)](_0x4035e7)){let _0x13a42a=_0x58df35[_0x4035e7][_0x48af7a(0x87)],_0x57baff=_0x572e77[_0x4035e7];for(let _0x1778ce in _0x57baff){if(_0x57baff[_0x48af7a(0xd3)](_0x1778ce)){let _0x4caf35=_0x57baff[_0x1778ce];createTexBatchIdAttribute(_0x13a42a,_0x4caf35,_0x1778ce);}}}}return _0x588508;}function parseMaterial$1(_0x4e0c71,_0x194444,_0x4c52ff,_0x3e1295){const _0x59c6db=_0x57e1;let _0x2b574c=_0x194444[_0x59c6db(0xaa)](_0x4c52ff,!![]);_0x4c52ff+=Uint32Array[_0x59c6db(0x9e)];let _0x464a3b=new Uint8Array(_0x4e0c71,_0x4c52ff,_0x2b574c),_0x4708bb=Cesium[_0x59c6db(0xb0)](_0x464a3b);return _0x4c52ff+=_0x2b574c,_0x3e1295[_0x59c6db(0x9b)]=JSON[_0x59c6db(0x99)](_0x4708bb),_0x4c52ff;}let colorScratch$1=new Cesium[(_0x1018c7(0xc8))](),LEFT_16$1=0x10000;function parsePickInfo$1(_0x30b8e4,_0x1f0e1b,_0x24180c,_0x55e7e9,_0x5efb27,_0x2c0879){const _0x55b3c=_0x1018c7;if((_0x55e7e9&0x1)===0x1){let _0x56f05c=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)];let _0x2ea2f4=_0x1f0e1b['getUint32'](_0x24180c,!![]);_0x24180c+=Uint32Array['BYTES_PER_ELEMENT'];for(let _0x53c8ec=0x0;_0x53c8ec<_0x2ea2f4;_0x53c8ec++){let _0x482e21=parseString$1(_0x30b8e4,_0x1f0e1b,_0x24180c),_0x3ad0f7=_0x482e21[_0x55b3c(0xde)];_0x24180c=_0x482e21[_0x55b3c(0xe0)];let _0x4f5ce5=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)];let _0x519df0={};_0x5efb27[_0x3ad0f7][_0x55b3c(0x96)]=_0x519df0;let _0x548d80=_0x5efb27[_0x3ad0f7][_0x55b3c(0x87)][_0x55b3c(0x8a)];if(_0x548d80==-0x1){let _0x8950c6=new Float32Array(_0x5efb27[_0x3ad0f7][_0x55b3c(0x87)][_0x55b3c(0xb4)]);for(let _0x31ca06=0x0;_0x31ca06<_0x4f5ce5;_0x31ca06++){let _0x4fbe25=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)];let _0x576045=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)];let _0x562e65=[];for(let _0x5c5e64=0x0;_0x5c5e64<_0x576045;_0x5c5e64++){let _0x191bf0=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)];let _0xda3459=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)],Cesium[_0x55b3c(0xb5)](_0x8950c6,_0x31ca06,_0x191bf0,_0x191bf0+_0xda3459),_0x562e65['push']({'vertexColorOffset':_0x191bf0,'vertexColorCount':_0xda3459,'batchId':_0x31ca06});}_0x519df0[_0x4fbe25]=_0x562e65;}createBatchIdAttribute$2(_0x5efb27[_0x3ad0f7]['vertexPackage'],_0x8950c6,undefined);}else {let _0x119d84=_0x5efb27[_0x3ad0f7]['vertexPackage'][_0x55b3c(0x91)],_0x11350b=_0x5efb27[_0x3ad0f7][_0x55b3c(0x87)]['instanceBuffer'],_0x128e68=_0x5efb27[_0x3ad0f7][_0x55b3c(0x87)][_0x55b3c(0xc1)],_0x30a6e1=new Float32Array(_0x119d84),_0x333473=[];for(let _0x2b1026=0x0;_0x2b1026<_0x4f5ce5;_0x2b1026++){let _0x396403=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x333473['push'](_0x396403),_0x24180c+=Uint32Array[_0x55b3c(0x9e)];let _0x511a8e=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)];for(let _0xdddab=0x0;_0xdddab<_0x511a8e;_0xdddab++){let _0x154ed0=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)];if(_0x2c0879==0x2){let _0x36570e=_0x1f0e1b[_0x55b3c(0xaa)](_0x24180c,!![]);_0x24180c+=Uint32Array[_0x55b3c(0x9e)];}}}let _0x3b88dd=_0x128e68===0x11?0x10:0x1c;_0x3b88dd*=Float32Array[_0x55b3c(0x9e)];for(let _0x5cc877=0x0;_0x5cc877<_0x119d84;_0x5cc877++){_0x30a6e1[_0x5cc877]=_0x5cc877;let _0x558830=_0x5cc877*_0x128e68*Float32Array[_0x55b3c(0x9e)]+_0x3b88dd;Cesium['Color']['unpack'](_0x11350b,_0x558830,colorScratch$1);let _0x418442=_0x2c0879===0x2?_0x333473[_0x5cc877]:colorScratch$1['red']+colorScratch$1[_0x55b3c(0xe2)]*0x100+colorScratch$1[_0x55b3c(0x9a)]*LEFT_16$1;_0x519df0[_0x418442]===undefined&&(_0x519df0[_0x418442]={'vertexColorCount':0x1,'instanceIds':[],'vertexColorOffset':_0x5cc877}),_0x519df0[_0x418442][_0x55b3c(0xbf)][_0x55b3c(0xad)](_0x5cc877);}createBatchIdAttribute$2(_0x5efb27[_0x3ad0f7][_0x55b3c(0x87)],_0x30a6e1,0x1);}}}return _0x24180c;}function createBatchIdAttribute$2(_0x4f59a6,_0x5099d5,_0x41b089){const _0xd8de6a=_0x1018c7;let _0x2fe180=_0x4f59a6['vertexAttributes'],_0x1eb3b6=_0x4f59a6[_0xd8de6a(0x8b)],_0x3993dd=_0x2fe180[_0xd8de6a(0xe1)],_0x5c6d2f=_0x41b089===0x1?_0xd8de6a(0xaf):_0xd8de6a(0xa7);_0x1eb3b6[_0x5c6d2f]=_0x3993dd,_0x2fe180['push']({'index':_0x3993dd,'typedArray':_0x5099d5,'componentsPerAttribute':0x1,'componentDatatype':Cesium[_0xd8de6a(0x92)]['FLOAT'],'offsetInBytes':0x0,'strideInBytes':0x0,'instanceDivisor':_0x41b089});}function removeUnusedStringTileName(_0x138fd3){const _0x7ce6f6=_0x1018c7;let _0x3109ae=_0x138fd3[_0x7ce6f6(0xd5)](_0x7ce6f6(0x8d));if(_0x3109ae===-0x1)return _0x138fd3;let _0x42ccf2=_0x138fd3[_0x7ce6f6(0xc4)](_0x3109ae,_0x138fd3[_0x7ce6f6(0xe1)]);return _0x138fd3[_0x7ce6f6(0xcf)](_0x42ccf2,'');}S3MBlockParser[_0x1018c7(0x8c)]=function(_0x11c22b,_0x1b7207){const _0x1541d8=_0x1018c7;let _0x738ff5=_0x1b7207[_0x1541d8(0x88)],_0x3932a2=_0x1b7207[_0x1541d8(0xd8)],_0x5edcff=0x0,_0x4b2626=new DataView(_0x11c22b),_0xa1231=_0x4b2626[_0x1541d8(0xa1)](_0x5edcff,!![]);_0x5edcff+=Float32Array[_0x1541d8(0x9e)];let _0x3a6262=_0x4b2626[_0x1541d8(0xaa)](_0x5edcff,!![]);_0x5edcff+=Uint32Array['BYTES_PER_ELEMENT'];let _0x108012={};while(_0x3a6262--){_0x4b2626=new DataView(_0x11c22b);let _0x166a36=parseString$1(_0x11c22b,_0x4b2626,_0x5edcff),_0x562f8c=_0x166a36['string'],_0x59ca0c=_0x108012[_0x562f8c]={'groupNode':undefined,'geoPackage':{},'texturePackage':{},'materials':{},'rootBatchIdMap':_0x738ff5,'ancestorMap':_0x3932a2};_0x5edcff=_0x166a36['bytesOffset'];let _0x38aa54=_0x4b2626[_0x1541d8(0xaa)](_0x5edcff,!![]);_0x5edcff+=Uint32Array[_0x1541d8(0x9e)];let _0x312ce7=[];for(let _0x4f0346=0x0;_0x4f0346<_0x38aa54;_0x4f0346++){let _0x42b36e={},_0x3e789d=_0x4b2626[_0x1541d8(0xa1)](_0x5edcff,!![]);_0x5edcff+=Float32Array[_0x1541d8(0x9e)];let _0x1e7344=_0x4b2626['getUint16'](_0x5edcff,!![]);_0x5edcff+=Uint16Array[_0x1541d8(0x9e)],_0x42b36e[_0x1541d8(0xa3)]=_0x1e7344,_0x42b36e['rangeList']=_0x3e789d;let _0x24c4a7={};_0x24c4a7['x']=_0x4b2626[_0x1541d8(0xd6)](_0x5edcff,!![]),_0x5edcff+=Float64Array['BYTES_PER_ELEMENT'],_0x24c4a7['y']=_0x4b2626['getFloat64'](_0x5edcff,!![]),_0x5edcff+=Float64Array['BYTES_PER_ELEMENT'],_0x24c4a7['z']=_0x4b2626[_0x1541d8(0xd6)](_0x5edcff,!![]),_0x5edcff+=Float64Array[_0x1541d8(0x9e)];let _0xe12488=_0x4b2626['getFloat64'](_0x5edcff,!![]);_0x5edcff+=Float64Array[_0x1541d8(0x9e)],_0x42b36e[_0x1541d8(0x89)]={'center':_0x24c4a7,'radius':_0xe12488};let _0x32d39b=parseString$1(_0x11c22b,_0x4b2626,_0x5edcff),_0x2cd501=_0x32d39b[_0x1541d8(0xde)];_0x5edcff=_0x32d39b[_0x1541d8(0xe0)],_0x2cd501=_0x2cd501['replace'](/(\.s3mblock)|(\.s3mbz)|(\.s3mb)/gi,''),_0x2cd501=removeUnusedStringTileName(_0x2cd501),_0x42b36e[_0x1541d8(0x83)]=_0x2cd501,_0x312ce7[_0x1541d8(0xad)](_0x42b36e);}let _0x1c3b8b=_0x4b2626[_0x1541d8(0xa1)](_0x5edcff,!![]);_0x5edcff+=Float32Array[_0x1541d8(0x9e)];let _0x5bf700=_0x4b2626['getUint32'](_0x5edcff,!![]);_0x5edcff+=Uint32Array[_0x1541d8(0x9e)];let _0x564397=_0x4b2626['getUint32'](_0x5edcff,!![]);_0x5edcff+=Uint32Array[_0x1541d8(0x9e)];let _0x251237=new Uint8Array(_0x11c22b,_0x5edcff,_0x564397),_0x218219=_0x5edcff+_0x564397,_0x43410d=_0x1f354f[_0x1541d8(0x8e)](_0x251237)[_0x1541d8(0xac)];_0x4b2626=new DataView(_0x43410d),_0x5edcff=0x0;let _0x2f3474=_0x4b2626[_0x1541d8(0xaa)](_0x5edcff,!![]);_0x5edcff+=Uint32Array['BYTES_PER_ELEMENT'],_0x5edcff=parseGroupNode$1(_0x43410d,_0x4b2626,_0x5edcff,_0x59ca0c),_0x5edcff=parseSkeleton$1(_0x43410d,_0x4b2626,_0x5edcff,_0x59ca0c[_0x1541d8(0xbc)]),_0x5edcff=parseTexturePackage$1(_0x43410d,_0x4b2626,_0x5edcff,_0x59ca0c[_0x1541d8(0xe5)],_0x59ca0c[_0x1541d8(0xbc)],_0x738ff5,_0x3932a2,_0x1b7207[_0x1541d8(0xc0)]),_0x5edcff=parseMaterial$1(_0x43410d,_0x4b2626,_0x5edcff,_0x59ca0c),_0x5edcff=parsePickInfo$1(_0x43410d,_0x4b2626,_0x5edcff,_0x2f3474,_0x59ca0c[_0x1541d8(0xbc)],_0x1c3b8b),_0x5edcff=_0x218219;}return _0x108012;};

    const _0x56f0=['TEXTURE_2D','init','UNPACK_PREMULTIPLY_ALPHA_WEBGL','yOffset','121mGetdC','PixelFormat','TEXTURE_MAG_FILTER','length','bindTexture','ready','xOffset','deleteTexture','_width','texImage2D','CLAMP_TO_EDGE','defaultValue','1055900biHKIB','textureId','488302qWsUWL','12779rgtcXg','TextureWrap','_target','UNPACK_FLIP_Y_WEBGL','update','refCount','isTexBlock','texParameteri','compressType','layerId','TEXTURE0','createTexture','TEXTURE_WRAP_T','activeTexture','destroy','pixelFormat','UNSIGNED_BYTE','max','height','TEXTURE_MIN_FILTER','arrayBufferView','context','pixelStorei','11321PjFcWj','TEXTURE_MAX_ANISOTROPY_EXT','RGBA','wrapT','prototype','compressedTextureSizeInBytes','isDestroyed','_gl','internalFormat','rootName','byteLength','compressedTexImage2D','renderable','2709dpiaeT','_textureFilterAnisotropic','copyFrom','wrapS','LINEAR','compressedTexSubImage2D','272791QiYcvJ','17sAuRDo','396469TjYOFm','_texture','contextId','byteOffset','width'];const _0x5b1518=_0x5ebb;(function(_0x19475c,_0x16025e){const _0x187002=_0x5ebb;while(!![]){try{const _0x16f752=-parseInt(_0x187002(0x1a5))*parseInt(_0x187002(0x1b6))+parseInt(_0x187002(0x1ab))+-parseInt(_0x187002(0x1ad))+-parseInt(_0x187002(0x1c4))+-parseInt(_0x187002(0x1c5))+parseInt(_0x187002(0x198))*parseInt(_0x187002(0x1ac))+parseInt(_0x187002(0x1c2));if(_0x16f752===_0x16025e)break;else _0x19475c['push'](_0x19475c['shift']());}catch(_0x2037d6){_0x19475c['push'](_0x19475c['shift']());}}}(_0x56f0,0x48381));const NOCOMPRESSED_RGBA=0x1111,NOCOMPRESSED_LA=0x190a;function _0x5ebb(_0x55298e,_0x542865){_0x55298e=_0x55298e-0x188;let _0x56f0e2=_0x56f0[_0x55298e];return _0x56f0e2;}function DDSTexture(_0x26a48e,_0xf265bc,_0x439b26){const _0x17bbf5=_0x5ebb;let _0x426939=_0x26a48e[_0x17bbf5(0x19f)];this[_0x17bbf5(0x1af)]=_0x26a48e['id'],this[_0x17bbf5(0x1c3)]=_0xf265bc,this[_0x17bbf5(0x18a)]=_0x439b26[_0x17bbf5(0x18a)],this['rootName']=_0x439b26[_0x17bbf5(0x1a1)],this[_0x17bbf5(0x196)]=_0x26a48e,this['width']=_0x439b26[_0x17bbf5(0x1b1)],this[_0x17bbf5(0x193)]=_0x439b26[_0x17bbf5(0x193)],this[_0x17bbf5(0x189)]=_0x439b26['compressType'],this[_0x17bbf5(0x1a0)]=_0x439b26[_0x17bbf5(0x1a0)],this[_0x17bbf5(0x190)]=_0x439b26['pixelFormat'],this[_0x17bbf5(0x195)]=_0x439b26[_0x17bbf5(0x195)],this[_0x17bbf5(0x1a8)]=Cesium[_0x17bbf5(0x1c1)](_0x439b26[_0x17bbf5(0x1a8)],Cesium[_0x17bbf5(0x1c6)][_0x17bbf5(0x1c0)]),this[_0x17bbf5(0x19b)]=Cesium[_0x17bbf5(0x1c1)](_0x439b26[_0x17bbf5(0x19b)],Cesium[_0x17bbf5(0x1c6)][_0x17bbf5(0x1c0)]),this[_0x17bbf5(0x1c7)]=_0x426939['TEXTURE_2D'],this[_0x17bbf5(0x1ae)]=undefined,this[_0x17bbf5(0x1ca)]=0x1,this[_0x17bbf5(0x1bb)]=!_0x439b26['isTexBlock'],this['renderable']=!_0x439b26[_0x17bbf5(0x1cb)],this['isTexBlock']=_0x439b26[_0x17bbf5(0x1cb)],this['arrayBufferView']&&this['init']();}DDSTexture[_0x5b1518(0x19c)][_0x5b1518(0x1b3)]=function(){const _0x1b20dd=_0x5b1518;let _0x390810=this['context']['_gl'];!this[_0x1b20dd(0x1ae)]&&(this[_0x1b20dd(0x1ae)]=_0x390810[_0x1b20dd(0x18c)]());_0x390810[_0x1b20dd(0x1ba)](_0x390810['TEXTURE_2D'],this[_0x1b20dd(0x1ae)]);let _0x281e40=this[_0x1b20dd(0x1a0)];(_0x281e40===NOCOMPRESSED_LA||_0x281e40===NOCOMPRESSED_RGBA)&&_0x390810[_0x1b20dd(0x197)](_0x390810[_0x1b20dd(0x1c8)],!![]);let _0x559e51=0x0;if(this[_0x1b20dd(0x195)]){let _0x2070ac=0x0,_0x1f5399=this[_0x1b20dd(0x1b1)],_0x56b3e0=this['height'],_0x58f946=validateMipmap(this['arrayBufferView'],_0x281e40,_0x1f5399,_0x56b3e0);do{let _0x4a1be0=Cesium['PixelFormat'][_0x1b20dd(0x19d)](_0x281e40,_0x1f5399,_0x56b3e0),_0x248578=new Uint8Array(this[_0x1b20dd(0x195)]['buffer'],this[_0x1b20dd(0x195)][_0x1b20dd(0x1b0)]+_0x2070ac,_0x4a1be0);_0x281e40===NOCOMPRESSED_RGBA?_0x390810[_0x1b20dd(0x1bf)](_0x390810[_0x1b20dd(0x1b2)],_0x559e51++,_0x390810[_0x1b20dd(0x19a)],_0x1f5399,_0x56b3e0,0x0,_0x390810['RGBA'],_0x390810[_0x1b20dd(0x191)],_0x248578):_0x390810[_0x1b20dd(0x1a3)](_0x390810[_0x1b20dd(0x1b2)],_0x559e51++,_0x281e40,_0x1f5399,_0x56b3e0,0x0,_0x248578),_0x1f5399=Math['max'](_0x1f5399>>0x1,0x1),_0x56b3e0=Math[_0x1b20dd(0x192)](_0x56b3e0>>0x1,0x1),_0x2070ac+=_0x4a1be0;}while(_0x2070ac<this[_0x1b20dd(0x195)][_0x1b20dd(0x1a2)]&&_0x58f946);}else {let _0x2fc834=Cesium[_0x1b20dd(0x1b7)][_0x1b20dd(0x19d)](_0x281e40,this['width'],this['height']);_0x281e40===NOCOMPRESSED_RGBA?_0x390810['texImage2D'](_0x390810[_0x1b20dd(0x1b2)],0x0,_0x390810[_0x1b20dd(0x19a)],this[_0x1b20dd(0x1be)],this['height'],0x0,_0x390810[_0x1b20dd(0x19a)],_0x390810[_0x1b20dd(0x191)],new Uint8Array(this[_0x1b20dd(0x1b1)]*this[_0x1b20dd(0x193)]*0x4)):_0x390810[_0x1b20dd(0x1a3)](_0x390810[_0x1b20dd(0x1b2)],0x0,_0x281e40,this[_0x1b20dd(0x1b1)],this[_0x1b20dd(0x193)],0x0,new Uint8Array(_0x2fc834));}_0x559e51>0x1?(_0x390810['texParameteri'](_0x390810[_0x1b20dd(0x1b2)],_0x390810[_0x1b20dd(0x1b8)],_0x390810[_0x1b20dd(0x1a9)]),_0x390810[_0x1b20dd(0x188)](_0x390810[_0x1b20dd(0x1b2)],_0x390810['TEXTURE_MIN_FILTER'],_0x390810['LINEAR_MIPMAP_LINEAR'])):(_0x390810[_0x1b20dd(0x188)](_0x390810[_0x1b20dd(0x1b2)],_0x390810[_0x1b20dd(0x1b8)],_0x390810[_0x1b20dd(0x1a9)]),_0x390810[_0x1b20dd(0x188)](_0x390810[_0x1b20dd(0x1b2)],_0x390810[_0x1b20dd(0x194)],_0x390810[_0x1b20dd(0x1a9)])),_0x390810[_0x1b20dd(0x188)](_0x390810[_0x1b20dd(0x1b2)],_0x390810['TEXTURE_WRAP_S'],this[_0x1b20dd(0x1a8)]),_0x390810['texParameteri'](_0x390810[_0x1b20dd(0x1b2)],_0x390810[_0x1b20dd(0x18d)],this[_0x1b20dd(0x19b)]),_0x390810[_0x1b20dd(0x188)](this[_0x1b20dd(0x1c7)],this[_0x1b20dd(0x196)][_0x1b20dd(0x1a6)][_0x1b20dd(0x199)],0x1),_0x390810['bindTexture'](_0x390810[_0x1b20dd(0x1b2)],null),this[_0x1b20dd(0x195)]=undefined,this['ready']=!![];};function validateMipmap(_0x4768d0,_0x3eb1e2,_0x315bd0,_0x4fe84c){const _0x20c549=_0x5b1518;let _0xffc024=_0x4768d0[_0x20c549(0x1b9)],_0x2a703e=_0x315bd0,_0x4a7f03=_0x4fe84c,_0x561d3c=0x0;while(0x1){let _0x21e735=Cesium[_0x20c549(0x1b7)]['compressedTextureSizeInBytes'](_0x3eb1e2,_0x2a703e,_0x4a7f03);_0x561d3c+=_0x21e735,_0x2a703e=_0x2a703e>>0x1,_0x4a7f03=_0x4a7f03>>0x1;if(_0x2a703e===0x0&&_0x4a7f03===0x0)break;_0x2a703e=Math['max'](_0x2a703e,0x1),_0x4a7f03=Math['max'](_0x4a7f03,0x1);}return _0x561d3c===_0xffc024;}DDSTexture[_0x5b1518(0x19c)][_0x5b1518(0x1a7)]=function(_0x2ce90a){const _0x1da7af=_0x5b1518;let _0x5bdf0f=this[_0x1da7af(0x196)][_0x1da7af(0x19f)],_0x297f52=this[_0x1da7af(0x1c7)];_0x5bdf0f[_0x1da7af(0x18e)](_0x5bdf0f[_0x1da7af(0x18b)]),_0x5bdf0f['bindTexture'](_0x297f52,this[_0x1da7af(0x1ae)]);let _0x52dcef=_0x2ce90a[_0x1da7af(0x1bc)],_0x470e6d=_0x2ce90a[_0x1da7af(0x1b5)],_0x4d156e=_0x2ce90a['width'],_0x5aeb13=_0x2ce90a[_0x1da7af(0x193)],_0x17aac9=_0x2ce90a[_0x1da7af(0x195)],_0x51149d=this[_0x1da7af(0x1a0)],_0x25ffdd=_0x5bdf0f['UNSIGNED_BYTE'];_0x5bdf0f['pixelStorei'](_0x5bdf0f[_0x1da7af(0x1b4)],![]),_0x5bdf0f['pixelStorei'](_0x5bdf0f[_0x1da7af(0x1c8)],![]),_0x5bdf0f[_0x1da7af(0x1aa)](_0x297f52,0x0,_0x52dcef,_0x470e6d,_0x4d156e,_0x5aeb13,_0x51149d,_0x17aac9),_0x5bdf0f[_0x1da7af(0x1ba)](_0x297f52,null);},DDSTexture[_0x5b1518(0x19c)][_0x5b1518(0x1c9)]=function(_0x24dda7){const _0x3d81ed=_0x5b1518;this[_0x3d81ed(0x196)]=_0x24dda7[_0x3d81ed(0x196)],this[_0x3d81ed(0x1af)]=_0x24dda7[_0x3d81ed(0x196)]['id'],this[_0x3d81ed(0x18a)]=_0x24dda7['layerId'],this[_0x3d81ed(0x1a1)]=_0x24dda7['rootName'],this[_0x3d81ed(0x1c3)]=_0x24dda7[_0x3d81ed(0x1c3)],this[_0x3d81ed(0x1b1)]=_0x24dda7[_0x3d81ed(0x1b1)],this['height']=_0x24dda7[_0x3d81ed(0x193)],this[_0x3d81ed(0x1a0)]=_0x24dda7['internalFormat'],this[_0x3d81ed(0x195)]=_0x24dda7[_0x3d81ed(0x195)],this['refCount']=0x1,this['ready']=![],this[_0x3d81ed(0x1a4)]=![],defined(this[_0x3d81ed(0x195)])&&this[_0x3d81ed(0x1b3)]();},DDSTexture[_0x5b1518(0x19c)][_0x5b1518(0x19e)]=function(){return ![];},DDSTexture[_0x5b1518(0x19c)][_0x5b1518(0x18f)]=function(){const _0x5987f4=_0x5b1518;let _0x32d625=this[_0x5987f4(0x196)][_0x5987f4(0x19f)];_0x32d625[_0x5987f4(0x1bd)](this['_texture']),this[_0x5987f4(0x1ae)]=null,this['id']=0x0,Cesium['destroyObject'](this);};

    const _0x2757=['texMatrix','3LgioOi','clone','Color','ambientColor','155921XrkzMx','215222MHBSIp','619522jljugg','IDENTITY','alphaMode','2384089PIavMd','2213nvbKnf','destroyObject','Matrix4','destroy','diffuseColor','213418BbrsoR','specularColor','shininess','prototype','isDestroyed','714637BOnUTI','bTransparentSorting','textures','863kHMwQh'];const _0x218335=_0x1843;(function(_0x293679,_0x439c2f){const _0x244cb8=_0x1843;while(!![]){try{const _0x409639=parseInt(_0x244cb8(0xba))+-parseInt(_0x244cb8(0xc5))*-parseInt(_0x244cb8(0xb6))+-parseInt(_0x244cb8(0xca))+-parseInt(_0x244cb8(0xbb))+-parseInt(_0x244cb8(0xcd))*parseInt(_0x244cb8(0xc0))+parseInt(_0x244cb8(0xbc))+parseInt(_0x244cb8(0xbf));if(_0x409639===_0x439c2f)break;else _0x293679['push'](_0x293679['shift']());}catch(_0x40213e){_0x293679['push'](_0x293679['shift']());}}}(_0x2757,0xea66c));function MaterialPass(){const _0x3ed5b0=_0x1843;this[_0x3ed5b0(0xb9)]=new Cesium[(_0x3ed5b0(0xb8))](),this[_0x3ed5b0(0xc4)]=new Cesium[(_0x3ed5b0(0xb8))](),this['specularColor']=new Cesium[(_0x3ed5b0(0xb8))](0x0,0x0,0x0,0x0),this[_0x3ed5b0(0xc7)]=0x32,this[_0x3ed5b0(0xcb)]=![],this[_0x3ed5b0(0xbe)]=undefined,this[_0x3ed5b0(0xb5)]=Cesium['Matrix4'][_0x3ed5b0(0xb7)](Cesium[_0x3ed5b0(0xc2)][_0x3ed5b0(0xbd)],new Cesium[(_0x3ed5b0(0xc2))]()),this[_0x3ed5b0(0xcc)]=[];}MaterialPass[_0x218335(0xc8)][_0x218335(0xc9)]=function(){return ![];},MaterialPass[_0x218335(0xc8)][_0x218335(0xc3)]=function(){const _0x4b7abc=_0x218335;let _0x27b5e5=this[_0x4b7abc(0xcc)]['length'];for(let _0x418db6=0x0;_0x418db6<_0x27b5e5;_0x418db6++){let _0xa4b1ac=this[_0x4b7abc(0xcc)][_0x418db6];_0xa4b1ac['destroy']();}return this[_0x4b7abc(0xcc)]['length']=0x0,this[_0x4b7abc(0xb9)]=undefined,this['diffuseColor']=undefined,this[_0x4b7abc(0xc6)]=undefined,Cesium[_0x4b7abc(0xc1)](this);};function _0x1843(_0x138e28,_0x2e56ec){_0x138e28=_0x138e28-0xb5;let _0x275744=_0x2757[_0x138e28];return _0x275744;}

    var _0x211e=['199451LheOUa','230966SRPzbf','281469gSNDrm','47359yXZvCs','267131Vsgwuy','1hIrcSb','5955iRgJWv','2042XxAAAJ','29fxokqJ'];function _0x25ed(_0x1aaf01,_0x3a1225){_0x1aaf01=_0x1aaf01-0x183;var _0x211e05=_0x211e[_0x1aaf01];return _0x211e05;}(function(_0x4cbdf0,_0xde3678){var _0x190416=_0x25ed;while(!![]){try{var _0x107ce9=parseInt(_0x190416(0x183))+parseInt(_0x190416(0x187))+parseInt(_0x190416(0x184))+-parseInt(_0x190416(0x18a))+parseInt(_0x190416(0x189))*parseInt(_0x190416(0x188))+parseInt(_0x190416(0x186))*parseInt(_0x190416(0x185))+-parseInt(_0x190416(0x18b));if(_0x107ce9===_0xde3678)break;else _0x4cbdf0['push'](_0x4cbdf0['shift']());}catch(_0x357a48){_0x4cbdf0['push'](_0x4cbdf0['shift']());}}}(_0x211e,0x3853b));var _0x4b0dcb = '\x0a\x20\x20\x20\x20attribute\x20vec4\x20aPosition;\x0a\x20\x20\x20\x20attribute\x20vec4\x20aColor;\x0a\x20\x20\x20\x20attribute\x20vec3\x20aNormal;\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20attribute\x20vec4\x20aTexCoord0;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoord;\x0a#ifdef\x20COMPUTE_TEXCOORD\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture0Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoordTransform;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix;\x0a#endif\x0a#endif\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20varying\x20float\x20wValue;\x20\x20\x20\x20\x0a#endif\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20uniform\x20mat4\x20uGeoMatrix;\x0a\x20\x20\x20\x20uniform\x20mat4\x20uInverseGeoMatrix;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uFlattenTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uFlattenRect;\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSelectedColor;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20varying\x20vec4\x20vSecondColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vPositionEC;\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_RIGHT8\x20=\x201.0\x20/\x20256.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_RIGHT4\x20=\x201.0\x20/\x2016.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_LEFT4\x20=\x2016.0;\x0a\x20\x20\x20\x20void\x20getTextureMatrixFromZValue(in\x20float\x20nZ,\x20inout\x20float\x20XTran,\x20inout\x20float\x20YTran,\x20inout\x20float\x20scale)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(nZ\x20<=\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel8\x20=\x20floor(nZ\x20*\x20SHIFT_RIGHT8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel16\x20=\x20floor(nDel8\x20*\x20SHIFT_RIGHT8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel20\x20=\x20floor(nDel16\x20*\x20SHIFT_RIGHT4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20YTran\x20=\x20nZ\x20-\x20nDel8\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20XTran\x20=\x20nDel8\x20-\x20nDel16\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nLevel\x20=\x20nDel16\x20-\x20nDel20\x20*\x20SHIFT_LEFT4;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20nLevel);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20float\x20unpackValue(vec4\x20packedValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT16\x20=\x2065536.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20value\x20=\x20packedValue\x20*\x20255.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20value.r\x20*\x20SHIFT_LEFT16\x20+\x20value.g\x20*\x20SHIFT_LEFT8\x20+\x20value.b\x20-\x209000.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20calculateHeight(vec4\x20vertexPos)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20vecPos\x20=\x20uGeoMatrix\x20*\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vecRatio\x20=\x20vec2(uFlattenRect.z\x20-\x20uFlattenRect.x,\x20uFlattenRect.w\x20-\x20uFlattenRect.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vecTexCoord\x20=\x20vec2(vecPos.x\x20-\x20uFlattenRect.x,\x20vecPos.y\x20-\x20uFlattenRect.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vecTexCoord.x\x20=\x20vecTexCoord.x\x20/\x20vecRatio.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vecTexCoord.y\x20=\x20vecTexCoord.y\x20/\x20vecRatio.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vecTexCoord.x\x20>\x201.0\x20||\x20vecTexCoord.x\x20<\x200.0\x20||\x20vecTexCoord.y\x20>\x201.0\x20||\x20vecTexCoord.y\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vertexPos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fHeight\x20=\x20unpackValue(texture2D(uFlattenTexture,\x20vecTexCoord.xy));\x0a\x20\x20\x20\x20\x20\x20\x20\x20fHeight\x20=\x20fHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vecPos.z\x20>\x20fHeight)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vecPos.z\x20=\x20fHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vecPos.w\x20=\x20vecPos.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20uInverseGeoMatrix\x20*\x20vec4(vecPos.xyz,\x201.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifdef\x20TexCoord\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoord.xy\x20=\x20aTexCoord0.xy;\x0a\x20\x20\x20\x20#ifdef\x20COMPUTE_TEXCOORD\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix\x20=\x20vec4(0.0,0.0,1.0,0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoordTransform.x\x20=\x20aTexCoord0.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexCoordTransform.x\x20<\x20-90000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix.z\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20getTextureMatrixFromZValue(floor(vTexCoordTransform.x),\x20vTexMatrix.x,\x20vTexMatrix.y,\x20vTexMatrix.z);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix.w\x20=\x20log2(uTexture0Width\x20*\x20vTexMatrix.z);\x0a\x20\x20\x20\x20#endif\x20\x20\x20\x20\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20vec4\x20vertexPos\x20=\x20aPosition;\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20vertexPos\x20=\x20calculateHeight(vertexPos);\x0a#endif\x0a\x0a\x20\x20\x20\x20#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20\x20\x20\x20\x20wValue\x20=\x20vertexPos.w;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20positionMC\x20=\x20vec4(vertexPos.xyz,\x201.0);\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20aColor;\x0a#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vPositionMC\x20=\x20positionMC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vPositionEC\x20=\x20(czm_modelView\x20*\x20positionMC).xyz;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjection\x20*\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20}\x0a';

    var _0x4865=['68835pwqOgN','2CLcWZz','228833AyLIZe','50639ITztLt','71170ZeKqJf','946054QiMKLH','13CwIfLV','1018509sfpmhK','3vPXWFK','59009ZITuoM'];(function(_0x582dd6,_0x40dffd){var _0x807b5a=_0x1314;while(!![]){try{var _0x5687b7=-parseInt(_0x807b5a(0x1be))*parseInt(_0x807b5a(0x1b6))+parseInt(_0x807b5a(0x1bd))+-parseInt(_0x807b5a(0x1ba))+parseInt(_0x807b5a(0x1bb))+parseInt(_0x807b5a(0x1bc))*-parseInt(_0x807b5a(0x1bf))+parseInt(_0x807b5a(0x1b9))+-parseInt(_0x807b5a(0x1b8))*parseInt(_0x807b5a(0x1b7));if(_0x5687b7===_0x40dffd)break;else _0x582dd6['push'](_0x582dd6['shift']());}catch(_0x363e58){_0x582dd6['push'](_0x582dd6['shift']());}}}(_0x4865,0x7d2e8));function _0x1314(_0x352896,_0x110d13){_0x352896=_0x352896-0x1b6;var _0x4865a1=_0x4865[_0x352896];return _0x4865a1;}var _0x1ccff5 = '\x0a#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a#ifdef\x20GL_EXT_shader_texture_lod\x0a#extension\x20GL_EXT_shader_texture_lod\x20:\x20enable\x0a#endif\x0a\x20\x20\x20\x20uniform\x20vec4\x20uDiffuseColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uAmbientColor;\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoord;\x0a#ifdef\x20COMPUTE_TEXCOORD\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture0Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoordTransform;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix;\x0a#endif\x0a#endif\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a#endif\x0a\x20\x20\x20\x20varying\x20vec4\x20vSecondColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vPositionEC;\x0a\x20\x20\x20\x20void\x20calculateMipLevel(in\x20vec2\x20inTexCoord,\x20in\x20float\x20vecTile,\x20in\x20float\x20fMaxMip,\x20inout\x20float\x20mipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dx\x20=\x20dFdx(inTexCoord\x20*\x20vecTile);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dy\x20=\x20dFdy(inTexCoord\x20*\x20vecTile);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotX\x20=\x20dot(dx,\x20dx);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotY\x20=\x20dot(dy,\x20dy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMax\x20=\x20max(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMin\x20=\x20min(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x20(dMax\x20-\x20dMin)\x20/\x20(dMax\x20+\x20dMin);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offset\x20=\x20clamp(offset,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dMax\x20*\x20(1.0\x20-\x20offset)\x20+\x20dMin\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x200.5\x20*\x20log2(d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x20clamp(mipLevel,\x200.0,\x20fMaxMip\x20-\x201.62);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20void\x20calculateMipLevel(in\x20vec2\x20inTexCoord,\x20in\x20vec2\x20vecTile,\x20in\x20float\x20fMaxMip,\x20inout\x20float\x20mipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dx\x20=\x20dFdx(inTexCoord\x20*\x20vecTile.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dy\x20=\x20dFdy(inTexCoord\x20*\x20vecTile.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotX\x20=\x20dot(dx,\x20dx);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotY\x20=\x20dot(dy,\x20dy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMax\x20=\x20max(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMin\x20=\x20min(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x20(dMax\x20-\x20dMin)\x20/\x20(dMax\x20+\x20dMin);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offset\x20=\x20clamp(offset,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dMax\x20*\x20(1.0\x20-\x20offset)\x20+\x20dMin\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x200.5\x20*\x20log2(d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x20clamp(mipLevel,\x200.0,\x20fMaxMip\x20-\x201.62);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20void\x20calculateTexCoord(in\x20vec3\x20inTexCoord,\x20in\x20float\x20scale,\x20in\x20float\x20XTran,\x20in\x20float\x20YTran,\x20in\x20float\x20fTile,\x20in\x20float\x20mipLevel,\x20inout\x20vec2\x20outTexCoord)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(inTexCoord.z\x20<\x20-9000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord\x20=\x20inTexCoord.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20fTexCoord\x20=\x20fract(inTexCoord.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x201.0\x20*\x20pow(2.0,\x20mipLevel)\x20/\x20fTile;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fTexCoord\x20=\x20clamp(fTexCoord,\x20offset,\x201.0\x20-\x20offset);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord.x\x20=\x20(fTexCoord.x\x20+\x20XTran)\x20*\x20scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord.y\x20=\x20(fTexCoord.y\x20+\x20YTran)\x20*\x20scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20getTexColorForS3M(sampler2D\x20curTexture,\x20vec3\x20oriTexCoord,\x20float\x20texTileWidth,\x20float\x20fMaxMipLev,\x20float\x20fTexCoordScale,\x20vec2\x20vecTexCoordTranslate)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20mipLevel\x20=\x200.0;\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateMipLevel(oriTexCoord.xy,\x20texTileWidth,\x20fMaxMipLev,\x20mipLevel);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20realTexCoord;\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateTexCoord(oriTexCoord,\x20fTexCoordScale,\x20vecTexCoordTranslate.x,\x20vecTexCoordTranslate.y,\x20texTileWidth,\x20mipLevel,\x20realTexCoord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(oriTexCoord.z\x20<\x20-9000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2D(curTexture,\x20realTexCoord.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ifdef\x20GL_EXT_shader_texture_lod\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2DLodEXT(curTexture,\x20realTexCoord.xy,\x20mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2D(curTexture,\x20realTexCoord.xy,\x20mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20color;\x0a\x20\x20\x20\x20}\x0a#ifdef\x20COMPUTE_TEXCOORD\x0a\x20\x20\x20\x20vec4\x20getTextureColor()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexMatrix.z\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texTileWidth0\x20=\x20vTexMatrix.z\x20*\x20uTexture0Width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20realTexCoord\x20=\x20vec3(vTexCoord.xy,\x20vTexCoordTransform.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20FColor\x20=\x20getTexColorForS3M(uTexture,\x20realTexCoord,\x20texTileWidth0,\x20vTexMatrix.w,\x20vTexMatrix.z,\x20vTexMatrix.xy);\x0a\x20\x20\x20\x20#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texTileWidth1\x20=\x20vTexMatrix2.z\x20*\x20uTexture1Width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20realTexCoord\x20=\x20vec3(vTexCoord.zw,\x20vTexCoordTransform.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20SColor\x20=\x20getTexColorForS3M(uTexture2,\x20realTexCoord,\x20texTileWidth1,\x20vTexMatrix2.w,\x20vTexMatrix2.z,\x20vTexMatrix2.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.r\x20=\x20clamp(SColor.r,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.g\x20=\x20clamp(SColor.g,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.b\x20=\x20clamp(SColor.b,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20FColor\x20*\x20SColor;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20FColor;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20uniform\x20float\x20uClipMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uClipPlanes[6];\x0a\x20\x20\x20\x20float\x20getClipDistance(vec3\x20pos,\x20vec3\x20planeNormal,\x20float\x20disToOrigin)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20dot(planeNormal,\x20pos)\x20+\x20disToOrigin;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAllPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20#ifdef\x20CLIPPLANE\x0a\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[0].xyz,\x20uClipPlanes[0].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if\x20(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAnyPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if((distance\x20+\x20fBorderWidth)\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20clipAnythingButLine(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20clip(vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(vertex.x));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(vertex.y));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x201.0;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20clipResult\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x201.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAnyPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x202.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAllPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x203.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipAnythingButLine(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(clipResult\x20<\x20-0.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(clipResult\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uHypsometricTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uMinMaxValue;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uOpacityIntervalFillMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uHypLineColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uNoValueColor;\x0a\x20\x20\x20\x20varying\x20float\x20wValue;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20computeMixCon(float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distanceToContour;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20interval\x20=\x20uOpacityIntervalFillMode.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(abs(maxVisibleValue\x20-\x20minVisibleValue)\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(fValue\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20mod(fValue\x20-\x200.0002,\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20t\x20=\x20floor(fValue\x20/\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20abs(fValue\x20-\x20(t\x20*\x20interval)\x20-\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20abs(fValue\x20-\x20maxVisibleValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(fValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(fValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dF\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20distanceToContour\x20<\x20dF\x20?\x201.0\x20:\x200.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20computeContourMapColor(float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20floorValue\x20=\x20uMinMaxValue.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20ceilValue\x20=\x20uMinMaxValue.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20threshold\x20=\x20abs(ceilValue\x20-\x20floorValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20contourRate\x20=\x20(fValue\x20-\x20floorValue)\x20/\x20threshold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20finalCoord\x20=\x20clamp(contourRate,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20count\x20=\x20floor(finalCoord\x20*\x2016.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20y\x20=\x20(count*2.0\x20+\x201.0)/32.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20x\x20=\x20fract(finalCoord*16.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(y\x20>\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20contourCoord\x20=\x20vec2(x,\x20y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20texture2D(uHypsometricTexture,\x20contourCoord);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20getContourMapColor(vec4\x20oriColor,\x20float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20contourMapColor\x20=\x20vec4(0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20finalOpacity\x20=\x20uOpacityIntervalFillMode.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fillMode\x20=\x20uOpacityIntervalFillMode.z;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(fValue\x20>\x20maxVisibleValue\x20+\x204.0\x20||\x20fValue\x20<\x20minVisibleValue\x20-\x204.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20uNoValueColor\x20*\x20oriColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(fillMode\x20>\x202.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20mix_con\x20=\x20computeMixCon(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20mix(computeContourMapColor(fValue),\x20uHypLineColor,\x20mix_con);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(fillMode\x20>\x201.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalOpacity\x20=\x20computeMixCon(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20uHypLineColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(fillMode\x20>\x200.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20computeContourMapColor(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalOpacity\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20finalColor\x20=\x20mix(oriColor,\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20#ifdef\x20PT_CLOUD\x0a\x20\x20\x20\x20\x20\x20\x20\x20finalColor\x20=\x20mix(vec4(1.0,1.0,1.0,1.0),\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20finalColor;\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20vec4\x20baseColorWithAlpha\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20#ifdef\x20VertexColor\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20baseColorWithAlpha\x20=\x20vColor;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#ifdef\x20COMPUTE_TEXCOORD\x0a\x20\x20\x20\x20\x20\x20\x20\x20baseColorWithAlpha\x20*=\x20getTextureColor();\x0a\x20\x20\x20\x20#endif\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20outColor\x20=\x20baseColorWithAlpha;\x0a\x20\x20\x20\x20#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor\x20=\x20getContourMapColor(outColor,\x20wValue);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#ifdef\x20CLIP\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor\x20*=\x20clip(vec4(vPositionEC,\x201.0));\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20outColor;\x0a\x20\x20\x20\x20}\x0a';

    const _0x3667=['instanceBuffer','set','99667uaWrtS','vertexPackage','1uVZiOe','model','context','23203StSalw','2RodhcR','prototype','2shiiKh','DeveloperError','defined','createVertexBuffer','typedArray','vertexBuffer','140237WotoDQ','20341WZqzHX','instanceIndex','vertexAttributes','execute','STATIC_DRAW','267996xrehfJ','1VndHON','589566osWlAX','BufferUsage','instanceDivisor','139338haAwSR','5Ujclzk','Buffer','index'];const _0x35534e=_0x3bd6;function _0x3bd6(_0x3738f6,_0x100ff5){_0x3738f6=_0x3738f6-0x6d;let _0x366743=_0x3667[_0x3738f6];return _0x366743;}(function(_0x468a57,_0x5eab32){const _0x544e61=_0x3bd6;while(!![]){try{const _0x523ed5=-parseInt(_0x544e61(0x74))+parseInt(_0x544e61(0x87))*parseInt(_0x544e61(0x6e))+parseInt(_0x544e61(0x85))*-parseInt(_0x544e61(0x7f))+parseInt(_0x544e61(0x6f))+-parseInt(_0x544e61(0x79))*parseInt(_0x544e61(0x75))+-parseInt(_0x544e61(0x84))*parseInt(_0x544e61(0x7a))+parseInt(_0x544e61(0x81))*parseInt(_0x544e61(0x76));if(_0x523ed5===_0x5eab32)break;else _0x468a57['push'](_0x468a57['shift']());}catch(_0x15e089){_0x468a57['push'](_0x468a57['shift']());}}}(_0x3667,0x28f12));function S3MCreateVertexJob(){const _0xa81225=_0x3bd6;this[_0xa81225(0x83)]=undefined,this[_0xa81225(0x82)]=undefined,this[_0xa81225(0x7c)]=undefined;}S3MCreateVertexJob[_0x35534e(0x86)][_0x35534e(0x7e)]=function(_0x5cf03a,_0x62e18d,_0x2357f8){const _0x2370dd=_0x35534e;this[_0x2370dd(0x83)]=_0x5cf03a,this[_0x2370dd(0x82)]=_0x62e18d,this[_0x2370dd(0x7c)]=_0x2357f8;},S3MCreateVertexJob['prototype'][_0x35534e(0x72)]=function(){const _0x28e05e=_0x35534e;let _0x3f764c=this['context'],_0x2186df=this['index'],_0x6775f1=this['model'][_0x28e05e(0x80)],_0x4f27b0=_0x6775f1[_0x28e05e(0x71)][_0x2186df];if(!Cesium[_0x28e05e(0x89)](_0x4f27b0))throw new Cesium[(_0x28e05e(0x88))]('attribute\x20is\x20null');if(_0x6775f1[_0x28e05e(0x70)]!==-0x1&&!Cesium['defined'](this[_0x28e05e(0x82)][_0x28e05e(0x7d)])){if(!Cesium[_0x28e05e(0x89)](_0x6775f1[_0x28e05e(0x7d)]))throw new Cesium[(_0x28e05e(0x88))]('instance\x20buffer\x20is\x20null');this['model'][_0x28e05e(0x7d)]=Cesium[_0x28e05e(0x7b)][_0x28e05e(0x8a)]({'context':_0x3f764c,'typedArray':_0x6775f1[_0x28e05e(0x7d)],'usage':Cesium[_0x28e05e(0x77)][_0x28e05e(0x73)]});}if(_0x4f27b0[_0x28e05e(0x78)]===0x1&&!Cesium['defined'](_0x4f27b0[_0x28e05e(0x8b)])){_0x4f27b0[_0x28e05e(0x6d)]=this['model'][_0x28e05e(0x7d)];return;}!Cesium[_0x28e05e(0x89)](_0x4f27b0['vertexBuffer'])&&(_0x4f27b0['vertexBuffer']=Cesium[_0x28e05e(0x7b)][_0x28e05e(0x8a)]({'context':_0x3f764c,'typedArray':_0x4f27b0[_0x28e05e(0x8b)],'usage':Cesium[_0x28e05e(0x77)][_0x28e05e(0x73)]}),_0x4f27b0[_0x28e05e(0x8b)]=null,delete _0x4f27b0[_0x28e05e(0x8b)]);};

    const _0x38df=['indicesTypedArray','DeveloperError','execute','set','elementIndexUint','index\x20package\x20is\x20null','SIXTY_FOUR_KILOBYTES','26vbmVjB','UNSIGNED_INT','UNSIGNED_SHORT','indexBuffer','createIndexBuffer','prototype','index','91679hNJlqe','BufferUsage','Buffer','indexType','59167oqsGSZ','IndexDatatype','vertexPackage','698dpgfAV','1679ihOmUl','context','1rLMVfr','defined','model','1157914rmWqmg','Math','5VeAlUt','4887601IizbQp','1697176xjDsdu','1251422qugTNq'];const _0x15eb08=_0x29f2;(function(_0x201109,_0xea565c){const _0x377e3f=_0x29f2;while(!![]){try{const _0xe3a5f7=-parseInt(_0x377e3f(0x1ce))*-parseInt(_0x377e3f(0x1bf))+parseInt(_0x377e3f(0x1c9))*-parseInt(_0x377e3f(0x1cc))+-parseInt(_0x377e3f(0x1c3))*parseInt(_0x377e3f(0x1d9))+parseInt(_0x377e3f(0x1c6))*parseInt(_0x377e3f(0x1c7))+-parseInt(_0x377e3f(0x1d1))+-parseInt(_0x377e3f(0x1d0))+parseInt(_0x377e3f(0x1cf));if(_0xe3a5f7===_0xea565c)break;else _0x201109['push'](_0x201109['shift']());}catch(_0x13d4a6){_0x201109['push'](_0x201109['shift']());}}}(_0x38df,0xd527c));function S3MCreateIndexBufferJob(){const _0x5bb4a7=_0x29f2;this['model']=undefined,this[_0x5bb4a7(0x1c8)]=undefined,this['index']=0x0;}S3MCreateIndexBufferJob[_0x15eb08(0x1bd)][_0x15eb08(0x1d5)]=function(_0x421082,_0x225a4f,_0x8d205d){const _0x271122=_0x15eb08;this[_0x271122(0x1cb)]=_0x225a4f,this[_0x271122(0x1c8)]=_0x421082,this[_0x271122(0x1be)]=_0x8d205d;},S3MCreateIndexBufferJob[_0x15eb08(0x1bd)][_0x15eb08(0x1d4)]=function(){const _0x513e6b=_0x15eb08;let _0x1a9061=this['context'],_0x14b307=this[_0x513e6b(0x1cb)]['arrIndexPackage'][this['index']],_0x3b5fc8=this[_0x513e6b(0x1cb)][_0x513e6b(0x1c5)]['verticesCount'];if(!Cesium['defined'](_0x14b307))throw new Cesium[(_0x513e6b(0x1d3))](_0x513e6b(0x1d7));if(Cesium[_0x513e6b(0x1ca)](_0x14b307[_0x513e6b(0x1bb)]))return;if(!Cesium['defined'](_0x14b307['indicesTypedArray']))throw new Cesium['DeveloperError']('index\x20buffer\x20is\x20null');let _0x4cd806=Cesium['IndexDatatype'][_0x513e6b(0x1ba)];(_0x14b307[_0x513e6b(0x1c2)]===0x1||_0x3b5fc8>=Cesium[_0x513e6b(0x1cd)][_0x513e6b(0x1d8)])&&_0x1a9061[_0x513e6b(0x1d6)]&&(_0x4cd806=Cesium[_0x513e6b(0x1c4)][_0x513e6b(0x1b9)]),!Cesium[_0x513e6b(0x1ca)](_0x14b307[_0x513e6b(0x1bb)])&&(_0x14b307['indexBuffer']=Cesium[_0x513e6b(0x1c1)][_0x513e6b(0x1bc)]({'context':_0x1a9061,'typedArray':_0x14b307[_0x513e6b(0x1d2)],'usage':Cesium[_0x513e6b(0x1c0)]['STATIC_DRAW'],'indexDatatype':_0x4cd806})),_0x14b307[_0x513e6b(0x1d2)]=null,delete _0x14b307[_0x513e6b(0x1d2)];};function _0x29f2(_0x54accb,_0x281485){_0x54accb=_0x54accb-0x1b9;let _0x38dfda=_0x38df[_0x54accb];return _0x38dfda;}

    const _0x4bec=['APPLY_SWIPE','CLIPPLANE','HAS_NORMAL','SKELETONSELECT_ENABLE','PBR_THEME','HORIZONTAL_LINE','COMPRESS_NORMAL','42692UOdexE','TexCoord2','EMISSION_TEXTURE_COUNT\x20','IBL','TRANSPARENT_BACK_COLOR','POST_EFFECT','Instance','194711nKuTNP','BRDF','ADJUST_COLOR','2zBlsqQ','OVERLAY','HYPSOMETRIC','SILHOUETTE_SELECT_TYPE','226983uFkfZY','TexCoord','InstancePipe','APPLY_SPLIT','TEXTURE_MOVE','2pEqxVR','41542yuRzWM','REPLACE_COLOR_TYPE','IGNORE_NORMAL','COMPRESS_TEXCOORD','DIR_LIGHTS\x20','Volume2','FLATTEN','165299TwYyDb','FALTTEN','COMPUTE_W_VALUE','REPLACE_SELECT_TYPE','VOL_AND_HYP','TEXTURE_COORD_ONE_IS_W','VERTEX_CAPTURE','COMPRESS_VERTEX','CLIP_FILT_BY_ID','TextureAtlasSec','SKETCH_MODE','VertexNormal','USE_LINECOLOR','INVALID_OBLIQUE','COMPUTE_TEXCOORD','147186dHVJmb','W_VISIBLE','InstanceBim','SEC_TEX_EMISSION','UseInstanceSkeletonMatrix','Translation','freeze','POINT_LIGHTS\x20','TRIANGLE_FILTRATE','WEBP','18019PzwXNF','EMISSION_TEXTURE'];const _0x5090f4=_0x51fb;(function(_0x25ddef,_0x3d9d8c){const _0x576a3e=_0x51fb;while(!![]){try{const _0x15270c=parseInt(_0x576a3e(0x1df))*parseInt(_0x576a3e(0x1f2))+-parseInt(_0x576a3e(0x1fc))+parseInt(_0x576a3e(0x1e8))*parseInt(_0x576a3e(0x1fb))+-parseInt(_0x576a3e(0x1ef))+parseInt(_0x576a3e(0x1f6))+-parseInt(_0x576a3e(0x1d5))+parseInt(_0x576a3e(0x1c6));if(_0x15270c===_0x3d9d8c)break;else _0x25ddef['push'](_0x25ddef['shift']());}catch(_0x57110d){_0x25ddef['push'](_0x25ddef['shift']());}}}(_0x4bec,0x1fcd9));const ProgramDefines$1={'EXCAVATION':'EXCAVATION','FALTTEN':_0x5090f4(0x1c7),'OVERLAY':_0x5090f4(0x1f3),'HYPSOMETRIC':_0x5090f4(0x1f4),'ADJUST_COLOR':_0x5090f4(0x1f1),'TRANSPARENT_BACK_COLOR':_0x5090f4(0x1ec),'HORIZONTAL_LINE':_0x5090f4(0x1e6),'COMPUTE_W_VALUE':_0x5090f4(0x1c8),'COMPUTE_TEXCOORD':'COMPUTE_TEXCOORD','HAS_LIGHT':'HAS_LIGHT','HAS_NORMAL':_0x5090f4(0x1e3),'REPLACE_SELECT_TYPE':_0x5090f4(0x1c9),'SILHOUETTE_SELECT_TYPE':_0x5090f4(0x1f5),'MULTI_TEX':'MULTI_TEX','APPLY_SPLIT':_0x5090f4(0x1f9),'APPLY_SWIPE':_0x5090f4(0x1e1),'TEXCOORD':_0x5090f4(0x1f7),'TEXCOORD2':_0x5090f4(0x1e9),'COMPRESS_VERTEX':_0x5090f4(0x1cd),'COMPRESS_NORMAL':_0x5090f4(0x1e7),'COMPRESS_COLOR':'COMPRESS_COLOR','COMPRESS_TEXCOORD':_0x5090f4(0x1c2),'SKETCH_MODE':_0x5090f4(0x1d0),'NORMAL_AND_DEPTH':'NORMAL_AND_DEPTH','POST_EFFECT':_0x5090f4(0x1ed),'CLIP_FILT_BY_ID':_0x5090f4(0x1ce),'CLIP':'CLIP','CLIPPLANE':_0x5090f4(0x1e2),'PBR':'PBR','PT_CLOUD':'PT_CLOUD','DIR_LIGHTS':_0x5090f4(0x1c3),'POINT_LIGHTS':_0x5090f4(0x1dc),'SPOT_LIGHTS':'SPOT_LIGHTS\x20','W_VISIBLE':_0x5090f4(0x1d6),'EMISSION_TEXTURE':_0x5090f4(0x1e0),'EMISSION_TEXTURE_COUNT':_0x5090f4(0x1ea),'TEXTURE_MOVE':_0x5090f4(0x1fa),'VOLUME':'Volume','VOLUME2':_0x5090f4(0x1c4),'TEXTURE_COORD_ONE_IS_W':_0x5090f4(0x1cb),'TRIANGLE_FILTRATE':_0x5090f4(0x1dd),'UseInstanceSkeletonMatrix':_0x5090f4(0x1d9),'WEBP':_0x5090f4(0x1de),'HAS_SKELETONSELECTED':'HAS_SKELETONSELECTED','SKELETONSELECT_ENABLE':_0x5090f4(0x1e4),'REPLACE_COLOR_TYPE':_0x5090f4(0x1fd),'INVALID_OBLIQUE':_0x5090f4(0x1d3),'IGNORE_NORMAL':_0x5090f4(0x1c1),'TextureAtlas':'TextureAtlas','TextureAtlasSec':_0x5090f4(0x1cf),'Translation':_0x5090f4(0x1da),'VOL_AND_HYP':_0x5090f4(0x1ca),'VERTEX_CAPTURE':_0x5090f4(0x1cc),'SEC_TEX_EMISSION':_0x5090f4(0x1d8),'BRDF':_0x5090f4(0x1f0),'PBR_THEME':_0x5090f4(0x1e5),'IBL':_0x5090f4(0x1eb),'FLATTEN':_0x5090f4(0x1c5),'UseLineColor':_0x5090f4(0x1d2),'Instance':_0x5090f4(0x1ee),'InstanceBim':_0x5090f4(0x1d7),'InstancePipe':_0x5090f4(0x1f8),'COMPUTE_TEXCOORD':_0x5090f4(0x1d4),'VertexColor':'VertexColor','VertexNormal':_0x5090f4(0x1d1)};function _0x51fb(_0x4f9bba,_0xf79884){_0x4f9bba=_0x4f9bba-0x1c1;let _0x4bec44=_0x4bec[_0x4f9bba];return _0x4bec44;}var _0x220dee = Object[_0x5090f4(0x1db)](ProgramDefines$1);

    const _0x572b=['21854HoorYi','220403tgbUci','13YPIfOE','95762FnIOev','2UNTDbZ','freeze','1INkmpa','37418rZgtXc','260249dpxLgm','145747vMKXxJ','21097eybawj'];const _0x2acb52=_0x39fe;(function(_0x31e050,_0x3a1643){const _0x452b4c=_0x39fe;while(!![]){try{const _0x40612c=-parseInt(_0x452b4c(0x97))*-parseInt(_0x452b4c(0x93))+parseInt(_0x452b4c(0x9c))*parseInt(_0x452b4c(0x94))+parseInt(_0x452b4c(0x95))+-parseInt(_0x452b4c(0x9a))*-parseInt(_0x452b4c(0x98))+-parseInt(_0x452b4c(0x9b))+-parseInt(_0x452b4c(0x96))+-parseInt(_0x452b4c(0x99));if(_0x40612c===_0x3a1643)break;else _0x31e050['push'](_0x31e050['shift']());}catch(_0x39d1bf){_0x31e050['push'](_0x31e050['shift']());}}}(_0x572b,0x2b8c4));const InstanceMode={'BIM':0x11,'PIPELINE':0x1d};function _0x39fe(_0x476e8f,_0x4baadd){_0x476e8f=_0x476e8f-0x93;let _0x572bb5=_0x572b[_0x476e8f];return _0x572bb5;}var _0x3bf5ae = Object[_0x2acb52(0x9d)](InstanceMode);

    const _0x40a1=['execute','_enableClipPlane','HYPSOMETRIC','_gl','arrIndexPackage','COMPRESS_NORMAL','textureCoordIsW','VertexColor','UseLineColor','455332oaTBWq','aColor','PIPELINE','batchTable','swipeEnabled','_flattenPar','SVC_TexutreCoord','TEXTURE_COORD_ONE_IS_W','139513QeCjam','compressOptions','ShaderSource','COMPUTE_TEXCOORD','defines','model','TexCoord','textures','_hypsometric','COMPRESS_VERTEX','SVC_Vertex','texturelod','defaultValue','BIM','TextureAtlasSec','224178QpkuSQ','material','InstancePipe','3eJJprX','getVertexShaderCallback','SVC_Normal','10vbzaxk','flattening','258247rETPHj','360831mbBxuR','2wBQFyx','TextureAtlas','CLIPPLANE','FLATTEN','push','_enableClip','attributeLocations','ShaderProgram','aTexCoord0','context','5291hjMFlT','EXT_shader_texture_lod','defined','length','primitiveType','isUseHypColorTable','vertexPackage','set','SVC_VertexColor','COMPRESS_TEXCOORD','104667JkRWsb','shaderProgram','instanceMode','prototype','TexCoord2'];const _0x2b83dc=_0x31d9;(function(_0x1f4aa4,_0x2118aa){const _0x116c22=_0x31d9;while(!![]){try{const _0x4ccbca=-parseInt(_0x116c22(0x18e))+parseInt(_0x116c22(0x1a2))*parseInt(_0x116c22(0x194))+-parseInt(_0x116c22(0x1ac))+-parseInt(_0x116c22(0x196))+parseInt(_0x116c22(0x198))*-parseInt(_0x116c22(0x17f))+-parseInt(_0x116c22(0x197))+parseInt(_0x116c22(0x177))*parseInt(_0x116c22(0x191));if(_0x4ccbca===_0x2118aa)break;else _0x1f4aa4['push'](_0x1f4aa4['shift']());}catch(_0x565a75){_0x1f4aa4['push'](_0x1f4aa4['shift']());}}}(_0x40a1,0x2edd5));function _0x31d9(_0x1fb510,_0x3ce580){_0x1fb510=_0x1fb510-0x16b;let _0x40a1d6=_0x40a1[_0x1fb510];return _0x40a1d6;}function S3MCreateShaderProgramJob(){const _0x4fb1ab=_0x31d9;this[_0x4fb1ab(0x184)]=undefined,this[_0x4fb1ab(0x1a1)]=undefined;}S3MCreateShaderProgramJob[_0x2b83dc(0x16c)][_0x2b83dc(0x1a9)]=function(_0x286f4d,_0xdbf2d2){const _0x4b69c9=_0x2b83dc;this[_0x4b69c9(0x184)]=_0xdbf2d2,this[_0x4b69c9(0x1a1)]=_0x286f4d;};function getExtension(_0x3295aa,_0x31a85d){const _0x3cdd08=_0x2b83dc;let _0x441d7e=_0x31a85d[_0x3cdd08(0x1a5)];for(let _0x28ef80=0x0;_0x28ef80<_0x441d7e;++_0x28ef80){let _0x53d8c7=_0x3295aa['getExtension'](_0x31a85d[_0x28ef80]);if(_0x53d8c7)return _0x53d8c7;}return undefined;}S3MCreateShaderProgramJob[_0x2b83dc(0x16c)][_0x2b83dc(0x16e)]=function(){const _0x2977c0=_0x2b83dc,_0x25870b=this[_0x2977c0(0x1a1)],_0x2c0ec9=this[_0x2977c0(0x184)],_0xf9a259=_0x2c0ec9['layer'],_0x59b428=_0x2c0ec9['vs'],_0x1449d8=_0x2c0ec9['fs'],_0x3b9197=_0x2c0ec9[_0x2977c0(0x19e)],_0x5e9fcb=_0x2c0ec9[_0x2977c0(0x18f)],_0x2bae4b=_0x2c0ec9[_0x2977c0(0x1a8)];let _0x1f7153=_0x2c0ec9[_0x2977c0(0x17a)]?_0x2c0ec9[_0x2977c0(0x17a)][_0x2977c0(0x192)]()(_0x59b428):_0x59b428;_0x25870b[_0x2977c0(0x18a)]===undefined&&(_0x25870b[_0x2977c0(0x18a)]=Cesium[_0x2977c0(0x18b)](getExtension(_0x25870b[_0x2977c0(0x171)],[_0x2977c0(0x1a3)]),![]));let _0x5ae2ba=new Cesium[(_0x2977c0(0x181))]({'sources':[_0x1f7153]}),_0x44d258=new Cesium[(_0x2977c0(0x181))]({'sources':[_0x1449d8]});Cesium['defined'](_0x3b9197['aNormal'])&&(_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee['VertexNormal']),_0x44d258[_0x2977c0(0x183)]['push'](_0x220dee['VertexNormal']));Cesium['defined'](_0x3b9197[_0x2977c0(0x178)])&&_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x175)]);_0x5e9fcb&&_0x5e9fcb[_0x2977c0(0x186)][_0x2977c0(0x1a5)]>0x0&&(_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee['COMPUTE_TEXCOORD']),_0x44d258['defines'][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x182)]));_0x5e9fcb&&_0x5e9fcb[_0x2977c0(0x186)][_0x2977c0(0x1a5)]===0x2&&(_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x2977c0(0x16d)),_0x44d258[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x2977c0(0x16d)));Cesium[_0x2977c0(0x1a4)](_0x3b9197[_0x2977c0(0x1a0)])&&(_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x2977c0(0x185)),_0x44d258[_0x2977c0(0x183)]['push'](_0x2977c0(0x185)));_0x2bae4b['instanceIndex']>-0x1&&_0x5ae2ba['defines'][_0x2977c0(0x19c)](_0x220dee['Instance']);_0x2bae4b[_0x2977c0(0x16b)]===_0x3bf5ae[_0x2977c0(0x18c)]&&_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee['InstanceBim']);_0x2bae4b['instanceMode']===_0x3bf5ae[_0x2977c0(0x179)]&&_0x5ae2ba['defines'][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x190)]);if(Cesium[_0x2977c0(0x1a4)](_0x2bae4b['compressOptions'])){let _0x4bd1e9=_0x2bae4b[_0x2977c0(0x180)];(_0x4bd1e9&_0x5aa24d[_0x2977c0(0x189)])===_0x5aa24d[_0x2977c0(0x189)]&&_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x188)]),(_0x4bd1e9&_0x5aa24d[_0x2977c0(0x193)])===_0x5aa24d[_0x2977c0(0x193)]&&_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x173)]),(_0x4bd1e9&_0x5aa24d[_0x2977c0(0x1aa)])===_0x5aa24d[_0x2977c0(0x1aa)]&&_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee['COMPRESS_COLOR']),(_0x4bd1e9&_0x5aa24d['SVC_TexutreCoord'])===_0x5aa24d[_0x2977c0(0x17d)]&&_0x5ae2ba[_0x2977c0(0x183)]['push'](_0x220dee[_0x2977c0(0x1ab)]);}_0x2bae4b[_0x2977c0(0x174)]&&_0x3b9197[_0x2977c0(0x185)]&&_0x5ae2ba[_0x2977c0(0x183)]['push'](_0x220dee[_0x2977c0(0x17e)]),_0xf9a259[_0x2977c0(0x19d)]&&_0x44d258['defines']['push'](_0x220dee['CLIP']),_0xf9a259[_0x2977c0(0x16f)]&&_0x44d258['defines'][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x19a)]),_0xf9a259[_0x2977c0(0x187)][_0x2977c0(0x1a7)]&&(_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x170)]),_0x44d258[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x170)])),_0xf9a259[_0x2977c0(0x17c)][_0x2977c0(0x195)]&&_0x5ae2ba['defines'][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x19b)]),_0xf9a259[_0x2977c0(0x17b)]&&_0x44d258['defines']['push'](_0x220dee['APPLY_SWIPE']),_0x2bae4b[_0x2977c0(0x174)]&&_0x3b9197[_0x2977c0(0x1a0)]&&_0x5ae2ba[_0x2977c0(0x183)]['push'](_0x220dee[_0x2977c0(0x17e)]),_0x5e9fcb[_0x2977c0(0x17a)]&&(_0x5ae2ba[_0x2977c0(0x183)]['push'](_0x220dee[_0x2977c0(0x199)]),_0x44d258['defines']['push'](_0x220dee[_0x2977c0(0x199)])),_0x5e9fcb['batchTableBake']&&(_0x5ae2ba[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x18d)]),_0x44d258[_0x2977c0(0x183)][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x18d)])),Cesium[_0x2977c0(0x1a4)](_0x2c0ec9[_0x2977c0(0x172)])&&_0x2c0ec9[_0x2977c0(0x172)]['length']>0x0&&_0x2c0ec9[_0x2977c0(0x172)][0x0][_0x2977c0(0x1a6)]===0x2&&_0x44d258['defines'][_0x2977c0(0x19c)](_0x220dee[_0x2977c0(0x176)]),_0x2c0ec9[_0x2977c0(0x1ad)]=Cesium[_0x2977c0(0x19f)]['fromCache']({'context':_0x25870b,'vertexShaderSource':_0x5ae2ba,'fragmentShaderSource':_0x44d258,'attributeLocations':_0x3b9197});};

    const _0xc8ff=['329136fLZkSZ','69UGzjFi','18782WnXsaJ','507166AXGMwv','603023RSLYbA','82RPGMau','12358HKBgAt','914TdHUcE','3ZubPNh','73Rtkhpx','freeze','1375138QugQjK'];const _0x1713d9=_0xfa4c;(function(_0x105dbd,_0x10aaac){const _0x238134=_0xfa4c;while(!![]){try{const _0x32ce5e=parseInt(_0x238134(0x7a))*-parseInt(_0x238134(0x79))+-parseInt(_0x238134(0x73))+parseInt(_0x238134(0x77))*parseInt(_0x238134(0x70))+parseInt(_0x238134(0x78))+-parseInt(_0x238134(0x74))+parseInt(_0x238134(0x76))*parseInt(_0x238134(0x75))+-parseInt(_0x238134(0x6f))*-parseInt(_0x238134(0x71));if(_0x32ce5e===_0x10aaac)break;else _0x105dbd['push'](_0x105dbd['shift']());}catch(_0x507179){_0x105dbd['push'](_0x105dbd['shift']());}}}(_0xc8ff,0xbbe23));const OperationType={'RESET':0x0,'SetColor':0x1,'SELECTED':0x2,'HIDE':0x4,'OFFSET':0x8,'CLIP':0x10,'BLOOM':0x20,'ALL':0xff};function _0xfa4c(_0x5c798a,_0x37b204){_0x5c798a=_0x5c798a-0x6f;let _0xc8ffe7=_0xc8ff[_0x5c798a];return _0xc8ffe7;}var _0x33d894 = Object[_0x1713d9(0x72)](OperationType);

    const _0x5e69=['jobScheduler','AssociativeArray','shaderProgram','push','ComponentDatatype','564575LSxjyg','length','dequeue','BUFFER','dirty','BatchTable','s3m_batchTable_pickColor','isDestroyed','43URhKhM','peek','createBoundingBoxForInstance','APPLY_SWIPE','batchTable','contains','radius','Queue','vertexShaderSource','instanceBounds','enable','_objsHideList','hasOwnProperty','1805xPNqzq','modelMatrix','475470wFNtWR','vertexBufferToCreate','JobType','set','Cartesian4','shaderProgramToCreate','geoName','selectionInfoMap','FLATTEN','keys','isArray','clone','batchId','PROGRAM','HYPSOMETRIC','attributeLocations','indexBufferToCreate','createShaderProgram','updateObjsOperation','updateBatchTableAttributes','blue','geoMatrix','layer','fragmentShaderSource','Matrix4','floatToByte','red','CLIP','1RhhQHo','indexOf','DeveloperError','instanceCount','fromCache','CLIPPLANE','setBatchedAttribute','41FkNdTq','s3m_batchTable_color','557QWbPGd','updateObjsColor','instanceIndex','values','color','461259polMQC','pickColorIdentifier','invGeoMatrix','batchTableDirty','createPickIds','_objsColorList','throwInstantiationError','vertexAttributes','multiplyByPoint','instanceIds','updateAllObjsVisible','center','_allObjsHide','execute','update','enqueue','ALL','colorCommand','vertexPackage','material','createCommand','destroy','boundingVolume','idsOperationMap','defined','Cartesian3','inverse','toBytes','operationValue','pickInfo','arrIndexPackage','UNSIGNED_BYTE','defaultValue','green','prototype','_objsOperationList','_hash','764768ZozXNs','Color','attrLocation','_objsVisibleList','context','632471ybMUhZ','idsColorMap','defines','edgeGeometry','hypsometric','distance','splice','get','createBatchTable','ShaderProgram','1gRfDXa','ready'];const _0x1de8b1=_0x45d0;(function(_0x44c693,_0x215ccb){const _0xdb3719=_0x45d0;while(!![]){try{const _0x1d933e=parseInt(_0xdb3719(0x216))*parseInt(_0xdb3719(0x24a))+parseInt(_0xdb3719(0x20e))+parseInt(_0xdb3719(0x225))+-parseInt(_0xdb3719(0x1fd))+-parseInt(_0xdb3719(0x241))*parseInt(_0xdb3719(0x24f))+-parseInt(_0xdb3719(0x207))*-parseInt(_0xdb3719(0x1f8))+-parseInt(_0xdb3719(0x248))*parseInt(_0xdb3719(0x223));if(_0x1d933e===_0x215ccb)break;else _0x44c693['push'](_0x44c693['shift']());}catch(_0xbbb5f2){_0x44c693['push'](_0x44c693['shift']());}}}(_0x5e69,0xa1625));function RenderEntity(_0x56c6cb){const _0x2c803c=_0x45d0;this[_0x2c803c(0x23b)]=_0x56c6cb['layer'],this[_0x2c803c(0x261)]=_0x56c6cb[_0x2c803c(0x261)],this[_0x2c803c(0x26d)]=_0x56c6cb[_0x2c803c(0x26d)],this[_0x2c803c(0x226)]=new Cesium['Queue'](),this[_0x2c803c(0x235)]=new Cesium[(_0x2c803c(0x21d))](),this[_0x2c803c(0x22a)]=new Cesium[(_0x2c803c(0x21d))]();let _0x53099a,_0x1d0494;for(_0x53099a=0x0,_0x1d0494=this[_0x2c803c(0x261)][_0x2c803c(0x256)]['length'];_0x53099a<_0x1d0494;_0x53099a++){this[_0x2c803c(0x226)][_0x2c803c(0x25e)](_0x53099a);}for(_0x53099a=0x0,_0x1d0494=this[_0x2c803c(0x26d)][_0x2c803c(0x20f)];_0x53099a<_0x1d0494;_0x53099a++){this[_0x2c803c(0x235)][_0x2c803c(0x25e)](_0x53099a);}this[_0x2c803c(0x22a)][_0x2c803c(0x25e)](0x0),this[_0x2c803c(0x265)]=_0x56c6cb[_0x2c803c(0x265)],this['material']=Cesium[_0x2c803c(0x1f3)](_0x56c6cb[_0x2c803c(0x262)],new MaterialPass()),this['geoName']=_0x56c6cb[_0x2c803c(0x22b)],this[_0x2c803c(0x224)]=_0x56c6cb[_0x2c803c(0x224)],this['geoMatrix']=_0x56c6cb[_0x2c803c(0x23a)],this[_0x2c803c(0x251)]=Cesium[_0x2c803c(0x23d)][_0x2c803c(0x269)](this[_0x2c803c(0x23a)],new Cesium[(_0x2c803c(0x23d))]()),this[_0x2c803c(0x244)]=_0x56c6cb['vertexPackage'][_0x2c803c(0x244)],this[_0x2c803c(0x234)]=_0x56c6cb[_0x2c803c(0x261)][_0x2c803c(0x1fa)],this[_0x2c803c(0x20b)]=undefined,this['vertexArray']=undefined,this[_0x2c803c(0x260)]=undefined,this[_0x2c803c(0x26c)]=_0x56c6cb[_0x2c803c(0x26c)],this[_0x2c803c(0x22c)]=new Cesium[(_0x2c803c(0x20a))](),this[_0x2c803c(0x21a)]=undefined,this[_0x2c803c(0x252)]=![],this[_0x2c803c(0x250)]='vSecondColor',this[_0x2c803c(0x266)]=new Cesium[(_0x2c803c(0x20a))](),this['idsColorMap']=new Cesium[(_0x2c803c(0x20a))](),this['useWValue']=_0x56c6cb[_0x2c803c(0x261)][_0x2c803c(0x256)][0x0]['componentsPerAttribute']===0x4,this['edgeGeometry']=_0x56c6cb[_0x2c803c(0x200)],this[_0x2c803c(0x218)](),this[_0x2c803c(0x208)]=![];}const _vertexBufferJob=new S3MCreateVertexJob(),_indexBufferJob=new S3MCreateIndexBufferJob(),_shaderProgramJob=new S3MCreateShaderProgramJob();function createVertexBuffers(_0x4abb3b,_0x32df36){const _0x52c7dc=_0x45d0;let _0x457336=_0x4abb3b[_0x52c7dc(0x23b)][_0x52c7dc(0x1fc)],_0x32624a=_0x4abb3b['vertexBufferToCreate'];while(_0x32624a[_0x52c7dc(0x20f)]){let _0x1589c8=_0x32624a['peek']();_vertexBufferJob[_0x52c7dc(0x228)](_0x457336,_0x4abb3b,_0x1589c8);if(!_0x32df36[_0x52c7dc(0x209)][_0x52c7dc(0x25c)](_vertexBufferJob,Cesium[_0x52c7dc(0x227)][_0x52c7dc(0x211)]))break;_0x32624a[_0x52c7dc(0x210)]();}}function createIndexBuffers(_0x1bbeaf,_0x37d31b){const _0x346ba9=_0x45d0;let _0x2f7e5b=_0x1bbeaf[_0x346ba9(0x23b)]['context'],_0x427c4f=_0x1bbeaf[_0x346ba9(0x235)];while(_0x427c4f[_0x346ba9(0x20f)]){let _0x2685f7=_0x427c4f[_0x346ba9(0x217)]();_indexBufferJob['set'](_0x2f7e5b,_0x1bbeaf,_0x2685f7);if(!_0x37d31b[_0x346ba9(0x209)]['execute'](_indexBufferJob,Cesium['JobType'][_0x346ba9(0x211)]))break;_0x427c4f[_0x346ba9(0x210)]();}}function createShaderProgram(_0x3908c3,_0x6c43f7){const _0x5122fc=_0x45d0;let _0x5bf470=_0x3908c3['layer'][_0x5122fc(0x1fc)],_0x3622f3=_0x3908c3[_0x5122fc(0x22a)];while(_0x3622f3[_0x5122fc(0x20f)]){let _0x3c9832=_0x3622f3[_0x5122fc(0x217)]();_shaderProgramJob['set'](_0x5bf470,_0x3908c3);if(!_0x6c43f7[_0x5122fc(0x209)][_0x5122fc(0x25c)](_shaderProgramJob,Cesium[_0x5122fc(0x227)][_0x5122fc(0x232)]))break;_0x3622f3[_0x5122fc(0x210)]();}}function createBatchTable(_0x5d96af,_0x2e2309){const _0x1f4e17=_0x45d0;if(Cesium['defined'](_0x5d96af['batchTable'])||!_0x5d96af['pickInfo'])return;const _0x3a247f=_0x5d96af[_0x1f4e17(0x23b)][_0x1f4e17(0x1fc)];let _0x460466=[];_0x460466['push']({'functionName':_0x1f4e17(0x249),'componentDatatype':Cesium['ComponentDatatype'][_0x1f4e17(0x26e)],'componentsPerAttribute':0x4,'normalize':!![]},{'functionName':'s3m_batchTable_operation','componentDatatype':Cesium[_0x1f4e17(0x20d)][_0x1f4e17(0x26e)],'componentsPerAttribute':0x4},{'functionName':_0x1f4e17(0x214),'componentDatatype':Cesium[_0x1f4e17(0x20d)][_0x1f4e17(0x26e)],'componentsPerAttribute':0x4,'normalize':!![]});let _0x61104c=_0x5d96af[_0x1f4e17(0x26c)],_0x2db335=Object[_0x1f4e17(0x22e)](_0x61104c),_0x642281=_0x5d96af[_0x1f4e17(0x244)]>0x0?_0x5d96af['instanceCount']:_0x2db335[_0x1f4e17(0x20f)];_0x5d96af[_0x1f4e17(0x21a)]=new Cesium[(_0x1f4e17(0x213))](_0x3a247f,_0x460466,_0x642281);}RenderEntity['prototype']['createBuffers']=function(_0x164758){createVertexBuffers(this,_0x164758),createIndexBuffers(this,_0x164758);},RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x236)]=function(_0x20a1ee){createShaderProgram(this,_0x20a1ee);},RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x205)]=function(_0x41874f){createBatchTable(this);};let scratchPntCenter=new Cesium[(_0x1de8b1(0x268))]();function _0x45d0(_0x2d4e1d,_0x496858){_0x2d4e1d=_0x2d4e1d-0x1f3;let _0x5e69a3=_0x5e69[_0x2d4e1d];return _0x5e69a3;}RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x218)]=function(){const _0x57e242=_0x1de8b1,_0x38de50=this[_0x57e242(0x261)];if(!Cesium[_0x57e242(0x267)](_0x38de50)||_0x38de50[_0x57e242(0x24c)]===-0x1||!Cesium[_0x57e242(0x267)](_0x38de50[_0x57e242(0x21f)]))return;let _0x1d4b0e=_0x38de50[_0x57e242(0x21f)],_0x535860=new Cesium[(_0x57e242(0x268))](_0x1d4b0e[0x0],_0x1d4b0e[0x1],_0x1d4b0e[0x2]),_0x93e0a=new Cesium[(_0x57e242(0x268))](_0x1d4b0e[0x3],_0x1d4b0e[0x4],_0x1d4b0e[0x5]),_0xb5d127=Cesium[_0x57e242(0x268)]['lerp'](_0x535860,_0x93e0a,0.5,scratchPntCenter),_0x49a939=Cesium[_0x57e242(0x268)][_0x57e242(0x202)](_0xb5d127,_0x535860),_0x3ac5bd=new Cesium['Cartesian3']();Cesium[_0x57e242(0x23d)][_0x57e242(0x257)](this[_0x57e242(0x224)],_0xb5d127,_0x3ac5bd),this[_0x57e242(0x265)][_0x57e242(0x25a)]=_0x3ac5bd,this['boundingVolume'][_0x57e242(0x21c)]=_0x49a939,_0x38de50[_0x57e242(0x21f)]=undefined;};let cartesian4Scratch=new Cesium[(_0x1de8b1(0x229))]();RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x253)]=function(){const _0x37c25f=_0x1de8b1,_0x1addb3=this[_0x37c25f(0x23b)],_0x28131f=_0x1addb3[_0x37c25f(0x1fc)],_0x35ceb7=this[_0x37c25f(0x26c)];if(!Cesium[_0x37c25f(0x267)](_0x35ceb7))return;for(let _0x4df023 in _0x35ceb7){if(!_0x35ceb7['hasOwnProperty'](_0x4df023))continue;this['selectionInfoMap'][_0x37c25f(0x228)](_0x4df023,_0x35ceb7[_0x4df023]);}let _0x3a7aa3=this['batchTable'],_0x575c72=this[_0x37c25f(0x22c)],_0x12ba66=_0x575c72[_0x37c25f(0x1f7)];for(let _0x5055b6 in _0x12ba66){if(_0x12ba66[_0x37c25f(0x222)](_0x5055b6)){let _0xa0bcbd=_0x575c72['get'](_0x5055b6),_0x10767b;!Cesium[_0x37c25f(0x267)](_0x10767b)&&(_0x10767b=_0x28131f['createPickId']({'primitive':_0x1addb3,'id':_0x5055b6}));let _0x99f6c4=_0x10767b[_0x37c25f(0x24e)];cartesian4Scratch['x']=Cesium[_0x37c25f(0x1f9)][_0x37c25f(0x23e)](_0x99f6c4[_0x37c25f(0x23f)]),cartesian4Scratch['y']=Cesium[_0x37c25f(0x1f9)][_0x37c25f(0x23e)](_0x99f6c4[_0x37c25f(0x1f4)]),cartesian4Scratch['z']=Cesium[_0x37c25f(0x1f9)]['floatToByte'](_0x99f6c4[_0x37c25f(0x239)]),cartesian4Scratch['w']=Cesium[_0x37c25f(0x1f9)][_0x37c25f(0x23e)](_0x99f6c4['alpha']);let _0x3fbf3c=_0xa0bcbd[_0x37c25f(0x258)];if(this[_0x37c25f(0x244)]>0x0)_0x3fbf3c['map'](function(_0x339cf8){_0x3a7aa3['setBatchedAttribute'](_0x339cf8,0x2,cartesian4Scratch);});else {let _0x2794de=_0xa0bcbd[0x0][_0x37c25f(0x231)];_0x3a7aa3[_0x37c25f(0x247)](_0x2794de,0x2,cartesian4Scratch);}}}this['pickInfo']=undefined;},RenderEntity[_0x1de8b1(0x1f5)]['initLayerSetting']=function(_0x1ec8b7){const _0xec6002=_0x1de8b1;_0x1ec8b7[_0xec6002(0x25b)]&&this[_0xec6002(0x259)](!_0x1ec8b7[_0xec6002(0x25b)]),Object['keys'](_0x1ec8b7[_0xec6002(0x254)])[_0xec6002(0x20f)]>0x0&&this['updateObjsColor'](_0x1ec8b7[_0xec6002(0x254)]),_0x1ec8b7[_0xec6002(0x1f6)][_0xec6002(0x20f)]>0x0&&this[_0xec6002(0x237)](_0x1ec8b7[_0xec6002(0x1f6)]);},RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x238)]=function(){const _0x42b550=_0x1de8b1;let _0x32de22=this,_0x33bcf7=this[_0x42b550(0x1fe)],_0x2e9728=[];for(let _0x58158c=0x0,_0x37a782=_0x33bcf7[_0x42b550(0x20f)];_0x58158c<_0x37a782;_0x58158c++){let _0x468eff=_0x33bcf7[_0x42b550(0x24d)][_0x58158c];if(!_0x468eff[_0x42b550(0x212)])continue;_0x468eff[_0x42b550(0x212)]=![],_0x2e9728=_0x468eff[_0x42b550(0x24e)][_0x42b550(0x26a)](),cartesian4Scratch['x']=_0x2e9728[0x0],cartesian4Scratch['y']=_0x2e9728[0x1],cartesian4Scratch['z']=_0x2e9728[0x2],cartesian4Scratch['w']=_0x2e9728[0x3];if(Cesium[_0x42b550(0x267)](_0x468eff[_0x42b550(0x231)]))this['batchTable']['setBatchedAttribute'](_0x468eff[_0x42b550(0x231)],0x0,cartesian4Scratch);else Array[_0x42b550(0x22f)](_0x468eff[_0x42b550(0x258)])&&_0x468eff[_0x42b550(0x258)]['map'](function(_0x35ffe2){const _0x290f80=_0x42b550;_0x32de22[_0x290f80(0x21a)]['setBatchedAttribute'](_0x35ffe2,0x0,cartesian4Scratch);});}let _0x48658c=this[_0x42b550(0x266)];for(let _0x5b2191=0x0,_0x3c0aae=_0x48658c[_0x42b550(0x20f)];_0x5b2191<_0x3c0aae;_0x5b2191++){let _0x2b9f5d=_0x48658c['values'][_0x5b2191];if(!_0x2b9f5d[_0x42b550(0x212)])continue;_0x2b9f5d['dirty']=![],this[_0x42b550(0x244)]>0x0?Array[_0x42b550(0x22f)](_0x2b9f5d[_0x42b550(0x258)])&&_0x2b9f5d[_0x42b550(0x258)]['map'](function(_0x4f2fc7){const _0x316177=_0x42b550;_0x32de22[_0x316177(0x21a)][_0x316177(0x247)](_0x4f2fc7,0x1,_0x2b9f5d['operationValue']);}):Cesium[_0x42b550(0x267)](_0x2b9f5d[_0x42b550(0x231)])&&this['batchTable'][_0x42b550(0x247)](_0x2b9f5d[_0x42b550(0x231)],0x1,_0x2b9f5d['operationValue']);}},RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x24b)]=function(_0x1965c7){const _0x5e7c0d=_0x1de8b1;if(!this[_0x5e7c0d(0x208)]||this[_0x5e7c0d(0x22c)]['length']<0x1)return;let _0x47b90a=this['selectionInfoMap'][_0x5e7c0d(0x1f7)];for(let _0x249169 in _0x47b90a){if(!_0x47b90a[_0x5e7c0d(0x222)](_0x249169))continue;let _0x2376cd=_0x1965c7[_0x249169];if(!Cesium[_0x5e7c0d(0x267)](_0x2376cd))continue;let _0x3018c9=_0x47b90a[_0x249169][0x0];const _0x37f7cd=_0x3018c9[_0x5e7c0d(0x231)],_0x59b38c=_0x3018c9[_0x5e7c0d(0x258)];this[_0x5e7c0d(0x1fe)][_0x5e7c0d(0x228)](_0x249169,{'batchId':_0x37f7cd,'instanceIds':_0x59b38c,'color':_0x2376cd,'dirty':!![]});let _0x247427=this['idsOperationMap'][_0x5e7c0d(0x204)](_0x249169);!Cesium[_0x5e7c0d(0x267)](_0x247427)&&(_0x247427={'batchId':_0x37f7cd,'instanceIds':_0x59b38c,'operationValue':new Cesium['Cartesian4'](),'dirty':!![]}),_0x247427[_0x5e7c0d(0x212)]=!![],_0x247427[_0x5e7c0d(0x26b)]['x']=_0x2376cd===Cesium['Color']['TRANSPARENT']?_0x247427[_0x5e7c0d(0x26b)]['x']&0xfe:_0x247427['operationValue']['x']|0x1,this['idsOperationMap'][_0x5e7c0d(0x228)](_0x249169,_0x247427),this[_0x5e7c0d(0x252)]=!![];}},RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x237)]=function(_0x4f1598){const _0x163ad5=_0x1de8b1;if(!this['ready']||this[_0x163ad5(0x22c)][_0x163ad5(0x20f)]<0x1)return;let _0x2e0f6c=this[_0x163ad5(0x22c)][_0x163ad5(0x1f7)];for(let _0x4fb326 in _0x2e0f6c){if(!_0x2e0f6c[_0x163ad5(0x222)](_0x4fb326))continue;if(!_0x4f1598[_0x163ad5(0x21b)](_0x4fb326))continue;let _0x53fbf0=_0x2e0f6c[_0x4fb326][0x0],_0x296a59=_0x53fbf0[_0x163ad5(0x231)],_0x4edb69=_0x53fbf0[_0x163ad5(0x258)],_0x137eb6=_0x4f1598['get'](_0x4fb326),_0x558ec6=this['idsOperationMap'][_0x163ad5(0x204)](_0x4fb326);!Cesium['defined'](_0x558ec6)&&(_0x558ec6={'batchId':_0x296a59,'instanceIds':_0x4edb69,'operationValue':new Cesium['Cartesian4'](),'dirty':!![]}),_0x558ec6['dirty']=!![],_0x558ec6[_0x163ad5(0x26b)]['x']=_0x558ec6[_0x163ad5(0x26b)]['x']&0x1|_0x137eb6,this[_0x163ad5(0x266)][_0x163ad5(0x228)](_0x4fb326,_0x558ec6),this[_0x163ad5(0x252)]=!![];}},RenderEntity[_0x1de8b1(0x1f5)]['updateAllObjsVisible']=function(_0x475c98){const _0x1cbae1=_0x1de8b1;if(!this[_0x1cbae1(0x208)]||this[_0x1cbae1(0x22c)][_0x1cbae1(0x20f)]<0x1)return;let _0x5cc7d2=this[_0x1cbae1(0x23b)],_0x1fec13=this[_0x1cbae1(0x22c)]['_hash'];for(let _0x293bbe in _0x1fec13){if(!_0x1fec13['hasOwnProperty'](_0x293bbe))continue;if(_0x5cc7d2[_0x1cbae1(0x1fb)][_0x1cbae1(0x21b)](_0x293bbe))continue;let _0x12c022=_0x1fec13[_0x293bbe][0x0],_0x333377=_0x12c022[_0x1cbae1(0x231)],_0x2a8bb9=_0x12c022[_0x1cbae1(0x258)],_0x293ba8=this['idsOperationMap'][_0x1cbae1(0x204)](_0x293bbe);!Cesium[_0x1cbae1(0x267)](_0x293ba8)&&(_0x293ba8={'batchId':_0x333377,'instanceIds':_0x2a8bb9,'operationValue':new Cesium['Cartesian4'](),'dirty':!![]}),_0x293ba8[_0x1cbae1(0x212)]=!![],_0x475c98?_0x293ba8['operationValue']['x']=_0x293ba8['operationValue']['x']&(_0x33d894[_0x1cbae1(0x25f)]^_0x33d894['HIDE']):_0x293ba8[_0x1cbae1(0x26b)]['x']=_0x293ba8[_0x1cbae1(0x26b)]['x']|_0x33d894['HIDE'],this[_0x1cbae1(0x266)][_0x1cbae1(0x228)](_0x293bbe,_0x293ba8),_0x293ba8['operationValue']['x']===_0x33d894['RESET']?_0x5cc7d2['_objsOperationList']['remove'](_0x293bbe):(_0x5cc7d2[_0x1cbae1(0x1f6)]['set'](_0x293bbe,_0x293ba8['operationValue']['x']),_0x5cc7d2[_0x1cbae1(0x221)][_0x1cbae1(0x228)](_0x293bbe,!![])),this[_0x1cbae1(0x252)]=!![];}};function removeDefine(_0x297be1,_0x511534){const _0x4f256d=_0x1de8b1;let _0x143b12=_0x297be1[_0x4f256d(0x1ff)][_0x4f256d(0x242)](_0x511534);_0x143b12>=0x0&&_0x297be1[_0x4f256d(0x1ff)][_0x4f256d(0x203)](_0x143b12,0x1);}RenderEntity['prototype']['clip']=function(_0x505c7d){const _0x7bb2de=_0x1de8b1;if(!this[_0x7bb2de(0x208)])return;let _0x4b8b5e=this[_0x7bb2de(0x20b)][_0x7bb2de(0x21e)]['clone'](),_0x5c78d9=this[_0x7bb2de(0x20b)][_0x7bb2de(0x23c)][_0x7bb2de(0x230)](),_0x172ce2=this['attributeLocations'];_0x505c7d['enable']?_0x5c78d9[_0x7bb2de(0x1ff)][_0x7bb2de(0x242)](_0x220dee[_0x7bb2de(0x240)])===-0x1&&_0x5c78d9[_0x7bb2de(0x1ff)][_0x7bb2de(0x20c)](_0x220dee[_0x7bb2de(0x240)]):removeDefine(_0x5c78d9,_0x220dee['CLIP']),this[_0x7bb2de(0x23b)]['_enableClipPlane']?_0x5c78d9[_0x7bb2de(0x1ff)][_0x7bb2de(0x242)](_0x220dee[_0x7bb2de(0x246)])===-0x1&&_0x5c78d9[_0x7bb2de(0x1ff)][_0x7bb2de(0x20c)](_0x220dee[_0x7bb2de(0x246)]):removeDefine(_0x5c78d9,_0x220dee['CLIPPLANE']),this[_0x7bb2de(0x20b)][_0x7bb2de(0x264)](),this['shaderProgram']=Cesium[_0x7bb2de(0x206)][_0x7bb2de(0x245)]({'context':this['layer'][_0x7bb2de(0x1fc)],'vertexShaderSource':_0x4b8b5e,'fragmentShaderSource':_0x5c78d9,'attributeLocations':_0x172ce2}),this[_0x7bb2de(0x260)][_0x7bb2de(0x20b)]=this['shaderProgram'];},RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x201)]=function(_0x2140ab){const _0x521407=_0x1de8b1;if(!this['ready'])return;let _0x206208=this['shaderProgram'][_0x521407(0x21e)][_0x521407(0x230)](),_0x3b4438=this[_0x521407(0x20b)][_0x521407(0x23c)][_0x521407(0x230)](),_0x529461=this[_0x521407(0x234)];_0x2140ab[_0x521407(0x220)]?(_0x206208[_0x521407(0x1ff)]['indexOf'](_0x220dee[_0x521407(0x233)])===-0x1&&_0x206208[_0x521407(0x1ff)][_0x521407(0x20c)](_0x220dee[_0x521407(0x233)]),_0x3b4438[_0x521407(0x1ff)][_0x521407(0x242)](_0x220dee[_0x521407(0x233)])===-0x1&&_0x3b4438[_0x521407(0x1ff)][_0x521407(0x20c)](_0x220dee[_0x521407(0x233)])):removeDefine(_0x3b4438,_0x220dee[_0x521407(0x233)]),this[_0x521407(0x20b)]['destroy'](),this[_0x521407(0x20b)]=Cesium[_0x521407(0x206)][_0x521407(0x245)]({'context':this[_0x521407(0x23b)][_0x521407(0x1fc)],'vertexShaderSource':_0x206208,'fragmentShaderSource':_0x3b4438,'attributeLocations':_0x529461}),this['colorCommand']['shaderProgram']=this['shaderProgram'];},RenderEntity[_0x1de8b1(0x1f5)]['swipe']=function(_0x277f58){const _0x187643=_0x1de8b1;if(!this[_0x187643(0x208)])return;let _0x386c57=this[_0x187643(0x20b)]['vertexShaderSource'][_0x187643(0x230)](),_0x2b4504=this[_0x187643(0x20b)][_0x187643(0x23c)][_0x187643(0x230)](),_0x3384d3=this['attributeLocations'];_0x277f58[_0x187643(0x220)]?_0x2b4504['defines'][_0x187643(0x242)](_0x220dee[_0x187643(0x219)])===-0x1&&_0x2b4504[_0x187643(0x1ff)][_0x187643(0x20c)](_0x220dee['APPLY_SWIPE']):removeDefine(_0x2b4504,_0x220dee['APPLY_SWIPE']),this[_0x187643(0x20b)][_0x187643(0x264)](),this['shaderProgram']=Cesium[_0x187643(0x206)][_0x187643(0x245)]({'context':this[_0x187643(0x23b)][_0x187643(0x1fc)],'vertexShaderSource':_0x386c57,'fragmentShaderSource':_0x2b4504,'attributeLocations':_0x3384d3}),this[_0x187643(0x260)][_0x187643(0x20b)]=this[_0x187643(0x20b)];},RenderEntity[_0x1de8b1(0x1f5)]['flatten']=function(_0x578632){const _0x5b48e7=_0x1de8b1;if(!this[_0x5b48e7(0x208)])return;let _0x31bbe3=this['shaderProgram'][_0x5b48e7(0x21e)][_0x5b48e7(0x230)](),_0x3360b4=this[_0x5b48e7(0x20b)][_0x5b48e7(0x23c)][_0x5b48e7(0x230)](),_0x1f4ece=this[_0x5b48e7(0x234)];_0x578632[_0x5b48e7(0x220)]?_0x31bbe3[_0x5b48e7(0x1ff)][_0x5b48e7(0x242)](_0x220dee[_0x5b48e7(0x22d)])===-0x1&&_0x31bbe3[_0x5b48e7(0x1ff)][_0x5b48e7(0x20c)](_0x220dee[_0x5b48e7(0x22d)]):removeDefine(_0x31bbe3,_0x220dee['FLATTEN']),this[_0x5b48e7(0x20b)][_0x5b48e7(0x264)](),this[_0x5b48e7(0x20b)]=Cesium['ShaderProgram'][_0x5b48e7(0x245)]({'context':this[_0x5b48e7(0x23b)][_0x5b48e7(0x1fc)],'vertexShaderSource':_0x31bbe3,'fragmentShaderSource':_0x3360b4,'attributeLocations':_0x1f4ece}),this[_0x5b48e7(0x260)][_0x5b48e7(0x20b)]=this['shaderProgram'];},RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x263)]=Cesium[_0x1de8b1(0x243)][_0x1de8b1(0x255)],RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x25d)]=Cesium['DeveloperError']['throwInstantiationError'],RenderEntity['prototype'][_0x1de8b1(0x215)]=Cesium[_0x1de8b1(0x243)][_0x1de8b1(0x255)],RenderEntity[_0x1de8b1(0x1f5)][_0x1de8b1(0x264)]=Cesium[_0x1de8b1(0x243)][_0x1de8b1(0x255)];

    const _0x307d=['1036339TLqWqE','bounds','drawingBufferWidth','DrawCommand','1031017YHqHaA','LineColor','createShaderProgram','texture','context','ALPHA_BLEND','primitiveType','DepthFunction','_flattenPar','textures','_clipPlane','LineInterval','destroy','indexBuffer','geoMatrix','1wbbsJU','length','Cartesian4','651399DLsgdg','BoundingSphere','isDestroyed','DisplayMode','bTransparentSorting','boundingVolume','LESS_OR_EQUAL','2291UGowso','pickInfo','4MHWRgS','invGeoMatrix','drawingBufferHeight','modelMatrix','selectionInfoMap','Pass','1YKFsQQ','material','commandList','246524uTPHmk','_hypsometric','OPAQUE','call','push','constructor','defined','initLayerSetting','vertexPackage','shaderProgramToCreate','fromCache','arrIndexPackage','MaxVisibleValue','1ysislT','_clipMode','vertexArray','width','uniformMap','indexBufferToCreate','BlendingState','ColorTableMaxKey','noValueColor','setting','929777suauMM','vertexBufferToCreate','219350abILiO','destroyObject','433QIclJG','instanceCount','MinVisibleValue','shaderProgram','prototype','colorCommand','_swipeRegion','create','createCommand','ColorTableMinKey'];const _0x371a56=_0x6029;(function(_0x1219e3,_0x2f4ee0){const _0x279dca=_0x6029;while(!![]){try{const _0x5b0bfe=parseInt(_0x279dca(0x1ee))+parseInt(_0x279dca(0x1a5))*-parseInt(_0x279dca(0x1b4))+-parseInt(_0x279dca(0x1be))*-parseInt(_0x279dca(0x1e4))+parseInt(_0x279dca(0x1c9))+parseInt(_0x279dca(0x1c0))*parseInt(_0x279dca(0x1e2))+-parseInt(_0x279dca(0x1b7))*parseInt(_0x279dca(0x1c6))+-parseInt(_0x279dca(0x1d6))*parseInt(_0x279dca(0x1e0));if(_0x5b0bfe===_0x2f4ee0)break;else _0x1219e3['push'](_0x1219e3['shift']());}catch(_0x26cb1e){_0x1219e3['push'](_0x1219e3['shift']());}}}(_0x307d,0x83da9));function S3MObliqueRenderEntity(_0x46dce5){const _0x342df6=_0x6029;RenderEntity[_0x342df6(0x1cc)](this,_0x46dce5),this['vs']=_0x4b0dcb,this['fs']=_0x1ccff5;}S3MObliqueRenderEntity[_0x371a56(0x1e8)]=Object[_0x371a56(0x1eb)](RenderEntity[_0x371a56(0x1e8)]),S3MObliqueRenderEntity['prototype'][_0x371a56(0x1ce)]=RenderEntity;function getOpaqueRenderState(){const _0x61de51=_0x371a56;return Cesium['RenderState'][_0x61de51(0x1d3)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium[_0x61de51(0x1ac)][_0x61de51(0x1bd)]},'blending':Cesium[_0x61de51(0x1dc)][_0x61de51(0x1aa)]});}function _0x6029(_0xf85e56,_0x1d0a87){_0xf85e56=_0xf85e56-0x1a5;let _0x307d8d=_0x307d[_0xf85e56];return _0x307d8d;}let hypMinMaxValueScratch=new Cesium[(_0x371a56(0x1b6))](),hypOpacityIntervalFillModeScratch=new Cesium['Cartesian4'](),swipRegionScratch=new Cesium['Cartesian4']();function getUniformMap(_0x26bf81,_0x2bb8a5,_0x2f5ac2){return {'uGeoMatrix':function(){const _0x555340=_0x6029;return _0x2f5ac2[_0x555340(0x1b3)];},'uInverseGeoMatrix':function(){const _0x313da4=_0x6029;return _0x2f5ac2[_0x313da4(0x1c1)];},'uTexture':function(){return _0x26bf81['textures'][0x0];},'uTexture0Width':function(){const _0x1b1f50=_0x6029;return _0x26bf81[_0x1b1f50(0x1ae)][0x0][_0x1b1f50(0x1d9)];},'uClipMode':function(){const _0xe53d56=_0x6029;return _0x2bb8a5[_0xe53d56(0x1d7)];},'uClipPlanes':function(){const _0x222c81=_0x6029;return _0x2bb8a5[_0x222c81(0x1af)];},'uHypsometricTexture':function(){const _0x3db9e7=_0x6029;return _0x2bb8a5[_0x3db9e7(0x1ca)]['texture'];},'uHypLineColor':function(){const _0xab1e91=_0x6029;return _0x2bb8a5[_0xab1e91(0x1ca)][_0xab1e91(0x1df)][_0xab1e91(0x1a6)];},'uNoValueColor':function(){const _0xdee171=_0x6029;return _0x2bb8a5[_0xdee171(0x1ca)][_0xdee171(0x1df)][_0xdee171(0x1de)];},'uMinMaxValue':function(){const _0x26abe6=_0x6029;let _0x439ffd=_0x2bb8a5[_0x26abe6(0x1ca)]['setting'];return hypMinMaxValueScratch['x']=_0x439ffd[_0x26abe6(0x1ed)],hypMinMaxValueScratch['y']=_0x439ffd[_0x26abe6(0x1dd)],hypMinMaxValueScratch['z']=_0x439ffd[_0x26abe6(0x1e6)],hypMinMaxValueScratch['w']=_0x439ffd[_0x26abe6(0x1d5)],hypMinMaxValueScratch;},'uOpacityIntervalFillMode':function(){const _0x53c9a5=_0x6029;let _0xdf904f=_0x2bb8a5['_hypsometric'][_0x53c9a5(0x1df)];return hypOpacityIntervalFillModeScratch['x']=_0xdf904f['Opacity'],hypOpacityIntervalFillModeScratch['y']=_0xdf904f[_0x53c9a5(0x1b0)],hypOpacityIntervalFillModeScratch['z']=_0xdf904f[_0x53c9a5(0x1ba)],hypOpacityIntervalFillModeScratch;},'uFlattenRect':function(){const _0x52dd9c=_0x6029;return _0x2bb8a5[_0x52dd9c(0x1ad)][_0x52dd9c(0x1ef)];},'uFlattenTexture':function(){const _0x404cb6=_0x6029;return _0x2bb8a5[_0x404cb6(0x1ad)][_0x404cb6(0x1a8)];},'uSwipeRegion':function(){const _0x398a33=_0x6029,_0x4f6926=_0x2bb8a5['context'];return swipRegionScratch['x']=_0x2bb8a5[_0x398a33(0x1ea)]['x']*_0x4f6926['drawingBufferWidth'],swipRegionScratch['y']=(0x1-_0x2bb8a5[_0x398a33(0x1ea)]['y'])*_0x4f6926[_0x398a33(0x1c2)],swipRegionScratch['z']=_0x2bb8a5[_0x398a33(0x1ea)]['z']*_0x4f6926[_0x398a33(0x1f0)],swipRegionScratch['w']=(0x1-_0x2bb8a5[_0x398a33(0x1ea)]['w'])*_0x4f6926['drawingBufferHeight'],swipRegionScratch;}};}S3MObliqueRenderEntity[_0x371a56(0x1e8)][_0x371a56(0x1ec)]=function(){const _0xe08bc1=_0x371a56;if(Cesium[_0xe08bc1(0x1cf)](this[_0xe08bc1(0x1e9)])||this[_0xe08bc1(0x1e1)]['length']!==0x0||this[_0xe08bc1(0x1db)][_0xe08bc1(0x1b5)]!==0x0||this[_0xe08bc1(0x1d2)]['length']!==0x0)return;let _0x3d07d7=this['layer'],_0x2a7bd2=_0x3d07d7[_0xe08bc1(0x1a9)],_0x396e2a=this[_0xe08bc1(0x1d1)],_0x10d709=this['arrIndexPackage'],_0x1b31bd=_0x396e2a['vertexAttributes'];if(_0x10d709['length']<0x1)return;let _0x2700d1=_0x10d709[0x0],_0x47ea96=this[_0xe08bc1(0x1c7)];this[_0xe08bc1(0x1d8)]=new Cesium['VertexArray']({'context':_0x2a7bd2,'attributes':_0x1b31bd,'indexBuffer':_0x2700d1[_0xe08bc1(0x1b2)]}),this[_0xe08bc1(0x1e9)]=new Cesium[(_0xe08bc1(0x1f1))]({'primitiveType':_0x2700d1[_0xe08bc1(0x1ab)],'modelMatrix':this[_0xe08bc1(0x1c3)],'boundingVolume':Cesium[_0xe08bc1(0x1b8)]['clone'](this[_0xe08bc1(0x1bc)]),'vertexArray':this[_0xe08bc1(0x1d8)],'shaderProgram':this[_0xe08bc1(0x1e7)],'pass':_0x47ea96[_0xe08bc1(0x1bb)]?Cesium[_0xe08bc1(0x1c5)]['TRANSLUCENT']:Cesium[_0xe08bc1(0x1c5)][_0xe08bc1(0x1cb)],'renderState':getOpaqueRenderState(),'instanceCount':_0x396e2a[_0xe08bc1(0x1e5)]}),this[_0xe08bc1(0x1e9)][_0xe08bc1(0x1da)]=getUniformMap(_0x47ea96,_0x3d07d7,this),this['vertexPackage']=undefined,this[_0xe08bc1(0x1d4)]=undefined,this['vs']=undefined,this['fs']=undefined,this['ready']=!![];},S3MObliqueRenderEntity[_0x371a56(0x1e8)]['update']=function(_0x3c9ac8,_0x5cce0c){const _0x13ee30=_0x371a56;if(!this['ready']){this['createBuffers'](_0x3c9ac8),this[_0x13ee30(0x1a7)](_0x3c9ac8),this[_0x13ee30(0x1ec)](_0x3c9ac8),this[_0x13ee30(0x1d0)](_0x5cce0c);return;}_0x3c9ac8[_0x13ee30(0x1c8)][_0x13ee30(0x1cd)](this[_0x13ee30(0x1e9)]);},S3MObliqueRenderEntity['prototype']['isDestroyed']=function(){return ![];},S3MObliqueRenderEntity[_0x371a56(0x1e8)][_0x371a56(0x1b1)]=function(){const _0x18fd45=_0x371a56;return this[_0x18fd45(0x1e7)]=this[_0x18fd45(0x1e7)]&&!this[_0x18fd45(0x1e7)][_0x18fd45(0x1b9)]()&&this[_0x18fd45(0x1e7)][_0x18fd45(0x1b1)](),this['vertexArray']=this[_0x18fd45(0x1d8)]&&!this[_0x18fd45(0x1d8)][_0x18fd45(0x1b9)]()&&this[_0x18fd45(0x1d8)][_0x18fd45(0x1b1)](),this[_0x18fd45(0x1c7)]=this[_0x18fd45(0x1c7)]&&!this[_0x18fd45(0x1c7)]['isDestroyed']()&&this['material'][_0x18fd45(0x1b1)](),this['colorCommand']=undefined,this[_0x18fd45(0x1d1)]=null,this[_0x18fd45(0x1d4)]=null,this[_0x18fd45(0x1c3)]=undefined,this[_0x18fd45(0x1bf)]=undefined,this[_0x18fd45(0x1c4)]=undefined,this['vs']=undefined,this['fs']=undefined,Cesium[_0x18fd45(0x1e3)](this);};

    var _0x115d=['116891dAUnOG','\x0a\x20\x20\x20\x20attribute\x20vec4\x20aPosition;\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20attribute\x20vec4\x20aColor;\x0a#endif\x0a#ifdef\x20VertexNormal\x0a\x20\x20\x20\x20attribute\x20vec3\x20aNormal;\x0a#endif\x0a#ifdef\x20Instance\x0a\x20\x20\x20\x20attribute\x20float\x20instanceId;\x0a#else\x0a\x20\x20\x20\x20attribute\x20float\x20batchId;\x0a#endif\x20\x0a\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20attribute\x20float\x20aTextureBatchId0;\x0a#endif\x0a\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20attribute\x20vec4\x20aTexCoord0;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoord;\x0a\x20\x20\x20\x20uniform\x20mat4\x20uTexMatrix;\x0a#ifdef\x20COMPUTE_TEXCOORD\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20uniform\x20vec4\x20uTexAtlasDim;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasTran;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasScale;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasSize;\x0a\x20\x20\x20\x20varying\x20vec2\x20vMaxMipLevel;\x0a#else\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture0Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoordTransform;\x0a#endif\x20\x20\x20\x20\x0a#endif\x0a#endif\x0a\x0a#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20attribute\x20vec4\x20aTexCoord1;\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture1Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix2;\x0a#endif\x0a#ifdef\x20InstanceBim\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv2;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv3;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv4;\x0a\x20\x20\x20\x20attribute\x20vec4\x20secondary_colour;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv6;\x20\x20\x20\x0a#endif\x0a\x0a#ifdef\x20InstancePipe\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv1;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv2;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv3;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv4;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv5;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv6;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv7;\x0a\x20\x20\x20\x20attribute\x20vec4\x20secondary_colour;\x0a\x20\x20\x20\x20attribute\x20vec4\x20uv9;\x0a#endif\x0a\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20varying\x20float\x20wValue;\x20\x20\x20\x20\x0a#endif\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20uniform\x20mat4\x20uGeoMatrix;\x0a\x20\x20\x20\x20uniform\x20mat4\x20uInverseGeoMatrix;\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uFlattenTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uFlattenRect;\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSelectedColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uFillForeColor;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20varying\x20vec4\x20vSecondColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vPositionEC;\x0a#ifdef\x20VertexNormal\x0a\x20\x20\x20\x20varying\x20vec3\x20vNormalEC;\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_RIGHT8\x20=\x201.0\x20/\x20256.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_RIGHT4\x20=\x201.0\x20/\x2016.0;\x0a\x20\x20\x20\x20const\x20float\x20SHIFT_LEFT4\x20=\x2016.0;\x0a\x20\x20\x20\x20void\x20getTextureMatrixFromZValue(in\x20float\x20nZ,\x20inout\x20float\x20XTran,\x20inout\x20float\x20YTran,\x20inout\x20float\x20scale)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(nZ\x20<=\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel8\x20=\x20floor(nZ\x20*\x20SHIFT_RIGHT8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel16\x20=\x20floor(nDel8\x20*\x20SHIFT_RIGHT8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nDel20\x20=\x20floor(nDel16\x20*\x20SHIFT_RIGHT4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20YTran\x20=\x20nZ\x20-\x20nDel8\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20XTran\x20=\x20nDel8\x20-\x20nDel16\x20*\x20SHIFT_LEFT8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20nLevel\x20=\x20nDel16\x20-\x20nDel20\x20*\x20SHIFT_LEFT4;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20nLevel);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20void\x20operation(vec4\x20operationType,\x20vec4\x20color,\x20vec4\x20selectedColor,\x20inout\x20vec4\x20vertexColor)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20right_2\x20=\x20operationType.x\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20right_4\x20=\x20right_2\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20right_8\x20=\x20right_4\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20right_16\x20=\x20right_8\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20isSetColor\x20=\x20fract(right_2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(isSetColor\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertexColor\x20*=\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20isPicked\x20=\x20fract(floor(right_2)*\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(isPicked\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertexColor\x20*=\x20selectedColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20isHide\x20=\x20fract(floor(right_4)*\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(isHide\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertexColor.a\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20float\x20unpackValue(vec4\x20packedValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT16\x20=\x2065536.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20value\x20=\x20packedValue\x20*\x20255.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20value.r\x20*\x20SHIFT_LEFT16\x20+\x20value.g\x20*\x20SHIFT_LEFT8\x20+\x20value.b\x20-\x209000.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20calculateHeight(vec4\x20vertexPos)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20vecPos\x20=\x20uGeoMatrix\x20*\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vecRatio\x20=\x20vec2(uFlattenRect.z\x20-\x20uFlattenRect.x,\x20uFlattenRect.w\x20-\x20uFlattenRect.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20vecTexCoord\x20=\x20vec2(vecPos.x\x20-\x20uFlattenRect.x,\x20vecPos.y\x20-\x20uFlattenRect.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vecTexCoord.x\x20=\x20vecTexCoord.x\x20/\x20vecRatio.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vecTexCoord.y\x20=\x20vecTexCoord.y\x20/\x20vecRatio.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vecTexCoord.x\x20>\x201.0\x20||\x20vecTexCoord.x\x20<\x200.0\x20||\x20vecTexCoord.y\x20>\x201.0\x20||\x20vecTexCoord.y\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vertexPos;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fHeight\x20=\x20unpackValue(texture2D(uFlattenTexture,\x20vecTexCoord.xy));\x0a\x20\x20\x20\x20\x20\x20\x20\x20fHeight\x20=\x20fHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vecPos.z\x20>\x20fHeight)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vecPos.z\x20=\x20fHeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vecPos.w\x20=\x20vecPos.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20uInverseGeoMatrix\x20*\x20vec4(vecPos.xyz,\x201.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20uniform\x20highp\x20sampler2D\x20batchTextureAtlas;\x20\x0a\x20\x20\x20\x20uniform\x20vec4\x20batchTextureAtlasStep;\x20\x0a#ifdef\x20SecTextureAtlas\x0a\x20\x20\x20\x20uniform\x20highp\x20sampler2D\x20batchTextureAtlasSec;\x20\x0a\x20\x20\x20\x20uniform\x20vec4\x20batchTextureAtlasStepSec;\x20\x0a#endif\x0a\x20\x20\x20\x20vec2\x20computeAtlasSt(float\x20batchId,\x20vec4\x20step)\x20\x0a\x20\x20\x20\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20stepX\x20=\x20step.x;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20centerX\x20=\x20step.y;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20numberOfAttributes\x20=\x20float(1);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec2(centerX\x20+\x20(batchId\x20*\x20numberOfAttributes\x20*\x20stepX),\x200.5);\x20\x0a\x20\x20\x20\x20}\x20\x0a\x20\x20\x20\x20vec4\x20atlas_batchTable_xywh(float\x20batchId,\x20sampler2D\x20texture,\x20vec4\x20step)\x20\x0a\x20\x20\x20\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20st\x20=\x20computeAtlasSt(batchId,\x20step);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20st.x\x20+=\x20step.x\x20*\x20float(0);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20textureValue\x20=\x20texture2D(texture,\x20st);\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20value\x20=\x20textureValue;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20value;\x20\x0a\x20\x20\x20\x20}\x20\x0a\x20\x20\x20\x20void\x20getTexAtlasParameter(in\x20vec4\x20xywh,\x20in\x20vec2\x20textureDim,\x20inout\x20vec2\x20translate,\x20inout\x20vec2\x20scale,\x20inout\x20vec2\x20texSize,\x20inout\x20float\x20maxMipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20width\x20=\x20xywh.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20height\x20\x20=\x20xywh.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width\x20*=\x202.0\x20/\x203.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20maxMipLevel\x20=\x20log2(min(width,\x20height));\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale.x\x20=\x20width\x20/\x20textureDim.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale.y\x20=\x20height\x20/\x20textureDim.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20translate.x\x20=\x20xywh.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20translate.y\x20\x20=\x20xywh.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20translate\x20/=\x20textureDim;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texSize.x\x20=\x20width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texSize.y\x20=\x20height;\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifdef\x20COMPUTE_TEXCOORD\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoord.xy\x20=\x20aTexCoord0.xy;\x0a\x20\x20\x20\x20#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(aTextureBatchId0\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vMaxMipLevel.x\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20xywh\x20=\x20atlas_batchTable_xywh(aTextureBatchId0,\x20batchTextureAtlas,\x20batchTextureAtlasStep);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20getTexAtlasParameter(xywh,\x20uTexAtlasDim.xy,\x20vTexAtlasTran.xy,\x20vTexAtlasScale.xy,\x20vTexAtlasSize.xy,\x20vMaxMipLevel.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix\x20=\x20vec4(0.0,0.0,1.0,0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoordTransform.x\x20=\x20aTexCoord0.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexCoordTransform.x\x20<\x20-90000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix.z\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20getTextureMatrixFromZValue(floor(vTexCoordTransform.x),\x20vTexMatrix.x,\x20vTexMatrix.y,\x20vTexMatrix.z);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix.w\x20=\x20log2(uTexture0Width\x20*\x20vTexMatrix.z);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(aTextureBatchIdSec\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vMaxMipLevel.y\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20xywh2\x20=\x20atlas_batchTable_xywh(aTextureBatchIdSec,\x20batchTextureAtlasSec,\x20batchTextureAtlasStepSec);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20getTexAtlasParameter(xywh2,\x20uTexAtlasDim.zw,\x20vTexAtlasTran.zw,\x20vTexAtlasScale.zw,\x20vTexAtlasSize.zw,\x20vMaxMipLevel.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoord.zw\x20=\x20aTexCoord1.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix2\x20=\x20vec4(0.0,0.0,1.0,0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoordTransform.y\x20=\x20aTexCoord1.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexCoordTransform.y\x20<\x20-90000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix2.z\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20getTextureMatrixFromZValue(floor(vTexCoordTransform.y),\x20vTexMatrix2.x,\x20vTexMatrix2.y,\x20vTexMatrix2.z);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexMatrix2.w\x20=\x20log2(uTexture1Width\x20*\x20vTexMatrix.z);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20vertexPos\x20=\x20aPosition;\x0a#ifdef\x20FLATTEN\x0a\x20\x20\x20\x20vertexPos\x20=\x20calculateHeight(vertexPos);\x0a#endif\x0a\x20\x20\x20\x20vec4\x20vertexColor\x20=\x20uFillForeColor;\x0a#ifdef\x20VertexColor\x0a\x20\x20\x20\x20vertexColor\x20*=\x20aColor;\x0a#endif\x0a#ifdef\x20VertexNormal\x0a\x20\x20\x20\x20vec3\x20normal\x20=\x20aNormal;\x0a#endif\x0a#ifdef\x20InstanceBim\x0a\x20\x20\x20\x20mat4\x20worldMatrix;\x0a\x20\x20\x20\x20worldMatrix[0]\x20=\x20uv2;\x0a\x20\x20\x20\x20worldMatrix[1]\x20=\x20uv3;\x0a\x20\x20\x20\x20worldMatrix[2]\x20=\x20uv4;\x0a\x20\x20\x20\x20worldMatrix[3]\x20=\x20vec4(0,\x200,\x200,\x201);\x0a\x20\x20\x20\x20vertexPos\x20=\x20vec4(vertexPos.xyz,1.0)\x20*\x20worldMatrix;\x0a\x20\x20\x20\x20vertexColor\x20*=\x20secondary_colour;\x20\x0a#endif\x0a#ifdef\x20InstancePipe\x0a\x20\x20\x20\x20mat4\x20worldMatrix;\x0a\x20\x20\x20\x20mat4\x20worldMatrix0;\x0a\x20\x20\x20\x20mat4\x20worldMatrix1;\x0a\x20\x20\x20\x20vec4\x20worldPos0;\x0a\x20\x20\x20\x20vec4\x20worldPos1;\x0a\x20\x20\x20\x20worldMatrix0[0]\x20=\x20uv1;\x0a\x20\x20\x20\x20worldMatrix0[1]\x20=\x20uv2;\x0a\x20\x20\x20\x20worldMatrix0[2]\x20=\x20uv3;\x0a\x20\x20\x20\x20worldMatrix0[3]\x20=\x20vec4(\x200.0,\x200.0,\x200.0,\x201.0\x20);\x0a\x20\x20\x20\x20worldMatrix1[0]\x20=\x20uv4;\x0a\x20\x20\x20\x20worldMatrix1[1]\x20=\x20uv5;\x0a\x20\x20\x20\x20worldMatrix1[2]\x20=\x20uv6;\x0a\x20\x20\x20\x20worldMatrix1[3]\x20=\x20vec4(\x200.0,\x200.0,\x200.0,\x201.0\x20);\x0a\x20\x20\x20\x20vec4\x20realVertex\x20=\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20realVertex.x\x20=\x20realVertex.x\x20*\x20uv7.z;\x0a\x20\x20\x20\x20worldPos0\x20=\x20realVertex\x20*\x20worldMatrix0;\x0a\x20\x20\x20\x20worldPos1\x20=\x20realVertex\x20*\x20worldMatrix1;\x0a\x20\x20\x20\x20vertexColor\x20*=\x20secondary_colour;\x20\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20if(aTexCoord0.y\x20>\x200.5)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20tex4Vec\x20=\x20uTexMatrix\x20*\x20vec4(uv7.y,\x20aTexCoord0.x,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoord.xy\x20=\x20tex4Vec.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vertexPos\x20=\x20worldPos1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20worldMatrix\x20=\x20worldMatrix1;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20tex4Vec\x20=\x20uTexMatrix\x20*\x20vec4(uv7.x,\x20aTexCoord0.x,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vTexCoord.xy\x20=\x20tex4Vec.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vertexPos\x20=\x20worldPos0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20worldMatrix\x20=\x20worldMatrix0;\x0a\x20\x20\x20\x20}\x0a#endif\x0a#ifdef\x20VertexNormal\x0a\x20\x20\x20\x20normal.x\x20=\x20normal.x\x20*\x20uv7.z;\x0a#endif\x0a#endif\x0a\x20\x20\x20\x20#ifdef\x20Instance\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20index\x20=\x20instanceId;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20index\x20=\x20batchId;\x0a\x20\x20\x20\x20#endif\x20\x20\x0a\x20\x20\x20\x20#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20\x20\x20\x20\x20wValue\x20=\x20vertexPos.w;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20operationType\x20=\x20s3m_batchTable_operation(index);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20objsColor\x20=\x20s3m_batchTable_color(index);\x0a\x20\x20\x20\x20\x20\x20\x20\x20operation(operationType,\x20objsColor,\x20uSelectedColor,\x20vertexColor);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vSecondColor\x20=\x20s3m_batchTable_pickColor(index);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20positionMC\x20=\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20vertexColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vPositionMC\x20=\x20positionMC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vPositionEC\x20=\x20(czm_modelView\x20*\x20positionMC).xyz;\x0a\x20\x20\x20\x20#ifdef\x20VertexNormal\x0a\x20\x20\x20\x20\x20\x20\x20\x20vNormalEC\x20=\x20czm_normal\x20*\x20normal;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjection\x20*\x20vec4(vertexPos.xyz,\x201.0);\x0a\x20\x20\x20\x20}\x0a','1325329TWAJEx','805281RelBSA','17TunMTO','1hZfspO','245109SxiJqH','2uzBJNr','12799iTdcpx','1307104vGkIIk','681915sXeCbQ'];function _0x258a(_0x27d173,_0x24d9a1){_0x27d173=_0x27d173-0x12f;var _0x115d3c=_0x115d[_0x27d173];return _0x115d3c;}var _0x459384=_0x258a;(function(_0x30cb9a,_0x3141ea){var _0x3947c7=_0x258a;while(!![]){try{var _0x5a414b=-parseInt(_0x3947c7(0x130))+parseInt(_0x3947c7(0x133))+parseInt(_0x3947c7(0x137))*-parseInt(_0x3947c7(0x12f))+-parseInt(_0x3947c7(0x132))+parseInt(_0x3947c7(0x135))*-parseInt(_0x3947c7(0x138))+-parseInt(_0x3947c7(0x139))+-parseInt(_0x3947c7(0x136))*-parseInt(_0x3947c7(0x134));if(_0x5a414b===_0x3141ea)break;else _0x30cb9a['push'](_0x30cb9a['shift']());}catch(_0x36736b){_0x30cb9a['push'](_0x30cb9a['shift']());}}}(_0x115d,0xce965));var _0x2bfa20 = _0x459384(0x131);

    var _0x192b=['928229IwGMmP','1106590hSlZyg','354214fapEsx','1546408ssheuK','1MrYwvG','1221675RiSroa','3PcWMZi','164457WBzLMO','425542epqZwj'];(function(_0x2756a0,_0x332249){var _0x5c1be9=_0x3a4d;while(!![]){try{var _0x4e92cd=parseInt(_0x5c1be9(0x1b9))*parseInt(_0x5c1be9(0x1be))+-parseInt(_0x5c1be9(0x1b7))*-parseInt(_0x5c1be9(0x1bb))+-parseInt(_0x5c1be9(0x1bc))+parseInt(_0x5c1be9(0x1bd))+-parseInt(_0x5c1be9(0x1b8))+-parseInt(_0x5c1be9(0x1b6))+parseInt(_0x5c1be9(0x1ba));if(_0x4e92cd===_0x332249)break;else _0x2756a0['push'](_0x2756a0['shift']());}catch(_0x2920e7){_0x2756a0['push'](_0x2756a0['shift']());}}}(_0x192b,0xc8599));function _0x3a4d(_0x5f3832,_0xe9a4e1){_0x5f3832=_0x5f3832-0x1b6;var _0x192b18=_0x192b[_0x5f3832];return _0x192b18;}var _0x4d46c8 = '\x0a#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a#ifdef\x20GL_EXT_shader_texture_lod\x0a#extension\x20GL_EXT_shader_texture_lod\x20:\x20enable\x0a#endif\x0a\x20\x20\x20\x20uniform\x20vec4\x20uDiffuseColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uAmbientColor;\x0a#ifdef\x20TexCoord\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoord;\x0a#ifdef\x20COMPUTE_TEXCOORD\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture;\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20uniform\x20vec4\x20uTexAtlasDim;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasTran;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasScale;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexAtlasSize;\x0a\x20\x20\x20\x20varying\x20vec2\x20vMaxMipLevel;\x0a#else\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture0Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexCoordTransform;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix;\x0a#endif\x0a#endif\x0a#endif\x0a\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vSecondColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20vec3\x20vPositionEC;\x0a#ifdef\x20VertexNormal\x0a\x20\x20\x20\x20varying\x20vec3\x20vNormalEC;\x0a#endif\x0a#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uTexture2;\x0a\x20\x20\x20\x20uniform\x20float\x20uTexture1Width;\x0a\x20\x20\x20\x20varying\x20vec4\x20vTexMatrix2;\x0a#endif\x20\x0a\x20\x20\x20\x20void\x20calculateMipLevel(in\x20vec2\x20inTexCoord,\x20in\x20float\x20vecTile,\x20in\x20float\x20fMaxMip,\x20inout\x20float\x20mipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dx\x20=\x20dFdx(inTexCoord\x20*\x20vecTile);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dy\x20=\x20dFdy(inTexCoord\x20*\x20vecTile);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotX\x20=\x20dot(dx,\x20dx);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotY\x20=\x20dot(dy,\x20dy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMax\x20=\x20max(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMin\x20=\x20min(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x20(dMax\x20-\x20dMin)\x20/\x20(dMax\x20+\x20dMin);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offset\x20=\x20clamp(offset,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dMax\x20*\x20(1.0\x20-\x20offset)\x20+\x20dMin\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x200.5\x20*\x20log2(d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x20clamp(mipLevel,\x200.0,\x20fMaxMip\x20-\x201.62);\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20void\x20calculateMipLevel(in\x20vec2\x20inTexCoord,\x20in\x20vec2\x20vecTile,\x20in\x20float\x20fMaxMip,\x20inout\x20float\x20mipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dx\x20=\x20dFdx(inTexCoord\x20*\x20vecTile.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20dy\x20=\x20dFdy(inTexCoord\x20*\x20vecTile.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotX\x20=\x20dot(dx,\x20dx);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dotY\x20=\x20dot(dy,\x20dy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMax\x20=\x20max(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dMin\x20=\x20min(dotX,\x20dotY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x20(dMax\x20-\x20dMin)\x20/\x20(dMax\x20+\x20dMin);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offset\x20=\x20clamp(offset,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20dMax\x20*\x20(1.0\x20-\x20offset)\x20+\x20dMin\x20*\x20offset;\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x200.5\x20*\x20log2(d);\x0a\x20\x20\x20\x20\x20\x20\x20\x20mipLevel\x20=\x20clamp(mipLevel,\x200.0,\x20fMaxMip\x20-\x201.62);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20void\x20calculateTexCoord(in\x20vec3\x20inTexCoord,\x20in\x20float\x20scale,\x20in\x20float\x20XTran,\x20in\x20float\x20YTran,\x20in\x20float\x20fTile,\x20in\x20float\x20mipLevel,\x20inout\x20vec2\x20outTexCoord)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(inTexCoord.z\x20<\x20-9000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord\x20=\x20inTexCoord.xy;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20fTexCoord\x20=\x20fract(inTexCoord.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20offset\x20=\x201.0\x20*\x20pow(2.0,\x20mipLevel)\x20/\x20fTile;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fTexCoord\x20=\x20clamp(fTexCoord,\x20offset,\x201.0\x20-\x20offset);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord.x\x20=\x20(fTexCoord.x\x20+\x20XTran)\x20*\x20scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outTexCoord.y\x20=\x20(fTexCoord.y\x20+\x20YTran)\x20*\x20scale;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20getTexColorForS3M(sampler2D\x20curTexture,\x20vec3\x20oriTexCoord,\x20float\x20texTileWidth,\x20float\x20fMaxMipLev,\x20float\x20fTexCoordScale,\x20vec2\x20vecTexCoordTranslate)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20mipLevel\x20=\x200.0;\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateMipLevel(oriTexCoord.xy,\x20texTileWidth,\x20fMaxMipLev,\x20mipLevel);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20realTexCoord;\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateTexCoord(oriTexCoord,\x20fTexCoordScale,\x20vecTexCoordTranslate.x,\x20vecTexCoordTranslate.y,\x20texTileWidth,\x20mipLevel,\x20realTexCoord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(oriTexCoord.z\x20<\x20-9000.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2D(curTexture,\x20realTexCoord.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ifdef\x20GL_EXT_shader_texture_lod\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2DLodEXT(curTexture,\x20realTexCoord.xy,\x20mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color\x20=\x20texture2D(curTexture,\x20realTexCoord.xy,\x20mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20color;\x0a\x20\x20\x20\x20}\x0a#ifdef\x20COMPUTE_TEXCOORD\x0a#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20vec4\x20getTextureAtlasColor(sampler2D\x20texture,\x20vec2\x20uv,\x20vec2\x20texDim,\x20vec2\x20texTran,\x20vec2\x20texScale,\x20float\x20maxMipLevel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(maxMipLevel\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20colorCeil\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20mipLevel\x20=\x200.0;\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateMipLevel(uv,\x20texDim,\x20maxMipLevel,\x20mipLevel);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20ceilMipLevel\x20=\x20ceil(mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20translate\x20=\x20vec2(texTran.x,\x20texTran.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20temp;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(ceilMipLevel\x20>\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20translate.x\x20=\x20texTran.x\x20+\x20texScale.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20temp\x20=\x20pow(2.0,\x20ceilMipLevel\x20-\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20translate.y\x20=\x20texTran.y\x20+\x20texScale.y\x20*\x20(temp\x20-\x201.0)\x20/\x20temp;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20ceilMipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20texcoord\x20=\x20fract(uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offsetX\x20=\x20pow(2.0,\x20ceilMipLevel)\x20/\x20texDim.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20offsetY\x20=\x20pow(2.0,\x20ceilMipLevel)\x20/\x20texDim.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.x\x20=\x20clamp(texcoord.x,\x200.0\x20+\x20offsetX,\x201.0\x20-\x20offsetX);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.y\x20=\x20clamp(texcoord.y,\x200.0\x20+\x20offsetY,\x201.0\x20-\x20offsetY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.x\x20=\x20texcoord.x\x20*\x20texScale.x\x20*\x20scale\x20+\x20translate.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.y\x20=\x20texcoord.y\x20*\x20texScale.y\x20*\x20scale\x20+\x20translate.y;\x0a\x20\x20\x20\x20#ifdef\x20GL_EXT_shader_texture_lod\x0a\x20\x20\x20\x20\x20\x20\x20\x20colorCeil\x20=\x20texture2DLodEXT(texture,\x20texcoord.xy,\x200.0);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20colorCeil\x20=\x20texture2D(texture,\x20texcoord.xy,\x200.0);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20colorFloor\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20floorMipLevel\x20=\x20floor(mipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20translate\x20=\x20vec2(texTran.x,\x20texTran.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(floorMipLevel\x20>\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20translate.x\x20=\x20texTran.x\x20+\x20texScale.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20temp\x20=\x20pow(2.0,\x20floorMipLevel\x20-\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20translate.y\x20=\x20texTran.y\x20+\x20texScale.y\x20*\x20(temp\x20-\x201.0)\x20/\x20temp;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20floorMipLevel);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord\x20=\x20fract(uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20offsetX\x20=\x20pow(2.0,\x20floorMipLevel)\x20/\x20texDim.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20offsetY\x20=\x20pow(2.0,\x20floorMipLevel)\x20/\x20texDim.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.x\x20=\x20clamp(texcoord.x,\x200.0\x20+\x20offsetX,\x201.0\x20-\x20offsetX);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.y\x20=\x20clamp(texcoord.y,\x200.0\x20+\x20offsetY,\x201.0\x20-\x20offsetY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.x\x20=\x20texcoord.x\x20*\x20texScale.x\x20*\x20scale\x20+\x20translate.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20texcoord.y\x20=\x20texcoord.y\x20*\x20texScale.y\x20*\x20scale\x20+\x20translate.y;\x0a\x20\x20\x20\x20#ifdef\x20GL_EXT_shader_texture_lod\x0a\x20\x20\x20\x20\x20\x20\x20\x20colorFloor\x20=\x20texture2DLodEXT(texture,\x20texcoord.xy,\x200.0);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20colorFloor\x20=\x20texture2D(texture,\x20texcoord.xy,\x200.0);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20colorCeil\x20*\x200.5\x20+\x20colorFloor\x20*\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20color;\x0a\x20\x20\x20\x20}\x0a#else\x0a\x20\x20\x20\x20vec4\x20getTextureColor()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vTexMatrix.z\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texTileWidth0\x20=\x20vTexMatrix.z\x20*\x20uTexture0Width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20realTexCoord\x20=\x20vec3(vTexCoord.xy,\x20vTexCoordTransform.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20FColor\x20=\x20getTexColorForS3M(uTexture,\x20realTexCoord,\x20texTileWidth0,\x20vTexMatrix.w,\x20vTexMatrix.z,\x20vTexMatrix.xy);\x0a\x20\x20\x20\x20#ifdef\x20TexCoord2\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20texTileWidth1\x20=\x20vTexMatrix2.z\x20*\x20uTexture1Width;\x0a\x20\x20\x20\x20\x20\x20\x20\x20realTexCoord\x20=\x20vec3(vTexCoord.zw,\x20vTexCoordTransform.y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20SColor\x20=\x20getTexColorForS3M(uTexture2,\x20realTexCoord,\x20texTileWidth1,\x20vTexMatrix2.w,\x20vTexMatrix2.z,\x20vTexMatrix2.xy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.r\x20=\x20clamp(SColor.r,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.g\x20=\x20clamp(SColor.g,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20SColor.b\x20=\x20clamp(SColor.b,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20FColor\x20*\x20SColor;\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20FColor;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20}\x0a#endif\x0a#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20const\x20float\x20M_PI\x20=\x203.141592653589793;\x0a\x20\x20\x20\x20vec3\x20SRGBtoLINEAR3(vec3\x20srgbIn)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20pow(srgbIn,\x20vec3(2.2));\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20SRGBtoLINEAR4(vec4\x20srgbIn)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20srgbIn\x20=\x20srgbIn\x20;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20linearOut\x20=\x20pow(srgbIn.rgb,\x20vec3(2.2));\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(linearOut,\x20srgbIn.a);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec3\x20LINEARtoSRGB(vec3\x20linearIn)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifndef\x20HDR\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20pow(linearIn,\x20vec3(1.0/2.2));\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20linearIn;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20vec3\x20lambertianDiffuse(vec3\x20diffuseColor)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20diffuseColor\x20/\x20M_PI;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec3\x20fresnelSchlick2(vec3\x20f0,\x20vec3\x20f90,\x20float\x20VdotH)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20f0\x20+\x20(f90\x20-\x20f0)\x20*\x20pow(clamp(1.0\x20-\x20VdotH,\x200.0,\x201.0),\x205.0);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20smithVisibilityG1(float\x20NdotV,\x20float\x20roughness)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20k\x20=\x20(roughness\x20+\x201.0)\x20*\x20(roughness\x20+\x201.0)\x20/\x208.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20NdotV\x20/\x20(NdotV\x20*\x20(1.0\x20-\x20k)\x20+\x20k);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20smithVisibilityGGX(float\x20roughness,\x20float\x20NdotL,\x20float\x20NdotV)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20smithVisibilityG1(NdotL,\x20roughness)\x20*\x20smithVisibilityG1(NdotV,\x20roughness);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20GGX(float\x20roughness,\x20float\x20NdotH)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20roughnessSquared\x20=\x20roughness\x20*\x20roughness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20f\x20=\x20(NdotH\x20*\x20roughnessSquared\x20-\x20NdotH)\x20*\x20NdotH\x20+\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20roughnessSquared\x20/\x20(M_PI\x20*\x20f\x20*\x20f);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec3\x20applyTonemapping(vec3\x20linearIn)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20#ifndef\x20HDR\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20czm_acesTonemapping(linearIn);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20linearIn;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20}\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20uniform\x20float\x20uClipMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uClipPlanes[6];\x0a\x20\x20\x20\x20float\x20clipBehindAllPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20#ifdef\x20CLIPPLANE\x0a\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20czm_planeDistance(uClipPlanes[0].xyz,\x20uClipPlanes[0].w,\x20vertex.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if\x20(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20czm_planeDistance(uClipPlanes[i].xyz,\x20uClipPlanes[i].w,\x20vertex.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAnyPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20czm_planeDistance(uClipPlanes[i].xyz,\x20uClipPlanes[i].w,\x20vertex.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if((distance\x20+\x20fBorderWidth)\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20clipAnythingButLine(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20czm_planeDistance(uClipPlanes[i].xyz,\x20uClipPlanes[i].w,\x20vertex.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20clip(vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(vertex.x));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(vertex.y));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x201.0;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20clipResult\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x201.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAnyPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x202.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAllPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x203.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipAnythingButLine(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(clipResult\x20<\x20-0.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(clipResult\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uHypsometricTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uMinMaxValue;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uOpacityIntervalFillMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uHypLineColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uNoValueColor;\x0a\x20\x20\x20\x20varying\x20float\x20wValue;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20float\x20computeMixCon(float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distanceToContour;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20interval\x20=\x20uOpacityIntervalFillMode.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(abs(maxVisibleValue\x20-\x20minVisibleValue)\x20>\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(fValue\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20mod(fValue\x20-\x200.0002,\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20t\x20=\x20floor(fValue\x20/\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20abs(fValue\x20-\x20(t\x20*\x20interval)\x20-\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distanceToContour\x20=\x20abs(fValue\x20-\x20maxVisibleValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(fValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(fValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dF\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20distanceToContour\x20<\x20dF\x20?\x201.0\x20:\x200.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20computeContourMapColor(float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20floorValue\x20=\x20uMinMaxValue.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20ceilValue\x20=\x20uMinMaxValue.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20threshold\x20=\x20abs(ceilValue\x20-\x20floorValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20contourRate\x20=\x20(fValue\x20-\x20floorValue)\x20/\x20threshold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20finalCoord\x20=\x20clamp(contourRate,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20count\x20=\x20floor(finalCoord\x20*\x2016.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20y\x20=\x20(count*2.0\x20+\x201.0)/32.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20x\x20=\x20fract(finalCoord*16.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(y\x20>\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20x\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20contourCoord\x20=\x20vec2(x,\x20y);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20texture2D(uHypsometricTexture,\x20contourCoord);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec4\x20getContourMapColor(vec4\x20oriColor,\x20float\x20fValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20contourMapColor\x20=\x20vec4(0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20finalOpacity\x20=\x20uOpacityIntervalFillMode.x;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fillMode\x20=\x20uOpacityIntervalFillMode.z;\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(fValue\x20>\x20maxVisibleValue\x20+\x204.0\x20||\x20fValue\x20<\x20minVisibleValue\x20-\x204.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20uNoValueColor\x20*\x20oriColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(fillMode\x20>\x202.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20mix_con\x20=\x20computeMixCon(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20mix(computeContourMapColor(fValue),\x20uHypLineColor,\x20mix_con);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(fillMode\x20>\x201.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalOpacity\x20=\x20computeMixCon(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20uHypLineColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(fillMode\x20>\x200.9)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20contourMapColor\x20=\x20computeContourMapColor(fValue);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20finalOpacity\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20finalColor\x20=\x20mix(oriColor,\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20#ifdef\x20PT_CLOUD\x0a\x20\x20\x20\x20\x20\x20\x20\x20finalColor\x20=\x20mix(vec4(1.0,1.0,1.0,1.0),\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20finalColor;\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20vec3\x20computeNormal(in\x20vec3\x20oriVertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20normal\x20=\x20cross(vec3(dFdx(oriVertex.x),\x20dFdx(oriVertex.y),\x20dFdx(oriVertex.z)),\x20vec3(dFdy(oriVertex.x),\x20dFdy(oriVertex.y),\x20dFdy(oriVertex.z)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20normal\x20=\x20normalize(normal);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20normal;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec3\x20directionLight(vec3\x20normalEC)\x20\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20vec3\x20SunLightColor\x20=\x20vec3(0.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20vec3\x20AmbientLightColor\x20=\x20vec3(0.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20totalDiffuseLight\x20=\x20vec3(0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20totalSpecularLight\x20=\x20vec3(0.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20sunLightDiffuseWeight\x20=\x20max(\x20dot(\x20normalEC,\x20czm_lightDirectionEC\x20),\x200.0\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20totalDiffuseLight\x20=\x20SunLightColor\x20*\x20sunLightDiffuseWeight;\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20uDiffuseColor.rgb\x20*\x20(totalDiffuseLight\x20+\x20AmbientLightColor\x20*\x20uAmbientColor.rgb)\x20+\x20totalSpecularLight;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(vColor.a\x20<\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20\x0a\x20\x20\x20\x20#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20baseColorWithAlpha\x20=\x20vColor;\x0a\x20\x20\x20\x20#ifdef\x20COMPUTE_TEXCOORD\x0a\x20\x20\x20\x20#ifdef\x20TextureAtlas\x0a\x20\x20\x20\x20\x20\x20\x20\x20baseColorWithAlpha\x20*=\x20getTextureAtlasColor(uTexture,\x20vTexCoord.xy,\x20vTexAtlasSize.xy,\x20vTexAtlasTran.xy,\x20vTexAtlasScale.xy,\x20vMaxMipLevel.x);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20baseColorWithAlpha\x20*=\x20getTextureColor();\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(baseColorWithAlpha.a\x20<\x200.1)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20outColor\x20=\x20baseColorWithAlpha;\x0a\x20\x20\x20\x20#ifndef\x20USE_LINECOLOR\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20ng\x20=\x20vec3(0.0);\x0a\x20\x20\x20\x20#ifdef\x20VertexNormal\x0a\x20\x20\x20\x20\x20\x20\x20\x20ng\x20=\x20normalize(vNormalEC);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20ng\x20=\x20length(ng)\x20>\x200.1\x20?\x20ng\x20:\x20computeNormal(vPositionMC.xyz);\x0a\x20\x20\x20\x20#ifdef\x20HAS_NORMAL_TEXTURE\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20pos_dx\x20=\x20dFdx(vPositionEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20pos_dy\x20=\x20dFdy(vPositionEC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20tex_dx\x20=\x20dFdx(vec3(vTexCoord.xy,\x200.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20tex_dy\x20=\x20dFdy(vec3(vTexCoord.xy,\x200.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20t\x20=\x20(tex_dy.t\x20*\x20pos_dx\x20-\x20tex_dx.t\x20*\x20pos_dy)\x20/\x20(tex_dx.s\x20*\x20tex_dy.t\x20-\x20tex_dy.s\x20*\x20tex_dx.t);\x0a\x20\x20\x20\x20\x20\x20\x20\x20t\x20=\x20normalize(t\x20-\x20ng\x20*\x20dot(ng,\x20t));\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20b\x20=\x20normalize(cross(ng,\x20t));\x0a\x20\x20\x20\x20\x20\x20\x20\x20mat3\x20tbn\x20=\x20mat3(t,\x20b,\x20ng);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20n\x20=\x20texture2D(uNormalTexture,\x20vTexCoord.xy).rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20n\x20=\x20normalize(tbn\x20*\x20(2.0\x20*\x20n\x20-\x201.0));\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20n\x20=\x20ng;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20baseColor\x20=\x20baseColorWithAlpha.rgb;\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor.rgb\x20=\x20baseColor\x20*\x20directionLight(n);\x0a\x20\x20\x20\x20#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor\x20=\x20getContourMapColor(outColor,\x20wValue);\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20#ifdef\x20CLIP\x0a\x20\x20\x20\x20\x20\x20\x20\x20outColor\x20*=\x20clip(vec4(vPositionEC,\x201.0));\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20outColor;\x0a\x20\x20\x20\x20}\x0a';

    var _0x5e5a=['681987CHiwNj','1194499VgXhCj','171073zwcmbw','127609AHAhCb','precision\x20highp\x20float;\x0aconst\x20float\x20uPixelRatio\x20=\x201.0;\x0a//\x20Inputs\x0aattribute\x20vec3\x20aPosition0;\x0aattribute\x20vec3\x20aPosition1;\x0a//attribute\x20float\x20aVariantOffset;\x0a//attribute\x20float\x20aVariantStroke;\x0a//attribute\x20float\x20aVariantExtension;\x0a\x0a#ifdef\x20SILHOUETTE\x0aattribute\x20vec3\x20aNormalA;\x0aattribute\x20vec3\x20aNormalB;\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0aattribute\x20vec3\x20aNormal;\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0aattribute\x20vec2\x20aSideness;\x0a//attribute\x20vec2\x20aPackedAttributes;\x0a\x0astruct\x20UnpackedAttributes\x0a{\x0a\x20\x20\x20\x20vec2\x20sideness;\x0a\x20\x20\x20\x20vec2\x20sidenessNorm;\x0a\x20\x20\x20\x20float\x20lineWidthPixels;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels;\x0a#if\x20(MODE\x20==\x202)\x0a\x20\x20\x20\x20float\x20type;\x0a#endif\x0a};\x0a\x0a//\x20Output\x20required\x20to\x20compute\x20color\x0avarying\x20vec4\x20vColor;\x0a//\x20Output\x20required\x20to\x20compute\x20distance\x20to\x20line/caps\x0avarying\x20vec3\x20vPosition;\x20\x0avarying\x20vec3\x20vViewPosition;\x0avarying\x20float\x20vRadius;\x0avarying\x20float\x20vLineLengthPixels;\x0avarying\x20float\x20vSizeFalloffFactor;\x0avarying\x20float\x20vDistanceFromEye;\x0a\x0auniform\x20float\x20uLineWidth;\x0auniform\x20vec4\x20uLineColor;\x0aconst\x20vec2\x20uDepthBias\x20=\x20vec2(0.5,\x20-4e-4);\x0a\x0a//\x20Utility\x20function\x20to\x20check\x20for\x20NaN\x20values\x0abool\x20isNaN(float\x20val)\x0a{\x0a\x20\x20\x20\x20return\x20(\x20val\x20<\x200.0\x20||\x200.0\x20<\x20val\x20||\x20val\x20==\x200.0\x20)\x20?\x20false\x20:\x20true;\x0a\x20\x20\x20\x20//\x20important:\x20some\x20nVidias\x20failed\x20to\x20cope\x20with\x20version\x20below.\x0a\x20\x20\x20\x20//\x20Probably\x20wrong\x20optimization.\x0a\x20\x20\x20\x20/*return\x20(\x20val\x20<=\x200.0\x20||\x200.0\x20<=\x20val\x20)\x20?\x20false\x20:\x20true;*/\x0a}\x0a\x0avec2\x20calculateProjectedBiasXY(vec4\x20projPos,\x20vec3\x20worldNormal)\x0a{\x0a\x20\x20\x20\x20float\x20offsetXY\x20=\x20uDepthBias.x;\x0a\x20\x20\x20\x20float\x20offsetZ\x20\x20=\x20uDepthBias.y;\x0a\x20\x20\x20\x20vec4\x20projNormal\x20=\x20czm_projection\x20*\x20czm_view\x20*\x20vec4(worldNormal,\x200.0);\x0a\x20\x20\x20\x20return\x20offsetXY\x20*\x20projPos.w\x20*\x202.0\x20/\x20czm_viewport.zw\x20*\x20normalize(projNormal.xyz).xy;\x0a}\x0a\x0a//\x20A\x20z-offset,\x20using\x20a\x20depth\x20based\x20heuristic.\x0afloat\x20calculateProjectedBiasZ(vec4\x20projPos)\x0a{\x0a\x20\x20\x20\x20float\x20fProjZ\x20=\x20projPos.z\x20/\x20projPos.w;\x0a\x20\x20\x20\x20if(fProjZ\x20<\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x200.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20offsetZ\x20=\x20uDepthBias.y;\x0a\x20\x20\x20\x20return\x20sqrt(projPos.z)\x20*\x20offsetZ;\x0a}\x0a\x0avec4\x20adjustProjectedPosition(vec4\x20projPos,\x20vec3\x20worldNormal,\x20float\x20lineWidth)\x0a{\x0a\x20\x20\x20\x20vec2\x20offsetXY\x20=\x20calculateProjectedBiasXY(projPos,\x20worldNormal);\x0a\x20\x20\x20\x20//\x20we\x20currently\x20have\x20to\x20do\x20this\x20check\x20because\x20some\x20geometries\x20come\x20with\x200\x20length\x20edge\x20normals.\x0a\x20\x20\x20\x20if\x20(!isNaN(offsetXY.x)\x20&&\x20!isNaN(offsetXY.y))\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20projPos.xy\x20+=\x20offsetXY;\x0a\x20\x20\x20\x20}\x0a#ifdef\x20LOG_DEPTH\x0a\x20\x20\x20\x20vDistanceFromEye\x20=\x20projPos.w;\x0a#else\x0a\x20\x20\x20\x20projPos.z\x20+=\x20calculateProjectedBiasZ(projPos);\x0a#endif\x0a\x20\x20\x20\x20return\x20projPos;\x0a}\x0a\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x201)\x0auniform\x20vec2\x20uStrokesTextureScale;\x0auniform\x20float\x20uStrokesLog2Resolution;\x0auniform\x20float\x20uStrokeVariants;\x0avarying\x20vec2\x20vStrokeUV;\x0avarying\x20float\x20vLineIndex;\x0avoid\x20calculateStyleOutputsSketch(float\x20lineLength,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20unpackedAttributes.sidenessNorm;\x0a\x20\x20\x20\x20float\x20lineIndex\x20=\x20clamp(ceil(log2(lineLength)),\x200.0,\x20uStrokesLog2Resolution);\x0a\x20\x20\x20\x20vStrokeUV\x20=\x20vec2(exp2(lineIndex)\x20*\x20sidenessNorm.y,\x20lineIndex\x20*\x20uStrokeVariants\x20+\x20aVariantStroke\x20+\x200.5)\x20*\x20uStrokesTextureScale;\x0a\x20\x20\x20\x20vStrokeUV.x\x20+=\x20aVariantOffset;\x0a\x20\x20\x20\x20vLineIndex\x20=\x20lineIndex;\x0a}\x0a#endif\x0a\x0a#if\x20(MODE\x20==\x200)\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{}\x0a#elif\x20(MODE\x20==\x201)\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20calculateStyleOutputsSketch(vLineLengthPixels,\x20unpackedAttributes);\x0a}\x0a#elif\x20(MODE\x20==\x202)\x0avarying\x20float\x20vType;\x0avoid\x20calculateStyleOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec4\x20projPos,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vType\x20=\x20unpackedAttributes.type;\x0a\x20\x20\x20\x20if\x20(unpackedAttributes.type\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20calculateStyleOutputsSketch(vLineLengthPixels,\x20unpackedAttributes);\x0a\x20\x20\x20\x20}\x0a}\x0a#endif\x0a\x0a\x0a//\x20Solid\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x200)\x0afloat\x20calculateLineAmplitudeSolid()\x0a{\x0a\x20\x20\x20\x20return\x200.0;\x0a}\x0a#endif\x0a#if\x20(MODE\x20==\x200)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineAmplitudeSolid();\x0a}\x0a#endif\x0a//\x20Sketch\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x201)\x0a\x20\x20\x20\x20uniform\x20float\x20uStrokesAmplitude;\x0afloat\x20calculateLineAmplitudeSketch()\x0a{\x0a\x20\x20\x20\x20return\x20uStrokesAmplitude;\x0a}\x0a#endif\x0a#if\x20(MODE\x20==\x201)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineAmplitudeSketch();\x0a}\x0a#endif\x0a//\x20Uber\x0a#if\x20(MODE\x20==\x202)\x0afloat\x20calculateLineAmplitude(UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20float\x20type\x20=\x20unpackedAttributes.type;\x0a\x20\x20\x20\x20if\x20(type\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineAmplitudeSketch();\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineAmplitudeSolid();\x0a\x20\x20\x20\x20}\x0a}\x0a#endif\x0a\x0a\x0auniform\x20float\x20uDistanceFalloffFactor;\x0afloat\x20distanceBasedPerspectiveFactor(float\x20distance)\x0a{\x0a\x20\x20\x20\x20return\x20clamp(sqrt(uDistanceFalloffFactor\x20/\x20distance),\x200.0,\x201.0);\x0a}\x0a\x0a#define\x20COMPONENT_COLOR_FIELD_OFFSET\x200.0\x0a#define\x20COMPONENT_OTHER_FIELDS_OFFSET\x201.0\x0a#define\x20COMPONENT_FIELD_COUNT\x202.0\x0a#define\x20LINE_WIDTH_FRACTION_FACTOR\x208.0\x0a#define\x20EXTENSION_LENGTH_OFFSET\x20128.0\x0a#define\x20COMPONENT_TEX_WIDTH\x204096.0\x0a\x0astruct\x20ComponentData\x0a{\x0a\x20\x20\x20\x20float\x20lineWidth;\x0a\x20\x20\x20\x20float\x20extensionLength;\x0a\x20\x20\x20\x20float\x20type;\x0a};\x0a\x0a\x0aComponentData\x20readComponentData()\x0a{\x0a\x20\x20\x20\x20return\x20ComponentData(uLineWidth,\x200.0,\x200.0);\x0a}\x0a\x0avec3\x20modelToWorldNormal(vec3\x20normal)\x0a{\x0a\x20\x20\x20\x20return\x20(czm_model\x20*\x20vec4(normal,\x200.0)).xyz;\x0a}\x0a\x0avec3\x20silhouetteWorldNormal(vec3\x20normalA,\x20vec3\x20normalB)\x0a{\x0a\x20\x20\x20\x20return\x20modelToWorldNormal(normalize(normalA\x20+\x20normalB));\x0a}\x0a\x0a//\x20Fall-off\x20extension\x20length\x20for\x20shorter\x20strokes,\x20starting\x20from\x20strokes\x20that\x20are\x20256\x20size,\x0a//\x20fall-off\x20exponentially\x0afloat\x20calculateExtensionLength(float\x20extensionLength,\x20float\x20lineLength)\x0a{\x0a\x20\x20\x20\x20return\x20extensionLength\x20/\x20(log2(max(1.0,\x20256.0\x20/\x20lineLength))\x20*\x200.2\x20+\x201.0);\x0a}\x0a\x0a#ifdef\x20SILHOUETTE\x0a//\x20#uniforms:\x20czm_view,\x20czm_model\x0abool\x20isSilhouetteEdge(vec4\x20viewPos,\x20vec3\x20normalA,\x20vec3\x20normalB)\x0a{\x0a//\x20transform\x20the\x20two\x20face\x20normals\x0a\x20\x20\x20\x20vec3\x20viewNormalA\x20=\x20(czm_view\x20*\x20czm_model\x20*\x20vec4(normalA,\x200.0)).xyz;\x0a\x20\x20\x20\x20vec3\x20viewNormalB\x20=\x20(czm_view\x20*\x20czm_model\x20*\x20vec4(normalB,\x200.0)).xyz;\x0a//\x20compute\x20the\x20direction\x20from\x20the\x20edge\x20to\x20the\x20camera\x0a\x20\x20\x20\x20vec3\x20viewDir\x20=\x20-viewPos.xyz;\x0a//\x20check\x20which\x20of\x20the\x20two\x20faces\x20are\x20visible\x0a//\x20display\x20the\x20edge\x20if\x20exactly\x20one\x20of\x20the\x20two\x20is\x20visible\x0a\x20\x20\x20\x20float\x20faceAVisible\x20=\x20dot(viewDir,\x20viewNormalA);\x0a//\x20positive\x20if\x20visible\x0a\x20\x20\x20\x20float\x20faceBVisible\x20=\x20dot(viewDir,\x20viewNormalB);\x0a//\x20positive\x20if\x20visible\x0a//\x201\x20if\x20exactly\x20one\x20face\x20visible,\x200\x20otherwise\x0a\x20\x20\x20\x20return\x20faceAVisible\x20*\x20faceBVisible\x20<\x200.0;\x0a}\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0avoid\x20clipLineSegmentToNearPlane(vec3\x20p0,vec3\x20p1,out\x20bool\x20clipped,out\x20bool\x20culledByNearPlane,out\x20vec4\x20clippedPositionEC)\x0a{\x0a\x20\x20\x20\x20culledByNearPlane\x20=\x20false;\x0a\x20\x20\x20\x20clipped\x20=\x20false;\x0a\x20\x20\x20\x20vec3\x20p0ToP1\x20=\x20p1\x20-\x20p0;\x0a\x20\x20\x20\x20float\x20magnitude\x20=\x20length(p0ToP1);\x0a\x20\x20\x20\x20vec3\x20direction\x20=\x20normalize(p0ToP1);\x0a\x20\x20\x20\x20float\x20endPoint0Distance\x20=\x20\x20czm_currentFrustum.x\x20+\x20p0.z;\x0a\x20\x20\x20\x20float\x20denominator\x20=\x20-direction.z;\x0a\x20\x20\x20\x20if\x20(endPoint0Distance\x20>\x200.0\x20&&\x20abs(denominator)\x20<\x20czm_epsilon7)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20culledByNearPlane\x20=\x20true;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x20if\x20(endPoint0Distance\x20>\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20t\x20=\x20endPoint0Distance\x20/\x20denominator;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(t\x20<\x200.0\x20||\x20t\x20>\x20magnitude)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20culledByNearPlane\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20p0\x20=\x20p0\x20+\x20t\x20*\x20direction;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20p0.z\x20=\x20min(p0.z,\x20-czm_currentFrustum.x);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipped\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20clippedPositionEC\x20=\x20vec4(p0,\x201.0);\x0a}\x0a\x0afloat\x20writeNonPerspective(float\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec2\x20writeNonPerspective(vec2\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec3\x20writeNonPerspective(vec3\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec4\x20writeNonPerspective(vec4\x20value,\x20float\x20w)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20w;\x0a}\x0a\x0avec4\x20calculateGeometricOutputs(vec4\x20viewPosV0,\x20vec4\x20viewPosV1,\x20vec4\x20worldPosV0,\x20vec4\x20worldPosV1,\x20vec3\x20worldNormal,\x20UnpackedAttributes\x20unpackedAttributes)\x0a{\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20unpackedAttributes.sideness;\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20unpackedAttributes.sidenessNorm;\x0a\x20\x20\x20\x20vec4\x20clippedViewPosV0;\x20\x20\x20\x20bool\x20clippedV0,culledV0;\x20\x20\x20\x20clipLineSegmentToNearPlane(viewPosV0.xyz,\x20viewPosV1.xyz,\x20clippedV0,\x20culledV0,\x20clippedViewPosV0);\x20\x20\x20\x20vec4\x20clippedViewPosV1;\x20\x20\x20\x20bool\x20clippedV1,\x20culledV1;\x20\x20\x20\x20clipLineSegmentToNearPlane(viewPosV1.xyz,\x20viewPosV0.xyz,\x20clippedV1,\x20culledV1,\x20clippedViewPosV1);\x20\x20\x20\x20vec4\x20viewPos\x20=\x20mix(clippedViewPosV0,\x20clippedViewPosV1,\x20sidenessNorm.y);\x0a\x20\x20\x20\x20vViewPosition\x20=\x20viewPos.xyz\x20/\x20viewPos.w;\x0a\x20\x20\x20\x20vec4\x20projPosV0\x20=\x20czm_projection\x20*\x20clippedViewPosV0;\x0a\x20\x20\x20\x20vec4\x20projPosV1\x20=\x20czm_projection\x20*\x20clippedViewPosV1;\x0a\x20\x20\x20\x20vec4\x20projPos\x20=\x20czm_projection\x20*\x20viewPos;\x0a\x20\x20\x20\x20vec3\x20screenSpaceLineNDC\x20=\x20(projPosV1.xyz\x20/\x20projPosV1.w\x20-\x20projPosV0.xyz\x20/\x20projPosV0.w);\x0a\x20\x20\x20\x20vec2\x20uNDCToPixel\x20=\x20vec2(czm_viewport.z\x20/\x202.0,\x20czm_viewport.w\x20/\x202.0);\x0a\x20\x20\x20\x20vec2\x20screenSpaceLinePixels\x20=\x20screenSpaceLineNDC.xy\x20*\x20uNDCToPixel;\x0a\x20\x20\x20\x20float\x20lineLengthPixels\x20=\x20length(screenSpaceLinePixels);\x0a\x20\x20\x20\x20float\x20dzPerPixel\x20=\x20screenSpaceLineNDC.z\x20/\x20lineLengthPixels;\x0a\x20\x20\x20\x20vec2\x20screenSpaceDirection\x20=\x20screenSpaceLinePixels\x20/\x20lineLengthPixels;\x0a\x20\x20\x20\x20vec2\x20perpendicularScreenSpaceDirection\x20=\x20vec2(screenSpaceDirection.y,\x20-screenSpaceDirection.x)\x20*\x20sideness.x;\x0a\x20\x20\x20\x20float\x20falloffFactor\x20=\x20distanceBasedPerspectiveFactor(-viewPos.z)\x20*\x20uPixelRatio;\x0a\x20\x20\x20\x20float\x20lineWidthPixels\x20=\x20unpackedAttributes.lineWidthPixels\x20*\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20calculateExtensionLength(unpackedAttributes.extensionLengthPixels,\x20lineLengthPixels)\x20*\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20lineAmplitudePixels\x20=\x20calculateLineAmplitude(unpackedAttributes)\x20*\x20uPixelRatio;\x0a\x20\x20\x20\x20vSizeFalloffFactor\x20=\x20falloffFactor;\x0a\x20\x20\x20\x20float\x20lineWidthAndAmplitudePixels\x20=\x20lineWidthPixels\x20+\x20lineAmplitudePixels\x20+\x20lineAmplitudePixels;\x0a\x20\x20\x20\x20float\x20extendedLineLengthPixels\x20=\x20lineLengthPixels\x20+\x20extensionLengthPixels\x20+\x20extensionLengthPixels;\x0a#ifdef\x20ANTIALIASING\x0a\x20\x20\x20\x20const\x20float\x20aaPaddingPixels\x20=\x201.0;\x0a\x20\x20\x20\x20//\x20Line\x20size\x20with\x20padding\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineWidthAndAmplitudePixels\x20=\x20lineWidthAndAmplitudePixels\x20*\x200.5\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20float\x20aaPaddedRoundedCapSizePixels\x20=\x20lineWidthPixels\x20*\x200.5\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20//\x20Line\x20length\x20with\x20padding\x0a\x20\x20\x20\x20float\x20aaPaddedLineLengthPixels\x20=\x20extendedLineLengthPixels\x20+\x20aaPaddingPixels\x20+\x20aaPaddingPixels;\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineLengthPixels\x20=\x20aaPaddedLineLengthPixels\x20*\x200.5;\x0a#else\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20//\x20Even\x20if\x20there\x20is\x20no\x20AA,\x20we\x20still\x20want\x20to\x20do\x20proper\x20<1px\x20rendering,\x0a\x20\x20\x20\x20//\x20so\x20we\x20effectively\x20clamp\x20the\x20pixel\x20sizes\x20to\x20minimum\x20of\x201px\x20and\x20compute\x0a\x20\x20\x20\x20//\x20coverage\x20in\x20the\x20fragment\x20shader\x20\x20\x20\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineWidthAndAmplitudePixels\x20=\x20max(lineWidthAndAmplitudePixels,\x201.0)\x20*\x200.5;\x0a\x20\x20\x20\x20float\x20aaPaddedRoundedCapSizePixels\x20=\x20max(lineWidthPixels,\x201.0)\x20*\x200.5;\x0a\x20\x20\x20\x20float\x20halfAAPaddedLineLengthPixels\x20=\x20max(extendedLineLengthPixels,\x201.0)\x20*\x200.5;\x0a#endif\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20//\x20Half\x20line\x20width\x20in\x20NDC\x20including\x20padding\x20for\x20anti\x20aliasing\x0a\x20\x20\x20\x20vec2\x20uPixelToNDC\x20=\x20vec2(2.0\x20/\x20czm_viewport.z,\x202.0\x20/\x20czm_viewport.w);\x0a\x20\x20\x20\x20vec2\x20halfAAPaddedLineWidthAndAmplitudeNDC\x20=\x20halfAAPaddedLineWidthAndAmplitudePixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20vec2\x20aaPaddedRoundedCapSizeNDC\x20=\x20aaPaddedRoundedCapSizePixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20vec2\x20extensionLengthNDC\x20=\x20extensionLengthPixels\x20*\x20uPixelToNDC;\x0a\x20\x20\x20\x20//\x20Compute\x20screen\x20space\x20position\x20of\x20vertex,\x20offsetting\x20for\x20line\x20size\x20and\x20end\x20caps\x0a\x20\x20\x20\x20vec2\x20ndcOffset\x20=\x20(screenSpaceDirection\x20*\x20sideness.y\x20*\x20(aaPaddedRoundedCapSizeNDC\x20+\x20extensionLengthNDC)\x20+\x20perpendicularScreenSpaceDirection\x20*\x20halfAAPaddedLineWidthAndAmplitudeNDC);\x0a\x20\x20\x20\x20projPos.xy\x20+=\x20ndcOffset\x20*\x20projPos.w;\x0a\x20\x20\x20\x20projPos.z\x20+=\x20(dzPerPixel\x20*\x20(aaPaddedRoundedCapSizePixels\x20+\x20extensionLengthPixels))\x20*\x20sideness.y\x20*\x20projPos.w;\x0a\x20\x20\x20\x20projPos\x20=\x20adjustProjectedPosition(projPos,\x20worldNormal,\x201.0\x20+\x20max((lineWidthAndAmplitudePixels\x20-\x201.0)\x20*\x200.5,\x200.0));\x0a\x20\x20\x20\x20//\x20Line\x20length\x20with\x20end\x20caps\x0a\x20\x20\x20\x20float\x20aaPaddedLineWithCapsLengthPixels\x20=\x20extendedLineLengthPixels\x20+\x20aaPaddedRoundedCapSizePixels\x20+\x20aaPaddedRoundedCapSizePixels;\x0a\x20\x20\x20\x20float\x20pixelPositionAlongLine\x20=\x20aaPaddedLineWithCapsLengthPixels\x20*\x20sidenessNorm.y\x20-\x20aaPaddedRoundedCapSizePixels;\x0a\x20\x20\x20\x20//\x20Position\x20in\x20pixels\x20with\x20origin\x20at\x20first\x20vertex\x20of\x20line\x20segment\x0a\x20\x20\x20\x20//\x20The\x20line\x20width\x20radius\x20in\x20pixels\x0a\x20\x20\x20\x20vRadius\x20=\x20lineWidthPixels\x20*\x200.5;\x0a\x20\x20\x20\x20vLineLengthPixels\x20=\x20extendedLineLengthPixels;\x0a\x20\x20\x20\x20vPosition\x20=\x20writeNonPerspective(vec3(halfAAPaddedLineWidthAndAmplitudePixels\x20*\x20sideness.x,\x20pixelPositionAlongLine,\x20pixelPositionAlongLine\x20/\x20extendedLineLengthPixels),\x20projPos.w);\x0a#ifdef\x20SILHOUETTE\x0a\x20\x20\x20\x20gl_Position\x20=\x20isSilhouetteEdge(viewPosV0,\x20aNormalA,\x20aNormalB)\x20?\x20projPos\x20:\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20gl_Position\x20=\x20projPos;\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x0a#if\x20(MODE\x20==\x202)\x0a\x20\x20\x20\x20if\x20(unpackedAttributes.type\x20<=\x200.0\x20&&\x20lineLengthPixels\x20<=\x203.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x0a\x20\x20\x20\x20}\x0a#elif\x20(MODE\x20==\x201)\x0a\x20\x20\x20\x20if\x20(lineLengthPixels\x20<=\x203.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20vec4(10.0,\x2010.0,\x2010.0,\x201.0);\x20\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x20\x20\x20\x20return\x20projPos;\x0a}\x0a\x0a\x0a#if\x20(MODE\x20==\x202)\x0aUnpackedAttributes\x20unpackAttributes(ComponentData\x20component)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20aSideness;\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20sidenessNorm\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20float\x20fType\x20=\x20component.type;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20component.extensionLength;\x0a\x20\x20\x20\x20float\x20lineWidth\x20=\x20component.lineWidth;\x0a\x20\x20\x20\x20if\x20(fType\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20extensionLengthPixels\x20*=\x20aVariantExtension\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20return\x20UnpackedAttributes(sideness,\x20sidenessNorm,\x20lineWidth,\x20extensionLengthPixels,\x20fType);\x0a}\x0a#else\x20/*\x20(MODE\x20==\x202)\x20*/\x0aUnpackedAttributes\x20unpackAttributes(ComponentData\x20component)\x0a{\x0a\x20\x20\x20\x20vec2\x20sidenessNorm\x20=\x20aSideness;\x0a\x20\x20\x20\x20vec2\x20sideness\x20=\x20sidenessNorm\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20\x20float\x20extensionLengthPixels\x20=\x20component.extensionLength;\x0a#if\x20(MODE\x20==\x201)\x0a\x20\x20\x20\x20extensionLengthPixels\x20*=\x20aVariantExtension\x20*\x202.0\x20-\x201.0;\x0a#endif\x0a\x20\x20\x20\x20float\x20lineWidth\x20=\x20component.lineWidth;\x0a\x20\x20\x20\x20return\x20UnpackedAttributes(sideness,\x20sidenessNorm,\x20lineWidth,\x20extensionLengthPixels);\x0a}\x0a#endif\x20/*\x20(MODE\x20==\x202)\x20*/\x0a\x0avarying\x20float\x20fSelected;\x0avoid\x20main()\x0a{\x0a\x20\x20\x20\x20fSelected\x20=\x200.0;\x0a\x20\x20\x20\x20ComponentData\x20component\x20=\x20readComponentData();\x0a\x20\x20\x20\x20UnpackedAttributes\x20unpackedAttributes\x20=\x20unpackAttributes(component);\x0a\x20\x20\x20\x20vec4\x20worldPosV0\x20=\x20czm_model\x20*\x20vec4(aPosition0,\x201.0);\x0a\x20\x20\x20\x20vec4\x20worldPosV1\x20=\x20czm_model\x20*\x20vec4(aPosition1,\x201.0);\x0a\x20\x20\x20\x20vec4\x20viewPosV0\x20=\x20czm_modelView\x20*\x20vec4(aPosition0,\x201.0);\x0a\x20\x20\x20\x20vec4\x20viewPosV1\x20=\x20czm_modelView\x20*\x20vec4(aPosition1,\x201.0);\x0a#ifdef\x20SILHOUETTE\x0a\x20\x20\x20\x20vec3\x20worldNormal\x20=\x20silhouetteWorldNormal(aNormalA,\x20aNormalB);\x0a#else\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20vec3\x20worldNormal\x20=\x20modelToWorldNormal(aNormal);\x0a#endif\x20/*\x20SILHOUETTE\x20*/\x0a\x20\x20\x20\x20//\x20General\x20geometric\x20computation\x20for\x20all\x20types\x20of\x20edges\x0a\x20\x20\x20\x20vec4\x20projPos\x20=\x20calculateGeometricOutputs(viewPosV0,\x20viewPosV1,\x20worldPosV0,\x20worldPosV1,\x20worldNormal,\x20unpackedAttributes);\x0a\x20\x20\x20\x20vColor\x20=\x20uLineColor;\x0a}','37831Gmesuq','819265RtoRnY','8JhqAwn','232736ITrIdn','3HPrpNS','5oHaiiZ','1KwoNVD'];function _0x3bee(_0x3ff2de,_0x2b3465){_0x3ff2de=_0x3ff2de-0x15e;var _0x5e5a0b=_0x5e5a[_0x3ff2de];return _0x5e5a0b;}var _0x5db089=_0x3bee;(function(_0x1f0e02,_0x120bee){var _0x25a005=_0x3bee;while(!![]){try{var _0x53c5cb=-parseInt(_0x25a005(0x15f))+-parseInt(_0x25a005(0x160))*parseInt(_0x25a005(0x168))+-parseInt(_0x25a005(0x162))*-parseInt(_0x25a005(0x167))+-parseInt(_0x25a005(0x163))*parseInt(_0x25a005(0x15e))+parseInt(_0x25a005(0x165))+parseInt(_0x25a005(0x161))+-parseInt(_0x25a005(0x164))*-parseInt(_0x25a005(0x166));if(_0x53c5cb===_0x120bee)break;else _0x1f0e02['push'](_0x1f0e02['shift']());}catch(_0x8e6165){_0x1f0e02['push'](_0x1f0e02['shift']());}}}(_0x5e5a,0x90cfd));var _0x147e5b = _0x5db089(0x169);

    var _0x333a=['\x0a#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0aprecision\x20highp\x20float;\x0avarying\x20vec4\x20vColor;\x0avarying\x20float\x20vRadius;\x0avarying\x20vec3\x20vPosition;\x0avarying\x20vec3\x20vViewPosition;\x0avarying\x20float\x20vLineLengthPixels;\x0avarying\x20float\x20vSizeFalloffFactor;\x0avarying\x20float\x20vLineIndex;\x0avarying\x20float\x20vDistanceFromEye;\x0a\x0a//\x20At\x20which\x20coverage\x20threshold\x20we\x20discard\x20a\x20fragment\x20completely\x0a#define\x20COVERAGE_TEST_THRESHOLD\x200.01\x0aconst\x20float\x20nearRange\x20=\x201000.0;\x0aconst\x20float\x20farRange\x20=\x2020000.0;\x0a\x0a//\x20Sketch\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x201)\x0a//uniform\x20sampler2D\x20uStrokesTexture;\x0a//uniform\x20float\x20uStrokesNormalizationScale;\x0avarying\x20vec2\x20vStrokeUV;\x0a\x0afloat\x20calculateLineOffsetSketch()\x0a{\x0a\x20\x20\x20\x20//float\x20offsetNorm\x20=\x20rgba2float(texture2D(uStrokesTexture,\x20vStrokeUV));\x0a\x20\x20\x20\x20//return\x20(offsetNorm\x20-\x200.5)\x20*\x20uStrokesNormalizationScale;\x0a\x20\x20\x20\x20return\x201.0;\x0a}\x0a\x0afloat\x20calculateLinePressureSketch()\x0a{\x0a\x20\x20\x20\x20//return\x20rgba2float(texture2D(uStrokesTexture,\x20vStrokeUV\x20+\x20vec2(0.0,\x200.5)));\x0a\x20\x20\x20\x20return\x201.0;\x0a}\x0a#endif\x0a\x0a#if\x20(MODE\x20==\x201)\x0afloat\x20calculateLineOffset()\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineOffsetSketch();\x0a}\x0afloat\x20calculateLinePressure()\x0a{\x0a\x20\x20\x20\x20return\x20calculateLinePressureSketch();\x0a}\x0a#endif\x0a\x0a//\x20Solid\x0a#if\x20(MODE\x20==\x202\x20||\x20MODE\x20==\x200)\x0afloat\x20calculateLineOffsetSolid()\x0a{\x0a\x20\x20\x20\x20return\x200.0;\x0a}\x0afloat\x20calculateLinePressureSolid()\x0a{\x0a\x20\x20\x20\x20return\x201.0;\x0a}\x0a#endif\x0a\x0a#if\x20(MODE\x20==\x200)\x0afloat\x20calculateLineOffset()\x0a{\x0a\x20\x20\x20\x20return\x20calculateLineOffsetSolid();\x0a}\x0afloat\x20calculateLinePressure()\x0a{\x0a\x20\x20\x20\x20return\x20calculateLinePressureSolid();\x0a}\x0a#endif\x0a\x0a//\x20Uber\x0a#if\x20(MODE\x20==\x202)\x0avarying\x20float\x20vType;\x0afloat\x20calculateLineOffset()\x0a{\x0a\x20\x20\x20\x20if\x20(vType\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineOffsetSketch();\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLineOffsetSolid();\x0a\x20\x20\x20\x20}\x0a}\x0a\x0afloat\x20calculateLinePressure()\x0a{\x0a\x20\x20\x20\x20if\x20(vType\x20<=\x200.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLinePressureSketch();\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20calculateLinePressureSolid();\x0a\x20\x20\x20\x20}\x0a}\x0a#endif\x0a\x0avec2\x20lineWithCapsDistance(float\x20radius,\x20vec2\x20position,\x20float\x20lineLength)\x0a{\x0a\x20\x20\x20\x20float\x20lineOffset\x20=\x20calculateLineOffset();\x0a\x20\x20\x20\x20float\x20positionX\x20=\x20position.x\x20-\x20lineOffset;\x0a\x20\x20\x20\x20if\x20(radius\x20<\x201.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20coverageX\x20=\x20clamp(min(radius,\x20positionX\x20+\x200.5)\x20-\x20max(-radius,\x20positionX\x20-\x200.5),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20coverageY\x20=\x20clamp(min(lineLength,\x20position.y\x20+\x200.5)\x20-\x20max(0.0,\x20position.y\x20-\x200.5),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20coverage\x20=\x20min(coverageX,\x20coverageY);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec2(0.5\x20-\x20coverage,\x200.0);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Between\x20-radius\x20->\x200\x20for\x20start\x20cap,\x200\x20for\x20line,\x200\x20->\x20radius\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20positionOnCap\x20=\x20position.y\x20-\x20clamp(position.y,\x200.0,\x20lineLength);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20lineToPosition\x20=\x20vec2(positionX,\x20positionOnCap);\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec2(length(lineToPosition)\x20-\x20radius,\x20positionOnCap\x20/\x20radius);\x0a\x20\x20\x20\x20}\x0a}\x0a\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20uniform\x20float\x20uClipMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uClipPlanes[6];\x0a\x20\x20\x20\x20float\x20getClipDistance(vec3\x20pos,\x20vec3\x20planeNormal,\x20float\x20disToOrigin)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20dot(planeNormal,\x20pos)\x20+\x20disToOrigin;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAllPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20#ifdef\x20CLIPPLANE\x0a\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[0].xyz,\x20uClipPlanes[0].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if\x20(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAnyPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if((distance\x20+\x20fBorderWidth)\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20clipAnythingButLine(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20clip(vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(vertex.x));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(vertex.y));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x201.0;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20clipResult\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x201.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAnyPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x202.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAllPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x203.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipAnythingButLine(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(clipResult\x20<\x20-0.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(clipResult\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0afloat\x20readNonPerspective(float\x20value,\x20float\x20oneOverW)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20oneOverW;\x0a}\x0a\x0avec2\x20readNonPerspective(vec2\x20value,\x20float\x20oneOverW)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20oneOverW;\x0a}\x0a\x0avec3\x20readNonPerspective(vec3\x20value,\x20float\x20oneOverW)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20oneOverW;\x0a}\x0a\x0avec4\x20readNonPerspective(vec4\x20value,\x20float\x20oneOverW)\x20{\x0a\x20\x20\x20\x20return\x20value\x20*\x20oneOverW;\x0a}\x0a\x0avoid\x20main()\x0a{\x0a\x20\x20\x20\x20vec3\x20realPosition\x20=\x20readNonPerspective(vPosition,\x20gl_FragCoord.w);\x0a\x20\x20\x20\x20float\x20radius\x20=\x20vRadius\x20*\x20calculateLinePressure();\x0a\x20\x20\x20\x20vec2\x20distance\x20=\x20lineWithCapsDistance(radius,\x20realPosition.xy,\x20vLineLengthPixels);\x0a\x20\x20\x20\x20float\x20coverage\x20=\x20clamp(0.5\x20-\x20distance.x,\x200.0,\x201.0);\x0a#ifdef\x20ANTIALIASING\x0a\x20\x20\x20\x20const\x20float\x20coverageLimit\x20=\x20COVERAGE_TEST_THRESHOLD;\x0a#else\x0a\x20\x20\x20\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20//\x20Use\x20subpixel\x20coverage\x20computation\x20when\x20lines\x20get\x20subpixel\x20widths\x0a\x20\x20\x20\x20//\x20so\x20we\x20still\x20render\x20them\x20appropriately.\x20Otherwise\x20discard\x20anything\x0a\x20\x20\x20\x20//\x20that\x20is\x20not\x20fully\x20within\x20the\x20line\x0a\x20\x20\x20\x20float\x20coverageLimit\x20=\x20radius\x20<=\x200.5\x20?\x20COVERAGE_TEST_THRESHOLD\x20:\x200.75;\x0a#endif\x20/*\x20ANTIALIASING\x20*/\x0a\x20\x20\x20\x20if\x20(coverage\x20<\x20coverageLimit)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20alpha\x20=\x20vColor.a\x20*\x20coverage;\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(vColor.rgb,\x20alpha);\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a#endif\x0a\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20\x20gl_FragColor\x20*=\x20clip(vec4(vViewPosition,\x201.0),\x201.0);\x0a#endif\x0a\x0a\x20\x20\x20\x20\x20float\x20attenuation\x20=\x201.0\x20-\x20smoothstep(nearRange,\x20farRange,\x20vDistanceFromEye);\x0a\x20\x20\x20\x20\x20gl_FragColor.a\x20*=\x20attenuation;\x0a\x20\x20\x20\x20\x20czm_writeLogDepth();\x0a}','4164IXFffu','1333SFYyzu','1195099CwQLwN','59KhoKnX','538904SMSvfl','326odIMVT','42sLyHDY','4059MUmeDt','9517HNbqEZ','433284tzkeBv'];var _0xf369bd=_0x361f;(function(_0x1defb5,_0x28a6c1){var _0xaa964a=_0x361f;while(!![]){try{var _0xd0d55a=-parseInt(_0xaa964a(0x193))+parseInt(_0xaa964a(0x192))*parseInt(_0xaa964a(0x18b))+parseInt(_0xaa964a(0x195))+parseInt(_0xaa964a(0x18d))*parseInt(_0xaa964a(0x194))+parseInt(_0xaa964a(0x18f))+-parseInt(_0xaa964a(0x191))*-parseInt(_0xaa964a(0x18c))+parseInt(_0xaa964a(0x18e));if(_0xd0d55a===_0x28a6c1)break;else _0x1defb5['push'](_0x1defb5['shift']());}catch(_0x1e7619){_0x1defb5['push'](_0x1defb5['shift']());}}}(_0x333a,0x9b28d));function _0x361f(_0x508167,_0x434b53){_0x508167=_0x508167-0x18b;var _0x333aab=_0x333a[_0x508167];return _0x333aab;}var _0x2f06d2 = _0xf369bd(0x190);

    const _0x1fb3=['yOffset','1529913GJYfdR','set','ready','model','subTextureInfo','context','xOffset','65329JTeRPj','4SbRjkg','175976OPOnqQ','copyFrom','1041592ledxuN','texture','236788PVBYTC','prototype','1fDwOXo','39263RfadKf','arrayBufferView','execute','218294jtoeVn','init'];function _0x32a8(_0x295b9c,_0x2abd43){_0x295b9c=_0x295b9c-0x1d9;let _0x1fb355=_0x1fb3[_0x295b9c];return _0x1fb355;}const _0x1dff39=_0x32a8;(function(_0x1db360,_0xe0a1d6){const _0x3f97c2=_0x32a8;while(!![]){try{const _0x371c1b=parseInt(_0x3f97c2(0x1db))+-parseInt(_0x3f97c2(0x1e3))*-parseInt(_0x3f97c2(0x1e2))+-parseInt(_0x3f97c2(0x1e6))*parseInt(_0x3f97c2(0x1ea))+parseInt(_0x3f97c2(0x1ee))+parseInt(_0x3f97c2(0x1e8))+-parseInt(_0x3f97c2(0x1e4))+-parseInt(_0x3f97c2(0x1eb));if(_0x371c1b===_0xe0a1d6)break;else _0x1db360['push'](_0x1db360['shift']());}catch(_0x7cb064){_0x1db360['push'](_0x1db360['shift']());}}}(_0x1fb3,0xf1928));function SubTextureUploadJob(){const _0x241650=_0x32a8;this[_0x241650(0x1de)]=undefined,this[_0x241650(0x1e0)]=undefined,this[_0x241650(0x1e7)]=undefined,this[_0x241650(0x1df)]=undefined;}SubTextureUploadJob[_0x1dff39(0x1e9)][_0x1dff39(0x1dc)]=function(_0xfa9df7,_0x5ae60f,_0x51e0d7,_0x11ba73){const _0x299db6=_0x1dff39;this[_0x299db6(0x1de)]=_0x5ae60f,this[_0x299db6(0x1e0)]=_0xfa9df7,this[_0x299db6(0x1e7)]=_0x51e0d7,this[_0x299db6(0x1df)]=_0x11ba73;},SubTextureUploadJob[_0x1dff39(0x1e9)][_0x1dff39(0x1ed)]=function(){const _0x36bda0=_0x1dff39;let _0x35ceab=this['subTextureInfo'];!this[_0x36bda0(0x1e7)][_0x36bda0(0x1dd)]&&this[_0x36bda0(0x1e7)][_0x36bda0(0x1d9)](),this['texture'][_0x36bda0(0x1e5)]({'xOffset':_0x35ceab[_0x36bda0(0x1e1)],'yOffset':_0x35ceab[_0x36bda0(0x1da)],'width':_0x35ceab['width'],'height':_0x35ceab['height'],'arrayBufferView':_0x35ceab[_0x36bda0(0x1ec)]});};

    const _0x2ed0=['144672VMpXeu','opaque','843YEGmFO','14152dtleEo','6487rZauXW','2622609ysIUDl','5oZOUAU','mask','175783GxQgok','573314lxMrPQ','101MqCmiR','203Zdljub','freeze'];const _0x31567e=_0x1b80;(function(_0x1bc26b,_0xe8c179){const _0x4031e1=_0x1b80;while(!![]){try{const _0x1170ed=-parseInt(_0x4031e1(0xa9))+parseInt(_0x4031e1(0xa3))*-parseInt(_0x4031e1(0xaa))+-parseInt(_0x4031e1(0xa6))+-parseInt(_0x4031e1(0xa1))*parseInt(_0x4031e1(0xac))+parseInt(_0x4031e1(0xa8))*parseInt(_0x4031e1(0xa4))+-parseInt(_0x4031e1(0xa2))+parseInt(_0x4031e1(0xab));if(_0x1170ed===_0xe8c179)break;else _0x1bc26b['push'](_0x1bc26b['shift']());}catch(_0x1b8029){_0x1bc26b['push'](_0x1bc26b['shift']());}}}(_0x2ed0,0x80c8a));function _0x1b80(_0x386be2,_0x451054){_0x386be2=_0x386be2-0xa0;let _0x2ed05a=_0x2ed0[_0x386be2];return _0x2ed05a;}const AlphaMode={'OPAQUE':_0x31567e(0xa7),'BLEND':'blend','MASK':_0x31567e(0xa0)};var _0x4b7475 = Object[_0x31567e(0xa5)](AlphaMode);

    const _0x306e=['attributes','MaxVisibleValue','isDestroyed','updateMaterialBatchTable','texture','silhouette','_texture','pickInfo','colorCommand','execute','_clipMode','shaderProgram','Cartesian4','ALPHA_BLEND','enableTextureRenderable','combine','batchTable','43bifQUH','drawingBufferWidth','_enableClip','jobScheduler','LineColor','vertexArray','call','BlendingState','indexBufferToCreate','fillForeColor','swipeEnabled','Color','edgeTotalLength','45280cmKPNi','Cartesian2','MODE\x20','drawingBufferHeight','DepthFunction','edgeVA','defined','textures','ColorTableMaxKey','PrimitiveType','silhouetteEdgeCommand','update','commandList','arrIndexPackage','810443meJkOi','updateBatchTableAttributes','invGeoMatrix','fillStyle','peek','Fill','length','20vYvuco','uniformMap','JobType','regular','_isTransparencyOptimization','context','createBuffers','instanceCount','createPickIds','vertexAttributes','TRIANGLES','regularEdgeCommand','MinVisibleValue','_enableClipPlane','subTexturesToUpload','boundingVolume','117567xMGNQR','vertexPackage','lineWidth','LINES','edgeCount','renderable','layer','geoMatrix','setting','batchTableDirty','getUniformMapCallback','VertexArray','defines','POLYGON_OFFSET','TEXTURE','edgeGeometry','1MoDFlI','createBatchTable','_swipeRegion','createOneEdgeCommand','APPLY_SWIPE','ColorTableMinKey','BLEND','ambientColor','116929wOyHCB','Opacity','selectionInfoMap','style3D','alphaMode','constructor','pickColorIdentifier','createIndexBuffer','_hypsometric','LineInterval','Pass','renderState','isTexBlock','dequeue','CLIP','ready','_addRenderedEdge','SILHOUETTE','push','3XDcQqi','LESS_OR_EQUAL','attributeLocations','createRegularEdgeAttributes','1160954xSQBde','POINTS','CLIPPLANE','modelMatrix','ANTIALIASING','batchTableBake','height','initLayerSetting','WireFrame','OPAQUE','1845wjJJlm','767706YBipVT','vertexBufferToCreate','TRANSLUCENT','useLineColor','RenderState','texMatrix','edgeSP','material','prototype','primitiveType','ShaderSource','set','createWireFrame','selectedColor','fromCache','ancestorTexture','edgeLength','noValueColor','_edgeDistanceFalloffFactor','createCommand','width','DrawCommand','clone','destroy'];const _0x505093=_0x56e7;(function(_0x5ea0eb,_0x1fd399){const _0x116da9=_0x56e7;while(!![]){try{const _0x32f175=-parseInt(_0x116da9(0x201))*-parseInt(_0x116da9(0x214))+-parseInt(_0x116da9(0x223))+parseInt(_0x116da9(0x218))+-parseInt(_0x116da9(0x1f9))*parseInt(_0x116da9(0x267))+-parseInt(_0x116da9(0x1e9))+-parseInt(_0x116da9(0x222))*parseInt(_0x116da9(0x24c))+-parseInt(_0x116da9(0x26e))*-parseInt(_0x116da9(0x259));if(_0x32f175===_0x1fd399)break;else _0x5ea0eb['push'](_0x5ea0eb['shift']());}catch(_0x40bd40){_0x5ea0eb['push'](_0x5ea0eb['shift']());}}}(_0x306e,0x9ccf2));function _0x56e7(_0x1eb22b,_0x4565ea){_0x1eb22b=_0x1eb22b-0x1da;let _0x306e5f=_0x306e[_0x1eb22b];return _0x306e5f;}function S3MCacheFileRenderEntity(_0x1ea26a){const _0x1badd0=_0x56e7;RenderEntity[_0x1badd0(0x252)](this,_0x1ea26a),this['vs']=_0x2bfa20,this['fs']=_0x4d46c8,this[_0x1badd0(0x25e)]=undefined,this[_0x1badd0(0x229)]=undefined,this['regularEdgeCommand']=undefined,this[_0x1badd0(0x263)]=undefined,this[_0x1badd0(0x226)]=![];}S3MCacheFileRenderEntity[_0x505093(0x22b)]=Object['create'](RenderEntity['prototype']),S3MCacheFileRenderEntity[_0x505093(0x22b)][_0x505093(0x206)]=RenderEntity;function getOpaqueRenderState$1(){const _0x3c9b5c=_0x505093;return Cesium[_0x3c9b5c(0x227)]['fromCache']({'cull':{'enabled':![]},'depthTest':{'enabled':!![],'func':Cesium['DepthFunction'][_0x3c9b5c(0x215)]},'blending':Cesium['BlendingState'][_0x3c9b5c(0x248)]});}function getTransparentRenderState$1(){const _0x57a623=_0x505093;return Cesium[_0x57a623(0x227)][_0x57a623(0x231)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium[_0x57a623(0x25d)][_0x57a623(0x215)]},'blending':Cesium[_0x57a623(0x253)]['ALPHA_BLEND']});}let hypMinMaxValueScratch$1=new Cesium[(_0x505093(0x247))](),hypOpacityIntervalFillModeScratch$1=new Cesium[(_0x505093(0x247))](),swipRegionScratch$1=new Cesium[(_0x505093(0x247))](),texDimScratch=new Cesium[(_0x505093(0x247))](),scratchDiffuseColor=new Cesium[(_0x505093(0x257))](),scratchAmbientColor=new Cesium[(_0x505093(0x257))]();function getUniformMap$1(_0x28e9b1,_0xdddea4,_0x19cdbf){return {'uGeoMatrix':function(){const _0x626475=_0x56e7;return _0x19cdbf[_0x626475(0x1f0)];},'uTexMatrix':function(){const _0x134a40=_0x56e7;return _0x28e9b1[_0x134a40(0x228)];},'uFillForeColor':function(){const _0x9f4813=_0x56e7;if(_0x19cdbf['useLineColor'])return _0xdddea4[_0x9f4813(0x204)]['lineColor'];return _0xdddea4[_0x9f4813(0x204)][_0x9f4813(0x255)];},'uDiffuseColor':function(){return _0x28e9b1['diffuseColor'];},'uAmbientColor':function(){const _0x3042be=_0x56e7;return _0x28e9b1[_0x3042be(0x200)];},'uInverseGeoMatrix':function(){const _0x43161f=_0x56e7;return _0x19cdbf[_0x43161f(0x269)];},'uTexture':function(){const _0x3ae372=_0x56e7;let _0x1744f9=_0x28e9b1[_0x3ae372(0x260)][0x0];if(_0x1744f9[_0x3ae372(0x20d)])return _0x1744f9[_0x3ae372(0x1ee)]&&_0x1744f9[_0x3ae372(0x210)]?_0x1744f9:_0x28e9b1[_0x3ae372(0x232)]?_0x28e9b1[_0x3ae372(0x232)]:_0x1744f9;return _0x28e9b1[_0x3ae372(0x260)][0x0];},'uTexture2':function(){const _0x284f36=_0x56e7;return _0x28e9b1[_0x284f36(0x260)][0x1];},'uTexAtlasDim':function(){const _0xb6b842=_0x56e7;let _0x3e5d3c=_0x28e9b1[_0xb6b842(0x260)][0x0][_0xb6b842(0x1ee)]?_0x28e9b1[_0xb6b842(0x260)][0x0]:_0x28e9b1[_0xb6b842(0x232)]?_0x28e9b1[_0xb6b842(0x232)]:_0x28e9b1['textures'][0x0];texDimScratch['x']=_0x3e5d3c[_0xb6b842(0x237)],texDimScratch['y']=_0x3e5d3c[_0xb6b842(0x21e)];if(_0x28e9b1['textures'][0x1]){let _0x48bc78=_0x28e9b1[_0xb6b842(0x260)][0x1][_0xb6b842(0x1ee)]?_0x28e9b1[_0xb6b842(0x260)][0x1]:_0x28e9b1['ancestorTextureBake']?_0x28e9b1['ancestorTextureBake']:_0x28e9b1['textures'][0x1];texDimScratch['z']=_0x48bc78[_0xb6b842(0x237)],texDimScratch['w']=_0x48bc78[_0xb6b842(0x21e)];}return texDimScratch;},'batchTextureAtlas':function(){const _0x20db4b=_0x56e7;return _0x28e9b1['batchTable'][_0x20db4b(0x241)];},'batchTextureAtlasStep':function(){return _0x28e9b1['batchTable']['_textureStep'];},'batchTextureAtlasSec':function(){const _0x373b54=_0x56e7;return _0x28e9b1[_0x373b54(0x21d)][_0x373b54(0x241)];},'batchTextureAtlasStepSec':function(){const _0x3d386a=_0x56e7;return _0x28e9b1[_0x3d386a(0x21d)]['_textureStep'];},'uTexture0Width':function(){const _0x46bb68=_0x56e7;return _0x28e9b1[_0x46bb68(0x260)][0x0][_0x46bb68(0x237)];},'uTexture1Width':function(){const _0x524457=_0x56e7;return _0x28e9b1['textures'][0x1][_0x524457(0x237)];},'uSelectedColor':function(){const _0x37da5a=_0x56e7;return _0xdddea4[_0x37da5a(0x230)];},'uClipMode':function(){const _0x32c056=_0x56e7;return _0xdddea4[_0x32c056(0x245)];},'uClipPlanes':function(){return _0xdddea4['_clipPlane'];},'uHypsometricTexture':function(){const _0x306b74=_0x56e7;return _0xdddea4[_0x306b74(0x209)][_0x306b74(0x23f)];},'uHypLineColor':function(){const _0x6f244d=_0x56e7;return _0xdddea4[_0x6f244d(0x209)][_0x6f244d(0x1f1)][_0x6f244d(0x250)];},'uNoValueColor':function(){const _0x2cd87e=_0x56e7;return _0xdddea4['_hypsometric'][_0x2cd87e(0x1f1)][_0x2cd87e(0x234)];},'uMinMaxValue':function(){const _0x2b551d=_0x56e7;let _0x3df8eb=_0xdddea4[_0x2b551d(0x209)][_0x2b551d(0x1f1)];return hypMinMaxValueScratch$1['x']=_0x3df8eb[_0x2b551d(0x1fe)],hypMinMaxValueScratch$1['y']=_0x3df8eb[_0x2b551d(0x261)],hypMinMaxValueScratch$1['z']=_0x3df8eb[_0x2b551d(0x1e5)],hypMinMaxValueScratch$1['w']=_0x3df8eb[_0x2b551d(0x23c)],hypMinMaxValueScratch$1;},'uOpacityIntervalFillMode':function(){const _0x64852c=_0x56e7;let _0xadf8e0=_0xdddea4[_0x64852c(0x209)]['setting'];return hypOpacityIntervalFillModeScratch$1['x']=_0xadf8e0[_0x64852c(0x202)],hypOpacityIntervalFillModeScratch$1['y']=_0xadf8e0[_0x64852c(0x20a)],hypOpacityIntervalFillModeScratch$1['z']=_0xadf8e0['DisplayMode'],hypOpacityIntervalFillModeScratch$1;},'uFlattenRect':function(){return _0xdddea4['_flattenPar']['bounds'];},'uFlattenTexture':function(){return _0xdddea4['_flattenPar']['texture'];},'uSwipeRegion':function(){const _0x59b58e=_0x56e7,_0x5a6b1e=_0xdddea4['context'];return swipRegionScratch$1['x']=_0xdddea4['_swipeRegion']['x']*_0x5a6b1e[_0x59b58e(0x24d)],swipRegionScratch$1['y']=(0x1-_0xdddea4['_swipeRegion']['y'])*_0x5a6b1e[_0x59b58e(0x25c)],swipRegionScratch$1['z']=_0xdddea4[_0x59b58e(0x1fb)]['z']*_0x5a6b1e['drawingBufferWidth'],swipRegionScratch$1['w']=(0x1-_0xdddea4['_swipeRegion']['w'])*_0x5a6b1e['drawingBufferHeight'],swipRegionScratch$1;}};}S3MCacheFileRenderEntity[_0x505093(0x22b)]['createOneEdgeCommand']=function(_0x44c100,_0x1e14f1,_0x238b33,_0x53bfcd,_0x55ce5f){const _0x1b49a6=_0x505093;if(!_0x238b33[_0x1b49a6(0x23b)]||_0x238b33[_0x1b49a6(0x23b)][_0x1b49a6(0x26d)]==0x0||!_0x238b33[_0x1b49a6(0x1e0)]||_0x238b33['instanceCount']===0x0)return null;let _0x26d1c7=new Cesium[(_0x1b49a6(0x238))]({'primitiveType':Cesium[_0x1b49a6(0x262)]['TRIANGLES'],'modelMatrix':this[_0x1b49a6(0x21b)],'boundingVolume':this[_0x1b49a6(0x1e8)],'pass':Cesium[_0x1b49a6(0x20b)]['OPAQUE'],'owner':this,'cull':!![]});this['edgeVA']=new Cesium['VertexArray']({'context':_0x44c100,'attributes':_0x238b33[_0x1b49a6(0x23b)],'indexBuffer':_0x53bfcd}),_0x26d1c7[_0x1b49a6(0x251)]=this[_0x1b49a6(0x25e)],_0x26d1c7[_0x1b49a6(0x1e0)]=_0x238b33['instanceCount'];let _0x4812aa,_0x43d972;_0x4812aa=new Cesium[(_0x1b49a6(0x22d))]({'sources':[_0x147e5b]}),_0x43d972=new Cesium[(_0x1b49a6(0x22d))]({'sources':[_0x2f06d2]});!_0x55ce5f&&(_0x4812aa['defines']['push'](_0x1b49a6(0x212)),_0x43d972[_0x1b49a6(0x1f5)][_0x1b49a6(0x213)](_0x1b49a6(0x212)));_0x4812aa[_0x1b49a6(0x1f5)][_0x1b49a6(0x213)](_0x1b49a6(0x21c)),_0x43d972['defines'][_0x1b49a6(0x213)](_0x1b49a6(0x21c)),_0x4812aa[_0x1b49a6(0x1f5)][_0x1b49a6(0x213)](_0x1b49a6(0x1f6)),_0x43d972['defines'][_0x1b49a6(0x213)](_0x1b49a6(0x1f6));_0x1e14f1[_0x1b49a6(0x256)]&&_0x43d972[_0x1b49a6(0x1f5)][_0x1b49a6(0x213)](ProgramDefines[_0x1b49a6(0x1fd)]);_0x1e14f1[_0x1b49a6(0x24e)]&&_0x43d972[_0x1b49a6(0x1f5)]['push'](_0x1b49a6(0x20f));_0x1e14f1[_0x1b49a6(0x1e6)]&&_0x43d972['defines'][_0x1b49a6(0x213)](_0x1b49a6(0x21a));let _0x59c7f1=0x0;_0x4812aa[_0x1b49a6(0x1f5)][_0x1b49a6(0x213)]('MODE\x20'+_0x59c7f1),_0x43d972['defines'][_0x1b49a6(0x213)](_0x1b49a6(0x25b)+_0x59c7f1),this[_0x1b49a6(0x229)]=Cesium['ShaderProgram']['fromCache']({'context':_0x44c100,'vertexShaderSource':_0x4812aa,'fragmentShaderSource':_0x43d972,'attributeLocations':_0x238b33[_0x1b49a6(0x216)]}),_0x26d1c7['shaderProgram']=this['edgeSP'],_0x26d1c7[_0x1b49a6(0x20c)]=Cesium[_0x1b49a6(0x227)][_0x1b49a6(0x231)]({'depthTest':{'enabled':!![],'func':Cesium['DepthFunction'][_0x1b49a6(0x215)]},'cull':{'enabled':!![]},'blending':Cesium[_0x1b49a6(0x253)][_0x1b49a6(0x248)]});let _0x520365={'uLineColor':function(){const _0x3da1dc=_0x1b49a6;return _0x1e14f1[_0x3da1dc(0x204)]['lineColor'];},'uLineWidth':function(){const _0x414274=_0x1b49a6;return _0x1e14f1['style3D'][_0x414274(0x1eb)];},'uDistanceFalloffFactor':function(){const _0x74f081=_0x1b49a6;return _0x1e14f1[_0x74f081(0x235)];},'u_polygonOffset':function(){const _0xacfc33=_0x1b49a6;return new Cesium[(_0xacfc33(0x25a))](-0x5,-0x5);}};return _0x26d1c7[_0x1b49a6(0x1da)]=Cesium[_0x1b49a6(0x24a)](_0x520365,this['colorCommand'][_0x1b49a6(0x1da)]),_0x26d1c7[_0x1b49a6(0x258)]=_0x238b33[_0x1b49a6(0x233)],_0x26d1c7[_0x1b49a6(0x1ed)]=_0x238b33['instanceCount'],_0x26d1c7;},S3MCacheFileRenderEntity[_0x505093(0x22b)][_0x505093(0x236)]=function(){const _0x2cd975=_0x505093;if(Cesium[_0x2cd975(0x25f)](this[_0x2cd975(0x243)])||this[_0x2cd975(0x224)][_0x2cd975(0x26d)]!==0x0||this[_0x2cd975(0x254)][_0x2cd975(0x26d)]!==0x0||this['shaderProgramToCreate'][_0x2cd975(0x26d)]!==0x0)return;let _0x48fd7b=this['layer'],_0x5f3063=_0x48fd7b[_0x2cd975(0x1de)],_0x55105a=this[_0x2cd975(0x1ea)],_0x1db8ae=this[_0x2cd975(0x266)],_0x4ff658=_0x55105a[_0x2cd975(0x1e2)];if(_0x1db8ae[_0x2cd975(0x26d)]<0x1)return;let _0x52f6f7=_0x1db8ae[0x0],_0x4b3b32=this[_0x2cd975(0x22a)];this[_0x2cd975(0x251)]=new Cesium[(_0x2cd975(0x1f4))]({'context':_0x5f3063,'attributes':_0x4ff658,'indexBuffer':_0x52f6f7['indexBuffer']});let _0x26f38b=Cesium[_0x2cd975(0x262)][_0x2cd975(0x1e3)];switch(_0x52f6f7[_0x2cd975(0x22c)]){case 0x1:_0x26f38b=Cesium[_0x2cd975(0x262)][_0x2cd975(0x219)];break;case 0x2:_0x26f38b=Cesium[_0x2cd975(0x262)][_0x2cd975(0x1ec)];break;case 0x4:_0x26f38b=Cesium[_0x2cd975(0x262)]['TRIANGLES'];break;}this[_0x2cd975(0x226)]=_0x26f38b===Cesium[_0x2cd975(0x262)]['LINES'];let _0x1000ee=![];if(_0x4b3b32['alphaMode']===_0x4b7475['MASK']||_0x4b3b32[_0x2cd975(0x205)]===_0x4b7475[_0x2cd975(0x1ff)])_0x1000ee=!![];else _0x48fd7b[_0x2cd975(0x1dd)]&&_0x4b3b32['bTransparentSorting']&&(_0x1000ee=!![]);this[_0x2cd975(0x243)]=new Cesium[(_0x2cd975(0x238))]({'primitiveType':_0x26f38b,'modelMatrix':this[_0x2cd975(0x21b)],'boundingVolume':Cesium['BoundingSphere'][_0x2cd975(0x239)](this[_0x2cd975(0x1e8)]),'pickId':this[_0x2cd975(0x207)],'vertexArray':this[_0x2cd975(0x251)],'shaderProgram':this[_0x2cd975(0x246)],'pass':_0x1000ee?Cesium[_0x2cd975(0x20b)][_0x2cd975(0x225)]:Cesium[_0x2cd975(0x20b)][_0x2cd975(0x221)],'renderState':_0x4b3b32['bTransparentSorting']?getTransparentRenderState$1():getOpaqueRenderState$1(),'instanceCount':_0x55105a[_0x2cd975(0x1e0)]});let _0x145c66=getUniformMap$1(_0x4b3b32,_0x48fd7b,this);this[_0x2cd975(0x24b)]&&(_0x145c66=this['batchTable'][_0x2cd975(0x1f3)]()(_0x145c66)),_0x4b3b32[_0x2cd975(0x24b)]&&(_0x145c66=_0x4b3b32[_0x2cd975(0x24b)]['getUniformMapCallback']()(_0x145c66)),this['colorCommand'][_0x2cd975(0x1da)]=_0x145c66,this[_0x2cd975(0x1ea)]=undefined,this[_0x2cd975(0x266)]=undefined,this['vs']=undefined,this['fs']=undefined,this[_0x2cd975(0x210)]=!![];},S3MCacheFileRenderEntity[_0x505093(0x22b)][_0x505093(0x22f)]=function(_0x3aeaa6){const _0x573e3a=_0x505093;if(!this[_0x573e3a(0x243)]||!this[_0x573e3a(0x1f8)]||this[_0x573e3a(0x1e4)])return;let _0x556e06=this[_0x573e3a(0x1ef)]['context'],_0x25acaa=this[_0x573e3a(0x1f8)];S3MEdgeProcessor[_0x573e3a(0x217)](_0x556e06,_0x25acaa[_0x573e3a(0x1dc)]),S3MEdgeProcessor['createSilhouetteEdgeAttributes'](_0x556e06,_0x25acaa[_0x573e3a(0x240)]);let _0x2ce66e=S3MEdgeProcessor[_0x573e3a(0x208)](_0x556e06);this[_0x573e3a(0x1e4)]=this[_0x573e3a(0x1fc)](_0x556e06,this[_0x573e3a(0x1ef)],_0x25acaa[_0x573e3a(0x1dc)],_0x2ce66e,!![]),this['silhouetteEdgeCommand']=this[_0x573e3a(0x1fc)](_0x556e06,this[_0x573e3a(0x1ef)],_0x25acaa[_0x573e3a(0x240)],_0x2ce66e,![]);};let scratchSubTextureUploadJob=new SubTextureUploadJob();S3MCacheFileRenderEntity['prototype'][_0x505093(0x23e)]=function(_0x5caf18){const _0x2ed2a0=_0x505093;this['material']['initTexture'](),this[_0x2ed2a0(0x22a)]['requestSubTextures'](_0x5caf18,this[_0x2ed2a0(0x1ef)]);let _0x12bb7f=this[_0x2ed2a0(0x22a)][_0x2ed2a0(0x1e7)];while(_0x12bb7f[_0x2ed2a0(0x26d)]){let _0x5128c9=_0x12bb7f[_0x2ed2a0(0x26b)](),_0x49dc83=_0x5128c9[_0x2ed2a0(0x23f)],_0x38fe32=_0x5128c9['subTextureInfo'];scratchSubTextureUploadJob[_0x2ed2a0(0x22e)](_0x5caf18[_0x2ed2a0(0x1de)],this,_0x49dc83,_0x38fe32);if(!_0x5caf18[_0x2ed2a0(0x24f)][_0x2ed2a0(0x244)](scratchSubTextureUploadJob,Cesium[_0x2ed2a0(0x1db)][_0x2ed2a0(0x1f7)]))break;_0x12bb7f[_0x2ed2a0(0x20e)]();}_0x12bb7f['length']===0x0&&this['material'][_0x2ed2a0(0x249)](),this[_0x2ed2a0(0x22a)][_0x2ed2a0(0x24b)][_0x2ed2a0(0x264)](_0x5caf18);},S3MCacheFileRenderEntity[_0x505093(0x22b)][_0x505093(0x264)]=function(_0x259890,_0x1c34e7){const _0x361cce=_0x505093;if(!this[_0x361cce(0x210)]){this[_0x361cce(0x1fa)](_0x259890),this[_0x361cce(0x1e1)](),this[_0x361cce(0x1df)](_0x259890),this['createShaderProgram'](_0x259890),this[_0x361cce(0x236)](_0x259890),this[_0x361cce(0x22f)](_0x259890),this[_0x361cce(0x21f)](_0x1c34e7);return;}this[_0x361cce(0x1f2)]&&(this[_0x361cce(0x268)](),this[_0x361cce(0x1f2)]=![]),this[_0x361cce(0x24b)]&&this[_0x361cce(0x24b)][_0x361cce(0x264)](_0x259890),this[_0x361cce(0x22a)]['batchTable']&&this[_0x361cce(0x23e)](_0x259890),_0x1c34e7[_0x361cce(0x204)][_0x361cce(0x26a)]!==_0x36bab0[_0x361cce(0x220)]&&_0x259890[_0x361cce(0x265)]['push'](this[_0x361cce(0x243)]),_0x1c34e7[_0x361cce(0x204)][_0x361cce(0x26a)]!==_0x36bab0[_0x361cce(0x26c)]&&(this[_0x361cce(0x1e4)]&&(_0x259890['commandList'][_0x361cce(0x213)](this['regularEdgeCommand']),_0x1c34e7['_addRenderedEdge'](this[_0x361cce(0x1e4)][_0x361cce(0x258)],this[_0x361cce(0x1e4)][_0x361cce(0x1ed)])),this[_0x361cce(0x263)]&&(_0x259890[_0x361cce(0x265)][_0x361cce(0x213)](this[_0x361cce(0x263)]),_0x1c34e7[_0x361cce(0x211)](this[_0x361cce(0x263)]['edgeTotalLength'],this[_0x361cce(0x263)]['edgeCount'])));},S3MCacheFileRenderEntity['prototype']['isDestroyed']=function(){return ![];},S3MCacheFileRenderEntity['prototype'][_0x505093(0x23a)]=function(){const _0x5de358=_0x505093;return this['shaderProgram']=this[_0x5de358(0x246)]&&!this[_0x5de358(0x246)][_0x5de358(0x23d)]()&&this['shaderProgram']['destroy'](),this['vertexArray']=this['vertexArray']&&!this[_0x5de358(0x251)][_0x5de358(0x23d)]()&&this[_0x5de358(0x251)]['destroy'](),this[_0x5de358(0x22a)]=this[_0x5de358(0x22a)]&&!this[_0x5de358(0x22a)]['isDestroyed']()&&this[_0x5de358(0x22a)][_0x5de358(0x23a)](),this[_0x5de358(0x24b)]=this[_0x5de358(0x24b)]&&!this[_0x5de358(0x24b)][_0x5de358(0x23d)]()&&this[_0x5de358(0x24b)][_0x5de358(0x23a)](),this[_0x5de358(0x25e)]=this[_0x5de358(0x25e)]&&!this['edgeVA'][_0x5de358(0x23d)]()&&this[_0x5de358(0x25e)][_0x5de358(0x23a)](),this[_0x5de358(0x229)]=this[_0x5de358(0x229)]&&!this[_0x5de358(0x229)][_0x5de358(0x23d)]()&&this['edgeSP'][_0x5de358(0x23a)](),this['colorCommand']=undefined,this['vertexPackage']=null,this['arrIndexPackage']=null,this[_0x5de358(0x21b)]=undefined,this[_0x5de358(0x242)]=undefined,this[_0x5de358(0x203)]=undefined,this['vs']=undefined,this['fs']=undefined,Cesium['destroyObject'](this);};

    var _0x4d39=['139358TfpKcZ','8ToGglJ','458puJWnV','1BUBdeY','2UqYttz','33125RagFLB','27831pikRcd','621Bctakh','237576kCCWsa','100059ClmNri','305713ivlmyH'];(function(_0x4ec7cc,_0x39a8de){var _0x104097=_0x3809;while(!![]){try{var _0x120ede=parseInt(_0x104097(0x1ca))+-parseInt(_0x104097(0x1d0))*-parseInt(_0x104097(0x1c9))+parseInt(_0x104097(0x1d2))*-parseInt(_0x104097(0x1cc))+parseInt(_0x104097(0x1d1))*-parseInt(_0x104097(0x1cb))+parseInt(_0x104097(0x1d3))*-parseInt(_0x104097(0x1ce))+parseInt(_0x104097(0x1cd))+parseInt(_0x104097(0x1cf));if(_0x120ede===_0x39a8de)break;else _0x4ec7cc['push'](_0x4ec7cc['shift']());}catch(_0x6deb97){_0x4ec7cc['push'](_0x4ec7cc['shift']());}}}(_0x4d39,0x3c8c5));function _0x3809(_0x2b1f99,_0x315a44){_0x2b1f99=_0x2b1f99-0x1c9;var _0x4d39d9=_0x4d39[_0x2b1f99];return _0x4d39d9;}var _0x2367d8 = 'attribute\x20vec4\x20aPosition;\x0aattribute\x20vec4\x20aColor;\x0auniform\x20float\x20uPointCloudSize;\x0avarying\x20float\x20vPixelDistance;\x0a#ifdef\x20COMPRESS_VERTEX\x0a\x20\x20\x20\x20uniform\x20vec4\x20decode_position_min;\x0a\x20\x20\x20\x20uniform\x20float\x20decode_position_normConstant;\x0a#endif\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20uniform\x20sampler2D\x20uHypsometricTexture;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uMinMaxValue;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uOpacityIntervalFillMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uHypLineColor;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uNoValueColor;\x0a\x20\x20\x20\x20uniform\x20float\x20uUseWValue;\x0a\x20\x20\x20\x20uniform\x20float\x20uBottom;\x0a#endif\x0a\x20\x20\x20\x20uniform\x20vec4\x20uFillForeColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x0a#ifdef\x20HYPSOMETRIC\x0a\x0afloat\x20computeWValue(vec4\x20vertexPos){\x0a\x20\x20\x20\x20float\x20realWValue\x20=\x20vertexPos.w;\x0a#ifdef\x20TEXTURE_COORD_ONE_IS_W\x0a\x20\x20\x20\x20realWValue\x20=\x20aTexCoord0.x;\x0a#endif\x0a\x20\x20\x20\x20if(uUseWValue\x20>\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20realWValue\x20+\x20uBottom;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20return\x20vertexPos.z\x20+\x20uBottom;\x0a}\x0a\x0avec4\x20computeContourMapColor(float\x20fValue)\x0a{\x0a\x20\x20\x20\x20float\x20floorValue\x20=\x20uMinMaxValue.x;\x0a\x20\x20\x20\x20float\x20ceilValue\x20=\x20uMinMaxValue.y;\x0a\x20\x20\x20\x20float\x20threshold\x20=\x20clamp(abs(ceilValue\x20-\x20floorValue),\x200.000001,\x2020000.0);\x0a\x20\x20\x20\x20float\x20contourRate\x20=\x20(fValue\x20-\x20floorValue)\x20/\x20threshold;\x0a\x20\x20\x20\x20float\x20finalCoord\x20=\x20clamp(contourRate,\x200.0,\x201.0);\x0a\x20\x20\x20\x20float\x20count\x20=\x20floor(finalCoord\x20*\x2016.0);\x0a\x20\x20\x20\x20float\x20y\x20=\x20(count*2.0\x20+\x201.0)/32.0;\x0a\x20\x20\x20\x20float\x20x\x20=\x20fract(finalCoord*16.0);\x0a\x20\x20\x20\x20if(y\x20>\x201.0)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20x\x20=\x201.0;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20return\x20texture2D(uHypsometricTexture,\x20vec2(x,\x20y)).rgba;\x0a}\x0avec4\x20getHypsometricColor(vec4\x20oriColor,\x20float\x20fValue)\x0a{\x0a\x20\x20\x20\x20vec4\x20contourMapColor\x20=\x20vec4(0.0);\x0a\x20\x20\x20\x20float\x20finalOpacity\x20=\x20uOpacityIntervalFillMode.x;\x0a\x20\x20\x20\x20float\x20fillMode\x20=\x20uOpacityIntervalFillMode.z;\x0a\x20\x20\x20\x20float\x20minVisibleValue\x20=\x20uMinMaxValue.z;\x0a\x20\x20\x20\x20float\x20maxVisibleValue\x20=\x20uMinMaxValue.w;\x0a\x20\x20\x20\x20if(fValue\x20>\x20maxVisibleValue\x20||\x20fValue\x20<\x20minVisibleValue)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20uNoValueColor\x20*\x20oriColor;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20contourMapColor\x20=\x20computeContourMapColor(fValue);\x0a\x20\x20\x20\x20finalOpacity\x20*=\x20sign(fillMode);\x0a\x20\x20\x20\x20vec4\x20mixColor\x20=\x20mix(vec4(1.0,1.0,1.0,1.0),\x20contourMapColor,\x20finalOpacity);\x0a\x20\x20\x20\x20return\x20mixColor;\x0a}\x0a#endif\x0a\x0avoid\x20main()\x0a{\x0a#ifdef\x20COMPRESS_VERTEX\x0a\x20\x20\x20\x20vec4\x20vertexPos\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20vertexPos\x20=\x20decode_position_min\x20+\x20aPosition\x20*\x20decode_position_normConstant;\x0a#else\x0a\x20\x20\x20\x20vec4\x20vertexPos\x20=\x20aPosition;\x0a#endif\x0a\x20\x20\x20\x20vertexPos.w\x20=\x201.0;\x0a\x20\x20\x20\x20vec4\x20vertexColor\x20=\x20aColor;\x0a\x20\x20\x20\x20vColor\x20=\x20vertexColor\x20*\x20uFillForeColor;\x0a\x20\x20\x20\x20vPositionMC.xyz\x20=\x20vertexPos.xyz;\x0a\x20\x20\x20\x20vPositionMC.w\x20=\x200.0;\x0a\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjection\x20*\x20vertexPos;\x0a#ifdef\x20HYPSOMETRIC\x0a\x20\x20\x20\x20float\x20wValue\x20=\x20computeWValue(vertexPos);\x0a\x20\x20\x20\x20vColor\x20=\x20getHypsometricColor(vColor,\x20wValue);\x0a#endif\x0a\x20\x20\x20\x20vPixelDistance\x20=\x202.0\x20/\x20uPointCloudSize;\x0a\x20\x20\x20\x20gl_PointSize\x20=\x20uPointCloudSize;\x0a}';

    var _0x4cbe=['1ZthlUc','240934aVqfYt','332117xUrSrM','1171553qXiZgt','920981bNzFCl','#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0a\x20\x20\x20\x20varying\x20vec4\x20vColor;\x0a\x20\x20\x20\x20varying\x20vec4\x20vPositionMC;\x0a\x20\x20\x20\x20varying\x20float\x20vPixelDistance;\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0avoid\x20main()\x0a{\x0a#ifdef\x20APPLY_SWIPE\x20\x0a\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a#endif\x0a\x09if(vColor.a\x20<\x200.1)\x0a\x09{\x0a\x09\x09discard;\x0a\x09}\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20vColor;\x0a\x20\x20\x20\x20float\x20distanceToCenter\x20=\x20length(gl_PointCoord\x20-\x20vec2(0.5));\x0a\x20\x20\x20\x20float\x20maxDistance\x20=\x20max(0.0,\x200.5\x20-\x20vPixelDistance);\x0a\x20\x20\x20\x20float\x20wholeAlpha\x20=\x201.0\x20-\x20smoothstep(maxDistance,\x200.5,\x20distanceToCenter);\x0a\x20\x20\x20\x20gl_FragColor.a\x20*=\x20wholeAlpha;\x0a\x09if(gl_FragColor.a\x20<\x200.1)\x0a\x09{\x0a\x09\x09discard;\x0a\x09}\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20gl_FragColor\x20*=\x20czm_clip(czm_modelView\x20*\x20vec4(vPositionMC.xyz,\x201.0),\x201.0);\x0a#endif\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20czm_gammaCorrect(gl_FragColor);\x0a}','210971NdxAII','2761005rAfVDw','1NdkSUG','1042436gjIHKy'];var _0x19ade1=_0x5943;(function(_0x1aeb05,_0x593392){var _0x437c93=_0x5943;while(!![]){try{var _0x1b50fe=parseInt(_0x437c93(0x18d))*-parseInt(_0x437c93(0x193))+parseInt(_0x437c93(0x18f))+parseInt(_0x437c93(0x190))+parseInt(_0x437c93(0x196))+parseInt(_0x437c93(0x195))*parseInt(_0x437c93(0x191))+parseInt(_0x437c93(0x18e))+-parseInt(_0x437c93(0x194));if(_0x1b50fe===_0x593392)break;else _0x1aeb05['push'](_0x1aeb05['shift']());}catch(_0x91ff10){_0x1aeb05['push'](_0x1aeb05['shift']());}}}(_0x4cbe,0xb3b2d));function _0x5943(_0x557ffc,_0x1eb436){_0x557ffc=_0x557ffc-0x18d;var _0x4cbe8b=_0x4cbe[_0x557ffc];return _0x4cbe8b;}var _0x5c9879 = _0x19ade1(0x192);

    const _0x45aa=['decode_texCoord7_normConstant','fillForeColor','drawingBufferWidth','_hypsometric','decode_texCoord4_normConstant','vertexArray','layer','texCoordCompressConstant','drawingBufferHeight','invGeoMatrix','minTexCoordValue','1HkbTFr','context','DrawCommand','destroy','BoundingSphere','createShaderProgram','vertexPackage','decode_texCoord1_min','SVC_Vertex','LESS_OR_EQUAL','42puPCPE','decode_texCoord3_normConstant','prototype','PrimitiveType','clone','indexBufferToCreate','OPAQUE','length','colorCommand','116DvOOLG','604245DdXQHN','ColorTableMaxKey','decode_texCoord3_min','call','Cartesian4','decode_texCoord2_normConstant','boundingVolume','pointSize','ready','commandList','destroyObject','1320217czhdEs','_clipMode','_swipeRegion','shaderProgram','DisplayMode','uniformMap','decode_texCoord5_min','isDestroyed','arrIndexPackage','LineColor','material','MinVisibleValue','constructor','11083QYjuTc','shaderProgramToCreate','texture','style3D','1102614RZtnLb','decode_position_min','1483261EKcgTM','bottomAltitude','vertCompressConstant','decode_texCoord6_min','29564mkouvM','modelMatrix','fromCache','decode_texCoord0_min','noValueColor','compressOptions','decode_texCoord7_min','minVerticesValue','SVC_Normal','setting','decode_position_normConstant','decode_texCoord4_min','normal_rangeConstant','decode_texCoord5_normConstant','POINTS','vertexAttributes','defined','4SlZpEf','create','279383zwIWVu','decode_texCoord1_normConstant','Opacity','decode_texCoord6_normConstant','normalRangeConstant'];const _0x39c3fe=_0x2453;(function(_0x5cf9aa,_0xccfb60){const _0x4c9388=_0x2453;while(!![]){try{const _0x51fdd5=-parseInt(_0x4c9388(0x19d))*-parseInt(_0x4c9388(0x1bc))+parseInt(_0x4c9388(0x1b1))+parseInt(_0x4c9388(0x1d3))*parseInt(_0x4c9388(0x1a7))+-parseInt(_0x4c9388(0x1c9))*-parseInt(_0x4c9388(0x1b0))+-parseInt(_0x4c9388(0x1e4))*parseInt(_0x4c9388(0x1e6))+-parseInt(_0x4c9388(0x1cd))+-parseInt(_0x4c9388(0x1cf));if(_0x51fdd5===_0xccfb60)break;else _0x5cf9aa['push'](_0x5cf9aa['shift']());}catch(_0x1a978c){_0x5cf9aa['push'](_0x5cf9aa['shift']());}}}(_0x45aa,0xb6b53));function S3MPointCloudRenderEntity(_0x4e2457){const _0x3dea42=_0x2453;RenderEntity[_0x3dea42(0x1b4)](this,_0x4e2457),this['vs']=_0x2367d8,this['fs']=_0x5c9879;}S3MPointCloudRenderEntity[_0x39c3fe(0x1a9)]=Object[_0x39c3fe(0x1e5)](RenderEntity[_0x39c3fe(0x1a9)]),S3MPointCloudRenderEntity[_0x39c3fe(0x1a9)][_0x39c3fe(0x1c8)]=RenderEntity;function getOpaqueRenderState$2(){const _0x13ffeb=_0x39c3fe;return Cesium['RenderState'][_0x13ffeb(0x1d5)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium['DepthFunction'][_0x13ffeb(0x1a6)]}});}let hypMinMaxValueScratch$2=new Cesium[(_0x39c3fe(0x1b5))](),hypOpacityIntervalFillModeScratch$2=new Cesium[(_0x39c3fe(0x1b5))](),swipRegionScratch$2=new Cesium[(_0x39c3fe(0x1b5))]();function getUniformMap$2(_0x47aefb,_0x1bf296){const _0x2b4759=_0x39c3fe;let _0x90e2f2=_0x1bf296[_0x2b4759(0x1a3)],_0xf0e2f2={'uGeoMatrix':function(){return _0x1bf296['geoMatrix'];},'uInverseGeoMatrix':function(){const _0x2122db=_0x2b4759;return _0x1bf296[_0x2122db(0x19b)];},'uClipMode':function(){const _0x2662a4=_0x2b4759;return _0x47aefb[_0x2662a4(0x1bd)];},'uClipPlanes':function(){return _0x47aefb['_clipPlane'];},'uUseWValue':function(){return _0x1bf296['useWValue'];},'uHypsometricTexture':function(){const _0x2a3e4d=_0x2b4759;return _0x47aefb[_0x2a3e4d(0x195)][_0x2a3e4d(0x1cb)];},'uHypLineColor':function(){const _0x2fe1e5=_0x2b4759;return _0x47aefb[_0x2fe1e5(0x195)][_0x2fe1e5(0x1dc)][_0x2fe1e5(0x1c5)];},'uNoValueColor':function(){const _0x26a734=_0x2b4759;return _0x47aefb[_0x26a734(0x195)][_0x26a734(0x1dc)][_0x26a734(0x1d7)];},'uMinMaxValue':function(){const _0x3f66f7=_0x2b4759;let _0x24d3f4=_0x47aefb[_0x3f66f7(0x195)][_0x3f66f7(0x1dc)];return hypMinMaxValueScratch$2['x']=_0x24d3f4['ColorTableMinKey'],hypMinMaxValueScratch$2['y']=_0x24d3f4[_0x3f66f7(0x1b2)],hypMinMaxValueScratch$2['z']=_0x24d3f4[_0x3f66f7(0x1c7)],hypMinMaxValueScratch$2['w']=_0x24d3f4['MaxVisibleValue'],hypMinMaxValueScratch$2;},'uOpacityIntervalFillMode':function(){const _0x27023e=_0x2b4759;let _0x243481=_0x47aefb[_0x27023e(0x195)][_0x27023e(0x1dc)];return hypOpacityIntervalFillModeScratch$2['x']=_0x243481[_0x27023e(0x1e8)],hypOpacityIntervalFillModeScratch$2['y']=_0x243481['LineInterval'],hypOpacityIntervalFillModeScratch$2['z']=_0x243481[_0x27023e(0x1c0)],hypOpacityIntervalFillModeScratch$2;},'uSwipeRegion':function(){const _0x193969=_0x2b4759,_0x26551a=_0x47aefb['context'];return swipRegionScratch$2['x']=_0x47aefb['_swipeRegion']['x']*_0x26551a[_0x193969(0x194)],swipRegionScratch$2['y']=(0x1-_0x47aefb[_0x193969(0x1be)]['y'])*_0x26551a['drawingBufferHeight'],swipRegionScratch$2['z']=_0x47aefb['_swipeRegion']['z']*_0x26551a[_0x193969(0x194)],swipRegionScratch$2['w']=(0x1-_0x47aefb[_0x193969(0x1be)]['w'])*_0x26551a[_0x193969(0x19a)],swipRegionScratch$2;},'uBottom':function(){const _0x59fbe9=_0x2b4759;return _0x47aefb[_0x59fbe9(0x1cc)][_0x59fbe9(0x1d0)];},'uFillForeColor':function(){const _0x305004=_0x2b4759;return _0x47aefb['style3D'][_0x305004(0x193)];},'uPointCloudSize':function(){const _0x2ac5b2=_0x2b4759;return _0x47aefb['style3D'][_0x2ac5b2(0x1b8)];}},_0x2d9738=_0x90e2f2[_0x2b4759(0x1d8)];return (_0x2d9738&_0x5aa24d[_0x2b4759(0x1a5)])===_0x5aa24d['SVC_Vertex']&&(_0xf0e2f2[_0x2b4759(0x1ce)]=function(){const _0x477d64=_0x2b4759;return _0x90e2f2[_0x477d64(0x1da)];},_0xf0e2f2[_0x2b4759(0x1dd)]=function(){const _0x14acef=_0x2b4759;return _0x90e2f2[_0x14acef(0x1d1)];}),(_0x2d9738&_0x5aa24d[_0x2b4759(0x1db)])===_0x5aa24d['SVC_Normal']&&(_0xf0e2f2[_0x2b4759(0x1df)]=function(){const _0x1c2f96=_0x2b4759;return _0x90e2f2[_0x1c2f96(0x191)];}),(_0x2d9738&_0x5aa24d['SVC_TexutreCoord'])===_0x5aa24d['SVC_TexutreCoord']&&(_0x90e2f2[_0x2b4759(0x199)][_0x2b4759(0x1ae)]>0x0&&(_0xf0e2f2[_0x2b4759(0x1d6)]=function(){const _0x391252=_0x2b4759;return _0x90e2f2[_0x391252(0x19c)][0x0];},_0xf0e2f2['decode_texCoord0_normConstant']=function(){const _0x1a9e83=_0x2b4759;return _0x90e2f2[_0x1a9e83(0x199)][0x0];}),_0x90e2f2[_0x2b4759(0x199)]['length']>0x1&&(_0xf0e2f2[_0x2b4759(0x1a4)]=function(){const _0x205c12=_0x2b4759;return _0x90e2f2[_0x205c12(0x19c)][0x1];},_0xf0e2f2[_0x2b4759(0x1e7)]=function(){const _0x26533f=_0x2b4759;return _0x90e2f2[_0x26533f(0x199)][0x1];}),_0x90e2f2['texCoordCompressConstant'][_0x2b4759(0x1ae)]>0x2&&(_0xf0e2f2['decode_texCoord2_min']=function(){const _0x3b2b52=_0x2b4759;return _0x90e2f2[_0x3b2b52(0x19c)][0x2];},_0xf0e2f2[_0x2b4759(0x1b6)]=function(){const _0x4d9121=_0x2b4759;return _0x90e2f2[_0x4d9121(0x199)][0x2];}),_0x90e2f2[_0x2b4759(0x199)][_0x2b4759(0x1ae)]>0x3&&(_0xf0e2f2[_0x2b4759(0x1b3)]=function(){return _0x90e2f2['minTexCoordValue'][0x3];},_0xf0e2f2[_0x2b4759(0x1a8)]=function(){return _0x90e2f2['texCoordCompressConstant'][0x3];}),_0x90e2f2['texCoordCompressConstant'][_0x2b4759(0x1ae)]>0x4&&(_0xf0e2f2[_0x2b4759(0x1de)]=function(){return _0x90e2f2['minTexCoordValue'][0x4];},_0xf0e2f2[_0x2b4759(0x196)]=function(){const _0x2ea5bb=_0x2b4759;return _0x90e2f2[_0x2ea5bb(0x199)][0x4];}),_0x90e2f2['texCoordCompressConstant'][_0x2b4759(0x1ae)]>0x5&&(_0xf0e2f2[_0x2b4759(0x1c2)]=function(){return _0x90e2f2['minTexCoordValue'][0x5];},_0xf0e2f2[_0x2b4759(0x1e0)]=function(){const _0x5c8cf0=_0x2b4759;return _0x90e2f2[_0x5c8cf0(0x199)][0x5];}),_0x90e2f2['texCoordCompressConstant'][_0x2b4759(0x1ae)]>0x6&&(_0xf0e2f2[_0x2b4759(0x1d2)]=function(){const _0x1c6fd5=_0x2b4759;return _0x90e2f2[_0x1c6fd5(0x19c)][0x6];},_0xf0e2f2[_0x2b4759(0x190)]=function(){return _0x90e2f2['texCoordCompressConstant'][0x6];}),_0x90e2f2[_0x2b4759(0x199)][_0x2b4759(0x1ae)]>0x7&&(_0xf0e2f2[_0x2b4759(0x1d9)]=function(){return _0x90e2f2['minTexCoordValue'][0x7];},_0xf0e2f2[_0x2b4759(0x192)]=function(){return _0x90e2f2['texCoordCompressConstant'][0x7];})),_0xf0e2f2;}function _0x2453(_0x311c21,_0x26b15a){_0x311c21=_0x311c21-0x190;let _0x45aa7=_0x45aa[_0x311c21];return _0x45aa7;}S3MPointCloudRenderEntity[_0x39c3fe(0x1a9)]['createCommand']=function(){const _0x115e48=_0x39c3fe;if(Cesium[_0x115e48(0x1e3)](this[_0x115e48(0x1af)])||this['vertexBufferToCreate'][_0x115e48(0x1ae)]!==0x0||this[_0x115e48(0x1ac)][_0x115e48(0x1ae)]!==0x0||this[_0x115e48(0x1ca)]['length']!==0x0)return;let _0x498efc=this[_0x115e48(0x198)],_0x2c3e3f=_0x498efc[_0x115e48(0x19e)],_0x1a253b=this[_0x115e48(0x1a3)],_0x4db4ce=this[_0x115e48(0x1c4)],_0x336264=_0x1a253b[_0x115e48(0x1e2)];this[_0x115e48(0x197)]=new Cesium['VertexArray']({'context':_0x2c3e3f,'attributes':_0x336264}),this['colorCommand']=new Cesium[(_0x115e48(0x19f))]({'primitiveType':Cesium[_0x115e48(0x1aa)][_0x115e48(0x1e1)],'modelMatrix':this[_0x115e48(0x1d4)],'boundingVolume':Cesium[_0x115e48(0x1a1)][_0x115e48(0x1ab)](this[_0x115e48(0x1b7)]),'vertexArray':this['vertexArray'],'shaderProgram':this[_0x115e48(0x1bf)],'pass':Cesium['Pass'][_0x115e48(0x1ad)],'renderState':getOpaqueRenderState$2(),'count':_0x1a253b['verticesCount']}),this[_0x115e48(0x1af)][_0x115e48(0x1c1)]=getUniformMap$2(_0x498efc,this),this['vertexPackage']=undefined,this['arrIndexPackage']=undefined,this['vs']=undefined,this['fs']=undefined,this[_0x115e48(0x1b9)]=!![];},S3MPointCloudRenderEntity[_0x39c3fe(0x1a9)]['update']=function(_0x51e8ec,_0x28de93){const _0x2f5d95=_0x39c3fe;if(!this[_0x2f5d95(0x1b9)]){this['createBuffers'](_0x51e8ec),this[_0x2f5d95(0x1a2)](_0x51e8ec),this['createCommand'](_0x51e8ec);return;}_0x51e8ec[_0x2f5d95(0x1ba)]['push'](this[_0x2f5d95(0x1af)]);},S3MPointCloudRenderEntity[_0x39c3fe(0x1a9)][_0x39c3fe(0x1c3)]=function(){return ![];},S3MPointCloudRenderEntity[_0x39c3fe(0x1a9)]['destroy']=function(){const _0x4c2a8b=_0x39c3fe;return this[_0x4c2a8b(0x1bf)]=this[_0x4c2a8b(0x1bf)]&&!this[_0x4c2a8b(0x1bf)]['isDestroyed']()&&this[_0x4c2a8b(0x1bf)]['destroy'](),this[_0x4c2a8b(0x197)]=this['vertexArray']&&!this['vertexArray']['isDestroyed']()&&this[_0x4c2a8b(0x197)][_0x4c2a8b(0x1a0)](),this[_0x4c2a8b(0x1c6)]=this[_0x4c2a8b(0x1c6)]&&!this[_0x4c2a8b(0x1c6)][_0x4c2a8b(0x1c3)]()&&this[_0x4c2a8b(0x1c6)]['destroy'](),this[_0x4c2a8b(0x1af)]=undefined,this[_0x4c2a8b(0x1a3)]=null,this[_0x4c2a8b(0x1c4)]=null,this['modelMatrix']=undefined,this['vs']=undefined,this['fs']=undefined,Cesium[_0x4c2a8b(0x1bb)](this);};

    var _0xc8c4=['2438aFiNXO','968681FYoCsd','1OTMWcT','520362tpvMdG','105909rzZiMl','attribute\x20vec4\x20aPosition;\x0aattribute\x20vec3\x20aNormal;\x0aattribute\x20vec4\x20aTexCoord0;\x0aattribute\x20vec4\x20aColor;\x0auniform\x20float\x20uTimeVal;\x0auniform\x20float\x20uScale;\x0auniform\x20float\x20uScroll;\x0auniform\x20vec2\x20uBumpSpeed;\x0auniform\x20mat4\x20uGeoMatrix;\x0a\x0avarying\x20vec2\x20vNoiseCoord;\x0avarying\x20vec3\x20vProjectionCoord;\x0avarying\x20vec3\x20vEyeDir;\x0avarying\x20vec3\x20vNormal;\x0avarying\x20vec4\x20vColor;\x0avarying\x20vec4\x20vPositionMC;\x0avarying\x20float\x20fSelected;\x0avarying\x20vec3\x20vPositionEC;\x0a\x0avoid\x20main()\x0a{\x0a\x09vec4\x20oPos\x20=\x20czm_modelViewProjection\x20*\x20aPosition;\x0a\x09vPositionMC\x20=\x20uGeoMatrix\x20*\x20aPosition;\x0a\x09vPositionEC\x20=\x20(czm_modelView\x20*\x20vPositionMC).xyz;\x0a\x09mat4\x20scalemat\x20=\x20mat4(0.5,\x200.0,\x200.0,\x200.0,\x0a\x09\x09\x090.0,\x200.5,\x200.0,\x200.0,\x0a\x09\x09\x090.0,\x200.0,\x200.5,\x200.0,\x0a\x09\x09\x090.5,\x200.5,\x200.5,\x201.0);\x0a\x09vec4\x20proj\x20=\x20scalemat\x20*\x20oPos;\x0a\x09vProjectionCoord\x20=\x20proj.xyw;\x0a\x09vNoiseCoord.xy\x20=\x20aTexCoord0.xy\x20*\x20uScale\x20+\x20uBumpSpeed\x20*\x20uTimeVal;\x0a\x09vec4\x20cameraPos\x20=\x20czm_inverseModel\x20*\x20vec4(czm_viewerPositionWC,\x201.0);\x0a\x09vEyeDir\x20=\x20aPosition.xyz\x20-\x20cameraPos.xyz;\x0a\x09vNormal\x20=\x20aNormal.xyz;\x0a\x09gl_Position\x20=\x20oPos;\x0a\x09vec4\x20vertexColor\x20=\x20vec4(1.0);\x0a\x20\x20\x20\x20vertexColor\x20=\x20aColor;\x0a\x20\x20\x20\x20vColor\x20=\x20vertexColor;\x0a}','122231CepvHc','7YhVZHi','1167751pzgzHP','76oYJcNY','10687vLPUGe','2tJjJoO','1kOSKTQ'];var _0x51a121=_0x29c3;(function(_0x33df6b,_0x5ae5c3){var _0x44db95=_0x29c3;while(!![]){try{var _0x2540a5=parseInt(_0x44db95(0x1af))*-parseInt(_0x44db95(0x1ae))+parseInt(_0x44db95(0x1b1))*parseInt(_0x44db95(0x1b5))+-parseInt(_0x44db95(0x1b2))+parseInt(_0x44db95(0x1b3))+parseInt(_0x44db95(0x1ac))*parseInt(_0x44db95(0x1ab))+parseInt(_0x44db95(0x1b0))*parseInt(_0x44db95(0x1b6))+-parseInt(_0x44db95(0x1ad))*parseInt(_0x44db95(0x1b4));if(_0x2540a5===_0x5ae5c3)break;else _0x33df6b['push'](_0x33df6b['shift']());}catch(_0x581a94){_0x33df6b['push'](_0x33df6b['shift']());}}}(_0xc8c4,0x8c27d));function _0x29c3(_0x50810e,_0x341cce){_0x50810e=_0x50810e-0x1aa;var _0xc8c4eb=_0xc8c4[_0x50810e];return _0xc8c4eb;}var _0x36af2e = _0x51a121(0x1aa);

    var _0x186a=['80173bzoCha','32539CBzHkm','3WxhpXO','1429161CZBXjm','683059QDTbxX','1060901UTFeJL','1dVqmob','112726qpYeZO','27WnoMSl','226958aEedQS','uniform\x20sampler2D\x20uReflectMap;\x0auniform\x20sampler2D\x20uNoiseMap;\x0auniform\x20vec4\x20uTintColour;\x0auniform\x20vec4\x20uWaterColour;\x0auniform\x20vec4\x20uFillForeColor;\x0auniform\x20float\x20uFresnelPower;\x0auniform\x20float\x20uMinFresnel;\x0auniform\x20float\x20uMaxFresnel;\x0auniform\x20float\x20uNoiseScale;\x0auniform\x20float\x20uWaterBrightness;\x0avarying\x20vec2\x20vNoiseCoord;\x0avarying\x20vec3\x20vProjectionCoord;\x0avarying\x20vec3\x20vEyeDir;\x0avarying\x20vec3\x20vNormal;\x0avarying\x20vec4\x20vColor;\x0avarying\x20vec4\x20vSecondColor;\x0avarying\x20vec4\x20vPositionMC;\x0avarying\x20vec3\x20vPositionEC;\x0a\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a#endif\x0a\x0a#ifdef\x20APPLY_SWIPE\x0a\x20\x20\x20\x20uniform\x20vec4\x20uSwipeRegion;\x0a\x20\x20\x20\x20void\x20rollerShutter(vec2\x20coord,\x20vec4\x20region)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20step(region.xw,\x20coord);\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20s\x20=\x20step(coord,\x20region.zy);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(f.x\x20*\x20f.y\x20*\x20s.x\x20*\x20s.y\x20<\x201.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20uniform\x20float\x20uClipMode;\x0a\x20\x20\x20\x20uniform\x20vec4\x20uClipPlanes[6];\x0a\x20\x20\x20\x20float\x20getClipDistance(vec3\x20pos,\x20vec3\x20planeNormal,\x20float\x20disToOrigin)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20dot(planeNormal,\x20pos)\x20+\x20disToOrigin;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAllPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20#ifdef\x20CLIPPLANE\x0a\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[0].xyz,\x20uClipPlanes[0].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if\x20(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20float\x20clipBehindAnyPlane(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if((distance\x20+\x20fBorderWidth)\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20clipAnythingButLine(float\x20fBorderWidth,\x20vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20result\x20=\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(int\x20i\x20=\x200;\x20i\x20<\x206;\x20i++)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20distance\x20=\x20getClipDistance(vertex.xyz,\x20uClipPlanes[i].xyz,\x20uClipPlanes[i].w);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if(distance\x20<\x200.0)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20-1.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(distance\x20<\x20fBorderWidth)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20result\x20=\x200.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20result;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20vec4\x20clip(vec4\x20vertex)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#ifdef\x20GL_OES_standard_derivatives\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dxc\x20=\x20abs(dFdx(vertex.x));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20dyc\x20=\x20abs(dFdy(vertex.y));\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x20max(dxc,\x20dyc);\x0a\x20\x20\x20\x20#else\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20fBorderWidth\x20=\x201.0;\x0a\x20\x20\x20\x20#endif\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20clipResult\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(uClipMode\x20<\x201.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAnyPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x202.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipBehindAllPlane(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(uClipMode\x20<\x203.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clipResult\x20=\x20clipAnythingButLine(fBorderWidth,\x20vertex);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(clipResult\x20<\x20-0.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20if(clipResult\x20<\x200.5)\x0a\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20vec4(1.0);\x0a\x20\x20\x20\x20}\x0a#endif\x0a\x0avec4\x20AdjSaturation(in\x20vec4\x20inputColor,\x20in\x20float\x20saturation)\x0a{\x0a\x09vec3\x20lumCoeff\x20=\x20vec3(0.2125,\x200.7154,\x200.0721);\x0a\x09vec3\x20intensity\x20=\x20vec3(dot(inputColor.rgb,\x20lumCoeff));\x0a\x09vec3\x20tempColor\x20=\x20mix(intensity,\x20inputColor.rgb,\x20saturation);\x0a\x09return\x20vec4(tempColor,\x201.0);\x0a}\x0avoid\x20main()\x0a{\x0a#ifdef\x20APPLY_SWIPE\x20\x0a\x20\x20\x20\x20rollerShutter(gl_FragCoord.xy,\x20uSwipeRegion);\x0a#endif\x0a\x20\x20\x20\x20if(vColor.a\x20<\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20vColor;\x0a\x20\x20\x20\x20vec2\x20final\x20=\x20vProjectionCoord.xy\x20/\x20vProjectionCoord.z;\x0a\x20\x20\x20\x20vec3\x20noiseNormal\x20=\x20(texture2D(uNoiseMap,\x20(vNoiseCoord.xy\x20/\x205.0)).rgb\x20-\x200.5).rbg\x20*\x20uNoiseScale;\x0a\x20\x20\x20\x20final\x20+=\x20noiseNormal.xz;\x0a\x20\x20\x20\x20float\x20realMinFresnel,\x20realMaxFresnel;\x0a\x20\x20\x20\x20if(uMinFresnel\x20<\x20uMaxFresnel)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20realMinFresnel\x20=\x20uMinFresnel;\x0a\x20\x20\x20\x20\x20\x20\x20\x20realMaxFresnel\x20=\x20uMaxFresnel;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20else\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20realMinFresnel\x20=\x20uMaxFresnel;\x0a\x20\x20\x20\x20\x20\x20\x20\x20realMaxFresnel\x20=\x20uMinFresnel;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20float\x20fresnelBias\x20=\x20realMinFresnel;\x0a\x20\x20\x20\x20float\x20fresnelScale\x20=\x20(realMaxFresnel\x20-\x20realMinFresnel)\x20/\x201.0;\x0a\x20\x20\x20\x20float\x20fresnel\x20=\x20fresnelBias\x20+\x20fresnelScale\x20*\x20pow(1.0\x20+\x20dot(normalize(vEyeDir),\x20vNormal),\x20uFresnelPower);\x0a\x20\x20\x20\x20fresnel\x20=\x20clamp(fresnel,\x200.05,\x200.95);\x0a\x20\x20\x20\x20vec4\x20reflectionColour\x20=\x20texture2D(uReflectMap,\x20final);\x0a\x20\x20\x20\x20vec4\x20refractionColour\x20=\x20reflectionColour\x20+\x20uTintColour;\x0a\x20\x20\x20\x20vec4\x20resultColour\x20=\x20mix(uWaterColour,\x20reflectionColour,\x20fresnel);\x0a\x20\x20\x20\x20resultColour\x20=\x20AdjSaturation(resultColour,\x201.0);\x0a\x20\x20\x20\x20resultColour\x20=\x20resultColour\x20*\x20uWaterBrightness;\x0a\x20\x20\x20\x20resultColour.a\x20=\x20uWaterColour.a;\x0a\x20\x20\x20\x20resultColour\x20*=\x20uFillForeColor;\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20gl_FragColor\x20*\x20resultColour;\x0a#ifdef\x20CLIP\x0a\x20\x20\x20\x20gl_FragColor\x20*=\x20clip(vec4(vPositionEC,\x201.0));\x0a#endif\x0a\x20\x20\x20\x20if(gl_FragColor.a\x20<\x200.1)\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20discard;\x0a\x20\x20\x20\x20}\x0a\x0a}'];var _0x2d4291=_0x2c4b;function _0x2c4b(_0xfa30e0,_0x5e3d75){_0xfa30e0=_0xfa30e0-0x14e;var _0x186ae6=_0x186a[_0xfa30e0];return _0x186ae6;}(function(_0x1596ec,_0x102c26){var _0x15e684=_0x2c4b;while(!![]){try{var _0x2b859f=-parseInt(_0x15e684(0x151))+parseInt(_0x15e684(0x156))+parseInt(_0x15e684(0x158))+parseInt(_0x15e684(0x14f))+-parseInt(_0x15e684(0x155))*parseInt(_0x15e684(0x154))+parseInt(_0x15e684(0x157))*parseInt(_0x15e684(0x14e))+-parseInt(_0x15e684(0x153))*parseInt(_0x15e684(0x150));if(_0x2b859f===_0x102c26)break;else _0x1596ec['push'](_0x1596ec['shift']());}catch(_0x5b400c){_0x1596ec['push'](_0x1596ec['shift']());}}}(_0x186a,0xc27b9));var _0xbce613 = _0x2d4291(0x152);

    const _0x167b=['primitiveType','1AGgPAc','bReflect','380633lehNWI','push','DepthFunction','context','createBuffers','clone','getFramebuffer','createPickIds','reflectFramebuffer','RenderState','getUniformMapCallback','vertexPackage','waterTime','1168369MYjrXs','OPAQUE','timeVal','drawingBufferWidth','isDestroyed','createShaderProgram','getColorTexture','updateBatchTableAttributes','modelMatrix','destroy','uniformMap','BlendingState','sceneFramebuffer','addWaterPlane','bottomAltitude','call','_clipMode','_swipeRegion','BoundingSphere','vertexArray','noiseScale','269CuHlOD','averageHeight','DrawCommand','noise','Pass','selectedColor','removeWaterPlane','2UxlqWQ','material','length','maxFresnel','waterIndex','arrIndexPackage','1466QwBtzb','createCommand','batchTable','constructor','1AjvaWX','scale','tintColour','geoMatrix','603149rcsZeH','ready','vertexAttributes','VertexArray','fillForeColor','colorCommand','style3D','Cartesian4','waterColour','shaderProgram','instanceCount','1qrOgkr','boundingVolume','batchTableDirty','prototype','bTransparentSorting','1405581ILZgaF','bumpSpeed','1410421JzNotf','createBatchTable','_waterParameters','update','destroyObject','drawingBufferHeight','vertexBufferToCreate','pickInfo','466200FkYBnH','LESS_OR_EQUAL','minFresnel','layer'];const _0x3d740b=_0x1be5;function _0x1be5(_0x38c710,_0x10fc6a){_0x38c710=_0x38c710-0xc9;let _0x167b3c=_0x167b[_0x38c710];return _0x167b3c;}(function(_0x5986e9,_0x58cf80){const _0x4bbb83=_0x1be5;while(!![]){try{const _0x46b6ed=-parseInt(_0x4bbb83(0xe4))*-parseInt(_0x4bbb83(0xdf))+parseInt(_0x4bbb83(0xf5))*parseInt(_0x4bbb83(0xd0))+-parseInt(_0x4bbb83(0x11e))*parseInt(_0x4bbb83(0xd4))+-parseInt(_0x4bbb83(0x102))+parseInt(_0x4bbb83(0xf3))*parseInt(_0x4bbb83(0xe6))+parseInt(_0x4bbb83(0x117))*parseInt(_0x4bbb83(0xcc))+-parseInt(_0x4bbb83(0xee));if(_0x46b6ed===_0x58cf80)break;else _0x5986e9['push'](_0x5986e9['shift']());}catch(_0x44c0cb){_0x5986e9['push'](_0x5986e9['shift']());}}}(_0x167b,0xb722a));function S3MWaterRenderEntity(_0x2ca5d9){const _0x419aa4=_0x1be5;RenderEntity[_0x419aa4(0x111)](this,_0x2ca5d9),this['vs']=_0x36af2e,this['fs']=_0xbce613,this[_0x419aa4(0xca)]=-0x1,this[_0x419aa4(0x101)]=0x0;}S3MWaterRenderEntity[_0x3d740b(0xe2)]=Object['create'](RenderEntity[_0x3d740b(0xe2)]),S3MWaterRenderEntity['prototype'][_0x3d740b(0xcf)]=RenderEntity;function getOpaqueRenderState$3(){const _0x6ff2e7=_0x3d740b;return Cesium[_0x6ff2e7(0xfe)]['fromCache']({'cull':{'enabled':!![]},'depthTest':{'enabled':!![],'func':Cesium[_0x6ff2e7(0xf7)][_0x6ff2e7(0xef)]},'blending':Cesium[_0x6ff2e7(0x10d)]['ALPHA_BLEND']});}let swipRegionScratch$3=new Cesium[(_0x3d740b(0xdb))]();function getUniformMap$3(_0x38c1fe,_0x288644,_0x5e30e5){return {'uGeoMatrix':function(){const _0x4d10b6=_0x1be5;return _0x5e30e5[_0x4d10b6(0xd3)];},'uFillForeColor':function(){const _0xa5f1e1=_0x1be5;return _0x288644[_0xa5f1e1(0xda)][_0xa5f1e1(0xd8)];},'uSelectedColor':function(){const _0x52a0c2=_0x1be5;return _0x288644[_0x52a0c2(0x11c)];},'uClipMode':function(){const _0x161c3f=_0x1be5;return _0x288644[_0x161c3f(0x112)];},'uClipPlanes':function(){return _0x288644['_clipPlane'];},'uSwipeRegion':function(){const _0x287d90=_0x1be5,_0x29ed93=_0x288644[_0x287d90(0xf8)];return swipRegionScratch$3['x']=_0x288644[_0x287d90(0x113)]['x']*_0x29ed93['drawingBufferWidth'],swipRegionScratch$3['y']=(0x1-_0x288644[_0x287d90(0x113)]['y'])*_0x29ed93[_0x287d90(0xeb)],swipRegionScratch$3['z']=_0x288644['_swipeRegion']['z']*_0x29ed93[_0x287d90(0x105)],swipRegionScratch$3['w']=(0x1-_0x288644['_swipeRegion']['w'])*_0x29ed93[_0x287d90(0xeb)],swipRegionScratch$3;},'uReflectMap':function(){const _0x2ddbff=_0x1be5;let _0x2eaeb1=_0x288644[_0x2ddbff(0xf8)][_0x2ddbff(0xfd)][_0x2ddbff(0x10e)][_0x2ddbff(0xfb)]();if(!_0x2eaeb1)return _0x288644[_0x2ddbff(0xf8)]['defaultTexture'];return _0x2eaeb1[_0x2ddbff(0x108)](0x0);},'uNoiseMap':function(){const _0x3cc7ed=_0x1be5;return _0x288644[_0x3cc7ed(0xf8)]['defaultTexture'];},'uTimeVal':function(){const _0x30df84=_0x1be5;let _0x4cb4e9=_0x288644[_0x30df84(0xe8)][_0x30df84(0x104)]*0.01;return _0x5e30e5['waterTime']=_0x5e30e5['waterTime']>0x1?_0x4cb4e9:_0x5e30e5['waterTime']+_0x4cb4e9,_0x5e30e5[_0x30df84(0x101)];},'uScale':function(){const _0x130790=_0x1be5;return _0x288644[_0x130790(0xe8)][_0x130790(0xd1)];},'uScroll':function(){return _0x288644['_waterParameters']['scroll'];},'uNoise':function(){const _0x35078d=_0x1be5;return _0x288644['_waterParameters'][_0x35078d(0x11a)];},'uBumpSpeed':function(){const _0x124043=_0x1be5;return _0x288644[_0x124043(0xe8)][_0x124043(0xe5)];},'uFresnelPower':function(){const _0x3003b1=_0x1be5;return _0x288644[_0x3003b1(0xe8)]['fresnelPower'];},'uMinFresnel':function(){const _0x597ba3=_0x1be5;return _0x288644['_waterParameters'][_0x597ba3(0xf0)];},'uMaxFresnel':function(){const _0x1cce1b=_0x1be5;return _0x288644[_0x1cce1b(0xe8)][_0x1cce1b(0xc9)];},'uTintColour':function(){const _0x4a1ad8=_0x1be5;return _0x288644['_waterParameters'][_0x4a1ad8(0xd2)];},'uNoiseScale':function(){const _0x5dd9a2=_0x1be5;return _0x288644[_0x5dd9a2(0xe8)][_0x5dd9a2(0x116)];},'uWaterColour':function(){const _0x4075eb=_0x1be5;return _0x288644[_0x4075eb(0xe8)][_0x4075eb(0xdc)];},'uWaterBrightness':function(){const _0x393470=_0x1be5;return _0x288644[_0x393470(0xe8)]['waterBrightness'];}};}S3MWaterRenderEntity[_0x3d740b(0xe2)]['createCommand']=function(){const _0x2691c9=_0x3d740b;if(Cesium['defined'](this[_0x2691c9(0xd9)])||this[_0x2691c9(0xec)]['length']!==0x0||this['indexBufferToCreate']['length']!==0x0||this['shaderProgramToCreate'][_0x2691c9(0x120)]!==0x0)return;let _0x21e9a1=this[_0x2691c9(0xf1)],_0x212af=_0x21e9a1[_0x2691c9(0xf8)],_0x2ba95f=this[_0x2691c9(0x100)],_0x120a13=this[_0x2691c9(0xcb)],_0x22f27d=_0x2ba95f[_0x2691c9(0xd6)];if(_0x120a13[_0x2691c9(0x120)]<0x1)return;let _0x479f0f=_0x120a13[0x0],_0x142524=this['material'];this[_0x2691c9(0x115)]=new Cesium[(_0x2691c9(0xd7))]({'context':_0x212af,'attributes':_0x22f27d,'indexBuffer':_0x479f0f['indexBuffer']}),this[_0x2691c9(0xd9)]=new Cesium[(_0x2691c9(0x119))]({'primitiveType':_0x479f0f[_0x2691c9(0xf2)],'modelMatrix':this[_0x2691c9(0x10a)],'boundingVolume':Cesium[_0x2691c9(0x114)][_0x2691c9(0xfa)](this[_0x2691c9(0xe0)]),'vertexArray':this[_0x2691c9(0x115)],'shaderProgram':this[_0x2691c9(0xdd)],'pass':_0x142524[_0x2691c9(0xe3)]?Cesium['Pass']['TRANSLUCENT']:Cesium[_0x2691c9(0x11b)][_0x2691c9(0x103)],'renderState':_0x142524[_0x2691c9(0xe3)]?getTransparentRenderState():getOpaqueRenderState$3(),'instanceCount':_0x2ba95f[_0x2691c9(0xde)]});let _0x37138b=getUniformMap$3(_0x142524,_0x21e9a1,this);this['colorCommand'][_0x2691c9(0x10c)]=this['batchTable'][_0x2691c9(0xff)]()(_0x37138b),this[_0x2691c9(0x100)]=undefined,this['arrIndexPackage']=undefined,this['vs']=undefined,this['fs']=undefined,this[_0x2691c9(0xd5)]=!![];};function addWaterPlane(_0xba1105,_0x4d0676){const _0xc1a6a4=_0x3d740b;let _0x549982={'boundingVolume':_0xba1105[_0xc1a6a4(0xe0)],'distance':_0x4d0676[_0xc1a6a4(0xda)][_0xc1a6a4(0x110)]+_0x4d0676['_waterParameters'][_0xc1a6a4(0x118)]};_0xba1105[_0xc1a6a4(0xca)]=_0x4d0676[_0xc1a6a4(0x10f)](_0x549982);}S3MWaterRenderEntity[_0x3d740b(0xe2)][_0x3d740b(0xe9)]=function(_0x2a79d7,_0xde9964){const _0x24227c=_0x3d740b;if(_0x2a79d7['camera'][_0x24227c(0xf4)])return;if(!this[_0x24227c(0xd5)]){this[_0x24227c(0xe7)](_0x2a79d7),this[_0x24227c(0xfc)](),this[_0x24227c(0xf9)](_0x2a79d7),this[_0x24227c(0x107)](_0x2a79d7),this[_0x24227c(0xcd)](_0x2a79d7),this['initLayerSetting'](_0xde9964),addWaterPlane(this,_0xde9964);return;}this[_0x24227c(0xe1)]&&(this[_0x24227c(0x109)](),this['batchTableDirty']=![]),this[_0x24227c(0xce)][_0x24227c(0xe9)](_0x2a79d7),_0x2a79d7['commandList'][_0x24227c(0xf6)](this['colorCommand']);},S3MWaterRenderEntity[_0x3d740b(0xe2)][_0x3d740b(0x106)]=function(){return ![];},S3MWaterRenderEntity[_0x3d740b(0xe2)][_0x3d740b(0x10b)]=function(){const _0xdb452b=_0x3d740b;return this[_0xdb452b(0xdd)]=this[_0xdb452b(0xdd)]&&!this[_0xdb452b(0xdd)][_0xdb452b(0x106)]()&&this['shaderProgram']['destroy'](),this[_0xdb452b(0x115)]=this[_0xdb452b(0x115)]&&!this[_0xdb452b(0x115)][_0xdb452b(0x106)]()&&this[_0xdb452b(0x115)][_0xdb452b(0x10b)](),this['material']=this['material']&&!this['material']['isDestroyed']()&&this[_0xdb452b(0x11f)][_0xdb452b(0x10b)](),this[_0xdb452b(0xce)]=this[_0xdb452b(0xce)]&&!this[_0xdb452b(0xce)][_0xdb452b(0x106)]()&&this[_0xdb452b(0xce)]['destroy'](),this[_0xdb452b(0xca)]>-0x1&&this[_0xdb452b(0xf1)][_0xdb452b(0x11d)](this[_0xdb452b(0xca)]),this['colorCommand']=undefined,this[_0xdb452b(0x100)]=null,this[_0xdb452b(0xcb)]=null,this[_0xdb452b(0x10a)]=undefined,this[_0xdb452b(0xed)]=undefined,this['selectionInfoMap']=undefined,this['vs']=undefined,this['fs']=undefined,Cesium[_0xdb452b(0xea)](this);};

    const _0x5a01=['5hiJVVZ','1165tAlcjK','430103TPoVFL','385930lQzrDY','182687KRjouH','341095lKZGkG','3cjhQxs','56NijvFa','293626RlpZXP','128057pPEZZD'];(function(_0x132158,_0x350a9b){const _0x1e55e9=_0xc5c9;while(!![]){try{const _0x593381=-parseInt(_0x1e55e9(0x1ab))*-parseInt(_0x1e55e9(0x1a9))+parseInt(_0x1e55e9(0x1a7))+-parseInt(_0x1e55e9(0x1a3))+parseInt(_0x1e55e9(0x1ac))*-parseInt(_0x1e55e9(0x1a6))+-parseInt(_0x1e55e9(0x1aa))+-parseInt(_0x1e55e9(0x1a4))*-parseInt(_0x1e55e9(0x1a5))+-parseInt(_0x1e55e9(0x1a8));if(_0x593381===_0x350a9b)break;else _0x132158['push'](_0x132158['shift']());}catch(_0x1c1f9e){_0x132158['push'](_0x132158['shift']());}}}(_0x5a01,0x8204e));let S3MContentFactory={'OSGBFile':function(_0x41810e){return new S3MObliqueRenderEntity(_0x41810e);},'OSGBCacheFile':function(_0x2e3284){return new S3MCacheFileRenderEntity(_0x2e3284);},'PointCloudFile':function(_0x260dec){return new S3MPointCloudRenderEntity(_0x260dec);},'OSGBCacheFile_Water':function(_0x2fc69f){return new S3MWaterRenderEntity(_0x2fc69f);}};function _0xc5c9(_0x19bb40,_0x2292f7){_0x19bb40=_0x19bb40-0x1a3;let _0x5a01f4=_0x5a01[_0x19bb40];return _0x5a01f4;}

    const _0x424c=['byteOffset','rangeList','clone','verticesCount','2SyVCsY','multiplyByScalar','79DheLIj','TextureWrap','distance','689nabjJw','isLeafTile','boundingSphere','shininess','byteLength','textureunitstates','buffer','Cartesian3','material','multiply','addTexture','radius','matrix','transparentsorting','isTexBlock','1kwyTUt','geoMap','119331PXUKTu','context','fromBoundingSpheres','diffuseColor','154xAWGtL','REPEAT','fileName','218146aUbLuP','vertexPackage','minVerticesValue','keys','2297dpTKMz','skeletonNames','texmodmatrix','pageLods','SVC_Vertex','811BgpidE','Color','43591bltjNR','29UfPOJh','wrapT','parse','groupNode','rangeMode','vertCompressConstant','componentsPerAttribute','fromArray','alphaMode','textureunitstate','instanceBounds','BoundingSphere','177341KbuAhY','materialCode','fromPoints','fileType','center','textureCache','boundingVolume','diffuse','wrapS','compressOptions','bTransparentSorting','defined','materials','childTile','push','modelMatrix','ambientColor','instanceIndex','typedArray','addressmode','geoPackage','length','sphere','CLAMP_TO_EDGE','Matrix4'];const _0x53317e=_0x2de7;(function(_0x262cd4,_0x584ecf){const _0x39a959=_0x2de7;while(!![]){try{const _0x357557=-parseInt(_0x39a959(0x1c6))*parseInt(_0x39a959(0x1ee))+-parseInt(_0x39a959(0x1fb))*parseInt(_0x39a959(0x1da))+-parseInt(_0x39a959(0x1ef))*parseInt(_0x39a959(0x1ec))+parseInt(_0x39a959(0x1dc))+parseInt(_0x39a959(0x1e3))+-parseInt(_0x39a959(0x1cb))*parseInt(_0x39a959(0x1e0))+parseInt(_0x39a959(0x1c8))*parseInt(_0x39a959(0x1e7));if(_0x357557===_0x584ecf)break;else _0x262cd4['push'](_0x262cd4['shift']());}catch(_0x3ae116){_0x262cd4['push'](_0x262cd4['shift']());}}}(_0x424c,0x1e778));function _0x2de7(_0x3d022c,_0x8a4959){_0x3d022c=_0x3d022c-0x1be;let _0x424cbf=_0x424c[_0x3d022c];return _0x424cbf;}function S3MContentParser(){}function parseMaterial$2(_0x5168fd,_0x42680b,_0x508c81){const _0x20ec5a=_0x2de7;let _0x8f06af={},_0x40b336=_0x42680b[_0x20ec5a(0x207)][_0x20ec5a(0x1d3)];for(let _0x463f2e=0x0,_0x260f9c=_0x40b336['length'];_0x463f2e<_0x260f9c;_0x463f2e++){let _0x45c5b8=_0x40b336[_0x463f2e][_0x20ec5a(0x1d3)],_0x4638fd=_0x45c5b8['id'],_0x502195=new MaterialPass();_0x8f06af[_0x4638fd]=_0x502195;let _0x325b66=_0x45c5b8['ambient'];_0x502195[_0x20ec5a(0x20b)]=new Cesium[(_0x20ec5a(0x1ed))](_0x325b66['r'],_0x325b66['g'],_0x325b66['b'],_0x325b66['a']);let _0x122aa2=_0x45c5b8[_0x20ec5a(0x202)];_0x502195[_0x20ec5a(0x1df)]=new Cesium[(_0x20ec5a(0x1ed))](_0x122aa2['r'],_0x122aa2['g'],_0x122aa2['b'],_0x122aa2['a']);let _0x2b6adf=_0x45c5b8['specular'];_0x502195['specularColor']=new Cesium['Color'](_0x2b6adf['r'],_0x2b6adf['g'],_0x2b6adf['b'],_0x2b6adf['a']),_0x502195[_0x20ec5a(0x1ce)]=_0x45c5b8[_0x20ec5a(0x1ce)],_0x502195[_0x20ec5a(0x205)]=_0x45c5b8[_0x20ec5a(0x1d8)],_0x502195[_0x20ec5a(0x1f7)]=_0x45c5b8[_0x20ec5a(0x1f7)];let _0x486bbb=_0x45c5b8[_0x20ec5a(0x1d0)],_0x28e163=_0x486bbb[_0x20ec5a(0x1be)];for(let _0x58d0df=0x0;_0x58d0df<_0x28e163;_0x58d0df++){let _0x47b796=_0x486bbb[_0x58d0df][_0x20ec5a(0x1f8)],_0x47652c=_0x47b796['id'],_0x2a9c27=_0x47b796[_0x20ec5a(0x20e)]['u']===0x0?Cesium[_0x20ec5a(0x1c9)][_0x20ec5a(0x1e1)]:Cesium[_0x20ec5a(0x1c9)]['CLAMP_TO_EDGE'],_0x4f724a=_0x47b796[_0x20ec5a(0x20e)]['v']===0x0?Cesium[_0x20ec5a(0x1c9)]['REPEAT']:Cesium[_0x20ec5a(0x1c9)][_0x20ec5a(0x1c0)];_0x502195['texMatrix']=Cesium[_0x20ec5a(0x1c1)]['unpack'](_0x47b796[_0x20ec5a(0x1e9)]);let _0x4d53e7=_0x42680b['texturePackage'][_0x47652c];if(Cesium[_0x20ec5a(0x206)](_0x4d53e7)&&_0x4d53e7['arrayBufferView'][_0x20ec5a(0x1cf)]>0x0){_0x4d53e7[_0x20ec5a(0x203)]=_0x2a9c27,_0x4d53e7[_0x20ec5a(0x1f0)]=_0x4f724a;let _0x5bccb4=_0x508c81[_0x20ec5a(0x1e2)]+_0x47652c,_0x2da7cc=_0x5168fd[_0x20ec5a(0x200)]['getTexture'](_0x5bccb4);!Cesium[_0x20ec5a(0x206)](_0x2da7cc)&&(_0x4d53e7[_0x20ec5a(0x1d9)]=![],_0x2da7cc=new DDSTexture(_0x5168fd,_0x47652c,_0x4d53e7),_0x5168fd[_0x20ec5a(0x200)][_0x20ec5a(0x1d5)](_0x5bccb4,_0x2da7cc)),_0x502195['textures'][_0x20ec5a(0x209)](_0x2da7cc);}}}return _0x8f06af;}function calcBoundingVolumeForNormal(_0x4f6942,_0x4db533){const _0x412296=_0x2de7;let _0x2f47ba=new Cesium[(_0x412296(0x1fa))](),_0x43e20d=new Cesium[(_0x412296(0x1d2))](),_0x422f6b=_0x4f6942['vertexAttributes'][0x0],_0x529498=_0x422f6b[_0x412296(0x1f5)],_0x1f0f15=Cesium['defined'](_0x4f6942[_0x412296(0x204)])&&(_0x4f6942['compressOptions']&_0x5aa24d['SVC_Vertex'])===_0x5aa24d[_0x412296(0x1eb)],_0x110998=0x1,_0x143332,_0x4000ed;_0x1f0f15?(_0x110998=_0x4f6942[_0x412296(0x1f4)],_0x143332=new Cesium[(_0x412296(0x1d2))](_0x4f6942['minVerticesValue']['x'],_0x4f6942[_0x412296(0x1e5)]['y'],_0x4f6942['minVerticesValue']['z']),_0x4000ed=new Uint16Array(_0x422f6b[_0x412296(0x20d)]['buffer'],_0x422f6b[_0x412296(0x20d)][_0x412296(0x1c2)],_0x422f6b[_0x412296(0x20d)][_0x412296(0x1cf)]/0x2)):_0x4000ed=new Float32Array(_0x422f6b[_0x412296(0x20d)][_0x412296(0x1d1)],_0x422f6b[_0x412296(0x20d)][_0x412296(0x1c2)],_0x422f6b['typedArray'][_0x412296(0x1cf)]/0x4);let _0x2e6905=[];for(let _0x5f23cf=0x0;_0x5f23cf<_0x4f6942[_0x412296(0x1c5)];_0x5f23cf++){Cesium['Cartesian3'][_0x412296(0x1f6)](_0x4000ed,_0x529498*_0x5f23cf,_0x43e20d),_0x1f0f15&&(_0x43e20d=Cesium[_0x412296(0x1d2)][_0x412296(0x1c7)](_0x43e20d,_0x110998,_0x43e20d),_0x43e20d=Cesium[_0x412296(0x1d2)]['add'](_0x43e20d,_0x143332,_0x43e20d)),_0x2e6905[_0x412296(0x209)](Cesium[_0x412296(0x1d2)][_0x412296(0x1c4)](_0x43e20d));}return Cesium[_0x412296(0x1fa)][_0x412296(0x1fd)](_0x2e6905,_0x2f47ba),Cesium[_0x412296(0x1fa)]['transform'](_0x2f47ba,_0x4db533,_0x2f47ba),_0x2e6905[_0x412296(0x1be)]=0x0,_0x2f47ba;}let scratchCenter=new Cesium[(_0x53317e(0x1d2))]();function calcBoundingVolumeForInstance(_0x38dc52){const _0x232acb=_0x53317e;let _0x111501=new Cesium[(_0x232acb(0x1fa))](),_0x3c151c=_0x38dc52[_0x232acb(0x1f9)];if(!Cesium[_0x232acb(0x206)](_0x3c151c))return _0x111501;let _0x3a644d=new Cesium[(_0x232acb(0x1d2))](_0x3c151c[0x0],_0x3c151c[0x1],_0x3c151c[0x2]),_0x17e7aa=new Cesium['Carteisan3'](_0x3c151c[0x3],_0x3c151c[0x4],_0x3c151c[0x5]),_0x217dac=new Cesium[(_0x232acb(0x1d2))]['lerp'](_0x3a644d,_0x17e7aa,0.5,scratchCenter),_0x2fa1c8=new Cesium[(_0x232acb(0x1d2))][(_0x232acb(0x1ca))](_0x217dac,_0x3a644d);return _0x111501['center']=_0x217dac,_0x111501[_0x232acb(0x1d6)]=_0x2fa1c8,_0x111501;}function calcBoundingVolume(_0x545d67,_0x3aef4c){const _0x2151a7=_0x53317e;if(_0x545d67[_0x2151a7(0x20c)]>-0x1)return calcBoundingVolumeForInstance(_0x545d67);return calcBoundingVolumeForNormal(_0x545d67,_0x3aef4c);}function parseGeodes(_0x2f5d2d,_0x49a9fd,_0x3979e3,_0x11a50b,_0x2688c4){const _0x5e764a=_0x53317e;let _0x57c4de={},_0x1f587c=_0x11a50b['geodes'];for(let _0x29c538=0x0,_0x3d5c74=_0x1f587c[_0x5e764a(0x1be)];_0x29c538<_0x3d5c74;_0x29c538++){let _0x51d20c=_0x1f587c[_0x29c538],_0x1d8fb9=_0x51d20c[_0x5e764a(0x1d7)],_0x5b6fe5=Cesium[_0x5e764a(0x1c1)][_0x5e764a(0x1d4)](_0x2f5d2d[_0x5e764a(0x20a)],_0x1d8fb9,new Cesium['Matrix4']()),_0x24ba66;Cesium[_0x5e764a(0x206)](_0x2688c4[_0x5e764a(0x201)])&&(_0x24ba66=new Cesium[(_0x5e764a(0x1fa))](_0x2688c4[_0x5e764a(0x201)][_0x5e764a(0x1bf)][_0x5e764a(0x1ff)],_0x2688c4[_0x5e764a(0x201)][_0x5e764a(0x1bf)][_0x5e764a(0x1d6)]),Cesium[_0x5e764a(0x1fa)]['transform'](_0x24ba66,_0x2f5d2d[_0x5e764a(0x20a)],_0x24ba66));let _0x44bc63=_0x51d20c[_0x5e764a(0x1e8)];for(let _0xc3341a=0x0,_0x35e7d1=_0x44bc63[_0x5e764a(0x1be)];_0xc3341a<_0x35e7d1;_0xc3341a++){let _0x15eee6=_0x44bc63[_0xc3341a],_0x1cc0f9=_0x49a9fd[_0x5e764a(0x20f)][_0x15eee6],_0x13f678=_0x1cc0f9[_0x5e764a(0x1e4)],_0x33f267=_0x1cc0f9['arrIndexPackage'],_0x5642b4=_0x1cc0f9['pickInfo'],_0x42aa31;_0x33f267['length']>0x0&&(_0x42aa31=_0x3979e3[_0x33f267[0x0][_0x5e764a(0x1fc)]]);let _0x16fadc=Cesium[_0x5e764a(0x206)](_0x24ba66)?_0x24ba66:calcBoundingVolume(_0x13f678,_0x5b6fe5);_0x57c4de[_0x15eee6]=S3MContentFactory[_0x2f5d2d[_0x5e764a(0x1fe)]]({'layer':_0x2f5d2d,'vertexPackage':_0x13f678,'arrIndexPackage':_0x33f267,'pickInfo':_0x5642b4,'modelMatrix':_0x5b6fe5,'geoMatrix':_0x1d8fb9,'boundingVolume':_0x16fadc,'material':_0x42aa31,'edgeGeometry':_0x1cc0f9['edgeGeometry'],'geoName':_0x15eee6});}}if(Object[_0x5e764a(0x1e6)](_0x57c4de)[_0x5e764a(0x1be)]<0x1)return;if(!Cesium['defined'](_0x2688c4[_0x5e764a(0x201)])){let _0x4535a5=[];for(let _0x80926e in _0x57c4de){_0x57c4de['hasOwnProperty'](_0x80926e)&&_0x4535a5[_0x5e764a(0x209)](_0x57c4de[_0x80926e][_0x5e764a(0x201)]);}_0x2688c4['boundingVolume']={'sphere':Cesium['BoundingSphere'][_0x5e764a(0x1de)](_0x4535a5)};}_0x2688c4['geoMap']=_0x57c4de;}function parsePagelods(_0x3a968d,_0x5b60c6,_0x33251b){const _0x602d1=_0x53317e;let _0x363196=_0x5b60c6[_0x602d1(0x1f2)],_0x4ddd0b=[];for(let _0x57802e=0x0,_0x549f5b=_0x363196[_0x602d1(0x1ea)][_0x602d1(0x1be)];_0x57802e<_0x549f5b;_0x57802e++){let _0x1c6aeb={},_0x12374f=_0x363196['pageLods'][_0x57802e];_0x1c6aeb[_0x602d1(0x1f3)]=_0x12374f[_0x602d1(0x1f3)],_0x1c6aeb['rangeDataList']=_0x12374f[_0x602d1(0x208)],_0x1c6aeb[_0x602d1(0x1c3)]=_0x12374f[_0x602d1(0x1c3)];let _0x4c70a1=_0x12374f[_0x602d1(0x1cd)][_0x602d1(0x1ff)],_0x3fa770=_0x12374f[_0x602d1(0x1cd)][_0x602d1(0x1d6)];_0x1c6aeb['rangeDataList']!==''?_0x1c6aeb['boundingVolume']={'sphere':{'center':new Cesium[(_0x602d1(0x1d2))](_0x4c70a1['x'],_0x4c70a1['y'],_0x4c70a1['z']),'radius':_0x3fa770}}:_0x1c6aeb[_0x602d1(0x1cc)]=!![],parseGeodes(_0x3a968d,_0x5b60c6,_0x33251b,_0x12374f,_0x1c6aeb),Cesium['defined'](_0x1c6aeb[_0x602d1(0x1db)])&&_0x4ddd0b[_0x602d1(0x209)](_0x1c6aeb);}return _0x4ddd0b;}S3MContentParser[_0x53317e(0x1f1)]=function(_0x19c9d7,_0x28ae6a,_0x24907d){const _0x1b34bc=_0x53317e;if(!Cesium[_0x1b34bc(0x206)](_0x28ae6a))return;let _0x29c8ec=parseMaterial$2(_0x19c9d7[_0x1b34bc(0x1dd)],_0x28ae6a,_0x24907d),_0x58d432=parsePagelods(_0x19c9d7,_0x28ae6a,_0x29c8ec);return _0x58d432;};

    const _0x3cac=['height','pixelFormat','context','191484hSnEgQ','13uDdLwV','refCount','818749YciJmR','internalFormat','compressType','cache','layerId','27201fikAnw','1298861wiYKjb','contextId','724893XIVbeR','textureId','getCache','591CEvdfK','1RcBkaA','235UObuXh','Queue','destroy','arrayBufferView','1omhhNS','482794bKDlmi','rootName','width'];function _0x37b6(_0x574ccb,_0x1df51e){_0x574ccb=_0x574ccb-0x1d1;let _0x3cacd6=_0x3cac[_0x574ccb];return _0x3cacd6;}const _0x30fb4b=_0x37b6;(function(_0x4efe98,_0x348559){const _0x117061=_0x37b6;while(!![]){try{const _0xd3cc3a=-parseInt(_0x117061(0x1d9))*parseInt(_0x117061(0x1e0))+parseInt(_0x117061(0x1e7))*-parseInt(_0x117061(0x1db))+parseInt(_0x117061(0x1e3))+-parseInt(_0x117061(0x1d2))+parseInt(_0x117061(0x1e6))*-parseInt(_0x117061(0x1e8))+parseInt(_0x117061(0x1d8))+-parseInt(_0x117061(0x1d1))*-parseInt(_0x117061(0x1e1));if(_0xd3cc3a===_0x348559)break;else _0x4efe98['push'](_0x4efe98['shift']());}catch(_0x59b6b3){_0x4efe98['push'](_0x4efe98['shift']());}}}(_0x3cac,0x66d4d));let TextureManager={'cache':{},'cacheSize':0x0,'freeCache':{},'freeQueue':new Cesium[(_0x30fb4b(0x1e9))](),'freeCacheSize':0x0,'throttleSize':0x32*0x400*0x400,'getCache':function(_0x1a369c,_0x35b5ee,_0x23f5da){const _0x1e094c=_0x30fb4b;let _0x1e619c=this[_0x1e094c(0x1de)][_0x1a369c];!_0x1e619c&&(_0x1e619c=this[_0x1e094c(0x1de)][_0x1a369c]={});let _0x1c8dfd=_0x1e619c[_0x35b5ee];!_0x1c8dfd&&(_0x1c8dfd=_0x1e619c[_0x35b5ee]={});let _0xfe8eb2=_0x1c8dfd[_0x23f5da];return !_0xfe8eb2&&(_0xfe8eb2=_0x1c8dfd[_0x23f5da]={}),_0xfe8eb2;},'get':function(_0xd25fac,_0x15d124,_0x5b3f55,_0x2b4ed1){const _0x55a10e=_0x30fb4b;let _0x39f0f9=this['getCache'](_0xd25fac,_0x15d124,_0x5b3f55),_0x3a6c7f=_0x39f0f9[_0x2b4ed1];if(!_0x3a6c7f)return undefined;return _0x3a6c7f[_0x55a10e(0x1da)]++,_0x3a6c7f;},'create':function(_0x1cd8de){const _0x217c3c=_0x30fb4b;let _0x5683db=_0x1cd8de[_0x217c3c(0x1d7)],_0x9c7efe=_0x5683db['id'],_0x44a915=_0x1cd8de[_0x217c3c(0x1df)],_0x17fe27=_0x1cd8de[_0x217c3c(0x1d3)],_0x3e3770=_0x1cd8de[_0x217c3c(0x1e4)],_0x3b1ef1=this[_0x217c3c(0x1e5)](_0x9c7efe,_0x44a915,_0x17fe27),_0x508d3a=_0x3b1ef1[_0x3e3770];if(_0x508d3a)return _0x508d3a[_0x217c3c(0x1da)]++,_0x508d3a;let _0x492a01=_0x1cd8de[_0x217c3c(0x1d4)],_0x406f76=_0x1cd8de[_0x217c3c(0x1d5)],_0x13f49b=_0x1cd8de[_0x217c3c(0x1dd)],_0x11fd31=_0x1cd8de[_0x217c3c(0x1d6)],_0x14041a=_0x1cd8de[_0x217c3c(0x1eb)],_0x5ba515=_0x1cd8de[_0x217c3c(0x1dc)];return _0x508d3a=new DDSTexture(_0x5683db,_0x3e3770,{'context':_0x5683db,'layerId':_0x44a915,'rootName':_0x17fe27,'textureId':_0x3e3770,'width':_0x492a01,'height':_0x406f76,'compressType':_0x13f49b,'pixelFormat':_0x11fd31,'internalFormat':_0x5ba515,'isTexBlock':!![],'arrayBufferView':_0x14041a}),_0x3b1ef1[_0x3e3770]=_0x508d3a,_0x508d3a;},'del':function(_0x8cec6f){const _0x55cab6=_0x30fb4b;if(!_0x8cec6f[_0x55cab6(0x1e2)])return;let _0x29f673=this[_0x55cab6(0x1e5)](_0x8cec6f[_0x55cab6(0x1e2)],_0x8cec6f[_0x55cab6(0x1df)],_0x8cec6f[_0x55cab6(0x1d3)]);if(!_0x29f673[_0x8cec6f[_0x55cab6(0x1e4)]])return;--_0x8cec6f['refCount']===0x0&&(delete _0x29f673[_0x8cec6f[_0x55cab6(0x1e4)]],_0x8cec6f[_0x55cab6(0x1ea)]());}};

    const _0x13a4=['BatchTable','%23','subTexInfos','context','textureRenderableFlag','bTransparentSorting','subTexturesToUpload','textureInfo','prototype','CRN_DXT5','ambientColor','renderable','compressType','hasOwnProperty','contentResource','isCrnTexture','_ancestorTextureBake','indexOf','_subBatchValuesBake','15361AZAzHw','shininess','Queue','enableTextureRenderable','subTextureNamesBake','refCount','get','RGBA_DXT5','755108wvIqBI','format','czm_batchTable_xywh2','813kKncvf','Tex','subRequestNames','textureParameterBake','_subTexInfosBake','layerId','subBatchValues','isRootTile','init','requestNames','631fRoDOg','textureId','keys','rootBatchIdMap','FLOAT','oriTextureBake','textures','1iVvbOb','setBatchedAttribute','length','textureParameter','specularColor','initTexture','280406vnGUNK','curTextureName','isRoot','split','update','ancestorTexture','textureData','createdBaker','isLeaf','lastIndexOf','createBakeTexture','requestBakeSubTextures','39xoYOVl','_subTextureManager','defined','54451YdXOBe','name','_baseUri','Cartesian4','atlas_batchTable_xywh','del','subRequestNamesBake','subTextureNames','batchTable','ancestorMap','url','rootTextureName','splice','enableBakeTextureRenderable','rootName','subRequestedBaker','layer','oriTexture','PixelFormat','substr','height','result','_id','textureInitilized','createTexture','subRequested','_subTexInfos','push','created','batchTableBake','107btFyez','arrayBufferView','create','textureBakeRenderableFlag','subName','545253FWavAX','_materialManager','suffix','initBakeTexture','11461QRvpjs','textureBakeInitilized','tile','substring','width','diffuseColor','offsetX','enqueue','cache','offsetY','destroy','27mCjYer','subTextureManager'];const _0x1d4663=_0x3a19;(function(_0x3549db,_0x271fdc){const _0x94a7c2=_0x3a19;while(!![]){try{const _0x43ebf0=-parseInt(_0x94a7c2(0x118))*parseInt(_0x94a7c2(0x121))+-parseInt(_0x94a7c2(0x11d))*parseInt(_0x94a7c2(0xe5))+parseInt(_0x94a7c2(0xeb))+parseInt(_0x94a7c2(0xf7))*-parseInt(_0x94a7c2(0x141))+parseInt(_0x94a7c2(0x149))+parseInt(_0x94a7c2(0xde))*parseInt(_0x94a7c2(0xd4))+parseInt(_0x94a7c2(0xfa))*parseInt(_0x94a7c2(0x12c));if(_0x43ebf0===_0x271fdc)break;else _0x3549db['push'](_0x3549db['shift']());}catch(_0x204106){_0x3549db['push'](_0x3549db['shift']());}}}(_0x13a4,0x9e363));function MaterialExt(){const _0x35d968=_0x3a19;this[_0x35d968(0xed)]=![],this[_0x35d968(0xf3)]=![],this[_0x35d968(0xd9)]=undefined,this[_0x35d968(0x123)]=undefined,this[_0x35d968(0x146)]=0x0,this['id']=undefined,this[_0x35d968(0x138)]=new Cesium['Cartesian4'](0x1,0x1,0x1,0x1),this['diffuseColor']=new Cesium['Cartesian4'](0x1,0x1,0x1,0x1),this[_0x35d968(0xe9)]=new Cesium[(_0x35d968(0xfd))](0x0),this[_0x35d968(0x142)]=0x32,this[_0x35d968(0x133)]=![],this[_0x35d968(0xe4)]=[],this[_0x35d968(0x116)]=![],this[_0x35d968(0xf2)]=![],this[_0x35d968(0x113)]=![],this[_0x35d968(0x109)]=![],this[_0x35d968(0xd6)]=undefined,this[_0x35d968(0x100)]=undefined,this[_0x35d968(0x101)]=undefined,this[_0x35d968(0x145)]=undefined,this[_0x35d968(0xda)]=undefined,this[_0x35d968(0xe3)]=undefined,this['batchTable']=undefined,this[_0x35d968(0x117)]=undefined,this[_0x35d968(0xf0)]=undefined,this['oriTexture']=undefined,this[_0x35d968(0xe8)]=undefined,this[_0x35d968(0xd7)]=undefined,this['textureInitilized']=![],this['textureBakeInitilized']=![],this[_0x35d968(0x132)]=![],this[_0x35d968(0x11b)]=![],this[_0x35d968(0x13d)]=![],this['subTexturesToUpload']=new Cesium[(_0x35d968(0x143))]();}let _descriptionMap={};function updateTextureBatchTable(_0x209b7c,_0x3a1991,_0x17d795){const _0x1e1253=_0x3a19;for(let _0x431482 in _0x17d795){if(_0x17d795[_0x1e1253(0x13b)](_0x431482)){let _0x1a89e5=_0x17d795[_0x431482],_0x553ecc=Number(_0x431482);_0x3a1991[_0x1e1253(0xe6)](_0x553ecc,0x0,_0x1a89e5);}}_0x3a1991[_0x1e1253(0xef)](_0x209b7c);}function getAncestorTexture(_0x2fcc7a,_0x5451b2,_0x1524da,_0x1de940,_0x68be04,_0x41006e){const _0x302e8a=_0x3a19;let _0x1042d2=_0x68be04[_0x1de940];if(!_0x1042d2)return undefined;let _0x2306b0=TextureManager[_0x302e8a(0x147)](_0x2fcc7a,_0x5451b2,_0x1524da,_0x1042d2);while(_0x1042d2&&_0x2306b0&&!_0x2306b0['renderable']){_0x2306b0[_0x302e8a(0x146)]--,_0x1042d2=_0x68be04[_0x1042d2],_0x2306b0=TextureManager['get'](_0x2fcc7a,_0x5451b2,_0x1524da,_0x1042d2);}return _0x41006e[_0x302e8a(0xfb)]=_0x1042d2,_0x2306b0;}function getName(_0x2148e7){const _0x5da6ad=_0x3a19;let _0xbfb4b3=_0x2148e7[_0x5da6ad(0x13f)]('.');return _0x2148e7[_0x5da6ad(0x10d)](0x0,_0xbfb4b3);}MaterialExt[_0x1d4663(0x136)][_0x1d4663(0xf5)]=function(_0x280b96,_0x4d80d2,_0x45c71a,_0x43c604,_0x56932d,_0x431eeb,_0x389d90,_0x517ecf){const _0x1e72f7=_0x1d4663;if(this[_0x1e72f7(0xf2)])return undefined;this['textureParameterBake']={'context':_0x280b96,'layer':_0x4d80d2,'isRoot':_0x45c71a,'rootName':_0x43c604,'curTextureName':_0x56932d,'textureInfo':_0x431eeb,'rootBatchIdMap':_0x389d90,'ancestorMap':_0x517ecf},this[_0x1e72f7(0xf2)]=!![],this[_0x1e72f7(0x109)]=_0x45c71a;let _0x29b742=_0x431eeb['textureData'],_0x51fcdc=PixelFormat[_0x1e72f7(0x148)],_0x255c01=TextureManager[_0x1e72f7(0x11a)]({'context':_0x280b96,'layerId':_0x4d80d2['id'],'rootName':_0x43c604,'textureId':_0x431eeb['id'],'width':_0x431eeb[_0x1e72f7(0x125)],'height':_0x431eeb[_0x1e72f7(0x10e)],'compressType':_0x431eeb[_0x1e72f7(0x13a)],'pixelFormat':_0x431eeb[_0x1e72f7(0x14a)],'internalFormat':_0x51fcdc,'arrayBufferView':_0x29b742});_0x255c01[_0x1e72f7(0x139)]=_0x45c71a;let _0x185723=_0x431eeb[_0x1e72f7(0x130)][_0x1e72f7(0xe7)],_0x4dc97d=_0x431eeb[_0x1e72f7(0x105)],_0x28350a=_0x389d90[_0x4dc97d];this[_0x1e72f7(0xe4)]['push'](_0x255c01);let _0x327c66=[{'functionName':_0x1e72f7(0xd3),'componentDatatype':ComponentDatatype['FLOAT'],'componentsPerAttribute':0x4}],_0x1ce160=defined(_0x28350a)?Object[_0x1e72f7(0xe0)](_0x28350a)[_0x1e72f7(0xe7)]:_0x185723;this[_0x1e72f7(0x117)]=new BatchTable(_0x280b96,_0x327c66,_0x1ce160),this[_0x1e72f7(0x117)][_0x1e72f7(0x11f)]='_2';let _0xf9fbc0=_descriptionMap[_0x4d80d2[_0x1e72f7(0xfb)]];!defined(_0xf9fbc0)&&(_0xf9fbc0=_descriptionMap[_0x4d80d2[_0x1e72f7(0xfb)]]={});let _0x343a9d=_0xf9fbc0[_0x43c604];!defined(_0x343a9d)&&(_0x343a9d=_0xf9fbc0[_0x43c604]={});let _0x526025=_0x343a9d[_0x56932d];!defined(_0x526025)&&(_0x526025=_0x343a9d[_0x56932d]={});let _0x57b4f5=_0x431eeb[_0x1e72f7(0x130)];for(let _0x2b0618=0x0;_0x2b0618<_0x185723;_0x2b0618++){let _0x3b2f52=_0x57b4f5[_0x2b0618],_0x36119c=_0x3b2f52[_0x1e72f7(0x11c)][_0x1e72f7(0xee)]('_')[0x0],_0x219341=_0x3b2f52[_0x1e72f7(0x127)],_0x54da58=_0x3b2f52[_0x1e72f7(0x12a)],_0xfdabc7=_0x3b2f52['width'],_0x263345=_0x3b2f52[_0x1e72f7(0x10e)],_0x2c28ee=new Cartesian4(_0x219341,_0x54da58,_0xfdabc7,_0x263345);_0x526025[_0x36119c]=_0x2c28ee;}if(!_0x45c71a){this['subRequestNamesBake']=[];for(let _0x3412c4=0x0;_0x3412c4<_0x431eeb[_0x1e72f7(0xdd)]['length'];_0x3412c4++){let _0x2b1f1c=_0x431eeb[_0x1e72f7(0xdd)][_0x3412c4],_0x4f7150=getName(_0x2b1f1c);if(_0x4f7150[_0x1e72f7(0xee)]('_')[0x0]===_0x1e72f7(0xd5)){let _0x4024d7=_0x2b1f1c['split']('#'),_0x4ffe2a=getName(_0x4024d7[0x0]);if(_0x4024d7[_0x1e72f7(0xe7)]>0x1){let _0x7385bb=_0x4024d7[0x1],_0x504cb3=_0x7385bb[_0x1e72f7(0xe7)];for(let _0x2fd160=0x0;_0x2fd160<_0x504cb3;_0x2fd160+=0x3){let _0x578583=_0x7385bb[_0x1e72f7(0x124)](_0x2fd160,_0x2fd160+0x3),_0x1c7a3b=_0x4ffe2a+'_'+_0x578583;this[_0x1e72f7(0x100)][_0x1e72f7(0x115)](_0x1c7a3b);}}}else this[_0x1e72f7(0x100)]['push'](_0x4f7150);}}return this[_0x1e72f7(0xe3)]=_0x255c01,_0x255c01;},MaterialExt[_0x1d4663(0x136)][_0x1d4663(0xea)]=function(){const _0x2622d4=_0x1d4663;if(this[_0x2622d4(0x111)]||!this[_0x2622d4(0xe8)])return;this[_0x2622d4(0x111)]=!![];let _0x44ec2c=this[_0x2622d4(0xe8)][_0x2622d4(0x131)],_0x55ebee=this['textureParameter'][_0x2622d4(0x10a)],_0x3ed4b4=this['textureParameter']['isRoot'],_0x4b638d=this[_0x2622d4(0xe8)]['rootName'],_0x40e8a2=this[_0x2622d4(0xe8)]['curTextureName'],_0x129c61=this[_0x2622d4(0xe8)][_0x2622d4(0x135)],_0x4ddced=this[_0x2622d4(0xe8)]['rootBatchIdMap'],_0xc8c1eb=this[_0x2622d4(0xe8)][_0x2622d4(0x103)];this[_0x2622d4(0xe8)]=undefined;let _0x5aaaf6={},_0x3586c8=_0x129c61[_0x2622d4(0x105)],_0x62f4f5=_0x4ddced[_0x3586c8],_0x46e4f0=_0x3ed4b4?undefined:getAncestorTexture(_0x44ec2c['id'],_0x55ebee['id'],_0x4b638d,_0x40e8a2,_0xc8c1eb,_0x5aaaf6),_0x584d93=_descriptionMap[_0x55ebee[_0x2622d4(0xfb)]];!_0x584d93&&(_0x584d93=_descriptionMap[_0x55ebee[_0x2622d4(0xfb)]]={});let _0x5ac176=_0x584d93[_0x4b638d];!_0x5ac176&&(_0x5ac176=_0x584d93[_0x4b638d]={});let _0x5bbb2e=_0x5ac176[_0x40e8a2];!_0x5bbb2e&&(_0x5bbb2e=_0x5ac176[_0x40e8a2]={});let _0x94505d=_0x3ed4b4?undefined:_0x5aaaf6[_0x2622d4(0xfb)]?_0x5ac176[_0x5aaaf6[_0x2622d4(0xfb)]]:undefined,_0x5a3b1a={},_0x5f3826=_0x129c61[_0x2622d4(0x130)],_0x1771da=[],_0x1c908b=_0x129c61['subTexInfos'][_0x2622d4(0xe7)];for(let _0x153861=0x0;_0x153861<_0x1c908b;_0x153861++){let _0x56d742=_0x5f3826[_0x153861],_0x16d137=_0x56d742[_0x2622d4(0x11c)][_0x2622d4(0xee)]('_')[0x0],_0x1dab33=_0x56d742[_0x2622d4(0x127)],_0x49e68f=_0x56d742[_0x2622d4(0x12a)],_0x186392=_0x56d742[_0x2622d4(0x125)],_0x1b085e=_0x56d742[_0x2622d4(0x10e)],_0x7f32af=new Cesium['Cartesian4'](_0x1dab33,_0x49e68f,_0x186392,_0x1b085e),_0x59ff9f=_0x62f4f5?_0x62f4f5[_0x16d137]:_0x153861,_0xdb0b87=_0x3ed4b4?undefined:_0x94505d?_0x94505d[_0x16d137]:undefined,_0x597e4b=_0xdb0b87?_0xdb0b87:_0x7f32af;this[_0x2622d4(0x102)][_0x2622d4(0xe6)](_0x59ff9f,0x0,_0x597e4b),_0x5a3b1a[_0x59ff9f]=_0x7f32af,_0x5bbb2e[_0x16d137]=_0x7f32af,_0x1771da[_0x2622d4(0x115)](_0x56d742[_0x2622d4(0x11c)]);}this['subTexInfos']=_0x5f3826,this[_0x2622d4(0x101)]=_0x1771da,this[_0x2622d4(0xda)]=_0x5a3b1a,this[_0x2622d4(0xf0)]=_0x46e4f0;},MaterialExt['prototype'][_0x1d4663(0x120)]=function(){const _0x3c4aef=_0x1d4663;if(this[_0x3c4aef(0x122)]||!defined(this[_0x3c4aef(0xd7)]))return;this[_0x3c4aef(0x122)]=!![];let _0x1b5ac4=this['textureParameterBake']['context'],_0x32ca58=this[_0x3c4aef(0xd7)][_0x3c4aef(0x10a)],_0x5b1157=this['textureParameterBake'][_0x3c4aef(0xed)],_0x21f1bf=this[_0x3c4aef(0xd7)][_0x3c4aef(0x108)],_0x12e385=this[_0x3c4aef(0xd7)][_0x3c4aef(0xec)],_0x183c26=this[_0x3c4aef(0xd7)]['textureInfo'],_0x3eecf2=this[_0x3c4aef(0xd7)]['rootBatchIdMap'],_0x3e5cd8=this[_0x3c4aef(0xd7)]['ancestorMap'];this[_0x3c4aef(0xd7)]=undefined;let _0x5bc37a={},_0x595cd0=_0x183c26[_0x3c4aef(0x105)],_0x19405a=_0x3eecf2[_0x595cd0],_0x5f2bf3=_0x5b1157?undefined:getAncestorTexture(_0x1b5ac4['id'],_0x32ca58['id'],_0x21f1bf,_0x12e385,_0x3e5cd8,_0x5bc37a),_0x2b651a=_descriptionMap[_0x32ca58[_0x3c4aef(0xfb)]];!defined(_0x2b651a)&&(_0x2b651a=_descriptionMap[_0x32ca58[_0x3c4aef(0xfb)]]={});let _0x5f2c56=_0x2b651a[_0x21f1bf];!defined(_0x5f2c56)&&(_0x5f2c56=_0x2b651a[_0x21f1bf]={});let _0x54a48e=_0x5f2c56[_0x12e385];!defined(_0x54a48e)&&(_0x54a48e=_0x5f2c56[_0x12e385]={});let _0x5c97ab=_0x5b1157?undefined:defined(_0x5bc37a['name'])?_0x5f2c56[_0x5bc37a['name']]:undefined,_0x2a29a9={},_0x2072f6=_0x183c26[_0x3c4aef(0x130)],_0x51f963=[],_0xe9857b=_0x183c26[_0x3c4aef(0x130)]['length'];for(let _0x587cfa=0x0;_0x587cfa<_0xe9857b;_0x587cfa++){let _0x31dab4=_0x2072f6[_0x587cfa],_0x5befd3=_0x31dab4[_0x3c4aef(0x11c)][_0x3c4aef(0xee)]('_')[0x0],_0x13ed03=_0x31dab4[_0x3c4aef(0x127)],_0x1bb3b5=_0x31dab4['offsetY'],_0x5e12de=_0x31dab4[_0x3c4aef(0x125)],_0x28854c=_0x31dab4[_0x3c4aef(0x10e)],_0x393cba=new Cartesian4(_0x13ed03,_0x1bb3b5,_0x5e12de,_0x28854c),_0x500feb=defined(_0x19405a)?_0x19405a[_0x5befd3]:_0x587cfa,_0x472339=_0x5b1157?undefined:defined(_0x5c97ab)?_0x5c97ab[_0x5befd3]:undefined,_0x39a250=defined(_0x472339)?_0x472339:_0x393cba;this[_0x3c4aef(0x117)][_0x3c4aef(0xe6)](_0x500feb,0x0,_0x39a250),_0x2a29a9[_0x500feb]=_0x393cba,_0x54a48e[_0x5befd3]=_0x393cba,_0x51f963[_0x3c4aef(0x115)](_0x31dab4['subName']);}this['_subTexInfosBake']=_0x2072f6,this[_0x3c4aef(0x145)]=_0x51f963,this[_0x3c4aef(0x140)]=_0x2a29a9,this[_0x3c4aef(0x13e)]=_0x5f2bf3;},MaterialExt[_0x1d4663(0x136)][_0x1d4663(0x112)]=function(_0x1ab974,_0x5691ae,_0x17a027,_0x3e3303,_0x6b9cc5){const _0x11f37f=_0x1d4663;if(this['created'])return undefined;let _0x50888c=_0x1ab974[_0x11f37f(0x131)],_0x35cd24=_0x17a027['id'],_0x4f07ef=_0x6b9cc5[_0x11f37f(0xe1)],_0x202014=_0x6b9cc5[_0x11f37f(0x103)];this[_0x11f37f(0x13d)]=_0x17a027[_0x11f37f(0x13a)]===_0x3065af[_0x11f37f(0x137)],this[_0x11f37f(0xe8)]={'context':_0x50888c,'layer':_0x1ab974,'isRoot':_0x5691ae[_0x11f37f(0xdb)],'rootName':_0x5691ae[_0x11f37f(0x108)],'curTextureName':_0x35cd24,'textureInfo':_0x17a027,'rootBatchIdMap':_0x4f07ef,'ancestorMap':_0x202014},this['isRoot']=_0x5691ae[_0x11f37f(0xdb)],this[_0x11f37f(0x116)]=!![],this[_0x11f37f(0x113)]=_0x5691ae[_0x11f37f(0xdb)];let _0x254551=_0x17a027[_0x11f37f(0xf1)],_0x4802c1=Cesium[_0x11f37f(0x10c)][_0x11f37f(0x148)],_0x1b6256=TextureManager[_0x11f37f(0x11a)]({'context':_0x50888c,'layerId':_0x1ab974['id'],'rootName':_0x5691ae[_0x11f37f(0x108)],'textureId':_0x17a027['id'],'width':_0x17a027[_0x11f37f(0x125)],'height':_0x17a027[_0x11f37f(0x10e)],'compressType':_0x17a027[_0x11f37f(0x13a)],'supportCompressType':_0x1ab974['_supportCompressType'],'pixelFormat':_0x17a027[_0x11f37f(0x14a)],'internalFormat':_0x4802c1,'arrayBufferView':_0x254551});_0x1b6256[_0x11f37f(0x139)]=_0x5691ae['isRootTile'];let _0x5f27e4=_0x17a027['subTexInfos'][_0x11f37f(0xe7)],_0x3fbc83=_0x17a027[_0x11f37f(0x105)],_0x2a65e3=_0x4f07ef[_0x3fbc83];this[_0x11f37f(0xe4)]['push'](_0x1b6256);let _0x15c6d9=[{'functionName':_0x11f37f(0xfe),'componentDatatype':Cesium['ComponentDatatype'][_0x11f37f(0xe2)],'componentsPerAttribute':0x4}],_0x24258f=_0x2a65e3?Object[_0x11f37f(0xe0)](_0x2a65e3)['length']:_0x5f27e4;this[_0x11f37f(0x102)]=new Cesium[(_0x11f37f(0x12e))](_0x50888c,_0x15c6d9,_0x24258f);let _0x554e70=_descriptionMap[_0x1ab974[_0x11f37f(0xfb)]];!_0x554e70&&(_0x554e70=_descriptionMap[_0x1ab974[_0x11f37f(0xfb)]]={});let _0x524ad2=_0x554e70[_0x5691ae[_0x11f37f(0x108)]];!_0x524ad2&&(_0x524ad2=_0x554e70[_0x5691ae['rootName']]={});let _0x2594d3=_0x524ad2[_0x35cd24];!_0x2594d3&&(_0x2594d3=_0x524ad2[_0x35cd24]={});let _0x377dff=_0x17a027[_0x11f37f(0x130)];for(let _0x229165=0x0;_0x229165<_0x5f27e4;_0x229165++){let _0x4651a4=_0x377dff[_0x229165],_0x56b9f8=_0x4651a4['subName'][_0x11f37f(0xee)]('_')[0x0],_0x2ad33f=_0x4651a4['offsetX'],_0x3e672e=_0x4651a4[_0x11f37f(0x12a)],_0x1cb134=_0x4651a4[_0x11f37f(0x125)],_0x53259a=_0x4651a4[_0x11f37f(0x10e)],_0x2a1482=new Cesium[(_0x11f37f(0xfd))](_0x2ad33f,_0x3e672e,_0x1cb134,_0x53259a);_0x2594d3[_0x56b9f8]=_0x2a1482;}if(!_0x5691ae[_0x11f37f(0xdb)]){this['subRequestNames']=[];for(let _0x1e3df5=0x0;_0x1e3df5<_0x17a027[_0x11f37f(0xdd)]['length'];_0x1e3df5++){let _0x589430=_0x17a027[_0x11f37f(0xdd)][_0x1e3df5],_0x141c28=getName(_0x589430);if(_0x141c28[_0x11f37f(0xee)]('_')[0x0]==='Tex'){let _0x2e9dee=_0x589430[_0x11f37f(0xee)]('#'),_0x4a4d25=getName(_0x2e9dee[0x0]);if(_0x2e9dee[_0x11f37f(0xe7)]>0x1){let _0x2f73bd=_0x2e9dee[0x1],_0x2ddb02=_0x2f73bd['length'];for(let _0x7e3c89=0x0;_0x7e3c89<_0x2ddb02;_0x7e3c89+=0x3){let _0x1283d2=_0x2f73bd['substring'](_0x7e3c89,_0x7e3c89+0x3),_0x3d2c84=_0x4a4d25+'_'+_0x1283d2;this[_0x11f37f(0xd6)]['push'](_0x3d2c84);}}}else this[_0x11f37f(0xd6)]['push'](_0x141c28);}}return this[_0x11f37f(0xf3)]=!_0x5691ae[_0x11f37f(0xdb)]&&!(_0x17a027[_0x11f37f(0xdd)][_0x11f37f(0xe7)]===0x1&&_0x17a027[_0x11f37f(0xdd)][0x0]===_0x35cd24),this[_0x11f37f(0x10b)]=_0x1b6256,_0x1b6256;},MaterialExt['prototype']['requestSubTextures']=function(_0x430de9,_0x1dbb5c){const _0x31cda7=_0x1d4663;if(this[_0x31cda7(0x113)])return;if(!this[_0x31cda7(0xd6)])return;let _0x54f12a=_0x1dbb5c['context'],_0x2e8953=this[_0x31cda7(0xd6)],_0x59b9d5=this[_0x31cda7(0x130)],_0x27cd69=this[_0x31cda7(0x101)],_0x20ace0=this[_0x31cda7(0xda)],_0x113399=this['oriTexture'],_0x2f1174=[],_0x3933c9=this['tile']['contentResource']['url']['substring'](0x0,this[_0x31cda7(0x123)][_0x31cda7(0x13c)][_0x31cda7(0x104)][_0x31cda7(0xf4)]('/')+0x1),_0x3b7a14=_0x1dbb5c[_0x31cda7(0xf8)],_0x5dd567=this[_0x31cda7(0x134)];for(let _0x3272ed=0x0,_0x4d5d36=_0x2e8953[_0x31cda7(0xe7)];_0x3272ed<_0x4d5d36;_0x3272ed++){let _0x243ff2=_0x2e8953[_0x3272ed],_0x1b559a=_0x3b7a14['get'](_0x1dbb5c['id'],_0x3933c9,_0x243ff2,this,this[_0x31cda7(0x123)]);if(!_0x1b559a)continue;let _0x489197=_0x1b559a['result'];_0x2f1174['push'](_0x3272ed);for(let _0x4de7c6 in _0x489197){if(_0x489197['hasOwnProperty'](_0x4de7c6)){let _0x51492f=_0x489197[_0x4de7c6],_0x56980=_0x27cd69[_0x31cda7(0x13f)](_0x4de7c6);if(_0x56980<0x0&&this[_0x31cda7(0xf3)])continue;let _0x5379ba=0x0,_0x5ab18d=0x0,_0x265ae5=_0x51492f[_0x31cda7(0x125)],_0x36be84=_0x51492f[_0x31cda7(0x10e)];if(_0x56980>=0x0){let _0x5834e1=_0x59b9d5[_0x56980];_0x5379ba=_0x5834e1[_0x31cda7(0x127)],_0x5ab18d=_0x5834e1[_0x31cda7(0x12a)];}!this['isLeaf']?_0x113399['arrayBufferView']=_0x51492f[_0x31cda7(0x119)]:_0x5dd567[_0x31cda7(0x128)]({'texture':_0x113399,'subTextureInfo':{'xOffset':_0x5379ba,'yOffset':_0x5ab18d,'width':_0x265ae5,'height':_0x36be84,'arrayBufferView':_0x51492f[_0x31cda7(0x119)]}});}}}if(_0x2f1174[_0x31cda7(0xe7)]===_0x2e8953[_0x31cda7(0xe7)])_0x2e8953[_0x31cda7(0xe7)]=0x0;else {let _0x39b8c4=0x0;for(let _0x312ec1=0x0,_0x13ef90=_0x2f1174['length'];_0x312ec1<_0x13ef90;_0x312ec1++){_0x2e8953['splice'](_0x2f1174[_0x312ec1]-_0x39b8c4,0x1),_0x39b8c4++;}}_0x2e8953['length']===0x0&&(this[_0x31cda7(0x132)]=!![],!this[_0x31cda7(0xf3)]&&_0x113399['init'](),updateTextureBatchTable(_0x430de9,this[_0x31cda7(0x102)],_0x20ace0),this[_0x31cda7(0x113)]=!![],this[_0x31cda7(0xd6)]=undefined,this[_0x31cda7(0x101)]=undefined,this[_0x31cda7(0xda)]=undefined,this[_0x31cda7(0x130)]=undefined);},MaterialExt[_0x1d4663(0x136)][_0x1d4663(0xf6)]=function(_0x2ac999,_0x5c4961,_0x380546,_0x4e1484){const _0x468e06=_0x1d4663;if(this[_0x468e06(0x109)])return;if(!defined(this[_0x468e06(0x100)]))return;let _0x375f4d=this[_0x468e06(0x100)],_0x2510e4=this[_0x468e06(0xd8)],_0x3dfa65=this[_0x468e06(0x145)],_0x35fed3=this[_0x468e06(0x140)],_0x81648e=this[_0x468e06(0xe3)],_0xd42880=[],_0x2d0913=_0x380546[_0x468e06(0xfc)],_0x2e5e91=_0x380546[_0x468e06(0x12d)];for(let _0x25297f=0x0,_0x176a37=_0x375f4d[_0x468e06(0xe7)];_0x25297f<_0x176a37;_0x25297f++){let _0x51f21f=_0x375f4d[_0x25297f],_0xb5e11f=_0x2e5e91[_0x468e06(0x147)](_0x380546[_0x468e06(0x110)],_0x2d0913,_0x51f21f,this);if(!_0xb5e11f)continue;let _0x52aee4=_0xb5e11f[_0x468e06(0x10f)];_0xd42880[_0x468e06(0x115)](_0x25297f);for(let _0x220163 in _0x52aee4){if(_0x52aee4['hasOwnProperty'](_0x220163)){let _0x31f385=_0x52aee4[_0x220163],_0x1d6216=_0x3dfa65['indexOf'](_0x220163);if(_0x1d6216<0x0&&this['isLeaf'])continue;let _0x3e868c=0x0,_0x166bef=0x0,_0x2777d6=_0x31f385[_0x468e06(0x125)],_0x276731=_0x31f385[_0x468e06(0x10e)];if(_0x1d6216>=0x0){let _0x5306ce=_0x2510e4[_0x1d6216];_0x3e868c=_0x5306ce['offsetX'],_0x166bef=_0x5306ce[_0x468e06(0x12a)];}_0x4e1484[_0x468e06(0x128)]({'texture':_0x81648e,'subTextureInfo':{'xOffset':_0x3e868c,'yOffset':_0x166bef,'width':_0x2777d6,'height':_0x276731,'arrayBufferView':_0x31f385[_0x468e06(0x119)]}});}}}if(_0xd42880[_0x468e06(0xe7)]===_0x375f4d[_0x468e06(0xe7)])_0x375f4d['length']=0x0;else {let _0x2cf219=0x0;for(let _0x2d5bac=0x0,_0x2e7a86=_0xd42880['length'];_0x2d5bac<_0x2e7a86;_0x2d5bac++){_0x375f4d[_0x468e06(0x106)](_0xd42880[_0x2d5bac]-_0x2cf219,0x1),_0x2cf219++;}}_0x375f4d[_0x468e06(0xe7)]===0x0&&(this[_0x468e06(0x11b)]=!![],!this[_0x468e06(0xf3)]&&_0x81648e[_0x468e06(0xdc)](),this[_0x468e06(0x109)]=!![],this[_0x468e06(0x100)]=undefined,this[_0x468e06(0x145)]=undefined,this[_0x468e06(0x140)]=undefined,this['_subTexInfosBake']=undefined,updateTextureBatchTable(_0x2ac999,this[_0x468e06(0x117)],_0x35fed3));},MaterialExt[_0x1d4663(0x136)][_0x1d4663(0x144)]=function(){const _0x47bdf5=_0x1d4663;if(!this[_0x47bdf5(0x132)])return;this['textureRenderableFlag']=![];let _0x27fd80=this[_0x47bdf5(0x10b)];_0x27fd80['renderable']=!![],this[_0x47bdf5(0xf0)]&&this[_0x47bdf5(0xf0)]['textureId']!==_0x27fd80[_0x47bdf5(0xdf)]&&TextureManager[_0x47bdf5(0xff)](this[_0x47bdf5(0xf0)]),this[_0x47bdf5(0xe4)][0x0]=_0x27fd80,this['oriTexture']=undefined,this['ancestorTexture']=undefined;},MaterialExt['prototype'][_0x1d4663(0x107)]=function(){const _0x22c129=_0x1d4663;if(!this['textureBakeRenderableFlag'])return;this[_0x22c129(0x11b)]=![];let _0x5d952c=this['oriTextureBake'];_0x5d952c[_0x22c129(0x139)]=!![],defined(this[_0x22c129(0x13e)])&&this['_ancestorTextureBake'][_0x22c129(0xdf)]!==_0x5d952c[_0x22c129(0xdf)]&&TextureManager['del'](this[_0x22c129(0x13e)]),this[_0x22c129(0xe4)][0x1]=_0x5d952c,this['oriTextureBake']=undefined,this[_0x22c129(0x13e)]=undefined;},MaterialExt[_0x1d4663(0x136)]['isDestroyed']=function(){return ![];},MaterialExt[_0x1d4663(0x136)][_0x1d4663(0x12b)]=function(){const _0x46f89e=_0x1d4663;if(--this[_0x46f89e(0x146)]>0x0)return;let _0x5ac5a0=this[_0x46f89e(0x123)][_0x46f89e(0x10a)],_0x2024b1=_0x5ac5a0[_0x46f89e(0x11e)];delete _0x2024b1[_0x46f89e(0x129)][this['id']],this[_0x46f89e(0x138)]=null,this[_0x46f89e(0x126)]=null,this[_0x46f89e(0xe9)]=null;for(let _0x2799cd=0x0,_0x3833ec=this[_0x46f89e(0xe4)]['length'];_0x2799cd<_0x3833ec;_0x2799cd++){let _0x39f08d=this[_0x46f89e(0xe4)][_0x2799cd];TextureManager[_0x46f89e(0xff)](_0x39f08d);}this['textures'][_0x46f89e(0xe7)]=0x0,this['batchTable']=this['batchTable']&&this[_0x46f89e(0x102)][_0x46f89e(0x12b)](),this[_0x46f89e(0x117)]=this['batchTableBake']&&this[_0x46f89e(0x117)][_0x46f89e(0x12b)](),this[_0x46f89e(0x114)]=undefined,this['subTextureNames']=undefined,this[_0x46f89e(0xda)]=undefined,this[_0x46f89e(0x145)]=undefined,this[_0x46f89e(0xd8)]=undefined;Cesium[_0x46f89e(0xf9)](this[_0x46f89e(0xf0)])&&this[_0x46f89e(0xf0)][_0x46f89e(0xdf)]!==this['oriTexture']['textureId']&&TextureManager[_0x46f89e(0xff)](this[_0x46f89e(0xf0)]);this[_0x46f89e(0x10b)]=undefined,this['ancestorTexture']=undefined,this[_0x46f89e(0x123)]=undefined,this[_0x46f89e(0xe8)]=undefined,this[_0x46f89e(0xe3)]=undefined;if(Cesium[_0x46f89e(0xf9)](this[_0x46f89e(0xd6)])){for(let _0x3f1fe0=0x0,_0xbd45e0=this['subRequestNames'][_0x46f89e(0xe7)];_0x3f1fe0<_0xbd45e0;_0x3f1fe0++){let _0x3d013d=this[_0x46f89e(0xd6)][_0x3f1fe0],_0x418060=_0x3d013d[_0x46f89e(0xee)]('.')[0x0],_0x509e39=_0x3d013d['indexOf'](_0x46f89e(0x12f));_0x418060=_0x509e39>-0x1?_0x418060+_0x3d013d[_0x46f89e(0x124)](_0x509e39):_0x418060,_0x5ac5a0[_0x46f89e(0xf8)][_0x46f89e(0xff)](_0x5ac5a0['id'],_0x418060);}this[_0x46f89e(0xd6)]=undefined;}if(Cesium['defined'](this[_0x46f89e(0x100)])){for(i=0x0,j=this[_0x46f89e(0x100)]['length'];i<j;i++){let _0x508e58=this[_0x46f89e(0x100)][i],_0x142647=_0x508e58['split']('.')[0x0],_0x470eb6=_0x508e58[_0x46f89e(0x13f)](_0x46f89e(0x12f));_0x142647=_0x470eb6>-0x1?_0x142647+_0x508e58[_0x46f89e(0x124)](_0x470eb6):_0x142647,_0x5ac5a0[_0x46f89e(0x12d)][_0x46f89e(0xff)](_0x5ac5a0['id'],_0x142647);}this[_0x46f89e(0xd6)]=undefined;}return Cesium['destroyObject'](this);};function _0x3a19(_0xf5d9bc,_0x169b05){_0xf5d9bc=_0xf5d9bc-0xd3;let _0x13a489=_0x13a4[_0xf5d9bc];return _0x13a489;}

    const _0x2153=['23WDXKFl','655260nmxYaz','5021wbGals','2883525KScHzD','create','5hxXMXF','1077894XZwWbT','792957smBIXL','cache','4453rqzmTw','41332OYxiCP','refCount','prototype','184febKKQ','free'];const _0xe199d1=_0x57c3;(function(_0x5541c4,_0x50310d){const _0x3277ca=_0x57c3;while(!![]){try{const _0x39b7c8=-parseInt(_0x3277ca(0x119))+-parseInt(_0x3277ca(0x113))+-parseInt(_0x3277ca(0x117))*parseInt(_0x3277ca(0x114))+-parseInt(_0x3277ca(0x11b))*parseInt(_0x3277ca(0x110))+parseInt(_0x3277ca(0x118))+parseInt(_0x3277ca(0x10d))*-parseInt(_0x3277ca(0x112))+parseInt(_0x3277ca(0x115));if(_0x39b7c8===_0x50310d)break;else _0x5541c4['push'](_0x5541c4['shift']());}catch(_0x1779e6){_0x5541c4['push'](_0x5541c4['shift']());}}}(_0x2153,0xaf51d));function MaterialManager(){this['cache']={};}MaterialManager[_0xe199d1(0x10f)][_0xe199d1(0x116)]=function(_0x35c57d){const _0x1bc936=_0xe199d1;let _0x1b595e=this['cache'][_0x35c57d];return _0x1b595e?_0x1b595e[_0x1bc936(0x10e)]++:(_0x1b595e=new MaterialExt(),this[_0x1bc936(0x11a)][_0x35c57d]=_0x1b595e),_0x1b595e;},MaterialManager['prototype'][_0xe199d1(0x111)]=function(_0x1c7e8f){const _0x353030=_0xe199d1;let _0x2c83d7=this[_0x353030(0x11a)][_0x1c7e8f];if(!_0x2c83d7)return;--_0x2c83d7[_0x353030(0x10e)]===0x0&&(delete this[_0x353030(0x11a)][_0x1c7e8f],_0x2c83d7['destroy']());};function _0x57c3(_0xba7a15,_0x60c824){_0xba7a15=_0xba7a15-0x10d;let _0x2153fe=_0x2153[_0xba7a15];return _0x2153fe;}

    const _0x2800=['list','when','push','399395RqydKI','providerName','priority','byteLength','Loading','prototype','resolve','reject','757119VtitBM','slice','item','Failed','deferred','defer','tile','get','defined','tail','otherwise','join','keyWord','406250OwSaIP','_singleInstance','quadKey','1sTNKbW','sort','request','Resource','fetchArrayBuffer','Request','getStringFromTypedArray','buffer','promise','name','cache','getUint32','inflate','quadKeyIndex','startPackRequest','BYTES_PER_ELEMENT','pendingRequests','109722jHrFaS','quadKeyPack','head','next','prepareRequest','state','del','length','2bEXBLS','1814493kTAJIS','88730DtBybO','splice','promisePack','then','516899ndQkFO','requestHeapPack','UnLoad','cancelled','quadKeyIndexPack'];const _0xe0da65=_0x1c19;(function(_0x51f490,_0x3b5dec){const _0x2b08c8=_0x1c19;while(!![]){try{const _0x562561=parseInt(_0x2b08c8(0xce))+parseInt(_0x2b08c8(0xf2))*-parseInt(_0x2b08c8(0xd2))+-parseInt(_0x2b08c8(0xda))+parseInt(_0x2b08c8(0xef))+-parseInt(_0x2b08c8(0xe2))+parseInt(_0x2b08c8(0x103))*-parseInt(_0x2b08c8(0xcc))+parseInt(_0x2b08c8(0xcd));if(_0x562561===_0x3b5dec)break;else _0x51f490['push'](_0x51f490['shift']());}catch(_0x19b04f){_0x51f490['push'](_0x51f490['shift']());}}}(_0x2800,0x65b68));function SubTextureManager(){const _0x5bc8de=_0x1c19;this[_0x5bc8de(0xc9)]={},this[_0x5bc8de(0xfc)]={},this['list']=new Cesium['DoublyLinkedList'](),this[_0x5bc8de(0x102)]=[],this[_0x5bc8de(0xd0)]={},this[_0x5bc8de(0x104)]={},this[_0x5bc8de(0xd6)]={},this[_0x5bc8de(0xd3)]={};}const _State={'UnLoad':0x0,'Loading':0x1,'Loaded':0x2,'Parsing':0x3,'Ready':0x4,'Failed':0x5};let _cacheSize=0x0;const _throttleSize=0xc8*0x400*0x400;SubTextureManager[_0xe0da65(0xdf)][_0xe0da65(0xc8)]=function(_0x32800d,_0x8db892,_0x41501e,_0x235daf,_0x73152f){const _0x824bc9=_0xe0da65;let _0x150620=_0x32800d+'_'+_0x41501e,_0x50ae0e=_0x8db892+_0x41501e+'.texblock',_0x2ca509=new Cesium[(_0x824bc9(0xf7))]({'url':_0x50ae0e,'throttle':!![],'throttleByServer':!![],'priorityFunction':function(){return _0x235daf['distanceToCamera'];}});_0x2ca509['quadKey']=_0x41501e,_0x2ca509[_0x824bc9(0xdb)]=_0x73152f[_0x824bc9(0xe8)]['layer'][_0x824bc9(0xfb)],_0x2ca509[_0x824bc9(0xee)]=_0x150620,this['pendingRequests'][_0x824bc9(0xd9)](_0x2ca509);};function _0x1c19(_0x425687,_0x5288d4){_0x425687=_0x425687-0xc6;let _0x280082=_0x2800[_0x425687];return _0x280082;}let comparator=function(_0x1f2e16,_0x54fa1b){const _0x9863b5=_0xe0da65;return _0x1f2e16[_0x9863b5(0xdc)]-_0x54fa1b['priority'];};SubTextureManager[_0xe0da65(0xdf)]['processRequests']=function(){const _0x32746e=_0xe0da65;if(this[_0x32746e(0x102)][_0x32746e(0xcb)]<0x1)return;this['pendingRequests'][_0x32746e(0xf3)](comparator),this[_0x32746e(0x100)]();for(let _0x44404b=0x0,_0x334ff3=this['pendingRequests'][_0x32746e(0xcb)];_0x44404b<_0x334ff3;_0x44404b++){let _0x1c5788=this[_0x32746e(0x102)][_0x44404b];this[_0x32746e(0xf4)](_0x1c5788);}this[_0x32746e(0x102)][_0x32746e(0xcb)]=0x0;};function combineQuadkey(_0x2f1f27){const _0x2a2cbd=_0xe0da65;let _0x1fa340=[],_0x1ca210={},_0x50627c=0x0;for(let _0x27ada1=0x0,_0x3a3d64=_0x2f1f27[_0x2a2cbd(0xcb)];_0x27ada1<_0x3a3d64;_0x27ada1++){let _0x10ed2b=_0x2f1f27[_0x27ada1];if(_0x10ed2b[_0x2a2cbd(0xd5)])continue;let _0x50b9e0=_0x10ed2b[_0x2a2cbd(0xf1)];if(_0x1ca210[_0x50b9e0])continue;_0x1ca210[_0x50b9e0]=!![],_0x1fa340[_0x2a2cbd(0xd9)](_0x50b9e0),_0x10ed2b[_0x2a2cbd(0xff)]=_0x50627c++;}return _0x1fa340;}SubTextureManager[_0xe0da65(0xdf)]['startPackRequest']=function(){const _0x4afaee=_0xe0da65;let _0x316d88=combineQuadkey(this[_0x4afaee(0x102)]),_0x481251=_0x316d88[_0x4afaee(0xed)](';'),_0x57585e=this[_0x4afaee(0x102)][0x0]['url'],_0x537c71=new Cesium[(_0x4afaee(0xf5))]({'url':_0x57585e,'queryParameters':{'extratiles':_0x481251}}),_0x2f517b=Cesium[_0x4afaee(0xd8)][_0x4afaee(0xe7)](),_0x45b269=_0x537c71[_0x4afaee(0xf6)]();if(!_0x45b269)return;for(let _0x54ef2d=0x0,_0x1158d8=this['pendingRequests']['length'];_0x54ef2d<_0x1158d8;_0x54ef2d++){let _0x232286=this['pendingRequests'][_0x54ef2d];_0x232286['deferred']=_0x2f517b;}_0x45b269[_0x4afaee(0xd1)](function(_0x323565){const _0x4125f6=_0x4afaee;_0x2f517b[_0x4125f6(0xe0)](_0x323565);})[_0x4afaee(0xec)](function(_0xbac9a6){const _0x3bc25d=_0x4afaee;_0x2f517b[_0x3bc25d(0xe1)](_0xbac9a6);});};function decodePackedBuffer(_0x7e035d,_0x3f2e09){const _0x1a03d5=_0xe0da65;let _0xc60f58=new DataView(_0x7e035d),_0x233ec0=0x0,_0x1ba5c1=_0xc60f58[_0x1a03d5(0xfd)](_0x233ec0,!![]);if(_0x3f2e09>_0x1ba5c1-0x1||_0x1ba5c1>0x100)return undefined;_0x233ec0+=0x4;let _0x231650=[],_0x298987,_0x351e87;for(_0x298987=0x0;_0x298987<_0x1ba5c1;_0x298987++){_0x351e87=_0xc60f58['getUint32'](_0x233ec0,!![]),_0x231650[_0x1a03d5(0xd9)](_0x351e87),_0x233ec0+=0x4;}for(_0x298987=0x0;_0x298987<_0x1ba5c1;_0x298987++){_0x351e87=_0x231650[_0x298987];if(_0x298987===_0x3f2e09){if(_0x351e87===0x0)return;return new Uint8Array(_0x7e035d)[_0x1a03d5(0xe3)](_0x233ec0,_0x233ec0+_0x351e87)[_0x1a03d5(0xf9)];}_0x233ec0+=_0x351e87;}return undefined;}SubTextureManager[_0xe0da65(0xdf)][_0xe0da65(0xf4)]=function(_0x10b965){const _0x3be7dd=_0xe0da65;let _0x5ed203=_0x10b965[_0x3be7dd(0xee)],_0x2b6784=_0x10b965[_0x3be7dd(0xe6)][_0x3be7dd(0xfa)];this[_0x3be7dd(0xc9)][_0x5ed203]=_State[_0x3be7dd(0xde)];let _0x4b3844=this;_0x2b6784[_0x3be7dd(0xd1)](function(_0x586a5f){const _0x95adc5=_0x3be7dd;if(!Cesium[_0x95adc5(0xea)](_0x4b3844[_0x95adc5(0xc9)][_0x5ed203]))return;_0x4b3844[_0x95adc5(0xc9)][_0x5ed203]=_State['Loaded'];let _0xe33eec=decodePackedBuffer(_0x586a5f,_0x10b965[_0x95adc5(0xff)]);if(!_0xe33eec){_0x4b3844['state'][_0x5ed203]=_State[_0x95adc5(0xe5)];return;}let _0x27c2fa=new Uint8Array(_0xe33eec),_0x35fe97=new DataView(_0xe33eec),_0x4186fd=0x0,_0x561ce5=_0x35fe97['getUint32'](_0x4186fd,!![]);_0x4186fd+=Uint32Array[_0x95adc5(0x101)];let _0x415ef3={};for(let _0x45318a=0x0;_0x45318a<_0x561ce5;_0x45318a++){let _0x5766e6=_0x35fe97['getUint32'](_0x4186fd,!![]);_0x4186fd+=Uint32Array['BYTES_PER_ELEMENT'];let _0x571f12=Cesium[_0x95adc5(0xf8)](_0x27c2fa,_0x4186fd,_0x5766e6);_0x4186fd+=_0x5766e6;let _0x3dfeff=_0x35fe97['getUint32'](_0x4186fd,!![]);_0x4186fd+=Uint32Array[_0x95adc5(0x101)];let _0x4fac4f=_0x35fe97[_0x95adc5(0xfd)](_0x4186fd,!![]);_0x4186fd+=Uint32Array[_0x95adc5(0x101)];let _0x541480=new Uint8Array(_0xe33eec,_0x4186fd,_0x4fac4f),_0x4436c7=_0x1f354f[_0x95adc5(0xfe)](_0x541480)[_0x95adc5(0xf9)];_0x4186fd+=_0x4fac4f;let _0x3f739d=new DataView(_0x4436c7),_0x26d806=0x0,_0x1626bc=_0x3f739d['getUint32'](_0x26d806,!![]);_0x26d806+=Uint32Array['BYTES_PER_ELEMENT'];let _0x472daf=_0x3f739d[_0x95adc5(0xfd)](_0x26d806,!![]);_0x26d806+=Uint32Array[_0x95adc5(0x101)];let _0x536bdc=_0x3f739d[_0x95adc5(0xfd)](_0x26d806,!![]);_0x26d806+=Uint32Array[_0x95adc5(0x101)];let _0x513a3c=_0x3f739d[_0x95adc5(0xfd)](_0x26d806,!![]);_0x26d806+=Uint32Array[_0x95adc5(0x101)];let _0x54b3a4=_0x3f739d[_0x95adc5(0xfd)](_0x26d806,!![]);_0x26d806+=Uint32Array[_0x95adc5(0x101)];let _0x484c18=new Uint8Array(_0x4436c7,_0x26d806,_0x54b3a4);_0x415ef3[_0x571f12]={'width':_0x472daf,'height':_0x536bdc,'arrayBufferView':_0x484c18};}let _0x193284={'keyWord':_0x5ed203,'result':_0x415ef3,'byteLength':_0xe33eec['byteLength']},_0x15c48d=_0x4b3844[_0x95adc5(0xd7)]['add'](_0x193284);_0x4b3844[_0x95adc5(0xfc)][_0x5ed203]=_0x15c48d,_0x4b3844[_0x95adc5(0xc9)][_0x5ed203]=_State['Ready'],delete _0x4b3844[_0x95adc5(0xc9)][_0x5ed203],_cacheSize+=_0xe33eec['byteLength'];let _0xee9370=_0x4b3844[_0x95adc5(0xd7)][_0x95adc5(0xc6)];while(_cacheSize>_throttleSize){let _0x315853=_0xee9370['item'],_0x10a122=_0xee9370,_0xcccf58=_0x315853[_0x95adc5(0xee)],_0x207ce2=_0x4b3844['cache'][_0xcccf58],_0x50b1f7=_0x207ce2[_0x95adc5(0xe4)];_cacheSize-=_0x50b1f7[_0x95adc5(0xdd)],delete _0x4b3844[_0x95adc5(0xfc)][_0xcccf58],_0xee9370=_0xee9370[_0x95adc5(0xc7)],_0x4b3844[_0x95adc5(0xd7)]['remove'](_0x10a122);}},function(_0x39bd18){const _0x2b3b19=_0x3be7dd;_0x4b3844[_0x2b3b19(0xc9)][_0x5ed203]=_0x39bd18?_State[_0x2b3b19(0xe5)]:_State[_0x2b3b19(0xd4)];});},SubTextureManager['prototype'][_0xe0da65(0xe9)]=function(_0x2c27fc,_0x4269ca,_0x8f16c2,_0x4e963d){const _0x2dc607=_0xe0da65;let _0xe04532=_0x2c27fc+'_'+_0x8f16c2,_0x32df59=this['cache'][_0xe04532];if(_0x32df59)return this[_0x2dc607(0xd7)][_0x2dc607(0xcf)](this[_0x2dc607(0xd7)][_0x2dc607(0xeb)],_0x32df59),_0x32df59[_0x2dc607(0xe4)];let _0x4b750b=this['state'][_0xe04532];return !Cesium[_0x2dc607(0xea)](_0x4b750b)&&(_0x4b750b=this[_0x2dc607(0xc9)][_0xe04532]=_State['UnLoad']),_0x4b750b===_State[_0x2dc607(0xd4)]&&this[_0x2dc607(0xc8)](_0x2c27fc,_0x4269ca,_0x8f16c2,_0x4e963d['tile'],_0x4e963d),undefined;},SubTextureManager[_0xe0da65(0xdf)][_0xe0da65(0xca)]=function(_0x61e227,_0x1958d1){const _0x1f24cd=_0xe0da65;let _0x45e536=_0x61e227+'_'+_0x1958d1;delete this[_0x1f24cd(0xc9)][_0x45e536];},SubTextureManager['_singleInstance']=undefined,SubTextureManager['getSingleInstance']=function(){const _0x262e88=_0xe0da65;return !SubTextureManager['_singleInstance']&&(SubTextureManager['_singleInstance']=new SubTextureManager()),SubTextureManager[_0x262e88(0xf0)];};

    const _0x1c7c=['1647999QjfDJx','179OTESUe','minVerticesValue','edgeGeometry','multiplyByScalar','BoundingSphere','2543MBplGQ','materials','_subTextureManager','pickInfo','lerp','texturePackage','vertCompressConstant','unpack','29429KCEOxw','shininess','fromArray','texmodmatrix','center','rangeList','context','multiply','parse','diffuseColor','instanceIndex','radius','createTexture','add','length','_materialManager','tile','getSingleInstance','REPEAT','652JSMNPo','transform','hasOwnProperty','1nyYBAI','CLAMP_TO_EDGE','1oeBztJ','geoPackage','fileType','bTransparentSorting','43DiQmHG','Matrix4','vertexPackage','1406677McxHPs','material','skeletonNames','childTile','2KgkCSX','275945pbneRJ','keys','buffer','push','fromBoundingSpheres','componentsPerAttribute','verticesCount','boundingVolume','sphere','SVC_Vertex','byteOffset','2gXLyjK','1522564AdMjUi','distance','wrapT','texMatrix','textureunitstate','byteLength','instanceBounds','pageLods','rangeMode','Cartesian3','typedArray','Carteisan3','addressmode','compressOptions','fromPoints','Color','modelMatrix','specularColor','geoMap','TextureWrap','rangeDataList','boundingSphere','specular','transparentsorting','defined','ambient','isLeafTile','layerId','diffuse','wrapS'];const _0xad7ac2=_0x2e17;(function(_0x1863f8,_0x15f523){const _0x3ad685=_0x2e17;while(!![]){try{const _0x35f6cc=-parseInt(_0x3ad685(0x157))*parseInt(_0x3ad685(0x152))+parseInt(_0x3ad685(0x133))+-parseInt(_0x3ad685(0x175))*-parseInt(_0x3ad685(0x151))+-parseInt(_0x3ad685(0x127))*parseInt(_0x3ad685(0x11b))+parseInt(_0x3ad685(0x11f))*parseInt(_0x3ad685(0x15f))+parseInt(_0x3ad685(0x126))*parseInt(_0x3ad685(0x172))+-parseInt(_0x3ad685(0x122))*parseInt(_0x3ad685(0x132));if(_0x35f6cc===_0x15f523)break;else _0x1863f8['push'](_0x1863f8['shift']());}catch(_0x376a47){_0x1863f8['push'](_0x1863f8['shift']());}}}(_0x1c7c,0xd9f92));function _0x2e17(_0x59628f,_0x89369){_0x59628f=_0x59628f-0x11a;let _0x1c7cf8=_0x1c7c[_0x59628f];return _0x1c7cf8;}function S3MBlockContentParser(){}function parseMaterial$3(_0x15ac23,_0x2a5934,_0x124f08){const _0x10a38f=_0x2e17;let _0xda82e6=_0x15ac23[_0x10a38f(0x165)],_0x5eda34=_0x15ac23['_materialManager'];!_0x5eda34&&(_0x5eda34=_0x15ac23[_0x10a38f(0x16e)]=new MaterialManager());let _0x12da1e=_0x15ac23['_subTextureManager'];!_0x15ac23[_0x10a38f(0x159)]&&(_0x15ac23['_subTextureManager']=SubTextureManager[_0x10a38f(0x170)]());let _0x30de38=_0x2a5934[_0x10a38f(0x158)][_0x10a38f(0x123)];for(let _0x1bda77=0x0,_0x7d69fa=_0x30de38[_0x10a38f(0x16d)];_0x1bda77<_0x7d69fa;_0x1bda77++){let _0x5906db=_0x30de38[_0x1bda77][_0x10a38f(0x123)],_0x23c6d6=_0x5906db['id'],_0xa9cc4a=_0x5eda34['create'](_0x23c6d6);_0xa9cc4a[_0x10a38f(0x14e)]=_0x15ac23['id'],_0xa9cc4a[_0x10a38f(0x16f)]=_0x124f08;let _0x4a0fc1=_0x5906db[_0x10a38f(0x14c)];_0xa9cc4a['ambientColor']=new Cesium[(_0x10a38f(0x142))](_0x4a0fc1['r'],_0x4a0fc1['g'],_0x4a0fc1['b'],_0x4a0fc1['a']);let _0x25c94a=_0x5906db[_0x10a38f(0x14f)];_0xa9cc4a[_0x10a38f(0x168)]=new Cesium[(_0x10a38f(0x142))](_0x25c94a['r'],_0x25c94a['g'],_0x25c94a['b'],_0x25c94a['a']);let _0x52c54a=_0x5906db[_0x10a38f(0x149)];_0xa9cc4a[_0x10a38f(0x144)]=new Cesium['Color'](_0x52c54a['r'],_0x52c54a['g'],_0x52c54a['b'],_0x52c54a['a']),_0xa9cc4a[_0x10a38f(0x160)]=_0x5906db[_0x10a38f(0x160)],_0xa9cc4a[_0x10a38f(0x11e)]=_0x5906db[_0x10a38f(0x14a)],_0xa9cc4a['id']=_0x23c6d6;let _0x4a1854=_0x5906db['textureunitstates'],_0x1698c3=_0x4a1854[_0x10a38f(0x16d)];for(let _0x354033=0x0;_0x354033<0x1;_0x354033++){let _0x2ebc16=_0x4a1854[_0x354033][_0x10a38f(0x137)],_0x4c555e=_0x2ebc16['id'],_0x13075e=_0x2ebc16[_0x10a38f(0x13f)]['u']===0x0?Cesium[_0x10a38f(0x146)][_0x10a38f(0x171)]:Cesium[_0x10a38f(0x146)][_0x10a38f(0x11a)],_0x453091=_0x2ebc16['addressmode']['v']===0x0?Cesium[_0x10a38f(0x146)][_0x10a38f(0x171)]:Cesium[_0x10a38f(0x146)][_0x10a38f(0x11a)];_0xa9cc4a[_0x10a38f(0x136)]=Cesium['Matrix4'][_0x10a38f(0x15e)](_0x2ebc16[_0x10a38f(0x162)]);let _0x1a0586=_0x2a5934[_0x10a38f(0x15c)][_0x4c555e];_0x1a0586&&(_0x1a0586[_0x10a38f(0x150)]=_0x13075e,_0x1a0586[_0x10a38f(0x135)]=_0x453091,_0xa9cc4a[_0x10a38f(0x16b)](_0x15ac23,_0x124f08,_0x1a0586,_0x354033,_0x2a5934));}}}function calcBoundingVolumeForNormal$1(_0x526062,_0x3c0d90){const _0x7df968=_0x2e17;let _0x59d794=new Cesium[(_0x7df968(0x156))](),_0x542438=new Cesium[(_0x7df968(0x13c))](),_0x1cbdcb=_0x526062['vertexAttributes'][0x0],_0xcd9613=_0x1cbdcb[_0x7df968(0x12c)],_0x4fe82f=Cesium['defined'](_0x526062[_0x7df968(0x140)])&&(_0x526062[_0x7df968(0x140)]&_0x5aa24d[_0x7df968(0x130)])===_0x5aa24d['SVC_Vertex'],_0x2ffe68=0x1,_0x5aa233,_0x545a87;_0x4fe82f?(_0x2ffe68=_0x526062[_0x7df968(0x15d)],_0x5aa233=new Cesium[(_0x7df968(0x13c))](_0x526062[_0x7df968(0x153)]['x'],_0x526062[_0x7df968(0x153)]['y'],_0x526062[_0x7df968(0x153)]['z']),_0x545a87=new Uint16Array(_0x1cbdcb[_0x7df968(0x13d)][_0x7df968(0x129)],_0x1cbdcb[_0x7df968(0x13d)][_0x7df968(0x131)],_0x1cbdcb[_0x7df968(0x13d)][_0x7df968(0x138)]/0x2)):_0x545a87=new Float32Array(_0x1cbdcb[_0x7df968(0x13d)]['buffer'],_0x1cbdcb[_0x7df968(0x13d)][_0x7df968(0x131)],_0x1cbdcb['typedArray'][_0x7df968(0x138)]/0x4);let _0x14f76d=[];for(let _0x494bd1=0x0;_0x494bd1<_0x526062[_0x7df968(0x12d)];_0x494bd1++){Cesium[_0x7df968(0x13c)][_0x7df968(0x161)](_0x545a87,_0xcd9613*_0x494bd1,_0x542438),_0x4fe82f&&(_0x542438=Cesium[_0x7df968(0x13c)][_0x7df968(0x155)](_0x542438,_0x2ffe68,_0x542438),_0x542438=Cesium['Cartesian3'][_0x7df968(0x16c)](_0x542438,_0x5aa233,_0x542438)),_0x14f76d[_0x7df968(0x12a)](Cesium[_0x7df968(0x13c)]['clone'](_0x542438));}return Cesium[_0x7df968(0x156)][_0x7df968(0x141)](_0x14f76d,_0x59d794),Cesium[_0x7df968(0x156)][_0x7df968(0x173)](_0x59d794,_0x3c0d90,_0x59d794),_0x14f76d[_0x7df968(0x16d)]=0x0,_0x59d794;}let scratchCenter$1=new Cesium['Cartesian3']();function calcBoundingVolumeForInstance$1(_0x15295c){const _0x379c94=_0x2e17;let _0x21e935=new Cesium[(_0x379c94(0x156))](),_0x2d3db9=_0x15295c[_0x379c94(0x139)];if(!Cesium[_0x379c94(0x14b)](_0x2d3db9))return _0x21e935;let _0x123091=new Cesium[(_0x379c94(0x13c))](_0x2d3db9[0x0],_0x2d3db9[0x1],_0x2d3db9[0x2]),_0x2fb2e3=new Cesium[(_0x379c94(0x13e))](_0x2d3db9[0x3],_0x2d3db9[0x4],_0x2d3db9[0x5]),_0x31fc30=new Cesium[(_0x379c94(0x13c))][(_0x379c94(0x15b))](_0x123091,_0x2fb2e3,0.5,scratchCenter$1),_0x46c245=new Cesium[(_0x379c94(0x13c))][(_0x379c94(0x134))](_0x31fc30,_0x123091);return _0x21e935[_0x379c94(0x163)]=_0x31fc30,_0x21e935['radius']=_0x46c245,_0x21e935;}function calcBoundingVolume$1(_0xe28a3b,_0x41264e){const _0x5ce6bc=_0x2e17;if(_0xe28a3b[_0x5ce6bc(0x169)]>-0x1)return calcBoundingVolumeForInstance$1(_0xe28a3b);return calcBoundingVolumeForNormal$1(_0xe28a3b,_0x41264e);}function parseGeodes$1(_0x364803,_0xe2db22,_0x472003,_0x49ab8d){const _0x247ad3=_0x2e17;let _0x3086f9={},_0x5e1e8d=_0x472003['geodes'];for(let _0x508597=0x0,_0x48cfe9=_0x5e1e8d[_0x247ad3(0x16d)];_0x508597<_0x48cfe9;_0x508597++){let _0x23b759=_0x5e1e8d[_0x508597],_0x45ea0b=_0x23b759['matrix'],_0x4c8447=Cesium[_0x247ad3(0x120)][_0x247ad3(0x166)](_0x364803[_0x247ad3(0x143)],_0x45ea0b,new Cesium[(_0x247ad3(0x120))]()),_0x270493;Cesium[_0x247ad3(0x14b)](_0x49ab8d[_0x247ad3(0x12e)])&&(_0x270493=new Cesium[(_0x247ad3(0x156))](_0x49ab8d[_0x247ad3(0x12e)]['sphere'][_0x247ad3(0x163)],_0x49ab8d[_0x247ad3(0x12e)][_0x247ad3(0x12f)][_0x247ad3(0x16a)]),Cesium['BoundingSphere'][_0x247ad3(0x173)](_0x270493,_0x364803[_0x247ad3(0x143)],_0x270493));let _0x348aa8=_0x23b759[_0x247ad3(0x124)];for(let _0x2e7075=0x0,_0x4fd828=_0x348aa8[_0x247ad3(0x16d)];_0x2e7075<_0x4fd828;_0x2e7075++){let _0x49b20a=_0x348aa8[_0x2e7075],_0x46fc13=_0xe2db22[_0x247ad3(0x11c)][_0x49b20a],_0x4a0545=_0x46fc13[_0x247ad3(0x121)],_0x5a1386=_0x46fc13['arrIndexPackage'],_0x712881=_0x46fc13[_0x247ad3(0x15a)],_0x320853;_0x5a1386['length']>0x0&&(_0x320853=_0x364803[_0x247ad3(0x16e)]['create'](_0x5a1386[0x0]['materialCode']));let _0x29cadf=Cesium[_0x247ad3(0x14b)](_0x270493)?_0x270493:calcBoundingVolume$1(_0x4a0545,_0x4c8447);_0x3086f9[_0x49b20a]=S3MContentFactory[_0x364803[_0x247ad3(0x11d)]]({'layer':_0x364803,'vertexPackage':_0x4a0545,'arrIndexPackage':_0x5a1386,'pickInfo':_0x712881,'modelMatrix':_0x4c8447,'geoMatrix':_0x45ea0b,'boundingVolume':_0x29cadf,'material':_0x320853,'edgeGeometry':_0x46fc13[_0x247ad3(0x154)],'geoName':_0x49b20a});}}if(Object[_0x247ad3(0x128)](_0x3086f9)['length']<0x1)return;if(!Cesium[_0x247ad3(0x14b)](_0x49ab8d[_0x247ad3(0x12e)])){let _0x250f5e=[];for(let _0x219b53 in _0x3086f9){_0x3086f9[_0x247ad3(0x174)](_0x219b53)&&_0x250f5e[_0x247ad3(0x12a)](_0x3086f9[_0x219b53][_0x247ad3(0x12e)]);}let _0x26bed6=Cesium[_0x247ad3(0x156)][_0x247ad3(0x12b)](_0x250f5e);_0x49ab8d[_0x247ad3(0x12e)]={'sphere':_0x26bed6};}_0x49ab8d[_0x247ad3(0x145)]=_0x3086f9;}function parsePagelods$1(_0x1f171a,_0x507929){const _0x454e19=_0x2e17;let _0x185b6d=_0x507929['groupNode'],_0x3f3676=[];for(let _0x571f14=0x0,_0x43da35=_0x185b6d[_0x454e19(0x13a)][_0x454e19(0x16d)];_0x571f14<_0x43da35;_0x571f14++){let _0x57f194={},_0xe6560f=_0x185b6d[_0x454e19(0x13a)][_0x571f14];_0x57f194[_0x454e19(0x13b)]=_0xe6560f[_0x454e19(0x13b)],_0x57f194[_0x454e19(0x147)]=_0xe6560f[_0x454e19(0x125)],_0x57f194[_0x454e19(0x164)]=_0xe6560f[_0x454e19(0x164)];let _0x4caf43=_0xe6560f[_0x454e19(0x148)][_0x454e19(0x163)],_0x3c892e=_0xe6560f[_0x454e19(0x148)]['radius'];_0x57f194[_0x454e19(0x147)]!==''?_0x57f194[_0x454e19(0x12e)]={'sphere':{'center':new Cesium['Cartesian3'](_0x4caf43['x'],_0x4caf43['y'],_0x4caf43['z']),'radius':_0x3c892e}}:_0x57f194[_0x454e19(0x14d)]=!![],parseGeodes$1(_0x1f171a,_0x507929,_0xe6560f,_0x57f194),Cesium[_0x454e19(0x14b)](_0x57f194[_0x454e19(0x145)])&&_0x3f3676[_0x454e19(0x12a)](_0x57f194);}return _0x3f3676;}S3MBlockContentParser[_0xad7ac2(0x167)]=function(_0x1f24dc,_0xa0cb04,_0x5dc749){const _0x1d1ae1=_0xad7ac2;if(!Cesium[_0x1d1ae1(0x14b)](_0x5dc749))return;parseMaterial$3(_0x1f24dc,_0x5dc749,_0xa0cb04);let _0x223633=parsePagelods$1(_0x1f24dc,_0x5dc749);return _0x223633;};

    const _0x5150=['_maximumPriority','visibility','directionWC','realspace','isDestroyed','MASK_OUTSIDE','push','MAX_VALUE','227614nADlak','defined','contentState','getBaseUri','data/path/','228165vSHhAH','selectedFrame','distanceToCamera','normalize','cacheNode','_blockCache','destroy','shouldSelect','fileExtension','multiplyByPoint','Math','resolve','getExtensionFromUri','_isS3MBlock','visibleDistanceMin','free','Pixel','hasOwnProperty','update','blockKey','sphere','radius','drawingBufferHeight','EPSILON7','foveatedFactor','isLeafTile','box','selected','defaultValue','magnitude','TileBoundingSphere','fileName','positionWC','updatePriority','BoundingSphere','_cache','s3mb','otherwise','abs','updateVisibility','RequestType','pop','layer','finalResolution','pow','setRosRenderFlag','indexOf','Matrix4','184479jUUyLf','{s}','3455sTaqOB','priority','_fovy','rosRenderFlag','children','contentReadyPromise','subtract','parseBuffer','dot','330740WULRCn','visible','touchedFrame','requestContent','distanceToTileCenter','Resource','26syYUWQ','visibilityPlaneMask','CullingVolume','defineProperties','_renderable','createBoundingVolume','tan','FAILED','RequestState','pixel','CANCELLED','_minimumPriority','camera','getUrlComponent','add','center','url','replace','multiplyByScalar','updatedVisibilityFrame','cullingVolume','contains','serverKey','modelMatrix','%2B','getPixel','when','distanceToTile','get','length','renderEntities','subdomains','relativePath','_basePath','prototype','rootName','boundingVolume','fromCornerPoints','random','reject','Cartesian3','UNLOADED','index','baseUri','parent','lodRangeData','rangeList','state','request','centerZDepth','min','wasMinPriorityChild','rootBatchIdMap','distance','priorityDeferred','lodRangeMode','isAncestorBlock','2273LtxHCW','priorityHolder','251109LlRRfx','max','_baseResource','fetchArrayBuffer','visibleDistanceMax','42uAqOog','contentResource','parse','clone','rangeDataList','READY','2zeQQPf','TILES3D','maximumComponent','requestedFrame','then','depth','MASK_INDETERMINATE','ancestorMap','/rest/realspace','getDerivedResource','defer','processFrame','resetRosRenderFlag'];const _0x13b03f=_0x1f3e;(function(_0x50097a,_0x5e7ce8){const _0x8efb97=_0x1f3e;while(!![]){try{const _0x4eb3a8=-parseInt(_0x8efb97(0x156))*parseInt(_0x8efb97(0x14f))+-parseInt(_0x8efb97(0x171))+parseInt(_0x8efb97(0x116))*parseInt(_0x8efb97(0x1a8))+parseInt(_0x8efb97(0x1a6))*-parseInt(_0x8efb97(0x15c))+parseInt(_0x8efb97(0x176))+parseInt(_0x8efb97(0x151))+parseInt(_0x8efb97(0x110));if(_0x4eb3a8===_0x5e7ce8)break;else _0x50097a['push'](_0x50097a['shift']());}catch(_0x328c15){_0x50097a['push'](_0x50097a['shift']());}}}(_0x5150,0x32bbe));function _0x1f3e(_0x1dbe44,_0x371cd5){_0x1dbe44=_0x1dbe44-0x10f;let _0x515056=_0x5150[_0x1dbe44];return _0x515056;}function S3MTile(_0x68d2f9,_0x57ea8e,_0x12927f,_0x2a9995,_0x32be74,_0xf2563e){const _0x2a470a=_0x1f3e;this['layer']=_0x68d2f9,this[_0x2a470a(0x142)]=_0x57ea8e;let _0x5b13c5=_0x2a9995[_0x2a470a(0x127)](/\\/g,'/');this[_0x2a470a(0x17e)]=Cesium[_0x2a470a(0x182)](_0x2a9995),this[_0x2a470a(0x136)]=getUrl(_0x5b13c5,_0x68d2f9),this['fileName']=_0x2a9995,this[_0x2a470a(0x18f)]=_0x32be74===0x0,this['isRootTile']=![],this['boundingVolume']=this[_0x2a470a(0x11b)](_0x12927f,_0x68d2f9[_0x2a470a(0x12d)]);let _0x22e1c9=Cesium['Resource']['createIfNeeded'](_0x68d2f9[_0x2a470a(0x153)]);if(Cesium[_0x2a470a(0x172)](_0x57ea8e))this[_0x2a470a(0x141)]=_0x57ea8e['baseUri'];else {let _0xfc829f=new Cesium[(_0x2a470a(0x115))](_0x5b13c5);this['baseUri']=_0xfc829f[_0x2a470a(0x174)]();}this[_0x2a470a(0x157)]=_0x22e1c9[_0x2a470a(0x165)]({'url':this['relativePath']}),this[_0x2a470a(0x12c)]=Cesium['RequestScheduler']['getServerKey'](this[_0x2a470a(0x157)][_0x2a470a(0x123)]()),this[_0x2a470a(0x146)]=undefined,this[_0x2a470a(0x17a)]=undefined,this[_0x2a470a(0x178)]=0x0,this[_0x2a470a(0x147)]=0x0,this['pixel']=0x0,this[_0x2a470a(0x161)]=_0x57ea8e?_0x57ea8e[_0x2a470a(0x161)]+0x1:0x0,this['visibilityPlaneMask']=0x0,this[_0x2a470a(0x111)]=![],this[_0x2a470a(0x1ac)]=[],this[_0x2a470a(0x134)]=[],this[_0x2a470a(0x1ab)]=[],this[_0x2a470a(0x143)]=Cesium[_0x2a470a(0x192)](_0x32be74,0x10),this[_0x2a470a(0x14d)]=Cesium[_0x2a470a(0x192)](_0xf2563e,_0x33e663[_0x2a470a(0x186)]),this[_0x2a470a(0x173)]=this['isLeafTile']?_0x55d17f['READY']:_0x55d17f['UNLOADED'],this[_0x2a470a(0x112)]=0x0,this[_0x2a470a(0x15f)]=0x0,this[_0x2a470a(0x167)]=0x0,this[_0x2a470a(0x177)]=0x0,this[_0x2a470a(0x129)]=0x0,this[_0x2a470a(0x18e)]=0x0,this[_0x2a470a(0x1a9)]=0x0,this['priorityHolder']=this,this[_0x2a470a(0x149)]=![],this[_0x2a470a(0x17d)]=![],this[_0x2a470a(0x191)]=![],this[_0x2a470a(0x1a1)]=!![],this[_0x2a470a(0x140)]=0x0,this[_0x2a470a(0x11a)]=![],this['rootName']=!_0x57ea8e?this[_0x2a470a(0x195)]:_0x57ea8e[_0x2a470a(0x139)],this[_0x2a470a(0x189)]='',this[_0x2a470a(0x14e)]=![],this['isChildBlock']=![],this[_0x2a470a(0x14a)]={},this[_0x2a470a(0x163)]={};}Object[_0x13b03f(0x119)](S3MTile['prototype'],{'renderable':{'get':function(){const _0x1abbf0=_0x13b03f;if(this['_renderable'])return this[_0x1abbf0(0x11a)];let _0x2c3f07=this['renderEntities'],_0x4f5ba8=_0x2c3f07[_0x1abbf0(0x133)];if(_0x4f5ba8===0x0)return ![];for(let _0x5c8cb5=0x0;_0x5c8cb5<_0x4f5ba8;_0x5c8cb5++){let _0x4d109a=_0x2c3f07[_0x5c8cb5];for(let _0x3d0b0e=0x0,_0x1b0b1b=_0x4d109a[_0x1abbf0(0x133)];_0x3d0b0e<_0x1b0b1b;_0x3d0b0e++){let _0x11036b=_0x4d109a[_0x3d0b0e];if(!_0x11036b['ready'])return ![];}}return this[_0x1abbf0(0x11a)]=!![],!![];}}});let scratchScale=new Cesium['Cartesian3']();function createSphere(_0x1b52a0,_0x2cae09){const _0x1d7832=_0x13b03f;let _0x232962=Cesium[_0x1d7832(0x13e)][_0x1d7832(0x159)](_0x1b52a0[_0x1d7832(0x125)]),_0x899e14=_0x1b52a0['radius'];_0x232962=Cesium['Matrix4'][_0x1d7832(0x17f)](_0x2cae09,_0x232962,_0x232962);let _0x5a3ef4=Cesium[_0x1d7832(0x1a5)]['getScale'](_0x2cae09,scratchScale),_0x15a74e=Cesium[_0x1d7832(0x13e)][_0x1d7832(0x15e)](_0x5a3ef4);return _0x899e14*=_0x15a74e,new Cesium[(_0x1d7832(0x194))](_0x232962,_0x899e14);}function getUrl(_0x57d569,_0x5cc6d3){const _0x1c69cc=_0x13b03f;_0x57d569=_0x57d569[_0x1c69cc(0x127)](/\+/g,_0x1c69cc(0x12e));let _0x59c807=_0x5cc6d3[_0x1c69cc(0x137)],_0x4101f6=_0x5cc6d3[_0x1c69cc(0x137)][_0x1c69cc(0x1a4)](_0x1c69cc(0x16c))>-0x1;if(!_0x4101f6)return _0x57d569;let _0x12748d=_0x59c807['replace'](/(.*realspace)/,''),_0x4eb16e=_0x59c807['replace'](/\/rest\/realspace/g,'')[_0x1c69cc(0x127)](_0x12748d,'');return _0x4eb16e+_0x1c69cc(0x164)+_0x12748d+_0x1c69cc(0x175)+_0x57d569[_0x1c69cc(0x127)](/^\.*/,'')['replace'](/^\//,'')[_0x1c69cc(0x127)](/\/$/,'');}function createBoundingBox(_0x41634d,_0x59a865){const _0x439ac6=_0x13b03f;let _0x4f62e6=new Cesium[(_0x439ac6(0x13e))](_0x41634d['min']['x'],_0x41634d['min']['y'],_0x41634d[_0x439ac6(0x148)]['z']);Cesium[_0x439ac6(0x1a5)][_0x439ac6(0x17f)](_0x59a865,_0x4f62e6,_0x4f62e6);let _0x4d9b69=new Cesium[(_0x439ac6(0x13e))](_0x41634d[_0x439ac6(0x152)]['x'],_0x41634d['max']['y'],_0x41634d[_0x439ac6(0x152)]['z']);Cesium[_0x439ac6(0x1a5)]['multiplyByPoint'](_0x59a865,_0x4d9b69,_0x4d9b69);let _0x3012df=Cesium['BoundingSphere'][_0x439ac6(0x13b)](_0x4f62e6,_0x4d9b69,new Cesium[(_0x439ac6(0x198))]()),_0x3641d0=_0x3012df['center'],_0x14c84f=_0x3012df[_0x439ac6(0x18b)],_0x4894b8=Cesium[_0x439ac6(0x1a5)]['getScale'](_0x59a865,scratchScale),_0x208748=Cesium[_0x439ac6(0x13e)][_0x439ac6(0x15e)](_0x4894b8);return _0x14c84f*=_0x208748,new Cesium[(_0x439ac6(0x194))](_0x3641d0,_0x14c84f);}S3MTile['prototype']['createBoundingVolume']=function(_0x120881,_0x30de3c){const _0x29ffb5=_0x13b03f;if(Cesium[_0x29ffb5(0x172)](_0x120881[_0x29ffb5(0x18a)]))return createSphere(_0x120881[_0x29ffb5(0x18a)],_0x30de3c);else {if(Cesium['defined'](_0x120881['box']))return createBoundingBox(_0x120881[_0x29ffb5(0x190)],_0x30de3c);}return undefined;},S3MTile['prototype']['canTraverse']=function(){const _0x47ee3e=_0x13b03f;if(this[_0x47ee3e(0x1ac)][_0x47ee3e(0x133)]===0x0||this[_0x47ee3e(0x18f)])return ![];if(!Cesium[_0x47ee3e(0x172)](this[_0x47ee3e(0x143)]))return !![];return this['pixel']>this[_0x47ee3e(0x143)];};function getBoundingVolume(_0x1d8c2a,_0x1573bd){return _0x1d8c2a['boundingVolume'];}S3MTile[_0x13b03f(0x138)][_0x13b03f(0x12f)]=function(_0x57ec65){const _0x955156=_0x13b03f;let _0x18f402=this[_0x955156(0x13a)],_0x5a50d2=_0x18f402['radius'],_0x14e16f=_0x18f402[_0x955156(0x125)],_0x100560=Cesium[_0x955156(0x13e)][_0x955156(0x14b)](_0x57ec65[_0x955156(0x122)]['positionWC'],_0x14e16f),_0x1ae3db=_0x57ec65['context'][_0x955156(0x18c)],_0x4fd204=_0x57ec65[_0x955156(0x122)]['frustum'][_0x955156(0x1aa)]*0.5,_0xff1be3=_0x1ae3db*0.5,_0x383714=_0xff1be3/Math[_0x955156(0x11c)](_0x4fd204);return _0x383714*_0x5a50d2/_0x100560;},S3MTile[_0x13b03f(0x138)][_0x13b03f(0x131)]=function(_0x561a02){const _0x583ceb=_0x13b03f;let _0x1f0eb3=getBoundingVolume(this);return _0x1f0eb3[_0x583ceb(0x178)](_0x561a02);};let scratchToTileCenter=new Cesium['Cartesian3']();S3MTile[_0x13b03f(0x138)]['distanceToTileCenter']=function(_0x13223b){const _0x3e5be8=_0x13b03f,_0x3d5291=getBoundingVolume(this),_0x5cb6f4=Cesium[_0x3e5be8(0x13e)][_0x3e5be8(0x1ae)](_0x3d5291[_0x3e5be8(0x125)],_0x13223b[_0x3e5be8(0x122)]['positionWC'],scratchToTileCenter);return Cesium[_0x3e5be8(0x13e)]['dot'](_0x13223b['camera'][_0x3e5be8(0x16b)],_0x5cb6f4);},S3MTile['prototype']['visibility']=function(_0x293375,_0x1f2595){const _0x32aa51=_0x13b03f;let _0x1f2240=getBoundingVolume(this);return _0x293375[_0x32aa51(0x12a)]['computeVisibilityWithPlaneMask'](_0x1f2240,_0x1f2595);};let scratchCartesian=new Cesium[(_0x13b03f(0x13e))]();function priorityDeferred(_0x37a0f2,_0x35441a){const _0x380ebe=_0x13b03f;let _0x5bfea8=_0x35441a['camera'],_0x4facdb=_0x37a0f2[_0x380ebe(0x13a)],_0x3b3969=_0x4facdb[_0x380ebe(0x18b)],_0x549d24=Cesium[_0x380ebe(0x13e)][_0x380ebe(0x128)](_0x5bfea8[_0x380ebe(0x16b)],_0x37a0f2['centerZDepth'],scratchCartesian),_0x5a7d98=Cesium[_0x380ebe(0x13e)]['add'](_0x5bfea8['positionWC'],_0x549d24,scratchCartesian),_0x4fc9d2=Cesium[_0x380ebe(0x13e)]['subtract'](_0x5a7d98,_0x4facdb[_0x380ebe(0x125)],scratchCartesian),_0x403a72=Cesium[_0x380ebe(0x13e)][_0x380ebe(0x193)](_0x4fc9d2),_0x194f5d=_0x403a72>_0x3b3969;if(_0x194f5d){let _0x2146fb=Cesium[_0x380ebe(0x13e)]['normalize'](_0x4fc9d2,scratchCartesian),_0x28105f=Cesium[_0x380ebe(0x13e)][_0x380ebe(0x128)](_0x2146fb,_0x3b3969,scratchCartesian),_0x376ec4=Cesium['Cartesian3'][_0x380ebe(0x124)](_0x4facdb['center'],_0x28105f,scratchCartesian),_0x331500=Cesium[_0x380ebe(0x13e)][_0x380ebe(0x1ae)](_0x376ec4,_0x5bfea8[_0x380ebe(0x196)],scratchCartesian),_0x5b0560=Cesium['Cartesian3'][_0x380ebe(0x179)](_0x331500,scratchCartesian);_0x37a0f2[_0x380ebe(0x18e)]=0x1-Math[_0x380ebe(0x19c)](Cesium[_0x380ebe(0x13e)][_0x380ebe(0x10f)](_0x5bfea8['directionWC'],_0x5b0560));}else _0x37a0f2['foveatedFactor']=0x0;}S3MTile[_0x13b03f(0x138)][_0x13b03f(0x19d)]=function(_0x4dc4bc,_0x2e61dc){const _0x3d6349=_0x13b03f;let _0x534501=this[_0x3d6349(0x142)],_0x4d6fcb=Cesium['defined'](_0x534501)?_0x534501[_0x3d6349(0x117)]:Cesium[_0x3d6349(0x118)][_0x3d6349(0x162)];this[_0x3d6349(0x178)]=this[_0x3d6349(0x131)](_0x4dc4bc),this[_0x3d6349(0x147)]=this[_0x3d6349(0x114)](_0x4dc4bc),this[_0x3d6349(0x11f)]=this['getPixel'](_0x4dc4bc),this[_0x3d6349(0x117)]=this[_0x3d6349(0x16a)](_0x4dc4bc,_0x4d6fcb),this['visible']=this[_0x3d6349(0x117)]!==Cesium[_0x3d6349(0x118)][_0x3d6349(0x16e)]&&this['distanceToCamera']>=_0x2e61dc[_0x3d6349(0x184)]&&this['distanceToCamera']<=_0x2e61dc[_0x3d6349(0x155)],this[_0x3d6349(0x14c)]=priorityDeferred(this,_0x4dc4bc);};function createPriorityFunction(_0x1878e0){return function(){return _0x1878e0['priority'];};}function getContentFailedFunction(_0x482036){return function(_0x3102db){const _0x3e01a9=_0x1f3e;_0x482036[_0x3e01a9(0x173)]=_0x55d17f['FAILED'],_0x482036[_0x3e01a9(0x1ad)][_0x3e01a9(0x13d)](_0x3102db);};}function createChildren(_0x224dc3,_0x98f930){const _0x819c4f=_0x13b03f;let _0x784918=_0x224dc3[_0x819c4f(0x1a0)],_0x454a26=_0x98f930[_0x819c4f(0x133)],_0x44fa78=Number[_0x819c4f(0x170)],_0x555c63=0x0,_0x4e84d1=_0x33e663[_0x819c4f(0x186)];for(let _0x2c6cdf=0x0;_0x2c6cdf<_0x454a26;_0x2c6cdf++){let _0x1ff722=_0x98f930[_0x2c6cdf],_0x292c02=_0x1ff722['boundingVolume'],_0x575ed0=_0x1ff722[_0x819c4f(0x15a)];_0x575ed0=_0x224dc3[_0x819c4f(0x141)]+_0x575ed0;let _0xf892cc=_0x1ff722[_0x819c4f(0x144)],_0x68341f=_0x1ff722['rangeMode'],_0x1d8165=_0x1ff722['geoMap'];if(_0xf892cc!==0x0){let _0x3b9981=new S3MTile(_0x784918,_0x224dc3,_0x292c02,_0x575ed0,_0xf892cc,_0x68341f);_0x3b9981[_0x819c4f(0x140)]=_0x2c6cdf,_0x224dc3[_0x819c4f(0x1ac)][_0x819c4f(0x16f)](_0x3b9981),_0x784918[_0x819c4f(0x199)][_0x819c4f(0x124)](_0x3b9981);}_0x224dc3['renderEntities'][_0x2c6cdf]=[],_0x224dc3[_0x819c4f(0x1ab)][_0x2c6cdf]=!![];for(let _0x1da3a0 in _0x1d8165){_0x1d8165[_0x819c4f(0x187)](_0x1da3a0)&&_0x224dc3[_0x819c4f(0x134)][_0x2c6cdf][_0x819c4f(0x16f)](_0x1d8165[_0x1da3a0]);}_0x44fa78=Math[_0x819c4f(0x148)](_0x44fa78,_0xf892cc),_0x555c63=Math[_0x819c4f(0x152)](_0x555c63,_0xf892cc),_0x4e84d1=_0x68341f;}_0x224dc3['isRootTile']&&(_0x224dc3[_0x819c4f(0x143)]=_0x4e84d1===_0x33e663['Pixel']?_0x44fa78/0x2:_0x555c63*0x2,_0x224dc3['lodRangeMode']=_0x4e84d1);}function parseChildGroup(_0x2afafb,_0x3e1b47,_0x35782e){const _0x4e5cfd=_0x13b03f;let _0xf254cf=_0x3e1b47[_0x35782e[_0x4e5cfd(0x195)]];if(!_0xf254cf)return;_0x35782e['blockKey']=_0x35782e[_0x4e5cfd(0x195)],_0x35782e['isAncestorBlock']=!![];let _0x55c340=S3MBlockContentParser['parse'](_0x2afafb,_0x35782e,_0xf254cf);createChildren(_0x35782e,_0x55c340);let _0x5a59ae=[_0x35782e];while(_0x5a59ae[_0x4e5cfd(0x133)]){let _0x11839b=_0x5a59ae[_0x4e5cfd(0x19f)](),_0x315961=_0x11839b[_0x4e5cfd(0x1ac)];for(let _0x2f16f0=0x0,_0x21732d=_0x315961[_0x4e5cfd(0x133)];_0x2f16f0<_0x21732d;_0x2f16f0++){let _0x250872=_0x315961[_0x2f16f0],_0x135611=_0x250872['fileName'];if(_0x135611==='')continue;_0x250872[_0x4e5cfd(0x14a)]=_0xf254cf[_0x4e5cfd(0x14a)],_0x250872[_0x4e5cfd(0x163)]=_0xf254cf[_0x4e5cfd(0x163)];let _0x3d2a02=_0x3e1b47[_0x250872[_0x4e5cfd(0x195)]];if(_0x3d2a02){_0x250872[_0x4e5cfd(0x173)]=_0x55d17f['READY'],_0x250872['blockKey']=_0x11839b[_0x4e5cfd(0x189)],_0x250872['isChildBlock']=!![];let _0x44af1b=S3MBlockContentParser[_0x4e5cfd(0x158)](_0x2afafb,_0x250872,_0x3d2a02);createChildren(_0x250872,_0x44af1b),_0x5a59ae['push'](_0x250872);}else _0x250872[_0x4e5cfd(0x14e)]=!![],_0x250872[_0x4e5cfd(0x189)]=_0x250872[_0x4e5cfd(0x195)];}}}function contentReadyFunction(_0x231735,_0x7b818d,_0x205ce2){const _0x19abc6=_0x13b03f;_0x231735[_0x19abc6(0x199)][_0x19abc6(0x124)](_0x7b818d);if(_0x231735['_isS3MBlock']){let _0x4f5164=S3MBlockParser[_0x19abc6(0x1af)](_0x205ce2,_0x7b818d);parseChildGroup(_0x231735,_0x4f5164,_0x7b818d),_0x7b818d[_0x19abc6(0x177)]=0x0,_0x7b818d[_0x19abc6(0x173)]=_0x55d17f[_0x19abc6(0x15b)],_0x7b818d[_0x19abc6(0x1ad)][_0x19abc6(0x181)](!![]);return;}let _0x574e98;if(_0x7b818d[_0x19abc6(0x17e)]===_0x19abc6(0x19a))_0x574e98=S3ModelParser[_0x19abc6(0x1af)](_0x205ce2);else _0x7b818d[_0x19abc6(0x17e)]==='s3m'&&(_0x574e98=S3ModelOldParser[_0x19abc6(0x1af)](_0x205ce2));if(!_0x574e98){_0x7b818d[_0x19abc6(0x173)]=_0x55d17f[_0x19abc6(0x11d)],_0x7b818d[_0x19abc6(0x1ad)][_0x19abc6(0x13d)]();return;}let _0x50f43c=S3MContentParser['parse'](_0x231735,_0x574e98,_0x7b818d);createChildren(_0x7b818d,_0x50f43c),_0x7b818d[_0x19abc6(0x177)]=0x0,_0x7b818d[_0x19abc6(0x173)]=_0x55d17f[_0x19abc6(0x15b)],_0x7b818d[_0x19abc6(0x1ad)][_0x19abc6(0x181)](_0x574e98);}S3MTile[_0x13b03f(0x138)][_0x13b03f(0x113)]=function(_0x2284e4){const _0x1def35=_0x13b03f;let _0x380a17=this,_0x1c7b7e=this['layer'];if(_0x1c7b7e[_0x1def35(0x183)]&&_0x1c7b7e[_0x1def35(0x17b)][_0x1def35(0x12b)](_0x1c7b7e['id'],this['blockKey'])){let _0x25d538=_0x1c7b7e[_0x1def35(0x17b)][_0x1def35(0x132)](_0x1c7b7e['id'],this[_0x1def35(0x189)]);return this[_0x1def35(0x1ad)]=Cesium['when'][_0x1def35(0x166)](),contentReadyFunction(_0x1c7b7e,this,_0x25d538),!![];}let _0x332f35=this[_0x1def35(0x157)][_0x1def35(0x159)](),_0x44998b=/({.*?})/g;if(Cesium[_0x1def35(0x172)](_0x2284e4['subdomains'])){let _0x52320d=_0x2284e4[_0x1def35(0x135)],_0x9c1aca=_0x52320d[_0x1def35(0x133)],_0x52f7fb=_0x52320d[parseInt(Math[_0x1def35(0x13c)]()*_0x9c1aca)];_0x332f35[_0x1def35(0x126)]=_0x332f35[_0x1def35(0x126)][_0x1def35(0x127)](_0x44998b,function(_0x3a69b1,_0x59bac7){const _0x2d02be=_0x1def35;if(_0x59bac7===_0x2d02be(0x1a7))return _0x52f7fb;return _0x3a69b1;});}let _0x1e4334=new Cesium['Request']({'throttle':!![],'throttleByServer':!![],'type':Cesium[_0x1def35(0x19e)][_0x1def35(0x15d)],'priorityFunction':createPriorityFunction(this),'serverKey':this[_0x1def35(0x12c)]});this['request']=_0x1e4334,_0x332f35[_0x1def35(0x146)]=_0x1e4334;let _0x1142c4=_0x332f35[_0x1def35(0x154)]();if(!Cesium['defined'](_0x1142c4))return ![];this[_0x1def35(0x173)]=_0x55d17f['LOADING'],this['contentReadyPromise']=Cesium[_0x1def35(0x130)]['defer']();let _0x11ab45=getContentFailedFunction(this);return _0x1142c4[_0x1def35(0x160)](function(_0xa9c0d3){const _0x4eaa79=_0x1def35;if(_0x380a17[_0x4eaa79(0x16d)]()){_0x11ab45();return;}contentReadyFunction(_0x1c7b7e,_0x380a17,_0xa9c0d3);})[_0x1def35(0x19b)](function(_0x15b145){const _0x5b8bc1=_0x1def35;if(_0x1e4334[_0x5b8bc1(0x145)]===Cesium[_0x5b8bc1(0x11e)][_0x5b8bc1(0x120)]){_0x380a17[_0x5b8bc1(0x173)]=_0x55d17f[_0x5b8bc1(0x13f)];return;}_0x11ab45(_0x15b145);}),!![];};function priorityNormalizeAndClamp(_0x5ec5fe,_0x2941d4,_0x53c996){const _0x396ff0=_0x13b03f;return Math[_0x396ff0(0x152)](Cesium[_0x396ff0(0x180)][_0x396ff0(0x179)](_0x5ec5fe,_0x2941d4,_0x53c996)-Cesium['Math'][_0x396ff0(0x18d)],0x0);}function isolateDigits(_0x191b98,_0xafef04,_0x332659){const _0x5cb628=_0x13b03f;let _0x5e6b22=_0x191b98*Math[_0x5cb628(0x1a2)](0xa,_0xafef04),_0x1bce25=parseInt(_0x5e6b22);return _0x1bce25*Math[_0x5cb628(0x1a2)](0xa,_0x332659);}S3MTile[_0x13b03f(0x138)][_0x13b03f(0x197)]=function(_0x5d1366,_0xa342f9){const _0x182713=_0x13b03f;let _0x3647e4=_0x5d1366[_0x182713(0x121)],_0x450e04=_0x5d1366[_0x182713(0x169)],_0x221df0=0x4,_0x237cad=0x4,_0x2ddae9=priorityNormalizeAndClamp(this[_0x182713(0x18e)],_0x3647e4[_0x182713(0x18e)],_0x450e04['foveatedFactor']),_0x591a76=isolateDigits(_0x2ddae9,_0x237cad,_0x221df0);_0x221df0=0x8;let _0x457208=priorityNormalizeAndClamp(this[_0x182713(0x11f)],_0x3647e4[_0x182713(0x11f)],_0x450e04[_0x182713(0x11f)]),_0x164315=isolateDigits(0x1-_0x457208,_0x237cad,_0x221df0);_0x221df0=0x0;let _0x5caa3a=priorityNormalizeAndClamp(this[_0x182713(0x178)],_0x3647e4[_0x182713(0x14b)],_0x450e04[_0x182713(0x14b)]),_0x241fa9=isolateDigits(_0x5caa3a,_0x237cad,_0x221df0);this[_0x182713(0x1a9)]=_0x591a76+_0x164315+_0x241fa9;},S3MTile[_0x13b03f(0x138)][_0x13b03f(0x1a3)]=function(_0x10b8b0,_0x5d2960){const _0x4466e2=_0x13b03f;this[_0x4466e2(0x1ab)][_0x10b8b0]=_0x5d2960;},S3MTile['prototype'][_0x13b03f(0x168)]=function(){const _0x416f0f=_0x13b03f;for(let _0x2bbe76=0x0,_0x5c59b9=this[_0x416f0f(0x1ab)][_0x416f0f(0x133)];_0x2bbe76<_0x5c59b9;_0x2bbe76++){this[_0x416f0f(0x1ab)][_0x2bbe76]=!![];}},S3MTile['prototype'][_0x13b03f(0x188)]=function(_0x3de156,_0x371a8d){const _0x3fdb3f=_0x13b03f;for(let _0x562619=0x0,_0x3a737e=this[_0x3fdb3f(0x134)]['length'];_0x562619<_0x3a737e;_0x562619++){if(this[_0x3fdb3f(0x1ab)][_0x562619]){let _0x4ad2b2=this['renderEntities'][_0x562619];for(let _0xd3e39e=0x0,_0x56fa39=_0x4ad2b2[_0x3fdb3f(0x133)];_0xd3e39e<_0x56fa39;_0xd3e39e++){_0x4ad2b2[_0xd3e39e][_0x3fdb3f(0x188)](_0x3de156,_0x371a8d);}}}},S3MTile[_0x13b03f(0x138)][_0x13b03f(0x185)]=function(){const _0x33a73d=_0x13b03f;this[_0x33a73d(0x173)]=_0x55d17f[_0x33a73d(0x13f)],this[_0x33a73d(0x146)]=undefined,this['cacheNode']=undefined,this[_0x33a73d(0x150)]=undefined,this[_0x33a73d(0x1ad)]=undefined,this[_0x33a73d(0x150)]=undefined;for(let _0xfc5a44=0x0,_0x1981e3=this['renderEntities'][_0x33a73d(0x133)];_0xfc5a44<_0x1981e3;_0xfc5a44++){let _0x53e341=this[_0x33a73d(0x134)][_0xfc5a44];for(let _0x2666d4=0x0,_0x48ef97=_0x53e341[_0x33a73d(0x133)];_0x2666d4<_0x48ef97;_0x2666d4++){_0x53e341[_0x2666d4][_0x33a73d(0x17c)]();}}this[_0x33a73d(0x134)][_0x33a73d(0x133)]=0x0,this[_0x33a73d(0x1ab)][_0x33a73d(0x133)]=0x0,this[_0x33a73d(0x1ac)][_0x33a73d(0x133)]=0x0,this[_0x33a73d(0x11a)]=![];},S3MTile[_0x13b03f(0x138)][_0x13b03f(0x16d)]=function(){return ![];},S3MTile[_0x13b03f(0x138)][_0x13b03f(0x17c)]=function(){return this['free'](),Cesium['destroyObject'](this);};

    const _0x43f6=['pop','849902bvMoDf','requestedFrame','MAX_VALUE','distance','_requestTiles','prototype','1226432wdKNTd','resetRosRenderFlag','push','_processTiles','1529401CKYohs','parent','lodRangeData','31VqRxXX','_minimumPriority','renderable','isRootTile','distanceToCamera','length','processFrame','shouldSelect','updatePriority','lodRangeScale','updatedVisibilityFrame','Pixel','contentState','80HKecLW','depth','_rootTiles','frameNumber','18927jHMMiG','min','1717803IpFzIH','pixel','1eCnwrR','centerZDepth','_selectedTiles','37369pseFpc','lodRangeMode','priorityHolder','touchedFrame','touch','_stack','setRosRenderFlag','foveatedFactor','_maximumPriority','READY','115163WjZmLe','_cache','schedule','children','selectedFrame','1ZTUhnm','visible','wasMinPriorityChild','max'];const _0x4939cc=_0x3741;(function(_0x1788e2,_0x3aea1b){const _0x11c93f=_0x3741;while(!![]){try{const _0xb10161=-parseInt(_0x11c93f(0x1b8))*parseInt(_0x11c93f(0x1bc))+parseInt(_0x11c93f(0x199))*parseInt(_0x11c93f(0x1cd))+parseInt(_0x11c93f(0x1be))+-parseInt(_0x11c93f(0x19e))+-parseInt(_0x11c93f(0x1c0))*-parseInt(_0x11c93f(0x1a8))+-parseInt(_0x11c93f(0x1a4))+-parseInt(_0x11c93f(0x1ab))*-parseInt(_0x11c93f(0x1c3));if(_0xb10161===_0x3aea1b)break;else _0x1788e2['push'](_0x1788e2['shift']());}catch(_0x460c4e){_0x1788e2['push'](_0x1788e2['shift']());}}}(_0x43f6,0xe3208));function S3MLayerScheduler(){const _0x2e8b74=_0x3741;this[_0x2e8b74(0x1c8)]=[];}function sortComparator(_0xf8dee5,_0x4fe64f){const _0x5d8dcf=_0x3741;if(_0x4fe64f[_0x5d8dcf(0x1af)]===0x0&&_0xf8dee5['distanceToCamera']===0x0)return _0x4fe64f[_0x5d8dcf(0x1c1)]-_0xf8dee5[_0x5d8dcf(0x1c1)];return _0x4fe64f[_0x5d8dcf(0x1af)]-_0xf8dee5[_0x5d8dcf(0x1af)];}function updateChildren(_0x48cd34,_0x181bc1,_0x1c4d76,_0x332bab){const _0x258e82=_0x3741;let _0x57e1b7,_0x3c86eb=_0x181bc1[_0x258e82(0x1d0)],_0x4e3a98=_0x3c86eb[_0x258e82(0x1b0)];for(_0x57e1b7=0x0;_0x57e1b7<_0x4e3a98;++_0x57e1b7){updateTile(_0x332bab,_0x48cd34,_0x3c86eb[_0x57e1b7]);}_0x3c86eb['sort'](sortComparator);let _0x4137c8=!![],_0x1718b6=![],_0x3d4a86=-0x1,_0x139614=Number[_0x258e82(0x1a0)];for(_0x57e1b7=0x0;_0x57e1b7<_0x4e3a98;++_0x57e1b7){let _0x416694=_0x3c86eb[_0x57e1b7];_0x416694[_0x258e82(0x1ca)]<_0x139614&&(_0x3d4a86=_0x57e1b7,_0x139614=_0x416694[_0x258e82(0x1ca)]);if(_0x416694[_0x258e82(0x19a)]){_0x1c4d76['push'](_0x416694),_0x1718b6=!![];let _0x3f9011=_0x416694[_0x258e82(0x1ad)];_0x181bc1[_0x258e82(0x1c9)](_0x416694['index'],!_0x3f9011),_0x4137c8=_0x4137c8&&_0x3f9011;}else touchTile(_0x48cd34,_0x416694,_0x332bab);}!_0x1718b6&&(_0x4137c8=![]);if(_0x3d4a86!==-0x1){let _0x1bf0c9=_0x3c86eb[_0x3d4a86];_0x1bf0c9[_0x258e82(0x19b)]=!![];let _0x16e1f2=(_0x181bc1[_0x258e82(0x19b)]||_0x181bc1[_0x258e82(0x1ae)])&&_0x139614<=_0x181bc1[_0x258e82(0x1c5)][_0x258e82(0x1ca)]?_0x181bc1[_0x258e82(0x1c5)]:_0x181bc1;_0x16e1f2[_0x258e82(0x1ca)]=Math[_0x258e82(0x1bd)](_0x1bf0c9[_0x258e82(0x1ca)],_0x16e1f2['foveatedFactor']),_0x16e1f2[_0x258e82(0x1af)]=Math[_0x258e82(0x1bd)](_0x1bf0c9[_0x258e82(0x1af)],_0x16e1f2[_0x258e82(0x1af)]);for(_0x57e1b7=0x0;_0x57e1b7<_0x4e3a98;++_0x57e1b7){let _0x59764e=_0x3c86eb[_0x57e1b7];_0x59764e[_0x258e82(0x1c5)]=_0x16e1f2;}}return _0x4137c8;}function selectTile(_0xa91875,_0xcc1cba,_0xfa58b7){const _0x31fb6c=_0x3741;if(_0xcc1cba[_0x31fb6c(0x1d1)]===_0xfa58b7['frameNumber']||!_0xcc1cba['renderable'])return;_0xa91875[_0x31fb6c(0x1c2)][_0x31fb6c(0x1a6)](_0xcc1cba),_0xcc1cba[_0x31fb6c(0x1d1)]=_0xfa58b7[_0x31fb6c(0x1bb)];}function loadTile(_0xd0c27c,_0xd731bb,_0x1d75fb){const _0x3a9602=_0x3741;if(_0xd731bb['requestedFrame']===_0x1d75fb[_0x3a9602(0x1bb)]||_0xd731bb[_0x3a9602(0x1b7)]!==_0x55d17f['UNLOADED'])return;_0xd0c27c[_0x3a9602(0x1a2)]['push'](_0xd731bb),_0xd731bb[_0x3a9602(0x19f)]=_0x1d75fb[_0x3a9602(0x1bb)];}function processTile(_0x5be813,_0x1ffe6a,_0x4743b7){const _0x2ee905=_0x3741;if(_0x1ffe6a[_0x2ee905(0x1b1)]===_0x4743b7[_0x2ee905(0x1bb)]||_0x1ffe6a[_0x2ee905(0x1b7)]!==_0x55d17f[_0x2ee905(0x1cc)]||_0x1ffe6a['renderable'])return;_0x1ffe6a[_0x2ee905(0x1b1)]=_0x4743b7[_0x2ee905(0x1bb)],_0x5be813[_0x2ee905(0x1a7)]['push'](_0x1ffe6a);}function touchTile(_0x241168,_0x26eaa5,_0x57e9f2){const _0x3ad80a=_0x3741;if(_0x26eaa5['touchedFrame']===_0x57e9f2[_0x3ad80a(0x1bb)])return;_0x241168[_0x3ad80a(0x1ce)][_0x3ad80a(0x1c7)](_0x26eaa5),_0x26eaa5[_0x3ad80a(0x1c6)]=_0x57e9f2['frameNumber'];}function _0x3741(_0x30a436,_0x428ee3){_0x30a436=_0x30a436-0x199;let _0x43f648=_0x43f6[_0x30a436];return _0x43f648;}function updateVisibility(_0x1d25cc,_0x1590ee,_0x598481){const _0x389aa2=_0x3741;if(_0x1590ee[_0x389aa2(0x1b5)]===_0x598481[_0x389aa2(0x1bb)])return;_0x1590ee[_0x389aa2(0x1b5)]=_0x598481[_0x389aa2(0x1bb)],_0x1590ee['updateVisibility'](_0x598481,_0x1d25cc);}function updateTileVisibility(_0x579876,_0x9a716b,_0x2e9dab){updateVisibility(_0x9a716b,_0x2e9dab,_0x579876);}function updateMinimumMaximumPriority(_0x3cc4ba,_0x2d1236){const _0xb8b6f3=_0x3741;_0x3cc4ba[_0xb8b6f3(0x1cb)][_0xb8b6f3(0x1a1)]=Math[_0xb8b6f3(0x19c)](_0x2d1236[_0xb8b6f3(0x1af)],_0x3cc4ba[_0xb8b6f3(0x1cb)][_0xb8b6f3(0x1a1)]),_0x3cc4ba[_0xb8b6f3(0x1ac)][_0xb8b6f3(0x1a1)]=Math[_0xb8b6f3(0x1bd)](_0x2d1236[_0xb8b6f3(0x1af)],_0x3cc4ba[_0xb8b6f3(0x1ac)]['distance']),_0x3cc4ba[_0xb8b6f3(0x1cb)][_0xb8b6f3(0x1b9)]=Math[_0xb8b6f3(0x19c)](_0x2d1236[_0xb8b6f3(0x1b9)],_0x3cc4ba[_0xb8b6f3(0x1cb)][_0xb8b6f3(0x1b9)]),_0x3cc4ba[_0xb8b6f3(0x1ac)]['depth']=Math[_0xb8b6f3(0x1bd)](_0x2d1236['depth'],_0x3cc4ba['_minimumPriority'][_0xb8b6f3(0x1b9)]),_0x3cc4ba[_0xb8b6f3(0x1cb)][_0xb8b6f3(0x1ca)]=Math[_0xb8b6f3(0x19c)](_0x2d1236['foveatedFactor'],_0x3cc4ba[_0xb8b6f3(0x1cb)][_0xb8b6f3(0x1ca)]),_0x3cc4ba[_0xb8b6f3(0x1ac)]['foveatedFactor']=Math[_0xb8b6f3(0x1bd)](_0x2d1236['foveatedFactor'],_0x3cc4ba[_0xb8b6f3(0x1ac)][_0xb8b6f3(0x1ca)]),_0x3cc4ba[_0xb8b6f3(0x1cb)][_0xb8b6f3(0x1bf)]=Math[_0xb8b6f3(0x19c)](_0x2d1236[_0xb8b6f3(0x1bf)],_0x3cc4ba[_0xb8b6f3(0x1cb)][_0xb8b6f3(0x1bf)]),_0x3cc4ba[_0xb8b6f3(0x1ac)][_0xb8b6f3(0x1bf)]=Math['min'](_0x2d1236[_0xb8b6f3(0x1bf)],_0x3cc4ba[_0xb8b6f3(0x1ac)][_0xb8b6f3(0x1bf)]);}function updateTile(_0x38df40,_0x20a975,_0x364d38){const _0x243147=_0x3741;updateTileVisibility(_0x38df40,_0x20a975,_0x364d38),_0x364d38['wasMinPriorityChild']=![],_0x364d38[_0x243147(0x1c5)]=_0x364d38,updateMinimumMaximumPriority(_0x20a975,_0x364d38),_0x364d38[_0x243147(0x1b2)]=![],_0x364d38['selected']=![],_0x364d38[_0x243147(0x1a5)]();}function canTraverse(_0x58e621,_0x1607b6){const _0x5448cf=_0x3741;if(_0x1607b6[_0x5448cf(0x1d0)][_0x5448cf(0x1b0)]===0x0)return ![];if(_0x1607b6[_0x5448cf(0x1c4)]===_0x33e663[_0x5448cf(0x1b6)])return _0x1607b6[_0x5448cf(0x1bf)]/_0x58e621[_0x5448cf(0x1b4)]>_0x1607b6[_0x5448cf(0x1aa)];return _0x1607b6[_0x5448cf(0x1af)]*_0x58e621[_0x5448cf(0x1b4)]<_0x1607b6[_0x5448cf(0x1aa)];}function traversal(_0x465780,_0x6fbc0a,_0xfeb38c){const _0x5bef42=_0x3741;while(_0x6fbc0a[_0x5bef42(0x1b0)]){let _0x1fd096=_0x6fbc0a[_0x5bef42(0x19d)](),_0x48486e=_0x1fd096[_0x5bef42(0x1a9)],_0x4071b1=![];canTraverse(_0x465780,_0x1fd096)&&(_0x4071b1=updateChildren(_0x465780,_0x1fd096,_0x6fbc0a,_0xfeb38c));let _0x14bd6b=!_0x4071b1;loadTile(_0x465780,_0x1fd096,_0xfeb38c),processTile(_0x465780,_0x1fd096,_0xfeb38c),_0x14bd6b&&selectTile(_0x465780,_0x1fd096,_0xfeb38c),touchTile(_0x465780,_0x1fd096,_0xfeb38c);}}function selectRootTiles(_0x4ce37a,_0x183d3a,_0x958018){const _0x6dc757=_0x3741;_0x183d3a[_0x6dc757(0x1b0)]=0x0;for(let _0x54eaff=0x0,_0xdd73e6=_0x4ce37a[_0x6dc757(0x1ba)][_0x6dc757(0x1b0)];_0x54eaff<_0xdd73e6;_0x54eaff++){let _0x1cf1a0=_0x4ce37a[_0x6dc757(0x1ba)][_0x54eaff];updateTile(_0x958018,_0x4ce37a,_0x1cf1a0);if(!_0x1cf1a0['visible'])continue;_0x183d3a[_0x6dc757(0x1a6)](_0x1cf1a0);}}function updatePriority(_0x227e32,_0x48cbcf){const _0x624949=_0x3741;let _0x5210e6=_0x227e32[_0x624949(0x1a2)],_0x5b3797=_0x5210e6[_0x624949(0x1b0)];for(let _0x44b393=0x0;_0x44b393<_0x5b3797;++_0x44b393){_0x5210e6[_0x44b393][_0x624949(0x1b3)](_0x227e32,_0x48cbcf);}}S3MLayerScheduler[_0x4939cc(0x1a3)][_0x4939cc(0x1cf)]=function(_0x8d1afd,_0x5a8942){const _0x211f31=_0x4939cc;let _0xb25c0c=this[_0x211f31(0x1c8)];selectRootTiles(_0x8d1afd,_0xb25c0c,_0x5a8942),traversal(_0x8d1afd,_0xb25c0c,_0x5a8942),updatePriority(_0x8d1afd,_0x5a8942);};

    const _0x35dc=['next','item','cacheNode','add','splice','_sentinel','unloadTiles','push','prototype','437853jXAYoC','844108XVeHXc','remove','1270TFbMAR','trim','432616FiZrDf','maximumMemoryUsage','unloadBlockTile','isAncestorBlock','1YpwKCe','length','740ScuQdr','_list','reset','DoublyLinkedList','611873LqNZMM','969670FjiPcZ','touch','unloadTile','_trimTiles','defined','109391pNjQVM','tail','pop','totalMemoryUsageInBytes','children'];function _0x1f92(_0x43bb72,_0x1b59ec){_0x43bb72=_0x43bb72-0x134;let _0x35dc9d=_0x35dc[_0x43bb72];return _0x35dc9d;}const _0xeb9878=_0x1f92;(function(_0x2a2de2,_0x1dcace){const _0x1dcf8a=_0x1f92;while(!![]){try{const _0xa79c1=parseInt(_0x1dcf8a(0x14a))*-parseInt(_0x1dcf8a(0x156))+parseInt(_0x1dcf8a(0x151))+-parseInt(_0x1dcf8a(0x146))+parseInt(_0x1dcf8a(0x144))*-parseInt(_0x1dcf8a(0x14c))+parseInt(_0x1dcf8a(0x142))+parseInt(_0x1dcf8a(0x150))+-parseInt(_0x1dcf8a(0x141));if(_0xa79c1===_0x1dcace)break;else _0x2a2de2['push'](_0x2a2de2['shift']());}catch(_0x543368){_0x2a2de2['push'](_0x2a2de2['shift']());}}}(_0x35dc,0x7b887));function S3MLayerCache(){const _0x19a9a5=_0x1f92;this[_0x19a9a5(0x14d)]=new Cesium[(_0x19a9a5(0x14f))](),this[_0x19a9a5(0x13d)]=this['_list']['add'](),this[_0x19a9a5(0x154)]=![];}S3MLayerCache[_0xeb9878(0x140)][_0xeb9878(0x14e)]=function(){const _0x5b8fc4=_0xeb9878;this['_list'][_0x5b8fc4(0x13c)](this['_list'][_0x5b8fc4(0x134)],this[_0x5b8fc4(0x13d)]);},S3MLayerCache[_0xeb9878(0x140)][_0xeb9878(0x152)]=function(_0x212e67){const _0x432293=_0xeb9878;let _0x420c4e=_0x212e67['cacheNode'];Cesium['defined'](_0x420c4e)&&this[_0x432293(0x14d)][_0x432293(0x13c)](this[_0x432293(0x13d)],_0x420c4e);},S3MLayerCache[_0xeb9878(0x140)][_0xeb9878(0x13b)]=function(_0x3cb69d){const _0x376205=_0xeb9878;!Cesium[_0x376205(0x155)](_0x3cb69d[_0x376205(0x13a)])&&(_0x3cb69d['cacheNode']=this['_list'][_0x376205(0x13b)](_0x3cb69d));},S3MLayerCache[_0xeb9878(0x140)][_0xeb9878(0x153)]=function(_0x44adea,_0x3a5e4d,_0x3a3383){const _0x2f8e14=_0xeb9878;let _0x4afe83=_0x3a5e4d[_0x2f8e14(0x13a)];if(!Cesium[_0x2f8e14(0x155)](_0x4afe83))return;this['_list'][_0x2f8e14(0x143)](_0x4afe83),_0x3a5e4d['cacheNode']=undefined,_0x3a3383(_0x44adea,_0x3a5e4d);},S3MLayerCache[_0xeb9878(0x140)]['unloadBlockTile']=function(_0x1e781a,_0x55dac8,_0x4f213b){const _0x382420=_0xeb9878;let _0x10e96d=[_0x55dac8],_0x3599b0=[_0x55dac8];while(_0x10e96d[_0x382420(0x14b)]){let _0x20066c=_0x10e96d[_0x382420(0x135)]();for(let _0x4a68c0=0x0,_0x5a2a6a=_0x20066c[_0x382420(0x137)][_0x382420(0x14b)];_0x4a68c0<_0x5a2a6a;_0x4a68c0++){let _0x439bc9=_0x20066c[_0x382420(0x137)][_0x4a68c0];!_0x439bc9[_0x382420(0x149)]&&(_0x10e96d[_0x382420(0x13f)](_0x439bc9),_0x3599b0['push'](_0x439bc9));}}for(let _0x57e963=0x0,_0x3dfb0f=_0x3599b0['length'];_0x57e963<_0x3dfb0f;_0x57e963++){let _0x4dfcb7=_0x3599b0[_0x57e963];this[_0x382420(0x153)](_0x1e781a,_0x4dfcb7,_0x4f213b);}},S3MLayerCache[_0xeb9878(0x140)][_0xeb9878(0x13e)]=function(_0x449498,_0xf93109){const _0x49cce4=_0xeb9878;let _0x535016=this['_trimTiles'];this[_0x49cce4(0x154)]=![];let _0x5f4e55=this[_0x49cce4(0x14d)],_0x4e1682=_0x449498[_0x49cce4(0x147)]*0x400*0x400,_0x18ea0c=this['_sentinel'],_0x59393a=_0x5f4e55['head'];while(_0x59393a&&_0x59393a!==_0x18ea0c&&(_0x449498[_0x49cce4(0x136)]>_0x4e1682||_0x535016)){let _0x4f7a55=_0x59393a['item'];_0x59393a=_0x59393a['next'],this[_0x49cce4(0x153)](_0x449498,_0x4f7a55,_0xf93109);}},S3MLayerCache['prototype']['unloadBlockTiles']=function(_0x3a412d,_0x5a49b6){const _0x26d43f=_0xeb9878;let _0x45c64c=this[_0x26d43f(0x154)];this['_trimTiles']=![];let _0x5404a9=this[_0x26d43f(0x14d)],_0x2730cc=_0x3a412d[_0x26d43f(0x147)]*0x400*0x400,_0x48e4b0=this[_0x26d43f(0x13d)],_0x409743=_0x5404a9['head'];while(_0x409743&&_0x409743!==_0x48e4b0&&(_0x3a412d['totalMemoryUsageInBytes']>_0x2730cc||_0x45c64c)){let _0x26bdd5=_0x409743[_0x26d43f(0x139)];_0x409743=_0x409743[_0x26d43f(0x138)],_0x26bdd5[_0x26d43f(0x149)]&&this[_0x26d43f(0x148)](_0x3a412d,_0x26bdd5,_0x5a49b6);}},S3MLayerCache[_0xeb9878(0x140)][_0xeb9878(0x145)]=function(){const _0x5ec5f1=_0xeb9878;this[_0x5ec5f1(0x154)]=!![];};

    const _0x2314=['3778853lkTIeE','709223YMyHnf','16169lzHhvd','1jhZgbV','1GgvFaX','20599raemIH','79UlQDTi','1bTvtao','7xHTekG','59rbAXRK','29383pjtyNy','freeze','772696WogcfS','1186134JUemtE'];const _0x14567f=_0x486b;(function(_0x3e1fb7,_0x50a7f4){const _0x5bc28b=_0x486b;while(!![]){try{const _0x438b92=-parseInt(_0x5bc28b(0xea))*parseInt(_0x5bc28b(0xe2))+-parseInt(_0x5bc28b(0xe1))+-parseInt(_0x5bc28b(0xe9))*-parseInt(_0x5bc28b(0xe8))+parseInt(_0x5bc28b(0xdd))*-parseInt(_0x5bc28b(0xe5))+parseInt(_0x5bc28b(0xe7))*-parseInt(_0x5bc28b(0xe4))+parseInt(_0x5bc28b(0xdf))*-parseInt(_0x5bc28b(0xde))+-parseInt(_0x5bc28b(0xe6))*-parseInt(_0x5bc28b(0xe3));if(_0x438b92===_0x50a7f4)break;else _0x3e1fb7['push'](_0x3e1fb7['shift']());}catch(_0x2d1ef3){_0x3e1fb7['push'](_0x3e1fb7['shift']());}}}(_0x2314,0xd99cd));const PLANECLIPMODE={'CLIP_NOTHING':0x0,'CLIP_BEHIND_ANY_PLANE':0x1,'CLIP_BEHIND_ALL_PLANE':0x2,'ONLY_KEEP_LINE':0x3};function _0x486b(_0x47afa3,_0x2a9303){_0x47afa3=_0x47afa3-0xdd;let _0x231440=_0x2314[_0x47afa3];return _0x231440;}var _0x4928db = Object[_0x14567f(0xe0)](PLANECLIPMODE);

    const _0x1b8c=['143ljmlTQ','6563tDubOy','1awBLOQ','freeze','1618gqSuMr','1186627VSzEkU','132551EJiUIq','1oAUjLV','749mOhMta','159891hllsSF','225241NPGYZK','1562086ynCzBp','1cvgZmK'];const _0x1e4238=_0xbbde;function _0xbbde(_0x2cdc67,_0x294611){_0x2cdc67=_0x2cdc67-0x195;let _0x1b8cc8=_0x1b8c[_0x2cdc67];return _0x1b8cc8;}(function(_0x361f44,_0x4180ad){const _0x2aa383=_0xbbde;while(!![]){try{const _0x175cda=parseInt(_0x2aa383(0x19e))*parseInt(_0x2aa383(0x19d))+-parseInt(_0x2aa383(0x199))*parseInt(_0x2aa383(0x19b))+parseInt(_0x2aa383(0x19a))*-parseInt(_0x2aa383(0x196))+parseInt(_0x2aa383(0x19f))*-parseInt(_0x2aa383(0x1a0))+parseInt(_0x2aa383(0x198))+parseInt(_0x2aa383(0x197))+parseInt(_0x2aa383(0x19c))*parseInt(_0x2aa383(0x1a1));if(_0x175cda===_0x4180ad)break;else _0x361f44['push'](_0x361f44['shift']());}catch(_0x49a43c){_0x361f44['push'](_0x361f44['shift']());}}}(_0x1b8c,0xc263f));const HypsometricSettingEnum={'DisplayMode':{'NONE':0x0,'FACE':0x1,'LINE':0x2,'FACE_AND_LINE':0x3},'AnalysisRegionMode':{'ARM_NONE':0x0,'ARM_ALL':0x1,'ARM_REGION':0x2},'FilterMode':{'LINEAR':0x0,'NEAREST':0x1}};var _0x1ad93e = Object[_0x1e4238(0x195)](HypsometricSettingEnum);

    var _0xece2=['minHeight','296061QBMBoP','minInstensity','destroy','1156307ovdvEo','maxHeight','maxInstensity','bounds','isDestroyed','prototype','7246NJyKAq','621317JTnxdf','setting','Cartesian4','87439MwkOrw','AnalysisRegionMode','1WArijz','21uRQagq','isUseHypColorTable','isUseColorByHeight','renderTexture','21qoGxtA','texture','20297sQnraS','minCategory','141631XbMalU','ARM_NONE','maxCategory','4vKRXzx'];function _0x1896(_0x21626b,_0xb47f70){_0x21626b=_0x21626b-0x77;var _0xece2b1=_0xece2[_0x21626b];return _0xece2b1;}var _0x4bee15=_0x1896;(function(_0x29e17b,_0x39a0f0){var _0x38e1dc=_0x1896;while(!![]){try{var _0x3f91d4=-parseInt(_0x38e1dc(0x78))*parseInt(_0x38e1dc(0x93))+-parseInt(_0x38e1dc(0x82))+-parseInt(_0x38e1dc(0x88))*-parseInt(_0x38e1dc(0x8f))+parseInt(_0x38e1dc(0x7a))+-parseInt(_0x38e1dc(0x8c))*-parseInt(_0x38e1dc(0x8e))+parseInt(_0x38e1dc(0x89))+parseInt(_0x38e1dc(0x7f))*parseInt(_0x38e1dc(0x7d));if(_0x3f91d4===_0x39a0f0)break;else _0x29e17b['push'](_0x29e17b['shift']());}catch(_0x1ba040){_0x29e17b['push'](_0x29e17b['shift']());}}}(_0xece2,0x9385d));function Hypsometric(_0x22bfd0){var _0x5d4da0=_0x1896;this[_0x5d4da0(0x8a)]=undefined,this[_0x5d4da0(0x77)]=undefined,this[_0x5d4da0(0x92)]=undefined,this['region']=undefined,this[_0x5d4da0(0x85)]=new Cesium[(_0x5d4da0(0x8b))](),this[_0x5d4da0(0x90)]=![],this['isUseRegion']=![],this['regionUpdate']=![],this['analysisMode']=_0x1ad93e[_0x5d4da0(0x8d)][_0x5d4da0(0x7b)],this[_0x5d4da0(0x84)]=_0x22bfd0[_0x5d4da0(0x84)],this[_0x5d4da0(0x80)]=_0x22bfd0[_0x5d4da0(0x80)],this[_0x5d4da0(0x83)]=_0x22bfd0[_0x5d4da0(0x83)],this[_0x5d4da0(0x7e)]=_0x22bfd0[_0x5d4da0(0x7e)],this[_0x5d4da0(0x7c)]=_0x22bfd0['maxCategory'],this[_0x5d4da0(0x79)]=_0x22bfd0[_0x5d4da0(0x79)],this[_0x5d4da0(0x91)]=!![];}Hypsometric[_0x4bee15(0x87)][_0x4bee15(0x86)]=function(){return ![];},Hypsometric[_0x4bee15(0x87)][_0x4bee15(0x81)]=function(){var _0x2c41f8=_0x4bee15;this[_0x2c41f8(0x8a)]=undefined,this['texture']=this[_0x2c41f8(0x77)]&&!this[_0x2c41f8(0x77)][_0x2c41f8(0x86)]()&&this['texture']['destroy'](),this['renderTexture']=this[_0x2c41f8(0x92)]&&!this[_0x2c41f8(0x92)][_0x2c41f8(0x86)]()&&this[_0x2c41f8(0x92)][_0x2c41f8(0x81)]();};

    const _0x16e0=['_getEmissionAtlasTextureRects','DisplayMode','_maxVisibleAltitude','height','_lineColor','_maxVisibleValue','_linesInterval','defined','_emissionTextureAtlas','defineProperties','_emissionTextureChanged','3FgFXNS','_coverageArea','prototype','1744188kbArDr','getItem','_visibleDistanceMin','max','_noValueColor','_dictColorTable','3371802groNYe','width','count','1770862XVQntZ','_updatePolygon','clone','_opacity','FilterMode','textureCoordinates','_emissionTextureUrl','push','16822romqKY','LINEAR','length','_getEmissionTexAtlasTilingAndOffset','FACE','_minVisibleValue','_visibleDistanceMax','altitude','198245QtRzVn','USpeed','textureAtlasID','7BPdZMw','_ceiling','1ZMlILs','_emissionTexCoordScale','_minVisibleAltitude','_displayMode','UTiling','_loadedEmissionTexture','_emissionTextureArray','1662502qdudSf','Color','_updateColorDictTable','_floor','MAX_VALUE','destroy','521697naRESH','VTiling','_emissionTexCoordSpeed','Cartesian2','_textureFilterMode'];const _0x30ea9b=_0x2d7b;(function(_0x3787e3,_0x6a9824){const _0x4b4c27=_0x2d7b;while(!![]){try{const _0x7802f3=parseInt(_0x4b4c27(0xea))+parseInt(_0x4b4c27(0xd7))+parseInt(_0x4b4c27(0xfb))*parseInt(_0x4b4c27(0xe7))+parseInt(_0x4b4c27(0x106))*-parseInt(_0x4b4c27(0x103))+parseInt(_0x4b4c27(0xf3))+-parseInt(_0x4b4c27(0x108))*-parseInt(_0x4b4c27(0xd1))+-parseInt(_0x4b4c27(0xf0));if(_0x7802f3===_0x6a9824)break;else _0x3787e3['push'](_0x3787e3['shift']());}catch(_0x24de1c){_0x3787e3['push'](_0x3787e3['shift']());}}}(_0x16e0,0xf1bf6));function _0x2d7b(_0x1fc7a7,_0x3e87bf){_0x1fc7a7=_0x1fc7a7-0xd0;let _0x16e009=_0x16e0[_0x1fc7a7];return _0x16e009;}function HypsometricSetting(){const _0x5627c4=_0x2d7b;this[_0x5627c4(0xe1)]=0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,this[_0x5627c4(0x100)]=-0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,this['_floor']=0x0,this[_0x5627c4(0x107)]=0x0,this['_opacity']=0x1,this[_0x5627c4(0xd3)]=![],this[_0x5627c4(0xe8)]=[],this[_0x5627c4(0xe2)]=0x64,this[_0x5627c4(0xf4)]=!![],this[_0x5627c4(0xe0)]=new Cesium[(_0x5627c4(0xd2))](0x0,0x1,0x1,0x1),this[_0x5627c4(0x10b)]=_0x1ad93e[_0x5627c4(0xdd)][_0x5627c4(0xff)],this[_0x5627c4(0xef)]=undefined,this['_emissionTextureUrl']='',this['_emissionTextureChanged']=![],this[_0x5627c4(0xd9)]=new Cesium[(_0x5627c4(0xda))](0x0,0x0),this[_0x5627c4(0x109)]=new Cesium[(_0x5627c4(0xda))](0x32,0x32),this['_emissionTextureArray']=[],this[_0x5627c4(0x10d)]=0x0,this[_0x5627c4(0xee)]=new Cesium[(_0x5627c4(0xd2))](0x1,0x1,0x1,0x1),this[_0x5627c4(0xdb)]=_0x1ad93e[_0x5627c4(0xf7)][_0x5627c4(0xfc)],this[_0x5627c4(0x101)]=Number[_0x5627c4(0xd5)],this['_visibleDistanceMin']=0x0,this[_0x5627c4(0x10a)]=0x0,this[_0x5627c4(0xde)]=Number[_0x5627c4(0xd5)];}Object[_0x30ea9b(0xe5)](HypsometricSetting[_0x30ea9b(0xe9)],{'MinVisibleValue':{'get':function(){const _0x174e04=_0x30ea9b;return this[_0x174e04(0x100)];},'set':function(_0x2fecde){this['_minVisibleValue']=_0x2fecde;}},'MaxVisibleValue':{'get':function(){const _0x5db707=_0x30ea9b;return this[_0x5db707(0xe1)];},'set':function(_0x48c875){const _0x34921e=_0x30ea9b;this[_0x34921e(0xe1)]=_0x48c875;}},'ColorTableMaxKey':{'get':function(){const _0x1f2fae=_0x30ea9b;return this[_0x1f2fae(0x107)];},'set':function(_0x32f174){const _0x5b89c8=_0x30ea9b;this[_0x5b89c8(0x107)]=_0x32f174;}},'ColorTableMinKey':{'get':function(){const _0x31ce41=_0x30ea9b;return this[_0x31ce41(0xd4)];},'set':function(_0x1a6bef){const _0x2696c3=_0x30ea9b;this[_0x2696c3(0xd4)]=_0x1a6bef;}},'ColorTable':{'get':function(){return this['_dictColorTable'];},'set':function(_0x37e79b){const _0x1ce6e3=_0x30ea9b;if(!Cesium[_0x1ce6e3(0xe3)](_0x37e79b)){Cesium[_0x1ce6e3(0xe3)](this['_dictColorTable'])&&(this[_0x1ce6e3(0xef)][_0x1ce6e3(0xd6)](),this['_dictColorTable']=null);return;}this[_0x1ce6e3(0xef)]=_0x37e79b,this[_0x1ce6e3(0xd3)]=!![];let _0x18638b=this[_0x1ce6e3(0xef)][_0x1ce6e3(0xf2)]();if(_0x18638b<0x1)return;let _0x485460=0x0,_0x58eb38=0x0,_0x43b738=this[_0x1ce6e3(0xef)][_0x1ce6e3(0xeb)](0x0);Cesium[_0x1ce6e3(0xe3)](_0x43b738)&&Cesium[_0x1ce6e3(0xe3)](_0x43b738[_0x1ce6e3(0x102)])&&(_0x485460=parseFloat(_0x43b738['altitude'])),_0x43b738=this[_0x1ce6e3(0xef)][_0x1ce6e3(0xeb)](_0x18638b-0x1),Cesium[_0x1ce6e3(0xe3)](_0x43b738)&&Cesium[_0x1ce6e3(0xe3)](_0x43b738[_0x1ce6e3(0x102)])&&(_0x58eb38=parseFloat(_0x43b738[_0x1ce6e3(0x102)])),this['_ceiling']=Math[_0x1ce6e3(0xed)](_0x485460,_0x58eb38),this[_0x1ce6e3(0xd4)]=Math['min'](_0x485460,_0x58eb38);}},'Opacity':{'get':function(){const _0x41c469=_0x30ea9b;return this[_0x41c469(0xf6)];},'set':function(_0x24213d){this['_opacity']=_0x24213d;}},'CoverageArea':{'get':function(){const _0x26a52e=_0x30ea9b;return this[_0x26a52e(0xe8)];},'set':function(_0x278564){const _0x58ec78=_0x30ea9b;this['_updatePolygon']=!![],this[_0x58ec78(0xe8)][_0x58ec78(0xfd)]=0x0;if(!Cesium[_0x58ec78(0xe3)](_0x278564))return;for(let _0x186bca=0x0;_0x186bca<_0x278564[_0x58ec78(0xfd)];_0x186bca++){this['_coverageArea'][_0x186bca]=_0x278564[_0x186bca];}}},'DisplayMode':{'get':function(){const _0x4cb59a=_0x30ea9b;return this[_0x4cb59a(0x10b)];},'set':function(_0x328b93){const _0x18d4be=_0x30ea9b;this[_0x18d4be(0x10b)]=_0x328b93;}},'LineColor':{'get':function(){const _0x35c588=_0x30ea9b;return this[_0x35c588(0xe0)];},'set':function(_0x1f2944){const _0x1a8376=_0x30ea9b;Cesium[_0x1a8376(0xd2)][_0x1a8376(0xf5)](_0x1f2944,this[_0x1a8376(0xe0)]);}},'LineInterval':{'get':function(){const _0x47e5c3=_0x30ea9b;return this[_0x47e5c3(0xe2)];},'set':function(_0x2c1435){this['_linesInterval']=_0x2c1435;}},'UpdateColorDictTable':{'get':function(){const _0x1cb61f=_0x30ea9b;return this[_0x1cb61f(0xd3)];},'set':function(_0x412a62){this['_updateColorDictTable']=_0x412a62;}},'UpdatePolygonRegion':{'get':function(){return this['_updatePolygon'];},'set':function(_0x5d8f3c){const _0x23bc86=_0x30ea9b;this[_0x23bc86(0xf4)]=_0x5d8f3c;}},'emissionTextureUrl':{'get':function(){const _0x1da2bf=_0x30ea9b;return this[_0x1da2bf(0xf9)];},'set':function(_0x445a3e){const _0x1b1d04=_0x30ea9b;this[_0x1b1d04(0xf9)]=_0x445a3e,this[_0x1b1d04(0xd0)]=[],this['_emissionTextureArray'][_0x1b1d04(0xfa)]({'url':_0x445a3e,'USpeed':this[_0x1b1d04(0xd9)]['x'],'VSpeed':this[_0x1b1d04(0xd9)]['y'],'UTiling':this['_emissionTexCoordScale']['x'],'VTiling':this[_0x1b1d04(0x109)]['y']}),this[_0x1b1d04(0xe6)]=!![],this[_0x1b1d04(0x10d)]=0x0;}},'emissionTexCoordUSpeed':{'get':function(){const _0x7e6e8f=_0x30ea9b;return this[_0x7e6e8f(0xd9)]['x'];},'set':function(_0x2035bd){const _0x4661d1=_0x30ea9b;Cesium[_0x4661d1(0xe3)](this[_0x4661d1(0xd0)])&&this[_0x4661d1(0xd0)]['length']>0x0&&(this[_0x4661d1(0xd0)][0x0]['USpeed']=_0x2035bd),this[_0x4661d1(0xd9)]['x']=_0x2035bd;}},'emissionTexCoordVSpeed':{'get':function(){const _0x5ec55a=_0x30ea9b;return this[_0x5ec55a(0xd9)]['y'];},'set':function(_0x556590){const _0x5caaa6=_0x30ea9b;Cesium['defined'](this['_emissionTextureArray'])&&this[_0x5caaa6(0xd0)][_0x5caaa6(0xfd)]>0x0&&(this[_0x5caaa6(0xd0)][0x0]['VSpeed']=_0x556590),this[_0x5caaa6(0xd9)]['y']=_0x556590;}},'emissionTexCoordScale':{'get':function(){const _0x34d583=_0x30ea9b;return this[_0x34d583(0x109)];},'set':function(_0x5b87b3){const _0x28e5fa=_0x30ea9b;Cesium[_0x28e5fa(0xe3)](this['_emissionTextureArray'])&&this[_0x28e5fa(0xd0)][_0x28e5fa(0xfd)]>0x0&&(this[_0x28e5fa(0xd0)][0x0][_0x28e5fa(0x10c)]=_0x5b87b3['x'],this[_0x28e5fa(0xd0)][0x0]['VTiling']=_0x5b87b3['y']),this[_0x28e5fa(0x109)]=_0x5b87b3;}},'emissionTextureArray':{'get':function(){const _0x8a60e3=_0x30ea9b;return this[_0x8a60e3(0xd0)];},'set':function(_0x21d1f3){const _0x4cd8c3=_0x30ea9b;this['_emissionTextureArray']=_0x21d1f3,this[_0x4cd8c3(0xe6)]=!![],this[_0x4cd8c3(0x10d)]=0x0;}},'noValueColor':{'get':function(){return this['_noValueColor'];},'set':function(_0x3d9463){const _0x41c29b=_0x30ea9b;if(!Cesium[_0x41c29b(0xe3)](_0x3d9463))return;this[_0x41c29b(0xee)]=Cesium[_0x41c29b(0xd2)][_0x41c29b(0xf5)](_0x3d9463,this[_0x41c29b(0xee)]);}},'filterMode':{'get':function(){return this['_textureFilterMode'];},'set':function(_0x103905){const _0x2bddc3=_0x30ea9b;this[_0x2bddc3(0xdb)]=_0x103905;}},'visibleDistanceMax':{'get':function(){const _0x5f0cc8=_0x30ea9b;return this[_0x5f0cc8(0x101)];},'set':function(_0x315b7c){this['_visibleDistanceMax']=_0x315b7c;}},'visibleDistanceMin':{'get':function(){const _0x206a54=_0x30ea9b;return this[_0x206a54(0xec)];},'set':function(_0x592b20){const _0x347730=_0x30ea9b;this[_0x347730(0xec)]=_0x592b20;}},'minVisibleAltitude':{'get':function(){const _0x558ed5=_0x30ea9b;return this[_0x558ed5(0x10a)];},'set':function(_0xc3fb48){const _0x108a09=_0x30ea9b;this[_0x108a09(0x10a)]=_0xc3fb48;}},'maxVisibleAltitude':{'get':function(){const _0x5177dc=_0x30ea9b;return this[_0x5177dc(0xde)];},'set':function(_0x195453){const _0x7182c9=_0x30ea9b;this[_0x7182c9(0xde)]=_0x195453;}}}),HypsometricSetting[_0x30ea9b(0xf5)]=function(_0x452498,_0x53f47b){const _0x2a90f4=_0x30ea9b;if(!_0x452498)return undefined;!_0x53f47b&&(_0x53f47b=new HypsometricSetting());_0x53f47b[_0x2a90f4(0xe1)]=_0x452498[_0x2a90f4(0xe1)],_0x53f47b[_0x2a90f4(0x100)]=_0x452498[_0x2a90f4(0x100)],_0x53f47b[_0x2a90f4(0xd4)]=_0x452498[_0x2a90f4(0xd4)],_0x53f47b['_ceiling']=_0x452498[_0x2a90f4(0x107)],_0x53f47b[_0x2a90f4(0xf6)]=_0x452498[_0x2a90f4(0xf6)],_0x53f47b[_0x2a90f4(0xd3)]=_0x452498[_0x2a90f4(0xd3)],_0x53f47b[_0x2a90f4(0xe2)]=_0x452498['_linesInterval'],_0x53f47b['_updatePolygon']=_0x452498[_0x2a90f4(0xf4)],_0x53f47b['_displayMode']=_0x452498[_0x2a90f4(0x10b)],_0x53f47b[_0x2a90f4(0xe0)]=Cesium['Color'][_0x2a90f4(0xf5)](_0x452498[_0x2a90f4(0xe0)],_0x53f47b['_lineColor']),_0x53f47b[_0x2a90f4(0xef)]=_0x452498[_0x2a90f4(0xef)],_0x53f47b[_0x2a90f4(0xd9)]=Cesium[_0x2a90f4(0xda)][_0x2a90f4(0xf5)](_0x452498[_0x2a90f4(0xd9)],_0x53f47b[_0x2a90f4(0xd9)]),_0x53f47b['_emissionTexCoordScale']=Cesium[_0x2a90f4(0xda)]['clone'](_0x452498['_emissionTexCoordScale'],_0x53f47b['_emissionTexCoordScale']),_0x53f47b[_0x2a90f4(0xf9)]=_0x452498[_0x2a90f4(0xf9)],_0x53f47b[_0x2a90f4(0xd0)]=_0x452498['_emissionTextureArray'],_0x53f47b[_0x2a90f4(0x10d)]=_0x452498[_0x2a90f4(0x10d)],_0x53f47b[_0x2a90f4(0xee)]=Cesium[_0x2a90f4(0xd2)][_0x2a90f4(0xf5)](_0x452498[_0x2a90f4(0xee)],_0x53f47b['_noValueColor']),_0x53f47b['_coverageArea'][_0x2a90f4(0xfd)]=0x0;for(let _0x12122d=0x0;_0x12122d<_0x452498['_coverageArea'][_0x2a90f4(0xfd)];_0x12122d++){_0x53f47b[_0x2a90f4(0xe8)][_0x12122d]=_0x452498[_0x2a90f4(0xe8)][_0x12122d];}return _0x53f47b['_textureFilterMode']=_0x452498[_0x2a90f4(0xdb)],_0x53f47b['_visibleDistanceMax']=_0x452498['_visibleDistanceMax'],_0x53f47b[_0x2a90f4(0xec)]=_0x452498[_0x2a90f4(0xec)],_0x53f47b[_0x2a90f4(0xde)]=_0x452498[_0x2a90f4(0xde)],_0x53f47b[_0x2a90f4(0x10a)]=_0x452498[_0x2a90f4(0x10a)],_0x53f47b;};let scratchTextureRects=[];HypsometricSetting['prototype'][_0x30ea9b(0xdc)]=function(){const _0x383710=_0x30ea9b;let _0x3269c0=this[_0x383710(0xe4)];if(!_0x3269c0)return scratchTextureRects;let _0x2dd526=this[_0x383710(0xd0)]['length'],_0x3da499;if(scratchTextureRects[_0x383710(0xfd)]!=_0x2dd526){scratchTextureRects=[];for(_0x3da499=0x0;_0x3da499<_0x2dd526;_0x3da499++){scratchTextureRects['push'](new Cartesian4());}}for(_0x3da499=0x0;_0x3da499<_0x2dd526;_0x3da499++){let _0x558225=this[_0x383710(0xd0)][_0x3da499],_0x9f74ee=_0x3269c0[_0x383710(0xf8)][_0x558225[_0x383710(0x105)]];_0x9f74ee&&(scratchTextureRects[_0x3da499]['x']=_0x9f74ee['x'],scratchTextureRects[_0x3da499]['y']=_0x9f74ee['y'],scratchTextureRects[_0x3da499]['z']=_0x9f74ee['x']+_0x9f74ee[_0x383710(0xf1)],scratchTextureRects[_0x3da499]['w']=_0x9f74ee['y']+_0x9f74ee[_0x383710(0xdf)]);}return scratchTextureRects;};let scratchTextureTilingsAndOffsets=[];HypsometricSetting[_0x30ea9b(0xe9)][_0x30ea9b(0xfe)]=function(){const _0x275b3e=_0x30ea9b;if(!this[_0x275b3e(0xd0)])return scratchTextureTilingsAndOffsets;let _0x19e595=this[_0x275b3e(0xd0)][_0x275b3e(0xfd)],_0x29612e;if(scratchTextureTilingsAndOffsets['length']!=_0x19e595){scratchTextureTilingsAndOffsets=[];for(_0x29612e=0x0;_0x29612e<_0x19e595;_0x29612e++){scratchTextureTilingsAndOffsets[_0x275b3e(0xfa)](new Cartesian4());}}let _0x571aea=performance['now']()/0x3e8;for(_0x29612e=0x0;_0x29612e<_0x19e595;_0x29612e++){let _0x4dd201=this[_0x275b3e(0xd0)][_0x29612e];scratchTextureTilingsAndOffsets[_0x29612e]['x']=_0x4dd201[_0x275b3e(0x10c)],scratchTextureTilingsAndOffsets[_0x29612e]['y']=_0x4dd201[_0x275b3e(0xd8)],scratchTextureTilingsAndOffsets[_0x29612e]['z']=_0x4dd201[_0x275b3e(0x104)]*_0x571aea,scratchTextureTilingsAndOffsets[_0x29612e]['w']=_0x4dd201['VSpeed']*_0x571aea;}return scratchTextureTilingsAndOffsets;},HypsometricSetting[_0x30ea9b(0xe9)][_0x30ea9b(0xd6)]=function(){const _0xbf5ed9=_0x30ea9b;this[_0xbf5ed9(0xe8)]['length']=0x0,this[_0xbf5ed9(0xef)]=this['_dictColorTable']&&this[_0xbf5ed9(0xef)][_0xbf5ed9(0xd6)]();};

    var _0x80e8=['bounds','regions','2201kQAaSf','5761ookgbD','textureWidth','54ZdxOqt','destroy','texture','12910vGAEjv','38QRdUHl','158845iVzXaU','fbo','240790asVsXl','prototype','569JKOBTG','isDestroyed','8iZVlej','Cartesian4','4593dTYdbt','278ySIUZn','1uDMOVu','isUpdate','flattening'];function _0x2e64(_0x5719c5,_0x348c21){_0x5719c5=_0x5719c5-0x64;var _0x80e8b3=_0x80e8[_0x5719c5];return _0x80e8b3;}var _0x504ccc=_0x2e64;(function(_0xbe177a,_0x2d8a92){var _0x1d799b=_0x2e64;while(!![]){try{var _0x24cc8e=parseInt(_0x1d799b(0x6e))*-parseInt(_0x1d799b(0x73))+parseInt(_0x1d799b(0x6c))+-parseInt(_0x1d799b(0x6a))*parseInt(_0x1d799b(0x74))+-parseInt(_0x1d799b(0x69))*parseInt(_0x1d799b(0x72))+parseInt(_0x1d799b(0x68))*parseInt(_0x1d799b(0x70))+-parseInt(_0x1d799b(0x79))+parseInt(_0x1d799b(0x65))*parseInt(_0x1d799b(0x7a));if(_0x24cc8e===_0x2d8a92)break;else _0xbe177a['push'](_0xbe177a['shift']());}catch(_0x3719b5){_0xbe177a['push'](_0xbe177a['shift']());}}}(_0x80e8,0x2767a));function Flatten(){var _0x5ad0c2=_0x2e64;this[_0x5ad0c2(0x64)]=0x400,this['textureHeight']=0x400,this[_0x5ad0c2(0x77)]=new Cesium[(_0x5ad0c2(0x71))](),this['texture']=undefined,this[_0x5ad0c2(0x6b)]=undefined,this[_0x5ad0c2(0x78)]=new Cesium['AssociativeArray'](),this[_0x5ad0c2(0x75)]=![],this[_0x5ad0c2(0x76)]=![];}Flatten[_0x504ccc(0x6d)][_0x504ccc(0x6f)]=function(){return ![];},Flatten[_0x504ccc(0x6d)]['destroy']=function(){var _0x1c86c4=_0x504ccc;this[_0x1c86c4(0x67)]=this['texture']&&this['texture'][_0x1c86c4(0x66)](),this[_0x1c86c4(0x6b)]=this[_0x1c86c4(0x6b)]&&this[_0x1c86c4(0x6b)]['destroy'](),this[_0x1c86c4(0x78)]['removeAll']();};

    var _0x14fb=['1SyTLAi','17285wTsTbp','136291HgATtI','9003JebBqP','27fUEbXg','175380CbuHYz','312308lsdLwT','58050zMlugA','200323Wyqnbw'];(function(_0x242dc2,_0x30e0d1){var _0x3a751f=_0x316a;while(!![]){try{var _0x451018=-parseInt(_0x3a751f(0x80))*-parseInt(_0x3a751f(0x7f))+-parseInt(_0x3a751f(0x85))+parseInt(_0x3a751f(0x81))+-parseInt(_0x3a751f(0x7d))+parseInt(_0x3a751f(0x82))+-parseInt(_0x3a751f(0x83))*-parseInt(_0x3a751f(0x84))+parseInt(_0x3a751f(0x7e));if(_0x451018===_0x30e0d1)break;else _0x242dc2['push'](_0x242dc2['shift']());}catch(_0x5d7b6d){_0x242dc2['push'](_0x242dc2['shift']());}}}(_0x14fb,0x28dae));function _0x316a(_0x3030fd,_0x359d1b){_0x3030fd=_0x3030fd-0x7d;var _0x14fb19=_0x14fb[_0x3030fd];return _0x14fb19;}var _0x316ed7 = '\x0aattribute\x20vec4\x20aPosition;\x0auniform\x20vec4\x20uRect;\x0a#ifdef\x20Mode_Height\x0avarying\x20float\x20vHeight;\x0a#endif\x0a\x0avoid\x20main()\x0a{\x0a\x20\x20\x20vec4\x20vPos\x20=\x20aPosition;\x0a\x20\x20\x20vec2\x20bounds\x20=\x20uRect.zw\x20-\x20uRect.xy;\x0a\x20\x20\x20vPos.xy\x20=\x20(vPos.xy\x20-\x20uRect.xy)\x20/\x20bounds.xy\x20*\x202.0\x20-\x201.0;\x0a\x20\x20\x20gl_Position\x20=\x20vec4(vPos.xy,\x200.5,\x201.0);\x0a#ifdef\x20Mode_Height\x0a\x20\x20\x20vHeight\x20=\x20vPos.z;\x0a#endif\x0a}';

    var _0x10f1=['\x0a#ifdef\x20Mode_Height\x0avarying\x20float\x20vHeight;\x0avec4\x20packValue(float\x20value)\x0a{\x0a\x20\x20\x20\x20float\x20SHIFT_LEFT8\x20=\x20256.0;\x0a\x09float\x20SHIFT_RIGHT8\x20=\x201.0\x20/\x20256.0;\x0a\x09vec4\x20result;\x0a\x09result.a\x20=\x20255.0;\x0a\x09float\x20fPos\x20=\x20abs(value\x20+\x209000.0)\x20*\x20SHIFT_RIGHT8;\x0a\x09result.b\x20=\x20(fPos\x20-\x20floor(fPos))\x20*\x20SHIFT_LEFT8;\x0a\x09fPos\x20=\x20floor(fPos)\x20*\x20SHIFT_RIGHT8;\x0a\x09result.g\x20=\x20(fPos\x20-\x20floor(fPos))\x20*\x20SHIFT_LEFT8;\x0a\x09result.r\x20=\x20floor(fPos);\x0a\x09result\x20/=\x20255.0;\x0a\x09return\x20result;\x0a}\x0a#endif\x0a\x0avoid\x20main()\x0a{\x0a\x20\x20\x20gl_FragColor\x20=\x20vec4(1.0);\x0a#ifdef\x20Mode_Height\x0a\x20\x20\x20gl_FragColor\x20=\x20packValue(vHeight);\x0a#endif\x0a}','188605gbeoBf','1Qfqqja','1112EvWJDK','510667bKmHYX','308862mYNDCE','219821JasePA','1267sJwaph','58814kLQpul','511185kadEBl','6sMLvuZ'];function _0x4287(_0x454db8,_0x21f371){_0x454db8=_0x454db8-0x1ea;var _0x10f1d1=_0x10f1[_0x454db8];return _0x10f1d1;}var _0x11cae5=_0x4287;(function(_0x39117b,_0x2e173c){var _0x3e786d=_0x4287;while(!![]){try{var _0x1ee4d3=parseInt(_0x3e786d(0x1ea))+-parseInt(_0x3e786d(0x1eb))*-parseInt(_0x3e786d(0x1f4))+parseInt(_0x3e786d(0x1f1))+-parseInt(_0x3e786d(0x1ed))+-parseInt(_0x3e786d(0x1f2))*-parseInt(_0x3e786d(0x1ee))+parseInt(_0x3e786d(0x1f0))+parseInt(_0x3e786d(0x1f3))*-parseInt(_0x3e786d(0x1ef));if(_0x1ee4d3===_0x2e173c)break;else _0x39117b['push'](_0x39117b['shift']());}catch(_0x330dc3){_0x39117b['push'](_0x39117b['shift']());}}}(_0x10f1,0x4aaf6));var _0x3c5eb4 = _0x11cae5(0x1ec);

    const _0x3a74=['6QqpROM','updateGeometry','heightBuffer','11gOgGMI','prototype','Matrix4','destroy','1030155yOShMr','fromGeometry','Cartesian4','bounds','position','1VGQdUq','push','BoundingRectangle','command','MAX_VALUE','796713upFUOF','framebuffer','TRIANGLES','8pSWxOf','min','height','length','88343YJXKHf','geometry','VertexArray','isDestroyed','colorBuffer','values','Cartesian3','vertexArray','createCommand','11489WvDSqf','DrawCommand','17684ImmTlJ','669928KwaQCd','fromCache','max','shaderProgram','69972THplIU','_command','defines','updateGeoBounds','ShaderSource','STATIC_DRAW','PrimitiveType','attributes','width'];const _0x54dbb9=_0x30a0;(function(_0x54783e,_0x322992){const _0x27a642=_0x30a0;while(!![]){try{const _0x4c42b0=parseInt(_0x27a642(0x129))+parseInt(_0x27a642(0x112))*parseInt(_0x27a642(0x117))+parseInt(_0x27a642(0x137))*parseInt(_0x27a642(0x12e))+-parseInt(_0x27a642(0x12a))+-parseInt(_0x27a642(0x11e))*-parseInt(_0x27a642(0x13a))+-parseInt(_0x27a642(0x13e))+-parseInt(_0x27a642(0x127))*-parseInt(_0x27a642(0x11a));if(_0x4c42b0===_0x322992)break;else _0x54783e['push'](_0x54783e['shift']());}catch(_0x1e3a17){_0x54783e['push'](_0x54783e['shift']());}}}(_0x3a74,0x91f47));function RasterRegion(){const _0x15520c=_0x30a0;this[_0x15520c(0x110)]=new Cesium[(_0x15520c(0x140))](Number['MAX_VALUE'],Number['MAX_VALUE'],-Number[_0x15520c(0x116)],-Number[_0x15520c(0x116)]),this['command']=undefined,this[_0x15520c(0x11f)]=undefined,this[_0x15520c(0x139)]=undefined,this[_0x15520c(0x122)]=undefined;}let scratchCatesian3=new Cesium[(_0x54dbb9(0x124))]();RasterRegion['prototype'][_0x54dbb9(0x138)]=function(_0x1dbef5,_0x1ac4dd){const _0x41ebf8=_0x54dbb9;let _0x4a4abd=_0x1dbef5[_0x41ebf8(0x135)][_0x41ebf8(0x111)],_0x471cb4=_0x4a4abd[_0x41ebf8(0x123)];for(let _0x413000=0x0,_0x4d1c94=_0x471cb4[_0x41ebf8(0x11d)];_0x413000<_0x4d1c94;_0x413000+=0x3){scratchCatesian3['x']=_0x471cb4[_0x413000],scratchCatesian3['y']=_0x471cb4[_0x413000+0x1],scratchCatesian3['z']=_0x471cb4[_0x413000+0x2],Cesium[_0x41ebf8(0x13c)]['multiplyByPoint'](_0x1ac4dd,scratchCatesian3,scratchCatesian3),_0x471cb4[_0x413000]=scratchCatesian3['x'],_0x471cb4[_0x413000+0x1]=scratchCatesian3['y'],_0x471cb4[_0x413000+0x2]=scratchCatesian3['z'];}this['geometry']=_0x1dbef5;},RasterRegion[_0x54dbb9(0x13b)][_0x54dbb9(0x131)]=function(_0x26aee8){const _0x2a5b61=_0x54dbb9;let _0x106a60=_0x26aee8['attributes'][_0x2a5b61(0x111)],_0x2649e6=_0x106a60[_0x2a5b61(0x123)],_0x37f4c2=this[_0x2a5b61(0x110)];for(let _0x513a2e=0x0,_0x42709f=_0x2649e6[_0x2a5b61(0x11d)];_0x513a2e<_0x42709f;_0x513a2e+=0x3){let _0x42e9d0=_0x2649e6[_0x513a2e],_0x1ee3e8=_0x2649e6[_0x513a2e+0x1];_0x37f4c2['x']=Math[_0x2a5b61(0x11b)](_0x42e9d0,_0x37f4c2['x']),_0x37f4c2['y']=Math[_0x2a5b61(0x11b)](_0x1ee3e8,_0x37f4c2['y']),_0x37f4c2['z']=Math[_0x2a5b61(0x12c)](_0x42e9d0,_0x37f4c2['z']),_0x37f4c2['w']=Math[_0x2a5b61(0x12c)](_0x1ee3e8,_0x37f4c2['w']);}},RasterRegion[_0x54dbb9(0x13b)][_0x54dbb9(0x126)]=function(_0x5dd208,_0x3a8b17){const _0x2c2976=_0x54dbb9;if(this['command'])return;let _0x2cbecb=_0x3a8b17['getColorTexture'](0x0),_0x5d2a7a=new Cesium[(_0x2c2976(0x128))]({'primitiveType':Cesium[_0x2c2976(0x134)][_0x2c2976(0x119)]}),_0x4266e0={'position':0x0};_0x5d2a7a['vertexArray']=Cesium[_0x2c2976(0x120)][_0x2c2976(0x13f)]({'context':_0x5dd208,'geometry':this[_0x2c2976(0x11f)],'attributeLocations':_0x4266e0,'bufferUsage':Cesium['BufferUsage'][_0x2c2976(0x133)],'interleave':!![]});let _0xc89964=new Cesium[(_0x2c2976(0x132))]({'sources':[_0x316ed7]}),_0x15c53d=new Cesium[(_0x2c2976(0x132))]({'sources':[_0x3c5eb4]});_0xc89964[_0x2c2976(0x130)][_0x2c2976(0x113)]('Mode_Height'),_0x15c53d['defines'][_0x2c2976(0x113)]('Mode_Height'),_0x5d2a7a['shaderProgram']=Cesium['ShaderProgram'][_0x2c2976(0x12b)]({'context':_0x5dd208,'vertexShaderSource':_0xc89964,'fragmentShaderSource':_0x15c53d,'attributeLocations':_0x4266e0}),_0x5d2a7a[_0x2c2976(0x118)]=_0x3a8b17,_0x5d2a7a['renderState']=Cesium['RenderState'][_0x2c2976(0x12b)]({'viewport':new Cesium[(_0x2c2976(0x114))](0x0,0x0,_0x2cbecb[_0x2c2976(0x136)],_0x2cbecb[_0x2c2976(0x11c)])}),this[_0x2c2976(0x115)]=_0x5d2a7a;},RasterRegion[_0x54dbb9(0x13b)][_0x54dbb9(0x13d)]=function(){const _0x4a8241=_0x54dbb9;this[_0x4a8241(0x12f)]&&(this[_0x4a8241(0x12f)][_0x4a8241(0x125)]=this['_command']['vertexArray']&&!this[_0x4a8241(0x12f)][_0x4a8241(0x125)][_0x4a8241(0x121)]()&&this[_0x4a8241(0x12f)][_0x4a8241(0x125)][_0x4a8241(0x13d)](),this[_0x4a8241(0x12f)][_0x4a8241(0x12d)]=this[_0x4a8241(0x12f)][_0x4a8241(0x12d)]&&!this[_0x4a8241(0x12f)]['shaderProgram']['isDestroyed']()&&this['_command'][_0x4a8241(0x12d)][_0x4a8241(0x13d)](),this[_0x4a8241(0x12f)]=null),this[_0x4a8241(0x122)]=this[_0x4a8241(0x122)]&&this['colorBuffer'][_0x4a8241(0x13d)](),this['heightBuffer']=this[_0x4a8241(0x139)]&&this[_0x4a8241(0x139)][_0x4a8241(0x13d)](),this[_0x4a8241(0x11f)]=null,this[_0x4a8241(0x110)]=null;};function _0x30a0(_0x598440,_0x257f45){_0x598440=_0x598440-0x110;let _0x3a74de=_0x3a74[_0x598440];return _0x3a74de;}

    const _0x1632=['_queue','enqueue','Queue','545216MmLSwU','1aWLUVH','prototype','158ApJdSv','get','_cache','byteLength','673979cloEIA','contains','getSingleInstance','dequeue','917885Sswdsk','buffer','defined','4957aUueJA','508177jdiqdo','2922781xDllTX','_singleInstance','574659FqPxWE'];const _0x554810=_0x4634;function _0x4634(_0x146323,_0x415c1c){_0x146323=_0x146323-0x133;let _0x16320c=_0x1632[_0x146323];return _0x16320c;}(function(_0x41cd81,_0x4c465e){const _0x5b49c2=_0x4634;while(!![]){try{const _0x41c3c0=parseInt(_0x5b49c2(0x13b))*-parseInt(_0x5b49c2(0x140))+-parseInt(_0x5b49c2(0x137))*-parseInt(_0x5b49c2(0x142))+-parseInt(_0x5b49c2(0x13f))+-parseInt(_0x5b49c2(0x146))+-parseInt(_0x5b49c2(0x138))+-parseInt(_0x5b49c2(0x134))+parseInt(_0x5b49c2(0x139));if(_0x41c3c0===_0x4c465e)break;else _0x41cd81['push'](_0x41cd81['shift']());}catch(_0x1f0964){_0x41cd81['push'](_0x41cd81['shift']());}}}(_0x1632,0x76ab7));function S3MBlockCache(){const _0x2f7185=_0x4634;this[_0x2f7185(0x144)]={},this[_0x2f7185(0x13c)]=new Cesium[(_0x2f7185(0x13e))]();}let _cacheSize$1=0x0;const _cacheSizeThrottle=0x64*0x400*0x400;S3MBlockCache[_0x554810(0x141)]['set']=function(_0x2bd832,_0x4cbbb6,_0x113e6f){const _0x5336bf=_0x554810;let _0x51294e=_0x2bd832+'_'+_0x4cbbb6;if(this[_0x5336bf(0x144)][_0x51294e])return;this['_cache'][_0x51294e]={'id':_0x51294e,'buffer':_0x113e6f},this['_queue'][_0x5336bf(0x13d)](_0x51294e),_cacheSize$1+=_0x113e6f[_0x5336bf(0x145)];while(_cacheSize$1>_cacheSizeThrottle){let _0x17d28f=this[_0x5336bf(0x13c)][_0x5336bf(0x133)](),_0x49b2fa=this[_0x5336bf(0x144)][_0x17d28f];_cacheSize$1-=_0x49b2fa[_0x5336bf(0x135)][_0x5336bf(0x145)],delete this['_cache'][_0x17d28f];}},S3MBlockCache[_0x554810(0x141)][_0x554810(0x143)]=function(_0x7aa2cc,_0x277250){const _0x1280ac=_0x554810;let _0x4ad443=_0x7aa2cc+'_'+_0x277250,_0x106675=this[_0x1280ac(0x144)][_0x4ad443];if(!_0x106675)return undefined;return _0x106675['buffer'];},S3MBlockCache[_0x554810(0x141)][_0x554810(0x147)]=function(_0x3cc283,_0xb61a90){const _0x2e6f01=_0x554810;let _0x59b79d=_0x3cc283+'_'+_0xb61a90;return Cesium[_0x2e6f01(0x136)](this[_0x2e6f01(0x144)][_0x59b79d]);},S3MBlockCache[_0x554810(0x13a)]=undefined,S3MBlockCache[_0x554810(0x148)]=function(){const _0x3557f8=_0x554810;return !S3MBlockCache['_singleInstance']&&(S3MBlockCache[_0x3557f8(0x13a)]=new S3MBlockCache()),S3MBlockCache[_0x3557f8(0x13a)];};

    const _0x11c8=['_isS3MBlock','fbo','_position','MAX_VALUE','s3m:FileType','ids','_isTransparencyOptimization','RESET','inverse','Name','setOnlyObjsVisible\x20isVisible','_subTextureManager','_maximumMemoryUsage','regions','51801ATtqDf','_createRasterRegion','_visibleDistanceMax','fromTranslation','setCustomClipPlane','EMPTY_OBJECT','Check','5ubWhkB','transpose','_visibleViewport','Extensions','number','addFlattenRegion','_waterParameters','clip','resolve','modelMatrix','newFrame','_readyPromise','hypsometricSetting','fData','fetchXML','isS3MB','HeadingPitchRoll','_objsVisibleMap','IDENTITY','_edgeCurrentTotalLength','setObjsColor\x20ids','the\x20index\x20is\x200~3','fromElements','left','setOnlyObjsVisible\x20ids','minVisibleDistance','min\x20visible\x20distance','DeveloperError','_minHeight','Transforms','1710914QyPigL','fetchJson','defer','width','_minCategory','set\x20Objs\x20Operation\x20ids','Bottom','bounds','_edgeDistanceFalloffFactor','extensions','computeVisibility','renderEntities','PolygonGeometry','_sceneMode','Left','unloadBlockTiles','getSelection','HeightRange','AutoConstants','MinY','set\x20Objs\x20Operation\x20operationType','units','GeographicProjection','ConstType','typeOf','update','FData','add','_maxHeight','4550077XIWYWa','inverseViewMatrix','_lodRangeScale','getBaseUri','_maximumPriority','_maxCategory','SceneMode','665482FovFRo','MinX','queryFirstNode','.water','geoBounds','_objsColorList','setSelection','flatten','_imageBuffer','setLodRangeScale','gpuConstants','Framebuffer','constType','isS3MBlock','_enableClipPlane','_selectedColor','FileName','_hash','position','setObjsColor','_swipeRegion','_minVisibleAltitude','PhysicalIndex','_baseResource','max\x20visible\x20altitude','hasOwnProperty','unpack','positionCartographic','Radius','_minWValue','releaseSelection','right','_rootTiles','_updateObjsColor','pick','_removeObjsOperationType','multiViewportIndex','the\x20index\x20is\x200~8','_oriClipPlane','_enableClip','updateObjsColor','TRANSPARENT','setting','_processTiles','Ellipsoid','_url','namespace','postPassesUpdate','copyFrom','when','Index','SCENE3D','updateAllObjsVisible','command','Files','SetColor','project','_clipMode','swipeRegion\x20must\x20be\x20a\x20instance\x20of\x20BoundingRectangle.','_visibleDistanceMin','heightRange','destroy','createGuid','fromHeadingPitchRoll','Meter','AverageHeight','prePassesUpdate','TRUE','multiple','_allObjsHide','textureHeight','OUTSIDE','camera','ready','_objsOperationList','MaxZ','s3mblock','MinHeight','max\x20visible\x20distance','set','_requestTiles','MaxY','Excepted\x20S3MTilesLayer.subdomains\x20to\x20be\x20type\x20of\x20Array.','requestContent','push','texture','509PnqkSU','226020wmgtbo','textureWidth','setCustomClipBox','Cartesian4','_objsHideList','rss','_blockCache','fileType','CenterX','33mklmRL','normalize','isRootTile','eastNorthUpToFixedFrame','_maxWValue','HIDE','TransparencyOptimization','value','bool','defineProperties','_waterPlanes','_updateEdgeDistanceFalloffFactor','COLUMBUS_VIEW','flattening','analysisMode','MinZ','Bounds','Multiple','removeObjsColor\x20ids','textContent','_basePath','abs','Cartographic','clip_behind_any_plane','ParamType','fromDegreesArrayHeights','_multiChoose','Version','Cartesian2','center','all','ellipsoid','height','createCommand','_clipPlane','_maxVisibleAltitude','_isS3MB','reset','priority','CenterZ','defaultValue','headingPitchRollToFixedFrame','url','_edgeCurrentCount','_selectedTiles','getDerivedResource','values','AssociativeArray','context','Top','BoundingSphere','_tranverseRenderEntity','index','prototype','MaxX','ArrayFloat','bottom','AutoConstantEntry','Matrix4','attachFiles','indexOf','destroyObject','s3m:TransparencyOptimization','cross','min\x20visible\x20altitude','updateGeoBounds','map','min','clipMode','setSelection\x20ids','otherwise','_objsVisibleList','radius','GpuConstants','_swipeEnabled','planeNormal','clip_behind_all_plane','blockKey','queryNumericValue','setOnlyObjsVisible','removeObjsColor','_setObjsOperationType','elementCount','remove','heightOffset','name','ColorTable','invModelMatrix','top','reject','multiplyByVector','dimensions','isUpdate','_Water','_updateObjsOperation','AnalysisRegionMode','createIfNeeded','wDescript','_rectangle','ClearCommand','updateGeometry','arrayFloat','clone','processRequests','_schuduler','firstChild','setObjsColor\x20color','generateBuffer','paramType','ONLY_KEEP_LINE','OSGBCacheFile_Water','_style3D','Data','getVisibleInViewport','fromCache','arraySize','_totalMemoryUsageInBytes','brdfLutGenerator','fromDegrees','maxVisibleAltitude','pop','addWaterPlane','ElementCount','Intersect','subdomains','setVisibleInViewport','loadConfig','swipe','framebuffer','length','getExtensionFromUri','_visible','Texture','_updateFlattenFramebuffer','CLIP_BEHIND_ALL_PLANE','distance','get','max','_selections','WGS84','CLIP_BEHIND_ANY_PLANE','visible','Rectangle','WaterEffect','_updateAllObjsVisible','isArray','Cartesian3','queryNodes','removeAll','replace','tiles','object','atuoConstants','options.context','region','762510zMGgNL','gpuProgramParameters','_hypsometric','_flattenPar','GpuConstantDefinition','FileType','BoundingBox','renderTexture','PixelFormat','subtract','lodRangeScale','defined','queryStringValue','MaxHeight','planePos','_selectEnabled','setTranslation','heading','sort','RGBA','getSingleInstance','style3D','Color','.s3m','_subdomainConfig','cartesianToCartographic','_cache','_materialManager','isUseHypColorTable','then','averageHeight','SELECTED','curDis','2023kDoTiR','BoundingRectangle'];const _0x391533=_0x1210;(function(_0x97b16f,_0x33b2b9){const _0x1bb86e=_0x1210;while(!![]){try{const _0x2e8986=parseInt(_0x1bb86e(0x209))*parseInt(_0x1bb86e(0x2cf))+-parseInt(_0x1bb86e(0x2ae))+-parseInt(_0x1bb86e(0x2e6))*-parseInt(_0x1bb86e(0x20a))+parseInt(_0x1bb86e(0x213))*parseInt(_0x1bb86e(0x2df))+parseInt(_0x1bb86e(0x304))+parseInt(_0x1bb86e(0x1b3))+-parseInt(_0x1bb86e(0x1ac));if(_0x2e8986===_0x33b2b9)break;else _0x97b16f['push'](_0x97b16f['shift']());}catch(_0x24939e){_0x97b16f['push'](_0x97b16f['shift']());}}}(_0x11c8,0xe3cb9));var transform_2d=new Cesium[(_0x391533(0x24d))](0x0,0x0,0x1,0x0,0x1,0x0,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x0,0x0,0x1);function S3MTilesLayer(_0x17b51d){const _0x2f473b=_0x391533;_0x17b51d=Cesium[_0x2f473b(0x23b)](_0x17b51d,Cesium[_0x2f473b(0x23b)][_0x2f473b(0x2e4)]),Cesium[_0x2f473b(0x2e5)]['defined'](_0x2f473b(0x2ac),_0x17b51d['context']),Cesium[_0x2f473b(0x2e5)][_0x2f473b(0x2b9)]('Authentication\x20error',_0x17b51d[_0x2f473b(0x20f)]),this['id']=Cesium[_0x2f473b(0x1f1)](),this[_0x2f473b(0x268)]=_0x17b51d[_0x2f473b(0x268)],this['context']=_0x17b51d['context'],this[_0x2f473b(0x237)]=Cesium['defaultValue'](_0x17b51d[_0x2f473b(0x2f5)],!![]),this['_isS3MBlock']=Cesium['defaultValue'](_0x17b51d[_0x2f473b(0x1c0)],![]),this['_url']=undefined,this[_0x2f473b(0x227)]=undefined,this[_0x2f473b(0x1ca)]=undefined,this['modelMatrix']=new Cesium['Matrix4'](),this['invModelMatrix']=new Cesium['Matrix4'](),this[_0x2f473b(0x211)]=undefined,this[_0x2f473b(0x2d3)]=undefined,this['_rectangle']=undefined,this['_rootTiles']=[],this[_0x2f473b(0x27b)]=new S3MLayerScheduler(),this[_0x2f473b(0x203)]=[],this['_processTiles']=[],this['_selectedTiles']=[],this[_0x2f473b(0x2c8)]=new S3MLayerCache(),this[_0x2f473b(0x2dd)]=-0x1,this[_0x2f473b(0x287)]=0x0,this[_0x2f473b(0x1b0)]={'foveatedFactor':-Number[_0x2f473b(0x2d4)],'depth':-Number['MAX_VALUE'],'distance':-Number[_0x2f473b(0x2d4)],'pixel':-Number['MAX_VALUE']},this['_minimumPriority']={'foveatedFactor':Number[_0x2f473b(0x2d4)],'depth':Number['MAX_VALUE'],'distance':Number[_0x2f473b(0x2d4)],'pixel':Number[_0x2f473b(0x2d4)]},this[_0x2f473b(0x2f1)]=Cesium['when'][_0x2f473b(0x306)](),this['_selectEnabled']=Cesium[_0x2f473b(0x23b)](_0x17b51d['selectEnabled'],!![]),this[_0x2f473b(0x22d)]=![],this[_0x2f473b(0x19c)]=Cesium[_0x2f473b(0x23b)](_0x17b51d['sceneMode'],Cesium['SceneMode']['SCENE3D']),this[_0x2f473b(0x29d)]=[],this[_0x2f473b(0x1c2)]=new Cesium[(_0x2f473b(0x2c4))](0.7,0.7,0x1,0x1),this[_0x2f473b(0x1fd)]=new Cesium[(_0x2f473b(0x242))](),this[_0x2f473b(0x25a)]=new Cesium[(_0x2f473b(0x242))](),this[_0x2f473b(0x20e)]=new Cesium[(_0x2f473b(0x242))](),this['_objsVisibleMap']={},this[_0x2f473b(0x1b8)]={},this[_0x2f473b(0x1f8)]=![],this[_0x2f473b(0x1ec)]=_0x4928db['CLIP_NOTHING'],this['_enableClip']=![],this[_0x2f473b(0x1c1)]=![],this[_0x2f473b(0x235)]=[new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0),new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0),new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0),new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0),new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0),new Cesium['Cartesian4'](0x0,0x0,0x0,0x0)],this[_0x2f473b(0x1d9)]=[new Cesium['Cartesian4'](0x0,0x0,0x0,0x0),new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0),new Cesium['Cartesian4'](0x0,0x0,0x0,0x0),new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0),new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0),new Cesium[(_0x2f473b(0x20d))](0x0,0x0,0x0,0x0)],this[_0x2f473b(0x2b0)]=new Hypsometric({}),this['_flattenPar']=new Flatten(),this[_0x2f473b(0x193)]=0x0,this[_0x2f473b(0x1b1)]=0x0,this['_minHeight']=0x0,this['_maxHeight']=0x0,this[_0x2f473b(0x1c7)]=new Cesium['Cartesian4'](0x0,0x0,0x1,0x1),this['_swipeEnabled']=![],this[_0x2f473b(0x2e1)]=Cesium[_0x2f473b(0x23b)](_0x17b51d['maxVisibleDistance'],Number[_0x2f473b(0x2d4)]),this[_0x2f473b(0x1ee)]=Cesium['defaultValue'](_0x17b51d[_0x2f473b(0x2ff)],0x0),this[_0x2f473b(0x1c8)]=Cesium[_0x2f473b(0x23b)](_0x17b51d['minVisibleAltitude'],0x0),this[_0x2f473b(0x236)]=Cesium[_0x2f473b(0x23b)](_0x17b51d[_0x2f473b(0x28a)],Number[_0x2f473b(0x2d4)]),this[_0x2f473b(0x1ae)]=Cesium[_0x2f473b(0x23b)](_0x17b51d[_0x2f473b(0x2b8)],0x1),this[_0x2f473b(0x296)]=Cesium[_0x2f473b(0x23b)](_0x17b51d['visible'],!![]),this['_style3D']=Cesium[_0x2f473b(0x23b)](_0x17b51d[_0x2f473b(0x2c3)],new Style3D()),this['_isTransparencyOptimization']=![],this[_0x2f473b(0x2e8)]=0xfff,this['_waterParameters']=undefined,this[_0x2f473b(0x21d)]=undefined,this[_0x2f473b(0x197)]=0x0,this[_0x2f473b(0x2f9)]=0x0,this['_edgeCurrentCount']=0x0,this[_0x2f473b(0x210)]=S3MBlockCache[_0x2f473b(0x2c2)](),this[_0x2f473b(0x2c9)]=undefined,this[_0x2f473b(0x2dc)]=undefined,this[_0x2f473b(0x2c6)]=Cesium[_0x2f473b(0x23b)](_0x17b51d['subdomainConfig'],{}),this[_0x2f473b(0x291)](_0x17b51d[_0x2f473b(0x23d)]);}Object[_0x391533(0x21c)](S3MTilesLayer[_0x391533(0x248)],{'ready':{'get':function(){const _0x2acd99=_0x391533;if(this[_0x2acd99(0x211)]===_0x2acd99(0x281))return this[_0x2acd99(0x2ec)]!==undefined&&this['_rootTiles'][_0x2acd99(0x294)]>0x0;return this[_0x2acd99(0x1d3)][_0x2acd99(0x294)]>0x0;}},'readyPromise':{'get':function(){const _0x2d692b=_0x391533;return this[_0x2d692b(0x2f1)];}},'visible':{'get':function(){return this['_visible'];},'set':function(_0x691411){const _0x2eef52=_0x391533;this[_0x2eef52(0x296)]=_0x691411;}},'show':{'get':function(){return this['_visible'];},'set':function(_0x2011ee){const _0x85221=_0x391533;this[_0x85221(0x296)]=_0x2011ee;}},'style3D':{'get':function(){const _0x2d12cf=_0x391533;return this[_0x2d12cf(0x282)];}},'rectangle':{'get':function(){const _0x5212ef=_0x391533;return this[_0x5212ef(0x275)];}},'totalMemoryUsageInBytes':{'get':function(){const _0x3fe685=_0x391533;return this[_0x3fe685(0x287)];},'set':function(_0x3c363e){const _0x27bc2f=_0x391533;this[_0x27bc2f(0x287)]=_0x3c363e;}},'maximumMemoryUsage':{'get':function(){return this['_maximumMemoryUsage'];},'set':function(_0x3f3a05){this['_maximumMemoryUsage']=_0x3f3a05;}},'lodRangeScale':{'get':function(){const _0x191db2=_0x391533;return this[_0x191db2(0x1ae)];},'set':function(_0x5189b){const _0xcd6b79=_0x391533;Cesium[_0xcd6b79(0x2e5)][_0xcd6b79(0x1a7)][_0xcd6b79(0x2ea)]('set\x20layer\x20lod\x20range\x20scale',_0x5189b),this['_lodRangeScale']=_0x5189b;}},'selectedColor':{'get':function(){const _0x2b0843=_0x391533;return this[_0x2b0843(0x1c2)];},'set':function(_0x28bda3){const _0x17b8b6=_0x391533;Cesium[_0x17b8b6(0x2c4)][_0x17b8b6(0x279)](_0x28bda3,this['_selectedColor']);}},'dataMinValue':{'get':function(){const _0x17a8c2=_0x391533;return Cesium[_0x17a8c2(0x23b)](this[_0x17a8c2(0x193)],this[_0x17a8c2(0x302)]);}},'dataMaxValue':{'get':function(){const _0x339e48=_0x391533;return Cesium[_0x339e48(0x23b)](this[_0x339e48(0x1b1)],this[_0x339e48(0x1ab)]);}},'swipeRegion':{'get':function(){const _0x515051=_0x391533;return new Cesium[(_0x515051(0x2d0))](this[_0x515051(0x1c7)]['x'],this[_0x515051(0x1c7)]['y'],this[_0x515051(0x1c7)]['z']-this[_0x515051(0x1c7)]['x'],this[_0x515051(0x1c7)]['w']-this[_0x515051(0x1c7)]['y']);},'set':function(_0xe3ed15){const _0x60b52d=_0x391533;if(!_0xe3ed15)return;if(!(_0xe3ed15 instanceof Cesium['BoundingRectangle']))throw new Cesium[(_0x60b52d(0x301))](_0x60b52d(0x1ed));Cesium['Cartesian4']['fromElements'](_0xe3ed15['x'],_0xe3ed15['y'],_0xe3ed15['x']+_0xe3ed15[_0x60b52d(0x307)],_0xe3ed15['y']+_0xe3ed15['height'],this[_0x60b52d(0x1c7)]);}},'swipeEnabled':{'get':function(){const _0x685874=_0x391533;return this[_0x685874(0x25d)];},'set':function(_0x228e72){const _0x2ad397=_0x391533;if(_0x228e72===this['_swipeEnabled'])return;!_0x228e72&&Cesium['Cartesian4'][_0x2ad397(0x2fc)](0x0,0x0,0x1,0x1,this[_0x2ad397(0x1c7)]),this[_0x2ad397(0x25d)]=_0x228e72,this[_0x2ad397(0x246)]({'enable':_0x228e72},swipeCallback);}},'visibleDistanceMax':{'get':function(){const _0xd2d405=_0x391533;return this[_0xd2d405(0x2e1)];},'set':function(_0x5d740e){const _0x330519=_0x391533;Cesium[_0x330519(0x2e5)]['typeOf']['number'](_0x330519(0x201),_0x5d740e),this[_0x330519(0x2e1)]=_0x5d740e;}},'visibleDistanceMin':{'get':function(){const _0x3b4f23=_0x391533;return this[_0x3b4f23(0x1ee)];},'set':function(_0x5b26cb){const _0x5ef8ce=_0x391533;Cesium[_0x5ef8ce(0x2e5)]['typeOf'][_0x5ef8ce(0x2ea)](_0x5ef8ce(0x300),_0x5b26cb),this[_0x5ef8ce(0x1ee)]=_0x5b26cb;}},'minVisibleAltitude':{'get':function(){const _0x45a3db=_0x391533;return this[_0x45a3db(0x1c8)];},'set':function(_0x51657a){const _0x3185d4=_0x391533;Cesium[_0x3185d4(0x2e5)][_0x3185d4(0x1a7)][_0x3185d4(0x2ea)](_0x3185d4(0x253),_0x51657a),this[_0x3185d4(0x1c8)]=_0x51657a;}},'maxVisibleAltitude':{'get':function(){const _0x3133f4=_0x391533;return this[_0x3133f4(0x236)];},'set':function(_0x1ed0d8){const _0x130e82=_0x391533;Cesium[_0x130e82(0x2e5)]['typeOf'][_0x130e82(0x2ea)](_0x130e82(0x1cb),_0x1ed0d8),this['_maxVisibleAltitude']=_0x1ed0d8;}},'hypsometricSetting':{'get':function(){const _0x50d894=_0x391533;return {'hypsometricSetting':this['_hypsometric'][_0x50d894(0x1dd)],'analysisMode':this[_0x50d894(0x2b0)]['analysisMode']};},'set':function(_0x8422ff){const _0x3ce673=_0x391533;let _0x590df2=this[_0x3ce673(0x2b0)];if(!_0x8422ff||!_0x8422ff['hypsometricSetting']){_0x590df2[_0x3ce673(0x2ca)]=![],_0x590df2['setting']=_0x590df2[_0x3ce673(0x1dd)]&&_0x590df2[_0x3ce673(0x1dd)][_0x3ce673(0x1f0)](),this[_0x3ce673(0x246)]({'enable':![]},hypsometricCallback);return;}_0x590df2[_0x3ce673(0x2ad)]=_0x590df2[_0x3ce673(0x2ad)]&&_0x590df2[_0x3ce673(0x2ad)][_0x3ce673(0x1f0)](),!_0x590df2[_0x3ce673(0x2b5)]&&(_0x590df2[_0x3ce673(0x2b5)]=new Cesium[(_0x3ce673(0x297))]({'context':this[_0x3ce673(0x243)],'width':0x400,'height':0x400,'pixelFormat':Cesium[_0x3ce673(0x2b6)][_0x3ce673(0x2c1)]})),!_0x590df2['texture']&&(_0x590df2['texture']=new Cesium[(_0x3ce673(0x297))]({'context':this[_0x3ce673(0x243)],'width':0x400,'height':0x40,'pixelFormat':Cesium[_0x3ce673(0x2b6)]['RGBA'],'flipY':![]})),_0x590df2[_0x3ce673(0x221)]=Cesium['defaultValue'](_0x8422ff[_0x3ce673(0x221)],_0x590df2['analysisMode']),_0x590df2[_0x3ce673(0x1dd)]=HypsometricSetting[_0x3ce673(0x279)](_0x8422ff[_0x3ce673(0x2f2)],_0x590df2[_0x3ce673(0x1dd)]),_0x590df2[_0x3ce673(0x1dd)][_0x3ce673(0x269)]&&(_0x590df2[_0x3ce673(0x1dd)][_0x3ce673(0x269)][_0x3ce673(0x27e)](),this[_0x3ce673(0x2b0)][_0x3ce673(0x208)]&&this['_hypsometric']['texture'][_0x3ce673(0x1e3)]({'width':0x400,'height':0x40,'arrayBufferView':_0x590df2['setting']['ColorTable'][_0x3ce673(0x1bb)]})),_0x590df2[_0x3ce673(0x2ca)]=_0x590df2[_0x3ce673(0x221)]!==_0x1ad93e[_0x3ce673(0x272)]['ARM_NONE'],this['_tranverseRenderEntity']({'enable':_0x590df2['isUseHypColorTable']},hypsometricCallback);}},'selectEnabled':{'get':function(){const _0x5d2bbb=_0x391533;return this[_0x5d2bbb(0x2bd)];},'set':function(_0x3b8c8a){const _0x10bd03=_0x391533;Cesium[_0x10bd03(0x2e5)][_0x10bd03(0x2b9)](_0x10bd03(0x21a),_0x3b8c8a),Cesium['Check']['typeOf'][_0x10bd03(0x21b)](_0x10bd03(0x21a),_0x3b8c8a),this[_0x10bd03(0x2bd)]=_0x3b8c8a;}},'subdomains':{'get':function(){const _0x554e72=_0x391533;return this['_subdomainConfig'][_0x554e72(0x28f)];},'set':function(_0x247656){const _0xee9b9c=_0x391533;if(defined(_0x247656)&&!defined(_0x247656[_0xee9b9c(0x294)]))throw new DeveloperError(_0xee9b9c(0x205));this[_0xee9b9c(0x2c6)][_0xee9b9c(0x28f)]=_0x247656;}}});function getWaterEffect(_0x42c617){const _0x3f4784=_0x391533;let _0x319217={},_0x50080d=_0x42c617[_0x3f4784(0x27c)];_0x319217['version']=XMLParser['queryStringValue'](_0x50080d,_0x3f4784(0x22e)),_0x319217['fileType']=XMLParser['queryStringValue'](_0x50080d,_0x3f4784(0x2b3));let _0x2b6ae5=XMLParser[_0x3f4784(0x1b5)](_0x50080d,_0x3f4784(0x2a2));_0x319217[_0x3f4784(0x2cc)]=XMLParser['queryNumericValue'](_0x2b6ae5,_0x3f4784(0x1f4));let _0x574da6=XMLParser['queryNodes'](_0x2b6ae5,'GpuProgramParameters');_0x319217[_0x3f4784(0x2af)]=[];for(let _0x548ec2=0x0,_0x5c8e68=_0x574da6[_0x3f4784(0x294)];_0x548ec2<_0x5c8e68;_0x548ec2++){let _0x18985={};_0x18985['gpuConstants']=[],_0x18985['atuoConstants']=[];let _0x38f399=_0x574da6[_0x548ec2],_0x1dcb41=XMLParser[_0x3f4784(0x1b5)](_0x38f399,_0x3f4784(0x25c));if(_0x1dcb41){let _0x4eaa0b=XMLParser[_0x3f4784(0x2a6)](_0x1dcb41,_0x3f4784(0x2b2));for(let _0x370cf0=0x0,_0x23dbe6=_0x4eaa0b[_0x3f4784(0x294)];_0x370cf0<_0x23dbe6;_0x370cf0++){let _0x2b28b2={},_0x3b85b3=_0x4eaa0b[_0x370cf0];_0x2b28b2[_0x3f4784(0x1bf)]=XMLParser['queryNumericValue'](_0x3b85b3,_0x3f4784(0x1a6)),_0x2b28b2[_0x3f4784(0x247)]=XMLParser[_0x3f4784(0x261)](_0x3b85b3,_0x3f4784(0x1e5)),_0x2b28b2['name']=XMLParser[_0x3f4784(0x2ba)](_0x3b85b3,_0x3f4784(0x2da)),_0x2b28b2[_0x3f4784(0x286)]=XMLParser[_0x3f4784(0x261)](_0x3b85b3,'ArraySize'),_0x2b28b2[_0x3f4784(0x1f7)]=XMLParser[_0x3f4784(0x261)](_0x3b85b3,_0x3f4784(0x224));let _0x35cda8=XMLParser[_0x3f4784(0x1b5)](_0x3b85b3,_0x3f4784(0x24a));_0x2b28b2[_0x3f4784(0x278)]=[];if(_0x35cda8){let _0x1e328c=XMLParser[_0x3f4784(0x2a6)](_0x35cda8,'Float'),_0x306b4c=0x0;while(_0x306b4c<_0x2b28b2[_0x3f4784(0x286)]){let _0x20f898=parseFloat(_0x1e328c[_0x306b4c][_0x3f4784(0x226)]);_0x2b28b2[_0x3f4784(0x278)][_0x3f4784(0x207)](_0x20f898),_0x306b4c++;}}_0x18985[_0x3f4784(0x1bd)]['push'](_0x2b28b2);}}let _0x125858=XMLParser[_0x3f4784(0x1b5)](_0x38f399,_0x3f4784(0x1a1));if(_0x125858){let _0x53b476=XMLParser[_0x3f4784(0x2a6)](_0x125858,_0x3f4784(0x24c));for(let _0xe6db2b=0x0,_0x3a2216=_0x53b476['length'];_0xe6db2b<_0x3a2216;_0xe6db2b++){let _0x5a5cc2={},_0x397289=_0x53b476[_0xe6db2b];_0x5a5cc2[_0x3f4784(0x27f)]=XMLParser[_0x3f4784(0x261)](_0x397289,_0x3f4784(0x22b)),_0x5a5cc2[_0x3f4784(0x268)]=XMLParser[_0x3f4784(0x2ba)](_0x397289,_0x3f4784(0x2da)),_0x5a5cc2['physicalIndex']=XMLParser[_0x3f4784(0x261)](_0x397289,_0x3f4784(0x1c9)),_0x5a5cc2[_0x3f4784(0x265)]=XMLParser[_0x3f4784(0x261)](_0x397289,_0x3f4784(0x28d)),_0x5a5cc2['data']=XMLParser[_0x3f4784(0x261)](_0x397289,_0x3f4784(0x283)),_0x5a5cc2[_0x3f4784(0x2f3)]=XMLParser[_0x3f4784(0x261)](_0x397289,_0x3f4784(0x1a9)),_0x5a5cc2['isReal']=XMLParser['queryBooleanValue'](_0x397289,'IsReal'),_0x18985[_0x3f4784(0x2ab)][_0x3f4784(0x207)](_0x5a5cc2);}}_0x319217[_0x3f4784(0x2af)]['push'](_0x18985);}return _0x319217;}function getUrl$1(_0x57b4cd,_0x546063){const _0x2af163=_0x391533;let _0x117119=_0x546063[_0x2af163(0x227)],_0x119a5f=_0x546063[_0x2af163(0x227)]['indexOf']('realspace')>-0x1;if(!_0x119a5f)return _0x57b4cd;let _0xda7120=_0x117119[_0x2af163(0x2a8)](/(.*realspace)/,''),_0x5678c7=_0x117119[_0x2af163(0x2a8)](/\/rest\/realspace/g,'')['replace'](_0xda7120,'');return _0x5678c7+'/rest/realspace'+_0xda7120+'data/path/'+_0x57b4cd[_0x2af163(0x2a8)](/^\.*/,'')[_0x2af163(0x2a8)](/^\//,'')[_0x2af163(0x2a8)](/\/$/,'');}function parseWaterParameters(_0x1f6882,_0x2a8b77){const _0x14d4dc=_0x391533;let _0x372736=_0x2a8b77['extensions'];if(!_0x372736||!_0x372736[_0x14d4dc(0x24e)])return;let _0x35cdfe=_0x372736[_0x14d4dc(0x24e)],_0xe43d3a=[],_0xd449a8=_0x1f6882[_0x14d4dc(0x227)],_0x31d363=![];for(let _0x2a04a2=0x0,_0x3800bf=_0x35cdfe[_0x14d4dc(0x294)];_0x2a04a2<_0x3800bf;_0x2a04a2++){let _0x289032=_0x35cdfe[_0x2a04a2]['attachFile'];if(_0x289032[_0x14d4dc(0x24f)](_0x14d4dc(0x1b6))>0x0){let _0x1b11f5=getUrl$1(_0x289032,_0x1f6882),_0x43d576=_0x1f6882[_0x14d4dc(0x1ca)][_0x14d4dc(0x240)]({'url':_0x1b11f5});_0xe43d3a[_0x14d4dc(0x207)](_0x43d576[_0x14d4dc(0x2f4)]()),_0x31d363=!![];}}if(!_0xe43d3a[_0x14d4dc(0x294)])return;Cesium[_0x14d4dc(0x1e4)][_0x14d4dc(0x231)](_0xe43d3a,_0x14b62e=>{const _0x5646d1=_0x14d4dc;let _0x5745ac=[];for(let _0xdc17a7=0x0,_0x3c164a=_0x14b62e[_0x5646d1(0x294)];_0xdc17a7<_0x3c164a;_0xdc17a7++){let _0x308f78=_0x14b62e[_0xdc17a7];if(!_0x308f78)break;let _0x54504e=getWaterEffect(_0x308f78);_0x5745ac[_0x5646d1(0x207)](_0x54504e);}_0x1f6882[_0x5646d1(0x21d)]=new Cesium[(_0x5646d1(0x242))](),_0x1f6882['_waterParameters']={};let _0x2c4785=_0x5745ac[0x0];_0x1f6882[_0x5646d1(0x2ec)][_0x5646d1(0x2cc)]=_0x2c4785[_0x5646d1(0x2cc)];for(let _0x2f54d1=0x0;_0x2f54d1<_0x2c4785['gpuProgramParameters'][_0x5646d1(0x294)];_0x2f54d1++){let _0x26bd2e=_0x2c4785[_0x5646d1(0x2af)][_0x2f54d1];for(let _0x435dc4=0x0;_0x435dc4<_0x26bd2e[_0x5646d1(0x2ab)]['length'];_0x435dc4++){let _0x924099=_0x26bd2e[_0x5646d1(0x2ab)][_0x435dc4];if(_0x924099[_0x5646d1(0x268)]==='timeVal'){_0x1f6882[_0x5646d1(0x2ec)][_0x924099[_0x5646d1(0x268)]]=_0x924099[_0x5646d1(0x2f3)];break;}}for(let _0x186f8f=0x0;_0x186f8f<_0x26bd2e['gpuConstants'][_0x5646d1(0x294)];_0x186f8f++){let _0x4f8d77=_0x26bd2e['gpuConstants'][_0x186f8f],_0x44bc75=null;switch(_0x4f8d77[_0x5646d1(0x286)]){case 0x1:_0x44bc75=_0x4f8d77[_0x5646d1(0x278)][0x0];break;case 0x2:_0x44bc75=new Cesium['Cartesian2'](),Cesium[_0x5646d1(0x22f)][_0x5646d1(0x1cd)](_0x4f8d77['arrayFloat'],0x0,_0x44bc75);break;case 0x3:_0x44bc75=new Cesium[(_0x5646d1(0x2a5))](),Cesium[_0x5646d1(0x2a5)][_0x5646d1(0x1cd)](_0x4f8d77['arrayFloat'],0x0,_0x44bc75);break;case 0x4:_0x44bc75=new Cesium[(_0x5646d1(0x20d))](),Cesium[_0x5646d1(0x20d)][_0x5646d1(0x1cd)](_0x4f8d77[_0x5646d1(0x278)],0x0,_0x44bc75);break;}if(!_0x44bc75)continue;_0x1f6882['_waterParameters'][_0x4f8d77[_0x5646d1(0x268)]]=_0x44bc75;}}_0x1f6882[_0x5646d1(0x211)]+=_0x5646d1(0x270);});}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x291)]=function(_0x4c5869){const _0x2db276=_0x391533;let _0x459add=this;Cesium[_0x2db276(0x1e4)](_0x4c5869)[_0x2db276(0x2cb)](function(_0x2a54c1){const _0xe25bc5=_0x2db276;let _0x4ed08c,_0x735cf0=Cesium['Resource'][_0xe25bc5(0x273)](_0x2a54c1);_0x4ed08c=_0x735cf0[_0xe25bc5(0x1af)](!![]),_0x459add[_0xe25bc5(0x1e0)]=_0x735cf0[_0xe25bc5(0x23d)],_0x459add[_0xe25bc5(0x227)]=_0x4ed08c,_0x459add[_0xe25bc5(0x1ca)]=_0x735cf0;Cesium[_0xe25bc5(0x2b9)](_0x459add['_subdomainConfig'][_0xe25bc5(0x28f)])&&(_0x459add[_0xe25bc5(0x227)]=_0x459add[_0xe25bc5(0x2c6)]['urlScheme']);if(_0x459add[_0xe25bc5(0x237)]||_0x459add[_0xe25bc5(0x2d1)])return _0x735cf0[_0xe25bc5(0x305)]();return _0x735cf0[_0xe25bc5(0x2f4)]();})[_0x2db276(0x2cb)](function(_0x288335){const _0x1c24b3=_0x2db276;if(_0x459add[_0x1c24b3(0x237)]||_0x459add[_0x1c24b3(0x2d1)]){let _0x389dea=_0x288335[_0x1c24b3(0x198)];_0x459add[_0x1c24b3(0x211)]=_0x389dea[_0x1c24b3(0x2d5)];let _0x4df106=_0x288335[_0x1c24b3(0x1c5)]['x'],_0x265eab=_0x288335[_0x1c24b3(0x1c5)]['y'],_0x145455=_0x288335[_0x1c24b3(0x1c5)]['z'],_0x4728a0=_0x288335[_0x1c24b3(0x1c5)][_0x1c24b3(0x1a4)];if(_0x459add['_sceneMode']===Cesium[_0x1c24b3(0x1b2)][_0x1c24b3(0x1e6)])_0x459add[_0x1c24b3(0x2d3)]=Cesium['Cartesian3']['fromDegrees'](_0x4df106,_0x265eab,_0x145455),_0x459add[_0x1c24b3(0x2ef)]=Cesium['Transforms']['eastNorthUpToFixedFrame'](_0x459add[_0x1c24b3(0x2d3)]),_0x459add[_0x1c24b3(0x26a)]=Cesium[_0x1c24b3(0x24d)][_0x1c24b3(0x2d9)](_0x459add[_0x1c24b3(0x2ef)],_0x459add[_0x1c24b3(0x26a)]);else {if(_0x4df106>0xb4||_0x4df106<-0xb4||_0x265eab>0xb4||_0x265eab<-0xb4||_0x4728a0===_0x1c24b3(0x1f3)){let _0x40e476=_0x4df106,_0x2515d8=_0x265eab;_0x459add['_position']=new Cesium['Cartesian3'](_0x40e476,_0x2515d8,_0x145455);}else {let _0x10e794=new Cesium[(_0x1c24b3(0x1a5))](),_0x44c54d=Cesium[_0x1c24b3(0x2a5)][_0x1c24b3(0x289)](_0x4df106,_0x265eab,_0x145455),_0x2c64e7=_0x10e794[_0x1c24b3(0x232)]['cartesianToCartographic'](_0x44c54d);_0x459add[_0x1c24b3(0x2d3)]=_0x10e794[_0x1c24b3(0x1eb)](_0x2c64e7);}Cesium[_0x1c24b3(0x24d)][_0x1c24b3(0x2e2)](_0x459add[_0x1c24b3(0x2d3)],_0x459add[_0x1c24b3(0x2ef)]),Cesium[_0x1c24b3(0x24d)]['multiply'](transform_2d,_0x459add[_0x1c24b3(0x2ef)],_0x459add[_0x1c24b3(0x2ef)]),_0x459add[_0x1c24b3(0x26a)]=Cesium[_0x1c24b3(0x24d)][_0x1c24b3(0x2d9)](_0x459add['modelMatrix'],_0x459add[_0x1c24b3(0x26a)]);}if(Cesium[_0x1c24b3(0x2b9)](_0x288335[_0x1c24b3(0x1b7)])){let _0x2001f5=_0x288335['geoBounds'][_0x1c24b3(0x2fd)],_0x4d4b54=_0x288335['geoBounds'][_0x1c24b3(0x26b)],_0x529687=_0x288335[_0x1c24b3(0x1b7)][_0x1c24b3(0x1d2)],_0x1f3601=_0x288335[_0x1c24b3(0x1b7)][_0x1c24b3(0x24b)];_0x2001f5>0xb4||_0x1f3601>0xb4||_0x529687>0xb4||_0x4d4b54>0xb4?(_0x2001f5/=0x615299,_0x1f3601/=0x615299,_0x529687/=0x615299,_0x4d4b54/=0x615299,_0x459add[_0x1c24b3(0x275)]=new Cesium['Rectangle'](_0x2001f5,_0x1f3601,_0x529687,_0x4d4b54)):_0x459add['_rectangle']=Cesium[_0x1c24b3(0x2a1)]['fromDegrees'](_0x2001f5,_0x1f3601,_0x529687,_0x4d4b54);}_0x288335[_0x1c24b3(0x1ef)]&&(_0x459add[_0x1c24b3(0x302)]=_0x288335[_0x1c24b3(0x1ef)][_0x1c24b3(0x256)],_0x459add[_0x1c24b3(0x1ab)]=_0x288335[_0x1c24b3(0x1ef)]['max']);if(_0x288335[_0x1c24b3(0x274)]){let _0xb61e2=_0x288335[_0x1c24b3(0x274)]['range'];_0x459add[_0x1c24b3(0x1d0)]=_0xb61e2[_0x1c24b3(0x256)],_0x459add[_0x1c24b3(0x217)]=_0xb61e2[_0x1c24b3(0x29c)];}_0x389dea[_0x1c24b3(0x1cc)](_0x1c24b3(0x251))&&(_0x459add['_isTransparencyOptimization']=_0x389dea[_0x1c24b3(0x251)]===_0x1c24b3(0x1f6));if(_0x288335[_0x1c24b3(0x2a9)][_0x1c24b3(0x294)]>0x0){let _0x5af8ca=Cesium[_0x1c24b3(0x295)](_0x288335['tiles'][0x0]['url']);_0x5af8ca===_0x1c24b3(0x1ff)&&(_0x459add[_0x1c24b3(0x2d1)]=!![]);}for(let _0x384c87=0x0,_0x54a574=_0x288335[_0x1c24b3(0x2a9)]['length'];_0x384c87<_0x54a574;_0x384c87++){let _0x3b424b=_0x288335[_0x1c24b3(0x2a9)][_0x384c87][_0x1c24b3(0x23d)],_0x54b469={'box':_0x288335[_0x1c24b3(0x2a9)][_0x384c87]['boundingbox']},_0x15d9ad=new S3MTile(_0x459add,undefined,_0x54b469,_0x3b424b);_0x15d9ad['isRootTile']=!![],_0x15d9ad[_0x1c24b3(0x260)]=_0x3b424b,_0x459add[_0x1c24b3(0x2c8)][_0x1c24b3(0x1aa)](_0x15d9ad),_0x459add[_0x1c24b3(0x1d3)][_0x1c24b3(0x207)](_0x15d9ad);}parseWaterParameters(_0x459add,_0x288335);}else {let _0x243bc=_0x288335[_0x1c24b3(0x27c)],_0x5a2c51=_0x243bc[_0x1c24b3(0x1e1)];_0x459add[_0x1c24b3(0x211)]=XMLParser[_0x1c24b3(0x2ba)](_0x243bc,'FileType',_0x5a2c51);let _0x5e3bee=XMLParser['queryFirstNode'](_0x243bc,'Position',_0x5a2c51),_0x178ebf=XMLParser[_0x1c24b3(0x261)](_0x5e3bee,'X',_0x5a2c51),_0x487769=XMLParser[_0x1c24b3(0x261)](_0x5e3bee,'Y',_0x5a2c51),_0x2ff1d3=XMLParser[_0x1c24b3(0x261)](_0x5e3bee,'Z',_0x5a2c51);_0x459add['_position']=Cesium[_0x1c24b3(0x2a5)]['fromDegrees'](_0x178ebf,_0x487769,_0x2ff1d3),_0x459add[_0x1c24b3(0x2ef)]=Cesium[_0x1c24b3(0x303)][_0x1c24b3(0x216)](_0x459add[_0x1c24b3(0x2d3)]),_0x459add['invModelMatrix']=Cesium[_0x1c24b3(0x24d)][_0x1c24b3(0x2d9)](_0x459add[_0x1c24b3(0x2ef)],_0x459add[_0x1c24b3(0x26a)]);let _0x47ccfd=XMLParser['queryFirstNode'](_0x243bc,_0x1c24b3(0x223),_0x5a2c51),_0x426b3e=XMLParser[_0x1c24b3(0x1b5)](_0x243bc,_0x1c24b3(0x2b4),_0x5a2c51);if(_0x47ccfd){let _0x3996f7=XMLParser['queryNumericValue'](_0x47ccfd,_0x1c24b3(0x19d),_0x5a2c51),_0x352f92=XMLParser[_0x1c24b3(0x261)](_0x47ccfd,_0x1c24b3(0x244),_0x5a2c51),_0x1847b0=XMLParser[_0x1c24b3(0x261)](_0x47ccfd,'Right',_0x5a2c51),_0x2ae7d8=XMLParser[_0x1c24b3(0x261)](_0x47ccfd,_0x1c24b3(0x195),_0x5a2c51);_0x459add[_0x1c24b3(0x275)]=Cesium[_0x1c24b3(0x2a1)]['fromDegrees'](_0x3996f7,_0x2ae7d8,_0x1847b0,_0x352f92);}else {if(_0x426b3e){let _0x3f7201=XMLParser[_0x1c24b3(0x261)](_0x426b3e,_0x1c24b3(0x1b4),_0x5a2c51),_0x19b62f=XMLParser[_0x1c24b3(0x261)](_0x426b3e,_0x1c24b3(0x1a2),_0x5a2c51),_0x4cce86=XMLParser[_0x1c24b3(0x261)](_0x426b3e,_0x1c24b3(0x222),_0x5a2c51),_0x47f06b=XMLParser[_0x1c24b3(0x261)](_0x426b3e,_0x1c24b3(0x249),_0x5a2c51),_0x3ad001=XMLParser[_0x1c24b3(0x261)](_0x426b3e,_0x1c24b3(0x204),_0x5a2c51),_0x3e6af4=XMLParser[_0x1c24b3(0x261)](_0x426b3e,_0x1c24b3(0x1fe),_0x5a2c51);_0x3f7201=0xb4*Math[_0x1c24b3(0x228)](_0x3f7201)/(Math['PI']*0x615299),_0x19b62f=0xb4*Math[_0x1c24b3(0x228)](_0x19b62f)/(Math['PI']*0x615299),_0x47f06b=0xb4*Math[_0x1c24b3(0x228)](_0x47f06b)/(Math['PI']*0x615299),_0x3ad001=0xb4*Math[_0x1c24b3(0x228)](_0x3ad001)/(Math['PI']*0x615299),_0x459add[_0x1c24b3(0x275)]=Cesium[_0x1c24b3(0x2a1)][_0x1c24b3(0x289)](_0x178ebf-_0x3f7201,_0x487769-_0x19b62f,_0x178ebf+_0x47f06b,_0x487769+_0x3ad001);}}let _0x5d8b49=XMLParser['queryFirstNode'](_0x243bc,_0x1c24b3(0x1a0),_0x5a2c51);_0x5d8b49&&(_0x459add['_minHeight']=XMLParser[_0x1c24b3(0x261)](_0x5d8b49,_0x1c24b3(0x200),_0x5a2c51),_0x459add[_0x1c24b3(0x1ab)]=XMLParser[_0x1c24b3(0x261)](_0x5d8b49,_0x1c24b3(0x2bb),_0x5a2c51));let _0x1a48c9=XMLParser[_0x1c24b3(0x1b5)](_0x243bc,'CategoryRange',_0x5a2c51);_0x1a48c9&&(_0x459add[_0x1c24b3(0x217)]=XMLParser[_0x1c24b3(0x261)](_0x1a48c9,'MaxCategory',_0x5a2c51),_0x459add[_0x1c24b3(0x1d0)]=XMLParser[_0x1c24b3(0x261)](_0x1a48c9,'MinCategory',_0x5a2c51));let _0x35238c=XMLParser[_0x1c24b3(0x1b5)](_0x243bc,_0x1c24b3(0x2e9),_0x5a2c51);_0x459add[_0x1c24b3(0x2d7)]=XMLParser['queryBooleanValue'](_0x35238c,_0x1c24b3(0x219),_0x5a2c51);let _0x490b42=/\\+/g,_0x674a=XMLParser[_0x1c24b3(0x1b5)](_0x243bc,'OSGFiles',_0x5a2c51),_0x460afe=XMLParser['queryNodes'](_0x674a,_0x1c24b3(0x1e9),_0x5a2c51);if(_0x460afe[_0x1c24b3(0x294)]>0x0)for(let _0x2f7af4=0x0,_0x590701=_0x460afe['length'];_0x2f7af4<_0x590701;_0x2f7af4++){let _0x31d439=_0x460afe[_0x2f7af4],_0x2bbb9f=XMLParser[_0x1c24b3(0x2ba)](_0x31d439,'FileName',_0x5a2c51);_0x2bbb9f=_0x2bbb9f[_0x1c24b3(0x2a8)](_0x490b42,'/'),_0x2bbb9f=_0x2bbb9f[_0x1c24b3(0x2a8)](/(\.osgb)/gi,_0x1c24b3(0x2c5));let _0xef947e=XMLParser['queryFirstNode'](_0x31d439,_0x1c24b3(0x245),_0x5a2c51),_0x2a29dd={'sphere':{'center':{'x':0x0,'y':0x0,'z':0x0},'radius':0x615299}};if(_0xef947e&&_0xef947e['childNodes'][_0x1c24b3(0x294)]){let _0x46c1a6=XMLParser[_0x1c24b3(0x261)](_0xef947e,_0x1c24b3(0x212),_0x5a2c51),_0x3c4343=XMLParser[_0x1c24b3(0x261)](_0xef947e,'CenterY',_0x5a2c51),_0x16158c=XMLParser[_0x1c24b3(0x261)](_0xef947e,_0x1c24b3(0x23a),_0x5a2c51),_0x141afa=XMLParser[_0x1c24b3(0x261)](_0xef947e,_0x1c24b3(0x1cf),_0x5a2c51);_0x2a29dd={'sphere':{'center':{'x':_0x46c1a6,'y':_0x3c4343,'z':_0x16158c},'radius':_0x141afa}};}let _0x4bbfda=new S3MTile(_0x459add,undefined,_0x2a29dd,_0x2bbb9f);_0x4bbfda[_0x1c24b3(0x215)]=!![],_0x459add[_0x1c24b3(0x2c8)][_0x1c24b3(0x1aa)](_0x4bbfda),_0x459add['_rootTiles'][_0x1c24b3(0x207)](_0x4bbfda);}else {let _0x3cf52b=XMLParser['queryNodes'](_0x674a,_0x1c24b3(0x1c3),_0x5a2c51);for(let _0x582b20=0x0,_0x5c0655=_0x3cf52b['length'];_0x582b20<_0x5c0655;_0x582b20++){let _0x1cf94e=_0x3cf52b[_0x582b20][_0x1c24b3(0x226)];_0x1cf94e=_0x1cf94e[_0x1c24b3(0x2a8)](_0x490b42,'/'),_0x1cf94e=_0x1cf94e['replace'](/(\.osgb)/gi,'.s3m');let _0x20d2f9={'sphere':{'center':{'x':0x0,'y':0x0,'z':0x0},'radius':0x615299}},_0x2c24fe=new S3MTile(_0x459add,undefined,_0x20d2f9,_0x1cf94e);_0x2c24fe['isRootTile']=!![],_0x459add['_cache'][_0x1c24b3(0x1aa)](_0x2c24fe),_0x459add[_0x1c24b3(0x1d3)]['push'](_0x2c24fe);}}}_0x459add['_readyPromise'][_0x1c24b3(0x2ee)](_0x459add);})[_0x2db276(0x259)](function(_0x530f19){const _0x32e858=_0x2db276;_0x459add['_readyPromise'][_0x32e858(0x26c)](_0x530f19);});};function sortRequestByPriority(_0x4966d2,_0xf97de0){const _0x596bdb=_0x391533;return _0x4966d2['priority']-_0xf97de0[_0x596bdb(0x239)];}function requestTiles(_0x1cf8c8){const _0x4a3370=_0x391533;let _0x4d68f2=_0x1cf8c8[_0x4a3370(0x203)],_0x4bb690=_0x4d68f2['length'];_0x4d68f2[_0x4a3370(0x2c0)](sortRequestByPriority);for(let _0x49da12=0x0;_0x49da12<_0x4bb690;++_0x49da12){let _0xdb575b=_0x4d68f2[_0x49da12];_0xdb575b[_0x4a3370(0x206)](_0x1cf8c8[_0x4a3370(0x2c6)]);}}function processTiles(_0x33febe,_0x4e92d0){const _0xe4f0c1=_0x391533;let _0x5a7397=_0x33febe[_0xe4f0c1(0x1de)],_0x541c2c=_0x5a7397[_0xe4f0c1(0x294)];for(let _0x2b657e=0x0;_0x2b657e<_0x541c2c;++_0x2b657e){let _0x51ee33=_0x5a7397[_0x2b657e];_0x51ee33[_0xe4f0c1(0x1a8)](_0x4e92d0,_0x33febe);}}function updateTiles(_0x5e8b3b,_0x564bf0){const _0xb358d7=_0x391533;let _0x151585=_0x5e8b3b[_0xb358d7(0x23f)],_0x3cfc8d=_0x151585[_0xb358d7(0x294)];for(let _0x4ac24a=0x0;_0x4ac24a<_0x3cfc8d;_0x4ac24a++){_0x151585[_0x4ac24a]['update'](_0x564bf0,_0x5e8b3b);}}function unloadTile(_0x23bc4b,_0x274e0b){_0x274e0b['free']();}function freeResource(_0x1b87f6){const _0x3cdeb2=_0x391533;_0x1b87f6['_isS3MBlock']?_0x1b87f6[_0x3cdeb2(0x2c8)][_0x3cdeb2(0x19e)](_0x1b87f6,unloadTile):_0x1b87f6[_0x3cdeb2(0x2c8)]['unloadTiles'](_0x1b87f6,unloadTile);}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x1d1)]=function(){const _0x6dbd95=_0x391533;if(this[_0x6dbd95(0x29d)][_0x6dbd95(0x294)]<0x1)return;this[_0x6dbd95(0x1d6)](this['_selections'],_0x33d894[_0x6dbd95(0x2cd)]),this[_0x6dbd95(0x29d)][_0x6dbd95(0x294)]=0x0;},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x1bc)]=function(_0x1e03c0){const _0x5762d3=_0x391533;this[_0x5762d3(0x1ae)]=_0x1e03c0;},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x1b9)]=function(_0x3d3a19){const _0x2dac52=_0x391533;Cesium[_0x2dac52(0x2e5)][_0x2dac52(0x2b9)](_0x2dac52(0x258),_0x3d3a19);if(!this[_0x2dac52(0x2bd)])return;!Array[_0x2dac52(0x2a4)](_0x3d3a19)&&(_0x3d3a19=[_0x3d3a19]),!this[_0x2dac52(0x22d)]&&this[_0x2dac52(0x1d1)](),this[_0x2dac52(0x29d)]=this['_selections']['concat'](_0x3d3a19),this[_0x2dac52(0x264)](_0x3d3a19,_0x33d894[_0x2dac52(0x2cd)]);},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x19f)]=function(){const _0x2588cb=_0x391533;return []['concat'](this[_0x2588cb(0x29d)]);},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x1c6)]=function(_0x3f023d,_0x1f195b){const _0x5e350f=_0x391533;Cesium[_0x5e350f(0x2e5)][_0x5e350f(0x2b9)](_0x5e350f(0x2fa),_0x3f023d),Cesium[_0x5e350f(0x2e5)]['defined'](_0x5e350f(0x27d),_0x1f195b),Cesium['Check'][_0x5e350f(0x1a7)][_0x5e350f(0x2aa)]('setObjsColor\x20color',_0x1f195b);!Array[_0x5e350f(0x2a4)](_0x3f023d)&&(_0x3f023d=[_0x3f023d]);let _0x374691={};for(let _0x4f8869=0x0,_0x486bcd=_0x3f023d[_0x5e350f(0x294)];_0x4f8869<_0x486bcd;_0x4f8869++){let _0x5bdba7=_0x3f023d[_0x4f8869]+'';if(!Cesium[_0x5e350f(0x2b9)](_0x5bdba7))continue;this[_0x5e350f(0x1b8)][_0x5bdba7]=_0x1f195b,_0x374691[_0x5bdba7]=_0x1f195b;}this[_0x5e350f(0x1d4)](_0x374691);},S3MTilesLayer['prototype'][_0x391533(0x263)]=function(_0x85a226){const _0x798bb=_0x391533;Cesium[_0x798bb(0x2e5)][_0x798bb(0x2b9)](_0x798bb(0x225),_0x85a226);!Array[_0x798bb(0x2a4)](_0x85a226)&&(_0x85a226=[_0x85a226]);let _0x1a68d9={};for(let _0x5d8a4b=0x0,_0x13e531=_0x85a226['length'];_0x5d8a4b<_0x13e531;_0x5d8a4b++){let _0x4bc152=_0x85a226[_0x5d8a4b];Cesium['defined'](this[_0x798bb(0x1b8)][_0x4bc152])&&(_0x1a68d9[_0x4bc152]=Cesium[_0x798bb(0x2c4)][_0x798bb(0x1dc)],delete this[_0x798bb(0x1b8)][_0x4bc152]);}this[_0x798bb(0x1d6)](_0x85a226,_0x33d894[_0x798bb(0x1ea)]),this[_0x798bb(0x1d4)](_0x1a68d9);},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x262)]=function(_0x2700da,_0x4c57ca){const _0xc27182=_0x391533;Cesium[_0xc27182(0x2e5)]['defined'](_0xc27182(0x2fe),_0x2700da),Cesium[_0xc27182(0x2e5)]['typeOf'][_0xc27182(0x21b)](_0xc27182(0x2db),_0x4c57ca);!Array['isArray'](_0x2700da)&&(_0x2700da=[_0x2700da]);if(_0x2700da['length']===0x0){this[_0xc27182(0x1f8)]=_0x4c57ca,this[_0xc27182(0x25a)]['removeAll']();let _0x4a0726=Object['keys'](this[_0xc27182(0x20e)][_0xc27182(0x1c4)]);this['_removeObjsOperationType'](_0x4a0726,_0x33d894['HIDE']),this[_0xc27182(0x20e)][_0xc27182(0x2a7)](),this[_0xc27182(0x2a3)](!_0x4c57ca);return;}let _0x36d81d=this[_0xc27182(0x25a)],_0x4042c7=this['_objsHideList'],_0x1a5526=this[_0xc27182(0x2f7)];!_0x4c57ca?(_0x2700da[_0xc27182(0x255)](function(_0x2fb6c5){const _0x53ba2d=_0xc27182;_0x36d81d[_0x53ba2d(0x266)](_0x2fb6c5),_0x4042c7['set'](_0x2fb6c5,!![]);}),this[_0xc27182(0x264)](_0x2700da,_0x33d894[_0xc27182(0x218)])):(_0x2700da[_0xc27182(0x255)](function(_0x2bcb25){const _0x261197=_0xc27182;_0x36d81d['set'](_0x2bcb25,!![]),_0x4042c7[_0x261197(0x266)](_0x2bcb25);}),this[_0xc27182(0x1d6)](_0x2700da,_0x33d894[_0xc27182(0x218)]));},S3MTilesLayer[_0x391533(0x248)]['setObjsVisible']=function(_0x5f12b8,_0x4afd10){const _0x49c1f8=_0x391533;if(_0x5f12b8[_0x49c1f8(0x294)]===0x0){this[_0x49c1f8(0x262)]([],_0x4afd10);return;}this[_0x49c1f8(0x262)]([],_0x4afd10),this['setOnlyObjsVisible'](_0x5f12b8,_0x4afd10);};function createPlane(_0x16927b,_0x4b67aa,_0x3e857c){const _0x1604d1=_0x391533;let _0x5a4144=new Cesium['Cartesian3'](),_0x5b2665=new Cesium['Cartesian3']();Cesium[_0x1604d1(0x2a5)]['subtract'](_0x4b67aa,_0x16927b,_0x5a4144),Cesium[_0x1604d1(0x2a5)][_0x1604d1(0x2b7)](_0x3e857c,_0x16927b,_0x5b2665);let _0xaf4929=new Cesium[(_0x1604d1(0x2a5))]();Cesium[_0x1604d1(0x2a5)][_0x1604d1(0x252)](_0x5a4144,_0x5b2665,_0xaf4929),Cesium[_0x1604d1(0x2a5)][_0x1604d1(0x214)](_0xaf4929,_0xaf4929);let _0x2f1354=-Cesium[_0x1604d1(0x2a5)]['dot'](_0xaf4929,_0x16927b);return new Cesium[(_0x1604d1(0x20d))](_0xaf4929['x'],_0xaf4929['y'],_0xaf4929['z'],_0x2f1354);}function clipCallback(_0x21630f,_0x29f932){const _0x2b9a3b=_0x391533;_0x21630f[_0x2b9a3b(0x2ed)](_0x29f932);}function _0x1210(_0x541f22,_0x24f297){_0x541f22=_0x541f22-0x193;let _0x11c8da=_0x11c8[_0x541f22];return _0x11c8da;}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x2e3)]=function(_0x2dddba,_0x3e324b,_0x4ab156,_0x38d6cd){const _0x5e403f=_0x391533;this[_0x5e403f(0x19c)]===Cesium['SceneMode'][_0x5e403f(0x21f)]&&(_0x2dddba=convertToColumbusViewCartesian(_0x2dddba),_0x3e324b=convertToColumbusViewCartesian(_0x3e324b),_0x4ab156=convertToColumbusViewCartesian(_0x4ab156)),this[_0x5e403f(0x1d9)][0x0]=createPlane(_0x2dddba,_0x3e324b,_0x4ab156),this[_0x5e403f(0x1ec)]=_0x4928db[_0x5e403f(0x299)],this[_0x5e403f(0x1c1)]=!![],!this[_0x5e403f(0x1da)]&&this[_0x5e403f(0x246)]({'enable':!![]},clipCallback),this['_enableClip']=!![];},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x20c)]=function(_0x22bd7b){const _0x3b67da=_0x391533;_0x22bd7b=_0x22bd7b||{};if((!_0x22bd7b[_0x3b67da(0x26e)]||!_0x22bd7b['position'])&&(!_0x22bd7b[_0x3b67da(0x2bc)]||!_0x22bd7b[_0x3b67da(0x25e)]))throw new Cesium['DeveloperError']('dimensions\x20position\x20is\x20required\x20to\x20create\x20CustomClipBox');this['_clipMode']=_0x4928db[_0x3b67da(0x299)];if(Cesium[_0x3b67da(0x2b9)](_0x22bd7b[_0x3b67da(0x257)]))switch(_0x22bd7b[_0x3b67da(0x257)]){case _0x3b67da(0x22a):this[_0x3b67da(0x1ec)]=_0x4928db[_0x3b67da(0x29f)];break;case _0x3b67da(0x25f):this['_clipMode']=_0x4928db[_0x3b67da(0x299)];break;case'only_keep_line':this[_0x3b67da(0x1ec)]=_0x4928db[_0x3b67da(0x280)];break;}if(_0x22bd7b[_0x3b67da(0x26e)]){let _0x33b787=new Cesium[(_0x3b67da(0x24d))](),_0x4b4cba=_0x22bd7b['position'],_0x5990e0,_0xeba212,_0x530ceb;_0x5990e0=_0x22bd7b[_0x3b67da(0x2bf)]||0x0,_0xeba212=_0x22bd7b['pitch']||0x0,_0x530ceb=_0x22bd7b['roll']||0x0;let _0x45a6ac=new Cesium[(_0x3b67da(0x2f6))](_0x5990e0,_0xeba212,_0x530ceb);if(this[_0x3b67da(0x19c)]===Cesium['SceneMode']['SCENE3D'])_0x33b787=Cesium['Transforms'][_0x3b67da(0x23c)](_0x4b4cba,_0x45a6ac,Cesium[_0x3b67da(0x1df)][_0x3b67da(0x29e)]);else {_0x45a6ac=new Cesium[(_0x3b67da(0x2f6))](_0xeba212,-_0x530ceb,-_0x5990e0);let _0x3b3d14=convertToColumbusViewCartesian(_0x4b4cba);Cesium[_0x3b67da(0x24d)][_0x3b67da(0x2be)](Cesium[_0x3b67da(0x24d)][_0x3b67da(0x279)](Cesium[_0x3b67da(0x24d)][_0x3b67da(0x2f8)]),_0x3b3d14,_0x33b787);let _0x5d3130=Cesium['Matrix3'][_0x3b67da(0x1f2)](_0x45a6ac);Cesium[_0x3b67da(0x24d)]['multiplyByMatrix3'](_0x33b787,_0x5d3130,_0x33b787);}let _0x58d313,_0xeba554,_0x105254;this[_0x3b67da(0x19c)]===Cesium[_0x3b67da(0x1b2)][_0x3b67da(0x1e6)]?(_0x58d313=_0x22bd7b['dimensions']['x']*0.5,_0xeba554=_0x22bd7b[_0x3b67da(0x26e)]['y']*0.5,_0x105254=_0x22bd7b['dimensions']['z']*0.5):(_0x58d313=_0x22bd7b[_0x3b67da(0x26e)]['z']*0.5,_0xeba554=_0x22bd7b[_0x3b67da(0x26e)]['x']*0.5,_0x105254=_0x22bd7b[_0x3b67da(0x26e)]['y']*0.5);let _0x113d36=[];_0x113d36[0x0]=new Cesium[(_0x3b67da(0x20d))](-_0x58d313,_0xeba554,_0x105254,0x1),_0x113d36[0x1]=new Cesium['Cartesian4'](_0x58d313,_0xeba554,_0x105254,0x1),_0x113d36[0x2]=new Cesium[(_0x3b67da(0x20d))](_0x58d313,-_0xeba554,_0x105254,0x1),_0x113d36[0x3]=new Cesium[(_0x3b67da(0x20d))](-_0x58d313,-_0xeba554,_0x105254,0x1),_0x113d36[0x4]=new Cesium['Cartesian4'](-_0x58d313,_0xeba554,-_0x105254,0x1),_0x113d36[0x5]=new Cesium[(_0x3b67da(0x20d))](_0x58d313,_0xeba554,-_0x105254,0x1),_0x113d36[0x6]=new Cesium[(_0x3b67da(0x20d))](_0x58d313,-_0xeba554,-_0x105254,0x1),_0x113d36[0x7]=new Cesium['Cartesian4'](-_0x58d313,-_0xeba554,-_0x105254,0x1);for(let _0x2c4ce5=0x0;_0x2c4ce5<0x8;_0x2c4ce5++){Cesium['Matrix4'][_0x3b67da(0x26d)](_0x33b787,_0x113d36[_0x2c4ce5],_0x113d36[_0x2c4ce5]);}this['_oriClipPlane'][0x0]=Cesium[_0x3b67da(0x20d)][_0x3b67da(0x279)](createPlane(_0x113d36[0x0],_0x113d36[0x1],_0x113d36[0x2])),this[_0x3b67da(0x1d9)][0x1]=Cesium['Cartesian4'][_0x3b67da(0x279)](createPlane(_0x113d36[0x0],_0x113d36[0x4],_0x113d36[0x1])),this['_oriClipPlane'][0x2]=Cesium[_0x3b67da(0x20d)]['clone'](createPlane(_0x113d36[0x0],_0x113d36[0x3],_0x113d36[0x4])),this['_oriClipPlane'][0x3]=Cesium['Cartesian4'][_0x3b67da(0x279)](createPlane(_0x113d36[0x6],_0x113d36[0x2],_0x113d36[0x5])),this['_oriClipPlane'][0x4]=Cesium[_0x3b67da(0x20d)][_0x3b67da(0x279)](createPlane(_0x113d36[0x6],_0x113d36[0x7],_0x113d36[0x2])),this['_oriClipPlane'][0x5]=Cesium[_0x3b67da(0x20d)][_0x3b67da(0x279)](createPlane(_0x113d36[0x6],_0x113d36[0x5],_0x113d36[0x7]));}else for(let _0x4451a1=0x0;_0x4451a1<_0x22bd7b[_0x3b67da(0x2bc)][_0x3b67da(0x294)];_0x4451a1++){let _0x475f31=_0x22bd7b['planePos'][_0x4451a1],_0x181b13=_0x22bd7b[_0x3b67da(0x25e)][_0x4451a1];this[_0x3b67da(0x1d9)][_0x4451a1]['x']=_0x181b13['x'],this[_0x3b67da(0x1d9)][_0x4451a1]['y']=_0x181b13['y'],this[_0x3b67da(0x1d9)][_0x4451a1]['z']=_0x181b13['z'],this['_oriClipPlane'][_0x4451a1]['w']=-Cesium[_0x3b67da(0x2a5)]['dot'](_0x475f31,_0x181b13);}!this[_0x3b67da(0x1da)]&&this['_tranverseRenderEntity']({'enable':!![]},clipCallback),this[_0x3b67da(0x1da)]=!![];};function convertToColumbusViewCartesian(_0xb68af0){const _0x1af37b=_0x391533;var _0x554789=new Cesium[(_0x1af37b(0x1a5))](),_0x3b60d2=_0x554789[_0x1af37b(0x232)],_0x5f2d73=new Cesium['Cartesian3'](),_0x2e06be=new Cesium[(_0x1af37b(0x229))]();return _0x3b60d2[_0x1af37b(0x2c7)](_0xb68af0,_0x2e06be),_0x554789[_0x1af37b(0x1eb)](_0x2e06be,_0x5f2d73),Cesium[_0x1af37b(0x2a5)][_0x1af37b(0x2fc)](_0x5f2d73['z'],_0x5f2d73['x'],_0x5f2d73['y']);}S3MTilesLayer['prototype']['clearCustomClipBox']=function(){const _0x5b0c0d=_0x391533;this[_0x5b0c0d(0x1da)]=![],this[_0x5b0c0d(0x1c1)]=![],this[_0x5b0c0d(0x246)]({'enable':![]},clipCallback);},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x246)]=function(_0x10ff19,_0x548413){const _0x1fece6=_0x391533;let _0x49671a=[];for(let _0x119b4b=0x0,_0x4e3ee3=this[_0x1fece6(0x1d3)][_0x1fece6(0x294)];_0x119b4b<_0x4e3ee3;_0x119b4b++){let _0x36bed9=this[_0x1fece6(0x1d3)][_0x119b4b];_0x49671a[_0x1fece6(0x207)](_0x36bed9);}while(_0x49671a['length']){let _0x583e7d=_0x49671a[_0x1fece6(0x28b)]();for(let _0x411b91=0x0,_0x16985e=_0x583e7d[_0x1fece6(0x19a)]['length'];_0x411b91<_0x16985e;_0x411b91++){const _0x4009f1=_0x583e7d[_0x1fece6(0x19a)][_0x411b91];for(let _0x35b28f=0x0,_0x54753a=_0x4009f1[_0x1fece6(0x294)];_0x35b28f<_0x54753a;_0x35b28f++){_0x4009f1[_0x35b28f]['ready']&&_0x548413(_0x4009f1[_0x35b28f],_0x10ff19);}}for(let _0xdc3963=0x0,_0x1781d0=_0x583e7d['children'][_0x1fece6(0x294)];_0xdc3963<_0x1781d0;_0xdc3963++){_0x49671a['push'](_0x583e7d['children'][_0xdc3963]);}}};function updateObjsOperationCallback(_0x3d5721,_0x37e800){const _0x595dd9=_0x391533;_0x3d5721['updateObjsOperation'](_0x37e800[_0x595dd9(0x2d6)],_0x37e800);}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x271)]=function(_0x48236d){const _0x3a6400=_0x391533;this[_0x3a6400(0x246)]({'ids':_0x48236d},updateObjsOperationCallback);};function updateObjsColorCallback(_0x16fdaf,_0x1d9fe6){const _0x4aa0b7=_0x391533;_0x16fdaf[_0x4aa0b7(0x1db)](_0x1d9fe6[_0x4aa0b7(0x2d6)],_0x1d9fe6);}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x1d4)]=function(_0x39f30f){this['_tranverseRenderEntity']({'ids':_0x39f30f},updateObjsColorCallback);};function updateAllObjsVisibleCallback(_0x4a9f43,_0x3e0c22){const _0x1fa0cd=_0x391533;_0x4a9f43[_0x1fa0cd(0x1e7)](_0x3e0c22['isVisible']);}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x2a3)]=function(_0x16d137){const _0x38ad87=_0x391533;this[_0x38ad87(0x246)]({'isVisible':_0x16d137},updateAllObjsVisibleCallback);},S3MTilesLayer[_0x391533(0x248)]['_setObjsOperationType']=function(_0x35ebc1,_0x1cfa38){const _0x1aa9bb=_0x391533;Cesium[_0x1aa9bb(0x2e5)]['defined']('set\x20Objs\x20Operation\x20ids',_0x35ebc1),Cesium[_0x1aa9bb(0x2e5)][_0x1aa9bb(0x2b9)](_0x1aa9bb(0x1a3),_0x1cfa38);!Array[_0x1aa9bb(0x2a4)](_0x35ebc1)&&(_0x35ebc1=[_0x35ebc1]);let _0x21b706=new Cesium['AssociativeArray'](),_0x477789;for(let _0x1f07fc=0x0,_0x297a8f=_0x35ebc1[_0x1aa9bb(0x294)];_0x1f07fc<_0x297a8f;_0x1f07fc++){_0x477789=_0x35ebc1[_0x1f07fc];if(!Cesium[_0x1aa9bb(0x2b9)](_0x477789))continue;let _0x375c23=Cesium['defaultValue'](this[_0x1aa9bb(0x1fd)]['get'](_0x477789),0x0);if(_0x375c23===_0x1cfa38)continue;_0x375c23=_0x375c23|_0x1cfa38,this[_0x1aa9bb(0x1fd)]['set'](_0x477789,_0x375c23),_0x21b706[_0x1aa9bb(0x202)](_0x477789,_0x375c23);}_0x21b706[_0x1aa9bb(0x294)]>0x0&&this[_0x1aa9bb(0x271)](_0x21b706);},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x1d6)]=function(_0x500f8b,_0x5cc7dd){const _0x5a15f1=_0x391533;Cesium[_0x5a15f1(0x2e5)][_0x5a15f1(0x2b9)](_0x5a15f1(0x194),_0x500f8b);!Array[_0x5a15f1(0x2a4)](_0x500f8b)&&(_0x500f8b=[_0x500f8b]);let _0x15dccf=_0x33d894['ALL']^_0x5cc7dd,_0x25a87e=new Cesium[(_0x5a15f1(0x242))](),_0x361827;for(let _0x4dd05a=0x0,_0x58bc8f=_0x500f8b[_0x5a15f1(0x294)];_0x4dd05a<_0x58bc8f;_0x4dd05a++){_0x361827=_0x500f8b[_0x4dd05a];let _0x1f0ddb=this[_0x5a15f1(0x1fd)][_0x5a15f1(0x29b)](_0x361827);if(!Cesium[_0x5a15f1(0x2b9)](_0x1f0ddb))continue;_0x1f0ddb&=_0x15dccf,_0x1f0ddb===_0x33d894[_0x5a15f1(0x2d8)]?this[_0x5a15f1(0x1fd)][_0x5a15f1(0x266)](_0x361827):this['_objsOperationList']['set'](_0x361827,_0x1f0ddb),_0x25a87e['set'](_0x361827,_0x1f0ddb);}_0x25a87e[_0x5a15f1(0x294)]>0x0&&this[_0x5a15f1(0x271)](_0x25a87e);},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x2e0)]=function(_0x48b8b4){const _0x445e10=_0x391533;let _0x3e58c7=Cesium[_0x445e10(0x2a5)][_0x445e10(0x22c)](_0x48b8b4),_0xd41862=new Cesium[(_0x445e10(0x19b))]({'polygonHierarchy':{'positions':_0x3e58c7},'perPositionHeight':!![]}),_0x1026ea=Cesium['PolygonGeometry']['createGeometry'](_0xd41862),_0x491d0f=new RasterRegion();return _0x491d0f[_0x445e10(0x277)](_0x1026ea,this[_0x445e10(0x26a)]),_0x491d0f[_0x445e10(0x254)](_0x1026ea),_0x491d0f;};function flattenCallback(_0x507e24,_0x32405a){const _0x27ea9f=_0x391533;_0x507e24[_0x27ea9f(0x1ba)](_0x32405a);}S3MTilesLayer['prototype'][_0x391533(0x2eb)]=function(_0x53d0d8){const _0x3ca25c=_0x391533;let _0x56d5e6=_0x53d0d8[_0x3ca25c(0x268)],_0x35daaa=_0x53d0d8[_0x3ca25c(0x1c5)];if(!_0x56d5e6||!_0x35daaa)return;let _0x5870c6=this[_0x3ca25c(0x2b1)],_0x4c2365=_0x5870c6[_0x3ca25c(0x2de)];if(_0x4c2365['contains'](_0x56d5e6))return;!_0x5870c6[_0x3ca25c(0x208)]&&(_0x5870c6['texture']=new Cesium[(_0x3ca25c(0x297))]({'context':this[_0x3ca25c(0x243)],'width':_0x5870c6[_0x3ca25c(0x20b)],'height':_0x5870c6[_0x3ca25c(0x1f9)],'pixelFormat':Cesium[_0x3ca25c(0x2b6)][_0x3ca25c(0x2c1)]}));let _0xd36694=this[_0x3ca25c(0x2e0)](_0x35daaa);_0x4c2365[_0x3ca25c(0x202)](_0x56d5e6,_0xd36694),_0x5870c6[_0x3ca25c(0x26f)]=!![],_0x4c2365['values'][_0x3ca25c(0x294)]===0x1&&this[_0x3ca25c(0x246)]({'enable':!![]},flattenCallback);};function hypsometricCallback(_0x342669,_0x3d14d7){_0x342669['hypsometric'](_0x3d14d7);}function swipeCallback(_0x5f2297,_0x1657e3){const _0x146727=_0x391533;_0x5f2297[_0x146727(0x292)](_0x1657e3);}function combineRegionBounds(_0x60fd55){const _0x517fa7=_0x391533;let _0x2ff925=new Cesium['Cartesian4'](Number[_0x517fa7(0x2d4)],Number['MAX_VALUE'],-Number[_0x517fa7(0x2d4)],-Number[_0x517fa7(0x2d4)]);for(let _0x3a4e0b=0x0;_0x3a4e0b<_0x60fd55[_0x517fa7(0x294)];_0x3a4e0b++){const _0x3450e1=_0x60fd55[_0x3a4e0b][_0x517fa7(0x196)];_0x2ff925['x']=Math[_0x517fa7(0x256)](_0x3450e1['x'],_0x2ff925['x']),_0x2ff925['y']=Math[_0x517fa7(0x256)](_0x3450e1['y'],_0x2ff925['y']),_0x2ff925['z']=Math[_0x517fa7(0x29c)](_0x3450e1['z'],_0x2ff925['z']),_0x2ff925['w']=Math[_0x517fa7(0x29c)](_0x3450e1['w'],_0x2ff925['w']);}return _0x2ff925;}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x298)]=function(_0x2c349e){const _0x3a0d58=_0x391533;let _0x2b1320=this[_0x3a0d58(0x2b1)];if(!_0x2b1320[_0x3a0d58(0x26f)])return;_0x2b1320[_0x3a0d58(0x26f)]=![];let _0x472275=_0x2b1320['regions'],_0x2b7bde=_0x472275[_0x3a0d58(0x241)][_0x3a0d58(0x294)];_0x2b1320[_0x3a0d58(0x220)]=_0x2b7bde>0x0,_0x2b1320[_0x3a0d58(0x196)]=combineRegionBounds(_0x472275[_0x3a0d58(0x241)]);let _0x42ad36=new Cesium[(_0x3a0d58(0x276))]({'color':new Cesium[(_0x3a0d58(0x2c4))](0x1,0x1,0x1,0x1),'depth':0x1});!_0x2b1320[_0x3a0d58(0x208)]&&(_0x2b1320[_0x3a0d58(0x208)]=new Cesium[(_0x3a0d58(0x297))]({'context':this[_0x3a0d58(0x243)],'width':_0x2b1320[_0x3a0d58(0x20b)],'height':_0x2b1320[_0x3a0d58(0x1f9)],'pixelFormat':Cesium[_0x3a0d58(0x2b6)]['RGBA']}));!_0x2b1320[_0x3a0d58(0x2d2)]&&(_0x2b1320['fbo']=new Cesium[(_0x3a0d58(0x1be))]({'context':this['context'],'colorTextures':[_0x2b1320[_0x3a0d58(0x208)]],'destroyAttachments':![]}));_0x42ad36[_0x3a0d58(0x293)]=_0x2b1320[_0x3a0d58(0x2d2)],_0x42ad36['renderState']=Cesium['RenderState'][_0x3a0d58(0x285)](),_0x42ad36['execute'](this['context']);for(let _0x59a42c=0x0;_0x59a42c<_0x2b7bde;_0x59a42c++){let _0x22bf31=_0x472275[_0x3a0d58(0x241)][_0x59a42c];_0x22bf31[_0x3a0d58(0x234)](this[_0x3a0d58(0x243)],_0x2b1320[_0x3a0d58(0x2d2)]),_0x22bf31[_0x3a0d58(0x1e8)]['uniformMap']={'uRect':function(){return _0x2b1320['bounds'];}},_0x22bf31[_0x3a0d58(0x1e8)]['execute'](this[_0x3a0d58(0x243)]);}},S3MTilesLayer['prototype'][_0x391533(0x290)]=function(_0x56bb4a,_0x5132e8){const _0x55cd77=_0x391533;if(_0x56bb4a>0x8)throw new Cesium[(_0x55cd77(0x301))](_0x55cd77(0x1d8));_0x5132e8?this[_0x55cd77(0x2e8)]=0x1<<_0x56bb4a|this['_visibleViewport']:this[_0x55cd77(0x2e8)]=~(0x1<<_0x56bb4a)&this[_0x55cd77(0x2e8)];},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x284)]=function(_0x22d2af){const _0xa3b850=_0x391533;if(_0x22d2af>0x8)throw new Cesium[(_0xa3b850(0x301))](_0xa3b850(0x2fb));return 0x1<<_0x22d2af&this[_0xa3b850(0x2e8)];},S3MTilesLayer[_0x391533(0x248)][_0x391533(0x21e)]=function(){const _0x5ab446=_0x391533;if(this['_edgeCurrentCount']===0x0){this['_edgeCurrentTotalLength']=0x0;return;}this[_0x5ab446(0x197)]=this[_0x5ab446(0x2f9)]/this[_0x5ab446(0x23e)]*0x28,this['_edgeCurrentTotalLength']=0x0,this['_edgeCurrentCount']=0x0;},S3MTilesLayer[_0x391533(0x248)]['_addRenderedEdge']=function(_0x5c10e5,_0x105811){const _0x1bc7a0=_0x391533;this[_0x1bc7a0(0x2f9)]+=_0x5c10e5,this[_0x1bc7a0(0x23e)]+=_0x105811;};function updateWaterPlane(_0x5b84c4,_0x52780e){const _0x1fab58=_0x391533;if(!_0x5b84c4[_0x1fab58(0x21d)])return;let _0x3faf1e=_0x5b84c4[_0x1fab58(0x21d)];_0x52780e[_0x1fab58(0x2ce)]===undefined&&(_0x52780e['curDis']=0x615299);_0x52780e['heightOffset']===undefined&&(_0x52780e[_0x1fab58(0x267)]=0x0);let _0x38db3c=_0x52780e[_0x1fab58(0x1fb)]['positionWC'];for(let _0x2f849f in _0x3faf1e[_0x1fab58(0x1c4)]){if(_0x3faf1e[_0x1fab58(0x1c4)][_0x1fab58(0x1cc)](_0x2f849f)){let _0x2bd371=_0x3faf1e['get'](_0x2f849f),_0x71e392=_0x2bd371['boundingVolume'];if(_0x52780e['cullingVolume'][_0x1fab58(0x199)](_0x71e392)===Cesium[_0x1fab58(0x28e)][_0x1fab58(0x1fa)])continue;let _0x4b2dbd=Cesium[_0x1fab58(0x2a5)][_0x1fab58(0x29a)](_0x71e392[_0x1fab58(0x230)],_0x38db3c)-_0x71e392[_0x1fab58(0x25b)];_0x4b2dbd=_0x4b2dbd<0.01?0.01:_0x4b2dbd,_0x4b2dbd<_0x52780e[_0x1fab58(0x2ce)]&&(_0x52780e[_0x1fab58(0x2ce)]=_0x4b2dbd,_0x52780e['heightOffset']=_0x2bd371['distance']);}}}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x28c)]=function(_0x204393){const _0x4700c7=_0x391533;let _0x1ee315=this['_waterPlanes'][_0x4700c7(0x294)];return this[_0x4700c7(0x21d)][_0x4700c7(0x202)](_0x1ee315,_0x204393),_0x1ee315;},S3MTilesLayer[_0x391533(0x248)]['removeWaterPlane']=function(_0x9cc013){const _0x4b2575=_0x391533;this[_0x4b2575(0x21d)][_0x4b2575(0x266)](_0x9cc013);},S3MTilesLayer['prototype'][_0x391533(0x1f5)]=function(_0x7be3f9){const _0x1e0a4f=_0x391533;if(!this[_0x1e0a4f(0x1fc)])return;_0x7be3f9[_0x1e0a4f(0x2f0)]&&(this[_0x1e0a4f(0x2c8)]['reset'](),this[_0x1e0a4f(0x203)][_0x1e0a4f(0x294)]=0x0,this[_0x1e0a4f(0x1de)][_0x1e0a4f(0x294)]=0x0,this['_selectedTiles']['length']=0x0,Cesium[_0x1e0a4f(0x2b9)](_0x7be3f9[_0x1e0a4f(0x288)])&&_0x7be3f9[_0x1e0a4f(0x288)]['update'](_0x7be3f9),updateWaterPlane(this,_0x7be3f9));};let scratchtTransposeViewMatrix=new Cesium[(_0x391533(0x24d))]();S3MTilesLayer[_0x391533(0x248)][_0x391533(0x1e2)]=function(_0x26256e){const _0x3bc328=_0x391533;if(!this['ready'])return;freeResource(this),this[_0x3bc328(0x298)](_0x26256e),this[_0x3bc328(0x21e)](),this[_0x3bc328(0x2dc)]&&this[_0x3bc328(0x2dc)][_0x3bc328(0x27a)](this['id']);};function isLayerVisible(_0x2955a0,_0x58ce59){const _0x423284=_0x391533;let _0x869430=_0x58ce59[_0x423284(0x1fb)];if(_0x869430[_0x423284(0x1ce)][_0x423284(0x233)]<_0x2955a0[_0x423284(0x1c8)]||_0x869430[_0x423284(0x1ce)][_0x423284(0x233)]>_0x2955a0[_0x423284(0x236)])return ![];if(!_0x2955a0['getVisibleInViewport'](_0x58ce59[_0x423284(0x1d7)]))return ![];return _0x2955a0[_0x423284(0x2a0)];}function updateClipPlanes(_0xe8aa55,_0x3a607e){const _0x3eeee3=_0x391533;if(_0xe8aa55[_0x3eeee3(0x1da)]){let _0x4f9940=_0x3a607e[_0x3eeee3(0x1fb)][_0x3eeee3(0x1ad)];Cesium['Matrix4'][_0x3eeee3(0x2e7)](_0x4f9940,scratchtTransposeViewMatrix);for(let _0x88bda2=0x0;_0x88bda2<0x6;_0x88bda2++){Cesium[_0x3eeee3(0x24d)][_0x3eeee3(0x26d)](scratchtTransposeViewMatrix,_0xe8aa55[_0x3eeee3(0x1d9)][_0x88bda2],_0xe8aa55[_0x3eeee3(0x235)][_0x88bda2]);}}}S3MTilesLayer[_0x391533(0x248)][_0x391533(0x1a8)]=function(_0x2395b3){const _0xdb51fa=_0x391533;if(!this['ready']||!isLayerVisible(this,_0x2395b3)||_0x2395b3['passes'][_0xdb51fa(0x1d5)]&&!this[_0xdb51fa(0x2bd)])return;this[_0xdb51fa(0x27b)]['schedule'](this,_0x2395b3),requestTiles(this),processTiles(this,_0x2395b3),updateTiles(this,_0x2395b3),updateClipPlanes(this,_0x2395b3);},S3MTilesLayer[_0x391533(0x248)]['isDestroyed']=function(){return ![];},S3MTilesLayer['prototype']['destroy']=function(){const _0x1831fd=_0x391533;return this['_cache'][_0x1831fd(0x238)](),freeResource(this),this[_0x1831fd(0x1d3)][_0x1831fd(0x294)]=0x0,this[_0x1831fd(0x203)][_0x1831fd(0x294)]=0x0,this['_processTiles'][_0x1831fd(0x294)]=0x0,this[_0x1831fd(0x23f)]['length']=0x0,this[_0x1831fd(0x29d)][_0x1831fd(0x294)]=0x0,this[_0x1831fd(0x1fd)][_0x1831fd(0x2a7)](),this[_0x1831fd(0x25a)][_0x1831fd(0x2a7)](),this['_objsHideList'][_0x1831fd(0x2a7)](),this['_objsVisibleMap']={},this[_0x1831fd(0x1b8)]={},this[_0x1831fd(0x2b0)][_0x1831fd(0x1f0)](),this[_0x1831fd(0x2b1)][_0x1831fd(0x1f0)](),Cesium[_0x1831fd(0x250)](this);};

    var _0xdf17f0 = (function (globalObject) {

    /*
     *      bignumber.js v8.1.1
     *      A JavaScript library for arbitrary-precision arithmetic.
     *      https://github.com/MikeMcl/bignumber.js
     *      Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
     *      MIT Licensed.
     *
     *      BigNumber.prototype methods     |  BigNumber methods
     *                                      |
     *      absoluteValue            abs    |  clone
     *      comparedTo                      |  config               set
     *      decimalPlaces            dp     |      DECIMAL_PLACES
     *      dividedBy                div    |      ROUNDING_MODE
     *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
     *      exponentiatedBy          pow    |      RANGE
     *      integerValue                    |      CRYPTO
     *      isEqualTo                eq     |      MODULO_MODE
     *      isFinite                        |      POW_PRECISION
     *      isGreaterThan            gt     |      FORMAT
     *      isGreaterThanOrEqualTo   gte    |      ALPHABET
     *      isInteger                       |  isBigNumber
     *      isLessThan               lt     |  maximum              max
     *      isLessThanOrEqualTo      lte    |  minimum              min
     *      isNaN                           |  random
     *      isNegative                      |  sum
     *      isPositive                      |
     *      isZero                          |
     *      minus                           |
     *      modulo                   mod    |
     *      multipliedBy             times  |
     *      negated                         |
     *      plus                            |
     *      precision                sd     |
     *      shiftedBy                       |
     *      squareRoot               sqrt   |
     *      toExponential                   |
     *      toFixed                         |
     *      toFormat                        |
     *      toFraction                      |
     *      toJSON                          |
     *      toNumber                        |
     *      toPrecision                     |
     *      toString                        |
     *      valueOf                         |
     *
     */


      var BigNumber,
        isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        hasSymbol = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol',

        mathceil = Math.ceil,
        mathfloor = Math.floor,

        bignumberError = '[BigNumber Error] ',
        tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

        BASE = 1e14,
        LOG_BASE = 14,
        MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
        // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
        POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        SQRT_BASE = 1e7,

        // EDITABLE
        // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
        // the arguments to toExponential, toFixed, toFormat, and toPrecision.
        MAX = 1E9;                                   // 0 to MAX_INT32


      /*
       * Create and return a BigNumber constructor.
       */
      function clone(configObject) {
        var div, convertBase, parseNumeric,
          P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
          ONE = new BigNumber(1),


          //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


          // The default values below must be integers within the inclusive ranges stated.
          // The values can also be changed at run-time using BigNumber.set.

          // The maximum number of decimal places for operations involving division.
          DECIMAL_PLACES = 20,                     // 0 to MAX

          // The rounding mode used when rounding to the above decimal places, and when using
          // toExponential, toFixed, toFormat and toPrecision, and round (default value).
          // UP         0 Away from zero.
          // DOWN       1 Towards zero.
          // CEIL       2 Towards +Infinity.
          // FLOOR      3 Towards -Infinity.
          // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
          // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
          // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
          // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
          // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
          ROUNDING_MODE = 4,                       // 0 to 8

          // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

          // The exponent value at and beneath which toString returns exponential notation.
          // Number type: -7
          TO_EXP_NEG = -7,                         // 0 to -MAX

          // The exponent value at and above which toString returns exponential notation.
          // Number type: 21
          TO_EXP_POS = 21,                         // 0 to MAX

          // RANGE : [MIN_EXP, MAX_EXP]

          // The minimum exponent value, beneath which underflow to zero occurs.
          // Number type: -324  (5e-324)
          MIN_EXP = -1e7,                          // -1 to -MAX

          // The maximum exponent value, above which overflow to Infinity occurs.
          // Number type:  308  (1.7976931348623157e+308)
          // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
          MAX_EXP = 1e7,                           // 1 to MAX

          // Whether to use cryptographically-secure random number generation, if available.
          CRYPTO = false,                          // true or false

          // The modulo mode used when calculating the modulus: a mod n.
          // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
          // The remainder (r) is calculated as: r = a - n * q.
          //
          // UP        0 The remainder is positive if the dividend is negative, else is negative.
          // DOWN      1 The remainder has the same sign as the dividend.
          //             This modulo mode is commonly known as 'truncated division' and is
          //             equivalent to (a % n) in JavaScript.
          // FLOOR     3 The remainder has the same sign as the divisor (Python %).
          // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
          // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
          //             The remainder is always positive.
          //
          // The truncated division, floored division, Euclidian division and IEEE 754 remainder
          // modes are commonly used for the modulus operation.
          // Although the other rounding modes can also be used, they may not give useful results.
          MODULO_MODE = 1,                         // 0 to 9

          // The maximum number of significant digits of the result of the exponentiatedBy operation.
          // If POW_PRECISION is 0, there will be unlimited significant digits.
          POW_PRECISION = 0,                    // 0 to MAX

          // The format specification used by the BigNumber.prototype.toFormat method.
          FORMAT = {
            prefix: '',
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ',',
            decimalSeparator: '.',
            fractionGroupSize: 0,
            fractionGroupSeparator: '\xA0',      // non-breaking space
            suffix: ''
          },

          // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
          // '-', '.', whitespace, or repeated character.
          // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
          ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


        //------------------------------------------------------------------------------------------


        // CONSTRUCTOR


        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * v {number|string|BigNumber} A numeric value.
         * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
         */
        function BigNumber(v, b) {
          var alphabet, c, caseChanged, e, i, isNum, len, str,
            x = this;

          // Enable constructor call without `new`.
          if (!(x instanceof BigNumber)) return new BigNumber(v, b);

          if (b == null) {

            if (v && v._isBigNumber === true) {
              x.s = v.s;

              if (!v.c || v.e > MAX_EXP) {
                x.c = x.e = null;
              } else if (v.e < MIN_EXP) {
                x.c = [x.e = 0];
              } else {
                x.e = v.e;
                x.c = v.c.slice();
              }

              return;
            }

            if ((isNum = typeof v == 'number') && v * 0 == 0) {

              // Use `1 / n` to handle minus zero also.
              x.s = 1 / v < 0 ? (v = -v, -1) : 1;

              // Fast path for integers, where n < 2147483648 (2**31).
              if (v === ~~v) {
                for (e = 0, i = v; i >= 10; i /= 10, e++);

                if (e > MAX_EXP) {
                  x.c = x.e = null;
                } else {
                  x.e = e;
                  x.c = [v];
                }

                return;
              }

              str = String(v);
            } else {

              if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

              x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
            }

            // Decimal point?
            if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

            // Exponential form?
            if ((i = str.search(/e/i)) > 0) {

              // Determine exponent.
              if (e < 0) e = i;
              e += +str.slice(i + 1);
              str = str.substring(0, i);
            } else if (e < 0) {

              // Integer.
              e = str.length;
            }

          } else {

            // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
            intCheck(b, 2, ALPHABET.length, 'Base');

            // Allow exponential notation to be used with base 10 argument, while
            // also rounding to DECIMAL_PLACES as with other bases.
            if (b == 10) {
              x = new BigNumber(v);
              return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            }

            str = String(v);

            if (isNum = typeof v == 'number') {

              // Avoid potential interpretation of Infinity and NaN as base 44+ values.
              if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

              x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

              // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
              if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
                throw Error
                 (tooManyDigits + v);
              }
            } else {
              x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }

            alphabet = ALPHABET.slice(0, b);
            e = i = 0;

            // Check that str is a valid base b number.
            // Don't use RegExp, so alphabet can contain special characters.
            for (len = str.length; i < len; i++) {
              if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                if (c == '.') {

                  // If '.' is not the first character and it has not be found before.
                  if (i > e) {
                    e = len;
                    continue;
                  }
                } else if (!caseChanged) {

                  // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                  if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                      str == str.toLowerCase() && (str = str.toUpperCase())) {
                    caseChanged = true;
                    i = -1;
                    e = 0;
                    continue;
                  }
                }

                return parseNumeric(x, String(v), isNum, b);
              }
            }

            // Prevent later check for length on converted number.
            isNum = false;
            str = convertBase(str, b, 10, x.s);

            // Decimal point?
            if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
            else e = str.length;
          }

          // Determine leading zeros.
          for (i = 0; str.charCodeAt(i) === 48; i++);

          // Determine trailing zeros.
          for (len = str.length; str.charCodeAt(--len) === 48;);

          if (str = str.slice(i, ++len)) {
            len -= i;

            // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
            if (isNum && BigNumber.DEBUG &&
              len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                throw Error
                 (tooManyDigits + (x.s * v));
            }

             // Overflow?
            if ((e = e - i - 1) > MAX_EXP) {

              // Infinity.
              x.c = x.e = null;

            // Underflow?
            } else if (e < MIN_EXP) {

              // Zero.
              x.c = [x.e = 0];
            } else {
              x.e = e;
              x.c = [];

              // Transform base

              // e is the base 10 exponent.
              // i is where to slice str to get the first element of the coefficient array.
              i = (e + 1) % LOG_BASE;
              if (e < 0) i += LOG_BASE;  // i < 1

              if (i < len) {
                if (i) x.c.push(+str.slice(0, i));

                for (len -= LOG_BASE; i < len;) {
                  x.c.push(+str.slice(i, i += LOG_BASE));
                }

                i = LOG_BASE - (str = str.slice(i)).length;
              } else {
                i -= len;
              }

              for (; i--; str += '0');
              x.c.push(+str);
            }
          } else {

            // Zero.
            x.c = [x.e = 0];
          }
        }


        // CONSTRUCTOR PROPERTIES


        BigNumber.clone = clone;

        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;


        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object with the following optional properties (if the value of a property is
         * a number, it must be an integer within the inclusive range stated):
         *
         *   DECIMAL_PLACES   {number}           0 to MAX
         *   ROUNDING_MODE    {number}           0 to 8
         *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
         *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
         *   CRYPTO           {boolean}          true or false
         *   MODULO_MODE      {number}           0 to 9
         *   POW_PRECISION       {number}           0 to MAX
         *   ALPHABET         {string}           A string of two or more unique characters which does
         *                                       not contain '.'.
         *   FORMAT           {object}           An object with some of the following properties:
         *     prefix                 {string}
         *     groupSize              {number}
         *     secondaryGroupSize     {number}
         *     groupSeparator         {string}
         *     decimalSeparator       {string}
         *     fractionGroupSize      {number}
         *     fractionGroupSeparator {string}
         *     suffix                 {string}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined, except for ALPHABET.
         *
         * Return an object with the properties current values.
         */
        BigNumber.config = BigNumber.set = function (obj) {
          var p, v;

          if (obj != null) {

            if (typeof obj == 'object') {

              // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
              // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                DECIMAL_PLACES = v;
              }

              // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
              // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
                v = obj[p];
                intCheck(v, 0, 8, p);
                ROUNDING_MODE = v;
              }

              // EXPONENTIAL_AT {number|number[]}
              // Integer, -MAX to MAX inclusive or
              // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
              // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, 0, p);
                  intCheck(v[1], 0, MAX, p);
                  TO_EXP_NEG = v[0];
                  TO_EXP_POS = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                }
              }

              // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
              // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
              // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
              if (obj.hasOwnProperty(p = 'RANGE')) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, -1, p);
                  intCheck(v[1], 1, MAX, p);
                  MIN_EXP = v[0];
                  MAX_EXP = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  if (v) {
                    MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                  } else {
                    throw Error
                     (bignumberError + p + ' cannot be zero: ' + v);
                  }
                }
              }

              // CRYPTO {boolean} true or false.
              // '[BigNumber Error] CRYPTO not true or false: {v}'
              // '[BigNumber Error] crypto unavailable'
              if (obj.hasOwnProperty(p = 'CRYPTO')) {
                v = obj[p];
                if (v === !!v) {
                  if (v) {
                    if (typeof crypto != 'undefined' && crypto &&
                     (crypto.getRandomValues || crypto.randomBytes)) {
                      CRYPTO = v;
                    } else {
                      CRYPTO = !v;
                      throw Error
                       (bignumberError + 'crypto unavailable');
                    }
                  } else {
                    CRYPTO = v;
                  }
                } else {
                  throw Error
                   (bignumberError + p + ' not true or false: ' + v);
                }
              }

              // MODULO_MODE {number} Integer, 0 to 9 inclusive.
              // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
                v = obj[p];
                intCheck(v, 0, 9, p);
                MODULO_MODE = v;
              }

              // POW_PRECISION {number} Integer, 0 to MAX inclusive.
              // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
              if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                POW_PRECISION = v;
              }

              // FORMAT {object}
              // '[BigNumber Error] FORMAT not an object: {v}'
              if (obj.hasOwnProperty(p = 'FORMAT')) {
                v = obj[p];
                if (typeof v == 'object') FORMAT = v;
                else throw Error
                 (bignumberError + p + ' not an object: ' + v);
              }

              // ALPHABET {string}
              // '[BigNumber Error] ALPHABET invalid: {v}'
              if (obj.hasOwnProperty(p = 'ALPHABET')) {
                v = obj[p];

                // Disallow if only one character,
                // or if it contains '+', '-', '.', whitespace, or a repeated character.
                if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
                  ALPHABET = v;
                } else {
                  throw Error
                   (bignumberError + p + ' invalid: ' + v);
                }
              }

            } else {

              // '[BigNumber Error] Object expected: {v}'
              throw Error
               (bignumberError + 'Object expected: ' + obj);
            }
          }

          return {
            DECIMAL_PLACES: DECIMAL_PLACES,
            ROUNDING_MODE: ROUNDING_MODE,
            EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
            RANGE: [MIN_EXP, MAX_EXP],
            CRYPTO: CRYPTO,
            MODULO_MODE: MODULO_MODE,
            POW_PRECISION: POW_PRECISION,
            FORMAT: FORMAT,
            ALPHABET: ALPHABET
          };
        };


        /*
         * Return true if v is a BigNumber instance, otherwise return false.
         *
         * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
         *
         * v {any}
         *
         * '[BigNumber Error] Invalid BigNumber: {v}'
         */
        BigNumber.isBigNumber = function (v) {
          if (!v || v._isBigNumber !== true) return false;
          if (!BigNumber.DEBUG) return true;

          var i, n,
            c = v.c,
            e = v.e,
            s = v.s;

          out: if ({}.toString.call(c) == '[object Array]') {

            if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

              // If the first element is zero, the BigNumber value must be zero.
              if (c[0] === 0) {
                if (e === 0 && c.length === 1) return true;
                break out;
              }

              // Calculate number of digits that c[0] should have, based on the exponent.
              i = (e + 1) % LOG_BASE;
              if (i < 1) i += LOG_BASE;

              // Calculate number of digits of c[0].
              //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
              if (String(c[0]).length == i) {

                for (i = 0; i < c.length; i++) {
                  n = c[i];
                  if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                }

                // Last element cannot be zero, unless it is the only element.
                if (n !== 0) return true;
              }
            }

          // Infinity/NaN
          } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
            return true;
          }

          throw Error
            (bignumberError + 'Invalid BigNumber: ' + v);
        };


        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.maximum = BigNumber.max = function () {
          return maxOrMin(arguments, P.lt);
        };


        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.minimum = BigNumber.min = function () {
          return maxOrMin(arguments, P.gt);
        };


        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
         * '[BigNumber Error] crypto unavailable'
         */
        BigNumber.random = (function () {
          var pow2_53 = 0x20000000000000;

          // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
          // Check if Math.random() produces more than 32 bits of randomness.
          // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
          // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
          var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
           ? function () { return mathfloor(Math.random() * pow2_53); }
           : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
             (Math.random() * 0x800000 | 0); };

          return function (dp) {
            var a, b, e, k, v,
              i = 0,
              c = [],
              rand = new BigNumber(ONE);

            if (dp == null) dp = DECIMAL_PLACES;
            else intCheck(dp, 0, MAX);

            k = mathceil(dp / LOG_BASE);

            if (CRYPTO) {

              // Browsers supporting crypto.getRandomValues.
              if (crypto.getRandomValues) {

                a = crypto.getRandomValues(new Uint32Array(k *= 2));

                for (; i < k;) {

                  // 53 bits:
                  // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                  // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                  // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                  //                                     11111 11111111 11111111
                  // 0x20000 is 2^21.
                  v = a[i] * 0x20000 + (a[i + 1] >>> 11);

                  // Rejection sampling:
                  // 0 <= v < 9007199254740992
                  // Probability that v >= 9e15, is
                  // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                  if (v >= 9e15) {
                    b = crypto.getRandomValues(new Uint32Array(2));
                    a[i] = b[0];
                    a[i + 1] = b[1];
                  } else {

                    // 0 <= v <= 8999999999999999
                    // 0 <= (v % 1e14) <= 99999999999999
                    c.push(v % 1e14);
                    i += 2;
                  }
                }
                i = k / 2;

              // Node.js supporting crypto.randomBytes.
              } else if (crypto.randomBytes) {

                // buffer
                a = crypto.randomBytes(k *= 7);

                for (; i < k;) {

                  // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                  // 0x100000000 is 2^32, 0x1000000 is 2^24
                  // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                  // 0 <= v < 9007199254740992
                  v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                     (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                     (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

                  if (v >= 9e15) {
                    crypto.randomBytes(7).copy(a, i);
                  } else {

                    // 0 <= (v % 1e14) <= 99999999999999
                    c.push(v % 1e14);
                    i += 7;
                  }
                }
                i = k / 7;
              } else {
                CRYPTO = false;
                throw Error
                 (bignumberError + 'crypto unavailable');
              }
            }

            // Use Math.random.
            if (!CRYPTO) {

              for (; i < k;) {
                v = random53bitInt();
                if (v < 9e15) c[i++] = v % 1e14;
              }
            }

            k = c[--i];
            dp %= LOG_BASE;

            // Convert trailing digits to zeros according to dp.
            if (k && dp) {
              v = POWS_TEN[LOG_BASE - dp];
              c[i] = mathfloor(k / v) * v;
            }

            // Remove trailing elements which are zero.
            for (; c[i] === 0; c.pop(), i--);

            // Zero?
            if (i < 0) {
              c = [e = 0];
            } else {

              // Remove leading elements which are zero and adjust exponent accordingly.
              for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

              // Count the digits of the first element of c to determine leading zeros, and...
              for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

              // adjust the exponent accordingly.
              if (i < LOG_BASE) e -= LOG_BASE - i;
            }

            rand.e = e;
            rand.c = c;
            return rand;
          };
        })();


        /*
         * Return a BigNumber whose value is the sum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.sum = function () {
          var i = 1,
            args = arguments,
            sum = new BigNumber(args[0]);
          for (; i < args.length;) sum = sum.plus(args[i++]);
          return sum;
        };


        // PRIVATE FUNCTIONS


        // Called by BigNumber and BigNumber.prototype.toString.
        convertBase = (function () {
          var decimal = '0123456789';

          /*
           * Convert string of baseIn to an array of numbers of baseOut.
           * Eg. toBaseOut('255', 10, 16) returns [15, 15].
           * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
           */
          function toBaseOut(str, baseIn, baseOut, alphabet) {
            var j,
              arr = [0],
              arrL,
              i = 0,
              len = str.length;

            for (; i < len;) {
              for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

              arr[0] += alphabet.indexOf(str.charAt(i++));

              for (j = 0; j < arr.length; j++) {

                if (arr[j] > baseOut - 1) {
                  if (arr[j + 1] == null) arr[j + 1] = 0;
                  arr[j + 1] += arr[j] / baseOut | 0;
                  arr[j] %= baseOut;
                }
              }
            }

            return arr.reverse();
          }

          // Convert a numeric string of baseIn to a numeric string of baseOut.
          // If the caller is toString, we are converting from base 10 to baseOut.
          // If the caller is BigNumber, we are converting from baseIn to base 10.
          return function (str, baseIn, baseOut, sign, callerIsToString) {
            var alphabet, d, e, k, r, x, xc, y,
              i = str.indexOf('.'),
              dp = DECIMAL_PLACES,
              rm = ROUNDING_MODE;

            // Non-integer.
            if (i >= 0) {
              k = POW_PRECISION;

              // Unlimited precision.
              POW_PRECISION = 0;
              str = str.replace('.', '');
              y = new BigNumber(baseIn);
              x = y.pow(str.length - i);
              POW_PRECISION = k;

              // Convert str as if an integer, then restore the fraction part by dividing the
              // result by its base raised to a power.

              y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
               10, baseOut, decimal);
              y.e = y.c.length;
            }

            // Convert the number as integer.

            xc = toBaseOut(str, baseIn, baseOut, callerIsToString
             ? (alphabet = ALPHABET, decimal)
             : (alphabet = decimal, ALPHABET));

            // xc now represents str as an integer and converted to baseOut. e is the exponent.
            e = k = xc.length;

            // Remove trailing zeros.
            for (; xc[--k] == 0; xc.pop());

            // Zero?
            if (!xc[0]) return alphabet.charAt(0);

            // Does str represent an integer? If so, no need for the division.
            if (i < 0) {
              --e;
            } else {
              x.c = xc;
              x.e = e;

              // The sign is needed for correct rounding.
              x.s = sign;
              x = div(x, y, dp, rm, baseOut);
              xc = x.c;
              r = x.r;
              e = x.e;
            }

            // xc now represents str converted to baseOut.

            // THe index of the rounding digit.
            d = e + dp + 1;

            // The rounding digit: the digit to the right of the digit that may be rounded up.
            i = xc[d];

            // Look at the rounding digits and mode to determine whether to round up.

            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;

            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
                  : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
                   rm == (x.s < 0 ? 8 : 7));

            // If the index of the rounding digit is not greater than zero, or xc represents
            // zero, then the result of the base conversion is zero or, if rounding up, a value
            // such as 0.00001.
            if (d < 1 || !xc[0]) {

              // 1^-dp or 0
              str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
            } else {

              // Truncate xc to the required number of decimal places.
              xc.length = d;

              // Round up?
              if (r) {

                // Rounding up may mean the previous digit has to be rounded up and so on.
                for (--baseOut; ++xc[--d] > baseOut;) {
                  xc[d] = 0;

                  if (!d) {
                    ++e;
                    xc = [1].concat(xc);
                  }
                }
              }

              // Determine trailing zeros.
              for (k = xc.length; !xc[--k];);

              // E.g. [4, 11, 15] becomes 4bf.
              for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

              // Add leading zeros, decimal point and trailing zeros as required.
              str = toFixedPoint(str, e, alphabet.charAt(0));
            }

            // The caller will add the sign.
            return str;
          };
        })();


        // Perform division in the specified base. Called by div and convertBase.
        div = (function () {

          // Assume non-zero x and k.
          function multiply(x, k, base) {
            var m, temp, xlo, xhi,
              carry = 0,
              i = x.length,
              klo = k % SQRT_BASE,
              khi = k / SQRT_BASE | 0;

            for (x = x.slice(); i--;) {
              xlo = x[i] % SQRT_BASE;
              xhi = x[i] / SQRT_BASE | 0;
              m = khi * xlo + xhi * klo;
              temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
              carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
              x[i] = temp % base;
            }

            if (carry) x = [carry].concat(x);

            return x;
          }

          function compare(a, b, aL, bL) {
            var i, cmp;

            if (aL != bL) {
              cmp = aL > bL ? 1 : -1;
            } else {

              for (i = cmp = 0; i < aL; i++) {

                if (a[i] != b[i]) {
                  cmp = a[i] > b[i] ? 1 : -1;
                  break;
                }
              }
            }

            return cmp;
          }

          function subtract(a, b, aL, base) {
            var i = 0;

            // Subtract b from a.
            for (; aL--;) {
              a[aL] -= i;
              i = a[aL] < b[aL] ? 1 : 0;
              a[aL] = i * base + a[aL] - b[aL];
            }

            // Remove leading zeros.
            for (; !a[0] && a.length > 1; a.splice(0, 1));
          }

          // x: dividend, y: divisor.
          return function (x, y, dp, rm, base) {
            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
              yL, yz,
              s = x.s == y.s ? 1 : -1,
              xc = x.c,
              yc = y.c;

            // Either NaN, Infinity or 0?
            if (!xc || !xc[0] || !yc || !yc[0]) {

              return new BigNumber(

               // Return NaN if either NaN, or both Infinity or 0.
               !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0
             );
            }

            q = new BigNumber(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;

            if (!base) {
              base = BASE;
              e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
              s = s / LOG_BASE | 0;
            }

            // Result exponent may be one less then the current value of e.
            // The coefficients of the BigNumbers from convertBase may have trailing zeros.
            for (i = 0; yc[i] == (xc[i] || 0); i++);

            if (yc[i] > (xc[i] || 0)) e--;

            if (s < 0) {
              qc.push(1);
              more = true;
            } else {
              xL = xc.length;
              yL = yc.length;
              i = 0;
              s += 2;

              // Normalise xc and yc so highest order digit of yc is >= base / 2.

              n = mathfloor(base / (yc[0] + 1));

              // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
              // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
              if (n > 1) {
                yc = multiply(yc, n, base);
                xc = multiply(xc, n, base);
                yL = yc.length;
                xL = xc.length;
              }

              xi = yL;
              rem = xc.slice(0, yL);
              remL = rem.length;

              // Add zeros to make remainder as long as divisor.
              for (; remL < yL; rem[remL++] = 0);
              yz = yc.slice();
              yz = [0].concat(yz);
              yc0 = yc[0];
              if (yc[1] >= base / 2) yc0++;
              // Not necessary, but to prevent trial digit n > base, when using base 3.
              // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

              do {
                n = 0;

                // Compare divisor and remainder.
                cmp = compare(yc, rem, yL, remL);

                // If divisor < remainder.
                if (cmp < 0) {

                  // Calculate trial digit, n.

                  rem0 = rem[0];
                  if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

                  // n is how many times the divisor goes into the current remainder.
                  n = mathfloor(rem0 / yc0);

                  //  Algorithm:
                  //  product = divisor multiplied by trial digit (n).
                  //  Compare product and remainder.
                  //  If product is greater than remainder:
                  //    Subtract divisor from product, decrement trial digit.
                  //  Subtract product from remainder.
                  //  If product was less than remainder at the last compare:
                  //    Compare new remainder and divisor.
                  //    If remainder is greater than divisor:
                  //      Subtract divisor from remainder, increment trial digit.

                  if (n > 1) {

                    // n may be > base only when base is 3.
                    if (n >= base) n = base - 1;

                    // product = divisor * trial digit.
                    prod = multiply(yc, n, base);
                    prodL = prod.length;
                    remL = rem.length;

                    // Compare product and remainder.
                    // If product > remainder then trial digit n too high.
                    // n is 1 too high about 5% of the time, and is not known to have
                    // ever been more than 1 too high.
                    while (compare(prod, rem, prodL, remL) == 1) {
                      n--;

                      // Subtract divisor from product.
                      subtract(prod, yL < prodL ? yz : yc, prodL, base);
                      prodL = prod.length;
                      cmp = 1;
                    }
                  } else {

                    // n is 0 or 1, cmp is -1.
                    // If n is 0, there is no need to compare yc and rem again below,
                    // so change cmp to 1 to avoid it.
                    // If n is 1, leave cmp as -1, so yc and rem are compared again.
                    if (n == 0) {

                      // divisor < remainder, so n must be at least 1.
                      cmp = n = 1;
                    }

                    // product = divisor
                    prod = yc.slice();
                    prodL = prod.length;
                  }

                  if (prodL < remL) prod = [0].concat(prod);

                  // Subtract product from remainder.
                  subtract(rem, prod, remL, base);
                  remL = rem.length;

                   // If product was < remainder.
                  if (cmp == -1) {

                    // Compare divisor and new remainder.
                    // If divisor < new remainder, subtract divisor from remainder.
                    // Trial digit n too low.
                    // n is 1 too low about 5% of the time, and very rarely 2 too low.
                    while (compare(yc, rem, yL, remL) < 1) {
                      n++;

                      // Subtract divisor from remainder.
                      subtract(rem, yL < remL ? yz : yc, remL, base);
                      remL = rem.length;
                    }
                  }
                } else if (cmp === 0) {
                  n++;
                  rem = [0];
                } // else cmp === 1 and n will be 0

                // Add the next digit, n, to the result array.
                qc[i++] = n;

                // Update the remainder.
                if (rem[0]) {
                  rem[remL++] = xc[xi] || 0;
                } else {
                  rem = [xc[xi]];
                  remL = 1;
                }
              } while ((xi++ < xL || rem[0] != null) && s--);

              more = rem[0] != null;

              // Leading zero?
              if (!qc[0]) qc.splice(0, 1);
            }

            if (base == BASE) {

              // To calculate q.e, first get the number of digits of qc[0].
              for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

              round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

            // Caller is convertBase.
            } else {
              q.e = e;
              q.r = +more;
            }

            return q;
          };
        })();


        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n: a BigNumber.
         * i: the index of the last digit required (i.e. the digit that may be rounded up).
         * rm: the rounding mode.
         * id: 1 (toExponential) or 2 (toPrecision).
         */
        function format(n, i, rm, id) {
          var c0, e, ne, len, str;

          if (rm == null) rm = ROUNDING_MODE;
          else intCheck(rm, 0, 8);

          if (!n.c) return n.toString();

          c0 = n.c[0];
          ne = n.e;

          if (i == null) {
            str = coeffToString(n.c);
            str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
             ? toExponential(str, ne)
             : toFixedPoint(str, ne, '0');
          } else {
            n = round(new BigNumber(n), i, rm);

            // n.e may have changed if the value was rounded up.
            e = n.e;

            str = coeffToString(n.c);
            len = str.length;

            // toPrecision returns exponential notation if the number of significant digits
            // specified is less than the number of digits necessary to represent the integer
            // part of the value in fixed-point notation.

            // Exponential notation.
            if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

              // Append zeros?
              for (; len < i; str += '0', len++);
              str = toExponential(str, e);

            // Fixed-point notation.
            } else {
              i -= ne;
              str = toFixedPoint(str, e, '0');

              // Append zeros?
              if (e + 1 > len) {
                if (--i > 0) for (str += '.'; i--; str += '0');
              } else {
                i += e - len;
                if (i > 0) {
                  if (e + 1 == len) str += '.';
                  for (; i--; str += '0');
                }
              }
            }
          }

          return n.s < 0 && c0 ? '-' + str : str;
        }


        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin(args, method) {
          var n,
            i = 1,
            m = new BigNumber(args[0]);

          for (; i < args.length; i++) {
            n = new BigNumber(args[i]);

            // If any number is NaN, return NaN.
            if (!n.s) {
              m = n;
              break;
            } else if (method.call(m, n)) {
              m = n;
            }
          }

          return m;
        }


        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */
        function normalise(n, c, e) {
          var i = 1,
            j = c.length;

           // Remove trailing zeros.
          for (; !c[--j]; c.pop());

          // Calculate the base 10 exponent. First get the number of digits of c[0].
          for (j = c[0]; j >= 10; j /= 10, i++);

          // Overflow?
          if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

            // Infinity.
            n.c = n.e = null;

          // Underflow?
          } else if (e < MIN_EXP) {

            // Zero.
            n.c = [n.e = 0];
          } else {
            n.e = e;
            n.c = c;
          }

          return n;
        }


        // Handle values that fail the validity test in BigNumber.
        parseNumeric = (function () {
          var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
            dotAfter = /^([^.]+)\.$/,
            dotBefore = /^\.([^.]+)$/,
            isInfinityOrNaN = /^-?(Infinity|NaN)$/,
            whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

          return function (x, str, isNum, b) {
            var base,
              s = isNum ? str : str.replace(whitespaceOrPlus, '');

            // No exception on ±Infinity or NaN.
            if (isInfinityOrNaN.test(s)) {
              x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            } else {
              if (!isNum) {

                // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                s = s.replace(basePrefix, function (m, p1, p2) {
                  base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                  return !b || b == base ? p1 : m;
                });

                if (b) {
                  base = b;

                  // E.g. '1.' to '1', '.1' to '0.1'
                  s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                }

                if (str != s) return new BigNumber(s, base);
              }

              // '[BigNumber Error] Not a number: {n}'
              // '[BigNumber Error] Not a base {b} number: {n}'
              if (BigNumber.DEBUG) {
                throw Error
                  (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
              }

              // NaN
              x.s = null;
            }

            x.c = x.e = null;
          }
        })();


        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
        function round(x, sd, rm, r) {
          var d, i, j, k, n, ni, rd,
            xc = x.c,
            pows10 = POWS_TEN;

          // if x is not Infinity or NaN...
          if (xc) {

            // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
            // n is a base 1e14 number, the value of the element of array x.c containing rd.
            // ni is the index of n within x.c.
            // d is the number of digits of n.
            // i is the index of rd within n including leading zeros.
            // j is the actual index of rd within n (if < 0, rd is a leading zero).
            out: {

              // Get the number of digits of the first element of xc.
              for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
              i = sd - d;

              // If the rounding digit is in the first element of xc...
              if (i < 0) {
                i += LOG_BASE;
                j = sd;
                n = xc[ni = 0];

                // Get the rounding digit at index j of n.
                rd = n / pows10[d - j - 1] % 10 | 0;
              } else {
                ni = mathceil((i + 1) / LOG_BASE);

                if (ni >= xc.length) {

                  if (r) {

                    // Needed by sqrt.
                    for (; xc.length <= ni; xc.push(0));
                    n = rd = 0;
                    d = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                  } else {
                    break out;
                  }
                } else {
                  n = k = xc[ni];

                  // Get the number of digits of n.
                  for (d = 1; k >= 10; k /= 10, d++);

                  // Get the index of rd within n.
                  i %= LOG_BASE;

                  // Get the index of rd within n, adjusted for leading zeros.
                  // The number of leading zeros of n is given by LOG_BASE - d.
                  j = i - LOG_BASE + d;

                  // Get the rounding digit at index j of n.
                  rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                }
              }

              r = r || sd < 0 ||

              // Are there any non-zero digits after the rounding digit?
              // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
              // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
               xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

              r = rm < 4
               ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
               : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

                // Check whether the digit to the left of the rounding digit is odd.
                ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
                 rm == (x.s < 0 ? 8 : 7));

              if (sd < 1 || !xc[0]) {
                xc.length = 0;

                if (r) {

                  // Convert sd to decimal places.
                  sd -= x.e + 1;

                  // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                  xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                  x.e = -sd || 0;
                } else {

                  // Zero.
                  xc[0] = x.e = 0;
                }

                return x;
              }

              // Remove excess digits.
              if (i == 0) {
                xc.length = ni;
                k = 1;
                ni--;
              } else {
                xc.length = ni + 1;
                k = pows10[LOG_BASE - i];

                // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                // j > 0 means i > number of leading zeros of n.
                xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
              }

              // Round up?
              if (r) {

                for (; ;) {

                  // If the digit to be rounded up is in the first element of xc...
                  if (ni == 0) {

                    // i will be the length of xc[0] before k is added.
                    for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                    j = xc[0] += k;
                    for (k = 1; j >= 10; j /= 10, k++);

                    // if i != k the length has increased.
                    if (i != k) {
                      x.e++;
                      if (xc[0] == BASE) xc[0] = 1;
                    }

                    break;
                  } else {
                    xc[ni] += k;
                    if (xc[ni] != BASE) break;
                    xc[ni--] = 0;
                    k = 1;
                  }
                }
              }

              // Remove trailing zeros.
              for (i = xc.length; xc[--i] === 0; xc.pop());
            }

            // Overflow? Infinity.
            if (x.e > MAX_EXP) {
              x.c = x.e = null;

            // Underflow? Zero.
            } else if (x.e < MIN_EXP) {
              x.c = [x.e = 0];
            }
          }

          return x;
        }


        function valueOf(n) {
          var str,
            e = n.e;

          if (e === null) return n.toString();

          str = coeffToString(n.c);

          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
            ? toExponential(str, e)
            : toFixedPoint(str, e, '0');

          return n.s < 0 ? '-' + str : str;
        }


        // PROTOTYPE/INSTANCE METHODS


        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */
        P.absoluteValue = P.abs = function () {
          var x = new BigNumber(this);
          if (x.s < 0) x.s = 1;
          return x;
        };


        /*
         * Return
         *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         *   0 if they have the same value,
         *   or null if the value of either is NaN.
         */
        P.comparedTo = function (y, b) {
          return compare(this, new BigNumber(y, b));
        };


        /*
         * If dp is undefined or null or true or false, return the number of decimal places of the
         * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
         *
         * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
         * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
         * ROUNDING_MODE if rm is omitted.
         *
         * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.decimalPlaces = P.dp = function (dp, rm) {
          var c, n, v,
            x = this;

          if (dp != null) {
            intCheck(dp, 0, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);

            return round(new BigNumber(x), dp + x.e + 1, rm);
          }

          if (!(c = x.c)) return null;
          n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

          // Subtract the number of trailing zeros of the last number.
          if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
          if (n < 0) n = 0;

          return n;
        };


        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.dividedBy = P.div = function (y, b) {
          return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };


        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
        P.dividedToIntegerBy = P.idiv = function (y, b) {
          return div(this, new BigNumber(y, b), 0, 1);
        };


        /*
         * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
         *
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are integers, otherwise it
         * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
         *
         * n {number|string|BigNumber} The exponent. An integer.
         * [m] {number|string|BigNumber} The modulus.
         *
         * '[BigNumber Error] Exponent not an integer: {n}'
         */
        P.exponentiatedBy = P.pow = function (n, m) {
          var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
            x = this;

          n = new BigNumber(n);

          // Allow NaN and ±Infinity, but not other non-integers.
          if (n.c && !n.isInteger()) {
            throw Error
              (bignumberError + 'Exponent not an integer: ' + valueOf(n));
          }

          if (m != null) m = new BigNumber(m);

          // Exponent of MAX_SAFE_INTEGER is 15.
          nIsBig = n.e > 14;

          // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
          if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

            // The sign of the result of pow when x is negative depends on the evenness of n.
            // If +n overflows to ±Infinity, the evenness of n would be not be known.
            y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
            return m ? y.mod(m) : y;
          }

          nIsNeg = n.s < 0;

          if (m) {

            // x % m returns NaN if abs(m) is zero, or m is NaN.
            if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

            isModExp = !nIsNeg && x.isInteger() && m.isInteger();

            if (isModExp) x = x.mod(m);

          // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
          // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
          } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
            // [1, 240000000]
            ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
            // [80000000000000]  [99999750000000]
            : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

            // If x is negative and n is odd, k = -0, else k = 0.
            k = x.s < 0 && isOdd(n) ? -0 : 0;

            // If x >= 1, k = ±Infinity.
            if (x.e > -1) k = 1 / k;

            // If n is negative return ±0, else return ±Infinity.
            return new BigNumber(nIsNeg ? 1 / k : k);

          } else if (POW_PRECISION) {

            // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
          }

          if (nIsBig) {
            half = new BigNumber(0.5);
            if (nIsNeg) n.s = 1;
            nIsOdd = isOdd(n);
          } else {
            i = Math.abs(+valueOf(n));
            nIsOdd = i % 2;
          }

          y = new BigNumber(ONE);

          // Performs 54 loop iterations for n of 9007199254740991.
          for (; ;) {

            if (nIsOdd) {
              y = y.times(x);
              if (!y.c) break;

              if (k) {
                if (y.c.length > k) y.c.length = k;
              } else if (isModExp) {
                y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
              }
            }

            if (i) {
              i = mathfloor(i / 2);
              if (i === 0) break;
              nIsOdd = i % 2;
            } else {
              n = n.times(half);
              round(n, n.e + 1, 1);

              if (n.e > 14) {
                nIsOdd = isOdd(n);
              } else {
                i = +valueOf(n);
                if (i === 0) break;
                nIsOdd = i % 2;
              }
            }

            x = x.times(x);

            if (k) {
              if (x.c && x.c.length > k) x.c.length = k;
            } else if (isModExp) {
              x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
          }

          if (isModExp) return y;
          if (nIsNeg) y = ONE.div(y);

          return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
         * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
         */
        P.integerValue = function (rm) {
          var n = new BigNumber(this);
          if (rm == null) rm = ROUNDING_MODE;
          else intCheck(rm, 0, 8);
          return round(n, n.e + 1, rm);
        };


        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isEqualTo = P.eq = function (y, b) {
          return compare(this, new BigNumber(y, b)) === 0;
        };


        /*
         * Return true if the value of this BigNumber is a finite number, otherwise return false.
         */
        P.isFinite = function () {
          return !!this.c;
        };


        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isGreaterThan = P.gt = function (y, b) {
          return compare(this, new BigNumber(y, b)) > 0;
        };


        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise return false.
         */
        P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
          return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

        };


        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
        P.isInteger = function () {
          return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };


        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise return false.
         */
        P.isLessThan = P.lt = function (y, b) {
          return compare(this, new BigNumber(y, b)) < 0;
        };


        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise return false.
         */
        P.isLessThanOrEqualTo = P.lte = function (y, b) {
          return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };


        /*
         * Return true if the value of this BigNumber is NaN, otherwise return false.
         */
        P.isNaN = function () {
          return !this.s;
        };


        /*
         * Return true if the value of this BigNumber is negative, otherwise return false.
         */
        P.isNegative = function () {
          return this.s < 0;
        };


        /*
         * Return true if the value of this BigNumber is positive, otherwise return false.
         */
        P.isPositive = function () {
          return this.s > 0;
        };


        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
         */
        P.isZero = function () {
          return !!this.c && this.c[0] == 0;
        };


        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
        P.minus = function (y, b) {
          var i, j, t, xLTy,
            x = this,
            a = x.s;

          y = new BigNumber(y, b);
          b = y.s;

          // Either NaN?
          if (!a || !b) return new BigNumber(NaN);

          // Signs differ?
          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }

          var xe = x.e / LOG_BASE,
            ye = y.e / LOG_BASE,
            xc = x.c,
            yc = y.c;

          if (!xe || !ye) {

            // Either Infinity?
            if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

            // Either zero?
            if (!xc[0] || !yc[0]) {

              // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
              return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

               // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
               ROUNDING_MODE == 3 ? -0 : 0);
            }
          }

          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();

          // Determine which is the bigger number.
          if (a = xe - ye) {

            if (xLTy = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }

            t.reverse();

            // Prepend zeros to equalise exponents.
            for (b = a; b--; t.push(0));
            t.reverse();
          } else {

            // Exponents equal. Check digit by digit.
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

            for (a = b = 0; b < j; b++) {

              if (xc[b] != yc[b]) {
                xLTy = xc[b] < yc[b];
                break;
              }
            }
          }

          // x < y? Point xc to the array of the bigger number.
          if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

          b = (j = yc.length) - (i = xc.length);

          // Append zeros to xc if shorter.
          // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
          if (b > 0) for (; b--; xc[i++] = 0);
          b = BASE - 1;

          // Subtract yc from xc.
          for (; j > a;) {

            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; xc[i] = b);
              --xc[i];
              xc[j] += BASE;
            }

            xc[j] -= yc[j];
          }

          // Remove leading zeros and adjust exponent accordingly.
          for (; xc[0] == 0; xc.splice(0, 1), --ye);

          // Zero?
          if (!xc[0]) {

            // Following IEEE 754 (2008) 6.3,
            // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [y.e = 0];
            return y;
          }

          // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
          // for finite x and y.
          return normalise(y, xc, ye);
        };


        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
        P.modulo = P.mod = function (y, b) {
          var q, s,
            x = this;

          y = new BigNumber(y, b);

          // Return NaN if x is Infinity or NaN, or y is NaN or zero.
          if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber(NaN);

          // Return x if y is Infinity or x is zero.
          } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber(x);
          }

          if (MODULO_MODE == 9) {

            // Euclidian division: q = sign(y) * floor(x / abs(y))
            // r = x - qy    where  0 <= r < abs(y)
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
          } else {
            q = div(x, y, 0, MODULO_MODE);
          }

          y = x.minus(q.times(y));

          // To match JavaScript %, ensure sign of zero is sign of dividend.
          if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

          return y;
        };


        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
         * of BigNumber(y, b).
         */
        P.multipliedBy = P.times = function (y, b) {
          var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
            base, sqrtBase,
            x = this,
            xc = x.c,
            yc = (y = new BigNumber(y, b)).c;

          // Either NaN, ±Infinity or ±0?
          if (!xc || !yc || !xc[0] || !yc[0]) {

            // Return NaN if either is NaN, or one is 0 and the other is Infinity.
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
              y.c = y.e = y.s = null;
            } else {
              y.s *= x.s;

              // Return ±Infinity if either is ±Infinity.
              if (!xc || !yc) {
                y.c = y.e = null;

              // Return ±0 if either is ±0.
              } else {
                y.c = [0];
                y.e = 0;
              }
            }

            return y;
          }

          e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
          y.s *= x.s;
          xcL = xc.length;
          ycL = yc.length;

          // Ensure xc points to longer array and xcL to its length.
          if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

          // Initialise the result array with zeros.
          for (i = xcL + ycL, zc = []; i--; zc.push(0));

          base = BASE;
          sqrtBase = SQRT_BASE;

          for (i = ycL; --i >= 0;) {
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;

            for (k = xcL, j = i + k; j > i;) {
              xlo = xc[--k] % sqrtBase;
              xhi = xc[k] / sqrtBase | 0;
              m = yhi * xlo + xhi * ylo;
              xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
              c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
              zc[j--] = xlo % base;
            }

            zc[j] = c;
          }

          if (c) {
            ++e;
          } else {
            zc.splice(0, 1);
          }

          return normalise(y, zc, e);
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
        P.negated = function () {
          var x = new BigNumber(this);
          x.s = -x.s || null;
          return x;
        };


        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
        P.plus = function (y, b) {
          var t,
            x = this,
            a = x.s;

          y = new BigNumber(y, b);
          b = y.s;

          // Either NaN?
          if (!a || !b) return new BigNumber(NaN);

          // Signs differ?
           if (a != b) {
            y.s = -b;
            return x.minus(y);
          }

          var xe = x.e / LOG_BASE,
            ye = y.e / LOG_BASE,
            xc = x.c,
            yc = y.c;

          if (!xe || !ye) {

            // Return ±Infinity if either ±Infinity.
            if (!xc || !yc) return new BigNumber(a / 0);

            // Either zero?
            // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
            if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
          }

          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();

          // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
          if (a = xe - ye) {
            if (a > 0) {
              ye = xe;
              t = yc;
            } else {
              a = -a;
              t = xc;
            }

            t.reverse();
            for (; a--; t.push(0));
            t.reverse();
          }

          a = xc.length;
          b = yc.length;

          // Point xc to the longer array, and b to the shorter length.
          if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

          // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
          for (a = 0; b;) {
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
          }

          if (a) {
            xc = [a].concat(xc);
            ++ye;
          }

          // No need to check for zero, as +x + +y != 0 && -x + -y != 0
          // ye = MAX_EXP + 1 possible
          return normalise(y, xc, ye);
        };


        /*
         * If sd is undefined or null or true or false, return the number of significant digits of
         * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
         * If sd is true include integer-part trailing zeros in the count.
         *
         * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
         * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
         * ROUNDING_MODE if rm is omitted.
         *
         * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
         *                     boolean: whether to count integer-part trailing zeros: true or false.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
         */
        P.precision = P.sd = function (sd, rm) {
          var c, n, v,
            x = this;

          if (sd != null && sd !== !!sd) {
            intCheck(sd, 1, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);

            return round(new BigNumber(x), sd, rm);
          }

          if (!(c = x.c)) return null;
          v = c.length - 1;
          n = v * LOG_BASE + 1;

          if (v = c[v]) {

            // Subtract the number of trailing zeros of the last element.
            for (; v % 10 == 0; v /= 10, n--);

            // Add the number of digits of the first element.
            for (v = c[0]; v >= 10; v /= 10, n++);
          }

          if (sd && x.e + 1 > n) n = x.e + 1;

          return n;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
         */
        P.shiftedBy = function (k) {
          intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
          return this.times('1e' + k);
        };


        /*
         *  sqrt(-n) =  N
         *  sqrt(N) =  N
         *  sqrt(-I) =  N
         *  sqrt(I) =  I
         *  sqrt(0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.squareRoot = P.sqrt = function () {
          var m, n, r, rep, t,
            x = this,
            c = x.c,
            s = x.s,
            e = x.e,
            dp = DECIMAL_PLACES + 4,
            half = new BigNumber('0.5');

          // Negative/NaN/Infinity/zero?
          if (s !== 1 || !c || !c[0]) {
            return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
          }

          // Initial estimate.
          s = Math.sqrt(+valueOf(x));

          // Math.sqrt underflow/overflow?
          // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
          if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0) n += '0';
            s = Math.sqrt(+n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

            if (s == 1 / 0) {
              n = '1e' + e;
            } else {
              n = s.toExponential();
              n = n.slice(0, n.indexOf('e') + 1) + e;
            }

            r = new BigNumber(n);
          } else {
            r = new BigNumber(s + '');
          }

          // Check for zero.
          // r could be zero if MIN_EXP is changed after the this value was created.
          // This would cause a division by zero (x/t) and hence Infinity below, which would cause
          // coeffToString to throw.
          if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3) s = 0;

            // Newton-Raphson iteration.
            for (; ;) {
              t = r;
              r = half.times(t.plus(div(x, t, dp, 1)));

              if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

                // The exponent of r may here be one less than the final result exponent,
                // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                // are indexed correctly.
                if (r.e < e) --s;
                n = n.slice(s - 3, s + 1);

                // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                // iteration.
                if (n == '9999' || !rep && n == '4999') {

                  // On the first iteration only, check to see if rounding up gives the
                  // exact result as the nines may infinitely repeat.
                  if (!rep) {
                    round(t, t.e + DECIMAL_PLACES + 2, 0);

                    if (t.times(t).eq(x)) {
                      r = t;
                      break;
                    }
                  }

                  dp += 4;
                  s += 4;
                  rep = 1;
                } else {

                  // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                  // result. If not, then there are further digits and m will be truthy.
                  if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                    // Truncate to the first rounding digit.
                    round(r, r.e + DECIMAL_PLACES + 2, 1);
                    m = !r.times(r).eq(x);
                  }

                  break;
                }
              }
            }
          }

          return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };


        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.toExponential = function (dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp++;
          }
          return format(this, dp, rm, 1);
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         */
        P.toFixed = function (dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp = dp + this.e + 1;
          }
          return format(this, dp, rm);
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the format or FORMAT object (see BigNumber.set).
         *
         * The formatting object may contain some or all of the properties shown below.
         *
         * FORMAT = {
         *   prefix: '',
         *   groupSize: 3,
         *   secondaryGroupSize: 0,
         *   groupSeparator: ',',
         *   decimalSeparator: '.',
         *   fractionGroupSize: 0,
         *   fractionGroupSeparator: '\xA0',      // non-breaking space
         *   suffix: ''
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         * [format] {object} Formatting options. See FORMAT pbject above.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
         * '[BigNumber Error] Argument not an object: {format}'
         */
        P.toFormat = function (dp, rm, format) {
          var str,
            x = this;

          if (format == null) {
            if (dp != null && rm && typeof rm == 'object') {
              format = rm;
              rm = null;
            } else if (dp && typeof dp == 'object') {
              format = dp;
              dp = rm = null;
            } else {
              format = FORMAT;
            }
          } else if (typeof format != 'object') {
            throw Error
              (bignumberError + 'Argument not an object: ' + format);
          }

          str = x.toFixed(dp, rm);

          if (x.c) {
            var i,
              arr = str.split('.'),
              g1 = +format.groupSize,
              g2 = +format.secondaryGroupSize,
              groupSeparator = format.groupSeparator || '',
              intPart = arr[0],
              fractionPart = arr[1],
              isNeg = x.s < 0,
              intDigits = isNeg ? intPart.slice(1) : intPart,
              len = intDigits.length;

            if (g2) i = g1, g1 = g2, g2 = i, len -= i;

            if (g1 > 0 && len > 0) {
              i = len % g1 || g1;
              intPart = intDigits.substr(0, i);
              for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
              if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
              if (isNeg) intPart = '-' + intPart;
            }

            str = fractionPart
             ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
              ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
               '$&' + (format.fractionGroupSeparator || ''))
              : fractionPart)
             : intPart;
          }

          return (format.prefix || '') + str + (format.suffix || '');
        };


        /*
         * Return an array of two BigNumbers representing the value of this BigNumber as a simple
         * fraction with an integer numerator and an integer denominator.
         * The denominator will be a positive non-zero value less than or equal to the specified
         * maximum denominator. If a maximum denominator is not specified, the denominator will be
         * the lowest value necessary to represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
         *
         * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
         */
        P.toFraction = function (md) {
          var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
            x = this,
            xc = x.c;

          if (md != null) {
            n = new BigNumber(md);

            // Throw if md is less than one or is not an integer, unless it is Infinity.
            if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
              throw Error
                (bignumberError + 'Argument ' +
                  (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
            }
          }

          if (!xc) return new BigNumber(x);

          d = new BigNumber(ONE);
          n1 = d0 = new BigNumber(ONE);
          d1 = n0 = new BigNumber(ONE);
          s = coeffToString(xc);

          // Determine initial denominator.
          // d is a power of 10 and the minimum max denominator that specifies the value exactly.
          e = d.e = s.length - x.e - 1;
          d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
          md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

          exp = MAX_EXP;
          MAX_EXP = 1 / 0;
          n = new BigNumber(s);

          // n0 = d1 = 0
          n0.c[0] = 0;

          for (; ;)  {
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.comparedTo(md) == 1) break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
          }

          d2 = div(md.minus(d0), d1, 0, 1);
          n0 = n0.plus(d2.times(n1));
          d0 = d0.plus(d2.times(d1));
          n0.s = n1.s = x.s;
          e = e * 2;

          // Determine which fraction is closer to x, n0/d0 or n1/d1
          r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
              div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

          MAX_EXP = exp;

          return r;
        };


        /*
         * Return the value of this BigNumber converted to a number primitive.
         */
        P.toNumber = function () {
          return +valueOf(this);
        };


        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
         */
        P.toPrecision = function (sd, rm) {
          if (sd != null) intCheck(sd, 1, MAX);
          return format(this, sd, rm, 2);
        };


        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to ALPHABET.length inclusive.
         *
         * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
         */
        P.toString = function (b) {
          var str,
            n = this,
            s = n.s,
            e = n.e;

          // Infinity or NaN?
          if (e === null) {
            if (s) {
              str = 'Infinity';
              if (s < 0) str = '-' + str;
            } else {
              str = 'NaN';
            }
          } else {
            if (b == null) {
              str = e <= TO_EXP_NEG || e >= TO_EXP_POS
               ? toExponential(coeffToString(n.c), e)
               : toFixedPoint(coeffToString(n.c), e, '0');
            } else if (b === 10) {
              n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
              str = toFixedPoint(coeffToString(n.c), n.e, '0');
            } else {
              intCheck(b, 2, ALPHABET.length, 'Base');
              str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
            }

            if (s < 0 && n.c[0]) str = '-' + str;
          }

          return str;
        };


        /*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
        P.valueOf = P.toJSON = function () {
          return valueOf(this);
        };


        P._isBigNumber = true;

        if (hasSymbol) {
          P[Symbol.toStringTag] = 'BigNumber';

          // Node.js v10.12.0+
          P[Symbol.for('nodejs.util.inspect.custom')] = P.valueOf;
        }

        if (configObject != null) BigNumber.set(configObject);

        return BigNumber;
      }


      // PRIVATE HELPER FUNCTIONS

      // These functions don't need access to variables,
      // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


      function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
      }


      // Return a coefficient array as a string of base 10 digits.
      function coeffToString(a) {
        var s, z,
          i = 1,
          j = a.length,
          r = a[0] + '';

        for (; i < j;) {
          s = a[i++] + '';
          z = LOG_BASE - s.length;
          for (; z--; s = '0' + s);
          r += s;
        }

        // Determine trailing zeros.
        for (j = r.length; r.charCodeAt(--j) === 48;);

        return r.slice(0, j + 1 || 1);
      }


      // Compare the value of BigNumbers x and y.
      function compare(x, y) {
        var a, b,
          xc = x.c,
          yc = y.c,
          i = x.s,
          j = y.s,
          k = x.e,
          l = y.e;

        // Either NaN?
        if (!i || !j) return null;

        a = xc && !xc[0];
        b = yc && !yc[0];

        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;

        // Signs differ?
        if (i != j) return i;

        a = i < 0;
        b = k == l;

        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;

        j = (k = xc.length) < (l = yc.length) ? k : l;

        // Compare digit by digit.
        for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
      }


      /*
       * Check that n is a primitive number, an integer, and in range, otherwise throw.
       */
      function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) {
          throw Error
           (bignumberError + (name || 'Argument') + (typeof n == 'number'
             ? n < min || n > max ? ' out of range: ' : ' not an integer: '
             : ' not a primitive number: ') + String(n));
        }
      }


      // Assumes finite n.
      function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
      }


      function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
         (e < 0 ? 'e' : 'e+') + e;
      }


      function toFixedPoint(str, e, z) {
        var len, zs;

        // Negative exponent?
        if (e < 0) {

          // Prepend zeros.
          for (zs = z + '.'; ++e; zs += z);
          str = zs + str;

        // Positive exponent
        } else {
          len = str.length;

          // Append zeros.
          if (++e > len) {
            for (zs = z, e -= len; --e; zs += z);
            str += zs;
          } else if (e < len) {
            str = str.slice(0, e) + '.' + str.slice(e);
          }
        }

        return str;
      }


      // EXPORT


      BigNumber = clone();
      BigNumber['default'] = BigNumber.BigNumber = BigNumber;

      // AMD.
      if (typeof define == 'function' && define.amd) {
        define(function () { return BigNumber; });

      // Node.js and other environments that support module.exports.
      } else if (typeof module != 'undefined' && module.exports) {
        module.exports = BigNumber;

      // Browser.
      } else {
        if (!globalObject) {
          globalObject = typeof self != 'undefined' && self ? self : window;
        }

        globalObject.BigNumber = BigNumber;
      }
      return BigNumber;
    })();

    var _0x1e90=['viewport','13CbVCoO','Pass','GLOBE','update','camera','enableReflection','Assets/Textures/waterNormalsSmall.jpg','isUpdate','passState','waterNormalMap','getFramebuffer','SceneFramebuffer','UNIT_Z','destroyObject','78VwDUdq','PassState','prototype','Plane','disableReflection','context','5897rWVoRV','destroy','42017aqLSzE','9qNLNQt','_hdr','441558vEjdnS','execute','26729dPaoCH','constructor','create','clearCommand','176705jIiRms','environmentVisible','Color','begin','isDestroyed','11DxfPtI','7039YgzRAN','end','233462pwMbUz','Cartesian3','clone','framebuffer','sceneFramebuffer'];var _0x13a316=_0x26d6;function _0x26d6(_0x388444,_0x3672f6){_0x388444=_0x388444-0x116;var _0x1e908f=_0x1e90[_0x388444];return _0x1e908f;}(function(_0x4d63a8,_0x5a313e){var _0x188329=_0x26d6;while(!![]){try{var _0x23ac51=parseInt(_0x188329(0x121))*-parseInt(_0x188329(0x138))+-parseInt(_0x188329(0x140))*-parseInt(_0x188329(0x12e))+parseInt(_0x188329(0x13a))+-parseInt(_0x188329(0x12c))+parseInt(_0x188329(0x12a))*parseInt(_0x188329(0x127))+-parseInt(_0x188329(0x129))*-parseInt(_0x188329(0x137))+parseInt(_0x188329(0x132));if(_0x23ac51===_0x5a313e)break;else _0x4d63a8['push'](_0x4d63a8['shift']());}catch(_0x58574e){_0x4d63a8['push'](_0x4d63a8['shift']());}}}(_0x1e90,0x44ec0));function ReflectFramebuffer(_0x24ff24){var _0x4d9cfa=_0x26d6;this['context']=_0x24ff24,this[_0x4d9cfa(0x13e)]=new Cesium[(_0x4d9cfa(0x11e))](),this[_0x4d9cfa(0x11b)]=new Cesium[(_0x4d9cfa(0x122))](_0x24ff24),this[_0x4d9cfa(0x11b)][_0x4d9cfa(0x13f)]=new Cesium['BoundingRectangle'](),this['waterNormalMapUrl']=_0x4d9cfa(0x119),this[_0x4d9cfa(0x11c)]=undefined,this['reflectPlane']=new Cesium[(_0x4d9cfa(0x124))](Cesium[_0x4d9cfa(0x13b)][_0x4d9cfa(0x11f)],0x615299),this[_0x4d9cfa(0x133)]={'isSunVisible':!![],'isMoonVisible':!![],'isSkyAtmosphereVisible':!![],'isSkyBoxVisible':!![],'isGlobalVisible':![],'isObjectVisible':!![]},this[_0x4d9cfa(0x11b)]['cullPass']=Cesium[_0x4d9cfa(0x141)][_0x4d9cfa(0x142)],this[_0x4d9cfa(0x131)]=new Cesium['ClearCommand']({'color':new Cesium[(_0x4d9cfa(0x134))](0x0,0x0,0x0,0x0),'stencil':0x0,'depth':0x1}),this[_0x4d9cfa(0x11a)]=![];}ReflectFramebuffer[_0x13a316(0x123)]=Object[_0x13a316(0x130)](RenderTarget[_0x13a316(0x123)]),ReflectFramebuffer['prototype'][_0x13a316(0x12f)]=RenderTarget,ReflectFramebuffer[_0x13a316(0x123)][_0x13a316(0x135)]=function(_0x176452){var _0x495ff2=_0x13a316;return this[_0x495ff2(0x13e)][_0x495ff2(0x116)](_0x176452[_0x495ff2(0x126)],_0x176452['view'][_0x495ff2(0x13f)],_0x176452[_0x495ff2(0x12b)]),this[_0x495ff2(0x11b)][_0x495ff2(0x13d)]=this[_0x495ff2(0x13e)][_0x495ff2(0x11d)](),Cesium['BoundingRectangle'][_0x495ff2(0x13c)](_0x176452['view'][_0x495ff2(0x13f)],this[_0x495ff2(0x11b)][_0x495ff2(0x13f)]),this[_0x495ff2(0x131)][_0x495ff2(0x12d)](_0x176452['context'],this[_0x495ff2(0x11b)]),_0x176452['camera'][_0x495ff2(0x118)](this['reflectPlane']),this[_0x495ff2(0x11b)];},ReflectFramebuffer['prototype'][_0x13a316(0x139)]=function(_0x30cf4c){var _0xe6e9a2=_0x13a316;_0x30cf4c[_0xe6e9a2(0x117)][_0xe6e9a2(0x125)]();},ReflectFramebuffer['prototype'][_0x13a316(0x136)]=function(){var _0x1d6483=_0x13a316;return this[_0x1d6483(0x13e)]=this[_0x1d6483(0x13e)][_0x1d6483(0x128)](),this[_0x1d6483(0x11a)]=![],![];},ReflectFramebuffer[_0x13a316(0x123)][_0x13a316(0x128)]=function(){var _0x18bc8c=_0x13a316;return Cesium[_0x18bc8c(0x120)](this);};

    const _0x45c8=['Resource','remove','commandList','heading','near','updateFrustum','S3MB','bReflect','Style3D','reflectFramebuffer','subdomains','end','directionWC','DeveloperError','otherwise','FILL_LINE','hookRenderFunc','get\x20s3m\x20layer\x20config\x20failed,extendxml.xml\x20foamat\x20error,layer\x20name\x20is\x20','LineWidth','_inverseViewProjectionDirty','height','_modelViewDirty','plane','395350GoIUWh','FILL_FACEANDLINE','_oneOverLog2FarDepthFromNearPlusOne','positionCartographic','altitude','MarkerSize','cullPass','ImageFileLayer','latitude','longitude','Math','get\x20scene\x20config\x20failed,','_offCenterFrustum','setOnlyObjsVisible','sign','maximumRadius','_inverseProjectionDirty','url','CullFace','getMatrix3','when','red','BottomAltitude','_modelViewProjectionRelativeToEyeDirty','left','firstChild','Matrix4','_mode','VisibleAltitudeMin','fromDegrees','exec','_currentFrustum','prototype','render','ColorParams','sceneMode','CacheFileType','toRadians','TerrainFileLayer','BLACK','.json','draw','hookCloneFunc','_infiniteProjection','dot','_inverseNormalDirty','multiplyByScalar','_cameraPosition','_encodedCameraPositionMCDirty','rightWC','begin','LODRangeScale','AltitudeMode','heightOffset','setSelection','fetch\x20s3m\x20layer\x20config\x20xml\x20error','fromCache','WireFrame','/datas/','PerspectiveFrustum','mode','19797nAGQYJ','updateCamera','top','_viewRotation','rest/realspace','MAX_VALUE','768812PrfmBF','FIXED_ANGLE','_eyeHeight','transpose','enableReflection','magnitude','upWC','blue','queryFirstNode','primitives','_inverseView3DDirty','far','clipPlane','ids','RotateX','open\x20scene\x20url\x20error!','defined','imagery','clamp','_renderTargets','post','setView','frameState','add\x20all\x20layers\x20failed,','curDis','get\x20layer\x20list\x20failed,','bottomAltitude','fillForeColor','namespaceURI','Cartesian3','promise','context','mod','fetchJson','ALPHA_BLEND','SCENE2D','layer','SlopeScale','queryStringValue','\x20failed,','LayerName','json','fbo','Cartesian4','VisibleDistanceMin','replace','Check','Fill_And_WireFrame','Style','_frustumPlanes','matrix','_projection','updateEnvironment','_farDepthFromNearPlusOne','_modelViewProjectionDirty','add','update','UNIT_Z','defer','object','pointColor','then','/layers.json','queryBooleanValue','FixedXYZ','reflect','infiniteProjectionMatrix','749583Zlugys','LayerStyle','updateAndExecuteCommands','RotateZ','_cameraRight','frustum','_normal3DDirty','queryNumericValue','FixedZ','RenderState','Options','add\x20S3M\x20layer','BlendingState','OSGBLayer','get','s3mGroup','Scene','OSGBGroup','s3m','_orthographicIn3D','resolve\x20Layer\x20Extend\x20XML\x20error','primitive','/config','ShadowType','addS3MTilesLayerByScp','_view3DDirty','clone','113ozJbBw','distance','inverseTransformation','tilt','releaseSelection','_viewProjectionDirty','jsessionID','scene\x20list\x20response\x20null!','_inverseModelViewDirty','_modelViewInfiniteProjectionDirty','DrawCommand','Camera','drillPick','stringify','_cameraDirection','createIfNeeded','camera','_viewMatrix','_removeRenderTarget','positionWC','/layers/','HeadingPitchRoll','/extendxml.xml','all','pointSize','push','toString','reflectMatrix','pick','reflectPlane','reject','lineColor','/login.json','_entireFrustum','set','SceneMode','_inverseViewRotation','fillStyle','/scenes.json','_modelViewRelativeToEyeDirty','Color','get\x20scene\x20list\x20failed,','multipliedBy','2OaAXQp','503036WZbEAq','toLowerCase','bottom','FillForeColor','hookPickFunc','RotateY','89MfSaJv','get\x20s3m\x20layer\x20config\x20failed,xml\x20document\x20undefined.','Constrast','COLUMBUS_VIEW','renderState','defaultValue','toNumber','test','lineWidth','indexOf','Fill','_normalDirty','succeed','normal','LineColor','_log2FarDepthFromNearPlusOne','hookUpdateFunc','dividedBy','inverse','960183rrzxKu','5271OkJBqe','_cameraUp','None','useDepthPicking','multiplyByPlane','WithinLayer3DGroup','length','values','alpha',',layer\x20name\x20is\x20','random','detected\x20subdomain\x20url\x20scheme,\x20but\x20no\x20subdomain\x20provided.','green','Saturation','resolve','Visible','Fill3DMode','max','normalize','Plane','hookDrillPickFunc','billboardMode','SkyAtmosphere','isUpdate','_view','resolveFramebuffers','typeOf','substring','_inverseModelView3DDirty','path','multiply','fetchXML','name','get\x20S3M\x20layer\x20config\x20failed,','currentViewMatrix'];function _0x2292(_0xb205d9,_0x25a226){_0xb205d9=_0xb205d9-0xfc;let _0x45c8b3=_0x45c8[_0xb205d9];return _0x45c8b3;}const _0x301b48=_0x2292;(function(_0x2b12b1,_0x171702){const _0x12180f=_0x2292;while(!![]){try{const _0x5474d9=-parseInt(_0x12180f(0x20d))+-parseInt(_0x12180f(0x1ca))+-parseInt(_0x12180f(0x139))*-parseInt(_0x12180f(0x14d))+-parseInt(_0x12180f(0x133))+-parseInt(_0x12180f(0x14c))+parseInt(_0x12180f(0x132))*parseInt(_0x12180f(0x187))+parseInt(_0x12180f(0x107))*parseInt(_0x12180f(0x1c4));if(_0x5474d9===_0x171702)break;else _0x2b12b1['push'](_0x2b12b1['shift']());}catch(_0x8fc15f){_0x2b12b1['push'](_0x2b12b1['shift']());}}}(_0x45c8,0x7dcc2));let scratchCartesian4=new Cesium[(_0x301b48(0x1f5))](),scratchClipPlane4d=new Cesium['Cartesian4'](),scratchMatrix4=new Cesium[(_0x301b48(0x1a1))](),scratchInvMatrix4=new Cesium[(_0x301b48(0x1a1))](),scratchCartesian3=new Cesium[(_0x301b48(0x1e7))](),scratchPlane=new Cesium[(_0x301b48(0x160))](Cesium[_0x301b48(0x1e7)][_0x301b48(0x203)],0x1);Cesium[_0x301b48(0x112)]['prototype'][_0x301b48(0x177)]=![],Cesium[_0x301b48(0x112)][_0x301b48(0x1a7)][_0x301b48(0x122)]=new Cesium[(_0x301b48(0x1a1))]();function updateReflectMatrix(_0xaaa499,_0x5766c1){const _0x115c3e=_0x301b48;let _0x2a1b54=_0xaaa499[_0x115c3e(0x108)],_0x8f507b=_0xaaa499[_0x115c3e(0x146)];_0x5766c1[0x0]=-0x2*_0x8f507b['x']*_0x8f507b['x']+0x1,_0x5766c1[0x1]=-0x2*_0x8f507b['y']*_0x8f507b['x'],_0x5766c1[0x2]=-0x2*_0x8f507b['z']*_0x8f507b['x'],_0x5766c1[0x3]=0x0,_0x5766c1[0x4]=-0x2*_0x8f507b['x']*_0x8f507b['y'],_0x5766c1[0x5]=-0x2*_0x8f507b['y']*_0x8f507b['y']+0x1,_0x5766c1[0x6]=-0x2*_0x8f507b['z']*_0x8f507b['y'],_0x5766c1[0x7]=0x0,_0x5766c1[0x8]=-0x2*_0x8f507b['x']*_0x8f507b['z'],_0x5766c1[0x9]=-0x2*_0x8f507b['y']*_0x8f507b['z'],_0x5766c1[0xa]=-0x2*_0x8f507b['z']*_0x8f507b['z']+0x1,_0x5766c1[0xb]=0x0,_0x5766c1[0xc]=-0x2*_0x8f507b['x']*_0x2a1b54,_0x5766c1[0xd]=-0x2*_0x8f507b['y']*_0x2a1b54,_0x5766c1[0xe]=-0x2*_0x8f507b['z']*_0x2a1b54,_0x5766c1[0xf]=0x1;}Cesium[_0x301b48(0x112)][_0x301b48(0x1a7)][_0x301b48(0x1ce)]=function(_0x5361f3){const _0x220f79=_0x301b48;this[_0x220f79(0x177)]=!![],updateReflectMatrix(_0x5361f3,this['reflectMatrix']),this[_0x220f79(0x212)][_0x220f79(0x20b)]=!![],this[_0x220f79(0x212)][_0x220f79(0x1d6)]=_0x5361f3;let _0x137945=Cesium[_0x220f79(0x1a1)][_0x220f79(0x16b)](this[_0x220f79(0x118)],this[_0x220f79(0x122)],scratchMatrix4);this[_0x220f79(0x212)]['currentViewMatrix']=_0x137945;},Cesium[_0x301b48(0x112)][_0x301b48(0x1a7)]['disableReflection']=function(){const _0x1db1a4=_0x301b48;this[_0x1db1a4(0x177)]=![],this[_0x1db1a4(0x212)]['reflect']=![];},Cesium[_0x301b48(0x111)]['prototype']['execute']=function(_0x4f2eb9,_0x1c3c16){const _0x1e54a8=_0x301b48;if(Cesium['defined'](_0x1c3c16)&&Cesium[_0x1e54a8(0x1da)](_0x1c3c16[_0x1e54a8(0x18d)])&&this['pass']===_0x1c3c16[_0x1e54a8(0x18d)])return;_0x4f2eb9[_0x1e54a8(0x1b0)](this,_0x1c3c16);},Cesium[_0x301b48(0x1a1)][_0x301b48(0x151)]=function(_0x2f0826,_0x21f5cb,_0xb23a69){const _0x2a4c04=_0x301b48;Cesium['Check']['typeOf']['object'](_0x2a4c04(0x1fc),_0x2f0826),Cesium[_0x2a4c04(0x1f8)][_0x2a4c04(0x167)][_0x2a4c04(0x205)](_0x2a4c04(0x186),_0x21f5cb),Cesium['Check'][_0x2a4c04(0x167)][_0x2a4c04(0x205)]('result',_0xb23a69),Cesium['Matrix4'][_0x2a4c04(0x14b)](_0x2f0826,scratchMatrix4),Cesium[_0x2a4c04(0x1a1)][_0x2a4c04(0x1cd)](scratchMatrix4,scratchMatrix4),scratchCartesian4['x']=_0x21f5cb['normal']['x'],scratchCartesian4['y']=_0x21f5cb[_0x2a4c04(0x146)]['y'],scratchCartesian4['z']=_0x21f5cb['normal']['z'],scratchCartesian4['w']=_0x21f5cb[_0x2a4c04(0x108)],Cesium[_0x2a4c04(0x1a1)]['multiplyByVector'](scratchMatrix4,scratchCartesian4,scratchCartesian4),_0xb23a69[_0x2a4c04(0x146)]['x']=scratchCartesian4['x'],_0xb23a69[_0x2a4c04(0x146)]['y']=scratchCartesian4['y'],_0xb23a69[_0x2a4c04(0x146)]['z']=scratchCartesian4['z'];let _0x1a2c37=Cesium['Cartesian3'][_0x2a4c04(0x1cf)](_0xb23a69[_0x2a4c04(0x146)]);return Cesium['Cartesian3']['normalize'](_0xb23a69['normal'],_0xb23a69[_0x2a4c04(0x146)]),_0xb23a69['distance']=scratchCartesian4['w']/_0x1a2c37,_0xb23a69;},Cesium[_0x301b48(0x1c2)][_0x301b48(0x1a7)][_0x301b48(0x1b1)]=Cesium[_0x301b48(0x1c2)]['prototype']['clone'],Cesium['PerspectiveFrustum'][_0x301b48(0x1a7)]['clone']=function(_0x3acc10){const _0x536385=_0x301b48;let _0x48ff4e=this['hookCloneFunc'](_0x3acc10);return _0x48ff4e[_0x536385(0x20b)]=this[_0x536385(0x20b)],_0x48ff4e[_0x536385(0x1d6)]=this['clipPlane'],_0x48ff4e[_0x536385(0x16f)]=this['currentViewMatrix'],_0x48ff4e;};function getSceneList(_0x571d5a){const _0x5e8a61=_0x301b48;let _0x2891ae=Cesium['Resource'][_0x5e8a61(0x116)](_0x571d5a);return _0x2891ae[_0x5e8a61(0x1eb)](_0x571d5a)[_0x5e8a61(0x207)](function(_0x25a0bf){const _0x5d5c8d=_0x5e8a61;if(_0x25a0bf[_0x5d5c8d(0x153)]<0x1)return undefined;let _0x4b7db8=_0x25a0bf[0x0];return {'name':_0x4b7db8[_0x5d5c8d(0x16d)],'path':_0x4b7db8[_0x5d5c8d(0x16a)]};});}function getSceneConfig(_0x5743d5){const _0xb0f000=_0x301b48;let _0x11dbaa=Cesium['Resource']['createIfNeeded'](_0x5743d5);return _0x11dbaa[_0xb0f000(0x1eb)](_0x5743d5)['then'](function(_0x1e9af8){return _0x1e9af8;});}function getLayerList(_0x17a82d){const _0x556b39=_0x301b48;let _0x32c880=_0x17a82d+_0x556b39(0x208),_0xbfd5eb=Cesium[_0x556b39(0x170)]['createIfNeeded'](_0x32c880);return _0xbfd5eb[_0x556b39(0x1eb)]()[_0x556b39(0x207)](function(_0x2bd057){const _0x191ae1=_0x556b39;let _0x422c44={'s3m':[],'imagery':[],'s3mGroup':[],'terrain':undefined};for(let _0xb113f3=0x0,_0x565028=_0x2bd057[_0x191ae1(0x153)];_0xb113f3<_0x565028;_0xb113f3++){let _0x5f0ba9=_0x2bd057[_0xb113f3],_0x223a31=_0x5f0ba9['layer3DType'];if(_0x223a31===_0x191ae1(0x21a))_0x422c44[_0x191ae1(0xfe)][_0x191ae1(0x120)](_0x5f0ba9);else {if(_0x223a31===_0x191ae1(0x18e))_0x422c44['imagery'][_0x191ae1(0x120)](_0x5f0ba9);else {if(_0x223a31===_0x191ae1(0x1ad))_0x422c44['terrain']=_0x5f0ba9;else _0x223a31===_0x191ae1(0xfd)&&_0x422c44[_0x191ae1(0x21c)][_0x191ae1(0x120)](_0x5f0ba9);}}}return _0x422c44;});}const rgbMatcher=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,rgbaMatcher2=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)*$/i;function resolveLayerExtendXML(_0xef350e){const _0x2ff6e1=_0x301b48;if(!_0xef350e)throw new Cesium[(_0x2ff6e1(0x17d))](_0x2ff6e1(0x13a));let _0x1f7f4d=_0xef350e[_0x2ff6e1(0x1a0)],_0x487a61=_0x1f7f4d[_0x2ff6e1(0x1e6)],_0x478751=XMLParser[_0x2ff6e1(0x1f0)](_0x1f7f4d,_0x2ff6e1(0x1f2),_0x487a61),_0x320c7d=XMLParser[_0x2ff6e1(0x1d2)](_0x1f7f4d,_0x2ff6e1(0x217),_0x487a61),_0x115a9c=XMLParser[_0x2ff6e1(0x1f0)](_0x1f7f4d,_0x2ff6e1(0x152),_0x487a61),_0x4d3288=XMLParser[_0x2ff6e1(0x209)](_0x320c7d,'Selectable',_0x487a61),_0x39c040=XMLParser['queryBooleanValue'](_0x320c7d,_0x2ff6e1(0x15c),_0x487a61),_0x3e96c1=XMLParser['queryNumericValue'](_0x320c7d,_0x2ff6e1(0x1a3),_0x487a61),_0x3ef3b8=XMLParser[_0x2ff6e1(0x214)](_0x320c7d,'VisibleAltitudeMax',_0x487a61);_0x3ef3b8=_0x3ef3b8===0x0?Number[_0x2ff6e1(0x1c9)]:_0x3ef3b8;let _0x211578=XMLParser['queryNumericValue'](_0x320c7d,_0x2ff6e1(0x1f6),_0x487a61),_0xad87d4=XMLParser['queryNumericValue'](_0x320c7d,'VisibleDistanceMax',_0x487a61),_0x23a050=XMLParser[_0x2ff6e1(0x1f0)](_0x320c7d,_0x2ff6e1(0x103),_0x487a61),_0x72dc6b=0x0;if(_0x23a050==='SELECTION')_0x72dc6b=0x1;else _0x23a050==='ALL'&&(_0x72dc6b=0x2);let _0x43b65f=XMLParser[_0x2ff6e1(0x1f0)](_0x1f7f4d,_0x2ff6e1(0x1ab),_0x487a61),_0x5267d8=_0x43b65f===_0x2ff6e1(0x176),_0x329ec5=_0x43b65f==='S3M',_0x33fa0e=_0x43b65f==='OSGB',_0x441b80=XMLParser[_0x2ff6e1(0x1d2)](_0x1f7f4d,_0x2ff6e1(0x1fa),_0x487a61);if(!_0x441b80){let _0x99e19d=XMLParser[_0x2ff6e1(0x1d2)](_0x1f7f4d,_0x2ff6e1(0x20e),_0x487a61);if(_0x99e19d){_0x441b80=XMLParser[_0x2ff6e1(0x1d2)](_0x99e19d,_0x2ff6e1(0x1fa),_0x487a61);if(!_0x441b80)throw new Cesium['DeveloperError'](_0x2ff6e1(0x181)+_0x478751);}}let _0x48996a=XMLParser['queryNumericValue'](_0x441b80,_0x2ff6e1(0x182),_0x487a61),_0x2db2cd=XMLParser[_0x2ff6e1(0x1f0)](_0x441b80,_0x2ff6e1(0x136),_0x487a61),_0x22bb60=rgbMatcher[_0x2ff6e1(0x1a5)](_0x2db2cd[_0x2ff6e1(0x134)]()),_0x2415f4=new Cesium['Color']();if(_0x22bb60!==null){let _0x152d7a=parseFloat(_0x22bb60[0x1]);_0x152d7a=_0x152d7a===0xbd?0xff:_0x152d7a;let _0x24fe60=parseFloat(_0x22bb60[0x2]);_0x24fe60=_0x24fe60===0xeb?0xff:_0x24fe60,_0x2415f4['red']=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1dc)](_0x152d7a/0xff,0x0,0x1),_0x2415f4[_0x2ff6e1(0x159)]=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1dc)](_0x24fe60/0xff,0x0,0x1),_0x2415f4[_0x2ff6e1(0x1d1)]=Cesium['Math'][_0x2ff6e1(0x1dc)](parseFloat(_0x22bb60[0x3])%0x100/0xff,0x0,0x1),_0x2415f4['alpha']=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1dc)](parseFloat(_0x22bb60[0x3])%0x10000/0x100/0xff,0x0,0x1);}let _0x24950f=XMLParser[_0x2ff6e1(0x1d2)](_0x441b80,_0x2ff6e1(0x178),_0x487a61),_0x4bf1b4=new Style3D();if(_0x24950f){let _0x1202c8=XMLParser[_0x2ff6e1(0x1f0)](_0x24950f,_0x2ff6e1(0x15d),_0x487a61),_0x26c69d=_0x36bab0[_0x2ff6e1(0x143)];if(_0x1202c8===_0x2ff6e1(0x17f))_0x26c69d=_0x36bab0[_0x2ff6e1(0x1c0)];else _0x1202c8===_0x2ff6e1(0x188)&&(_0x26c69d=_0x36bab0[_0x2ff6e1(0x1f9)]);let _0xfc8c8b=XMLParser[_0x2ff6e1(0x214)](_0x24950f,'PointSize',_0x487a61),_0x9c45da=XMLParser[_0x2ff6e1(0x1f0)](_0x24950f,_0x2ff6e1(0x147),_0x487a61),_0x5b0e46=rgbaMatcher2[_0x2ff6e1(0x1a5)](_0x9c45da[_0x2ff6e1(0x134)]()),_0x326afb=new Cesium[(_0x2ff6e1(0x12f))]();_0x5b0e46!==null&&(_0x326afb[_0x2ff6e1(0x19c)]=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1dc)](parseFloat(_0x5b0e46[0x1]),0x0,0x1),_0x326afb['green']=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1dc)](parseFloat(_0x5b0e46[0x2]),0x0,0x1),_0x326afb[_0x2ff6e1(0x1d1)]=Cesium['Math']['clamp'](parseFloat(_0x5b0e46[0x3]),0x0,0x1),_0x326afb[_0x2ff6e1(0x155)]=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1dc)](parseFloat(_0x5b0e46[0x4]),0x0,0x1));let _0x4dcb97=XMLParser[_0x2ff6e1(0x214)](_0x441b80,_0x2ff6e1(0x18c),_0x487a61)||0x0;_0xfc8c8b=Math[_0x2ff6e1(0x15e)](_0xfc8c8b,_0x4dcb97);let _0xa73e13=XMLParser[_0x2ff6e1(0x1f0)](_0x24950f,'ColorPoint',_0x487a61);_0x5b0e46=rgbaMatcher2[_0x2ff6e1(0x1a5)](_0xa73e13[_0x2ff6e1(0x134)]());let _0xedf25c=new Cesium[(_0x2ff6e1(0x12f))]();_0x5b0e46!==null&&(_0xedf25c[_0x2ff6e1(0x19c)]=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1dc)](parseFloat(_0x5b0e46[0x1]),0x0,0x1),_0xedf25c[_0x2ff6e1(0x159)]=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1dc)](parseFloat(_0x5b0e46[0x2]),0x0,0x1),_0xedf25c[_0x2ff6e1(0x1d1)]=Cesium['Math'][_0x2ff6e1(0x1dc)](parseFloat(_0x5b0e46[0x3]),0x0,0x1),_0xedf25c['alpha']=Cesium[_0x2ff6e1(0x191)]['clamp'](parseFloat(_0x5b0e46[0x4]),0x0,0x1));let _0x182c50=XMLParser[_0x2ff6e1(0x214)](_0x24950f,_0x2ff6e1(0x19d),_0x487a61),_0x3277f3=XMLParser[_0x2ff6e1(0x1f0)](_0x24950f,_0x2ff6e1(0x1bb),_0x487a61),_0x96aec4=XMLParser[_0x2ff6e1(0x1f0)](_0x24950f,'BillboardMode',_0x487a61);if(_0x96aec4==='AUTO_Z_AXIAL')_0x96aec4=_0x35abae[_0x2ff6e1(0x215)];else _0x96aec4===_0x2ff6e1(0x1cb)?_0x96aec4=_0x35abae[_0x2ff6e1(0x20a)]:_0x96aec4=_0x35abae[_0x2ff6e1(0x14f)];let _0x43e9ec=Cesium['Math'][_0x2ff6e1(0x1ac)](XMLParser[_0x2ff6e1(0x214)](_0x24950f,_0x2ff6e1(0x1d8),_0x487a61)),_0x3e733e=Cesium[_0x2ff6e1(0x191)][_0x2ff6e1(0x1ac)](XMLParser[_0x2ff6e1(0x214)](_0x24950f,_0x2ff6e1(0x138),_0x487a61)),_0x3ddbd1=Cesium[_0x2ff6e1(0x191)]['toRadians'](XMLParser[_0x2ff6e1(0x214)](_0x24950f,_0x2ff6e1(0x210),_0x487a61)),_0x5c762b=new Cesium[(_0x2ff6e1(0x11c))](_0x43e9ec,_0x3e733e,_0x3ddbd1);_0x4bf1b4[_0x2ff6e1(0x1e5)]=_0x2415f4,_0x4bf1b4[_0x2ff6e1(0x1e4)]=_0x182c50,_0x4bf1b4[_0x2ff6e1(0x141)]=_0x48996a,_0x4bf1b4[_0x2ff6e1(0x126)]=_0x326afb,_0x4bf1b4[_0x2ff6e1(0x11f)]=_0xfc8c8b,_0x4bf1b4[_0x2ff6e1(0x206)]=_0xedf25c,_0x4bf1b4[_0x2ff6e1(0x12c)]=_0x26c69d,_0x4bf1b4[_0x2ff6e1(0x162)]=_0x96aec4;}let _0x5aeb6e=XMLParser[_0x2ff6e1(0x214)](_0x1f7f4d,_0x2ff6e1(0x1ba),_0x487a61),_0x15f777=XMLParser[_0x2ff6e1(0x1d2)](_0x1f7f4d,'PolygonOffset',_0x487a61),_0x105494=XMLParser[_0x2ff6e1(0x214)](_0x15f777,'Constant',_0x487a61),_0x23c2d3=XMLParser[_0x2ff6e1(0x214)](_0x15f777,_0x2ff6e1(0x1ef),_0x487a61),_0x3e660c=_0x105494!==0x0&&_0x23c2d3!==0x0,_0x459a82=XMLParser['queryFirstNode'](_0x1f7f4d,_0x2ff6e1(0x1a9),_0x487a61),_0x3b7230=XMLParser[_0x2ff6e1(0x214)](_0x459a82,'Brightness',_0x487a61),_0x5a52ba=XMLParser[_0x2ff6e1(0x214)](_0x459a82,_0x2ff6e1(0x13b),_0x487a61),_0x5e9cb5=XMLParser['queryNumericValue'](_0x459a82,'Hue',_0x487a61),_0x236705=XMLParser['queryNumericValue'](_0x459a82,_0x2ff6e1(0x15a),_0x487a61),_0x56de23=XMLParser[_0x2ff6e1(0x214)](_0x459a82,'Gamma',_0x487a61);return {'name':_0x478751,'groupName':_0x115a9c,'isS3MB':_0x5267d8,'isS3MBlock':_0x33fa0e,'isS3M':_0x329ec5,'style3D':_0x4bf1b4,'selectEnable':_0x4d3288,'isVisible':_0x39c040,'minVisibleAltitude':_0x3e96c1,'maxVisibleAltitude':_0x3ef3b8,'minVisibleDistance':_0x211578,'maxVisibleDistance':_0xad87d4,'shadowType':_0x72dc6b,'lodRangeScale':_0x5aeb6e,'polygonOffset':{'enabled':_0x3e660c,'units':_0x105494,'factor':_0x23c2d3},'brightness':_0x3b7230,'constrast':_0x5a52ba,'hue':_0x5e9cb5,'saturation':_0x236705,'gamma':_0x56de23};}function getS3MLayerConfig(_0x2c8d61){const _0x3a8646=_0x301b48;let _0x171c43=Cesium[_0x3a8646(0x170)][_0x3a8646(0x116)](_0x2c8d61),_0x27a111=Cesium[_0x3a8646(0x19b)][_0x3a8646(0x204)]();return _0x171c43[_0x3a8646(0x16c)]()['then'](function(_0x90ba76){const _0x24bc94=_0x3a8646;try{let _0x4a6a8a=resolveLayerExtendXML(_0x90ba76);_0x27a111['resolve'](_0x4a6a8a);}catch(_0x5474f0){_0x27a111[_0x24bc94(0x125)](_0x24bc94(0x100));}})['otherwise'](function(){const _0x19474e=_0x3a8646;_0x27a111[_0x19474e(0x125)](_0x19474e(0x1be));}),_0x27a111[_0x3a8646(0x1e8)];}Cesium[_0x301b48(0xfc)][_0x301b48(0x1a7)]['open']=function(_0x1a010a,_0x191911){const _0x3aca4d=_0x301b48;if(_0x1a010a['slice'](-0x9)!=='realspace')throw new Cesium['DeveloperError'](_0x3aca4d(0x1d9));_0x191911=Cesium[_0x3aca4d(0x13e)](_0x191911,{});var _0xe34f=_0x1a010a,_0x56bc64=_0x191911[_0x3aca4d(0x17a)],_0x25e873=/({.*?})/g;if(Cesium[_0x3aca4d(0x1da)](_0x56bc64))_0x1a010a=_0x1a010a[_0x3aca4d(0x1f7)](_0x25e873,function(_0x4eecdd,_0x29c287){const _0x304516=_0x3aca4d;if(!Cesium['defined'](_0x56bc64[_0x304516(0x153)]))throw new DeveloperError(_0x304516(0x158));if(_0x29c287==='{s}')return _0x56bc64[0x0];});else {if(_0x25e873[_0x3aca4d(0x140)](_0x1a010a))throw new DeveloperError(_0x3aca4d(0x158));}let _0x40acfa=_0x1a010a+_0x3aca4d(0x12d),_0x3d1300=this,_0x21c093=this[_0x3aca4d(0x117)],_0x376a14=Cesium[_0x3aca4d(0x19b)][_0x3aca4d(0x204)]();return getSceneList(_0x40acfa)['then'](function(_0x3a72f4){const _0xc21894=_0x3aca4d;if(!_0x3a72f4){_0x376a14['reject'](_0xc21894(0x10e));return;}let _0x2bfd00=_0x3a72f4[_0xc21894(0x16a)]+_0xc21894(0x1af);getSceneConfig(_0x2bfd00)['then'](function(_0x168ae6){const _0x349fdc=_0xc21894;let _0x12f431;_0x168ae6['sceneType']==='NONEARTHFLAT'?(_0x3d1300[_0x349fdc(0x1c3)]=Cesium[_0x349fdc(0x12a)][_0x349fdc(0x13c)],_0x168ae6['camera'][_0x349fdc(0x10a)]-=Math['PI'],_0x12f431=new Cesium['Cartesian3'](_0x168ae6['camera'][_0x349fdc(0x190)],_0x168ae6['camera'][_0x349fdc(0x18f)],_0x168ae6[_0x349fdc(0x117)][_0x349fdc(0x18b)]),_0x21c093[_0x349fdc(0x1df)]({'destination':_0x12f431,'orientation':{'heading':_0x168ae6[_0x349fdc(0x117)][_0x349fdc(0x173)],'pitch':_0x168ae6[_0x349fdc(0x117)][_0x349fdc(0x10a)],'roll':0x0},'convert':![]})):(_0x168ae6[_0x349fdc(0x117)][_0x349fdc(0x10a)]-=0x5a,_0x12f431=Cesium[_0x349fdc(0x1e7)][_0x349fdc(0x1a4)](_0x168ae6['camera'][_0x349fdc(0x190)],_0x168ae6[_0x349fdc(0x117)][_0x349fdc(0x18f)],_0x168ae6[_0x349fdc(0x117)][_0x349fdc(0x18b)]),_0x21c093[_0x349fdc(0x1df)]({'destination':_0x12f431,'orientation':{'heading':Cesium['Math'][_0x349fdc(0x1ac)](_0x168ae6['camera'][_0x349fdc(0x173)]),'pitch':Cesium[_0x349fdc(0x191)]['toRadians'](_0x168ae6[_0x349fdc(0x117)][_0x349fdc(0x10a)]),'roll':0x0},'convert':![]}));})[_0xc21894(0x17e)](function(_0x42d9ad){const _0x404a54=_0xc21894;_0x376a14[_0x404a54(0x125)](_0x404a54(0x192)+_0x42d9ad);});let _0x40c1c0=_0x3a72f4['path'];getLayerList(_0x40c1c0)['then'](function(_0x3b24d9){const _0x5fb8cf=_0xc21894;let _0x4c6abb=_0x3b24d9[_0x5fb8cf(0xfe)],_0x5e4bfc=_0x3b24d9[_0x5fb8cf(0x1db)],_0x3c7e32=_0x3b24d9['terrain'],_0x44f178=_0x3b24d9[_0x5fb8cf(0x21c)],_0x2b87d6=_0x3a72f4[_0x5fb8cf(0x16a)]+_0x5fb8cf(0x11b),_0x173135=[],_0x53e6a4=_0x4c6abb[_0x5fb8cf(0x153)]-0x1;for(let _0x2b8c56=_0x53e6a4;_0x2b8c56>=0x0;_0x2b8c56--){let _0xc1bbc1=_0x4c6abb[_0x2b8c56],_0x42399b=_0x2b87d6+encodeURIComponent(_0xc1bbc1['name'])+_0x5fb8cf(0x11d);(function(_0x46b981){const _0x141237=_0x5fb8cf;let _0x39120c=getS3MLayerConfig(_0x42399b)['then'](function(_0x4475c0){const _0x53f6fa=_0x2292;try{let _0x4602cd=_0x1a010a+_0x53f6fa(0x1c1)+encodeURIComponent(_0x4475c0[_0x53f6fa(0x16d)])+_0x53f6fa(0x102);return _0x4475c0['subdomainConfig']={'subdomains':_0x56bc64,'urlScheme':_0xe34f+_0x53f6fa(0x1c1)+encodeURIComponent(_0x4475c0[_0x53f6fa(0x16d)])+'/'},_0x3d1300[_0x53f6fa(0x104)](_0x4602cd,_0x4475c0);}catch(_0x28ddbf){_0x376a14['reject'](_0x53f6fa(0x218)+_0x4475c0[_0x53f6fa(0x16d)]+_0x53f6fa(0x1f1)+_0x28ddbf);}})[_0x141237(0x17e)](function(_0xbad4ed){const _0x19d85a=_0x141237;_0x376a14[_0x19d85a(0x125)](_0x19d85a(0x16e)+_0xbad4ed+_0x19d85a(0x156)+_0xc1bbc1[_0x19d85a(0x16d)]);});_0x173135[_0x141237(0x120)](_0x39120c);}());}Cesium[_0x5fb8cf(0x19b)][_0x5fb8cf(0x11e)](_0x173135,function(_0x5861d4){const _0x260f94=_0x5fb8cf;_0x376a14[_0x260f94(0x15b)](_0x5861d4);},function(_0x16b15f){const _0x392716=_0x5fb8cf;_0x376a14[_0x392716(0x125)](_0x392716(0x1e1)+_0x16b15f);});})[_0xc21894(0x17e)](function(_0xab2d5e){const _0x5daa3f=_0xc21894;_0x376a14['reject'](_0x5daa3f(0x1e3)+_0xab2d5e);});})[_0x3aca4d(0x17e)](function(_0xfdde7a){const _0x4a3de5=_0x3aca4d;_0x376a14[_0x4a3de5(0x125)](_0x4a3de5(0x130)+_0xfdde7a);}),_0x376a14[_0x3aca4d(0x1e8)];};function ModExp(_0xfc639e,_0xceaad2,_0x580e0a){const _0x5adf8d=_0x301b48;let _0x23910b=new _0xdf17f0(_0xfc639e),_0x7053de=new _0xdf17f0(_0xceaad2),_0x513bd1=new _0xdf17f0(0x1),_0x22981f=new _0xdf17f0(0x2),_0x7829e0=new _0xdf17f0(0x1);while(_0x7053de['toNumber']()>0x0){_0x7053de[_0x5adf8d(0x1ea)](_0x22981f)['toNumber']()===0x0?(_0x7053de=_0x7053de[_0x5adf8d(0x14a)](_0x22981f),_0x23910b=_0x23910b[_0x5adf8d(0x131)](_0x23910b)[_0x5adf8d(0x1ea)](_0x580e0a)):(_0x7053de=_0x7053de['minus'](_0x7829e0),_0x513bd1=_0x513bd1['multipliedBy'](_0x23910b)[_0x5adf8d(0x1ea)](_0x580e0a));}return _0x513bd1[_0x5adf8d(0x13f)]();}let _rssCache={};function RSAAuthentication(_0x30b47c){const _0xde003=_0x301b48;let _0x1efb21=Cesium[_0xde003(0x19b)]['defer']();if(_rssCache[_0x30b47c])return _rssCache[_0x30b47c];let _0x314cde=Cesium[_0xde003(0x170)][_0xde003(0x116)](_0x30b47c+'/login.json');return _rssCache[_0x30b47c]=_0x1efb21[_0xde003(0x1e8)],_0x314cde['fetchJson']()[_0xde003(0x207)](_0x2ef805=>{const _0x4a88c4=_0xde003;let _0x489864=Number(_0x2ef805[_0x4a88c4(0x10d)]),_0x2d721c=Number(_0x2ef805[_0x4a88c4(0x157)]),_0x5a16b2=0x8f461e7bf61d5,_0x38e1b4=0x1694ad7fce84d,_0xa94966=ModExp(_0x2d721c,_0x38e1b4,_0x5a16b2),_0x364c7e=JSON[_0x4a88c4(0x114)]({'jsessionID':_0x489864[_0x4a88c4(0x121)](),'random':_0xa94966[_0x4a88c4(0x121)]()});Cesium[_0x4a88c4(0x170)][_0x4a88c4(0x1de)]({'url':_0x30b47c+_0x4a88c4(0x127),'data':_0x364c7e,'responseType':_0x4a88c4(0x1f3)})['then'](_0x5745aa=>{const _0x5f2d3d=_0x4a88c4;_0x5745aa[_0x5f2d3d(0x145)]===!![]?(_0x1efb21[_0x5f2d3d(0x15b)](_0xa94966),_rssCache[_0x30b47c]=_0xa94966):_0x1efb21['reject'](![]);})[_0x4a88c4(0x17e)](_0xe39930=>{const _0x40bb9a=_0x4a88c4;_0x1efb21[_0x40bb9a(0x125)](_0xe39930);});})[_0xde003(0x17e)](_0x21d408=>{const _0x616e73=_0xde003;_0x1efb21[_0x616e73(0x125)](_0x21d408);}),_0x1efb21[_0xde003(0x1e8)];}Cesium['Scene']['prototype'][_0x301b48(0x104)]=function(_0x50aa56,_0x4f15ee,_0x343593){const _0x40a47c=_0x301b48;_0x4f15ee=_0x4f15ee||{};let _0x532674=Cesium[_0x40a47c(0x19b)][_0x40a47c(0x204)](),_0x3767b1=_0x50aa56[_0x40a47c(0x142)](_0x40a47c(0x1c8));if(_0x3767b1===-0x1)return _0x532674[_0x40a47c(0x125)](![]);let _0x2cf055=_0x50aa56[_0x40a47c(0x168)](0x0,_0x3767b1+0xe),_0x3b7e6a=this;return Cesium[_0x40a47c(0x19b)](RSAAuthentication(_0x2cf055),function(_0x57e8e5){const _0x26d942=_0x40a47c;_0x4f15ee[_0x26d942(0x198)]=_0x50aa56,_0x4f15ee['context']=_0x3b7e6a[_0x26d942(0x1e9)],_0x4f15ee['rss']=_0x57e8e5,_0x4f15ee[_0x26d942(0x1aa)]=_0x3b7e6a[_0x26d942(0x1a2)];let _0x3c70a4=new S3MTilesLayer(_0x4f15ee);_0x3b7e6a['primitives'][_0x26d942(0x201)](_0x3c70a4,_0x343593),!_0x3b7e6a[_0x26d942(0x1e9)][_0x26d942(0x179)]&&(_0x3b7e6a['context'][_0x26d942(0x179)]=new ReflectFramebuffer(_0x3b7e6a['context']),_0x3b7e6a[_0x26d942(0x1dd)][_0x26d942(0x129)]('reflect',_0x3b7e6a[_0x26d942(0x1e9)][_0x26d942(0x179)])),_0x532674[_0x26d942(0x15b)](_0x3c70a4);},function(_0x19b168){_0x532674['reject'](_0x19b168);}),_0x532674['promise'];},Cesium['Scene']['prototype'][_0x301b48(0x137)]=Cesium['Scene'][_0x301b48(0x1a7)][_0x301b48(0x123)],Cesium[_0x301b48(0xfc)][_0x301b48(0x1a7)][_0x301b48(0x123)]=function(_0x18ee3b,_0x1235b4,_0xec67e){const _0x314cf8=_0x301b48;let _0x241405=this['hookPickFunc'](_0x18ee3b,_0x1235b4,_0xec67e);if(_0x241405){let _0x3d73dc=_0x241405['primitive']&&_0x241405[_0x314cf8(0x101)]instanceof S3MTilesLayer;_0x3d73dc&&_0x241405[_0x314cf8(0x101)][_0x314cf8(0x1bd)](_0x241405['id']);}else for(let _0x577225=0x0,_0x157dfc=this[_0x314cf8(0x1d3)][_0x314cf8(0x153)];_0x577225<_0x157dfc;_0x577225++){let _0x4011ce=this[_0x314cf8(0x1d3)][_0x314cf8(0x21b)](_0x577225);_0x4011ce instanceof S3MTilesLayer&&_0x4011ce[_0x314cf8(0x10b)]();}return _0x241405;},Cesium[_0x301b48(0xfc)]['prototype'][_0x301b48(0x161)]=Cesium[_0x301b48(0xfc)]['prototype'][_0x301b48(0x113)],Cesium[_0x301b48(0xfc)]['prototype'][_0x301b48(0x113)]=function(_0x411721,_0x27f01d,_0x5c5b46,_0x1abcfc){const _0x374508=_0x301b48;let _0x531144=this[_0x374508(0x161)](_0x411721,_0x27f01d,_0x5c5b46,_0x1abcfc),_0x4a7ead=_0x531144[0x0]&&_0x531144[0x0][_0x374508(0x101)]&&_0x531144[0x0][_0x374508(0x101)]instanceof S3MTilesLayer,_0x3d9732=[],_0xd03619=Object['create'](null);if(_0x4a7ead){while(_0x531144&&Cesium[_0x374508(0x1da)](_0x531144[0x0])){let _0x913c3c=_0x531144[0x0];_0x3d9732[_0x374508(0x120)](_0x913c3c);if(_0x913c3c[_0x374508(0x101)]instanceof S3MTilesLayer){_0x913c3c[_0x374508(0x101)][_0x374508(0x194)]([_0x913c3c['id']],![]);let _0x1aac47=_0x913c3c['primitive']['id'];(_0xd03619[_0x1aac47]=_0xd03619[_0x1aac47]||{})[_0x374508(0x1ee)]=_0x913c3c[_0x374508(0x101)],(_0xd03619[_0x1aac47][_0x374508(0x1d7)]=_0xd03619[_0x1aac47]['ids']||[])['push'](_0x913c3c['id']);}_0x531144=this[_0x374508(0x161)](_0x411721,_0x27f01d,_0x5c5b46,_0x1abcfc);}for(let _0x144bc4 in _0xd03619){let _0x344dff=_0xd03619[_0x144bc4];_0x344dff['layer'][_0x374508(0x194)](_0x344dff['ids'],!![]);}return _0x3d9732;}return _0x531144;},Cesium['Scene'][_0x301b48(0x1a7)][_0x301b48(0x1dd)]=new Cesium['AssociativeArray'](),Cesium[_0x301b48(0xfc)][_0x301b48(0x1a7)]['_setRenderTarget']=function(_0x28e005,_0x2be206){this['_renderTargets']['set'](_0x28e005,_0x2be206);},Cesium[_0x301b48(0xfc)]['prototype'][_0x301b48(0x119)]=function(_0x1b2765){const _0x5c9757=_0x301b48;this[_0x5c9757(0x1dd)][_0x5c9757(0x171)](_0x1b2765);},Cesium['Scene']['prototype'][_0x301b48(0x180)]=Cesium[_0x301b48(0xfc)]['prototype']['render'],Cesium['Scene'][_0x301b48(0x1a7)][_0x301b48(0x1a8)]=function(_0x1570d3){const _0x489946=_0x301b48;this[_0x489946(0x180)](_0x1570d3),this['frameState'][_0x489946(0x172)]['length']=0x0;if(this[_0x489946(0x1dd)]['length'])for(let _0x174f87=0x0,_0x29d1a2=this[_0x489946(0x1dd)][_0x489946(0x153)];_0x174f87<_0x29d1a2;_0x174f87++){let _0x2599bc=this[_0x489946(0x1dd)][_0x489946(0x154)][_0x174f87];if(!_0x2599bc[_0x489946(0x164)])continue;this[_0x489946(0x1e0)][_0x489946(0x1f4)]=!![],this[_0x489946(0x150)]=![];let _0x11b25c=_0x2599bc[_0x489946(0x1b9)](this);this[_0x489946(0x1fe)](),this[_0x489946(0x20f)](_0x11b25c,Cesium[_0x489946(0x12f)][_0x489946(0x1ae)]),this[_0x489946(0x166)](_0x11b25c),_0x2599bc[_0x489946(0x17b)](this[_0x489946(0x1e0)],_0x11b25c),this[_0x489946(0x1e0)][_0x489946(0x1f4)]=![],this[_0x489946(0x150)]=!![];}if(this[_0x489946(0x1e9)][_0x489946(0x179)]&&this['frameState'][_0x489946(0x1e2)]!==undefined){if(this[_0x489946(0x1e0)][_0x489946(0x1e2)]>0xc350)this[_0x489946(0x1e9)][_0x489946(0x179)][_0x489946(0x164)]=![];else {let _0x5b460d=this['frameState'][_0x489946(0x1bc)],_0x3a45fb=this['camera'][_0x489946(0x11a)],_0x2fb25d=this[_0x489946(0x1e9)]['reflectFramebuffer'][_0x489946(0x124)],_0x5f5d92=Cesium[_0x489946(0x1e7)]['magnitude'](_0x3a45fb)-this['camera'][_0x489946(0x18a)][_0x489946(0x184)];_0x5b460d+=_0x5f5d92,Cesium[_0x489946(0x1e7)][_0x489946(0x15f)](_0x3a45fb,_0x2fb25d['normal']),_0x2fb25d[_0x489946(0x146)][_0x489946(0x106)](scratchCartesian3),Cesium['Cartesian3']['multiplyByScalar'](scratchCartesian3,_0x5b460d,scratchCartesian3),_0x2fb25d[_0x489946(0x108)]=-Cesium['Cartesian3'][_0x489946(0x1b3)](scratchCartesian3,_0x2fb25d[_0x489946(0x146)]),this[_0x489946(0x1e9)][_0x489946(0x179)]['isUpdate']=!![];}this['frameState'][_0x489946(0x1bc)]=0x0;}},Cesium[_0x301b48(0x163)][_0x301b48(0x1a7)]['hookUpdateFunc']=Cesium[_0x301b48(0x163)][_0x301b48(0x1a7)][_0x301b48(0x202)],Cesium['SkyAtmosphere'][_0x301b48(0x1a7)][_0x301b48(0x202)]=function(_0x38c624,_0x4e96c2){const _0x1419a3=_0x301b48;let _0x58d30a=this[_0x1419a3(0x149)](_0x38c624,_0x4e96c2);return _0x58d30a&&_0x38c624['camera'][_0x1419a3(0x177)]&&(!this['reflectRs']&&(this['reflectRs']=Cesium[_0x1419a3(0x216)][_0x1419a3(0x1bf)]({'cull':{'enabled':!![],'face':Cesium[_0x1419a3(0x199)]['BACK']},'blending':Cesium[_0x1419a3(0x219)][_0x1419a3(0x1ec)],'depthMask':![]})),_0x58d30a[_0x1419a3(0x13d)]=this['reflectRs']),_0x58d30a;};function setView(_0x42c276,_0x43ad46){const _0x4ee6f9=_0x301b48;Cesium[_0x4ee6f9(0x1a1)][_0x4ee6f9(0x106)](_0x43ad46,_0x42c276[_0x4ee6f9(0x165)]),Cesium[_0x4ee6f9(0x1a1)][_0x4ee6f9(0x19a)](_0x43ad46,_0x42c276[_0x4ee6f9(0x1c7)]),_0x42c276[_0x4ee6f9(0x105)]=!![],_0x42c276[_0x4ee6f9(0x1d4)]=!![],_0x42c276[_0x4ee6f9(0x185)]=!![],_0x42c276['_modelView3DDirty']=!![],_0x42c276[_0x4ee6f9(0x12e)]=!![],_0x42c276[_0x4ee6f9(0x10f)]=!![],_0x42c276[_0x4ee6f9(0x169)]=!![],_0x42c276[_0x4ee6f9(0x10c)]=!![],_0x42c276[_0x4ee6f9(0x183)]=!![],_0x42c276['_modelViewProjectionDirty']=!![],_0x42c276['_modelViewProjectionRelativeToEyeDirty']=!![],_0x42c276[_0x4ee6f9(0x110)]=!![],_0x42c276[_0x4ee6f9(0x144)]=!![],_0x42c276[_0x4ee6f9(0x1b4)]=!![],_0x42c276[_0x4ee6f9(0x213)]=!![],_0x42c276['_inverseNormal3DDirty']=!![];}function setInverseView(_0xcaf505,_0x248a4a){const _0x314e8a=_0x301b48;Cesium[_0x314e8a(0x1a1)]['clone'](_0x248a4a,_0xcaf505['_inverseView']),Cesium[_0x314e8a(0x1a1)][_0x314e8a(0x19a)](_0x248a4a,_0xcaf505[_0x314e8a(0x12b)]);}function setCamera(_0x58fd86,_0xa442a3){const _0x3dc0a0=_0x301b48;Cesium[_0x3dc0a0(0x1e7)]['clone'](_0xa442a3[_0x3dc0a0(0x11a)],_0x58fd86[_0x3dc0a0(0x1b6)]),Cesium[_0x3dc0a0(0x1e7)][_0x3dc0a0(0x106)](_0xa442a3[_0x3dc0a0(0x17c)],_0x58fd86[_0x3dc0a0(0x115)]),Cesium['Cartesian3'][_0x3dc0a0(0x106)](_0xa442a3[_0x3dc0a0(0x1b8)],_0x58fd86[_0x3dc0a0(0x211)]),Cesium[_0x3dc0a0(0x1e7)][_0x3dc0a0(0x106)](_0xa442a3[_0x3dc0a0(0x1d0)],_0x58fd86[_0x3dc0a0(0x14e)]);let _0x490f47=_0xa442a3['positionCartographic'];!Cesium[_0x3dc0a0(0x1da)](_0x490f47)?_0x58fd86[_0x3dc0a0(0x1cc)]=-_0x58fd86['_ellipsoid'][_0x3dc0a0(0x196)]:_0x58fd86[_0x3dc0a0(0x1cc)]=_0x490f47[_0x3dc0a0(0x184)],_0x58fd86[_0x3dc0a0(0x1b7)]=!![];}Cesium['UniformState'][_0x301b48(0x1a7)][_0x301b48(0x1c5)]=function(_0x5c3230){const _0x18f2c6=_0x301b48;let _0x519b56=_0x5c3230['viewMatrix'],_0x1634fe=_0x5c3230['inverseViewMatrix'];_0x5c3230[_0x18f2c6(0x177)]?(Cesium[_0x18f2c6(0x1a1)]['multiply'](_0x519b56,_0x5c3230[_0x18f2c6(0x122)],scratchMatrix4),Cesium['Matrix4'][_0x18f2c6(0x109)](scratchMatrix4,scratchInvMatrix4),setView(this,scratchMatrix4),setInverseView(this,scratchInvMatrix4)):(setView(this,_0x519b56),setInverseView(this,_0x1634fe)),setCamera(this,_0x5c3230),this[_0x18f2c6(0x128)]['x']=_0x5c3230[_0x18f2c6(0x212)][_0x18f2c6(0x174)],this['_entireFrustum']['y']=_0x5c3230[_0x18f2c6(0x212)][_0x18f2c6(0x1d5)],this[_0x18f2c6(0x175)](_0x5c3230[_0x18f2c6(0x212)]),this[_0x18f2c6(0xff)]=this[_0x18f2c6(0x1a2)]!==Cesium['SceneMode'][_0x18f2c6(0x1ed)]&&_0x5c3230[_0x18f2c6(0x212)]instanceof Cesium['OrthographicFrustum'];};function modifyProjectionMatrix(_0x2e0a50,_0x52cc96){const _0x16fd4b=_0x301b48;if(!_0x2e0a50['clipPlane']||!_0x2e0a50[_0x16fd4b(0x16f)]||!_0x2e0a50[_0x16fd4b(0x20b)])return;let _0x37f5e6=_0x2e0a50[_0x16fd4b(0x16f)];Cesium[_0x16fd4b(0x1a1)][_0x16fd4b(0x151)](_0x37f5e6,_0x2e0a50[_0x16fd4b(0x1d6)],scratchPlane),scratchCartesian4['x']=(Cesium['Math'][_0x16fd4b(0x195)](scratchPlane[_0x16fd4b(0x146)]['x'])+_0x52cc96[0x8])/_0x52cc96[0x0],scratchCartesian4['y']=(Cesium['Math'][_0x16fd4b(0x195)](scratchPlane[_0x16fd4b(0x146)]['y'])+_0x52cc96[0x9])/_0x52cc96[0x5],scratchCartesian4['z']=-0x1,scratchCartesian4['w']=(0x1+_0x52cc96[0xa])/_0x52cc96[0xe],scratchClipPlane4d['x']=scratchPlane[_0x16fd4b(0x146)]['x'],scratchClipPlane4d['y']=scratchPlane['normal']['y'],scratchClipPlane4d['z']=scratchPlane[_0x16fd4b(0x146)]['z'],scratchClipPlane4d['w']=scratchPlane[_0x16fd4b(0x108)],Cesium[_0x16fd4b(0x1f5)][_0x16fd4b(0x1b5)](scratchClipPlane4d,0x2/Cesium[_0x16fd4b(0x1f5)][_0x16fd4b(0x1b3)](scratchClipPlane4d,scratchCartesian4),scratchCartesian4),_0x52cc96[0x2]=scratchCartesian4['x'],_0x52cc96[0x6]=scratchCartesian4['y'],_0x52cc96[0xa]=scratchCartesian4['z']+0x1,_0x52cc96[0xe]=scratchCartesian4['w'];}function setProjection(_0x2e883d,_0x3e0765){const _0x2dc482=_0x301b48;Cesium[_0x2dc482(0x1a1)]['clone'](_0x3e0765,_0x2e883d[_0x2dc482(0x1fd)]),_0x2e883d[_0x2dc482(0x197)]=!![],_0x2e883d[_0x2dc482(0x10c)]=!![],_0x2e883d['_inverseViewProjectionDirty']=!![],_0x2e883d[_0x2dc482(0x200)]=!![],_0x2e883d[_0x2dc482(0x19e)]=!![];}function setInfiniteProjection(_0x5ae626,_0x2b5dc1){const _0x53c5cf=_0x301b48;Cesium['Matrix4'][_0x53c5cf(0x106)](_0x2b5dc1,_0x5ae626[_0x53c5cf(0x1b2)]),_0x5ae626[_0x53c5cf(0x110)]=!![];}Cesium['UniformState']['prototype']['updateFrustum']=function(_0x1c70b){const _0x460aa4=_0x301b48;let _0x2cc14a=_0x1c70b['projectionMatrix'];Cesium[_0x460aa4(0x1a1)][_0x460aa4(0x106)](_0x2cc14a,scratchMatrix4),modifyProjectionMatrix(_0x1c70b,scratchMatrix4),setProjection(this,scratchMatrix4),Cesium['defined'](_0x1c70b[_0x460aa4(0x20c)])&&setInfiniteProjection(this,_0x1c70b[_0x460aa4(0x20c)]),this[_0x460aa4(0x1a6)]['x']=_0x1c70b[_0x460aa4(0x174)],this[_0x460aa4(0x1a6)]['y']=_0x1c70b[_0x460aa4(0x1d5)],this[_0x460aa4(0x1ff)]=_0x1c70b[_0x460aa4(0x1d5)]-_0x1c70b[_0x460aa4(0x174)]+0x1,this[_0x460aa4(0x148)]=Cesium['Math']['log2'](this['_farDepthFromNearPlusOne']),this[_0x460aa4(0x189)]=0x1/this[_0x460aa4(0x148)],Cesium[_0x460aa4(0x1da)](_0x1c70b[_0x460aa4(0x193)])&&(_0x1c70b=_0x1c70b[_0x460aa4(0x193)]),this[_0x460aa4(0x1fb)]['x']=_0x1c70b[_0x460aa4(0x1c6)],this['_frustumPlanes']['y']=_0x1c70b[_0x460aa4(0x135)],this['_frustumPlanes']['z']=_0x1c70b[_0x460aa4(0x19f)],this[_0x460aa4(0x1fb)]['w']=_0x1c70b['right'];};var CesiumExt = {};

    const _0x2152=['1QOljyM','67114BdhQIC','3XAYHqe','1bTXEAx','259970xtbTyD','3327wVvhHP','264913MPwDIM','freeze','1YRYemA','140111HhYegP','39403UFusKu','303778GPLCqG','9VGHqFX'];const _0xbc3eef=_0x2d44;(function(_0x9e044e,_0x4f0916){const _0x20d8e9=_0x2d44;while(!![]){try{const _0x146583=parseInt(_0x20d8e9(0x185))*parseInt(_0x20d8e9(0x189))+parseInt(_0x20d8e9(0x186))+-parseInt(_0x20d8e9(0x18b))*-parseInt(_0x20d8e9(0x18a))+parseInt(_0x20d8e9(0x188))*parseInt(_0x20d8e9(0x18e))+-parseInt(_0x20d8e9(0x187))*-parseInt(_0x20d8e9(0x184))+-parseInt(_0x20d8e9(0x182))*parseInt(_0x20d8e9(0x18c))+-parseInt(_0x20d8e9(0x18d));if(_0x146583===_0x4f0916)break;else _0x9e044e['push'](_0x9e044e['shift']());}catch(_0x89374){_0x9e044e['push'](_0x9e044e['shift']());}}}(_0x2152,0x2e4fe));function _0x2d44(_0xf72b41,_0x25bb77){_0xf72b41=_0xf72b41-0x182;let _0x215239=_0x2152[_0xf72b41];return _0x215239;}const ClampMode={'Space':0x0,'Ground':0x1,'S3mModel':0x2,'Raster':0x3};var _0x558519 = Object[_0xbc3eef(0x183)](ClampMode);

    const _0x5e26=['28091EAOWUg','53IskGhb','1205749Etzglk','freeze','19194cMKYTh','5ncpPsi','1776511uRkEAN','58sCSgbU','30982BmpJGE','289346dmZCnN','1829587zwDcOb'];const _0x599175=_0x41fd;function _0x41fd(_0x28ab78,_0x5d55e2){_0x28ab78=_0x28ab78-0x118;let _0x5e269a=_0x5e26[_0x28ab78];return _0x5e269a;}(function(_0x5153f1,_0xd840a4){const _0x96ec78=_0x41fd;while(!![]){try{const _0x3e8e5a=parseInt(_0x96ec78(0x11c))+-parseInt(_0x96ec78(0x11f))*parseInt(_0x96ec78(0x11b))+parseInt(_0x96ec78(0x120))+-parseInt(_0x96ec78(0x11d))*parseInt(_0x96ec78(0x121))+-parseInt(_0x96ec78(0x11a))+-parseInt(_0x96ec78(0x122))*-parseInt(_0x96ec78(0x11e))+-parseInt(_0x96ec78(0x118));if(_0x3e8e5a===_0xd840a4)break;else _0x5153f1['push'](_0x5153f1['shift']());}catch(_0x1f1ecb){_0x5153f1['push'](_0x5153f1['shift']());}}}(_0x5e26,0xe73f9));const DrawMode={'Point':0x0,'Line':0x1,'Polygon':0x2};var _0x12b805 = Object[_0x599175(0x119)](DrawMode);

    const _0x184c=['add','activeEvt','424693HhGqWN','MOUSE_MOVE','Line','mode','random','hierarchy','defaultValue','points','fromCssColorString','raiseEvent','remove','ScreenSpaceEventType','polyline-','position','DeveloperError','polylines','primitives','viewer','positions','556780NOmqyX','endPosition','isDrawing','2309fYCFjm','1vGoFEt','#51ff00','ScreenSpaceEventHandler','withAlpha','active','concat','Point','_clampMode','polygon','defineProperties','scene','452026TpYgdB','pickPositionSupported','slice','removeInputAction','length','PointPrimitiveCollection','push','1SnBxhU','Space','Event','prototype','show','RIGHT_CLICK','clampToGroundPolylines','S3mModel','Material','PolylineCollection','polyline','_activeEvt','Cartesian3','fromType','movingEvt','Polygon','275939WpzzUp','drawEvt','viewer\x20and\x20mode\x20is\x20required!','entities','point','Ground','pickPosition','_drawEvt','Cartesian2','71930floHpm','121IsPsmS','ColorType','handler','your\x20browser\x20not\x20supported\x20pickPosition!','deactivate','101191sQJtoa','canvas','removeAll','clone','log','Color'];const _0x457233=_0x1f5e;(function(_0x4ee153,_0x1035ca){const _0x5ce43d=_0x1f5e;while(!![]){try{const _0x3ff70f=-parseInt(_0x5ce43d(0x16d))+-parseInt(_0x5ce43d(0x152))+parseInt(_0x5ce43d(0x193))+parseInt(_0x5ce43d(0x14d))*-parseInt(_0x5ce43d(0x170))+parseInt(_0x5ce43d(0x171))*parseInt(_0x5ce43d(0x17c))+-parseInt(_0x5ce43d(0x15a))*-parseInt(_0x5ce43d(0x183))+parseInt(_0x5ce43d(0x14c));if(_0x3ff70f===_0x1035ca)break;else _0x4ee153['push'](_0x4ee153['shift']());}catch(_0x20da20){_0x4ee153['push'](_0x4ee153['shift']());}}}(_0x184c,0x461fc));let DrawHandler=function(_0xa600d2,_0x2f3ab4,_0x59aaed){const _0x51e314=_0x1f5e;if(!_0xa600d2||_0x2f3ab4===undefined)throw new Cesium[(_0x51e314(0x168))](_0x51e314(0x145));this['handler']=new Cesium[(_0x51e314(0x173))](_0xa600d2[_0x51e314(0x17b)][_0x51e314(0x153)]),this[_0x51e314(0x16b)]=_0xa600d2,this[_0x51e314(0x15d)]=_0x2f3ab4,this['_clampMode']=Cesium[_0x51e314(0x160)](_0x59aaed,_0x558519[_0x51e314(0x184)]),this[_0x51e314(0x16f)]=![],this[_0x51e314(0x175)]=![],this['_drawEvt']=new Cesium['Event'](),this[_0x51e314(0x18e)]=new Cesium[(_0x51e314(0x185))](),this[_0x51e314(0x191)]=new Cesium[(_0x51e314(0x185))](),this[_0x51e314(0x169)]=undefined,this[_0x51e314(0x18d)]=undefined,this[_0x51e314(0x179)]=undefined,this[_0x51e314(0x161)]=undefined,this[_0x51e314(0x147)]=undefined;};Object[_0x457233(0x17a)](DrawHandler[_0x457233(0x186)],{'drawEvt':{'get':function(){const _0x3398a4=_0x457233;return this[_0x3398a4(0x14a)];}},'activeEvt':{'get':function(){const _0x4685f3=_0x457233;return this[_0x4685f3(0x18e)];}}}),DrawHandler['prototype']['activate']=function(){const _0x466795=_0x457233;if(this[_0x466795(0x175)]===!![])return;this[_0x466795(0x175)]=!![];let _0x3755a5=this;this['handler']['setInputAction'](function(_0x15237c){clickHandler(_0x15237c,_0x3755a5);},Cesium[_0x466795(0x165)]['LEFT_CLICK']),this[_0x466795(0x14f)]['setInputAction'](function(_0x2c1b86){moveHandler(_0x2c1b86,_0x3755a5);},Cesium[_0x466795(0x165)][_0x466795(0x15b)]),this[_0x466795(0x14f)]['setInputAction'](function(_0x341eb3){rclkHandler(_0x341eb3,_0x3755a5);},Cesium['ScreenSpaceEventType'][_0x466795(0x188)]),this[_0x466795(0x159)][_0x466795(0x163)](!![]);},DrawHandler[_0x457233(0x186)][_0x457233(0x151)]=function(){const _0x5e8e67=_0x457233;this[_0x5e8e67(0x175)]=![],this['isDrawing']=![],this[_0x5e8e67(0x14f)][_0x5e8e67(0x17f)](Cesium[_0x5e8e67(0x165)]['LEFT_CLICK']),this[_0x5e8e67(0x14f)]['removeInputAction'](Cesium[_0x5e8e67(0x165)]['MOUSE_MOVE']),this[_0x5e8e67(0x14f)][_0x5e8e67(0x17f)](Cesium[_0x5e8e67(0x165)]['RIGHT_CLICK']),this[_0x5e8e67(0x159)][_0x5e8e67(0x163)](![]);},DrawHandler[_0x457233(0x186)]['clear']=function(){const _0x4920ab=_0x457233;this[_0x4920ab(0x151)](),this['polylines']&&(this[_0x4920ab(0x169)][_0x4920ab(0x154)](),this['viewer'][_0x4920ab(0x17b)][_0x4920ab(0x16a)][_0x4920ab(0x164)](this[_0x4920ab(0x169)]),this[_0x4920ab(0x169)]=undefined),this['polygon']&&(this[_0x4920ab(0x16b)][_0x4920ab(0x146)][_0x4920ab(0x164)](this['polygon']),this[_0x4920ab(0x179)]=undefined),this[_0x4920ab(0x161)]&&(this[_0x4920ab(0x161)][_0x4920ab(0x154)](),this[_0x4920ab(0x16b)]['scene'][_0x4920ab(0x16a)][_0x4920ab(0x164)](this[_0x4920ab(0x161)]),this[_0x4920ab(0x161)]=undefined);};function clickHandler(_0xd5c16a,_0x396638){const _0x3fa918=_0x457233;let _0x18ccfc=_0x396638;if(_0x18ccfc&&_0x18ccfc['active']){let _0x4a7195=_0x18ccfc[_0x3fa918(0x16b)]['scene'];if(!_0x4a7195[_0x3fa918(0x17d)]){console[_0x3fa918(0x156)](_0x3fa918(0x150));return;}let _0xf006d6=_0x4a7195['pickPosition'](_0xd5c16a[_0x3fa918(0x167)]);if(_0xf006d6){if(!_0x18ccfc['isDrawing']){_0x18ccfc[_0x3fa918(0x16f)]=!![];switch(_0x18ccfc['mode']){case _0x12b805[_0x3fa918(0x177)]:startDrawPoint(_0xf006d6,_0x18ccfc);break;case _0x12b805['Line']:startDrawLine(_0xf006d6,_0x18ccfc);break;case _0x12b805[_0x3fa918(0x192)]:startDrawPolygon(_0xf006d6,_0x18ccfc);break;}}else {let _0x50e741=new Cesium[(_0x3fa918(0x14b))](_0xd5c16a['position']['x'],_0xd5c16a[_0x3fa918(0x167)]['y']);switch(_0x18ccfc[_0x3fa918(0x15d)]){case _0x12b805[_0x3fa918(0x15c)]:processLine(_0x50e741,_0x18ccfc,!![]);break;case _0x12b805[_0x3fa918(0x192)]:processPolygon(_0x50e741,_0x18ccfc,!![]);break;}}}}}function startDrawPoint(_0x1d3465,_0x555a70){const _0x341729=_0x457233;let _0x55a079=_0x555a70;!_0x55a079[_0x341729(0x161)]?(_0x55a079[_0x341729(0x161)]=new Cesium[(_0x341729(0x181))](),_0x55a079[_0x341729(0x147)]=_0x55a079[_0x341729(0x161)][_0x341729(0x158)]({'position':_0x1d3465,'pixelSize':0xa,'color':Cesium['Color']['WHITE']}),_0x55a079['viewer']['scene']['primitives'][_0x341729(0x158)](_0x55a079[_0x341729(0x161)])):_0x55a079[_0x341729(0x147)]['position']=_0x1d3465,_0x55a079[_0x341729(0x151)](),_0x55a079[_0x341729(0x144)][_0x341729(0x163)]({'object':_0x55a079[_0x341729(0x147)]});}function startDrawLine(_0x49e0cd,_0x7be6f7){const _0x1b84db=_0x457233;let _0x5d5c71=_0x7be6f7;!_0x5d5c71[_0x1b84db(0x169)]?(_0x5d5c71[_0x1b84db(0x169)]=new Cesium[(_0x1b84db(0x18c))](),_0x5d5c71[_0x1b84db(0x18d)]=_0x5d5c71['polylines'][_0x1b84db(0x158)]({'width':0x2,'positions':[_0x49e0cd,_0x49e0cd],'material':Cesium[_0x1b84db(0x18b)][_0x1b84db(0x190)](Cesium[_0x1b84db(0x18b)][_0x1b84db(0x14e)],{'color':Cesium[_0x1b84db(0x157)]['fromCssColorString'](_0x1b84db(0x172))})}),_0x5d5c71[_0x1b84db(0x16b)]['scene']['primitives'][_0x1b84db(0x158)](_0x5d5c71['polylines'])):(_0x5d5c71[_0x1b84db(0x18d)][_0x1b84db(0x187)]=!![],_0x5d5c71['polyline']['positions']=[_0x49e0cd,_0x49e0cd]);}function _0x1f5e(_0x4bdd42,_0xe4f5a7){_0x4bdd42=_0x4bdd42-0x144;let _0x184cc5=_0x184c[_0x4bdd42];return _0x184cc5;}function startDrawPolygon(_0x8e4273,_0x3bf6dc){const _0x137355=_0x457233;let _0x35691b=_0x3bf6dc;!_0x35691b['polylines']?(_0x35691b[_0x137355(0x169)]=new Cesium[(_0x137355(0x18c))](),_0x35691b[_0x137355(0x18d)]=_0x35691b[_0x137355(0x169)][_0x137355(0x158)]({'id':_0x137355(0x166)+Math[_0x137355(0x15e)](),'width':0x2,'positions':[_0x8e4273,_0x8e4273],'material':Cesium[_0x137355(0x18b)][_0x137355(0x190)](Cesium[_0x137355(0x18b)][_0x137355(0x14e)],{'color':Cesium[_0x137355(0x157)]['fromCssColorString'](_0x137355(0x172))}),'loop':!![]}),_0x35691b[_0x137355(0x16b)][_0x137355(0x17b)]['primitives'][_0x137355(0x158)](_0x35691b['polylines'])):(_0x35691b[_0x137355(0x18d)][_0x137355(0x187)]=!![],_0x35691b[_0x137355(0x18d)][_0x137355(0x16c)]=[_0x8e4273,_0x8e4273],_0x35691b[_0x137355(0x179)]&&(_0x35691b[_0x137355(0x179)]['show']=![]));}function moveHandler(_0x124947,_0x3575de){const _0xe87cdc=_0x457233;let _0x4ddc48=_0x3575de;if(_0x4ddc48&&_0x4ddc48['active']&&_0x4ddc48['isDrawing']){let _0x32eabc=new Cesium[(_0xe87cdc(0x14b))](_0x124947['endPosition']['x'],_0x124947[_0xe87cdc(0x16e)]['y']);switch(_0x4ddc48[_0xe87cdc(0x15d)]){case _0x12b805['Line']:processLine(_0x32eabc,_0x4ddc48,![]);break;case _0x12b805[_0xe87cdc(0x192)]:processPolygon(_0x32eabc,_0x4ddc48,![]);break;}}_0x4ddc48[_0xe87cdc(0x191)][_0xe87cdc(0x163)](new Cesium[(_0xe87cdc(0x14b))](_0x124947[_0xe87cdc(0x16e)]['x'],_0x124947[_0xe87cdc(0x16e)]['y']));}function processLine(_0x1b68af,_0xcc2b40,_0x34d11d){const _0x10c7d0=_0x457233;let _0x19fcad=_0xcc2b40,_0x472b72=_0x19fcad['viewer'][_0x10c7d0(0x17b)],_0x2d357a=_0x472b72[_0x10c7d0(0x149)](_0x1b68af);if(!_0x2d357a)return;let _0x237a98=_0x19fcad[_0x10c7d0(0x18d)][_0x10c7d0(0x16c)],_0x2457de=_0x237a98[_0x10c7d0(0x180)];_0x34d11d?_0x237a98[_0x2457de]=_0x2d357a:_0x237a98[_0x2457de-0x1]=_0x2d357a,_0x19fcad[_0x10c7d0(0x18d)]['positions']=_0x237a98;}function processPolygon(_0x187203,_0xca15c3,_0x22f5d9){const _0x483dbc=_0x457233;let _0x2321bd=_0xca15c3,_0x185196=_0x2321bd[_0x483dbc(0x16b)][_0x483dbc(0x17b)],_0x3ce697=_0x185196[_0x483dbc(0x149)](_0x187203);if(!_0x3ce697)return;let _0x4725f9=_0x2321bd[_0x483dbc(0x18d)][_0x483dbc(0x16c)],_0x42185a=_0x4725f9[_0x483dbc(0x180)];_0x22f5d9?_0x4725f9[_0x42185a]=_0x3ce697:_0x4725f9[_0x42185a-0x1]=_0x3ce697,_0x2321bd[_0x483dbc(0x18d)][_0x483dbc(0x16c)]=_0x4725f9;}function rclkHandler(_0x2942f3,_0x19275e){const _0x405658=_0x457233;let _0x44296d=_0x19275e;if(_0x44296d&&_0x44296d[_0x405658(0x175)]&&_0x44296d['isDrawing']){_0x44296d[_0x405658(0x151)]();if(!_0x44296d[_0x405658(0x18d)])return;_0x44296d[_0x405658(0x18d)][_0x405658(0x16c)]=_0x44296d[_0x405658(0x18d)][_0x405658(0x16c)][_0x405658(0x17e)](0x0,_0x44296d[_0x405658(0x18d)]['positions'][_0x405658(0x180)]-0x1);if(_0x44296d[_0x405658(0x15d)]===_0x12b805[_0x405658(0x192)]){if(_0x44296d[_0x405658(0x18d)][_0x405658(0x16c)][_0x405658(0x180)]<0x3){_0x44296d[_0x405658(0x18d)][_0x405658(0x16c)][_0x405658(0x180)]=0x0;return;}let _0x41b864=[][_0x405658(0x176)](_0x44296d[_0x405658(0x18d)][_0x405658(0x16c)]);!_0x44296d[_0x405658(0x179)]&&(_0x44296d[_0x405658(0x179)]=_0x44296d[_0x405658(0x16b)]['entities'][_0x405658(0x158)]({'polygon':{'hierarchy':{'positions':_0x41b864},'material':Cesium[_0x405658(0x157)]['ORANGE'][_0x405658(0x174)](0.5),'perPositionHeight':_0x558519[_0x405658(0x184)]===_0x44296d[_0x405658(0x178)]}})),_0x44296d[_0x405658(0x179)][_0x405658(0x179)][_0x405658(0x15f)]=_0x41b864,_0x44296d[_0x405658(0x179)][_0x405658(0x16c)]=_0x41b864,_0x44296d[_0x405658(0x179)][_0x405658(0x187)]=!![],_0x44296d[_0x405658(0x144)][_0x405658(0x163)]({'object':_0x44296d[_0x405658(0x179)]});}else {if(_0x44296d['mode']===_0x12b805[_0x405658(0x15c)]){let _0x377cc3=[];for(let _0xa6692d=0x0,_0x24d252=_0x44296d['polyline'][_0x405658(0x16c)][_0x405658(0x180)];_0xa6692d<_0x24d252;_0xa6692d++){_0x377cc3['push'](Cesium[_0x405658(0x18f)][_0x405658(0x155)](_0x44296d['polyline'][_0x405658(0x16c)][_0xa6692d]));}(_0x44296d[_0x405658(0x178)]===_0x558519[_0x405658(0x18a)]||_0x44296d[_0x405658(0x178)]===_0x558519[_0x405658(0x148)])&&(!_0x44296d[_0x405658(0x189)]&&(_0x44296d[_0x405658(0x189)]=[]),_0x44296d[_0x405658(0x189)][_0x405658(0x182)](_0x44296d[_0x405658(0x16b)]['entities'][_0x405658(0x158)]({'polyline':{'positions':_0x377cc3,'width':0x5,'material':Cesium[_0x405658(0x157)][_0x405658(0x162)](_0x405658(0x172)),'clampToGround':!![]}})),_0x44296d[_0x405658(0x18d)][_0x405658(0x187)]=![]),_0x44296d[_0x405658(0x144)][_0x405658(0x163)]({'object':_0x44296d[_0x405658(0x18d)]});}}}}

    const _0x1520=['1GHTQic','104aMIebl','141809tgJces','801930zheaAQ','455114NZJnhE','457952jJuWAB','683blkDet','1EhehbA','671977cXUWHf','673955HSjLmb'];function _0x2272(_0x25c9a1,_0x409c9a){_0x25c9a1=_0x25c9a1-0x145;let _0x152071=_0x1520[_0x25c9a1];return _0x152071;}(function(_0xec4504,_0x278f3a){const _0x4306bb=_0x2272;while(!![]){try{const _0x219612=-parseInt(_0x4306bb(0x14b))+-parseInt(_0x4306bb(0x14d))*parseInt(_0x4306bb(0x148))+-parseInt(_0x4306bb(0x149))*-parseInt(_0x4306bb(0x14e))+parseInt(_0x4306bb(0x145))+-parseInt(_0x4306bb(0x14a))*parseInt(_0x4306bb(0x14c))+parseInt(_0x4306bb(0x146))+parseInt(_0x4306bb(0x147));if(_0x219612===_0x278f3a)break;else _0xec4504['push'](_0xec4504['shift']());}catch(_0x40f7ce){_0xec4504['push'](_0xec4504['shift']());}}}(_0x1520,0x6b621));const MeasureMode={'Distance':0x0,'Area':0x1,'DVH':0x2};var _0x52363d = Object['freeze'](MeasureMode);

    const _0x5a93=['S3mModel','_currentDis','fpEntity','slice','_lineColor','FILL_AND_OUTLINE','corridor','WHITE','magnitude','max','ColorType','_accumulationPositions','_activeEvt','pickPosition','BLUE','244093jwnoOQ','viewer\x20and\x20mode\x20is\x20required!','HorizontalOrigin','fromCache','greaterThanOrEquals','normalize','LEFT_CLICK','rgba(38,\x2038,\x2038,\x200.85)','fromCartesian','_hLabel','mode','ScreenSpaceEventType','positions','verticalPolyline','_labelPixelOffsetScaleByDistance','hierarchy','Distance','values','defaultValue','CallbackProperty','_fillColor','23opjoqa','chordLength','labels','MAX_VALUE','toCartesian','concat','lessThanOrEquals','clampToGroundPolylinePositions','#ffe500','normal','1jIdpGk','_labelPixelOffset','clone','startPoint','createGeometry','getHeight','OCCLUDED','fromPointNormal','133fgIuZY','active','measureEvt','height','isDrawing','horizontalPolyline','_accumulationDis','add','Ground','Plane','push','LabelCollection','clear','activeEvt','lerp','entities','removeAll','DVH','_labelBackgroundColor','_accumulationArea','epEntity','setInputAction','attributes','defineProperties','Area','Cartographic','_disLabel','canvas','IntersectionTests','Math','Material','latitude','removeInputAction','deactivate','PolylineCollection','show','scene','_areaLabel','Color','Check','rayPlane','_distance','negateNormal','clampToGroundPolygonPositions','clampToGroundPolyline','PolygonPipeline','lineDisplayType','25058GItuDp','fromType','Cartesian3','_showMeasureResult','min','1120660ROOXHq','fromRadians','182cOClcc','position','PolygonGeometryLibrary','_lineDisplayType','endPoint','angleBetween','globe','ScreenSpaceEventHandler','100\x2020px\x20SimSun','plane','BLACK','_lineWidth','PolygonGeometry','raiseEvent','dirPolyline','distance','fromCssColorString','subtract','longitude','computeArea','_measureEvt','_polygon','polylines','_capturePointColor','primitives','indices','_dblclickListener','_currentArea','1064538xpigzP','prototype','LEFT','NON_OCCLUDED','polygon','typeOf','500\x2016px\x20sans-serif','defined','1487zlhVYn','1741VrgPaS','LabelStyle','toFixed','length','handler','Cartesian2','remove','Space','_clampMode','spEntity','MeasureHandler.lineDisplayType','viewer','_vLabel','_enableDepthTest','Event','MOUSE_MOVE','tmpEntities','_capturePointSize','subdivideLine','polyline','Ray','338334yRKiIW','number'];const _0x210706=_0x1153;function _0x1153(_0x312411,_0x447f2c){_0x312411=_0x312411-0x17a;let _0x5a93e5=_0x5a93[_0x312411];return _0x5a93e5;}(function(_0xe56c39,_0x1c25f4){const _0x41d263=_0x1153;while(!![]){try{const _0x30331a=parseInt(_0x41d263(0x1c3))+-parseInt(_0x41d263(0x1a5))*parseInt(_0x41d263(0x211))+-parseInt(_0x41d263(0x1a0))*-parseInt(_0x41d263(0x207))+parseInt(_0x41d263(0x1cc))*-parseInt(_0x41d263(0x219))+parseInt(_0x41d263(0x1f2))+parseInt(_0x41d263(0x1e1))+-parseInt(_0x41d263(0x1a7))*parseInt(_0x41d263(0x1cb));if(_0x30331a===_0x1c25f4)break;else _0xe56c39['push'](_0xe56c39['shift']());}catch(_0x609aab){_0xe56c39['push'](_0xe56c39['shift']());}}}(_0x5a93,0x92984));function MeasureHandler(_0x16b196,_0x5a8622,_0xc84d51,_0x2ed187){const _0x361bdb=_0x1153;if(!_0x16b196||!Cesium[_0x361bdb(0x1ca)](_0x5a8622))throw new Cesium['DeveloperError'](_0x361bdb(0x1f3));this[_0x361bdb(0x1d0)]=new Cesium[(_0x361bdb(0x1ae))](_0x16b196[_0x361bdb(0x195)][_0x361bdb(0x18c)]),this[_0x361bdb(0x1d7)]=_0x16b196,this[_0x361bdb(0x1d4)]=Cesium[_0x361bdb(0x204)](_0xc84d51,_0x558519[_0x361bdb(0x1d3)]),this[_0x361bdb(0x1fc)]=_0x5a8622,this[_0x361bdb(0x21d)]=![],this['active']=![],this[_0x361bdb(0x1dc)]=[],this[_0x361bdb(0x196)]=undefined,this[_0x361bdb(0x18b)]=undefined,this['_vLabel']=undefined,this[_0x361bdb(0x1fb)]=undefined,this[_0x361bdb(0x1bb)]=new Cesium['Event'](),this[_0x361bdb(0x1ef)]=new Cesium[(_0x361bdb(0x1da))](),this[_0x361bdb(0x1d9)]=![],this[_0x361bdb(0x183)]=Cesium[_0x361bdb(0x197)][_0x361bdb(0x1b7)](_0x361bdb(0x1f9)),this[_0x361bdb(0x200)]=new Cesium['NearFarScalar'](0x96,0x3,0xe4e1c0,0.5),this[_0x361bdb(0x212)]=new Cesium[(_0x361bdb(0x1d1))](0xf,0x0),this['_lineColor']=Cesium['Color']['fromCssColorString']('#51ff00'),this[_0x361bdb(0x206)]=Cesium[_0x361bdb(0x197)]['ORANGE']['withAlpha'](0.5),this['_lineWidth']=0x2,this[_0x361bdb(0x1c1)]=undefined,this['_showMeasureResult']=Cesium[_0x361bdb(0x204)](_0x2ed187,!![]),this[_0x361bdb(0x1aa)]=LineDisplayType[_0x361bdb(0x1c6)];}Object[_0x210706(0x188)](MeasureHandler[_0x210706(0x1c4)],{'activeEvt':{'get':function(){const _0xba0b82=_0x210706;return this[_0xba0b82(0x1ef)];}},'measureEvt':{'get':function(){return this['_measureEvt'];}},'disLabel':{'get':function(){return this['_disLabel'];}},'areaLabel':{'get':function(){const _0x3eae5c=_0x210706;return this[_0x3eae5c(0x196)];}},'hLabel':{'get':function(){const _0x26dae7=_0x210706;return this[_0x26dae7(0x1fb)];}},'vLabel':{'get':function(){const _0x292bcd=_0x210706;return this[_0x292bcd(0x1d8)];}},'capturePointSize':{'get':function(){const _0xf3c98d=_0x210706;return this[_0xf3c98d(0x1d7)][_0xf3c98d(0x1dd)];},'set':function(_0x1cdf56){const _0x2eaab5=_0x210706;this[_0x2eaab5(0x1d7)][_0x2eaab5(0x1dd)]=_0x1cdf56;}},'capturePointColor':{'get':function(){const _0x592d35=_0x210706;return this[_0x592d35(0x1d7)][_0x592d35(0x1be)];},'set':function(_0x303128){const _0x2deb1f=_0x210706;this['viewer'][_0x2deb1f(0x1be)]=_0x303128;}},'lineColor':{'get':function(){const _0x3e3100=_0x210706;return this[_0x3e3100(0x1e7)];},'set':function(_0xfd96f3){const _0x390fe5=_0x210706;this[_0x390fe5(0x1e7)]=_0xfd96f3;}},'fillColor':{'get':function(){const _0x1a442a=_0x210706;return this[_0x1a442a(0x206)];},'set':function(_0x56a95e){const _0x5889f5=_0x210706;this[_0x5889f5(0x206)]=_0x56a95e;}},'lineWidth':{'get':function(){const _0x399337=_0x210706;return this[_0x399337(0x1b2)];},'set':function(_0x192f86){const _0x265b65=_0x210706;this[_0x265b65(0x1b2)]=_0x192f86;}},'lineDisplayType':{'get':function(){const _0x3ddacb=_0x210706;return this[_0x3ddacb(0x1aa)];},'set':function(_0x2bf57b){const _0x335f41=_0x210706;Cesium['Check'][_0x335f41(0x1c8)][_0x335f41(0x1e2)][_0x335f41(0x1f6)](_0x335f41(0x1d6),_0x2bf57b,0x0),Cesium[_0x335f41(0x198)][_0x335f41(0x1c8)][_0x335f41(0x1e2)][_0x335f41(0x20d)](_0x335f41(0x1d6),_0x2bf57b,0x2),this[_0x335f41(0x1aa)]=_0x2bf57b,this['polylines']&&(this['polylines'][_0x335f41(0x19f)]=_0x2bf57b);}}}),MeasureHandler[_0x210706(0x1c4)]['activate']=function(){const _0x1906f9=_0x210706;this[_0x1906f9(0x17d)]();if(this[_0x1906f9(0x21a)])return;this[_0x1906f9(0x21a)]=!![];let _0x2bfaea=this;this[_0x1906f9(0x1d0)][_0x1906f9(0x186)](function(_0x92d6f1){clickHandler$1(_0x92d6f1,_0x2bfaea);},Cesium[_0x1906f9(0x1fd)][_0x1906f9(0x1f8)]),this[_0x1906f9(0x1d0)][_0x1906f9(0x186)](function(_0x225bbf){moveHandler$1(_0x225bbf,_0x2bfaea);},Cesium[_0x1906f9(0x1fd)][_0x1906f9(0x1db)]),this['handler'][_0x1906f9(0x186)](function(_0x4f4611){rclkHandler$1(_0x4f4611,_0x2bfaea);},Cesium[_0x1906f9(0x1fd)]['RIGHT_CLICK']),this[_0x1906f9(0x17e)]['raiseEvent'](!![]);},MeasureHandler[_0x210706(0x1c4)]['deactivate']=function(){const _0x4d2ae9=_0x210706;this[_0x4d2ae9(0x21a)]&&this[_0x4d2ae9(0x17e)][_0x4d2ae9(0x1b4)](![]),this[_0x4d2ae9(0x21a)]=![],this['isDrawing']=![],this[_0x4d2ae9(0x1d0)][_0x4d2ae9(0x191)](Cesium[_0x4d2ae9(0x1fd)][_0x4d2ae9(0x1f8)]),this[_0x4d2ae9(0x1d0)][_0x4d2ae9(0x191)](Cesium[_0x4d2ae9(0x1fd)][_0x4d2ae9(0x1db)]),this['handler'][_0x4d2ae9(0x191)](Cesium[_0x4d2ae9(0x1fd)]['RIGHT_CLICK']);},MeasureHandler['prototype'][_0x210706(0x17d)]=function(){const _0x19353c=_0x210706;this[_0x19353c(0x192)]();for(let _0x2854a4=0x0,_0x5ef235=this[_0x19353c(0x1dc)]['length'];_0x2854a4<_0x5ef235;_0x2854a4++){this[_0x19353c(0x1d7)][_0x19353c(0x180)][_0x19353c(0x1d2)](this[_0x19353c(0x1dc)][_0x2854a4]);}this['clampToGroundPolyline']&&(this['viewer'][_0x19353c(0x180)][_0x19353c(0x1d2)](this[_0x19353c(0x19d)]),this[_0x19353c(0x19d)]=null);this[_0x19353c(0x1dc)]['length']=0x0;this['polylines']&&(this[_0x19353c(0x1bd)][_0x19353c(0x181)](),this[_0x19353c(0x1d7)][_0x19353c(0x195)][_0x19353c(0x1bf)][_0x19353c(0x1d2)](this[_0x19353c(0x1bd)]),this[_0x19353c(0x1bd)]=undefined);this[_0x19353c(0x1d5)]&&(this[_0x19353c(0x1d7)][_0x19353c(0x180)][_0x19353c(0x1d2)](this[_0x19353c(0x1d5)]),this[_0x19353c(0x1d5)]=undefined);this[_0x19353c(0x185)]&&(this[_0x19353c(0x1d7)][_0x19353c(0x180)][_0x19353c(0x1d2)](this['epEntity']),this[_0x19353c(0x185)]=undefined);this[_0x19353c(0x1e5)]&&(this[_0x19353c(0x1d7)][_0x19353c(0x180)][_0x19353c(0x1d2)](this[_0x19353c(0x1e5)]),this[_0x19353c(0x1e5)]=undefined);if(this[_0x19353c(0x209)])switch(this['mode']){case _0x52363d[_0x19353c(0x202)]:this[_0x19353c(0x209)][_0x19353c(0x1d2)](this[_0x19353c(0x18b)]);break;case _0x52363d[_0x19353c(0x189)]:this[_0x19353c(0x209)][_0x19353c(0x1d2)](this[_0x19353c(0x196)]);break;case _0x52363d[_0x19353c(0x182)]:this['labels']['remove'](this['_disLabel']),this[_0x19353c(0x209)]['remove'](this['_hLabel']),this[_0x19353c(0x209)][_0x19353c(0x1d2)](this[_0x19353c(0x1d8)]);break;}this['polygon']&&(this['viewer'][_0x19353c(0x180)][_0x19353c(0x1d2)](this[_0x19353c(0x1c7)]),this[_0x19353c(0x1c7)]=undefined),this[_0x19353c(0x1e9)]&&(this[_0x19353c(0x1d7)]['entities'][_0x19353c(0x1d2)](this[_0x19353c(0x1e9)]),this['corridor']=undefined);};function clickHandler$1(_0x2862f8,_0x161eed){const _0x2ea1e4=_0x210706;let _0x545a62=_0x161eed;if(_0x545a62&&_0x545a62[_0x2ea1e4(0x21a)]){let _0x48b25c=_0x545a62[_0x2ea1e4(0x1d7)][_0x2ea1e4(0x195)],_0x57fb8e=_0x48b25c[_0x2ea1e4(0x1f0)](_0x2862f8[_0x2ea1e4(0x1a8)]);if(_0x57fb8e){if(!_0x545a62[_0x2ea1e4(0x21d)]){_0x545a62[_0x2ea1e4(0x21d)]=!![];switch(_0x545a62[_0x2ea1e4(0x1fc)]){case _0x52363d[_0x2ea1e4(0x202)]:startMeasureDis(_0x57fb8e,_0x545a62);break;case _0x52363d[_0x2ea1e4(0x189)]:startMeasureArea(_0x57fb8e,_0x545a62);break;case _0x52363d[_0x2ea1e4(0x182)]:startMeasureDVH(_0x57fb8e,_0x545a62);break;}}else _0x545a62['mode']==_0x52363d[_0x2ea1e4(0x182)]?_0x545a62['deactivate']():processClk(_0x57fb8e,_0x545a62);}}}function moveHandler$1(_0x1f1561,_0x4d90c4){const _0xe97bd5=_0x210706;let _0x213fba=_0x4d90c4,_0x5d2bba=_0x213fba['viewer'][_0xe97bd5(0x195)],_0x49214e=_0x5d2bba[_0xe97bd5(0x1f0)](_0x1f1561['endPosition']);if(_0x213fba&&_0x213fba[_0xe97bd5(0x21a)]&&_0x213fba[_0xe97bd5(0x21d)]&&_0x49214e)switch(_0x213fba['mode']){case _0x52363d[_0xe97bd5(0x202)]:processDistance(_0x49214e,_0x213fba);break;case _0x52363d['Area']:processArea(_0x49214e,_0x213fba);break;case _0x52363d[_0xe97bd5(0x182)]:processDVH(_0x49214e,_0x213fba);break;}}function rclkHandler$1(_0x13eaa2,_0x5d40ec){const _0x77359f=_0x210706;let _0x43a70f=_0x5d40ec;if(_0x43a70f&&_0x43a70f[_0x77359f(0x21a)]&&_0x43a70f[_0x77359f(0x21d)]){_0x43a70f['deactivate']();let _0x555e86;if(_0x43a70f[_0x77359f(0x1df)]){_0x43a70f[_0x77359f(0x1fc)]===_0x52363d[_0x77359f(0x202)]?(_0x43a70f[_0x77359f(0x1bd)][_0x77359f(0x1d2)](_0x43a70f[_0x77359f(0x1df)]),_0x555e86=_0x43a70f[_0x77359f(0x1ee)],_0x43a70f[_0x77359f(0x1bd)]['length']===0x0&&_0x43a70f[_0x77359f(0x1d7)][_0x77359f(0x180)][_0x77359f(0x1d2)](_0x43a70f[_0x77359f(0x1d5)])):(_0x43a70f[_0x77359f(0x1df)][_0x77359f(0x1fe)]=_0x43a70f[_0x77359f(0x1df)][_0x77359f(0x1fe)][_0x77359f(0x1e6)](0x0,_0x43a70f[_0x77359f(0x1df)]['positions'][_0x77359f(0x1cf)]-0x1),_0x43a70f[_0x77359f(0x1df)][_0x77359f(0x1fe)][_0x77359f(0x1cf)]===0x1&&_0x43a70f[_0x77359f(0x1d7)]['entities'][_0x77359f(0x1d2)](_0x43a70f[_0x77359f(0x1d5)]),_0x555e86=_0x43a70f[_0x77359f(0x1df)]['positions']);_0x43a70f['viewer'][_0x77359f(0x180)][_0x77359f(0x1d2)](_0x43a70f[_0x77359f(0x185)]);if(!_0x43a70f['polygon']){(_0x43a70f[_0x77359f(0x1d4)]===_0x558519[_0x77359f(0x221)]||_0x43a70f[_0x77359f(0x1d4)]===_0x558519[_0x77359f(0x1e3)])&&(_0x43a70f[_0x77359f(0x20e)]=_0x555e86,_0x43a70f['polyline']['show']=![]);_0x43a70f[_0x77359f(0x18b)][_0x77359f(0x1a8)]=_0x555e86[_0x555e86['length']-0x1];let _0x4a8c42=0x0;if(_0x5d40ec[_0x77359f(0x1d4)]===_0x558519[_0x77359f(0x221)])_0x4a8c42=computeClampDistance(_0x43a70f[_0x77359f(0x1d7)][_0x77359f(0x195)],_0x43a70f[_0x77359f(0x1ee)]);else for(let _0x16f3e8=0x0,_0x112b73=_0x555e86[_0x77359f(0x1cf)]-0x1;_0x16f3e8<_0x112b73;_0x16f3e8++){_0x4a8c42+=Cesium[_0x77359f(0x1a2)][_0x77359f(0x1b6)](_0x555e86[_0x16f3e8],_0x555e86[_0x16f3e8+0x1]);}_0x43a70f[_0x77359f(0x18b)][_0x77359f(0x194)]=_0x4a8c42!==0x0,_0x43a70f[_0x77359f(0x21b)][_0x77359f(0x1b4)]({'distance':_0x4a8c42[_0x77359f(0x1ce)](0x8),'positions':_0x555e86});}}if(_0x43a70f[_0x77359f(0x1c7)]){if(_0x555e86[_0x77359f(0x1cf)]<0x3){_0x43a70f[_0x77359f(0x196)]['show']=![],_0x43a70f['viewer']['entities'][_0x77359f(0x1d2)](_0x43a70f['spEntity']);for(let _0x574898=0x0,_0x3d1c4a=_0x43a70f[_0x77359f(0x1dc)][_0x77359f(0x1cf)];_0x574898<_0x3d1c4a;_0x574898++){_0x43a70f['viewer']['entities'][_0x77359f(0x1d2)](_0x43a70f[_0x77359f(0x1dc)][_0x574898]);}_0x43a70f[_0x77359f(0x1dc)]['length']=0x0,_0x43a70f[_0x77359f(0x1d7)]['entities'][_0x77359f(0x1d2)](_0x43a70f[_0x77359f(0x185)]),_0x43a70f[_0x77359f(0x1df)][_0x77359f(0x1fe)][_0x77359f(0x1cf)]=0x0;}_0x43a70f[_0x77359f(0x196)]['show']=!![];(_0x43a70f[_0x77359f(0x1d4)]==_0x558519[_0x77359f(0x221)]||_0x43a70f[_0x77359f(0x1d4)]==_0x558519[_0x77359f(0x1e3)])&&(_0x43a70f[_0x77359f(0x1df)][_0x77359f(0x194)]=![]);_0x43a70f[_0x77359f(0x19c)]=_0x43a70f['polyline'][_0x77359f(0x1fe)],_0x43a70f[_0x77359f(0x1c7)]['show']=!![];if(_0x555e86[_0x77359f(0x1cf)]>0x2){if(_0x43a70f['_clampMode']!==_0x558519[_0x77359f(0x221)])_0x43a70f[_0x77359f(0x196)][_0x77359f(0x1a8)]=_0x43a70f[_0x77359f(0x1df)][_0x77359f(0x1fe)][_0x43a70f[_0x77359f(0x1df)][_0x77359f(0x1fe)][_0x77359f(0x1cf)]-0x1];else {let _0x3b1b72=_0x43a70f[_0x77359f(0x1dc)][_0x43a70f[_0x77359f(0x1dc)][_0x77359f(0x1cf)]-0x1],_0x5b7462=_0x3b1b72['_position']['_value'];_0x43a70f[_0x77359f(0x196)]['position']=_0x5b7462;}if(_0x43a70f[_0x77359f(0x1d4)]===_0x558519[_0x77359f(0x221)]){let _0x351d09=computeClampArea(_0x43a70f[_0x77359f(0x1d7)][_0x77359f(0x195)],_0x43a70f[_0x77359f(0x1df)]['positions']);_0x43a70f[_0x77359f(0x21b)]['raiseEvent']({'area':_0x351d09['toFixed'](0x8),'positions':_0x555e86});return;}let _0x21ae6c=Cesium[_0x77359f(0x19e)]['triangulate'](_0x555e86),_0x1707a4=_0x21ae6c[_0x77359f(0x1cf)]/0x3,_0x2f3915,_0x498d9e,_0xa5088,_0xb9fe0c=0x0;for(let _0x94585c=0x0;_0x94585c<_0x1707a4;_0x94585c++){_0x2f3915=_0x555e86[_0x21ae6c[_0x94585c*0x3]],_0x498d9e=_0x555e86[_0x21ae6c[_0x94585c*0x3+0x1]],_0xa5088=_0x555e86[_0x21ae6c[_0x94585c*0x3+0x2]],v12Scratch=Cesium[_0x77359f(0x1a2)][_0x77359f(0x1b8)](_0x498d9e,_0x2f3915,v12Scratch),v13Scratch=Cesium[_0x77359f(0x1a2)]['subtract'](_0xa5088,_0x2f3915,v13Scratch),crossScratch=Cesium[_0x77359f(0x1a2)]['cross'](v12Scratch,v13Scratch,crossScratch),_0xb9fe0c+=0.5*Cesium[_0x77359f(0x1a2)]['magnitude'](crossScratch);}_0x43a70f['measureEvt'][_0x77359f(0x1b4)]({'area':_0xb9fe0c['toFixed'](0x8),'positions':_0x555e86});}}}}function processClk(_0x283435,_0x178ab7){const _0x3bce7b=_0x210706;let _0x6aa83a=_0x178ab7;_0x6aa83a[_0x3bce7b(0x1fc)]===_0x52363d[_0x3bce7b(0x202)]?(_0x6aa83a[_0x3bce7b(0x1df)]=_0x6aa83a['polylines'][_0x3bce7b(0x220)]({'width':_0x6aa83a[_0x3bce7b(0x1b2)],'show':_0x6aa83a[_0x3bce7b(0x1a3)],'positions':[_0x283435,_0x283435],'material':Cesium[_0x3bce7b(0x18f)]['fromType'](Cesium[_0x3bce7b(0x18f)][_0x3bce7b(0x1ed)],{'color':_0x6aa83a[_0x3bce7b(0x1e7)]}),'clampToGround':!![]}),_0x178ab7[_0x3bce7b(0x1d4)]===_0x558519[_0x3bce7b(0x221)]&&(_0x6aa83a['polyline']['show']=![],_0x6aa83a[_0x3bce7b(0x21f)]=_0x6aa83a['_currentDis']),_0x6aa83a[_0x3bce7b(0x1ee)][_0x3bce7b(0x17b)](_0x283435)):(_0x6aa83a[_0x3bce7b(0x1fc)]===_0x52363d[_0x3bce7b(0x189)]&&(_0x6aa83a[_0x3bce7b(0x184)]=_0x6aa83a[_0x3bce7b(0x1c2)]),_0x6aa83a[_0x3bce7b(0x1df)][_0x3bce7b(0x1fe)][_0x3bce7b(0x17b)](_0x283435)),_0x6aa83a[_0x3bce7b(0x1c7)]&&(_0x178ab7[_0x3bce7b(0x1d4)]!==_0x558519[_0x3bce7b(0x221)]&&(_0x6aa83a['polygon'][_0x3bce7b(0x1bc)][_0x3bce7b(0x201)]=_0x6aa83a[_0x3bce7b(0x1df)]['positions'])),_0x6aa83a[_0x3bce7b(0x1dc)][_0x3bce7b(0x17b)](_0x6aa83a[_0x3bce7b(0x1d7)]['entities'][_0x3bce7b(0x220)]({'show':_0x6aa83a[_0x3bce7b(0x1a3)],'position':_0x283435,'point':{'pixelSize':0x8,'color':Cesium[_0x3bce7b(0x197)]['fromCssColorString'](_0x3bce7b(0x20f))}}));}let v12Scratch=new Cesium[(_0x210706(0x1a2))](),v13Scratch=new Cesium[(_0x210706(0x1a2))](),crossScratch=new Cesium[(_0x210706(0x1a2))]();function processArea(_0x5e9e94,_0x46f3cb){const _0x1d47d4=_0x210706;let _0x39ed71=_0x46f3cb,_0x80d6a3=_0x39ed71['viewer'][_0x1d47d4(0x195)];if(!_0x5e9e94)return;_0x39ed71[_0x1d47d4(0x1ab)]=_0x5e9e94;let _0x12095f=_0x39ed71[_0x1d47d4(0x1df)]['positions'],_0x4ddf55=_0x12095f[_0x1d47d4(0x1cf)];_0x12095f[_0x4ddf55-0x1]=_0x5e9e94;_0x4ddf55>0x2&&(_0x39ed71[_0x1d47d4(0x196)]&&(_0x39ed71[_0x1d47d4(0x196)][_0x1d47d4(0x194)]=!![]),_0x39ed71[_0x1d47d4(0x19c)]=_0x12095f);_0x39ed71['polyline'][_0x1d47d4(0x1fe)]=_0x12095f;if(_0x12095f[_0x1d47d4(0x1cf)]>0x2){_0x39ed71['epEntity'][_0x1d47d4(0x1a8)]=_0x5e9e94,_0x39ed71[_0x1d47d4(0x196)][_0x1d47d4(0x1a8)]=_0x5e9e94,_0x39ed71[_0x1d47d4(0x196)][_0x1d47d4(0x194)]=_0x46f3cb['_clampMode']!==_0x558519[_0x1d47d4(0x221)];let _0x46f1d1;if(_0x46f3cb[_0x1d47d4(0x1d4)]===_0x558519[_0x1d47d4(0x221)])return;_0x46f1d1=MeasureHandler[_0x1d47d4(0x1ba)](_0x12095f),_0x39ed71[_0x1d47d4(0x21b)][_0x1d47d4(0x1b4)]({'area':_0x46f1d1[_0x1d47d4(0x1ce)](0x8),'positions':_0x12095f});}}function startMeasureArea(_0x388b90,_0x2c26e7){const _0x348d1a=_0x210706;let _0xfdfc7e=_0x2c26e7;_0xfdfc7e['clampToGroundPolygonPositions']=[],_0xfdfc7e['tmpEntities'][_0x348d1a(0x1cf)]=0x0;let _0x506e44=_0xfdfc7e[_0x348d1a(0x1d9)];_0xfdfc7e[_0x348d1a(0x1bd)]=new Cesium['PolylineCollection'](),_0xfdfc7e['polyline']=_0xfdfc7e[_0x348d1a(0x1bd)][_0x348d1a(0x220)]({'width':_0xfdfc7e[_0x348d1a(0x1b2)],'positions':[_0x388b90,_0x388b90],'material':Cesium[_0x348d1a(0x18f)][_0x348d1a(0x1a1)](Cesium[_0x348d1a(0x18f)][_0x348d1a(0x1ed)],{'color':_0xfdfc7e[_0x348d1a(0x1e7)]}),'loop':!![]}),_0xfdfc7e[_0x348d1a(0x1d7)][_0x348d1a(0x195)][_0x348d1a(0x1bf)]['add'](_0xfdfc7e[_0x348d1a(0x1bd)]),_0xfdfc7e[_0x348d1a(0x1d5)]=_0xfdfc7e[_0x348d1a(0x1d7)][_0x348d1a(0x180)][_0x348d1a(0x220)]({'position':_0x388b90,'point':{'pixelSize':0x8,'color':Cesium[_0x348d1a(0x197)][_0x348d1a(0x1b7)](_0x348d1a(0x20f))}}),_0xfdfc7e[_0x348d1a(0x185)]=_0xfdfc7e[_0x348d1a(0x1d7)][_0x348d1a(0x180)]['add']({'position':_0x388b90,'point':{'pixelSize':0x8,'color':Cesium[_0x348d1a(0x197)][_0x348d1a(0x1b7)](_0x348d1a(0x20f))}});let _0xcbcdae=_0xfdfc7e[_0x348d1a(0x1d7)][_0x348d1a(0x195)]['primitives'][_0x348d1a(0x220)](new Cesium[(_0x348d1a(0x17c))]({'depthTestEnable':![]}));_0xfdfc7e[_0x348d1a(0x196)]=_0xcbcdae['add']({'position':_0x388b90,'font':_0x348d1a(0x1af),'fillColor':Cesium[_0x348d1a(0x197)][_0x348d1a(0x1ea)],'style':Cesium[_0x348d1a(0x1cd)]['FILL_AND_OUTLINE'],'showBackground':!![],'outlineWidth':0x1,'outlineColor':Cesium['Color'][_0x348d1a(0x1f1)],'pixelOffset':_0xfdfc7e[_0x348d1a(0x212)],'text':'','show':_0xfdfc7e[_0x348d1a(0x1a3)],'horizontalOrigin':Cesium[_0x348d1a(0x1f4)][_0x348d1a(0x1c5)]});let _0x443224=_0xfdfc7e['_clampMode'],_0x2023be=_0x443224===_0x558519[_0x348d1a(0x1d3)];_0xfdfc7e[_0x348d1a(0x1c7)]=_0xfdfc7e[_0x348d1a(0x1d7)]['entities'][_0x348d1a(0x220)]({'polygon':{'hierarchy':new Cesium['CallbackProperty'](function(){const _0x4744d7=_0x348d1a;return {'positions':_0xfdfc7e[_0x4744d7(0x19c)],'holes':[]};},![]),'material':_0xfdfc7e[_0x348d1a(0x206)],'perPositionHeight':_0x2023be},'show':![]}),_0xfdfc7e['labels']=_0xcbcdae,_0x2c26e7[_0x348d1a(0x1d4)]===_0x558519['Ground']&&(_0xfdfc7e[_0x348d1a(0x1df)][_0x348d1a(0x194)]=![],_0xfdfc7e['polygon'][_0x348d1a(0x194)]=!![]),_0xfdfc7e[_0x348d1a(0x196)][_0x348d1a(0x194)]=![];}function startMeasureDis(_0x34e207,_0xc89a4a){const _0x3da6cc=_0x210706;let _0x3573ac=_0xc89a4a;_0xc89a4a[_0x3da6cc(0x1d4)]===_0x558519['Ground']&&(_0x3573ac[_0x3da6cc(0x20e)]=[],_0x3573ac['clampToGroundPolyline']=_0x3573ac[_0x3da6cc(0x1d7)][_0x3da6cc(0x180)][_0x3da6cc(0x220)]({'polyline':{'positions':new Cesium[(_0x3da6cc(0x205))](function(){const _0x2bdfa7=_0x3da6cc;return _0x3573ac[_0x2bdfa7(0x20e)];},![]),'width':_0x3573ac[_0x3da6cc(0x1b2)],'material':_0x3573ac['_lineColor'],'clampToGround':!![]}}));_0x3573ac['tmpEntities']['length']=0x0;if(!_0x3573ac[_0x3da6cc(0x1bd)]){let _0x32d9b1=_0x3573ac[_0x3da6cc(0x1d9)];_0x3573ac[_0x3da6cc(0x1bd)]=new Cesium[(_0x3da6cc(0x193))]({'opaqueRS':RenderState['fromCache']({'depthMask':_0x32d9b1,'depthTest':{'enabled':_0x32d9b1}}),'translucentRS':RenderState['fromCache']({'depthMask':_0x32d9b1,'depthTest':{'enabled':_0x32d9b1}}),'lineDisplayType':_0x3573ac['_clampMode']===_0x558519[_0x3da6cc(0x221)]?LineDisplayType[_0x3da6cc(0x217)]:_0x3573ac[_0x3da6cc(0x1aa)]}),_0x3573ac[_0x3da6cc(0x1df)]=_0x3573ac[_0x3da6cc(0x1bd)][_0x3da6cc(0x220)]({'width':_0x3573ac[_0x3da6cc(0x1b2)],'show':_0x3573ac['_showMeasureResult'],'positions':[_0x34e207,_0x34e207],'material':Cesium[_0x3da6cc(0x18f)][_0x3da6cc(0x1a1)](Cesium[_0x3da6cc(0x18f)][_0x3da6cc(0x1ed)],{'color':_0x3573ac['_lineColor']}),'clampToGround':!![]}),_0x3573ac['viewer']['scene'][_0x3da6cc(0x1bf)][_0x3da6cc(0x220)](_0x3573ac[_0x3da6cc(0x1bd)]),_0x3573ac['_accumulationPositions']=[_0x34e207],_0x3573ac[_0x3da6cc(0x21f)]=0x0,_0x3573ac[_0x3da6cc(0x1e4)]=0x0,_0x3573ac[_0x3da6cc(0x1d5)]=_0x3573ac[_0x3da6cc(0x1d7)]['entities'][_0x3da6cc(0x220)]({'position':_0x34e207,'show':_0x3573ac[_0x3da6cc(0x1a3)],'point':{'pixelSize':0x8,'color':Cesium[_0x3da6cc(0x197)][_0x3da6cc(0x1b7)](_0x3da6cc(0x20f))}}),_0x3573ac[_0x3da6cc(0x185)]=_0x3573ac['viewer'][_0x3da6cc(0x180)][_0x3da6cc(0x220)]({'position':_0x34e207,'show':_0x3573ac[_0x3da6cc(0x1a3)],'point':{'pixelSize':0x8,'color':Cesium['Color'][_0x3da6cc(0x1b7)](_0x3da6cc(0x20f))}});let _0x4a6375=_0x3573ac['viewer'][_0x3da6cc(0x195)][_0x3da6cc(0x1bf)][_0x3da6cc(0x220)](new Cesium[(_0x3da6cc(0x17c))]({'depthTestEnable':![]}));_0x3573ac['_disLabel']=_0x4a6375['add']({'position':_0x34e207,'font':_0x3da6cc(0x1af),'fillColor':Cesium[_0x3da6cc(0x197)]['WHITE'],'style':Cesium['LabelStyle']['FILL_AND_OUTLINE'],'showBackground':!![],'backgroundColor':_0x3573ac['_labelBackgroundColor'],'outlineWidth':0x1,'outlineColor':Cesium['Color'][_0x3da6cc(0x1f1)],'pixelOffset':_0x3573ac[_0x3da6cc(0x212)],'text':'','show':_0x3573ac[_0x3da6cc(0x1a3)],'horizontalOrigin':Cesium[_0x3da6cc(0x1f4)]['LEFT']}),_0x3573ac['labels']=_0x4a6375;let _0x5558e6=_0x3573ac[_0x3da6cc(0x1d4)]==_0x558519[_0x3da6cc(0x1e3)]?!![]:![],_0x39889d=Cesium[_0x3da6cc(0x1a2)][_0x3da6cc(0x213)](_0x34e207);_0x3573ac['corridor']=_0x3573ac[_0x3da6cc(0x1d7)][_0x3da6cc(0x180)][_0x3da6cc(0x220)]({'corridor':{'positions':[_0x39889d,_0x39889d],'width':0x14,'material':Cesium['Color'][_0x3da6cc(0x1b7)]('#51ff00')},'clampToS3M':_0x5558e6,'show':![]});}_0xc89a4a[_0x3da6cc(0x1d4)]===_0x558519[_0x3da6cc(0x221)]&&(_0x3573ac[_0x3da6cc(0x1df)]['show']=![]);}function processDistance(_0x24e97e,_0x3a9b87){const _0x57ea5f=_0x210706;let _0x313f73=_0x3a9b87,_0x45967f=_0x313f73[_0x57ea5f(0x1d7)][_0x57ea5f(0x195)];_0x313f73[_0x57ea5f(0x1ab)]=_0x24e97e;let _0x484804=_0x313f73[_0x57ea5f(0x1df)]['positions'],_0x526404=_0x484804[_0x57ea5f(0x1cf)];_0x3a9b87[_0x57ea5f(0x1d4)]===_0x558519[_0x57ea5f(0x221)]&&(_0x313f73['mode']===_0x52363d[_0x57ea5f(0x202)]?_0x313f73['clampToGroundPolylinePositions']=_0x313f73[_0x57ea5f(0x1ee)][_0x57ea5f(0x20c)]([_0x24e97e]):_0x313f73[_0x57ea5f(0x20e)]=_0x484804);_0x484804[_0x526404-0x1]=_0x24e97e,_0x313f73['polyline'][_0x57ea5f(0x1fe)]=_0x484804,_0x313f73['epEntity']['position']=_0x24e97e;let _0x1e9912=0x0,_0x331704=_0x313f73[_0x57ea5f(0x1ee)][_0x57ea5f(0x20c)]([_0x24e97e]);_0x313f73[_0x57ea5f(0x1df)][_0x57ea5f(0x19a)]=_0x1e9912,_0x313f73[_0x57ea5f(0x18b)]['position']=_0x24e97e,_0x313f73[_0x57ea5f(0x18b)]['show']=_0x3a9b87[_0x57ea5f(0x1d4)]!==_0x558519['Ground'];if(_0x3a9b87[_0x57ea5f(0x1d4)]===_0x558519['Ground'])return;else for(let _0x2a30e1=0x0,_0x58239d=_0x331704['length']-0x1;_0x2a30e1<_0x58239d;_0x2a30e1++){_0x1e9912+=Cesium[_0x57ea5f(0x1a2)][_0x57ea5f(0x1b6)](_0x331704[_0x2a30e1],_0x331704[_0x2a30e1+0x1]);}_0x313f73[_0x57ea5f(0x21b)][_0x57ea5f(0x1b4)]({'distance':_0x1e9912[_0x57ea5f(0x1ce)](0x8),'positions':_0x331704});}function startMeasureDVH(_0x28f6d7,_0x35dbc9){const _0x1bc669=_0x210706;let _0x38a9f2=_0x35dbc9;if(!_0x38a9f2['polylines']){let _0x495964=_0x38a9f2[_0x1bc669(0x1d9)];_0x38a9f2[_0x1bc669(0x1bd)]=new Cesium[(_0x1bc669(0x193))]({'opaqueRS':RenderState[_0x1bc669(0x1f5)]({'depthMask':_0x495964,'depthTest':{'enabled':_0x495964}}),'lineDisplayType':_0x38a9f2[_0x1bc669(0x1aa)]}),_0x38a9f2['horizontalPolyline']=_0x38a9f2[_0x1bc669(0x1bd)][_0x1bc669(0x220)]({'width':0x2,'show':_0x38a9f2[_0x1bc669(0x1a3)],'positions':[_0x28f6d7,_0x28f6d7],'material':Cesium[_0x1bc669(0x18f)]['fromType'](Cesium[_0x1bc669(0x18f)][_0x1bc669(0x1ed)],{'color':_0x38a9f2[_0x1bc669(0x1e7)]})}),_0x38a9f2[_0x1bc669(0x1ff)]=_0x38a9f2['polylines'][_0x1bc669(0x220)]({'width':0x2,'show':_0x38a9f2[_0x1bc669(0x1a3)],'positions':[_0x28f6d7,_0x28f6d7],'material':Cesium['Material'][_0x1bc669(0x1a1)](Cesium[_0x1bc669(0x18f)][_0x1bc669(0x1ed)],{'color':_0x38a9f2['_lineColor']})}),_0x38a9f2[_0x1bc669(0x1b5)]=_0x38a9f2[_0x1bc669(0x1bd)]['add']({'width':0x2,'show':_0x38a9f2[_0x1bc669(0x1a3)],'positions':[_0x28f6d7,_0x28f6d7],'material':Cesium[_0x1bc669(0x18f)][_0x1bc669(0x1a1)](Cesium['Material'][_0x1bc669(0x1ed)],{'color':_0x38a9f2[_0x1bc669(0x1e7)]})}),_0x38a9f2['viewer'][_0x1bc669(0x195)][_0x1bc669(0x1bf)][_0x1bc669(0x220)](_0x38a9f2[_0x1bc669(0x1bd)]),_0x38a9f2['spEntity']=_0x38a9f2[_0x1bc669(0x1d7)][_0x1bc669(0x180)]['add']({'position':_0x28f6d7,'show':_0x38a9f2['_showMeasureResult'],'point':{'pixelSize':0x8,'color':Cesium[_0x1bc669(0x197)]['fromCssColorString']('#ffe500')}}),_0x38a9f2[_0x1bc669(0x185)]=_0x38a9f2[_0x1bc669(0x1d7)][_0x1bc669(0x180)][_0x1bc669(0x220)]({'position':_0x28f6d7,'show':_0x38a9f2[_0x1bc669(0x1a3)],'point':{'pixelSize':0x8,'color':Cesium['Color'][_0x1bc669(0x1b7)](_0x1bc669(0x20f))}}),_0x38a9f2['fpEntity']=_0x38a9f2[_0x1bc669(0x1d7)][_0x1bc669(0x180)][_0x1bc669(0x220)]({'position':_0x28f6d7,'show':_0x38a9f2[_0x1bc669(0x1a3)],'point':{'pixelSize':0x8,'color':Cesium['Color'][_0x1bc669(0x1b7)](_0x1bc669(0x20f))}});let _0x22cbe6=_0x38a9f2[_0x1bc669(0x1d7)][_0x1bc669(0x195)]['primitives']['add'](new Cesium['LabelCollection']({'depthTestEnable':![]}));_0x38a9f2[_0x1bc669(0x18b)]=_0x22cbe6[_0x1bc669(0x220)]({'position':_0x28f6d7,'font':_0x1bc669(0x1c9),'style':Cesium[_0x1bc669(0x1cd)][_0x1bc669(0x1e8)],'outlineWidth':0x1,'outlineColor':Cesium[_0x1bc669(0x197)][_0x1bc669(0x1b1)],'showBackground':!![],'backgroundColor':_0x38a9f2[_0x1bc669(0x183)],'pixelOffset':_0x38a9f2[_0x1bc669(0x212)],'pixelOffsetScaleByDistance':_0x38a9f2[_0x1bc669(0x200)],'text':'','show':_0x38a9f2[_0x1bc669(0x1a3)],'horizontalOrigin':Cesium[_0x1bc669(0x1f4)][_0x1bc669(0x1c5)]}),_0x38a9f2[_0x1bc669(0x1d8)]=_0x22cbe6[_0x1bc669(0x220)]({'position':_0x28f6d7,'font':_0x1bc669(0x1c9),'style':Cesium[_0x1bc669(0x1cd)][_0x1bc669(0x1e8)],'outlineWidth':0x1,'outlineColor':Cesium[_0x1bc669(0x197)][_0x1bc669(0x1b1)],'showBackground':!![],'backgroundColor':_0x38a9f2['_labelBackgroundColor'],'pixelOffset':_0x38a9f2[_0x1bc669(0x212)],'pixelOffsetScaleByDistance':_0x38a9f2[_0x1bc669(0x200)],'text':'','show':_0x38a9f2[_0x1bc669(0x1a3)],'horizontalOrigin':Cesium[_0x1bc669(0x1f4)][_0x1bc669(0x1c5)]}),_0x38a9f2[_0x1bc669(0x1fb)]=_0x22cbe6[_0x1bc669(0x220)]({'position':_0x28f6d7,'font':_0x1bc669(0x1c9),'style':Cesium[_0x1bc669(0x1cd)]['FILL_AND_OUTLINE'],'outlineWidth':0x1,'outlineColor':Cesium[_0x1bc669(0x197)][_0x1bc669(0x1b1)],'showBackground':!![],'backgroundColor':_0x38a9f2[_0x1bc669(0x183)],'pixelOffset':_0x38a9f2[_0x1bc669(0x212)],'pixelOffsetScaleByDistance':_0x38a9f2[_0x1bc669(0x200)],'text':'','show':_0x38a9f2[_0x1bc669(0x1a3)],'horizontalOrigin':Cesium[_0x1bc669(0x1f4)][_0x1bc669(0x1c5)]}),_0x38a9f2['labels']=_0x22cbe6;}let _0x2987f5=new Cesium[(_0x1bc669(0x1a2))]();Cesium[_0x1bc669(0x1a2)][_0x1bc669(0x1f7)](_0x28f6d7,_0x2987f5),_0x38a9f2[_0x1bc669(0x1b0)]=Cesium['Plane'][_0x1bc669(0x218)](_0x28f6d7,_0x2987f5),_0x38a9f2[_0x1bc669(0x214)]=_0x28f6d7,_0x38a9f2['startHeight']=Cesium[_0x1bc669(0x18a)]['fromCartesian'](_0x28f6d7)[_0x1bc669(0x21c)],_0x38a9f2['normal']=_0x2987f5;let _0x5dd2a8=new Cesium[(_0x1bc669(0x1a2))]();Cesium[_0x1bc669(0x1a2)]['negate'](_0x2987f5,_0x5dd2a8),_0x38a9f2[_0x1bc669(0x19b)]=_0x5dd2a8,_0x38a9f2[_0x1bc669(0x1d5)][_0x1bc669(0x1a8)]=_0x28f6d7;}function processDVH(_0x787840,_0x3e03db){const _0x3decb2=_0x210706;let _0x21fec4=_0x3e03db,_0x4fd3b6=_0x21fec4[_0x3decb2(0x1d7)][_0x3decb2(0x195)];if(!_0x787840)return;_0x21fec4[_0x3decb2(0x1ab)]=_0x787840;let _0x1f3bbd=Cesium[_0x3decb2(0x18a)]['fromCartesian'](_0x787840)[_0x3decb2(0x21c)],_0x5d353c,_0x450ba5;_0x1f3bbd>_0x21fec4['startHeight']?(_0x5d353c=Cesium[_0x3decb2(0x17a)][_0x3decb2(0x218)](_0x787840,_0x21fec4[_0x3decb2(0x210)]),_0x450ba5=new Cesium[(_0x3decb2(0x1e0))](_0x21fec4[_0x3decb2(0x214)],_0x21fec4[_0x3decb2(0x210)])):(_0x5d353c=_0x21fec4[_0x3decb2(0x1b0)],_0x450ba5=new Cesium['Ray'](_0x787840,_0x21fec4[_0x3decb2(0x210)]));let _0x204fb4=Cesium[_0x3decb2(0x18d)][_0x3decb2(0x199)](_0x450ba5,_0x5d353c);if(!_0x204fb4){_0x450ba5=new Cesium[(_0x3decb2(0x1e0))](_0x787840,_0x21fec4['normal']),_0x204fb4=Cesium[_0x3decb2(0x18d)][_0x3decb2(0x199)](_0x450ba5,_0x21fec4[_0x3decb2(0x1b0)]);if(!_0x204fb4)return;}_0x21fec4[_0x3decb2(0x21e)][_0x3decb2(0x1fe)]=[_0x21fec4[_0x3decb2(0x214)],_0x204fb4],_0x21fec4[_0x3decb2(0x1b5)][_0x3decb2(0x1fe)]=[_0x21fec4['startPoint'],_0x787840],_0x21fec4[_0x3decb2(0x1ff)]['positions']=[_0x787840,_0x204fb4],_0x21fec4[_0x3decb2(0x185)][_0x3decb2(0x1a8)]=_0x787840,_0x21fec4[_0x3decb2(0x1e5)]['position']=_0x204fb4;let _0x1166b4=Cesium[_0x3decb2(0x1a2)][_0x3decb2(0x1b6)](_0x21fec4[_0x3decb2(0x214)],_0x787840)[_0x3decb2(0x1ce)](0x8),_0x560e60=Cesium[_0x3decb2(0x1a2)][_0x3decb2(0x1b6)](_0x21fec4[_0x3decb2(0x214)],_0x204fb4)['toFixed'](0x8),_0x517c8f=Cesium[_0x3decb2(0x1a2)][_0x3decb2(0x1b6)](_0x787840,_0x204fb4)[_0x3decb2(0x1ce)](0x8);_0x1f3bbd>_0x21fec4['startHeight']?(Cesium[_0x3decb2(0x1a2)][_0x3decb2(0x17f)](_0x21fec4[_0x3decb2(0x214)],_0x787840,0.5,_0x21fec4[_0x3decb2(0x18b)][_0x3decb2(0x1a8)]),Cesium[_0x3decb2(0x1a2)][_0x3decb2(0x17f)](_0x21fec4['startPoint'],_0x204fb4,0.5,_0x21fec4['_vLabel']['position']),Cesium[_0x3decb2(0x1a2)][_0x3decb2(0x17f)](_0x787840,_0x204fb4,0.5,_0x21fec4[_0x3decb2(0x1fb)]['position'])):(Cesium[_0x3decb2(0x1a2)][_0x3decb2(0x17f)](_0x21fec4[_0x3decb2(0x214)],_0x787840,0.5,_0x21fec4[_0x3decb2(0x18b)][_0x3decb2(0x1a8)]),Cesium['Cartesian3'][_0x3decb2(0x17f)](_0x787840,_0x204fb4,0.5,_0x21fec4[_0x3decb2(0x1d8)][_0x3decb2(0x1a8)]),Cesium[_0x3decb2(0x1a2)]['lerp'](_0x21fec4[_0x3decb2(0x214)],_0x204fb4,0.5,_0x21fec4['_hLabel']['position']),_0x560e60=Cesium[_0x3decb2(0x1a2)]['distance'](_0x787840,_0x204fb4)[_0x3decb2(0x1ce)](0x8),_0x517c8f=Cesium[_0x3decb2(0x1a2)][_0x3decb2(0x1b6)](_0x21fec4[_0x3decb2(0x214)],_0x204fb4)[_0x3decb2(0x1ce)](0x8)),_0x21fec4[_0x3decb2(0x21b)]['raiseEvent']({'distance':_0x1166b4,'directionalPositions':_0x21fec4[_0x3decb2(0x1b5)]['positions'],'verticalHeight':_0x560e60,'verticalPositions':_0x21fec4[_0x3decb2(0x1ff)]['positions'],'horizontalDistance':_0x517c8f,'horizontalPositions':_0x21fec4[_0x3decb2(0x21e)][_0x3decb2(0x1fe)]});}MeasureHandler[_0x210706(0x1ba)]=function(_0xbebc0e){const _0x62fcfc=_0x210706;let _0x4d6e31=Cesium[_0x62fcfc(0x19e)]['triangulate'](_0xbebc0e),_0x22bdcb=_0x4d6e31[_0x62fcfc(0x1cf)]/0x3,_0x402e1c,_0x89d070,_0x44b34e,_0xe0b771=0x0;for(let _0x273e2a=0x0;_0x273e2a<_0x22bdcb;_0x273e2a++){_0x402e1c=_0xbebc0e[_0x4d6e31[_0x273e2a*0x3]],_0x89d070=_0xbebc0e[_0x4d6e31[_0x273e2a*0x3+0x1]],_0x44b34e=_0xbebc0e[_0x4d6e31[_0x273e2a*0x3+0x2]],v12Scratch=Cesium[_0x62fcfc(0x1a2)][_0x62fcfc(0x1b8)](_0x89d070,_0x402e1c,v12Scratch),v13Scratch=Cesium[_0x62fcfc(0x1a2)][_0x62fcfc(0x1b8)](_0x44b34e,_0x402e1c,v13Scratch),crossScratch=Cesium[_0x62fcfc(0x1a2)]['cross'](v12Scratch,v13Scratch,crossScratch),_0xe0b771+=0.5*Cesium[_0x62fcfc(0x1a2)][_0x62fcfc(0x1eb)](crossScratch);}return _0xe0b771;};function computeClampArea(_0x4ab73d,_0x1c329e){const _0x47e93e=_0x210706;let _0x299feb=Number[_0x47e93e(0x20a)],_0x50751b=-Number[_0x47e93e(0x20a)],_0x4c160f=Number[_0x47e93e(0x20a)],_0x101c31=-Number[_0x47e93e(0x20a)];for(let _0x5aa3d7=0x0;_0x5aa3d7<_0x1c329e[_0x47e93e(0x1cf)];_0x5aa3d7++){let _0x3c932d=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x1fa)](_0x1c329e[_0x5aa3d7]);_0x299feb=Math['min'](_0x3c932d[_0x47e93e(0x1b9)],_0x299feb),_0x50751b=Math['max'](_0x3c932d['longitude'],_0x50751b),_0x4c160f=Math[_0x47e93e(0x1a4)](_0x3c932d[_0x47e93e(0x190)],_0x4c160f),_0x101c31=Math[_0x47e93e(0x1ec)](_0x3c932d[_0x47e93e(0x190)],_0x101c31);}let _0x2a0852=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x20b)](new Cesium[(_0x47e93e(0x18a))](_0x299feb,_0x4c160f,0x0)),_0x235c58=Cesium['Cartographic'][_0x47e93e(0x20b)](new Cesium[(_0x47e93e(0x18a))](_0x50751b,_0x101c31,0x0)),_0x2b50b9=Cesium[_0x47e93e(0x1a2)][_0x47e93e(0x1ac)](_0x2a0852,_0x235c58),_0x1eabc2=Cesium[_0x47e93e(0x1b3)]['fromPositions']({'positions':_0x1c329e,'granularity':_0x2b50b9/0x20}),_0xfff422=Cesium[_0x47e93e(0x1b3)][_0x47e93e(0x215)](_0x1eabc2),_0x5a5a0b=0x0,_0x14a100={};for(let _0x40bc77=0x0;_0x40bc77<_0xfff422[_0x47e93e(0x1c0)][_0x47e93e(0x1cf)];_0x40bc77+=0x3){let _0xa0f80=_0xfff422['indices'][_0x40bc77],_0x515577;if(!_0x14a100[_0xa0f80]){let _0x3ae41e=_0xfff422[_0x47e93e(0x187)][_0x47e93e(0x1a8)][_0x47e93e(0x203)][_0xa0f80*0x3],_0x37d064=_0xfff422[_0x47e93e(0x187)]['position'][_0x47e93e(0x203)][_0xa0f80*0x3+0x1],_0x397c12=_0xfff422[_0x47e93e(0x187)][_0x47e93e(0x1a8)][_0x47e93e(0x203)][_0xa0f80*0x3+0x2];_0x515577=new Cesium[(_0x47e93e(0x1a2))](_0x3ae41e,_0x37d064,_0x397c12);let _0x3cf207=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x1fa)](_0x515577),_0x45d32d=_0x4ab73d['globe']['getHeight'](_0x3cf207);if(!_0x45d32d)continue;_0x3cf207=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x1a6)](_0x3cf207['longitude'],_0x3cf207[_0x47e93e(0x190)],_0x45d32d),_0x515577=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x20b)](_0x3cf207),_0x14a100[_0xa0f80]=Cesium[_0x47e93e(0x1a2)][_0x47e93e(0x213)](_0x515577);}else _0x515577=_0x14a100[_0xa0f80];let _0x4478aa=_0xfff422[_0x47e93e(0x1c0)][_0x40bc77+0x1],_0x1b1701;if(!_0x14a100[_0x4478aa]){let _0x2ae183=_0xfff422['attributes'][_0x47e93e(0x1a8)][_0x47e93e(0x203)][_0x4478aa*0x3],_0x16f7c0=_0xfff422['attributes'][_0x47e93e(0x1a8)][_0x47e93e(0x203)][_0x4478aa*0x3+0x1],_0x29e14f=_0xfff422[_0x47e93e(0x187)][_0x47e93e(0x1a8)][_0x47e93e(0x203)][_0x4478aa*0x3+0x2];_0x1b1701=new Cesium[(_0x47e93e(0x1a2))](_0x2ae183,_0x16f7c0,_0x29e14f);let _0x3852b8=Cesium[_0x47e93e(0x18a)]['fromCartesian'](_0x1b1701),_0x4e93d6=_0x4ab73d[_0x47e93e(0x1ad)][_0x47e93e(0x216)](_0x3852b8);if(!_0x4e93d6)continue;_0x3852b8=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x1a6)](_0x3852b8[_0x47e93e(0x1b9)],_0x3852b8['latitude'],_0x4e93d6),_0x1b1701=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x20b)](_0x3852b8),_0x14a100[_0x4478aa]=Cesium[_0x47e93e(0x1a2)][_0x47e93e(0x213)](_0x1b1701);}else _0x1b1701=_0x14a100[_0x4478aa];let _0x57f405=_0xfff422['indices'][_0x40bc77+0x2],_0x2b2a5b;if(!_0x14a100[_0x57f405]){let _0x43092d=_0xfff422[_0x47e93e(0x187)][_0x47e93e(0x1a8)]['values'][_0x57f405*0x3],_0x21c3d3=_0xfff422['attributes'][_0x47e93e(0x1a8)][_0x47e93e(0x203)][_0x57f405*0x3+0x1],_0x467378=_0xfff422[_0x47e93e(0x187)][_0x47e93e(0x1a8)][_0x47e93e(0x203)][_0x57f405*0x3+0x2];_0x2b2a5b=new Cesium['Cartesian3'](_0x43092d,_0x21c3d3,_0x467378);let _0x3a15ef=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x1fa)](_0x2b2a5b),_0x35efc9=_0x4ab73d[_0x47e93e(0x1ad)][_0x47e93e(0x216)](_0x3a15ef);if(!_0x35efc9)continue;_0x3a15ef=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x1a6)](_0x3a15ef[_0x47e93e(0x1b9)],_0x3a15ef[_0x47e93e(0x190)],_0x35efc9),_0x2b2a5b=Cesium[_0x47e93e(0x18a)][_0x47e93e(0x20b)](_0x3a15ef),_0x14a100[_0x57f405]=Cesium['Cartesian3'][_0x47e93e(0x213)](_0x2b2a5b);}else _0x2b2a5b=_0x14a100[_0x57f405];v12Scratch=Cesium['Cartesian3'][_0x47e93e(0x1b8)](_0x1b1701,_0x515577,v12Scratch),v13Scratch=Cesium[_0x47e93e(0x1a2)][_0x47e93e(0x1b8)](_0x2b2a5b,_0x515577,v13Scratch),crossScratch=Cesium['Cartesian3']['cross'](v12Scratch,v13Scratch,crossScratch),_0x5a5a0b+=0.5*Cesium[_0x47e93e(0x1a2)][_0x47e93e(0x1eb)](crossScratch);}return _0x5a5a0b;}function computeClampDistance(_0x83ddc0,_0x1fac2d){const _0x3ca4d2=_0x210706;let _0x264fb9=0x0,_0x1d1936=[],_0x3286a5=_0x1fac2d[_0x3ca4d2(0x1cf)]-0x1;for(let _0x5ba367=0x0;_0x5ba367<_0x3286a5;_0x5ba367++){let _0x4eaccb=_0x1fac2d[_0x5ba367],_0x1c4e1f=_0x1fac2d[_0x5ba367+0x1],_0x3b4f68=Cesium[_0x3ca4d2(0x1a2)][_0x3ca4d2(0x1ac)](_0x4eaccb,_0x1c4e1f),_0x1d5ede=_0x3b4f68/0x40,_0x44ae17=Cesium[_0x3ca4d2(0x18e)][_0x3ca4d2(0x208)](_0x1d5ede,0x615299),_0x52a262=Cesium[_0x3ca4d2(0x1a9)][_0x3ca4d2(0x1de)](_0x4eaccb,_0x1c4e1f,_0x44ae17,_0x1d1936),_0x945d2b=Cesium[_0x3ca4d2(0x1a2)]['unpackArray'](_0x52a262),_0x5c7c5b=_0x945d2b[_0x3ca4d2(0x1cf)]-0x1;for(let _0x56b85d=0x0;_0x56b85d<_0x5c7c5b;_0x56b85d++){let _0x47b017=_0x945d2b[_0x56b85d],_0x1d7bdf=Cesium[_0x3ca4d2(0x18a)]['fromCartesian'](_0x47b017),_0x26ba56=_0x83ddc0[_0x3ca4d2(0x1ad)][_0x3ca4d2(0x216)](_0x1d7bdf);_0x1d7bdf=Cesium[_0x3ca4d2(0x18a)][_0x3ca4d2(0x1a6)](_0x1d7bdf['longitude'],_0x1d7bdf[_0x3ca4d2(0x190)],_0x26ba56);let _0x13180e=Cesium[_0x3ca4d2(0x18a)][_0x3ca4d2(0x20b)](_0x1d7bdf),_0x2a2165=_0x945d2b[_0x56b85d+0x1];_0x1d7bdf=Cesium[_0x3ca4d2(0x18a)][_0x3ca4d2(0x1fa)](_0x2a2165),_0x26ba56=_0x83ddc0[_0x3ca4d2(0x1ad)]['getHeight'](_0x1d7bdf),_0x1d7bdf=Cesium[_0x3ca4d2(0x18a)][_0x3ca4d2(0x1a6)](_0x1d7bdf[_0x3ca4d2(0x1b9)],_0x1d7bdf[_0x3ca4d2(0x190)],_0x26ba56);let _0x5514df=Cesium['Cartographic'][_0x3ca4d2(0x20b)](_0x1d7bdf);_0x264fb9+=Cesium['Cartesian3'][_0x3ca4d2(0x1b6)](_0x13180e,_0x5514df);}}return _0x264fb9;}

    const _0x1585=['unproject','defaultValue','WGS84','contains','3917CAkrSo','50QvqrBQ','getNumberOfXTilesAtLevel','GeographicProjection','project','Cartesian2','29594xdqkkl','getNumberOfYTilesAtLevel','rectangleToNativeRectangle','northeast','1185796AmdEBz','north','_ellipsoid','Rectangle','5qbcMWk','ellipsoid','Ellipsoid','scaleDenominators','longitude','customDPI','prototype','calculateResolution','defineProperties','numberOfLevelZeroTilesY','south','rectangleSouthwestInMeters','_rectangle','_projection','tileWidth','numberOfLevelZeroTilesX','_scaleDenominators','latitude','rectangleNortheastInMeters','tileXYToRectangle','defined','14NjWOCX','126745dPmNEr','_numberOfLevelZeroTilesX','255065BYrdnU','_rectangleNortheastInMeters','tileXYToNativeRectangle','west','_rectangleSouthwestInMeters','southwest','maximumRadius','950381vNYPNB','_customDPI','east','_tileHeight','_tileWidth','tileHeight','716453yXjeVD','_numberOfLevelZeroTilesY'];const _0x4eedb7=_0x5dd9;(function(_0x15af3f,_0x533f4d){const _0x29ac9b=_0x5dd9;while(!![]){try{const _0x57a134=-parseInt(_0x29ac9b(0xf5))*parseInt(_0x29ac9b(0x111))+parseInt(_0x29ac9b(0x105))+-parseInt(_0x29ac9b(0xf8))+-parseInt(_0x29ac9b(0x10c))*parseInt(_0x29ac9b(0x10b))+parseInt(_0x29ac9b(0x119))*parseInt(_0x29ac9b(0xf6))+parseInt(_0x29ac9b(0x115))+-parseInt(_0x29ac9b(0xff));if(_0x57a134===_0x533f4d)break;else _0x15af3f['push'](_0x15af3f['shift']());}catch(_0x284289){_0x15af3f['push'](_0x15af3f['shift']());}}}(_0x1585,0xafdea));function CustomTilingScheme(_0x1da99b){const _0x53bdcd=_0x5dd9;_0x1da99b=Cesium[_0x53bdcd(0x108)](_0x1da99b,Cesium['defaultValue']['EMPTY_OBJECT']),this[_0x53bdcd(0x117)]=Cesium['defaultValue'](_0x1da99b[_0x53bdcd(0x11a)],Cesium[_0x53bdcd(0x11b)][_0x53bdcd(0x109)]),this[_0x53bdcd(0xf7)]=Cesium[_0x53bdcd(0x108)](_0x1da99b[_0x53bdcd(0xef)],0x1),this[_0x53bdcd(0x106)]=Cesium['defaultValue'](_0x1da99b[_0x53bdcd(0xe9)],0x1),this[_0x53bdcd(0xed)]=new Cesium[(_0x53bdcd(0x10e))](this[_0x53bdcd(0x117)]);if(Cesium[_0x53bdcd(0xf4)](_0x1da99b[_0x53bdcd(0xeb)])&&Cesium[_0x53bdcd(0xf4)](_0x1da99b[_0x53bdcd(0xf2)]))this['_rectangleSouthwestInMeters']=_0x1da99b['rectangleSouthwestInMeters'],this[_0x53bdcd(0xf9)]=_0x1da99b[_0x53bdcd(0xf2)];else {let _0x28cfbf=this[_0x53bdcd(0x117)][_0x53bdcd(0xfe)]*Math['PI'];this[_0x53bdcd(0xfc)]=new Cesium[(_0x53bdcd(0x110))](-_0x28cfbf,-_0x28cfbf),this[_0x53bdcd(0xf9)]=new Cesium[(_0x53bdcd(0x110))](_0x28cfbf,_0x28cfbf);}let _0x54c6fc=this['_projection'][_0x53bdcd(0x107)](this[_0x53bdcd(0xfc)]),_0x244bfd=this['_projection']['unproject'](this[_0x53bdcd(0xf9)]);this[_0x53bdcd(0xec)]=new Cesium[(_0x53bdcd(0x118))](_0x54c6fc[_0x53bdcd(0x11d)],_0x54c6fc[_0x53bdcd(0xf1)],_0x244bfd['longitude'],_0x244bfd['latitude']),this[_0x53bdcd(0x100)]=_0x1da99b[_0x53bdcd(0x11e)],this['_scaleDenominators']=_0x1da99b[_0x53bdcd(0x11c)],this['_tileWidth']=Cesium[_0x53bdcd(0x108)](_0x1da99b[_0x53bdcd(0xee)],0x100),this[_0x53bdcd(0x102)]=Cesium['defaultValue'](_0x1da99b[_0x53bdcd(0x104)],0x100);}function _0x5dd9(_0x551217,_0x45b7c5){_0x551217=_0x551217-0xe6;let _0x1585e6=_0x1585[_0x551217];return _0x1585e6;}Object[_0x4eedb7(0xe8)](CustomTilingScheme['prototype'],{'ellipsoid':{'get':function(){const _0x1aca84=_0x4eedb7;return this[_0x1aca84(0x117)];}},'rectangle':{'get':function(){const _0x2b8c6a=_0x4eedb7;return this[_0x2b8c6a(0xec)];}},'projection':{'get':function(){const _0x40956b=_0x4eedb7;return this[_0x40956b(0xed)];}}}),CustomTilingScheme[_0x4eedb7(0xe6)][_0x4eedb7(0x10d)]=function(_0x199137){const _0x26d82e=_0x4eedb7;return this[_0x26d82e(0xf7)]<<_0x199137;},CustomTilingScheme['prototype'][_0x4eedb7(0x112)]=function(_0x1a06b8){const _0xcfab4f=_0x4eedb7;return this[_0xcfab4f(0x106)]<<_0x1a06b8;},CustomTilingScheme['prototype'][_0x4eedb7(0x113)]=function(_0x4ac2ad,_0x171e19){const _0x396a2e=_0x4eedb7;let _0x166172=this['_projection'],_0x122e36=_0x166172[_0x396a2e(0x10f)](Cesium['Rectangle'][_0x396a2e(0xfd)](_0x4ac2ad)),_0x4a4cd7=_0x166172[_0x396a2e(0x10f)](Cesium[_0x396a2e(0x118)][_0x396a2e(0x114)](_0x4ac2ad));if(!Cesium[_0x396a2e(0xf4)](_0x171e19))return new Cesium[(_0x396a2e(0x118))](_0x122e36['x'],_0x122e36['y'],_0x4a4cd7['x'],_0x4a4cd7['y']);return _0x171e19[_0x396a2e(0xfb)]=_0x122e36['x'],_0x171e19['south']=_0x122e36['y'],_0x171e19[_0x396a2e(0x101)]=_0x4a4cd7['x'],_0x171e19['north']=_0x4a4cd7['y'],_0x171e19;},CustomTilingScheme[_0x4eedb7(0xe6)][_0x4eedb7(0xfa)]=function(_0x59c7c4,_0x434e52,_0x277432,_0x8b9ac8){const _0x5e9e4e=_0x4eedb7;if(Cesium[_0x5e9e4e(0xf4)](this[_0x5e9e4e(0x100)])&&Cesium[_0x5e9e4e(0xf4)](this['_scaleDenominators'])){let _0x1f169f=this[_0x5e9e4e(0xe7)](_0x277432),_0x554311=this[_0x5e9e4e(0xfc)]['x']+_0x59c7c4*this['_tileWidth']*_0x1f169f['x'],_0x315be1=this[_0x5e9e4e(0xfc)]['x']+(_0x59c7c4+0x1)*this[_0x5e9e4e(0x103)]*_0x1f169f['x'],_0xabb10c=this[_0x5e9e4e(0xf9)]['y']-_0x434e52*this[_0x5e9e4e(0x102)]*_0x1f169f['y'],_0x1f7b3d=this[_0x5e9e4e(0xf9)]['y']-(_0x434e52+0x1)*this[_0x5e9e4e(0x102)]*_0x1f169f['y'];if(!Cesium['defined'](_0x8b9ac8))return new Cesium[(_0x5e9e4e(0x118))](_0x554311,_0x1f7b3d,_0x315be1,_0xabb10c);return _0x8b9ac8[_0x5e9e4e(0xfb)]=_0x554311,_0x8b9ac8[_0x5e9e4e(0xea)]=_0x1f7b3d,_0x8b9ac8[_0x5e9e4e(0x101)]=_0x315be1,_0x8b9ac8['north']=_0xabb10c,_0x8b9ac8;}let _0x5ac113=this[_0x5e9e4e(0x10d)](_0x277432),_0x226af3=this[_0x5e9e4e(0x112)](_0x277432),_0x5538d4=(this[_0x5e9e4e(0xf9)]['x']-this[_0x5e9e4e(0xfc)]['x'])/_0x5ac113,_0x549da1=this[_0x5e9e4e(0xfc)]['x']+_0x59c7c4*_0x5538d4,_0x374a9b=this[_0x5e9e4e(0xfc)]['x']+(_0x59c7c4+0x1)*_0x5538d4,_0x49dfb7=(this[_0x5e9e4e(0xf9)]['y']-this[_0x5e9e4e(0xfc)]['y'])/_0x226af3,_0x576cce=this[_0x5e9e4e(0xf9)]['y']-_0x434e52*_0x49dfb7,_0x336910=this[_0x5e9e4e(0xf9)]['y']-(_0x434e52+0x1)*_0x49dfb7;if(!Cesium[_0x5e9e4e(0xf4)](_0x8b9ac8))return new Cesium[(_0x5e9e4e(0x118))](_0x549da1,_0x336910,_0x374a9b,_0x576cce);return _0x8b9ac8[_0x5e9e4e(0xfb)]=_0x549da1,_0x8b9ac8[_0x5e9e4e(0xea)]=_0x336910,_0x8b9ac8[_0x5e9e4e(0x101)]=_0x374a9b,_0x8b9ac8[_0x5e9e4e(0x116)]=_0x576cce,_0x8b9ac8;},CustomTilingScheme['prototype'][_0x4eedb7(0xf3)]=function(_0x4b70ef,_0xedc96d,_0x1dfbe9,_0x132292){const _0x576b88=_0x4eedb7;let _0x59e7a8=this['tileXYToNativeRectangle'](_0x4b70ef,_0xedc96d,_0x1dfbe9,_0x132292),_0x25c549=this[_0x576b88(0xed)],_0x123c79=_0x25c549[_0x576b88(0x107)](new Cesium[(_0x576b88(0x110))](_0x59e7a8[_0x576b88(0xfb)],_0x59e7a8[_0x576b88(0xea)])),_0x505c55=_0x25c549[_0x576b88(0x107)](new Cesium['Cartesian2'](_0x59e7a8[_0x576b88(0x101)],_0x59e7a8[_0x576b88(0x116)]));return _0x59e7a8['west']=_0x123c79[_0x576b88(0x11d)],_0x59e7a8[_0x576b88(0xea)]=_0x123c79[_0x576b88(0xf1)],_0x59e7a8[_0x576b88(0x101)]=_0x505c55['longitude'],_0x59e7a8[_0x576b88(0x116)]=_0x505c55[_0x576b88(0xf1)],_0x59e7a8;},CustomTilingScheme[_0x4eedb7(0xe6)]['positionToTileXY']=function(_0xdc3c68,_0x4f1905,_0x37a3db){const _0x2cd80a=_0x4eedb7;let _0x18de80=this[_0x2cd80a(0xec)];if(!Cesium['Rectangle'][_0x2cd80a(0x10a)](_0x18de80,_0xdc3c68))return undefined;let _0x1a7adf=this['getNumberOfXTilesAtLevel'](_0x4f1905),_0xccb8d=this[_0x2cd80a(0x112)](_0x4f1905),_0x2a866f=this['_rectangleNortheastInMeters']['x']-this[_0x2cd80a(0xfc)]['x'],_0x5b0643=_0x2a866f/_0x1a7adf,_0x4b6da7=this['_rectangleNortheastInMeters']['y']-this[_0x2cd80a(0xfc)]['y'],_0x4328cf=_0x4b6da7/_0xccb8d;if(Cesium[_0x2cd80a(0xf4)](this[_0x2cd80a(0x100)])&&Cesium['defined'](this[_0x2cd80a(0xf0)])){let _0x14f487=this[_0x2cd80a(0xe7)](_0x4f1905);_0x5b0643=this[_0x2cd80a(0x103)]*_0x14f487['x'],_0x4328cf=this[_0x2cd80a(0x102)]*_0x14f487['y'];}let _0x39e089=this[_0x2cd80a(0xed)],_0x149aff=_0x39e089[_0x2cd80a(0x10f)](_0xdc3c68),_0x41eef8=_0x149aff['x']-this[_0x2cd80a(0xfc)]['x'],_0x2d11ec=this[_0x2cd80a(0xf9)]['y']-_0x149aff['y'],_0x278eb3=_0x41eef8/_0x5b0643|0x0;_0x278eb3>=_0x1a7adf&&(_0x278eb3=_0x1a7adf-0x1);let _0x1001d5=_0x2d11ec/_0x4328cf|0x0;_0x1001d5>=_0xccb8d&&(_0x1001d5=_0xccb8d-0x1);if(!Cesium['defined'](_0x37a3db))return new Cesium[(_0x2cd80a(0x110))](_0x278eb3,_0x1001d5);return _0x37a3db['x']=_0x278eb3,_0x37a3db['y']=_0x1001d5,_0x37a3db;},CustomTilingScheme[_0x4eedb7(0xe6)][_0x4eedb7(0xe7)]=function(_0x1d35d){const _0x4bd848=_0x4eedb7;let _0x4464e8=this['_scaleDenominators'][_0x1d35d]*0.0254/this[_0x4bd848(0x100)]['x'],_0x15b712=this[_0x4bd848(0xf0)][_0x1d35d]*0.0254/this[_0x4bd848(0x100)]['y'];return new Cesium[(_0x4bd848(0x110))](_0x4464e8,_0x15b712);};

    const _0x3f4b=['resolve','_url','toRadians','_isTileMap','data/index/{y}/{x}.{fileExtension}?level={level}','_readyPromise','_errorEvent','PRJ_TRANSVERSE_MERCATOR','32982ZnICWF','visibleScales','url','positionToTileXY','Top','Bounds','prototype','_coordUnit','_tileWidth','getTileCredits','getDerivedResource','_ready','_tileDiscardPolicy','tileHeight\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','633DAaQxe','3riRWvm','defined','queryStringValue','northeast','type','303301kxBzLu','width','DeveloperError','png','46VybRWD','abs','tileImage.','latitude','rectangle','maximumLevel\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','maximumLevel','documentElement','west','coordUnit','tilingScheme','queryFirstNode','tilingScheme\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','requestImage','DEGREE','ceil','_tileHeight','south','height','requestImage\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','east','FileExtentName','Level','viewer','CellHeight','?x={x}&y={y}&scale={scale}&origin={\x22x\x22:','Rectangle','.json','1gTGapd','projection','_credit','tileDiscardPolicy','textContent','length','Bottom','options.url\x20is\x20required.','when','fetchJson','options.url\x20is\x20error','1011fbkCTA','Left','queryNodes','pickFeatures','_minimumLevel','Credit','bounds','tileFormat','WebMercatorProjection','rest/maps','An\x20error\x20occurred\x20while\x20accessing\x20','PRJ_SPHERE_MERCATOR','prjCoordSys','Levels','config','599402RLmIqZ','southwest','315977vvXOtR','bottom','_maximumLevel','defineProperties','_resource','fetchImage','appendForwardSlash','queryNumericValue','EPSILON7','http://www.supermap.com/SuperMapCache/sci3d','Resource','CellWidth','createIfNeeded','_isSci3D','unproject','minimumLevel','_tileFormat','right','_urlTemplate','left','push','Right','resolution','equalsEpsilon','493361YlvurN','defer','_tilingScheme','clamp','GeographicProjection','Math','GeographicTilingScheme','defaultValue','Cartesian3','WebMercatorTilingScheme','north','top','_rectangle','tileWidth\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','longitude','dpi','_scales','1187787peRuKJ'];const _0x17ea6b=_0x123a;(function(_0x47e841,_0x189334){const _0xf9eb5f=_0x123a;while(!![]){try{const _0x289d17=parseInt(_0xf9eb5f(0x178))*-parseInt(_0xf9eb5f(0x127))+-parseInt(_0xf9eb5f(0x17e))+-parseInt(_0xf9eb5f(0x150))*-parseInt(_0xf9eb5f(0x11c))+-parseInt(_0xf9eb5f(0x138))*-parseInt(_0xf9eb5f(0x179))+parseInt(_0xf9eb5f(0x136))+parseInt(_0xf9eb5f(0x182))*-parseInt(_0xf9eb5f(0x16a))+parseInt(_0xf9eb5f(0x161));if(_0x289d17===_0x189334)break;else _0x47e841['push'](_0x47e841['shift']());}catch(_0x5be32a){_0x47e841['push'](_0x47e841['shift']());}}}(_0x3f4b,0xbb82d));function _0x123a(_0x4f3e82,_0x273dfd){_0x4f3e82=_0x4f3e82-0x112;let _0x3f4b7c=_0x3f4b[_0x4f3e82];return _0x3f4b7c;}function metadataSuccessForXml(_0x265800,_0x5d6021){const _0x5eb914=_0x123a;let _0x4d63de=_0x5eb914(0x141),_0x47c5c5=_0x5d6021[_0x5eb914(0x189)],_0x3cfbd8=XMLParser[_0x5eb914(0x18d)](_0x47c5c5,_0x5eb914(0x16f),_0x4d63de),_0x589077=XMLParser[_0x5eb914(0x13f)](_0x3cfbd8,_0x5eb914(0x128),_0x4d63de),_0x320ecc=XMLParser[_0x5eb914(0x13f)](_0x3cfbd8,_0x5eb914(0x14d),_0x4d63de),_0x5f17a5=XMLParser['queryNumericValue'](_0x3cfbd8,_0x5eb914(0x16e),_0x4d63de),_0x16504c=XMLParser[_0x5eb914(0x13f)](_0x3cfbd8,_0x5eb914(0x122),_0x4d63de),_0x15752d=XMLParser[_0x5eb914(0x17b)](_0x47c5c5,_0x5eb914(0x115),_0x4d63de),_0x5e1dd6=XMLParser[_0x5eb914(0x13f)](_0x47c5c5,_0x5eb914(0x143),_0x4d63de),_0x483acf=XMLParser[_0x5eb914(0x13f)](_0x47c5c5,_0x5eb914(0x118),_0x4d63de),_0x4fedd1=XMLParser[_0x5eb914(0x18d)](_0x47c5c5,_0x5eb914(0x134),_0x4d63de),_0x297362=XMLParser[_0x5eb914(0x129)](_0x4fedd1,_0x5eb914(0x116),_0x4d63de),_0x1896a0=[];for(let _0x2d7b83=0x0,_0x2d47ce=_0x297362[_0x5eb914(0x121)];_0x2d7b83<_0x2d47ce;_0x2d7b83++){_0x1896a0[_0x5eb914(0x14c)](parseInt(_0x297362[_0x2d7b83][_0x5eb914(0x120)],0xa));}_0x265800[_0x5eb914(0x148)]=Cesium[_0x5eb914(0x157)](_0x15752d,_0x5eb914(0x181)),_0x265800[_0x5eb914(0x172)]=Cesium[_0x5eb914(0x157)](_0x5e1dd6,0x100),_0x265800[_0x5eb914(0x192)]=Cesium[_0x5eb914(0x157)](_0x483acf,0x100);let _0x7dce5a=_0x1896a0[_0x5eb914(0x121)];_0x265800[_0x5eb914(0x12b)]=Cesium[_0x5eb914(0x157)](_0x1896a0[0x0],0x0),_0x265800['_maximumLevel']=Cesium['defaultValue'](_0x265800[_0x5eb914(0x13a)],_0x1896a0[_0x7dce5a-0x1]);!_0x265800[_0x5eb914(0x152)]&&(_0x265800[_0x5eb914(0x152)]=new Cesium[(_0x5eb914(0x156))]());let _0x3086e3=_0x265800[_0x5eb914(0x152)];!_0x265800[_0x5eb914(0x15c)]&&_0x589077&&_0x320ecc&&_0x5f17a5&&_0x16504c&&(_0x265800[_0x5eb914(0x15c)]=new Cesium[(_0x5eb914(0x11a))](Cesium['Math'][_0x5eb914(0x164)](_0x589077),Cesium[_0x5eb914(0x155)][_0x5eb914(0x164)](_0x16504c),Cesium['Math'][_0x5eb914(0x164)](_0x320ecc),Cesium[_0x5eb914(0x155)]['toRadians'](_0x5f17a5)));_0x265800[_0x5eb914(0x15c)][_0x5eb914(0x18a)]<_0x3086e3[_0x5eb914(0x186)][_0x5eb914(0x18a)]&&(_0x265800[_0x5eb914(0x15c)][_0x5eb914(0x18a)]=_0x3086e3['rectangle'][_0x5eb914(0x18a)]);_0x265800['_rectangle'][_0x5eb914(0x114)]>_0x3086e3['rectangle'][_0x5eb914(0x114)]&&(_0x265800[_0x5eb914(0x15c)]['east']=_0x3086e3[_0x5eb914(0x186)][_0x5eb914(0x114)]);_0x265800[_0x5eb914(0x15c)][_0x5eb914(0x193)]<_0x3086e3[_0x5eb914(0x186)][_0x5eb914(0x193)]&&(_0x265800['_rectangle'][_0x5eb914(0x193)]=_0x3086e3[_0x5eb914(0x186)][_0x5eb914(0x193)]);_0x265800[_0x5eb914(0x15c)][_0x5eb914(0x15a)]>_0x3086e3[_0x5eb914(0x186)][_0x5eb914(0x15a)]&&(_0x265800['_rectangle']['north']=_0x3086e3['rectangle'][_0x5eb914(0x15a)]);let _0x250174=_0x3086e3[_0x5eb914(0x16d)](Cesium[_0x5eb914(0x11a)][_0x5eb914(0x137)](_0x265800[_0x5eb914(0x15c)]),_0x265800[_0x5eb914(0x12b)]),_0x2bf0f4=_0x3086e3[_0x5eb914(0x16d)](Cesium['Rectangle'][_0x5eb914(0x17c)](_0x265800[_0x5eb914(0x15c)]),_0x265800[_0x5eb914(0x12b)]),_0x3a20e9=(Math[_0x5eb914(0x183)](_0x2bf0f4['x']-_0x250174['x'])+0x1)*(Math['abs'](_0x2bf0f4['y']-_0x250174['y'])+0x1);_0x3a20e9>0x4&&(_0x265800[_0x5eb914(0x12b)]=0x0),_0x265800['_urlTemplate']=_0x265800[_0x5eb914(0x163)]+_0x5eb914(0x166),_0x265800[_0x5eb914(0x175)]=!![],_0x265800['_readyPromise'][_0x5eb914(0x162)](!![]);}function metadataSuccessForJson(_0x581360,_0x3a6dcb){const _0x57d37d=_0x123a;let _0x4307db=_0x3a6dcb[_0x57d37d(0x133)][_0x57d37d(0x18b)],_0xc69d99=_0x3a6dcb[_0x57d37d(0x12d)],_0x2cf4ce=_0x3a6dcb[_0x57d37d(0x16b)],_0x4a9c70=_0x2cf4ce[_0x57d37d(0x121)]===0x0;_0x581360[_0x57d37d(0x171)]=_0x4307db;if(_0x4307db===_0x57d37d(0x190)){_0x581360[_0x57d37d(0x152)]=new Cesium[(_0x57d37d(0x156))](),_0xc69d99['left']=Cesium[_0x57d37d(0x155)][_0x57d37d(0x153)](_0xc69d99[_0x57d37d(0x14b)],-0xb4,0xb4),_0xc69d99[_0x57d37d(0x139)]=Cesium[_0x57d37d(0x155)]['clamp'](_0xc69d99[_0x57d37d(0x139)],-0x5a,0x5a),_0xc69d99[_0x57d37d(0x149)]=Cesium['Math'][_0x57d37d(0x153)](_0xc69d99[_0x57d37d(0x149)],-0xb4,0xb4),_0xc69d99['top']=Cesium[_0x57d37d(0x155)][_0x57d37d(0x153)](_0xc69d99[_0x57d37d(0x15b)],-0x5a,0x5a);Cesium[_0x57d37d(0x155)][_0x57d37d(0x14f)](_0xc69d99[_0x57d37d(0x14b)],_0xc69d99['right'],Cesium[_0x57d37d(0x155)][_0x57d37d(0x140)])&&(_0xc69d99[_0x57d37d(0x149)]+=Cesium[_0x57d37d(0x155)]['EPSILON5']);Cesium[_0x57d37d(0x155)][_0x57d37d(0x14f)](_0xc69d99[_0x57d37d(0x15b)],_0xc69d99[_0x57d37d(0x139)],Cesium[_0x57d37d(0x155)][_0x57d37d(0x140)])&&(_0xc69d99['top']+=Cesium[_0x57d37d(0x155)]['EPSILON5']);_0x581360[_0x57d37d(0x15c)]=Cesium[_0x57d37d(0x11a)]['fromDegrees'](_0xc69d99[_0x57d37d(0x14b)],_0xc69d99[_0x57d37d(0x139)],_0xc69d99['right'],_0xc69d99['top']),_0x581360[_0x57d37d(0x14a)]=_0x581360[_0x57d37d(0x163)]+_0x57d37d(0x184)+_0x581360[_0x57d37d(0x148)]+'?x={x}&y={y}&scale={scale}&origin={\x22x\x22:-180,\x22y\x22:90}',_0x581360['_maximumLevel']=Cesium['defaultValue'](_0x581360[_0x57d37d(0x13a)],_0x581360[_0x57d37d(0x160)][_0x57d37d(0x121)]),_0x581360[_0x57d37d(0x175)]=!![],_0x581360[_0x57d37d(0x167)]['resolve'](!![]);return;}let _0x5e8e56=new Cesium[(_0x57d37d(0x158))](_0xc69d99[_0x57d37d(0x14b)],_0xc69d99[_0x57d37d(0x139)],0x0),_0x35191c=new Cesium[(_0x57d37d(0x158))](_0xc69d99[_0x57d37d(0x149)],_0xc69d99['top'],0x0);if(!Cesium[_0x57d37d(0x17a)](_0x581360[_0x57d37d(0x152)])){let _0x86c177=Cesium['defined'](_0x3a6dcb[_0x57d37d(0x133)])&&Cesium[_0x57d37d(0x17a)](_0x3a6dcb[_0x57d37d(0x133)]['projection'])&&(_0x3a6dcb[_0x57d37d(0x133)][_0x57d37d(0x11d)][_0x57d37d(0x17d)]===_0x57d37d(0x132)||_0x3a6dcb[_0x57d37d(0x133)][_0x57d37d(0x11d)][_0x57d37d(0x17d)]===_0x57d37d(0x169)),_0x5e2a41=_0x86c177?new Cesium[(_0x57d37d(0x12f))]():new Cesium[(_0x57d37d(0x154))](),_0x56ae55=_0x5e2a41[_0x57d37d(0x146)](_0x5e8e56),_0x426b23=_0x5e2a41[_0x57d37d(0x146)](_0x35191c),_0x597e10=new Cesium['Rectangle'](_0x56ae55['longitude'],_0x56ae55['latitude'],_0x426b23[_0x57d37d(0x15e)],_0x426b23[_0x57d37d(0x185)]),_0x1e33a8,_0x43b1f0,_0x20c51b,_0x31a3cf;if(!_0x4a9c70){_0x20c51b=[],_0x31a3cf=new Cesium['Cartesian2'](_0x3a6dcb['dpi'],_0x3a6dcb[_0x57d37d(0x15f)]);for(let _0x3d5ab9=0x0;_0x3d5ab9<_0x2cf4ce[_0x57d37d(0x121)];_0x3d5ab9++){_0x20c51b[_0x57d37d(0x14c)](0x1/_0x2cf4ce[_0x3d5ab9]);}let _0x4aeb7b=_0x2cf4ce[0x0],_0x582612=0.0254/(_0x3a6dcb[_0x57d37d(0x15f)]*_0x4aeb7b);_0x1e33a8=Math[_0x57d37d(0x191)]((_0x35191c['x']-_0x5e8e56['x'])/_0x582612/_0x3a6dcb[_0x57d37d(0x117)][_0x57d37d(0x17f)]),_0x43b1f0=Math[_0x57d37d(0x191)]((_0x35191c['y']-_0x5e8e56['y'])/_0x582612/_0x3a6dcb[_0x57d37d(0x117)][_0x57d37d(0x112)]),_0x581360['_scales']=_0x2cf4ce;}_0x581360[_0x57d37d(0x152)]=_0x86c177?new Cesium[(_0x57d37d(0x159))]({'numberOfLevelZeroTilesX':_0x1e33a8,'numberOfLevelZeroTilesY':_0x43b1f0,'rectangleSouthwestInMeters':_0x4a9c70?undefined:_0x5e8e56,'rectangleNortheastInMeters':_0x4a9c70?undefined:_0x35191c}):new CustomTilingScheme({'projection':_0x5e2a41,'rectangleSouthwestInMeters':_0x5e8e56,'rectangleNortheastInMeters':_0x35191c,'numberOfLevelZeroTilesX':_0x1e33a8,'numberOfLevelZeroTilesY':_0x43b1f0,'customDPI':_0x31a3cf,'scaleDenominators':_0x20c51b}),_0x581360[_0x57d37d(0x15c)]=_0x597e10;}let _0x3c851b=_0x4a9c70?-20037508.342789248:_0xc69d99[_0x57d37d(0x14b)],_0x16ab5f=_0x4a9c70?20037508.342789095:_0xc69d99['top'];_0x581360[_0x57d37d(0x14a)]=_0x581360[_0x57d37d(0x163)]+_0x57d37d(0x184)+_0x581360[_0x57d37d(0x148)]+_0x57d37d(0x119)+_0x3c851b+',\x22y\x22:'+_0x16ab5f+'}',_0x581360[_0x57d37d(0x13a)]=Cesium['defaultValue'](_0x581360[_0x57d37d(0x13a)],_0x581360[_0x57d37d(0x160)][_0x57d37d(0x121)]),_0x581360[_0x57d37d(0x175)]=!![],_0x581360['_readyPromise'][_0x57d37d(0x162)](!![]);}const SCALES=[1.690163571602655e-9,3.3803271432053056e-9,6.760654286410611e-9,1.3521308572821242e-8,2.7042617145642484e-8,5.408523429128511e-8,1.0817046858256998e-7,2.1634093716513974e-7,4.3268187433028044e-7,8.653637486605571e-7,0.0000017307274973211203,0.0000034614549946422405,0.0000069229099892844565,0.000013845819978568952,0.000027691639957137904,0.0000553832799142758,0.0001107665598285516,0.0002215331196571032,0.0004430662393142064,0.0008861324786284128,0.001772264957256826,0.003544529914513652];function SuperMapImageryProvider(_0x490879){const _0x111d10=_0x123a;_0x490879=Cesium[_0x111d10(0x157)](_0x490879,{});if(!_0x490879[_0x111d10(0x16c)])throw new Cesium[(_0x111d10(0x180))](_0x111d10(0x123));this[_0x111d10(0x163)]=Cesium[_0x111d10(0x13e)](_0x490879[_0x111d10(0x16c)]),this[_0x111d10(0x13c)]=Cesium[_0x111d10(0x142)][_0x111d10(0x144)](this['_url']),this[_0x111d10(0x165)]=_0x490879['url']['indexOf'](_0x111d10(0x130))>-0x1,this[_0x111d10(0x145)]=_0x490879[_0x111d10(0x16c)]['indexOf']('rest/realspace')>-0x1;if(!this[_0x111d10(0x165)]&&!this[_0x111d10(0x145)])throw new Cesium[(_0x111d10(0x180))](_0x111d10(0x126));this[_0x111d10(0x14a)]=undefined,this[_0x111d10(0x168)]=new Cesium['Event'](),this['_tileWidth']=0x100,this[_0x111d10(0x192)]=0x100,this['_tileFormat']=Cesium[_0x111d10(0x157)](_0x490879[_0x111d10(0x12e)],'png'),this[_0x111d10(0x12b)]=Cesium[_0x111d10(0x157)](_0x490879[_0x111d10(0x147)],0x0),this[_0x111d10(0x13a)]=_0x490879[_0x111d10(0x188)],this[_0x111d10(0x15c)]=undefined,this[_0x111d10(0x152)]=_0x490879[_0x111d10(0x18c)],this[_0x111d10(0x171)]=undefined,this['_scales']=SCALES,this[_0x111d10(0x176)]=_0x490879[_0x111d10(0x11f)];let _0x172c6a=Cesium[_0x111d10(0x157)](_0x490879['credit'],'');typeof _0x172c6a==='string'&&(_0x172c6a=new Cesium[(_0x111d10(0x12c))](_0x172c6a));this[_0x111d10(0x11e)]=_0x172c6a,this['_ready']=![],this[_0x111d10(0x167)]=Cesium[_0x111d10(0x124)][_0x111d10(0x151)]();let _0x2d6feb=this;function _0x9e23e4(_0x231a23){if(_0x2d6feb['_isSci3D'])metadataSuccessForXml(_0x2d6feb,_0x231a23);else _0x2d6feb['_isTileMap']&&metadataSuccessForJson(_0x2d6feb,_0x231a23);}function _0x5ab70d(_0xd8f08b){const _0x59bd66=_0x111d10;let _0xaa132d=_0x59bd66(0x131)+_0x2d6feb[_0x59bd66(0x163)]+'.';_0x2d6feb[_0x59bd66(0x167)]['reject'](new Cesium['RuntimeError'](_0xaa132d));}let _0x18d84a,_0x2db015;this[_0x111d10(0x145)]?(_0x18d84a=this[_0x111d10(0x13c)]['getDerivedResource']({'url':_0x111d10(0x135)}),_0x2db015=_0x18d84a['fetchXML']()):(_0x18d84a=Cesium[_0x111d10(0x142)][_0x111d10(0x144)](_0x490879[_0x111d10(0x16c)]+_0x111d10(0x11b)),_0x2db015=_0x18d84a[_0x111d10(0x125)]()),Cesium[_0x111d10(0x124)](_0x2db015,_0x9e23e4,_0x5ab70d);}Object[_0x17ea6b(0x13b)](SuperMapImageryProvider[_0x17ea6b(0x170)],{'url':{'get':function(){const _0x456a54=_0x17ea6b;return this[_0x456a54(0x163)];}},'tileWidth':{'get':function(){const _0x1cf4e6=_0x17ea6b;if(!this['_ready'])throw new DeveloperError(_0x1cf4e6(0x15d));return this[_0x1cf4e6(0x172)];}},'tileHeight':{'get':function(){const _0x421748=_0x17ea6b;if(!this['_ready'])throw new DeveloperError(_0x421748(0x177));return this['_tileHeight'];}},'tileFormat':{'get':function(){const _0x1b995b=_0x17ea6b;return this[_0x1b995b(0x148)];}},'maximumLevel':{'get':function(){const _0xe38a99=_0x17ea6b;if(!this['_ready'])throw new DeveloperError(_0xe38a99(0x187));return this[_0xe38a99(0x14e)]===0x1?this[_0xe38a99(0x13a)]:this[_0xe38a99(0x13a)]-0x1;}},'minimumLevel':{'get':function(){const _0x240516=_0x17ea6b;if(!this['_ready'])throw new DeveloperError('minimumLevel\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.');return this[_0x240516(0x12b)];}},'tilingScheme':{'get':function(){const _0x5bc80a=_0x17ea6b;if(!this[_0x5bc80a(0x175)])throw new DeveloperError(_0x5bc80a(0x18e));return this['_tilingScheme'];}},'rectangle':{'get':function(){const _0x5d7c4d=_0x17ea6b;if(!this['_ready'])throw new DeveloperError('rectangle\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.');return this[_0x5d7c4d(0x15c)];}},'errorEvent':{'get':function(){return this['_errorEvent'];}},'ready':{'get':function(){const _0x2e1e7a=_0x17ea6b;return this[_0x2e1e7a(0x175)];}},'credit':{'get':function(){const _0x4f55a1=_0x17ea6b;return this[_0x4f55a1(0x11e)];}},'hasAlphaChannel':{'get':function(){return !![];}},'readyPromise':{'get':function(){const _0x165096=_0x17ea6b;return this[_0x165096(0x167)];}},'tileDiscardPolicy':{'get':function(){const _0x293ffb=_0x17ea6b;return this[_0x293ffb(0x176)];}}}),SuperMapImageryProvider['prototype'][_0x17ea6b(0x173)]=function(_0x29fa04,_0x5dd66e,_0x1a8cf5){return undefined;};function loadImage(_0x321776,_0x59cb46){const _0x363a5c=_0x17ea6b;let _0x1c13cc=Cesium[_0x363a5c(0x142)][_0x363a5c(0x144)](_0x59cb46);if(_0x321776[_0x363a5c(0x11f)])return _0x1c13cc[_0x363a5c(0x13d)]({'preferBlob':!![],'preferImageBitmap':!![],'flipY':!![]});return _0x1c13cc[_0x363a5c(0x13d)]();}SuperMapImageryProvider[_0x17ea6b(0x170)][_0x17ea6b(0x18f)]=function(_0x1c9a5b,_0x460e7d,_0x2510f7,_0x168509){const _0x413428=_0x17ea6b;if(!this[_0x413428(0x175)])throw new Cesium['DeveloperError'](_0x413428(0x113));let _0x143044;if(this[_0x413428(0x145)])_0x143044=this[_0x413428(0x13c)][_0x413428(0x174)]({'url':this[_0x413428(0x14a)],'request':_0x168509,'templateValues':{'x':_0x1c9a5b,'y':_0x460e7d,'level':_0x2510f7,'fileExtension':this['_tileFormat']}});else {let _0x16f311=this[_0x413428(0x171)]===_0x413428(0x190)?this[_0x413428(0x160)][_0x2510f7+0x1]:this[_0x413428(0x160)][_0x2510f7];_0x143044=this['_resource']['getDerivedResource']({'url':this[_0x413428(0x14a)],'request':_0x168509,'templateValues':{'x':_0x1c9a5b,'y':_0x460e7d,'scale':_0x16f311},'queryParameters':{'transparent':!![],'cacheEnabled':!![],'_cache':!![],'width':0x100,'height':0x100,'redirect':![],'overlapDisplayed':![]}});}return loadImage(this,_0x143044);},SuperMapImageryProvider[_0x17ea6b(0x170)][_0x17ea6b(0x12a)]=function(){return undefined;};

    const _0x3361=['parse','getLevelMaximumGeometricError','defaultValue','275537KMcAEr','reject','_errorEvent','config','resolve','credit\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','createIfNeeded','available','_levels','Levels','when','IndexDatatype','endX','requestVertexNormals','queryFirstNode','zigZagDeltaDecode','Level','28921MwczbA','StartRow','hasWaterMask','documentElement','19USQsxx','519642uCLcfJ','getFloat64','quantized-mesh-1.0','subarray','buffer','statusCode','TilesBounds','Right','defineProperties','byteLength','string','1EwIJoO','_readyPromise','fetchArrayBuffer','_levelZeroMaximumGeometricError','options.url\x20is\x20required.','url','_availability','ellipsoid','_maximumLevel','hasVertexNormals','EndRow','getNumberOfYTilesAtLevel','availabilityLevels','appendForwardSlash','hasVertexNormals\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','Cartesian3','loadTileDataAvailability','indexOf','promise','1.0.0','_layers','Bounds','1bIuyyL','GeographicTilingScheme','push','tilingScheme\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','tileUrlTemplates','tileXYToRectangle','TileBounds','6502yBOlGC','_heightmapStructure','hasMetadata\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','Top','littleEndianExtensionSize','createTypedArrayFromArrayBuffer','credit','level','length','availability','804059WIocLp','hasWaterMask\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','_hasWaterMask','WATER_MASK','tms','DeveloperError','_credit','availabilityPromiseCache','Rectangle','StartCol','queryChildNodes','otherwise','defined','prototype','addAvailableTileRange','1NlUANK','isTileAvailable','defer','fetchXML','getEstimatedLevelZeroGeometricErrorForAHeightmap','TerrainProvider','requestTileGeometry\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','version','requestTileGeometry','application/vnd.quantized-mesh,application/octet-stream;q=0.9,*/*;q=0.01','_hasVertexNormals','_scheme','intersection','_heightmapWidth','_rectangle','Bottom','queryNumericValue','availabilityTilesLoaded','startY','_requestVertexNormals','resource','592544LvxIat','data/path/{z}/{x}/{y}.terrainz?v={version}','requestMetadata','TileAvailability','_requestMetadata','queryNumericAttribute','BoundingSphere','requestWaterMask','getUint8','floor','_tilingScheme','isHeightmap','getUint32','QuantizedMeshTerrainData','getFloat32','38aQgxuv','fromDegrees','Available','hasMetadata','AttributeCompression','_hasMetadata','getDerivedResource','_requestWaterMask','then','availability\x20must\x20not\x20be\x20called\x20before\x20the\x20terrain\x20provider\x20is\x20ready.','startX','_tileCredits','_ready','_ellipsoid','684053PMJWra','BYTES_PER_ELEMENT'];const _0x3ab7d8=_0x5821;(function(_0x2908fb,_0x5491b9){const _0x366d31=_0x5821;while(!![]){try{const _0x15b089=-parseInt(_0x366d31(0x1ff))*parseInt(_0x366d31(0x203))+parseInt(_0x366d31(0x25a))+parseInt(_0x366d31(0x225))*parseInt(_0x366d31(0x1ee))+parseInt(_0x366d31(0x1e9))*parseInt(_0x366d31(0x245))+parseInt(_0x366d31(0x204))+-parseInt(_0x366d31(0x1db))*parseInt(_0x366d31(0x22c))+parseInt(_0x366d31(0x20f))*-parseInt(_0x366d31(0x236));if(_0x15b089===_0x5491b9)break;else _0x2908fb['push'](_0x2908fb['shift']());}catch(_0x3a242d){_0x2908fb['push'](_0x2908fb['shift']());}}}(_0x3361,0x73066));function _0x5821(_0xd3de4,_0x3c8989){_0xd3de4=_0xd3de4-0x1d1;let _0x336119=_0x3361[_0xd3de4];return _0x336119;}function LayerInformation(_0x417d99){const _0x47780b=_0x5821;this[_0x47780b(0x259)]=_0x417d99['resource'],this['version']=_0x417d99[_0x47780b(0x24c)],this[_0x47780b(0x1d7)]=_0x417d99['isHeightmap'],this[_0x47780b(0x229)]=_0x417d99[_0x47780b(0x229)],this['availability']=_0x417d99[_0x47780b(0x235)],this['hasVertexNormals']=_0x417d99[_0x47780b(0x218)],this[_0x47780b(0x201)]=_0x417d99[_0x47780b(0x201)],this[_0x47780b(0x1de)]=_0x417d99[_0x47780b(0x1de)],this[_0x47780b(0x21b)]=_0x417d99[_0x47780b(0x21b)],this[_0x47780b(0x256)]=_0x417d99[_0x47780b(0x256)],this['littleEndianExtensionSize']=_0x417d99[_0x47780b(0x230)],this[_0x47780b(0x256)]=_0x417d99['availabilityTilesLoaded'],this[_0x47780b(0x23d)]={};}let QuantizedMeshExtensionIds={'OCT_VERTEX_NORMALS':0x1,'WATER_MASK':0x2,'METADATA':0x4};function SuperMapTerrainProvider(_0x35b07d){const _0x1a549a=_0x5821;if(!Cesium[_0x1a549a(0x242)](_0x35b07d)||!Cesium[_0x1a549a(0x242)](_0x35b07d[_0x1a549a(0x214)]))throw new Cesium[(_0x1a549a(0x23b))](_0x1a549a(0x213));this[_0x1a549a(0x252)]=0x41,this[_0x1a549a(0x22d)]=undefined,this[_0x1a549a(0x238)]=![],this['_hasVertexNormals']=![],this[_0x1a549a(0x1e8)]=_0x35b07d[_0x1a549a(0x216)],this['_requestVertexNormals']=Cesium[_0x1a549a(0x1ed)](_0x35b07d[_0x1a549a(0x1fb)],![]),this[_0x1a549a(0x1e2)]=Cesium[_0x1a549a(0x1ed)](_0x35b07d[_0x1a549a(0x1d3)],![]),this[_0x1a549a(0x25e)]=Cesium['defaultValue'](_0x35b07d[_0x1a549a(0x25c)],!![]),this[_0x1a549a(0x1f0)]=new Cesium['Event']();let _0x486496=_0x35b07d[_0x1a549a(0x232)];typeof _0x486496===_0x1a549a(0x20e)&&(_0x486496=new Cesium['Credit'](_0x486496));this[_0x1a549a(0x23c)]=_0x486496,this[_0x1a549a(0x250)]=_0x1a549a(0x23a),this[_0x1a549a(0x215)]=undefined;let _0x1d9ef6=Cesium[_0x1a549a(0x1f8)][_0x1a549a(0x247)]();this[_0x1a549a(0x1e7)]=![],this['_readyPromise']=_0x1d9ef6,this[_0x1a549a(0x1e6)]=undefined;let _0x19c618=this,_0x2d7f48,_0x17c8cb=this[_0x1a549a(0x223)]=[],_0x20c65f=[],_0x476aff=0x0;Cesium[_0x1a549a(0x1f8)](_0x35b07d[_0x1a549a(0x214)])[_0x1a549a(0x1e3)](function(_0x3db521){const _0x42e176=_0x1a549a;_0x2d7f48=Cesium['Resource'][_0x42e176(0x1f4)](_0x3db521),_0x2d7f48[_0x42e176(0x21c)]();let _0x1025ba=_0x2d7f48[_0x42e176(0x1e1)]({'url':_0x42e176(0x1f1)});_0x1025ba[_0x42e176(0x248)]()[_0x42e176(0x1e3)](_0x4f7e0a)[_0x42e176(0x241)](_0x4e6ac9);})['otherwise'](function(_0xbd2f63){const _0x2644ab=_0x1a549a;_0x1d9ef6[_0x2644ab(0x1ef)](_0xbd2f63);});function _0x4f7e0a(_0x56c8b2){const _0x5a4806=_0x1a549a;let _0x1aad9a=_0x56c8b2[_0x5a4806(0x202)],_0x29c986=_0x5a4806(0x25b);_0x19c618['_tilingScheme']=new Cesium[(_0x5a4806(0x226))]({'numberOfLevelZeroTilesX':0x2,'numberOfLevelZeroTilesY':0x1,'ellipsoid':_0x19c618[_0x5a4806(0x1e8)]}),_0x19c618[_0x5a4806(0x212)]=Cesium[_0x5a4806(0x24a)][_0x5a4806(0x249)](_0x19c618[_0x5a4806(0x1d6)][_0x5a4806(0x216)],_0x19c618['_heightmapWidth'],_0x19c618[_0x5a4806(0x1d6)]['getNumberOfXTilesAtLevel'](0x0));let _0x31c735=XMLParser['queryFirstNode'](_0x1aad9a,_0x5a4806(0x224),undefined),_0x948e57=XMLParser['queryNumericValue'](_0x31c735,'Left',undefined),_0x17d2c2=XMLParser['queryNumericValue'](_0x31c735,_0x5a4806(0x20b),undefined),_0x154605=XMLParser[_0x5a4806(0x255)](_0x31c735,_0x5a4806(0x254),undefined),_0x2b28e5=XMLParser['queryNumericValue'](_0x31c735,_0x5a4806(0x22f),undefined);Cesium[_0x5a4806(0x242)](_0x948e57)&&Cesium['defined'](_0x17d2c2)&&Cesium[_0x5a4806(0x242)](_0x154605)&&Cesium[_0x5a4806(0x242)](_0x2b28e5)&&(_0x19c618[_0x5a4806(0x253)]=Cesium[_0x5a4806(0x23e)][_0x5a4806(0x1dc)](_0x948e57,_0x154605,_0x17d2c2,_0x2b28e5));let _0xdb83c6=XMLParser['queryFirstNode'](_0x1aad9a,_0x5a4806(0x1f7),undefined),_0x84747f=XMLParser[_0x5a4806(0x240)](_0xdb83c6,_0x5a4806(0x1fe),undefined),_0x25fb6a=[];for(let _0x4b28c1=0x0,_0x3040cd=_0x84747f[_0x5a4806(0x234)];_0x4b28c1<_0x3040cd;_0x4b28c1++){let _0x42fcf0=parseInt(_0x84747f[_0x4b28c1]['textContent']);_0x25fb6a[_0x5a4806(0x227)](_0x42fcf0);}let _0x3a7fc7=_0x25fb6a[0x0],_0x16fe19=_0x25fb6a[_0x25fb6a[_0x5a4806(0x234)]-0x1];_0x19c618['_levels']=_0x25fb6a;let _0x466ba9=XMLParser[_0x5a4806(0x1fc)](_0x1aad9a,_0x5a4806(0x1dd),undefined);if(_0x466ba9){let _0x262218=XMLParser[_0x5a4806(0x240)](_0x466ba9,_0x5a4806(0x20a),undefined),_0xae2a54=_0x3a7fc7>0x0?_0x25fb6a[_0x5a4806(0x234)]+0x1:_0x25fb6a[_0x5a4806(0x234)],_0x3dc883=new Array(_0xae2a54);for(let _0x2edea1=0x0;_0x2edea1<_0x3a7fc7;_0x2edea1++){_0x3dc883[_0x2edea1]=[];}for(let _0x3e06e3=0x0,_0xb7701b=_0x262218[_0x5a4806(0x234)];_0x3e06e3<_0xb7701b;_0x3e06e3++){let _0x7516c1=_0x262218[_0x3e06e3],_0x454489=XMLParser[_0x5a4806(0x1d1)](_0x7516c1,_0x5a4806(0x233),undefined),_0x5d7a3b=[];_0x3dc883[_0x454489]=_0x5d7a3b;let _0x1b4206=XMLParser[_0x5a4806(0x240)](_0x7516c1,_0x5a4806(0x22b),undefined);for(let _0x59db6a=0x0,_0x47afa1=_0x1b4206['length'];_0x59db6a<_0x47afa1;_0x59db6a++){let _0x274e7f=_0x1b4206[_0x59db6a],_0x1302a0=XMLParser['queryNumericValue'](_0x274e7f,_0x5a4806(0x23f),undefined),_0x5b8493=XMLParser[_0x5a4806(0x255)](_0x274e7f,_0x5a4806(0x200),undefined),_0xb17f5=XMLParser[_0x5a4806(0x255)](_0x274e7f,'EndCol',undefined),_0x2a5fdd=XMLParser['queryNumericValue'](_0x274e7f,_0x5a4806(0x219),undefined);_0x5d7a3b[_0x5a4806(0x227)]({'startX':_0x1302a0,'startY':_0x5b8493,'endX':_0xb17f5,'endY':_0x2a5fdd});}}_0x3dc883[0x0]=[{'startX':0x0,'startY':0x0,'endX':0x1,'endY':0x1}];let _0x596951=new Cesium['TileAvailability'](_0x19c618[_0x5a4806(0x1d6)],_0x16fe19);for(let _0x467f42=0x0;_0x467f42<_0x3dc883[_0x5a4806(0x234)];++_0x467f42){let _0x542def=_0x3dc883[_0x467f42],_0x215402=_0x19c618['_tilingScheme'][_0x5a4806(0x21a)](_0x467f42);!Cesium[_0x5a4806(0x242)](_0x20c65f[_0x467f42])&&(_0x20c65f[_0x467f42]=[]);if(Cesium[_0x5a4806(0x242)](_0x542def))for(let _0xdd959=0x0;_0xdd959<_0x542def['length'];++_0xdd959){let _0x10186a=_0x542def[_0xdd959],_0x6ff533=_0x215402-_0x10186a['endY']-0x1,_0x3fd5ab=_0x215402-_0x10186a[_0x5a4806(0x257)]-0x1;_0x20c65f[_0x467f42][_0x5a4806(0x227)]([_0x10186a[_0x5a4806(0x1e5)],_0x6ff533,_0x10186a['endX'],_0x3fd5ab]),_0x596951['addAvailableTileRange'](_0x467f42,_0x10186a[_0x5a4806(0x1e5)],_0x6ff533,_0x10186a['endX'],_0x3fd5ab);}}_0x19c618['_availability']=_0x596951;}_0x17c8cb[_0x5a4806(0x227)](new LayerInformation({'resource':_0x2d7f48,'version':_0x5a4806(0x222),'isHeightmap':![],'tileUrlTemplates':_0x29c986,'availability':undefined,'hasVertexNormals':![],'hasWaterMask':![],'hasMetadata':![],'availabilityLevels':0x0,'availabilityTilesLoaded':![],'littleEndianExtensionSize':!![]}));let _0x33a317=_0x20c65f[_0x5a4806(0x234)];if(_0x33a317>0x0){let _0x1a09ac=_0x19c618[_0x5a4806(0x215)]=new Cesium[(_0x5a4806(0x25d))](_0x19c618[_0x5a4806(0x1d6)],_0x476aff);for(let _0x2c0739=0x0;_0x2c0739<_0x33a317;++_0x2c0739){let _0x43f201=_0x20c65f[_0x2c0739];for(let _0x502444=0x0;_0x502444<_0x43f201[_0x5a4806(0x234)];++_0x502444){let _0x1bcba4=_0x43f201[_0x502444];_0x1a09ac[_0x5a4806(0x244)](_0x2c0739,_0x1bcba4[0x0],_0x1bcba4[0x1],_0x1bcba4[0x2],_0x1bcba4[0x3]);}}}_0x19c618[_0x5a4806(0x1e7)]=!![],_0x19c618[_0x5a4806(0x210)][_0x5a4806(0x1f2)](!![]);}function _0x4e6ac9(_0x47241f){const _0x28dde5=_0x1a549a;Cesium[_0x28dde5(0x242)](_0x47241f)&&_0x47241f[_0x28dde5(0x209)]===0x194&&_0x4f7e0a({'tilejson':'2.1.0','format':_0x28dde5(0x206),'version':'1.0.0','scheme':_0x28dde5(0x23a),'tiles':[_0x28dde5(0x25b)]});}}Object[_0x3ab7d8(0x20c)](SuperMapTerrainProvider[_0x3ab7d8(0x243)],{'errorEvent':{'get':function(){const _0x581b6b=_0x3ab7d8;return this[_0x581b6b(0x1f0)];}},'credit':{'get':function(){const _0x400b6a=_0x3ab7d8;if(!this['_ready'])throw new Cesium[(_0x400b6a(0x23b))](_0x400b6a(0x1f3));return this[_0x400b6a(0x23c)];}},'tilingScheme':{'get':function(){const _0x45227a=_0x3ab7d8;if(!this[_0x45227a(0x1e7)])throw new Cesium[(_0x45227a(0x23b))](_0x45227a(0x228));return this[_0x45227a(0x1d6)];}},'ready':{'get':function(){return this['_ready'];}},'readyPromise':{'get':function(){const _0x55c457=_0x3ab7d8;return this[_0x55c457(0x210)][_0x55c457(0x221)];}},'hasWaterMask':{'get':function(){const _0x56f86f=_0x3ab7d8;if(!this['_ready'])throw new Cesium['DeveloperError'](_0x56f86f(0x237));return this[_0x56f86f(0x238)]&&this['_requestWaterMask'];}},'hasVertexNormals':{'get':function(){const _0x1f400b=_0x3ab7d8;if(!this[_0x1f400b(0x1e7)])throw new Cesium[(_0x1f400b(0x23b))](_0x1f400b(0x21d));return this[_0x1f400b(0x24f)]&&this['_requestVertexNormals'];}},'hasMetadata':{'get':function(){const _0x33ba99=_0x3ab7d8;if(!this[_0x33ba99(0x1e7)])throw new Cesium[(_0x33ba99(0x23b))](_0x33ba99(0x22e));return this[_0x33ba99(0x1e0)]&&this[_0x33ba99(0x25e)];}},'requestVertexNormals':{'get':function(){const _0x675022=_0x3ab7d8;return this[_0x675022(0x258)];}},'requestWaterMask':{'get':function(){const _0x2090ac=_0x3ab7d8;return this[_0x2090ac(0x1e2)];}},'requestMetadata':{'get':function(){const _0x189823=_0x3ab7d8;return this[_0x189823(0x25e)];}},'availability':{'get':function(){const _0x16f8d4=_0x3ab7d8;if(!this[_0x16f8d4(0x1e7)])throw new Cesium[(_0x16f8d4(0x23b))](_0x16f8d4(0x1e4));return this['_availability'];}}});function createQuantizedMeshTerrainData(_0x5929a7,_0x1b86fa,_0x2d882c,_0xc4e1af,_0x1047e1,_0xe7c509){const _0x14205a=_0x3ab7d8;let _0x106acf=_0xe7c509[_0x14205a(0x230)],_0x5a6249=0x0,_0x56b1dc=0x3,_0x3cb8b4=_0x56b1dc+0x1,_0xa9d75d=Float64Array[_0x14205a(0x1ea)]*_0x56b1dc,_0x10b402=Float64Array['BYTES_PER_ELEMENT']*_0x3cb8b4,_0x2bcf1c=0x3,_0x405fc6=Uint16Array[_0x14205a(0x1ea)]*_0x2bcf1c,_0x30ffbb=0x3,_0x295a46=Uint16Array[_0x14205a(0x1ea)],_0x272b26=_0x295a46*_0x30ffbb,_0x140385=new DataView(_0x1b86fa),_0x1f8c95=new Cesium['Cartesian3'](_0x140385[_0x14205a(0x205)](_0x5a6249,!![]),_0x140385[_0x14205a(0x205)](_0x5a6249+0x8,!![]),_0x140385['getFloat64'](_0x5a6249+0x10,!![]));_0x5a6249+=_0xa9d75d;let _0x3b682c=_0x140385[_0x14205a(0x1da)](_0x5a6249,!![]);_0x5a6249+=Float32Array[_0x14205a(0x1ea)];let _0x2048cb=_0x140385[_0x14205a(0x1da)](_0x5a6249,!![]);_0x5a6249+=Float32Array[_0x14205a(0x1ea)];let _0x1293e2=new Cesium[(_0x14205a(0x1d2))](new Cesium[(_0x14205a(0x21e))](_0x140385[_0x14205a(0x205)](_0x5a6249,!![]),_0x140385[_0x14205a(0x205)](_0x5a6249+0x8,!![]),_0x140385[_0x14205a(0x205)](_0x5a6249+0x10,!![])),_0x140385[_0x14205a(0x205)](_0x5a6249+_0xa9d75d,!![]));_0x5a6249+=_0x10b402;let _0x5e3c9c=new Cesium[(_0x14205a(0x21e))](_0x140385[_0x14205a(0x205)](_0x5a6249,!![]),_0x140385[_0x14205a(0x205)](_0x5a6249+0x8,!![]),_0x140385[_0x14205a(0x205)](_0x5a6249+0x10,!![]));_0x5a6249+=_0xa9d75d;let _0x5b993b=_0x140385[_0x14205a(0x1d8)](_0x5a6249,!![]);_0x5a6249+=Uint32Array[_0x14205a(0x1ea)];let _0x16c9f4=new Uint16Array(_0x1b86fa,_0x5a6249,_0x5b993b*0x3);_0x5a6249+=_0x5b993b*_0x405fc6;_0x5b993b>0x40*0x400&&(_0x295a46=Uint32Array[_0x14205a(0x1ea)],_0x272b26=_0x295a46*_0x30ffbb);let _0x95fcff=_0x16c9f4[_0x14205a(0x207)](0x0,_0x5b993b),_0x336ca0=_0x16c9f4['subarray'](_0x5b993b,0x2*_0x5b993b),_0x1e20a3=_0x16c9f4[_0x14205a(0x207)](_0x5b993b*0x2,0x3*_0x5b993b);Cesium[_0x14205a(0x1df)][_0x14205a(0x1fd)](_0x95fcff,_0x336ca0,_0x1e20a3);_0x5a6249%_0x295a46!==0x0&&(_0x5a6249+=_0x295a46-_0x5a6249%_0x295a46);let _0x5836fd=_0x140385[_0x14205a(0x1d8)](_0x5a6249,!![]);_0x5a6249+=Uint32Array[_0x14205a(0x1ea)];let _0x312e03=Cesium['IndexDatatype']['createTypedArrayFromArrayBuffer'](_0x5b993b,_0x1b86fa,_0x5a6249,_0x5836fd*_0x30ffbb);_0x5a6249+=_0x5836fd*_0x272b26;let _0x522179=0x0,_0x13ef23=_0x312e03[_0x14205a(0x234)];for(let _0xe372f6=0x0;_0xe372f6<_0x13ef23;++_0xe372f6){let _0x22c9f2=_0x312e03[_0xe372f6];_0x312e03[_0xe372f6]=_0x522179-_0x22c9f2,_0x22c9f2===0x0&&++_0x522179;}let _0x148ac3=_0x140385[_0x14205a(0x1d8)](_0x5a6249,!![]);_0x5a6249+=Uint32Array['BYTES_PER_ELEMENT'];let _0x5a1abf=Cesium[_0x14205a(0x1f9)]['createTypedArrayFromArrayBuffer'](_0x5b993b,_0x1b86fa,_0x5a6249,_0x148ac3);_0x5a6249+=_0x148ac3*_0x295a46;let _0x2476ec=_0x140385[_0x14205a(0x1d8)](_0x5a6249,!![]);_0x5a6249+=Uint32Array[_0x14205a(0x1ea)];let _0x47d058=Cesium[_0x14205a(0x1f9)][_0x14205a(0x231)](_0x5b993b,_0x1b86fa,_0x5a6249,_0x2476ec);_0x5a6249+=_0x2476ec*_0x295a46;let _0x140fac=_0x140385['getUint32'](_0x5a6249,!![]);_0x5a6249+=Uint32Array[_0x14205a(0x1ea)];let _0x29bc1e=Cesium[_0x14205a(0x1f9)][_0x14205a(0x231)](_0x5b993b,_0x1b86fa,_0x5a6249,_0x140fac);_0x5a6249+=_0x140fac*_0x295a46;let _0x7a9879=_0x140385[_0x14205a(0x1d8)](_0x5a6249,!![]);_0x5a6249+=Uint32Array[_0x14205a(0x1ea)];let _0x865059=Cesium[_0x14205a(0x1f9)][_0x14205a(0x231)](_0x5b993b,_0x1b86fa,_0x5a6249,_0x7a9879);_0x5a6249+=_0x7a9879*_0x295a46;let _0xac6fc3,_0x1bc403;while(_0x5a6249<_0x140385[_0x14205a(0x20d)]){let _0x48b1c9=_0x140385[_0x14205a(0x1d4)](_0x5a6249,!![]);_0x5a6249+=Uint8Array[_0x14205a(0x1ea)];let _0x281796=_0x140385[_0x14205a(0x1d8)](_0x5a6249,_0x106acf);_0x5a6249+=Uint32Array[_0x14205a(0x1ea)];if(_0x48b1c9===QuantizedMeshExtensionIds['OCT_VERTEX_NORMALS']&&_0x5929a7[_0x14205a(0x258)])_0xac6fc3=new Uint8Array(_0x1b86fa,_0x5a6249,_0x5b993b*0x2);else {if(_0x48b1c9===QuantizedMeshExtensionIds[_0x14205a(0x239)]&&_0x5929a7[_0x14205a(0x1e2)])_0x1bc403=new Uint8Array(_0x1b86fa,_0x5a6249,_0x281796);else {if(_0x48b1c9===QuantizedMeshExtensionIds['METADATA']&&_0x5929a7[_0x14205a(0x25e)]){let _0x1773ab=_0x140385[_0x14205a(0x1d8)](_0x5a6249,!![]);if(_0x1773ab>0x0){let _0x105c5e=Cesium['getStringFromTypedArray'](new Uint8Array(_0x1b86fa),_0x5a6249+Uint32Array['BYTES_PER_ELEMENT'],_0x1773ab),_0x36fed9=JSON[_0x14205a(0x1eb)](_0x105c5e),_0x16cf06=_0x36fed9[_0x14205a(0x1f5)];if(Cesium[_0x14205a(0x242)](_0x16cf06))for(let _0x50d5dd=0x0;_0x50d5dd<_0x16cf06[_0x14205a(0x234)];++_0x50d5dd){let _0x4c0f1c=_0x2d882c+_0x50d5dd+0x1,_0x6b2b44=_0x16cf06[_0x50d5dd],_0x40b7b1=_0x5929a7[_0x14205a(0x1d6)][_0x14205a(0x21a)](_0x4c0f1c);for(let _0xe3f513=0x0;_0xe3f513<_0x6b2b44[_0x14205a(0x234)];++_0xe3f513){let _0x5b8ea8=_0x6b2b44[_0xe3f513],_0x3a012a=_0x40b7b1-_0x5b8ea8['endY']-0x1,_0xeca937=_0x40b7b1-_0x5b8ea8[_0x14205a(0x257)]-0x1;_0x5929a7['availability'][_0x14205a(0x244)](_0x4c0f1c,_0x5b8ea8[_0x14205a(0x1e5)],_0x3a012a,_0x5b8ea8[_0x14205a(0x1fa)],_0xeca937),_0xe7c509['availability'][_0x14205a(0x244)](_0x4c0f1c,_0x5b8ea8[_0x14205a(0x1e5)],_0x3a012a,_0x5b8ea8[_0x14205a(0x1fa)],_0xeca937);}}}_0xe7c509[_0x14205a(0x256)][_0x14205a(0x244)](_0x2d882c,_0xc4e1af,_0x1047e1,_0xc4e1af,_0x1047e1);}}}_0x5a6249+=_0x281796;}let _0x2c7ac6=_0x5929a7[_0x14205a(0x1ec)](_0x2d882c)*0x5,_0x27dd89=_0x5929a7['_tilingScheme'][_0x14205a(0x22a)](_0xc4e1af,_0x1047e1,_0x2d882c),_0x2ee231=Cesium['OrientedBoundingBox']['fromRectangle'](_0x27dd89,_0x3b682c,_0x2048cb,_0x5929a7['_tilingScheme'][_0x14205a(0x216)]);return new Cesium[(_0x14205a(0x1d9))]({'center':_0x1f8c95,'minimumHeight':_0x3b682c,'maximumHeight':_0x2048cb,'boundingSphere':_0x1293e2,'orientedBoundingBox':_0x2ee231,'horizonOcclusionPoint':_0x5e3c9c,'quantizedVertices':_0x16c9f4,'encodedNormals':_0xac6fc3,'indices':_0x312e03,'westIndices':_0x5a1abf,'southIndices':_0x47d058,'eastIndices':_0x29bc1e,'northIndices':_0x865059,'westSkirtHeight':_0x2c7ac6,'southSkirtHeight':_0x2c7ac6,'eastSkirtHeight':_0x2c7ac6,'northSkirtHeight':_0x2c7ac6,'childTileMask':0xf,'waterMask':_0x1bc403,'credits':_0x5929a7[_0x14205a(0x1e6)]});}SuperMapTerrainProvider[_0x3ab7d8(0x243)][_0x3ab7d8(0x24d)]=function(_0x11fed5,_0x5a6825,_0x229beb,_0x570881){const _0x27a38a=_0x3ab7d8;if(!this[_0x27a38a(0x1e7)])throw new Cesium['DeveloperError'](_0x27a38a(0x24b));if(_0x229beb===0x0){let _0x229df0=new Uint16Array(0x40*0x40*0x3);for(let _0x67235d=0x0;_0x67235d<0x40;_0x67235d++){for(let _0x1bffa4=0x0;_0x1bffa4<0x40;_0x1bffa4++){_0x229df0[_0x67235d*0x40+_0x1bffa4]=Math[_0x27a38a(0x1d5)](_0x67235d*0x7fff/0x3f),_0x229df0[0x40*0x40+_0x67235d*0x40+_0x1bffa4]=Math[_0x27a38a(0x1d5)](_0x1bffa4*0x7fff/0x3f),_0x229df0[0x2*0x40*0x40+_0x67235d*0x40+_0x1bffa4]=0x0;}}let _0x15aabd=new Uint16Array(0x3f*0x3f*0x6);for(let _0x38784e=0x0;_0x38784e<0x3f;_0x38784e++){for(let _0x14d4f8=0x0;_0x14d4f8<0x3f;_0x14d4f8++){_0x15aabd[0x6*(_0x38784e*0x3f+_0x14d4f8)]=_0x38784e*0x40+_0x14d4f8,_0x15aabd[0x6*(_0x38784e*0x3f+_0x14d4f8)+0x1]=(_0x38784e+0x1)*0x40+_0x14d4f8+0x1,_0x15aabd[0x6*(_0x38784e*0x3f+_0x14d4f8)+0x2]=_0x38784e*0x40+_0x14d4f8+0x1,_0x15aabd[0x6*(_0x38784e*0x3f+_0x14d4f8)+0x3]=(_0x38784e+0x1)*0x40+_0x14d4f8,_0x15aabd[0x6*(_0x38784e*0x3f+_0x14d4f8)+0x4]=(_0x38784e+0x1)*0x40+_0x14d4f8+0x1,_0x15aabd[0x6*(_0x38784e*0x3f+_0x14d4f8)+0x5]=_0x38784e*0x40+_0x14d4f8;}}let _0x53725=new Uint16Array(0x0),_0x497dfb=new Cesium[(_0x27a38a(0x21e))](NaN,-Infinity,NaN),_0x33d95a=new Cesium[(_0x27a38a(0x21e))](0x0,-3189068.5,0x0);return _0x11fed5===0x1&&(_0x33d95a['y']=3189068.5,_0x497dfb['y']=Infinity),Cesium[_0x27a38a(0x1f8)][_0x27a38a(0x1f2)](new Cesium['QuantizedMeshTerrainData']({'center':_0x33d95a,'minimumHeight':0x0,'maximumHeight':0x0,'boundingSphere':new Cesium[(_0x27a38a(0x1d2))](_0x33d95a,9567205.5),'horizonOcclusionPoint':_0x497dfb,'quantizedVertices':_0x229df0,'indices':_0x15aabd,'westIndices':_0x53725,'southIndices':_0x53725,'eastIndices':_0x53725,'northIndices':_0x53725,'westSkirtHeight':0x0,'southSkirtHeight':0x0,'eastSkirtHeight':0x0,'northSkirtHeight':0x0,'childTileMask':0xf,'invalid':![],'hasInvalid':![]}));}let _0x5e930d=this[_0x27a38a(0x223)],_0x479702,_0x3ffdbc=_0x5e930d[_0x27a38a(0x234)];if(_0x3ffdbc===0x1)_0x479702=_0x5e930d[0x0];else for(let _0x463c9f=0x0;_0x463c9f<_0x3ffdbc;++_0x463c9f){let _0x20bb29=_0x5e930d[_0x463c9f];if(!Cesium['defined'](_0x20bb29[_0x27a38a(0x235)])||_0x20bb29[_0x27a38a(0x235)][_0x27a38a(0x246)](_0x229beb,_0x11fed5,_0x5a6825)){_0x479702=_0x20bb29;break;}}return requestTileGeometry(this,_0x11fed5,_0x5a6825,_0x229beb,_0x479702,_0x570881);};function requestTileGeometry(_0x572295,_0x48d53e,_0x25bc88,_0x3e0e1e,_0x33c822,_0x39d826){const _0x3fd7eb=_0x3ab7d8;let _0x4f8a63=_0x33c822[_0x3fd7eb(0x229)],_0x7887d8;if(!_0x572295[_0x3fd7eb(0x250)]||_0x572295[_0x3fd7eb(0x250)]===_0x3fd7eb(0x23a)){let _0x5ea187=_0x572295[_0x3fd7eb(0x1d6)][_0x3fd7eb(0x21a)](_0x3e0e1e);_0x7887d8=_0x5ea187-_0x25bc88-0x1;}else _0x7887d8=_0x25bc88;let _0x176fd1=_0x4f8a63,_0x566258=_0x33c822[_0x3fd7eb(0x259)],_0x54cdd5={'Accept':_0x3fd7eb(0x24e)},_0x17892c=_0x566258['getDerivedResource']({'url':_0x176fd1,'templateValues':{'version':_0x33c822[_0x3fd7eb(0x24c)],'z':_0x3e0e1e,'x':_0x48d53e,'y':_0x7887d8},'headers':_0x54cdd5,'request':_0x39d826})[_0x3fd7eb(0x211)]();if(!Cesium['defined'](_0x17892c))return undefined;return _0x17892c[_0x3fd7eb(0x1e3)](function(_0x1dbe30){const _0x5f0104=_0x3fd7eb;return _0x1dbe30=_0x1f354f['inflate'](new Uint8Array(_0x1dbe30))[_0x5f0104(0x208)],createQuantizedMeshTerrainData(_0x572295,_0x1dbe30,_0x3e0e1e,_0x48d53e,_0x25bc88,_0x33c822);});}SuperMapTerrainProvider['prototype'][_0x3ab7d8(0x1ec)]=function(_0xc9f72b){const _0x248a15=_0x3ab7d8;return this[_0x248a15(0x212)]/(0x1<<_0xc9f72b);};let rectangleScratch=new Cesium[(_0x3ab7d8(0x23e))]();SuperMapTerrainProvider['prototype']['getTileDataAvailable']=function(_0xd35fa8,_0x45bc92,_0x19572c){const _0x425ada=_0x3ab7d8;if(_0x19572c!==0x0){if(this[_0x425ada(0x1f6)][_0x425ada(0x220)](_0x19572c)!==-0x1){let _0xecd530=this[_0x425ada(0x1d6)][_0x425ada(0x22a)](_0xd35fa8,_0x45bc92,_0x19572c),_0x427caa=Cesium['Rectangle'][_0x425ada(0x251)](this[_0x425ada(0x253)],_0xecd530,rectangleScratch);return Cesium[_0x425ada(0x242)](_0x427caa);}return ![];}if(!Cesium[_0x425ada(0x242)](this[_0x425ada(0x215)]))return undefined;if(_0x19572c>this[_0x425ada(0x215)][_0x425ada(0x217)])return ![];if(this[_0x425ada(0x215)][_0x425ada(0x246)](_0x19572c,_0xd35fa8,_0x45bc92))return !![];if(!this[_0x425ada(0x1e0)])return ![];return ![];},SuperMapTerrainProvider[_0x3ab7d8(0x243)][_0x3ab7d8(0x21f)]=function(_0x1b212d,_0x48aeca,_0x13b32d){};

    const _0x5294=['get','height','createElement','createLinearGradient','6SjSzqe','toCssColorString','rect','AssociativeArray','push','count','destroy','removeAll','clear','insert','40174GcoiAm','Math','178027qIHRlr','_dictTable','canvas','1FcODzI','Color','_sortKey','beginPath','addColorStop','27413Usitpk','length','1yLKFJy','value','12omqrFK','remove','clone','_imageBuffer','width','27763UDGTuY','fill','set','16VJCPzw','1325319OYyLoZ','7YhnwBx','19609YAGEim','_hash','EPSILON6','prototype','getContext','getColor','color','fillStyle','generateBuffer','592938cHCNzE'];const _0x2294e4=_0x188a;(function(_0x3bc6d3,_0x3a21dc){const _0x5b0b45=_0x188a;while(!![]){try{const _0x216603=parseInt(_0x5b0b45(0xa5))*parseInt(_0x5b0b45(0x9b))+-parseInt(_0x5b0b45(0xaa))*parseInt(_0x5b0b45(0xa7))+-parseInt(_0x5b0b45(0xb1))*parseInt(_0x5b0b45(0x96))+-parseInt(_0x5b0b45(0x8d))*-parseInt(_0x5b0b45(0x82))+-parseInt(_0x5b0b45(0xaf))*parseInt(_0x5b0b45(0x8a))+-parseInt(_0x5b0b45(0x87))*parseInt(_0x5b0b45(0x8c))+parseInt(_0x5b0b45(0x8b));if(_0x216603===_0x3a21dc)break;else _0x3bc6d3['push'](_0x3bc6d3['shift']());}catch(_0x9840f1){_0x3bc6d3['push'](_0x3bc6d3['shift']());}}}(_0x5294,0x611bd));function _0x188a(_0x3bed87,_0x1a23c8){_0x3bed87=_0x3bed87-0x81;let _0x52941b=_0x5294[_0x3bed87];return _0x52941b;}function ColorTable(){const _0x411bf3=_0x188a;this[_0x411bf3(0xa8)]=new Cesium[(_0x411bf3(0x9e))](),this[_0x411bf3(0x85)]=new Uint8Array(0x4*0x40*0x400),this[_0x411bf3(0xac)]=[];}function sortNumber(_0x30b8eb,_0x4332e1){return _0x30b8eb-_0x4332e1;}ColorTable[_0x2294e4(0x90)]['getItem']=function(_0x335e9f){const _0x3cfaaf=_0x2294e4;if(_0x335e9f>this[_0x3cfaaf(0xa8)]['values'][_0x3cfaaf(0xb0)]-0x1)return null;let _0xc74ba9=_0x335e9f;for(let _0x21ac6e in this[_0x3cfaaf(0xa8)][_0x3cfaaf(0x8e)]){if(_0xc74ba9>0x0){_0xc74ba9--;continue;}if(!_0x21ac6e)break;return {'altitude':_0x21ac6e,'color':this[_0x3cfaaf(0xa8)][_0x3cfaaf(0x97)](_0x21ac6e)};}return null;},ColorTable[_0x2294e4(0x90)][_0x2294e4(0xa0)]=function(){return this['_dictTable']['values']['length'];},ColorTable[_0x2294e4(0x90)][_0x2294e4(0xa4)]=function(_0x27f0d8,_0x1d0382){const _0x4f2ec2=_0x2294e4;let _0x106d4c=this['_dictTable'][_0x4f2ec2(0x97)](_0x27f0d8);if(_0x106d4c)return;let _0xcb8f7=Cesium[_0x4f2ec2(0xab)]['clone'](_0x1d0382,new Cesium[(_0x4f2ec2(0xab))]());this[_0x4f2ec2(0xa8)][_0x4f2ec2(0x89)](_0x27f0d8,_0xcb8f7);},ColorTable[_0x2294e4(0x90)]['remove']=function(_0x5df63a){const _0x32950a=_0x2294e4;return this[_0x32950a(0xa8)][_0x32950a(0x83)](_0x5df63a);},ColorTable[_0x2294e4(0x90)][_0x2294e4(0xa3)]=function(){const _0x43c371=_0x2294e4;this[_0x43c371(0xa8)]['removeAll']();},ColorTable[_0x2294e4(0x90)][_0x2294e4(0x95)]=function(){const _0x323f08=_0x2294e4;let _0x149802=[];for(let _0x16b112 in this['_dictTable'][_0x323f08(0x8e)]){if(!_0x16b112)continue;let _0x165888=this[_0x323f08(0xa8)][_0x323f08(0x97)](_0x16b112);_0x149802[_0x323f08(0x9f)]({'value':parseFloat(_0x16b112),'color':_0x165888});}if(_0x149802[_0x323f08(0xb0)]<0x2)return;for(let _0x2c2234=0x0,_0x39a05a=_0x149802[_0x323f08(0xb0)]-0x1;_0x2c2234<_0x39a05a;_0x2c2234++){let _0xd82ad1=_0x149802[_0x2c2234];for(let _0x5b02b6=_0x2c2234+0x1;_0x5b02b6<_0x149802[_0x323f08(0xb0)];_0x5b02b6++){let _0x291839=_0x149802[_0x5b02b6];if(_0xd82ad1[_0x323f08(0x81)]>_0x291839[_0x323f08(0x81)]){let _0x34b37b=Cesium[_0x323f08(0x84)](_0x149802[_0x2c2234],!![]);_0x149802[_0x2c2234]=Cesium[_0x323f08(0x84)](_0x149802[_0x5b02b6],!![]),_0x149802[_0x5b02b6]=_0x34b37b,_0xd82ad1=_0x149802[_0x2c2234];}}}let _0x41e2ce=_0x149802[0x0][_0x323f08(0x81)],_0x3121fb=_0x149802[_0x149802[_0x323f08(0xb0)]-0x1][_0x323f08(0x81)],_0x378f3d=_0x3121fb-_0x41e2ce,_0x4f4f7a=document[_0x323f08(0x99)](_0x323f08(0xa9));_0x4f4f7a[_0x323f08(0x86)]=0x400*0x10,_0x4f4f7a[_0x323f08(0x98)]=0x1;let _0x283ae9=_0x4f4f7a[_0x323f08(0x91)]('2d');_0x283ae9[_0x323f08(0xad)]();let _0x469fb7=_0x283ae9[_0x323f08(0x9a)](0x0,0x0,0x400*0x10,0x0);for(let _0x263fb9=0x0,_0x3b2741=_0x149802['length'];_0x263fb9<_0x3b2741;_0x263fb9++){_0x469fb7[_0x323f08(0xae)]((_0x149802[_0x263fb9]['value']-_0x41e2ce)/_0x378f3d,_0x149802[_0x263fb9][_0x323f08(0x93)][_0x323f08(0x9c)]());}_0x283ae9[_0x323f08(0x94)]=_0x469fb7,_0x283ae9[_0x323f08(0x9d)](0x0,0x0,_0x4f4f7a['width'],_0x4f4f7a[_0x323f08(0x98)]),_0x283ae9[_0x323f08(0x88)]();let _0x52e5f7=_0x283ae9['getImageData'](0x0,0x0,_0x4f4f7a[_0x323f08(0x86)],0x1)['data'];for(let _0x3c03a6=0x0;_0x3c03a6<0x10;_0x3c03a6++){for(let _0x2f7978=0x0;_0x2f7978<0x400*0x4;_0x2f7978++){this[_0x323f08(0x85)][_0x2f7978+_0x3c03a6*0x400*0x4*0x4]=_0x52e5f7[_0x2f7978+_0x3c03a6*0x400*0x4],this[_0x323f08(0x85)][_0x2f7978+_0x3c03a6*0x400*0x4*0x4+0x400*0x4]=_0x52e5f7[_0x2f7978+_0x3c03a6*0x400*0x4],this[_0x323f08(0x85)][_0x2f7978+_0x3c03a6*0x400*0x4*0x4+0x400*0x4*0x2]=_0x52e5f7[_0x2f7978+_0x3c03a6*0x400*0x4],this['_imageBuffer'][_0x2f7978+_0x3c03a6*0x400*0x4*0x4+0x400*0x4*0x3]=_0x52e5f7[_0x2f7978+_0x3c03a6*0x400*0x4];}}for(let _0x47d7ad in this[_0x323f08(0xa8)][_0x323f08(0x8e)]){this[_0x323f08(0xac)][_0x323f08(0x9f)](parseFloat(_0x47d7ad));}return this['_sortKey']['sort'](sortNumber),_0x4f4f7a;},ColorTable[_0x2294e4(0x90)][_0x2294e4(0x92)]=function(_0x15b5c7){const _0x322ea3=_0x2294e4;for(let _0x4e6139=0x0,_0x5e20ef=this[_0x322ea3(0xac)]['length'];_0x4e6139<_0x5e20ef;_0x4e6139++){if(this[_0x322ea3(0xac)][_0x4e6139]>=_0x15b5c7||Math['abs'](this[_0x322ea3(0xac)][_0x4e6139]-_0x15b5c7)<Cesium[_0x322ea3(0xa6)][_0x322ea3(0x8f)])return this[_0x322ea3(0xa8)][_0x322ea3(0x97)](this[_0x322ea3(0xac)][_0x4e6139]);}return undefined;},ColorTable[_0x2294e4(0x90)][_0x2294e4(0xa1)]=function(){const _0x40a791=_0x2294e4;this[_0x40a791(0xa8)][_0x40a791(0xa2)](),this[_0x40a791(0x85)]=null,this[_0x40a791(0xac)]=null;};

    exports.AlphaMode = _0x4b7475;
    exports.BillboardMode = _0x35abae;
    exports.CesiumExt = CesiumExt;
    exports.ClampMode = _0x558519;
    exports.ColorTable = ColorTable;
    exports.ContentState = _0x55d17f;
    exports.CustomTilingScheme = CustomTilingScheme;
    exports.DDSTexture = DDSTexture;
    exports.DepthFramebuffer = DepthFramebuffer;
    exports.DrawHandler = DrawHandler;
    exports.DrawMode = _0x12b805;
    exports.FillStyle = _0x36bab0;
    exports.Flatten = Flatten;
    exports.FresnelFp = _0xbce613;
    exports.FresnelVp = _0x36af2e;
    exports.Hypsometric = Hypsometric;
    exports.HypsometricSetting = HypsometricSetting;
    exports.HypsometricSettingEnum = _0x1ad93e;
    exports.InstanceMode = _0x3bf5ae;
    exports.MaterialExt = MaterialExt;
    exports.MaterialManager = MaterialManager;
    exports.MaterialPass = MaterialPass;
    exports.MeasureHandler = MeasureHandler;
    exports.MeasureMode = _0x52363d;
    exports.ModelEdgeFp = _0x2f06d2;
    exports.ModelEdgeVp = _0x147e5b;
    exports.NoLightNoTextureFS = _0x1642f4;
    exports.NoLightNoTextureVS = _0x31ac03;
    exports.OperationType = _0x33d894;
    exports.PLANECLIPMODE = _0x4928db;
    exports.ProgramDefines = _0x220dee;
    exports.RangeMode = _0x33e663;
    exports.RasterRegion = RasterRegion;
    exports.RasterRegionFS = _0x3c5eb4;
    exports.RasterRegionVS = _0x316ed7;
    exports.ReflectFramebuffer = ReflectFramebuffer;
    exports.RenderEntity = RenderEntity;
    exports.RenderTarget = RenderTarget;
    exports.S3MBlockCache = S3MBlockCache;
    exports.S3MBlockContentParser = S3MBlockContentParser;
    exports.S3MBlockParser = S3MBlockParser;
    exports.S3MCacheFileRenderEntity = S3MCacheFileRenderEntity;
    exports.S3MCompressType = S3MCompressType$1;
    exports.S3MContentFactory = S3MContentFactory;
    exports.S3MContentParser = S3MContentParser;
    exports.S3MCreateIndexJob = S3MCreateIndexBufferJob;
    exports.S3MCreateShaderProgramJob = S3MCreateShaderProgramJob;
    exports.S3MCreateVertexJob = S3MCreateVertexJob;
    exports.S3MEdgeProcessor = S3MEdgeProcessor;
    exports.S3MLayerCache = S3MLayerCache;
    exports.S3MLayerScheduler = S3MLayerScheduler;
    exports.S3MObliqueRenderEntity = S3MObliqueRenderEntity;
    exports.S3MPixelFormat = _0x3065af;
    exports.S3MPointCloudFS = _0x5c9879;
    exports.S3MPointCloudRenderEntity = S3MPointCloudRenderEntity;
    exports.S3MPointCloudVS = _0x2367d8;
    exports.S3MTile = S3MTile;
    exports.S3MTilesFS = _0x4d46c8;
    exports.S3MTilesLayer = S3MTilesLayer;
    exports.S3MTilesNoLightFS = _0x1ccff5;
    exports.S3MTilesNoLightVS = _0x4b0dcb;
    exports.S3MTilesVS = _0x2bfa20;
    exports.S3MWaterRenderEntity = S3MWaterRenderEntity;
    exports.S3ModelOldParser = S3ModelOldParser;
    exports.S3ModelParser = S3ModelParser;
    exports.Style3D = Style3D;
    exports.SubTextureManager = SubTextureManager;
    exports.SubTextureUploadJob = SubTextureUploadJob;
    exports.SuperMapImageryProvider = SuperMapImageryProvider;
    exports.SuperMapTerrainProvider = SuperMapTerrainProvider;
    exports.TextureManager = TextureManager;
    exports.VertexCompressOption = _0x5aa24d;
    exports.ViewShed3D = ViewShed3D;
    exports.ViewShedAnalysisFS = _0x2b9b35;
    exports.ViewShedAnalysisVS = _0x453feb;
    exports.XmlParser = XMLParser;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
