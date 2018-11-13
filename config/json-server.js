const jsonServer = require('json-server');
const util = require('util');
const pluralize = require('pluralize');
const path = require('path');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, 'json-server', 'db.json'));
const router = jsonServer.router('json-server/db.json');
const middlewares = jsonServer.defaults();

const port = 4000;
const hostname = 'localhost';

const key = 'Secret key it is';

function init() {
  server.use(middlewares);
  server.use(jsonServer.bodyParser);

  server.use('/login', (req, res) => {
    const user = router.db.get('users');
    // .getById(req.params.id)
    // .cloneDeep()
    // .value();

    if (util.isUndefined(user)) {
      return res.status(400).json({ message: 'invalid' });
    }

    // jwt.decode

    const response = {
      user,
      token: jwt.sign(user, key),
    };

    return res.status(200).json(response);
  });

  server.use('/logup', (req, res) => {
    // const user = router.db
    //   .get('users')
    //   .getById(req.params.id)
    //   .cloneDeep()
    //   .value();
    // if (util.isUndefined(user)) {
    //   return res.status(400).json({ message: 'invalid' });
    // }
    // return res.status(200).json(user);
  });

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
