const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('json-server/db.json');
const middlewares = jsonServer.defaults();

const port = 4000;
const hostname = 'localhost';

function init() {
  server.use(middlewares);
  server.use(router);
  server.listen(port, 'localhost', () => {
    console.log('JSON Server is running');
  });
}

module.exports = {
  init: init,
  port: port,
  hostname: hostname,
};
