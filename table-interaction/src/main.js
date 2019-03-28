import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./styles/index.scss";

import ECharts from "vue-echarts";

import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";

import "echarts-gl";

Vue.component("v-chart", ECharts);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

window.$ = window.jQuery = require("jquery");

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
