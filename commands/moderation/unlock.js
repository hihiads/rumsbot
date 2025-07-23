module.exports = {
    name: "unlock",
    description: "Unlocks the current channel.",
    async execute(client, message, args) {
        if (!message.member.permissions.has("ManageChannels")) {
            return message.reply("🚫 You don't have permission to unlock channels.");
        }

        try {
            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                SendMessages: true
            });

            message.channel.send("🔓 Channel unlocked. Members can send messages again.");
        } catch (err) {
            console.error(err);
            message.reply("⚠️ Failed to unlock the channel.");
        }
    }
};
