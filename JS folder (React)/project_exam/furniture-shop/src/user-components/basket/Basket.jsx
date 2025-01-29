import './Basket.css';
import { Fragment, useContext } from 'react';
import { BasketContext } from '../../context/BasketContext';
import { useGetBasketItems } from '../../hooks/useFurnitureResponse';

export default function Basket() {

    const { basketItems, changeBasketState, removeBasketState } = useContext(BasketContext);

    const getBasketItems = useGetBasketItems(basketItems);


    return (
        <section className="basket-page layout-padding">

            <div className="container">

                <div className="heading-container">
                    <h2>
                        Basket
                    </h2>
                </div>

                <div className="layout-padding2 divide">

                    <section className='basket-section'>

                        <div className="basket-info">

                            <header className='basket-heading'>
                                <i className='bx bx-basket'></i>
                                <h2>{`- ${basketItems.length} items`}</h2>
                            </header>

                            <div className='basket-body'>

                                {getBasketItems.map((items, index) => (

                                    <Fragment key={items._id}>

                                        <div className="basket-item">

                                            <img src={items.imageUrl[0]} />

                                            <div className="item-details">
                                                <h3>{items.name}</h3>
                                                <div className="actions">
                                                    <button className="delete-btn">
                                                        <i onClick={() => removeBasketState(items._id)} className='bx bx-trash bx-tada-hover' ></i>
                                                    </button>
                                                    <button name="heart-btn" type="button">
                                                        <i className='bx bxs-heart bx-tada-hover'></i>
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

                                ))}

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
                            <p>Products: <span>$53.98</span></p>
                            <p>Shipping: <span>Gratis</span></p>
                            <p>Total amount (including VAT): <span>$53.98</span></p>
                            <button className="checkout-btn">GO TO CHECKOUT</button>
                        </div>

                    </section>

                </div >

            </div >

        </section >
    );
}