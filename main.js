window.onload = init;

function init() {
  const map = new ol.Map({
    target: 'js-map', // DOOM START MAP
    view: new ol.View({ // CONTROLE DA VISUALIZAÇÃO DO MAPA
      center: [0, 0],
      zoom: 4,
      // maxZoom: 10,
      // minZoom: 4,
      // rotation: 0.5
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
  })

}
