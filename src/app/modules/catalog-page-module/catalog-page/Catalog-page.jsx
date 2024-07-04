import React, { useEffect } from 'react';
import cls from './catalog-page.module.css';
import ProductsCatalog from '../products-catalog-page/products-catalog-page';
import MainContainerBg from '../../../containers/main-container-bg';
import banner from '../../../image/catalog/bannerCatalogPage.png';
import { useSelector } from 'react-redux';
import { getTitleCatalog } from '../../../store/products';
import MainNavigation from '../../../common/components/main-navigation/main-navigation';
import FilterCatalog from '../filter-catalog/filter-catalog';

const CatalogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const titleCatalog = useSelector(getTitleCatalog());

  return (
    <>
      <div className={cls.catalog_page_banner}>
        <img className={cls.catalog_page_banner_image} src={banner} alt="" />
        <div className={cls.catalog_page_banner_absolute}>
          <h3 className={cls.catalog_page_banner_title}>Октябрьский турнир Warhammer 40000</h3>
          <span className={cls.catalog_page_banner_text}>
            У тебя есть команда и вы готовы принять участие в турнире Warhammer 40000?{' '}
          </span>
        </div>
      </div>
      <MainContainerBg>
        <div className={cls.catalog_page}>
          <div>
            <MainNavigation />
            <h2 className={cls.first_title}>{titleCatalog}</h2>
            <div className={cls.catalog_page_block}>
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
