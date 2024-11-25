import React from "react";
import styles from "./RecentlyPlayed.module.css";
import TopPicksCard from "./RecentlyPlayedCard";
import Link from "next/link";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const RecentlyPlayed = ({ data, headTitle }) => {
  return (
    <div className={styles.recentlyPlayed}>
      <h3 className={styles.headTitle}>{headTitle}</h3>

      <div className={styles.divSwiper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <TopPicksCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
