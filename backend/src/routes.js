const routes = require('express').Router();
const UserController = require('./controllers/userController');

routes.post('/register', UserController.registrar);


module.exports = routes;