import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api.js";
import { setUserData } from "../userHelper.js";

const main = document.querySelector('main');

const template = () => html`
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${registerButton} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
`

export function registerView(ctx) {

    ctx.render(template(), main)

}

async function registerButton(event) {

    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);
    
    if (!data.email || !data.password) {
        return alert('all field are required!');
    }
    if (data.password !== data['re-password']) {
        return alert('passwords must match!');
    }

    const curUser = await post('/users/register', data);

    if (curUser) {
        setUserData(curUser);
        page.redirect('/products');
    }

    event.target.reset();
}