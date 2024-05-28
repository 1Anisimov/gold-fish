import React, { useEffect } from 'react';
import MainContainer from '../common/components/main-container/main-container';
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
          <MainContainer>
            <MainCatalog />
          </MainContainer>
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
          <MainContainer>
            <UpcomingEvents />
            <MoreInfo />
            <BlockInfo />
          </MainContainer>
        </MainContainerBg>
      </div>
    </>
  );
};

export default MainPage;
