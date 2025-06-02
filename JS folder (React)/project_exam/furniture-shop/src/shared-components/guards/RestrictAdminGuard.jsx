import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function RestrictAdminGuard() {
  const { role } = useContext(AuthContext);

  return role !== "Admin" ? (
    <Outlet />
  ) : (
    <Navigate to={"/404"} replace={true} />
  );
}
