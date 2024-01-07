import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../userHelper.js";

const header = document.querySelector('header');

const template = () => html`
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/products">Products</a>
          </div>
          ${operateWithUser()}
        </nav>
`

export function navBarView(ctx, next) {
  ctx.render(template(), header)

  next();
}

function operateWithUser() {

  if (!!getUserData() === true) {
    return html`
    <div class="user">
     <a href="/products/create">Add Product</a>
     <a href="/logout">Logout</a>
    </div>`
  } else {
    
    return html`
    <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
    `
  }
}