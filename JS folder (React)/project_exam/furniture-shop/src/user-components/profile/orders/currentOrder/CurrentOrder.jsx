import { Link } from "react-router-dom";
import styles from "../Orders.module.css";
import StatusOrder from "../statusOrder/StatusOrder";

export default function CurrentOrder({ order }) {
  return (
    <div className={styles["order-container"]}>
      <div className={styles.order}>
        <div>
          <strong>Order ID:</strong>
          <span>#FWB127364372</span>
        </div>
        <div>
          <strong>Date:</strong>
          <span>20.12.2023</span>
        </div>
        <div>
          <strong>Price:</strong>
          <span>$4,756</span>
        </div>
        <div>
          <strong>Status:</strong>
          <StatusOrder status={"confirmed"} />
        </div>
        <div>
          <Link className={styles.link}>View details</Link>
        </div>
      </div>
    </div>
  );
}
