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
              },
              changedUserInfo: {
                name: null,
                secondName: null,
                number: null,
                mail: null,
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
        },

        setChangedUserInfoNameReceved: (state, action) => {
            state.user.changedUserInfo.name = action.payload
            state.isLoading = "READY";
        },
        setChangedUserInfoSecondNameReceved: (state, action) => {
            state.user.changedUserInfo.secondName = action.payload
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
            if(action.payload === "name") {
                if(state.user.changedUserInfo?.name && state.user.changedUserInfo?.name.length > 1) {
                    state.user.userInfo.name = state.user.changedUserInfo?.name;
                }
                if(state.user.changedUserInfo?.secondName && state.user.changedUserInfo?.secondName.length > 1) {
                    state.user.userInfo.secondName = state.user.changedUserInfo?.secondName
                }
            }
            if(action.payload === "number") {
                if(state.user.changedUserInfo?.number && state.user.changedUserInfo?.number.length > 1) {
                    state.user.userInfo.number = state.user.changedUserInfo?.number
                }
            }
            if(action.payload === "mail") {
                if(state.user.changedUserInfo?.mail && state.user.changedUserInfo?.mail.length > 1) {
                    state.user.userInfo.mail = state.user.changedUserInfo?.mail
                }
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
    setChangedUserInfoSecondNameReceved,
    setChangedUserInfoNumberReceved,
    setChangedUserInfoMailReceved,

    setUserInfoReceved,

 } = actions;

 export const setUserInfo = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setUserInfoReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setChangedUserInfoSecondName = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setChangedUserInfoSecondNameReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setChangedUserInfoNumber = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setChangedUserInfoNumberReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setChangedUserInfoMail = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setChangedUserInfoMailReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setChangedUserInfoName = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setChangedUserInfoNameReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
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
// export const getCurrentUserMedals = () => (state) => state.currentUser.user.medals
export const getCurrentUserTotalPurchase = () => (state) => state.currentUser.user.userInfo.totalPurchase

export const getLoadingStatus = () => (state) => state.currentUser.isLoading
 

export default currentUserReducer;