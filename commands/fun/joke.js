module.exports = {
  name: "joke",
  description: "Tells a random joke.",
  execute(client, message, args) {
    const jokes = [
      "Why don’t skeletons fight each other? They don’t have the guts.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "Why don’t scientists trust atoms? Because they make up everything!",
      "I'm reading a book about anti-gravity. It's impossible to put down!"
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    message.reply(joke);
  }
};
