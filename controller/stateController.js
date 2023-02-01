const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://en.wikipedia.org/wiki/U.S._state"

async function fetchData(req, res) {
    try{
    let states = [];
    let response = await axios.get(url);
    let $ = await cheerio.load(response.data);
    $("#mw-content-text > div.mw-parser-output > div.div-col > div > ul > li > a")
    .each((i, e) => { states.push($(e).text().trim()) })

    res.send(states);

    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    fetchData
}