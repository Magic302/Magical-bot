const Discord = require('discord.js');

exports.run = (message, client, args, guildMember) => {
  
if (message.member.role.has("717716995214409859")) { // caso esse membro ja possua esse cargo vamos dar o erro
            message.member.role.remove("717716995214409859");
            message.reply('removi seu cargo!')
        } 
  else { 
          message.member.role.add("717716995214409859");
            message.reply(`cargo adicionado! :thumbsup:`) // avisar pra ele
        }
}