import { createSlice } from "@reduxjs/toolkit";
import categoriesService from "../services/categories.service";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        isLoading: "LOADING",
        entity: [],
    },
    reducers: {
        createCategoriesRequested: (state) => {
            state.isLoading = "LOADING"
        },
        createCategoriesReceved: (state, action) => {
            state.entity = action.payload
            state.isLoading = "READY"
        },
        // TODO поменять на failed
        createCategoriesRequestFile: (state) => {
            state.isLoading = "ERROR"
        },
    }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const {

    createCategoriesRequested,
    createCategoriesReceved,
    createCategoriesRequestFile,

 } = actions;

 export const addCategories = () => async (dispatch) => {
    dispatch(createCategoriesRequested())
    try {
        const content = await categoriesService.get();
        dispatch(createCategoriesReceved(content))
    } catch (error) {
        dispatch(createCategoriesRequestFile())
    }
 }

 export const getAllCategories = () => (state) => state.categories.entity
 export const getCategoriesLoadingStatus = () => (state) => state.categories.isLoading


export default categoriesReducer;