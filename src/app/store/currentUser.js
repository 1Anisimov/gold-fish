import { createSlice } from "@reduxjs/toolkit";
import currentUserService from "../services/currentUser.service";
// import profileImg from '../image/img_events_2.png'

// const initialState = {
//     name: 'Александр',
//     grade: 'Любитель',
//     gradeProgress: 1200,
//     img: profileImg,
//     card: 'silver',
//     sale: 10
// }


const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {
        isLoading: "LOADING",
        userInfo: null
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
            state.userInfo = action.payload;
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


export const getCurrentUser = () => (state) => state.currentUser.userInfo
export const getLoadingStatus = () => (state) => state.currentUser.isLoading
 

export default currentUserReducer;