import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters";
import basketReducer from "./basket";

const rootReducer = combineReducers({
    filter: filtersReducer,
    basket: basketReducer
    });

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}