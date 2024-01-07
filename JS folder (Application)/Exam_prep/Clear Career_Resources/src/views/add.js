import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api.js";


const main = document.querySelector('main');
//add html of addButton!
const template = () => html`
<section id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form @submit=${add} class="create-form">
              <input type="text" name="title" id="job-title" placeholder="Title"/>
              <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
              <input type="text" name="category" id="job-category" placeholder="Category"/>
              <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
              <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"></textarea>
              <input type="text" name="salary" id="job-salary" placeholder="Salary"/>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export function createView(ctx) {
  ctx.render(template(), main);
}

async function add(event) {

  event.preventDefault();

  const form = new FormData(event.target);
  const data = Object.fromEntries(form);

  if (!data.title || !data.imageUrl || !data.category || !data.description || !data.requirements || !data.salary) {
    return alert('all fields are required!');
  }

  await post('/data/offers', data);
  page.redirect('/dashboard');
}