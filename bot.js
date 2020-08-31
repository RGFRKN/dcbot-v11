const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader')(client);
const path = require('path');
const request = require('request');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
//______________________________Bot Durum______________________________\\
client.on('ready', async () => {
client.user.setActivity('Mordy ❤️', { type: 'WATCHING' }); //İzlior
client.user.setStatus('idle')
})
//______________________________odaya giris______________________________\\
client.on("ready", () => {
  client.channels.get("745280514138570852").join();
})
//______________________________ototagrol______________________________\\
client.on('userUpdate', async user => {
  let sunucuid = "745279471011102792"; //Buraya sunucunuzun IDsini yazın
  let tag = "လ"; //Buraya tagınızı yazın
  let rol = "746082597435605145"; //Buraya tag alındığı zaman verilecek rolün IDsini yazın
  let channel = client.guilds.get(sunucuid).channels.find(x => x.name == 'tag-log'); //tagrol-log yerine kendi log kanalınızın ismini yazabilirsiniz
  if (!tag) return;
  if (!rol) return;
  if (!channel) return;
  let member = client.guilds.get(sunucuid).members.get(user.id);
  if (!member) return;
  if (!member.roles.has(rol)) {
    if (member.user.username.includes(tag)) {
      member.addRole(rol)
      const tagalma = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${user.id}> **adlı kişi, "${tag}" tagını aldığından dolayı <@&${rol}> rolü verildi.**`)
      .setTimestamp()
      channel.send(tagalma)
    }
  }else{
    if (!member.user.username.includes(tag)) {
      member.removeRole(rol)
      const tagsilme = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${user.id}> **adlı kişi, "${tag}" tagını sildiğinden dolayı <@&${rol}> rolü alındı.**`)
      .setTimestamp()
      channel.send(tagsilme)
    }
  }
});
//______________________________otoisim______________________________\\
client.on('guildMemberAdd', (member) => {
 
   let rakamlar = Array(9).fill(0).map((_, index) => index + 1);
 
    let nickkontrol = member.user.username.split("")
 
    if (!tumHarfler('_', ';').some(harf => nickkontrol.includes(harf))) {
        member.setNickname("ꧪ İsim | Yaş")
    } else {
        return;
    }
 
    function tumHarfler(charA, charZ) {
        let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i))
        }
        return a;
    }
 
});
//______________________________ddos______________________________\\
client.on('message', msg => {

if(client.ping > 550) {

            let emran = ['singapore', 'eu-central', 'india', 'us-central', 'london',
            'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong', 
            'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
            'russia']

           let krypton = emran[Math.floor(Math.random() * emran.length)]
           let kanal = msg.guild.channels.find(c => c.name === "saldırı-koruma")

           kanal.send(`Sunucunun Pingi Yükseldiğinden Dolayı Bölge Değiştirildi!\n🔸 Yeni Bölge: ${krypton} `+ client.ping)
           msg.guild.setRegion(krypton)
           .then(g => console.log("🌍 Bölge:" + g.region))
           .then(g => msg.channel.send("✅ Bölge **"+ g.region  + " Olarak Değiştirildi! 🏡"))
           .then(msg.reply('✅ Bölge Değiştirildi! ')) 
           .catch(console.error);
}});
