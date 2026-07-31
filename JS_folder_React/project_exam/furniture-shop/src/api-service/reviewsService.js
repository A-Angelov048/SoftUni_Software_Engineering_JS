import { get, post, put, del } from "./apiRequester";

export const saveReview = (data, furnitureId) =>
  post(`/reviews/save-review/${furnitureId}`, data);
