function attachEvents() {

    document.querySelector('#btnLoad').addEventListener('click', loadContacts);
    document.querySelector('#btnCreate').addEventListener('click', createContacts);

    const phoneBook = document.querySelector('#phonebook');
    phoneBook.addEventListener('click',action);
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
    }

    function createContact(data) {

        const li = document.createElement('li');
        li.textContent = `${data.person}: ${data.phone}`;
        const button = document.createElement('button');
        button.id = data._id;
        button.textContent = 'Delete';

        li.appendChild(button);
        return li;
    }
    
    // event delegation!!!!
    function action (event){
        
        const target = event.target;
        if (target.tagName === 'BUTTON'){
            deleteContact(target.id);
        }
    }

    async function deleteContact(id) {

        const options = {
            method: 'delete'
        }

        const response = await fetch(url + id, options);
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