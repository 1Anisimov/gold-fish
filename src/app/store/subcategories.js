import { createSlice } from "@reduxjs/toolkit";
import subcategoriesService from "../services/subcategories.service";

const subcategoriesSlice = createSlice({
    name: "subcategories",
    initialState: {
        isLoading: "LOADING",
        entity: [],
        activeSubcategory: null,
    },
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING"
        },
        setLoadingStatusError: (state) => {
            state.isLoading = "ERROR"
        },
        createSubcategoriesReceved: (state, action) => {
            state.entity = action.payload
            state.isLoading = "READY"
        },
        
        
    }
});

const { reducer: subcategoriesReducer, actions } = subcategoriesSlice;
const {

    setLoadingStatusLoading,
    setLoadingStatusError,

    createSubcategoriesReceved,

 } = actions;

 

 export const addSubcategories = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        const content = await subcategoriesService.get();
        dispatch(createSubcategoriesReceved(content))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const getAllSubcategories = () => (state) => state.subcategories.entity
 export const getSubcategoriesLoadingStatus = () => (state) => state.subcategories.isLoading


export default subcategoriesReducer;