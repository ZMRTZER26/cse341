const ensureAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized - please login" });
};

module.exports = ensureAuthenticated;
