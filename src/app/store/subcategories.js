import { createSlice } from "@reduxjs/toolkit";
import subcategoriesService from "../services/subcategories.service";

const subcategoriesSlice = createSlice({
    name: "subcategories",
    initialState: {
        isLoading: "LOADING",
        entity: [],
    },
    reducers: {
        createSubcategoriesRequested: (state) => {
            state.isLoading = "LOADING"
        },
        createSubcategoriesReceved: (state, action) => {
            state.entity = action.payload
            state.isLoading = "READY"
        },
        createSubcategoriesRequestFailed: (state) => {
            state.isLoading = "ERROR"
        },
    }
});

const { reducer: subcategoriesReducer, actions } = subcategoriesSlice;
const {

    createSubcategoriesRequested,
    createSubcategoriesReceved,
    createSubcategoriesRequestFailed,

 } = actions;

 export const addSubcategories = () => async (dispatch) => {
    dispatch(createSubcategoriesRequested())
    try {
        const content = await subcategoriesService.get();
        dispatch(createSubcategoriesReceved(content))
    } catch (error) {
        dispatch(createSubcategoriesRequestFailed())
    }
 }

 export const getAllSubcategories = () => (state) => state.subcategories.entity
 export const getSubcategoriesLoadingStatus = () => (state) => state.subcategories.isLoading


export default subcategoriesReducer;