import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem("token") || null
  },
  mutations,
  actions: {},
  modules: {}
});
