import { useCallback, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ErrorContext } from "../context/ErrorContext";
import { useNavigate } from "react-router-dom";

export function useErrorHandler() {
  const { updateAuthError } = useContext(AuthContext);
  const { handleError, handleMessage, clearError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const errorHandler = useCallback(
    (typeError) => {
      switch (typeError.name) {
        case "HttpError":
          if (typeError.status === 404) {
            navigate("/404", { replace: true });
            break;
          }

          handleMessage(typeError.message, false);
          clearError();
          break;

        case "AuthError":
          updateAuthError(true);
          console.error(typeError.message);
          break;

        case "ValidationError":
          const newError = {};
          typeError.inner.forEach((err) => {
            newError[err.path] = err.message;
          });
          handleError(newError);
          break;

        default:
          console.error(typeError.message);
          break;
      }
    },
    [updateAuthError, handleError, handleMessage, clearError]
  );

  return errorHandler;
}
