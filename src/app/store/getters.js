export const isAuthenticated = (state) => {
  return !!state.session.access_token;
};