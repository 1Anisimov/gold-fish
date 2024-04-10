import React, { useState } from 'react';
import MainPage from './app/pages/main-page';
import { Route, Switch } from 'react-router-dom';
import CatalogPage from './app/modules/Catalog-page';
import ModalCatalog from './app/reusable-components/modal-catalog';
import Header from './app/components/header';
import Footer from './app/components/footer';

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
        <Route path="/catalog/:category?/:subcategory?/" component={CatalogPage} />
        <Route path="/" render={() =><MainPage />} />
    </Switch>
    <Footer />
    <ModalCatalog modalActive={modalActive} setModalActive={setModalActive} />
    </>
    )
}
 
export default App;