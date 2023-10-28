import styles from "../assets/css/style.module.css"

export default function Banner(props) {
  return (
    <div className={styles["banner"]}>
      <img src={props.src} alt="banner" width="100%" />
    </div>
  );
}
