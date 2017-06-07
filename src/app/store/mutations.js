import * as types from './mutation-types';

export default {
   [types.SET_USER] (state, user) {
     state.session.user = user;
  },

  [types.SET_ACCESS_TOKEN] (state, token) {
    state.session.access_token = token;
  }
}