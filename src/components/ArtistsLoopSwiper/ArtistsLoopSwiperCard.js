import React from "react";
import styles from "./ArtistsLoopSwiperCard.module.css";
import Image from "next/image";

const ArtistsLoopSwiperCard = ({ item }) => {
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
      </div>
    </div>
  );
};

export default ArtistsLoopSwiperCard;
