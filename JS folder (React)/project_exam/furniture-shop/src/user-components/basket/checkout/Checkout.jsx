import './Checkout.css';
import { useLocation } from "react-router-dom";
import { useGetDeliveryInfo } from '../../../hooks/useUserResponse';
import DeliveryForm from '../../delivery-form/DeliveryForm';

export default function Checkout() {

    const location = useLocation();
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

                            <header className='header-address'>
                                <p className="step">1</p>
                                <h2>Delivery address</h2>
                                <button></button>
                            </header>

                            {deliveryInfo.hasOwnProperty('_id') && <DeliveryForm deliveryInfo={deliveryInfo} />}

                        </div>

                    </div >

                </div>

            </div >

        </section >
    );
}