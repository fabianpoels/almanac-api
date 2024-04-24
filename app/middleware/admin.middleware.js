const adminMiddleware = function (req, res, next) {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(403)
    res.send()
  }
}

export default adminMiddleware
