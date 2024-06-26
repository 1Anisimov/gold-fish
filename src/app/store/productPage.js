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

        setSliderPageIndexReceved: (state, action) => {
            state.sliderPageIndex = action.payload;
            state.isLoading = "READY";
        }
        
        
    }
});

const { reducer: productPageReducer, actions } = productPageSlice;
const {

    setLoadingStatusLoading,

    setSliderPageIndexReceved,

 } = actions;

 
 export const setSliderPageIndex = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setSliderPageIndexReceved(payload))
 }

 
 export const getSliderPageIndex = () => (state) => state.productPage.sliderPageIndex
 export const getProductPageLoadingStatus = () => (state) => state.productPage.isLoading



export default productPageReducer;