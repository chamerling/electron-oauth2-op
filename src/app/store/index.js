import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as types from './mutation-types';
import plugins from './plugins';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    server: {
      url: 'http://localhost:8080'
    },
    session: {
      access_token: window.localStorage.getItem('access_token'),
      user: {}
    },
  },
  actions,
  getters,
  mutations,
  plugins,
  strict: process.env.NODE_ENV !== 'production'
})