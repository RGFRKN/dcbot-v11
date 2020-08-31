 const Discord = require("discord.js");
module.exports.run = async (client, message) => {
  const dcsb = message.guild.roles.get("745310645708390561") //EGER KENDINIZ BOOSTER ROLU ACTIYSANIZ KESINLIKLE ONUN ID SINI YAZMAYIN DISCORDUN AUTO OLUSTURDUGU BOOSTER ROLUNUN ID SINI YAZIN

  const dcsu = dcsb.members.map(dcsus => dcsus.displayName).join("\n");

  const dcsuc = dcsb.members.size;
  const dcse = new Discord.RichEmbed()
    .setColor(dcsb.hexColor)
    .setTimestamp()
    .setTitle("Krypton Takviye Bilgileri")
    .setDescription(`\n\n **Sunucudaki şuanki takviye sayısı** **__` +  message.guild.premiumSubscriptionCount)
};
module.exports.conf = {
  aliases: ["takviye"]
};
module.exports.help = {
  name: "booster"
};