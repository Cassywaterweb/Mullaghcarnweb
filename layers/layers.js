var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Mullaghcarndescentpathline_1 = new ol.format.GeoJSON();
var features_Mullaghcarndescentpathline_1 = format_Mullaghcarndescentpathline_1.readFeatures(json_Mullaghcarndescentpathline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mullaghcarndescentpathline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mullaghcarndescentpathline_1.addFeatures(features_Mullaghcarndescentpathline_1);
var lyr_Mullaghcarndescentpathline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mullaghcarndescentpathline_1, 
                style: style_Mullaghcarndescentpathline_1,
                interactive: true,
                title: '<img src="styles/legend/Mullaghcarndescentpathline_1.png" /> Mullaghcarn descent pathline'
            });
var format_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2 = new ol.format.GeoJSON();
var features_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2 = format_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2.readFeatures(json_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2.addFeatures(features_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2);
var lyr_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2, 
                style: style_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2,
                interactive: true,
    title: 'From Glengowna to start fo maullaghcarn summit via forest tracks and road Day 1 Survey images Nov 12th 2022 <br />\
    <img src="styles/legend/FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2_0.png" /> 99_1002<br />\
    <img src="styles/legend/FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2_1.png" /> <br />'
        });
var format_MullaghcarnLink_3 = new ol.format.GeoJSON();
var features_MullaghcarnLink_3 = format_MullaghcarnLink_3.readFeatures(json_MullaghcarnLink_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MullaghcarnLink_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MullaghcarnLink_3.addFeatures(features_MullaghcarnLink_3);
var lyr_MullaghcarnLink_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MullaghcarnLink_3,
maxResolution:28004.466152261964,
 
                style: style_MullaghcarnLink_3,
                interactive: true,
                title: '<img src="styles/legend/MullaghcarnLink_3.png" /> Mullaghcarn Link'
            });
var format_Forestroad_4 = new ol.format.GeoJSON();
var features_Forestroad_4 = format_Forestroad_4.readFeatures(json_Forestroad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forestroad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forestroad_4.addFeatures(features_Forestroad_4);
var lyr_Forestroad_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Forestroad_4, 
                style: style_Forestroad_4,
                interactive: true,
                title: '<img src="styles/legend/Forestroad_4.png" /> Forest road'
            });
var format_Highercontourtrack_5 = new ol.format.GeoJSON();
var features_Highercontourtrack_5 = format_Highercontourtrack_5.readFeatures(json_Highercontourtrack_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highercontourtrack_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highercontourtrack_5.addFeatures(features_Highercontourtrack_5);
var lyr_Highercontourtrack_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Highercontourtrack_5, 
                style: style_Highercontourtrack_5,
                interactive: true,
                title: '<img src="styles/legend/Highercontourtrack_5.png" /> Higher contour track'
            });
var format_MullaghcarndescentDay1imagesNov12th2022_6 = new ol.format.GeoJSON();
var features_MullaghcarndescentDay1imagesNov12th2022_6 = format_MullaghcarndescentDay1imagesNov12th2022_6.readFeatures(json_MullaghcarndescentDay1imagesNov12th2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MullaghcarndescentDay1imagesNov12th2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MullaghcarndescentDay1imagesNov12th2022_6.addFeatures(features_MullaghcarndescentDay1imagesNov12th2022_6);
var lyr_MullaghcarndescentDay1imagesNov12th2022_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MullaghcarndescentDay1imagesNov12th2022_6, 
                style: style_MullaghcarndescentDay1imagesNov12th2022_6,
                interactive: true,
                title: '<img src="styles/legend/MullaghcarndescentDay1imagesNov12th2022_6.png" /> Mullaghcarn descent Day 1 images Nov 12th 2022'
            });

