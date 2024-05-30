var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TDS_1 = new ol.format.GeoJSON();
var features_TDS_1 = format_TDS_1.readFeatures(json_TDS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDS_1.addFeatures(features_TDS_1);
var lyr_TDS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDS_1, 
                style: style_TDS_1,
                popuplayertitle: "TDS",
                interactive: true,
                title: '<img src="styles/legend/TDS_1.png" /> TDS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TDS_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TDS_1];
lyr_TDS_1.set('fieldAliases', {'ID_TRC': 'ID_TRC', 'NOM_VOIE': 'NOM_VOIE', 'trf-calm': 'trf-calm', 'POI': 'POI', 'behaviour': 'behaviour', 'traf-characteristics': 'traf-characteristics', 'visibility': 'visibility', 'Sc-truck': 'Sc-truck', 'TDS': 'TDS', 'class': 'class', });
lyr_TDS_1.set('fieldImages', {'ID_TRC': 'TextEdit', 'NOM_VOIE': 'TextEdit', 'trf-calm': 'TextEdit', 'POI': 'TextEdit', 'behaviour': 'TextEdit', 'traf-characteristics': 'TextEdit', 'visibility': 'TextEdit', 'Sc-truck': 'TextEdit', 'TDS': 'TextEdit', 'class': 'TextEdit', });
lyr_TDS_1.set('fieldLabels', {'ID_TRC': 'inline label - visible with data', 'NOM_VOIE': 'inline label - visible with data', 'trf-calm': 'inline label - visible with data', 'POI': 'inline label - visible with data', 'behaviour': 'inline label - visible with data', 'traf-characteristics': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'Sc-truck': 'inline label - visible with data', 'TDS': 'inline label - visible with data', 'class': 'inline label - visible with data', });
lyr_TDS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});