import axios from 'axios';
// NOTE: add a symlink
// import { host, port } from '/config/json-server';

import { getAuthHeader } from '../helpers/auth/user';

//const baseURL = `http://${host}:${port}`;
const baseURL = `http://localhost:4000`;

const instance = axios.create({ baseURL });

instance.interceptors.request.use(config => {
  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      ...getAuthHeader(),
    },
  };
  return newConfig;
});

export default instance;
