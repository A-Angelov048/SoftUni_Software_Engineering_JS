import { useHandlePage } from "../../../hooks/useHandlePage";
import Pagination from "../../../shared-components/pagination/Pagination";
import Spinner from "../../../shared-components/spinner/Spinner";
import { convertDocLengthToArr } from "../../../utils/convertDocLengthToArr";
import CurrentOrder from "./currentOrder/CurrentOrder";
import styles from "./Orders.module.css";
import { useAllOrders } from "../../../hooks/useOrderResponse";
import { useState } from "react";
import ErrorMessage from "../../../shared-components/error-message/ErrorMessage";

export default function Orders() {
  const [filters, setFilters] = useState({
    deliveryStatus: "",
    date: "",
  });
  const [statePage, handlePageChange] = useHandlePage();

  const [orders, lengthDocuments, notFound] = useAllOrders(statePage, filters);

  const lengthPages = convertDocLengthToArr(lengthDocuments, 6);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="layout-padding2">
      <div className={styles["filter-bar"]}>
        <div>
          <label htmlFor="order-type"></label>
          <select
            name="deliveryStatus"
            id="order-type"
            onChange={handleFilterChange}
          >
            <option value="default">All orders</option>
            <option value="pre-order">Pre-order</option>
            <option value="in-transit">In transit</option>
            <option value="confirmed">Confirmed</option>
          </select>
        </div>
        <span>from</span>
        <div>
          <label htmlFor="duration"></label>
          <select name="date" id="duration" onChange={handleFilterChange}>
            <option value="default">Any Date</option>
            <option value="last7">this week</option>
            <option value="last30">this month</option>
            <option value="last90">the last 3 month</option>
            <option value="last180">the last 6 month</option>
          </select>
        </div>
      </div>

      {notFound ? (
        <ErrorMessage newMessage={{ read: "Orders not found!" }} />
      ) : orders.length > 0 ? (
        <div className={styles["order-container"]}>
          {orders.map((curOrder) => (
            <CurrentOrder key={curOrder._id} order={curOrder} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}

      {orders.length > 0 && (
        <Pagination
          statePage={statePage}
          pageChange={handlePageChange}
          lengthPages={lengthPages}
        />
      )}
    </div>
  );
}
