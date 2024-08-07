import { createSlice } from "@reduxjs/toolkit";
// import currentUserService from "../services/currentUser.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import history from "../utils/history";
import usersService from "../services/users.service";
import { setBasketEntities } from "./basket";


const initialState = localStorageService.getAccessToken()
    ? {
        isLoading: "LOADING",
        auth: {userId: localStorageService.getUserId()},
        isLoggedIn: true,
        user: {
            userInfo: {
                name: null,
                number: null,
                mail: null,
                img: null,
                totalPurchase : null,
                isAdmin: null
              },
              changedUserInfo: {
                name: null,
                secondName: null,
                number: null,
                mail: null,
              },
              userLoadingStatus: "LOADING"
        }}
    : {
        isLoading: "LOADING",
        auth: null,
        isLoggedIn: false,
        user: {
            userInfo: {
                name: null,
                number: null,
                mail: null,
                img: null,
                totalPurchase : null,
                isAdmin: null
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
        setLoadingStatusReady: (state) => {
            state.isLoading = "READY";
        },

        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },

        // userCreated: (state, action) => {
        //     if (!Array.isArray(state.allUsers)) {
        //         state.allUsers = [];
        //     }
        //     state.allUsers.push(action.payload);
        // },
        

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

        logOutReceved: (state) => {
        state.isLoading= "LOADING";
        state.auth= null;
        state.isLoggedIn= false;
        state.user= {
            userInfo: {
                name: null,
                number: null,
                mail: null,
                img: null,
                totalPurchase : null,
                isAdmin: null
            },
            changedUserInfo: {
                name: null,
                secondName: null,
                number: null,
                mail: null,
        },
        userLoadingStatus: "LOADING"
    }
        }
    }
});

const { reducer: currentUserReducer, actions } = currentUserSlice;
const {
    setLoadingStatusLoading,
    // setLoadingStatusError,
    setLoadingStatusReady,
    setCurrentUserReceved,
    setChangedUserInfoNameReceved,
    setChangedUserInfoNumberReceved,
    setChangedUserInfoMailReceved,

    authRequestSuccess,
    // userCreated,

    setUserInfoReceved,

    logOutReceved,

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
        dispatch(setBasketEntities())

        history.push(`/user/${data.localId}`);

    } catch (error) {        
            console.log("ERROR: <logIn>", error );
    }
};

export const logOut = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        localStorageService.removeAuthData();
        dispatch(logOutReceved());
        dispatch(setLoadingStatusReady());
    } catch (error) {
        console.log("ERROR: <logOut>", error)
    }
}

 export const signUp = ({ email, password, ...rest }) => async (dispatch) => {
    dispatch(setLoadingStatusLoading());
    try {
        const data = await authService.register({ email, password });
        dispatch(authRequestSuccess({ userId: data.localId }));
        localStorageService.setTokens(data);
        
        dispatch(createUser({
                id: data.localId,
                mail: email,
                image: "smesharik.png",
                number: "+7 111 11 11",
                totalPurchase: 0,
                isAdmin: false,
                ...rest
            },
            data
        ));
        
    } catch (error) {
        console.log("ERROR: <singUp>", error)
    }
};

function createUser(payload, data) {
    return async function (dispatch) {
        try {
            dispatch(setLoadingStatusLoading())
            await usersService.create(payload);
            dispatch(setCurrentUserReceved(payload))

            history.push(`/user/${data.localId}`)
        } catch (error) {
            console.log("ERROR: <createUser>", error)
        }
    };
};

 export const setUserInfo = (payload) => async (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
    const { changedUserInfo } = getState().currentUser.user;
    dispatch(setUserInfoReceved(payload))
    try {
        if(changedUserInfo[payload]?.length > 1) {
            await usersService.update({[payload]: changedUserInfo[payload]})
        }
        
    } catch (error) {
        console.log("ERROR: <setUserInfo>", error)
    }
        
 }

 export const setChangedUserInfoNumber = (payload) => (dispatch) => {
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
        if(localStorageService.getUserId()) {
            const content = await usersService.getCurrentUser()
            dispatch(setCurrentUserReceved(content))
        } else dispatch(setLoadingStatusReady())
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
export const getAdminStatus = () => (state) => state.currentUser.user.userInfo.isAdmin;

export const getLoadingStatus = () => (state) => state.currentUser.isLoading
 

export default currentUserReducer;