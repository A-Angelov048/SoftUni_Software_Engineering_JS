
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { get } from "./api.js";
import { deleteUserData } from "./userHelper.js";
import { homeView } from "./views/home.js";
import { navView } from "./views/navigationBar.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/createFurniture.js"
import { detailsView } from "./views/details.js";
import { editView } from "./views/editView.js";
import { myFurnitureView } from "./views/myFurniture.js";


page(ctxRender);
page(navView);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutUser);
page('/create-furniture', createView);
page('/details-furniture/:id', detailsView);
page('/edit/:id', editView);
page('/my-furniture', myFurnitureView);



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
    page.redirect('/dashboard');
    next();
}