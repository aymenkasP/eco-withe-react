import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'

import "./styles.css";
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';

  SwiperCore.use([Pagination,Navigation]);


export default function ProductsList() {
    return (
        <>
                    <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                    }} navigation={true} className="mySwiper swiper">
                    <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
        </>
    )
}

