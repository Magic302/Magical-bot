const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`<:discord:716050679877337097> ${message.guild.name}`)
    .setDescription(
      `Clique **[aqui](${message.guild.iconURL({
        dynamic: true,
        size: 2048
      })})** para baixar`
    )
    .setImage(message.guild.iconURL());

  message.reply(embed);
};

exports.help = {
  name: "servericon"
};
