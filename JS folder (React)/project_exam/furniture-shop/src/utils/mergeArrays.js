export function mergeArrays(state, basketItems) {
  const quantityMap = new Map(basketItems.map((q) => [q.id, q.quantity]));

  const newArr = state.map((item) => ({
    ...item,
    quantity: quantityMap.get(item._id) || 1,
  }));

  return newArr;
}
