document.querySelector('#user').style.display = 'none';
document.querySelector('form').addEventListener('submit', register);
const url = 'http://localhost:3030/users/register';


async function register(event) {
    
    event.preventDefault();

    const form = new FormData(event.target);

    if (form.get('email').length <= 0 || form.get('password').length <= 0) {
        event.target.reset();
        return alert('all fields required');
    }

    if (form.get('password') !== form.get('rePass')) {
        event.target.reset();
        return alert('password must match');
    }

    const curBody = {
        email: form.get('email'),
        password: form.get('password'),
        rePass: form.get('rePass')
    }

    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(curBody)
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        event.target.reset();
        const error = await response.json()
        return alert(error.message);
    }

    const data = await response.json();

    localStorage.setItem('userData', JSON.stringify(data));
    window.location = './index.html';
}