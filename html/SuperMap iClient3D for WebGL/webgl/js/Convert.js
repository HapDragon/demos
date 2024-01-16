var SuperMap3DToSuperMap = {
    convertPoint : function(SuperMap3D,SuperMap,point){
        if(!SuperMap3D || !SuperMap || !point){
            return undefined;
        }
        var lonlatPoint = SuperMap3D.Cartographic.fromCartesian(point);
        var x = SuperMap3D.Math.toDegrees(lonlatPoint.longitude);
        var y = SuperMap3D.Math.toDegrees(lonlatPoint.latitude);
        if(x && y){
            return new SuperMap.Geometry.Point(x,y);
        }
        return undefined;
    },
    convertPolyline : function(SuperMap3D,SuperMap,polyline){
        if(!SuperMap3D || !SuperMap || !polyline){
            throw undefined;
        }
        var points = polyline.positions;
        if(points && points instanceof Array && points.length >= 2){
            var arr = [];
            for(var i = 0,j = points.length;i < j;i++){
                var point = this.convertPoint(SuperMap3D,SuperMap,points[i]);
                if(point){
                    arr.push(point);
                }
            }
            return new SuperMap.Geometry.LineString(arr);
        }
        return undefined;
    },
    convertPolygon : function(SuperMap3D,SuperMap,polygon){
        if(!SuperMap3D || !SuperMap || !polygon){
            throw undefined;
        }
        var points = polygon.positions;
        if(points && points instanceof Array && points.length >= 3){
            var arr = [];
            for(var i = 0,j = points.length;i < j;i++){
                var point = this.convertPoint(SuperMap3D,SuperMap,points[i]);
                if(point){
                    arr.push(point);
                }
            }
            var linearRing = new SuperMap.Geometry.LinearRing(arr);
            return new SuperMap.Geometry.Polygon(linearRing);
        }
        return undefined;
    }
};

var SuperMapToSuperMap3D = {
    geometryToEntity : function(SuperMap3D,SuperMap,geometry){
        var className = geometry.CLASS_NAME;
        if(className == 'SuperMap.Geometry.MultiPolygon'){
            return this.multipolygonToEntities(SuperMap3D,SuperMap,geometry);
        }
        else if(className == 'SuperMap.Geometry.Polygon'){
            return [this.polygonToEntity(SuperMap3D,SuperMap,geometry)];
        }
        return undefined;
    },
    polygonToEntity : function(SuperMap3D,SuperMap,geometry){
        var hierarchy = {};
        for(var i = 0,j = geometry.components.length;i < j;i++){
            if(i == 0){
                hierarchy.positions = this.GeometrytoDegreesArray(SuperMap3D,SuperMap,geometry.components[i]);
            }
            else{
                if(!hierarchy.holes){
                    hierarchy.holes = [];
                }
                hierarchy.holes.push({
                    positions : this.GeometrytoDegreesArray(SuperMap3D,SuperMap,geometry.components[i])
                });
            }
        }
        return new SuperMap3D.Entity({
            polygon : {
                hierarchy : hierarchy,
                material : SuperMap3D.Color.BLUE.withAlpha(0.5)
            },
            depthTestEnabled : false
        });

    },
    multipolygonToEntities : function(SuperMap3D,SuperMap,geometry){
        var components = geometry.components;
        var resultEntities = [];
        var entity;
        for(var item in components){
            entity = this.polygonToEntity(SuperMap3D,SuperMap,components[item]);
            resultEntities.push(entity);
        }
        return resultEntities;
    },
    GeometrytoDegreesArray : function(SuperMap3D,SuperMap,geometry){
        var vertices = geometry.getVertices();
        var degreesArr = [];
        for(var o in vertices){
            degreesArr.push(vertices[o].x,vertices[o].y);
        }
        return SuperMap3D.Cartesian3.fromDegreesArray(degreesArr);
    }
};

