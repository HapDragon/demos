//平面裁剪封装类
class ClipPlane {
    /**
       * Creates an instance of Roaming.
       * @param {*} viewer 需要传入
       * @param {*} options.modelUrl  需要传入，模型编辑器需要的载体
       * @param {*} options.ClipPlaneShow  可选，平面显隐
       * @param {*} options.clipPlaneScale  可选，平面的缩放系数
       * @memberof Roaming
       * @example
       * 
   */
    constructor(viewer, options) {
        this.viewer = viewer;
        this.init(viewer);
        this.updateOptionsParams(options);
    }

    //初始化
    init(viewer) {
        this.s3mInstanceColc = new Cesium.S3MInstanceCollection(viewer.scene._context);
        viewer.scene.primitives.add(this.s3mInstanceColc);
        this.clipPlanePositions = null;
        this.ClipPlaneShow = true;
        this.clipPlaneScale = 1;
        this.LocalToWorldMatrix = null;
    }

    /**
      * 更新可配置的内部参数
      * @param {object} options 配置项
      */
    updateOptionsParams(options) {
        if (!options) return;
        if (Cesium.defined(options.modelUrl)) this.modelUrl = options.modelUrl;
        if (Cesium.defined(options.ClipPlaneShow)) this.ClipPlaneShow = options.ClipPlaneShow;
        if (Cesium.defined(options.clipPlaneScale)) this.clipPlaneScale = options.clipPlaneScale;
    }

    
    /**
     * 设置裁剪面位置
    * @param {object} _LocalToWorldMatrix 模型矩阵
    */
    setPlanePositions(_LocalToWorldMatrix) {
        this.LocalToWorldMatrix = _LocalToWorldMatrix;
        let width = 10 * this.clipPlaneScale;
        // 在本地坐标
        let _localPos4 = new Cesium.Cartesian3(width, width, 0);
        let _localPos3 = new Cesium.Cartesian3(width, -width, 0);
        let _localPos2 = new Cesium.Cartesian3(-width, -width, 0);
        let _localPos1 = new Cesium.Cartesian3(-width, width, 0);
        // 将本地坐标转世界坐标
        let _worldPoint1 = Cesium.Matrix4.multiplyByPoint(_LocalToWorldMatrix, _localPos1, new Cesium.Cartesian3());
        let _worldPoint2 = Cesium.Matrix4.multiplyByPoint(_LocalToWorldMatrix, _localPos2, new Cesium.Cartesian3());
        let _worldPoint3 = Cesium.Matrix4.multiplyByPoint(_LocalToWorldMatrix, _localPos3, new Cesium.Cartesian3());
        let _worldPoint4 = Cesium.Matrix4.multiplyByPoint(_LocalToWorldMatrix, _localPos4, new Cesium.Cartesian3());

        this.clipPlanePositions = [_worldPoint1, _worldPoint2, _worldPoint3, _worldPoint4];

        this.clipPlaneUpdate();
    }

    // 添加裁剪面entity
    addsurface() {
        this.planeSurface = this.viewer.entities.add({
            id: "clip-plane",
            polygon: {
                hierarchy: new Cesium.CallbackProperty(() => {
                    return {
                        positions: this.clipPlanePositions,
                        holes: []
                    };
                }, false),
                show: new Cesium.CallbackProperty(() => {
                    return this.ClipPlaneShow
                }, false),
                material: Cesium.Color.GOLD.withAlpha(0.2),
                outline: true,
                outlineColor: Cesium.Color.GOLD,
                perPositionHeight: true
            }
        });
    }

    //添加编辑模型 
    addModel(position) {
        let id = "clip-model";
        this.s3mInstanceColc.add(this.modelUrl, {
            id: id,
            position: position,
            scale: new Cesium.Cartesian3(0, 0, 0)
        });
        let editEntity = this.s3mInstanceColc.getInstance(this.modelUrl, id);
        if (!this.modelEditor) this.addModelEditor(editEntity);
        else {
            this.modelEditor.setEditObject(editEntity);
            this.modelEditor.activate();
        }
    }

    // 执行添加裁剪面及编辑模型 
    setClipPlane(position) {
        this.clear();
        let LocalToWorldMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(position);
        this.setPlanePositions(LocalToWorldMatrix);
        this.addsurface();
        this.addModel(position);
    }

    // 添加模型编辑器
    addModelEditor(model) {
        this.modelEditor = new Cesium.ModelEditor({
            model: model,
            scene: this.viewer.scene,
            axesShow: {
                translation: true,
                rotation: true,
                scale: false
            }
        });
        this.modelEditor.activate();
        this.modelEditor.changedEvt.addEventListener(param => {
            this.setPlanePositions(param.modelMatrix)
        });
    }

    // 更新
    clipPlaneUpdate() {
        if (!this.clipPlanePositions) return;
        let layers = this.viewer.scene.layers.layerQueue;
        for (let layer of layers) {
            layer.setCustomClipPlane(
                this.clipPlanePositions[0],
                this.clipPlanePositions[1],
                this.clipPlanePositions[2]
            );
        }
    }

     /**
    * 设置裁剪面显隐
    * @param {object} val Boolean
    */
    setPlaneShow(val) {
        this.ClipPlaneShow = val;
    }

     /**
    * 
    * @param {object} val Boolean
    */
    setModelEditorShow(val) {
        if (!this.modelEditor) return;
        if (!val) this.modelEditor.deactivate();
        else {
            let editEntity = this.s3mInstanceColc.getInstance(this.modelUrl, "clip-model");
            this.modelEditor.setEditObject(editEntity);
            this.modelEditor.activate();
        }
    }

    /**裁剪平面缩放系数
    * @param {object} val Number 默认1
    */
    setClipPlaneScale(val) {
        this.clipPlaneScale = val;
        if (this.LocalToWorldMatrix);
        this.setPlanePositions(this.LocalToWorldMatrix);
    }

    // 清除
    clear() {
        let layers = this.viewer.scene.layers.layerQueue;
        for (let layer of layers) {
            layer.clearCustomClipBox();
        }
        if (this.planeSurface) {
            this.viewer.entities.remove(this.planeSurface);
            this.modelEditor.deactivate();
            this.s3mInstanceColc.removeCollection(this.modelUrl);
            this.planeSurface = null;
            this.clipPlanePositions = null;
            this.LocalToWorldMatrix = null;
        }
    }
    /**
    * 销毁
    */
    destroy() {
        this.clear();
        if (this.modelEditor) this.modelEditor.destroy();
    }
}

window.ClipPlane = ClipPlane
