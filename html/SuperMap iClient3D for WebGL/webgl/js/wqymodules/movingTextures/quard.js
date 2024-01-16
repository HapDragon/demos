/**
 * Created by wqy
 * Date 2022/7/12 8:06
 * Description 用完全自定义shader的方式运行个几秒就会报错 说是contextlost 不知道啥原因，也没办法原地恢复
 */
//m {x: -2870619.8321989826, y: 4843774.545420306, z: 2996346.441740754}
// yewan.html:68 m {x: -2870611.9949394534, y: 4843772.794923521, z: 2996356.5953175486}
// yewan.html:68 m {x: -2870621.296897844, y: 4843765.766741147, z: 2996358.6981522674}
// yewan.html:68 m {x: -2870628.0526251853, y: 4843768.207522549, z: 2996348.3080867263}



const vs='attribute vec3 position3DHigh;\n' +
    'attribute vec3 position3DLow;\n'+
    'attribute float batchId;\n'+
    'attribute vec2 st;\n'+
    'varying vec2 v_st;\n'+
    'void main() {\n'+
    '   vec4 position = czm_modelViewProjectionRelativeToEye *czm_computePosition();\n'+
    '   v_st = st;\n'+
    '   gl_Position = position;\n'+
    '}';
const fs='varying vec2 v_st;\n'+
    // 'uniform sampler2D image;\n'+
    `
    float near=0.1;
    float far=100.0;
    float LinearizeDepth(float depth)
    {
    float z=depth*2.0-1.0;
    return (2.0*near*far)/(far+near-z*(far-near));
    }
    `+
    'void main() {\n'+
    '   vec2 position = -1.0 + 2.0 *v_st;\n'+
    '   float speed = getSpeed();\n'+
    '   float time= czm_frameNumber *speed;\n'+
    '   float r = abs( cos( position.x * position.y + time / 5.0 ));\n'+
    '   float g = abs( sin( position.x * position.y + time / 4.0 ) );\n'+
    '   float b = abs( cos( position.x * position.y + time / 3.0 ) );\n'+
    '   gl_FragColor = vec4( r, g, b, 1.0 );\n'+
    `
    // sampler2D image=getImage();
    // gl_FragColor = texture2D(image,v_st);
     gl_FragColor = getcolor(v_st,time);
     // float depth=LinearizeDepth(gl_FragCoord.z)/far;
     //   gl_FragColor =  vec4(vec3(depth), 1.0);
    `+
    '}\n';


function quard(options){
    this._scene=options.scene;
    this._sts = new Float32Array(options.sts);//纹理数据
    this._positionIndex = new Uint16Array(options.positionIndex);//顶点索引数据
    let tempPosition =[];
    for (var i = 0; i < options.positions.length; i++) {
        tempPosition.push(options.positions[i].x);
        tempPosition.push(options.positions[i].y);
        tempPosition.push(options.positions[i].z);
    }
    this._positions = new Float64Array(tempPosition);//顶点数据
    let geometry=createGeometry(this._positions,this._sts,this._positionIndex);//几何体
    let appearance = createAppearance(vs , fs);//外观
    //primitive方式加载
    scene.primitives.add(new SuperMap3D.GroundPrimitive({
        geometryInstances: new SuperMap3D.GeometryInstance({//渲染的几何体
            geometry: geometry
        }),
        appearance: appearance,//外观
        asynchronous: false
    }));
}
function getMS() {
    return 'uniform float speed;\n'+
        'uniform sampler2D image;\n'+
        'float getSpeed(){\n'+
        '   return speed;\n'+
        '}'+
        'vec4 getcolor(vec2 st,float time){\n'+
        '   return texture2D(image,vec2(fract(st.s-time/100.0),st.t));\n'+
        // '   return vec4(1.0,0.0,0.0,1.0);\n'+
        '}'
        ;
}
function createAppearance(vertexShader, fragShader) {
    return new SuperMap3D.Appearance({
        material: new SuperMap3D.Material({
            fabric: {
                uniforms: {
                    speed:0.1,
                    image:'/html/SuperMap iClient3D for WebGL/webgl/images/SkyBox/bluesky/Back.jpg'
                },
                source:getMS()
            }
        }),
        translucent: false,//显示不为半透明
        renderState: {
            blending: SuperMap3D.BlendingState.PRE_MULTIPLIED_ALPHA_BLEND,//使用Alpha混合功能启用混合
            depthTest: { enabled: true },//深度检测
            depthMask: true,//将深度值写入深度缓冲区
        },
        fragmentShaderSource: fragShader,//片段着色器
        vertexShaderSource: vertexShader//顶点着色器
    });
}
//构建几何体
function createGeometry(positions,sts,positionIndex) {
    return new SuperMap3D.Geometry({
        attributes:{//几何顶点属性
            position: new SuperMap3D.GeometryAttribute({
                componentDatatype: SuperMap3D.ComponentDatatype.DOUBLE,//数据类型
                componentsPerAttribute:3,//定义几个为一组
                values:positions//坐标值
            }),
            st: new SuperMap3D.GeometryAttribute({
                componentDatatype: SuperMap3D.ComponentDatatype.FLOAT,//数据类型
                componentsPerAttribute:2,//定义几个为一组
                values: sts//坐标值
            })
        },
        indices:positionIndex,//顶点索引
        primitiveType: SuperMap3D.PrimitiveType.TRIANGLES,//图元类型
        boundingSphere:SuperMap3D.BoundingSphere.fromVertices(positions)//包围球
    });
}



export default {quard}