import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isLoading: "LOADING",
        valueSearch: null,
        foundProducts: [],
        currentProduct: null,
        modalChanged: false,
        newChangedProduct: null,
        addingProductWhere: null
    },
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING"
        },
        setLoadingStatusError: (state) => {
            state.isLoading = "ERROR"
        },

        setValueSearchReceved: (state, action) => {
            state.valueSearch = action.payload;
            state.isLoading = "READY";
        },

        setFoundProductsReceved: (state, action) => {
            state.foundProducts = action.payload;
            state.isLoading = "READY"
        },
        setCurrentProductReceved: (state, action) => {
            state.currentProduct = action.payload;
            state.newChangedProduct = action.payload;
            state.isLoading = "READY";
        },
        setModalChangedReceved: (state, action) => {
            state.modalChanged = action.payload;
            state.isLoading = "READY"
        },

        setNewChangedProductReceved: (state, action) => {
            state.newChangedProduct = action.payload;
            
            state.isLoading = "READY";
        },

        setAddingProductWhereReceved: (state, action) => {
            state.addingProductWhere = action.payload;
            state.isLoading = "READY";
        }
    
    }
});

const { reducer: adminReducer, actions } = adminSlice;
const {
    setLoadingStatusLoading,
    // setLoadingStatusError,

    setValueSearchReceved,
    setFoundProductsReceved,
    setCurrentProductReceved,
    setModalChangedReceved,

    setNewChangedProductReceved,
    setAddingProductWhereReceved


 } = actions;

 export const setAddingProductWhere = (payload) => (dispatch) => {
        dispatch(setLoadingStatusLoading())
        dispatch(setAddingProductWhereReceved(payload))    
 }

 export const setNewChangedProduct = (name, value) => (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
        const {newChangedProduct} = getState().admin;
        
        dispatch(setNewChangedProductReceved({
            ...newChangedProduct,
            [name]: value
        }))
    
 }

 export const setModalChanged = (payload) => (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setModalChangedReceved(payload))
 }

 export const setCurrentProduct = (product) => (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setCurrentProductReceved(product))
 }

 export const setValueSearchOnAdminPage = (payload) => (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setValueSearchReceved(payload))
        
        const {products} = getState().products
        const {valueSearch} = getState().admin
        if(valueSearch && valueSearch.length > 0) {
            const newArray = products.filter((p) => {
                return p.name
                  .toLowerCase()
                  .trim()
                  .includes(valueSearch.toLowerCase().trim());
              });
            dispatch(setFoundProductsReceved(newArray))
            dispatch(setFoundProductsReceved(null))
        }
 }

 export const getValueSearchOnAdminPage = () => (state) => state.admin.valueSearch;
 export const getFoundProductsOnAdminPage = () => (state) => state.admin.foundProducts;
 export const getLoadingStatusOnAdminPage = () => (state) => state.admin.isLoading
 export const getNewChangedProduct = () => (state) => state.admin.newChangedProduct
 export const getAddingProductWhere = () => (state) => state.admin.addingProductWhere

 export const getCurrentProductOnAdminPage = () => (state) => state.admin.currentProduct
 export const getIsOpenModalChanged = () => (state) => state.admin.modalChanged


export default adminReducer;