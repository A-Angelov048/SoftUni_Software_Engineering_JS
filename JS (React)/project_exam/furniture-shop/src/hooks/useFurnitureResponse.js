import { useEffect } from "react";
import { getAllFurniture, getLatestFurniture } from "../service/furnitureService";
import { useSetFurniture } from "./useFurnitureReducer";


export function latestFurniture() {

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

export function allFurniture() {

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