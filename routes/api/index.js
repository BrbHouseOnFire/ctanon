const router = require("express").Router();
const alertRoute = require("./alerts");

// movie routes
router.use("/alerts", alertRoute);

module.exports = router;
