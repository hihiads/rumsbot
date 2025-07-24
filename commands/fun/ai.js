const axios = require("axios");

module.exports = {
  name: "ai",
  description: "Ask OpenRouter AI anything.",
  async execute(client, message, args) {
    const prompt = args.join(" ");
    if (!prompt) {
      return message.reply("❌ Please provide a prompt. Example: `-ai What's the capital of Japan?`");
    }

    const OPENROUTER_API_KEY = "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";

    try {
      await message.channel.sendTyping();

      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-3.5-turbo", // ili npr. "mistralai/mixtral-8x7b"
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt }
          ]
        },
        {
          headers: {
            "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://yourapp.com", // optional
            "X-Title": "MyDiscordBot" // optional
          }
        }
      );

      const reply = response.data.choices?.[0]?.message?.content;
      if (!reply) {
        return message.reply("❌ OpenRouter returned an empty response.");
      }

      if (reply.length > 2000) {
        return message.reply("❌ Response is too long to display.");
      }

      message.reply(reply);
    } catch (error) {
      console.error("OpenRouter Error:", error.response?.data || error.message);
      message.reply("❌ There was an error communicating with OpenRouter.");
    }
  },
};
