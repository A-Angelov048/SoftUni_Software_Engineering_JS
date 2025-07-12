import { useRef, useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAllOrders,
  getOrder,
  sendEditOrder,
} from "../api-service/ordersService";
import { useErrorHandler } from "./useErrorHandler";
import { ErrorContext } from "../context/ErrorContext";
import { AuthContext } from "../context/AuthContext";

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

export function useGetOrder(orderId) {
  const location = useLocation();
  const errorHandler = useErrorHandler();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getOrder(abortController, orderId);
        setOrder(response);
      } catch (error) {
        errorHandler(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [location]);

  return order;
}

export function useEditOrder(orderId) {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const { handleMessage } = useContext(ErrorContext);
  const { userId } = useContext(AuthContext);

  const editOrder = async (data) => {
    if (!userId) {
      handleMessage("Please login first.", false);
      return;
    }

    try {
      await sendEditOrder(orderId, data);
      navigate(`/details-order/${orderId}`);
    } catch (error) {
      errorHandler(error);
    }
  };

  return editOrder;
}
