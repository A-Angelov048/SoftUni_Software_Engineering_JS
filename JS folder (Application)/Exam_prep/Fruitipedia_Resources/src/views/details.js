import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { get, del } from "../api.js";
import { getUserData } from "../userHelper.js";


const main = document.querySelector('main');
let id;

const template = (data) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${data.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${data.nutrition}</p>
              </div>
              ${getUserData()._id === data._ownerId ? html`<div id="action-buttons">
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${deleteButton}>Delete</a>
          </div>` : nothing}
            </div>
        </div>
      </section>
`

export async function detailsView(ctx) {
    id = ctx.params.id;
    const data = await get(`/data/fruits/${id}`);
    ctx.render(template(data), main);
}

async function deleteButton() {
    if (confirm('Are you sure you want to delete this record?')) {
        await del(`/data/fruits/${id}`);
        page.redirect('/fruits');
    }
}
