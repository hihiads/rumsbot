module.exports = {
  name: "rate",
  description: "Rates anything you say from 1 to 10",
  execute(client, message, args) {
    const item = args.join(" ");
    if (!item) return message.reply("What do you want me to rate?");
    const rating = Math.floor(Math.random() * 10) + 1;
    message.reply(`I'd rate **${item}** a solid **${rating}/10**!`);
  }
};
