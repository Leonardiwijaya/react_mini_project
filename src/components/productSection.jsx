import ProductCard from "./productCard";
import styles from "../assets/css/style.module.css";
import { APIProduct } from "../apis/APIProduct";
import { useEffect, useState } from "react";

export default function ProductSection(props) {
  const { header } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    APIProduct.getProducts().then((resp) => {
      let arr = [];
      for (let i = 0; i < 4; i++) {
        const random = Math.floor(Math.random() * resp.length);
        arr = [...arr, resp[random]];
      }
      setData(arr);
    });
  }, []);
  return (
    <>
      <div className={styles["product-container"]}>
        <h4 className={styles["product-header"]}>{header}</h4>
        <div className={styles["product-content"]}>
          {data.map((product) => {
            return <ProductCard product={product}></ProductCard>;
          })}
        </div>
      </div>
    </>
  );
}
