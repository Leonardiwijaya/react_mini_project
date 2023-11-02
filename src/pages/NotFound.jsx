import { Button } from "antd";
import { Link } from "react-router-dom";
import img from "../assets/img/404.jpg";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <img style={{ height: "80%", width: "60%" }} src={img} alt="404" />
      <Link to="/">
        <Button type="primary" htmlType="button">
          Back To Home
        </Button>
      </Link>
    </div>
  );
}
