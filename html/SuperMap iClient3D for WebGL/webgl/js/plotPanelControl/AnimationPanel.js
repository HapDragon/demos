var plottingLayer;
var plotting;
var animationManager;
var selectGeo, goAnimationName;
var point3dsArray = [];
var handlerLine;
function InitPlot(viewer, serverUrl) {
    if (!viewer) {
        return;
    }
    var campos = SuperMap3D.Cartesian3.fromDegrees(121.58041176757547, 38.859240850898405, 500);
    scene.camera.setView({
        destination: campos,
        orientation: {
            heading: SuperMap3D.Math.toRadians(0),
            pitch: -0.20917672793046682,
            roll: 2.708944180085382e-13
        }
    });
    plottingLayer = new SuperMap3D.PlottingLayer(scene, "plottingLayer");
    scene.plotLayers.add(plottingLayer);

    plotting = SuperMap3D.Plotting.getInstance(serverUrl, scene);

    plotEditControl = new SuperMap3D.PlotEditControl(scene, plottingLayer);//编辑控件
    plotEditControl.activate();

    animationManager = plotting.getGOAnimationManager();

    var tooltip = createTooltip(document.body);
    handlerLine = new SuperMap3D.DrawHandler(viewer,SuperMap3D.DrawMode.Line);
    handlerLine.activeEvt.addEventListener(function(isActive){
        if(isActive == true){
            viewer.enableCursorStyle = false;
            viewer._element.style.cursor = '';
            $('body').removeClass('drawCur').addClass('drawCur');
        }
        else{
            viewer.enableCursorStyle = true;
            $('body').removeClass('drawCur');
        }
    });
    handlerLine.movingEvt.addEventListener(function(windowPosition){
        if(handlerLine.isDrawing){
            tooltip.showAt(windowPosition,'<p>右键单击结束绘制</p>');
        }
        else{
            tooltip.showAt(windowPosition,'<p>点击绘制第一个点</p>');
        }

    });
    var linePoints;//存储画线的节点
    var geometries = [];
    var point3ds = new SuperMap3D.Point3Ds();
    handlerLine.drawEvt.addEventListener(function(result){
        point3dsArray = [];
        tooltip.setVisible(false);
        linePoints = result.object.positions;
        for (var i = 0; i < linePoints.length; i++) {
            var position = linePoints[i];
            var cartographic = SuperMap3D.Cartographic.fromCartesian(position);
            var longitude = SuperMap3D.Math.toDegrees(cartographic.longitude);
            var latitude = SuperMap3D.Math.toDegrees(cartographic.latitude);
			var height = cartographic.height;
            var point3d = new SuperMap3D.PlotPoint3D(longitude, latitude, height);
            point3dsArray.push(point3d);
        }
    });

    $('#drawWay').click(function(){
        deactiveAll();
        handlerLine.activate();
    });

    $('#toolbar').show();
    $('#loadingbar').remove();
    function deactiveAll(){
        handlerLine.deactivate();
    }
    $('#animationType').change(function() {
        var value = $(this).val();
        switch(value) {
            case "NONE":
                $('#pannel').hide();
                break;
            case "ATTRIBUTE":
                $('#pannel').show();
                $('#AttributePannel').show();
                $('#BlinkPannel').hide();
                $('#GrowPannel').hide();
                $('#RotatePannel').hide();
                $('#ScalePannel').hide();
                $('#ShowPannel').hide();
                $('#WayPannel').hide();
                break;
            case "BLINK":
                $('#pannel').show();
                $('#AttributePannel').hide();
                $('#BlinkPannel').show();
                $('#GrowPannel').hide();
                $('#RotatePannel').hide();
                $('#ScalePannel').hide();
                $('#ShowPannel').hide();
                $('#WayPannel').hide();
                break;
            case "GROW":
                $('#pannel').show();
                $('#AttributePannel').hide();
                $('#BlinkPannel').hide();
                $('#GrowPannel').show();
                $('#RotatePannel').hide();
                $('#ScalePannel').hide();
                $('#ShowPannel').hide();
                $('#WayPannel').hide();
                break;
            case "ROTATE":
                $('#pannel').show();
                $('#AttributePannel').hide();
                $('#BlinkPannel').hide();
                $('#GrowPannel').hide();
                $('#RotatePannel').show();
                $('#ScalePannel').hide();
                $('#ShowPannel').hide();
                $('#WayPannel').hide();
                break;
            case "SCALE":
                $('#pannel').show();
                $('#AttributePannel').hide();
                $('#BlinkPannel').hide();
                $('#GrowPannel').hide();
                $('#RotatePannel').hide();
                $('#ScalePannel').show();
                $('#ShowPannel').hide();
                $('#WayPannel').hide();
                break;
            case "SHOW":
                $('#pannel').show();
                $('#AttributePannel').hide();
                $('#BlinkPannel').hide();
                $('#GrowPannel').hide();
                $('#RotatePannel').hide();
                $('#ScalePannel').hide();
                $('#ShowPannel').show();
                $('#WayPannel').hide();
                break;
            case "WAY":
                $('#pannel').show();
                $('#AttributePannel').hide();
                $('#BlinkPannel').hide();
                $('#GrowPannel').hide();
                $('#RotatePannel').hide();
                $('#ScalePannel').hide();
                $('#ShowPannel').hide();
                $('#WayPannel').show();
                break;
            default:
                $('#pannel').show();
                break;
        }
    });
    window.setInterval(function execute() {
        animationManager.execute();
    }, 10);
    creatAnimation();

}

