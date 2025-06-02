import "./BrandSection.css";
import BrandContainer from "../../shared-components/brand-container/BrandContainer";
import Spinner from "../../shared-components/spinner/Spinner";

import { Link } from "react-router-dom";
import { useLatestFurniture } from "../../hooks/useFurnitureResponse";

export default function BrandSection() {
  const furniture = useLatestFurniture();

  return (
    <section className="brand-section-home layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Last Added Furniture</h2>
        </div>

        {furniture?.length > 0 ? (
          <>
            <div className="brand-container layout-padding2">
              {furniture.map((current, index) => (
                <BrandContainer
                  furniture={current}
                  curIndex={index}
                  key={current._id}
                />
              ))}
            </div>
            <Link to="/shop" className="brand-btn">
              See More
            </Link>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
}
