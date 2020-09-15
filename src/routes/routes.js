const { Router } = require('express');
const routes = Router();

//authentication
const authentication = require('../middleware/auth')

//multer
const multer = require('../middleware/multer')
//controllers
const Authcontroller = require('../controllers/AuthController')
const UserController = require('../controllers/UserController')
const UploadController = require('../controllers/UploadController')
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
routes.post('/user/upload', authentication, multer.single('video'), UploadController.upload)

module.exports = routes;