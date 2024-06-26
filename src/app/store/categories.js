import { createSlice } from "@reduxjs/toolkit";
import categoriesService from "../services/categories.service";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        isLoading: "LOADING",
        entity: [],
        activeCategory: null,
        openCategory: null,
        showAllCategory: true,
    },
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING"
        },
        setLoadingStatusError: (state) => {
            state.isLoading = "ERROR"
        },
        createCategoriesReceved: (state, action) => {
            state.entity = action.payload
            state.isLoading = "READY"
        },
        setActiveCategoryReceved: (state, action) => {
            state.activeCategory = action.payload;
            state.isLoading = "READY"
        },
        setOpenCategoryReceved: (state, action) => {
            state.openCategory = action.payload;
            state.isLoading = "READY"
        },
        showAllCategoryReceved: (state) => {
            state.showAllCategory = !state.showAllCategory
            state.isLoading = "READY"
        }
        
    }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const {

    setLoadingStatusLoading,
    setLoadingStatusError,
    createCategoriesReceved,
    setActiveCategoryReceved,
    setOpenCategoryReceved,
    showAllCategoryReceved,

 } = actions;

 export const showAllCategory = () =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(showAllCategoryReceved())
 }

 export const setActiveCategory = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setActiveCategoryReceved(payload))
 }

 export const setOpenCategory = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setOpenCategoryReceved(payload))
 }

 export const addCategories = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        const content = await categoriesService.get();
        dispatch(createCategoriesReceved(content))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const getAllCategories = () => (state) => state.categories.entity
 export const getActiveCategory = () => (state) => state.categories.activeCategory
 export const getOpenCategory = () => (state) => state.categories.openCategory
 export const getShowAllCategory = () => (state) => state.categories.showAllCategory
 export const getCategoriesLoadingStatus = () => (state) => state.categories.isLoading


export default categoriesReducer;