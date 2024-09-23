import { useContext } from "react";
import { FurnitureContext } from "../context/FurnitureContext";


export function averageNumReviews() {

    const furnitureContext = useContext(FurnitureContext);

    const averageNumber = furnitureContext.reviews?.reduce((accumulator, current) => accumulator + Number(current?.rating), 0);

    return Math.round(averageNumber / furnitureContext.reviews?.length);

}