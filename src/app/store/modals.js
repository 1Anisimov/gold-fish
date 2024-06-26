import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
    name: "modals",
    initialState: {
        isLoading: "LOADING",
        mainModal: false,
        modalCatalog: false,
        modalRegisterForm: false,
        modalCatalogActiveCategory: null,
        search: false,
        changedName: false
    },
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING";
        },
        // setLoadingStatusError: (state) => {
        //     state.isLoading = "ERROR";
        // },

        
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
        },
        setMainModalReceved: (state, action) => {
            state.mainModal = action.payload;
            state.isLoading = "READY";
        },

        setSearchOpenOrCloseReceved: (state, action) => {
            state.search = action.payload;
            state.isLoading = "READY";
        },

        setChangedNameReceved: (state, action) => {
            state.changedName = action.payload;
            state.isLoading = "READY";
        }

    }
});

const { reducer: modalsReducer, actions } = modalsSlice;
const {
    setLoadingStatusLoading,

    setModalCatalogReceved,

    setModalRegisterFormReceved,

    setModalCatalogActiveCategoryReceved,
    setMainModalReceved,

    setSearchOpenOrCloseReceved,

    setChangedNameReceved,


 } = actions;


 export const setChangeName = (name) => (dispatch) => {
    dispatch(setChangedNameReceved(name))
 }

 export const setSearchOpenOrClose = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setSearchOpenOrCloseReceved(payload))
 }

 export const setMainModal = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setMainModalReceved(payload))
 }

 export const setActiveCategoryOnModalCatalog = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setModalCatalogActiveCategoryReceved(payload))
 }

 export const setModalCatalog = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setModalCatalogReceved(payload))
 }

 export const setModalRegisterForm = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setModalRegisterFormReceved(payload))
 }

 export const getMainModal = () => (state) => state.modals.mainModal
 export const getModalRegisterForm = () => (state) => state.modals.modalRegisterForm;
 export const getModalCatalog = () => (state) => state.modals.modalCatalog;
 export const getSearchOpenOrClose = () => (state) => state.modals.search;
 export const getModalCatalogActiveCategory = () => (state) => state.modals.modalCatalogActiveCategory
 export const getChangedName = () => (state) => state.modals.changedName


export default modalsReducer;