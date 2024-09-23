import { useReducer } from "react";

function furnitureReducer(state, action) {

    switch (action.type) {

        case 'GET_FURNITURE': return action.payload;

        case 'CURRENT_FURNITURE': return action.payload;

        default:
            return state;
    }

}

export function useSetFurniture() {

    const [furniture, dispatch] = useReducer(furnitureReducer, []);
    

    return [furniture, dispatch];

}




