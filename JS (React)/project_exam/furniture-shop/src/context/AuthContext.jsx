import { createContext, useState } from 'react'
import usePersistence from '../hooks/usePersistence';

export const AuthContext = createContext();

export function ContextProvider(props) {

    const [authState, setAuthState] = usePersistence({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const data = {
        userId: authState._id,
        imageProfile: authState.imageProfile,
        username: authState.username,
        location: authState.location,
        createdAt: authState.createdAt,
        lastLogin: authState.lastLogin,
        changeAuthState
    }


    return (
        <AuthContext.Provider value={data}>
            {props.children}
        </AuthContext.Provider>
    )
}