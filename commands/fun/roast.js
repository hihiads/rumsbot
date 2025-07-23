module.exports = {
  name: "roast",
  description: "Roasts a user for fun",
  execute(client, message, args) {
    const target = message.mentions.users.first() || message.author;
    const roasts = [
      "You're the reason they put directions on shampoo bottles.",
      "You're as useless as the 'g' in lasagna.",
      "You're the human version of a participation trophy.",
      "Your secrets are safe with me. I never even listen when you tell me them."
    ];
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    message.channel.send(`${target} 🤡 ${roast}`);
  }
};
