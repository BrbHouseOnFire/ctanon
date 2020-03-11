const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const compression = require("compression");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Add routes, both API and view
app.use(routes);
app.use(logger("dev"));

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ctanondb");
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://hostuser:hostuser1@ds163517.mlab.com:63517/heroku_xr954v2q',
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
