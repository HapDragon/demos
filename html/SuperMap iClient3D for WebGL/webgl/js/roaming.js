/* 漫游类 */

 class Roaming {
    /**
       * Creates an instance of Roaming.
       * @param {*} viewer 需要传入
       * @param {*} options.model 模型的相关配置 需要传入
       * @param {*} options.data  点集合 需要传入
       * @param {*} options.isPathShow 路径是否显示 默认显示
       * @memberof Roaming
       * @example
       *  const options = {
              data: '', // 直接点数据(经纬度或笛卡尔)
              model: {
                  url: ''// 和SuperMap3D中model的配置一致
              },
              speed: '', // 移动速度默认10m/s，默认可不传
              isPathShow: true, // 漫游路径是否显示， 默认可不传
              offset: new SuperMap3D.Cartesian3(-25, 0, 10), // 相机视角偏移，默认可不传
              perspectiveMode: 'NO',  //视角类型 默认无，NO TRACK FIRST GOD ，默认可不传
              isInterpolation: false , //是否插值 ，用于飞行路线平滑曲线 ，默认可不传
          };
       */
    constructor(viewer, options) {
        this.viewer = viewer;
        this.updateOptionsParams(options);
        this.isPathShow = true;
        this.isInterpolation = false;
        this.perspectiveMode = 'NO';
        this.offset = new SuperMap3D.Cartesian3(-25, 0, 5);
        this.multiplier = options.multiplier || 10;
        this.speed = options.speed || 10;
        this.entity = undefined;
        this.start = undefined;
        this.stop = undefined;
        this.matrix3Scratch = new SuperMap3D.Matrix3();
        this.scratch = new SuperMap3D.Matrix4();
    }


    /**
       * 更新漫游可配置的内部参数
       * @param {object} options 漫游的配置项
       */
    updateOptionsParams(options) {
        if (SuperMap3D.defined(options.data)) this.data = options.data;
        if (SuperMap3D.defined(options.model)) this.model = options.model || {};
        if (SuperMap3D.defined(options.speed)) this.speed = options.speed;
        if (SuperMap3D.defined(options.isPathShow)) this.isPathShow = options.isPathShow;
        if (SuperMap3D.defined(options.isInterpolation)) this.isInterpolation = options.isInterpolation;
        if (SuperMap3D.defined(options.offset)) this.offset = options.offset;
        if (SuperMap3D.defined(options.perspectiveMode)) this.perspectiveMode = options.perspectiveMode;
        if (SuperMap3D.defined(options.multiplier)) this.multiplier = options.multiplier;
    }


    /**
       * 处理读取到的数据
       * @param {array} data
       */
    processData(data) {
        if (SuperMap3D.defined(data[0].x)) return data;
        const positions = [];
        data.forEach((position) => {
            const car3Position = SuperMap3D.Cartesian3.fromDegrees(position[0], position[1], position[2]); // 给定默认值
            positions.push(car3Position);
        });
        return positions;
    }

    /**
      * 创建漫游
      * @param {array} data
      * @memberof Roaming
      */
    createRoaming() {
        if (this.data && Array.isArray(this.data)) {
            // 加载路径数据
            const positions = this.processData(this.data);
            // 根据基础路径生成漫游路线
            this.property = this.computeRoamingLineProperty(positions);
            this.createEntity(this.property, this.start, this.stop, this.isPathShow);
        }
    }

    /**
       * 创建位置集合
       * @param {cartesian3} coordinates 点集合
       * @returns
       */

    computeRoamingLineProperty(coordinates) {
        const property = new SuperMap3D.SampledPositionProperty();
        const coordinatesLength = coordinates.length;
        const start = SuperMap3D.JulianDate.now();
        this.start = start;
        let stopTime = 0;
        property.addSample(start, coordinates[0]);
        for (let i = 1; i < coordinatesLength; i += 1) {
            let d = SuperMap3D.Cartesian3.distance(coordinates[i], coordinates[i - 1]);
            stopTime += d / this.speed;
            const time1 = SuperMap3D.JulianDate.addSeconds(start, stopTime, new SuperMap3D.JulianDate());
            const position = coordinates[i];
            property.addSample(time1, position);
        }
        const stop = SuperMap3D.JulianDate.addSeconds(start, stopTime, new SuperMap3D.JulianDate());
        this.stop = stop;
        this.setClockTime(start, stop, this.multiplier);

        if (this.isInterpolation) {
            property.setInterpolationOptions({ // 点插值
                interpolationDegree: 5,
                interpolationAlgorithm: SuperMap3D.LagrangePolynomialApproximation, //LagrangePolynomialApproximation LinearApproximation  HermitePolynomialApproximation
            });
        }

        return property;
    }

    /**
       * 设置漫游时间系统
       * @param {*} start
       * @param {*} stop
       * @param {*} multiplier
       * @memberof Roaming
       */
    setClockTime(start, stop, multiplier) {
        // 将当前日期转为JulianDate
        this.viewer.clock.startTime = start.clone();
        this.viewer.clock.stopTime = stop.clone();
        this.viewer.clock.currentTime = start.clone();
        this.viewer.clock.multiplier = multiplier;
        // 默认循环漫游
        this.viewer.clock.clockRange = SuperMap3D.ClockRange.LOOP_STOP;
        // 时钟在此模式下前进的间隔当前间隔乘以某个系数
        this.viewer.clock.clockStep = SuperMap3D.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
    }

    /**
       * 创建entity
       * @param {*} position computeRoamingLineProperty计算的属性
       * @param {*} start 开始时间节点
       * @param {*} stop 结束时间节点
       * @param {*} isPathShow path路径是否显示
       * @memberof Roaming
       */
    createEntity(position, start, stop, isPathShow) {
        this.entity = this.viewer.entities.add({
            availability: new SuperMap3D.TimeIntervalCollection([new SuperMap3D.TimeInterval({
                start,
                stop,
            })]),
            // 位置
            position,
            // 计算朝向
            orientation: new SuperMap3D.VelocityOrientationProperty(position),
            // 加载模型
            model: { // 模型路径
                uri: this.model.url,
                // 模型最小刻度
                minimumPixelSize: 64,
                maximumSize: 128,
                // 设置模型最大放大大小
                maximumScale: 200,
                // 模型是否可见
                show: true,
                // 模型轮廓颜色
                silhouetteColor: SuperMap3D.Color.WHITE,
                // 模型颜色  ，这里可以设置颜色的变化
                // color: color,
                // 仅用于调试，显示模型绘制时的线框
                debugWireframe: false,
                // 仅用于调试。显示模型绘制时的边界球。
                debugShowBoundingVolume: false,
                scale: 1,
                runAnimations: true, // 是否运行模型中的动画效果
                ...this.model,
            },
            path: {
                resolution: 0.1,
                material: new SuperMap3D.PolylineGlowMaterialProperty({
                    glowPower: 0.1,
                    color: SuperMap3D.Color.YELLOW,
                }),
                width: 10,
                show: isPathShow,
            },
        });
        this.setPerspective(this.perspectiveMode);
    }

    /**
       * 设置漫游路径是否可见
       * @param {boolean} visible
       * @memberof Roaming
       */
    setRoamingPathVisibility(visible) {
        if (this.entity) {
            this.entity.path.show = visible;
        }
        // 更新全局漫游路径是否可见参数
        this.isPathShow = visible;
    }

    /**
       * 设置漫游模型是否可见
       * @param {boolean} visible
       * @memberof Roaming
       */
    setRoamingModelVisibility(visible) {
        if (this.entity) {
            this.entity.model.show = visible;
        }
    }

    /**
       * 设置相机位置
       * @param {cartesian3} position
       * @param {cartesian4} orientation
       * @memberof Roaming
       */

    setCameraPosition(position, orientation) {
        if (!SuperMap3D.defined(position)) {
            return undefined;
        }
        if (!SuperMap3D.defined(orientation)) {
            this.scratch = SuperMap3D.Transforms.eastNorthUpToFixedFrame(position, undefined, this.scratch);
        } else {
            this.scratch = SuperMap3D.Matrix4.fromRotationTranslation(SuperMap3D.Matrix3.fromQuaternion(orientation, this.matrix3Scratch), position, this.scratch);
        }
        this.viewer.scene.camera.lookAtTransform(this.scratch, this.offset); // 修改相机
    }


    /**
       * 监听场景渲染事件
       * @param callback
       */
    addSceneEvent(callback) {
        // addEventListener() → Event.RemoveCallback
        // 监听之前先销毁
        if (this.handler instanceof Function) {
            this.handler();
            this.handler = null;
        }
        this.handler = this.viewer.scene.preRender.addEventListener((scene, time) => {
            callback(time);
        });
    }

    /**
       * 根据时刻获取漫游位置
       * @param {object} time
       * @memberof Roaming
       */
    getRoamingPosition(time) {
        if (this.entity) {
            const position = this.entity.position.getValue(time);
            const orientation = this.entity.orientation.getValue(time);
            this.setCameraPosition(position, orientation);
        }
    }


    /**
       * 漫游的暂停和继续
       * @param {boolean} state false为暂停，ture为继续
       */
    pauseOrContinue(state) {
        if (state) {
            // 继续播放
            if (!this.handler && this.entity) {
                this.setPerspective(this.perspectiveMode)
            }
        } else if (this.handler) {
            // 停止监听屏幕绘制事件(停止相机变化)
            this.handler();
            this.handler = null;
            // 解锁相机视角
            this.viewer.camera.lookAtTransform(SuperMap3D.Matrix4.IDENTITY);
        }
        this.viewer.clock.shouldAnimate = state;
    }

    /**
       * 改变飞行的速度
       * @param {*} value  整数类型
       */
    changeRoamingSpeed(value) {
        this.multiplier = value;
        this.viewer.clock.multiplier = value;
    }

    /**
       * 设置视角
       * @param {*} value  字符串类型 NO TRACK FIRST GOD
       */
    setPerspective(value) {
        this.perspectiveMode = value;
        this.removePerspective();
        switch (value) {
            case "NO":
                break;
            case "TRACK":
                this.viewer.trackedEntity = this.entity;
                break;
            case "FIRST":
                this.offset = new SuperMap3D.Cartesian3(-25, 0, 5);
                this.addSceneEvent((time) => {
                    this.getRoamingPosition(time);
                });
                break;
            case "GOD":
                this.offset = new SuperMap3D.Cartesian3(-25, 0, 50);
                this.addSceneEvent((time) => {
                    this.getRoamingPosition(time);
                });
                break;
            default:
                break;
        }
    }

    /**
       * 清除视角
       */
    removePerspective() {
        this.viewer.trackedEntity = undefined;
        if (this.handler) {
            this.handler();
            this.handler = null;
        }
        this.viewer.camera.lookAtTransform(SuperMap3D.Matrix4.IDENTITY);
    }


    /**
       * 移除漫游
       */
    removeRoaming() {
        if (this.entity !== undefined) {
            if (this.handler instanceof Function) {
                this.handler();
                this.handler = null;
            }
            // 清空实体
            this.viewer.entities.remove(this.entity);
            // 清空内部数据
            this.data = null;
            // 解锁相机视角
            this.viewer.camera.lookAtTransform(SuperMap3D.Matrix4.IDENTITY);
            this.entity = null;
        }
    }
}

window.Roaming = Roaming