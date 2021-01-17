const Discord = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'pog'){
       client.commands.get('pog').execute(message,args);
       console.log('pog worked');
    }

    if(command === 'scrape'){
    client.commands.get('scrape').execute(message,args);
    console.log('scrpaed worked');  
    }
    
    if(command === 'test'){
        client.commands.get('test').execute(message,args);
        console.log('test worked');  
        }
    
    if(command === 'play'){
        client.commands.get('play').execute(message,args);
        console.log('play worked');
    }

    if(command === 'leave'){
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel){
            return message.channel.send("You must be in a voice channel to play music");
        }
        voiceChannel.leave();
    }

    if(command === 'blackjack'){

    }

   

});


client.on('guildMemberAdd', member => {
    client.commands.get('welcome').execute(member, args);

});

client.login('TOKEN HERE');