function creatAnimation() {
    var geoJGSZ = null;
    var geoTFXS = null;
    var geoLJXS = null;
    var geoTFXS2 = null;
    var geoZYSS = null;
    var geoLJZY = null;
    var geoZYSS2 = null;
    var geoJC = null;
    var geoSJ = null;
    var geoLJJL = null;
    var geoJGJL = null;

    var pointsJGSZ = [];
    pointsJGSZ[0] = new SuperMap3D.PlotPoint3D(13.0486416724835, 47.827217402435, 0);
    pointsJGSZ[1] = new SuperMap3D.PlotPoint3D(13.0484530291208, 47.8273069046719, 0);
    pointsJGSZ[2] = new SuperMap3D.PlotPoint3D(13.0498576145008, 47.8282734633643, 0);
    pointsJGSZ[3] = new SuperMap3D.PlotPoint3D(13.0513393769035, 47.8287206684327, 0);
    pointsJGSZ = MoveSymbol(pointsJGSZ);
    plottingLayer.createSymbol(22, 1004, pointsJGSZ);

    var pointsSJ = [];
    pointsSJ[0] = new SuperMap3D.PlotPoint3D(13.0522206845731, 47.8287075057692, 0);
    pointsSJ = MoveSymbol(pointsSJ);
    plottingLayer.createSymbol(421, 20100, pointsSJ, function (even) {
        geoSJ = even.feature;
        geoSJ.symbolStyle.lineColor = {red: 1, green: 1, blue: 0, alpha: 1};//"#ffff00"
        geoSJ.textContent = "事件";
    });

    var pointsJGJL = [];
    pointsJGJL[0] = new SuperMap3D.PlotPoint3D(13.0485470948225, 47.8271255667932, 10000);
    pointsJGJL = MoveSymbol(pointsJGJL);
    plottingLayer.createSymbol(421, 9, pointsJGJL, function (even) {
        geoJGJL = even.feature;
        geoJGJL.showMode = 2;
        geoJGJL.modelPath = "./SampleData/plot/SuperMap3D_Air.gltf";
        geoJGJL.modelScale.x = 10;
        geoJGJL.textContent = "进攻警力";
    });
}

