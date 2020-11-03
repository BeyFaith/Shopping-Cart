const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const productsRoute = require("./routes/products");

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

//Server listening
app.listen(3000);
