import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        category: null,
        isLoading: "LOADING",
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
    reducers: {
        removeCategoryAndSubcategoryRequested: (state) => {
            state.isLoading = "LOADING";
        },
        removeCategoryAndSubcategoryReceved: (state) => {
            state.category = null;
            state.subcategory = null;
            state.isLoading = "READY";
        },
        removeCategoryAndSubcategoryRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        //Category
        filtersCategoryRequested: (state) => {
            state.isLoading = "LOADING";
        },
        filtersCategoryReceved: (state, action) => {
            state.subcategory = null;
            state.category = action.payload;
            state.isLoading = "READY";
        },
        filtersCategoryRequestFile: (state) => {
            state.isLoading = "ERROR";
        },
        
        //SubCategory
        filtersSubcategoryRequested: (state) => {
            state.isLoading = "LOADING";
        },
        filtersSubcategoryReceved: (state, action) => {
            state.subcategory = action.payload;
            state.isLoading = "READY";
        },
        filtersSubcategoryRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        // Age
        filtersAgeRequested: (state) => {
            state.isLoading = "LOADING";
        },
        filtersAgeReceved: (state, action) => {
            state.age = action.payload;
            state.isLoading = "READY";
        },
        filtersAgeRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        //Price
        filtersPriceRequested: (state) => {
            state.isLoading = "LOADING";
        },
        filtersPriceReceved: (state, action) => {
            state.price = action.payload;
            state.isLoading = "READY";
        },
        filtersPriceRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        //Presence
        filtersPresenceRequested: (state) => {
            state.isLoading = "LOADING";
        },
        filtersPresenceReceved: (state, action) => {
            state.presence = action.payload;
            state.isLoading = "READY";
        },
        filtersPresenceRequestFile: (state) => {
            state.isLoading = "ERROR";
        },
        
        filtersRemoveAllRequested: (state) => {
            state.isLoading = "LOADING";
        },
        filtersRemoveAllReceved: (state) => {
            state.age = {
                18: true,
                '3,4,5': true,
                '6,7': true,
                '8,9,10,11,12': true,
                '13,14,15': true,
                '16,17': true
              };
            state.category = null;
            state.subcategory = null;
            state.presence = {
                are_available: true,
                to_order: true,
                not_available: true
              };
            state.price = [1, 10000];
            state.players = [1, 10];
            state.isLoading = "READY";
        },
        filtersRemoveAllRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        changeAgeCheckboxRequested: (state) => {
            state.isLoading = "LOADING";
        },
        changeAgeCheckboxReceved: (state, action) => {
            state.presence = action.payload;
            state.isLoading = "READY";
        },
        changeAgeCheckboxRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        changePlayersRequested: (state) => {
            state.isLoading = "LOADING";
        },
        changePlayersReceved: (state, action) => {
            state.players = action.payload;
            state.isLoading = "READY";
        },
        changePlayersRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        changePriceInputRequested: (state) => {
            state.isLoading = "LOADING";
        },
        changePriceInputMinReceved: (state, action) => {
            state.price[0] = action.payload;
            state.isLoading = "READY";
        },
        changePriceInputMaxReceved: (state, action) => {
            state.price[1] = action.payload;
            state.isLoading = "READY";
        },
        changePriceInputRequestFile: (state) => {
            state.isLoading = "ERROR";
        },

        changePlayersInputRequested: (state) => {
            state.isLoading = "LOADING";
        },
        changePlayersInputMinReceved: (state, action) => {
            state.players[0] = action.payload;
            state.isLoading = "READY";
        },
        changePlayersInputMaxReceved: (state, action) => {
            state.players[1] = action.payload;
            state.isLoading = "READY";
        },
        changePlayersInputRequestFile: (state) => {
            state.isLoading = "ERROR";
        },
    }
});

