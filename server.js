const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRouter = require("./Routes/bookRouter");

const app = express();
const port = process.env.PORT || 5656;

const db = mongoose.connect(
  "mongodb://hamdislam:hamdislam786@ds137634.mlab.com:37634/books",
  { useNewUrlParser: true },
  err => {
    if (err) throw err;
    console.log(`Successfully connected to database.`);
  }
);

// setting body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes Main EndPoint

app.use("/api/Books", bookRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
