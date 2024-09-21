import './Reviews.css';

import { forwardRef, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../../hooks/useForms';
import useReviews from '../../../hooks/useReviews';

import { AuthContext } from '../../../context/AuthContext';
import { FurnitureContext } from '../../../context/FurnitureContext';
import { saveReview } from '../../../api-service/reviewsService';
import { convertDateToString } from '../../../utils/convertDate';
import { reviewSchema } from '../../../utils/schemaForm';
import { checkReview } from '../../../utils/checkReview';
import { trimValue } from '../../../utils/trimValue';

const initialValues = {
    rating: '',
    review: ''
};

export default forwardRef(function Reviews(props, ref) {

    const user = useContext(AuthContext);
    const furnitureContext = useContext(FurnitureContext);
    const { furnitureId } = useParams();

    const [reviewsArr, reviewsState, updateReviewsState] = useReviews();
    const [errors, setErrors] = useState({});

    const subReview = async (values) => {

        const trimValues = trimValue(values);

        try {
            await reviewSchema.validate(trimValues, { abortEarly: false });
        } catch (error) {

            const newError = {};

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            setErrors(newError);

            return;
        }

        try {

            const response = await saveReview(trimValues, furnitureId);
            furnitureContext.updateArrayState(response, 'reviews');

        } catch (error) {
            if (error.message === '403') return user.updateError(true);

            console.error(error.message);
        }
    }

    const { values, changeHandler, submitCurForm } = useForm(initialValues, subReview);

    return (
        <section ref={ref} className="recent-reviews">

            <div className="container">

                <div className="heading-container">
                    <h2>Recent reviews</h2>
                </div>

                <div className="layout-padding2">
                    <div className="wrapper-reviews">

                        {
                            checkReview()

                            &&

                            < div className="write-review">
                                <form onSubmit={submitCurForm}>

                                    <div className="header bottom">
                                        <h3>How would you rate this furniture?</h3>
                                    </div>

                                    {errors.hasOwnProperty('rating') &&
                                        <div className='error-container'>
                                            <i className='bx bxs-error-circle bx-tada' ></i>
                                            <p className='error'>{errors.rating}</p>
                                        </div>
                                    }

                                    <div className="stars-review">
                                        <div>
                                            <button onClick={(e) => changeHandler(e)} type="button" className={values.rating === '5' ? 'btn-star active' : 'btn-star'}>
                                                <i className='bx bxs-star' data-rating='5'></i>
                                            </button>
                                            <button onClick={(e) => changeHandler(e)} type="button" className={values.rating === '4' ? 'btn-star active' : 'btn-star'}>
                                                <i className='bx bxs-star' data-rating='4'></i>
                                            </button>
                                            <button onClick={(e) => changeHandler(e)} type="button" className={values.rating === '3' ? 'btn-star active' : 'btn-star'}>
                                                <i className='bx bxs-star' data-rating='3'></i>
                                            </button>
                                            <button onClick={(e) => changeHandler(e)} type="button" className={values.rating === '2' ? 'btn-star active' : 'btn-star'}>
                                                <i className='bx bxs-star' data-rating='2'></i>
                                            </button>
                                            <button onClick={(e) => changeHandler(e)} type="button" className={values.rating === '1' ? 'btn-star active' : 'btn-star'}>
                                                <i className='bx bxs-star' data-rating='1'></i>
                                            </button>
                                        </div>

                                        <input type="hidden" name="rating" defaultValue={values.rating} />
                                    </div>



                                    <div className="center top bottom">
                                        <div className="profile">
                                            <img alt=""
                                                src={user.imageProfile ? user.imageProfile : '/images/profile-circle-svgrepo-com.svg'} />
                                        </div>

                                        <h3>{user.username}</h3>
                                    </div>

                                    {errors.hasOwnProperty('review') &&
                                        <div className='error-container'>
                                            <i className='bx bxs-error-circle bx-tada' ></i>
                                            <p className='error'>{errors.review}</p>
                                        </div>
                                    }

                                    <textarea name="review" rows="4" placeholder="Write a review about the furniture." value={values.review} onChange={changeHandler}>
                                    </textarea>

                                    <button className="btn" type="submit">Submit review</button>

                                </form>
                            </div>

                        }

                        {reviewsArr?.map(review => (


                            <div key={review._id} className="content-review">

                                <div className="center">
                                    <div className="profile">
                                        <img alt=""
                                            src={review.ownerReview.imageProfile ? review.ownerReview.imageProfile : '/images/profile-circle-svgrepo-com.svg'} />
                                    </div>

                                    <header>
                                        <h3>{review.ownerReview.username}</h3>
                                        <p>{convertDateToString(review.createdAt)}</p>
                                    </header>
                                </div>

                                <div className="stars-review top">
                                    <i className={review.rating === '5' ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                    <i className={review.rating === '4' ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                    <i className={review.rating === '3' ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                    <i className={review.rating === '2' ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                    <i className={review.rating === '1' ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                </div>
                                <div className="top">
                                    <p>{review.review}
                                    </p>
                                </div>
                            </div>

                        ))}

                        {furnitureContext.reviews?.length > 2 && !reviewsState && <button onClick={() => { updateReviewsState(true); }} className="btn" name="show-reviews" type="button">Show all reviews</button>}

                    </div>
                </div>
            </div>
        </section >
    );
})