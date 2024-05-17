import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { getSliderPageIndex, setSliderPageIndex } from '../store/productPage';
import imgPrev from '../image/icons/arrow_prev_gorisantal.png';
import imgNext from '../image/icons/arrow_next_gorisantal.png';

export default function Slider({ allImages }) {
  const dispatch = useDispatch();
  const [swiperRef, setSwiperRef] = useState({});

  const sliderActiveIndex = useSelector(getSliderPageIndex());

  useEffect(() => {
    if (swiperRef?.slideTo) {
      swiperRef.slideTo(sliderActiveIndex, 1000, false);
    }
  }, [swiperRef, sliderActiveIndex]);

  const prev = () => {
    swiperRef.slidePrev();
    dispatch(setSliderPageIndex(swiperRef.activeIndex));
  };

  const next = () => {
    swiperRef.slideNext();
    dispatch(setSliderPageIndex(swiperRef.activeIndex));
  };

  return (
    <>
      <div className="relative">
        <div className="goris_slider_container">
          <Swiper
            style={{
              '--swiper-navigation-size': '21px',
              '--swiper-theme-color': 'black'
            }}
            onInit={(ev) => {
              setSwiperRef(ev);
            }}
            navigation={false}
            modules={[Navigation]}
            slidesPerView="auto"
            className="my_swiper">
            {allImages &&
              allImages.map((image, index) => (
                <SwiperSlide className="my_swiper_slide">
                  <div className="my_swiper_slide_w100">
                    <div className="my_swiper_slide_container">
                      <img id={index} src={image} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <button onClick={() => prev()} className="gorisantal_prev">
            <img src={imgPrev} alt="" />
          </button>
          <button onClick={() => next()} className="gorisantal_next">
            <img src={imgNext} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
