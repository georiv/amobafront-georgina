import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import moduleUsers from "./users/user.js";
// Install vuex
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user: moduleUsers,
  },
  plugins: [createPersistedState()],
});
