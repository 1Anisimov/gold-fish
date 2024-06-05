import React from 'react';
import cls from './temporarilyBuy.module.css';
import SliderProducts from '../../../reusable-components/slider-products';
import { useSelector } from 'react-redux';
import { getFiltersLoadingStatus } from '../../../store/products';

const TemporarilyBuy = ({ title, products }) => {
  const productsLoadingStatus = useSelector(getFiltersLoadingStatus());
  return (
    <>
      {productsLoadingStatus === 'READY' && (
        <div className={cls.temporarily_buy}>
          <div className={cls.temporarily_h2_block}>
            <h2 className={cls.temporarily_h2}>{title}</h2>
          </div>
          <div className={cls.temporarily_content}>
            <SliderProducts products={products} />
          </div>
        </div>
      )}
    </>
  );
};

export default TemporarilyBuy;
