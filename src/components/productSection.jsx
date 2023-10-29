import ProductCard from "./productCard";
import styles from "../assets/css/style.module.css"

export default function ProductSection(props) {
    const {header} = props;
    return (<>
    <div className={styles["product-container"]}>
        <h4 className={styles["product-header"]}>{header}</h4>
        <div className={styles["product-content"]}>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    </div>
    </>)
}