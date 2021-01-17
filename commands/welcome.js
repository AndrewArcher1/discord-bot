module.exports = {

    name: "welcome",
    define: "welcomes new members",
    execute(member, args){
        const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  
        if (!channel) return;
  
        channel.send(`We have been expecting you. , ${member}`);
    }


}