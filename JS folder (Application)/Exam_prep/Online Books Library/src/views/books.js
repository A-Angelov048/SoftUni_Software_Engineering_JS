import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";

const main = document.querySelector('main');

const template = (data) => html`
<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${data && data.length > 0 ?
              html`
            <ul class="other-books-list">${data.map(x => print(x))}</ul>`
              :
              html`<p class="no-books">No books in database!</p>`}
</section>      
`

const print = (print) => html`
<li class="otherBooks">
       <h3>${print.title}</h3>
       <p>Type: ${print.type}</p>
       <p class="img"><img src=${print.imageUrl}></p>
       <a class="button" href="/details/${print._id}">Details</a>
</li>
`

export async function booksView(ctx) {
       const data = await get('/data/books?sortBy=_createdOn%20desc');
       ctx.render(template(data), main);
}

