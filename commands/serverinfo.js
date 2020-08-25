const Discord = require('discord.js');
const moment = require("moment");
moment.locale('pt-BR')

const regions = {
	'brazil': 'Brazil',
	'europe': 'Europe',
	'hongkong': 'Hong Kong',
	'india': 'India',
	'japan': 'Japan',
	'russia': 'Russia',
	'singapore': 'Singapore',
	'southafrica': 'South Africa',
	'sydeny': 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

exports.run = (client, message) => {
  const voz = message.guild.channels.cache.filter(c => c.type === "voice").size;
  const texto = message.guild.channels.cache.filter(c => c.type === "text").size;
  const canais = message.guild.channels.cache.size;
  const members = message.guild.members.cache
  
  const embed = new Discord.MessageEmbed()
  .setColor("#33383d")
  .setTitle("<:discord:716050679877337097> " + message.guild.name)
  .setThumbnail(message.guild.iconURL())
  .addField('<:owner:731642023991312425> Dono', `${message.guild.owner.user.tag}\n\`(${message.guild.owner.id})\``)
.addField('<:server_id:731628880552656896> ID', message.guild.id)
  .addField('🌎 Região', `${regions[message.guild.region]}`)
  .addField('📆 Data de criação', `${moment(message.guild.createdAt).format("LLL")}`)
  .addField('🌙 Eu entrei em', `${moment(message.guild.joinedAt).format("LLL")}`)
   .addField(`<a:cursor:731814002019270697> Canais (${canais})`, `<a:typing:731812916709556264> Texto: ${texto}\n🗣️ Voz:  ${voz}`)
   .addField(`👥 Membros (${message.guild.memberCount})`,)
  
  message.channel.send(`${message.author}`, embed)
  
  console.log(Error);
  
exports.help = {
  "name": 'serverinfo'
}
}
