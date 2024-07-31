import './BrandSection.css'
import BrandContainer from '../../shared-components/brand-container/BrandContainer';

import { Link } from 'react-router-dom';
import { latestFurniture } from '../../hooks/useFurnitureResponse';

export default function BrandSection() {

    const furniture = latestFurniture();

    return (
        <section className="brand-section-home layout-padding">
            <div className="container">

                <div className="heading-container">
                    <h2>
                        Last Added Furniture
                    </h2>
                </div>

                <BrandContainer furniture={furniture} />

                <Link to="/shop" className="brand-btn">
                    See More
                </Link>

            </div>
        </section>
    );
}