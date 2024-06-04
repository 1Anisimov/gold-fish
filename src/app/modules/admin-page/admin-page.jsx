import React from 'react';
import cls from './admin-page.module.css';
import MainContainerBg from '../../containers/main-container-bg';
import SearchProductsOnAdminPage from '../../common/components/input-search-products-admin-page/input-search-products-admin-page';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentProductOnAdminPage,
  getFoundProductsOnAdminPage,
  getIsOpenModalChanged,
  setModalChanged
} from '../../store/admin';
import { getAllProducts, getFiltersLoadingStatus } from '../../store/products';
import Card from '../../reusable-components/card';
import { ScrollBlock } from '../../hooks/useScrollBlock';
import AddProductSvg from '../../image/svg/addProductSvg';
import ModalAdminPage from '../../common/components/modal-admin-page/modal-admin-page';

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

  const openAdminModal = () => {
    dispatch(setModalChanged(true));
  };

  return (
    <MainContainerBg>
      {isOpenModal ? <ModalAdminPage /> : <></>}
      <div className={cls.adminPage}>
        <h3>Admin page</h3>
        <div className={cls.addProductBlock}>
          <button onClick={openAdminModal} className={cls.addProductButton}>
            Добавить товар <AddProductSvg />
          </button>
          <button onClick={openAdminModal} className={cls.addProductButton}>
            Добавить товар на главную <AddProductSvg />
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
