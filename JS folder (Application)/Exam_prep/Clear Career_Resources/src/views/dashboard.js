import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";

const main = document.querySelector('main');

const template = (data) => html`
<section id="dashboard">
          <h2>Job Offers</h2>
          ${data && data.length > 0 ? data.map(x => print(x)) : html`<h2>No offers yet.</h2>`}
</section>
`

const print = (print) => html`
<div class="offer">
       <img src=${print.imageUrl} alt="example1" />
       <p><strong>Title: </strong><span class="title">${print.title}</span></p>
       <p><strong>Salary:</strong><span class="salary">${print.salary}</span></p>
       <a class="details-btn" href="/details/${print._id}">Details</a>
</div>
`

export async function productView(ctx) {
       const data = await get('/data/offers?sortBy=_createdOn%20desc');
       ctx.render(template(data), main);
}

