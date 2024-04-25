import { createSlice } from "@reduxjs/toolkit";

const promocodeSlice = createSlice({
    name: "promocode",
    initialState: {
        isLoading: "LOADING",
        entity: null,
        sale: null
    },
    reducers: {
        promocodeSearchRequested: (state) => {
            state.isLoading = "LOADING";
        },
        promocodeSearchReceved: (state, action) => {
            state.entity = action.payload
            state.isLoading = "READY";
        },
        promocodeSearchRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        setSaleRequested: (state) => {
            state.isLoading = "LOADING";
        },
        setSaleReceved: (state, action) => {
            state.sale = action.payload
            state.isLoading = "READY";
        },
        setSaleRequestFile: (state) => {
            state.isLoading = "ERROR";
        },
    }
});

const { reducer: promocodeReducer, actions } = promocodeSlice;
const {
    setSaleRequested,
    setSaleReceved,
    setSaleRequestFile,

    promocodeSearchRequested,
    promocodeSearchReceved,
    promocodeSearchRequestFile,

 } = actions;

 export const setSale = (payload) => async (dispatch) => {
    dispatch(setSaleRequested())
    try {
        dispatch(setSaleReceved(payload));
    } catch (error) {
        dispatch(setSaleRequestFile())
    }
 }

 export const promocodeSearch = (payload) => async (dispatch) => {
    dispatch(promocodeSearchRequested())
    try {
        dispatch(promocodeSearchReceved(payload));
    } catch (error) {
        dispatch(promocodeSearchRequestFile())
    }
 }


 export const getCurrentPromocode = () => (state) => state.promocode.entity
 export const getCurrentSale = () => (state) => state.promocode.sale

export default promocodeReducer;