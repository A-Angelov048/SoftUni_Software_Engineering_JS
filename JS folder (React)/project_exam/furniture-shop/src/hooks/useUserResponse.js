import { useContext, useEffect, useState } from "react";
import { getProfile } from "../api-service/userService";
import { AuthContext } from "../context/AuthContext";

export function useGetProfile(profileId) {

    const userContext = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getProfile(profileId, abortController);
                setUser(response);

            } catch (error) {
                console.error(error.message);
            }

        })();

        return () => {
            abortController.abort();
        }

    }, [profileId, userContext]);

    return user;

}