const jsonServer = require('json-server');
const util = require('util');
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
  // NOTE: this routs must located above authorization middleware
  server.use('/signIn', signIn);
  server.use('/signUp', signUp);
  server.use('/session', checkSession);

  server.use(authorizationMiddleware);

  server.use(router);
  server.listen(port, 'localhost', () => {
    console.log('JSON Server is running');
  });
}

function signIn(req, res) {
  const users = router.db.get('users');
  const user = users.find(req.body).value();

  if (util.isUndefined(user)) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  return res.status(200).json(generateUserToken(user.id));
}

async function signUp(req, res) {
  const users = router.db.get('users');
  let user = users.find({ email: req.body.email }).value();

  if (!util.isUndefined(user)) {
    return res.status(400).json({ error: 'This email is exist in database' });
  }

  user = await router.db
    .get('users')
    .insert({ email: req.body.email, password: req.body.password })
    .write();

  return res.status(200).json(generateUserToken(user.id));
}

function generateUserToken(userId) {
  return {
    token: jwt.sign({ id: userId }, key),
  };
}

function authorizationMiddleware(req, res, next) {
  if (isAuthorized(req.headers.authorization)) {
    req.user = jwt.decode(req.headers.authorization);
    next();
  } else {
    res.sendStatus(401);
  }
}

function isAuthorized(authorization) {
  const token = authorization ? authorization.trim().split(' ')[1] : null;
  const isUserAuthorized = verifyToken(token);

  return isUserAuthorized;
}

function verifyToken(token) {
  let isTokenValid = true;
  if (!token) {
    isTokenValid = false;
  } else {
    const decodeUser = jwt.verify(token, key);
    // NOTE: In this place we must check if user exist by decoded id, but it just a training project
    if (!decodeUser && !decodeUser.id) {
      isTokenValid = false;
    }
  }
  return isTokenValid;
}

function checkSession(req, res) {
  const token = req.body.token;
  if (verifyToken(token)) {
    return res.sendStatus(200);
  }
  return res.status(403).json({ message: 'Token is invalid data' });
}

module.exports = {
  init: init,
  port: port,
  hostname: hostname,
};
