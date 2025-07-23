module.exports = {
    name: "vcmove",
    description: "Move a user to your voice channel.",
    async execute(client, message, args) {
        const member = message.mentions.members.first();
        const yourChannel = message.member.voice.channel;
        if (!yourChannel || !member) 
            return message.reply("You must be in a voice channel and mention a user.");
        await member.voice.setChannel(yourChannel);
        message.channel.send(`🔊 Moved ${member.user.tag} to your channel.`);
    }
};
