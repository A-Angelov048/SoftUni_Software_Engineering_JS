function validate() {

    let inputUsername = document.getElementById('username');
    let inputEmail = document.getElementById('email');
    let inputPassword = document.getElementById('password');
    let inputConPassword = document.getElementById('confirm-password');
    let inputCompanyNumber = document.getElementById('companyNumber');

    let regexUsername = /^[a-zA-Z0-9]{3,20}$/g;
    let regexEmail = /^[^@.]+@[^@]*\.[^@]*$/;
    let regexPassword = /^[\w]{5,15}$/;

    let button = document.getElementById('submit').addEventListener('click', submit);
    let checkBox = document.getElementById('company');
    checkBox.addEventListener('change', check);
    let companyInfo = document.getElementById('companyInfo');
    let valid = document.getElementById('valid');


    function check() {
        if (checkBox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function submit(event) {

        event.preventDefault();

        let userName = inputUsername.value;
        let email = inputEmail.value;
        let password = inputPassword.value;
        let conPassword = inputConPassword.value;
        let companyInfo = Number(inputCompanyNumber.value);
        let isValid = true;

        if (regexUsername.test(userName)) {
            inputUsername.style.border = 'none';
        } else {
            inputUsername.style.borderColor = 'red';
            isValid = false;
        }
        if (regexEmail.test(email)) {
            inputEmail.style.border = 'none';
        } else {
            inputEmail.style.borderColor = 'red';
            isValid = false;
        }
        if (password === conPassword && regexPassword.test(password)) {
            inputPassword.style.border = 'none';
            inputConPassword.style.border = 'none';
        } else {
            inputPassword.style.borderColor = 'red';
            inputConPassword.style.borderColor = 'red';
            isValid = false;
        }
        if (checkBox.checked) {
            if (companyInfo < 1000 || companyInfo > 9999) {
                inputCompanyNumber.style.borderColor = 'red';
                isValid = false;
            } else {
                inputCompanyNumber.style.border = 'none';
            }
        }

        if (isValid) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    }
}






function validate() {

    const inputUsername = document.querySelector('#username');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    const inputConPassword = document.querySelector('#confirm-password');
    const inputCompanyNumber = document.querySelector('#companyNumber');

    const regexUsername = /^[A-Za-z0-9]{3,20}$/;
    const regexEmail = /^[^@.]+@[^@]*\.[^@]*$/;
    const regexPassword = /^[\w]{5,15}$/;

    const button = document.querySelector('#submit').addEventListener('click', submit);
    const checkBox = document.querySelector('#company');
    checkBox.addEventListener('change', check);
    const companyInfo = document.querySelector('#companyInfo');
    const valid = document.querySelector('#valid');


    function check() {
        if (checkBox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function submit(event) {

        event.preventDefault();

        const userName = inputUsername.value;
        const email = inputEmail.value;
        const password = inputPassword.value;
        const conPassword = inputConPassword.value;
        const companyInfo = Number(inputCompanyNumber.value);
        
        let correctName = regexUsername.test(userName) ? document.querySelector('#username').style.borderColor = '' : document.querySelector('#username').style.borderColor = 'red';
        let correctEmail = regexEmail.test(email) ? document.querySelector('#email').style.borderColor = '' : document.querySelector('#email').style.borderColor = 'red';
        let correctCompanyInfo = companyInfo >= 1000 && companyInfo <= 9999 ? document.querySelector('#companyNumber').style.borderColor = '' : document.querySelector('#companyNumber').style.borderColor = 'red';
        let correctPassword = false;

        if (password === conPassword && regexPassword.test(password)) {
            document.querySelector('#password').style.borderColor = '';
            document.querySelector('#confirm-password').style.borderColor = '';
            correctPassword = true;
        } else {
            document.querySelector('#password').style.borderColor = 'red';
            document.querySelector('#confirm-password').style.borderColor = 'red';
        }

        if (correctName === '' && correctEmail === '' && correctPassword && !checkBox.checked) {
            valid.style.display = 'block';
        } else if (correctName === '' && correctEmail === '' && correctPassword && correctCompanyInfo === '') {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    }
}