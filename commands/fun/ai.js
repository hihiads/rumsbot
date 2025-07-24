const axios = require("axios");

module.exports = {
  name: "ai",
  description: "Ask DeepSeek AI something.",
  async execute(client, message, args) {
    const prompt = args.join(" ");
    if (!prompt) {
      return message.reply("❌ Please provide a prompt. Example: `-ai What is the capital of Japan?`");
    }

    // Your DeepSeek API key directly in code
    const DEEPSEEK_API_KEY = "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";

    try {
      // Optional: show typing indicator
      await message.channel.sendTyping();

      // API request to DeepSeek
      const response = await axios.post(
        "https://api.deepseek.com/v1/chat/completions",
        {
          model: "deepseek-chat",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const reply = response.data.choices?.[0]?.message?.content;
      if (!reply) {
        return message.reply("❌ DeepSeek returned no answer.");
      }

      // Split reply if too long
      if (reply.length > 2000) {
        return message.reply("❌ Response too long to send.");
      }

      return message.reply(reply);
    } catch (error) {
      console.error("DeepSeek Error:", error.response?.data || error.message);
      return message.reply("❌ Error while talking to DeepSeek AI.");
    }
  },
};
