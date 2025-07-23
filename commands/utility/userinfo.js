const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "userinfo",
    description: "Shows information about a user.",
    async execute(client, message, args) {
        const user = message.mentions.members.first() || message.member;

        const embed = new EmbedBuilder()
            .setTitle(`User Info - ${user.user.tag}`)
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .addFields(
                { name: "User ID", value: user.id, inline: true },
                { name: "Nickname", value: user.nickname || "None", inline: true },
                { name: "Bot?", value: user.user.bot ? "Yes" : "No", inline: true },
                { name: "Account Created", value: `<t:${Math.floor(user.user.createdTimestamp / 1000)}:R>`, inline: true },
                { name: "Joined Server", value: `<t:${Math.floor(user.joinedTimestamp / 1000)}:R>`, inline: true },
                { name: "Roles", value: user.roles.cache.map(role => role.name).join(", ") || "None", inline: false }
            )
            .setColor("Green")
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
};
