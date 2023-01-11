 <template>
    <div id="map" style="width: 100%; height: 600px"></div>
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
  name: 'WeixingView',
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
        title: "天地图影像图层",
        source: new XYZ({
          url: "http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=4b8fedb640063036e072980e8d31e1cb",
            attribution: "天地图的属性描述",
            wrapX: true
        })
    });
    var TileLayer2 = new TileLayer({
        title: "天地图影像注记图层",
        source: new XYZ({
          url: "http://t0.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=4b8fedb640063036e072980e8d31e1cb",
            attribution: "天地图的属性描述",
            wrapX: true
        })
    });
    map.addLayer(TileLayer1);
    map.addLayer(TileLayer2);
  },
}
}
  </script>
  
  <style>
  #map:focus {
    outline: #4a74a8 solid 0.15em;
  }
  </style> 
  