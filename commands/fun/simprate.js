module.exports = {
  name: "simprate",
  description: "How much of a simp are you?",
  execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;
    const percent = Math.floor(Math.random() * 101);
    message.channel.send(`💘 ${user.username} is ${percent}% simp!`);
  }
};
