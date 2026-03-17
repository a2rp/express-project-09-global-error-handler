const express = require("express");
const router = express.Router();

const { getErrorDemo } = require("../controllers/error.controller");

router.get("/error", getErrorDemo);

module.exports = router;
