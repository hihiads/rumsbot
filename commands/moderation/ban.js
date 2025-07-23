const { PermissionsBitField } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Ban a mentioned member.",
    async execute(client, message, args) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) 
            return message.reply("You don't have permission to ban members.");
        const member = message.mentions.members.first();
        if (!member) return message.reply("Please mention a member to ban.");
        await member.ban();
        message.channel.send(`🔨 ${member.user.tag} has been banned.`);
    }
};
