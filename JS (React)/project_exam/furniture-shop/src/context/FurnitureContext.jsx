import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom';

export const FurnitureContext = createContext();

export function FurnitureContextProvider(props) {

    const [furnitureState, setFurnitureState] = useState({});

    const changeFurnitureState = (state) => {
        setFurnitureState(state);
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
        changeFurnitureState
    }

    return (
        <FurnitureContext.Provider value={data}>
            <Outlet />
        </FurnitureContext.Provider>
    )
}