const express = require("express");
const router = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3000;

const mainRouter = require("./routes/index");
const productRouter = require("./routes/products");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(mainRouter);
app.use(productRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port - ${PORT}`);
});
