import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters";
import basketReducer from "./basket";
import promocodeReducer from "./search";

const rootReducer = combineReducers({
    filter: filtersReducer,
    basket: basketReducer,
    promocode: promocodeReducer
    });

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}