# Electron + OAuth2 + OpenPaaS

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