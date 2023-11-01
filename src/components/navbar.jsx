/* eslint-disable jsx-a11y/anchor-is-valid */
import { Input, Popover } from "antd";
import { UserOutlined, HeartOutlined, LogoutOutlined } from "@ant-design/icons";
import styles from "../assets/css/style.module.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./logo";
import { auth } from "../utils/auth";

export default function Navbar(props) {
  const { hide } = props;
  const navigation = useNavigate();
  const { Search } = Input;
  const user = auth.isAuthorized();
  const content = (
    <div>
      <div
        className={styles["popup-icon"]}
        onClick={() => navigation("/wishlist")}
      >
        <HeartOutlined style={{ color: "red" }} />
        <span>Wishlist</span>
      </div>
      <div className={styles["popup-icon"]} onClick={() => auth.logout()}>
        <LogoutOutlined style={{ color: "green" }} />
        <span>Logout</span>
      </div>
    </div>
  );
  return (
    <>
      <nav className={styles["navbar-container"]}>
        <div className={styles["navbar-content"]}>
          <div className={styles["navbar-menu"]}>
            <Logo to="/"></Logo>
            {!hide && (
              <div className={styles["navbar-menu-list"]}>
                <Menu to="/Products/pria">PRIA</Menu>
                <Menu to="/Products/wanita">WANITA</Menu>
                <Menu to="/Products/anak">ANAK</Menu>
                <Menu to="/Products/bayi">BAYI</Menu>
              </div>
            )}
          </div>
          {!hide && (
            <div className={styles["navbar-icons"]}>
              <Search
                onPressEnter={() => {
                  alert(2);
                }}
                placeholder="search"
                style={{
                  width: 200,
                }}
              />

              {user ? (
                <Popover
                  placement="bottomRight"
                  title={`Hi, ${user.name ?? "leo"}`}
                  content={content}
                  trigger="click"
                >
                  <div className={styles["profile"]}>
                    <UserOutlined className={styles["navbar-icon"]} />
                  </div>
                </Popover>
              ) : (
                <button
                  className={styles["login-button"]}
                  htmltype="button"
                  onClick={() => navigation("/login")}
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

function Menu(props) {
  return (
    <Link to={props.to} className={styles["menu-link"]}>
      <h6>{props.children}</h6>
    </Link>
  );
}
