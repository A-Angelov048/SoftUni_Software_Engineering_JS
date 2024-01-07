import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";

const main = document.querySelector('main');
let context;

const template = (data) => html`
<section id="search">
<div class="form">
  <h2>Search</h2>
  <form @submit=${searchButton} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
    ${!!data === true ? 
      data.length > 0 ? data.map(f => printResults(f)) : html`<p class="no-result">No result.</p>` 
      : 
      nothing}
  </div>
        </section>
`

const printResults = (curFruit) => html`
<div class="fruit">
          <img src=${curFruit.imageUrl} alt="example1" />
          <h3 class="title">${curFruit.name}</h3>
          <p class="description">${curFruit.description}</p>
          <a class="details-btn" href="/more/info/${curFruit._id}">More Info</a>
        </div>
`

export function searchView(ctx) {
  context = ctx;
  ctx.render(template(), main);
}


async function searchButton(event) {
  debugger
  event.preventDefault();

  const form = new FormData(event.target);
  const data = Object.fromEntries(form);

  if (!data.search) return alert('Search field must be field!');

  const dataFromServer = await get(`/data/fruits?where=name%20LIKE%20%22${data.search}%22`);
  context.render(template(dataFromServer), main);
}

