/* eslint-disable jsx-a11y/anchor-is-valid */
import { Input } from "antd";
import { UserOutlined, HeartOutlined } from "@ant-design/icons";
import styles from "../assets/css/style.module.css";
import { Link } from "react-router-dom";
import Logo from "./logo";

export default function Navbar(props) {
  const { Search } = Input;
  return (
    <>
      <nav className={styles["navbar-container"]}>
        <div className={styles["navbar-content"]}>
          <div className={styles["navbar-menu"]}>
            <Logo to="/"></Logo>
            <div className={styles["navbar-menu-list"]}>
              <Menu>PRIA</Menu>
              <Menu>WANITA</Menu>
              <Menu>ANAK</Menu>
              <Menu>BAYI</Menu>
            </div>
          </div>
          <div className={styles["navbar-icons"]}>
            <Search
              onPressEnter={()=>{alert(2)}}
              placeholder="search"
              style={{
                width: 200,
              }}
            />
            <HeartOutlined className={styles["navbar-icon"]}/>
            <UserOutlined className={styles["navbar-icon"]}/>
          </div>
        </div>
      </nav>
    </>
  );
}

function Menu(props) {
  return (
    <Link className={styles["menu-link"]}>
      <h6>{props.children}</h6>
    </Link>
  );
}
