import { createContext } from "react";
import usePersistence from "../hooks/usePersistence";

export const BasketContext = createContext();

export function BasketProvider(props) {

    const [basketState, setBasketState] = usePersistence([], 'basket');

    const changeBasketState = (state) => {

        const newBasket = [...basketState];

        const findCurrent = newBasket.find(x => x.id === state.id)

        if (findCurrent) {
            findCurrent.quantity = state.quantity;
        } else {
            newBasket.push(state);
        }

        setBasketState(newBasket);
    };

    const removeBasketState = (id) => {
        setBasketState(oldState => oldState.filter(item => item !== id));
    };

    const data = {
        basketItems: basketState,
        changeBasketState,
        removeBasketState,
    };


    return (
        <BasketContext.Provider value={data}>
            {props.children}
        </BasketContext.Provider>
    );

}