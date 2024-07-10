import { createSlice } from "@reduxjs/toolkit";
import productsService from "../services/products.service";
import { nanoid } from "nanoid";

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
        },

        addProductByAdminPageReceved: (state, action) => {
            state.products.push(action.payload);
            state.isLoading = "READY";
        },

        addSpecialProductByAdminPageReceved: (state, action) => {
            // state.products.push(action.payload);
            state.specialProducts.push(action.payload);
            state.isLoading = "READY";
        },

        addSaleProductByAdminPageReceved: (state, action) => {
            // state.products.push(action.payload);
            state.saleProducts.push(action.payload);
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
    addProductByAdminPageReceved,

    addSpecialProductByAdminPageReceved,
    addSaleProductByAdminPageReceved

 } = actions;

 export const removeProductOnSpecialProductsByAdminPage = (product) => (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())

    const {specialProducts} = getState().products;

    const newSaleProductsArray = specialProducts.filter((p) => p.id !== product.id)

    dispatch(setSpecialProductsReceved(newSaleProductsArray))
 }

 export const removeProductOnSaleProductsByAdminPage = (product) => (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())

    const {saleProducts} = getState().products;
    console.log("saleProducts", saleProducts)

    const newSaleProductsArray = saleProducts.filter((p) => p.id !== product.id)

    dispatch(setSaleProductsReceved(newSaleProductsArray))
 }

 export const addToSaleProductByAdminPage = (newProduct) => (dispatch) => {
    dispatch(setLoadingStatusLoading())

    dispatch(addSaleProductByAdminPageReceved({...newProduct, id: nanoid()}))
 }

 export const addToSpecialProductByAdminPage = (newProduct) => (dispatch) => {
    dispatch(setLoadingStatusLoading())

    dispatch(addSpecialProductByAdminPageReceved({...newProduct, id: nanoid()}))
 }

 export const addProductByAdminPage = (newProduct) => (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
        const {addingProductWhere} = getState().admin;

        if(addingProductWhere === "global") {
            dispatch(addProductByAdminPageReceved({...newProduct, id: nanoid()}))
        }
        if(addingProductWhere === "special") {
            dispatch(addSpecialProductByAdminPageReceved({...newProduct, id: nanoid()}))
        }
        if(addingProductWhere === "sale") {
            dispatch(addSaleProductByAdminPageReceved({...newProduct, id: nanoid()}))
        }
        
 }

 export const changeProductByAdminPage = (productId, newProduct) => (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
        const {products} = getState().products;
        const newArray = [...products]
        const filterdProducts = newArray.filter((product) => product.id !== productId)
        filterdProducts.push(newProduct)
        dispatch(changeProductByAdminPageReceved(filterdProducts))
 }

 export const setActiveProductOnProductPage = (productId) =>  (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
        const {products} = getState().products;
        products.forEach((item) => {
            if(item.id === productId) {
                dispatch(setActiveProductOnProductPageReceved(item))
            }
        })
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

 export const setTitleCatalog = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setTitleCatalogReceved(payload))
}
 
 export const setValueSearch = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setValueSearchReceved(payload))
}

export const setFoundProductsOnPage = () =>  (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
        const {foundProducts} = getState().products
        dispatch(setFoundProductsOnPageReceved(foundProducts))
}

export const setFoundProducts = () =>  (dispatch, getState) => {
    dispatch(setFoundProductsLoadingStatusLoading())
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
}

export const setActivePaginatedPageOnFound = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setActivePaginationPageOnFoundReceved(payload))
 }

export const setActivePaginatedPage = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(setActivePaginatedPageReceved(payload))
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

 

 export const setActiveProducts = () =>  (dispatch, getState) => {
    dispatch(setLoadingStatusLoading())
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

export const changePlayersInput = (value, name) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        if(name === 'min') {
            dispatch(changePlayersInputMinReceved(value))
        }
        if(name === 'max') {
            dispatch(changePlayersInputMaxReceved(value))
        }
        dispatch(setActiveProducts())
}

export const changePriceInput = (value, name) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        if(name === 'min') {
            dispatch(changePriceInputMinReceved(value))
        }
        if(name === 'max') {
            dispatch(changePriceInputMaxReceved(value))
        }
        dispatch(setActiveProducts())
        
}

 export const removeAllFilters = () =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(filtersRemoveAllReceved())
        dispatch(setActiveProducts())
        
}

 export const removeCategoryAndSubcategory = () =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(removeCategoryAndSubcategoryReceved())
        dispatch(setActiveProducts())
}

 export const getPrice = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(filtersPriceReceved(payload))
        dispatch(setActiveProducts())
}

export const getPresence = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(filtersPresenceReceved(payload))
        dispatch(setActiveProducts())
}

export const getAge = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(filtersAgeReceved(payload))
        dispatch(setActiveProducts())
}

export const getCategory = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(filtersCategoryReceved(payload))
        dispatch(setActiveProducts())
};

export const getSubcategory = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(filtersSubcategoryReceved(payload))
        dispatch(setActiveProducts())
}

export const changePlayers = (payload) =>  (dispatch) => {
    dispatch(setLoadingStatusLoading())
        dispatch(changePlayersReceved(payload))
        dispatch(setActiveProducts())
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
