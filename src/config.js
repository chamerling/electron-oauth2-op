module.exports = {
  oauth: {
    clientId: process.env.OP_CLIENT_ID || 'ZUFz9VLQIusLIUkgCQFK',
    clientSecret: process.env.OP_CLIENT_SECRET || '3JRXjOad5YTSzdaTpxSUdgHMbxGRI23hd1cMIiBq',
    authorizationUrl: 'http://localhost:8080/oauth/authorize',
    tokenUrl: 'http://localhost:8080/oauth/token',
    useBasicAuthorizationHeader: false,
    // don't touch me
    redirectUri: 'http://localhost'
  }
};
