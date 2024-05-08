import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters";
import basketReducer from "./basket";
import promocodeReducer from "./search";
import categoriesReducer from "./categories";
import subcategoriesReducer from "./subcategories";
import mainLoadReducer from "./mainLoad";

const rootReducer = combineReducers({
    filter: filtersReducer,
    basket: basketReducer,
    promocode: promocodeReducer,
    categories: categoriesReducer,
    subcategories: subcategoriesReducer,
    mainLoad: mainLoadReducer
    });

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}