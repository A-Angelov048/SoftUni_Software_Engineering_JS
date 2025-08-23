import { get, post, put, del } from "./apiRequester";

export const createFurnitureRequester = (data) => post("/furniture", data);

export const getLatestFurniture = (abortController) =>
  get("/furniture/latest", abortController);

export const getAllFurniture = (abortController, statePage, limit, params) =>
  get(
    `/furniture/?page=${statePage}&limit=${limit}${params ? "&" + params : ""}`,
    abortController
  );

export const getSearchFurniture = (param, abortController) =>
  get(`/furniture/search${param ? "/?product=" + param : ""}`, abortController);

export const getDetailsFurniture = (furnitureId, abortController) =>
  get(`/furniture/${furnitureId}`, abortController);

export const removeFurniture = (furnitureId) =>
  del(`/furniture/delete/${furnitureId}`);

export const wishlist = (furnitureId) =>
  get(`/furniture/wishlist/${furnitureId}`);

export const editFurnitureRequester = (furnitureId, data) =>
  put(`/furniture/edit/${furnitureId}`, data);

export const getBasketItems = (data) => post("/furniture/basket", data);

export const userWishlist = (abortController) =>
  get("/furniture/user-wishlist", abortController);