function preAnimation() {
    selectGeo = plottingLayer.selectedFeature;
    if (!selectGeo) {
        return;
    }
    goAnimationName = selectGeo.id + Math.ceil(Math.random() * 1000);
}
function createAttributeAnimation() {
    preAnimation();
    var goAnimation = animationManager.createGOAnimation(SuperMap3D.GOAnimationType.ANIMATION_ATTRIBUTE, goAnimationName, selectGeo);
    if (document.getElementById("lineColorAnimationFlag").selectedIndex === 0) {
        goAnimation.lineColorAnimation = false;
    } else {
        goAnimation.lineColorAnimation = true;//线色动画
        var starLineColor = colorConvert(document.getElementById("a_startLineColor").value);
        var endLineColor = colorConvert(document.getElementById("a_endLineColor").value);
        goAnimation.startLineColor = starLineColor;
        goAnimation.endLineColor = endLineColor;
    }
    if (document.getElementById("lineWidthFlag").selectedIndex === 0) {
        goAnimation.lineWidthAnimation = false;
    } else {
        goAnimation.lineWidthAnimation = true;//线宽动画
        var starLineWidth = parseFloat(document.getElementById("a_startLineWidth").value);
        var endLineWidth = parseFloat(document.getElementById("a_endLineWidth").value);
        goAnimation.startLineWidth = starLineWidth;//开始线宽
        goAnimation.endLineWidth = endLineWidth;//结束线宽

    }
    if (document.getElementById("surroundLineColorFlag").selectedIndex === 0) {
        goAnimation.surroundLineColorAnimation = false;
    } else {
        goAnimation.surroundLineColorAnimation = true;//衬线色动画
        var starSurroundLineColor = colorConvert(document.getElementById("a_startSurroundLineColor").value);
        var endSurroundLineColor = colorConvert(document.getElementById("a_endSurroundLineColor").value);
        goAnimation.startSurroundLineColor = starSurroundLineColor;
        goAnimation.endSurroundLineColor = endSurroundLineColor;
    }
    if (document.getElementById("surroundLineWidthFlag").selectedIndex === 0) {
        goAnimation.surroundLineWidthAnimation = false;
    } else {
        goAnimation.surroundLineWidthAnimation = true;//衬线宽动画
        var starSurroundLineWidth = parseFloat(document.getElementById("a_startSurroundLineWidth").value);
        var endSurroundLineWidth = parseFloat(document.getElementById("a_endSurroundLineWidth").value);
        goAnimation.startSurroundLineWidth = starSurroundLineWidth;
        goAnimation.endSurroundLineWidth = endSurroundLineWidth;
    }

    goAnimation.startTime = parseFloat(document.getElementById("a_startTime").value);//开始时间
    goAnimation.duration = parseFloat(document.getElementById("a_duration").value);//播放时长
    if (document.getElementById("a_repeatFlag").selectedIndex === 0) {
        goAnimation.repeat = false;
    } else {
        goAnimation.repeat = true;
    }
}

function createBlinkAnimation() {
    preAnimation();
    var goAnimation = animationManager.createGOAnimation(SuperMap3D.GOAnimationType.ANIMATION_BLINK, goAnimationName, selectGeo);
    if (document.getElementById("blinkStyleFlag").selectedIndex === 0) {//频率
        goAnimation.blinkStyle = SuperMap.Plot.BlinkAnimationBlinkStyle.Blink_Frequency;//频率闪烁
        goAnimation.blinkInterval = parseFloat(document.getElementById("blinkFrequency").value);//闪烁间隔
    } else {
        goAnimation.blinkStyle = SuperMap.Plot.BlinkAnimationBlinkStyle.Blink_Number;//频率闪烁
        goAnimation.blinkNumber = parseFloat(document.getElementById("blinkNumber").value);//闪烁间隔
    }
    if (document.getElementById("b_replaceColorFlag").selectedIndex === 0) {
        goAnimation.replaceStyle =  SuperMap.Plot.BlinkAnimationReplaceStyle.Replace_NoColor;
    } else {
        goAnimation.replaceStyle = SuperMap.Plot.BlinkAnimationReplaceStyle.Replace_Color;//颜色交替类型
        var starColor = colorConvert(document.getElementById("startLineColor").value);
        var endColor = colorConvert(document.getElementById("endLineColor").value);
        goAnimation.startColor = starColor;
        goAnimation.endColor = endColor;
    }
    goAnimation.startTime = parseFloat(document.getElementById("blinkStartTime").value);//开始时间
    goAnimation.duration = parseFloat(document.getElementById("blinkDuration").value);//播放时长
    if (document.getElementById("b_repeatFlag").selectedIndex === 0) {
        goAnimation.repeat = false;
    } else {
        goAnimation.repeat = true;
    }
}

