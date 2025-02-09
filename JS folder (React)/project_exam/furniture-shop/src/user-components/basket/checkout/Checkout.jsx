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

                <div className="layout-padding2 divide">



                </div >

            </div >

        </section >
    );
}