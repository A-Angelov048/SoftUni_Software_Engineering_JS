import { get, post, put, del } from "./apiRequester";

export const getAllOrders = (abortController, statePage, limit, params) =>
  get(
    `/orders/?page=${statePage}&limit=${limit}${params ? "&" + params : ""}`,
    abortController
  );

export const orderSend = (data) => post("/orders", data);

export const getOrder = (abortController, orderId) =>
  get(`/orders/${orderId}`, abortController);

export const sendEditOrder = (orderId, data) =>
  put(`/orders/edit/${orderId}`, data);
