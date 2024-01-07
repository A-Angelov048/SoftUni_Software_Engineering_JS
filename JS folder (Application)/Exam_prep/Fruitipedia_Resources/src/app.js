
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { get } from "./api.js";
import { deleteUserData } from "./userHelper.js";
import { navView } from "./views/navigationBar.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { fruitsView } from "./views/dashboard.js";
import { createFruitView } from "./views/addFruit.js";
import { detailsView } from "./views/details.js";
import { editFruitView } from "./views/editFruit.js";
import { searchView } from "./views/search.js";


page(ctxRender);
page(navView);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutUser);
page('/fruits', fruitsView);
page('/create/fruit', createFruitView);
page('/more/info/:id', detailsView);
page('/edit/:id', editFruitView);
page('/search', searchView);




page.start();


function ctxRender(ctx, next) {
    ctx.render = renderer;
    next();
}

function renderer(template, root) {
    render(template, root);
}

async function logoutUser(ctx, next) {
    await get('/users/logout');
    deleteUserData();
    page.redirect('/');
    next();
}