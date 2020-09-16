const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')

const server = express()

const routes = require('./routes/routes')

//connection with database
require("./database/connection");

server.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
server.use(bodyParser.text({ defaultCharset: 'utf-8' }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(routes)

const PORT = process.env.PORT || 8000;

server.listen(PORT);
