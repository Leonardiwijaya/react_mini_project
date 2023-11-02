import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../assets/css/style.module.css";
import img from "../assets/img/login.jpg";
import { Card, Spin } from "antd";
import { ErrorMessage, FormInput } from "../components/form";
import { Link, useNavigate } from "react-router-dom";
import { APIUser } from "../apis/APIUser";
import { auth } from "../utils/auth";

export default function Login(props) {
  const navigation = useNavigate();
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let user = {
      email: null,
      password: null,
    };

    for (let [key, value] of formData.entries()) {
      user[key] = value;
    }

    APIUser.getUser(user.email).then(function (result) {
      const data = result.filter(
        (data) => data.email === user.email && data.password === user.password
      );
      if (data.length) {
        auth.setData(data);
        navigation("/");
        setInvalid(false);
      } else {
        setInvalid(true);
      }
      setLoading(false);
    });
  };
  const titleStyle = {
    fontWeight: "700",
    fontSize: "18px",
  };
  return (
    <>
      <Spin tip="Loading..." spinning={loading}>
        <Navbar hide={true}></Navbar>
        <div className={styles["login-register-container"]}>
          <div className={styles["login-register-img-container"]}>
            <img src={img} alt="img" className={styles["login-register-img"]} />
          </div>
          <div className={styles["login-register-card-box"]}>
            <Card
              title="Welcome to Fuku"
              headStyle={titleStyle}
              className={styles["login-register-card"]}
            >
              <form onSubmit={signIn} className={styles["form-container"]}>
                <FormInput label="Email" name="email"></FormInput>
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                ></FormInput>
                {invalid && (
                  <ErrorMessage>Invalid Email or Password!</ErrorMessage>
                )}
                <button className={styles["form-button"]} htmltype="submit">
                  Login
                </button>
                <div className={styles["login-register-link-container"]}>
                  <span className={styles["login-register-text"]}>
                    Don't Have An Account?
                  </span>
                  <Link
                    to="/register"
                    className={styles["login-register-link"]}
                  >
                    Create Account
                  </Link>
                </div>
              </form>
            </Card>
          </div>
        </div>
        <Footer></Footer>
      </Spin>
    </>
  );
}
