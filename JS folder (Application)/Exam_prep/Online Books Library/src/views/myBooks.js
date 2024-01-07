import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../userHelper.js";
import { get } from "../api.js";


const main = document.querySelector('main');


const template = (data) => html`
<section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            ${data && data.length > 0 ?
        html`
            <ul class="my-books-list">${data.map(x => print(x))}</ul>`
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

export async function myBooksView(ctx) {
    const data = await get(`/data/books?where=_ownerId%3D%22${getUserData()._id}%22&sortBy=_createdOn%20desc`);
    ctx.render(template(data), main);
}
