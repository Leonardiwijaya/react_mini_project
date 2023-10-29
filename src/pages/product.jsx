import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../assets/css/style.module.css";
import { Button, Rate } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export default function Product(props) {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles["product-detail-container"]}>
        <div className={styles["product-detail-img-container"]}>
          <img
            className={styles["product-detail-img"]}
            src="https://locco-site.netlify.app/assets/banner-hoodie-c5e0bc48.png"
            alt="product"
          />
        </div>
        <div className={styles["product-detail-content"]}>
          <h4 className={styles["product-detail-name"]}>
            Aerostreet 36-45 Massive Low Hitam - Sepatu Sneakers Casual Sport
            Sekolah Pria Wanita Aero Street 21AA30
          </h4>
          <div className={styles["product-detail-rate"]}>
            <Rate
              className={styles["product-detail-star"]}
              disabled
              defaultValue={5}
            />
            <span className={styles["product-detail-review"]}>(5)</span>
          </div>
          <h4 className={styles["product-detail-price"]}>Rp 199.000</h4>

          <h6>Atur jumlah</h6>
          <div className={styles["stock-container"]}>
            <div className={styles["stock-button"]}>
              <MinusOutlined className={styles["stock-icon"]} />
              <span className={styles["stock-number"]}>1</span>
              <PlusOutlined className={styles["stock-icon"]} />
            </div>
            <div>
              <span>Stok Total: </span>
              <span className={styles["stock-total"]}>Sisa 12</span>
            </div>
          </div>
          <Button
            type="primary"
            htmlType="button"
            className={styles["wishlist-button"]}
          >
            Add to Wishlist
          </Button>
        </div>
      </div>
      <div className={styles["product-details"]}>
        <h6>Deskrispi</h6>
        <p className={styles["product-detail-description"]}>
          Kemeja Anak yang terbuat dari bahan bertekstur lembut dan nyaman.
          Dengan potongan leluasa yang dapat dikenakan sendirinya atau sebagai
          outer layer.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
