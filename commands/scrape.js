module.exports = {


    name: 'scrape',
    descripton: "scraping",
    execute(message,args){
        const axios = require('axios');
        const cheerio = require('cheerio');
        axios
            .get("https://simkl.com/anime/1211265/jujutsu-kaisen/countdown/")
                .then((response) => {
        
        const html = response.data;

        
        const $ = cheerio.load(html);
        
        const scrapedata = $(".simkltvcountdowninforighttoporangedate");

        const data = scrapedata.text().split(' ');

        var now = new Date();
        
       

        if(scrapedata.text()){
          message.channel.send(`The next episode of JUJUTSU KAISEN is ${scrapedata.text()}!`);
          
        }else{
          message.channel.send("No data could be scraped");
         } 
      })
  
  .catch((error) => {
    console.log(error);
  });
        
    }

}