import styles from "./Pagination.module.css";
export default function Pagination({ statePage, pageChange, lengthPages }) {
  return (
    <div className={styles.pagination}>
      {statePage > 1 && (
        <i
          onClick={() => pageChange("decrement")}
          className="bx bx-first-page"
        ></i>
      )}
      {lengthPages.length > 1 &&
        lengthPages.map((page, index) => (
          <p
            onClick={() => pageChange(page)}
            key={index}
            className={
              statePage === page
                ? `${styles["page-number"]} ${styles.active}`
                : `${styles["page-number"]}`
            }
          >
            {page}
          </p>
        ))}
      {statePage < lengthPages.length && (
        <i
          onClick={() => pageChange("increment")}
          className="bx bx-last-page"
        ></i>
      )}
    </div>
  );
}
