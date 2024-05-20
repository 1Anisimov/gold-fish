import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
    name: "modals",
    initialState: {
        isLoading: "LOADING",
        modalCatalog: false,
        modalRegisterForm: false,
        modalCatalogActiveCategory: null,
    },
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING";
        },
        setLoadingStatusError: (state) => {
            state.isLoading = "ERROR";
        },

        
        setModalCatalogReceved: (state, action) => {
            state.modalCatalog = action.payload;
            state.isLoading = "READY";
        },
        
        setModalRegisterFormReceved: (state, action) => {
            state.modalRegisterForm = action.payload;
            state.isLoading = "READY";
        },

        setModalCatalogActiveCategoryReceved: (state, action) => {
            state.modalCatalogActiveCategory = action.payload;
            state.isLoading = "READY";
        }
    }
});

const { reducer: modalsReducer, actions } = modalsSlice;
const {
    setLoadingStatusLoading,
    setLoadingStatusError,

    setModalCatalogReceved,

    setModalRegisterFormReceved,

    setModalCatalogActiveCategoryReceved,

 } = actions;

 
 export const SetActiveCategoryOnModalCatalog = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setModalCatalogActiveCategoryReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setModalCatalog = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setModalCatalogReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setModalRegisterForm = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setModalRegisterFormReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const getModalRegisterForm = () => (state) => state.modals.modalRegisterForm;
 export const getModalCatalog = () => (state) => state.modals.modalCatalog;
 export const getModalCatalogActiveCategory = () => (state) => state.modals.modalCatalogActiveCategory


export default modalsReducer;