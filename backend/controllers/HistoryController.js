const Chat = require("../models/Chat");

// =========================
// Create New Chat
// =========================
exports.saveChat = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || messages.length === 0) {
      return res.status(400).json({
        message: "Messages are required",
      });
    }

    const title =
      messages[0].text.length > 40
        ? messages[0].text.substring(0, 40) + "..."
        : messages[0].text;

    const chat = await Chat.create({
      title,
      messages,
    });

    res.status(201).json(chat);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error saving chat",
    });
  }
};

// =========================
// Get All Chats
// =========================
exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find().sort({
      createdAt: -1,
    });

    res.json(chats);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching chats",
    });
  }
};

// =========================
// Get One Chat
// =========================
exports.getChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      return res.status(404).json({
        message: "Chat not found",
      });
    }

    res.json(chat);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error fetching chat",
    });

  }
};

// =========================
// Update Existing Chat
// =========================
exports.updateChat = async (req, res) => {
  try {

    const { messages } = req.body;

    const chat = await Chat.findByIdAndUpdate(
      req.params.id,
      {
        messages,
      },
      {
        new: true,
      }
    );

    res.json(chat);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error updating chat",
    });

  }
};

// =========================
// Delete Chat
// =========================
exports.deleteChat = async (req, res) => {
  try {

    await Chat.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error deleting chat",
    });

  }
};