import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

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