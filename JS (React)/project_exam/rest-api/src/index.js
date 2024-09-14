const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const expressConfig = require('./config/expressConfig');
const router = require('./router');

const app = express();
const port = process.env.PORT || 3000;
const connection = process.env.DATABASE_URL;

expressConfig(app);
app.use(router);

mongoose.connect(connection)
    .then(() => {

        console.log('DB Connected.');

        app.listen(port, () => console.log(`Express server running on port: ${port}. You can make requests to http://localhost:${port}`));
    })
    .catch(err => console.log(err.message));