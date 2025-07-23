const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
    name: "join",
    description: "Bot joins your voice channel.",
    async execute(client, message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.reply("❗ You must be in a voice channel for me to join.");
        }

        try {
            joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator
            });

            message.channel.send(`✅ Joined ${voiceChannel.name}`);
        } catch (error) {
            console.error(error);
            message.reply("⚠️ I couldn't join the voice channel.");
        }
    }
};
