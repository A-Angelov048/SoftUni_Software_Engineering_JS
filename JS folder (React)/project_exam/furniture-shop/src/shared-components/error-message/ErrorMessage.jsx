import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ newMessage = {} }) {
  return (
    <>
      {newMessage.hasOwnProperty("text") ? (
        <div
          key={newMessage.key}
          className={
            newMessage.status
              ? `${styles["error-container"]} ${styles.success} ${styles["new-align"]} ${styles["disappear-text"]}`
              : `${styles["error-container"]}  ${styles["new-align"]} ${styles["disappear-text"]}`
          }
        >
          {newMessage.status ? (
            <i className={`bx bx-check bx-tada ${styles.successful}`} />
          ) : (
            <i
              className={`bx bxs-error-circle bx-tada ${styles.unsuccessful}`}
            />
          )}
          <p
            className={
              newMessage.status
                ? `${styles.success} ${styles["bigger-font"]}`
                : `${styles.error} ${styles["bigger-font"]}`
            }
          >
            {newMessage.text}
          </p>
        </div>
      ) : (
        <div className={styles["error-container"]}>
          <i
            className={`bx bxs-error-circle bx-tada ${styles.unsuccessful}`}
          ></i>
          <p className={styles.error}>{newMessage.read}</p>
        </div>
      )}
    </>
  );
}
