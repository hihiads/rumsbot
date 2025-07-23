module.exports = {
  name: "howgay",
  description: "Measure someone's gayness as a joke 😂",
  execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;
    const percent = Math.floor(Math.random() * 101);
    message.channel.send(`🏳️‍🌈 ${user.username} is ${percent}% gay!`);
  }
};
