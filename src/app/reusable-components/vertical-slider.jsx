import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Images
import vectorTop from '../image/catalog_page_vertial_top.png';
import vectorBottom from '../image/catalog_page_vertial_bottom.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function VerticalSlider({ allImages, setCurrentIndex }) {
  const [swiperRef, setSwiperRef] = useState({});

  const prev = () => {
    swiperRef.slidePrev();
  };

  const next = () => {
    swiperRef.slideNext();
  };
  const clickOnImage = ({ target }) => {
    swiperRef.activeIndex = Number(target.id);
    setCurrentIndex(swiperRef.activeIndex);
  };

  return (
    <>
      <div className="vertical_slider_mainContainer">
        <div className="vertical_slider_container">
          <Swiper
            direction={'vertical'}
            VerticalClass="swiper-pagination-vertical"
            onInit={(ev) => {
              setSwiperRef(ev);
            }}
            slidesPerView={3}
            spaceBetween={10}
            navigation={false}
            modules={[Navigation]}
            className="vertical_swiper">
            {allImages &&
              allImages.map((image, index) => (
                <SwiperSlide className="swiper_slide_block">
                  <div className="swiper_slide_100px">
                    <div
                      className={
                        swiperRef.activeIndex === index
                          ? 'swiper_slide_85px_active'
                          : 'swiper_slide_85px'
                      }>
                      <img id={index} onClick={clickOnImage} src={image} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <button onClick={() => prev()} className="vertical_prev">
            <img src={vectorTop} alt="" />
          </button>
          <button onClick={() => next()} className="vertical_next">
            <img src={vectorBottom} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
