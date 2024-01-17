import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";
import { getUserData } from "../userHelper.js";

const main = document.querySelector('main');

const template = (data) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
</div>
<div class="row space-top">
${data.map(x => print(x))}
</div>
`
const print = (furniture) => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${furniture.img}" />
                            <p>${furniture.description}</p>
                            <footer>
                                <p>Price: <span>${furniture.price}</span></p>
                            </footer>
                            <div>
                                <a href="/details-furniture/${furniture._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
`

export async function myFurnitureView(ctx) {

    const id = getUserData()._id;
    const data = await get(`/data/catalog?where=_ownerId%3D%22${id}%22`);
    ctx.render(template(data), main);
}
