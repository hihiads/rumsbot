module.exports = {
  name: "purge",
  description: "Deletes a specified number of messages (max 100).",
  async execute(client, message, args) {
    // Provjera da li korisnik ima ManageMessages dozvolu
    if (!message.member.permissions.has("ManageMessages")) {
      return message.reply("❌ You don't have permission to manage messages.");
    }

    const amount = parseInt(args[0]);
    if (!amount || isNaN(amount) || amount < 1 || amount > 100) {
      return message.reply("❌ Please provide a number between 1 and 100.");
    }

    try {
      // bulkDelete briše do 100 poruka starijih od 14 dana
      const deletedMessages = await message.channel.bulkDelete(amount + 1, true); 
      // +1 jer ćemo uključiti i ovu komandu poruku
      return message.channel.send(`✅ Deleted ${deletedMessages.size - 1} messages.`)
        .then(msg => setTimeout(() => msg.delete(), 5000)); // obriši odgovor nakon 5 sekundi
    } catch (error) {
      console.error(error);
      return message.reply("❌ Failed to delete messages. Messages older than 14 days cannot be deleted.");
    }
  },
};
