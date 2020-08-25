const Discord = require("discord.js")
const meow = require("random-meow")

var reagir = ["🐈","🐱","😸","😺","😻","😽","😍","💕"]
var result = Math.floor((Math.random() * reagir.length));

module.exports.run = (client, message, args) => {

  meow().then(url => {
  
 const embed = new Discord.MessageEmbed()
  
  .setTitle("😺 Fofura encontrada com sucesso :3")
  .setImage(url)
  .setColor('#33383d')
  
  message.channel.send(`${message.author}`, embed).then (msg => {

msg.react(`${reagir [result]}`)

})
  })
}
exports.help = {
  "name": 'cat'
  }
