import { useContext, useState } from "react";
import { FurnitureContext } from "../context/FurnitureContext";

export default function useReviews() {

    let reviewsArr = [];

    const [reviewsState, setReviewsState] = useState(false);
    const furnitureContext = useContext(FurnitureContext);

    if (!reviewsState) {
        reviewsArr = furnitureContext.reviews?.toReversed().slice(0, 2);
    } else {
        reviewsArr = furnitureContext.reviews?.toReversed();
    }

    const updateReviewsState = (value) => {
        setReviewsState(value);
    }

    return [reviewsArr, reviewsState, updateReviewsState];

}