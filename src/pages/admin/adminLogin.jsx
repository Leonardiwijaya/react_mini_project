import React, { useState } from "react";
import { Card } from "antd";
import { Form } from "../../components/form";
import { authAdmin } from "../../utils/auth";
import { APIAdmin } from "../../apis/APIAdmin";

export default function AdminLogin() {
  const [result, setResult] = useState([]);
  const onSubmit = (email, password) => {
    APIAdmin.getAdmin(email).then(setResult);
    const data = result.filter(
      (data) => data.email === email && data.password === password
    );
    if (data.length) {
      authAdmin.setData(data[0]);
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Card title="Login" bordered={true} style={style} headStyle={headStyle}>
        <Form onSubmit={onSubmit} path="/admin"></Form>
      </Card>
    </>
  );
}

const style = {
  width: 400,
  margin: "50px auto",
  border: "0.5px solid #c5c5c5",
};
const headStyle = {
  background: "#1677ff",
  color: "white",
};
