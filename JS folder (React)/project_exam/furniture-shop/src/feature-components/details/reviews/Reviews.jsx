import "./Reviews.css";

import { forwardRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForms";
import { useReviews } from "../../../hooks/useReviews";

import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";
import { saveReview } from "../../../api-service/reviewsService";
import { convertDateToString } from "../../../utils/convertDate";
import { reviewSchema } from "../../../utils/schemaForm";
import { checkReview } from "../../../utils/checkReview";
import { trimValue } from "../../../utils/trimValue";
import ErrorMessage from "../../../shared-components/error-message/ErrorMessage";
import { useErrorHandler } from "../../../hooks/useErrorHandler";

const initialValues = {
  rating: "",
  review: "",
};

export default forwardRef(function Reviews(props, ref) {
  const { furnitureId } = useParams();
  const errorHandler = useErrorHandler();
  const user = useContext(AuthContext);
  const { errors } = useContext(ErrorContext);

  const [
    reviewsArr,
    reviewsStateLength,
    reviewsFlag,
    updateReviewsFlag,
    setReviewState,
  ] = useReviews(props.reviewsArr);

  const reviewFlag = checkReview(reviewsArr, user.userId);

  const subReview = async (values) => {
    const trimValues = trimValue(values);

    try {
      await reviewSchema.validate(trimValues, { abortEarly: false });

      const response = await saveReview(trimValues, furnitureId);

      setReviewState(response);
      props.setNewReview(response);
    } catch (error) {
      errorHandler(error);
    }
  };

  const { values, changeHandler, submitCurForm } = useForm(
    initialValues,
    subReview
  );

  return (
    <section ref={ref} className="recent-reviews">
      <div className="container">
        <div className="heading-container">
          <h2>Recent reviews</h2>
        </div>

        <div className="layout-padding2">
          <div className="wrapper-reviews">
            {reviewFlag && (
              <div className="write-review">
                <form onSubmit={submitCurForm}>
                  <div className="header bottom">
                    <h3>How would you rate this furniture?</h3>
                  </div>

                  {errors.hasOwnProperty("rating") && (
                    <ErrorMessage newMessage={{ read: errors.rating }} />
                  )}

                  <div className="stars-review">
                    <div>
                      <button
                        onClick={(e) => changeHandler(e)}
                        type="button"
                        className={
                          values.rating === "5" ? "btn-star active" : "btn-star"
                        }
                      >
                        <i className="bx bxs-star" data-rating="5"></i>
                      </button>
                      <button
                        onClick={(e) => changeHandler(e)}
                        type="button"
                        className={
                          values.rating === "4" ? "btn-star active" : "btn-star"
                        }
                      >
                        <i className="bx bxs-star" data-rating="4"></i>
                      </button>
                      <button
                        onClick={(e) => changeHandler(e)}
                        type="button"
                        className={
                          values.rating === "3" ? "btn-star active" : "btn-star"
                        }
                      >
                        <i className="bx bxs-star" data-rating="3"></i>
                      </button>
                      <button
                        onClick={(e) => changeHandler(e)}
                        type="button"
                        className={
                          values.rating === "2" ? "btn-star active" : "btn-star"
                        }
                      >
                        <i className="bx bxs-star" data-rating="2"></i>
                      </button>
                      <button
                        onClick={(e) => changeHandler(e)}
                        type="button"
                        className={
                          values.rating === "1" ? "btn-star active" : "btn-star"
                        }
                      >
                        <i className="bx bxs-star" data-rating="1"></i>
                      </button>
                    </div>

                    <input
                      type="hidden"
                      name="rating"
                      defaultValue={values.rating}
                    />
                  </div>

                  <div className="center top bottom">
                    <div className="profile">
                      <img
                        alt=""
                        src={
                          user.imageProfile
                            ? user.imageProfile
                            : "/images/profile-circle-svgrepo-com.svg"
                        }
                      />
                    </div>

                    <h3>{user.username}</h3>
                  </div>

                  {errors.hasOwnProperty("review") && (
                    <ErrorMessage newMessage={{ read: errors.review }} />
                  )}

                  <textarea
                    name="review"
                    rows="4"
                    placeholder="Write a review about the furniture."
                    value={values.review}
                    onChange={changeHandler}
                  ></textarea>

                  <button className="btn" type="submit">
                    Submit review
                  </button>
                </form>
              </div>
            )}

            {reviewsArr?.map((review) => (
              <div key={review._id} className="content-review">
                <div className="center">
                  <div className="profile">
                    <img
                      alt=""
                      src={
                        review.ownerReview.imageProfile
                          ? review.ownerReview.imageProfile
                          : "/images/profile-circle-svgrepo-com.svg"
                      }
                    />
                  </div>

                  <header>
                    <h3>{review.ownerReview.username}</h3>
                    <p>{convertDateToString(review.createdAt)}</p>
                  </header>
                </div>

                <div className="stars-review top">
                  <i
                    className={
                      review.rating === "5"
                        ? "bx bxs-star active"
                        : "bx bxs-star"
                    }
                  ></i>
                  <i
                    className={
                      review.rating === "4"
                        ? "bx bxs-star active"
                        : "bx bxs-star"
                    }
                  ></i>
                  <i
                    className={
                      review.rating === "3"
                        ? "bx bxs-star active"
                        : "bx bxs-star"
                    }
                  ></i>
                  <i
                    className={
                      review.rating === "2"
                        ? "bx bxs-star active"
                        : "bx bxs-star"
                    }
                  ></i>
                  <i
                    className={
                      review.rating === "1"
                        ? "bx bxs-star active"
                        : "bx bxs-star"
                    }
                  ></i>
                </div>
                <div className="top">
                  <p>{review.review}</p>
                </div>
              </div>
            ))}

            {reviewsStateLength > 2 && !reviewsFlag && (
              <button
                onClick={() => {
                  updateReviewsFlag(true);
                }}
                className="btn"
                name="show-reviews"
                type="button"
              >
                Show all reviews
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
