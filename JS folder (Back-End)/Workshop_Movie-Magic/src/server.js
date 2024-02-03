const express = require('express');
const mongoose = require('mongoose');

const configExpress = require('./config/configExpress');
const configHandlebars = require('./config/configHandlebars');
const routers = require('./routes.js');

const app = express();
const port = 5000;

configExpress(app);
configHandlebars(app);

app.use(routers);

mongoose.connect('mongodb://localhost:27017/magic-movie')
    .then(() => {
        console.log('DB Connected.');

        app.listen(port, () => { console.log(`Express server running on port: ${port}. You can make requests to http://localhost:${port}/ `) })
    })
    .catch(err => console.log('Cannot connect do DB.'))



