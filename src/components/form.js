import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

export function Form(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [invalid, setInvalid] = useState(false);
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    if (!pattern.test(email)) {
      setEmailInvalid(true);
    } else{
      setEmailInvalid(false);
      const validation = await props.onSubmit(email, password);
      setInvalid(!validation)
      if (validation) {
        navigate(props.path)
      }
    }
  }
  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password])
  const field = {
    marginBottom: "10px",
  };
  const button = {
    display: "block",
    margin: "auto",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={field}>
        <Label for="email">Email</Label>
        <Input
          id="email"
          placeholder="Email"
          onChange={function (e) {
            setEmail(e.target.value);
          }}
        />
        {emailInvalid && (
          <ErrorMessage>Masukan Format Email Yang Benar</ErrorMessage>
        )}
      </div>

      <p>{emailInvalid}</p>
      <div style={field}>
        <Label for="password">Password</Label>
        <Input.Password
          id="password"
          placeholder="input password"
          onChange={function (e) {
            setPassword(e.target.value);
          }}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
        {invalid && <ErrorMessage>Invalid Email or Password!</ErrorMessage>}
      </div>
      <Button
        type="primary"
        htmlType="submit"
        style={button}
        disabled={disabled}
      >
        Login
      </Button>
    </form>
  );
}

export function Label(props) {
  const style = {
    fontWeight: 600,
    marginBottom: "10px",
  };
  return (
    <label htmlFor={props.for} style={style}>
      {props.children}
    </label>
  );
}

export function ErrorMessage(props) {
  const style = {
    color: "red",
  };
  return <p style={style}>{props.children}</p>;
}
