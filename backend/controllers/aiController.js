const { generateResponse } = require("../services/geminiService");

// =======================
// Code Review
// =======================
exports.reviewCode = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        message: "Code is required",
      });
    }

    const prompt = `
You are a Senior Software Engineer.

Review the following code.

Give:

1. Overall Rating (/10)
2. Bugs
3. Code Smells
4. Performance Issues
5. Security Issues
6. Best Practices
7. Improved Code

Code:

${code}
`;

    const reply = await generateResponse(prompt);

    res.json({
      reply,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Review Failed",
    });

  }
};

// =======================
// Bug Fixer
// =======================
exports.fixBug = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        message: "Code is required",
      });
    }

    const prompt = `
You are an Expert Software Engineer.

Fix all bugs in the following code.

Return your answer in this format:

## Problems
- List every bug

## Fixed Code
Provide the complete corrected code.

## Explanation
Explain every fix clearly.

Code:

${code}
`;

    const reply = await generateResponse(prompt);

    res.json({
      reply,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Bug Fix Failed",
    });

  }
};
exports.chatWithAI = async (req, res) => {
  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const prompt = `
You are DevOS AI.

You are an expert software engineer and AI assistant.

Answer the user's question professionally.

Question:

${message}
`;

    const reply = await generateResponse(prompt);

    res.json({
      reply,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Chat Failed",
    });

  }
};