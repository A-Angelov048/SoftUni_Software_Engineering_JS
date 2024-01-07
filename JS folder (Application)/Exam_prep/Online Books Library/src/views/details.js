import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { del, get, post } from "../api.js";
import { getUserData } from "../userHelper.js";

const main = document.querySelector('main');
let id;

const template = (data, likedBooks, userLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${data.title}</h3>
        <p class="type">Type: ${data.type}</p>
        <p class="img"><img src=${data.imageUrl}></p>
        <div class="actions">
        ${data._ownerId === getUserData()._id ?
        html`
            <a class="button" href="/edit/${data._id}">Edit</a>
            <a class="button" href="javascript:void(0)" @click=${deleteButton}>Delete</a>
            `
        :
        getUserData() && data._ownerId !== getUserData()._id && userLike === 0 ?
            html`<a class="button" href="javascript:void(0)" @click=${likeButton}>Like</a>` : nothing
    }
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likedBooks}</span>
            </div>
        </div >
    </div >
    <div class="book-description">
        <h3>Description:</h3>
        <p>${data.description}</p>
    </div>
</section > `

export async function detailsView(ctx) {
    id = ctx.params.id;
    const data = await get(`/data/books/${id}`);
    const getTotalLikesBook = await get(`/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`);
    const getLikeForBookUser = await get(`/data/likes?where=bookId%3D%22${id}%22%20and%20_ownerId%3D%22${getUserData()._id}%22&count`);
    ctx.render(template(data, getTotalLikesBook, getLikeForBookUser), main)
}

async function deleteButton() {

    if (confirm('Are you sure you want to delete this book?')) {
        await del(`/data/books/${id}`);
        page.redirect('/dashboard');
    }
}

async function likeButton(event) {

    const button = event.target;
    await post('/data/likes', { bookId: id });
    button.remove();
    page.redirect(`/details/${id}`);
}