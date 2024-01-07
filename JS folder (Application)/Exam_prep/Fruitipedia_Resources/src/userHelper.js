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