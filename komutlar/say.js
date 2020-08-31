const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');//bişidicem hata verirken (emdbed)yollicak ama o embedyok 200 ıq
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("745280331849924728") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send("Yetkiniz bulunmamakta.").then(m =>m.delete(10000))
    let guild = "745279471011102792";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:746695502241857638>`,
    '1': `<a:1_:746695510341189666>`,
    '2': `<a:2_:746695510198452265>`,
    '3': `<a:3_:746695511976837120>`,
    '4': `<a:4_:746695510609625169>`,                       
    '5': `<a:5_:746695510718546040>`,
    '6': `<a:6_:746695510743581343>`,
    '7': `<a:7_:746695511461068820>`,
    '8': `<a:8_:746695511578378260>`,
    '9': `<a:9_:746695511498555423> `}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:746695502241857638>`,
    '1': `<a:1_:746695510341189666>`,
    '2': `<a:2_:746695510198452265>`,
    '3': `<a:3_:746695511976837120>`,
    '4': `<a:4_:746695510609625169>`,                       
    '5': `<a:5_:746695510718546040>`,
    '6': `<a:6_:746695510743581343>`,
    '7': `<a:7_:746695511461068820>`,
    '8': `<a:8_:746695511578378260>`,
    '9': `<a:9_:746695511498555423> `}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "လ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:746695502241857638>`,
    '1': `<a:1_:746695510341189666>`,
    '2': `<a:2_:746695510198452265>`,
    '3': `<a:3_:746695511976837120>`,
    '4': `<a:4_:746695510609625169>`,                       
    '5': `<a:5_:746695510718546040>`,
    '6': `<a:6_:746695510743581343>`,
    '7': `<a:7_:746695511461068820>`,
    '8': `<a:8_:746695511578378260>`,
    '9': `<a:9_:746695511498555423> `}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:746695502241857638>`,
    '1': `<a:1_:746695510341189666>`,
    '2': `<a:2_:746695510198452265>`,
    '3': `<a:3_:746695511976837120>`,
    '4': `<a:4_:746695510609625169>`,                       
    '5': `<a:5_:746695510718546040>`,
    '6': `<a:6_:746695510743581343>`,
    '7': `<a:7_:746695511461068820>`,
    '8': `<a:8_:746695511578378260>`,
    '9': `<a:9_:746695511498555423> `}[d];
      })
    }
  ///codare farkıyla bebeğim
const emoji1 = client.emojis.get("746695494285131828")
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
  msg.channel.send(embed1); 
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}