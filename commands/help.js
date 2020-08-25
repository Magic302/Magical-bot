const Discord = require('discord.js')

exports.run = (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle('📌 » Menu Principal')
.setThumbnail(client.user.displayAvatarURL())
.setColor('#ff0000')
.setDescription('Reaja ao emoji correspondente a categoria para vê-la\n\n🎉 » Diversão\n👮 » Moderação\n📖 » Utilidade\n📌 » Menu Principal') 
.setFooter('Possuo 13 comandos prontos e 1 em desenvolvimento');

exports.run = (bot, message, args, func) => {
};
const embed2 = new Discord.MessageEmbed()
.setTitle('🎉 » Diversão')
.setColor('#ff0000')
.addField('8ball', 'Me faça uma pergunta')
.addField('Cat', 'Imagem aleatória de um gato')
.addField('Dog', 'Imagem aleatória de um cachorro');
const embed3 = new Discord.MessageEmbed()
.setTitle('👮 » Moderação')
.setColor('#ff9d00')
.addFields(
  { name: 'Ban', value: 'Bane o usuário deste servidor', inline: true},
  { name: 'Clear', value: 'Limpe o chat', inline: true},
  )
const embed4 = new Discord.MessageEmbed()
.setTitle('📖 » Utilidade')
.setColor('#00ffff')
.addFields(
  { name: 'Avatar', value: 'Veja ou roube o avatar de um usuário', inline: true },
  { name: 'Help', value: 'Mostra este comando', inline: true },
  { name: 'Ping', value: 'Mostra meu ping', inline: true },
  { name: 'Say', value: 'Me faça falar algo', inline: true },
  { name: 'Servericon', value: 'Veja ou roube o ícone deste servidor', inline: true },
  { name: 'Serverinfo', value: 'Veja as informações deste servidor', inline: true},
  { name: 'Uptime', value: 'Veja o tempo de atividade que eu estou executando comandos', inline: true },
  { name: 'Userinfo', value: 'Veja as informações de um usuário neste servidor', inline: true },
  )


message.channel.send(embed).then(msg => {
        msg.react("🎉")
        msg.react("👮")
        msg.react("📖")
        msg.react("🔙")
    var usuario = message.author.id

  let filtro = (reaction, usuario) => reaction.emoji.name === "🎉" && usuario.id === message.author.id;
  let coletor = msg.createReactionCollector(filtro, {max: 100})
 
        coletor.on("collect", cp => {
        cp.users.remove(message.author.id)
        msg.edit(embed2);
        });

  let filtro2 = (reaction, usuario) => reaction.emoji.name === "👮" && usuario.id === message.author.id;
  let coletor2 = msg.createReactionCollector(filtro2, {max: 100})
 
        coletor2.on("collect", cp2 => {
         cp2.users.remove(message.author.id)
          msg.edit(embed3);
        });
  let filtro3 = (reaction, usuario) => reaction.emoji.name === "📖" && usuario.id === message.author.id;
  let coletor3 = msg.createReactionCollector(filtro3, {max: 100})
 
        coletor3.on("collect", cp3 => {
          cp3.users.remove(message.author.id)
          msg.edit(embed4);
        });
  let filtro4 = (reaction, usuario) => reaction.emoji.name === "📌" && usuario.id === message.author.id;
  let coletor4 = msg.createReactionCollector(filtro4, {max: 100})
 
        coletor4.on("collect", cp4 => {
          cp4.users.remove(message.author.id)
          msg.edit(embed);
        });
});
}
