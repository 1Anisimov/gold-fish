import React from 'react';
import cls from './admin-page.module.css';
import MainContainerBg from '../../containers/main-container-bg';
import SearchProductsOnAdminPage from '../../common/components/input-search-products-admin-page/input-search-products-admin-page';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentProductOnAdminPage,
  getFoundProductsOnAdminPage,
  getIsOpenModalChanged,
  setCurrentProduct,
  setModalChanged
} from '../../store/admin';
import { getAllProducts, getFiltersLoadingStatus } from '../../store/products';
import Card from '../../reusable-components/card';
import { ScrollBlock } from '../../hooks/useScrollBlock';
import AddProductSvg from '../../image/svg/addProductSvg';
// import AdminTabs from '../../common/components/admin-tabs/admin-tabs';

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

  const closeModal = ({ target }) => {
    if (target?.id === 'modalBlock') {
      dispatch(setCurrentProduct(null));
      dispatch(setModalChanged(false));
    }
  };

  return (
    <MainContainerBg>
      {isOpenModal ? (
        <div onClick={closeModal} id="modalBlock" className={cls.modalActive}>
          <div className={cls.modalContainer}>
            <div className={cls.modalContent}>modal</div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={cls.adminPage}>
        <h3>Admin page</h3>
        <div className={cls.addProductBlock}>
          <button className={cls.addProductButton}>
            Добавить товар <AddProductSvg />
          </button>
          <button className={cls.addProductButton}>
            Добавить товар на главную <AddProductSvg />
          </button>
        </div>
        <SearchProductsOnAdminPage />
        {/* <div className={cls.adminTabs}>
          <AdminTabs />
        </div> */}
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
