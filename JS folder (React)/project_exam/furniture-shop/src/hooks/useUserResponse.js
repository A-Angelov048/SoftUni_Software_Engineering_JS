import { useContext, useEffect, useState } from "react";
import { getDeliveryInfo, getProfile } from "../api-service/userService";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "./useForms";
import { useLocation } from "react-router-dom";

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
                if (error.message === '403') return userContext.updateAuthError(true);

                console.error(error.message);
            }

        })();

        return () => {
            abortController.abort();
        }

    }, [profileId, userContext]);

    return user;

}

export function useGetDeliveryInfo() {

    const location = useLocation();
    const userContext = useContext(AuthContext);
    const [info, setInfo] = useState({});

    useEffect(() => {

        const abortController = new AbortController();

        (async () => {

            try {

                const response = await getDeliveryInfo();
                setInfo(response);
            } catch (error) {
                if (error.message === '403') return userContext.updateAuthError(true);

                console.error(error.message);
            }

        })();

        return () => {
            abortController.abort();
        }

    }, [location]);

    return info;

}