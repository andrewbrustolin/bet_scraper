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
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.setExtraHTTPHeaders(headers);

   await page.goto('https://www.bet365.com/#/AC/B1/C1/D1002/E71022033/G40/');
   //await page.waitForSelector('#xyz');


   houses_obj.rawEventArrayBuilder(houses_obj.xpathGroupSetter(), houses_obj.urlArrayGetter());
   
   
   await page.waitForTimeout(3000);
   


   
   console.log('fim');
   

   browser.close();




}

scraper();

