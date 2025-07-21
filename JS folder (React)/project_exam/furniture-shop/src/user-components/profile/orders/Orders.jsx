import styles from "./Orders.module.css";
import Pagination from "../../../shared-components/pagination/Pagination";
import Spinner from "../../../shared-components/spinner/Spinner";
import CurrentOrder from "./currentOrder/CurrentOrder";
import { convertDocLengthToArr } from "../../../utils/convertDocLengthToArr";
import { useHandlePage } from "../../../hooks/useHandlePage";
import { useAllOrders } from "../../../hooks/useOrderResponse";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Orders({ page, deliveryStatus, date }) {
  const location = useLocation();
  const [filters, setFilters] = useState({
    deliveryStatus: deliveryStatus || "",
    date: date || "",
  });
  const [statePage, handlePageChange] = useHandlePage(page);

  const [orders, lengthDocuments, notFound] = useAllOrders(statePage, filters);

  const lengthPages = convertDocLengthToArr(lengthDocuments, 6);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    handlePageChange(1);
  };

  useEffect(() => {
    const params = new URLSearchParams(
      Object.entries(filters).filter(([_, value]) => value)
    ).toString();

    window.history.replaceState(
      { items: [], currentClick: "orders" },
      "",
      `/profile/orders/?page=${statePage}${params ? "&" + params : ""}`
    );
  }, [orders, location]);

  return (
    <div className="layout-padding2">
      <div className={styles["filter-bar"]}>
        <div>
          <label htmlFor="order-type"></label>
          <select
            name="deliveryStatus"
            id="order-type"
            onChange={handleFilterChange}
            value={filters.deliveryStatus}
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
          <select
            name="date"
            id="duration"
            onChange={handleFilterChange}
            value={filters.date}
          >
            <option value="default">Any Date</option>
            <option value="last7">this week</option>
            <option value="last30">this month</option>
            <option value="last90">the last 3 month</option>
            <option value="last180">the last 6 month</option>
          </select>
        </div>
      </div>
      {notFound ? (
        <div className={styles.zeroOrders}>
          <p>
            <i className="bx bx-confused"></i> Orders not found!
          </p>
          <p>You haven't placed any orders yet.</p>
        </div>
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
