var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on('guildMemberAdd', (member) => {
    console.log('User ' + member.username + ' has joined the server!')

    var role = member.guild.roles.find(`name`, 'Ciastko');

    member.addRole(role)
});

bot.on('message', async message => {

    let messageArray = message.content.split(" ");
    var sender = message.author;
    var msg = message.content.startsWith;
    var prefix = 'cc!'
    let cmd = messageArray[0];

    if (cmd === `${prefix}ping`) {
        message.channel.send('Pong!')
    }

    if (message.channel.id === '456850069723807746') {
        if (isNaN(message.content)) {
            message.delete()
            sender.send('Witaj użytkowniku! ```Na serwerze Cookie Community na kanale #liczenie piszemy tylko i wyłącznie liczby/litery, jeśli chcesz porozmawiać z kimś na tym kanale to licząc, np. "100 hej".``` Pamiętaj o tym :wink:.')
        }
    }

    if (cmd.includes('fuck')) {
        if (sender.id === '456018252158730250') return;
        message.delete();
        var lol = await message.reply('napisałeś(aś) słowo, które jest zablokowane. ```Słowo: fuck```')
        lol.delete(10000)
    }

});

bot.on('ready', () => {
    console.log('Bot został włączony!');
    bot.user.setStatus(`dnd`);
    bot.user.setActivity(`users`, {type: "WATCHING"});
});

bot.login("process.env.TOKEN ");
