import * as types from './mutation-types'
import * as axios from 'axios';
import {ipcRenderer} from 'electron';

export const getToken = ({commit, state}) => {
  ipcRenderer.send('openpaas-oauth', 'getToken');
};

export const getUser = ({ commit, state }) => {
  const client = axios.create({
    baseURL: `${state.server.url}/api/`,
    headers: {'Authorization': 'Bearer ' + state.session.access_token},
    responseType: 'json'
  });

  return new Promise((resolve, reject) => {
    client.get('/user').then(response => {
      commit(types.SET_USER, response.data);
      resolve();
    }, err => {
      console.log(err);
      reject(err);
    });
  });
};
