import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";

const main = document.querySelector('main');

const template = (data) => html`
<h2>Characters</h2>
        <section id="characters">
        ${data && data.length > 0 ?
    data.map(x => print(x))
    :
    html`<h2>No added Heroes yet.</h2>`}
        </section>`

const print = (print) => html`
<div class="character">
            <img src=${print.imageUrl} alt="example1" />
            <div class="hero-info">
              <h3 class="category">${print.category}</h3>
              <p class="description">${print.description}</p>
              <a class="details-btn" href="/more/info/${print._id}">More Info</a>
            </div>
          </div>
`

export async function dashboardView(ctx) {
  
  const data = await get('/data/characters?sortBy=_createdOn%20desc');
  ctx.render(template(data), main);
}

