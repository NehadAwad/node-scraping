const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//internal imports
const stateRouter = require('./router/stateRouter');

//routing setup
app.use('/states', stateRouter);

app.listen(port, () => {
    console.log(`Server is runnnig on port ${port}`);
})