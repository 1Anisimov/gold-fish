import React, { useEffect } from 'react';
import cls from './admin-page.module.css';
import MainContainerBg from '../../../containers/main-container-bg';
import SearchProductsOnAdminPage from '../../../common/components/input-search-products-admin-page/input-search-products-admin-page';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAddingProductWhere,
  getAddOrRemove,
  getCurrentProductAdding,
  getFoundProductsOnAdminPage,
  getIsOpenModalChanged,
  setAddingProductWhere,
  setCurrentProductAdding,
  setModalChanged
} from '../../../store/admin';
import {
  addToSaleProductByAdminPage,
  addToSpecialProductByAdminPage,
  getAllProducts,
  getFiltersLoadingStatus,
  removeProductOnSaleProductsByAdminPage,
  removeProductOnSpecialProductsByAdminPage,
  setAllSaleProducts,
  setAllSpecialProducts
} from '../../../store/products';
import Card from '../../../reusable-components/main-card/card';
import { ScrollBlock } from '../../../hooks/useScrollBlock';
import AddProductSvg from '../../../image/svg/addProductSvg';
import ModalAdminPage from '../modal-admin-page/modal-admin-page';
import { getModalAdminAccept, setModalAdminAccept } from '../../../store/modals';
import { getAdminStatus } from '../../../store/currentUser';
import { Redirect } from 'react-router-dom';

const AdminPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllSaleProducts());
    dispatch(setAllSpecialProducts());
  }, [dispatch]);

  const foundProducts = useSelector(getFoundProductsOnAdminPage());
  const products = useSelector(getAllProducts());
  const loadingStatus = useSelector(getFiltersLoadingStatus());
  const isOpenModal = useSelector(getIsOpenModalChanged());

  const isModalAccept = useSelector(getModalAdminAccept());
  const whereAdding = useSelector(getAddingProductWhere());
  const currentAddingProduct = useSelector(getCurrentProductAdding());
  const isAddOrRemove = useSelector(getAddOrRemove());

  const isAdmin = useSelector(getAdminStatus());

  const [blockScroll, allowScroll] = ScrollBlock();

  isOpenModal || isModalAccept ? blockScroll() : allowScroll();

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

  const addCurrentProductToSaleOrSpecial = ({ target }) => {
    if (whereAdding === 'sale') {
      if (target.id === 'yes') {
        dispatch(addToSaleProductByAdminPage(currentAddingProduct));
        dispatch(setModalAdminAccept(false));
      } else {
        dispatch(setAddingProductWhere(null));
        dispatch(setCurrentProductAdding(null));
        dispatch(setModalAdminAccept(false));
      }
    }

    if (whereAdding === 'special') {
      if (target.id === 'yes') {
        dispatch(addToSpecialProductByAdminPage(currentAddingProduct));
        dispatch(setModalAdminAccept(false));
      } else {
        dispatch(setAddingProductWhere(null));
        dispatch(setCurrentProductAdding(null));
        dispatch(setModalAdminAccept(false));
      }
    }
  };

  const removeCurrentProductToSaleOrSpecial = ({ target }) => {
    if (whereAdding === 'sale') {
      if (target.id === 'yes') {
        dispatch(removeProductOnSaleProductsByAdminPage(currentAddingProduct));
        dispatch(setModalAdminAccept(false));
      } else {
        dispatch(setAddingProductWhere(null));
        dispatch(setCurrentProductAdding(null));
        dispatch(setModalAdminAccept(false));
      }
    }

    if (whereAdding === 'special') {
      if (target.id === 'yes') {
        dispatch(removeProductOnSpecialProductsByAdminPage(currentAddingProduct));
        dispatch(setModalAdminAccept(false));
      } else {
        dispatch(setAddingProductWhere(null));
        dispatch(setCurrentProductAdding(null));
        dispatch(setModalAdminAccept(false));
      }
    }
  };

  return isAdmin ? (
    // loadingStatusCurrentUser === 'READY' ? (
    <MainContainerBg>
      {isOpenModal ? <ModalAdminPage /> : <></>}
      {isModalAccept ? (
        <div className={cls.modalBlock}>
          <div className={cls.modalContent}>
            <div className={cls.adminModalContainer}>
              <p>Подтверждение</p>
              <div className={cls.confirmBlock}>
                <p>
                  {isAddOrRemove === 'add'
                    ? `Вы точно хотите ДОБАВИТЬ товар в "${whereAdding}"?`
                    : `Вы точно хотите УДАЛИТЬ товар из "${whereAdding}"?`}
                </p>
                <div className={cls.buttonsBlock}>
                  <button
                    onClick={
                      isAddOrRemove === 'add'
                        ? addCurrentProductToSaleOrSpecial
                        : removeCurrentProductToSaleOrSpecial
                    }
                    id="yes"
                    className={cls.button}>
                    Да
                  </button>
                  <button
                    onClick={
                      isAddOrRemove === 'add'
                        ? addCurrentProductToSaleOrSpecial
                        : removeCurrentProductToSaleOrSpecial
                    }
                    id="no"
                    className={cls.button}>
                    Нет
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={cls.adminPage}>
        <h3>Admin page</h3>
        <div className={cls.addProductBlock}>
          <button id="global" onClick={openAdminModal} className={cls.addProductButton}>
            Добавить товар <AddProductSvg />
          </button>
        </div>
        <SearchProductsOnAdminPage />
        {loadingStatus === 'READY' ? (
          <div className={cls.products}>
            {foundProducts && foundProducts.length > 0
              ? foundProducts.map((product) => <Card admin product={product} />)
              : products.map((product) =>
                  product.name ? <Card admin product={product} /> : <></>
                )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </MainContainerBg>
  ) : (
    //  : (
    //   'Loading'
    // )
    // )
    <Redirect to={'/'} />
  );
};

export default AdminPage;
