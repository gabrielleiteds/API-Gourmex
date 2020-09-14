const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
  res.send('oi')
})

module.exports = routes;