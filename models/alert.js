const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  transit: { type: String, required: true },
  synopsis: { type: String, required: false },
  date: { type: Date, required: false }
});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
