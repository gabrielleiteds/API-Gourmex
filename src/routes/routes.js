const { Router } = require('express');
const routes = Router();

//authentication
const authentication = require('../middleware/auth')

//controllers
const Authcontroller = require('../controllers/AuthController')
const UserController = require('../controllers/UserController')

routes.get('/', (req, res) => {
  res.send('oi')
})

//register
routes.post('/register', UserController.create)

// Login and logout
routes.post('/login', Authcontroller.authenticate);
routes.post('/logout', Authcontroller.logoutUser);

//user routes
routes.get('/user/:id', authentication, UserController.show);

module.exports = routes;