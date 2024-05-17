import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import promocodeReducer from "./search";
import categoriesReducer from "./categories";
import subcategoriesReducer from "./subcategories";
import mainLoadReducer from "./mainLoad";
import productsReducer from "./products";
import productPageReducer from "./productPage";

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
    promocode: promocodeReducer,
    categories: categoriesReducer,
    subcategories: subcategoriesReducer,
    mainLoad: mainLoadReducer,
    productPage: productPageReducer,
    });

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}