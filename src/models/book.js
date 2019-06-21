const mongoose = require("mongoose");

const Book = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: false },
  genre: { type: String, required: true }
});

module.exports = mongoose.model("Book", Book);
