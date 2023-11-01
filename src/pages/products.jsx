import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../assets/css/style.module.css";
import ProductCard from "../components/productCard";
import { Pagination, Spin } from "antd";
import { useParams } from "react-router-dom";
import { APIProduct } from "../apis/APIProduct";
import { useEffect, useState } from "react";
import noData from "../assets/img/no-data.jpg";

export default function Products(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  let { name } = useParams();
  useEffect(() => {
    setLoading(true);
    APIProduct.getProductsByCategory(name).then((resp) => {
      setData(resp);
      setEmpty(!resp.length);
      setLoading(false);
    });
  }, [name]);

  return (
    <Spin tip="Loading..." spinning={loading}>
      <Navbar></Navbar>
      <div className={styles["product-list-container"]}>
        <h4 className={styles["product-list-header"]}>{name.toUpperCase()}</h4>
        <div className={styles["product-list-content"]}>
          {data.map((product) => {
            return <ProductCard product={product}></ProductCard>;
          })}
        </div>
        {data?.length ? (
          <Pagination
            className={styles["pagination"]}
            defaultCurrent={1}
            pageSize={12}
            total={data?.length}
            showSizeChanger={false}
          />
        ) : null}
        {empty && (
          <img
            width="50%"
            src={noData}
            style={{ display: "block", margin: "auto" }}
            alt="empty"
          ></img>
        )}
      </div>
      <Footer></Footer>
    </Spin>
  );
}
