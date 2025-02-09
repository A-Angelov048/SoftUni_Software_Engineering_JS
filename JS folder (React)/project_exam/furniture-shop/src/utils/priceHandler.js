import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

export function priceHandler(priceReceive) {


    const { basketItems } = useContext(BasketContext);

    const totalPrice = basketItems.reduce((acc, initValue) => acc + (initValue.price * initValue.quantity), 0);

    return (totalPrice + priceReceive).toFixed(2);

}