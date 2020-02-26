const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  synopsis: { type: String, required: false },
  date: { type: Date, required: false }
});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
