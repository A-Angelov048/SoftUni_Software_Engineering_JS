import { html } from "../../node_modules/lit-html/lit-html.js";

const main = document.querySelector('main');
//add html of home!
const template = () => html`

`

export function homeView(ctx){
    ctx.render(template(),main);
}