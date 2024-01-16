/**
 * Created by wqy
 * Date 2022/7/12 8:06
 * Description
 */
//m {x: -2870619.8321989826, y: 4843774.545420306, z: 2996346.441740754}
// yewan.html:68 m {x: -2870611.9949394534, y: 4843772.794923521, z: 2996356.5953175486}
// yewan.html:68 m {x: -2870621.296897844, y: 4843765.766741147, z: 2996358.6981522674}
// yewan.html:68 m {x: -2870628.0526251853, y: 4843768.207522549, z: 2996348.3080867263}

let vs=`
// attribute vec4 a_Position;
void main(){
gl_Position=vec4(0.7,0.0,-0.0,1.0);
gl_PointSize=10.0;
}
`
let fs=`
void main(){
gl_FragColor=vec4(1.0,0.0,0.0,1.0);
}
`
function quard(options) {
    this._gl=options.gl;
}

quard.prototype.draw=function(){
    initShaders(this._gl,vs,fs);
    this._gl.drawArrays(this._gl.POINTS,0,1);
}
function initShaders(gl,vsSource,fsSource){
    //创建程序对象
    const program = gl.createProgram();
    //建立着色对象
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    //把顶点着色对象装进程序对象中
    gl.attachShader(program, vertexShader);
    //把片元着色对象装进程序对象中
    gl.attachShader(program, fragmentShader);
    //连接webgl上下文对象和程序对象
    gl.linkProgram(program);
    if ( !gl.getProgramParameter( program, gl.LINK_STATUS) ) {
        var info = gl.getProgramInfoLog(program);
        throw "Could not compile WebGL program. \n\n" + info;
    }
    //启动程序对象
    gl.useProgram(program);
    //将程序对象挂到上下文对象上
    gl.program = program;

}
function loadShader(gl, type, source) {
    //根据着色类型，建立着色器对象
    const shader = gl.createShader(type);
    //将着色器源文件传入着色器对象中
    gl.shaderSource(shader, source);
    //编译着色器对象
    gl.compileShader(shader);
    //返回着色器对象
    return shader;
}
// let vs = `
// attribute vec4 a_Position;
// attribute vec2 a_TexCoord;
// varying vec2 v_TexCoord;
//
// void main(){
//
// gl_Position=a_Position;
// v_TexCoord=a_TexCoord;
// }
// `
// let fs = `
// precision mediump float;
// uniform sampler2D u_Sampler;
// varying vec2 v_TexCoord;
// void main(){
//  gl_FragColor = texture2D(u_Sampler,v_TexCoord);
// // gl_FragColor=vec4(1.0,0.0,0.0,1.0);
// }
// `
// let initImageSuccess = false;
// var image = new Image();
// image.src = '/html/SuperMap iClient3D for WebGL/webgl/images/SkyBox/bluesky/Back.jpg';
// //注册加载事件的响应函数
// image.onload = function () {
//     initImageSuccess = true;
// }
// let gl = null, program = null, vertexTexCoordBuffer = null,a_Position=-1,a_TexCoord=-1;
//
// function drawquard(_gl) {
//     gl = _gl;
//
//     draw()
//
// }
//
//
// function draw() {
//     if (initImageSuccess === true) {
//         initShaders(gl, vs, fs);
//         var n = initVertexBuffer(gl);
//         if (n < 0) {
//             console.log('顶点写入缓存失败！');
//             return false;
//         }
//         initTextures(gl, n);
//         //绘制纹理图像
//         gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
//         // this._gl.drawArrays(this._gl.TRIANGLE_FAN, 0, n);
//     }
//     requestAnimationFrame(draw)
//
// }
//
// function initShaders(gl, vsSource, fsSource) {
//     if (program == null) {
//         //创建程序对象
//         program = gl.createProgram();
//         //建立着色对象
//         const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
//         const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
//         //把顶点着色对象装进程序对象中
//         gl.attachShader(program, vertexShader);
//         //把片元着色对象装进程序对象中
//         gl.attachShader(program, fragmentShader);
//         //连接webgl上下文对象和程序对象
//         gl.linkProgram(program);
//         if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
//             var info = gl.getProgramInfoLog(program);
//             throw "Could not compile WebGL program. \n\n" + info;
//         }
//     }
//
//     //启动程序对象
//     gl.useProgram(program);
//     //将程序对象挂到上下文对象上
//     gl.program = program;
//
// }
//
// function loadShader(gl, type, source) {
//     //根据着色类型，建立着色器对象
//     const shader = gl.createShader(type);
//     //将着色器源文件传入着色器对象中
//     gl.shaderSource(shader, source);
//     //编译着色器对象
//     gl.compileShader(shader);
//     //返回着色器对象
//     return shader;
// }
//
// function initVertexBuffer(gl) {
//     var verticesTexCoord = new Float32Array([
//         //顶点坐标     纹理坐标
//         //-----\\     //----\\
//         -0.5, 0.5, 0.0, 1.0,
//         0.5, 0.5, 0.0, 0.0,
//         0.5, 0.5, 1.0, 1.0,
//         0.5, -0.5, 1.0, 0.0
//     ]);
//     var n = verticesTexCoord.length / 4;
//
//     if (vertexTexCoordBuffer == null) {
//         // 创建缓冲区对象
//         vertexTexCoordBuffer = gl.createBuffer();
//         if (!vertexTexCoordBuffer) {
//             console.log('创建缓冲区失败');
//             return -1;
//         }
//     }
//
//
//     //绑定缓冲区对象到目标
//     gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
//     //将数据写入到缓冲区对象
//     gl.bufferData(gl.ARRAY_BUFFER, verticesTexCoord, gl.STATIC_DRAW);
//
//     //获取类型化数组中每个元素的大小
//     var FSIZE = verticesTexCoord.BYTES_PER_ELEMENT
//
//     if(a_Position==-1){
//         a_Position = gl.getAttribLocation(program, 'a_Position');
//     }
//
//     if (a_Position < 0) {
//         console.log('获取attribute变量失败！');
//         return -1;
//     }
//     // 将缓冲区对象分配给attribute变量
//     gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
//     //开启attribute变量
//     gl.enableVertexAttribArray(a_Position);
//
//     if(a_TexCoord==-1){
//         a_TexCoord = gl.getAttribLocation(program, 'a_TexCoord');
//     }
//
//     if (a_TexCoord < 0) {
//         console.log('获取attribute变量失败！');
//         return -1;
//     }
//     // 将缓冲区对象分配给attribute变量
//     gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
//     //开启attribute变量
//     gl.enableVertexAttribArray(a_TexCoord);
//     return n;
// }
//
// function initTextures(gl, n) {
//     //创建纹理对象
//     var texture = gl.createTexture();
//     //获取片源着色器uniform变量u_Sampler(纹理单元编号）的存储地址
//     var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');
//
//     loadTexure(gl, n, texture, u_Sampler, image)
//
//     return true;
// }
//
// function loadTexure(gl, n, texture, u_Sampler, image) {
//     gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
//     gl.activeTexture(gl.TEXTURE0) //激活纹理单元
//     gl.bindTexture(gl.TEXTURE_2D, texture) //绑定纹理对象
//     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR) //配置纹理对象参数
//     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image) //纹理图像分配给纹理对象
//     gl.uniform1i(u_Sampler, 0) //纹理单元编号传给片元着色器中uniform变量u_Sampler
//
//
// }


