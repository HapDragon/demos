var developMode = false;

if (developMode) {
    require.config({
        baseUrl: '../Source'
    });
} else {
    require.config({
        waitSeconds: 600,
        paths: {
            'SuperMap3D': '../../../../Build/SuperMap3D/SuperMap3D'
        },
        shim: {
            SuperMap3D: {
                exports: 'SuperMap3D'
            }
        }
    });
}

if (typeof SuperMap3D !== "undefined") {
    onload(SuperMap3D);
} else if (typeof require === "function") {
    require(["SuperMap3D"], onload);
}
