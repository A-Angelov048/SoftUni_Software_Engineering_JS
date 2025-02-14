import './Checkout.css';
import { useGetDeliveryInfo } from '../../../hooks/useUserResponse';
import DeliveryForm from '../../delivery-form/DeliveryForm';
import { useContext, useState } from 'react';
import { ErrorContext } from '../../../context/ErrorContext';

export default function Checkout() {

    const [changeInfo, setChangeInfo] = useState(true);

    const deliveryInfo = useGetDeliveryInfo();

    return (
        <section className="basket-page layout-padding">

            <div className="container">

                <div className="heading-container">
                    <h2>
                        Checkout summary
                    </h2>
                </div>

                <div className="layout-padding2">

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
                                    <p>{deliveryInfo['first-name']} {deliveryInfo['last-name']}</p>
                                    <p>{deliveryInfo.address}, {deliveryInfo['zip-code']}</p>
                                    <p>{deliveryInfo.city}, {deliveryInfo.region}</p>
                                    <p>{deliveryInfo.email}</p>
                                    <p>{deliveryInfo.phone}</p>
                                </div>
                                :
                                < DeliveryForm deliveryInfo={deliveryInfo} onClose={() => setChangeInfo(true)} />
                            }

                        </div>

                    </div >

                </div>

            </div >

        </section >
    );
}