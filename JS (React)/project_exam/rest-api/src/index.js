const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const router = require('./router');


const app = express();
const port = 3000;

expressConfig(app);
handlebarsConfig(app);

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(router);

mongoose.connect('mongodb://localhost:27017/furniture-shop')
    .then(() => {

        console.log('DB Connected.');

        app.listen(port, () => console.log(`Express server running on port: ${port}. You can make requests to http://localhost:${port}`));
    })
    .catch(err => console.log('Cannot connect do DB.'));