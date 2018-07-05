const Discord = require('discord.js');
const bot = new Discord.Client();

const  PREFIX = "!";

bot.on('ready', function() {
    console.log("Prêt au décollage !")
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "!hello")
            message.reply("Hi, you are so cute <3");
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === '✅') 
    console.log("Détecté")
    bot.channels.get("464027343594323999").send("Tu es maintenant une Night Wolves ! Ahouuuuu !") 
});

bot.login('NDY0MzkyODg1MDEwNDMyMDEx.Dh-VZA.MSRS3Bk4rBCthkzvo8bwdBcwtwI')
