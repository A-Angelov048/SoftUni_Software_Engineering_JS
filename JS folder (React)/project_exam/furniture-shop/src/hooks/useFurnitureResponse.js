import { useContext, useEffect, useRef, useState } from "react";
import {
  createFurnitureRequester,
  editFurnitureRequester,
  getAllFurniture,
  getBasketItems,
  getDetailsFurniture,
  getLatestFurniture,
  getSearchFurniture,
  wishlist,
} from "../api-service/furnitureService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../context/ErrorContext";
import { trimValue } from "../utils/trimValue";
import { createFurnitureSchema } from "../utils/schemaForm";

export function useLatestFurniture() {
  const [furniture, setFurniture] = useState([]);

  const { updateAuthError } = useContext(AuthContext);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getLatestFurniture(abortController);
        setFurniture(response);
      } catch (error) {
        if (error.message === "403") return updateAuthError(true);

        console.error(error.message);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return furniture;
}

export function useAllFurniture(statePage) {
  const [furniture, setFurniture] = useState([]);
  const { updateAuthError } = useContext(AuthContext);
  const lengthDocuments = useRef(1);
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getAllFurniture(abortController, statePage, 8);

        setFurniture(response.data);
        lengthDocuments.current = response.length;
      } catch (error) {
        if (error.message === "403") {
          updateAuthError(true);
        } else if (error.message === "Page do not exists.") {
          navigate("/404", { replace: true });
        }

        console.error(error.message);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [statePage]);

  return [furniture, lengthDocuments.current];
}

export function useDetailsFurniture(furnitureId) {
  const [furniture, setFurniture] = useState({});
  const [reviews, setReviews] = useState([]);
  const { updateAuthError } = useContext(AuthContext);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getDetailsFurniture(
          furnitureId,
          abortController
        );
        setFurniture(response);
        setReviews(response.reviews);
      } catch (error) {
        if (error.message === "403") return updateAuthError(true);

        console.error(error.message);
      }
    })();
  }, []);

  const updateReview = (value) => {
    setReviews((oldState) => [...oldState, value]);
  };

  return [furniture, reviews, updateReview];
}

export function useUpdateWishlist() {
  const heartStatus = useRef("");
  const { userId, updateAuthError } = useContext(AuthContext);
  const { handleError, clearError } = useContext(ErrorContext);

  const handleWishlist = async (furnitureId) => {
    if (!userId) {
      handleError({ errorMessage: "Please login first." });

      setTimeout(() => {
        clearError();
      }, 2000);

      return;
    }

    try {
      const response = await wishlist(furnitureId);

      handleError({ successMessage: response.message });
      heartStatus.current = response.status;

      setTimeout(() => {
        clearError();
      }, 2000);
    } catch (error) {
      if (error.message === "403") return updateAuthError(true);

      console.error(error.message);
    }
  };

  return [heartStatus.current, handleWishlist];
}

export function useGetBasketItems(basket) {
  const basketIds = basket.map((x) => x.id);

  const [basketItems, setBasketItems] = useState([]);
  const { updateAuthError } = useContext(AuthContext);

  useEffect(() => {
    if (basketIds.length === 0) return;

    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getBasketItems(basketIds, abortController);
        setBasketItems(response);
      } catch (error) {
        if (error.message === "403") return updateAuthError(true);

        console.error(error.message);
      }
    })();
  }, [basket.length]);

  return basketItems;
}

export function useSearchFurniture() {
  const [furniture, setFurniture] = useState([]);
  const [flagState, setFlagState] = useState(false);
  const { updateAuthError } = useContext(AuthContext);

  const search = async (values) => {
    if (!values.name) return setFlagState(true);

    const trimValues = trimValue(values);

    try {
      const response = await getSearchFurniture(trimValues);

      if (response.length === 0) {
        setFlagState(true);
      } else {
        setFlagState(false);
      }

      setFurniture(response);
    } catch (error) {
      if (error.message === "403") return updateAuthError(true);

      console.error(error.message);
    }
  };

  return [furniture, flagState, search];
}

export function useEditFurniture(furnitureId) {
  const navigate = useNavigate();
  const { updateAuthError } = useContext(AuthContext);
  const { handleError } = useContext(ErrorContext);

  const editFurniture = async (values) => {
    const trimValues = trimValue(values);

    try {
      await createFurnitureSchema.validate(trimValues, { abortEarly: false });
      await editFurnitureRequester(furnitureId, trimValues);
      navigate(`/details-furniture/${furnitureId}`);
    } catch (error) {
      if (error.name === "ValidationError") {
        const newError = {};

        error.inner.forEach((err) => {
          newError[err.path] = err.message;
        });
        handleError(newError);
      } else if (error.message === "403") {
        updateAuthError(true);
        console.error(error.message);
      }
    }
  };

  return editFurniture;
}

export function useCreateFurniture() {
  const navigate = useNavigate();
  const { updateAuthError } = useContext(AuthContext);
  const { handleError } = useContext(ErrorContext);

  const createFurniture = async (values) => {
    const trimValues = trimValue(values);

    try {
      await createFurnitureSchema.validate(trimValues, { abortEarly: false });
      await createFurnitureRequester(trimValues);
      navigate("/shop");
    } catch (error) {
      if (error.name === "ValidationError") {
        const newError = {};

        error.inner.forEach((err) => {
          newError[err.path] = err.message;
        });
        handleError(newError);
      } else if (error.message === "403") {
        updateAuthError(true);
        console.error(error.message);
      }
    }
  };

  return createFurniture;
}
