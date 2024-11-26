import React from "react";
import styles from "./ArtistsLoopSwiper.module.css";
import ArtistsLoopSwiperCard from "./ArtistsLoopSwiperCard";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const ArtistsLoopSwiper = ({ data }) => {
  return (
    <div className={styles.topPicks}>
      <div className={styles.divSwiper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          className={styles.swiper}
          loop={true}
          modules={[Pagination, Autoplay, FreeMode]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={12000}
          navigation={false}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            330: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            430: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <ArtistsLoopSwiperCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ArtistsLoopSwiper;
