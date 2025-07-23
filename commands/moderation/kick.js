const { PermissionsBitField } = require("discord.js");

module.exports = {
    name: "kick",
    description: "Kick a mentioned member.",
    async execute(client, message, args) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) 
            return message.reply("You don't have permission to kick members.");
        const member = message.mentions.members.first();
        if (!member) return message.reply("Please mention a member to kick.");
        await member.kick();
        message.channel.send(`👢 ${member.user.tag} has been kicked.`);
    }
};
