const puppeteer = require('puppeteer');

async function scraper() {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('https://br.betano.com/');
   await page.waitForTimeout(3000);
   


   
   console.log('teste');

   browser.close();




}

scraper();