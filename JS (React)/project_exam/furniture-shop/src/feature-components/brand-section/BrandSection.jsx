import BrandContainer from '../../shared-components/brand-container/BrandContainer';
import './BrandSection.css'

export default function BrandSection() {
    return (
        <section className="brand-section-home layout-padding">
            <div className="container">

                <div className="heading-container">
                    <h2>
                        Last Added Furniture
                    </h2>
                </div>

                <BrandContainer />

                <a href="" className="brand-btn">
                    See More
                </a>

            </div>
        </section>
    );
}