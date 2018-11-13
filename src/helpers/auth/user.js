const storageKey = 'user';

export function getUser() {
  localStorage.getItem(storageKey);
}

export function setUserToken(token) {
  localStorage.getItem(storageKey, token);
}
