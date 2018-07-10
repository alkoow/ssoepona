const Discord = require('discord.js');
const bot = new Discord.Client();

const  PREFIX = "!";

bot.on('ready', function() {
    console.log("Prêt au décollage !")
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "!compris")
		bot.channels("464027343594323999").send("Bienvenue")
	}
});

/* bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === '✅') 
    console.log("Détecté")
    bot.channels.get("464027343594323999").send("Bienvenue " + user + " ! Tu es maintenant une Night Wolves ! Ahouuuuu !") 
}); */

bot.on('guildMemberAdd', member => {
    console.log("Envoyé")
    member.createDM().then(channel => {
        return channel.send("Bonjour ! \nJe suis Epona, la déesse protectrice des chevaux qui veille sur ce monde. \nLe mal grandit sur Jorvik à mesure que le temps passe, et il est de ton destin de stopper ces ténèbres ! Il te faut parcourir le monde, faire de nouvelles rencontres, qui te prépareront face à la destinée que tu dois affronter!\nMais un long chemin t'attend pour découvrir le territoire Jorvikois, alors pourquoi ne pas le passer avec des amies?\n\nBienvenue au sein du club, c'est avec plaisir que mes disciples et moi t'accueillons parmi nous, je suis sûre que tu y trouveras ta place rapidement !\nIl te parait peut-être immense, et il peut être possible que tu te sentes perdue au milieu de tous ces salons, mais ne t'en fais pas, je vais t'aider!\n \n ```🎉arrivées - Comme tout Jorvikois, c'est ici que tu descends pour la première fois du bus et que tu découvres les locaux ! D'autres membres viendront t'accueilir :3\n \n 📕présentation - Pour apprendre à mieux te connaitre !\n \n 🍻taverne - Contrairement à ce que le nom peut laisser penser, ici on ne boit pas ! Mais cela reste un endroit convivial, où chacun peut parler comme bon lui semble, de tout comme de rien ! A condition de le faire dans le respect des autres...\n \n 🦄Blabla général - C'est un endroit aussi magique que la taverne, où les membres se réunissent pour discuter ! \n \n 🌟news - Chaque semaine, un petit débrief de la mise à jour hebdomadaire du mercredi sera réalisé. \n \n ❔infos - Diverses informations importantes du club que nous ferons remonter !\n \n 📅programme - Notre agenda quotidien pour être tenu au courant de toutes les activités proposées par le club !\n \n 🎁boite à idées - Des suggestions à faire? Ici semble l'endroit parfaaait !\n \n 🐴activités - Un salon vocal pour les participants à nos activités.```\n \n Ravie d'avoir fait ta connaissance " + member.displayName + " ! L'avenir de Jorvik est entre tes mains !")
    }).catch(console.error);
});

bot.login(process.env.TOKEN)
