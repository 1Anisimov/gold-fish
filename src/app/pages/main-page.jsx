import React, { useEffect } from 'react';
import { getNotSaleProducts, getSaleProducts } from '../../API/FakeAPI';
import MainContainer from '../common/components/main-container/main-container';
import BlockInfo from '../components/blockInfo';
import MainCatalog from '../components/main-page-catalog';
import MoreInfo from '../components/more-info';
import TemporarilyBuy from '../components/temporarilyBuy';
import UpcomingEvents from '../components/upcomingEvents';
import MainContainerBg from '../containers/main-container-bg';

const MainPage = () => {
  // TODO импортить из редакса
  const productsSale = getSaleProducts();
  const products = getNotSaleProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="main_page">
        {/* <div className="">
          <div className="content_page"> */}
        {/* // TODO заменить два на один */}
        <MainContainerBg>
          <MainContainer>
            <MainCatalog />
          </MainContainer>
        </MainContainerBg>
        <TemporarilyBuy title="Успей купить" products={productsSale} />
        <TemporarilyBuy title="Специальные предложения" isSale products={products} />
        <MainContainerBg>
          <MainContainer>
            <UpcomingEvents />
            <MoreInfo />
            <BlockInfo />
          </MainContainer>
        </MainContainerBg>
        {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default MainPage;
