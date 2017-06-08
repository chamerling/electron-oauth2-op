'use strict';

import {app, ipcMain, BrowserWindow} from 'electron';
const isDev = require('electron-is-dev');
const oauthConfig = require('./config').oauth;

if (isDev) {
  console.log('Running in development');
  require('electron-debug')({showDevTools: true});
} else {
  console.log('Running in production');
}

const electronOauth2 = require('electron-oauth2');
const windowParams = {
  alwaysOnTop: true,
  autoHideMenuBar: true,
  webPreferences: {
    nodeIntegration: false
  }
};
const openpaasOAuth = electronOauth2(oauthConfig, windowParams)
let mainWindow = null;

if(process.env.NODE_ENV === 'develop'){
  crashReporter.start();
}

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    movable: true,
    width: 580,
    height: 365
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`)
});

ipcMain.on('openpaas-oauth', (event, arg) => {
  openpaasOAuth.getAccessToken({})
    .then(token => {
      event.sender.send('openpaas-oauth-reply', token);
    }, err => {
      console.log('Error while getting token', err);
    });
});
