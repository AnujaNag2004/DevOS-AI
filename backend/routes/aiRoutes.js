const express = require("express");

const router = express.Router();

const {
  reviewCode,
  fixBug,
  chatWithAI,
} = require("../controllers/aiController");

router.post("/review", reviewCode);

router.post("/fix", fixBug);

router.post("/chat", chatWithAI);

module.exports = router;