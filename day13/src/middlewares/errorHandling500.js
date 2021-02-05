const errorHandling = (err, req, res, next) => {
  const payload = {
    success: false,
    message: "500 internal server error!",
    stack: err.stack,
  };

  return res.status(500).json(payload);
};

module.exports = errorHandling;
