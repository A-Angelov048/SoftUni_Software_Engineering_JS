import { createContext } from "react";
import usePersistence from "../hooks/usePersistence";

export const BasketContext = createContext();

export function BasketProvider(props) {

    const [basketState, setBasketState] = usePersistence([], 'basket');

    const changeBasketState = (state) => {
        setBasketState(oldState => [...oldState, state]);
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