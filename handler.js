const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  // === KOMANDE ===
  const commandsPath = path.join(__dirname, './commands');
  const commandFolders = fs.readdirSync(commandsPath);

  for (const folder of commandFolders) {
    const folderPath = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = require(path.join(folderPath, file));
      if (command.name) {
        client.commands.set(command.name, command);
        console.log(`[COMMAND LOADED] ${command.name}`);
      } else {
        console.log(`[WARNING] ${file} has no command name.`);
      }
    }
  }

  // === EVENTI ===
  const eventsPath = path.join(__dirname, './events');
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

  for (const file of eventFiles) {
    const event = require(path.join(eventsPath, file));

    if (event.name && typeof event.execute === 'function') {
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
      console.log(`[EVENT LOADED] ${event.name}`);
    } else {
      console.log(`[WARNING] ${file} is missing a valid name or execute() function.`);
    }
  }
};
