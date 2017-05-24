'use strict';

import {ipcRenderer} from 'electron';
import * as axios from 'axios';

ipcRenderer.on('openpaas-oauth-reply', (event, arg) => {
  document.getElementById('login').hidden = true;
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
