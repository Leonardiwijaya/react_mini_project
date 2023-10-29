import { Rate } from "antd";
import styles from "../assets/css/style.module.css";

export default function Rating(props) {
  return (
    <div className={styles["product-detail-rate"]}>
      <Rate
        className={styles["product-detail-star"]}
        disabled
        defaultValue={5}
      />
      <span className={styles["product-detail-review"]}>(5)</span>
    </div>
  );
}
