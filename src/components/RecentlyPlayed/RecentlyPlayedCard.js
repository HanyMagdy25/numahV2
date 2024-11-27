import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./RecentlyPlayedCard.module.css";
import OptionsIcon from "@/src/assets/recently/settingsOptions.svg";
const RecentlyPlayedCard = ({ item }) => {
  return (
    <div className={styles.recentlyPlayedCard}>
      <Link href="/" className={styles.content}>
        <Image
          src={item.image}
          alt="img1"
          width={66}
          height={66}
          className={styles.img}
        />

        <div>
          <h3 className={styles.title}>{item.title}</h3>
          <h4 className={styles.artist}>{item.artist}</h4>
        </div>
      </Link>

      <button type="button" className={styles.settings}>
        <OptionsIcon />
      </button>
    </div>
  );
};

export default RecentlyPlayedCard;
