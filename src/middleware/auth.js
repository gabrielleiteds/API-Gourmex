const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

module.exports = (req, res, next) => {
  const { authorization } = req.cookies;

  if(!authorization){
    return res.status(401).redirect('/');
  }

  jwt.verify(authorization, jwtConfig.secret, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: 'Invalid token' });

    req.userId = decoded.id;
    return next();
  });
}
