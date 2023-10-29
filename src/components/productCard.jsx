import React from "react";
import { Button, Card, Popconfirm } from "antd";
import styles from "../assets/css/style.module.css";
import { useNavigate } from "react-router-dom";
import Rating from "./rating";

export default function ProductCard(props) {
  const {wishlist} = props;
  const navigation = useNavigate();
  const text = "Are you sure to delete this task?";
  const description = "Delete the task";
  const confirm = () => {
    alert(2);
  };
  return (
    <Card
      onClick={() => !wishlist ? navigation("/product") : null}
      className={styles["product-card"]}
      hoverable
      bordered
      cover={
        <img
          alt="example"
          src="https://res.cloudinary.com/dvu15ohox/image/upload/v1683003233/aerostreet-1.jpg"
          width={270}
          height={270}
          onClick={() => wishlist ? navigation("/product") : null}
        />
      }
    >
      <div className={styles["product-card-content"]}>
        <p className={styles["product-card-name"]}>
          Aerostreet 36-45 Hoops Low Hitam Putih - Sepatu Sneakers Casual
        </p>
        <p className={styles["product-card-price"]}>Rp 139.000</p>
        <Rating></Rating>
        {wishlist && (
          <Popconfirm
            placement="topRight"
            title={text}
            description={description}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button className={styles["wishlist-delete-button"]} type="primary">
              Delete
            </Button>
          </Popconfirm>
        )}
      </div>
    </Card>
  );
}
