import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../userHelper.js";

const header = document.querySelector('header');

const template = () => html`
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/dashboard">Dashboard</a>
            ${getUserData() ?
        html`
            <div id="user">
                <span>Welcome, ${getUserData().email}</span>
                <a class="button" href="/myBooks">My Books</a>
                <a class="button" href="/create/book">Add Book</a>
                <a class="button" href="/logout">Logout</a>
            </div>`
        :
        html`
            <div id="guest">
                <a class="button" href="/login">Login</a>
                <a class="button" href="/register">Register</a>
            </div>
        `}                    
    </section>
</nav>
`

export function navView(ctx, next) {
    ctx.render(template(), header);
    next();
}