const jwt = require('jwt');


const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }
    const decoded = jwt.verify(tokenrreplace('Bearer ', ''), process.env.JWT_SECRET);
    if (!decoded) {
        return res.status(401).json({ message: 'Access Denied: Invalid token' });
    }
    req.user = decoded;
    next();

};

module.exports = authMiddleware;
