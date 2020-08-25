const ms = require('ms')
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos


client.on("ready", () => {
  let activities = [
    `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 100 * 60);  // WATCHING, LISTENING, PLAYING, STREAMING

  client.user
      .setStatus("online") // idle, dnd, online, invisible
      .catch(console.error);
console.log("Estou Online!")

   // var lembrete = client.channels.cache.find(channel => channel.id === "722857919317803089");
  // setInterval(function() {
  //   lembrete.send("<@358010252014125056> Vai divulgar o servidor!")
//   }, ms('3h'))
  
client.on("guildMemberAdd", (member) => {

  let guild =  client.guilds.cache.get("726922417225728020");
  let channel =  client.channels.cache.get("727626858706894921");
  if (guild != member.guild) {
    return console.log(".");
   } else {
      const entrada = new Discord.MessageEmbed()
      .setColor("#33383d")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Bem-Vindo`)
      .setDescription(`**${member.user}**, bem-vindo(a) ao **${guild.name}**! Você é o membro número **${member.guild.memberCount}**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp()
      .setFooter("ID do usuário: " + member.user.id);
      
      const entradaDM = new Discord.MessageEmbed()
      .setColor("#33383d")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`<a:yay:726792688313172079> Bem-Vindo ao ${guild.name} <a:yay:726792688313172079>`)
      .setDescription(`Você é o membro número ${guild.memberCount}`)
      .addField("<a:alerta:703217039426322503> Evite punições!", "Leia as nossas <#702192296120025202>")
      .addField("❓ Dúvidas?", "Abra um ticket em <#710208845104021574>")
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp()
      
      
    channel.send(`${member.user}`, entrada).then(msg => {
      msg.delete({timeout: ms('1m')})
      member.send(entradaDM)
    })
  }
});
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`))
return message.channel.send(`Olá ${message.author}! Meu prefixo é \`n.\` \nQuer ver meus comandos? Use \`n.help\``);
     if (message.channel.type == "dm") return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     
   
    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
    console.error("Erro:" + err)
      message.channel.send(`<:night_no:715959039091015831> | ${message.author} Comando não encontrado, digite \`${config.prefix}help\` para mais informações.`);
    }
});



client.login(process.env.token); //Ligando o Bot caso ele consiga acessar o token
 
