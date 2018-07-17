const Discord = require('discord.js');
const bot = new Discord.Client();

const  PREFIX = "!";

 // les noms de jours / mois


bot.on('ready', function() {
    console.log("Prêt au décollage !")
});

bot.on('message', message => {
    if(message.channel.id === '464223504737239041') {
	if(message.content[0] === PREFIX) {
        if(message.content === "!compris") {
		// message.reply("Test");
		message.delete();
                bot.channels.get("464027343594323999").send("Bienvenue " + message.author.toString() + " ! Tu es maintenant une Night Wolves ! Ahouuuuu !");
		let role = message.guild.roles.find('name', 'Famille');
		message.member.addRole(role);
	   }
		
	    else {
		    message.delete(); }
	  }
	    
	    else {
		    message.delete(); }
	 }
	// NE MARCHE PAS
	/* if(message.content === "!date") {
	bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Moorland',
			 description: 'Le Championnat de Moorland commence!'
		 }}); */
});

// NE SERT PAS
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

setInterval(function(){
	var date = new Date();
	var jour = date.getDay();
	var heure = date.getHours();
	var minutes = date.getMinutes();
	console.log('Biiip')
if(jour === 1) {
 if(heure === 13) {
	 if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 30 minutes !' }});
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 14) {		
		 if(minutes === 0) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Firgrove',
			 description: 'Le Championnat de Firgrove commence !' }});
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 30 minutes !' }});
  	}
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) 
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Silverglade',
			 description: 'Le Championnat de Silverglade commence !' }});
 }
 if(heure === 15) {
   if(minutes === 0)
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   }
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
 }
 if(heure === 16) {
	 if(minutes === 0)
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent !' }});
 }
if(heure === 17) {
	if(minutes === 30)
		bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
}
 if(heure === 18) {
	 if(minutes === 0)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent !' }});
 }
}
if(jour === 2) {
 if(heure === 13) {
	  if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 30 minutes !' }});
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 14) {
   if(minutes === 0)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Firgrove',
			 description: 'Le Championnat de Firgrove commence !' }});
 }
 if(heure === 15) {
	 if(minutes === 0)
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat de Jorvik commence !' }});
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   }
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
 }
 if(heure === 16) {
	 if(minutes === 0)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent !' }});
 }
 if(heure === 17) {
   if(minutes === 30)
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta & Golden Hills',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta & Golden Hills',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta & Golden Hills',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
 }
 if(heure === 18) {
	 if(minutes === 0)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta & Golden Hills',
			 description: 'Les Championnats commencent !' }});
 }
}
if(jour === 3) {
 if(heure === 13) {
   if(minutes === 0)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
 }
 if(heure === 14) {
	   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 30 minutes !' }});
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
if(heure === 15) {
	 if(minutes === 0) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Firgrove',
			 description: 'Le Championnat de Firgrove commence !' }});
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik & Championnat des Poneys',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
  	}
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Ecurie Jorvik & Championnat des Poneys',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik & Championnat des Poneys',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Ecurie Jorvik & Championnat des Poneys',
			 description: 'Les Championnats commencent !' }});
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   }
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
}
 if(heure === 16) {
   if(minutes === 0) {
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent !' }});
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
  	}
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
 }
 if(heure === 17) {
   if(minutes === 30) 
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
 }
if(heure === 18) {
   if(minutes === 0) {
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent !' }});
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Silverglade',
			 description: 'Le Championnat de Silverglade commence !' }});
  	}
}
if(jour === 4) {
if(heure === 14) {
	if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 30 minutes !' }});
	if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 15 minutes !' }});
	if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 5 minutes !' }});
		}
if(heure === 15) {
  if(minutes === 0) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Valedale',
			 description: 'Le Championnat de Valedale commence !' }});
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 30 minutes !' }});
  	}
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat de Jorvik commence !' }});
	         bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Moorland',
			 description: 'Le Championnat commence dans 30 minutes !' }});
	}
   if(minutes === 45) 
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Moorland',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Moorland',
			 description: 'Le Championnat commence dans 5 minutes !' }});
		}
if(heure === 16) {
   if(minutes === 0) {
				bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Moorland',
			 description: 'Le Championnat de Moorland commence !' }});
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
		}
if(heure === 17) {
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
		}
   if(heure === 18) {
			if(minutes === 0)
				bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent !' }});
		}
	}
if(jour === 5) {
 if(heure === 14) {
	 if(minutes === 0) 
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Firgrove',
			 description: 'Le Championnat de Firgrove commence !' }});
	    	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 5 minutes !' }});
	
 }
