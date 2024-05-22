import { createSlice } from "@reduxjs/toolkit";
import currentUserService from "../services/currentUser.service";



const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {
        isLoading: "LOADING",
        user: {
            userInfo: {
                name: null,
                secondName: null,
                number: null,
                mail: null,
                grade: null,
                gradeProgress: null,
                img: null,
                card: null,
                sale: null,
                totalPurchase : null
              }
        },
        
    },
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING";
        },
        setLoadingStatusError: (state) => {
            state.isLoading = "ERROR";
        },
        // setLoadingStatusReady: (state) => {
        //     state.isLoading = "READY";
        // },

        setCurrentUserReceved: (state, action) => {
            state.user = action.payload;
            
            state.isLoading = "READY";
        }
    }
});

const { reducer: currentUserReducer, actions } = currentUserSlice;
const {
    setLoadingStatusLoading,
    setLoadingStatusError,
    // setLoadingStatusReady,
    setCurrentUserReceved,

 } = actions;

 export const setCurrentUser = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        const content = await currentUserService.get()
        dispatch(setCurrentUserReceved(content))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }


export const getCurrentUser = () => (state) => state.currentUser.user.userInfo
// export const getCurrentUserMedals = () => (state) => state.currentUser.user.medals
export const getCurrentUserTotalPurchase = () => (state) => state.currentUser.user.userInfo.totalPurchase

export const getLoadingStatus = () => (state) => state.currentUser.isLoading
 

export default currentUserReducer;