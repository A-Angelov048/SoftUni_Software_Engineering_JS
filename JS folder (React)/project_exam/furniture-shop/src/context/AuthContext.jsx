import { createContext, useState } from 'react'
import usePersistence from '../hooks/usePersistence';

export const AuthContext = createContext();

export function ContextProvider(props) {

    const [authState, setAuthState] = usePersistence({});
    const [authError, setAuthErrorState] = useState(false);

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const updateAuthError = (state) => {
        setAuthErrorState(state);
    }

    const data = {
        userId: authState._id,
        imageProfile: authState.imageProfile,
        username: authState.username,
        location: authState.location,
        error: authError,
        changeAuthState,
        updateAuthError,
    }

    return (
        <AuthContext.Provider value={data}>
            {props.children}
        </AuthContext.Provider>
    )
}