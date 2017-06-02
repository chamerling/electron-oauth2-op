'use strict';

import {ipcRenderer} from 'electron';
import * as axios from 'axios';

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});

ipcRenderer.on('openpaas-oauth-reply', (event, arg) => {
  const client = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {'Authorization': 'Bearer ' + arg.access_token},
    responseType: 'json'
  });

  client.get('/user').then(response => {
    document.getElementById('hello').innerText = `Hello ${response.data.preferredEmail}`;
  }, err => {
    console.log(err);
  });
});

function login() {
  ipcRenderer.send('openpaas-oauth', 'getToken')
}
