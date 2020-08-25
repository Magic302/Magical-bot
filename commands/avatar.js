const Discord = require('discord.js')

exports.run = (bot, message, args) => {

const membro = message.mentions.users.first() || message.author;
  const embed = new Discord.MessageEmbed()
    .setColor("#33383d")
    .setTitle(`👥 ${membro.tag}`)
    .setDescription(`Clique **[aqui](${membro.displayAvatarURL({
        dynamic: true,
        size: 2048
      })})** para baixar`
    )
    .setImage(`${membro.displayAvatarURL({dynamic: true})}?size=2048`)
  message.channel.send(`${message.author}`, embed);
};

exports.help = {
  name: "avatar",
  aliases: ["teste"]
};
