const storageKey = 'user_token';

export function getUserToken() {
  return localStorage.getItem(storageKey);
}

export function setUserToken(token) {
  return localStorage.setItem(storageKey, token);
}

export function getAuthHeader() {
  let userToken = getUserToken();

  if (userToken) {
    return { Authorization: 'Bearer ' + userToken };
  } else {
    return {};
  }
}
