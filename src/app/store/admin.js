import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isLoading: "LOADING",
        valueSearch: null,
        foundProducts: [],
        currentProduct: null,
        modalChanged: false
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
            state.isLoading = "READY";
        },
        setModalChangedReceved: (state, action) => {
            state.modalChanged = action.payload;
            state.isLoading = "READY"
        }
    }
});

const { reducer: adminReducer, actions } = adminSlice;
const {
    setLoadingStatusLoading,
    setLoadingStatusError,

    setValueSearchReceved,
    setFoundProductsReceved,
    setCurrentProductReceved,
    setModalChangedReceved


 } = actions;

 export const setModalChanged = (payload) => (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setModalChangedReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setCurrentProduct = (product) => (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setCurrentProductReceved(product))
        // dispatch(setModalChangedReceved(true))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setValueSearchOnAdminPage = (payload) => (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setValueSearchReceved(payload))
        
        const {products} = getState().products
        const {valueSearch} = getState().admin
        // console.log(products)
        if(valueSearch && valueSearch.length > 0) {
            const newArray = products.filter((p) => {
                return p.name
                  .toLowerCase()
                  .trim()
                  .includes(valueSearch.toLowerCase().trim());
              });
            dispatch(setFoundProductsReceved(newArray))
        } else {
            dispatch(setFoundProductsReceved(null))
        }

        
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const getValueSearchOnAdminPage = () => (state) => state.admin.valueSearch;
 export const getFoundProductsOnAdminPage = () => (state) => state.admin.foundProducts;
 export const getLoadingStatusOnAdminPage = () => (state) => state.admin.isLoading

 export const getCurrentProductOnAdminPage = () => (state) => state.admin.currentProduct
 export const getIsOpenModalChanged = () => (state) => state.admin.modalChanged


export default adminReducer;