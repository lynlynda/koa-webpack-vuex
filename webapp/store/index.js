import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import addNum from './modules/addNum';
Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  modules: {
    addNum
  }
})