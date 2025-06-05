export function priceHandler(basketItems = 0) {
  const totalPrice = basketItems.reduce(
    (acc, initValue) => acc + initValue.price * initValue.quantity,
    0
  );

  return totalPrice;
}
