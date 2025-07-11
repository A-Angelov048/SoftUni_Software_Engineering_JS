import { useRef, useState, useEffect } from "react";
import { getAllOrders } from "../api-service/ordersService";
import { useErrorHandler } from "./useErrorHandler";

export function useAllOrders(statePage, filters) {
  const errorHandler = useErrorHandler();
  const [orders, setOrders] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const lengthDocuments = useRef(1);

  useEffect(() => {
    const abortController = new AbortController();
    const params = new URLSearchParams(
      Object.entries(filters).filter(([_, value]) => value)
    ).toString();

    (async () => {
      try {
        setNotFound(false);
        const response = await getAllOrders(
          abortController,
          statePage,
          6,
          params
        );

        if (response.data.length === 0) {
          setTimeout(() => {
            setNotFound(true);
          }, 2000);
        }

        lengthDocuments.current = response.length;
        setOrders(response.data);
      } catch (error) {
        errorHandler(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [statePage, filters]);

  return [orders, lengthDocuments.current, notFound];
}
