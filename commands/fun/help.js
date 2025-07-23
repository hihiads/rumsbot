const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  name: "help",
  description: "Lists all available commands.",
  execute(client, message, args) {
    const commandsDir = path.join(__dirname);
    const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith('.js') && file !== 'help.js');

    const helpEmbed = new EmbedBuilder()
      .setTitle('📜 Rums Bot Commands')
      .setDescription('Here are all available commands:')
      .setColor(0x00AEFF)
      .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      .setTimestamp();

    for (const file of commandFiles) {
      const command = require(path.join(commandsDir, file));
      helpEmbed.addFields({
        name: `❯ !${command.name}`,
        value: command.description || 'No description provided.',
        inline: false
      });
    }

    message.channel.send({ embeds: [helpEmbed] });
  }
};
