const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  color: { type: String, required: true },
  category: { type: String, required: false },
  description: { type: String, required: false }
  //date: { type: Date, required: false }
})

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
