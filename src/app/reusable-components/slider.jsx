import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider({ allImages, currentIndex }) {
  const [swiperRef, setSwiperRef] = useState({});

  useEffect(() => {
    if (swiperRef?.slideTo) {
      swiperRef.slideTo(currentIndex, 1000, false);
    }
  }, [swiperRef, currentIndex]);

  // if (currentIndex && currentIndex !== swiperRef.activeIndex) {
  //   swiperRef.slideTo(currentIndex, 1000, false);
  // }

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-size': '21px',
          '--swiper-theme-color': 'black'
        }}
        onInit={(ev) => {
          setSwiperRef(ev);
        }}
        navigation={true}
        modules={[Navigation]}
        slidesPerView="auto"
        className="my_swiper">
        {allImages &&
          allImages.map((image) => (
            <SwiperSlide className="my_swiper_slide">
              <div className="my_swiper_slide_w100">
                <div className="my_swiper_slide_container">
                  <img src={image} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
