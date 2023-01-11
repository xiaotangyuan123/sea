import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
//import './assets/main.css'
import 'ant-design-vue/dist/antd.css';
//import BootstrapVue from "bootstrap-vue";
// app.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import  'bootstrap'
const app = createApp(App)
app.use(router).use(Antd)


app.config.productionTip = false;
app.mount('#app')
///







