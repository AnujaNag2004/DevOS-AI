const Chat = require("../models/Chat");

// Save a chat
exports.saveChat = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || messages.length === 0) {
      return res.status(400).json({
        message: "Messages are required",
      });
    }

    const title =
      messages[0]?.text.slice(0, 40) || "New Chat";

    const chat = await Chat.create({
      title,
      messages,
    });

    res.status(201).json(chat);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Failed to save chat",
    });
  }
};

// Get all chats
exports.getChats = async (req, res) => {

  try {

    const chats = await Chat.find()
      .sort({
        createdAt: -1,
      });

    res.json(chats);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Error fetching chats",
    });

  }

};

// Get one chat
exports.getChatById = async (req, res) => {

  try {

    const chat = await Chat.findById(
      req.params.id
    );

    if (!chat) {

      return res.status(404).json({
        message: "Chat not found",
      });

    }

    res.json(chat);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Error",
    });

  }

};