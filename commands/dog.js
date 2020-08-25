const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

var reagir = ["🐶","🐾","🐕","💕","😍"]
var result = Math.floor((Math.random() * reagir.length));

exports.run = (client, message, args) => {


    randomPuppy('puppy')
    .then(url => {

        const embed = new Discord.MessageEmbed()
        .setDescription(":dog: Doguinho achado com sucesso")
        .setImage(url)
        .setColor('#33383d')
       message.channel.send(embed).then(msg => {

msg.react(`${reagir [result]}`)

});
   
 })
}

exports.help = {
    name: 'dogs'
}
