import "./Reviews.css";

import { forwardRef, useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForms";
import { useCreateReview, useReviews } from "../../../hooks/useReviews";

import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";
import { convertDateToString } from "../../../utils/convertDate";
import { checkReview } from "../../../utils/checkReview";
import ErrorMessage from "../../../shared-components/error-message/ErrorMessage";

const initialValues = {
  rating: "",
  review: "",
};

export default forwardRef(function Reviews(props, ref) {
  const { furnitureId } = useParams();
  const location = useLocation();
  const { userId, username, imageProfile, role } = useContext(AuthContext);
  const { errors } = useContext(ErrorContext);

  useEffect(() => {
    if (location.state !== null) {
      setReviewState(location.state);
    }
  }, [location.state]);

  const [
    reviewsArr,
    reviewsStateLength,
    reviewsFlag,
    updateReviewsFlag,
    setReviewState,
  ] = useReviews(props.reviewsArr);
  const subReview = useCreateReview(furnitureId);

  const reviewFlag = checkReview(reviewsArr, userId, role);

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
                    <i
                      data-rating="5"
                      onClick={(e) => changeHandler(e)}
                      className={
                        values.rating === "5"
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                    <i
                      data-rating="4"
                      onClick={(e) => changeHandler(e)}
                      className={
                        values.rating === "4"
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                    <i
                      data-rating="3"
                      onClick={(e) => changeHandler(e)}
                      className={
                        values.rating === "3"
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                    <i
                      data-rating="2"
                      onClick={(e) => changeHandler(e)}
                      className={
                        values.rating === "2"
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                    <i
                      data-rating="1"
                      onClick={(e) => changeHandler(e)}
                      className={
                        values.rating === "1"
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                  </div>

                  <input
                    type="hidden"
                    name="rating"
                    defaultValue={values.rating}
                  />

                  <div className="center top bottom">
                    <div className="profile">
                      <img
                        alt=""
                        src={
                          imageProfile
                            ? imageProfile
                            : "/images/profile-circle-svgrepo-com.svg"
                        }
                      />
                    </div>

                    <h3>{username}</h3>
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
