const speakeasy = require("speakeasy");

module.exports = {
  name: "restart",
  description: "Restarts the bot using Google Authenticator code.",
  async execute(client, message, args) {
    const allowedUsers = ["1361732875447308438"]; // dodaj svoj Discord ID
    const code = args[0];

    if (!allowedUsers.includes(message.author.id)) {
      return message.reply("❌ You don't have permission to use this command.");
    }

    if (!code || isNaN(code)) {
      return message.reply("❌ You must provide a numeric code from Google Authenticator.");
    }

    const isVerified = speakeasy.totp.verify({
      secret: "rumsbotcode", // ili generirani base32 kod ako treba
      encoding: "base32",
      token: code,
      window: 1,
    });

    if (!isVerified) {
      return message.reply("❌ Invalid code.");
    }

    await message.reply("✅ Code verified. Restarting bot...");
    process.exit(0);
  },
};
