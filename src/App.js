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

const App = () => {
    const [modalActive, setModalActive] = useState(false);
  const changeModalActive = () => {
    if (!modalActive) {
      setModalActive(true);
    }
  };
    return (
    <>
    <Header onChange={changeModalActive} />
    <Switch>
        <Route path="/catalog/:category?/:subcategory?/:productId?/" component={CatalogOrProductPage} />
        {/* <Route  path="/:category?/:subcategory?/:productId?/" component={CatalogPage}/> */}
        <Route path="/:person?/basket" component={BasketPage} />
        <Route path="/test_page" component={TestPage} />
        <Route path="/" component={MainPage} />
    </Switch>
    <Footer />
    <ModalCatalog modalActive={modalActive} setModalActive={setModalActive} />
    </>
    )
}
 
export default App;