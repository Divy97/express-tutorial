function apiKey(req, res, next) {
  const api_key = "12345678";
  const user_api_key = req.query.api_key;

  if (user_api_key && user_api_key == api_key) {
    next();
  } else {
    res.status(400).json({
      message: "not allowed",
    });
  }
}

module.exports = apiKey;
