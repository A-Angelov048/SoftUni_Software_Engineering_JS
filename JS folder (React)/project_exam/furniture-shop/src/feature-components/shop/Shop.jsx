import BrandContainer from "../../shared-components/brand-container/BrandContainer";
import Spinner from "../../shared-components/spinner/Spinner";

import { useAllFurniture } from "../../hooks/useFurnitureResponse";
import { convertDocLengthToArr } from "../../utils/convertDocLengthToArr";
import { useHandlePage } from "../../hooks/useHandlePage";
import Pagination from "../../shared-components/pagination/Pagination";

export default function Shop() {
  const [statePage, handlePageChange] = useHandlePage(1);
  const [furniture, lengthDocuments] = useAllFurniture(statePage);
  const lengthPages = convertDocLengthToArr(lengthDocuments, 8);

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
