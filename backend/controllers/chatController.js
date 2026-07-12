const Chat = require("../models/Chat");
const { generateResponse } = require("../services/geminiService");

// =====================
// AI Chat
// =====================
exports.chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const reply = await generateResponse(message);

    res.json({
      reply,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);

    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};

// =====================
// Delete Chat
// =====================
exports.deleteChat = async (req, res) => {
  try {
    const { id } = req.params;

    await Chat.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Chat deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error deleting chat",
    });
  }
};