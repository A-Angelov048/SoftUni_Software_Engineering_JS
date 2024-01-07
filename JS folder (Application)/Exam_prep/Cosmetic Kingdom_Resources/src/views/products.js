import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";

const main = document.querySelector('main');

const template = (data) => html`
<h2>Products</h2>
<section id="dashboard">
        ${data && data.length > 0 ?
        html`${data.map(p => renderProduct(p))}`
        :
        html`<h2>No products yet.</h2>`}
        </section> 
`
const renderProduct = (curProduct) => html`
        <div class="product">
            <img src=${curProduct.imageUrl} alt="example1" />
            <p class="title">${curProduct.name}</p>
            <p><strong>Price:</strong><span class="price">${curProduct.price}</span>$</p>
            <a class="details-btn" href="/products/detail/${curProduct._id}">Details</a>
        </div>
`

export async function productsView(ctx) {
    
    const data = await get('/data/products?sortBy=_createdOn%20desc');
    ctx.render(template(data), main);
}