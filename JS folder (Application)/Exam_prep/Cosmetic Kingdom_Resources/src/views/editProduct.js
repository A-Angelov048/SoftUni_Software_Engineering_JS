import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { get, put } from "../api.js";

const main = document.querySelector('main');
let id;

const template = (product) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${editProduct} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                .value=${product.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
                .value=${product.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
                .value=${product.category}
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${product.description}</textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
                value=${product.price}
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export async function editView(ctx) {
    id = ctx.params.id;
    const curProduct = await get(`/data/products/${id}`)
    ctx.render(template(curProduct), main)
}

async function editProduct(event) {

    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    if (!data.name || !data.imageUrl || !data.price || !data.description || !data.category) {
        return alert('all field are required!');
    }

    await put(`/data/products/${id}`, data);
    page.redirect('/products');
}