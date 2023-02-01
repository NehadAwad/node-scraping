const express = require('express');
const router = express.Router();
const { fetchData } = require('../controller/stateController');

router.get('/', fetchData);

module.exports = router;

