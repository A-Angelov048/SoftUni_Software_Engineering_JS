const handlebars = require('express-handlebars');
const path = require('path');


function configHandlebars(app) {

    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        helpers: {
            stars: function star(value) {
                const star = '&#x2605;';
                return star.repeat(value);
            }

        }
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.resolve('src/views'));


}

module.exports = configHandlebars;
