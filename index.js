const { Client, GatewayIntentBits, Partials, Collection, ActivityType, PresenceUpdateStatus } = require("discord.js");
const fs = require("fs");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ],
    partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.User],
});

client.commands = new Collection();
client.prefix = "!";

require("./handler")(client);

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  client.user.setPresence({
    activities: [{ name: 'rum take his clothes off', type: ActivityType.Watching }],
    status: PresenceUpdateStatus.DoNotDisturb
  });
});


// Login with your token here
client.login(process.env.token);
