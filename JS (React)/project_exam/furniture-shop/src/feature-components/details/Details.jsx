import './Details.css'
import Reviews from './reviews/Reviews';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { useDetailsFurniture } from '../../hooks/useFurnitureResponse';

import { AuthContext } from '../../context/AuthContext';
import { FurnitureContext } from '../../context/FurnitureContext';
import { purchaseFurniture, removeFurniture, wishlist } from '../../service/furnitureService';
import { averageNumReviews } from '../../utils/averageNumReviews';

export default function Details() {

    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const { reviews, listUserLikes, handleUserLikes } = useContext(FurnitureContext);
    const { furnitureId } = useParams();
    const furniture = useDetailsFurniture(furnitureId);

    const [quantity, setQuantity] = useState(0);
    const [changeContent, setChangeContent] = useState(true);
    const [buyFlag, setBuyFlag] = useState(false);
    const ref = useRef(null);

    function contentHandler(e) {

        if (e.target.textContent === 'Description') {
            setChangeContent(true);
        } else {
            setChangeContent(false);
        }
    }

    async function deleteFurniture() {

        try {
            await removeFurniture(furnitureId);
            navigate('/shop');
        } catch (error) {
            console.log(error.message);
        }

    }

    async function buyFurniture() {

        if (quantity === 0) return;

        try {
            await purchaseFurniture(furnitureId);
            setBuyFlag(true);
        } catch (error) {
            console.log(error.message);
        }

    }

    async function updateWishlist() {

        try {
            const response = await wishlist(furnitureId);

            if (response.check) {
                handleUserLikes(userId);
            } else {
                handleUserLikes(userId);
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    function scrollToReviews() {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (

        <>
            <section className="details-section layout-padding">

                <div className="container">

                    <div className="heading-container">
                        <h2>
                            Details Furniture
                        </h2>
                    </div>

                    <div className="layout-padding2">

                        <div className="wrapper-details">

                            <div className="left-box">
                                <div className="image-box">
                                    <img src={furniture.imageUrl} className="main-image" />
                                </div>
                            </div>

                            <div className="right-box">

                                <header className="header-right">
                                    <h1>{furniture.name}</h1>
                                    <Link to={`/profile/${furniture.owner?._id}`}>
                                        <div className="profile">
                                            <img alt=""
                                                src={furniture.owner?.imageProfile ? furniture.owner?.imageProfile : '/images/profile-circle-svgrepo-com.svg'} />
                                            <div>
                                                <p>Creator:</p>
                                                <p>{furniture.owner?.username}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </header>

                                <div className="box-reviews">

                                    <div className="stars">
                                        <i className={averageNumReviews() === 5 ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                        <i className={averageNumReviews() === 4 ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                        <i className={averageNumReviews() === 3 ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                        <i className={averageNumReviews() === 2 ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                        <i className={averageNumReviews() === 1 ? 'bx bxs-star active' : 'bx bxs-star'}></i>
                                    </div>

                                    <p onClick={scrollToReviews}>{reviews?.length} Reviews</p>
                                </div>

                                <div className="box-price-quantity">

                                    <div className="price">
                                        <h3>Price</h3>
                                        <p className="current-price">
                                            ${furniture.price}
                                        </p>
                                    </div>

                                    {
                                        !!userId

                                        &&

                                        userId !== furniture.owner?._id

                                        &&

                                        <div className="quantity">
                                            <h3>Quantity</h3>
                                            <div className="quantity-btn">
                                                <button name="minus" type="button" onClick={() => { if (quantity <= 0) { return setQuantity(0) } setQuantity(quantity => quantity - 1) }}><i className='bx bx-minus'></i></button>
                                                <p>{quantity}</p>
                                                <button name="plus" type="button" onClick={() => { setQuantity(quantity => quantity + 1) }}><i className='bx bx-plus'></i></button>
                                            </div>
                                        </div>
                                    }

                                </div>

                                <div className="box-description-details">

                                    <section className="content-header">
                                        <div>
                                            <a onClick={contentHandler}>Description</a>
                                            <hr className={changeContent ? 'active' : null} />
                                        </div>

                                        <div>
                                            <a onClick={contentHandler}>Details</a>
                                            <hr className={!changeContent ? 'active' : null} />
                                        </div>
                                    </section>

                                    {changeContent &&
                                        <div className="content">

                                            <div>
                                                <p>Category</p>
                                                <p>{furniture.category}</p>
                                            </div>

                                            <div>
                                                <p>Year of <abbr title="Manufacture">MFR</abbr></p>
                                                <p>{furniture.year}</p>
                                            </div>

                                            <div>
                                                <p>Condition</p>
                                                <p>{furniture.condition}</p>
                                            </div>

                                            <div>
                                                <p>Description</p>
                                                <p>{furniture.description}</p>
                                            </div>

                                        </div>
                                    }

                                    {!changeContent &&
                                        <div className="content">

                                            <div>
                                                <p>Size</p>
                                                <p>{furniture.size}</p>

                                            </div>

                                            <div>
                                                <p>Materials</p>
                                                <p>{furniture.materials}</p>
                                            </div>

                                            <div>
                                                <p>Color</p>
                                                <p>{furniture.color}</p>

                                            </div>

                                            <div>
                                                <p>Weight</p>
                                                <p>{furniture.weight}</p>
                                            </div>

                                        </div>
                                    }

                                </div>

                                {
                                    !!userId

                                    &&

                                    <div className="box-total-price">

                                        {
                                            userId !== furniture.owner?._id

                                            &&

                                            <div className="total-price">
                                                <h3>Total Price</h3>
                                                <p>${furniture.price * quantity}</p>
                                            </div>
                                        }

                                        <div className="button-box">
                                            {
                                                userId === furniture.owner?._id ?

                                                    <>
                                                        <Link className="btn-hover" to={`/edit-furniture/${furnitureId}`}>Edit</Link>
                                                        <button onClick={deleteFurniture} className="btn-hover" name="delete" type="button">Delete</button>
                                                    </>

                                                    :

                                                    <>
                                                        {
                                                            furniture.buyList?.includes(userId) || buyFlag ?

                                                                <>
                                                                    <p className='purchase'>Thank you for your purchase!</p>
                                                                </>

                                                                :

                                                                <>
                                                                    <button onClick={buyFurniture} className={quantity > 0 ? 'btn-hover' : 'btn-hover blur'} name="add-to-cart" type="button">Buy</button>
                                                                    <button name="heart" type="button">
                                                                        <i onClick={updateWishlist} className={listUserLikes?.includes(userId) ? 'bx bxs-heart bx-tada-hover active' : 'bx bxs-heart bx-tada-hover'}></i>
                                                                    </button>
                                                                </>
                                                        }
                                                    </>
                                            }
                                        </div>

                                    </div>
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </section >

            <Reviews ref={ref} />

        </>

    );
}


