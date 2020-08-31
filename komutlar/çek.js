const Discord = require("discord.js")

exports.run = async (client, message, args, member) => {
    if (!message.member.voiceChannel) return message.channel.send("Bir ses kanalında olman gerek")
    let Gullanici = message.mentions.members.first();
    if (!Gullanici) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**Kime işlem yapılacağını belirtmelisin**! \n**Doğru Kullanım:** \`.çek @Kullanıcı\``).setTimestamp().setFooter(message.member.user.username, message.member.user.avatarURL).setColor("RANDOM"));
    if (!Gullanici) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription("**Bu kullanıcı herhangi bir ses kanalında değil**").setTimestamp().setFooter(message.member.user.username, message.member.user.avatarURL).setColor("RANDOM"));
    if (!Gullanici) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription("**Kullanıcı belirtmedin**").setTimestamp().setFooter(message.member.user.username, message.member.user.avatarURL).setColor("RANDOM"));
    if (message.member.voiceChannel.id == Gullanici.voiceChannel.id) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription("**Zaten aynı kanaldasınız**.").setTimestamp().setFooter(message.member.user.username, message.member.user.avatarURL).setColor("RANDOM"));
    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === Gullanici.id;
    };
    let casper = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${Gullanici}, ${message.author} **seni ${message.member.voiceChannel} odasına çekmek istiyor. Kabul ediyormusun**?`)
        .setTimestamp()
        .setFooter(message.member.user.username, message.member.user.avatarURL) 

    let mesaj = await message.channel.send(casper)
    await mesaj.react("✅")
    await mesaj.react("❌")
    mesaj.awaitReactions(filter, {
        max: 1,
        time: 60000,
        errors: ['time']
    }).then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '✅') {
            let kabul = new Discord.RichEmbed()
                .setColor("GREEN")
                .setDescription(`${Gullanici} odaya çekildi`)
            message.channel.send(kabul)
           Gullanici.setVoiceChannel(message.member.voiceChannel)
        } else {
            let sama = new Discord.RichEmbed()
                .setColor("RED")
                .setDescription(`${Gullanici} odaya çekilme teklifini reddetti`)
            message.channel.send(sama)
        }
    })
}

exports.conf = {
    enabled: true,
    aliases: ['çek'],
    permLevel: 0
};

exports.help = {
    name: "çek",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: "çek @kullanıcı"

};