import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../assets/css/style.module.css";
import ProductCard from "../components/productCard";
import { Pagination } from "antd";

export default function ProductList(props) {
  const { header } = props;
  return (
    <>
      <Navbar></Navbar>
      <div className={styles["product-list-container"]}>
        <h4 className={styles["product-list-header"]}>{header ?? "Pria"}</h4>
        <div className={styles["product-list-content"]}>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        <Pagination className={styles["pagination"]} defaultCurrent={1} pageSize={12} total={70} showSizeChanger={false}/>
      </div>
      <Footer></Footer>
    </>
  );
}
