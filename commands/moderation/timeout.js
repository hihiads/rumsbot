module.exports = {
    name: "timeout",
    description: "Timeout a user (in seconds).",
    async execute(client, message, args) {
        const member = message.mentions.members.first();
        const duration = parseInt(args[1]) * 1000;
        if (!message.member.permissions.has("ModerateMembers")) 
            return message.reply("You don't have permission.");
        if (!member || isNaN(duration)) 
            return message.reply("Usage: !timeout @user [seconds]");
        await member.timeout(duration);
        message.channel.send(`⏱️ ${member.user.tag} has been timed out.`);
    }
};
