const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/about.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at port - ${PORT}`);
});
