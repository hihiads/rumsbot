module.exports = {
    name: "rps",
    description: "Rock, paper, scissors!",
    async execute(client, message, args) {
        const choices = ["rock", "paper", "scissors"];
        const userChoice = args[0]?.toLowerCase();
        const botChoice = choices[Math.floor(Math.random() * choices.length)];

        if (!choices.includes(userChoice)) 
            return message.reply("Choose: rock, paper, or scissors.");

        let result = "It's a tie!";
        if (
            (userChoice === "rock" && botChoice === "scissors") ||
            (userChoice === "paper" && botChoice === "rock") ||
            (userChoice === "scissors" && botChoice === "paper")
        ) result = "You win!";
        else if (userChoice !== botChoice) result = "You lose!";

        message.channel.send(`🪨📄✂️ You chose ${userChoice}, I chose ${botChoice}. ${result}`);
    }
};
