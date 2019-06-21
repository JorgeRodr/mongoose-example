const mongoose = require("mongoose");

const Book = new mongoose.Schema({
  title: { type: String, required: true },
  publishDate: { type: String, required: false },
  genre: { type: String, required: true },
  author: { type: String, required: true },
  cover: { type: String, required: true },
  stock: { type: Number, required: true }
});

module.exports = mongoose.model("Book", Book);
