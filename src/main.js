import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
// import axios from 'axios';
import store from './store';
import "./main.scss"
import 'animate.css';

// import global components
import Button from '@/components/Button/Button';

// Vue.prototype.axios = axios;
Vue.config.productionTip = false

const install = Vue => {
  Vue.component('Button', Button)
};

export default {
  install
}

export {
  Button,
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
