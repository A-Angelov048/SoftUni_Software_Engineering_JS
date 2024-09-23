import { useAllFurniture } from "../../hooks/useFurnitureResponse";
import BrandContainer from "../../shared-components/brand-container/BrandContainer";

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

                <BrandContainer furniture={furniture} />

            </div>
        </section>
    );
}