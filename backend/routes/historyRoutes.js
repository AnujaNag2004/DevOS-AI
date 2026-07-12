const express = require("express");

const router = express.Router();

const {
  saveChat,
  getChats,
  getChat,
  updateChat,
  deleteChat,
} = require("../controllers/historyController");

router.post("/", saveChat);

router.get("/", getChats);

router.get("/:id", getChat);

router.put("/:id", updateChat);

router.delete("/:id", deleteChat);

module.exports = router;