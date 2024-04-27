import React from 'react';
import SliderProducts from '../reusable-components/slider-products';

const TemporarilyBuy = ({ title, isSale, products }) => {
  return (
    <>
      <div className="temporarily_buy">
        <div className="container_main">
          <div className="temporarily_h2_block">
            <h2 className="temporarily_h2">{title}</h2>
          </div>
          <div className="temporarily_content">
            <SliderProducts products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TemporarilyBuy;
