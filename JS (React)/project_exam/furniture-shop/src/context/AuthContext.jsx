import { createContext, useState } from 'react'

export const AuthContext = createContext();

export function ContextProvider(props) {

    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const data = {
        userId: authState._id,
        username: authState.username,
        email: authState.email,
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