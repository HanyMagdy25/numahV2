import React from "react";
import Image from "next/image";
import styles from "./GenresCard.module.css";

const GenresCard = ({ item }) => {
  return (
    <div className={styles.genresCard}>
      <Image
        src={item.image}
        alt="img1"
        width={180}
        height={180}
        className={styles.img}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>{item.genre}</h3>
        </div>
      </div>
    </div>
  );
};

export default GenresCard;
