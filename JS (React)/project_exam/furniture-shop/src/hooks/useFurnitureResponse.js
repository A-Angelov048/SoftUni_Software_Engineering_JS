import { useContext, useEffect } from "react";
import { getAllFurniture, getDetailsFurniture, getLatestFurniture } from "../service/furnitureService";
import { useSetFurniture } from "./useFurnitureReducer";
import { FurnitureContext } from "../context/FurnitureContext";


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
    const { changeFurnitureState } = useContext(FurnitureContext);
    

    useEffect(() => {

        (async () => {

            try {

                const response = await getDetailsFurniture(params);
                changeFurnitureState(response);
                dispatch({ type: 'CURRENT_FURNITURE', payload: response });

            } catch (error) {
                console.error(error.message);
            }

        })();

    }, []);

    return furniture;

}
