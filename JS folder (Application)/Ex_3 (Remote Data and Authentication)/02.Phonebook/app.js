function attachEvents() {

    document.querySelector('#btnLoad').addEventListener('click', loadContacts);
    document.querySelector('#btnCreate').addEventListener('click', createContacts);

    const phoneBook = document.querySelector('#phonebook');
    const inputPerson = document.querySelector('#person');
    const inputPhone = document.querySelector('#phone');


    const url = 'http://localhost:3030/jsonstore/phonebook/';

    async function loadContacts() {

        const response = await fetch(url);
        const data = await response.json();

        for (let line of Object.values(data)) {
            const curData = createContact(line)
            phoneBook.appendChild(curData);
        }

        const buttonDelete = Array.from(document.querySelectorAll('.button-delete'));
        buttonDelete.forEach(line => line.addEventListener('click', deleteContact));
    }

    function createContact(data) {

        const li = document.createElement('li');
        li.textContent = `${data.person}: ${data.phone}`;
        const button = document.createElement('button');
        button.className = 'button-delete';
        button.id = data._id;
        button.textContent = 'Delete';

        li.appendChild(button);
        return li;
    }

    async function deleteContact(event) {

        const deleteContact = event.target.id;
        const options = {
            method: 'delete'
        }

        const response = await fetch(url + deleteContact, options);
        phoneBook.innerHTML = '';
        loadContacts();
    }

    async function createContacts() {

        const options = {
            person: inputPerson.value,
            phone: inputPhone.value
        }

        const response = await fetch(url,{
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(options) 
        })

        phoneBook.innerHTML = '';
        loadContacts();
    }
}

attachEvents();