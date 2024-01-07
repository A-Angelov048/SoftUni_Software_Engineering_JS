import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api.js";
import { setUserData } from "../userHelper.js";

const main = document.querySelector('main');

const template = () => html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${loginButton} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`

export function loginView(ctx) {
    ctx.render(template(), main);
}

async function loginButton(event) {

    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    
    if (!data.email || !data.password) {
        return alert('all fields are required!');
    }

    const user = await post('/users/login', data);
    if (user) {
        setUserData(user);
        page.redirect('/');
    }
    event.target.reset();
}