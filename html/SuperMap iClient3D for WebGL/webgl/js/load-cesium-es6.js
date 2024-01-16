window.SuperMap3D_BASE_URL = "../Source/";
import * as SuperMap3D from "../../Source/SuperMap3D.js";
window.SuperMap3D = SuperMap3D;

if (!window.startupCalled && typeof window.onload === 'function') {
    window.onload(SuperMap3D);
}
