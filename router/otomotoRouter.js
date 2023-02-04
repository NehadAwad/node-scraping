const express = require('express');
const router = express.Router();

const { fetchData } = require('../controller/otomotoController');

router.get('/', fetchData);


module.exports = router;