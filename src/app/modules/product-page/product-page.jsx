import React, { memo, useEffect } from 'react';
import cls from './product-page.module.css';
import { getProductById } from '../../../API/FakeAPI';
import MainContainerBg from '../../containers/main-container-bg';
import { ProductPurchaseCard } from '../../common/components/product-purchase-card/product-purchase-card';
import Tab from '../../common/components/tabs/tabs';
import Slider from '../../reusable-components/slider';
import VerticalSlider from '../../reusable-components/vertical-slider';

const Component = ({ productId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = getProductById(productId);
  return (
    <>
      <MainContainerBg>
        <div className={cls.productPage}>
          <h3 className={cls.mainTitle}>{product.name}</h3>
          <div className={cls.mainContainer}>
            <div className={cls.left}>
              <div className={cls.swiperBlock}>
                <VerticalSlider allImages={product.allImg} />
                <div className={cls.mainImgBlock}>
                  <Slider allImages={product.allImg} />
                </div>
              </div>
              <Tab />
            </div>
            <div className={cls.right}>
              <ProductPurchaseCard product={product} />
            </div>
          </div>
        </div>
      </MainContainerBg>
    </>
  );
};

export const ProductPage = memo(Component);
