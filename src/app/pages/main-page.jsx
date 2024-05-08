import React from 'react';
import { getNotSaleProducts, getSaleProducts } from '../../API/FakeAPI';
import MainContainer from '../common/components/main-container/main-container';
import BlockInfo from '../components/blockInfo';
import MainCatalog from '../components/main-page-catalog';
import MoreInfo from '../components/more-info';
import TemporarilyBuy from '../components/temporarilyBuy';
import UpcomingEvents from '../components/upcomingEvents';
import MainContainerBg from '../containers/main-container-bg';

const MainPage = () => {
  const productsSale = getSaleProducts();
  const products = getNotSaleProducts();
  return (
    <>
      <div className="main_page">
        <div className="">
          <div className="content_page">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
