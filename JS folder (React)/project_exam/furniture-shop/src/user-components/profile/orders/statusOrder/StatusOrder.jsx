import styles from "./StatusOrder.module.css";

export default function StatusOrder({ status }) {
  return <span className={`${styles.status} ${styles[status]}`}>{status}</span>;
}
