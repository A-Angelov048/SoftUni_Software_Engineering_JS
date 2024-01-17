import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { get, put } from "../api.js";
import { validateMakeModel, validateDescription, validateImg, validatePrice, validateYear } from "../userHelper.js";

const main = document.querySelector('main');
let id;

const template = (data) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${editButton}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${data.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" value="${data.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" value="${data.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${data.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${data.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${data.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${data.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
`

export async function editView(ctx) {

    id = ctx.params.id;
    const data = await get(`/data/catalog/${id}`);
    ctx.render(template(data), main);
}

async function editButton(event) {

    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    validateMakeModel(document.querySelector('#new-make'));
    validateMakeModel(document.querySelector('#new-model'));
    validateYear(document.querySelector('#new-year'));
    validateDescription(document.querySelector('#new-description'));
    validatePrice(document.querySelector('#new-price'));
    validateImg(document.querySelector('#new-image'));

    if (data.make.length < 4) return alert('Make must be at least 4 symbols long');
    if (data.model.length < 4) return alert('Model must be at least 4 symbols long');
    if (data.year < 1950 || data.year > 2050) return alert('Year must be between 1950 and 2050');
    if (data.description.length < 10) return alert('Description must be more than 10 symbols');
    if (!data.img) return alert('Image URL is required');
    if (data.price < 0) return alert('Price must be a positive number');

    await put(`/data/catalog/${id}`, data);

    page.redirect(`/details-furniture/${id}`);
}


