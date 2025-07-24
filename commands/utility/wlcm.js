const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "wlcm",
  description: "Sends a welcome message tagging moderators.",
  async execute(client, message, args) {
    const mod1 = "<@1361732875447308438>";
    const mod2 = "<@1388989436527775884>";

    const embed = new EmbedBuilder()
      .setTitle("Welcome to the server! 👋")
      .setDescription(
        `Hey, welcome to our community! If you have any problems or encounter any issues, please feel free to reach out to ${mod1} or ${mod2}. We're here to help!`
      )
      .setColor("Green")
      .setTimestamp();

    message.channel.send({ content: `${mod1} ${mod2}`, embeds: [embed] });
  },
};