function createGrowAnimation() {
    preAnimation();
    var goAnimation = animationManager.createGOAnimation(SuperMap3D.GOAnimationType.ANIMATION_GROW, goAnimationName, selectGeo);
    goAnimation.startScale = parseFloat(document.getElementById("g_startScale").value);
    goAnimation.endScale = parseFloat(document.getElementById("g_endScale").value);
    goAnimation.startTime = parseFloat(document.getElementById("g_startTime").value);//开始时间
    goAnimation.duration = parseFloat(document.getElementById("g_duration").value);//播放时长
    if (document.getElementById("g_repeatFlag").selectedIndex === 0) {
        goAnimation.repeat = false;
    } else {
        goAnimation.repeat = true;
    }
}

function createRotateAnimation() {
    preAnimation();
    var startAngle, endAngle;
    startAngle = new SuperMap3D.PlotPoint3D(parseFloat(document.getElementById("r_xStartAngle").value), parseFloat(document.getElementById("r_yStartAngle").value), parseFloat(document.getElementById("r_zStartAngle").value));
    endAngle = new SuperMap3D.PlotPoint3D(parseFloat(document.getElementById("r_xEndAngle").value), parseFloat(document.getElementById("r_yEndAngle").value), parseFloat(document.getElementById("r_zEndAngle").value));
    var goAnimation = animationManager.createGOAnimation(SuperMap3D.GOAnimationType.ANIMATION_ROTATE, goAnimationName, selectGeo);
    if (document.getElementById("rotateDirectionFlag").selectedIndex === 0) {
        goAnimation.rotateDirection = SuperMap.Plot.RotateDirection.ClockWise;//顺时针旋转

    } else {
        goAnimation.rotateDirection = SuperMap.Plot.RotateDirection.AntiClockWise;//逆时针旋转
    }
    goAnimation.startAngle = startAngle;
    goAnimation.endAngle = endAngle;
    goAnimation.startTime = parseFloat(document.getElementById("r_startTime").value);//开始时间
    goAnimation.duration = parseFloat(document.getElementById("r_duration").value);//播放时长
    if (document.getElementById("r_repeatFlag").selectedIndex === 0) {
        goAnimation.repeat = false;
    } else {
        goAnimation.repeat = true;
    }
}

function createScaleAnimation() {
    preAnimation();
    var goAnimation = animationManager.createGOAnimation(SuperMap3D.GOAnimationType.ANIMATION_SCALE, goAnimationName, selectGeo);
    goAnimation.startScale = parseFloat(document.getElementById("s_startScale").value);
    goAnimation.endScale = parseFloat(document.getElementById("s_endScale").value);
    goAnimation.startTime = parseFloat(document.getElementById("s_startTime").value);//开始时间
    goAnimation.duration = parseFloat(document.getElementById("s_duration").value);//播放时长
    if (document.getElementById("s_repeatFlag").selectedIndex === 0) {
        goAnimation.repeat = false;
    } else {
        goAnimation.repeat = true;
    }
}

function createShowAnimation() {
    preAnimation();
    var goAnimation = animationManager.createGOAnimation(SuperMap3D.GOAnimationType.ANIMATION_SHOW, goAnimationName, selectGeo);
    if (document.getElementById("finalDisplayFlag").selectedIndex === 0) {
        goAnimation.finalDisplay = false;
    } else {
        goAnimation.finalDisplay = true;
    }
    if (document.getElementById("showEffectFlag").selectedIndex === 0) {
        goAnimation.showEffect = false;
    } else {
        goAnimation.showEffect = true;
    }
    goAnimation.startTime = parseFloat(document.getElementById("show_startTime").value);//开始时间
    goAnimation.duration = parseFloat(document.getElementById("show_duration").value);//播放时长
    if (document.getElementById("show_repeatFlag").selectedIndex === 0) {
        goAnimation.repeat = false;
    } else {
        goAnimation.repeat = true;
    }
}

