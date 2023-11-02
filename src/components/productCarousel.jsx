/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "antd";
import styles from "../assets/css/style.module.css"
import carousel1 from "../assets/img/carousel-1.jpg"
import carousel2 from "../assets/img/carousel-2.jpg"
import carousel3 from "../assets/img/carousel-3.png"

export default function ProductCarousel(props) {
  return (
    <Carousel className={styles["carousel"]} autoplay>
      <div>
        <img src={carousel1} className={styles["carousel-img"]} />
      </div>
      <div>
        <img src={carousel2} className={styles["carousel-img"]} />
      </div>
      <div>
        <img src={carousel3} className={styles["carousel-img"]} />
      </div>
    </Carousel>
  );
}
