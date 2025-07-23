module.exports = {
  name: "8ball",
  description: "Ask the magic 8ball a question.",
  execute(client, message, args) {
    const question = args.join(" ");
    if (!question) return message.reply("Ask me a full question!");

    const responses = [
      "Yes.", "No.", "Maybe.", "Definitely!", "Absolutely not.", 
      "Ask again later.", "I don't know.", "Probably.", "Not likely."
    ];

    const answer = responses[Math.floor(Math.random() * responses.length)];
    message.reply(`🎱 **${answer}**`);
  }
};
