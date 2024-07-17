import { createSlice } from "@reduxjs/toolkit";
import usersService from "../services/users.service";
import localStorageService from "../services/localStorage.service";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        isLoading: "LOADING",
        entities: []
    },
    reducers: {
        addProductsToBasketRequested: (state) => {
            state.isLoading = "LOADING";
        },
        addProductsToBasketReceved: (state, action) => {
            state.entities.push(action.payload)
            state.isLoading = "READY";
        },

        removeProductOnBasketRequested: (state) => {
            state.isLoading = "LOADING";
        },
        removeProductOnBasketReceved: (state, action) => {
            state.entities = state.entities.filter((product) => product.id !== action.payload)
            state.isLoading = "READY";
        },

        quantityProductRequested: (state) => {
            state.isLoading = "LOADING";
        },
        addQuantityProductReceved: (state, action) => {
            state.entities = state.entities.map((product) => {
                if(product.id === action.payload) {
                    product.quantity++
                }
                return product
            })
            state.isLoading = "READY";
        },
        removeQuantityProductReceved: (state, action) => {
            state.entities = state.entities.map((product) => {
                if(product.id === action.payload) {
                    product.quantity--
                }
                return product
            })
            state.entities = state.entities.filter((product) => product.quantity > 0)
            state.isLoading = "READY";
        },

        setBasketEntitiesReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = "READY";
        }
    }
});

const { reducer: basketReducer, actions } = basketSlice;
const {
    quantityProductRequested,
    addQuantityProductReceved,
    removeQuantityProductReceved,

    removeProductOnBasketRequested,
    removeProductOnBasketReceved,

    addProductsToBasketRequested,
    addProductsToBasketReceved,

    setBasketEntitiesReceved,

 } = actions;

 export const setBasketEntities = () => async (dispatch) => {
    dispatch(addProductsToBasketRequested())

    try {
        if(localStorageService.getAccessToken()) {
            const currentUser = await usersService.getCurrentUser();
            if(currentUser?.basket) {
                dispatch(setBasketEntitiesReceved(currentUser.basket))
            }
        }
    } catch (error) {
        console.log("ERROR: <setBasketEntities>", error)
    }
 }

 export const addQuantityProduct = (productId) => async (dispatch, getState) => {
    dispatch(quantityProductRequested())
        dispatch(addQuantityProductReceved(productId))
        const { entities } = getState().basket;

        try {
            if(localStorageService.getAccessToken()) {
                await usersService.addProductToBasket(entities);
            }
        } catch (error) {
            console.log("ERROR: <addQuantityProduct>", error)
        }
 }

 export const removeQuantityProduct = (productId) => async (dispatch, getState) => {
    dispatch(quantityProductRequested())
        dispatch(removeQuantityProductReceved(productId))
        const { entities } = getState().basket;

        try {
            if(localStorageService.getAccessToken()) {
                await usersService.addProductToBasket(entities);
            }
        } catch (error) {
            console.log("ERROR: <removeQuantityProduct>", error)
        }
 }

 export const removeProductOnBasket = (productId) => async (dispatch, getState) => {
    dispatch(removeProductOnBasketRequested())
        dispatch(removeProductOnBasketReceved(productId))
        const { entities } = getState().basket;
    try {
        if(localStorageService.getAccessToken()) {
            await usersService.addProductToBasket(entities);
        }
    } catch (error) {
        console.log("ERROR: <removeProductOnBasket>", error)
    }
        
 }

 export const addProductsToBasket = (payload) => async (dispatch, getState) => {
    dispatch(addProductsToBasketRequested())
    const newPayload = {
        ...payload,
        quantity: 1
    }
    dispatch(addProductsToBasketReceved(newPayload))
    const { entities } = getState().basket;
    try {
        if(localStorageService.getAccessToken()) {
            await usersService.addProductToBasket(entities);
        }
        
    } catch (error) {
        console.log("ERROR: <addProductsToBasket>", error)
    }
        
 }


export const getTotalPriceBasket = () => (state) => {
    if(state.basket.entities.length > 0) {
       return state.basket.entities.reduce((sum, product) => {
        return sum + (( product.sale ? product.sale : product.price) * product.quantity)
    }, 0)
    } else return 0;
}
export const getLoadingStatusBasket = () => (state) => state.basket.isLoading;
export const getBasketEntities = () => (state) => state.basket.entities;
export const searchProductInBasket = (productId) => (state) => {
    if(state.basket.entities.length > 0) {
        return state.basket.entities.find((product) => product.id === productId)
    } else return false;

}

export default basketReducer;