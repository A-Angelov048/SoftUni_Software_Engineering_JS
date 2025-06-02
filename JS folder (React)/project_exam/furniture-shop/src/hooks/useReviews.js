import { useRef, useState } from "react";

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
