module.exports = {
    name: "lock",
    description: "Locks the current channel.",
    async execute(client, message, args) {
        if (!message.member.permissions.has("ManageChannels")) {
            return message.reply("🚫 You don't have permission to lock channels.");
        }

        try {
            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                SendMessages: false
            });

            message.channel.send("🔒 Channel locked. Members can't send messages.");
        } catch (err) {
            console.error(err);
            message.reply("⚠️ Failed to lock the channel.");
        }
    }
};
