import React, { useEffect } from 'react';
import MainPage from './app/pages/main-page';
import { Route, Switch } from 'react-router-dom';
import Header from './app/components/header';
import Footer from './app/components/footer';
import { CatalogOrProductPage } from './app/pages/catalog-or-product-page';
import { BasketPage } from './app/modules/basket/basket-page';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories, getCategoriesLoadingStatus } from './app/store/categories';
import { addSubcategories, getSubcategoriesLoadingStatus } from './app/store/subcategories';
import { addProducts, getProductsLoadingStatus } from './app/store/products';
import foundProductsPage from './app/pages/found-products-page/found-products-page';
import UserPage from './app/modules/user-page/user-page';
import UserPageSettings from './app/modules/user-page-settings/user-page-settings';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addProducts())
    dispatch(addCategories())
    dispatch(addSubcategories())
  },[dispatch])

  const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());
  const productsLoadingStatus = useSelector(getProductsLoadingStatus());
  const subcategoriesLoadingStatus = useSelector(getSubcategoriesLoadingStatus())
  
  if(categoriesLoadingStatus === "LOADING" && productsLoadingStatus === "LOADING" && subcategoriesLoadingStatus === "LOADING" ) {
    return (
      <div className='mainContent_or_loader'>
        <div className='loader'></div>
      </div>
      
    )
  }

  if(categoriesLoadingStatus === "ERROR" || productsLoadingStatus === "ERROR" || subcategoriesLoadingStatus === "ERROR" ) {
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
            <Route path="/foundProducts" component={foundProductsPage} />
            <Route path="/catalog/:category?/:subcategory?/:productId?/" component={CatalogOrProductPage} />
            <Route path="/:person?/basket" component={BasketPage} />
            <Route path="/user/:userId?/settings/" component={UserPageSettings} />
            <Route path="/user/:userId?/" component={UserPage} />
            <Route exact path="/" component={MainPage} />
          </Switch>
          <Footer />
          
        </>
    
    )
}
 
export default App;