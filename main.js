const url_list = require('./data.json');
const axios = require('axios');

function getUrl(url){
   axios.get(url)
   .then(result => console.log(result))
   .catch(error => console.log(error))
} 


getUrl('https://br.betano.com/');

