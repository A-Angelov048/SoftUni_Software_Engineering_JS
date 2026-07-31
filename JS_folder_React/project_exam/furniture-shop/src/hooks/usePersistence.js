import { useState } from "react";

export default function usePersistence(initialValue, nameStorage) {
  const [value, setValue] = useState(() => {
    const storageData = sessionStorage.getItem(nameStorage);

    return storageData ? JSON.parse(storageData) : initialValue;
  });

  const updateState = (value) => {
    switch (nameStorage) {
      case "auth":
        if (value.hasOwnProperty("_id")) {
          sessionStorage.setItem(nameStorage, JSON.stringify(value._id));
        } else {
          sessionStorage.removeItem("auth");
        }
        setValue(value);
        break;

      default:
        sessionStorage.setItem(nameStorage, JSON.stringify(value));
        setValue(value);
        break;
    }
  };

  return [value, updateState];
}
