import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api.js";
import { setUserData } from "../userHelper.js";

const main = document.querySelector('main');

const template = () => html`
<section id="register-page" class="register">
            <form @submit=${registerButton} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`

export function registerView(ctx) {
    ctx.render(template(), main);
}

async function registerButton(event) {

    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    if (!data.email || !data.password) {
        return alert('all fields are required!');
    }
    if (data.password !== data['confirm-pass']) {
        return alert('password must match');
    }

    const user = await post('/users/register', data);

    if (user) {
        setUserData(user);
        page.redirect('/dashboard');
    }

    event.target.reset();
}