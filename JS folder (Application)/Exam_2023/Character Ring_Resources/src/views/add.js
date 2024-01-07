import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api.js";


const main = document.querySelector('main');

const template = () => html`
<section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Add Character</h2>
            <form @submit=${add} class="create-form">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Character Type"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="2"
              cols="10"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>`

export function createView(ctx) {
  ctx.render(template(), main);
}

async function add(event) {
  debugger
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
  
  await post('/data/characters', dataPost);
  page.redirect('/characters');
}