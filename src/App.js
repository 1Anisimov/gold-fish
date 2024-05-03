import React, { useState } from 'react';
import MainPage from './app/pages/main-page';
import { Route, Switch } from 'react-router-dom';
// import CatalogPage from './app/modules/Catalog-page';
import ModalCatalog from './app/reusable-components/modal-catalog';
import Header from './app/components/header';
import Footer from './app/components/footer';
import { CatalogOrProductPage } from './app/pages/catalog-or-product-page';
import { BasketPage } from './app/modules/basket/basket-page';
import { TestPage } from './app/pages/test-page';
import AuthorizationForm from './app/common/components/authorization-form/authorization-form';

const App = () => {
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
    return (
    <>
    <Header onChange={changeModalActive} changeForm={changeModalForm} />
    <Switch>
        <Route path="/catalog/:category?/:subcategory?/:productId?/" component={CatalogOrProductPage} />
        {/* <Route  path="/:category?/:subcategory?/:productId?/" component={CatalogPage}/> */}
        <Route path="/:person?/basket" component={BasketPage} />
        <Route path="/test_page" component={TestPage} />
        <Route path="/" component={MainPage} />
    </Switch>
    <Footer />
    <ModalCatalog modalActive={modalActive} setModalActive={setModalActive} />
    <AuthorizationForm modalForm={modalForm} setModalForm={setModalForm} />
    </>
    )
}
 
export default App;