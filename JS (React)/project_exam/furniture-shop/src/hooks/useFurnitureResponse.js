import { useContext, useEffect } from "react";
import { getAllFurniture, getDetailsFurniture, getLatestFurniture } from "../service/furnitureService";
import { useSetFurniture } from "./useFurnitureReducer";
import { FurnitureContext } from "../context/FurnitureContext";


export function useLatestFurniture() {

    const [furniture, dispatch] = useSetFurniture();

    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getLatestFurniture(abortController);
                dispatch({ type: 'GET_FURNITURE', payload: response });

            } catch (error) {
                console.error(error.message);
            }

        })();

        return () => {
            abortController.abort();
        }

    }, []);

    return furniture;

}

export function useAllFurniture() {

    const [furniture, dispatch] = useSetFurniture();

    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getAllFurniture(abortController);
                dispatch({ type: 'GET_FURNITURE', payload: response });

            } catch (error) {
                console.error(error.message);
            }

        })();

        return () => {
            abortController.abort();
        }

    }, []);

    return furniture;

}

export function useDetailsFurniture(furnitureId) {

    const [furniture, dispatch] = useSetFurniture();
    const { changeFurnitureState } = useContext(FurnitureContext);


    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getDetailsFurniture(furnitureId, abortController);
                changeFurnitureState(response);
                dispatch({ type: 'CURRENT_FURNITURE', payload: response });

            } catch (error) {
                console.error(error.message);
            }

        })();

    }, []);

    return furniture;

}
