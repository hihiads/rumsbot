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
    activities: [{ name: '!help', type: ActivityType.Watching }],
    status: PresenceUpdateStatus.DoNotDisturb
  });
});
const express = require("express")
const app = express();

app.listen(3000, () => {
console.log("Project is running!");
})

app.get("/", (req, res) => {
res.send("Hello World!");
})



// Login with your token here
client.login(process.env.token);
