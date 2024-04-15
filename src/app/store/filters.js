import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        category: null,
        isLoading: true,
        error: null,
        age: null,
        subcategory: null,
        presence: null,
        price: null

    },
    reducers: {
        filtersCategoryRequested: (state) => {
            state.isLoading = true;
        },
        filtersCategoryReceved: (state, action) => {
            state.subcategory = null;
            state.category = action.payload;
            state.isLoading = false;
        },
        filtersCategoryRequestFile: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        filtersSubcategoryRequested: (state) => {
            state.isLoading = true;
        },
        filtersSubcategoryReceved: (state, action) => {
            state.subcategory = action.payload;
            state.isLoading = false;
        },
        filtersSubcategoryRequestFile: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: filtersReducer, actions } = filtersSlice;
const {
    filtersCategoryRequested,
    filtersCategoryReceved,
    filtersCategoryRequestFile,
    filtersSubcategoryRequested,
    filtersSubcategoryReceved,
    filtersSubcategoryRequestFile

 } = actions;

export const getCategory = (payload) => async (dispatch) => {
    dispatch(filtersCategoryRequested())
    try {
        dispatch(filtersCategoryReceved(payload))
    } catch (error) {
        dispatch(filtersCategoryRequestFile(error.message))
    }
};
export const getSubcategory = (payload) => async (dispatch) => {
    dispatch(filtersSubcategoryRequested())
    try {
        dispatch(filtersSubcategoryReceved(payload))
    } catch (error) {
        dispatch(filtersSubcategoryRequestFile(error.message));
    }
}
// export const getFilters = () => (state) => state.filters.entities;
// export const getFiltersLoadingStatus = () => (state) => state.filters.isLoading;
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
