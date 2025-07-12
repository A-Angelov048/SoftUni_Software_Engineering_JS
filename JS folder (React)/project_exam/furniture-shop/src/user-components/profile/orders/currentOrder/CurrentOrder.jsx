import { Link } from "react-router-dom";
import styles from "../Orders.module.css";
import StatusOrder from "../statusOrder/StatusOrder";
import { convertDate2 } from "../../../../utils/convertDate";

export default function CurrentOrder({ order }) {
  return (
    <div className={styles.order}>
      <div>
        <strong>Order ID:</strong>
        <span>{order.orderIdClient}</span>
      </div>
      <div>
        <strong>Date:</strong>
        <span>{convertDate2(order.createdAt)}</span>
      </div>
      <div>
        <strong>Price:</strong>
        <span>{`$${(order.furniturePrice * 1.2 + order.shippingPrice).toFixed(
          2
        )}`}</span>
      </div>
      <div>
        <strong>Status:</strong>
        <StatusOrder status={order.status.toLowerCase()} />
      </div>
      <div>
        <Link to={`/details-order/${order._id}`} className={styles.link}>
          View details
        </Link>
      </div>
    </div>
  );
}
