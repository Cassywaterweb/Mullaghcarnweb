var size = 0;
var placement = 'point';
function categories_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '99_1002':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.6 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(24,234,150,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(17,225,211,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("q2wHide_Section_li");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Helvetica\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("q2wHide_Section_li") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("q2wHide_Section_li"));
    }
    
var style = categories_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
