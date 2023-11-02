import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../assets/css/style.module.css";
import ProductCard from "../components/productCard";
import { Pagination, Spin } from "antd";
import { auth } from "../utils/auth";
import { useEffect, useState } from "react";
import { APIWishlist } from "../apis/APIWishlist";
import emptyWishlist from "../assets/img/empty-wishlist.png";

export default function Wishlist(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const user = auth.isAuthorized()[0];
  useEffect(() => {
    setLoading(true);
    APIWishlist.getWishlists(user.uuid).then(resp => {
      setData(resp);
      setEmpty(!resp.length);
      setLoading(false);
    });
  }, []);

  const deleteWishlist = (id) => {
    APIWishlist.deleteWishlist(id);
    APIWishlist.getWishlists(user.uuid).then(setData);
    APIWishlist.getWishlists(user.uuid).then(resp => {
      setData(resp);
      setEmpty(!resp.length);
    });
  };
  return (
    <Spin tip="Loading..." spinning={loading}>
      <Navbar></Navbar>
      <div className={styles["product-list-container"]}>
        <h4 className={styles["product-list-header"]}>Wishlist</h4>
        <div className={styles["product-list-content"]}>
          {data.map((wishlist) => {
            return (
              <ProductCard
                wishlist={true}
                product={wishlist}
                onDelete={() => deleteWishlist(wishlist.id)}
              ></ProductCard>
            );
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
        {
          empty && <img src={emptyWishlist} style={{display: "block", margin: "auto"}} alt="empty"></img>
        }
      </div>
      
      <Footer></Footer>
    </Spin>
  );
}
