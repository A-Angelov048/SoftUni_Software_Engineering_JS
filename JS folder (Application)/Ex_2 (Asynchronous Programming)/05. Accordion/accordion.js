async function solution() {


    const main = document.querySelector('#main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list/';
    const response = await fetch(url);
    const data = await response.json();


    for (let line of data) {

        const curIdTitle = line._id;
        const url = 'http://localhost:3030/jsonstore/advanced/articles/details/';
        const response = await fetch(url + curIdTitle)
        const data = await response.json();
        createMoreLess(data);
    }

    function createMoreLess(curLine) {
        main.innerHTML += `
        <div class="accordion">
            <div class="head">
                <span>${curLine.title}</span>
                <button class="button" id=${curLine._id}>More</button>
            </div>
            <div class="extra">
                <p>${curLine.content}</p>
            </div>
        </div>`;
    }

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(line => { line.addEventListener('click', onClick) });

    function onClick(event) {
        
        const text = event.target.parentNode.parentNode.querySelector('.extra');
        const curButton = event.target;

        curButton.textContent = curButton.textContent === 'More' ? 'Less' : 'More';
        text.style.display = text.style.display === 'block' ? 'none' : 'block';
    }
}

window.onload = solution;