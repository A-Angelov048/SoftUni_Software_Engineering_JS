import './Checkout.css';
import { useGetDeliveryInfo } from '../../../hooks/useUserResponse';
import DeliveryForm from '../../delivery-form/DeliveryForm';
import { useContext, useState } from 'react';
import { ErrorContext } from '../../../context/ErrorContext';
import { Link } from 'react-router-dom';

export default function Checkout() {

    const { errors } = useContext(ErrorContext);

    const [changeInfo, setChangeInfo] = useState(true);

    const deliveryInfo = useGetDeliveryInfo();

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

                            <div className='header-address'>
                                <header>
                                    <p className="step">1</p>
                                    <h2>Delivery address</h2>
                                </header>
                                {changeInfo && <button onClick={() => setChangeInfo(false)} className='change-info' type='button'>Change</button>}
                            </div>

                            {deliveryInfo.hasOwnProperty('_id') && changeInfo ?
                                <div className='delivery-info'>
                                    <p>{`${deliveryInfo['first-name']} ${deliveryInfo['last-name']}`}</p>
                                    <p>{`${deliveryInfo.address}, ${deliveryInfo['zip-code']}`}</p>
                                    <p>{deliveryInfo.neighborhood}</p>
                                    <p>{`${deliveryInfo.city}, ${deliveryInfo.region}`}</p>
                                    <p>{deliveryInfo.email}</p>
                                    <p>{deliveryInfo.phone}</p>
                                </div>
                                :
                                < DeliveryForm deliveryInfo={deliveryInfo} onClose={() => setChangeInfo(true)} />
                            }

                        </div>

                    </div >

                    <div class="basket">
                        <div class="basket-header">
                            <h3>Basket</h3>
                            <Link className='link' to={'/basket'}>Back to basket</Link>
                        </div>
                        <div class="basket-items">
                            <img src="image.png" alt="Product 1" />
                            <img src="image.png" alt="Product 2" />
                        </div>
                        <div class="basket-summary">
                            <div class="summary-row">
                                <span>Products:</span>
                                <span>$640,00</span>
                            </div>
                            <div class="summary-row">
                                <span>Shipping:</span>
                                <span>$25,00</span>
                            </div>
                            <div class="summary-row total">
                                <span>Total amount:</span>
                                <span>$665,00</span>
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