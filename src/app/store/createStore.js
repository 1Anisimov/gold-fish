import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import promocodeReducer from "./promocodes";
import categoriesReducer from "./categories";
import subcategoriesReducer from "./subcategories";
import productsReducer from "./products";
import productPageReducer from "./productPage";
import modalsReducer from "./modals";
import currentUserReducer from "./currentUser";
import adminReducer from "./admin";

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
    promocode: promocodeReducer,
    categories: categoriesReducer,
    subcategories: subcategoriesReducer,
    productPage: productPageReducer,
    modals: modalsReducer,
    currentUser: currentUserReducer,
    admin: adminReducer
    });

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}