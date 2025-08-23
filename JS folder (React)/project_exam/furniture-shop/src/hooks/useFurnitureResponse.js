import { useContext, useEffect, useRef, useState } from "react";
import {
  createFurnitureRequester,
  editFurnitureRequester,
  getAllFurniture,
  getBasketItems,
  getDetailsFurniture,
  getLatestFurniture,
  getSearchFurniture,
  userWishlist,
  wishlist,
} from "../api-service/furnitureService";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorContext } from "../context/ErrorContext";
import { trimValue } from "../utils/trimValue";
import { createFurnitureSchema } from "../utils/schemaForm";
import { useErrorHandler } from "./useErrorHandler";

export function useLatestFurniture() {
  const errorHandler = useErrorHandler();
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getLatestFurniture(abortController);
        setFurniture(response);
      } catch (error) {
        errorHandler(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return furniture;
}

export function useAllFurniture(statePage, filters) {
  const errorHandler = useErrorHandler();
  const [furniture, setFurniture] = useState([]);
  const lengthDocuments = useRef(1);

  useEffect(() => {
    const abortController = new AbortController();
    const params = new URLSearchParams(
      Object.entries(filters).filter(([_, value]) => value)
    ).toString();

    (async () => {
      try {
        const response = await getAllFurniture(
          abortController,
          statePage,
          8,
          params
        );

        setFurniture(response.data);
        lengthDocuments.current = response.length;
      } catch (error) {
        errorHandler(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [statePage, filters.search]);

  return [furniture, lengthDocuments.current];
}

export function useDetailsFurniture(furnitureId) {
  const location = useLocation();
  const errorHandler = useErrorHandler();
  const [furniture, setFurniture] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getDetailsFurniture(
          furnitureId,
          abortController
        );
        setFurniture(response);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, [location]);

  return furniture;
}

export function useUpdateWishlist() {
  const errorHandler = useErrorHandler();
  const heartStatus = useRef("");
  const { userId } = useContext(AuthContext);
  const { handleMessage } = useContext(ErrorContext);

  const handleWishlist = async (furnitureId) => {
    if (!userId) {
      handleMessage("Please login first.", false);
      return;
    }

    try {
      const response = await wishlist(furnitureId);

      handleMessage(response.message);
      heartStatus.current = response.status;
    } catch (error) {
      errorHandler(error);
    }
  };

  return [heartStatus.current, handleWishlist];
}

export function useGetBasketItems(basket) {
  const errorHandler = useErrorHandler();
  const basketIds = basket.map((x) => x.id);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    if (basketIds.length === 0) return;

    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getBasketItems(basketIds, abortController);
        setBasketItems(response);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, [basket.length]);

  return basketItems;
}

export function useSearchFurniture(search) {
  const errorHandler = useErrorHandler();
  const [furniture, setFurniture] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    if (search.furnitureName === "") {
      return setFurniture([]);
    }

    (async () => {
      try {
        const response = await getSearchFurniture(
          search.furnitureName,
          abortController
        );
        setFlag(true);
        setFurniture(response);
      } catch (error) {
        errorHandler(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [search]);

  return [furniture, flag];
}

export function useEditFurniture(furnitureId) {
  const navigate = useNavigate();
  const errorHandler = useErrorHandler();

  const editFurniture = async (values) => {
    const trimValues = trimValue(values);

    try {
      await createFurnitureSchema.validate(trimValues, { abortEarly: false });
      await editFurnitureRequester(furnitureId, trimValues);
      navigate(`/details-furniture/${furnitureId}`);
    } catch (error) {
      errorHandler(error);
    }
  };

  return editFurniture;
}

export function useCreateFurniture() {
  const navigate = useNavigate();
  const errorHandler = useErrorHandler();

  const createFurniture = async (values) => {
    const trimValues = trimValue(values);

    try {
      await createFurnitureSchema.validate(trimValues, { abortEarly: false });
      await createFurnitureRequester(trimValues);
      navigate("/shop");
    } catch (error) {
      errorHandler(error);
    }
  };

  return createFurniture;
}

export function useGetWishlist() {
  const { role } = useContext(AuthContext);
  const errorHandler = useErrorHandler();
  const [list, setList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    if (role === "Admin") return;

    (async () => {
      try {
        const response = await userWishlist(abortController);
        setList(response.wishlist);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, []);

  return list;
}
