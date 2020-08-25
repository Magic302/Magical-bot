const Discord = require("discord.js")
const Client = new Discord.Client()

exports.run = async (client, message, args) => {
    if (!['358010252014125056'].includes(message.author.id)) {
    return message.channel.send(`<:night_no:715959039091015831> | ${message.author} Apenas meu desenvolvedor pode utilizar este comando!`)
    }
    const code = args.slice(0).join(" ")
    if (!code) return message.reply(`digite algum code!`)
    
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          let embed = new Discord.MessageEmbed()
          .setDescription(`<:saida:716741928993030174> **SAÍDA**\n\`\`\`js\n${ev}\`\`\``)
        message.channel.send(embed)
        } catch(err) {
          let errorrr = new Discord.MessageEmbed()
          .setDescription(`<:night_no:715959039091015831> **ERRO DETECTADO!**\n\`\`\`\n${err}\`\`\``)
            message.channel.send(errorrr)
        }
  }
 exports.help = {
      name: "eval",
     aliases: []
 }
