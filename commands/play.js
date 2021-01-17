const ytdl = require('ytdl-core');
const yt = require('yt-search');

module.exports = {
    name: 'play',
    descripton: "Used to play music from yt",
    async execute(message,args){
        
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send("You must be in a voice channel to play music");
        }

        const connect = await voiceChannel.join();

        const finder = async (query) =>{
            
            
            const results = await yt(query);
           
            return results.videos[0];
          
        }
        
        const video = await finder(args.join(' '));

        if(video){
            const stream = ytdl(video.url,{filter: 'audioonly'});

            connect.play(stream,{seek:0, volume:1}).on("finish", () => {
                voiceChannel.leave();
            });


        }



    }

}