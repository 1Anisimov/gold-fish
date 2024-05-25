import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Images
import vectorLeft from '../image/main_page_vector_left.png';
import vectorRight from '../image/main_page_vector_right.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Card from './card';

const SliderProducts = ({ products }) => {
  const [swiperRef, setSwiperRef] = useState({});

  const prev = () => {
    swiperRef.slidePrev();
  };

  const next = () => {
    swiperRef.slideNext();
  };

  return (
    <>
      <div className="slider_mainContainer_products">
        <div className="slider_container_products">
          <Swiper
            onInit={(ev) => {
              setSwiperRef(ev);
            }}
            loop={true}
            slidesPerView={4}
            spaceBetween={0}
            navigation={false}
            modules={[Navigation]}
            className="products_swiper">
            {products &&
              products.map((product) => (
                <SwiperSlide key={product.id} className="swiper_slide_block">
                  <div className="swiper_slide_255px">
                    <Card product={product} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <button onClick={() => prev()} className="products_slider_prev">
            <img src={vectorLeft} alt="" />
          </button>
          <button onClick={() => next()} className="products_slider_next">
            <img src={vectorRight} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderProducts;
