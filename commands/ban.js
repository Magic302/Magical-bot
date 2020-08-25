const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
  .setColor("#33383D")
  .setDescription("🤔 O que é este comando? \n\n`ban` Bane um usuário deste servidor"
  )
  .addFields(
    {
      name: "❓ Modo de usar",
      value: "`n.ban <@Usuário> \nn.ban <ID>`",
      inline: true
    },
    {
      name: "📖 Exemplos",
      value: "`n.ban @Magic302 \nn.ban 358010252014125056`",
      inline: true
    }
  );


module.exports.run = (client, message, args) => {
  
      var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`<:night_no:715959039091015831> | ${message.author} Você não tem a permissão \`Banir Membros\` para executar esse comando!`)
    if (!membro) return message.channel.send(embed)
    if (membro === message.member) return message.reply('você não pode banir você mesmo!')

    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply('Escreva o motivo!')

    var canal = client.channels.cache.get("715714160524132468");

    message.channel.send(`Você deseja realmente banir este usuario do seu servidor?`).then(msg => {
        msg.react("✅")
        msg.react("❌")

        let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
        let filtro2 = (reaction,usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
        let coletor2 = msg.createReactionCollector(filtro2, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id);
            message.channel.send('o usuario foi punido :>')
            canal.send(`**MEMBRO PUNIDO**\n\nMembro: \`${membro.user.username}\`\nMotivo: **${motivo}**`)
            membro.ban();
        })
      coletor2.on("collect", cp => {
        cp.remove(message.author.id);
        message.channel.send("Comando cancelado");
      })
    })
}

exports.help = {
  "name": 'ban'
}