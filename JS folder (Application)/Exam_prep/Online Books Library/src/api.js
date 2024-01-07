import { deleteUserData, getUserData } from "./userHelper.js"

const baseUrl = 'http://localhost:3030';

async function request(method, url, data) {
    
    const options = {
        method,
        headers: {}
    }

    const user = getUserData();

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(baseUrl + url, options);

        let result;

        if (response.status !== 204) {
            result = await response.json();
        }

        if (!response.ok) {
            if (response.status === 403) {
                deleteUserData();
            }
            throw result
        }

        return result;

    } catch (error) {
        return alert(error.message);
    }
}

export async function get(url) {
    return await request('get', url);
}
export async function post(url, data) {
    return await request('post', url, data);
}
export async function put(url, data) {
    return await request('put', url, data);
}
export async function del(url) {
    return await request('delete', url);
}