import './Basket.css';
import { Fragment, useContext } from 'react';
import { BasketContext } from '../../context/BasketContext';
import { useGetBasketItems, useUpdateWishlist } from '../../hooks/useFurnitureResponse';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ErrorContext } from '../../context/ErrorContext';
import { priceHandler } from '../../utils/priceHandler';

export default function Basket() {

    const navigate = useNavigate();
    const { basketItems, quantityHandler, removeBasketState } = useContext(BasketContext);
    const { userId } = useContext(AuthContext);
    const { errors } = useContext(ErrorContext);

    const getBasketItems = useGetBasketItems(basketItems);
    const updateWishlist = useUpdateWishlist();


    return (
        <section className="basket-page layout-padding">

            <div className="container">

                <div className="heading-container">
                    <h2>
                        Basket
                    </h2>
                </div>

                {(errors.hasOwnProperty('successMessage') || errors.hasOwnProperty('errorMessage')) &&
                    <div className={errors.successMessage ? 'error-container success position disappear-text' : 'error-container position disappear-text'}>
                        {errors.successMessage ? <i className='bx bx-check bx-tada' /> : <i className='bx bxs-error-circle bx-tada' />}
                        <p className={errors.successMessage ? 'success bigger-font' : 'error bigger-font'}>{errors.successMessage || errors.errorMessage}</p>
                    </div>
                }

                <div className="layout-padding2 divide">

                    <section className='basket-section'>

                        <div className="basket-info">

                            <header className='basket-heading'>
                                <i className='bx bx-basket'></i>
                                <h2>{`- ${basketItems.length} items`}</h2>
                            </header>

                            <div className='basket-body'>


                                {basketItems.length > 0 ?

                                    getBasketItems.map((items, index) => (
                                        <Fragment key={items._id}>

                                            <div className="basket-item">

                                                <img src={items.imageUrl[0]} />

                                                <div className="item-details">
                                                    <h3>{items.name}</h3>
                                                    <div className="actions">
                                                        <button className="delete-btn" type="button">
                                                            <i onClick={() => { removeBasketState(items._id) }} className='bx bx-trash bx-tada-hover' ></i>
                                                        </button>
                                                        <button className="heart-btn" type="button">
                                                            <i onClick={async () => { await updateWishlist(items._id); navigate('/basket', { replace: true }) }} className={items.listUserLikes.includes(userId) ? 'bx bxs-heart bx-tada-hover active' : 'bx bxs-heart bx-tada-hover'}></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="quantity-btn">

                                                    <button onClick={() => { quantityHandler(items._id, 'decrement') }} name="minus" type="button"><i className="bx bx-minus"></i></button>

                                                    <p>{basketItems.map((x) => (
                                                        x.id === items._id && <Fragment key={x.id}>{x.quantity}</Fragment>
                                                    ))}</p>

                                                    <button onClick={() => { quantityHandler(items._id, 'increment') }} name="plus" type="button"><i className="bx bx-plus"></i></button>

                                                </div>

                                                <p className="price">{basketItems.map((x) => (
                                                    x.id === items._id && <Fragment key={x.id}>{'$' + (items.price * x.quantity)}</Fragment>
                                                ))}</p>

                                            </div>

                                            {getBasketItems.length - 1 !== index && < hr />}

                                        </Fragment>
                                    ))

                                    :

                                    <header className='empty-basket'>
                                        <h2>Whoops, it seems basket is empty.</h2>
                                        <Link className='underline' to='/shop'>Start shopping</Link>
                                    </header>
                                }


                            </div>

                        </div>

                        <div className="delivery-info">
                            <h3>Expected shipping delivery</h3>
                            <p>12.10.2020 - 14.10.2020</p>
                        </div>

                        <div className="payment-info">
                            <h3>We accept</h3>
                            <div className="payment-icons">
                                <img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                                <img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                                <img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal" />
                            </div>
                        </div>

                    </section>

                    <section className='summary-section'>

                        <div className="summary">
                            <h3>Summary</h3>
                            <p>Products: <span>{'$' + priceHandler()}</span></p>
                            <p>Shipping: <span>Gratis</span></p>
                            <p>Total amount (including VAT): <span>{'$' + priceHandler() * 1.2}</span></p>
                            <button className="checkout-btn">GO TO CHECKOUT</button>
                        </div>

                    </section>

                </div >

            </div >

        </section >
    );
}