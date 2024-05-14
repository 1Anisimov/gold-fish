import React, { useEffect, useState } from 'react';
import MainPage from './app/pages/main-page';
import { Route, Switch } from 'react-router-dom';
import ModalCatalog from './app/reusable-components/modal-catalog';
import Header from './app/components/header';
import Footer from './app/components/footer';
import { CatalogOrProductPage } from './app/pages/catalog-or-product-page';
import { BasketPage } from './app/modules/basket/basket-page';
import { TestPage } from './app/pages/test-page';
import AuthorizationForm from './app/common/components/authorization-form/authorization-form';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from './app/store/categories';
import { addSubcategories } from './app/store/subcategories';
import { getMainLoadLoadingStatus, mainLoading } from './app/store/mainLoad';
import { addProducts } from './app/store/products';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addProducts())
    dispatch(addCategories())
    dispatch(addSubcategories())
    // TODO избавиться и получать статусы на этой странице
    dispatch(mainLoading())
  },[dispatch])
  
  const mainLoadingStatus = useSelector(getMainLoadLoadingStatus())
    // TODO перенести в редакс
    const [modalActive, setModalActive] = useState(false);
    const [modalForm, setModalForm] = useState(false);
  const changeModalForm = () => {
    if (!modalForm) {
      
      setModalForm(true);
    }
  };
  const changeModalActive = () => {
    if (!modalActive) {
      setModalActive(true);
    }
  };
  // TODO обработать ошибки загрузки
    return (
      // TODO добавить лоадинг страницу сюда и избавиться от mainLoadingStatus
    <div className={mainLoadingStatus === "READY" ? "" : 'mainContent_or_loader'}>
    {mainLoadingStatus === "READY"
      ? <>
          <Header onChange={changeModalActive} changeForm={changeModalForm} />
          <Switch>
            <Route path="/catalog/:category?/:subcategory?/:productId?/" component={CatalogOrProductPage} />
            <Route path="/:person?/basket" component={BasketPage} />
            <Route path="/test_page" component={TestPage} />
            <Route exact path="/" component={MainPage} />
          </Switch>
          <Footer />
          {/* // TODO перенести в Header(оба) */}
          <ModalCatalog modalActive={modalActive} setModalActive={setModalActive} />
          <AuthorizationForm modalForm={modalForm} setModalForm={setModalForm} />
        </>
      : <div className='loader'></div>
      }
    </div>
    )
}
 
export default App;