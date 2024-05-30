import { createSlice } from "@reduxjs/toolkit";

const breadcrumbSlice = createSlice({
    name: "breadcrumb",
    initialState: {
        isLoading: "LOADING",
        entity: [
            
            {
             main: {
                title: 'Главная',
                href: '/'
                }   
            },

            {
            main: {
                title: 'Каталог',
                href: '/catalog/'
                }
            },
        ]
    },
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING"
        },
        setLoadingStatusError: (state) => {
            state.isLoading = "ERROR"
        },

        setActiveBreadcrumbEntityReceved: (state, action) => {
            state.entity = action.payload;
            state.isLoading = "READY"
        }
    }
});

const { reducer: breadcrumbReducer, actions } = breadcrumbSlice;
const {

    setLoadingStatusLoading,
    setLoadingStatusError,

    setActiveBreadcrumbEntityReceved,

    

 } = actions;

 export const setActiveBreadcrumbEntity = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setActiveBreadcrumbEntityReceved())
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 

export default breadcrumbReducer;