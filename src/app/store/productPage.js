import { createSlice } from "@reduxjs/toolkit";

const productPageSlice = createSlice({
    name: "productPage",
    initialState: {
        isLoading: "LOADING",
        sliderPageIndex: 0,
    },
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING"
        },
        setLoadingStatusError: (state) => {
            state.isLoading = "ERROR"
        },

        setSliderPageIndexReceved: (state, action) => {
            state.sliderPageIndex = action.payload;
            state.isLoading = "READY";
        }
        
        
    }
});

const { reducer: productPageReducer, actions } = productPageSlice;
const {

    setLoadingStatusLoading,
    setLoadingStatusError,

    setSliderPageIndexReceved,

 } = actions;

 
 export const setSliderPageIndex = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setSliderPageIndexReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 
 export const getSliderPageIndex = () => (state) => state.productPage.sliderPageIndex
 export const getProductPageLoadingStatus = () => (state) => state.productPage.isLoading



export default productPageReducer;