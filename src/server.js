const express = require('express')
const cors = require('cors')

const server = express()

const routes = require('./routes/routes')

//connection with database
require("./database/connection");

server.use(express.json())
server.use(cors({ origin: 'http://localhost:8000' }))
server.use(routes)

const PORT = process.env.PORT || 8000;

server.listen(PORT);
