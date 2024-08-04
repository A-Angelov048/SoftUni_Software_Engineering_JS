import { useState } from "react";

export default function usePersistence(initialValue) {


    const [value, setValue] = useState(() => {

        const StorageData = sessionStorage.getItem('auth');

        return StorageData ? JSON.parse(StorageData) : initialValue;

    });

    const updateState = (value) => {
        sessionStorage.setItem('auth', JSON.stringify(value));
        setValue(value);
    }

    return [value, updateState];

}