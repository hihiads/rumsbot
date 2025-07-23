const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "channelinfo",
  description: "Shows info about the current channel. Admin only.",
  async execute(client, message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
      return message.reply("🚫 You don't have permission to use this command.");
    }

    const channel = message.channel;

    const embed = new EmbedBuilder()
      .setTitle(`Channel info: #${channel.name}`)
      .addFields(
        { name: "Channel ID", value: channel.id, inline: true },
        { name: "Type", value: channel.type, inline: true },
        { name: "Created on", value: `<t:${Math.floor(channel.createdTimestamp / 1000)}:D>`, inline: false },
        { name: "NSFW", value: channel.nsfw ? "Yes" : "No", inline: true },
        { name: "Topic", value: channel.topic || "No topic", inline: false }
      )
      .setColor("Yellow")
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
};
