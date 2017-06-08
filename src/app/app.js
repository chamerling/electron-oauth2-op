'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './components/App.vue';
import store from './store';
import {init as initAuth} from './auth';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes,
  base: __dirname
});

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

initAuth(store);
