import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../userHelper.js";

const header = document.querySelector('header');

const template = () => html`
<h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/" class="active">Dashboard</a>
            ${getUserData() ?
        html`
                <div id="user">
                <a id="createLink" href="/create-furniture" >Create Furniture</a>
                <a id="profileLink" href="/my-furniture" >My Publications</a>
                <a id="logoutBtn" href="/logout">Logout</a>
            </div>` :
        html`
        <div id="guest">
                <a id="loginLink" href="/login">Login</a>
                <a id="registerLink" href="/register">Register</a>
            </div>`}
        </nav>
`

export function navView(ctx, next) {
    ctx.render(template(), header);
    next()
}