
const baseUrl = 'http://localhost:3000';

async function request(method, url, data, abortController) {

    const options = {
        method,
        headers: {},
        credentials: 'include',
    }

    if (abortController) {
        options.signal = abortController.signal;
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
                // delete user from localStorage
            }
            throw result
        }

        return result;

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function get(url, abortController) {
    return await request('get', url, undefined, abortController);
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