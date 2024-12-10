import './Details.css';
import Reviews from './reviews/Reviews';

import { Link, useParams } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { useDetailsFurniture } from '../../hooks/useFurnitureResponse';

import { AuthContext } from '../../context/AuthContext';
import { FurnitureContext } from '../../context/FurnitureContext';
import { purchaseFurniture, wishlist } from '../../api-service/furnitureService';
import { averageNumReviews } from '../../utils/averageNumReviews';
import MessageDialog from '../../shared-components/message-dialog/MessageDialog';

export default function Details() {

    const { furnitureId } = useParams();
    const furniture = useDetailsFurniture(furnitureId);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [changeContent, setChangeContent] = useState(true);
    const [imageIndex, setImageIndex] = useState(0);
    const ref = useRef(null);

    const { userId, updateAuthError } = useContext(AuthContext);
    const { updateArrayState, buyList, reviews, listUserLikes, handleUserLikes } = useContext(FurnitureContext);

    function contentHandler(e) {

        if (e.target.textContent === 'Description') {
            setChangeContent(true);
        } else {
            setChangeContent(false);
        }
    }

    async function buyFurniture() {

        if (quantity === 0) return;

        try {
            await purchaseFurniture(furnitureId);
            updateArrayState(userId, 'buyList');
        } catch (error) {
            if (error.message === '403') return updateAuthError(true);

            console.error(error.message);
        }

    }

    async function updateWishlist() {

        try {
            await wishlist(furnitureId);

            handleUserLikes(userId);

        } catch (error) {
            if (error.message === '403') return updateAuthError(true);

            console.error(error.message);
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
                                <div className="container-image">

                                    <div className="container-small">

                                        {furniture.imageUrl?.map((curImage) => (
                                            <div className="image-box-small">
                                                <img src={curImage} className='small-image' />
                                            </div>
                                        ))}

                                    </div>

                                    <div className="container-large">

                                        <i onClick={() => imageIndex - 1 >= 0 ? setImageIndex(oldIndex => oldIndex - 1) : setImageIndex(furniture.imageUrl.length - 1)} className='bx bxs-left-arrow'></i>

                                        <div className="image-box-large">
                                            <img src={furniture.imageUrl?.[imageIndex]} className="large-image" />
                                        </div>

                                        <i onClick={() => imageIndex + 1 <= furniture.imageUrl.length - 1 ? setImageIndex(oldIndex => oldIndex + 1) : setImageIndex(0)} className='bx bxs-right-arrow'></i>

                                    </div>

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
                                                <button name="minus" type="button" onClick={() => { if (quantity <= 0 || buyList.includes(userId)) { return } setQuantity(quantity => quantity - 1) }}><i className='bx bx-minus'></i></button>
                                                <p>{quantity}</p>
                                                <button name="plus" type="button" onClick={() => { if (buyList.includes(userId)) { return } setQuantity(quantity => quantity + 1) }}><i className='bx bx-plus'></i></button>
                                            </div>
                                        </div>
                                    }

                                </div>

                                <div className="box-description-details">

                                    <section className="content-header">
                                        <div>
                                            <p onClick={contentHandler}>Description</p>
                                            <hr className={changeContent ? 'active' : null} />
                                        </div>

                                        <div>
                                            <p onClick={contentHandler}>Details</p>
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
                                                        <button onClick={() => setIsDialogOpen(true)} className="btn-hover" name="delete" type="button">Delete</button>
                                                    </>

                                                    :

                                                    <>
                                                        {
                                                            buyList?.includes(userId) ?

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

            {isDialogOpen && <MessageDialog onClose={() => setIsDialogOpen(false)} />}

        </>

    );
}


