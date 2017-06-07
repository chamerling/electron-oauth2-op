import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as types from './mutation-types';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    server: {
      url: 'http://localhost:8080'
    },
    session: {
      access_token: false,
      user: {}
    },
  },
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})