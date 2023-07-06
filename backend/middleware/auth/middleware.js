const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err) {
      
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    

    req.body.userId = decodedToken.userId;

    
    next();
  });
};

module.exports = authenticateToken;
