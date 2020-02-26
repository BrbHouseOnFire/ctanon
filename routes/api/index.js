const router = require("express").Router();
const movieRoute = require("./movies");

// movie routes
router.use("/movies", movieRoute);

module.exports = router;
