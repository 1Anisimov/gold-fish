import { createSlice } from "@reduxjs/toolkit";

const mainLoadSlice = createSlice({
    name: "mainLoad",
    initialState: {
        isLoading: "LOADING",
    },
    reducers: {
        mainLoadRequested: (state) => {
            state.isLoading = "LOADING"
        },
        mainLoadReceved: (state) => {
            state.isLoading = "READY"
        },
        mainLoadRequestFile: (state) => {
            state.isLoading = "ERROR"
        },
    }
});

const { reducer: mainLoadReducer, actions } = mainLoadSlice;
const {
    mainLoadRequested,
    mainLoadReceved,
    mainLoadRequestFile,

 } = actions;

 export const mainLoading = () => async (dispatch, getState) => {
    dispatch(mainLoadRequested())
    try {
        // TODO убрать таймаут
        setTimeout(() => {
        if(getState().filter.isLoading === "READY" && getState().categories.isLoading === "READY" && getState().subcategories.isLoading === "READY") {
            dispatch(mainLoadReceved())
        }
        }, 3000)
        
    } catch (error) {
        dispatch(mainLoadRequestFile())
    }
 }

 export const getMainLoadLoadingStatus = () => (state) => state.mainLoad.isLoading


export default mainLoadReducer;