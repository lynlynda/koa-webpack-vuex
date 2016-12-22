import Vue from 'vue';
// 第三方库
import VueRouter from 'vue-router';

import App from './App.vue';
import store from './store/index.js';

import a from './components/a/a.vue';
import b from './components/b/b.vue';

Vue.use(VueRouter);


const routes = [{
  path: '/a',
  component: a
}, {
  path: '/b',
  component: b
}];

const router = new VueRouter({
  routes
});

const app = new Vue({
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  router,
  store,
  render: h => h(App) //将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的，如果在作用域中 h 失去作用， 在应用中会触发报错。
}).$mount('#yd');
router.push('/a');