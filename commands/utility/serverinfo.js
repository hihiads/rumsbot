const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Shows information about the server.",
    async execute(client, message, args) {
        const { guild } = message;

        const embed = new EmbedBuilder()
            .setTitle(`${guild.name} Server Information`)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addFields(
                { name: "Server ID", value: guild.id, inline: true },
                { name: "Owner", value: `<@${guild.ownerId}>`, inline: true },
                { name: "Members", value: `${guild.memberCount}`, inline: true },
                { name: "Channels", value: `${guild.channels.cache.size}`, inline: true },
                { name: "Roles", value: `${guild.roles.cache.size}`, inline: true },
                { name: "Created On", value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:D>`, inline: false }
            )
            .setColor("Blue")
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
};
