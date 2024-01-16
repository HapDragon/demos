define(["exports","./Cartesian2-99e64452","./Cartesian4-69ef58e5","./Check-7b2a090c","./OrientedBoundingBox-43298817"],(function(n,e,t,r,a){"use strict";var i={},o=new t.Cartesian3,u=new t.Cartesian3,s=new t.Cartesian3,C=new t.Cartesian3,c=new a.OrientedBoundingBox;function m(n,r,a,i,u){var s=t.Cartesian3.subtract(n,r,o),C=t.Cartesian3.dot(a,s),c=t.Cartesian3.dot(i,s);return e.Cartesian2.fromElements(C,c,u)}i.validOutline=function(n){var r=a.OrientedBoundingBox.fromPoints(n,c).halfAxes,i=e.Matrix3.getColumn(r,0,u),o=e.Matrix3.getColumn(r,1,s),m=e.Matrix3.getColumn(r,2,C),g=t.Cartesian3.magnitude(i),d=t.Cartesian3.magnitude(o),l=t.Cartesian3.magnitude(m);return!(0===g&&(0===d||0===l)||0===d&&0===l)},i.computeProjectTo2DArguments=function(n,r,i,o){var m,g,d=a.OrientedBoundingBox.fromPoints(n,c),l=d.halfAxes,f=e.Matrix3.getColumn(l,0,u),x=e.Matrix3.getColumn(l,1,s),B=e.Matrix3.getColumn(l,2,C),P=t.Cartesian3.magnitude(f),M=t.Cartesian3.magnitude(x),h=t.Cartesian3.magnitude(B),v=Math.min(P,M,h);return(0!==P||0!==M&&0!==h)&&(0!==M||0!==h)&&(v!==M&&v!==h||(m=f),v===P?m=x:v===h&&(g=x),v!==P&&v!==M||(g=B),t.Cartesian3.normalize(m,i),t.Cartesian3.normalize(g,o),t.Cartesian3.clone(d.center,r),!0)},i.createProjectPointsTo2DFunction=function(n,e,t){return function(r){for(var a=new Array(r.length),i=0;i<r.length;i++)a[i]=m(r[i],n,e,t);return a}},i.createProjectPointTo2DFunction=function(n,e,t){return function(r,a){return m(r,n,e,t,a)}},n.CoplanarPolygonGeometryLibrary=i}));
