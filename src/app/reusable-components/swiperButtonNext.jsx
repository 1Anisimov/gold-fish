import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="SwiperButtonNext " onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

export default SwiperButtonNext;
