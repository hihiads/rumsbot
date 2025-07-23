module.exports = {
  name: "guildMemberAdd",
  async execute(member, client) {
    const channel = member.guild.channels.cache.get("1397623318949134367");
    if (channel) {
      channel.send(`🎉 Welcome to **${member.guild.name}**, ${member}!`);
    }
  }
};
