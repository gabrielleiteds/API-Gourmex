const express = require('express');
const routes = express();

//authentication
const authentication = require('../middleware/auth')

//multer
const multer = require('../middleware/multer')

routes.use(express.static("public"));

//nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    autoescape: true,
    express: routes
});

//controllers
const Authcontroller = require('../controllers/AuthController')
const UserController = require('../controllers/UserController')
const UploadController = require('../controllers/UploadController')
routes.get('/', (req, res) => {
  res.render('index.html')
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