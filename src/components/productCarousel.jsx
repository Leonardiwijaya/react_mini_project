/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "antd";
import styles from "../assets/css/style.module.css"

export default function ProductCarousel(props) {
  return (
    <Carousel className={styles["carousel"]} autoplay>
      <div>
        <img src="https://locco-site.netlify.app/assets/carousel-1-21db1958.jpg" className={styles["carousel-img"]} />
      </div>
      <div>
        <img src="https://locco-site.netlify.app/assets/carousel-2-efd83b8b.jpg" className={styles["carousel-img"]} />
      </div>
      <div>
        <img src="https://locco-site.netlify.app/assets/carousel-3-b26db556.png" className={styles["carousel-img"]} />
      </div>
    </Carousel>
  );
}
