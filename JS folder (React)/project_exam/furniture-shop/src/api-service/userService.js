import { get, post, put, del } from "./apiRequester";

export const register = (data) => post("/users/register", data);

export const login = (data) => post("/users/login", data);

export const logout = () => get("/users/logout");

export const getProfile = (userId, abortController) =>
  get(`/users/profile/${userId}`, abortController);

export const editProfile = (data) => post("/users/edit-profile", data);

export const createDeliveryInfo = (data) => post("/users/delivery-info", data);

export const getDeliveryInfo = (data) => get("/users/delivery-info", data);
