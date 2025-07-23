const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
    name: "leave",
    description: "Bot leaves the voice channel.",
    async execute(client, message, args) {
        const connection = getVoiceConnection(message.guild.id);

        if (!connection) {
            return message.reply("❗ I'm not connected to any voice channel.");
        }

        try {
            connection.destroy();
            message.channel.send("👋 I have left the voice channel.");
        } catch (error) {
            console.error(error);
            message.reply("⚠️ Something went wrong while leaving the channel.");
        }
    }
};
