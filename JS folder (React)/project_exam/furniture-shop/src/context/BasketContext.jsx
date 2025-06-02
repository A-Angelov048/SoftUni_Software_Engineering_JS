import { createContext, useContext, useEffect } from "react";
import { ErrorContext } from "./ErrorContext";
import { useSetBasket } from "../hooks/useBasketReducer";

export const BasketContext = createContext();

export function BasketProvider(props) {
  const [basket, dispatch] = useSetBasket();
  const { handleError, clearError } = useContext(ErrorContext);

  useEffect(() => {
    sessionStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (id, quantity, price) => {
    dispatch({ type: "ADD", payload: { id, quantity, price } });

    handleError({ successMessage: "Successfully add furniture to basket." });

    setTimeout(() => {
      clearError();
    }, 2000);
  };

  const removeBasketState = (id) => {
    dispatch({ type: "REMOVE", payload: id });
    handleError({ successMessage: "Successfully remove item from basket." });

    setTimeout(() => {
      clearError();
    }, 2000);
  };

  const quantityHandler = (id, operation) => {
    switch (operation) {
      case "increment":
        dispatch({ type: "INCREMENT_QUANTITY", payload: id });
        break;

      case "decrement":
        dispatch({ type: "DECREMENT_QUANTITY", payload: id });
        break;
    }
  };

  const data = {
    basketItems: basket,
    removeBasketState,
    quantityHandler,
    addToBasket,
  };

  return (
    <BasketContext.Provider value={data}>
      {props.children}
    </BasketContext.Provider>
  );
}
