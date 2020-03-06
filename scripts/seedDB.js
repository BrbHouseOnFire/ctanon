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
    category: "indExp",
    description: "I saw an ass crack at Harrison",
    votes: -4,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Blue",
    category: "John Wayne Gacy's Ghost",
    description: "I'm like 99% I just saw him at Diversey",
    votes: 122,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Red",
    category: "Delayed Train",
    description: "We've been standing at between Thorndale and Granville for 10 mins",
    votes: 10,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Blue",
    category: "Unwelcomed physical proximity",
    description: "Man in faded Bulls Jacket breathed down my next al the way to Rosemont",
    votes: 1,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Purple Express",
    category: "Indecent exposure",
    description: "This woman exposed her ankles on the train",
    votes: -13,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Green",
    category: "Police Activity",
    description: "They tazed an angry Russian man on the steps Morgan",
    votes: 43,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Green",
    category: "Inappropriate or sexual comments",
    description: "This lady asked me if I wanted to 'dig her 'well' outside of Pulaski... yikes. Wearing pink sweatpants with 'JUICY' on the butt",
    votes: 2,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Brown",
    category: "Inappropriate or sexual comments",
    description: "I was asked by a guy at Southport if I liked the way he smelled!! What!",
    votes: 7,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Brown",
    category: "Verbal or physical threat(s)",
    description: "A guy at Kimball threatened to stab me if I didn't give him my orange mocha frappacino",
    votes: 17,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Brown",
    category: "Suspicious Activity",
    description: "Gasoline fight at Kimball",
    votes: 69,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Yellow",
    category: "Police Activity",
    description: "Massive bank heist occured and they hopped on the train. Police is frisking everyone >:[",
    votes: 20,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Yellow",
    category: "Passenger Incident",
    description: "Someone got trampled at the Howard stop",
    votes: 15,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Yellow",
    category: "Delayed Train",
    description: "At the skokie stop and trains like 20 mins late :/",
    votes: 2,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Pink",
    category: "Obscene gestures",
    description: "got the bird from a homeless guy at the kedzie stop",
    votes: -5,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Purple Express",
    category: "Inappropriate or sexual comments",
    description: "bunch of high schoolers cat calling while going to the beach",
    votes: 5,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Purple Express",
    category: "Unwelcomed physical proximity",
    description: "classic purple line completely packed during rush hour. smells like pits out here.",
    votes: 52,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Purple",
    category: "Inappropriate photographing/filming",
    description: "some kid took their parents phone and is going around taking pictures of everyone.",
    votes: -2,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Purple",
    category: "Sexual advances",
    description: "middle of the afternoon and a homeless guy is blackout hitting on everyone in this train.",
    votes: 22,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Orange",
    category: "Indecent exposure",
    description: "kids these day on the way to their beach are showing wayy too much ankle.",
    votes: 1,
    cleared: 0,
    voted: false,
    hidden: false,
    date: new Date(Date.now())
  },
  {
    line: "Orange",
    category: "Police Activity",
    description: "not sure whats going down at midway but the all trains to midway have stopped.",
    votes: 22,
    cleared: 0,
    voted: false,
    hidden: false,
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




