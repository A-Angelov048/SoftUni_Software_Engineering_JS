import { useContext, useState } from 'react';
import './Reviews.css'
import { AuthContext } from '../../../context/AuthContext';
import { useForm } from '../../../hooks/useForms';

const initialValues = {
    rating: 0,
    review: ''
}

export default function Reviews({ furniture }) {

    const user = useContext(AuthContext);

    const subReview = async (values) => {

        try {

        } catch (error) {
            console.log(error.message);
        }
    }

    const { values, changeHandler, submitCurForm } = useForm(initialValues, subReview)

    return (
        <section className="recent-reviews">

            <div className="container">

                <div className="heading-container">
                    <h2>Recent reviews</h2>
                </div>

                <div className="layout-padding2">
                    <div className="wrapper-reviews">

                        {
                            furniture.owner?._id !== user.userId

                            &&

                            <div className="write-review">
                                <form onSubmit={submitCurForm}>

                                    <div className="header">
                                        <h3>How would you rate this furniture?</h3>
                                    </div>

                                    <div className="stars-review top">
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

                                        <input type="hidden" name="rating" value={values.rating} />
                                    </div>

                                    <div className="center top">
                                        <div className="profile">
                                            <img alt=""
                                                src={user.imageProfile ? user.imageProfile : '/images/profile-circle-svgrepo-com.svg'} />
                                        </div>

                                        <h3>{user.username}</h3>
                                    </div>

                                    <textarea name="review" rows="4" placeholder="Write a review about the furniture." value={values.review} onChange={changeHandler}>
                                    </textarea>

                                    <button className="btn" type="submit">Submit review</button>

                                </form>
                            </div>
                        }


                        <div className="content-review">

                            <div className="center">
                                <div className="profile">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" />
                                </div>

                                <header>
                                    <h3>Emily Selman</h3>
                                    <p>July 16, 2021</p>
                                </header>
                            </div>

                            <div className="stars-review top">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </div>
                            <div className="top">
                                <p>This icon pack is just what I need for my latest project. There's an icon for just
                                    about anything I could
                                    ever need. Love the playful look!
                                </p>
                            </div>
                        </div>

                        <div className="content-review">

                            <div className="center">
                                <div className="profile">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" />
                                </div>

                                <header>
                                    <h3>Emily Selman</h3>
                                    <p>July 16, 2021</p>
                                </header>
                            </div>

                            <div className="stars-review top">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </div>
                            <div className="top">
                                <p>This icon pack is just what I need for my latest project. There's an icon for just
                                    about anything I could
                                    ever need. Love the playful look!
                                </p>
                            </div>
                        </div>

                        <button className="btn" name="show-reviews" type="button">Show all reviews</button>

                    </div>
                </div>
            </div>
        </section>
    );
}