import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        category: null,
        isLoading: "LOADING",
        age: null,
        subcategory: null,
        presence: null,
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
    }
});

const { reducer: filtersReducer, actions } = filtersSlice;
const {
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
export const getFiltersState = () => (state) => state.filter;
export const getFiltersLoadingStatus = () => (state) => state.filter.isLoading;
export const getFiltersPrice = () => (state) => state.filter.price;
export const getFiltersAge = () => (state) => state.filter.age;

// export const getFiltersByIds = (filtersIds) => (state) => {
//     if (state.filters.entities) {
//             for (const prof of state.filters.entities) {
//                 if (prof._id === filtersIds) {
//                     return prof;
//                 }
//             }
//     } return {};
// };

export default filtersReducer;
