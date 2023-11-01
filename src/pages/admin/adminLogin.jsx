import React, { useState } from "react";
import { Card, Spin } from "antd";
import { Form } from "../../components/form";
import { authAdmin } from "../../utils/auth";
import { APIAdmin } from "../../apis/APIAdmin";

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (email, password) => {
    setLoading(true);
    return APIAdmin.getAdmin(email).then(function (result) {
      const data = result.filter(
        (data) => data.email === email && data.password === password
      );
      setLoading(false);
      if (data.length) {
        authAdmin.setData(data[0]);
        return true;
      } else {
        return false;
      }
    });
  };

  return (
    <>
      <Spin tip="Loading..." spinning={loading}>
        <Card title="Login" bordered={true} style={style} headStyle={headStyle}>
          <Form onSubmit={onSubmit} path="/admin"></Form>
        </Card>
      </Spin>
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
