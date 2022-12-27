const router = require("express").Router();
const path = require("path");
const apiKeyMiddleware = require("../middlewares/apiKey");

// implement middleware for all routers
// router.use(apiKeyMiddleware);

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

// router.get("/api/products", apiKeyMiddleware, (req, res) => {
//   res.json([
//     {
//       id: "111",
//       product: "chrome",
//     },
//     {
//       id: "222",
//       product: "fire-fox",
//     },
//   ]);
// });

module.exports = router;
