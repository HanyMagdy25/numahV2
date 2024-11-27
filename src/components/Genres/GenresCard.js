import React from "react";
import Image from "next/image";
import styles from "./GenresCard.module.css";
import Link from "next/link";

const GenresCard = ({ item }) => {
  return (
    <Link href="/" className={styles.genresCard}>
      <Image
        src={item.image}
        alt="img1"
        width={180}
        height={180}
        className={styles.img}
      />
      <div className={styles.content}>
        <div className={styles.bg} />
        <h3 className={styles.title}>{item.genre}</h3>
      </div>
      <h3 className={styles.titleMobile}>{item.genre}</h3>
    </Link>
  );
};

export default GenresCard;
