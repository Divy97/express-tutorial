const router = require("express").Router();

router.get("/products", (req, res) => {
  res.render("products", {
    title: "Products Page",
  });
});

router.get("/api/products", (req, res) => {
  res.json({});
});

module.exports = router;
