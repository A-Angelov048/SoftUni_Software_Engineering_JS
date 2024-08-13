import { useContext, useEffect, useState } from "react";
import { getProfile } from "../service/userService";
import { AuthContext } from "../context/AuthContext";

export function useGetProfile(params) {

    const userContext = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getProfile(params, abortController);
                setUser(response);

            } catch (error) {
                console.error(error.message);
            }

        })();

        return () => {
            abortController.abort();
        }

    }, [params, userContext]);

    return user;

}