# Electron + OAuth2 + OpenPaaS

This shows how an Electron based application can use OAuth2 with OpenPaaS. There is nothing sexy here, just saving this for later use in the real OpenPaaS Desktop Apps.

[![Youtube video](https://img.youtube.com/vi/1ACQkQ36QCY/0.jpg)](https://www.youtube.com/watch?v=1ACQkQ36QCY)

## Install dependencies

```
yarn
```

## Configure

1. Open your OpenPaaS instance
2. Go to 'Control center > Applications' then create a new application.
3. Copy client ID and client secret and paste them in the `app/config.js` file
4. Update your OpenPaaS URL in the `app/config.js` file if needed

## Run

```
./node_modules/.bin/electron .
```