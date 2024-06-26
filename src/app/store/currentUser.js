import { createSlice } from "@reduxjs/toolkit";
import currentUserService from "../services/currentUser.service";



const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {
        isLoading: "LOADING",
        user: {
            userInfo: {
                name: null,
                number: null,
                mail: null,
                img: null,
                totalPurchase : null
              },
              changedUserInfo: {
                name: null,
                secondName: null,
                number: null,
                mail: null,
              },
              userLoadingStatus: "LOADING"
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
            state.user.userLoadingStatus = "READY"
            state.isLoading = "READY";
        },

        setChangedUserInfoNameReceved: (state, action) => {
            state.user.changedUserInfo.name = action.payload
            state.isLoading = "READY";
        },
        setChangedUserInfoNumberReceved: (state, action) => {
            state.user.changedUserInfo.number = action.payload
            state.isLoading = "READY";
        },
        setChangedUserInfoMailReceved: (state, action) => {
            state.user.changedUserInfo.mail = action.payload
            state.isLoading = "READY";
        },

        setUserInfoReceved: (state, action) => {
            if(state.user.changedUserInfo?.[action.payload] && state.user.changedUserInfo?.[action.payload].length > 1) {
                state.user.userInfo[action.payload] = state.user.changedUserInfo?.[action.payload];
            }
            state.isLoading = "READY";
        },
    }
});

const { reducer: currentUserReducer, actions } = currentUserSlice;
const {
    setLoadingStatusLoading,
    setLoadingStatusError,
    // setLoadingStatusReady,
    setCurrentUserReceved,
    setChangedUserInfoNameReceved,
    setChangedUserInfoNumberReceved,
    setChangedUserInfoMailReceved,

    setUserInfoReceved,

 } = actions;

 export const setUserInfo = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setUserInfoReceved(payload))
 }

 export const setChangedUserInfoNumber = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setChangedUserInfoNumberReceved(payload))
 }

 export const setChangedUserInfoMail = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setChangedUserInfoMailReceved(payload))
 }

 export const setChangedUserInfoName = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setChangedUserInfoNameReceved(payload))
 }

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
export const getChangedUserInfo = () => (state) => state.currentUser.user.changedUserInfo
export const getCurrentUserLoadingStatus = () => (state) => state.currentUser.user.userLoadingStatus
export const getCurrentUserTotalPurchase = () => (state) => state.currentUser.user.userInfo.totalPurchase

export const getLoadingStatus = () => (state) => state.currentUser.isLoading
 

export default currentUserReducer;