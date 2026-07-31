import { useReducer } from "react";

function basketReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const exists = state.find((item) => item.id === action.payload.id);

      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }

      return [...state, action.payload];

    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? item.quantity + 1 > 10
            ? item
            : { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? item.quantity - 1 < 1
            ? item
            : { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR":
      return action.payload;

    default:
      return state;
  }
}

const getInitialStorage = () => {
  const stored = sessionStorage.getItem("basket");
  return stored ? JSON.parse(stored) : [];
};

export function useSetBasket() {
  const [basket, dispatch] = useReducer(basketReducer, [], getInitialStorage);

  return [basket, dispatch];
}
