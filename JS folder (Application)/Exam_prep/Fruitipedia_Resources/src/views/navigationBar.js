import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../userHelper.js";

const header = document.querySelector('header');

const template = () => html`
<a id="logo" href="/"
    ><img id="logo-img" src="./images/logo.png" alt=""
/></a> 

        <nav>
          <div>
            <a href="/fruits">Fruits</a>
            <a href="/search">Search</a>
          </div>
        ${getUserData() ?
        html` 
        <div class="user">
          <a href="/create/fruit">Add Fruit</a>
          <a href="/logout">Logout</a>
        </div>`
        :
        html`
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
        `}
        </nav >
    `

export function navView(ctx, next) {
    ctx.render(template(), header);
    next();
}