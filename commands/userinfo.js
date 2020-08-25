const Discord = require('discord.js');
const moment = require("moment");
moment.locale('pt-BR')

const status = { 
    online: "<:online:717106759973601310>", 
    idle: "<:idle:717106920892268655>",       
    dnd: "<:dnd:717107009475838002>", 
    offline: "<:offline:717106837845049386>" 
};
exports.run = async (client, message, args) => {
  var member = message.mentions.members.first() || message.member;
  const embed = new Discord.MessageEmbed()
  .setColor("#33383d")
  .addField("📑 • Tag do usuário", `\`${member.user.username}#${member.user.discriminator}\``)
  .addField("🆔 • Id do usuário", `\`${member.id}\``)
  .addField("🌟 • Data de entrada nesse servidor",`\`${moment(member.joinedAt).format("LLL")}\``)
  .addField(":date: • Data de criação da conta",`\`${moment(member.user.createdAt).format("LLL")}\``)
  .addField(":busts_in_silhouette: • Apelido", `\`${member.nickname !== null ? `${member.nickname}` : 'Nenhum apelido.'}\``)
  .setThumbnail(member.user.displayAvatarURL());
   message.channel.send(`${message.author}`,embed)
  
};

exports.help = {
    name: 'userinfo'
}