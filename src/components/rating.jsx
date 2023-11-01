import { Rate } from "antd";
import styles from "../assets/css/style.module.css";

export default function Rating(props) {
  return (
    <div className={styles["product-detail-rate"]}>
      <Rate
        className={styles["product-detail-star"]}
        disabled
        defaultValue={(Math.random() * 6)+3}
      />
      <span className={styles["product-detail-review"]}>({Math.floor(Math.random() * 51)+3})</span>
    </div>
  );
}
