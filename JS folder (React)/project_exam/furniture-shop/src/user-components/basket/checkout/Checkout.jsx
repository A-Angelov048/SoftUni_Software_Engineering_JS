import './Checkout.css';
import { useGetDeliveryInfo } from '../../../hooks/useUserResponse';
import DeliveryForm from '../../delivery-form/DeliveryForm';
import { useContext, useState } from 'react';
import { ErrorContext } from '../../../context/ErrorContext';
import { Link, useLocation } from 'react-router-dom';

export default function Checkout() {

    const { state } = useLocation();

    const { errors } = useContext(ErrorContext);

    const deliveryInfo = useGetDeliveryInfo();

    const [changeInfoDeliver, setChangeInfoDeliver] = useState(true);
    const [changeInfo, setChangeInfo] = useState({ option: 0 });

    return (
        <section className="checkout-page layout-padding">

            <div className="container">

                <div className="heading-container">
                    <h2>
                        Checkout summary
                    </h2>
                </div>

                {(errors.hasOwnProperty('successMessage') || errors.hasOwnProperty('errorMessage')) &&
                    <div className={errors.successMessage ? 'error-container success position disappear-text' : 'error-container position disappear-text'}>
                        {errors.successMessage ? <i className='bx bx-check bx-tada' /> : <i className='bx bxs-error-circle bx-tada' />}
                        <p className={errors.successMessage ? 'success bigger-font' : 'error bigger-font'}>{errors.successMessage || errors.errorMessage}</p>
                    </div>
                }

                <div className="layout-padding2 checkout">

                    <div className="wrapper-checkout">

                        <div className="address">

                            <div className='header'>
                                <header>
                                    <p className="step">1</p>
                                    <h2>Delivery address</h2>
                                </header>
                                {changeInfoDeliver && <button onClick={() => setChangeInfoDeliver(false)} className='change-info' type='button'>Change</button>}
                            </div>

                            {deliveryInfo.hasOwnProperty('_id') && changeInfoDeliver ?
                                <div className='delivery-info'>
                                    <p>{`${deliveryInfo['first-name']} ${deliveryInfo['last-name']}`}</p>
                                    <p>{`${deliveryInfo.address}, ${deliveryInfo['zip-code']}`}</p>
                                    <p>{deliveryInfo.neighborhood}</p>
                                    <p>{`${deliveryInfo.city}, ${deliveryInfo.region}`}</p>
                                    <p>{deliveryInfo.email}</p>
                                    <p>{deliveryInfo.phone}</p>
                                </div>
                                :
                                < DeliveryForm deliveryInfo={deliveryInfo} onClose={() => setChangeInfoDeliver(true)} state={state} />
                            }

                        </div>

                        <hr />

                        <div className="payment">

                            <div className='header'>
                                <header>
                                    <p className="step">2</p>
                                    <h2>Payment method</h2>
                                </header>
                            </div>

                            <div className='payment-info'>

                                <h3>Chose payment method</h3>

                                <div className='payment-container'>
                                    <button onClick={() => setChangeInfo({ option: 1 })} className={changeInfo.option === 1 ? 'card active' : 'card'}>
                                        <i className='bx bxs-credit-card-alt'></i>
                                        <p>Credit/Debit card</p>
                                    </button>
                                    <button onClick={() => setChangeInfo({ option: 2 })} className={changeInfo.option === 2 ? 'card active' : 'card'}>
                                        <i className='bx bxs-wallet'></i>
                                        <p>Cash on delivery</p>
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div >

                    <div className="basket">

                        <div className="basket-header">
                            <h3>Basket</h3>
                            <Link className='link' to={'/basket'}>Back to basket</Link>
                        </div>

                        <input type="checkbox" id='basket-toggle' />
                        <label htmlFor="basket-toggle" id='overlay'></label>

                        <div className="basket-items">

                            {state.furniture.map((current, index) => (
                                index <= 3 && <img key={current._id} src={current.imageUrl[0]} alt={`Product ${index + 1}`} />
                            ))}

                            <label htmlFor="basket-toggle" className='open-basket'>
                                <i className='bx bxs-right-arrow'></i>
                            </label>

                            <div className='full-basket'>

                                <header className='header-full-basket'>
                                    <h3>{`My products (2)`}</h3>
                                    <label htmlFor="basket-toggle" className='close-basket'>
                                        <i class='bx bx-x'></i>
                                    </label>
                                </header>

                            </div>

                        </div>


                        <div className="basket-summary">
                            <div className="summary-row">
                                <span>Products:</span>
                                <span>{'$' + state.furniturePrice.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping:</span>
                                <span>{state.shippingPrice === 0 ? 'Gratis' : `$${state.shippingPrice.toFixed(2)}`}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total amount:</span>
                                <span>{`$${((state.furniturePrice * 1.2) + state.shippingPrice).toFixed(2)}`}</span>
                            </div>
                            <div className='low-font'>
                                <span>(including VAT)</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div >

        </section >
    );
}