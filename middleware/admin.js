const admin = (req, res, next) => {
  if (req.admin.roleId == "admin") {
    next()
  } else {
    res.status(401).json({
      status: "failed",
      message: "You don't have permission to access this page",
    })
  }
}

module.exports = admin
