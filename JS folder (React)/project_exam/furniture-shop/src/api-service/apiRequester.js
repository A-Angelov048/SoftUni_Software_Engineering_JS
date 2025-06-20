import { AuthError, HttpError } from "../utils/customErrors";

const baseUrl = import.meta.env.VITE_API_URL;

async function request(method, url, data, abortController) {
  const options = {
    method,
    headers: {},
    credentials: "include",
  };

  if (abortController) {
    options.signal = abortController.signal;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
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
        sessionStorage.removeItem("auth");
        throw new AuthError(result.message);
      }

      throw new HttpError(response.status, result.message);
    }

    return result;
  } catch (error) {
    throw error;
  }
}

export function get(url, abortController) {
  return request("get", url, undefined, abortController);
}
export function post(url, data) {
  return request("post", url, data);
}
export function put(url, data) {
  return request("put", url, data);
}
export function del(url) {
  return request("delete", url);
}
