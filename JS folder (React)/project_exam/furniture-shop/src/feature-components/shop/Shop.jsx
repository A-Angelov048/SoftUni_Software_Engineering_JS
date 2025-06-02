import BrandContainer from "../../shared-components/brand-container/BrandContainer";
import Spinner from "../../shared-components/spinner/Spinner";

import { useAllFurniture } from "../../hooks/useFurnitureResponse";
import { convertDocLengthToArr } from "../../utils/convertDocLengthToArr";
import { useHandlePage } from "../../hooks/useHandlePage";

export default function Shop() {
  const [statePage, handlePageChange] = useHandlePage();
  const [furniture, lengthDocuments] = useAllFurniture(statePage);
  const lengthPages = convertDocLengthToArr(lengthDocuments);

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

      <div className="pagination">
        {statePage > 1 && (
          <i
            onClick={() => handlePageChange("decrement")}
            className="bx bx-first-page"
          ></i>
        )}
        {lengthPages.length > 1 &&
          lengthPages.map((page, index) => (
            <p
              onClick={() => handlePageChange(page)}
              key={index}
              className={
                statePage === page ? "page-number active" : "page-number"
              }
            >
              {page}
            </p>
          ))}
        {statePage < lengthPages.length && (
          <i
            onClick={() => handlePageChange("increment")}
            className="bx bx-last-page"
          ></i>
        )}
      </div>
    </section>
  );
}
