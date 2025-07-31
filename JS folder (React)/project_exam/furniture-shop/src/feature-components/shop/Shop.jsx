import { useEffect } from "react";
import { useAllFurniture } from "../../hooks/useFurnitureResponse";
import { useHandlePage } from "../../hooks/useHandlePage";
import { convertDocLengthToArr } from "../../utils/convertDocLengthToArr";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../../shared-components/pagination/Pagination";
import Spinner from "../../shared-components/spinner/Spinner";
import BrandContainer from "../../shared-components/brand-container/BrandContainer";

export default function Shop() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [statePage, handlePageChange] = useHandlePage(
    Number(searchParams.get("page")) || 1
  );
  const [furniture, lengthDocuments] = useAllFurniture(
    statePage,
    !location.state ? { search: "" } : location.state
  );
  const lengthPages = convertDocLengthToArr(lengthDocuments, 8);

  useEffect(() => {
    window.history.replaceState(null, "", `/shop/?page=${statePage}`);
  }, [statePage, location]);

  return (
    <section className="brand-section layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Products</h2>
        </div>

        {furniture?.length > 0 ? (
          <div className="brand-container layout-padding2">
            {furniture.map((current, index) => (
              <BrandContainer
                furniture={current}
                curIndex={index}
                key={current._id}
              />
            ))}
          </div>
        ) : (
          <Spinner />
        )}
      </div>

      <Pagination
        statePage={statePage}
        pageChange={handlePageChange}
        lengthPages={lengthPages}
      />
    </section>
  );
}
