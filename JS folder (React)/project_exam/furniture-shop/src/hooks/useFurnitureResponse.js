import { useContext, useEffect, useRef, useState } from "react";
import { getAllFurniture, getBasketItems, getDetailsFurniture, getLatestFurniture, wishlist } from "../api-service/furnitureService";
import { useSetFurniture } from "./useFurnitureReducer";
import { FurnitureContext } from "../context/FurnitureContext";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorContext } from "../context/ErrorContext";


export function useLatestFurniture() {

    const [furniture, dispatch] = useSetFurniture();
    const { updateAuthError } = useContext(AuthContext);

    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getLatestFurniture(abortController);
                dispatch({ type: 'GET_FURNITURE', payload: response });

            } catch (error) {
                if (error.message === '403') return updateAuthError(true);

                console.error(error.message);
            }

        })();

        return () => {
            abortController.abort();
        }

    }, []);

    return furniture;

}

export function useAllFurniture(statePage) {

    const [furniture, dispatch] = useSetFurniture();
    const { updateAuthError } = useContext(AuthContext);
    const lengthDocuments = useRef(1);
    const navigate = useNavigate();

    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getAllFurniture(abortController, statePage, 8);
                dispatch({ type: 'GET_FURNITURE', payload: response.data });
                lengthDocuments.current = response.length;

            } catch (error) {

                if (error.message === '403') {
                    updateAuthError(true)
                } else if (error.message === 'Page do not exists.') {
                    navigate('/404', { replace: true });
                }

                console.error(error.message);
            }

        })();

        return () => {
            abortController.abort();
        }

    }, [statePage]);

    return [furniture, lengthDocuments.current];

}

export function useDetailsFurniture(furnitureId) {

    const [furniture, dispatch] = useSetFurniture();
    const { changeFurnitureState } = useContext(FurnitureContext);
    const { updateAuthError } = useContext(AuthContext);

    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getDetailsFurniture(furnitureId, abortController);
                changeFurnitureState(response);
                dispatch({ type: 'CURRENT_FURNITURE', payload: response });

            } catch (error) {
                if (error.message === '403') return updateAuthError(true);

                console.error(error.message);
            }

        })();

    }, []);

    return furniture;

}

export function useUpdateWishlist() {

    const { userId, updateAuthError } = useContext(AuthContext);
    const { handleError, clearError } = useContext(ErrorContext);

    const updateWishlist = async (furnitureId) => {

        if (!userId) {

            handleError({ errorMessage: 'Please login first.' });

            setTimeout(() => {

                clearError();

            }, 2000);

            return;
        }

        try {

            const response = await wishlist(furnitureId);

            handleError({ successMessage: response.message });

            setTimeout(() => {

                clearError();

            }, 2000);

        } catch (error) {
            if (error.message === '403') return updateAuthError(true);

            console.error(error.message);
        }

    }

    return updateWishlist

}

export function useGetBasketItems(basket) {

    const basketIds = basket.map(x => x.id);
    const location = useLocation();
    const [basketItems, setBasketItems] = useState([]);
    const { updateAuthError } = useContext(AuthContext);

    useEffect(() => {

        if (basketIds.length === 0) return;

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getBasketItems(basketIds, abortController);
                setBasketItems(response);

            } catch (error) {
                if (error.message === '403') return updateAuthError(true);

                console.error(error.message);
            }

        })();

    }, [basket.length, location]);

    return basketItems;

}