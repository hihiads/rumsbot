module.exports = {
    name: "say",
    description: "Makes the bot say what you type.",
    async execute(client, message, args) {
        const text = args.join(" ");
        if (!text) return message.reply("Please provide a message to say.");
        await message.delete().catch(() => {}); // optional: deletes user's command message
        message.channel.send(text);
    }
};
