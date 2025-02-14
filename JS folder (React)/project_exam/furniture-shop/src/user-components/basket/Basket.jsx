import './Basket.css';
import { Fragment, useContext, useState } from 'react';
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

    const [receiveInfo, setReceiveInfo] = useState('');
    const [priceReceive, setPriceReceive] = useState({ option: 0, price: 0 });

    const totalPrice = priceHandler();

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
                                                            <i onClick={() => {

                                                                const result = removeBasketState(items._id)

                                                                if (result.length <= 0) {
                                                                    setReceiveInfo('');
                                                                    setPriceReceive({ option: 0, price: 0 });
                                                                }
                                                            }} className='bx bx-trash bx-tada-hover' ></i>
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

                            <h3>How will you receive the order?</h3>

                            <div className='receive-choice'>

                                <button disabled={!basketItems.length > 0} onClick={() => setReceiveInfo('shop')} type='button'
                                    className={receiveInfo === 'shop' ?
                                        'container-receive flex-elements active'
                                        :
                                        'container-receive flex-elements'}>

                                    <div className='icon'>
                                        <i className='bx bxs-store' ></i>
                                    </div>

                                    <div className="receive-method">
                                        <p>Furniture-Shop</p>
                                        <p>Choice store</p>
                                    </div>

                                </button>

                                <button disabled={!basketItems.length > 0} onClick={() => setReceiveInfo('home')} type='button' className={receiveInfo === 'home' ?
                                    'container-receive flex-elements active'
                                    :
                                    'container-receive flex-elements'}>

                                    <div className='icon'>
                                        <i className='bx bxs-home'></i>
                                    </div>

                                    <div className="receive-method">
                                        <p>To Home / To Office</p>
                                        <p>Shipping calculation</p>
                                    </div>

                                </button>

                            </div>

                            {
                                receiveInfo === 'shop'

                                &&

                                <div className="receive-shop">

                                    <h3>Place of Receipt</h3>

                                    <button onClick={() => basketItems.length <= 0 ? setReceiveInfo('') : setPriceReceive({ option: 1, price: 0 })} type='button'
                                        className={priceReceive.option === 1 ? 'container-receive active' : 'container-receive'}>

                                        <div className="receive-method flex-elements">
                                            <p>Furniture-Shop Sofia</p>
                                            <p>$0,00</p>
                                        </div>

                                        <span>Delivery within 7 business days</span>

                                    </button>

                                    <button onClick={() => basketItems.length <= 0 ? setReceiveInfo('') : setPriceReceive({ option: 2, price: 0 })} type='button'
                                        className={priceReceive.option === 2 ? 'container-receive active' : 'container-receive'}>

                                        <div className="receive-method flex-elements">
                                            <p>Furniture-Shop Plovdiv</p>
                                            <p>$0,00</p>
                                        </div>

                                        <span>Delivery within 7 business days</span>

                                    </button>

                                    <button onClick={() => basketItems.length <= 0 ? setReceiveInfo('') : setPriceReceive({ option: 3, price: 0 })} type='button'
                                        className={priceReceive.option === 3 ? 'container-receive active' : 'container-receive'}>

                                        <div className="receive-method flex-elements">
                                            <p>Furniture-Shop Varna</p>
                                            <p>$0,00</p>
                                        </div>

                                        <span>Delivery within 7 business days</span>

                                    </button>

                                </div>
                            }

                            {
                                receiveInfo === 'home'

                                &&

                                <div className="receive-home">

                                    <h3>Delivery</h3>

                                    <button onClick={() => setPriceReceive({ option: 4, price: 25 })} type='button'
                                        className={priceReceive.option === 4 ? 'container-receive active' : 'container-receive'}>

                                        <div className="receive-method flex-elements">
                                            <p>Delivery with pickup from a car</p>
                                            <p>$25,00</p>
                                        </div>

                                        <p>Delivery within 7 business days</p>

                                    </button>

                                    <button onClick={() => setPriceReceive({ option: 5, price: 95 })} type='button'
                                        className={priceReceive.option === 5 ? 'container-receive active' : 'container-receive'}>

                                        <div className="receive-method flex-elements">
                                            <p>Door-to-door delivery</p>
                                            <p>$95,00</p>
                                        </div>

                                        <p>Delivery within 7 business days</p>

                                    </button>

                                </div>
                            }

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
                            <p>Products: <span>{'$' + totalPrice.toFixed(2)}</span></p>
                            <p>Shipping: <span>{priceReceive.price === 0 ? 'Gratis' : `$${priceReceive.price.toFixed(2)}`}</span></p>
                            <p>Total amount (including VAT): <span>{'$' + ((totalPrice * 1.2) + priceReceive.price).toFixed(2)}</span></p>
                            <button disabled={!basketItems.length > 0} onClick={() => navigate('/checkout', { state: { furniture: getBasketItems, furniturePrice: totalPrice, shippingPrice: priceReceive.price } })} type='button' className="checkout-btn">GO TO CHECKOUT</button >
                        </div>

                    </section>

                </div >

            </div >

        </section >
    );
}