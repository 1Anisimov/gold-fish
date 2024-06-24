import React, { useEffect } from 'react';
import cls from './main-page.module.css';
import BlockInfo from '../block-info/blockInfo';
import MainCatalog from '../main-page-catalog/main-page-catalog';
import MoreInfo from '../more-info/more-info';
import TemporarilyBuy from '../temporarily-buy/temporarilyBuy';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSaleProducts,
  getSpecialProducts,
  setAllSaleProducts,
  setAllSpecialProducts
} from '../../../store/products';
import MainContainerBg from '../../../containers/main-container-bg';
import UpcomingEvents from '../upcoming-events/upcomingEvents';

const MainPage = () => {
  const dispatch = useDispatch();

  const saleProducts = useSelector(getSaleProducts());
  const specialProducts = useSelector(getSpecialProducts());

  useEffect(() => {
    window.scrollTo(0, 0);
    if (saleProducts?.length < 1) {
      dispatch(setAllSaleProducts());
    }
    if (specialProducts?.length < 1) {
      dispatch(setAllSpecialProducts());
    }
  }, [dispatch, saleProducts, specialProducts]);

  return (
    <>
      <div className={cls.main_page}>
        <MainContainerBg>
          <MainCatalog />
        </MainContainerBg>
        {saleProducts && saleProducts.length > 0 ? (
          <TemporarilyBuy title="Успей купить" products={saleProducts} />
        ) : (
          <></>
        )}
        {specialProducts && specialProducts.length > 0 ? (
          <TemporarilyBuy title="Специальные предложения" isSale products={specialProducts} />
        ) : (
          <></>
        )}
        <MainContainerBg>
          <UpcomingEvents />
          <MoreInfo />
          <BlockInfo />
        </MainContainerBg>
      </div>
    </>
  );
};

export default MainPage;
