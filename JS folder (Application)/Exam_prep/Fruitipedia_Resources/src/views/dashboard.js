import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";

const main = document.querySelector('main');

const template = (data) => html`
 <h2>Fruits</h2>
 ${data && data.length > 0 ?
              html`
 <section id="dashboard">
    ${data.map(f => printFruit(f))}
 </section>
 `: html`<h2>No fruit info yet.</h2>`}
 `

const printFruit = (curFruit) => html`
 <div class="fruit">
            <img src=${curFruit.imageUrl} alt="example1" />
            <h3 class="title">${curFruit.name}</h3>
            <p class="description">${curFruit.description}</p>
            <a class="details-btn" href="/more/info/${curFruit._id}">More Info</a>
 </div>
 `

export async function fruitsView(ctx) {
       const data = await get('/data/fruits?sortBy=_createdOn%20desc');
       ctx.render(template(data), main);
}

