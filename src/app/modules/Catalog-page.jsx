import React, { useEffect } from 'react';
import FilterCatalog from '../common/components/filter-catalog/filter-catalog';
import ProductsCatalog from '../common/components/products-catalog-page/products-catalog-page';
import MainContainerBg from '../containers/main-container-bg';
import banner from '../image/catalog/bannerCatalogPage.png';
import { useSelector } from 'react-redux';
import { getTitleCatalog } from '../store/products';

const CatalogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const titleCatalog = useSelector(getTitleCatalog());

  return (
    <>
      <div className="catalog_page_banner">
        <img className="catalog_page_banner_image" src={banner} alt="" />
        <div className="catalog_page_banner_absolute">
          <h3 className="catalog_page_banner_title">Октябрьский турнир Warhammer 40000</h3>
          <span className="catalog_page_banner_text">
            У тебя есть команда и вы готовы принять участие в турнире Warhammer 40000?{' '}
          </span>
        </div>
      </div>
      <MainContainerBg>
        <div className="catalog_page">
          <div className="container_main">
            <h2 className="first_title">{titleCatalog}</h2>
            <div className="catalog_page_block">
              <FilterCatalog />
              <ProductsCatalog />
            </div>
          </div>
        </div>
      </MainContainerBg>
    </>
  );
};

export default CatalogPage;
