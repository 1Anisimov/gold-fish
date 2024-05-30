import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getSliderPageIndex, setSliderPageIndex } from '../store/productPage';

export default function VerticalSlider({ product }) {
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
  };

  const next = () => {
    swiperRef.slideNext();
  };
  const clickOnImage = ({ target }) => {
    swiperRef.activeIndex = Number(target.id);
    dispatch(setSliderPageIndex(swiperRef.activeIndex));
  };

  return (
    <>
      {product?.allImg && product?.allImg.length > 0 ? (
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
              {product?.allImg &&
                product?.allImg.map((image, index) => (
                  <SwiperSlide className="swiper_slide_block">
                    <div className="swiper_slide_100px">
                      <div
                        className={
                          sliderActiveIndex === index
                            ? 'swiper_slide_85px_active'
                            : 'swiper_slide_85px'
                        }>
                        <img id={index} onClick={clickOnImage} src={image} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            {product?.allImg && product?.allImg.length > 3 ? (
              <>
                <button onClick={() => prev()} className="vertical_prev">
                  <img src={vectorTop} alt="" />
                </button>
                <button onClick={() => next()} className="vertical_next">
                  <img src={vectorBottom} alt="" />
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
