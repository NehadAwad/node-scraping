const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://en.wikipedia.org/wiki/U.S._state"

async function fetchData(req, res, next) {
    try{
    let res = await axios.get(url);
    let $ = await cheerio.load(res.data);
    $(
        "#mw-content-text > div.mw-parser-output > div.div-col > div > ul > li > a"
    ).each((i, e) => {
        console.log(e)
    })

    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    fetchData
}