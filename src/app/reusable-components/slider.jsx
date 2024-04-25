import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import image from '../image/tavlei-stena-cshitov.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { getProductById } from '../../API/FakeAPI';

export default function Slider({ productId }) {
  const product = getProductById(productId);
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-size': '21px',
          '--swiper-theme-color': 'black'
        }}
        // direction={'vertical'}
        navigation={true}
        modules={[Navigation]}
        slidesPerView="auto"
        className="my_swiper"
        onSlideChange={() => console.log('change')}>
        <SwiperSlide className="my_swiper_slide">
          <div className="my_swiper_slide_w100">
            <div className="my_swiper_slide_container">
              <img src={product.img} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my_swiper_slide">
          <div className="my_swiper_slide_w100">
            <div className="my_swiper_slide_container">
              <img src={image} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my_swiper_slide">
          <div className="my_swiper_slide_w100">
            <div className="my_swiper_slide_container">
              <img src={image} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my_swiper_slide">
          <div className="my_swiper_slide_w100">
            <div className="my_swiper_slide_container">
              <img src={image} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
