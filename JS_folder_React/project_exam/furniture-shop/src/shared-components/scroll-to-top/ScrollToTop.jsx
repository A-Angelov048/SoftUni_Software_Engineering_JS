import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorDialog from "../error-dialog/ErrorDialog";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";

export default function ScrollToTop(props) {
  const { pathname } = useLocation();
  const { error } = useContext(AuthContext);
  const { clearError } = useContext(ErrorContext);

  useEffect(() => {
    clearError();
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {error && <ErrorDialog />}
      {props.children}
    </>
  );
}
