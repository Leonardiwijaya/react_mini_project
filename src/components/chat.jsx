import { MessageOutlined } from "@ant-design/icons";
import styles from "../assets/css/style.module.css";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";

export default function Chat() {
    const navigation = useNavigate();
  return (
    <Popover
      placement="topRight"
      title={"Have a question? chat now!"}
      style={{width: "100px"}}
    >
      <div className={styles["floating-chat-box-container"]} onClick={()=>{navigation('/chat')}}>
        <MessageOutlined style={{ color: "white" }} />
      </div>
    </Popover>
  );
}
