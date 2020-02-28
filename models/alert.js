const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  line: { type: String, required: true },
  category: { type: String, required: false },
  description: { type: String, required: false },
  votes: { type: Number, required: false, default: 0 },
  date: { type: Date, required: false }
})


const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;