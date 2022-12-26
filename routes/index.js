const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
  });
});

router.get("/download", (req, res) => {
  console.log(__dirname);
  res.download(
    "C:/Users/divyp/OneDrive/Desktop/extra/express-tutorial/views/about.ejs"
  );
});

module.exports = router;
