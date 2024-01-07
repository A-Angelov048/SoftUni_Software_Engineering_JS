import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { get, put } from "../api.js";

const main = document.querySelector('main');
let id;

const template = (data) => html`
<section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form @submit=${editButton} class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Character Type"
              .value=${data.category}
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              .value=${data.imageUrl}
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
            .value=${data.description}
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
            .value=${data.moreInfo}
          ></textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`

export async function editView(ctx) {
    debugger
    id = ctx.params.id
    const data = await get(`/data/characters/${id}`);
    ctx.render(template(data), main);
}

async function editButton(event) {
    
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    if (!data.category || !data['image-url'] || !data.description || !data['additional-info']) {
        return alert('all fields are required!');
    }

    const dataPost = {
        category: data.category,
        imageUrl: data['image-url'],
        description: data.description,
        moreInfo: data['additional-info']
    }

    put(`/data/characters/${id}`, dataPost);
    page.redirect(`/more/info/${id}`);
}