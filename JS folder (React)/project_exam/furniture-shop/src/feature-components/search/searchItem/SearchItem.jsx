import styles from "./SearchItem.module.css";
import { Link } from "react-router-dom";

export default function SearchItem({ item }) {
  return (
    <Link
      to={`/details-furniture/${item._id}`}
      className={styles["search-box"]}
    >
      <div className={styles["img-box-search"]}>
        <img src={item.imageUrl[0]} />
      </div>
      <div className={styles["info-search"]}>
        <p>{item.name}</p>
      </div>
    </Link>
  );
}
