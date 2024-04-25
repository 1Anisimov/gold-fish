import React, { memo } from 'react';
import cls from './product-page.module.css';
import { getProductById } from '../../../API/FakeAPI';
import MainContainerBg from '../../containers/main-container-bg';
import MainContainer from '../../common/components/main-container/main-container';
import { ProductPurchaseCard } from '../../common/components/product-purchase-card/product-purchase-card';
import Tab from '../../common/components/tabs/tabs';
import Slider from '../../reusable-components/slider';

const Component = ({ productId }) => {
  const product = getProductById(productId);
  return (
    <>
      <MainContainerBg>
        <MainContainer>
          <div className={cls.productPage}>
            <h3 className={cls.mainTitle}>{product.name}</h3>
            <div className={cls.mainContainer}>
              <div className={cls.left}>
                <div className={cls.mainImgBlock}>
                  <Slider productId={productId} />
                </div>
                <Tab />
              </div>
              <div className={cls.right}>
                <ProductPurchaseCard product={product} />
              </div>
            </div>
          </div>
        </MainContainer>
      </MainContainerBg>
    </>
  );
};

export const ProductPage = memo(Component);
