const { PermissionsBitField } = require('discord.js');

const MESSAGE_LIMIT = 5;
const TIME_FRAME = 3000; // 3 sekunde

const userMessages = new Map();

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;

    const now = Date.now();
    const userId = message.author.id;

    if (!userMessages.has(userId)) {
      userMessages.set(userId, []);
    }

    const timestamps = userMessages.get(userId);
    timestamps.push(now);

    const filtered = timestamps.filter(time => now - time < TIME_FRAME);
    userMessages.set(userId, filtered);

    if (filtered.length > MESSAGE_LIMIT) {
      try {
        await message.delete();
      } catch {}

      if (message.channel.permissionsFor(message.guild.members.me).has(PermissionsBitField.Flags.SendMessages)) {
        const warnMsg = await message.channel.send(`${message.author}, please stop spamming!`);
        setTimeout(() => {
          warnMsg.delete().catch(() => {});
        }, 5000);
      }
    }
  }
};