const { reducer: filtersReducer, actions } = filtersSlice;
const {
    changePlayersInputRequested,
    changePlayersInputMinReceved,
    changePlayersInputMaxReceved,
    changePlayersInputRequestFile,

    changePriceInputRequested,
    changePriceInputMinReceved,
    changePriceInputMaxReceved,
    changePriceInputRequestFile,

    changePlayersRequested,
    changePlayersReceved,
    changePlayersRequestFile,

    changeAgeCheckboxRequested,
    changeAgeCheckboxReceved,
    changeAgeCheckboxRequestFile,

    filtersRemoveAllRequested,
    filtersRemoveAllReceved,
    filtersRemoveAllRequestFile,

    removeCategoryAndSubcategoryRequested,
    removeCategoryAndSubcategoryReceved,
    removeCategoryAndSubcategoryRequestFile,

    filtersPresenceRequested,
    filtersPresenceReceved,
    filtersPresenceRequestFile,

    filtersCategoryRequested,
    filtersCategoryReceved,
    filtersCategoryRequestFile,

    filtersSubcategoryRequested,
    filtersSubcategoryReceved,
    filtersSubcategoryRequestFile,

    filtersAgeRequested,
    filtersAgeReceved,
    filtersAgeRequestFile,

    filtersPriceRequested,
    filtersPriceReceved,
    filtersPriceRequestFile,

 } = actions;

 export const changeAgeCheckbox = () => async (dispatch) => {
    dispatch(changeAgeCheckboxRequested())
    try {
        dispatch(changeAgeCheckboxReceved())
    } catch (error) {
        dispatch(changeAgeCheckboxRequestFile())
    }
}

export const changePlayersInput = (value, name) => async (dispatch) => {
    dispatch(changePlayersInputRequested())
    try {
        if(name === 'min') {
            dispatch(changePlayersInputMinReceved(value))
        }
        if(name === 'max') {
            dispatch(changePlayersInputMaxReceved(value))
        }
    } catch (error) {
        dispatch(changePlayersInputRequestFile())
    }
}

export const changePriceInput = (value, name) => async (dispatch) => {
    dispatch(changePriceInputRequested())
    try {
        if(name === 'min') {
            dispatch(changePriceInputMinReceved(value))
        }
        if(name === 'max') {
            dispatch(changePriceInputMaxReceved(value))
        }
        
    } catch (error) {
        dispatch(changePriceInputRequestFile())
    }
}

 export const removeAllFilters = () => async (dispatch) => {
    dispatch(filtersRemoveAllRequested())
    try {
        dispatch(filtersRemoveAllReceved())
    } catch (error) {
        dispatch(filtersRemoveAllRequestFile())
    }
}

 export const RemoveCategoryAndSubcategory = () => async (dispatch) => {
    dispatch(removeCategoryAndSubcategoryRequested())
    try {
        dispatch(removeCategoryAndSubcategoryReceved())
    } catch (error) {
        dispatch(removeCategoryAndSubcategoryRequestFile())
    }
}

 export const getPrice = (payload) => async (dispatch) => {
    dispatch(filtersPriceRequested())
    try {
        dispatch(filtersPriceReceved(payload))
    } catch (error) {
        dispatch(filtersPriceRequestFile())
    }
}
export const getPresence = (payload) => async (dispatch) => {
    dispatch(filtersPresenceRequested())
    try {
        dispatch(filtersPresenceReceved(payload))
    } catch (error) {
        dispatch(filtersPresenceRequestFile())
    }
}

export const getAge = (payload) => async (dispatch) => {
    dispatch(filtersAgeRequested())
    try {
        dispatch(filtersAgeReceved(payload))
    } catch (error) {
        dispatch(filtersAgeRequestFile())
    }
}

export const getCategory = (payload) => async (dispatch) => {
    dispatch(filtersCategoryRequested())
    try {
        dispatch(filtersCategoryReceved(payload))
    } catch (error) {
        dispatch(filtersCategoryRequestFile())
    }
};
export const getSubcategory = (payload) => async (dispatch) => {
    dispatch(filtersSubcategoryRequested())
    try {
        dispatch(filtersSubcategoryReceved(payload))
    } catch (error) {
        dispatch(filtersSubcategoryRequestFile());
    }
}

export const changePlayers = (payload) => async (dispatch) => {
    dispatch(changePlayersRequested())
    try {
        dispatch(changePlayersReceved(payload))
    } catch (error) {
        dispatch(changePlayersRequestFile());
    }
}

export const getFiltersState = () => (state) => state.filter;
export const getFiltersLoadingStatus = () => (state) => state.filter.isLoading;
export const getFiltersPrice = () => (state) => state.filter.price;
export const getFiltersAge = () => (state) => state.filter.age;
export const getFiltersPresence = () => (state) => state.filter.presence;
export const getFiltersPlayers = () => (state) => state.filter.players; 




export default filtersReducer;
