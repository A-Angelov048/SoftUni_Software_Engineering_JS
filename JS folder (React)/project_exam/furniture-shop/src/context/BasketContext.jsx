import { createContext, useContext } from "react";
import usePersistence from "../hooks/usePersistence";
import { ErrorContext } from "./ErrorContext";

export const BasketContext = createContext();

export function BasketProvider(props) {

    const [basketState, setBasketState] = usePersistence([], 'basket');
    const { handleError, clearError } = useContext(ErrorContext);

    const changeBasketState = (state) => {

        const newBasket = [...basketState];

        const findCurrent = newBasket.find(x => x.id === state.id);

        if (findCurrent) {
            findCurrent.quantity = state.quantity;
        } else {
            newBasket.push(state);
        }

        setBasketState(newBasket);
    };

    const removeBasketState = (id) => {

        const newBasket = [...basketState];

        setBasketState(newBasket.filter(item => item.id !== id));

        handleError({ successMessage: 'Successfully remove item from basket.' });

        setTimeout(() => {

            clearError();

        }, 2000);
    };

    const quantityHandler = (idFurniture, operation) => {

        const findCurrent = basketState.find(x => x.id === idFurniture);

        switch (operation) {

            case 'increment': if (findCurrent.quantity >= 10) { return } findCurrent.quantity++; break;

            case 'decrement': if (findCurrent.quantity <= 1) { return } findCurrent.quantity--; break;

        }

        changeBasketState({ id: findCurrent.id, quantity: findCurrent.quantity });

    }

    const addToBasket = (furnitureId, quantity, price) => {
        
        changeBasketState({ id: furnitureId, quantity: quantity, price: price });

        handleError({ successMessage: 'Successfully add furniture to basket.' });

        setTimeout(() => {

            clearError();

        }, 2000);
    };


    const data = {
        basketItems: basketState,
        changeBasketState,
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