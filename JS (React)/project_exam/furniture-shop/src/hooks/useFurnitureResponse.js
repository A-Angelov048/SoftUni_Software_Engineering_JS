import { useEffect } from "react";
import { getAllFurniture, getDetailsFurniture, getLatestFurniture } from "../service/furnitureService";
import { useSetFurniture } from "./useFurnitureReducer";


export function useLatestFurniture() {

    const [furniture, dispatch] = useSetFurniture();

    useEffect(() => {

        (async () => {

            try {

                const response = await getLatestFurniture();
                dispatch({ type: 'GET_FURNITURE', payload: response });

            } catch (error) {
                console.error(error.message);
            }

        })();

    }, []);

    return furniture;

}

export function useAllFurniture() {

    const [furniture, dispatch] = useSetFurniture();

    useEffect(() => {

        (async () => {

            try {

                const response = await getAllFurniture();
                dispatch({ type: 'GET_FURNITURE', payload: response });

            } catch (error) {
                console.error(error.message);
            }

        })();

    }, []);

    return furniture;

}

export function useDetailsFurniture(params) {

    const [furniture, dispatch] = useSetFurniture();

    useEffect(() => {

        (async () => {

            try {

                const response = await getDetailsFurniture(params);
                dispatch({ type: 'CURRENT_FURNITURE', payload: response });

            } catch (error) {
                console.error(error.message);
            }

        })();

    }, []);

    return furniture;

}
