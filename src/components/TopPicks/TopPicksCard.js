import React from "react";
import styles from "./TopPicksCard.module.css";
import Image from "next/image";
import Link from "next/link";

const TopPicksCard = ({ item }) => {
  return (
    <Link href="/" className={styles.topPicksCard}>
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
    </Link>
  );
};

export default TopPicksCard;
