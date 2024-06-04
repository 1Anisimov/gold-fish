import { createSlice } from "@reduxjs/toolkit";
import productsService from "../services/products.service";

const initialStateFilters = {
        products: [],
        saleProducts: [],
        specialProducts: [],
        activeProducts: [],
        activePaginatedPage: 1,
        activePaginatedPageOnFound: 1,
        foundProducts: [],
        foundProductsOnPage: [],
        foundProductsLoadingStatus: "LOADING",
        valueSearch: "",
        productsLoadingStatus: "LOADING",
        activeProductOnProductPage: {},

        paginatedProducts: [],
        titleCatalog: "Каталог продукции",
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

const productsSlice = createSlice({
    name: "products",
    initialState: initialStateFilters,
    reducers: {
        setFoundProductsLoadingStatusLoading: (state) => {
            state.foundProductsLoadingStatus = "LOADING"
        },
        setProductsLoadingStatus: (state, action) => {
            state.productsLoadingStatus = action.payload;
        },

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
        },

        setFoundProductsReceved: (state, action) => {
            state.foundProducts = action.payload;
            state.foundProductsLoadingStatus = "READY"
        },
        setFoundProductsOnPageReceved: (state, action) => {
            state.foundProductsOnPage = action.payload;
            state.isLoading = "READY"
        },
        setActivePaginationPageOnFoundReceved: (state, action) => {
            state.activePaginatedPageOnFound = action.payload
            state.isLoading = "READY"
        },
        setValueSearchReceved: (state, action) => {
            state.valueSearch = action.payload;
            state.isLoading = "READY";
        },

        setTitleCatalogReceved: (state, action) => {
            state.titleCatalog = action.payload;
            state.isLoading = "READY";
        },

        setSaleProductsReceved: (state, action) => {
            state.saleProducts = action.payload;
            state.isLoading = "READY";
        },

        setSpecialProductsReceved: (state, action) => {
            state.specialProducts = action.payload;
            state.isLoading = "READY";
        },
        setActiveProductOnProductPageReceved: (state, action) => {
            state.activeProductOnProductPage = action.payload;
            state.isLoading = "READY";
        },

        changeProductByAdminPageReceved: (state, action) => {
            state.products = action.payload;
            state.isLoading = "READY";
        }
        
    }
});

const { reducer: productsReducer, actions } = productsSlice;
const {
    setFoundProductsLoadingStatusLoading,
    setProductsLoadingStatus,
    setLoadingStatusLoading,
    setLoadingStatusError,

    changePlayersInputMinReceved,
    changePlayersInputMaxReceved,

    changePriceInputMinReceved,
    changePriceInputMaxReceved,

    changePlayersReceved,

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

    setFoundProductsReceved,
    setFoundProductsOnPageReceved,

    setActivePaginationPageOnFoundReceved,

    setValueSearchReceved,  
    setTitleCatalogReceved,  

    setSaleProductsReceved,
    setSpecialProductsReceved,

    setActiveProductOnProductPageReceved,

    changeProductByAdminPageReceved,

 } = actions;

 export const changeProductByAdminPage = (productId, newProduct) => (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
    try {
        const {products} = getState().products;
        const newArray = [...products]
        console.log("newProduct", newProduct)
        console.log("Начало", newArray)
        const filterdProducts = newArray.filter((product) => product.id !== productId)
        console.log("Фильтр", filterdProducts)
        filterdProducts.push(newProduct)
        console.log("Push", filterdProducts)
        dispatch(changeProductByAdminPageReceved(filterdProducts))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

 export const setActiveProductOnProductPage = (productId) => async (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
    try {
        const {products} = getState().products;
        products.forEach((item) => {
            if(item.id === productId) {
                dispatch(setActiveProductOnProductPageReceved(item))
            }
        })
        // const content = await productsService.getProductById(productId);
        // dispatch(setActiveProductOnProductPageReceved(content))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

 export const setAllSpecialProducts = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        const content = await productsService.getAllSpecialProducts();
        dispatch(setSpecialProductsReceved(content))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

 export const setAllSaleProducts = () => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        const content = await productsService.getAllSaleProducts();
        dispatch(setSaleProductsReceved(content))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

 export const setTitleCatalog = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setTitleCatalogReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}
 
 export const setValueSearch = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setValueSearchReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

export const setFoundProductsOnPage = () => async (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
    try {
        const {foundProducts} = getState().products
        dispatch(setFoundProductsOnPageReceved(foundProducts))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

export const setFoundProducts = () => async (dispatch, getState) => {
    dispatch(setFoundProductsLoadingStatusLoading())
    try {
        const { products, valueSearch } = getState().products;
        if(valueSearch && valueSearch.length > 0) {
            const newArray = products.filter((p) => {
                return p.name
                  .toLowerCase()
                  .trim()
                  .includes(valueSearch ? valueSearch.toLowerCase().trim() : '');
              });
            dispatch(setFoundProductsReceved(newArray))
        }
        
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
}

export const setActivePaginatedPageOnFound = (payload) => async (dispatch) => {
    dispatch(setLoadingStatusLoading())
    try {
        dispatch(setActivePaginationPageOnFoundReceved(payload))
    } catch (error) {
        dispatch(setLoadingStatusError())
    }
 }

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
        const { category, subcategory, age, price, players } = getState().products.filters
        const products = getState().products.products

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
    dispatch(setProductsLoadingStatus("LOADING"))
    try {
        const content = await productsService.get();
        dispatch(createProductReceved(content))
        dispatch(setProductsLoadingStatus("READY"))
    } catch (error) {
        dispatch(setLoadingStatusError())
        dispatch(setProductsLoadingStatus("ERROR"))
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

export const getTitleCatalog = () => (state) => state.products.titleCatalog

export const getAllProducts = () => (state) => state.products.products

export const getProductsLoadingStatus = () => (state) => state.products.productsLoadingStatus
export const getFoundProductsLoadingStatus = () => (state) => state.products.foundProductsLoadingStatus

export const getAllActiveProducts = () => (state) => state.products.activeProducts
export const getSaleProducts = () => (state) => state.products.saleProducts
export const getSpecialProducts = () => (state) => state.products.specialProducts

export const getActivePaginatedPage = () => (state) => state.products.activePaginatedPage
export const getActivePaginatedPageOnFound = () => (state) => state.products.activePaginatedPageOnFound

export const getFoundProductsOnFoundProductsPage = () => (state) => state.products.foundProductsOnPage
export const getFoundProducts = () => (state) => state.products.foundProducts
export const getValueSearch = () => (state) => state.products.valueSearch

export const getFiltersLoadingStatus = () => (state) => state.products.isLoading;
export const getFiltersPrice = () => (state) => state.products.filters.price;
export const getFiltersAge = () => (state) => state.products.filters.age;
export const getFiltersPresence = () => (state) => state.products.filters.presence;
export const getFiltersPlayers = () => (state) => state.products.filters.players; 

export const getActiveProductOnProductPage = () => (state) => state.products.activeProductOnProductPage



export default productsReducer;
