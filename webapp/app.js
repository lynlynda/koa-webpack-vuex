import Vue from 'vue';
// 第三方库
import VueRouter from 'vue-router';

import App from './App.vue';
import store from './store/index.js';
Vue.use(VueRouter);
const app = new Vue({
  el: "#yd",
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  render: h => h(App)
});
let router = new VueRouter();
router.map({
  '/zan': {
    components: zan
  },
  '/cai': {
    components: cai
  }
});
router.start(app, '#yd');