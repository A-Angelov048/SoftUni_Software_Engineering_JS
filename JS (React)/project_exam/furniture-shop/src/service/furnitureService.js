import { get, post, put, del } from './apiRequester';

export const createFurnitureRequester = (data) => post('/furniture', data);

export const getLatestFurniture = () => get('/furniture/latest');

export const getAllFurniture = () => get('/furniture');

export const getSearchFurniture = (data) => post('/furniture/search', data);

export const getDetailsFurniture = (furnitureId) => get(`/furniture/${furnitureId}`);



