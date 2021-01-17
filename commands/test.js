const scrape = require('./scrape');

module.exports = {


    name: 'test',
    descripton: "scraping",
    execute(message,args){
        const puppeteer = require ('puppeteer');
        fs = require('fs');
        
        const scrap = async () =>{
            const browser = await puppeteer.launch({headless : false}); 
            const page = await browser.newPage();  
            //await page.waitForSelector('body > pre');
            await page.goto('https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic_by_country_and_territory', {waitUntil : 'domcontentloaded'}) 
           

            const recordList = await page.$$eval('div#covid19-container table#thetable tbody tr',(trows)=>{
                let rowList = []    
                trows.forEach(row => {
                        let record = {'country' : '','cases' :'', 'death' : '', 'recovered':''}
                        record.country = row.querySelector('a').innerText; 
                        const tdList = Array.from(row.querySelectorAll('td'), column => column.innerText); 
                        record.cases = tdList[0];        
                        record.death = tdList[1];       
                        record.recovered = tdList[2];   
                        if(tdList.length >= 3){         
                            rowList.push(record)
                        }
                    });
                console.log(rowList)
                return rowList;

            })

            console.log(recordList)
            console.log("hello world");
            message.channel.send("nani")
            

            fs.writeFile('covid-19.json',JSON.stringify(recordList, null, 2),(err)=>{
                if(err){console.log(err)}
                else{console.log('Saved Successfully!')}
            })
            
            browser.close();  
        };
        scrap();
      
    }

}

