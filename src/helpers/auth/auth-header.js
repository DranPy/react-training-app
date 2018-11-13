import { getUser } from './user';

export function authHeader() {
  let user = JSON.parse(getUser());

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}
