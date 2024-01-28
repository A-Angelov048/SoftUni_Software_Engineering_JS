const express = require('express');
const handlebars = require('express-handlebars');

const configExpress = require('./config/configExpress');
const configHandlebars = require('./config/configHandlebars');

const app = express();
const port = 5000;

configExpress(app);
configHandlebars(app);


app.listen(port, () =>{ console.log(`Express server running on port: ${port}. You can make requests to http://localhost:${port}/ `);})

