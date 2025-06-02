export function priceHandler(basketItems = 0) {
  const totalPrice = basketItems.reduce(
    (acc, initValue) => acc + initValue.price * initValue.quantity,
    0
  );
  console.log(totalPrice);

  return totalPrice;
}
