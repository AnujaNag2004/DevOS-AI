const express = require("express");
const router = express.Router();

const {
  chatWithAI,
  deleteChat,
} = require("../controllers/chatController");

// =====================
// AI Chat
// =====================
router.post(
  "/",
  (req, res, next) => {
    console.log("✅ Chat route hit");
    next();
  },
  chatWithAI
);

// =====================
// Delete Chat
// =====================
router.delete("/history/:id", deleteChat);

module.exports = router;