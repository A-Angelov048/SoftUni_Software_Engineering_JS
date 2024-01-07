import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { del, get, post } from "../api.js";
import { getUserData } from "../userHelper.js";

const main = document.querySelector('main');
let id;

const template = (data, like, userLike) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <div>
            <p id="details-category">${data.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${data.description}</p>
                   <p id ="more-info">${data.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">${like}</span></h3>

               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${data._ownerId === getUserData()._id ?
        html`
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${deleteButton}>Delete</a>`
        :
        getUserData() && userLike === 0 ? html`<a href="javascript:void(0)" id="like-btn" @click=${likeButton}>Like</a>` : nothing}
          </div>
            </div>
        </div>
      </section>
`

export async function detailsView(ctx) {
    
    id = ctx.params.id;
    const data = await get(`/data/characters/${id}`);
    const like = await get(`/data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`);
    const userLike = await get(`/data/useful?where=characterId%3D%22${id}%22%20and%20_ownerId%3D%22${getUserData()._id}%22&count`);
    ctx.render(template(data, like, userLike), main);
}

async function deleteButton() {

    if (confirm('Are you sure you want to delete this character?')) {
        del(`/data/characters/${id}`);
        page.redirect('/characters');
    }
}

async function likeButton(event) {
    
    const button = event.target;
    await post('/data/useful', { characterId: id });
    button.remove();
    page.redirect(`/more/info/${id}`);
}