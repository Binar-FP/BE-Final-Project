const buyer = (req, res, next) => {
  if (req.buyer.roleId == "buyer") {
    next();
  } else {
    res.status(401).json({
      status: "failed",
      message: "You don't have permission to access this page",
    });
  }
};

module.exports = buyer;
