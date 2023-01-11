<template>
  <div id="map" style="width: 100%; height: 600px"></div>
  
</template>

<script>
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {Fill, Stroke, Style} from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
// import ScaleLine from 'ol/control/ScaleLine';
// import MousePosition from 'ol/control/MousePosition';
// import ZoomSlider from 'ol/control/ZoomSlider';
// import {createStringXY} from 'ol/coordinate';

export default {
  name: 'about',
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const  map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: 'map',
        view: new View({
          center: [120,0],
          projection: 'EPSG:4326',
          zoom: 2,
        }),}) ;

        var TileLayer1 = new TileLayer({
        title: "天地图地形图层",
        source: new XYZ({
          url: "http://t0.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=4b8fedb640063036e072980e8d31e1cb",
            attribution: "天地图的属性描述",
            wrapX: true
        })
    });
    var TileLayer2 = new TileLayer({
        title: "天地图地形注记图层",
        source: new XYZ({
          url: "http://t0.tianditu.com/DataServer?T=cta_w&x={x}&y={y}&l={z}&tk=4b8fedb640063036e072980e8d31e1cb",
            attribution: "天地图的属性描述",
            wrapX: true
        })
    });
    map.addLayer(TileLayer1);
    map.addLayer(TileLayer2);
  

        const vectorLayer = new VectorLayer({
        //矢量数据源
        name:"dizhen",
        source: new VectorSource({
        projection: 'EPSG:4326',
        url:'./dizhenpoint.json',
        format: new GeoJSON()
        }),
      //样式设置
      });
      map.addLayer(vectorLayer);//加入到图层中 
  },          
},
}


</script>

<style> 
#map:focus {
  outline: #4a74a8 solid 0.15em;
}
</style>

