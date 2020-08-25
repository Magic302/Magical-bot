const Discord = require("discord.js")

exports.run = (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setDescription(":ping_pong:Pong!\n:desktop: Meu ping é "+ Math.floor(bot.ws.ping)+ " ms")
    .setThumbnail('https://imgur.com/WZMylbw.gif')
    message.channel.send(embed)
}

exports.help = {
    name: 'ping'
}