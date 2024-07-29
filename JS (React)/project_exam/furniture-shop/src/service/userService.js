import { get, post, put, del } from './apiRequester';

export const register = (data) => post('/users/register', data);

export const login = (data) => post('/users/login', data);

export const logout = (data) => get('/users/logout', data);