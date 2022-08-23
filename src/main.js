import puppeteer from 'puppeteer';
import { houses_obj } from './objects.js';

const headers = {
   'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
   'accept-encoding': 'gzip, deflate, br',
   'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
   'cache-control': 'max-age=0',
   'connection': 'keep-alive',
   'sec-fetch-mode': 'navigate',
   'sec-fetch-site': 'none',
   'sec-fetch-user': '?1',
   'upgrade-insecure-requests': '1',
   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
 };

async function scraper() {

   const browser = await puppeteer.launch({headless:false});
   const page = [];
   const url_array = houses_obj.urlArrayGetter();
   //houses_obj.xpathGroupSetter();

   for (let i = 0; i < 2 /*url_array.length*/; i++) {

      page[i] = await browser.newPage();
      //page[i].setExtraHTTPHeaders(headers);
      await page[i].goto(url_array[i]);

      

   }

   

      
   //houses_obj.rawEventArrayBuilder(page.$x, page.waitForXPath); 

   

   
   

   
  



   
   
   
   


   
   console.log('fim');
   
   setTimeout(() => browser.close(), 10000);
   




}

scraper();

