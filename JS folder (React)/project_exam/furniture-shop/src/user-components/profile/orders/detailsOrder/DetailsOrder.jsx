import styles from "./DetailsOrder.module.css";
import { Link, useParams } from "react-router-dom";
import { useEditOrder, useGetOrder } from "../../../../hooks/useOrderResponse";
import { convertDate2 } from "../../../../utils/convertDate";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { ErrorContext } from "../../../../context/ErrorContext";
import StatusOrder from "../statusOrder/StatusOrder";
import ErrorMessage from "../../../../shared-components/error-message/ErrorMessage";

export default function DetailsOrder() {
  const { role } = useContext(AuthContext);
  const { message } = useContext(ErrorContext);
  const { orderId } = useParams();
  const order = useGetOrder(orderId);
  const editOrder = useEditOrder(orderId);

  return (
    <section className="layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Order history</h2>
        </div>

        <div className={styles.subtext}>
          <p>Check the status of recent orders and download invoices.</p>
        </div>

        {message.text !== "" && <ErrorMessage newMessage={message} />}

        <div className="layout-padding2">
          <div className={styles.summary}>
            <div>
              <span>Date placed</span>
              <span>{convertDate2(order.createdAt)}</span>
            </div>
            <div>
              <span>Order number</span>
              <span>{order.orderIdClient}</span>
            </div>
            <div>
              <span>Total amount</span>
              <span>{`$${(
                order.furniturePrice * 1.2 +
                order.shippingPrice
              ).toFixed(2)}`}</span>
            </div>
            {role === "Admin" && order.status === "pre-order" && (
              <button
                onClick={() => editOrder({ status: "in-transit" })}
                className={styles.btn}
              >
                Send order
              </button>
            )}
            {role === "User" && order.status === "in-transit" && (
              <button
                onClick={() =>
                  editOrder({ status: "confirmed", delivered: Date.now() })
                }
                className={styles.btn}
              >
                Confirm order
              </button>
            )}
            {role === "User" && order.status === "confirmed" && (
              <button className={styles.btn}>View Invoice</button>
            )}
          </div>

          <table>
            <thead className={styles.hide}>
              <tr>
                <th className={styles.left}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {order.furniture?.map((current) => (
                <tr key={current._id}>
                  <td className={styles.left}>
                    <div className={styles["product-info"]}>
                      <img src={current.imageUrl[0]} alt="Product" />
                      {current.name}
                    </div>
                  </td>
                  <td>{`$${current.price}`}</td>
                  <td>{current.quantity}</td>
                  <td className={styles["delivery-date"]}>
                    <StatusOrder status={order.status.toLowerCase()} />
                  </td>
                  <td>
                    <Link
                      to={`/details-furniture/${current._id}`}
                      className={styles["view-link"]}
                    >
                      View <span className={styles.hide}>Product</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.delivered}>
            <span>Total amount includes furniture, shipping and vat.</span>
            {order.delivered && (
              <span>{`Delivered ${convertDate2(order.delivered)}`}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
