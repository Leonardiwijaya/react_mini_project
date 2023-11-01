import React from "react";
import { Button, Card, Popconfirm, message } from "antd";
import styles from "../assets/css/style.module.css";
import { useNavigate } from "react-router-dom";
import Rating from "./rating";
import placeholder from "../assets/img/placeholder.jpg";

export default function ProductCard(props) {
  const [messageApi, contextHolder] = message.useMessage();
  const { wishlist, product} = props;
  const navigation = useNavigate();
  const text = "Are you sure to delete this task?";
  const description = "Delete the task";
  const confirm = () => {
    messageApi.open({
      type: "success",
      content: `Berhasil menghapus ${product?.name} dari wishlist`,
    });
    
    props.onDelete();
  };
  return (
    <>
      {contextHolder}
      <Card
        key={product?.id}
        onClick={() =>
          !wishlist ? navigation(`/product/${product?.id}`) : null
        }
        className={styles["product-card"]}
        hoverable
        bordered
        cover={
          <img
            alt="product"
            src={product?.image ?? placeholder}
            width={270}
            height={270}
            onClick={() => (wishlist ? navigation("/product") : null)}
          />
        }
      >
        <div className={styles["product-card-content"]}>
          <p className={styles["product-card-name"]}>
            {product?.name} - {product?.description}
            {/* Aerostreet 36-45 Hoops Low Hitam Putih - Sepatu Sneakers Casual */}
          </p>
          <p className={styles["product-card-price"]}>
            Rp {product?.price.toLocaleString("id-ID")}
          </p>
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
              <Button
                className={styles["wishlist-delete-button"]}
                type="primary"
              >
                Delete
              </Button>
            </Popconfirm>
          )}
        </div>
      </Card>
    </>
  );
}
