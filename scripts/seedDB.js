const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ctanondb"
);

const alertSeed = [
  {
    transit: "red line",
    synopsis: "person puked on the red line northbound",
    date: new Date(Date.now())
  },
  {
    transit: "blue line",
    synopsis: "super loud jazz at the chicago stop",
    date: new Date(Date.now())
  },

];

db.Alert
  .remove({})
  .then(() => db.Alert.collection.insertMany(alertSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
