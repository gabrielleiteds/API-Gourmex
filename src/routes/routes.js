const { Router } = require('express');
const routes = Router();

//controllers
const Authcontroller = require('../controllers/AuthController')

routes.get('/', (req, res) => {
  res.send('oi')
})

// Login and logout
routes.post('/login', Authcontroller.authenticate);
routes.post('/logout', Authcontroller.logoutUser);

module.exports = routes;