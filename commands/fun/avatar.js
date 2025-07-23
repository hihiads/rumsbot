const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Shows avatar of mentioned user or yourself.",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Avatar`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setColor("Random")
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
