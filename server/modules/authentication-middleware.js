const rejectUnauthenticated = (req, res, next) => {

  if (req.isAuthenticated() && req.user.role === 'admin') {
    next();
  } else if (req.isAuthenticated() && req.user.role === 'partner') {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticated };