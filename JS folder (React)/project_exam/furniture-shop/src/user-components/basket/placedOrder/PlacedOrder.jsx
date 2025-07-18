import styles from "./PlacedOrder.module.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { convertDate2 } from "../../../utils/convertDate";

export default function PlacedOrder() {
  const { state } = useLocation();
  const { userId } = useContext(AuthContext);

  return (
    <section className="layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Order submitted</h2>
        </div>

        <div className={styles.containerOrder}>
          <h2 className={styles.title}>Thanks for your order!</h2>
          <p className={styles.subtitle}>
            Your order{" "}
            <span className={styles.orderNumber}>{state.orderId}</span> will be
            processed within 24 hours during working days. We will notify you by
            email once your order has been shipped.
          </p>

          <section className={styles.orderDetails}>
            <div className={styles.detailRow}>
              <span className={styles.label}>Date</span>
              <span className={styles.value}>{convertDate2(Date.now())}</span>
            </div>

            <div className={styles.detailRow}>
              <span className={styles.label}>Name</span>
              <span
                className={styles.value}
              >{`${state.deliveryInfo["first-name"]} ${state.deliveryInfo["last-name"]}`}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>{state.deliveryInfo.email}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Address</span>
              <span className={styles.value}>{state.deliveryInfo.address}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Phone</span>
              <span className={styles.value}>{state.deliveryInfo.phone}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Payment Method</span>
              <span className={styles.value}>{state.paymentInfo}</span>
            </div>
          </section>

          <div className={styles.links}>
            <Link
              to={`/profile/${userId}`}
              className={`${styles.link} ${styles.linkPrimary}`}
            >
              Track your order
            </Link>
            <Link
              to={"/shop"}
              className={`${styles.link} ${styles.linkSecondary}`}
            >
              Return to shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
