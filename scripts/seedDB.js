const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Alert collection and inserts the alerts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ctanondb"
);


const alertSeed = 

[
  {
    line: "Red",
    category: "Jabroni",
    description: "This numbskull is playing 2 chains 2 loud at Clark/Division",
    votes: 5,
    date: new Date(Date.now())
  },
  {
    line: "Blue",
    category: "John Wayne Gacy's Ghost",
    description: "I'm like 99% I just saw him at Diversey",
    votes: 122,
    date: new Date(Date.now())
  }
]




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