function createWayAnimation() {
    preAnimation();
    var goAnimation = animationManager.createGOAnimation(SuperMap3D.GOAnimationType.ANIMATION_WAY, goAnimationName, selectGeo);
    if (document.getElementById("tangentDirectionFlag").selectedIndex === 0) {
        goAnimation.tangentDirection = false;
    } else {
        goAnimation.tangentDirection = true;
    }
    if (document.getElementById("showPathFlag").selectedIndex === 0) {
        goAnimation.showPath = 0;
    } else {
        goAnimation.showPath = 1;
    }
    if (document.getElementById("pathTypeFlag").selectedIndex === 0) {
        goAnimation.pathType = false;
    } else {
        goAnimation.pathType = true;
    }
    goAnimation.pathWidth = parseFloat(document.getElementById("pathWidth").value);
    var wayLineColor = colorConvert(document.getElementById("wayLineColor").value);
    goAnimation.pathColor = wayLineColor;
    goAnimation.wayPoints = point3dsArray;
    goAnimation.startTime = parseFloat(document.getElementById("w_startTime").value);//开始时间
    goAnimation.duration = parseFloat(document.getElementById("w_duration").value);//播放时长
    if (document.getElementById("w_repeatFlag").selectedIndex === 0) {
        goAnimation.repeat = false;
    } else {
        goAnimation.repeat = true;
    }
    handlerLine.clear();

}

function MoveSymbol(pts) {
    var oldCentre = new SuperMap3D.PlotPoint3D(13.0516048702177, 47.8283304498449, 0);
    var newCentre = new SuperMap3D.PlotPoint3D(121.57979595322007, 38.8818637949741, 0);
    for (var i = 0; i < pts.length; i++) {
        pts[i].x = newCentre.x + (pts[i].x - oldCentre.x);
        pts[i].y = newCentre.y + (pts[i].y - oldCentre.y);
        pts[i].z = 10;
    }
    return pts;
}

function play() {
    animationManager.play();
}

function pause() {
    animationManager.pause();
}

function stop() {
    animationManager.stop();
}

function reset() {
    animationManager.reset();
}

function deleteSelectedFeaturesAnimation() {
    if (0 === animationManager.getAllAnimations().length) {
        return;
    }
    var selectGeo = plottingLayer.selectedFeature;
    animationManager.removeGOAnimationByFeature(selectGeo);
}

function deleteAllAnimation() {
    if (0 === animationManager.getAllAnimations().length) {
        return;
    }
    animationManager.reset();
    animationManager.removeAllGOAnimation();
}
//删除指定标号
function deleteSeleGeo() {
    plottingLayer.removeGeoGraphicObject(plottingLayer._selectedFeature);
}

function lineColorChanges() {
    if (document.getElementById("lineColorAnimationFlag").selectedIndex === 0) {
        return false;
    } else {
        return  true;
    }
}


function colorConvert(colorString) {
    var red = parseInt(colorString.slice(1, 3), 16) / 255;
    var green = parseInt(colorString.slice(3, 5), 16) / 255;
    var blue = parseInt(colorString.slice(5, 7), 16) / 255;
    var color = new SuperMap3D.Color( red,  green,  blue,  1);
    return color;
}

function colorGeometryToString(color) {

    var value = color.value;
    var red, green, blue;

    if (undefined !== value && null !== value) {
        red = value[2] > 15 ? value[2].toString(16) : "0" + value[2].toString(16);
        green = value[1] > 15 ? value[2].toString(16) : "0" + value[1].toString(16);
        blue = value[0] > 15 ? value[0].toString(16) : "0" + value[0].toString(16);
    } else {
        red = color.red * 255;
        red = red > 15 ? red.toString(16) : "0" + red;
        green = color.green * 255;
        green = green > 15 ? green.toString(16) : "0" + green;
        blue = color.blue * 255;
        blue = blue > 15 ? blue.toString(16) : "0" + blue;
    }
    return "#" + red + green + blue;
};