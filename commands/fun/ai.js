const axios = require("axios");

module.exports = {
  name: "ai",
  description: "Ask DeepSeek AI a question.",
  async execute(client, message, args) {
    const prompt = args.join(" ");
    if (!prompt) {
      return message.reply("❌ Please provide a prompt. Example: `-ai What is the capital of France?`");
    }

    const DEEPSEEK_API_KEY = "sk-a1f50f3436e34198a9f3f9b73811d18d"; // <- your key here

    try {
      await message.channel.sendTyping();

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
      if (!reply) return message.reply("❌ DeepSeek AI returned an empty response.");
      if (reply.length > 2000) return message.reply("❌ Response too long to display.");

      message.reply(reply);
    } catch (error) {
      console.error("DeepSeek Error:", error.response?.data || error.message);
      message.reply("❌ Failed to get a response from DeepSeek AI.");
    }
  },
};
