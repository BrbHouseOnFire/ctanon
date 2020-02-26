const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: false },
  genre: { type: String, required: false },
  rating: { type: Number, required: false }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
