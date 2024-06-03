const loginCheck = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}




module.exports = {loginCheck};