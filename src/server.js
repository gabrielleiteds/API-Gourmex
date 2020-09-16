const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const server = express()

const routes = require('./routes/routes')

//connection with database
require("./database/connection");

server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(routes); 

const PORT = process.env.PORT || 8000;

server.listen(PORT);
