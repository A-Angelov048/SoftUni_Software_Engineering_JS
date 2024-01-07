const guest = document.querySelector('#guest');
const nameEmail = document.querySelector('.email span');
const catches = document.querySelector('#catches');
const user = document.querySelector('#user');
const addButton = document.querySelector('.add');
const loadButton = document.querySelector('.load').addEventListener('click', loadCatches);
document.querySelector('#addForm').addEventListener('submit', createCatch);
document.querySelector('#logout').addEventListener('click', logout);

const url = 'http://localhost:3030/data/catches/';

let userData = JSON.parse(localStorage.getItem('userData'))

if (userData) {

    guest.style.display = 'none';
    nameEmail.textContent = userData.email;
    addButton.disabled = false;
    user.style.display = 'inline-block';
} else {
    user.style.display = 'none';
}

async function loadCatches() {
    
    catches.innerHTML = '';
    const response = await fetch(url);
    const data = await response.json();

    for (let line of Object.values(data)) {

        if (userData === null) {
            userData = '';
        }
        const access = userData._id === line._ownerId ? '' : 'disabled';
        const curCatch = createDivCatch(line, access);
        catches.appendChild(curCatch);
    }

    const deleteButton = Array.from(document.querySelectorAll('.delete'));
    deleteButton.forEach(e => e.addEventListener('click', deleteCatch))

    const updateButton = Array.from(document.querySelectorAll('.update'));
    updateButton.forEach(e => e.addEventListener('click', updateCatch))
}

async function createCatch(event) {

    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    if (Object.values(data).some(x => x === '')) {
        return alert('All fields are required!');
    }

    const options = {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": userData.accessToken
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(url, options);
    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }
    event.target.reset();
    loadCatches();
}

async function deleteCatch(event) {
    
    const id = event.target.dataset.id;

    const options = {
        method: 'delete',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": userData.accessToken,
        }
    }

    const response = await fetch(url + id, options);
    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }
    loadCatches();
}

async function updateCatch(event) {

    const id = event.target.dataset.id;
    const [angler, weight, species, location, bait, captureTime] = event.target.parentElement.querySelectorAll('input')
    const data = {
        angler: angler.value,
        weight: Number(weight.value),
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: Number(captureTime.value)
    }

    const options = {
        method: 'put',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": userData.accessToken,
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(url + id, options);
    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }
    loadCatches();
}

async function logout() {

    const options = {
        headers: {
            "X-Authorization": userData.accessToken,
        },
    }

    const response = await fetch('http://localhost:3030/users/logout', options);
    localStorage.clear();
    guest.style.display = 'inline-block';
    nameEmail.textContent = 'guest';
    addButton.disabled = true;
    user.style.display = 'none';
    userData = '';
}

function createDivCatch(data, access) {
    const div = document.createElement('div');
    div.className = 'catch';

    div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${data.angler}"${access}>
    <label>Weight</label>
    <input type="number" class="weight" value="${Number(data.weight)}"${access}>
    <label>Species</label>
    <input type="text" class="species" value="${data.species}"${access}>
    <label>Location</label>
    <input type="text" class="location" value="${data.location}"${access}>
    <label>Bait</label>
    <input type="text" class="bait" value="${data.bait}"${access}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${Number(data.captureTime)}"${access}>
    <button class="update" data-id="${data._id}"${access}>Update</button>
    <button class="delete" data-id="${data._id}"${access}>Delete</button>`

    return div;
}

