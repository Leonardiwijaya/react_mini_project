import React from "react";
import { Card } from "antd";
import styles from "../assets/css/style.module.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigation = useNavigate()
  return (
    <Card
      onClick={()=>navigation('/product')}
      className={styles["product-card"]}
      hoverable
      bordered
      cover={
        <img
          alt="example"
          src="https://res.cloudinary.com/dvu15ohox/image/upload/v1683003233/aerostreet-1.jpg"
        />
      }
    >
      <div>
        <p>
          Aerostreet 36-45 Hoops Low Hitam Putih - Sepatu Sneakers Casual Pria{" "}
        </p>
        <p>Rp 139.000</p>
      </div>
    </Card>
  );
}
