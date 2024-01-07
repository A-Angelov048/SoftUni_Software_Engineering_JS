async function lockedProfile() {

    const main = document.querySelector('#main');
    main.innerHTML = '';

    const url = 'http://localhost:3030/jsonstore/advanced/profiles/';
    const response = await fetch(url);
    const data = await response.json();

    let count = 0;

    for (let line in data) {
        count++;
        createUser(data[line]);
    }

    function createUser(curUser) {
        main.innerHTML +=
            `<div class="profile">
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${count}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${count}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${count}Username" value="${curUser.username}" disabled readonly />
        <div id="user${count}HiddenFields" style="display: none;">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${count}Email" value="${curUser.email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user${count}Age" value="${curUser.age}" disabled readonly />
        </div>
        <button>Show more</button>
    </div>`;
    }

    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(line => { line.addEventListener('click', onClick) });

    function onClick(event) {
        
        const checkBoxUnlock = event.target.parentElement.querySelector('[value=unlock]');
        const profile = event.target.parentElement.getElementsByTagName('div')[0];
        const buttonName = event.target;

        if (checkBoxUnlock.checked) {

            if (buttonName.textContent === 'Show more') {
                profile.style.display = 'block';
                buttonName.textContent = 'Hide it';
            } else if (buttonName.textContent === 'Hide it') {
                profile.style.display = 'none';
                buttonName.textContent = 'Show more';
            }
        }
    }
}