import './Details.css'

import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { useDetailsFurniture } from '../../hooks/useFurnitureResponse';
import { AuthContext } from '../../context/AuthContext';
import Reviews from './reviews/Reviews';
import { removeFurniture } from '../../service/furnitureService';

export default function Details() {

    const navigate = useNavigate();

    const user = useContext(AuthContext)

    console.log(user);

    const { furnitureId } = useParams();
    const furniture = useDetailsFurniture(furnitureId);

    console.log(furniture);


    async function deleteFurniture() {

        try {
            await removeFurniture(furnitureId);
            navigate('/shop');
        } catch (error) {
            console.log(error.message);
        }

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
                                    <a href="">
                                        <div className="profile">
                                            <img alt=""
                                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" />
                                            <div>
                                                <p>Creator:</p>
                                                <p>Emily Selman</p>
                                            </div>
                                        </div>
                                    </a>
                                </header>

                                <div className="box-reviews">

                                    <div className="stars">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>

                                    <p>5 Reviews</p>
                                </div>

                                <div className="box-price-quantity">

                                    <div className="price">
                                        <h3>Price</h3>
                                        <p className="current-price">
                                            ${furniture.price}
                                        </p>
                                    </div>

                                    {
                                        !!user.userId

                                        &&

                                        user.userId !== furniture.owner

                                        &&

                                        <div className="quantity">
                                            <h3>Quantity</h3>
                                            <div className="quantity-btn">
                                                <button name="minus" type="button"><i className='bx bx-minus'></i></button>
                                                <p>2</p>
                                                <button name="plus" type="button"><i className='bx bx-plus'></i></button>
                                            </div>
                                        </div>
                                    }

                                </div>

                                <div className="box-description-details">

                                    <section className="content-header">
                                        <div>
                                            <a>Description</a>
                                            <hr id="target-one" />
                                        </div>

                                        <div>
                                            <a>Details</a>
                                            <hr id="target-two" />
                                        </div>
                                    </section>

                                    <div className="content" id='one'>

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

                                    <div className="content" id='two'>

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

                                </div>

                                {
                                    !!user.userId

                                    &&

                                    <div className="box-total-price">

                                        {
                                            user.userId !== furniture.owner

                                            &&

                                            <div className="total-price">
                                                <h3>Total Price</h3>
                                                <p>$600.00</p>
                                            </div>
                                        }

                                        <div className="button-box">
                                            {
                                                user.userId === furniture.owner ?

                                                    <>
                                                        <button className="btn-hover" name="edit" type="button">Edit</button>
                                                        <button onClick={deleteFurniture} className="btn-hover" name="delete" type="button">Delete</button>
                                                    </>

                                                    :

                                                    <>
                                                        <button className="btn-hover" name="add-to-cart" type="button">Buy</button>
                                                        <button name="heart" type="button">
                                                            <i className='bx bxs-heart bx-tada-hover'></i>
                                                        </button>
                                                    </>
                                            }
                                        </div>

                                    </div>
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Reviews />
        </>

    );
}