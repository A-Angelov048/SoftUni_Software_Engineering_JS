import './BrandSection.css';
import BrandContainer from '../../shared-components/brand-container/BrandContainer';
import Spinner from '../../shared-components/spinner/Spinner';

import { Link } from 'react-router-dom';
import { useLatestFurniture } from '../../hooks/useFurnitureResponse';

export default function BrandSection() {

    const furniture = useLatestFurniture();

    return (

        <section className="brand-section-home layout-padding">
            <div className="container">

                <div className="heading-container">
                    <h2>
                        Last Added Furniture
                    </h2>
                </div>

                {furniture?.length > 0 ?
                    <>
                        <BrandContainer furniture={furniture} />

                        <Link to="/shop" className="brand-btn">
                            See More
                        </Link>
                    </>

                    :

                    <Spinner />
                }

            </div>
        </section>
    );
}