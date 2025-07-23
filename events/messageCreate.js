module.exports = {
  name: "messageCreate", // ovo je ključno
  async execute(message, client) {
    if (!message.content.startsWith(client.prefix) || message.author.bot) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/);
    const cmdName = args.shift().toLowerCase();
    const command = client.commands.get(cmdName);

    if (!command) return;

    try {
      await command.execute(client, message, args);
    } catch (err) {
      console.error(err);
      message.reply("⚠️ Error! <@990626592474677349> We have a problem.");
    }
  }
};
