import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { del, get, post } from "../api.js";
import { getUserData } from "../userHelper.js";

const main = document.querySelector('main');
let id;

const template = (data, applications) => html`
 <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.title}</p>
            <p id="details-category">Category: <span id="categories">${data.category}</span></p>
            <p id="details-salary">Salary: <span id="salary-number">${data.salary}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${data.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${data.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">${applications}</strong></p>
            ${data._ownerId === getUserData()._id ?
    html`
            <div id="action-buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${deleteButton}>Delete</a>
            </div>
            `
    :
    getUserData() && data._ownerId !== getUserData()._id ?
      html`
            <div id="action-buttons">
              <a href="javascript:void(0)" id="apply-btn" @click=${applyButton}>Apply</a>
            </div>
            `
      :
      nothing
  }
          </div>
</section>
`

export async function detailView(ctx) {
  id = ctx.params.id;
  const getData = await get(`/data/offers/${id}`);
  const getApplications = await get(`/data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`)
  ctx.render(template(getData, getApplications), main);

}

async function deleteButton() {
  if (confirm('Are you sure you want to delete this offer?')) {
    await del(`/data/offers/${id}`);
    page.redirect('/dashboard');
  }
}

async function applyButton(event) {
  const targetButton = event.target;
  await post('/data/applications', { offerId: id });
  targetButton.remove();
  page.redirect(`/details/${id}`);
}