<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/ol/ol.css">
    <div id="map" style="width: 100%; height: 600px"></div>
    <div style="display: none;">
      <!-- Clickable label for Vienna -->
      <a class="overlay" id="vienna" target="_blank" href="https://en.wikipedia.org/wiki/Vienna">Vienna</a>
      <div id="marker" title="Marker"></div>
      <div id="popup"></div>
    </div>

</template>
<script>
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {fromLonLat, toLonLat} from 'ol/proj';
import {toStringHDMS} from 'ol/coordinate';
import Overlay from 'ol/Overlay';
import { transform, get } from "ol/proj";


export default {
  name: 'hangxian',
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const  map = new Map({
        layers: [],
        target: 'map',
        
        view: new View({
          center: [0, 0],
          projection: 'EPSG:4326',
          zoom: 2,
        }),
      });
      var TileLayer1 = new TileLayer({
        title: "天地图矢量图层",
        source: new XYZ({
          url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=4b8fedb640063036e072980e8d31e1cb",
            attribution: "天地图的属性描述",
            wrapX: true
        })
    });
    var TileLayer2 = new TileLayer({
        title: "天地图矢量注记图层",
        source: new XYZ({
          url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=4b8fedb640063036e072980e8d31e1cb",
            attribution: "天地图的属性描述",
            wrapX: true
        })
    });
    map.addLayer(TileLayer1);
    map.addLayer(TileLayer2);
    const pos = fromLonLat([16.3725, 48.208889]);
    

// Popup showing the position the user clicked
const popup = new Overlay({
  element: document.getElementById('popup'),
});
map.addOverlay(popup);

// Vienna marker
const marker = new Overlay({
  position: pos,
  positioning: 'center-center',
  element: document.getElementById('marker'),
  stopEvent: false,
});
map.addOverlay(marker);

// Vienna label
const vienna = new Overlay({
  position: pos,
  element: document.getElementById('vienna'),
});
map.addOverlay(vienna);

const element = popup.getElement();
map.on('click', function (evt) {
   
  const coordinate = evt.coordinate;
  //const coordinate1=transform(coordinate,'EPSG:3857', 'EPSG:4326')
  alert ('鼠标坐标为：'+coordinate);});
  },
  },
};
</script>
<style>
#map:focus {
  outline: #4a74a8 solid 0.15em;
}
#marker {
        width: 20px;
        height: 20px;
        border: 1px solid #088;
        border-radius: 10px;
        background-color: #0FF;
        opacity: 0.5;
      }
      #vienna {
        text-decoration: none;
        color: white;
        font-size: 11pt;
        font-weight: bold;
        text-shadow: black 0.1em 0.1em 0.2em;
      }
      .popover-body {
        min-width: 276px;
      }

</style>