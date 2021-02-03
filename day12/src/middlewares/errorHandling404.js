const errorHandling400 = (req, res) => {
  const payload = {
    message: "Resource not found!",
  };
  return res.status(400).json(payload);
};

module.exports = errorHandling400;
