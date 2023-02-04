const axios = require('axios');
const cheerio = require('cheerio');
const url = "https://www.otomoto.pl/ciezarowe/uzytkowe/mercedes-benz";

async function fetchData(req, res) {
    try{
       
        let response = await axios.get(url);
        let $ = await cheerio.load(response.data);
        console.log($);
    
        res.send('ok');
    
    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    fetchData
}