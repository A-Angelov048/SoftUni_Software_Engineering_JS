import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { del, get, post } from "../api.js";
import { getUserData } from "../userHelper.js";

const main = document.querySelector('main');
let id;

const templateUsers = (product, count) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${product.imageUrl} alt="example1" />
            <p id="details-title">${product.name}</p>
            <p id="details-category">Category: <span id="categories">${product.category}</span></p>
            <p id="details-price">Price: <span id="price-number">${product.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">${countBought()}</span> times.</h4>
                <span>${product.description}</span>
              </div>
            </div>
            ${product._ownerId === getUserData()._id ?
    html`
            <div id="action-buttons">
              <a href="/edit/${product._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${delButton}>Delete</a>
            </div>
            `
    :
    count === 0 ? html`
            <div id="action-buttons">
              <a href="javascript:void(0)" id="buy-btn" @click=${buyButton}>Buy</a>
            </div>
            `
      :
      nothing
  }
          </div>
</section>
`

const templateGuests = (product) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${product.imageUrl} alt="example1" />
            <p id="details-title">${product.name}</p>
            <p id="details-category">Category: <span id="categories">${product.category}</span></p>
            <p id="details-price">Price: <span id="price-number">${product.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">${countBought()}</span> times.</h4>
                <span>${product.description}</span>
              </div>
            </div>
          </div>
</section>  
`

export async function productDetailView(ctx) {
  id = ctx.params.id;
  const curProduct = await get(`/data/products/${id}`)
  const count = await get(`/data/bought?where=productId%3D%22${id}%22%20and%20_ownerId%3D%22${getUserData()._id}%22&count`);
  !!getUserData()._id ? ctx.render(templateUsers(curProduct, count), main) : ctx.render(templateGuests(curProduct), main);
}

async function delButton() {

  if (confirm(`Do you really want to delete this product?`)) {
    await del(`/data/products/${id}`);
    page.redirect('/products');
  }
}

async function buyButton() {
  
  const body = { productId: id };
  await post('/data/bought', body)
  page.redirect(`/products/detail/${id}`);
}

async function countBought() {
  
  const count = await get(`/data/bought?where=productId%3D%22${id}%22&distinct=_ownerId&count`)

  const span = document.querySelector('#buys')
  span.textContent = count;
}