import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getUserData } from "../userHelper.js";
import { del, get } from "../api.js";

const main = document.querySelector('main');
let id;

const template = (data) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
</div>
<div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${data.img} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${data.make}</span></p>
                <p>Model: <span>${data.model}</span></p>
                <p>Year: <span>${data.year}</span></p>
                <p>Description: <span>${data.description}</span></p>
                <p>Price: <span>${data.price}</span></p>
                <p>Material: <span>${data.material}</span></p>
                ${data._ownerId === getUserData()._id ?
        html`
                <div>
                    <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
                    <a href="javascript:void(0)" class="btn btn-red" @click=${deleteButton}>Delete</a>
                </div>`
        : nothing}
            </div>
        </div>
`

export async function detailsView(ctx) {

    id = ctx.params.id;
    const data = await get(`/data/catalog/${id}`);

    ctx.render(template(data), main);
}

async function deleteButton(){
    if(confirm('Are you sure you want to delete this piece of furniture?')){
        await del(`/data/catalog/${id}`);
        page.redirect('/');
    }
}



