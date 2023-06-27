const express = require('express');
const router = require('./routes');
const app = express();

app.use('/', router)

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});