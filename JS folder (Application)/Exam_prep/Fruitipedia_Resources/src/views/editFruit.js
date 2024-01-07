import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { get, put } from "../api.js";

const main = document.querySelector('main');
let id;

const template = (data) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${editFruit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                value=${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                value=${data.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              >${data.description}</textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
              >${data.nutrition}</textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export async function editFruitView(ctx) {
    id = ctx.params.id;
    const data = await get(`/data/fruits/${id}`);
    ctx.render(template(data), main);
}

async function editFruit(event){
    
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    if (!data.name || !data.imageUrl || !data.description || !data.nutrition) {
        return alert('all fields are required!');
    }

    await put(`/data/fruits/${id}`, data);
    page.redirect(`/more/info/${id}`);
}