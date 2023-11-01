import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../assets/css/style.module.css";
import { Button, Spin, message } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Rating from "../components/rating";
import { auth } from "../utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIProduct } from "../apis/APIProduct";
import { APIWishlist } from "../apis/APIWishlist";
import { v4 as uuidv4 } from "uuid";
import img from "../assets/img/placeholder.jpg";

export default function Product(props) {
  const user = auth.isAuthorized()[0];
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    setLoading(true);
    APIProduct.getProduct(id).then(resp => {
        setProduct(resp);
        setLoading(false);      
    });
  }, []);

  const navigation = useNavigate();
  const addWishlist = () => {
    if (!auth.isAuthorized()) {
      navigation("/login");
    } else {
      messageApi.open({
        type: 'success',
        content: `Berhasil menambahkan ${product.name} ke wishlist`,
      });
      
      const data = {
        id: uuidv4(),
        product_id: product?.id,
        user_id: user.uuid,
        name: product.id,
        description: product.description,
        price: product.price,
        image: product.image,
      }
      APIWishlist.addWishlist(data);
    }
  };

  return (
    <Spin tip="Loading..." spinning={loading}>
      {contextHolder}
      <Navbar></Navbar>
      <div className={styles["product-detail-container"]}>
        <div className={styles["product-detail-img-container"]}>
          <img
            className={styles["product-detail-img"]}
            src={product?.img ?? img}
            alt="product"
          />
        </div>
        <div className={styles["product-detail-content"]}>
          <h4 className={styles["product-detail-name"]}>
            {product?.name} - {product?.description}
          </h4>
          <Rating></Rating>
          <h4 className={styles["product-detail-price"]}>
            Rp {product?.price?.toLocaleString("id-ID")}
          </h4>

          <h6>Atur jumlah</h6>
          <div className={styles["stock-container"]}>
            <div className={styles["stock-button"]}>
              <MinusOutlined className={styles["stock-icon"]} />
              <span className={styles["stock-number"]}>1</span>
              <PlusOutlined className={styles["stock-icon"]} />
            </div>
            <div>
              <span>Stok Total: </span>
              <span className={styles["stock-total"]}>Sisa {product?.stock}</span>
            </div>
          </div>
          <Button
            type="primary"
            htmlType="button"
            className={styles["wishlist-button"]}
            onClick={() => addWishlist()}
          >
            Add to Wishlist
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </Spin>
  );
}
