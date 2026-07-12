const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateResponse(prompt) {
  const models = [
    "gemini-flash-lite-latest",
    "gemini-2.0-flash-lite-001",
    "gemini-2.0-flash-001",
  ];

  let lastError;

  for (const model of models) {
    try {
      console.log("Trying model:", model);

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });

      return response.text;
    } catch (err) {
      console.log(`${model} failed.`);
      lastError = err;
    }
  }

  throw lastError;
}

module.exports = { generateResponse };