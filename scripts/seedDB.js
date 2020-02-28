const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

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




// manual seed instructions - 
// in  shell (not mongod) type mongo 
//type use ctanondb, enter
// type db.alerts.insert(  <-- leave the parenth open, do not press enter
// un comment parenth at bottom of this page, leave red error alone 
//copy whole array and parenth
//right click next to open parenth in shell, script will run,
// you should see a bulk writr message, BulkWriteResult with 16 records or so
//type db.alerts.find().pretty() shoudl give you it all in a good format. re comment parenth at bottom
        

