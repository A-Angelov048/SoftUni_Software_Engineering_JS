
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { navBarView } from "./views/navigationBar.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { get } from "./api.js";
import { deleteUserData } from "./userHelper.js";
import { productsView } from "./views/products.js";
import { addProductView } from "./views/addProduct.js";
import { productDetailView } from "./views/productDetails.js";
import { editView } from "./views/editProduct.js";


page(ctxRender);
page(navBarView);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutUser);
page('/products', productsView);
page('/products/create', addProductView);
page('/products/detail/:id', productDetailView);
page('/edit/:id', editView);



page.start();


function ctxRender(ctx, next) {
    ctx.render = renderer;

    next();
}

function renderer(template, root) {
    render(template, root);
}

async function logoutUser() {
    await get('/users/logout');
    deleteUserData();
    page.redirect('/products');
}