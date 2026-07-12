const { generateResponse } = require("../services/geminiService");

exports.generateDeploymentGuide = async (req, res) => {
  try {
    const { project } = req.body;

    if (!project) {
      return res.status(400).json({
        message: "Project description is required",
      });
    }

    const prompt = `
You are a DevOps Engineer.

Generate a deployment guide.

Project Description:

${project}

Return:

# Best Platform

# Prerequisites

# Step-by-Step Deployment

# Environment Variables

# Common Errors

# Tips

Format the response in Markdown.
`;

    const reply = await generateResponse(prompt);

    res.json({
      reply,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Deployment guide generation failed",
    });
  }
};