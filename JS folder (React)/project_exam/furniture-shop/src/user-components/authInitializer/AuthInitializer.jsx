import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { refetchUser } from "../../api-service/userService";
import { useErrorHandler } from "../../hooks/useErrorHandler";

export default function AuthInitializer(props) {
  const { changeAuthState } = useContext(AuthContext);
  const errorHandler = useErrorHandler();

  useEffect(() => {
    const abortController = new AbortController();
    const storage = sessionStorage.getItem("auth");

    if (!storage) return;

    (async () => {
      try {
        const response = await refetchUser(abortController);
        changeAuthState(response);
      } catch (error) {
        errorHandler(error);
      }
    })();

    return () => abortController.abort();
  }, []);

  return <>{props.children}</>;
}
