import styles from "../assets/css/style.module.css";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";

export default function SideBar(props) {
  const { onClick, content } = props;
  return (
    <div className={styles["sideBar"]}>
      <ul className={styles["list-menu"]}>
        <li
          className={styles[content.product ? "menu-item-active" : "menu-item"]}
          onClick={() => onClick("product")}
        >
          <ShoppingOutlined />
          <span className={styles["menu-title"]}>Product</span>
        </li>
        <li
          className={styles[content.account ? "menu-item-active" : "menu-item"]}
          onClick={() => onClick("account")}
        >
          <UserOutlined />
          <span className={styles["menu-title"]}>Account</span>
        </li>
      </ul>
    </div>
  );
}
