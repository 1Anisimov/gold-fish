import React, { memo, useEffect } from 'react';
import cls from './product-page.module.css';
import MainContainerBg from '../../containers/main-container-bg';
import { ProductPurchaseCard } from '../../common/components/product-purchase-card/product-purchase-card';
import Tab from '../../common/components/tabs/tabs';
import Slider from '../../reusable-components/slider';
import VerticalSlider from '../../reusable-components/vertical-slider';
import { useDispatch, useSelector } from 'react-redux';
import {
  getActiveProductOnProductPage,
  getFiltersLoadingStatus,
  setActiveProductOnProductPage
} from '../../store/products';
import MainNavigation from '../../common/components/main-navigation/main-navigation';

const Component = ({ productId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setActiveProductOnProductPage(productId));
  }, [dispatch, productId]);

  const product = useSelector(getActiveProductOnProductPage());
  const productLoadingStatus = useSelector(getFiltersLoadingStatus());

  if (productLoadingStatus === 'LOADING') {
    return (
      <div className="mainContent_or_loader">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {productLoadingStatus === 'READY' && (
        <MainContainerBg>
          <div className={cls.productPage}>
            <MainNavigation />
            <h3 className={cls.mainTitle}>{product.name}</h3>
            <div className={cls.mainContainer}>
              <div className={cls.left}>
                <div className={cls.swiperBlock}>
                  <VerticalSlider product={product} />
                  <div className={cls.mainImgBlock}>
                    <Slider product={product} />
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
      )}
    </>
  );
};

export const ProductPage = memo(Component);
