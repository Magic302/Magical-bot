const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const c = require('../config.json')

exports.run = (client, message, args) => { // setando a base

  let erro = new Discord.MessageEmbed()

  .setColor("#33383D")
  .setDescription("🤔 O que é este comando? \n\n`8ball` - Faça uma pergunta e eu lhe responderei.")
  .addField(`❓ Modo de usar`,`\`${c.prefix}8ball <Texto>\``, true)
  .addField(`📖 Exemplo`,`\`${c.prefix}8ball Você gosta do seu dono?\``, true)
  .setThumbnail(client.user.displayAvatarURL());


    var replies = [
"Sim.", "Não.", "Pergunte novamente mais tarde.", 
"Pergunte a um amigo.", "Isso não é do seu interesse", "Nem em um milhão de anos",
"Nem nascendo de novo!", "Talvez sim...", "Talvez não...",
"Cá entre nós... ||Isso não é do seu interesse||🤫.", "Essa pergunta não é valida, tente novamente mais tarde.",
":thinking:", "HMMMMM...", "Fumou Toddynho vencido?", "Pergunte de novo",
"Só sei que nada sei 😔."
      ];
    var result = Math.floor((Math.random() * replies.length)); // puxando aquela tabela, vamos criar um sistema random, que pode cair em uma ou outra
    
    var duvida = args.slice(0).join(" "); // aqui, a pergunta do membro, partindo do argumento 0 (!args zero um)
    if (!duvida) return message.channel.send(`${message.author}`, erro)
    
    message.reply(`${replies [result]}`)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'pergunta',
    aliases: ['dúvida']
}