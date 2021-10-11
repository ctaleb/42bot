const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});
const auth = require('./auth.json');
const commandHandler = require('./commands/CommandHandler')

bot.login(auth.token);

bot.once('ready', () => {
	console.log(`Logged in as ${bot.user.username}`);
});

bot.on('messageCreate', handleMessage);

function handleMessage(msg) {
	console.log(msg.content);
	commandHandler;
}