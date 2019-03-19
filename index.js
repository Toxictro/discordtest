const discord = require("discord.js");
const bot = new discord.Client({
  disableEveryone: true
});
require("./lib/functions")(bot);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;

bot.login(process.env.TOKEN);
