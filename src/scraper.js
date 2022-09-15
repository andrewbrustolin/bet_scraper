import puppeteer from 'puppeteer';
import { houses_obj } from './objects.js';

export async function scraper() {
   const browser = await puppeteer.launch(/*{headless:false}*/);
   const page = [];
   const url_array = houses_obj.urlArrayGetter();
   houses_obj.xpathGroupSetter();
   
   for (let i = 0; i < url_array.length; i++) {
      page[i] = await browser.newPage();
      await page[i].setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36');
      console.log(await page[i].evaluate(() => navigator.userAgent));
      await page[i].goto(url_array[i], {waitUntil: 'networkidle2'});
   }
   
   let buffer = [];
   for (let i = 0; i < url_array.length; i++) {
      for(let j = 0; j < houses_obj.houses[i].xpath_group.length; j++){

         await page[i].waitForXPath(houses_obj.houses[i].xpath_group[j]);
         buffer = await page[i].$x(houses_obj.houses[i].xpath_group[j]); //array with k elements in it

         for(let k = 0; k < buffer.length; k++){
            buffer[k] = await page[i].evaluate(tx => tx.innerText, buffer[k]);
         }
         houses_obj.houses[i].raw_events_array[j] = buffer;
      }
   }

   houses_obj.eventArrayProcessing();
   
   return houses_obj.sureBetStake();
   
   
   //setTimeout(() => browser.close(), 10000);


}

//scraper();

