'use strict';

import {ipcRenderer} from 'electron';
import * as axios from 'axios';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './components/App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes,
  base: __dirname
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

ipcRenderer.on('openpaas-oauth-reply', (event, arg) => {
  const client = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {'Authorization': 'Bearer ' + arg.access_token},
    responseType: 'json'
  });

  client.get('/user').then(response => {
    console.log(response.data.preferredEmail);
  }, err => {
    console.log(err);
  });
});
