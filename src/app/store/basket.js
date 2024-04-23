import { createSlice } from "@reduxjs/toolkit";

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
        addProductsToBasketRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        removeProductOnBasketRequested: (state) => {
            state.isLoading = "LOADING";
        },
        removeProductOnBasketReceved: (state, action) => {
            state.entities = state.entities.filter((product) => product.id !== action.payload)
            state.isLoading = "READY";
        },
        removeProductOnBasketRequestFile: (state) => {
            state.isLoading = "ERROR";
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
        quantityProductRequestFile: (state) => {
            state.isLoading = "ERROR";
        },
    }
});

const { reducer: basketReducer, actions } = basketSlice;
const {
    quantityProductRequested,
    addQuantityProductReceved,
    removeQuantityProductReceved,
    quantityProductRequestFile,

    removeProductOnBasketRequested,
    removeProductOnBasketReceved,
    removeProductOnBasketRequestFile,

    addProductsToBasketRequested,
    addProductsToBasketReceved,
    addProductsToBasketRequestFile,

 } = actions;

 export const addQuantityProduct = (productId) => async (dispatch) => {
    dispatch(quantityProductRequested())
    try {
        dispatch(addQuantityProductReceved(productId))
    } catch (error) {
        dispatch(quantityProductRequestFile())
    }
 }
 export const removeQuantityProduct = (productId) => async (dispatch) => {
    dispatch(quantityProductRequested())
    try {
        dispatch(removeQuantityProductReceved(productId))
    } catch (error) {
        dispatch(quantityProductRequestFile())
    }
 }

 export const removeProductOnBasket = (productId) => async (dispatch) => {
    dispatch(removeProductOnBasketRequested())
    try {
        dispatch(removeProductOnBasketReceved(productId))
    } catch (error) {
        dispatch(removeProductOnBasketRequestFile())
    }
 }

 export const addProductsToBasket = (payload) => async (dispatch) => {
    dispatch(addProductsToBasketRequested())
    try {
        const newPayload = {
            ...payload,
            quantity: 1
        }
        dispatch(addProductsToBasketReceved(newPayload))
    } catch (error) {
        dispatch(addProductsToBasketRequestFile());
    }
 }


export const getTotalPriceBasket = () => (state) => {
    if(state.basket.entities.length > 0) {
       return state.basket.entities.reduce((sum, product) => {
        if(product.sale !== null) return sum + (product.sale * product.quantity)
        else return sum + (product.price * product.quantity)
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