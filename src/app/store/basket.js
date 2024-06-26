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

 } = actions;

 export const addQuantityProduct = (productId) =>  (dispatch) => {
    dispatch(quantityProductRequested())
        dispatch(addQuantityProductReceved(productId))
 }

 export const removeQuantityProduct = (productId) =>  (dispatch) => {
    dispatch(quantityProductRequested())
        dispatch(removeQuantityProductReceved(productId))
 }

 export const removeProductOnBasket = (productId) =>  (dispatch) => {
    dispatch(removeProductOnBasketRequested())
        dispatch(removeProductOnBasketReceved(productId))
 }

 export const addProductsToBasket = (payload) =>  (dispatch) => {
    dispatch(addProductsToBasketRequested())
        const newPayload = {
            ...payload,
            quantity: 1
        }
        dispatch(addProductsToBasketReceved(newPayload))
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