const express = require("express");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes")
const PORT = 3000;
const apiRoutes = require("./routes/apiRoutes")
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
app.use("/", htmlRoutes)
app.use("/api", apiRoutes)
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});