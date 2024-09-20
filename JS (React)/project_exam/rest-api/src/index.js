const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

const expressConfig = require('./config/expressConfig');
const router = require('./router');
const localServerStart = require('./localApi');


functions.setGlobalOptions({
    region: 'europe-west2'
});

switch (process.env.GCLOUD_PROJECT) {
    case 'deploy-furniture-shop-123':
        dotenv.config({ path: path.resolve(__dirname, '../environments/.env.furniture-shop') });
        break;

    default:
        dotenv.config({ path: path.resolve(__dirname, '../environments/.env.dev') });
        break;
}


const app = express();
const connection = process.env.DATABASE_URL;
const originUrl = process.env.ORIGIN_URL;

expressConfig(app, originUrl);
app.use(router);

mongoose.connect(connection)
    .then(() => {
        console.log('DB Connected.');

        if (process.env.NODE_ENV === 'development') {
            return localServerStart(app);
        }

    })
    .catch(err => console.error(err.message));

exports.api = functions.https.onRequest(app);