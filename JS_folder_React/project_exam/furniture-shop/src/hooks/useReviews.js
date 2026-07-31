import { useRef, useState } from "react";
import { useErrorHandler } from "./useErrorHandler";
import { saveReview } from "../api-service/reviewsService";
import { trimValue } from "../utils/trimValue";
import { reviewSchema } from "../utils/schemaForm";
import { useNavigate } from "react-router-dom";

export function useReviews(initialValue) {
  const reviewsArr = useRef([]);

  const [reviewsState, setReviewsState] = useState(initialValue);
  const [reviewsFlag, setReviewsFlag] = useState(false);

  if (!reviewsFlag) {
    reviewsArr.current = reviewsState.toReversed().slice(0, 2);
  } else {
    reviewsArr.current = reviewsState.toReversed();
  }

  const setReviewState = (value) => {
    setReviewsState((oldState) => [...oldState, value]);
  };

  const updateReviewsFlag = (value) => {
    setReviewsFlag(value);
  };

  return [
    reviewsArr.current,
    reviewsState.length,
    reviewsFlag,
    updateReviewsFlag,
    setReviewState,
  ];
}

export function useCreateReview(furnitureId) {
  const navigate = useNavigate();
  const errorHandler = useErrorHandler();

  const subReview = async (values) => {
    const trimValues = trimValue(values);

    try {
      await reviewSchema.validate(trimValues, { abortEarly: false });

      const response = await saveReview(trimValues, furnitureId);
      navigate(`/details-furniture/${furnitureId}`, { state: response });
    } catch (error) {
      errorHandler(error);
    }
  };

  return subReview;
}
