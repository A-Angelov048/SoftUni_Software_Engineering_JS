import { useState } from "react";

export default function usePersistence(initialValue, nameStorage) {


    const [value, setValue] = useState(() => {

        const StorageData = sessionStorage.getItem(nameStorage);

        return StorageData ? JSON.parse(StorageData) : initialValue;

    });

    const updateState = (value) => {
        sessionStorage.setItem(nameStorage, JSON.stringify(value));
        setValue(value);
    }

    return [value, updateState];

}