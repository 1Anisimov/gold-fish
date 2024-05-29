import React, { useEffect } from 'react';
import BlockInfo from '../components/blockInfo';
import MainCatalog from '../components/main-page-catalog';
import MoreInfo from '../components/more-info';
import TemporarilyBuy from '../components/temporarilyBuy';
import UpcomingEvents from '../components/upcomingEvents';
import MainContainerBg from '../containers/main-container-bg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSaleProducts,
  getSpecialProducts,
  setAllSaleProducts,
  setAllSpecialProducts
} from '../store/products';

const MainPage = () => {
  const dispatch = useDispatch();

  const saleProducts = useSelector(getSaleProducts());
  const specialProducts = useSelector(getSpecialProducts());

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setAllSaleProducts());
    dispatch(setAllSpecialProducts());
  }, [dispatch]);

  return (
    <>
      <div className="main_page">
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
