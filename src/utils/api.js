import axios from 'axios';
// NOTE: add a symlink
// import { host, port } from '../json-server/db.json';

//const URL = `http://${host}:${port}`;
const baseURL = `http://localhost:4000`;

export default axios.create({ baseURL });
