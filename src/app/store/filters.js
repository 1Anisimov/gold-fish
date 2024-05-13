import { createSlice } from "@reduxjs/toolkit";
import productsService from "../services/products.service";

const initialStateFilters = {
        products: [],
        activeProducts: [],
        activePaginatedPage: 1,
        
        paginatedProducts: [],
        filters: {
            category: null,
            age: {
                18: true,
                '3,4,5': true,
                '6,7': true,
                '8,9,10,11,12': true,
                '13,14,15': true,
                '16,17': true
              },
            subcategory: null,
            presence: {
                are_available: true,
                to_order: true,
                not_available: true
            },
            price: [1, 10000],
            players: [1, 10]
        },
        isLoading: "LOADING",
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: initialStateFilters,
    reducers: {
        setLoadingStatusLoading: (state) => {
            state.isLoading = "LOADING"
        },

        setLoadingStatusReady: (state) => {
            state.isLoading = "READY"
        },

        setLoadingStatusError: (state) => {
            state.isLoading = "ERROR"
        },
        
        removeCategoryAndSubcategoryReceved: (state) => {
            state.filters.category = null;
            state.filters.subcategory = null;
            state.isLoading = "READY";
        },

        //Category
        
        filtersCategoryReceved: (state, action) => {
            state.filters.subcategory = null;
            state.filters.category = action.payload;
            state.isLoading = "READY";
        },
        
        //SubCategory
        
        filtersSubcategoryReceved: (state, action) => {
            state.filters.subcategory = action.payload;
            state.isLoading = "READY";
        },
        

        // Age
        
        filtersAgeReceved: (state, action) => {
            state.filters.age = action.payload;
            state.isLoading = "READY";
        },
        
        //Price
        
        filtersPriceReceved: (state, action) => {
            state.filters.price = action.payload;
            state.isLoading = "READY";
        },
        
        //Presence
        
        filtersPresenceReceved: (state, action) => {
            state.filters.presence = action.payload;
            state.isLoading = "READY";
        },
                
        filtersRemoveAllReceved: (state) => {
            
            
            state.paginatedProducts = [];
            state.filters.category = null;
            state.filters.age= {
                18: true,
                '3,4,5': true,
                '6,7': true,
                '8,9,10,11,12': true,
                '13,14,15': true,
                '16,17': true
              };
              state.filters.subcategory= null;
              state.filters.presence= {
                are_available: true,
                to_order: true,
                not_available: true
                };
            state.filters.price= [1, 10000];
            state.filters.players= [1, 10];
            state.isLoading= "READY";
        },
        
        changeAgeCheckboxReceved: (state, action) => {
            state.filters.presence = action.payload;
            state.isLoading = "READY";
        },
        
        changePlayersReceved: (state, action) => {
            state.filters.players = action.payload;
            state.isLoading = "READY";
        },
        

        changePriceInputMinReceved: (state, action) => {
            state.filters.price[0] = action.payload;
            state.isLoading = "READY";
        },
        changePriceInputMaxReceved: (state, action) => {
            state.filters.price[1] = action.payload;
            state.isLoading = "READY";
        },
        
        
        changePlayersInputMinReceved: (state, action) => {
            state.filters.players[0] = action.payload;
            state.isLoading = "READY";
        },
        changePlayersInputMaxReceved: (state, action) => {
            state.filters.players[1] = action.payload;
            state.isLoading = "READY";
        },
        createProductReceved: (state, action) => {
            state.products = action.payload
            state.isLoading = "READY"
        },

        setActiveProductsReceved: (state, action) => {
            state.activeProducts = action.payload
            state.isLoading = "READY"
        },

        
        changePaginatedProductsReceved: (state, action) => {
            state.paginatedProducts = action.payload;
            state.isLoading = "READY";
        },
        setActivePaginatedPageReceved: (state, action) => {
            state.activePaginatedPage = action.payload;
            state.isLoading = "READY";
        }
    }
});

const { reducer: filtersReducer, actions } = filtersSlice;
const {
    setLoadingStatusLoading,
    setLoadingStatusError,
    // setLoadingStatusReady,

    changePlayersInputMinReceved,
    changePlayersInputMaxReceved,

    changePriceInputMinReceved,
    changePriceInputMaxReceved,

    changePlayersReceved,

    changeAgeCheckboxReceved,

    filtersRemoveAllReceved,

    removeCategoryAndSubcategoryReceved,

    filtersPresenceReceved,

    filtersCategoryReceved,

    filtersSubcategoryReceved,

    filtersAgeReceved,

    filtersPriceReceved,

    createProductReceved,

    setActiveProductsReceved,

    
    setActivePaginatedPageReceved,

 } = actions;

 


