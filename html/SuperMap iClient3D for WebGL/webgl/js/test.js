class initGlobeTest {
  constructor(SuperMap3D, container) {
    this.SuperMap3D = SuperMap3D;
    const { Scene, Globe, Cartesian3, Ellipsoid, SingleTileImageryProvider } =
      SuperMap3D;
    this.container = document.getElementById(container);

    this.element = document.createElement("div");
    this.element.className = "widget";
    this.container.appendChild(this.element);
    this.canvas = document.createElement("canvas");
    this.canvas.oncontextmenu = function () {
      return false;
    };
    this.canvas.onselectstart = function () {
      return false;
    };
    this.element.appendChild(this.canvas);

    this.scene = new Scene({
      canvas: this.canvas,
    });

    this.scene.pixelRatio = 1;
    this.scene.camera.constrainedAxis = Cartesian3.UNIT_Z;
    this.configureCameraFrustum();

    this.scene.globe = new Globe(Ellipsoid.WGS84);

    this.curCanvasClientWidth = 0;
    this.curCanvasClientHeight = 0;
    this.lastDevicePixelRatio = 0;
    SuperMap3D.requestAnimationFrame(this.render());
  }

  configurePixelRatio() {
    let pixelRatio = window.devicePixelRatio;
    this.scene.pixelRatio = pixelRatio;
    return pixelRatio;
  }

  computeWidthHeight(width, height, maxWidth, maxHeight) {
    let realCanvasWidth = width;
    let realCanvasHeight = height;
    if (realCanvasWidth > maxWidth || realCanvasHeight > maxHeight) {
      let scaleWidth = realCanvasWidth / maxWidth;
      let scaleHeight = realCanvasHeight / maxHeight;

      if (scaleWidth > scaleHeight) {
        realCanvasWidth = maxWidth;
        realCanvasHeight = (height / width) * maxWidth;
      } else {
        realCanvasWidth = (width / height) * maxHeight;
        realCanvasHeight = maxHeight;
      }
    }

    return {
      width: realCanvasWidth,
      height: realCanvasHeight,
    };
  }

  configureCanvasSize() {
    let width = this.canvas.clientWidth;
    let height = this.canvas.clientHeight;
    let pixelRatio = this.configurePixelRatio();
    this.curCanvasClientWidth = width;
    this.curCanvasClientHeight = height;
    width *= pixelRatio;
    height *= pixelRatio;
    let maxDrawingBufferWidth = 3840;
    let maxDrawingBufferHeight = 1080;
    let newWidthHeight = this.computeWidthHeight(
      width,
      height,
      maxDrawingBufferWidth,
      maxDrawingBufferHeight
    );
    this.canvas.width = newWidthHeight.width;
    this.canvas.height = newWidthHeight.height;
    this.lastDevicePixelRatio = window.devicePixelRatio;
  }

  configureCameraFrustum() {
    let width = this.canvas.width;
    let height = this.canvas.height;
    if (width !== 0 && height !== 0) {
      let frustum = this.scene.camera.frustum;
      if (frustum.aspectRatio) {
        frustum.aspectRatio = width / height;
      } else {
        frustum.top = frustum.right * (height / width);
        frustum.bottom = -frustum.top;
      }
    }
  }

  resize() {
    let width = this.canvas.clientWidth;
    let height = this.canvas.clientHeight;
    if (
      this.curCanvasClientWidth === width &&
      this.curCanvasClientHeight === height &&
      this.lastDevicePixelRatio === window.devicePixelRatio
    ) {
      return;
    }

    this.configureCanvasSize();
    this.configureCameraFrustum();
  }

  render() {
    this.resize();
    this.scene.initializeFrame();
    this.scene.render();
    SuperMap3D.requestAnimationFrame(this.render);
  }

  getname() {
    console.log("this.container", this.container);
  }

  test() {
    console.log("this.SuperMap3D", this.SuperMap3D);
    this.getname();
  }

  getVariable() {
    return this.scene;
  }
}
