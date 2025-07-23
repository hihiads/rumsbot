module.exports = {
    name: "voicekick",
    description: "Disconnects a user from voice channel.",
    async execute(client, message, args) {
        const member = message.mentions.members.first();

        if (!message.member.permissions.has("MoveMembers")) {
            return message.reply("🚫 You don't have permission to move members.");
        }

        if (!member) {
            return message.reply("❗ Please mention a member to voice kick.");
        }

        if (!member.voice.channel) {
            return message.reply("❗ That user is not in a voice channel.");
        }

        try {
            await member.voice.disconnect(); // disconnects user from VC
            message.channel.send(`🔊 ${member.user.tag} has been voice kicked.`);
        } catch (err) {
            console.error(err);
            message.reply("⚠️ Failed to voice kick the user.");
        }
    }
};
