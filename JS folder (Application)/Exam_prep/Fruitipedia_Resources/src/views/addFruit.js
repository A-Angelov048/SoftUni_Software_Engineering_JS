import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api.js";


const main = document.querySelector('main');

const template = () => html`
<section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${addFruit} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
`

export function createFruitView(ctx) {
    ctx.render(template(), main);
}

async function addFruit(event) {
    
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    if (!data.name || !data.imageUrl || !data.description || !data.nutrition) {
        return alert('all fields are required!');
    }

    await post('/data/fruits', data);
    page.redirect('/fruits');
}