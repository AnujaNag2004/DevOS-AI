const express = require("express");

const router = express.Router();

const {
  analyzeRepo,
} = require("../controllers/githubController");

router.post("/", analyzeRepo);

module.exports = router;