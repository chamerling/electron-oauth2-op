export const isAuthenticated = (state) => {
  return !!state.session.access_token;
};

export const username = (state) => {
  return state.session.user._id ? state.session.user.emails[0] : '';
}

export const onAuthenticated = (state) => {
  return state.session.ready;
}