import { useContext, useEffect, useRef } from "react";
import { getAllFurniture, getDetailsFurniture, getLatestFurniture } from "../api-service/furnitureService";
import { useSetFurniture } from "./useFurnitureReducer";
import { FurnitureContext } from "../context/FurnitureContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


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
                } else {
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
