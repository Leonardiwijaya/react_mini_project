import React from "react";
import { Button, Form, Input } from "antd";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../assets/css/style.module.css";
import img from "../assets/img/login.jpg";
import { Card } from "antd";
import { FormInput } from "../components/form";
import { Link, useNavigate } from "react-router-dom";
import { APIUser } from "../apis/APIUser";
import { v4 as uuidv4 } from "uuid";

export default function Register(props) {
  const navigation = useNavigate()
  const signUp = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {
      uuid: uuidv4(),
      name: null,
      email: null,
      password: null,
    };

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    APIUser.addUser(data);
    navigation('/login');
  };
  const titleStyle = {
    fontWeight: "700",
    fontSize: "18px",
  };
  return (
    <>
      <Navbar hide={true}></Navbar>
      <div className={styles["login-register-container"]}>
        <div className={styles["login-register-img-container"]}>
          <img src={img} alt="img" className={styles["login-register-img"]} />
        </div>
        <div className={styles["login-register-card-box"]}>
          <Card
            title="Create Account"
            headStyle={titleStyle}
            className={styles["login-register-card"]}
          >
            <form onSubmit={signUp} className={styles["form-container"]}>
              <FormInput label="Name" name="name"></FormInput>
              <FormInput label="Email" name="email"></FormInput>
              <FormInput
                label="Password"
                type="password"
                name="password"
              ></FormInput>
              <button className={styles["form-button"]} htmltype="submit">
                Create Account
              </button>
              <div className={styles["login-register-link-container"]}>
                <span className={styles["login-register-text"]}>Already Have An Account?</span>
                <Link to="/login" className={styles["login-register-link"]}>Login</Link>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
