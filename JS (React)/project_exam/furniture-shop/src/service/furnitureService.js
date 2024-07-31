import { get, post, put, del } from './apiRequester';

export const createFurnitureRequester = (data) => post('/furniture', data);

export const getLatestFurniture = () => get('/furniture/latest');

export const getAllFurniture = () => get('/furniture');


