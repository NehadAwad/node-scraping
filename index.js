const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//internal imports
const stateRouter = require('./router/stateRouter');
const otomotoRouter = require('./router/otomotoRouter');

//routing setup
app.use('/states', stateRouter);
app.use('/otomoto', otomotoRouter);

app.listen(port, () => {
    console.log(`Server is runnnig on port ${port}`);
})