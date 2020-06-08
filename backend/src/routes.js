const routes = require('express').Router();
const UserController = require('./controllers/userController');

routes.post('/register', UserController.registrar);
routes.post('/authenticate', UserController.Authenticate);

module.exports = routes;