const express = require("express");

const router = express.Router();

const {
  generateDocumentation,
} = require("../controllers/documentationController");

router.post("/", generateDocumentation);

module.exports = router;