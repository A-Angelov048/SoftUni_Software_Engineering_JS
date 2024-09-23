require('dotenv').config({ path: '.env.development' });

function localServerStart(app) {

    const port = process.env.PORT_SERVER || 3000;
    app.listen(port, () => console.log(`Express server running on port: ${port}. You can make requests to http://localhost:${port}`));

}

module.exports = localServerStart;

