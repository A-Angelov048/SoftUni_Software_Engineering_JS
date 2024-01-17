export function getUserData() {
    const result = JSON.parse(localStorage.getItem('userData'))
    return result === null ? '' : result;
}

export function setUserData(curUser) {
    localStorage.setItem('userData', JSON.stringify(curUser));
}

export function deleteUserData() {
    localStorage.removeItem('userData');
}

export function validateMakeModel(input) {

    const validation = input.value.length;

    if (validation < 4) {
        input.className = 'form-control is-invalid';
    } else {
        input.className = 'form-control is-valid';
    }
}

export function validateYear(input) {

    const validation = input.value;
    
    if (validation < 1950 || validation > 2050) {
        input.className = 'form-control is-invalid';
    } else {
        input.className = 'form-control is-valid';
    }
}

export function validateDescription(input){

    const validation = input.value.length;
    
    if (validation < 10) {
        input.className = 'form-control is-invalid';
    } else {
        input.className = 'form-control is-valid';
    }

}

export function validatePrice(input) {
    
    const validation = input.value;
    
    if (!validation || validation < 0) {
        input.className = 'form-control is-invalid';
    } else {
        input.className = 'form-control is-valid';
    }
}

export function validateImg(input) {

    const validation = input.value;
    
    if (!validation) {
        input.className = 'form-control is-invalid';
    } else {
        input.className = 'form-control is-valid';
    }
}

