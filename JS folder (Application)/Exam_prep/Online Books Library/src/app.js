
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { get } from "./api.js";
import { deleteUserData } from "./userHelper.js";
import { navView } from "./views/navigationBar.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { booksView } from "./views/books.js";
import { createView } from "./views/add.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { myBooksView } from "./views/myBooks.js";


page(ctxRender);
page(navView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutUser);
page('/create/book', createView);
page('/dashboard', booksView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/myBooks', myBooksView);




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