const router = require("express").Router();
const alertRoute = require("./alerts");

// alert routes

router.use("/alerts", alertRoute);

module.exports = router;
