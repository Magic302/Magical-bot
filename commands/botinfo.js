const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require('moment');
moment.locale('pt-BR') 

exports.run = (client, message, args, bot) => {
  
  let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `${horas}h ${minutos}m ${segundos}s`;

var linguagem = ('[Node.js](https://nodejs.org/en/)') 
var livraria = ('[Discord.js](https://discord.js.org/#/)')
    let embed = new Discord.MessageEmbed()

    .addField('👑 **Criador**', 'Magic302#8671', true)
    .addField(`👅 **Minha linguaguem**`, linguagem, true)
    .addField(`📚 **Minha livraria**`, livraria, true)
    .addField(`🌞 **Estou acordado há**`, uptime, true)
    .setColor('#33383d')

    message.channel.send(embed)
}