//#region 定义一个Trangles类
function Trangles(options) {
    this._scene = options.scene
    this._modelMatrix = options.modelMatrix
    this.arr = options.arr;

}

//用prototype给定方法和属性
Trangles.prototype.getCommand = function (context) {
    //顶点着色器
    let v = `
        attribute vec3 position3DHigh;
        attribute vec3 position3DLow;
        void main()
        {
          vec4 p = czm_translateRelativeToEye(position3DHigh, position3DLow);
          p = czm_modelViewProjectionRelativeToEye * p;
          gl_Position = p;
          gl_PointSize=10.0;
        }
      `
    //片元着色器
    let f = `void main()
        {
            gl_FragColor = vec4(0,1,0,1);
        }
        `
    //shaderProgram将两个着色器合并
    var shaderProgram = SuperMap3D.ShaderProgram.fromCache({
        context: context,
        vertexShaderSource: v,
        fragmentShaderSource: f
    })
    //渲染状态
    var renderState = SuperMap3D.RenderState.fromCache({
        depthTest: {
            enabled: false
        },
        depthMask: false,
        blending: SuperMap3D.BlendingState.ALPHA_BLEND
    })
    //索引数组Buffer
    var indexBuffer = SuperMap3D.Buffer.createIndexBuffer({
        context: context,
        typedArray: new Uint32Array([0, 1, 2]), //索引顺序
        usage: SuperMap3D.BufferUsage.STATIC_DRAW,
        indexDatatype: SuperMap3D.IndexDatatype.UNSIGNED_INT
    })
    //顶点数组Buffer
    var vertexBuffer = SuperMap3D.Buffer.createVertexBuffer({
        context: context,
        typedArray: SuperMap3D.ComponentDatatype.createTypedArray(
            SuperMap3D.ComponentDatatype.FLOAT,
            this.arr //顶点位置数组
        ),
        usage: SuperMap3D.BufferUsage.STATIC_DRAW
    })
    //用来表示逐个顶点的信息
    var attributes = []
    attributes.push({
        index: 0,
        vertexBuffer: vertexBuffer,
        componentDatatype: SuperMap3D.ComponentDatatype.FLOAT,
        componentsPerAttribute: 3,
        normalize: false
    })
    //顶点数组（设置顶点属性和索引Buffer）
    var vertexArray = new SuperMap3D.VertexArray({
        context: context,
        attributes: attributes,
        indexBuffer: indexBuffer
    })

    //新建一个DrawCommand
    this.pointCommand = new SuperMap3D.DrawCommand({
        primitiveType: SuperMap3D.PrimitiveType.POINTS,
        shaderProgram: shaderProgram,
        renderState: renderState,
        vertexArray: vertexArray,
        pass: SuperMap3D.Pass.OPAQUE,
        modelMatrix: this._modelMatrix,
        receiveShadows: true
    })
}
Trangles.prototype.destroy = function () {
    //this.arr = [];
}
Trangles.prototype.update = function (frameState) {
    if (this.pointCommand) {
        var commandList = frameState.commandList
        commandList.push(this.pointCommand)
        this._scene.requestRender()
    } else {
        this.getCommand(this._scene.context)
    }
}
//#endregion

export default {quard}