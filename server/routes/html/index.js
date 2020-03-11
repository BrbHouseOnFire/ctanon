const router = require("express").Router();
const submitRoute = require("./submit");

// submit routes

router.use("/submit", submitRoute);

module.exports = router;
