const Discord = require('discord.js')

module.exports.run = (message, m) => {
  message.channel.send("aaaaaaa").then(m => m.delete({timeout: 5000}))
}