lyr_Googlesatellite_0.setVisible(true);lyr_Mullaghcarndescentpathline_1.setVisible(true);lyr_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2.setVisible(true);lyr_MullaghcarnLink_3.setVisible(true);lyr_Forestroad_4.setVisible(true);lyr_Highercontourtrack_5.setVisible(true);lyr_MullaghcarndescentDay1imagesNov12th2022_6.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_Mullaghcarndescentpathline_1,lyr_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2,lyr_MullaghcarnLink_3,lyr_Forestroad_4,lyr_Highercontourtrack_5,lyr_MullaghcarndescentDay1imagesNov12th2022_6];
lyr_Mullaghcarndescentpathline_1.set('fieldAliases', {'id': 'id', });
lyr_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2.set('fieldAliases', {'Section_li': 'Section_li', 'photo_numb': 'photo_numb', 'photo': 'photo', 'photo_URL': 'photo_URL', 'photo_loca': 'photo_loca', '_photo_loc': '_photo_loc', '_photo_l_1': '_photo_l_1', '_photo_l_2': '_photo_l_2', '_photo_l_3': '_photo_l_3', 'Notes': 'Notes', '_index': '_index', '_parent_ta': '_parent_ta', '_parent_in': '_parent_in', });
lyr_MullaghcarnLink_3.set('fieldAliases', {'id': 'id', });
lyr_Forestroad_4.set('fieldAliases', {'fid': 'Forest contour', });
lyr_Highercontourtrack_5.set('fieldAliases', {'fid': 'fid', });
lyr_MullaghcarndescentDay1imagesNov12th2022_6.set('fieldAliases', {'Section_li': 'Section_li', 'photo_numb': 'photo_numb', 'photo': 'photo', 'photo_URL': 'photo_URL', 'photo_loca': 'photo_loca', '_photo_loc': '_photo_loc', '_photo_l_1': '_photo_l_1', '_photo_l_2': '_photo_l_2', '_photo_l_3': '_photo_l_3', 'Notes': 'Notes', '_index': '_index', '_parent_ta': '_parent_ta', '_parent_in': '_parent_in', });
lyr_Mullaghcarndescentpathline_1.set('fieldImages', {'id': '', });
lyr_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2.set('fieldImages', {'Section_li': 'Hidden', 'photo_numb': 'Hidden', 'photo': 'ExternalResource', 'photo_URL': 'Hidden', 'photo_loca': 'Hidden', '_photo_loc': 'Hidden', '_photo_l_1': 'Hidden', '_photo_l_2': 'Hidden', '_photo_l_3': 'Hidden', 'Notes': 'TextEdit', '_index': 'Hidden', '_parent_ta': 'Hidden', '_parent_in': 'Hidden', });
lyr_MullaghcarnLink_3.set('fieldImages', {'id': '', });
lyr_Forestroad_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_Highercontourtrack_5.set('fieldImages', {'fid': '', });
lyr_MullaghcarndescentDay1imagesNov12th2022_6.set('fieldImages', {'Section_li': 'Hidden', 'photo_numb': 'Hidden', 'photo': 'ExternalResource', 'photo_URL': 'Hidden', 'photo_loca': 'Hidden', '_photo_loc': 'Hidden', '_photo_l_1': 'Hidden', '_photo_l_2': 'Hidden', '_photo_l_3': 'Hidden', 'Notes': 'TextEdit', '_index': 'Hidden', '_parent_ta': 'Hidden', '_parent_in': 'Hidden', });
lyr_Mullaghcarndescentpathline_1.set('fieldLabels', {'id': 'no label', });
lyr_FromGlengownatostartfomaullaghcarnsummitviaforesttracksandroadDay1SurveyimagesNov12th2022_2.set('fieldLabels', {'photo': 'no label', 'Notes': 'inline label', });
lyr_MullaghcarnLink_3.set('fieldLabels', {'id': 'no label', });
lyr_Forestroad_4.set('fieldLabels', {'fid': 'no label', });
lyr_Highercontourtrack_5.set('fieldLabels', {'fid': 'no label', });
lyr_MullaghcarndescentDay1imagesNov12th2022_6.set('fieldLabels', {'photo': 'no label', 'Notes': 'inline label', });
lyr_MullaghcarndescentDay1imagesNov12th2022_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});