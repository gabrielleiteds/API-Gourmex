const express = require('express');
const routes = express();

//authentication
const authentication = require('../middleware/auth')

//multer
const multer = require('../middleware/multer')

//models
const User = require('../models/User')
const Upload = require('../models/Upload')

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
routes.get('/profile', authentication, (req, res) => {
	res.render('entrada.html') 
});

routes.post('/user/upload', authentication, multer.single('video'), async (req, res) => {
	const file = req.file; 
	const user_id = req.userId; 

	const user = await User.findAll({
		where: {
			id: user_id, 
		}
	})
	const name = user.name; 

	console.log(user)

	if (file) 
	{
		const filename = file.filename; 
		const upload = await Upload.create({
			filename: req.file.filename,
			user_id, 
			User: user
		});


		res.redirect('/profile')
	}
})

module.exports = routes;