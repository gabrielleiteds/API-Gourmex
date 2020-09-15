const { Router } = require('express');
const routes = Router();

//authentication
const authentication = require('../middleware/auth')

//multer
const multer = require('../middleware/multer')
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
routes.post('/user/upload/:id', authentication, multer.single('video'), (req, res) => {
	// Se houve sucesso no armazenamento
    if (req.file) {
    	const originalname = req.file.originalname
    	console.log(originalname)
        // Vamos imprimir na tela o objeto com os dados do arquivo armazenado
        return res.send(req.file);
    }

    // Se o objeto req.file for undefined, ou seja, não houve sucesso, vamos imprimir um erro!
    return res.send('Houve erro no upload!');
})

module.exports = routes;