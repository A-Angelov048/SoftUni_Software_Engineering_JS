import { useHandlePage } from "../../../hooks/useHandlePage";
import Pagination from "../../../shared-components/pagination/Pagination";
import { convertDocLengthToArr } from "../../../utils/convertDocLengthToArr";
import CurrentOrder from "./currentOrder/CurrentOrder";
import styles from "./Orders.module.css";

export default function Orders() {
  const [statePage, handlePageChange] = useHandlePage();
  const lengthPages = convertDocLengthToArr(7, 6);
  //fetch the orders the first way for the current user the second way for the admin
  // also have to send the statePage to the custom hook that fetch the orders
  return (
    <div className="layout-padding2">
      <div className={styles["filter-bar"]}>
        <div>
          <label htmlFor="order-type"></label>
          <select id="order-type">
            <option>All orders</option>
            <option>Pre-order</option>
            <option>In transit</option>
            <option>Confirmed</option>
          </select>
        </div>
        <span>from</span>
        <div>
          <label htmlFor="duration"></label>
          <select id="duration">
            <option>this week</option>
            <option>this month</option>
            <option>the last 3 month</option>
            <option>the last 6 month</option>
            <option>this year</option>
          </select>
        </div>
      </div>

      {[1, 2, 3, 4, 5, 6, 7].map((curOrder) => (
        <CurrentOrder order={curOrder} />
      ))}

      <Pagination
        statePage={statePage}
        pageChange={handlePageChange}
        lengthPages={lengthPages}
      />
    </div>
  );
}
