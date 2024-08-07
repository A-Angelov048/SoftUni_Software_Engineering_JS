import { useEffect, useState } from "react";
import { getProfile } from "../service/userService";

export function useGetProfile(params) {

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

    }, [params]);

    return user;

}