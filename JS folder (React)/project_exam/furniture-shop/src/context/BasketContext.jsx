import { createContext, useContext, useEffect } from "react";
import { ErrorContext } from "./ErrorContext";
import { useSetBasket } from "../hooks/useBasketReducer";

export const BasketContext = createContext();

export function BasketProvider(props) {
  const [basket, dispatch] = useSetBasket();
  const { handleMessage } = useContext(ErrorContext);

  useEffect(() => {
    sessionStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (id, quantity, price) => {
    dispatch({ type: "ADD", payload: { id, quantity, price } });
    handleMessage("Successfully add furniture to basket.");
  };

  const removeBasketState = (id) => {
    dispatch({ type: "REMOVE", payload: id });
    handleMessage("Successfully remove item from basket.");
  };

  const quantityHandler = (id, operation) => {
    dispatch({ type: operation, payload: id });
  };

  const clearBasketState = () => {
    dispatch({ type: "CLEAR", payload: [] });
  };

  const data = {
    basketItems: basket,
    removeBasketState,
    quantityHandler,
    addToBasket,
    clearBasketState,
  };

  return (
    <BasketContext.Provider value={data}>
      {props.children}
    </BasketContext.Provider>
  );
}
