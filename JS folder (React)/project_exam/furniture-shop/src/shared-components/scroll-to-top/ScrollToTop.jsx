import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorDialog from "../error-dialog/ErrorDialog";
import { AuthContext } from "../../context/AuthContext";

export default function ScrollToTop(props) {

    const { pathname } = useLocation();
    const { error } = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>
        {error && <ErrorDialog />}
        {props.children}
    </>

}