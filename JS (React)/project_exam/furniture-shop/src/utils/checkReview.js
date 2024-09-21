import { useContext } from "react";
import { FurnitureContext } from "../context/FurnitureContext";
import { AuthContext } from "../context/AuthContext";

export function checkReview() {

    const user = useContext(AuthContext);
    const furnitureContext = useContext(FurnitureContext);

    let flag = false;

    if (furnitureContext.owner?._id !== user.userId && user.userId !== undefined) {
        flag = true;
    }

    furnitureContext.reviews?.forEach(x => {
        if (x.ownerReview._id === user.userId) {
            flag = false;
        }
    })

    return flag;
}