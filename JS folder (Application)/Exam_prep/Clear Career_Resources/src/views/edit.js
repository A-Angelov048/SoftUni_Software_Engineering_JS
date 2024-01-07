import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { get, put } from "../api.js";


const main = document.querySelector('main');
let id;

const template = (data) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${submitButton} class="edit-form">
              <input type="text" name="title" id="job-title" placeholder="Title" value=${data.title} />
              <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${data.imageUrl} />
              <input type="text" name="category" id="job-category" placeholder="Category" value=${data.category} />
              <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">${data.description}</textarea>
              <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50">${data.requirements}</textarea>
              <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${data.salary} />
              <button type="submit">post</button>
            </form>
          </div>
</section>
`

export async function editView(ctx) {
    id = ctx.params.id;
    const data = await get(`/data/offers/${id}`);
    ctx.render(template(data), main);
}

async function submitButton(event) {
    
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    if (!data.title || !data.imageUrl || !data.category || !data.description || !data.requirements || !data.salary) {
        return alert('All fields are required!');
    }

    await put(`/data/offers/${id}`, data);
    page.redirect(`/details/${id}`);
}