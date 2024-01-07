function validate() {

    const regex = /^[a-z]+[@][a-z]+[.][a-z]+$/g;
    const input = document.getElementById('email');
    input.addEventListener('change', onChange);

    function onChange() {
        const value = document.getElementById('email').value
        regex.test(value) ? input.classList.remove('error') : input.classList.add('error')
    }
}