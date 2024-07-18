import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CatalogOrProductPage } from './app/pages/catalog-or-product-page';
import { BasketPage } from './app/modules/basket/basket-page';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories, getCategoriesLoadingStatus } from './app/store/categories';
import { addSubcategories, getSubcategoriesLoadingStatus } from './app/store/subcategories';
import { addProducts, getProductsLoadingStatus } from './app/store/products';
import foundProductsPage from './app/pages/found-products-page/found-products-page';
import UserPage from './app/modules/user-page/user-page';
import UserPageSettings from './app/modules/user-page-settings/user-page-settings';
import AdminPage from './app/modules/admin-page-module/admin-page/admin-page';
import MainPage from './app/modules/main-page-module/main-page/main-page';
import Footer from './app/common/footer/footer';
import Header from './app/common/header/header';
import { getLoadingStatus, setCurrentUser } from "./app/store/currentUser";
import { setBasketEntities } from "./app/store/basket";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setCurrentUser())
    dispatch(addProducts())
    dispatch(addCategories())
    dispatch(addSubcategories())
    dispatch(setBasketEntities())
  },[dispatch])

  const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());
  const productsLoadingStatus = useSelector(getProductsLoadingStatus());
  const subcategoriesLoadingStatus = useSelector(getSubcategoriesLoadingStatus())
  const userLoadingStatus = useSelector(getLoadingStatus());
  
  if(categoriesLoadingStatus === "LOADING" && productsLoadingStatus === "LOADING" && subcategoriesLoadingStatus === "LOADING" && userLoadingStatus === "LOADING" ) {
    return (
      <div className='mainContent_or_loader'>
        <div className='loader'></div>
      </div>
      
    )
  }

  if(categoriesLoadingStatus === "ERROR" || productsLoadingStatus === "ERROR" || subcategoriesLoadingStatus === "ERROR" || userLoadingStatus === "ERROR" ) {
    return (
      <div className='mainContent_or_loader'>
        <div>Что-то пошло не так. <br /> Пожалуйста, попробуйте позже</div>
      </div>
      
    )
  }

    return (
    
       <>
          <Header />
          <Switch>
            <Route path="/admin" component={AdminPage} />
            <Route path="/foundProducts" component={foundProductsPage} />
            <Route path="/catalog/:category?/:subcategory?/:productId?/" component={CatalogOrProductPage} />
            <Route path="/:person?/basket" component={BasketPage} />
            <Route path="/user/:userId?/settings/" component={UserPageSettings} />
            <Route path="/user/:userId?/" component={UserPage} />
            <Route exact path="/" component={MainPage} />
            <Redirect to= '/' />
          </Switch>
          <Footer />
          
        </>
    
    )
}
 
export default App;