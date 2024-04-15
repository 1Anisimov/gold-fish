import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters";

const rootReducer = combineReducers({
    filter: filtersReducer
    //  qualities: qualitiesReducer,
    //  professions: professionsReducer,
    //  users: usersReducer,
    //  comments: commentsReducer
    });

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}