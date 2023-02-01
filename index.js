const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is runnnig on port ${port}`);
})