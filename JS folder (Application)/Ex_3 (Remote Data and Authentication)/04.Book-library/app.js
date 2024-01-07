
document.querySelector('#loadBooks').addEventListener('click', loadBooks);
const form = document.querySelector('#edit-form');
form.addEventListener('submit', createBook);
const buttonForm = document.querySelector('#edit-form button');
const h3Form = document.querySelector('#edit-form h3');
const titleInput = document.querySelector('[name=title]');
const authorInput = document.querySelector('[name=author]');

const url = 'http://localhost:3030/jsonstore/collections/books/';
const table = document.querySelector('#books');


async function loadBooks() {

    table.innerHTML = '';
    const response = await fetch(url);
    const data = await response.json();

    for (let line in data) {
        const idBook = line;
        const bookName = data[line].title;
        localStorage.setItem(bookName, idBook);
        const book = curBook(data[line]);
        table.appendChild(book);
    }

    const deleteButton = Array.from(document.querySelectorAll('#delete'));
    deleteButton.forEach(x => x.addEventListener('click', deleteBook));

    const editButton = Array.from(document.querySelectorAll('#edit'));
    editButton.forEach(x => x.addEventListener('click', editBook));
}

async function createBook(event) {

    event.preventDefault();

    const curBody = checkForm();

    if (!curBody) {
        return
    }

    const options = {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(curBody)
    }

    const response = await fetch(url, options);
    event.target.reset();
    loadBooks();
}

function editBook(event) {

    h3Form.textContent = 'Edit FORM';
    buttonForm.textContent = 'Save';

    const curBook = event.target.parentElement.parentElement.querySelectorAll('td');
    const title = curBook[0].textContent;
    const author = curBook[1].textContent;

    titleInput.value = title;
    authorInput.value = author;

    form.removeEventListener('submit', createBook);
    form.addEventListener('submit', save);

    async function save(event) {

        event.preventDefault();

        const curBody = checkForm();

        if (!curBody) {
            return
        }

        const options = {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(curBody)
        }
        const idBook = localStorage.getItem(title);

        const response = await fetch(url + idBook, options);

        h3Form.textContent = 'FORM';
        buttonForm.textContent = 'Submit';
        form.removeEventListener('submit', save);
        form.addEventListener('submit', createBook);
        event.target.reset();
        loadBooks();
    }
}

async function deleteBook(event) {

    const curBook = event.target.parentElement.parentElement.querySelector('td');

    const idBook = localStorage.getItem(curBook.textContent);
    const options = {
        method: 'delete'
    }

    const response = await fetch(url + idBook, options);
    loadBooks();
}

function curBook(data) {

    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdButtons = document.createElement('td');


    const buttonEdit = document.createElement('button');
    const buttonDelete = document.createElement('button');

    tdTitle.textContent = data.title;
    tdAuthor.textContent = data.author;

    buttonEdit.id = 'edit';
    buttonDelete.id = 'delete';
    buttonEdit.textContent = 'Edit';
    buttonDelete.textContent = 'Delete';

    tdButtons.appendChild(buttonEdit);
    tdButtons.appendChild(buttonDelete);

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdButtons);

    return tr;
}

function checkForm() {

    const formInputs = new FormData(document.querySelector('#edit-form'));
    if (formInputs.get('title').length <= 0 || formInputs.get('author').length <= 0) {
        return alert('all fields required');
    }

    const body = {
        title: formInputs.get('title'),
        author: formInputs.get('author')
    }
    return body
}