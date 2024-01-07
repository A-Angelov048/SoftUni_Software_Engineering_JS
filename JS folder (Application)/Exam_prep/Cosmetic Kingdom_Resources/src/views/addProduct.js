import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../api.js";

const main = document.querySelector('main');

const template = () => html`
<section id="create">
          <div class="form">
            <h2>Add Product</h2>
            <form @submit= ${createProduct} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`

export function addProductView(ctx) {
  ctx.render(template(), main);
}

async function createProduct(event) {

  event.preventDefault();
  const form = new FormData(event.target);
  const data = Object.fromEntries(form);

  if (!data.name || !data.imageUrl || !data.price || !data.description || !data.category) {
    return alert('all field are required!');
  }

  await post('/data/products', data);
  page.redirect('/products');
}