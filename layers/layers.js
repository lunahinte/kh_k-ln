var wms_layers = [];

var format_Stadtteil_0 = new ol.format.GeoJSON();
var features_Stadtteil_0 = format_Stadtteil_0.readFeatures(json_Stadtteil_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtteil_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtteil_0.addFeatures(features_Stadtteil_0);
var lyr_Stadtteil_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtteil_0, 
                style: style_Stadtteil_0,
                popuplayertitle: 'Stadtteil',
                interactive: false,
                title: '<img src="styles/legend/Stadtteil_0.png" /> Stadtteil'
            });
var lyr_Parkanlagen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.stadt-koeln.de/arcgis/services/freizeit_natur_sport/parkanlagen/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Parkanlagen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Parkanlagen',
                            popuplayertitle: 'Parkanlagen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Parkanlagen_1, 0]);
var format_Krankenhuser_2 = new ol.format.GeoJSON();
var features_Krankenhuser_2 = format_Krankenhuser_2.readFeatures(json_Krankenhuser_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Krankenhuser_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Krankenhuser_2.addFeatures(features_Krankenhuser_2);
var lyr_Krankenhuser_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Krankenhuser_2, 
                style: style_Krankenhuser_2,
                popuplayertitle: 'Krankenhäuser',
                interactive: true,
                title: '<img src="styles/legend/Krankenhuser_2.png" /> Krankenhäuser'
            });

lyr_Stadtteil_0.setVisible(true);lyr_Parkanlagen_1.setVisible(true);lyr_Krankenhuser_2.setVisible(true);
var layersList = [lyr_Stadtteil_0,lyr_Parkanlagen_1,lyr_Krankenhuser_2];
lyr_Stadtteil_0.set('fieldAliases', {'nummer': 'nummer', 'name': 'name', 'nr_stbez': 'nr_stbez', 'stbezirk': 'stbezirk', 'flaeche': 'flaeche', });
lyr_Krankenhuser_2.set('fieldAliases', {'fid': 'fid', 'KH_ID': 'KH_ID', 'KH_BEZ': 'KH_BEZ', 'KH_ART': 'KH_ART', 'TRAEGER': 'TRAEGER', 'RECHTSFOR': 'RECHTSFOR', 'BS_BEZ': 'BS_BEZ', 'PLZ': 'PLZ', 'ADRESSE': 'ADRESSE', 'ORT': 'ORT', 'popup_title': 'popup_title', });
lyr_Stadtteil_0.set('fieldImages', {'nummer': 'TextEdit', 'name': 'TextEdit', 'nr_stbez': 'TextEdit', 'stbezirk': 'TextEdit', 'flaeche': 'TextEdit', });
lyr_Krankenhuser_2.set('fieldImages', {'fid': 'TextEdit', 'KH_ID': 'TextEdit', 'KH_BEZ': 'TextEdit', 'KH_ART': 'TextEdit', 'TRAEGER': 'TextEdit', 'RECHTSFOR': 'TextEdit', 'BS_BEZ': 'TextEdit', 'PLZ': 'TextEdit', 'ADRESSE': 'TextEdit', 'ORT': 'TextEdit', 'popup_title': 'Range', });
lyr_Stadtteil_0.set('fieldLabels', {'nummer': 'no label', 'name': 'no label', 'nr_stbez': 'no label', 'stbezirk': 'no label', 'flaeche': 'no label', });
lyr_Krankenhuser_2.set('fieldLabels', {'fid': 'hidden field', 'KH_ID': 'hidden field', 'KH_BEZ': 'no label', 'KH_ART': 'hidden field', 'TRAEGER': 'hidden field', 'RECHTSFOR': 'hidden field', 'BS_BEZ': 'hidden field', 'PLZ': 'no label', 'ADRESSE': 'no label', 'ORT': 'no label', 'popup_title': 'no label', });
lyr_Krankenhuser_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});