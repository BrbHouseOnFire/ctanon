const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const compression = require("compression");
const path = require('path');
// const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.use(express.static(path.join(__dirname, "../client/build")));
  // Express serve up index.html file if it doesn't recognize route
}
// Add routes, both API and view
app.use(logger("dev"));
app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Connect to the Mongo DB Locally
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ctanondb");
// Connect to the Mongo DB Deployed
// mongoose.connect(
//   process.env.MONGODB_URI ||
//     'mongodb://hostuser:hostuser1@ds163517.mlab.com:63517/heroku_xr954v2q',
//     'mongodb+srv://<username>:<password>@cluster-q10l61qb.jow8h.mongodb.net/heroku_q10l61qb?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false
//   }
// );


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
