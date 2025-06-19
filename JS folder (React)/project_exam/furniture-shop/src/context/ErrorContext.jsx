import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ErrorContext = createContext();

export function ErrorContextProvider(props) {
  const location = useLocation();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: "", status: true, key: 0 });

  useEffect(() => {
    if (location.pathname !== "/checkout") {
      clearMessage();
    }
  }, [location]);

  const handleError = (error) => {
    setErrors(error);
  };

  const handleMessage = (value, status = true) => {
    setMessage({ text: value, status, key: Date.now() });
  };

  const clearError = () => {
    setErrors({});
  };

  const clearMessage = () => {
    setMessage({ text: "", status: true, key: 0 });
  };

  const data = {
    errors,
    message,
    handleError,
    handleMessage,
    clearError,
    clearMessage,
  };

  return (
    <ErrorContext.Provider value={data}>{props.children}</ErrorContext.Provider>
  );
}
