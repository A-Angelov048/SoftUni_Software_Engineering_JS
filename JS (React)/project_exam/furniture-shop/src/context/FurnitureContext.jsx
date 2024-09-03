import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom';

export const FurnitureContext = createContext();

export function FurnitureContextProvider() {

    const [furnitureState, setFurnitureState] = useState({});

    const changeFurnitureState = (state) => {
        setFurnitureState(state);
    }

    const handleUserLikes = (userId) => {

        let currentListLike = [];

        if (furnitureState.listUserLikes.includes(userId)) {
            const oldArr = furnitureState.listUserLikes;
            const result = oldArr.filter(x => x !== userId);
            currentListLike = result;
        } else {
            const newArr = furnitureState.listUserLikes;
            newArr.push(userId);
            currentListLike = newArr;
        }

        const newState = ({ ...furnitureState, listUserLikes: currentListLike });

        setFurnitureState(newState);
    }

    const addReviewToState = (value) => {

        const newReviewsArr = furnitureState.reviews;
        newReviewsArr.push(value);

        setFurnitureState(oldState => ({ ...oldState, newReviewsArr }));

    }

    const data = {
        name: furnitureState.name,
        category: furnitureState.category,
        year: furnitureState.year,
        materials: furnitureState.materials,
        color: furnitureState.color,
        size: furnitureState.size,
        weight: furnitureState.weight,
        condition: furnitureState.condition,
        imageUrl: furnitureState.imageUrl,
        price: furnitureState.price,
        description: furnitureState.description,
        listUserLikes: furnitureState.listUserLikes,
        reviews: furnitureState.reviews,
        owner: furnitureState.owner,
        changeFurnitureState,
        addReviewToState,
        handleUserLikes
    }

    return (
        <FurnitureContext.Provider value={data}>
            <Outlet />
        </FurnitureContext.Provider>
    )
}