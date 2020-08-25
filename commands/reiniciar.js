const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!['358010252014125056'].includes(message.author.id)) {
    return message.channel.send(`<:night_no:715959039091015831> | ${message.author} Apenas meu desenvolvedor pode utilizar este comando!`)
    }
  process.exit(1)
}