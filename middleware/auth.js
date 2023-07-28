const ensureAuth = (req, res, next) => { ////this is to see whether the user has login or not 
    if (req.isAuthenticated()) {
      res.locals.user = req.user;
      return next();
    }
    res.redirect("/");
  };
  
  const ensureGuest = (req, res, next) => {
    if (req.isAuthenticated()) {
      return res.redirect("/dashboard");
    }
    next();
  };
  
  module.exports = {
    ensureAuth,
    ensureGuest,
  };
  
