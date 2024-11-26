"use client";
import React from "react";
import styles from "./TopPicks.module.css";
import TopPicksCard from "./TopPicksCard";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopPicks = ({ data, headTitle }) => {
  return (
    <div className={styles.topPicks}>
      <h3 className={styles.headTitle}>{headTitle}</h3>
      <div className={styles.divSwiper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            410: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 2.5,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3.5,
            },
            820: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 6,
            },
            1800: {
              slidesPerView: 7,
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

export default TopPicks;
