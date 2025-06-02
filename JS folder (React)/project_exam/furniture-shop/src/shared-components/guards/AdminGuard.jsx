import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AdminGuard() {
  const { pathname } = useLocation();
  const { role } = useContext(AuthContext);

  return pathname.split("/").pop() === role.toLowerCase() ? (
    <Outlet />
  ) : (
    <Navigate to={"/404"} replace={true} />
  );
}
