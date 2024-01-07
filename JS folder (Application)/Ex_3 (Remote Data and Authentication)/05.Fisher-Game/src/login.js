document.querySelector('#user').style.display = 'none';
document.querySelector('form').addEventListener('submit', login);
const url = 'http://localhost:3030/users/login';

async function login(event) {
    
    event.preventDefault();

    const form = new FormData(event.target);
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: form.get('email'),
            password: form.get('password')
        })
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        event.target.reset();
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    localStorage.setItem('userData', JSON.stringify(data));
    window.location = './index.html';
}