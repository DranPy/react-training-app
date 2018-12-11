const jsonServer = require('json-server');
const util = require('util');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, 'json-server', 'db.json'));
const router = jsonServer.router('json-server/db.json');
const middlewares = jsonServer.defaults();

const PORT = 4000;
const HOST_NAME = 'localhost';

const SECRET_KEY = 'Secret key it is';

function init() {
  server.use(middlewares);
  server.use(jsonServer.bodyParser);
  // NOTE: this routs must located above authorization middleware
  server.use('/signIn', signIn);
  server.use('/signUp', signUp);
  server.use('/session', checkSession);

  server.use(authorizationMiddleware);
  // NOTE: how to split requests to DB with permissions and without
  server.use(router);
  server.listen(PORT, 'localhost', () => {
    console.log('JSON Server is running');
  });
}

function signIn(req, res) {
  const users = router.db.get('users');
  const user = users.find(req.body).value();

  if (util.isUndefined(user)) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  return res.status(200).json({
    token: generateUserToken(user),
    id: user.id,
    email: user.email,
  });
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

  const userInfo = {
    token: generateUserToken(user),
    id: user.id,
    email: user.email,
  };
  return res.status(200).json(userInfo);
}

function generateUserToken({ id, email }) {
  return jwt.sign({ id, email }, SECRET_KEY);
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
  const user = verifyToken(token);

  return user != null;
}

function verifyToken(token) {
  let user = null;
  if (token) {
    // NOTE: In this place we must check if user exist by decoded id, but it just a training project
    user = jwt.verify(token, SECRET_KEY);
  }
  return user;
}

function checkSession(req, res) {
  const token = req.body.token;
  const user = verifyToken(token);
  if (user) {
    return res.status(200).json({
      token,
      id: user.id,
      email: user.email,
    });
  }
  return res.status(403).json({ message: 'Token is invalid data' });
}

module.exports = {
  init: init,
  port: PORT,
  hostname: HOST_NAME,
};
