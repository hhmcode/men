const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookModelSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  author: { type: String }
});

module.exports = mongoose.model("book", bookModelSchema);
