/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Input } from "antd";
import { UserOutlined, HeartOutlined } from "@ant-design/icons";
import styles from "../assets/css/style.module.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { Search } = Input;
  return (
    <>
      <nav className={styles["navbar-container"]}>
        <div className={styles["navbar-content"]}>
          <div className={styles["navbar-menu"]}>
            <Link>
            <img></img>
            <h4>Fuku</h4>
            </Link>
            <a>Pria</a>
            <a>Wanita</a>
            <a>Anak</a>
            <a>Bayi</a>
          </div>
          <div className={styles["navbar-icons"]}>
            <Search
              placeholder="input search text"
              style={{
                width: 200,
              }}
            />
            <HeartOutlined />
            <UserOutlined />
          </div>
        </div>
      </nav>
    </>
  );
}
