const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsermail = state => state.auth.user.email;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const authSelectors = {
  getIsLoggedIn,
  getUsermail,
  getIsFetchingCurrent,

};