import axios from 'axios';
// NOTE: add a symlink
// import { host, port } from '/config/json-server';

//const baseURL = `http://${host}:${port}`;
const baseURL = `http://localhost:4000`;

export default axios.create({ baseURL });
