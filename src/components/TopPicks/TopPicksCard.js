import React from "react";
import styles from "./TopPicksCard.module.css";
import img1 from "../../assets/image 1.png";
import Image from "next/image";

const TopPicksCard = ({ item }) => {
  return (
    <div className={styles.topPicksCard}>
      <Image
        src={item?.image}
        alt="img1"
        width={180}
        height={180}
        className={styles.img}
      />
      <div>
        <h3 className={styles.title}>{item?.title}</h3>
        <h4 className={styles.artist}>{item?.artist}</h4>
      </div>
    </div>
  );
};

export default TopPicksCard;
