import { Link } from "react-router-dom";
import styles from "./DetailsOrder.module.css";
export default function DetailsOrder() {
  return (
    <section className="layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Order history</h2>
        </div>

        <div className={styles.subtext}>
          <p>Check the status of recent orders and download invoices.</p>
        </div>

        <div className="layout-padding2">
          <div className={styles.summary}>
            <div>
              <span>Date placed</span>
              <span>January 22, 2021</span>
            </div>
            <div>
              <span>Order number</span>
              <span>WU88191111</span>
            </div>
            <div>
              <span>Total amount</span>
              <span>$238.00</span>
            </div>
            <button className={styles.invoice}>View Invoice</button>
          </div>

          <table>
            <thead className={styles.hide}>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Status</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((current) => (
                <tr key={current}>
                  <td>
                    <div className={styles["product-info"]}>
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/027/572/532/original/lamp-lamp-table-lamp-transparent-background-ai-generative-free-png.png"
                        alt="Product"
                      />
                      Machined Pen and Pencil Set
                    </div>
                  </td>
                  <td>$70.00</td>
                  <td className={styles["delivery-date"]}>
                    Delivered Jan 25, 2021
                  </td>
                  <td>
                    <Link className={styles["view-link"]}>
                      View <span className={styles.hide}>Product</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
