const { generateResponse } = require("../services/geminiService");

exports.generateDocumentation = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        message: "Code is required",
      });
    }

    const prompt = `
You are an expert software architect.

Generate professional documentation for the following code.

Return in this format:

# Overview

# Function Explanation

# Parameters

# Return Value

# Example Usage

# Complexity

# Best Practices

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
      message: "Documentation generation failed",
    });

  }
};