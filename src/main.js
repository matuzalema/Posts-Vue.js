import "@babel/polyfill"
import "mutationobserver-shim"
import Vue from "vue"
import "./plugins/bootstrap-vue"
import App from "./App.vue"
import "@fortawesome/fontawesome-free/css/all.css"
import axios from "axios"

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers = {"Content-type": "application/json; charset=UTF-8"};

new Vue({
  render: h => h(App),
}).$mount("#app");
