import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function OrderGuard() {
  const { state, pathname } = useLocation();
  const user = useContext(AuthContext);

  useEffect(() => {
    window.history.replaceState(null, "", pathname);
  }, []);

  return state && user ? <Outlet /> : <Navigate to={"/404"} replace={true} />;
}
