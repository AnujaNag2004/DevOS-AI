const { generateResponse } = require("../services/geminiService");
const { getRepository } = require("../services/githubService");

exports.analyzeRepo = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "Repository URL is required",
      });
    }

    // Extract owner/repo
    const parts = url.replace("https://github.com/", "").split("/");

    const owner = parts[0];
    const repo = parts[1];

    const data = await getRepository(owner, repo);

    const prompt = `
You are an expert software architect.

Analyze this GitHub repository.

Repository Name:
${data.repo.full_name}

Description:
${data.repo.description}

Primary Language:
${data.repo.language}

Stars:
${data.repo.stargazers_count}

Forks:
${data.repo.forks_count}

Topics:
${JSON.stringify(data.repo.topics)}

Languages Used:
${JSON.stringify(data.languages)}

README:

${data.readme}

---------------------------------------

Generate a professional report.

Include:

# Project Summary

# Tech Stack

# Features

# Folder Structure (Expected)

# Code Quality

# Strengths

# Weaknesses

# Resume Description

# Suggested Improvements

# Difficulty Level

Give the response in Markdown.
`;

    const reply = await generateResponse(prompt);

    res.json({
      reply,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Repository analysis failed",
    });

  }
};