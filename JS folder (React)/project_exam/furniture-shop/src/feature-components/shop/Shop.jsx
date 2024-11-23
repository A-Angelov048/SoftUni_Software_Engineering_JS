import BrandContainer from "../../shared-components/brand-container/BrandContainer";
import Spinner from "../../shared-components/spinner/Spinner";

import { useAllFurniture } from "../../hooks/useFurnitureResponse";

export default function Shop() {

    const furniture = useAllFurniture();

    return (
        <section className="brand-section layout-padding">
            <div className="container">

                <div className="heading-container">
                    <h2>
                        Products
                    </h2>
                </div>

                {furniture?.length > 0 ? <BrandContainer furniture={furniture} /> : <Spinner />}

            </div>
        </section>
    );
}