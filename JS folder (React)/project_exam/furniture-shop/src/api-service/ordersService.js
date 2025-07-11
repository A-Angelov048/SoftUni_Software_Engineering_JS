import { get, post, put, del } from "./apiRequester";

export const getAllOrders = (abortController, statePage, limit, params) =>
  get(`/orders/?&page=${statePage}&limit=${limit}&${params}`, abortController);

export const orderSend = (data) => post("/orders", data);
