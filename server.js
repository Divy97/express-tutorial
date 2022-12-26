const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
  });
});

app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/views/about.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running at port - ${PORT}`);
});
