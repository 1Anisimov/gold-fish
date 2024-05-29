import { createSlice } from "@reduxjs/toolkit";
import promocodesService from "../services/promocodes.service";

const promocodeSlice = createSlice({
    name: "promocode",
    initialState: {
        isLoading: "LOADING",
        entity: null,
        sale: null,
        allPromocodes: []
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

        downloadAllPromocodesReceved: (state, action) => {
            state.allPromocodes = action.payload;
            state.isLoading = "READY";
        }
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

    downloadAllPromocodesReceved,

 } = actions;

 export const downloadAllPromocodes = () => async (dispatch) => {
    dispatch(setSaleRequested())
    try {
        const content = await promocodesService.get();
        dispatch(downloadAllPromocodesReceved(content))

    } catch (error) {
        dispatch(setSaleRequestFile())
    }
 }

 export const setSale = () => async (dispatch, getState) => {
    dispatch(setSaleRequested())
    try {
        const {allPromocodes, entity} = getState().promocode;
        const promocode = allPromocodes.find((item) => item.code === entity)
        console.log(promocode)
        if (promocode === undefined) {
            dispatch(setSaleReceved(null));
          } else {
            allPromocodes.forEach((item) => {
                if (item.code === entity) {
                  dispatch(setSaleReceved(item.sale));
                }
              });
          }
        // dispatch(setSaleReceved(payload));
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