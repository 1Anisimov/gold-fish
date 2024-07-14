import { createSlice } from "@reduxjs/toolkit";
// import currentUserService from "../services/currentUser.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import history from "../utils/history";
import usersService from "../services/users.service";

const initialState = localStorageService.getAccessToken()
    ? {allUsers: [],
        isLoading: "LOADING",
        auth: {userId: localStorageService.getUserId()},
        isLoggedIn: true,
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
        }}
    : {allUsers: [],
        isLoading: "LOADING",
        auth: null,
        isLoggedIn: false,
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
        },}

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: initialState,
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

        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            // state.isLoggedIn = true;
        },

        userCreated: (state, action) => {
            if (!Array.isArray(state.allUsers)) {
                state.allUsers = [];
            }
            state.allUsers.push(action.payload);
        },
        

        setCurrentUserReceved: (state, action) => {
            state.user.userInfo = action.payload;
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
    // setLoadingStatusError,
    // setLoadingStatusReady,
    setCurrentUserReceved,
    setChangedUserInfoNameReceved,
    setChangedUserInfoNumberReceved,
    setChangedUserInfoMailReceved,

    authRequestSuccess,
    userCreated,

    setUserInfoReceved,

 } = actions;

 export const logIn = ({ payload }) => async (dispatch) => {
    const { email, password } = payload;
    dispatch(setLoadingStatusLoading());
    try {
        const data = await authService.login({
            email,
            password
        });
        dispatch(authRequestSuccess({ userId: data.localId }));
        
        
        localStorageService.setTokens(data);
        const currentUser = await usersService.getCurrentUser();
        dispatch(setCurrentUserReceved(currentUser))

        history.push(`/user/${data.localId}`);

    } catch (error) {        
            console.log("ERROR: <logIn>", error );
    }
};

 export const signUp = ({ mail, password, ...rest }) => async (dispatch) => {
    dispatch(setLoadingStatusLoading());
    try {
        const data = await authService.register({ mail, password });
        console.log("RIGISTER DATA", data);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.localId }));
        dispatch(createUser({
                id: data.localId,
                mail,
                image: "smesharik.png",
                number: "+7 111 11 11",
                totalPurchase: 0,
                isAdmin: false,
                ...rest
            }
        ));
    } catch (error) {
        console.log("ERROR: <singUp>", error)
    }
};

function createUser(payload) {
    console.log("payload", payload);
    return async function (dispatch) {
        try {
            const { content } = await usersService.create(payload);
            dispatch(userCreated(content));
            history.push("/");
        } catch (error) {
            console.log("ERROR: <createUser>", error)
        }
    };
};

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
        const content = await usersService.getCurrentUser()
        dispatch(setCurrentUserReceved(content))
    } catch (error) {
        console.log("ERROR: <setCurrentUser>", error);
    }
 }


export const getCurrentUser = () => (state) => state.currentUser.user.userInfo
export const getChangedUserInfo = () => (state) => state.currentUser.user.changedUserInfo
export const getCurrentUserLoadingStatus = () => (state) => state.currentUser.user.userLoadingStatus
export const getCurrentUserTotalPurchase = () => (state) => state.currentUser.user.userInfo.totalPurchase

export const getIsLoggedIn = () => (state) => state.currentUser.isLoggedIn;
export const getAuthCurrentUser = () => (state) => state.currentUser.auth;

export const getLoadingStatus = () => (state) => state.currentUser.isLoading
 

export default currentUserReducer;