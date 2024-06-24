import React from 'react';
import cls from './admin-page.module.css';
import MainContainerBg from '../../../containers/main-container-bg';
import SearchProductsOnAdminPage from '../../../common/components/input-search-products-admin-page/input-search-products-admin-page';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentProductOnAdminPage,
  getFoundProductsOnAdminPage,
  getIsOpenModalChanged,
  setAddingProductWhere,
  setModalChanged
} from '../../../store/admin';
import { getAllProducts, getFiltersLoadingStatus } from '../../../store/products';
import Card from '../../../reusable-components/main-card/card';
import { ScrollBlock } from '../../../hooks/useScrollBlock';
import AddProductSvg from '../../../image/svg/addProductSvg';
import ModalAdminPage from '../modal-admin-page/modal-admin-page';

const AdminPage = () => {
  const dispatch = useDispatch();
  const foundProducts = useSelector(getFoundProductsOnAdminPage());
  const products = useSelector(getAllProducts());
  const loadingStatus = useSelector(getFiltersLoadingStatus());
  const isOpenModal = useSelector(getIsOpenModalChanged());
  const currentProduct = useSelector(getCurrentProductOnAdminPage());
  console.log(currentProduct);

  const [blockScroll, allowScroll] = ScrollBlock();

  isOpenModal ? blockScroll() : allowScroll();

  const openAdminModal = ({ target }) => {
    if (target.id === 'main') {
      dispatch(setAddingProductWhere('main'));
    }
    if (target.id === 'special') {
      dispatch(setAddingProductWhere('special'));
    }
    if (target.id === 'sale') {
      dispatch(setAddingProductWhere('sale'));
    }
    dispatch(setModalChanged(true));
  };

  return (
    <MainContainerBg>
      {isOpenModal ? <ModalAdminPage /> : <></>}
      <div className={cls.adminPage}>
        <h3>Admin page</h3>
        <div className={cls.addProductBlock}>
          <button id="global" onClick={openAdminModal} className={cls.addProductButton}>
            Добавить товар <AddProductSvg />
          </button>
          <button id="special" onClick={openAdminModal} className={cls.addProductButton}>
            Добавить товар в "Специальные предложения" <AddProductSvg />
          </button>
          <button id="sale" onClick={openAdminModal} className={cls.addProductButton}>
            Добавить товар в "Успей купить" <AddProductSvg />
          </button>
        </div>
        <SearchProductsOnAdminPage />
        {loadingStatus === 'READY' ? (
          <div className={cls.products}>
            {foundProducts && foundProducts.length > 0
              ? foundProducts.map((product) => <Card admin product={product} />)
              : products.map((product) => <Card admin product={product} />)}
          </div>
        ) : (
          <></>
        )}
      </div>
    </MainContainerBg>
  );
};

export default AdminPage;
