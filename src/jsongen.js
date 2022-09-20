import  { scraper }  from './scraper.js';
import * as fs from 'fs/promises';

export function jsonGeneration(){

    async function jsonConversion(){
        const string_array = await scraper();
        const data = JSON.stringify(string_array, null, 2);
        return data;
    }
     async function jsonFileCreation(){
        const data = await jsonConversion();
        const path = "src/data.json";
        console.log("Creating json data table");
        fs.writeFile(path, data)
        .then(console.log("File created successfully"));  
     }
    
     jsonFileCreation();
}