if(heure === 15) {
   if(minutes === 0){
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Silverglade',
			 description: 'Le Championnat de Silverglade commence !' }});
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat de Jorvik commence !' }});
	    	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   }
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
}
if(heure === 16) {
	if(minutes === 0) {
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent !' }});
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Poneys & Ecurie Jorvik',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Poneys & Ecurie Jorvik',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Poneys & Ecurie Jorvik',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Poneys & Ecurie Jorvik',
			 description: 'Les Championnats commencent !' }});
}
if(heure === 17) {
   if(minutes === 30)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta & Golden Hills',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta & Golden Hills',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta & Golden Hills',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
}
if(heure === 18) {
   if(minutes === 0)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta & Golden Hills',
			 description: 'Les Championnats commencent !' }});
   if(minutes === 30)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 5 minutes !' }});
}
if(heure === 19) {
	if(minutes === 0)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Valedale',
			 description: 'Le Championnat de Valedale commence !' }});
   if(minutes === 30)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 5 minutes !' }});
}
if(heure === 20){
	if(minutes === 0)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Firgrove',
			 description: 'Le Championnat de Firgrove commence !' }});
  }
 }
if(jour === 6) {
 if(heure === 7) {
   if(minutes === 30)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 8) {	
	 if(minutes === 0) {
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Firgrove',
			 description: 'Le Championnat de Firgrove commence !' }});
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
 }
 if(heure === 10) {
   if(minutes === 30)
		   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 11) {
   if(minutes === 0) 
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Valedale',
			 description: 'Le Championnat de Valedale commence !' }});
   if(minutes === 30)
		   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 12) {
	 if(minutes === 0)
		  if(minutes === 0) 
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Silverglade',
			 description: 'Le Championnat de Silverglade commence !' }});
}
 if(heure === 13) {
   if(minutes === 0)
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat des Poneys commence !' }});
	         bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 14) {
   if(minutes === 0)
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta',
			 description: 'Le Championnat de Fort Pinta commence !' }});
 }
 if(heure === 15) {
   if(minutes === 30) 
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
 }
 if(heure === 16) {
   if(minutes === 0) {
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent !' }});
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
  if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
 }
 if(heure === 17) {
   if(minutes === 0)
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat de Jorvik commence !' }});
	         bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 18) {
   if(minutes === 0)
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta',
			 description: 'Le Championnat de Fort Pinta commence !' }});
  if(minutes === 30) 
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 5 minutes !' }});
}
 if(heure === 19) {
	  if(minutes === 0)
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Valedale',
			 description: 'Le Championnat de Valedale commence !' }});
  if(minutes === 30) 
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure == 20) {
	 if(minutes === 0)
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta',
			 description: 'Le Championnat de Firgrove commence !' }});
 }
}	
if(jour === 0) {
	if(heure === 7) {
   if(minutes === 30)
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Valedale',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 8) {	
	 if(minutes === 0) {
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Valedale',
			 description: 'Le Championnat de Valedale commence !' }});
		  bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
 }
 if(heure === 10) {
   if(minutes === 30)
		   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Firgrove',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 11) {
   if(minutes === 0) 
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Firgrove',
			 description: 'Le Championnat de Firgrove commence !' }});
   if(minutes === 30)
		   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 12) {
	 if(minutes === 0)
		  if(minutes === 0) 
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Silverglade',
			 description: 'Le Championnat de Silverglade commence !' }});
}
 if(heure === 13) {
   if(minutes === 0)
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat des Poneys commence !' }});
	         bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta',
			 description: 'Le Championnat commence dans 5 minutes !' }});
 }
 if(heure === 14) {
   if(minutes === 0) {
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Fort Pinta',
			 description: 'Le Championnat de Fort Pinta commence !' }});
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
 }
 if(heure === 15) {
   if(minutes === 30)
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
 }
 if(heure === 16) {
   if(minutes === 0) {
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Golden Hills & Moorland',
			 description: 'Les Championnats commencent !' }});
	    bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
 }
 if(heure === 17) {
   if(minutes === 0)
	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Ecurie Jorvik',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30) {
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat de Jorvik commence !' }});
	     	 bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 30 minutes !' }});
   }
   if(minutes === 45)
	   	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 15 minutes !' }});
   if(minutes === 55)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Fort Pinta & Moorland',
			 description: 'Les Championnats commencent dans 5 minutes !' }});
 }
 if(heure === 18) {
   if(minutes === 0) {
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Championnat des Poneys',
			 description: 'Le Championnat des Poneys commence !' }});
	   bot.channels.get("466726740904116235").send({embed: {
			 color: 3066993,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 30 minutes !' }});
   }
   if(minutes === 15)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 3447003,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 15 minutes !' }});
   if(minutes === 25)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15844367,
			 title: 'Silverglade',
			 description: 'Le Championnat commence dans 5 minutes !' }});
   if(minutes === 30)
		 bot.channels.get("466726740904116235").send({embed: {
			 color: 15158332,
			 title: 'Silverglade',
			 description: 'Le Championnat de Jorvik commence !' }});
 }
}
}, 60000);

bot.login(process.env.TOKEN)
