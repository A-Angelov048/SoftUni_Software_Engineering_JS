import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from 'react-router-dom';


export default function AuthGuard() {

    const user = useContext(AuthContext);

    return !!user.userId ? <Navigate to={'/'} /> : <Outlet />

}