const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      enum: ["user", "ai"],
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const chatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "New Chat",
    },

    messages: [messageSchema],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("Chat", chatSchema);