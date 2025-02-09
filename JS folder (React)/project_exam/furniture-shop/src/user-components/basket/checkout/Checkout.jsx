import DeliveryForm from '../../deliveryForm/DeliveryForm';
import './Checkout.css';
import { useLocation } from "react-router-dom";

export default function Checkout() {

    const location = useLocation();

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

                            <DeliveryForm/>
                            
                        </div>

                    </div >

                </div>

            </div >

        </section >
    );
}