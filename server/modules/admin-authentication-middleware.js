const rejectUnauthenticated = (req, res, next) => {
    // check if logged in AS ADMIN
    if (req.isAuthenticated() && req.user.role === 'admin') {
      // They were authenticated! User may do the next thing
      // Note! They may not be Authorized to do all things
      next();
    } else {
      // failure best handled on the server. do redirect here.
      res.sendStatus(403);
    }
  };
  
  module.exports = { rejectUnauthenticated };
  