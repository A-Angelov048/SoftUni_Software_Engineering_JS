import { get, post, put, del } from "./apiRequester";

export const register = (data) => post("/users/register", data);

export const login = (data) => post("/users/login", data);

export const logout = () => get("/users/logout");

export const getProfile = (abortController) =>
  get("/users/profile", abortController);

export const editProfile = (data) => post("/users/edit-profile", data);

export const createDeliveryInfo = (data) => post("/users/delivery-info", data);

export const getDeliveryInfo = (data) => get("/users/delivery-info", data);
