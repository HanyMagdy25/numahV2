"use client";
import React from "react";
import styles from "./TrendingArtists.module.css";
import TopPicksCard from "./TrendingArtistsCard";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const TrendingArtists = ({ data, headTitle }) => {
  return (
    <div className={styles.topPicks}>
      <h3 className={styles.headTitle}>{headTitle}</h3>
      <div className={styles.divSwiper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          className={styles.swiper}
          grid={{
            rows: 1,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 20,
              grid: {
                rows: 2,
              },
            },
            330: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              grid: {
                rows: 2,
              },
            },
            430: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
              },
            },
            576: {
              slidesPerView: 3,
              grid: {
                rows: 2,
              },
            },
            768: {
              slidesPerView: 4,
              grid: {
                rows: 2,
              },
            },
            992: {
              slidesPerView: 5,
              grid: {
                rows: 1,
              },
            },
            1200: {
              slidesPerView: 7,
              grid: {
                rows: 1,
              },
            },
            1400: {
              slidesPerView: 8,
              grid: {
                rows: 1,
              },
            },
            1800: {
              slidesPerView: 9,
              grid: {
                rows: 1,
              },
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
