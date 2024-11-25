"use client";
import React from "react";
import styles from "./TrendingArtists.module.css";
import TopPicksCard from "./TrendingArtistsCard";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TrendingArtists = ({ data, headTitle }) => {
  return (
    <div className={styles.topPicks}>
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
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 7,
            },
            1400: {
              slidesPerView: 8,
            },
            1800: {
              slidesPerView: 9,
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

export default TrendingArtists;
