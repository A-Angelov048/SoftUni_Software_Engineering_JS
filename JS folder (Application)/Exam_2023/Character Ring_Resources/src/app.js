
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { get } from "./api.js";
import { deleteUserData } from "./userHelper.js";
import { navView } from "./views/navigationBar.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { dashboardView } from "./views/dashboard.js";
import { createView } from "./views/add.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";


page(ctxRender);
page(navView);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutUser);
page('/characters', dashboardView);
page('/create/character', createView);
page('/more/info/:id', detailsView);
page('/edit/:id', editView);




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