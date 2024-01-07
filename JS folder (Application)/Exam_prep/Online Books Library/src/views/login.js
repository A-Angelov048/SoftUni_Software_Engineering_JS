import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api.js";
import { setUserData } from "../userHelper.js";

const main = document.querySelector('main');

const template = () => html`
<section id="login-page" class="login">
            <form @submit=${loginButton} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
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
        page.redirect('/dashboard'); // redirect to home???
    }
    event.target.reset();
}