export const setActivePaginatedPage = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setActivePaginatedPageReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }



 const handleAgeParams = (age, ageState) => {
    
      let ageArray = [];
      Object.keys(ageState).map((item) => {
        if (ageState[item]) {
          ageArray.push(item);
        }
        return ageArray;
      });
      let str = ageArray.join(',');
      const newAgeArray = str.split(',');

      return newAgeArray.find((item) => item === age);
    
  };
  const handlePlayersParams = (str) => {
    const players = str.split('-');
    const newPlayersArray = [];
    if (players.length > 1) {
      for (let i = Number(players[0]); i <= Number(players[1]); i++) {
        newPlayersArray.push(i);
      }
      return newPlayersArray;
    } else {
      newPlayersArray.push(Number(players[0]));
      newPlayersArray.push(Number(players[0]));
      return newPlayersArray;
    }
  };

 

 export const setActiveProducts = () => async (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
    try {
        const { category, subcategory, age, price, players } = getState().filter.filters
        const products = getState().filter.products

        if(products.length > 0) {
            const filteredProducts = products.filter((product) => {
            
                return (subcategory !== null && product.subcategory === subcategory) ||
                 (subcategory === null && category !== null && product.category === category) || 
                 (subcategory === null && category === null)
                 ? true : false
            })
            const newArray = filteredProducts.filter(
                (product) =>
                price[1] >= product.price &&
                price[0] <= product.price &&
                age &&
                  handleAgeParams(product.age, age) &&
                  players[0] <= handlePlayersParams(product.players)[0] &&
                  players[1] >=
                    handlePlayersParams(product.players)[handlePlayersParams(product.players).length - 1]
              );
              dispatch(setActiveProductsReceved(newArray))
              dispatch(setActivePaginatedPageReceved(1))
            
        }
        
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }
 export const addProducts = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        const content = await productsService.get();
        dispatch(createProductReceved(content))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 
 export const changeAgeCheckbox = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(changeAgeCheckboxReceved())
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

export const changePlayersInput = (value, name) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        if(name === 'min') {
            dispatch(changePlayersInputMinReceved(value))
        }
        if(name === 'max') {
            dispatch(changePlayersInputMaxReceved(value))
        }
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

export const changePriceInput = (value, name) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        if(name === 'min') {
            dispatch(changePriceInputMinReceved(value))
        }
        if(name === 'max') {
            dispatch(changePriceInputMaxReceved(value))
        }
        dispatch(setActiveProducts())
        
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

 export const removeAllFilters = () => async (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(filtersRemoveAllReceved())
        dispatch(setActiveProducts())
        
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

 export const RemoveCategoryAndSubcategory = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(removeCategoryAndSubcategoryReceved())
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

 export const getPrice = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(filtersPriceReceved(payload))
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}
export const getPresence = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(filtersPresenceReceved(payload))
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

export const getAge = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(filtersAgeReceved(payload))
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

export const getCategory = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(filtersCategoryReceved(payload))
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
};
export const getSubcategory = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(filtersSubcategoryReceved(payload))
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError());
    }
}

export const changePlayers = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(changePlayersReceved(payload))
        dispatch(setActiveProducts())
    } catch (error) {
        dispatch(setLoadingStatusError());
    }
}

export const getAllProducts = () => (state) => state.filter.products
export const getAllActiveProducts = () => (state) => state.filter.activeProducts
export const getNumberOfProductsOnPage = () => (state) => state.filter.numberOfProductsOnPageArray
export const getActivePaginatedPage = () => (state) => state.filter.activePaginatedPage
export const getActivePaginatedProducts = () => (state) => state.filter.paginatedProducts

export const getFiltersLoadingStatus = () => (state) => state.filter.isLoading;
export const getFiltersPrice = () => (state) => state.filter.filters.price;
export const getFiltersAge = () => (state) => state.filter.filters.age;
export const getFiltersPresence = () => (state) => state.filter.filters.presence;
export const getFiltersPlayers = () => (state) => state.filter.filters.players; 




export default filtersReducer;
