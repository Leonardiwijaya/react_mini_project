import React from "react";
import { Card} from "antd";
import { Form} from "../../components/form";
import { axiosInstance } from "../../configs/axiosInstance";

export default function Login() {
  const onSubmit = async (email, password) => {
    const result = await axiosInstance.get(`admin/?email=${email}`);
    const data = result.data.filter((data) => data.email === email && data.password === password); 
    if (data.length) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Card title="Login" bordered={true} style={style} headStyle={headStyle}>
        <Form onSubmit={onSubmit} path={"dashboard"}></Form>
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
  color: "white" 
};
