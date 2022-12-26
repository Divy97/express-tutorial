const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const mainRouter = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port - ${PORT}`);
});
