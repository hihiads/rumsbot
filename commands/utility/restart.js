const speakeasy = require("speakeasy");

module.exports = {
  name: "restart",
  description: "Restarts the bot using TOTP from authenticator.",
  async execute(client, message, args) {
    const token = args[0];
    if (!token) {
      return message.reply("❌ Please provide the code from your authenticator app.");
    }

    const verified = speakeasy.totp.verify({
      secret: "rumsbotcode", // jer si to stavio u authenticator
      encoding: "base32",
      token: token,
      window: 1 // dopušta ±30 sekundi odstupanja
    });

    if (!verified) {
      return message.reply("❌ Invalid code.");
    }

    await message.reply("✅ Code verified. Restarting...");
    process.exit(0); // ako koristiš PM2, ovo ga restarta
  }
};
