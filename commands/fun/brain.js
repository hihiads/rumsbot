module.exports = {
  name: "brain",
  description: "Shows your fake IQ",
  execute(client, message, args) {
    const iq = Math.floor(Math.random() * 181); // 0–180
    message.reply(`🧠 Your IQ is **${iq}**!`);
  }
};
