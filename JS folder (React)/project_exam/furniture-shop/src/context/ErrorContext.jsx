import { createContext, useState } from 'react';

export const ErrorContext = createContext();

export function ErrorContextProvider(props) {

    const [errors, setErrors] = useState({});


    const handleError = (error) => {
        setErrors(error);
    }

    const clearError = () => {
        setErrors({});
    }

    const data = {
        errors,
        handleError,
        clearError
    }

    return (
        <ErrorContext.Provider value={data}>
            {props.children}
        </ErrorContext.Provider>
    )
}

